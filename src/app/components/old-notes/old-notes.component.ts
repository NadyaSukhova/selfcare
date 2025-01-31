import { Component,Input,OnChanges  } from '@angular/core';

@Component({
  selector: 'app-old-notes',
  standalone: true,
  imports: [],
  templateUrl: './old-notes.component.html',
  styleUrl: './old-notes.component.scss'
})
export class OldNotesComponent implements OnChanges {
  @Input() history:any = [];
  ngOnChanges() {
  }
}
