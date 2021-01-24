import express, { Response as ExResponse, Request as ExRequest } from 'express';
import cors from 'cors';
import rateLimit from 'express-rate-limit';
import compression from 'compression';
import helmet from 'helmet';
import swaggerUi from 'swagger-ui-express';
import { RegisterRoutes } from '../build/routes';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
});

const initialize = () => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(compression());
  app.use(cors());
  app.use(helmet());
  app.use(limiter);
  app.use('/docs', swaggerUi.serve, async (_req: ExRequest, res: ExResponse) => {
    return res.send(swaggerUi.generateHTML(await import('../build/swagger.json')));
  });
  RegisterRoutes(app);
  app.enable('trust proxy');
  return app;
};

export default initialize;
