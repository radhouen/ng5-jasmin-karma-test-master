import {Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Headers, Response} from '@angular/http';
import {ProglanguageService} from './services/proglanguage.service';
import {Proglanguages} from './models/proglanguages';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Languages';
  languages: Array<any>;
  totalRec: number;
  page: 1;
  pageSize: 3;
  total = 0 ;
  language: Array<any>;
  load = false;
  languagename: '';

  constructor(private serv: ProglanguageService) {
    this.languages = new Array<any>();
    this.language = new Array<any>();
  }

   public filterById(event: any) {
    this.languagename = event.target.value;
    this.serv.getProgLanguagesByName(this.languagename).subscribe((resp: Response) => {
      this.languages = resp.json()   ;
      console.log(this.languages);
  });
  }

  viewItem(id) {
      this.serv.getProgLanguageById(id).subscribe((resp: Response) => {
      this.language = resp.json()   ;
    });
    this.load = true;
  }
  sortableById() {
    this.languages.reverse();
  }
  sortableByTitle() {
    this.languages.sort();
    this.languages.reverse();
  }
  ngOnInit() {
    this.loadData();
    console.log('languages Listes :', this.languages);
    this.total = this.languages.length;
  }

  private loadData() {
    this.serv.getProgLanguages().subscribe((resp: Response) => {
        this.languages = resp.json();
  });
  }

}
