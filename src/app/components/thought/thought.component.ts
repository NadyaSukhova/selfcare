import { Component,Input } from "@angular/core";
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
  @Input() addNote: any;
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
}
