import React from 'react'
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './styles.css';

function Contato(){




    return (
        <>
        <Header />
        <div className="banner-pai">
        <div className="contato-container">
        <h1 id="fale-conosco">Fale Conosco</h1>
        <div className="formulario">
        <form action="./contato.html">
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Insira Seu Email" />
        
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Insira Sua Senha" />

        <label htmlFor="mensagem">Feedback</label>
        <textarea id="mensagem" name="mensagem" rows="10" placeholder="digite seu Feedback/Mensagem aqui"></textarea>

        <button onClick={() => window.alert('desculpa, a função de feedback está temporariamente desabilitada')}>Enviar</button>




        </form>
        </div>
        </div>
        </div>



        <Footer />
        </>
            
       

        
    )


}


export default Contato;