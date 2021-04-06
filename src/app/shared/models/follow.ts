export class Follow{
  id: number;
  accountId: number;
  followingAccountId: number;


  constructor(id: number, accountId: number, followingAccountId: number) {
    this.id = id;
    this.accountId = accountId;
    this.followingAccountId = followingAccountId;
  }
}
