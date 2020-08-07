"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootLogger = exports.log = void 0;
const tslib_1 = require("tslib");
const Logger = tslib_1.__importStar(require("@nexus/logger"));
exports.log = Logger.log.child('nexus');
// Convenience explicitly named export for modules that want to import and crate
// child logger right away
exports.rootLogger = exports.log;
//# sourceMappingURL=nexus-logger.js.map