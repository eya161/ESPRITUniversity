import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
})
export class HoverHighlightDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.hideRow(false);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hideRow(true);
  }

  private hideRow(shouldHide: boolean): void {
    const rowElement = this.el.nativeElement;
    if (rowElement.tagName === 'TR') {
      const displayStyle = shouldHide ? 'none' : '';
      this.renderer.setStyle(rowElement, 'display', displayStyle);
    }
  }
}
