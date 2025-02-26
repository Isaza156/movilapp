import React from "react";
import { Link } from "react-router-dom";
import Styled from 'styled-components'

const FlexContainer = Styled.div`
  width:100%;
  display:flex;
  align-content:center;
  align-items:center;
  justify-content:space-around;
`

const Footer = () => (
  <footer className="footer bg-white border-top text-center">
    <FlexContainer>

      <Link to="/rutas" className="text-dark footer_item_container">
        <i className="fas fa-road color-orange"></i>
        <br /> Trayectos
      </Link>

      <Link to="/home" className="text-dark footer_item_container">
        <i className="fas fa-home color-orange"></i>
        <br /> Inicio
      </Link>

      <Link to="/sugerencias" className="text-dark footer_item_container">
        <i className="fas fa-paper-plane color-orange"></i>
        <br /> Pqrs
      </Link>

    </FlexContainer>
  </footer>
)

export default Footer;
