import { styled } from "styled-components"



export const Form = styled.form`
    box-sizing: border-box;
    padding: 20px 25px;
    border: solid gray 1px;
    border-radius: 4px;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    

`

export const ButtonForm = styled.button`
  background-color: #b0fbdf;
  width: 150px;
  padding: 10px 5px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 10px;
  border: solid gray 1px;
  &:hover {
    background-color: #0bcb84;
  }
`;