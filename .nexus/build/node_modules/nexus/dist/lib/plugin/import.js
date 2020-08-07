"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importPluginDimension = void 0;
const common_tags_1 = require("common-tags");
const process_1 = require("../process");
/**
 * Import the dimension of a plugin.
 */
function importPluginDimension(dimension, manifest) {
    // Should be guaranteed by importPluginDimensions
    if (!manifest[dimension]) {
        process_1.fatal(`We could not find the ${dimension} dimension of the Nexus plugin "${manifest.name}"`, {
            plugin: manifest,
        });
    }
    const dimensionEntrypoint = manifest[dimension];
    try {
        const dimensionModule = require(dimensionEntrypoint.module);
        if (!dimensionModule[dimensionEntrypoint.export]) {
            process_1.fatal(`Nexus plugin "${manifest.name}" has no export \`${dimensionEntrypoint.export}\` in ${dimensionEntrypoint.module}`, { plugin: manifest });
        }
        const plugin = dimensionModule[dimensionEntrypoint.export];
        if (typeof plugin !== 'function') {
            process_1.fatal(`Nexus plugin "${manifest.name}" does not export a valid ${dimension} plugin`, {
                plugin: manifest,
            });
        }
        const innerPlugin = plugin(manifest.settings);
        if (typeof innerPlugin !== 'function') {
            process_1.fatal(`Nexus plugin "${manifest.name}" does not export a valid ${dimension} plugin`, {
                plugin: manifest,
            });
        }
        return innerPlugin;
    }
    catch (error) {
        process_1.fatal(common_tags_1.stripIndent `
        An error occured while loading the Nexus plugin "${manifest.name}":

        ${error}
      `, { plugin: manifest });
    }
}
exports.importPluginDimension = importPluginDimension;
//# sourceMappingURL=import.js.map