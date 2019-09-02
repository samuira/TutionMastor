import { Injectable } from "@angular/core";
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {
catchError,
map,
tap,
switchMap,
debounceTime,
distinctUntilChanged
} from 'rxjs/operators';

@Injectable()
export class AppService{
    path: string = "http://localhost:8089/api/";

    constructor(public http : HttpClient) {
        
    }
    GetHttpHeaders() : HttpHeaders {

        var headers: HttpHeaders = new HttpHeaders();
        headers = headers.append('Content-Type', 'application/json');
        headers = headers.append('x-corralation-id', '12345');

        // if (localStorage.getItem('token')) {
        //         console.log(localStorage.getItem('token'));
        //         headers = headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
        // }
        return headers;

    }
    PostData(data,url):Observable<any>{
        return this.http.post(this.path+url,data,{
            headers: this.GetHttpHeaders()
        }).pipe(
            map(
                response => {
                    return response;
                }
            )
        )
    }
    GetData(url): Observable<any>{
        return this.http.get(this.path+url,{
            headers: this.GetHttpHeaders()
        }).pipe(
            map(
                response => {
                    return response;
                }
            )
        )
    }

    postFormData(data,url):Observable<any>{
        var headers: HttpHeaders = new HttpHeaders();
        if (localStorage.getItem('token')) {
                headers = headers.append('Authorization', `Bearer ${localStorage.getItem('token')}`);
        }
        return this.http.post(this.path+url,data,{
            headers: headers
        }).pipe(
            map(
                response => {
                    return response;
                }
            )
        )
    }
}