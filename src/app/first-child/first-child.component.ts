import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-first-child',
  templateUrl: './first-child.component.html',
  styleUrls: ['./first-child.component.scss']
})
export class FirstChildComponent implements OnInit {

  @Input() childItem: any
  @Output() itemEvent = new EventEmitter<string>()

  addNewItem(value: string) {
    this.itemEvent.emit(value)
  }

  @Input() size: any
  @Output() sizeChange = new EventEmitter<number>()

  dec() { this.resize(-1); }
  inc() { this.resize(+1); }

  resize(delta: number) {
    this.size = Math.min(40, Math.max(8, +this.size + delta));
    this.sizeChange.emit(this.size);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
