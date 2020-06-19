import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-lipid-profile',
  templateUrl: './lipid-profile.component.html',
  styleUrls: ['./lipid-profile.component.css']
})
export class LipidProfileComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onPageLoad() {
    this.router.navigate(['main/paitent-details']);
  }

}
