import { Component,OnInit } from '@angular/core';
import { OldNotesComponent } from './components/old-notes/old-notes.component';
import { ThoughtComponent } from './components/thought/thought.component';
import { getHistory } from './services/cardsService';
import { note } from './models/note/note.model';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ThoughtComponent, OldNotesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'selcare-app';
  public history:any = [...getHistory()];
  ngOnInit() {
  };

  public addNote(thoughtText:string, mistake:any, disproof:string, date:Date) {
    var newNote:note = {id: 6, thoughtText: thoughtText, mistake: mistake, disproof: disproof, date: date};
    console.log(newNote);
    this.history.push(newNote);
  }
}
