import { Injectable } from '@angular/core';


@Injectable()
export class SessionService {
    private sessionStorageKey = 'esim-session-storage';

    private _session: ISession;
    get session(): ISession {
        return this._session;
    }

    public update(session: ISession) {
        this._session = session;
        this.save();
    }

    public end() {
        this.update(void 0);
    }

    public isControlUser():boolean{
        return this._session.IsControlUser;
    }

    private save() {
        sessionStorage.setItem(this.sessionStorageKey, JSON.stringify(this._session, null, '\t'));
    }

    private retrieve() {
        try {
            const sessionString = sessionStorage.getItem(this.sessionStorageKey);

            if (sessionString && sessionString !== 'undefined') {
                this.update(JSON.parse(sessionString));
            }
        } catch (e) {
            console.warn('Error in retrieving session: ' + e);
        }
    }

    constructor(){
        this.retrieve();
    }
}

export interface ISession {
    IsAdmin: boolean,
    IsControlUser: boolean,
    AccessToken: string,
    NotificationServiceUrl:string
}