import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {OffersMocks} from '../../mocks/offers-mocks';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
  providers: [OffersMocks]
})
export class BrandsComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
