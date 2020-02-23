import { Component, OnInit } from '@angular/core';
import {OffersService} from './offers.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  providers: [OffersService]
})
export class OffersComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
