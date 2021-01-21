import initialize from './app';
import logger from '../util/winston.createLogger'

const port = process.env.PORT || 8000;

initialize().listen(port, () =>
  logger.info(`Server listen`, {message: `Example app listening at: http://localhost:${port} `} )
);