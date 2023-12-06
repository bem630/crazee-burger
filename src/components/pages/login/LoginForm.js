import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { FaChevronRight } from "react-icons/fa";
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
                  <div className="input-with-icon">
                    <BsPersonCircle className="icon"/>
                    <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom" required />
                  </div>
                  <button className="button-with-icon">
                    <span>Accédez à mon espace </span>
                    <FaChevronRight className="icon-btn"/>
                  </button>
                </div>
            </LoginFormStyled>
     );
}
 
export default LoginForm;
const LoginFormStyled = styled.div`
  
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
  .input-with-icon {
    display: flex;
    flex-direction: row;
    padding: 18px 24px;
    align-items: center;
    background-color: white;
    border-radius: 5px;
    margin: 18px 0;
  }
  .icon {
    margin-right: 8px;
    font-size: 15px;
    color: #93a2b1;
  }
  input {
    margin-right: 10px;
    width: 100%;
    outline-color: blue;
    border: none;
    color: #17161a;
  }
  &::placeholder {
    background-color: white;
    color: lightgrey;
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
    font-size: 18px;
  }
  .button-with-icon:hover {
    background-color: #fff;
    color: #ff9f1b;
    transition: all 200ms ease-out;
    border: 1px solid #ff9f1b;
  }
  
`;




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