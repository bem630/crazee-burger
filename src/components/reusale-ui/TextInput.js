import styled from "styled-components";


const TestInput = ({ value, onChange, Icon,...extraProps }) => {
    return ( 
        <InputStyled>
                    {Icon && Icon}
                    <input value={value} 
                    onChange={onChange} type="text"
                    {...extraProps}  />
                  </InputStyled>
     );
}
 
export default TestInput;

const InputStyled = styled.div`
  
    display: flex;
    flex-direction: row;
    padding: 18px 24px;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    margin: 18px 0;
  
  .icon {
    margin-right: 8px;
    font-size: 15px;
    color: #93a2b1;
  }
  input {
    outline-color: blue;
    border: none;
    color: #17161a;
    font-size: 15px;
    width: 100%;
    
    &::placeholder {
    background-color: white;
    color: lightgrey;
  }
  }
  
  
`;