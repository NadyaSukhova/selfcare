import { useState, useRef } from 'react';
import "./thought.component.scss";

function Thought(props) {
  const [isVisible, setIsVisible] = useState(false);
   const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };
  const mistakeList = [
    "Мышление «Всё или ничего»",
    "Сверхобобщение",
    "Пессимизм",
    "Обесценивание положительного",
    "Чтение мыслей",
    "Ошибка предсказания",
    "Преувеличение/преуменьшение",
    "Эмоциональное обоснование",
    "Императивы",
    "Ярлыки",
    "Вина",
  ];
  var nowDate = new Date().getFullYear() + '-' + (new Date().getMonth() < 9 ? '0' : '') + (new Date().getMonth() + 1) + '-'+ (new Date().getDate() < 9 ? '0' : '') + new Date().getDate();
  
const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    var data = Object.fromEntries(formData.entries());
    data.thoughtDate = formData.get('thoughtDate');
    var mistakes = mistakeList.filter((el, index) => {
      if (mistakesAnswers[index]) return el;
      else return null;
    });
    data.mistakes = mistakes;
    console.log(data); // Данные формы
    props.addNote(data.thoughtText, data.mistakes, data.disproof, new Date(data.thoughtDate));
    formRef.current.reset();
  };

  function thoughtMistakes() {
    return mistakeList.map((singleMistake, index) => (
      <div class="thoughtMistakes">
        <input
          class="mistakeList"
          type="checkbox"
          value={singleMistake}
          formControlName={`formData.mistake_${index + 1}`}
          onChange={() => handleMistakeChange(index)}
        />
        {singleMistake}
      </div>
    ));
  }
  var mistakesAnswers = mistakeList.map(() => false)
  function handleMistakeChange(index) {
    mistakesAnswers[index] = !mistakesAnswers[index];
  }

  return (
    <div class="addThoughtDiv">
      <form ref={formRef} class="addThought" onSubmit={handleSubmit}>
        <h3>Добавить запись</h3>
        <div>
          <p>
            <label for="thoughtText">Мысль: </label>
            <textarea
              id="thoughtText"
              name="thoughtText"
              formControlName="thoughtText"
            ></textarea>
          </p>
          <label> Когнитивное искажение: </label>
          {thoughtMistakes()}
          <div class="rightButton">
            <button
              id="question"
              onClick={toggleVisibility}
              type="button"
            ></button>
          </div>
          {isVisible && <><br /><strong>«Всё или ничего».</strong> Этот вид когнитивных искажений описывает склонность к оценке своих личных качеств исключительно в черно-белых тонах.<br /><br /><strong> Сверхобобщение.</strong> Вы делаете ошибочный вывод, что событие, которое произошло с вами один раз, будет повторяться снова и снова. <br /><br /><strong> Пессимизм.</strong> Находясь в определенной ситуации, вы выбираете негативную деталь и фиксируетесь исключительно на ней, таким образом негативно воспринимая всю ситуацию в целом.<br /><br /><strong> Обесценивание положительного. </strong>Настойчивая привычка некоторых людей в депрессии превращать нейтральный или даже позитивный опыт в негативный. Вы не просто игнорируете положительный опыт — вы быстро и умело превращаете его в кошмар.<br /><br /><strong>   Чтение мыслей.</strong > Вы делаете предположение, что другие люди смотрят на вас свысока, и настолько убеждены в этом, что даже не пытаетесь проверить это предположение. <br /><br /><strong> Ошибка предсказания.</strong> Вы предполагаете, что произойдет что-то плохое, и принимаете это предсказание как факт, хотя оно не соответствует реальности. <br /><br /><strong> Преувеличение/преуменьшение.</strong> Вы либо раздуваете вещи до гигантских масштабов, либо делаете их микроскопически маленькими. Обычно эффект увеличения работает, когда вы смотрите на свои собственные ошибки, страхи или недостатки, преувеличивая их важность, а когда вы думаете о своих сильных сторонах, то можете делать противоположное — преуменьшать их значимость . <br /><br /><strong>   Эмоциональное обоснование. </strong >Вы принимаете свои эмоции как доводы в пользу некой истины. Такая логика гласит: «Я чувствую себя дураком — следовательно, я дурак». <br /><br /><strong> Императивы.</strong> Вы пытаетесь замотивировать себя, говоря: «Я должен это сделать» или «Я обязан это сделать». Эти заявления вызывают ощущение принуждения и обиды. Как ни парадоксально, в итоге вы чувствуете апатию и отсутствие мотивации.<br /><br /><strong> Ярлыки.</strong> Навешивание на себя ярлыков, крайняя форма сверхобобщения. Вы можете подумать «Я неудачник», хотя это можно заменить на «Я допустил ошибку». <br /><br /><strong> Вина. </strong>Вместо решения проблемы, вы ищите виноватых. В данном случае возможно обвинение других или самообвинение.</>}
          <p>
            {" "}
            <label for="disproof"> Опровержение: </label>
            <textarea
              name="disproof"
              id="disproof"
              formControlName="disproof"
            ></textarea>
          </p>
          <p>
            <label for="thoughtDate"> Дата: </label>
            <input
              id="thoughtDate"
              name="thoughtDate"
              type="date"
              formControlName="date"
              max={nowDate}
            />
          </p>
        </div>
        <button class="addButton" type="submit">
          Записать
        </button>
      </form>
    </div>
  );
}

export default Thought;
