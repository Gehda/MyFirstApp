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
                            console.log(response.toString());
                            const jsonRes = response.json();
                            console.log(jsonRes);
                            if(!jsonRes.items)return console.log(jsonRes);
                            else return jsonRes.items;
                        })
                        .catch((response)=>console.log(response));
        
    }

}