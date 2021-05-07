import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";
import {ContactUsService} from "../services/contact-us/contact-us.service";
import {HttpErrorResponse} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent
{

  error = false;
  loading = false;

  email: FormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);

  message: FormControl = new FormControl('', [
    Validators.required,
  ]);

  constructor(private contactUsService: ContactUsService, private snackBar: MatSnackBar)
  {

  }

  openSnackBar(message: string, action: string): void
  {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'primary'
    });
  }

  openErrorSnackBar(message: string, action: string): void
  {
    this.snackBar.open(message, action, {
      duration: 2000,
      panelClass: 'warning'
    });
  }

  public submitForm(): void
  {
    this.error = false;
    this.loading = true;

    this.contactUsService.postEmail('contact-us', this.message.value, this.email.value).subscribe(
      data => {
        this.loading = false;
        this.openErrorSnackBar('Email sent', '');
      },
      (error: HttpErrorResponse) => {
        if (!environment.production)
        {
          this.loading = false;
          this.error = true;

          if (error.status === +429)
          {
            // {"detail": "Request was throttled. Expected available in 57 seconds."}
            const m = 'Available in ' + error.error.detail.substring(45, error.message.length - 3);
            this.openErrorSnackBar(m, '');
            return;
          }
          this.openErrorSnackBar('Error', '');
        }
      }
    );
  }

}
