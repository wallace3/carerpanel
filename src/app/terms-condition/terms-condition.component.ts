import {
  Component,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewChild,
  CUSTOM_ELEMENTS_SCHEMA
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbComponent } from '../breadcrumb/breadcrumb.component';

declare var Quill: any;

@Component({
  selector: 'app-terms-condition',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './terms-condition.component.html',
  styleUrls: ['./terms-condition.component.css'] // Use plural if CSS is array-based
})
export class TermsConditionComponent implements OnInit, AfterViewInit {
  title = 'Terms & Conditions';
  quillEditor: any;

  @ViewChild('editor', { static: false }) editorElement!: ElementRef;

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    this.quillEditor = new Quill(this.editorElement.nativeElement, {
      modules: {
        syntax: true,
        toolbar: '#toolbar-container'
      },
      placeholder: 'Compose an epic...',
      theme: 'snow'
    });
  }
}
