"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultFieldNamingStrategy = exports.defaultArgsNamingStrategy = void 0;
const pluralize_1 = __importDefault(require("pluralize"));
const utils_1 = require("./utils");
const camelcase_1 = __importDefault(require("camelcase"));
exports.defaultArgsNamingStrategy = {
    whereInput(typeName, fieldName) {
        return `${utils_1.upperFirst(typeName)}${utils_1.upperFirst(fieldName)}WhereInput`;
    },
    orderByInput(typeName, fieldName) {
        return `${utils_1.upperFirst(typeName)}${utils_1.upperFirst(fieldName)}OrderByInput`;
    },
    relationFilterInput(typeName, fieldName) {
        return `${utils_1.upperFirst(typeName)}${utils_1.upperFirst(fieldName)}Filter`;
    },
};
exports.defaultFieldNamingStrategy = {
    findOne: (_, modelName) => camelcase_1.default(modelName),
    findMany: (_, modelName) => camelcase_1.default(pluralize_1.default(modelName)),
    create: (fieldName) => fieldName,
    update: (fieldName) => fieldName,
    delete: (fieldName) => fieldName,
    deleteMany: (fieldName) => fieldName,
    updateMany: (fieldName) => fieldName,
    upsert: (fieldName) => fieldName,
};
//# sourceMappingURL=naming-strategies.js.map