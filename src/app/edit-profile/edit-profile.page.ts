import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavController } from '@ionic/angular';
import { ProfileService } from '../profile/profile.service';
import { UserProfile } from '../data';
import { addIcons } from 'ionicons';
import { close, location, mail, call } from 'ionicons/icons';

@Component({
  selector: 'app-edit-profile',
  templateUrl: 'edit-profile.page.html',
  styleUrls: ['edit-profile.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EditProfilePage implements OnInit {
  editData: UserProfile = {
    ownerName: '', petName: '', breed: '', location: '', email: '', phone: ''
  };

  constructor(
    private profileService: ProfileService,
    private navCtrl: NavController
  ) {
    addIcons({ close, location, mail, call });
  }

  ngOnInit() {
    this.editData = { ...this.profileService.getProfile() };
  }

  goBack() {
    this.navCtrl.back();
  }

  saveProfile() {
    this.profileService.updateProfile(this.editData);
    this.navCtrl.back();
  }
}