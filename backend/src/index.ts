import "reflect-metadata";
import { env } from '@/utils/envConfig';
import { app, logger } from '@/server';
import { AppDataSource } from '@/database/data-source';

(async () => {
    try {
        await AppDataSource.initialize()
        logger.info(`Database connected to ${env.POSTGRES_DB} at ${env.POSTGRES_HOST}:${env.POSTGRES_PORT}`);

        const server = app.listen(env.PORT, () => {
            const { NODE_ENV, HOST, PORT } = env;
            logger.info(`Server (${NODE_ENV}) running on port http://${HOST}:${PORT}`);
          });
        
        const onCloseSignal = () => {
            logger.info('sigint received, shutting down');
            server.close(() => {
                logger.info('server closed');
                process.exit();
            });
            setTimeout(() => process.exit(1), 10000).unref(); // Force shutdown after 10s
        };

        process.on('SIGINT', onCloseSignal);
        process.on('SIGTERM', onCloseSignal);
    } catch (error) {
        logger.error(error);
        process.exit(1);
    }
})();