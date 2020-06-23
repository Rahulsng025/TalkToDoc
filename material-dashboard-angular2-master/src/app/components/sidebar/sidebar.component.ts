import { Component, OnInit } from "@angular/core";

declare const $: any;
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;

}
export const ROUTES: RouteInfo[] = [
  {
    path: "/main/dashboard",
    title: "Dashboard",
    icon: "dashboard",
    class: "",
  },

  {
    path: "/main/doctor-listing",
    title: "Doctor Listing",
    icon: "assignment_ind",
    class: "",
  },
  {
    path: "/main/diagnostic-center",
    title: "Diagnostic Center",
    icon: "account_balance",
    class: "",
  },

  {
    path: "/main/book-test",
    title: "Book Test",
    icon: "science",
    class: ""
  },

  {
    path: "/main/home-care",
    title: "Home Care",
    icon: "add_box",
    class: "",
  },
  {
    path: "/main/medical-insurance",
    title: "Medical Insurance",
    icon: "group_add",
    class: "",
  },
  {
    path: "/main/user-profile",
    title: "User Profile",
    icon: "person",
    class: "",
  },
  {
    path: "/main/table-list",
    title: "Table List",
    icon: "content_paste",
    class: "",
  },
  {
    path: "/main/typography",
    title: "Typography",
    icon: "library_books",
    class: "",
  },
  {
    path: "/main/icons",
    title: "Icons",
    icon: "bubble_chart",
    class: "",
  },

  {
    path: "/main/notifications",
    title: "Notifications",
    icon: "notifications",
    class: "",
  },
];

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent implements OnInit {
  isUserLinksActive: boolean = true;
  menuItems: any[];

  menuItemsAdmin: RouteInfo[] = [
    {
      path: "/main/admin/doctors", title: "Doctors Listing", icon: "person_add", class: ""
    },

    { path: "/main/admin/diagnostic", title: "Diagnostic Centers", icon: "add_business", class: "" },

    { path: "/main/admin/homecare", title: "Home Care", icon: "home", class: "" },

    { path: "/main/admin/medical", title: "Medical Insurance", icon: "medical_services", class: "" },

    { path: "/main/admin/appointment", title: "Appointment Boooking", icon: "import_contacts", class: "" },

    { path: "/main/admin/homecareappointment", title: "Home Care Appointments", icon: "enhanced_encryption", class: "" },

    { path: "/main/admin/booktest", title: "Book Test Appointment", icon: "science", class: "" },

    { path: "/main/admin/user", title: "User Registration", icon: "account_box", class: "" },

    { path: "/main/admin/doctor", title: "Doctor Resgistration", icon: "library_add", class: "" },

    { path: "/main/admin/Diagnostic", title: "Diagnostic Registration", icon: "how_to_reg", class: " " },

    { path: "/main/admin/booktestquery", title: "Test Query", icon: "file_copy", class: "" },

    { path: "/main/admin/booktestcontact", title: "Test Contact", icon: "contacts", class: "" }

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
