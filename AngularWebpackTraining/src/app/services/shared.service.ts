import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class SharedService {

    private jsonCondition = new Subject<string>();
    private customized = new Subject<string>();

    jsonCondition$ = this.jsonCondition.asObservable();
    customized$ = this.customized.asObservable();

    publishData(data: string) {
        this.jsonCondition.next(data);
    }

    publisCustomization(data: string)
    {
        this.customized.next(data);
    }
}