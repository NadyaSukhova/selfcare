import styled from 'styled-components';
import questionIcon from '../../../assets/question.png';


export const h1 = styled.h1`
  color: #297d77;
  text-align: center;
  font-size: 36px;
  font-weight: 500;
  margin: 0;
`;

export const addThought = styled.form`
  background-color: #fff;
  border-radius: 30px;
  width: 50vw;
  font-size: 28px;
  padding: 3vw;
  height: fit-content;

  & > p {
    margin: 0;
  }
`;

export const addThoughtDiv = styled.div`
  width: max-content;
`;

export const hint = styled.div`
  font-size: 24px;
  list-style-type: none;
`;

export const thoughtMistakes = styled.ul`
  font-size: 24px;
  list-style-type: none;
  margin: 0 0 1vh;
`;

export const mistakeList = styled.input``;

export const addButton = styled.button`
  font-size: 28px;
  background-color: #297d77;
  color: #fff;
  border-radius: 3vh;
  width: fit-content;
  border: 0;
  padding: 1vh;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

export const rightButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

export const question = styled.button`
  background-image: url(${questionIcon});
  background-size: contain;
  background-color: transparent;
  background-repeat: no-repeat;
  border: 0;
  height: 7vh;
  width: 7vh;
  border-radius: 0%;
  cursor: pointer;
  display: block;

  &:hover {
    box-shadow: 2px 2px 10px #a0b1ab;
    border-radius: 100%;
  }
`;

export const thoughtDate = styled.input`
  font-size: 28px;
  font-family: inherit;
`;

export const textarea = styled.textarea`
  resize: none;
  height: auto;
  --widthB: 171.4px;
  width: calc(100% - var(--widthB));
  font-size: inherit;
  font-family: inherit;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;

  &:focus {
    outline: none;
    border-color: #297d77;
  }
`;

export const strong = styled.strong`
  color: #297d77;
`;

export const thoughtMistakesDescription = styled.section`
  font-size: 24px;
`;

export const oneMistakeDescription = styled.p`
  margin: 10px 0;
  line-height: 1.4;
`;
