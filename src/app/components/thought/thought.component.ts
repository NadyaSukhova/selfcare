import { Component,Input } from "@angular/core";
import { ReactiveFormsModule } from '@angular/forms';
import {FormGroup, FormControl} from '@angular/forms';
import {NgFor} from "@angular/common";

@Component({
  selector: "app-thought",
  standalone: true,
  imports: [NgFor, ReactiveFormsModule], // для работы с формами импортируем FormsModule
  templateUrl: './thought.component.html',
  styleUrl: './thought.component.scss'
})
export class ThoughtComponent {
  @Input() addNote: any;
  
  formInput = new FormGroup({
    thoughtText: new FormControl(""),
    mistake_1: new FormControl(''),
    mistake_2: new FormControl(''),
    mistake_3: new FormControl(''),
    mistake_4: new FormControl(''),
    mistake_5: new FormControl(''),
    mistake_6: new FormControl(''),
    mistake_7: new FormControl(''),
    mistake_8: new FormControl(''),
    mistake_9: new FormControl(''),
    mistake_10: new FormControl(''),
    mistake_11: new FormControl(''),
    disproof: new FormControl(""),
    date: new FormControl(new Date())
  });

  showHint: boolean = false;
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

saveThought() {
  var mistakesAnswers = [this.formInput.controls.mistake_1.value, 
                        this.formInput.controls.mistake_2.value, 
                        this.formInput.controls.mistake_3.value, 
                        this.formInput.controls.mistake_4.value, 
                        this.formInput.controls.mistake_5.value, 
                        this.formInput.controls.mistake_6.value, 
                        this.formInput.controls.mistake_7.value, 
                        this.formInput.controls.mistake_8.value, 
                        this.formInput.controls.mistake_9.value, 
                        this.formInput.controls.mistake_10.value, 
                        this.formInput.controls.mistake_11.value];

  var mistakes = this.mistakeList.filter((el, index) => {if(mistakesAnswers[index]) return el; else return null;});
  this.addNote(this.formInput.controls.thoughtText.value, mistakes, this.formInput.controls.disproof.value, this.formInput.controls.date.value);
}
}
