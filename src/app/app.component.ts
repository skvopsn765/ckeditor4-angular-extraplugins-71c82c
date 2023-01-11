import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  name = 'ng2-ckeditor';
  ckeConfig: any;
  mycontent: string;
  log: string = '';
  @ViewChild('myckeditor') ckeditor: any;

  constructor() {
    this.mycontent = `<p>My html content</p>`;
  }

  ngOnInit() {
    // https://ckeditor.com/cke4/builder
    this.ckeConfig = {
      extraPlugins: 'uploadimage',
      uploadUrl:
        'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files&responseType=json',

      // Configure your file manager integration. This example uses CKFinder 3 for PHP.
      filebrowserBrowseUrl:
        'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html',
      filebrowserImageBrowseUrl:
        'https://ckeditor.com/apps/ckfinder/3.4.5/ckfinder.html?type=Images',
      filebrowserUploadUrl:
        'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Files',
      filebrowserImageUploadUrl:
        'https://ckeditor.com/apps/ckfinder/3.4.5/core/connector/php/connector.php?command=QuickUpload&type=Images'
    };
  }
  onEditorChange(event) {
    console.log(event);
  }

  onChange(event: any): void {
    console.log(event);
    console.log(this.mycontent);
    //this.log += new Date() + "<br />";
  }
}
