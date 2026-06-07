import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { Photo, PHOTOS } from '../data';

@Component({
  selector: 'app-videos',
  templateUrl: 'videos.page.html',
  styleUrls: ['videos.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class VideosPage {
  photos: Photo[] = PHOTOS;
  
  publicVideos = [
    "https://www.w3schools.com/html/mov_bbb.mp4",
    "https://vjs.zencdn.net/v/oceans.mp4",
    "https://www.w3schools.com/html/movie.mp4",
    "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/720/Big_Buck_Bunny_720_10s_1MB.mp4"
  ];

  constructor() {}

  getVideoUrl(index: number) {
    return this.publicVideos[index % this.publicVideos.length];
  }

  togglePlay(videoElement: HTMLVideoElement) {
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }
}