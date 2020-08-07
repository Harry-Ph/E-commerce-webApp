"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.theme = exports.identity = exports.brightBlue = exports.blue = exports.darkBrightBlue = exports.orange = void 0;
const chalk = require('chalk');
exports.orange = chalk.rgb(246, 145, 95);
exports.darkBrightBlue = chalk.rgb(107, 139, 140);
exports.blue = chalk.cyan;
exports.brightBlue = chalk.rgb(127, 155, 155);
exports.identity = (str) => str;
exports.theme = {
    keyword: exports.blue,
    entity: exports.blue,
    value: exports.brightBlue,
    punctuation: exports.darkBrightBlue,
    directive: exports.blue,
    function: exports.blue,
    variable: exports.brightBlue,
    string: chalk.greenBright,
    boolean: exports.orange,
    number: chalk.cyan,
    comment: chalk.grey,
};
//# sourceMappingURL=theme.js.map