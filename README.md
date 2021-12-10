# Description
An angular 12 library that export a pipe to filter list with fuse.js

learn more about fuse here https://fusejs.io/
# Installation

```
npm i ngx-fuse-search --save
yarn add ngx-fuse-search 
```

# Usage

compatible with **angular ~12**

import the module in the module you want to use it.

```
import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app';
 
import { NgxFuseSearchModule } from 'ngx-fuse-search';
 
@NgModule({
  imports: [BrowserModule, NgxFuseSearchModule, FormsModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
```

And use pipe in your component

```
import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  template: `
    <div>
        <input type="text" [(ngModel)]="searchTerm">
        <div *ngFor = "let country of countries | ngxFuseSearch:searchTerm:fuseOptions" >
          <p>
            {{country.name}}
          </p>
        </div>
 
    </div>  
  `
}) 
export class AppComponent {
  searchTerm:  string; 
  fuseOptions: NgxFuseSearchOptions = {
    isCaseSensitive: false,
    keys: ['name'],
    shouldSort: true
  };

  
  countries: string[] = [
    {
        "name": "Australia",
        "prefix": "+61",
        "flag": "https://flagcdn.com/au.svg",
        "code": "AU"
    },
    {
        "name": "Austria",
        "prefix": "+43",
        "flag": "https://flagcdn.com/at.svg",
        "code": "AT"
    },
    {
        "name": "Belgium",
        "prefix": "+32",
        "flag": "https://flagcdn.com/be.svg",
        "code": "BE"
    },
    {
        "name": "Brazil",
        "prefix": "+55",
        "flag": "https://flagcdn.com/br.svg",
        "code": "BR"
    },
    {
        "name": "Virgin Islands (British)",
        "prefix": "+1",
        "flag": "https://flagcdn.com/vg.svg",
        "code": "VG"
    },
];
}
```

Support ngx-fuse-search

ngx-fuse-search is completely free and open-source. If you find it useful, you can show your support by 🌟 it or sharing it in your social network.

Contribute:
Do it (:)

License
MIT © stevekacou

Keywords
angular angular12 angular-search-input angular-search-pipe