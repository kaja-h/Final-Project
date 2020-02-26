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
  public geo: object;
  public picture: string;

  constructor(name: string, salary: string, age: string, companyName: string, companyAddress: string, tags: string, logo: string, salaryMonth: string, companySize: string, empType: string, level: string, description: string, requirement: string, reqLVL: string, geo: object, picture: string) {
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
    this.geo = geo;
    this.picture = picture;
  }
}
