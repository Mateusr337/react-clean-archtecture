import { AccountModel } from "@/domain/models/account-model";

export type AuthenticationParams = {
  email: string;
  password: string;
};

export interface Authentication {
  auth(data: AuthenticationParams): Promise<AccountModel>;
}
