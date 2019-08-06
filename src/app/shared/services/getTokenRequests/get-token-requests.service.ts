import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment_url } from 'src/environments/environment.prod';
import { GetAllTokensReponseModels, insertTokenFromListModel, RemoveLiveTokenModel } from 'src/app/shared/models';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class GetTokenRequestsService {
  // Define url in this object so editing url will be easy
  urls = {
    getAlltokens: environment_url + 'getalltokens',
    getListTokens: environment_url + 'getListTokens',
    insertTokenData: environment_url + 'inserttokendata',
    getTokenData: environment_url + 'gettokendata',
    removeLiveToken: environment_url + 'removeToken',
    getDeployTokens: environment_url + 'getdeploytokens'
  };
  constructor(private http: HttpClient, private router: Router) { }
  getAllTokens(): Observable<HttpResponse<any>> {
    const httpOptions = this.getHeaders();
    return this.http.get<HttpResponse<GetAllTokensReponseModels>>(this.urls.getAlltokens, httpOptions);
  }
  removeToken(body: RemoveLiveTokenModel): Observable<HttpResponse<any>> {
    const httpOptions = this.getHeaders();
    return this.http.post<HttpResponse<any>>(this.urls.removeLiveToken, body, httpOptions);
  }
  getListTokens(): Observable<HttpResponse<any>> {
    const httpOptions = this.getHeaders();
    return this.http.get<HttpResponse<GetAllTokensReponseModels>>(this.urls.getListTokens, httpOptions);
  }
  insertTokenFromList(tokenData: insertTokenFromListModel): Observable<HttpResponse<any>> {
    const httpOptions = this.getHeaders();
    return this.http.post<HttpResponse<any>>(this.urls.insertTokenData, tokenData, httpOptions);

  }
  getTokenData(): Observable<HttpResponse<any>> {
    const httpOptions = this.getHeaders();
    return this.http.get<HttpResponse<any>>(this.urls.getTokenData, httpOptions);
  }
  getDeployTokens() {
    const httpOptions = this.getHeaders();
    return this.http.get<HttpResponse<any>>(this.urls.getDeployTokens, httpOptions);
  }
  getHeaders() {
    const httpOptions = {
      headers: new HttpHeaders({
        token: sessionStorage.getItem('authToken')
      }),
      observe: 'response' as 'body'
    };
    return httpOptions;
  }
  // refreshToken(response: Observable<HttpResponse<any>>) {
  //   response.subscribe(res => {
  //     console.log('in subscription')
  //     console.log(res);
  //     const headerValue = res.headers.get('token');
  //     const status      = res.body['status'];
  //     if (status) {
  //       sessionStorage.setItem('token', headerValue);
  //     } else {
  //       // sessionStorage.clear();
  //       // this.router.navigate(['']);
  //     }
  //   });
  //   return response;
  // }
}
