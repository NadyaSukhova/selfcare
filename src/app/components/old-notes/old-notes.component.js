import "./old-notes.component.scss";

function OldNotes(props) {
  function listMistakes(singleNote) {
    if (singleNote.mistakes && singleNote.mistakes.length > 0)
      return (
        <ul className="mistakes-list">
          {singleNote.mistakes.map((singleMistake, index) => (
            <li key={index}>{singleMistake}</li>
          ))}
        </ul>
      );
    else return <div></div>;
  }

  function formatDate(timestamp) {
    try {
      const date = timestamp.toDate();
      if (isNaN(date.getTime())) {
        return "Неверная дата";
      }

      const day = date.getDate().toString().padStart(2, "0");
      const month = (date.getMonth() + 1).toString().padStart(2, "0");
      const year = date.getFullYear();

      return `${day}.${month}.${year}`;
    } catch (error) {
      return `Ошибка даты: ${error}`;
    }
  }

  return (
    <div className="oldNotes">
      {props.history && props.history.length > 0 ? (
        props.history
          .sort((a, b) => {
            return b.date - a.date; // от новых к старым
          })
          .map((singleNote) => (
            <div key={singleNote.id}>
              <time className="note-date">{formatDate(singleNote.date)}</time>
              <div className="field-row">
                <div className="note-field">Мысль:</div>
                <div className="field-content">{singleNote.thoughtText}</div>
              </div>
              <div className="field-row">
                <div className="note-field">Ошибки мышления:</div>
              </div>
              {listMistakes(singleNote)}
              <div className="field-row">
                <div className="note-field">Опровержение:</div>
                <div className="field-content">{singleNote.disproof}</div>
              </div>
              <hr />
            </div>
          ))
      ) : (
        <div>Нет записей</div>
      )}
    </div>
  );
}

export default OldNotes;
