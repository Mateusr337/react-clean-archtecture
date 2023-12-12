import { faker } from "@faker-js/faker";
import { AccountModel } from "../models/account-model";

export const mockAccountModel = (): AccountModel => ({
  accessToken: faker.string.uuid(),
});
