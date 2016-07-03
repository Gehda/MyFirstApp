import {Component} from '@angular/core'
import {HomePage} from '../home/home';
import { FotosPage } from '../fotos/fotos';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {

  private tabHome: any;
  private tabFotos: any;

  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tabHome = HomePage;
    this.tabFotos = FotosPage;
  }
}
