import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import {OffersInterface, OffersMocks} from '../../../../../mocks/offers-mocks';

@Component({
  selector: 'app-offers-details',
  templateUrl: './offers-details.component.html',
  styleUrls: ['./offers-details.component.css']
})
export class OffersDetailsComponent implements OnInit {
  offer: OffersInterface;
  id: number;

  constructor(private offersMocks: OffersMocks,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.offer = this.offersMocks.getOffer(this.id);
        }
      );
  }

}
