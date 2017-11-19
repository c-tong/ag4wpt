import { Component, OnInit, OnChanges } from "@angular/core";

import { TransactionSearchService } from "./../services/transaction-search.service";
import { SharedService } from './../services/shared.service';


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
    loading: boolean;

    constructor(private transactionSearchService: TransactionSearchService, private sharedService: SharedService) { }

    ngOnInit(): void {
        this.loading = true;
        setTimeout(() => {
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
            this.loading = false;
        }, 1000);


        console.log('ResultsComponent ngOnInit ');
        this.sharedService.jsonCondition$.subscribe(
            data => {
                this.loading = true;
                setTimeout(() => {

                    this.cols = [
                        { field: 'id', header: 'Id' },
                        { field: 'codeName', header: 'CodeName' }
                    ];

                    this.transactionSearchResults = [
                        { id: 77, codeName: 'C77', client1: 'AZ' },
                        { id: 777, codeName: 'C777', client1: 'ER' }];
                    this.loading = false;

                }, 1000);

            });

        this.sharedService.customized$.subscribe(
            data => {

                this.cols = [
                    { field: 'id', header: 'Id' },
                    { field: 'codeName', header: 'CodeName' }
                ];


            });

    }

}