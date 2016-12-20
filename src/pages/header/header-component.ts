import { Component } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: 'header-component.html'
})

export class HeaderComponent {
    overlayHidden: boolean = true;
    public hideOverlay() { this.overlayHidden = true; }
    public showOverlay() { this.overlayHidden = false; }
}