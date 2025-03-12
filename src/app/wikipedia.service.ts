import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface WikipediaResponse {
  query: {
    search: {
      title: string;
      snippet: string;
      pageid: number;
    }[];
  };
}

@Injectable({
  providedIn: 'root'
})
export class WikipediaService {
  constructor(private http: HttpClient) {}

  search(term: string): Observable<{ title: string; wordcount: number; snippet: string }[]> {
    return this.http
      .get<WikipediaResponse>('https://en.wikipedia.org/w/api.php', {
        params: {
          action: 'query',
          format: 'json',
          list: 'search',
          utf8: '1',
          srsearch: term,
          origin: '*'
        }
      })
      .pipe(
        map(response =>
          response.query?.search?.map(result => ({
            title: result.title,
            snippet: result.snippet,
            wordcount: 0 // Adding a default wordcount to match expected structure
          })) || [] // Fallback to an empty array if search is undefined
        )
      );
  }
}
