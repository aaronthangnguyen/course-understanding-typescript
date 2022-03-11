class Department {
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

const accounting = new Department("0", "Accounting");
const it = new ITDepartment("1", ["Max"]);
console.log(it);
accounting.addEmployee("Max");
accounting.addEmployee("Emily");
