"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var logger = winston_1.createLogger({
    level: 'info',
    format: winston_1.format.json(),
    transports: [
        new winston_1.transports.File({ filename: 'error.log', level: 'error' }),
        new winston_1.transports.File({ filename: 'info.log', level: 'info' }),
        new winston_1.transports.File({ filename: 'debug.log', level: 'debug' }),
        new winston_1.transports.File({ filename: 'combined.log' }),
    ],
});
if (process.env.NODE_ENV !== 'production') {
    logger.add(new winston_1.transports.Console({
        format: winston_1.format.simple(),
    }));
}
exports.default = logger;
//# sourceMappingURL=winston.createLogger.js.map