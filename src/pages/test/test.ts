import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Component({
  selector: 'page-test',
  templateUrl: 'test.html'
})

export class Test {
  color: string;
}

@Directive({
  selector: '[myHighlight]'
})
export class HighlightDirective {
  constructor(private el: ElementRef) { }

  value = '';
  onEnter(value: string) { this.value = value; }

  @Input() defaultColor: string;
  @Input('myHighlight') highlightColor: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor || this.defaultColor || 'red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}