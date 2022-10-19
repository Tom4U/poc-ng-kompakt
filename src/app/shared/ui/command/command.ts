export class Command {
  constructor(
    public name: string,
    public command: Function,
    public active: Function
  ) {}
}
