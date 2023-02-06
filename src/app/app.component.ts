import { Component } from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem
} from '@angular/cdk/drag-drop';
import { Column } from './dragDrop.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Kanban';

  dragDropColumns: Column[] = [
    new Column(
      'todo',
      [
        'Get to work',
        'Pick up groceries',
        'Go home',
        'Fall asleep'
      ]
    ),
    new Column(
      'done',
      [
        'Get up',
        'Brush teeth',
        'Take a shower',
         'Check e-mail',
        'Walk dog'
      ]
    ),
    new Column(
      'ideas',
      [
        'Create system for rocessing of documents in the army'
      ]
    ),
    new Column(
      'research',
      ['Type of doc. forms used in army']
    )
  ]

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  addClass(i: number): string {
    console.log(i)
    return `grid__item--${3 * i + 1}-${3 * (i + 1)}`
  }
}
