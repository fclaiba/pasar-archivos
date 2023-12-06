import React from "react";
import { ButtonGoogle } from "./ButtonGoogle";
import { ButtonSecondary } from "./ButtonSecondary";
import { Header } from "./Header";
import { Logo } from "./Logo";
import "./style.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="div-2">
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
            className="button-secondary-instance"
            property1="default"
            rectNgulo="rect-ngulo-56-5.svg"
            text="INGRESAR"
          />
        </div>
        <p className="p">Ingresá en nuestro sistema para obtener un trato personalizado.</p>
        <ButtonGoogle
          className="button-google-instance"
          property1="default"
          rectNgulo="rect-ngulo-56-4.svg"
          vector="vector-3.svg"
        />
        <p className="text-wrapper-3">O iniciá sesión con email y contraseña</p>
        <p className="no-ten-s-tu-usuario">
          <span className="span">¿No tenés tu usuario? </span>
          <span className="text-wrapper-4">Hacé clic aquí.</span>
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
