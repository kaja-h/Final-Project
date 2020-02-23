export class Offers {
  public name: string;
  public salary: string;
  public age: string;
  public companyName: string;
  public companyAddress: string;
  public tags: string;
  public logo: string;
  public salaryMonth: string;
  public companySize: string;
  public empType: string;
  public level: string;
  public description: string;
  public requirement: string;
  public reqLVL: string;
  public geo1: object;
  public geo2: object;
  public picture: string;

  constructor(name: string, salary: string, age: string, companyName: string, companyAddress: string, tags: string, logo: string, salaryMonth: string, companySize: string, empType: string, level: string, description: string, requirement: string, reqLVL: string, geo1: object, geo2: object, picture: string) {
    this.name = name;
    this.salary = salary;
    this.age = age;
    this.companyName = companyName;
    this.companyAddress = companyAddress;
    this.tags = tags;
    this.logo = logo;
    this.salaryMonth = salaryMonth;
    this.companySize = companySize;
    this.empType = empType;
    this.level = level;
    this.description = description;
    this.requirement = requirement;
    this.reqLVL = reqLVL;
    this.geo1 = geo1;
    this.geo2 = geo2;
    this.picture = picture;
  }
}
