import { Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { HomeCareService } from "app/Services/home-care.service";
import { HomeCareModel } from "app/model/home_care.model";
import { MatDialog } from "@angular/material/dialog";
import { mergeMap } from "rxjs/operators";
import { MatTableDataSource } from "@angular/material/table"
import { MatDialogConfig } from "@angular/material/dialog"
import { HomecareLayoutComponent } from "./homecare-layout/homecare-layout.component";



@Component({
  selector: "app-homecare-admin",
  templateUrl: "./homecare-admin.component.html",
  styleUrls: ["./homecare-admin.component.css"],
})
export class HomecareAdminComponent implements OnInit {
  allHomeCareDetails: HomeCareModel[];

  displayedColumns = ["title", "address", "state", "country", "action"];
  searchKey: string;



  constructor(
    private homecareService: HomeCareService,
    private router: Router,
    public dialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.fetchHomecareList();
  }

  fetchHomecareList() {
    this.homecareService
      .gethomecare()
      .subscribe((data: HomeCareModel[]) => {
        this.allHomeCareDetails = data;
        console.log(this.allHomeCareDetails);
      });
  }

  deletehomecare(id: string) {
    console.log("ID: " + id);

    this.homecareService
      .deletehomecare(id)
      .pipe(mergeMap(() => this.homecareService.gethomecare()))
      .subscribe((allHomeCareDetails: HomeCareModel[]) => {
        console.log(`Data received`);
        console.log(allHomeCareDetails);

        this.allHomeCareDetails = allHomeCareDetails;
      });
  }

  onSearchClear() {
    this.searchKey = "";
    // this.applyFilter();
  }

  // applyFilter() {
  //   this..filter = this.searchKey.trim().toLowerCase();
  // }

  onCreate() {
    this.homecareService.initializeFormGroup();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "60%";
    this.dialog.open(HomecareLayoutComponent, dialogConfig);
  }
}
