import {Express, default as express} from "express";
import cors from 'cors';
import rateLimit  from 'express-rate-limit';
import compression from 'compression';
import helmet from 'helmet';

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});


const initialize = (): Express => {
  const app = express();
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(compression())
  app.use(cors());
  app.use(helmet());
  app.use(limiter);
  app.enable('trust proxy'); 
  return app;
};


export default initialize;
