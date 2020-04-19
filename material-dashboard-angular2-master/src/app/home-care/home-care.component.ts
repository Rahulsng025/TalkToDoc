import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoctorListingService } from '../Services/doctorlisting.service';
import {home_care} from '../../app/model/home_care.model';

@Component({
  selector: 'app-home-care',
  templateUrl: './home-care.component.html',
  styleUrls: ['./home-care.component.css']
})
export class HomeCareComponent implements OnInit {

  home_care: home_care[];
  displayedColumns = ['title', 'address',' state', 'country'];

  constructor(private doctorlistingService: DoctorListingService, private router: Router) { }

  ngOnInit(): void {
    this.fetchhome_care();
  }

  fetchhome_care() {
    this.doctorlistingService
    .gethomecare()
    .subscribe((data: home_care[]) => {
      this.home_care = data;
    
      console.log(this.home_care);
    });
  }

}
