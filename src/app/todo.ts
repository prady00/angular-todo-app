export class Todo {
  id: number;
  title = '';
  isComplete = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
