import { AccountModel } from "@/domain/models";
import { mockAccountModel } from "@/domain/tests";
import { Authentication, AuthenticationParams } from "@/domain/usecases";

export class AuthenticationSpy implements Authentication {
  account: AccountModel;
  params: AuthenticationParams;
  callsCount: number;

  constructor() {
    this.account = mockAccountModel();
    this.callsCount = 0;
  }

  async auth(params: AuthenticationParams): Promise<AccountModel> {
    this.params = params;
    this.callsCount++;
    return Promise.resolve(this.account);
  }
}
