import {Component, Input, OnInit} from '@angular/core';
import {Offers} from '../main/body/offers/offers.model';
import {OffersService} from '../main/body/offers/offers.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
  providers: [OffersService]
})
export class BrandsComponent implements OnInit {
  @Input() offers: Offers[];

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offers = this.offersService.getOffers();
  }

}
