import {Offers} from './offers.model';
import {Injectable} from '@angular/core';

@Injectable()

export class OffersService {
  private offers: Offers[] = [
    new Offers('DevOps Engineer', '8 000 - 15 000 PLN', 'New', 'Appliscale sp. z.o.o.', 'ul. Zyczkowskiego 14, Kraków',
      'chef/ansible/puppet', 'https://cdn.bulldogjob.com/system/companies/logos/000/001/379/thumb/appliscale_logo_dark.png', 'gross/month', '15-30', 'B2B', 'Mid', 'Appliscale is an IT consulting company specialising in Adtech, Cloud and Scalability solutions. We put a big emphasis on asynchronous communication and are very light on processes and meetings.\n' +
      '\n' +
      'Your daily tasks on the job\n' +
      '\n' +
      'Contribute to architecture and solutions that support integrations with console platforms\n' +
      'Partner with project leads and quality leads in defining and grooming high-level user stories\n' +
      'Be an individual contributor on the team\n' +
      'Lead a process in defining technical outcomes, tools and solutions\n' +
      'Establish strong connections with engineers on the team\n' +
      'Work with game team\'s technical leads in wholly understanding development needs and challenges\n' +
      '\n' +
      'We help our clients not only with feature development but also bring experience around project and product management, production maintenance, requirements analysis, cost analysis and performance optimisations.\n' +
      ' \n' +
      'Remote first company - we do have an office but are used to work with remote clients and teams. We put a big emphasis on asynchronous communication and are very light on processes and meetings.\n' +
      '\n' +
      'To deliver solutions for our clients we use technologies best suited for a given use case. We deliver full stack solutions with scalable backend stacks in Java / Erlang / C++, frontends built in Angular or React, and infrastructure deployed on AWS or client’s premises.\n' +
      '\n' +
      'We are used to working with demanding scale and put emphasis on performance optimisation and design of high throughput systems. We have experience in data processing areas such as real-time data analysis, reporting pipelines and forecasting engines.\n' +
      '\n' +
      'We have a holistic approach to our development process and believe that you should fully own solutions you deliver. This means that we are big advocates of DevOps culture, automation, IaaC and CI/CD. If you like a total ownership approach you will feel at home here.\n' +
      '\n' +
      'Last but not least, we believe in an engaging work environment where people can use their passions and develop their skills and interests.', 'React, Java, Angular', 'Regular, Advanced, Basic', 50.078144249999994, 19.995012647159186, 'https://www.polandunraveled.com/wp-content/uploads/2018/09/business-.jpg'),
    new Offers('C++ Engineer', '9 000 - 17 000 PLN', '1d ago', 'Appliscale sp. z.o.o.', 'ul. Zyczkowskiego 14, Kraków',
      'c++', 'https://cdn.bulldogjob.com/system/companies/logos/000/001/379/thumb/appliscale_logo_dark.png', 'net/month', '15-30', 'B2B', 'Senior', 'Appliscale is an IT consulting company specialising in Adtech, Cloud and Scalability solutions. We put a big emphasis on asynchronous communication and are very light on processes and meetings.\n' +
      '\n' +
      'Your daily tasks on the job\n' +
      '\n' +
      'Contribute to architecture and solutions that support integrations with console platforms\n' +
      'Partner with project leads and quality leads in defining and grooming high-level user stories\n' +
      'Be an individual contributor on the team\n' +
      'Lead a process in defining technical outcomes, tools and solutions\n' +
      'Establish strong connections with engineers on the team\n' +
      'Work with game team\'s technical leads in wholly understanding development needs and challenges\n' +
      '\n' +
      'We help our clients not only with feature development but also bring experience around project and product management, production maintenance, requirements analysis, cost analysis and performance optimisations.\n' +
      ' \n' +
      'Remote first company - we do have an office but are used to work with remote clients and teams. We put a big emphasis on asynchronous communication and are very light on processes and meetings.\n' +
      '\n' +
      'To deliver solutions for our clients we use technologies best suited for a given use case. We deliver full stack solutions with scalable backend stacks in Java / Erlang / C++, frontends built in Angular or React, and infrastructure deployed on AWS or client’s premises.\n' +
      '\n' +
      'We are used to working with demanding scale and put emphasis on performance optimisation and design of high throughput systems. We have experience in data processing areas such as real-time data analysis, reporting pipelines and forecasting engines.\n' +
      '\n' +
      'We have a holistic approach to our development process and believe that you should fully own solutions you deliver. This means that we are big advocates of DevOps culture, automation, IaaC and CI/CD. If you like a total ownership approach you will feel at home here.\n' +
      '\n' +
      'Last but not least, we believe in an engaging work environment where people can use their passions and develop their skills and interests.', 'C++, Java', 'Advanced, Regular', 50.078144249999994, 19.995012647159186, 'https://www.polandunraveled.com/wp-content/uploads/2018/09/business-.jpg'),
    new Offers('Backend Developer', '9 000 - 13 000 PLN', 'New', 'Flying Bisons', 'ul. Bracka 18, Warszawa',
      'mysql/php', 'https://media-exp1.licdn.com/dms/image/C510BAQHW08_IyDfpnQ/company-logo_200_200/0?e=2159024400&v=beta&t=eQYa88eU4P3s987AR2VJI9l3SbS-gifo3wcFHnak8aU', 'gross/month', '100-300', 'Permanent', 'Mid/Senior', 'Join a team that brings to life various digital products from companies like IKEA, Kompania Piwowarska or Apart, but also startups such as: Muscat, Vaiot or Textil-one. Deliver a 3-12 months projects, which after implementation and optimisation are turned into service used by thousands of users.\n' +
      '\n' +
      'Why join us?\n' +
      '\n' +
      'You will become part of Flying Bisons team, which is one of the fastest growing companies in the Digital Consulting industry. Our mission is to create valuable and innovative products\n' +
      'You will work on interesting and challenging projects\n' +
      'You will work with an interdisciplinary team of ambitious and talented specialists, where you can continuously grow\n' +
      'You will have a real impact on development and technology stack decisions\n' +
      'You will work in a team with great atmosphere and flexible work hours\n' +
      'You will use only the latest technology and development methodologies \n' +
      'You will work in a climatic office in the very center of Warsaw (Bracka 18)\n' +
      'You will relax playing FIFA, Billiards, and ping-pong \n' +
      '\n' +
      'We are looking for you if:\n' +
      '\n' +
      'you know PHP and MySQL very well and have a proven track record of project implementation using this language\n' +
      'you have a wide experience with HTML and CSS\n' +
      'you have used Symfony framework before\n' +
      'you have good attention to details\n' +
      '\n' +
      'Let\'s get to know each other!\n' +
      'We will be happy to give you more details and tell you about our future plans. \n' +
      'Write to us and we will set a date for a cup of coffee.', 'PHP, JavaScript', 'Advanced, Regular', 52.2317318, 21.0172183, 'https://astw.org.au/wp-content/uploads/2019/02/accounting-achievement-aerial-1043506.jpg'),
    new Offers('Front-end Developer', '11 000 - 16 000 PLN', 'New', 'ValueLogic Sp. z.o.o.', 'ul. Szybowcowa 31, Wrocław',
      'react/angularjs/angular', 'https://media-exp1.licdn.com/dms/image/C4E0BAQG34mlhZgUppg/company-logo_200_200/0?e=2159024400&v=beta&t=lIPy-YAbfTq7n5p-AiTtuf7lgWaLSdM-6Zb167zGm3c', 'gross/month', '300-500', 'Part-time', 'Senior', 'Front-end Developer\n' +
      '\n' +
      'At ValueLeogic we give a lot of freedom at work, but we expect the highest quality. We value independence, but we take responsibility seriously.\n' +
      '\n' +
      'Job profile\n' +
      '\n' +
      'We are looking for Front-end Developer to join our team in Wrocław. You will join a team that is working on developing and maintaining a project for one of our clients. On a daily basis, you will work with external teams and together improve the product. We ensure that you will not be bored and you\'ll be able to use your ideas.\n' +
      '\n' +
      'Requirements/What we look for\n' +
      'Excellent knowledge of Angular and RxJS\n' +
      'Proficiency in React\n' +
      'Practice in working with Redux\n' +
      'Experience in Cypress testing\n' +
      'Knowledge of Webpack and Gulp\n' +
      'Capability in working in cross-functional teams with backend engineers\n' +
      'Good verbal and written English language skills\n' +
      'A team player with good communication skills\n' +
      '\n' +
      'Nice to have\n' +
      'Backend knowledge\n' +
      'Practice in working with AWS\n' +
      'Familiarity with Jenkins\n' +
      'Experience in code review\n' +
      '\n' +
      'In return, we offer\n' +
      'Remote work and flexible hours\n' +
      'Constant learning, training, and knowledge sharing\n' +
      'A team in which 80% of the people have over 5 years’ experience\n' +
      'A mature approach to business, mixed with a fun working environment\n' +
      'Non-corporate atmosphere, flat structure, no dress code', 'PHP, mySQL', 'Advanced, Advanced', 51.13107515, 16.96240609525885, 'https://astw.org.au/wp-content/uploads/2019/02/accounting-achievement-aerial-1043506.jpg'),
    new Offers('Front-end Developer', '7 500 - 11 000 PLN', 'New', 'Grape Up', 'ul. Mikołaja Kopernika 95, Białystok',
      'html5/css3', 'https://www.bstok.pl/wp-content/uploads/2018/10/Grape-up-logo1.jpg', 'net/month', '100-200', 'B2B', 'Mid', 'RESPONSIBILITIES\n' +
      '\n' +
      'Designing and implementing Web application with React/Redux according to best practices\n' +
      'Creating views with HTML5, CSS3, Less\n' +
      'Code reviews\n' +
      'Writing Unit tests with Jest\n' +
      'Communicating with international team \n' +
      '\n' +
      'REQUIREMENTS\n' +
      '\n' +
      'Mid software engineer with experience in JavaScript and React/Redux\n' +
      'Knowledge of HTTP request/response structure\n' +
      'Good command of English\n' +
      'Good communication skills, openness\n' +
      '\n' +
      ' \n' +
      'NICE TO HAVE\n' +
      '\n' +
      'Experience in SCRUM methodology\n' +
      'Understanding of Continuous Integration process and purpose\n' +
      'Knowledge of SVG markups\n' +
      'Knowledge of building tools (Webpack)\n' +
      'Design patterns\n' +
      'Functional Programming\n' +
      'Knowledge of unit testing and mocking libraries\n', 'HTML, CSS3, JavaScript', 'Regular, Regular, Basic', 53.1234006, 23.124264850000003, 'https://www.yaioa.com/blog/wp-content/uploads/2020/02/small-businesses-in-alabama.jpg'),
    new Offers('Regular JavaScript Developer', '6 700 - 11 100 PLN', 'New', 'Merixstudio', 'ul. Małachowskiego 10, Poznań',
      'javascript', 'https://bulldogjob.pl/system/companies/logos/000/000/755/original/logo.png', 'net/month', '200-400', 'B2B', 'Mid',
      'Exciting projects. Great atmosphere. Personal growth. Project bonuses. Merixstudio. We’re creative software house based in Poznań. We’re also the best polish software house in the global ranking of the Clutch.co! Our strength has always been the newest technologies like Django, Angular or HTML5 but not only… our greatest strength is a team of creative experts. It’s all about people! Merixstudio not only stands for software development - first and foremost, we’re also a bunch of friends with fascinating hobbies we love to share. We plan, design and develop web applications & digital products since 1999. We love open source, good beer, and delicious food! Would you like to join us?   Regular JavaScript Developer what you will do: You will work on modern Javascript Single Page Applications using React and Angular while following high standards of quality. Our stack is based on the newest ECMAScript edition and encourages you to use proper design patterns. While you will work on User Interface, you will also help implement business logic and design API communication in close cooperation with Backend Developers and our clients. Together with your team, you will follow the latest additions to the JavaScript ecosystem through our internal training and code reviews done by your Team Leaders. who you are you have at least 1 year of experience in Web Development with JavaScript you have a good understanding of JavaScript and its prototypical nature you have a good command of HTML5 APIs and CSS3 you are up-to-date with the latest ECMAScript functionalities you know English fluent both spoken and written what we would like to see knowledge of at least one JS framework (React, Angular, Vue) familiarity with state management libraries (Redux, Mobx) familiarity with React-Native familiarity with Backend Frameworks (Express, Django, Symfony) knowledge how to write unit tests (Karma/Jasmine, Jest) knowledge of commonly used design patterns and programming principles Benefits: free medical car MultiSport car financed external trainings regular internal trainings development talks every 6 months free English lessons flexible working hours remote work team parties chillout room and fresh fruits twice a week :)', 'HTML, CSS3, JavaScript, Angular', 'Advanced, Advanced, Regular, Basic', 52.414374249999995, 16.960921681908395, 'https://www.yaioa.com/blog/wp-content/uploads/2020/02/small-businesses-in-alabama.jpg'),
    new Offers('Regular QA Specialist', '5 700 - 9 500 PLN', 'New', 'Merixstudio', 'ul. Małachowskiego 10, Poznań',
      'manual testing', 'https://bulldogjob.pl/system/companies/logos/000/000/755/original/logo.png', 'gross/month', '200-400', 'B2B', 'Junior', 'Exciting projects. Great atmosphere. Personal growth. Project bonuses. Merixstudio.\n' +
      '\n' +
      'We’re creative software house based in Poznań. We’re also the best polish software house in the global ranking of the Clutch.co!  Our strength has always been the newest technologies like Django, Angular or HTML5 but not only… our greatest strength is a team of creative experts. It’s all about people! Merixstudio not only stands for software development - first and foremost, we’re also a bunch of friends with fascinating hobbies we love to share. We plan, design and develop web applications & digital products since 1999. We love open source, good beer, and delicious food! Would you like to join us?\n' +
      '\n' +
      'Regular QA Specialist\n' +
      '\n' +
      'What you\'ll do:\n' +
      '\n' +
      'You’ll be identifying, tasking, and tracking bugs. Reviewing the requirements and specifications will also be a part of your job. You\'ll work in close cooperation with customers, developers, and product managers to identify system requirements. Writing detailed Behaviour-driven development scenarios, test plans, and test cases will be your responsibility. You\'ll be creating UI and API automation scripts in JavaScript and Python using open source tools like Cypress, Selenium WebDriver, Protractor or WebdriverIO. You will check how an app performs under a particular load so you will be working with JMeter and you\'ll test APIs using Postman.\n' +
      '\n' +
      'Who you are:\n' +
      'at least 2 years of experience in testing\n' +
      'good knowledge of software QA methodologies, tools and processes\n' +
      'experience working in familiarity with bug trackers (Jira, Redmine, Mantis)\n' +
      'good knowledge of web browser technologies like HTML, CSS, and JavaScript\n' +
      'experience in writing test plans and test cases\n' +
      'good knowledge of API testing\n' +
      'good command of written and spoken English\n' +
      'strong written and verbal communication skills\n' +
      'familiarity with Agile methodologies\n' +
      '\n' +
      'What we\'d like to see:\n' +
      'basic knowledge of Performance Testing\n' +
      'your experience in pointing out the pros and cons of UI automated testing\n' +
      'your experience in choosing which the test cases should be automated\n' +
      'your experience in writing BDD scenarios and adding JavaScript/Python code to them\n' +
      'you know the difference between Unit Testing, TDD and BDD\n' +
      'ISTQB Foundation Level, ISTQB Agile Tester, extension certificates\n' +
      'if you had a chance to work in projects developed in technologies similar to ours and you had a chance to present your work in front of a client is a nice set\n' +
      '\n' +
      'Benefits:\n' +
      'financed external trainings\n' +
      'regular internal trainings\n' +
      'development talks every 6 months\n' +
      'free medical care\n' +
      'MultiSport card\n' +
      'free English lessons\n' +
      'flexible working hours\n' +
      'remote work\n' +
      'team parties\n' +
      'chillout room and fresh fruits twice a week :)', 'JavaScript, Python', 'Regular, Regular', 52.414374249999995, 16.960921681908395, 'https://bitdefender.pl/wp-content/uploads/2018/09/advanced-business-security.png')
  ];

  getOffers() {
    return this.offers.slice();
  }
  getOffer(index: number) {
    return this.offers.slice()[index];
  }
}

