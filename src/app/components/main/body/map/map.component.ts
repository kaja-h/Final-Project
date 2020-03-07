import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {OffersInterface, OffersMocks} from '../../../../mocks/offers-mocks';

const iconRetinaUrl = 'assets/marker-icon-2x.png';
const iconUrl = 'assets/marker-icon.png';
const shadowUrl = 'assets/marker-shadow.png';
const iconDefault = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = iconDefault;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
  providers: [OffersMocks]
})

export class MapComponent implements OnInit {
  private map;
  private marker;
  offers: OffersInterface[];

  constructor(private offersMocks: OffersMocks) {
  }

  ngOnInit(): void {
    this.initMap();
    this.offersMocks.getMarker(this.map);
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [51.75, 19.4666],
      zoom: 6
    });
    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });
    tiles.addTo(this.map);
  }
}
