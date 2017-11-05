import { Component, OnInit } from "@angular/core";

import { TransactionSearchService } from "./../services/transaction-search.service";

import { TransactionSearch } from "./../transaction-search";

@Component({
    selector: "search-results",
    templateUrl: "./results.component.html"
})

export class ResultsComponent implements OnInit {
    transactionSearchResults: TransactionSearch[] = [];
    cols: any[];
    rows: number;
    pageLinks: number;
    rowsPerPageOptions: any[];
    
    constructor(private transactionSearchService: TransactionSearchService) { }

    ngOnInit(): void {
        this.transactionSearchService.getTransactionSearch()
            .then(transactionSearch => this.transactionSearchResults = transactionSearch);
            
        this.cols = [
            { field: 'id', header: 'Id' },
            { field: 'codeName', header: 'CodeName' },
            { field: 'client1', header: 'Client1' }
        ];

        this.rows = 5;
        this.pageLinks = 3;
        this.rowsPerPageOptions = [5, 10, 20];
    }
}