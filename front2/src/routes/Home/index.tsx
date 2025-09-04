import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom";
import banner1 from "/src/assets/img/banner1.png";
import banner3 from "/src/assets/img/banner3.png";
import imgContato from "/src/assets/img/Contato.png";

export default function Home(){
    
    const navigate = useNavigate();
    
    return(
        <main>
        <section>
            <h1>Bem Vindo(a) ao TeleAjuda IMREA</h1>
            <Link to={"/contato"}>Entre em Contato</Link>
            <img src={banner1} alt="Imagem de médico sorrindo"></img>
        </section>

        <section>
            <div>
                <h2>Precisa de Ajuda?</h2>
                <p>Abra um chamado e tire seus duvidas com nosso time de suporte.</p>
                <button onClick={() => navigate("/chamados")}>Clique aqui</button>
            </div>
            <div>
                <img src={banner3} alt="Imagem de ajuda"></img>
            </div>
        </section>

        <section>
            <div>
                <h2>Quem somos?</h2>
                <p>Descubra quem somos, o que fazemos </p><p>e como podemos ajudar na sua recuperação.</p>
                <button onClick={() => navigate("/sobre")}>Clique aqui</button>
            </div>
            <div>
                <img src={imgContato} alt="Imagem de contato"></img>
            </div>
        </section>

        <section>
            <div>
                <h2>Entre em contato com a nossa equipe</h2>
            <p>Estamos prontos para oferecer o suporte que você precisa.</p>
            </div>
            <div>
                <button onClick={() => navigate("/contato")}>Clique aqui</button>
            </div>
            
        </section>
    </main>
    )
}