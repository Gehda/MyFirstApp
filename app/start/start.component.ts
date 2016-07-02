import { Component, OnInit } from '@angular/core';
import { Platform, ionicBootstrap } from 'ionic-angular';
import { StatusBar } from 'ionic-native';


@Component({
    
    selector: 'app-start',
    templateUrl: `<span>thats my boy</span>`
})
export class StartComponent implements OnInit {
    constructor(private platform:Platform) { 

        platform.ready().then(() => {
        // Okay, so the platform is ready and our plugins are available.
        // Here you can do any higher level native things you might need.
        StatusBar.styleDefault();
    });

    }

    ngOnInit() { }

}

ionicBootstrap(StartComponent);