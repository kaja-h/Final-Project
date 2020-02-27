import {Component, Input, OnInit} from '@angular/core';
import {OffersInterface, OffersMocks} from '../../../../../mocks/offers-mocks';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  @Input() offers: OffersInterface[];
  @Input() index: number;
  constructor(private offersMocks: OffersMocks) {
  }

  ngOnInit() {
    this.offers = this.offersMocks.getOffers();
  }
}
