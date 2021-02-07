import initialize from './app';
import { Logger } from './util/winston.createLogger';

const port = process.env.PORT || 8000;

initialize().listen(port, () => Logger.info(`Server listen at: http://localhost:${port}`));
