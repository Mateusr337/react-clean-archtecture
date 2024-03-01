import { Authentication, AuthenticationParams } from "@/domain/usecases";
import { AccountModel } from "@/domain/models";
import { mockAccountModel } from "@/domain/tests";

export class AuthenticationSpy implements Authentication {
  account: AccountModel;
  params: AuthenticationParams;

  constructor() {
    this.account = mockAccountModel();
  }

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    this.params = params;
    return Promise.resolve(this.account);
  }
}
