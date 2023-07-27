import { styled } from 'styled-components';


export const BoxFilter = styled.div`
    display: flex;
    width: 300px;
    box-sizing: border-box;
    flex-direction: column;
    gap: 20px;
    padding: 20px 25px;
    border: solid gray 1px;
    border-radius: 4px;
    margin-bottom:  10px;
`

export const LableFilter = styled.label`
    font-size: 18px;
`

export const InputFilter = styled.input`
  padding: 3px 5px;
  border-radius: 4px;
  border: solid gray 1px;
`;