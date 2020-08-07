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
exports.getPrismaClientDir = exports.getPrismaClientInstance = void 0;
const Path = __importStar(require("path"));
const linkable_1 = require("./linkable");
/**
 * Makes sure `@prisma/client` is copied to ZEIT Now by statically requiring `@prisma/client`
 * We do not use this import because we need to require the Prisma Client using `linkableRequire`.
 */
require('@prisma/client');
let prismaClientInstance = null;
function isPrismaClient(clientInstance) {
    const hasConnect = clientInstance && typeof clientInstance.connect === 'function';
    const hasDisconnect = clientInstance && typeof clientInstance.disconnect === 'function';
    return hasConnect && hasDisconnect;
}
function isPrismaClientOptions(clientOrOptions) {
    return clientOrOptions && clientOrOptions.options !== null && typeof clientOrOptions.options === 'object';
}
function instantiatePrismaClient(clientOrOptions, log) {
    if (!clientOrOptions) {
        const { PrismaClient } = linkable_1.linkableRequire('@prisma/client');
        return new PrismaClient();
    }
    if (isPrismaClientOptions(clientOrOptions)) {
        const { PrismaClient } = linkable_1.linkableRequire('@prisma/client');
        return new PrismaClient(clientOrOptions.options);
    }
    if (!isPrismaClient(clientOrOptions.instance)) {
        log.fatal('The Prisma Client instance you passed is not valid. Make sure it was generated.');
        process.exit(1);
    }
    return clientOrOptions.instance;
}
function getPrismaClientInstance(clientOrOptions, log) {
    if (!prismaClientInstance) {
        prismaClientInstance = instantiatePrismaClient(clientOrOptions, log);
    }
    return prismaClientInstance;
}
exports.getPrismaClientInstance = getPrismaClientInstance;
// HACK
// 1. https://prisma-company.slack.com/archives/C8AKVD5HU/p1574267904197600
// 2. https://prisma-company.slack.com/archives/CEYCG2MCN/p1574267824465700
function getPrismaClientDir() {
    return Path.dirname(linkable_1.linkableResolve('.prisma/client'));
}
exports.getPrismaClientDir = getPrismaClientDir;
//# sourceMappingURL=prisma-client.js.map