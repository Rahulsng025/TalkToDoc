import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  //  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  {
    path: "/dashboard",
    title: "Dashboard",
    // icon: "dashboard", 
    class: ""
  },
  {
    path: "/admin",
    title: "Admin",
    // icon: "admin", 
    class: ""
  },
  {
    path: "/doctor-admin",
    title: "Doctor Admin",
    // icon: "doctor-admin", 
    class: ""
  },
  {
    path: "/doctor-listing",
    title: "Doctor Listing",
    //  icon: "doctor",
    class: "",
  },
  {
    path: "/diagnostic-center",
    title: "Diagnostic Center",
    //   icon: "center",
    class: "",
  },
  {
    path: "/home-care",
    title: "Home Care",
    // icon: "center", 
    class: ""
  },
  {
    path: "/medical-insurance",
    title: "Medical Insurance",
    // icon: "center",
    class: "",
  },
  {
    path: "/user-profile",
    title: "User Profile",
    // icon: "person", 
    class: ""
  },
  {
    path: "/table-list",
    title: "Table List",
    // icon: "content_paste",
    class: "",
  },
  {
    path: "/typography",
    title: "Typography",
    //icon: "library_books",
    class: "",
  },
  {
    path: "/icons",
    title: "Icons",
    // icon: "bubble_chart", 
    class: ""
  },

  {
    path: "/notifications",
    title: "Notifications",
    //icon: "notifications",
    class: "",
  },



];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
