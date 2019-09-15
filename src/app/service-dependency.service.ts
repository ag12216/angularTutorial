import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Idata } from 'src/models/model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceDependencyService {

  constructor(private http: HttpClient) { }

  private url = "https://api.github.com/users/hadley/orgs";
  private postUrl = "https://tickpro.rsec.co.in/DataPub/api/SData/ScripData";
  getRequest(): Observable<Idata[]>{
    return this.http.get<Idata[]>("https://api.github.com/users/hadley/orgs");
  }

  public dict = {
    "Count": "50",
    "DoCompress": false,
    "RequestCode": "213",
    "Reserved": "SMC0121",
    "Source": "I",
    "UserId": "PTM001",
    "UserType": "C",
    "Data": "{\"Exch\":\"1\",\"ScripIdLst\":\"\",\"SecIdxCode\":\"13\",\"Seg\":\"1\"}"
};

  posRequest(){
    return this.http.post(this.postUrl,this.dict,{headers : new HttpHeaders({
      'Content-Type':  'application/json',
    })});
  }

  getList() {
    return [
      { name: "Akash", id: 1 },
      { name: "Akash", id: 1 },
      { name: "Akrgeash", id: 1 },
      { name: "Akash", id: 1 }
    ];
  }
}
