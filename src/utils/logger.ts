import {createLogger, format, transports, debug} from 'winston';

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.timestamp(),
        format.printf(info =>`[${info.timestamp}] ${info.level} ${info.message}`)
    ),
    transports: [
        new transports.File({
            maxsize:5120000,
            maxFiles: 50,
            filename: `${__dirname}/../logs/log-RipBack.log`
        }),
        new transports.Console({
            level: 'debug'
        })
    ]
})
console.log('logFile: ', `${__dirname}/../logs/log-RipBack.log`);