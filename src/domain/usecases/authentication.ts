import { AccountModel } from "../models/account-model";

type AuthenticationData = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(data: AuthenticationData): Promise<AccountModel>;
}
