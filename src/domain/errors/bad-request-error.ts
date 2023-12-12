export class BadRequestError extends Error {
  constructor() {
    super("Bad request occured");
    this.name = "BadRequestError";
  }
}
