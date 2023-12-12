import {
  HttpPostClient,
  HttpPostParams,
  HttpResponse,
  HttpStatusCode,
} from "@/data/protocols/http";

export class HttpPostClientSpy<ReqBody, ResBody>
  implements HttpPostClient<ReqBody, ResBody>
{
  url?: string;
  body?: ReqBody;
  response: HttpResponse<ResBody> = {
    statusCode: HttpStatusCode.ok,
    status: true,
  };

  async post({
    url,
    body,
  }: HttpPostParams<ReqBody>): Promise<HttpResponse<ResBody>> {
    this.url = url;
    this.body = body;
    return Promise.resolve(this.response);
  }
}
