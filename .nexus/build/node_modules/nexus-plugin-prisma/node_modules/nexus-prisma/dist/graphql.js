"use strict";
//
// GraphQL root types data & helpers
//
Object.defineProperty(exports, "__esModule", { value: true });
exports.isScalarType = exports.scalarsNameValues = exports.isRootName = exports.rootNameValues = exports.rootNames = void 0;
exports.rootNames = {
    Query: 'Query',
    Mutation: 'Mutation',
    Subscription: 'Subscription',
};
exports.rootNameValues = Object.values(exports.rootNames);
exports.isRootName = (x) => exports.rootNameValues.includes(x);
exports.scalarsNameValues = ['Int', 'Float', 'String', 'ID', 'Boolean'];
exports.isScalarType = (name) => exports.scalarsNameValues.includes(name);
//# sourceMappingURL=graphql.js.map