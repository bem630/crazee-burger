import styled from "styled-components";
import Logo from "../../reusale-ui/Logo";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  
  

  //affichage (render)
    return ( 
        <LoginPageStyled>
          <Logo/>
          <LoginForm/>
        </LoginPageStyled>
     );
}
 
export default LoginPage;
const LoginPageStyled = styled.div`
  background-color: red;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;