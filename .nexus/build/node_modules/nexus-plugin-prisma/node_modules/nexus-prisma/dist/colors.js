"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.colors = void 0;
const ansiColors = {
    red: '\u001b[31m',
    green: '\u001b[32m',
    yellow: '\u001b[33m',
    blue: '\u001b[34m',
    magenta: '\u001b[35m',
    cyan: '\u001b[36m',
    reset: '\u001b[39m',
};
function logColor(str, color) {
    return `${ansiColors[color]}${str}${ansiColors.reset}`;
}
exports.colors = {
    yellow: (str) => logColor(str, 'yellow'),
    red: (str) => logColor(str, 'red'),
    green: (str) => logColor(str, 'green'),
    blue: (str) => logColor(str, 'blue'),
    magenta: (str) => logColor(str, 'magenta'),
    cyan: (str) => logColor(str, 'cyan'),
};
//# sourceMappingURL=colors.js.map