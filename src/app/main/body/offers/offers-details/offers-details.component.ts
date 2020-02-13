import {Component, Input, OnInit} from '@angular/core';
import {Offers} from '../offers.model';

@Component({
  selector: 'app-offers-details',
  templateUrl: './offers-details.component.html',
  styleUrls: ['./offers-details.component.css']
})
export class OffersDetailsComponent implements OnInit {
  @Input() offer: Offers;

  constructor() { }

  ngOnInit() {
  }

}
