// Importaciones
import React from "react";
import { ButtonPrimary } from "./ButtonPrimary";
import { Header } from "./Header";
import { Logo } from "./Logo";
import "./style.css";

// Componente Validacin
export const Validacin = () => {
    return (
        <div className="validacin">
            <div className="div">
                <img className="footer" alt="Footer" src="footer.png" />
                <img className="group" alt="Group" src="group-1.png" />
                <div className="text-wrapper-2">Validación de Identidad</div>
                <p className="p">
                    Para que el siguiente formulario sea seguro, te solicitaremos una foto de tu DNI, una selfie y una validación vía SMS a tu celular.
                </p>
                <p className="text-wrapper-3">
                    El servicio de validación de identidad y firma digital es provisto por la empresa MetaMap.
                </p>
                <p className="text-wrapper-4">
                    Cuando estés lista/o accedé a través del siguiente botón:
                </p>
                <img className="img" alt="Img" src="63404cb4bf6fab9d0b0975f2-mmlg1-1.svg" />
                <ButtonPrimary
                    ACEPTARYAccederClassName="design-component-instance-node"
                    className="button-primary-instance"
                    property1="default"
                    rectNgulo="rect-ngulo-56-2.svg"
                    text="ACCEDER A LA VALIDACIÓN"
                />
                <Header
                    backButtonChevronLeftSolid="chevron-left-solid-1-3.svg"
                    className="header-instance"
                    icon={<Logo className="icon-instance-node" />}
                />
            </div>
        </div>
    );
};
