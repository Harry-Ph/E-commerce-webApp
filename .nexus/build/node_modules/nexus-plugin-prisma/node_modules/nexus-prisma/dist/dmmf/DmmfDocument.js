"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutputType = exports.DmmfDocument = void 0;
const utils_1 = require("../utils");
const graphql_1 = require("../graphql");
class DmmfDocument {
    constructor({ datamodel, schema, mappings }) {
        this.outputTypesIndex = {};
        // ExternalDMMF
        this.datamodel = datamodel;
        this.schema = schema;
        this.mappings = mappings;
        // Indices
        this.modelsIndex = utils_1.indexBy(datamodel.models, 'name');
        this.enumsIndex = utils_1.indexBy(schema.enums, 'name');
        this.inputTypesIndex = utils_1.indexBy(schema.inputTypes, 'name');
        this.outputTypesIndex = utils_1.indexBy(schema.outputTypes, 'name');
        this.mappingsIndex = utils_1.indexBy(mappings, 'model');
        this.inputTypesIndexWithFields = indexInputTypeWithFields(schema.inputTypes);
        this.customScalars = findCustomScalars(datamodel.models);
        // Entrypoints
        this.queryObject = this.getOutputType('Query');
        this.mutationObject = this.getOutputType('Mutation');
    }
    getInputType(inputTypeName) {
        const inputType = this.inputTypesIndex[inputTypeName];
        if (!inputType) {
            throw new Error('Could not find input type name: ' + inputTypeName);
        }
        return inputType;
    }
    getInputTypeWithIndexedFields(inputTypeName) {
        const inputType = this.inputTypesIndexWithFields[inputTypeName];
        if (!inputType) {
            throw new Error('Could not find input type name: ' + inputTypeName);
        }
        return inputType;
    }
    getOutputType(outputTypeName) {
        const outputType = this.outputTypesIndex[outputTypeName];
        if (!outputType) {
            throw new Error('Could not find output type name: ' + outputTypeName);
        }
        return new OutputType(outputType);
    }
    hasOutputType(outputTypeName) {
        const outputType = this.outputTypesIndex[outputTypeName];
        if (!outputType) {
            return false;
        }
        return true;
    }
    getEnumType(enumTypeName) {
        const enumType = this.enumsIndex[enumTypeName];
        if (!enumType) {
            throw new Error('Could not find enum type name: ' + enumTypeName);
        }
        return enumType;
    }
    hasEnumType(enumTypeName) {
        const enumType = this.enumsIndex[enumTypeName];
        if (!enumType) {
            return false;
        }
        return true;
    }
    getModelOrThrow(modelName) {
        const model = this.modelsIndex[modelName];
        if (!model) {
            throw new Error('Could not find model for model: ' + modelName);
        }
        return model;
    }
    hasModel(modelName) {
        const model = this.modelsIndex[modelName];
        if (!model) {
            return false;
        }
        return true;
    }
    getMapping(modelName) {
        const mapping = this.mappingsIndex[modelName];
        if (!mapping) {
            throw new Error('Could not find mapping for model: ' + modelName);
        }
        return mapping;
    }
}
exports.DmmfDocument = DmmfDocument;
class OutputType {
    constructor(outputType) {
        this.outputType = outputType;
        this.name = outputType.name;
        this.fields = outputType.fields;
        this.isEmbedded = outputType.isEmbedded;
    }
    getField(fieldName) {
        const field = this.outputType.fields.find((f) => f.name === fieldName);
        if (!field) {
            throw new Error(`Could not find field '${this.outputType.name}.${fieldName}' on type ${this.outputType.name}`);
        }
        return field;
    }
}
exports.OutputType = OutputType;
function indexInputTypeWithFields(inputTypes) {
    const indexedInputTypes = {};
    for (const inputType of inputTypes) {
        const indexedFields = utils_1.indexBy(inputType.fields, 'name');
        indexedInputTypes[inputType.name] = Object.assign(Object.assign({}, inputType), { fields: indexedFields });
    }
    return indexedInputTypes;
}
function findCustomScalars(models) {
    const customScalars = new Set();
    for (const model of models) {
        for (const field of model.fields) {
            if (field.kind === 'scalar' && !graphql_1.scalarsNameValues.includes(field.type)) {
                customScalars.add(field.type);
            }
        }
    }
    return [...customScalars];
}
//# sourceMappingURL=DmmfDocument.js.map