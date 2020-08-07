"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createWorktimeLens = exports.createRuntimeLens = exports.createBaseLens = void 0;
const tslib_1 = require("tslib");
const Lo = tslib_1.__importStar(require("lodash"));
const prompts_1 = tslib_1.__importDefault(require("prompts"));
const nexus_logger_1 = require("../nexus-logger");
const Process = tslib_1.__importStar(require("../process"));
const stage_1 = require("../reflection/stage");
const log = nexus_logger_1.rootLogger.child('plugin');
function createBaseLens(pluginName) {
    return {
        log: log.child(Lo.camelCase(pluginName)),
        run: Process.run,
        runSync: Process.runSync,
        prompt: prompts_1.default,
    };
}
exports.createBaseLens = createBaseLens;
function createRuntimeLens(pluginName, scalars) {
    return Object.assign(Object.assign({}, createBaseLens(pluginName)), { shouldGenerateArtifacts: stage_1.isReflectionStage('typegen'), scalars });
}
exports.createRuntimeLens = createRuntimeLens;
function createWorktimeLens(layout, pluginName) {
    return Object.assign(Object.assign({}, createBaseLens(pluginName)), { layout: layout, packageManager: layout.packageManager, hooks: {
            create: {},
            dev: {
                addToWatcherSettings: {},
            },
            build: {},
            generate: {},
        } });
}
exports.createWorktimeLens = createWorktimeLens;
//# sourceMappingURL=lens.js.map