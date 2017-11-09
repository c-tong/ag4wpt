import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule  } from '@angular/common/http';

import
{
    DataTableModule, SharedModule, SidebarModule, ButtonModule,
    AutoCompleteModule
} from "primeng/primeng";


import { AppComponent } from "./app.component";
import { SearchComponent } from "./search/search.component";
import { ResultsComponent } from "./search/results.component";
import { SidebarComponent } from "./search/sidebar.component";

import { SharedService } from './services/shared.service';
import { TransactionSearchService } from "./services/transaction-search.service";
import { ReferentialService } from "./services/referential.service";


@NgModule({
    declarations: [
        AppComponent,
        SearchComponent,
        ResultsComponent,
        SidebarComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        DataTableModule,
        SharedModule,
        SidebarModule,
        ButtonModule,
        AutoCompleteModule,
        HttpClientModule 
    ],
    providers: [SharedService, TransactionSearchService, ReferentialService],
    bootstrap: [AppComponent]
})
export class AppModule { }
