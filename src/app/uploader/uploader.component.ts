import { Component } from '@angular/core';
import { UploaderService } from './uploader.service';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css'],
  providers: [ UploaderService ]
})
export class UploaderComponent {
  message: string;
  uplodedFileUrl: string = '';

  constructor(private uploaderService: UploaderService) {}

  onPicked(input: HTMLInputElement) {
    const file = input.files[0];
    if (file) {
      const filename = file.name.toLowerCase();
      let fextn = filename.split(".").pop();
      let valid_exts = ['jpg','jpeg','png'];
      if(valid_exts.indexOf(fextn) != -1){
        this.uploaderService.upload(file).subscribe(
          msg => {
            if(msg['status']==200){
              input.value = null;
              this.message = 'File uploaded successfully.';
              this.uplodedFileUrl = 'http://localhost/sites/angularprojects/fileupload/api/images/'+filename;
            }
          }
        );
        
      } else {
        input.value = null;
        this.message = 'Only jpg / jpeg / png files are allowed.';
      }
    }
  }
}

