
import styled from "styled-components";
const PrimaryButton = ({IconChevron, label}) => {
    return ( 
        <PrimaryButtonStyled>
                    <span> {label} </span>
                    {IconChevron && IconChevron}
                  </PrimaryButtonStyled>
     );
}
 
export default PrimaryButton;

const PrimaryButtonStyled = styled.button`
    
    border: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    font-size: 15px;
    padding: 18px 24px;
    font-weight: 800;
    line-height: 1;
    background-color: #ff9f1b;
    color: white;
    text-align: center;
    cursor: pointer;
    transition: all 200ms ease-out;
    width: 100%;
  &:hover {
    background-color: #fff;
    color: #ff9f1b;
    transition: all 200ms ease-out;
    border: 1px solid #ff9f1b;
  }
`;