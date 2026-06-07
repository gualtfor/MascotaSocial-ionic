import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ProfileService } from './profile.service';
import { UserProfile, Photo, PHOTOS } from '../data';
import { addIcons } from 'ionicons';
import { location, mail, call, create, shareSocial, grid, playCircle, personCircle } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.page.html',
  styleUrls: ['profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ProfilePage {
  profile!: UserProfile;
  photos: Photo[] = PHOTOS;
  selectedTab: string = 'grid';

  constructor(
    private profileService: ProfileService,
    private navCtrl: NavController
  ) {
    addIcons({ location, mail, call, create, 'share-social': shareSocial, grid, 'play-circle': playCircle, 'person-pin': personCircle });
  }

  ionViewWillEnter() {
    this.profile = this.profileService.getProfile();
  }

  goToEditProfile() {
    this.navCtrl.navigateForward('/edit-profile');
  }
}