import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-details-classe',
  templateUrl: './details-classe.component.html',
  styleUrls: ['./details-classe.component.css']
})
export class DetailsClasseComponent {
  @Input() classroom: any | null = null;
  @Output() closeDetails = new EventEmitter<void>();

  onCloseDetails(): void {
    this.closeDetails.emit();
  }
}
