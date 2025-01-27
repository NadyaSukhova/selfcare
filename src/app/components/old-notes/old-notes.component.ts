import { Component } from '@angular/core';
import { NoteComponent } from '../note/note.component';

@Component({
  selector: 'app-old-notes',
  standalone: true,
  imports: [NoteComponent],
  templateUrl: './old-notes.component.html',
  styleUrl: './old-notes.component.scss'
})
export class OldNotesComponent {

}
