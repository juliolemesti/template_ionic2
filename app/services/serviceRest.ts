import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
 
export class serviceRest {  
    static get parameters() {
        return [[Http]];
    }
 
  constructor(private http:Http) {
    
  }
 
    search(params) {
        var url = 'http://(!!url!!))?query=&query=' + encodeURI(params);
        var response = this.http.get(url).map(res => res.json());
    return response;
    }
}