import { HttpResponse } from "./http-response";

export type HttpPostParams<ReqBody> = {
  url: string;
  body?: ReqBody;
};

export interface HttpPostClient<ReqBody, ResBody> {
  post(params: HttpPostParams<ReqBody>): Promise<HttpResponse<ResBody>>;
}
