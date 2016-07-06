import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class FotoService {

    constructor(private http: Http) { }

    getFotos(tag){
        //console.log(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${tag}&format=json&nojsoncallback=1`);
        //return "true";
        return this.http.get(`https://api.flickr.com/services/feeds/photos_public.gne?tags=${tag}&format=json&nojsoncallback=1`)
                        .toPromise()
                        .then(response => {
                            let res = response.json();
                            console.log(res);
                            if(!res.items)return console.log(res);
                            else return res.items;
                        })
                        .catch((response)=>console.log(response));
        
    }

}