"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.highlightTS = void 0;
const Prism = __importStar(require("prismjs"));
const theme_1 = require("./theme");
Prism.languages.typescript = Prism.languages.extend('javascript', {
    // From JavaScript Prism keyword list and TypeScript language spec: https://github.com/Microsoft/TypeScript/blob/master/doc/spec.md#221-reserved-words
    keyword: /\b(?:abstract|as|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|var|void|while|with|yield)\b/,
    builtin: /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
});
function highlightTS(str) {
    return highlightForTerminal(str, Prism.languages.typescript);
}
exports.highlightTS = highlightTS;
function stringifyToken(t, language) {
    if (typeof t == 'string') {
        return t;
    }
    if (Array.isArray(t)) {
        return t
            .map(function (element) {
            return stringifyToken(element, language);
        })
            .join('');
    }
    return getColorForSyntaxKind(t.type)(t.content.toString());
}
function getColorForSyntaxKind(syntaxKind) {
    return theme_1.theme[syntaxKind] || theme_1.identity;
}
function highlightForTerminal(str, grammar) {
    const tokens = Prism.tokenize(str, grammar);
    return tokens.map((t) => stringifyToken(t)).join('');
}
//# sourceMappingURL=highlight-ts.js.map