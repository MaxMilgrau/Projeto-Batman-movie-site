import React  from 'react';
import './styles.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';


function Comentarios(){
  
    



    return (

        <>
        <Header />
        <div className="comment-container">
            <div className="comment-box-container robert">
                <div className="icon-container number-1">Robert Pattison</div>
                <div className="comment-box">
                    <p className="comments">Adorei o filme! foi uma honra atuar nessa incrivel reinterpretação do homem morcego abordando mais seu lado detetivesco.</p>
                </div>
            </div>

            <div className="comment-box-container zoe">
                <div className="icon-container number-2">Zoe Kravitiz</div>
                <div className="comment-box">
                    <p className="comments">Fico muito feliz em ter a oportunidade de interpretar a mulher Gato e ao mesmo tempo se aprofundar em seu desenvolvimento. </p>
                </div>
            </div>

            <div className="comment-box-container jeff">
                <div className="icon-container number-3">Jeffrey Wright</div>
                <div className="comment-box">
                    <p className="comments">estou muito satisfeito com o filme e com meu personagem, sinto que a temática de mistério combinou muito com o filme.</p>
                </div>
            </div>
          
          
          
        </div>

         <Footer />
         
        </>
   
    )
}


export default Comentarios;