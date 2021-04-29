import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import countries from './_files/countries.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dropdownFrom = new FormGroup({
    selectedItem: new FormControl({ value: '', disabled: true }),
  });

  title = 'AngularDropDownIK';

  objectList = [];
  defaultName = 'Select Country';

  /*Json dosyası içerisinde yer alan obj'e ait
  propertnameler değiştirildiğinde dropdown da gösterilen değer ve emit edilen value değeri değişmektedir.
  Örnek vermek gerekirse aşağıdaki kod blogu çalıştırılabilir.
  displayProperty = 'code';
  value = 'dial_code';
  */

  displayProperty = 'name';
  value = 'code';

  constructor() {
  }

  ngOnInit(): void {
    this.objectList = countries;
  }

  onSelectedValue(event: any): void {
    this.dropdownFrom.controls.selectedItem.setValue(event);
  }
}
