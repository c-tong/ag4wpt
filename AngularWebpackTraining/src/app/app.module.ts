import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DataTableModule, SharedModule } from "primeng/primeng";


import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { ResultsComponent } from "./search/results.component";

import { TransactionSearchService } from "./services/transaction-search.service";

@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ResultsComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DataTableModule,
        SharedModule
    ],
    providers: [TransactionSearchService],
    bootstrap: [AppComponent]
})
export class AppModule { }
