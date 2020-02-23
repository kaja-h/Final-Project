import {Component, Input, OnInit} from '@angular/core';
import {Offers} from '../offers.model';
import {OffersService} from '../offers.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  @Input() offers: Offers[];
  @Input() index: number;
  constructor(private offersService: OffersService) {
  }

  ngOnInit() {
    this.offers = this.offersService.getOffers();
  }
}
