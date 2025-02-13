import { Component,OnInit, OnChanges } from '@angular/core';
import { OldNotesComponent } from './components/old-notes/old-notes.component';
import { ThoughtComponent } from './components/thought/thought.component';
import { Notes } from './services/Notes';
import { note } from './models/note/note.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThoughtComponent, OldNotesComponent],
  template: `
    <div class="header">Когнитивные искажения</div>
    <app-thought [addNote] = "this.notes.addNote"/>
    <app-old-notes [history]="this.history"/>
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent{
  title = 'selcare-app';
  public notes: any = new Notes;
  public history:any = this.notes.getHistory();

}
