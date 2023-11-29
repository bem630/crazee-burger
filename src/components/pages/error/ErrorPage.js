import { Link } from "react-router-dom";

const ErrorPage = () => {
    return ( 
        <div>
            <h1>Oups Page not Faound</h1>
            <p>Error 404</p>
            <Link to={'/'}>
                <button>Retourner à la page d'accueil</button>
            </Link>
        </div>
     );
}
 
export default ErrorPage;