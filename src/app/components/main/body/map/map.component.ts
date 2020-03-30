import {AfterViewInit, Component, Input} from '@angular/core';
import * as L from 'leaflet';
import {MapService} from './map.service';

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
  styleUrls: ['./map.component.css']
})

export class MapComponent implements AfterViewInit {
  private map;

  constructor(private mapService: MapService) {
  }

  ngAfterViewInit(): void {
    this.initMap();
    this.mapService.getMarker(this.map);
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

  ngDoCheck(): void {
    this.zoomMap();
  }

  public zoomMap() {
    const offer = this.mapService.myOffer;
    if (!offer) {
      return;
    }
    this.map.setView([offer.geo.lat, offer.geo.lon], 10);
  }
}
