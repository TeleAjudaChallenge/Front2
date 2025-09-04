export default function Contato(){
    return(
        <main>
            <h1>CONTATO</h1>
        <section>
            <div>
                {/* <img src="./img/icons/tel.png" alt="icone telefone"> */}
                <p>(11)1234-56789</p>
                <a href="tel:(11)1234-56789">Ligue Já</a>
            </div>
            <div>
                {/* <img src="./img/icons/email.png" alt="icone email"> */}
                <p>suporte@teleajuda.com.br</p>
                <a href="mailto:suporte@teleajuda.com.br">Envie um Email</a>
            </div>
        </section>
        <section>
            <div>
            <h2>Nossas Unidades</h2>
                <select id="unidade-select" name="tipo" required>
                  <option value="vila-mariana">Vila Mariana</option>
                  <option value="umarizal">Umarizal</option>
                  <option value="lapa">Lapa</option>
                  <option value="clinicas">Clínicas</option>
                  <option value="morumbi">Morumbi</option>
                </select>
            </div>
            <div>
            <h3>Endereço</h3>
            <p>Rua Domingo de Soto, 100 – Vila Mariana – São Paulo – SP CEP 04116-040</p>
            <h3>Horários de Atendimento</h3>
            <p>Segunda a sexta-feira, das 07 às 19h</p>
        </div>
        </section>
        </main>
    )
}