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
    class: "",
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
    class: "",
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
    class: "",
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
    class: "",
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
  isUserLinksActive: boolean = false;
  menuItems: any[];
  menuItemsAdmin: RouteInfo[] = [
    { path: "/admin/doctors", title: "Doctors", class: "" },

    { path: "/admin/diagnostic", title: "Diagnostic", class: "" },



    { path: "/admin/homecare", title: "Home Care", class: "" },

    { path: "/admin/medical", title: "Medical Insurance", class: "" }
  ];

  // currently active links (admin's or user's) based on User type.
  activeNavLinks: any[];

  // switches between the Admin links and User links
  switchLinks() {
    return this.isUserLinksActive ? this.menuItems : this.menuItemsAdmin;
  }

  // future usage to change the links (ie Admin links or User links)
  // constructor(private loginService: LoginService) {
  //   this.loginService.getActiveUser().subscribe((linkStatus: boolean) => {
  //     this.isUserLinksActive = linkStatus;
  //   });
  // }
  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter((menuItem) => menuItem);
    this.activeNavLinks = this.switchLinks();
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
      return false;
    }
    return true;
  }
}
