import {
  HttpPostClient,
  HttpPostParams,
} from "@/data/protocols/http/http-post-client";
import {
  HttpResponse,
  HttpStatusCode,
} from "@/data/protocols/http/http-response";

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
