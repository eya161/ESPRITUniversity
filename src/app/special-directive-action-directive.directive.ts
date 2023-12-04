import { Directive, Renderer2, ElementRef, HostListener, OnInit } from '@angular/core';

@Directive({
  selector: '[appTransform]'
})
export class SpecialDirectiveActionDirectiveDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.applyTransform('rotate(10deg)');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.applyTransform('rotate(0deg)');
  }

  private applyTransform(transformValue: string) {
    this.renderer.setStyle(this.el.nativeElement, 'transform', transformValue);
    this.renderer.setStyle(this.el.nativeElement, '-webkit-transform', transformValue);
  }
}
