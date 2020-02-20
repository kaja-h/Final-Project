import {Component, Input, OnInit} from '@angular/core';
import {OffersService} from '../main/body/offers/offers.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
  providers: [OffersService]
})
export class BrandsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
