import {Component, Input, OnInit} from '@angular/core';
import {Offers} from '../../main/body/offers/offers.model';
import {OffersService} from '../../main/body/offers/offers.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-brands-details',
  templateUrl: './brands-details.component.html',
  styleUrls: ['./brands-details.component.css']
})
export class BrandsDetailsComponent implements OnInit {
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
