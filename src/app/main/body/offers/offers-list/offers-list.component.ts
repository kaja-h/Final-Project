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
    new Offers('DevOps Engineer', '8 000 - 15 000 PLN', 'New', 'Appliscale sp. z.o.o.', 'ul. Zyczkowskiego 14, Kraków',
      'chef/ansible/puppet', 'https://cdn.bulldogjob.com/system/companies/logos/000/001/379/thumb/appliscale_logo_dark.png')
  ];

  constructor() { }

  ngOnInit() {
  }

}
