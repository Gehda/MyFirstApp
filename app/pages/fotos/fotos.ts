import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';
import { FotoPage } from '../fotos/foto';

@Component({
    templateUrl: '/build/pages/fotos/fotos.html'
})
export class FotosPage implements OnInit {
    constructor(private navController: NavController) {
        this.testRoot = FotoPage;     
    
}

     private testRoot: any;
     public myArray = [
         {  objectId:1,
            name:'hello',
            description:'it is this element',
            icon:'laptop'
        },{  objectId:2,
            name:'hello123',
            description:'it is this element',
            icon:'book'
        },{  objectId:3,
            name:'hello321',
            description:'it is this element',
            icon:'american-football'
        },{  objectId:4,
            name:'hell123123o',
            description:'it is this element',
            icon:'leaf'
        },
     ]
    ngOnInit() { }

    clickMethod(item){
        this.navController.push(FotoPage,{item:item});
    }

}