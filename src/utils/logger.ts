import chalk from 'chalk';

enum LogLevel {
  INFO = '{INFO}',
  DEBUG = '{DEBUG}',
  ERROR = '{ERROR}',
  WARN = '{WARN}'
}

export class Logger {
  private static log(level: string, message: string | object, misc?: any): void {
    const logMessage = `${level} - ${JSON.stringify(message)}`;
    if (misc) {
      console.log(logMessage, misc);
    } else {
      console.log(logMessage);
    }
  }

  static info(message: string | object, misc?: any): void {
    Logger.log(chalk.blue(LogLevel.INFO), message, misc);
  }

  static debug(message: string | object, misc?: any): void {
    Logger.log(chalk.yellow(LogLevel.DEBUG), message, misc);
  }

  static error(message: string | object, misc?: any): void {
    Logger.log(chalk.bgRed(LogLevel.ERROR), message, misc);
  }

  static warn(message: string | object, misc?: any): void {
    Logger.log(chalk.red.underline(LogLevel.WARN), message, misc);
  }
}
