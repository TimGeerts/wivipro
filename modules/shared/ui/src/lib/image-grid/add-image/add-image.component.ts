import { Component } from '@angular/core';
import { NgbActiveOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ImageGridItemUpload } from '../../types/image-grid-item-upload';

@Component({
  selector: 'wivipro-add-image',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.scss'],
})
export class AddImageComponent {
  imgPreview?: string;
  imgFile!: File;
  fileName = '';
  form: FormGroup = this.fb.group({
    description: ['', Validators.required],
    imageInput: [this.fileName, Validators.required],
  });

  constructor(
    public activeOffCanvas: NgbActiveOffcanvas,
    private fb: FormBuilder
  ) {}

  addImageFile(fileInput: HTMLInputElement) {
    fileInput.click();
  }

  previewImage($event: any) {
    if ($event.target) {
      const target = $event.target;
      this.imgFile = target.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        this.imgPreview = e.target.result;
        this.form.controls['imageInput'].setValue(
          this.imgFile ? this.imgFile.name : ''
        ); // <-- Set Value for Validation
      };
      reader.readAsDataURL(this.imgFile);
    }
  }

  save(): void {
    const description = this.form.get('description')?.value;
    this.activeOffCanvas.close(
      new ImageGridItemUpload(description, this.imgFile)
    );
  }
}
