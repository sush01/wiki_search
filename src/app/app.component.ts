import { Component } from '@angular/core';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { PageListComponent } from './page-list/page-list.component';

@Component({
  selector: 'app-root',
  imports: [ SearchBarComponent,PageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  onTerm(term:string){
    console.log("I am what you entered", term);

  }


}
