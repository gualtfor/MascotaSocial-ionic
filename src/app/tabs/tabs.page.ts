import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { addIcons } from 'ionicons';
import { home, image, addCircle, playCircle, person } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class TabsPage {

  constructor() {
    addIcons({ home, image, 'add-circle': addCircle, 'play-circle': playCircle, person });
  }

  openAddMenu() {
    console.log('Botón de agregar presionado!');
  }

}