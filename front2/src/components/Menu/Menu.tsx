import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <nav>
            <ul>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/chamado"}>Chamado</Link></li>
                <li><Link to={"/contato"}>Contato</Link></li>
                <li><Link to={"/pesquisa"}></Link></li>
                <li><Link to={"/sobre"}></Link></li>
            </ul>
        </nav>
    )
}