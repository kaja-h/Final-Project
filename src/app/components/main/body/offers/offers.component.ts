import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {OffersMocks} from '../../../../mocks/offers-mocks';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [OffersMocks]
})
export class OffersComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
