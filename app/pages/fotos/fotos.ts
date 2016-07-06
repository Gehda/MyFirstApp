import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import { FotoPage } from '../fotos/foto';
import { FotoService } from '../fotos/foto.service';

@Component({
    templateUrl: '/build/pages/fotos/fotos.html',
    providers:[FotoService]
})
export class FotosPage implements OnInit {
    constructor(private navController: NavController, private fotoService: FotoService) {
        this.testRoot = FotoPage;     
        
}

     private testRoot: any;
     public myArray = [];
    ngOnInit():any {
        this.fotoService.getFotos("Starwars").then(res => this.myArray=res);
    }

    clickMethod(item){
        this.navController.push(FotoPage,{item:item});
    }
    deleteItem(item){
        this.myArray.splice(this.myArray.indexOf(item),1);
    }

}