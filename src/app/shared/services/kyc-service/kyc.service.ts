import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment_url } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KycService {
  mainURL   = environment_url;
  urlForKyc = {
    getKycReq: this.mainURL + 'getkycreq',
    verifyReq:this.mainURL + 'updatekycstatus'
  }
  constructor(private http: HttpClient) { }

  getKycReq(): Observable<any> {
    return this.http.get<any>(this.urlForKyc.getKycReq);
  }
  
  verifyReq( kycData: any ): Observable<any> {
    return this.http.post<any>(this.urlForKyc.verifyReq, kycData);
  }
}
