import { Link, useParams } from "react-router-dom";

const OrderPage = () => {
    //state
    const { username } = useParams();

    // comportements

    //affichage (render)
    return ( 
        <div>
            <h1>Bonjour { username } </h1>
            <Link to={'/'}>
                <button>Déconnexion</button>
            </Link>
        </div>
     );
}
 
export default OrderPage;