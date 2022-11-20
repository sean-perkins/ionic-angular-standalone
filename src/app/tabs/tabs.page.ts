import { CommonModule } from '@angular/common';
import { Component, EnvironmentInjector } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  imports: [
    IonicModule,
    CommonModule,
  ],
  standalone: true
})
export class TabsPage {

  constructor(public environmentInjector: EnvironmentInjector) { }

}
