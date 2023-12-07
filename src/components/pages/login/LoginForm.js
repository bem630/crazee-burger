import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import TestInput from "../../reusale-ui/TextInput";
import { FaChevronRight } from "react-icons/fa";
import PrimaryButton from "../../reusale-ui/PrimaryButton";
/*import { theme } from "../../../theme";
*/

//LoginForm est un composant spécifique
const LoginForm = () => {
    
        //state
        const [inputValue, setInputValue] = useState("");
        const navigate = useNavigate();
    
      //comportements
      const handleSubmit = (event) => {
        event.preventDefault();
        setInputValue("");
        navigate(`/order/${inputValue}`);
      };
      const handleChange = (e) => {
        setInputValue(e.target.value);
      }
    return (
            <LoginFormStyled action="submit" onSubmit={handleSubmit}>
                <div>
                  <h1>Bienvenue chez nous !</h1><hr />
                  <h2>Connectez-vous</h2>
                </div>
                <div>
                  <TestInput value ={inputValue} onChange={handleChange} placeholder = {"Entrez votre prénom"}
                   required Icon = {<BsPersonCircle className="icon"/>} />

                  <PrimaryButton IconChevron = {<FaChevronRight className="icon-btn"/>} label={"Accédez à mon espace"} />
                </div>
            </LoginFormStyled>
     );
}
 
export default LoginForm;

const LoginFormStyled = styled.form`
  font-family: 'Amatic SC', cursive;
  border-radius: 5px;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 1.5rem 1rem;

  h1 {
    color: white;
    font-size: 48px;
  }
  hr {
    border: 1.5px solid #f56a2c;
    //width: 100%;
    margin-bottom: 40px;
  }
  h2 {
    color: white;
    font-size: 36px;
    margin: 20px 10px;
  }
  .icon-btn {
    font-size: 15px;
    margin-left: 8px;
  }
  
  
`;
/*
const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto;
  padding: 2.5rem 2rem;
  border-radius: 5px;
  font-family: 'Amatic SC', cursive;

  div {
    display: flex;
    flex-direction: column;
  }
  hr {
    border: 1.5px solid #f56a2c;
    width: 100%;
    margin-bottom: 40px;
  }
  h1 {
    color: white;
    font-size: 48px;
  }
  
  h2 {
    color: white;
    font-size: 36px;
    margin: 20px 10px;
  }
 
  .button-with-icon {
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
  }
  span {
    outline: none;
    border: none;
  }
  .icon-btn {
    font-size: 15px;
    margin-left: 8px;
  }
  .button-with-icon:hover {
    background-color: #fff;
    color: #ff9f1b;
    transition: all 200ms ease-out;
    border: 1px solid #ff9f1b;
  }
  
`;*/




/*
  const LoginFormStyled = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover:not(:disabled) {
    transition: all 200ms ease-out;
    background-color: #fff;
    border: 1px solid #ff9f1b;
  }
  &:active {
    color: #fff;
    background-color: #ff9f1b;
    border: 1px solid #ff9f1b;
  }
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  h1, h2 {
    font-family: 'Amatic SC', sans-serif;
    font-size: ${theme.fonts.P6};
    font-weight: ${theme.weights.bold};
  }
  h2 {
    font-family: 'Amatic SC', sans-serif;
    font-size: ${theme.fonts.P4};
    font-weight: ${theme.weights.bold};
  }
  input {
    padding: 10px 50px;
    outline: none;
    background-color: ${theme.colors.white};
    margin: 10px;
    border-radius: ${theme.borderRadius.round};
  }
  button {
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    border-radius: ${theme.borderRadius.round};
    padding: 10px 50px;
    border: none;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
`*/