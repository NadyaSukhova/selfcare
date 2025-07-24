import './old-notes.component.scss';

function OldNotes(props) {
    function listMistakes (singleNote) {
        return(
        singleNote.mistake.map((singleMistake, index) => 
                <div>{singleMistake}{index == singleNote.mistake.length - 1 ? '' : ", "}</div>)
        )
    }
//@for (singleMistake of singleNote.mistake; track singleMistake; let idx = $index)
    const listItems = props.history.map((singleNote) =>
        <div>ID: {singleNote.id } (потом уберу)<br />
            { singleNote.date.getDate() < 10 ? "0" : ""}
            { singleNote.date.getDate() }.{singleNote.date.getMonth() < 9 ? "0" : ""}
            { singleNote.date.getMonth() + 1 }.{ singleNote.date.getFullYear()}<br />
            <label>Мысль:</label> {singleNote.thoughtText}<br />
            <label>Ошибка мышления:</label> 
            {listMistakes(singleNote)}
            <br />
            <label>Опровержение:</label> { singleNote.disproof }<br />
            <hr style={{marginLeft: '-12px', borderTop: 'dashed 2px', color: '#a1d9b7'}}/>
            </div>
        );
  return ( 
  <div class="oldNotes">
    {listItems}
</div>
  )
}


export default OldNotes;
