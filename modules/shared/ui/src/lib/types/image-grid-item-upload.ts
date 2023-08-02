export class ImageGridItemUpload {
  description!: string;
  file: File;

  constructor(description: string, file: File) {
    this.description = description;
    this.file = file;
  }
}
