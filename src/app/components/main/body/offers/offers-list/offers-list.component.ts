import {Component, Input, OnInit} from '@angular/core';
import {OffersInterface, OffersMocks} from '../../../../../mocks/offers-mocks';
import * as L from 'leaflet';
import {MapService} from '../../map/map.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  @Input() offers: OffersInterface[];
  @Input() index: number;

  constructor(private offersMocks: OffersMocks, private mapService: MapService) {
  }

  ngOnInit() {
    this.offers = this.offersMocks.getOffers();
  }

  zoomOnClick(offer: any): void {
    this.mapService.myOffer = offer;
  }

}
