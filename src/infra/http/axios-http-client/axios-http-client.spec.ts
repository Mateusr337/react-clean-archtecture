import { HttpPostParams } from "@/data/protocols/http";
import { faker } from "@faker-js/faker";
import axios from "axios";
import { AxiosHttpClient } from ".";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;
const mockedAxiosResult = {
  data: faker.internet.email(),
  status: faker.number.int(),
};
mockedAxios.post.mockResolvedValue(mockedAxiosResult);

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: faker.internet.email(),
});

const makeSut = (): AxiosHttpClient => {
  return new AxiosHttpClient();
};

describe("AxiosHttpClient", () => {
  test("Should Call axios with the correct body values", async () => {
    const request = mockPostRequest();
    const sut = makeSut();
    await sut.post(request);
    expect(mockedAxios.post).toHaveBeenCalledWith(request.url, request.body);
  });

  test("Should return the correct stusCode and body", async () => {
    const sut = makeSut();
    const response = await sut.post(mockPostRequest());
    expect(response).toEqual({
      statusCode: mockedAxiosResult.status,
      body: mockedAxiosResult.data,
    });
  });
});
