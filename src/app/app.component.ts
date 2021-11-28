import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'MyFirstApp';
  counter = 0; 
  parItem = 'This text from parent element to child element';
  fontSizePx = 16;

  items: string[] = [];
  addItem(newItem: string) {
    this.items.push(newItem);
  }
  
  onClickBtn (): number {
     console.log(`Click on button`);
     return this.counter++
  }
}
