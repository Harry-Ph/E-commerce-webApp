"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildWhereUniqueInput = exports.findMissingUniqueIdentifiers = exports.resolveUniqueIdentifiers = void 0;
/**
 * Find the unique identifiers necessary to indentify a field
 *
 * Unique fields for a model can be one of (in this order):
 * 1. One (and only one) field with an @id annotation
 * 2. Multiple fields with @@id clause
 * 3. One (and only one) field with a @unique annotation (if there are multiple, use the first one)
 * 4. Multiple fields with a @@unique clause
 */
function resolveUniqueIdentifiers(typeName, dmmf) {
    const model = dmmf.getModelOrThrow(typeName);
    // Try finding 1.
    const singleIdField = model.fields.find((f) => f.isId);
    if (singleIdField) {
        return [singleIdField.name];
    }
    // Try finding 2.
    if (model.idFields && model.idFields.length > 0) {
        return model.idFields;
    }
    const singleUniqueField = model.fields.find((f) => f.isUnique);
    if (singleUniqueField) {
        return [singleUniqueField.name];
    }
    if (model.uniqueFields && model.uniqueFields.length > 0) {
        return model.uniqueFields[0];
    }
    throw new Error(`Unable to resolve a unique identifier for the Prisma model: ${model.name}`);
}
exports.resolveUniqueIdentifiers = resolveUniqueIdentifiers;
function findMissingUniqueIdentifiers(data, uniqueIdentifiers) {
    const missingIdentifiers = [];
    for (const identifier of uniqueIdentifiers) {
        if (!data[identifier]) {
            missingIdentifiers.push(identifier);
        }
    }
    if (missingIdentifiers.length > 0) {
        return missingIdentifiers;
    }
    return null;
}
exports.findMissingUniqueIdentifiers = findMissingUniqueIdentifiers;
function buildWhereUniqueInput(data, uniqueIdentifiers) {
    if (uniqueIdentifiers.length === 1) {
        return pickFromRecord(data, uniqueIdentifiers);
    }
    const compoundName = uniqueIdentifiers.join('_');
    return {
        [compoundName]: pickFromRecord(data, uniqueIdentifiers),
    };
}
exports.buildWhereUniqueInput = buildWhereUniqueInput;
function pickFromRecord(record, keys) {
    const output = {};
    for (const identifier of keys) {
        if (record[identifier]) {
            output[identifier] = record[identifier];
        }
    }
    return output;
}
//# sourceMappingURL=constraints.js.map