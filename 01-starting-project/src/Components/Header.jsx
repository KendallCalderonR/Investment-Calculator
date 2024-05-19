import { Children } from "react";
import InvestImage from '../assets/investment-calculator-logo.png';

export function Header({children}){
    return(
        <header id="header">
            <img src={InvestImage} alt="Logo showing a money bag"/>
            <h1>{children}</h1>
        </header>
    );
}