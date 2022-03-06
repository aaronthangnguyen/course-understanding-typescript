class Department {
  #name: string;
  #employees: string[] = [];

  constructor(name: string) {
    this.#name = name;
  }
  get name() {
    return this.#name;
  }
  set name(value: string) {
    this.#name = value;
  }

  describe(this: Department) {
    console.log(`Department ${this.name}`);
  }

  add(employee: string) {
    this.#employees.push(employee);
  }
  get employees() {
    return this.#employees;
  }
  set employees(value: string[]) {
    this.#employees = value;
  }
}

const accounting = new Department("Accounting");
console.log(accounting);
accounting.add("Max");
accounting.add("Emily");
console.log(accounting.employees);
