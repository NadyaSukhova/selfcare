import { Component } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { note } from "../../models/note/note.model";

@Component({
  selector: "app-thought",
  standalone: true,
  imports: [FormsModule], // для работы с формами импортируем FormsModule
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.scss'
})
export class ThoughtComponent {
  thoughtText: string = "";
  mistake: string[] = ["0"];
  disproof: string = "";
  date: Date = new Date();

  mistakeList: string[] = ["Мышление «Всё или ничего»",
                            "Сверхобобщение",
                            "Пессимизм",
                            "Обесценивание положительного",
                            "Чтение мыслей",
                            "Ошибка предсказания",
                            "Преувеличение/преуменьшение",
                            "Эмоциональное обоснование",
                            "Императивы",
                            "Ярлыки",
                            "Вина"];
  showHint: boolean = false;

  addNote() {
    var mistakes = Array.from(document.querySelectorAll(':checked'));
    this.mistake = mistakes.map((el) => (el as HTMLInputElement).value);
    var thought:note = {id: 1, thoughtText: this.thoughtText, mistake:this.mistake, disproof:this.disproof, date:this.date}
    console.log(thought);
  }
}
