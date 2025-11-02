import { useState, useRef } from "react";
import {
  mistakeDescription,
  mistakeList,
} from "../../../constants/mistakes-description.constants";
import * as style from "./thought.styles";

function Thought(props) {
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  var nowDate =
    new Date().getFullYear() +
    "-" +
    (new Date().getMonth() < 9 ? "0" : "") +
    (new Date().getMonth() + 1) +
    "-" +
    (new Date().getDate() < 9 ? "0" : "") +
    new Date().getDate();

  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);
    var data = Object.fromEntries(formData.entries());
    data.thoughtDate = formData.get("thoughtDate");
    var mistakes = mistakeList.filter((el, index) => {
      if (mistakesAnswers[index]) return el;
      else return null;
    });
    data.mistakes = mistakes;
    console.log(data); // Данные формы
    props.addNote(
      data.thoughtText,
      data.mistakes,
      data.disproof,
      new Date(data.thoughtDate)
    );
    formRef.current.reset();
  };

  function thoughtMistakes() {
    return (
      <style.thoughtMistakes id="thought-mistakes">
        {mistakeList.map((singleMistake, index) => (
          <li>
            <style.mistakeList
              type="checkbox"
              value={singleMistake}
              id={`mistake-${index}`}
              name={`mistake-${index}`}
              onChange={() => handleMistakeChange(index)}
            />
            <label htmlFor={`mistake-${index}`}>{singleMistake}</label>
          </li>
        ))}
      </style.thoughtMistakes>
    );
  }
  var mistakesAnswers = mistakeList.map(() => false);
  function handleMistakeChange(index) {
    mistakesAnswers[index] = !mistakesAnswers[index];
  }

  return (
    <style.addThoughtDiv>
      <style.addThought ref={formRef} onSubmit={handleSubmit}>
        <style.h1>Добавить запись</style.h1>
        <div>
          <p>
            <label htmlFor="thoughtText">Мысль: </label>
            <style.textarea name="thoughtText"></style.textarea>
          </p>
          <label htmlFor="thought-mistakes"> Когнитивное искажение: </label>
          {thoughtMistakes()}
          <style.rightButton>
            <style.question onClick={toggleVisibility} type="button"></style.question>
          </style.rightButton>
          {isVisible ? (
            <style.thoughtMistakesDescription>
              {mistakeDescription.map((el) => (
                <style.oneMistakeDescription>
                  <strong>{el.name}:</strong> {el.description}
                </style.oneMistakeDescription>
              ))}
            </style.thoughtMistakesDescription>
          ) : null}
          <p>
            <label htmlFor="disproof"> Опровержение: </label>
            <textarea
              name="disproof"
              id="disproof"
              formControlName="disproof"
            ></textarea>
          </p>
          <p>
            <label htmlFor="thoughtDate"> Дата: </label>
            <input
              id="thoughtDate"
              name="thoughtDate"
              type="date"
              formControlName="date"
              max={nowDate}
            />
          </p>
        </div>
        <style.addButton type="submit">Записать</style.addButton>
      </style.addThought>
    </style.addThoughtDiv>
  );
}

export default Thought;
