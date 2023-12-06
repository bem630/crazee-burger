import { useState } from "react"
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
/*import { theme } from "../../../theme";
import { BiSolidUserCircle } from "react-icons/bi";
import { FaChevronRight } from "react-icons/fa";*/

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
                  <h1>Bienvenue chez nous !</h1><br />
                  <h2>Connectez-vous</h2>
                </div>
                <div>
                  <input value={inputValue} onChange={handleChange} type="text" 
                  placeholder="Entrez votre prénom" required />
                  <button>Accédez à mon espace </button>
                </div>
            </LoginFormStyled>
     );
}
 
export default LoginForm;
const LoginFormStyled = styled.div`
  background-color: green;
  div {
    display: flex;
    flex-direction: column;
  }
  
`;




/*
  const LoginFormStyled = styled.form `
  display: flex;
  flex-direction: column;
  align-items: center;

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