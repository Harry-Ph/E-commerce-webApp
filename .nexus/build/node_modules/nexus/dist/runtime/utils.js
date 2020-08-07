"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assembledGuard = exports.assertAppIsAssembledBeforePropAccess = exports.assertAppNotAssembled = void 0;
const tslib_1 = require("tslib");
const chalk_1 = tslib_1.__importDefault(require("chalk"));
const common_tags_1 = require("common-tags");
const nexus_logger_1 = require("../lib/nexus-logger");
const process_1 = require("../lib/process");
const stage_1 = require("../lib/reflection/stage");
/**
 * For a the given method that would not work if the app is assembled, log a
 * warning if the app is assembled.
 */
function assertAppNotAssembled(appState, methodName, message) {
    if (appState.assembled) {
        // todo make this fatal in prod
        nexus_logger_1.log.warn(common_tags_1.stripIndent `
      Cannot call ${chalk_1.default.yellow(methodName)}(...) after app.assemble()

      ${message}
    `);
    }
}
exports.assertAppNotAssembled = assertAppNotAssembled;
/**
 * For a given property that would not work if the app is _not_ assembled, log
 * and crash if the app is _not_ assembled.
 */
function assertAppIsAssembledBeforePropAccess(appState, propName, message) {
    if (!appState.assembled) {
        let msg = '';
        msg += `Must access ${chalk_1.default.yellow(propName)} after app.assemble()`;
        if (message) {
            msg += `\n\n${message}`;
        }
        process_1.fatal(msg);
    }
}
exports.assertAppIsAssembledBeforePropAccess = assertAppIsAssembledBeforePropAccess;
/**
 * Guard that a piece of logic can only run post-assembly. If assembly has not
 * yet taken place the process will exit with a useful error messge. If the
 * execution mode is reflection, then this is a noop. That does mean that the
 * caller must be prepared to deal with undefined.
 */
function assembledGuard(appState, propName, f) {
    if (stage_1.isReflection())
        return;
    assertAppIsAssembledBeforePropAccess(appState, propName);
    return f();
}
exports.assembledGuard = assembledGuard;
//# sourceMappingURL=utils.js.map