import {OnInit} from '@angular/core';

// user/admin module- components should inherit from this class to see if session is still valid or not
export class BaseComponent implements OnInit {

    public ngOnInit() {
        // Check user session here
    }
}
