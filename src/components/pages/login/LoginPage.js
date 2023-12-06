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
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("images/burger-background.jpg");
  background-size: cover;
  background-position: center;
  background-blend-mode: darken;
`;