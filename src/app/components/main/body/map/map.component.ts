import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {Offers} from '../offers/offers.model';
import {OffersService} from '../offers/offers.service';
import {ActivatedRoute, Params} from '@angular/router';

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
  providers: [OffersService]
})

export class MapComponent implements OnInit {
  offer: Offers;
  private map;
  private marker;

  constructor(private offersService: OffersService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.initMap();
    // this.makeMarkers(this.map);
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

    const marker = L.marker([51.75, 19.45]);
    marker.addTo(this.map);
  }
  // private makeMarkers(map: L.map): void {
  //   this.route.params
  //     .subscribe(
  //       (params: Params) => {
  //         const lat = this.offer.geo[0];
  //         const lng = this.offer.geo[1];
  //         this.marker = L.marker([lat, lng]);
  //         this.marker.addTo(this.map);
  //       }
  //     );
  // }
}
