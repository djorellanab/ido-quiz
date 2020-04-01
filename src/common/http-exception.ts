export default class HttpException extends Error {
    statusCode: number;
    message: string;
    error: string | null;
    __proto__: Error;
  
    constructor(statusCode: number, message: string, error?: string) {
      super(message);
      const trueProto = new.target.prototype;
      this.statusCode = statusCode;
      this.message = message;
      this.error = error || null;
      this.__proto__ = trueProto;
    }
  }