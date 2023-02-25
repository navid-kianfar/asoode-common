export class StringDictionary<T> {
  items: { [index: string]: T } = {};

  count = 0;

  public containsKey(key: string): boolean {
    return this.items.hasOwnProperty(key);
  }

  public length(): number {
    return this.count;
  }

  public add(key: string, value: T) {
    if (!this.items.hasOwnProperty(key)) {
      this.count++;
    }

    this.items[key] = value;
  }

  public remove(key: string): T {
    const val = this.items[key];
    delete this.items[key];
    this.count--;
    return val;
  }

  public item(key: string): T {
    return this.items[key];
  }

  public keys(): string[] {
    const keySet: string[] = [];

    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        keySet.push(prop);
      }
    }

    return keySet;
  }

  public values(): T[] {
    const values: T[] = [];

    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        values.push(this.items[prop]);
      }
    }

    return values;
  }
}

export class NumberDictionary<T> {
  items: { [index: number]: T } = {};

  count = 0;

  public containsKey(key: number): boolean {
    return this.items.hasOwnProperty(key);
  }

  public length(): number {
    return this.count;
  }

  public add(key: number, value: T) {
    if (!this.items.hasOwnProperty(key)) {
      this.count++;
    }

    this.items[key] = value;
  }

  public remove(key: number): T {
    const val = this.items[key];
    delete this.items[key];
    this.count--;
    return val;
  }

  public item(key: number): T {
    return this.items[key];
  }

  public keys(): number[] {
    const keySet: number[] = [];

    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        keySet.push(+prop);
      }
    }

    return keySet;
  }

  public values(): T[] {
    const values: T[] = [];

    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        values.push(this.items[prop]);
      }
    }

    return values;
  }
}
