import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DropdownListComponent } from './dropdownlist/dropdown-list.component';
import { PagerService } from './_services/pager.service';

@NgModule({
  declarations: [
    AppComponent,
    DropdownListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PagerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
