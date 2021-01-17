import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'app/model/contact.model';
import { ContactService } from 'app/Services/contact.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  newContactDetails: ContactModel[];
  ismessageSend: boolean;

  constructor(private router: Router, 
    private contactService: ContactService,
    private flashMessagesService: FlashMessagesService,) { }

  ngOnInit(): void {
  }

  onSubmit() {


    this.contactService
      .postcontact(this.contactService.form.value)
      .subscribe((_data: ContactModel[]) => {
      this.flashMessagesService.show('Your Message Successfully Added', { cssClass: 'alert-success', timeout: 5000 });
      
        this.contactService.form.reset();
        this.contactService.initializeFormGroup();
        this.ismessageSend = true;
      });
    // 
    // this.router.navigate(['/main/appointment-details']);
  }
}

