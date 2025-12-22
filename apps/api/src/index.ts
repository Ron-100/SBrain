import { env } from "@repo/config/config";
import app from "./app";
import logger from "./config/logger.config";

const PORT = env.api.port;

app.listen(PORT, () => {
  logger.info(`Server started successfully => http://localhost:${PORT}/`, {
    port: PORT,
    environment: env.api.nodeEnv,
    url: `http://localhost:${PORT}/`,
  });
});

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
  logger.error('Uncaught Exception:', { error: error.message, stack: error.stack });
  process.exit(1);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  logger.error('Unhandled Rejection:', { reason, promise });
  process.exit(1);
});