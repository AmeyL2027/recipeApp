import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';  // by this defaultly it will always be recipe page

  onNavigate(feature: string){
    this.loadedFeature = feature;
  }
}
