"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builtinScalars = void 0;
const graphql_scalars_1 = require("graphql-scalars");
const graphql_1 = require("graphql");
exports.builtinScalars = {
    DateTime: graphql_scalars_1.DateTimeResolver,
    Json: new graphql_1.GraphQLScalarType(Object.assign(Object.assign({}, graphql_scalars_1.JSONObjectResolver), { name: 'Json', description: 'The `JSON` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf).' })),
};
//# sourceMappingURL=index.js.map