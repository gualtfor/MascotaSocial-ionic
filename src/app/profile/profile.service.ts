import { Injectable } from '@angular/core';
import { UserProfile } from '../data';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private userProfile: UserProfile = {
    ownerName: "Christian Gualteros",
    petName: "Toby",
    breed: "Golden Retriever",
    location: "Bogotá, Colombia",
    email: "christiangualteros36@gmail.com",
    phone: "+57 313 377 6590"
  };

  constructor() { }

  getProfile(): UserProfile {
    return this.userProfile;
  }

  updateProfile(newProfile: UserProfile) {
    this.userProfile = Object.assign({}, newProfile);
  }
}