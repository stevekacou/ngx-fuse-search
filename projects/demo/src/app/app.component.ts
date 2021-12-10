import { HttpClient} from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxFuseSearchOptions } from 'ngx-fuse-search';
import {map} from 'rxjs/operators';
type Country = {
  name: string; 
  prefix: string;
  code: string;
  flag?: string;
  phoneLength: number;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'demo';
  searchTerm: string =  ""; 
  countries: Country[] = [];
  trackByCode = (index: number, item: any) => item.code;

  searchOptions: NgxFuseSearchOptions = {
    isCaseSensitive: false,
    keys: ['name'],
    shouldSort: true
  };

 constructor(private readonly http: HttpClient) {
 }
 
 ngOnInit() {
  this.getCountries().pipe(
    map(values  => {
    const newValues = values.map(country => ({
      name: country.name,
      prefix: `+${country.callingCodes[0]}`,
      flag: country.flag || country.flags.svg,
      code: country.alpha2Code
    } as Country)
    );
    return newValues;

  })
  ).subscribe((values ) => {
    console.info(values);
    this.countries = values;
  });
 }

 getCountries() {
  return this.http.get<any[]>("https://restcountries.com/v2/all");
  }
}
