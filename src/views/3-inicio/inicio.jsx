import React from "react";
import { AccordionAdherente } from "./AccordionAdherente";
import { AccordionMono } from "./AccordionMono";
import { AccordionRelaciN } from "./AccordionRelaciN";
import { Logo } from "./Logo";
import "./inicio.css";
import "./inicioguide.css";


export const Inicio = () => {
  return (
    <div className="inicio">
      <div className="div-2">
        <img className="sssaludconinfo" alt="Sssaludconinfo" src="sssaludconinfo-959f625-1.png" />
        <img className="osfatun" alt="Osfatun" src="osfatun-2-6a3b7dc-1.png" />
        <div className="group">
          <div className="overlap-group">
            <img className="vector" alt="Vector" src="vector.png" />
            <img className="personas" alt="Personas" src="personas-1.svg" />
          </div>
        </div>
        <p className="p">Bienvenida/o al Formulario de Afiliación de OSFATUN</p>
        <p className="text-wrapper-2">
          Para comenzar, te pedimos que tengas tu DNI en mano y luego selecciones entre las siguientes opciones:
        </p>
        <div className="accordion">
          <div className="frame">
            <AccordionRelaciN
              className="design-component-instance-node"
              divider="divider-8.svg"
              headerText="RELACIÓN DE DEPENDENCIA"
              property1="type-3"
            />
            <AccordionMono
              className="design-component-instance-node"
              divider="divider-7.svg"
              headerText="MONOTRIBUTISTA"
              property1="type-3"
            />
            <AccordionAdherente
              className="design-component-instance-node"
              divider="divider-6.svg"
              headerText="PARTICULAR (Prepago)"
              property1="type-3"
            />
          </div>
        </div>
        <header className="header">
          <Logo className="logo-instance" />
        </header>
      </div>
    </div>
  );
};
