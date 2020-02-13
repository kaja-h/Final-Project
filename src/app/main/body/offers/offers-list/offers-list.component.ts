import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Offers} from '../offers.model';
import {OffersService} from '../offers.service';

@Component({
  selector: 'app-offers-list',
  templateUrl: './offers-list.component.html',
  styleUrls: ['./offers-list.component.css']
})
export class OffersListComponent implements OnInit {
  @Output() offerWasSelected = new EventEmitter<Offers>();
  offers: Offers[];

  constructor(private offerService: OffersService) { }

  ngOnInit() {
    this.offers = this.offerService.getOffers();
  }

  onOfferSelected(offer: Offers) {
    this.offerWasSelected.emit(offer);
  }

}
