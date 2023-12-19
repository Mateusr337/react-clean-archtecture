import { mockPostRequest } from "@/data/tests";
import { mockAxios } from "@/infra/tests";
import axios from "axios";
import { AxiosHttpClient } from ".";

jest.mock("axios");

type SutTypes = {
  sut: AxiosHttpClient;
  mockedAxios: jest.Mocked<typeof axios>;
};

const makeSut = (): SutTypes => {
  const sut = new AxiosHttpClient();
  const mockedAxios = mockAxios();
  return { sut, mockedAxios };
};

describe("AxiosHttpClient", () => {
  test("Should Call axios with the correct body values", async () => {
    const request = mockPostRequest();
    const { sut, mockedAxios } = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });
});
