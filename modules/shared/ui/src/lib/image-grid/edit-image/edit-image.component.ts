import { Component, OnInit } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ImageGridItem } from '../../types/image-grid-item';

@Component({
  selector: 'wivipro-edit-image',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-image.component.html',
  styleUrls: ['./edit-image.component.scss'],
})
export class EditImageComponent implements OnInit {
  item!: ImageGridItem;

  form: FormGroup = this.fb.group({
    description: ['', Validators.required],
  });

  constructor(
    public activeOffCanvas: NgbActiveOffcanvas,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.form = this.fb.group({
      description: [this.item.description, Validators.required],
    });
  }

  save(): void {
    const description = this.form.get('description')?.value;
    this.item.description = description;
    this.activeOffCanvas.close(this.item);
  }
}
