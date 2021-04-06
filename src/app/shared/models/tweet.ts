export class Tweet {
  id: number;
  text: string;
  date: Date;
  username: string;


  constructor(id: number, text: string, date: Date, username: string) {
    this.id = id;
    this.text = text;
    this.date = date;
    this.username = username;
  }
}
