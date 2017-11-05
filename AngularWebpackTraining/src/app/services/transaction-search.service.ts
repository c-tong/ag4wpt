import { Injectable } from "@angular/core";
import { TransactionSearch } from "./../transaction-search";
import { TransactionSearchMock } from "./../mock-transaction-search";

@Injectable()
export class TransactionSearchService {
    getTransactionSearch(): Promise<TransactionSearch[]> {
        return Promise.resolve(TransactionSearchMock);
    }
}