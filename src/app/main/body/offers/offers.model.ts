export class Offers {
  public name: string;
  public salary: string;
  public age: string;
  public companyName: string;
  public companyAddress: string;
  public tags: string;
  public logo: string;
  public salaryMonth: string;

  constructor(name: string, salary: string, age: string, companyName: string, companyAddress: string, tags: string, logo: string, salaryMonth: string) {
    this.name = name;
    this.salary = salary;
    this.age = age;
    this.companyName = companyName;
    this.companyAddress = companyAddress;
    this.tags = tags;
    this.logo = logo;
    this.salaryMonth = salaryMonth;
  }
}
