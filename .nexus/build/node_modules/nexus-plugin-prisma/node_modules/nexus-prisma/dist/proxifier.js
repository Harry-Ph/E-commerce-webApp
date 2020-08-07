"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.proxifyModelFunction = exports.proxifyPublishers = void 0;
const hooks_1 = require("./hooks");
const is_dev_mode_1 = require("./is-dev-mode");
function proxifyPublishers(publishers, typeName, stage, onUnknownFieldName) {
    if (!is_dev_mode_1.isDevMode()) {
        return publishers;
    }
    return new Proxy(publishers, {
        get(target, key) {
            if (target[key]) {
                return target[key];
            }
            const unknownFieldName = String(key);
            const message = `Your GraphQL \`${typeName}\` object definition is attempting to expose a Prisma model field called \`${unknownFieldName}\`, but your Prisma model \`${typeName}\` has no such field`;
            hooks_1.raiseErrorOrTriggerHook(onUnknownFieldName, {
                unknownFieldName,
                typeName,
                error: new Error(message),
                validFieldNames: Object.keys(publishers),
            }, message, stage);
            return () => { };
        },
    });
}
exports.proxifyPublishers = proxifyPublishers;
function proxifyModelFunction(modelFunc, modelName, stage, onUnknownPrismaModelName, unknownFieldsByModel) {
    var _a;
    if (stage === 'build' && ((_a = unknownFieldsByModel[modelName]) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        const wrongFieldsFormatted = unknownFieldsByModel[modelName].map((field) => `"${field}"`).join(', ');
        const message = `\
Your GraphQL \`${modelName}\` object definition is attempting to expose some Prisma model fields named \`${wrongFieldsFormatted}\`, but there is no such Prisma model called \`${modelName}\`
If this is not intentional, make sure you don't have a typo in your GraphQL type name \`${modelName}\`
If this is intentional, pass the mapped Prisma model name as parameter like so \`t.model('<PrismaModelName>').<FieldName>()\``;
        hooks_1.raiseErrorOrTriggerHook(onUnknownPrismaModelName, { unknownPrismaModelName: modelName, error: new Error() }, message, stage);
        /**
         * Reset fields index to prevent from adding the hook several times
         */
        unknownFieldsByModel[modelName] = [];
    }
    return new Proxy(modelFunc, {
        get(_target, key) {
            /**
             * Hack: Use the 'walk' stage to gather all wrong fields to batch the error into one console.log during the 'build' stage
             */
            if (stage === 'walk') {
                const fieldName = String(key);
                if (!unknownFieldsByModel[modelName]) {
                    unknownFieldsByModel[modelName] = [];
                }
                unknownFieldsByModel[modelName].push(fieldName);
            }
            return () => { };
        },
    });
}
exports.proxifyModelFunction = proxifyModelFunction;
//# sourceMappingURL=proxifier.js.map