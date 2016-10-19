import {Component, HostListener, ViewEncapsulation} from '@angular/core';

const HEADER_HEIGHT:number = 126;

@Component({
  selector: 'map-panel',
  styleUrls: ['./map-panel.component.scss'],
  templateUrl: './map-panel.component.html',
  encapsulation: ViewEncapsulation.None
})
export class MapPanel {


  mapHeight : number = window.innerHeight - HEADER_HEIGHT;

  lat: number = -36.739612;
  lng: number = 174.738668;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mapHeight = (event.target.innerHeight - HEADER_HEIGHT);
  }
}
