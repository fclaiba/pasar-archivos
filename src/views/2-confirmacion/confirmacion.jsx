import React from "react";
import { ButtonSecondary } from "./ButtonSecondary";
import { Header } from "./Header";
import { Logo } from "./Logo";
import "./confirmacion.css";
import "./confirmacionguide.css";


export const H = () => {
  return (
    <div className="h">
      <div className="div">
        <div className="text-wrapper-2">Usuario creado correctamente</div>
        <p className="p">Por favor, verificá tu casilla de email para activar la cuenta.</p>
        <ButtonSecondary
          className="button-secondary-instance"
          property1="default"
          rectNgulo="rect-ngulo-56-2.svg"
          text="CERRAR"
        />
        <Header
          backButtonChevronLeftSolid="chevron-left-solid-1-2.svg"
          className="header-instance"
          icon={<Logo className="icon-instance-node" />}
        />
      </div>
    </div>
  );
};