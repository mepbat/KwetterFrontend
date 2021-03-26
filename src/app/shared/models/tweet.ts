export class tweet{
  id: number;
  text: string;
  date: Date;


  constructor(id: number, text: string, date: Date) {
    this.id = id;
    this.text = text;
    this.date = date;
  }
}
