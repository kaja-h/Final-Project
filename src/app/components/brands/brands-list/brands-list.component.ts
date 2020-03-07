import {Component, Input, OnInit} from '@angular/core';
import {OffersInterface, OffersMocks} from '../../../mocks/offers-mocks';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css']
})
export class BrandsListComponent implements OnInit {
  @Input() offers: OffersInterface[];
  @Input() index: number;

  constructor(private offersMocks: OffersMocks) { }

  ngOnInit() {
    this.offers = this.offersMocks.getOffers();
  }
}
