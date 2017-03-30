import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app',
    template: `
    <div>
        <nav class='navbar navbar-inverse'>
            <div class='container-fluid'>
            <div class="navbar-header">
            <img alt="Brand" class="img-rounded" src="https://cdn.auth0.com/blog/angular2-series/angular2-logo.png" width="50" height="50">
     </div>
                <ul class='nav navbar-nav'  >
                      <li><a [routerLink]="['/welcome']">Home</a></li>
                       <li><a [routerLink]="['/login']">logout</a></li>
                </ul>
            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     ` 
})

export class AppComponent { }