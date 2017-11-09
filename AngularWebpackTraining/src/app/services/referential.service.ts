import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ReferentialService {
    constructor(private http: HttpClient) { }

    getClients() {
        return this.http.get<any>('src/assets/mock-clients.json')
            .toPromise()
            .then(res => <any[]>res.data)
            .then(data => { return data; });
    }

    searchClients(term: string): Observable<any> {
        if (!term.trim()) {
            return of ("");
        }

        return this.http.get<any>('src/assets/mock-clients.json');
    }
}