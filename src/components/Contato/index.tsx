import React from 'react'

import RightArrow from '../../images/icons/right-arrow.png'

const Contato: React.FC = () => {
  return (
    <section className="contato">
      <div className="left-side">
        <div className="content-title">
          <div className="content-barra">
            <div className="barra"></div>
          </div>
          <h2>
            Sobre a Hipnos
          </h2>
        </div>
        <p>
          Fale pra gente um pouco sobre sua necessidade e entraremos em contato o mais rápido
          possível!
        </p>
        <form>
          <div className="field-input">
            <label>Nome</label>
            <input type="text"/>
          </div>
          <div className="field-input">
            <label>Email</label>
            <input type="text"/>
          </div>
          <div className="field-input">
            <label>Telefone</label>
            <input type="text"/>
          </div>
          <div className="field-input">
            <label>Assunto</label>
            <input type="text"/>
          </div>
          <div className="field-textarea">
            <label>Mensagem</label>
            <textarea></textarea>
          </div>
          <div className="field-file">
            <label>
              Se preferir envie uma imagem do seu projeto
            </label>
          </div>
          <p>
            Seus dados de contato estão protegidos de acordo com as leis de privacidade 
            digitais. O site é protegido por reCAPTCHA e a política de privacidade de 
            serviços do Google.
          </p>
          <button>
            <span>
              Desenvolvimento
            </span>
            <div className="icon">
              <img src={RightArrow} alt="Seta pra Direita"/>
            </div>
          </button>
        </form>
        <div className="contato-rodape">
          <div className="content-icon">
            <div className="box-icon">
              <div className="icon">

              </div>
              <div className="text">
                Espírito Santo, Brasil
              </div>
            </div>
            <div className="box-icon">
              <div className="icon">

              </div>
              <div className="text">
                +55 (28) 99291 1244
              </div>
            </div>
            <div className="box-icon">
              <div className="icon">

              </div>
              <div className="text">
                contato@hipnos.com
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}