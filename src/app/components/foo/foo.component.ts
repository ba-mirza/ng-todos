import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.scss']
})
export class FooComponent implements OnInit {

  @Input()
  title!: string;

  @Input()
  counter = 0;

  @Output()
  counterChange = new EventEmitter<number>();

  @Output()
  sayHi = new EventEmitter();

  constructor() {
    console.log('constructor', this.title)
  }

  ngOnInit(): void {
    console.log('ngOnInit', this.title)
  }

  onSayHi() {
    // TODO emit event
    this.sayHi.emit(this.title + ' Hello Parents');
  }

}
