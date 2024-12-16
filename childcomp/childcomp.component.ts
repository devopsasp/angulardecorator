import { Component, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-childcomp',
  imports: [],
  templateUrl: './childcomp.component.html',
  styleUrl: './childcomp.component.css',
})
export class ChildcompComponent {
  @Input() datafromparent: any;

  @Output() datasenttoparent = new EventEmitter();

  sendData() {
    this.datasenttoparent.emit('data sent from child');
  }
}
