import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }
  
  postDocument(document:any)
  {
    return this.http.post("http://localhost:9090/doc-api/",document)
  }

}
