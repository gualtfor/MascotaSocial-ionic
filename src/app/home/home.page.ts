import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Browser } from '@capacitor/browser'; 
import { Photo, PHOTOS } from '../data';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HomePage {
  photos: Photo[] = PHOTOS;
  urlText: string = '';

  constructor() {}

  async openUrl() {
    if (this.urlText.trim() !== '') {
      let formattedUrl = this.urlText;
      if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
        formattedUrl = 'https://' + formattedUrl;
      }
      
      await Browser.open({ url: formattedUrl });
    }
  }
}