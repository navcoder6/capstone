import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppCommunicationService {
    private menuToggledSubject: Subject<boolean> = new Subject<boolean>();
    public menuToggledEvent: Observable<boolean>;
    constructor() {
        this.menuToggledEvent = this.menuToggledSubject.asObservable();
    }

    public toggleMenu(isOpen: boolean) {
        this.menuToggledSubject.next(isOpen);
    }
}