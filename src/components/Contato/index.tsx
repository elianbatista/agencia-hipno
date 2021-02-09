import React, { useState } from 'react'
import sgMail from '@sendgrid/mail'
import ContatoImagem from '../../images/contato/imagem-contato.jpg'
import { FaMapMarkerAlt, FaWhatsapp, FaEnvelope } from 'react-icons/fa'

import './styles.scss'
import './responsive.scss'

interface Props {
  active: boolean
}

const Contato: React.FC<Props> = ({
  active
}) => {
  sgMail.setApiKey('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')

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [assunto, setAssunto] = useState('')
  const [mensagem, setMensagem] = useState('')

  function handleNome(event: any) {
    setNome(event.target.value)
  }

  function handleEmail(event: any) {
    setEmail(event.target.value)
  }

  function handleTelefone(event: any) {
    setTelefone(event.target.value)
  }

  function handleAssunto(event: any) {
    setAssunto(event.target.value)
  }

  function handleMensagem(event: any) {
    setMensagem(event.target.value)
  }

  function handleSubmit(event: any) {
    event.preventDefault()
  }

  return (
    <section className={active ? 'contato active' : 'contato'}>
      <div className="left-side">
        <div className="content-title">
          <div className="content-barra">
            <div className="barra"></div>
          </div>
          <h2>
            Diga um oi!
          </h2>
        </div>
        <p>
          Fale pra gente um pouco sobre sua necessidade e entraremos em contato o mais rápido
          possível!
        </p>
        <form onSubmit={handleSubmit}>
          <div className="field-input">
            <input type="text" onChange={(event) => handleNome(event)} required />
            <label className={nome !== '' ? 'no-animation' : ''}>Nome</label>
            <div className="border-bottom"></div>
          </div>
          <div className="field-input">
            <input type="text" onChange={(event) => handleEmail(event)} required />
            <label className={email !== '' ? 'no-animation' : ''}>Email</label>
            <div className="border-bottom"></div>
          </div>
          <div className="field-input">
            <input type="text" onChange={(event) => handleTelefone(event)} required />
            <label className={telefone !== '' ? 'no-animation' : ''}>Telefone</label>
            <div className="border-bottom"></div>
          </div>
          <div className="field-input">
            <input type="text" onChange={(event) => handleAssunto(event)} required/>
            <label className={assunto !== '' ? 'no-animation' : ''}>Assunto</label>
            <div className="border-bottom"></div>
          </div>
          <div className="field-textarea">
            <textarea onChange={(event) => handleMensagem(event)} required></textarea>
            <label className={mensagem !== '' ? 'no-animation' : ''}>Mensagem</label>
            <div className="border-bottom"></div>
          </div>
          <p>
            Seus dados de contato estão protegidos de acordo com as leis de privacidade 
            digitais. O site é protegido por reCAPTCHA e a política de privacidade de 
            serviços do Google.
          </p>
          <div className="content-button">
            <button type="submit">
              <div className="background-hover"></div>
              <span>
                Enviar
              </span>
            </button>
          </div>
        </form>
        <div className="contato-rodape">
          <div className="content-icon">
            <div className="box-icon">
              <div className="icon">
                <FaMapMarkerAlt />
              </div>
              <div className="text">
                Espírito Santo, Brasil
              </div>
            </div>
            <div className="box-icon">
              <div className="icon">
                <FaWhatsapp />
              </div>
              <div className="text">
                +55 (28) 99961 4261
              </div>
            </div>
            <div className="box-icon">
              <div className="icon">
                <FaEnvelope />
              </div>
              <div className="text">
                contato@agenciahipnos.com.br
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="right-side">
        <img src={ContatoImagem} alt="Entre com Contato - Agência Hipnos"/>
      </div>
    </section>
  )
}

export default Contato