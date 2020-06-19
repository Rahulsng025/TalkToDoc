import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


@Component({
  selector: 'app-blood-sugar',
  templateUrl: './blood-sugar.component.html',
  styleUrls: ['./blood-sugar.component.css']
})
export class BloodSugarComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit(): void {

  }
  onPageLoad() {
    this.router.navigate(['main/paitent-details']);
  }

}
