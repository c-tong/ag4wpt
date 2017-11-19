import { Component } from "@angular/core";
import { ReferentialService } from "./../services/referential.service";
import { SharedService } from './../services/shared.service';

@Component({
    selector: "side-bar",
    templateUrl: "./sidebar.component.html?v=${new Date().getTime()}",
    styleUrls: ['./sidebar.component.css?v=${new Date().getTime()}']
})

export class SidebarComponent {
    standard: string;
    advanced: string;
    clientsObservable: any[];
    clientsPromise: any[];

    results: string[];

    filteredCountriesMultiple: any[];


    constructor(private referentialService: ReferentialService, private sharedService: SharedService) {
        this.standard = 'left';
        this.advanced = 'right';

    }

    filterCountryMultiple(event) {
        let query = event.query;
        this.referentialService.getClients().then(countries => {
            this.filteredCountriesMultiple = this.filterCountry(query, countries);
        });
    }

    filterCountry(query, countries: any[]): any[] {
        //in a real application, make a request to a remote url with the query and return filtered results, for demo we filter at client side
        let filtered: any[] = [];
        for (let i = 0; i < countries.length; i++) {
            let country = countries[i];
            if (country.name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
                filtered.push(country);
            }
        }
        return filtered;
    }

    searchClients(event) {
        this.referentialService.searchClients(event.query).subscribe(
            res => {
                this.results = res.data;
            },
            err => {
                console.log('Something went wrong!');
            }
        );
    }

    search() {
        this.sharedService.publishData('search clicked');
        this.openSearch();
        console.log(this.clientsPromise);
        console.log(this.clientsObservable);
    }

    customize() {
        this.sharedService.publisCustomization('cutomize clicked');
        this.openSearch();
        console.log(this.clientsPromise);
        console.log(this.clientsObservable);
    }


    openSearch() {
        if (this.standard == 'left translate')
        {
            this.standard = 'left';
            this.advanced = 'right';
        }
        else {
            this.standard = 'left translate';
            this.advanced = 'right translate';
        }
    }

    openAdvanced() {
        if (this.advanced == 'right translate translateAdvanced')
        {
            this.advanced = 'right translate';

        }
        else {
            this.advanced = 'right translate translateAdvanced';

        }
    }
}