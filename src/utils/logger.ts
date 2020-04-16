import {createLogger, format, transports, debug} from 'winston';

export function controlLog() {
    return createLogger({
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
    });
}