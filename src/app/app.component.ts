import { Component } from '@angular/core';
import { SearchBarComponent } from "./search-bar/search-bar.component";
import { PageListComponent } from './page-list/page-list.component';
import { WikipediaService } from './wikipedia.service';




@Component({
  selector: 'app-root',
  imports: [ SearchBarComponent,PageListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'wiki_search';
  pages:{title:string; wordcount:number; snippet:string}[] = [];


  constructor(private wikipedia: WikipediaService){

  }
  
  onTerm(term:string){
    this.wikipedia.search(term).subscribe((response:any)=>{
      this.pages = response.query.search;
    
    })

  }


}
