import { useState } from "react"

const LoginPage = () => {
    //state
    const [inputValue, setInputValue] = useState("");

  //comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Bonjour ${inputValue}`);
    setInputValue("");
  };
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  
  

  //affichage (render)
    return ( 
        <div>
            <h1>Bienvenue chez nous !</h1><br />
            <h2>Connectez vous</h2>
            <form action="submit" onSubmit={handleSubmit}>
                <input value={inputValue} onChange={handleChange} type="text" placeholder="Entrez votre prénom..." required />
                <button>Accédez à votre espace</button>
            </form>
        </div>
     );
}
 
export default LoginPage;