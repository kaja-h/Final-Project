import { Component, OnInit } from '@angular/core';
import {OffersService} from './offers.service';
import {Router} from '@angular/router';
import {OffersMocks} from '../../../../mocks/offers-mocks';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [OffersService, OffersMocks]
})
export class OffersComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
