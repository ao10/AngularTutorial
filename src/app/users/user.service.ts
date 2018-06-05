import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService{
    constructor(private http: HttpClient){}
    url = 'https://jsonplaceholder.typicode.com'
    getUsers(){
        return this.http.get(`${this.url}/posts`);
    }
}