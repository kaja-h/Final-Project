import {Component, OnInit} from '@angular/core';
import {Offers} from '../offers.model';
import {OffersService} from '../offers.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-offers-details',
  templateUrl: './offers-details.component.html',
  styleUrls: ['./offers-details.component.css']
})
export class OffersDetailsComponent implements OnInit {
  offer: Offers;
  id: number;

  constructor(private offersService: OffersService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.offer = this.offersService.getOffer(this.id);
        }
      );
  }

}
