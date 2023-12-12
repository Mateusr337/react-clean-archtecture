export class InternalServerError extends Error {
  constructor() {
    super("Internal server error occured");
    this.name = "InternalServerError";
  }
}
