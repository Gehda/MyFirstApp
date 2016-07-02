import { Component, OnInit } from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    templateUrl: '/build/pages/fotos/fotos.html'
})
export class FotosPage implements OnInit {
    constructor(private navController: NavController) {


     }
     public myArray = [
         {  objectId:1,
            name:'hello',
            description:'it is this element'
        },{  objectId:2,
            name:'hello123',
            description:'it is this element'
        },{  objectId:3,
            name:'hello321',
            description:'it is this element'
        },{  objectId:4,
            name:'hell123123o',
            description:'it is this element'
        },
     ]
    ngOnInit() { }

    clickMethod(item){
        console.log(item);
    }

}