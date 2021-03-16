import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { addClass, removeClass, Browser } from '@syncfusion/ej2-base';
import { RichTextEditor, Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, FileManager } from '@syncfusion/ej2-richtexteditor';
import { NgForm } from '@angular/forms';
RichTextEditor.Inject(Toolbar, Link, Image, HtmlEditor, QuickToolbar, Table, FileManager);


@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrls: ['./article-create.component.css']
})

export class ArticleCreateComponent implements OnInit {
  title = 'article-create';

  // handle(e){
  //   console.log('Change input file')
  // }

  //  @ViewChild('fromRTE')
  //  private rteEle: RichTextEditorComponent;
  //  public value: string = null;
	//  rteCreated(): void {
	//    this.rteEle.element.focus();
  //  }

    constructor(private _router : Router) { }
  	  url;
	    msg = "";

    ngOnInit(): void {
      let hostUrl: string = 'https://ej2-aspcore-service.azurewebsites.net/';
  
      let iframeRTE: RichTextEditor = new RichTextEditor({
          height: 300,
          iframeSettings: {
              enable: true
          },
          toolbarSettings: {
            items: ['Bold', 'Italic', 'Underline', 'StrikeThrough',
                'FontName', 'FontSize', 'FontColor', 'BackgroundColor',
                'LowerCase', 'UpperCase', 'SuperScript', 'SubScript', '|',
                'Formats', 'Alignments', 'OrderedList', 'UnorderedList',
                'Outdent', 'Indent', '|',
                'CreateTable', 'CreateLink', 'Image', 'FileManager', '|', 'ClearFormat', 'Print',
                'SourceCode', 'FullScreen', '|', 'Undo', 'Redo'
            ]
          },
          fileManagerSettings: {
              enable: true,
              path: '/Pictures/Food',
              ajaxSettings: {
                  url: hostUrl + 'api/FileManager/FileOperations',
                  getImageUrl: hostUrl + 'api/FileManager/GetImage',
                  uploadUrl: hostUrl + 'api/FileManager/Upload',
                  downloadUrl: hostUrl + 'api/FileManager/Download'
              }
          },
          actionBegin: handleFullScreen,
          actionComplete: actionCompleteHandler
        });
      iframeRTE.appendTo('#iframeRTE');
  
      function handleFullScreen(e: any): void {
        let sbCntEle: HTMLElement = document.querySelector('.sb-content.e-view');
        let sbHdrEle: HTMLElement = document.querySelector('.sb-header.e-view');
        let leftBar: HTMLElement;
        let transformElement: HTMLElement;
        if (Browser.isDevice) {
            leftBar = document.querySelector('#right-sidebar');
            transformElement = document.querySelector('.sample-browser.e-view.e-content-animation');
        } else {
            leftBar = document.querySelector('#left-sidebar');
            transformElement = document.querySelector('#right-pane');
        }
        if (e.targetItem === 'Maximize') {
            if (Browser.isDevice && Browser.isIos) {
                addClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            addClass([leftBar], ['e-close']);
            removeClass([leftBar], ['e-open']);
            if (!Browser.isDevice) { transformElement.style.marginLeft = '0px'; }
            transformElement.style.transform = 'inherit';
        } else if (e.targetItem === 'Minimize') {
            if (Browser.isDevice && Browser.isIos) {
                removeClass([sbCntEle, sbHdrEle], ['hide-header']);
            }
            removeClass([leftBar], ['e-close']);
            if (!Browser.isDevice) {
            addClass([leftBar], ['e-open']);
            transformElement.style.marginLeft = leftBar.offsetWidth + 'px'; }
            transformElement.style.transform = 'translateX(0px)';
        }
    }
  
    function actionCompleteHandler(): void {
        setTimeout(() => { iframeRTE.toolbarModule.refreshToolbarOverflow(); }, 400);
      }
    }

  		close(){
    		this._router.navigate(['/'])
  		}
      onSubmit(form: NgForm): void {
        alert(form.value.name);
      }   

  	// 	selectFile(event) {
		// if(!event.target.files[0] || event.target.files[0].length == 0) {
		// 	this.msg = 'You must select an image';
		// 	return;
		// }
		
		// var mimeType = event.target.files[0].type;
		
		// if (mimeType.match(/image\/*/) == null) {
		// 	this.msg = "Only IMAGES are Supported";
		// 	return;
		// }
		
		// var reader = new FileReader();
		// reader.readAsDataURL(event.target.files[0]);
		
		// reader.onload = (_event) => {
		// 	this.msg = "";
		// 	this.url = reader.result; 
		// }
	  //   }

}