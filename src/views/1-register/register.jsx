import React from "react";
import { ButtonSecondary } from "./ButtonSecondary";
import { Header } from "./Header";
import { Logo } from "./Logo";
import "./register.css";
import "./registerguide.css";


export const Registro = () => {
  return (
    <div className="registro">
      <div className="div">
        <img className="footer" alt="Footer" src="footer.png" />
        <img className="group" alt="Group" src="group-1.png" />
        <div className="text-wrapper-2">¿Estás registrado?</div>
        <div className="login-form">
          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="n-de-documento">Email</div>
            </div>
          </div>
          <div className="overlap-group-wrapper">
            <div className="overlap">
              <div className="n-de-documento">Contraseña</div>
            </div>
          </div>
          <ButtonSecondary
            ACEPTARYAccederClassName="design-component-instance-node"
            className="button-secondary-instance"
            property1="default"
            rectNgulo="rect-ngulo-56-2.svg"
            text="REGISTRARSE"
          />
        </div>
        <p className="p">Ingresá en nuestro sistema para obtener un trato personalizado.</p>
        <p className="text-wrapper-3">Registrate ingresando tu email y una contraseña a continuación:</p>
        <p className="ya-ten-s-cuenta">
          <span className="span">¿Ya tenés cuenta? </span>
          <span className="text-wrapper-4">Iniciá sesión</span>
        </p>
        <Header
          backButtonChevronLeftSolid="chevron-left-solid-1-3.svg"
          className="header-instance"
          icon={<Logo className="icon-instance-node" />}
        />
      </div>
    </div>
  );
};
