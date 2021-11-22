import React from 'react'
import './Footer.css';

function Footer() {
    return (
        // <div className="div-footer">
        //   <span>Ajuda</span>
        //   <span>Sobre</span>
        //   <div className="footer-contact">
        //     <span>Contato</span>
        //     <span>contato@mentrical.com.br</span>
        //     <span>3000-1000</span>
        //   </div>
        // </div>
        <div class="footer_container">
        <div class="footer_link">
            <div class="footer_links">
                <div class="footer_itens">
                    <h2>Equipe</h2>
                    <h3>Alex Wong</h3>
                    <h3>Carlos Alves</h3>
                    <h3>Jonathan Sales</h3>
                    <h3>Vinicius Pato</h3>
                </div>
                <div class="footer_itens">
                    <h2>Produtos</h2>
                    <h1 class="txtfooter"> • Mentrical</h1>   
                </div>
            </div>
            <div class="footer_links">
                <div class="footer_itens">
                    <h2>Mentrical</h2>
                    <h1 class="txtfooter">Onde a sua saude mental é priorizada </h1>
                </div>
                <div class="footer_itens">
                    <h2>Fale conosco</h2>
                    <h3>São Paulo - Brasil</h3>
                    <h3>mentricaulsupp@mentrical.com</h3>
                    <h3>(11)97276-2286 </h3>
                </div>
            </div>
        </div>
        <div class="rodape">
            <h4>2021 &copy; Mentrical</h4>
        </div>
        </div>

    )
}

export default Footer;