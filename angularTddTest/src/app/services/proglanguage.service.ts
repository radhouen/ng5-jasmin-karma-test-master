import {BrowserModule} from '@angular/platform-browser';
import {Http, Response, RequestOptions, Headers} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import {CommonModule} from '@angular/common';
import {Injectable} from '@angular/core';

@Injectable()
export class ProglanguageService {
  private servUrl = 'https://my-json-server.typicode.com/radhouen/fakeApi/progLanguages';
  constructor(private http: Http) {}
  getProgLanguages(): Observable < Response > {
    return this.http.get(this.servUrl)
     .map((res: Response) => res)
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


  }
  getProgLanguageById(id): Observable < Response > {
    return this.http.get(this.servUrl + '/' + id)
     .map((res: Response) => res)
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


  }

  getProgLanguagesByName(name): Observable < Response > {
    return this.http.get(this.servUrl + '?id=' + name)
     .map((res: Response) => res)
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));


  }


}
