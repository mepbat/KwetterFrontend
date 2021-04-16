export class Follow{
  id: number;
  accountId: number;
  followingAccountId: number;
  account: Account;
  followingAccount: Account;


  constructor(id: number, accountId: number, followingAccountId: number, account: Account, followingAccount: Account) {
    this.id = id;
    this.accountId = accountId;
    this.followingAccountId = followingAccountId;
    this.account = account;
    this.followingAccount = followingAccount;
  }
}
