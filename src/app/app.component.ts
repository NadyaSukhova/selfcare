import { Component } from '@angular/core';
import { OldNotesComponent } from './components/old-notes/old-notes.component';
import { ThoughtComponent } from './components/thought/thought.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThoughtComponent, OldNotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'selcare-app';
}
