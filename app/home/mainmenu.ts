import { Component } from '@angular/core';

@Component({
    selector: 'app',
    styleUrls: ['./app.css'],
    template: `
    <div>
        <nav class='navbar '>
            <div class='container-fluid'>
            <div class="navbar-header">
      
     </div>

            </div>
        </nav>
        <div class='container'>
            <router-outlet></router-outlet>
        </div>
     </div>
     ` 
})
export class HomeComponent {
    pageTitle: string = `PPS`;
}
