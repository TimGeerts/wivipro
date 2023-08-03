import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'wivipro-confirm-delete-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './confirm-delete.component.html',
})
export class ConfirmDeleteModalComponent {
  constructor(public activeModal: NgbActiveModal) {}

  body!: TemplateRef<Element>;
  bodyText!: string;

  ok(): void {
    this.activeModal.close(true);
  }
}
