import {Component, Input, OnInit} from '@angular/core';
import {OffersService} from '../main/body/offers/offers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
  providers: [OffersService]
})
export class BrandsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
