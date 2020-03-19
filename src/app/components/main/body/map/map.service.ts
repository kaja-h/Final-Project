import {Injectable, Input} from '@angular/core';
import {OffersInterface, OffersMocks} from '../../../../mocks/offers-mocks';
import * as L from 'leaflet';

@Injectable({
  providedIn: 'root'
})


export class MapService {
  @Input() offers: OffersInterface[];

  constructor(private offersMocks: OffersMocks) {
  }

  makePopup(offer: any): string {
    return `` +
      `<div> ${offer.name}</div>` +
      `<div> ${offer.salary}</div>` +
      `<div> ${offer.companyName}</div>`;
  }

  getMarker(map: L.map): void {
    this.offersMocks.offers.map((item) => {
      // @ts-ignore
      const mapX = item.geo.lat;
      // @ts-ignore
      const mapY = item.geo.lon;
      const marker = L.marker([mapX, mapY]);
      marker.bindPopup(this.makePopup(item));
      marker.on('mouseover', function(e) {
        this.openPopup();
      });
      marker.on('mouseout', function(e) {
        this.closePopup();
      });
      marker.addTo(map).on('click', markerOnClick);
      function markerOnClick(e) {
        console.log(e.latlng);
      }
    });
  }
}
