import { styled } from "styled-components";
import CheckIcon from "./icons/CheckIcon";
import { darkPrimary, white } from "./styleVariables";

export default function Checkbox({ width, height, isCheck, content, isRequire }) {

  const writeRequirements = () => {
    if(isRequire === true){
      return '[필수] ';
    } else if (isRequire === false){
      return '[선택] ';
    } else {
      return '';
    }
  }

  return (
    <CheckboxContainer>
      <input type="checkbox" className='checkbox' />
      <label htmlFor="checkbox">
        {isCheck ? <CheckIcon width={width} height={height} fill={darkPrimary} stroke={white} /> : <CheckIcon width={width} height={height} />}
      </label>
      <div className="checkContent">
        { writeRequirements() }
        { content }
      </div>
    </CheckboxContainer>
  )
}

const CheckboxContainer = styled.div`
  height: 1.4rem;
  align-items: center;
  display: flex;
  gap: 1rem;

  .checkbox{
    display: none;
  }

  label{
    &:hover{
      cursor: pointer;
    }
  }

  .checkContent {
    display: flex;

    &:hover{
      cursor: pointer;
    }
  }
`