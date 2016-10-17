import {Component, HostListener} from '@angular/core';

const HEADER_HEIGHT:number = 126;

@Component({
  selector: 'map-panel',
  styleUrls: ['./map-panel.component.scss'],
  templateUrl: './map-panel.component.html'
})
export class MapPanel {


  mapHeight : number = window.innerHeight - HEADER_HEIGHT;

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.mapHeight = (event.target.innerHeight - HEADER_HEIGHT);
  }
}
