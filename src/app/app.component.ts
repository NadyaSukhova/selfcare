import { Component, inject } from '@angular/core';
import { OldNotesComponent } from './components/old-notes/old-notes.component';
import { ThoughtComponent } from './components/thought/thought.component';
import { NotesService } from './services/notes.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThoughtComponent, OldNotesComponent],
  template: `
    <div class="header">Когнитивные искажения</div>
    <app-thought />
    <app-old-notes [history]="this.history" />
  `,
  styleUrl: './app.component.scss',
  providers: [NotesService],
})
export class AppComponent {
  private notesService = inject(NotesService);
  public history = this.notesService.getHistory();
}
