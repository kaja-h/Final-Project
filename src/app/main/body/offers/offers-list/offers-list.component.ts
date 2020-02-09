import { Component, OnInit } from '@angular/core';
import {Offers} from '../offers.model';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  offers: Offers[] = [
    new Offers('DevOps Engineer', '8 000 - 15 000 PLN', 'New', 'Appliscale sp. z.o.o.', 'ul. Zyczkowskiego 14, Kraków',
      'chef/ansible/puppet', 'https://cdn.bulldogjob.com/system/companies/logos/000/001/379/thumb/appliscale_logo_dark.png'),
    new Offers('C++ Engineer', '9 000 - 17 000 PLN', '1d ago', 'Appliscale sp. z.o.o.', 'ul. Zyczkowskiego 14, Kraków',
      'c++', 'https://cdn.bulldogjob.com/system/companies/logos/000/001/379/thumb/appliscale_logo_dark.png'),
    new Offers('Backend Developer', '9 000 - 13 000 PLN', 'New', 'Flying Bisons', 'ul. Bracka 18, Warszawa',
      'mysql/php', 'https://media-exp1.licdn.com/dms/image/C510BAQHW08_IyDfpnQ/company-logo_200_200/0?e=2159024400&v=beta&t=eQYa88eU4P3s987AR2VJI9l3SbS-gifo3wcFHnak8aU'),
    new Offers('Front-end Developer', '11 000 - 16 000 PLN', 'New', 'ValueLogic Sp. z.o.o.', 'ul. Szybowcowa 31, Wrocław',
      'react/angularjs/angular', 'https://media-exp1.licdn.com/dms/image/C4E0BAQG34mlhZgUppg/company-logo_200_200/0?e=2159024400&v=beta&t=lIPy-YAbfTq7n5p-AiTtuf7lgWaLSdM-6Zb167zGm3c'),
    new Offers('Front-end Developer', '7 500 - 11 000 PLN', 'New', 'Grape Up', 'ul. Mikołaja Kopernika 95, Białystok',
      'html5/css3', 'https://www.bstok.pl/wp-content/uploads/2018/10/Grape-up-logo1.jpg'),
    new Offers('Regular JavaScript Developer', '6 700 - 11 100 PLN', 'New', 'Merixstudio', 'ul. Małachowskiego 10, Poznań',
      'javascript', 'https://bulldogjob.pl/system/companies/logos/000/000/755/original/logo.png'),
    new Offers('Regular QA Specialist', '5 700 - 9 500 PLN', 'New', 'Merixstudio', 'ul. Małachowskiego 10, Poznań',
      'manual testing', 'https://bulldogjob.pl/system/companies/logos/000/000/755/original/logo.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
