import { Component, Input, OnChanges } from '@angular/core';
import { note } from '../../models/note/note.model';

@Component({
  selector: 'app-old-notes',
  standalone: true,
  templateUrl: './old-notes.component.html',
  styleUrl: './old-notes.component.scss',
})
export class OldNotesComponent {
  @Input() history: note[] = [];
}
