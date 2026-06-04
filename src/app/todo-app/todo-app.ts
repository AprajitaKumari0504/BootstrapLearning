import { Component , signal} from '@angular/core';

@Component({
  selector: 'app-todo-app',
  imports: [],
  templateUrl: './todo-app.html',
  styleUrl: './todo-app.css',
})
export class TodoApp {
     newTodo = signal('');

  todos = signal<{ text: string; done: boolean }[]>([]);

  addTodo(){
    const text = this.newTodo().trim();

    if ( text === '' ) {
      return;
    }

    this.todos.update( list => [ ...list, { text, done: false } ] );

    this.newTodo.set('');
  }

  toggleTodo( index: number ){
    this.todos.update( list => 
      list.map( ( item ,i ) =>
        i === index ? { ...item, done: !item.done } : item
      )
    );
  }

  deleteTodo( index: number ){
    this.todos.update( list => 
      list.filter( ( _, i ) => i !== index )
    );
  }
}
