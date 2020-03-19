import {Component, Input, OnInit} from '@angular/core';
import {OffersInterface, OffersMocks} from '../../../../../mocks/offers-mocks';
import * as L from 'leaflet';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  @Input() offers: OffersInterface[];
  @Input() index: number;
  map: L.map;

  constructor(private offersMocks: OffersMocks) {
  }

  ngOnInit() {
    this.offers = this.offersMocks.getOffers();
  }

  zoomOnClick(): void {
    this.offersMocks.offers.map((city) => {
      // @ts-ignore
      const lat = city.geo.lat;
      // @ts-ignore
      const lng = city.geo.lon;
      this.map.setZoom([lat, lng]);
    });
  }
}
