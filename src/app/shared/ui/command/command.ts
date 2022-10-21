export class Command {
  constructor(
    public name: string,
    public path: string,
    public show: Function
  ) {}
}
