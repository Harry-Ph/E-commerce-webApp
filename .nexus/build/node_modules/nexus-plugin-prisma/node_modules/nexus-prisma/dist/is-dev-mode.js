"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDevMode = void 0;
function isDevMode() {
    return Boolean(!process.env.NODE_ENV || process.env.NODE_ENV === 'development');
}
exports.isDevMode = isDevMode;
//# sourceMappingURL=is-dev-mode.js.map