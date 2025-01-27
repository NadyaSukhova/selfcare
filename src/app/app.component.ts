import { Component } from '@angular/core';
import { ThoughtComponent } from './components/thought/thought.component';
import { HelpComponent } from './components/help/help.component';
import { DisproofComponent } from './components/disproof/disproof.component';
import { OldNotesComponent } from './components/old-notes/old-notes.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThoughtComponent,HelpComponent,DisproofComponent,OldNotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'loginapp';
}
