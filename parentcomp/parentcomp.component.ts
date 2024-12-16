import { Component } from '@angular/core';
import { ChildcompComponent } from '../childcomp/childcomp.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-parentcomp',
  imports: [ChildcompComponent, CommonModule],
  templateUrl: './parentcomp.component.html',
  styleUrl: './parentcomp.component.css',
})
export class ParentcompComponent {
  receivdeFromChild: any;

  myobj = { name: 'Peter', age: 23 };

  datareceived(data: string) {
    this.receivdeFromChild = data;
  }
}
