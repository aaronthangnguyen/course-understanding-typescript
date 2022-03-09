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

  addEmployee(employee: string) {
    this.#employees.push(employee);
  }
  get employees() {
    return this.#employees;
  }
}

const accounting = new Department("Accounting");
console.log(accounting);
accounting.addEmployee("Max");
accounting.addEmployee("Emily");
console.log(accounting.employees);
