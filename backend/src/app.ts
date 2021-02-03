import express, { Response as ExResponse, Request as ExRequest } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from '../build/routes';
import { errorHandler, notFoundHandler } from './middleware.app';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const initialize = () => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(compression());
  app.use(cors());
  app.use(helmet());
  app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(swaggerUi.generateHTML(await import('../build/swagger.json')));
  });
  app.use(limiter);
  app.enable('trust proxy');
  RegisterRoutes(app);
  return app;
};

export default initialize;
