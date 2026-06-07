import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Photo, PHOTOS } from '../data';

@Component({
  selector: 'app-photos',
  templateUrl: 'photos.page.html',
  styleUrls: ['photos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class PhotosPage {
  photos: Photo[] = PHOTOS;
  categories: string[] = ['Todos', 'Perros', 'Gatos', 'Aves', 'Exóticos'];
  activeCategory: string = 'Todos';

  constructor() {}

  get filteredPhotos() {
    if (this.activeCategory === 'Todos') {
      return this.photos;
    }
    return this.photos.filter(p => p.category === this.activeCategory);
  }

  setCategory(category: string) {
    this.activeCategory = category;
  }
}