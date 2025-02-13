import { Component,OnInit, OnChanges } from '@angular/core';
import { OldNotesComponent } from './components/old-notes/old-notes.component';
import { ThoughtComponent } from './components/thought/thought.component';
import { NotesService } from './services/notes.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThoughtComponent, OldNotesComponent],
  template: `
    <div class="header">Когнитивные искажения</div>
    <app-thought [addNote] = "this.notes.addNote"/>
    <app-old-notes [history]="this.history"/>
  `,
  styleUrl: './app.component.scss',
  providers: [NotesService]
})
export class AppComponent{
  title = 'selcare-app';
  public notes: any = new NotesService;
  public history:any = this.notes.getHistory();

}
