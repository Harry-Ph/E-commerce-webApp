"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = void 0;
const lodash_1 = require("lodash");
const utils_1 = require("../utils");
/**
 * Create an app settings component.
 *
 * @remarks
 *
 * The app settings component centralizes settings management of all other
 * components. Therefore it depends on the other components. It requires their
 * settings managers.
 */
function create(appState, { schemaSettings, serverSettings, log, }) {
    const api = {
        change(newSettings) {
            utils_1.assertAppNotAssembled(appState, 'app.settings.change', 'Your change of settings will be ignored.');
            if (newSettings.logger) {
                log.settings(newSettings.logger);
            }
            if (newSettings.schema) {
                schemaSettings.change(newSettings.schema);
            }
            if (newSettings.server) {
                serverSettings.change(newSettings.server);
            }
        },
        current: {
            logger: log.settings,
            schema: schemaSettings.data,
            server: serverSettings.data,
        },
        original: lodash_1.cloneDeep({
            logger: log.settings,
            schema: schemaSettings.data,
            server: serverSettings.data,
        }),
    };
    return {
        public: api,
        private: {
            reset() {
                schemaSettings.reset();
                serverSettings.reset();
                // todo
                // log.settings.reset()
            },
            assemble() {
                return {
                    settings: api.current,
                };
            },
        },
    };
}
exports.create = create;
//# sourceMappingURL=index.js.map