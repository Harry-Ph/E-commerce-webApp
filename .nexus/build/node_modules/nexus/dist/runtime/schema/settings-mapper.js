"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapSettingsAndPluginsToNexusSchemaConfig = void 0;
const tslib_1 = require("tslib");
/**
 * This module is concerned with mapping Nexus framework schema component settings to Nexus schema standalone component.
 */
const NexusSchema = tslib_1.__importStar(require("@nexus/schema"));
const logger_1 = require("./logger");
const log = logger_1.log.child('settings');
function mapSettingsAndPluginsToNexusSchemaConfig(frameworkPlugins, settings) {
    var _a, _b, _c, _d, _e, _f;
    const baseConfig = {
        nonNullDefaults: {
            input: !((_b = (_a = settings === null || settings === void 0 ? void 0 : settings.nullable) === null || _a === void 0 ? void 0 : _a.inputs) !== null && _b !== void 0 ? _b : true),
            output: !((_d = (_c = settings === null || settings === void 0 ? void 0 : settings.nullable) === null || _c === void 0 ? void 0 : _c.outputs) !== null && _d !== void 0 ? _d : true),
        },
        typegenAutoConfig: {
            sources: [],
        },
        types: [],
        plugins: [],
        // Always false here, then set to true in the reflection module
        outputs: false,
        shouldGenerateArtifacts: false,
        shouldExitAfterGenerateArtifacts: false,
    };
    baseConfig.plugins.push(...mapConnectionsSettingsToNexusSchemaConfig(settings));
    if (settings.authorization !== false) {
        baseConfig.plugins.push(NexusSchema.fieldAuthorizePlugin(settings.authorization));
    }
    // Merge the plugin nexus plugins
    for (const frameworkPlugin of frameworkPlugins) {
        const schemaPlugins = (_f = (_e = frameworkPlugin.schema) === null || _e === void 0 ? void 0 : _e.plugins) !== null && _f !== void 0 ? _f : [];
        baseConfig.plugins.push(...schemaPlugins);
    }
    log.trace('config built', { config: baseConfig });
    return baseConfig;
}
exports.mapSettingsAndPluginsToNexusSchemaConfig = mapSettingsAndPluginsToNexusSchemaConfig;
/**
 * Specialized mapping for the complexity of relay connections plugins.
 */
function mapConnectionsSettingsToNexusSchemaConfig(settings) {
    const instances = [];
    const _a = settings.connections, { default: defaultTypeConfig } = _a, customTypesConfig = tslib_1.__rest(_a, ["default"]);
    for (const [name, config] of Object.entries(customTypesConfig)) {
        if (config) {
            instances.push(NexusSchema.connectionPlugin(Object.assign({ nexusFieldName: name }, config)));
        }
    }
    if (defaultTypeConfig) {
        instances.push(NexusSchema.connectionPlugin(defaultTypeConfig));
    }
    return instances;
}
//# sourceMappingURL=settings-mapper.js.map