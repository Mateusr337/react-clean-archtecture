import { HttpStatusCode } from "@/data/protocols/http";
import { HttpPostClientSpy } from "@/data/tests";
import {
  BadRequestError,
  InternalServerError,
  InvalidCredentialsError,
  NotFoundError,
} from "@/domain/errors";
import { AccountModel } from "@/domain/models";
import { mockAccountModel, mockAuthentication } from "@/domain/tests";
import { AuthenticationParams } from "@/domain/usecases";
import { faker } from "@faker-js/faker";
import { RemoteAuthentication } from ".";

type SutTypes = {
  sut: RemoteAuthentication;
  httpPostClientSpy: HttpPostClientSpy<AuthenticationParams, AccountModel>;
};

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy<
    AuthenticationParams,
    AccountModel
  >();
  const sut = new RemoteAuthentication(url, httpPostClientSpy);
  return { sut, httpPostClientSpy };
};

describe("Remote Authentication", () => {
  test("Should call HttpClient with correct URL", async () => {
    const url = faker.internet.url();
    const { sut, httpPostClientSpy } = makeSut(url);
    await sut.auth(mockAuthentication());
    expect(httpPostClientSpy.url).toBe(url);
  });

  test("Should call HttpClient with correct body", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const mockAuthParams = mockAuthentication();
    await sut.auth(mockAuthParams);
    expect(httpPostClientSpy.body).toEqual(mockAuthParams);
  });

  test("Should throw InvalidCredentialsError if HttpPostClient returns unauthorized-401", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.unauthorized,
    };
    const promise = sut.auth(mockAuthentication());
    expect(promise).rejects.toThrow(new InvalidCredentialsError());
  });

  test("Should throw BadRequestError if HttpPostClient returns badRequest-400", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.badRequest,
    };
    const promise = sut.auth(mockAuthentication());
    expect(promise).rejects.toThrow(new BadRequestError());
  });

  test("Should throw InternalServerError if HttpPostClient returns internal-500", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.internal,
    };
    const promise = sut.auth(mockAuthentication());
    expect(promise).rejects.toThrow(new InternalServerError());
  });

  test("Should throw NotFoundError if HttpPostClient returns notFound-404", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.notFound,
    };
    const promise = sut.auth(mockAuthentication());
    expect(promise).rejects.toThrow(new NotFoundError());
  });

  test("Should return AccountModel if HttpPostClient returns ok-200", async () => {
    const { sut, httpPostClientSpy } = makeSut();
    const httpResult = mockAccountModel();

    httpPostClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult,
    };
    const response = await sut.auth(mockAuthentication());
    expect(response).toEqual(httpResult);
  });
});
