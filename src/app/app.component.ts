import { Component } from '@angular/core';
import { CommonService } from './common.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FileUploading';

  adharCard!: File;
  panCard!: File;
  license!: File;
  photo!: File;

  constructor(private cs: CommonService) {}

  onSelectAdharCard(event: any) {
    this.adharCard = event.target.files[0];
  }

  onSelectPanCard(event: any) {
    this.panCard = event.target.files[0];
  }

  onSelectLicense(event: any) {
    this.license = event.target.files[0];
  }

  onSelectPhoto(event: any) {
    this.photo = event.target.files[0];
  }

  uploadDocument() {
    const formData = new FormData();
    formData.append("f1", this.adharCard);
    formData.append("f2", this.panCard);
    formData.append("f3", this.license);
    formData.append("f4", this.photo);

    this.cs.postDocument(formData).subscribe(() => {
      alert("File Saved");
    });
  }



  
  
}
