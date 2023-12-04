import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomImageDirective]'
})
export class ZoomImageDirectiveDirective {

  private scaleFactor: number = 5.2; // Facteur d'échelle pour le zoom

  @HostBinding('style.transform') transform: string = '';

  constructor() { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.zoom(this.scaleFactor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.zoom(1); // Réinitialiser à la taille normale
  }

  private zoom(factor: number): void {
    this.transform = `scale(${factor})`;
  }

}
