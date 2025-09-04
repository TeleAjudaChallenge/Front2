export default function Home(){
    
    return(
        <main>
        <section>
            <h1>Bem Vindo(a) ao TeleAjuda IMREA</h1>
            <a href="./assets/contato.html">Entre em Contato</a>
            {/*<img src="./assets/img/Sem nome (1200 x 500 mm) (1).png" alt="Imagem de médico sorrindo"></img>*/}
        </section>

        <section>
            <div>
                <h2>Precisa de Ajuda?</h2>
                <p>Abra um chamado e tire seus duvidas com nosso time de suporte.</p>
                <button>Clique aqui</button>
            </div>
            <div>
                {/* <img src="./assets/img/Imagem Ajuda 1.png" alt="Imagem de ajuda"> */}
            </div>
        </section>

        <section>
            <h2>Perguntas Frequentes</h2>
            
            <details>
                <summary>Esquici minha senha</summary>
                <p>Aprenda como redefinir sua senha e recuperar o acesso em poucos minutos</p>
                <button>Veja mais</button>
            </details>
            <details>
                <summary>Problemas ao fazer login</summary>
                <p>Etá com dificuldades para entrar na sua conta? Confira possíveis causas e como resolver.</p>
                <button>Veja mais</button>
            </details>

            <button>Veja mais Perguntas</button>
        </section>

        <section>
            <div>
                <h2>Quem somos?</h2>
                <p>Descubra quem somos, o que fazemos </p><p>e como podemos ajudar na sua recuperação.</p>
                <button id="botao-quem-somos">Clique aqui</button>
            </div>
            <div>
                {/* <img src="./assets/img/Contato.png" alt="Imagem de contato"> */}
            </div>
        </section>

        <section>
            <div>
                <h2>Entre em contato com a nossa equipe</h2>
            <p>Estamos prontos para oferecer o suporte que você precisa.</p>
            </div>
            <div>
                <button>Clique aqui</button>
            </div>
            
        </section>
    </main>
    )
}