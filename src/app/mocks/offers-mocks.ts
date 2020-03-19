export interface OffersInterface {
  name: string;
  salary: string;
  age: string;
  companyName: string;
  companyAddress: string;
  tags: string;
  logo: string;
  salaryMonth: string;
  companySize: string;
  empType: string;
  level: string;
  description: string;
  requirement: string;
  reqLVL: string;
  geo: object;
  picture: string;
}
// tslint:disable-next-line:max-line-length
const description = 'Atende Software Sp. z o.o. jest spółką z grupy kapitałowej Atende S.A., odpowiedzialną za tworzenie i rozwój oprogramowania przeznaczonego dla rynku multimedialnego, telekomunikacyjnego i sektora energetyki. W związku z rozwojem firmy, poszukujemy osoby na stanowisko: PROGRAMISTA JAVA Opis stanowiska: W Atende Software rozwijamy największą w kraju platformę technologiczną dla telewizji internetowej - redGalaxy. Z redGalaxy korzystają największe i najpopularniejsze w Polsce telewizje internetowe, takie jak player.pl, czy playnow.pl. Miliony użytkowników tych portali, dzięki naszej technologii, każdego dnia może cieszyć się dostępem do ulubionych treści wideo. Stworzone przez nas aplikacje mobilne od wielu miesięcy utrzymują się na czołowych miejscach popularności, zarówno w sklepie Google Play, jak i Apple Appstore.';

export class OffersMocks {
  offers: OffersInterface[] = [
    {
      name: 'DevOps Engineer',
      salary: '8 000 - 15 000 PLN',
      age: 'New',
      companyName: 'Appliscale sp. z.o.o.',
      companyAddress: 'ul. Zyczkowskiego 14, Kraków',
      tags: 'chef/ansible/puppet',
      logo: 'https://cdn.bulldogjob.com/system/companies/logos/000/001/379/thumb/appliscale_logo_dark.png',
      salaryMonth: 'gross/month',
      companySize: '15-30',
      empType: 'B2B',
      level: 'Mid',
      description,
      requirement: 'React, Java, Angular',
      reqLVL: 'Regular, Advanced, Basic',
      geo: {lat: 50.078144249999994, lon: 19.995012647159186},
      picture: 'https://www.polandunraveled.com/wp-content/uploads/2018/09/business-.jpg'
    },
    {
      name: 'C++ Engineer',
      salary: '9 000 - 17 000 PLN',
      age: '1d ago',
      companyName: 'Appliscale sp. z.o.o.',
      companyAddress: 'ul. Zyczkowskiego 14, Kraków',
      tags: 'c++',
      logo: 'https://cdn.bulldogjob.com/system/companies/logos/000/001/379/thumb/appliscale_logo_dark.png',
      salaryMonth: 'net/month',
      companySize: '15-30',
      empType: 'B2B',
      level: 'Senior',
      description,
      requirement: 'C++, Java',
      reqLVL: 'Advanced, Regular',
      geo: {lat: 50.078144249999994, lon: 19.995012647159186},
      picture: 'https://www.polandunraveled.com/wp-content/uploads/2018/09/business-.jpg'
    },
    {
      name: 'Backend Developer',
      salary: '9 000 - 13 000 PLN',
      age: 'New',
      companyName: 'Flying Bisons',
      companyAddress: 'ul. Bracka 18, Warszawa',
      tags: 'mysql/php',
      // tslint:disable-next-line:max-line-length
      logo: 'https://media-exp1.licdn.com/dms/image/C510BAQHW08_IyDfpnQ/company-logo_200_200/0?e=2159024400&v=beta&t=eQYa88eU4P3s987AR2VJI9l3SbS-gifo3wcFHnak8aU',
      salaryMonth: 'gross/month',
      companySize: '100-300',
      empType: 'Permanent',
      level: 'Mid/Senior',
      description,
      requirement: 'PHP, JavaScript',
      reqLVL: 'Advanced, Regular',
      geo: {lat: 52.2317318, lon: 21.0172183},
      picture: 'https://astw.org.au/wp-content/uploads/2019/02/accounting-achievement-aerial-1043506.jpg'
    },
    {
      name: 'Front-end Developer',
      salary: '11 000 - 16 000 PLN',
      age: 'New',
      companyName: 'ValueLogic Sp. z.o.o.',
      companyAddress: 'ul. Szybowcowa 31, Wrocław',
      tags: 'react/angularjs/angular',
      // tslint:disable-next-line:max-line-length
      logo: 'https://media-exp1.licdn.com/dms/image/C4E0BAQG34mlhZgUppg/company-logo_200_200/0?e=2159024400&v=beta&t=lIPy-YAbfTq7n5p-AiTtuf7lgWaLSdM-6Zb167zGm3c',
      salaryMonth: 'gross/month',
      companySize: '300-500',
      empType: 'Part-time',
      level: 'Senior',
      description,
      requirement: 'PHP, mySQL',
      reqLVL: 'Advanced, Advanced',
      geo: {lat: 51.13107515, lon: 16.96240609525885},
      picture: 'https://astw.org.au/wp-content/uploads/2019/02/accounting-achievement-aerial-1043506.jpg'
    },
    {
      name: 'Front-end Developer',
      salary: '7 500 - 11 000 PLN',
      age: 'New',
      companyName: 'Grape Up',
      companyAddress: 'ul. Mikołaja Kopernika 95, Białystok',
      tags: 'html5/css3',
      logo: 'https://www.bstok.pl/wp-content/uploads/2018/10/Grape-up-logo1.jpg',
      salaryMonth: 'net/month',
      companySize: '100-200',
      empType: 'B2B',
      level: 'Mid',
      description,
      requirement: 'HTML, CSS3, JavaScript',
      reqLVL: 'Regular, Regular, Basic',
      geo: {lat: 53.1234006, lon: 23.124264850000003},
      picture: 'https://www.yaioa.com/blog/wp-content/uploads/2020/02/small-businesses-in-alabama.jpg'
    },
    {
      name: 'Regular JavaScript Developer',
      salary: '6 700 - 11 100 PLN',
      age: 'New',
      companyName: 'Merixstudio',
      companyAddress: 'ul. Małachowskiego 10, Poznań',
      tags: 'javascript',
      logo: 'https://bulldogjob.pl/system/companies/logos/000/000/755/original/logo.png',
      salaryMonth: 'net/month',
      companySize: '200-400',
      empType: 'B2B',
      level: 'Mid',
      description,
      requirement: 'HTML, CSS3, JavaScript, Angular',
      reqLVL: 'Advanced, Advanced, Regular, Basic',
      geo: {lat: 52.414374249999995, lon: 16.960921681908395},
      picture: 'https://www.yaioa.com/blog/wp-content/uploads/2020/02/small-businesses-in-alabama.jpg'
    },
    {
      name: 'Regular QA Specialist',
      salary: '5 700 - 9 500 PLN',
      age: 'New',
      companyName: 'Merixstudio',
      companyAddress: 'ul. Małachowskiego 10, Poznań',
      tags: 'manual testing',
      logo: 'https://bulldogjob.pl/system/companies/logos/000/000/755/original/logo.png',
      salaryMonth: 'gross/month',
      companySize: '200-400',
      empType: 'B2B',
      level: 'Junior',
      description,
      requirement: 'JavaScript, Python',
      reqLVL: 'Regular, Regular',
      geo: {lat: 52.414374249999995, lon: 16.960921681908395},
      picture: 'https://bitdefender.pl/wp-content/uploads/2018/09/advanced-business-security.png'
    }
  ];

  getOffers() {
    return this.offers.slice();
  }

  getOffer(index: number) {
    return this.offers.slice()[index];
  }
}



