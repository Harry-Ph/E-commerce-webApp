// GENERATED NEXUS START MODULE
// Run framework initialization side-effects
// Also, import the app for later use
import app from "nexus";
// Last resort error handling
process.once('uncaughtException', error => {
    app.log.fatal('uncaughtException', { error: error });
    process.exit(1);
});
process.once('unhandledRejection', error => {
    app.log.fatal('unhandledRejection', { error: error });
    process.exit(1);
});
// Import the user's schema modules
import './graphql/schema';
import './pages/api/graphql';
app.assemble();
app.start();
