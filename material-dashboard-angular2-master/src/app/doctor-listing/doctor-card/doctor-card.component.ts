import { Component, Input, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-doctor-card",
  templateUrl: "./doctor-card.component.html",
  styleUrls: ["./doctor-card.component.css"],
})
export class DoctorCardComponent implements OnInit {
  // @ViewChild imageSection: HTMLDivElement;
  @Input() name: String;
  @Input() speciality: String;
  @Input() exp: String;
  @Input() training: String;
  @Input() image: String;
  // material-dashboard-angular2-master\src\app\doctor-listing\doctor-card\doctor-card.component.ts
  constructor() { }

  ngOnInit(): void { }
}
