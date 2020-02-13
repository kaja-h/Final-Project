import { Component, OnInit } from '@angular/core';
import {Offers} from './offers.model';
import {OffersService} from './offers.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [OffersService]
})
export class OffersComponent implements OnInit {
  selectedOffer: Offers;

  constructor() { }

  ngOnInit() {
  }

}
