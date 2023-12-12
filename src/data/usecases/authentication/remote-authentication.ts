import { HttpPostClient } from "@/data/protocols/http/http-post-client";
import { HttpStatusCode } from "@/data/protocols/http/http-response";
import { BadRequestError } from "@/domain/errors/bad-request-error";
import { InternalServerError } from "@/domain/errors/internal-server-error";
import { InvalidCredentialsError } from "@/domain/errors/invalid-credential-error";
import { NotFoundError } from "@/domain/errors/not-found-error";
import { AccountModel } from "@/domain/models/account-model";
import {
  Authentication,
  AuthenticationParams,
} from "@/domain/usecases/authentication";

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<
      AuthenticationParams,
      AccountModel
    >
  ) {}

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params,
    });

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body;

      case HttpStatusCode.unathorized:
        throw new InvalidCredentialsError();

      case HttpStatusCode.badRequest:
        throw new BadRequestError();

      case HttpStatusCode.notFound:
        throw new NotFoundError();

      default:
        throw new InternalServerError();
    }
  }
}
