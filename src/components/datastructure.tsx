// Data structure for specific values
export class Data {
  title;
  author;
  url;
  thumbnail;

  constructor(data: any) {
    this.title = data.title;
    this.author = data.author;
    this.url = data.url;
    this.thumbnail = data.thumbnail;
  }
}
