import { Component } from '@angular/core';
import { getHistory } from '../../services/cardsService';

@Component({
  selector: 'app-old-notes',
  standalone: true,
  imports: [],
  templateUrl: './old-notes.component.html',
  styleUrl: './old-notes.component.scss'
})
export class OldNotesComponent {
  public history = getHistory();
}
