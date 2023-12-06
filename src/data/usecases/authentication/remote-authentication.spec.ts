import { HttpPostClientSpy } from "../../test/mock-http-client";
import { RemoteAuthentication } from "./remote-authentication";

describe("Remote Authentication", () => {
  test("Should call HttpClient with correct URL", async () => {
    const url = "";
    const httpPostClientSpy = new HttpPostClientSpy();
    const sut = new RemoteAuthentication(url, httpPostClientSpy);
    await sut.auth();
    expect(httpPostClientSpy.url).toBe(url);
  });
});
