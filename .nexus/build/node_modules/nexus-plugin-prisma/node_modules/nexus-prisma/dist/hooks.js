"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raiseErrorOrTriggerHook = void 0;
const colors_1 = require("./colors");
const is_dev_mode_1 = require("./is-dev-mode");
function raiseErrorOrTriggerHook(hook, params, message, stage) {
    if (stage === 'build') {
        if (is_dev_mode_1.isDevMode()) {
            if (hook) {
                ;
                hook(params);
            }
            else {
                const formattedMessage = message
                    .split('\n')
                    .filter((m) => m.trim().length > 0)
                    .map((m) => `${colors_1.colors.yellow('Warning:')} ${m}`)
                    .join('\n');
                console.log(formattedMessage + '\n');
            }
        }
        else {
            throw new Error(message);
        }
    }
}
exports.raiseErrorOrTriggerHook = raiseErrorOrTriggerHook;
//# sourceMappingURL=hooks.js.map