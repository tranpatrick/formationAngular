export class Item {
  name: string;
  reference: string;
  state: number;

  constructor(data: any) {
    this.name = data.name;
    this.reference = data.reference;
    this.state = data.state;
  }
}
