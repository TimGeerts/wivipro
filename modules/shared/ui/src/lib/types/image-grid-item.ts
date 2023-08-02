export class ImageGridItem {
  key!: string;
  description!: string;
  fileLarge!: string;
  fileSmall?: string;

  constructor(description: string, fileUrl: string) {
    const dateStr = Date.now().toString(36);
    const randomStr = Math.random().toString(36).substring(2, 8);
    this.key = `${dateStr}-${randomStr}`;
    this.description = description;
    this.fileLarge = fileUrl;
    this.fileSmall = `150x150_${fileUrl}`;
  }
}
