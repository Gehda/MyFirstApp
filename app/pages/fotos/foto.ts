import { Component, OnInit } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

@Component({
    templateUrl: '/build/pages/fotos/foto.html'
})
export class FotoPage implements OnInit {
    constructor(private navController: NavController, private navParams: NavParams) { }


    private myItem = this.navParams.get('item');
    ngOnInit() { }

}