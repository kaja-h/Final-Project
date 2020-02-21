import {Component, Input, OnInit} from '@angular/core';
import {Offers} from '../../main/body/offers/offers.model';
import {OffersService} from '../../main/body/offers/offers.service';

@Component({
  selector: 'app-brands-details',
  templateUrl: './brands-details.component.html',
  styleUrls: ['./brands-details.component.css']
})
export class BrandsDetailsComponent implements OnInit {
  @Input() offers: Offers[];

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offers = this.offersService.getOffers();
  }

}
