import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

import { TransactionSearch } from "./../transaction-search";
import { TransactionSearchMock } from "./../mock-transaction-search";

import { Observable } from 'rxjs/Rx';

@Injectable()
export class TransactionSearchService {

    constructor(private http: HttpClient) { }

    getTransactionSearch(): Promise<TransactionSearch[]> {
        return Promise.resolve(TransactionSearchMock);
    }

    searchTransaction(criteria: string, sortOrder: string): Observable<any> {
      
        return this.http.get<any>('src/assets/mock-clients.json');
    }
}