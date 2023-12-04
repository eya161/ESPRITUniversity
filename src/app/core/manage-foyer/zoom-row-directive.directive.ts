import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appZoomRowDirective]'
})
export class ZoomRowDirectiveDirective {

  private scaleFactor: number = 1.2; // Adjust the scale factor as needed
  private originalTransform: string='';

  @HostBinding('style.transition') transition: string = 'transform 0.3s ease';
  @HostBinding('style.transform') transform: string = '';

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.originalTransform = this.el.nativeElement.style.transform;
    this.zoom(this.scaleFactor);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.zoom(1);
  }

  private zoom(factor: number): void {
    this.transform = `scale(${factor})`;
  }


}
