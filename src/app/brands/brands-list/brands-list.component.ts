import {Component, Input, OnInit} from '@angular/core';
import {Offers} from '../../main/body/offers/offers.model';
import {OffersService} from '../../main/body/offers/offers.service';

@Component({
  selector: 'app-brands-list',
  templateUrl: './brands-list.component.html',
  styleUrls: ['./brands-list.component.css']
})
export class BrandsListComponent implements OnInit {
  @Input() offers: Offers[];

  constructor(private offersService: OffersService) { }

  ngOnInit() {
    this.offers = this.offersService.getOffers();
  }

}
