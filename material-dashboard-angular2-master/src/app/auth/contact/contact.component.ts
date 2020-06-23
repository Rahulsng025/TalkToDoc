import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'app/model/contact.model';
import { ContactService } from 'app/Services/contact.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  newContactDetails: ContactModel[];
  ismessageSend: boolean;

  constructor(private router: Router, private contactService: ContactService) { }

  ngOnInit(): void {
  }

  onSubmit() {


    this.contactService
      .postcontact(this.contactService.form.value)
      .subscribe((_data: ContactModel[]) => {

        // passing the new form values to the 'appointment-details' component and its service.

        this.contactService.form.reset();
        this.contactService.initializeFormGroup();
        this.ismessageSend = true;
      });
    // this.FlashMessage.show('Appointment Booked Successfully', { cssClass: 'alert-success', timeout: 5000 });
    // this.router.navigate(['/main/appointment-details']);
  }
}

