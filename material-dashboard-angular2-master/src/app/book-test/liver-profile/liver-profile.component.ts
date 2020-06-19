import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { BookTestService } from 'app/Services/book-test.service';
import { BookTestModel } from 'app/model/book_test.model';


@Component({
  selector: 'app-liver-profile',
  templateUrl: './liver-profile.component.html',
  styleUrls: ['./liver-profile.component.css']
})
export class LiverProfileComponent implements OnInit {



  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onprofile() {
    this.router.navigate(['main/paitent-details']);
  }
}
