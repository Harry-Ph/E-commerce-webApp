"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidPlugin = exports.filterValidPlugins = exports.importAndLoadTesttimePlugins = exports.importAndLoadWorktimePlugins = exports.importAndLoadRuntimePlugins = void 0;
const tslib_1 = require("tslib");
const common_tags_1 = require("common-tags");
const Either_1 = require("fp-ts/lib/Either");
const Lo = tslib_1.__importStar(require("lodash"));
const nexus_logger_1 = require("../nexus-logger");
const utils_1 = require("../utils");
const import_1 = require("./import");
const lens_1 = require("./lens");
const manifest_1 = require("./manifest");
const log = nexus_logger_1.rootLogger.child('plugin');
/**
 * Fully import and load the runtime plugins, if any, amongst the given plugins.
 */
function importAndLoadRuntimePlugins(plugins, scalars) {
    const validPlugins = filterValidPlugins(plugins);
    const gotManifests = manifest_1.getPluginManifests(validPlugins);
    if (gotManifests.errors)
        manifest_1.showManifestErrorsAndExit(gotManifests.errors);
    return gotManifests.data
        .filter((m) => m.runtime)
        .map((m) => {
        return {
            run: import_1.importPluginDimension('runtime', m),
            manifest: m,
        };
    })
        .map((plugin) => {
        log.trace('loading runtime plugin', { name: plugin.manifest.name });
        return plugin.run(lens_1.createRuntimeLens(plugin.manifest.name, scalars));
    });
}
exports.importAndLoadRuntimePlugins = importAndLoadRuntimePlugins;
/**
 * Fully import and load the worktime plugins, if any, amongst the given plugins.
 */
function importAndLoadWorktimePlugins(plugins, layout) {
    const validPlugins = filterValidPlugins(plugins);
    const gotManifests = manifest_1.getPluginManifests(validPlugins);
    if (gotManifests.errors)
        manifest_1.showManifestErrorsAndExit(gotManifests.errors);
    return gotManifests.data
        .filter((m) => m.worktime)
        .map((m) => {
        return {
            run: import_1.importPluginDimension('worktime', m),
            manifest: m,
        };
    })
        .map((plugin) => {
        log.trace('loading worktime plugin', { name: plugin.manifest.name });
        const lens = lens_1.createWorktimeLens(layout, plugin.manifest.name);
        plugin.run(lens);
        return {
            name: plugin.manifest.name,
            // plugin will have hooked onto hooks via mutation now, and framework
            // will call those hooks
            hooks: lens.hooks,
        };
    });
}
exports.importAndLoadWorktimePlugins = importAndLoadWorktimePlugins;
/**
 * Fully import and load the testtime plugins, if any, amongst the given plugins.
 */
function importAndLoadTesttimePlugins(plugins) {
    const validPlugins = filterValidPlugins(plugins);
    const gotManifests = manifest_1.getPluginManifests(validPlugins);
    if (gotManifests.errors)
        manifest_1.showManifestErrorsAndExit(gotManifests.errors);
    return gotManifests.data
        .filter((m) => m.testtime)
        .map((m) => {
        return {
            run: import_1.importPluginDimension('testtime', m),
            manifest: m,
        };
    })
        .map((plugin) => {
        log.trace('loading testtime plugin', { name: plugin.manifest.name });
        const contribution = plugin.run(lens_1.createBaseLens(plugin.manifest.name));
        if (!Lo.isPlainObject(contribution)) {
            return Either_1.left(new Error(common_tags_1.stripIndent `Ignoring the testtime contribution from the Nexus plugin \`${plugin.manifest.name}\` because its contribution is not an object.
        This is likely to cause an error in your tests. Please reach out to the author of the plugin to fix the issue.`));
        }
        return Either_1.right(contribution);
    });
}
exports.importAndLoadTesttimePlugins = importAndLoadTesttimePlugins;
/**
 * Return only valid plugins. Invalid plugins will be logged as a warning.
 */
function filterValidPlugins(plugins) {
    const [validPlugins, invalidPlugins] = utils_1.partition(plugins, isValidPlugin);
    if (invalidPlugins.length > 0) {
        log.warn(`Some invalid plugins were passed to Nexus. They are being ignored.`, {
            invalidPlugins,
        });
    }
    return validPlugins;
}
exports.filterValidPlugins = filterValidPlugins;
/**
 * Predicate function, is the given plugin a valid one.
 */
function isValidPlugin(plugin) {
    const hasPackageJsonPath = 'packageJsonPath' in plugin;
    return hasPackageJsonPath;
}
exports.isValidPlugin = isValidPlugin;
//# sourceMappingURL=load.js.map