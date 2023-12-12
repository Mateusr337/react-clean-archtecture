export class NotFoundError extends Error {
  constructor() {
    super("Not found required data");
    this.name = "NotFoundError";
  }
}
