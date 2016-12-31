import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
    private username: String;
    private client_id = '2604d562482e6a3ab659';
    private client_secret = '31d7d67c8dd37716d36f3db2c0fb2b179ca64ea5';

    constructor(private _http: Http) {
        console.log('Github Service Ready...');
        this.username = 'nguyendan07';
    }

    getUser() {
        return this._http.get('http://api.github.com/users/' + this.username + '?client_id=' + this.client_id + '&client_secret' + this.client_secret)
            .map(res => res.json());
    }
}