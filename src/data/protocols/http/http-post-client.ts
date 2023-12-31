import { HttpResponse } from ".";

export type HttpPostParams<ReqBody> = {
  url: string;
  body?: ReqBody;
};

export interface HttpPostClient<ReqBody, ResBody> {
  post(params: HttpPostParams<ReqBody>): Promise<HttpResponse<ResBody>>;
}
