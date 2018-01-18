import React, {Component} from "react";
import WelcomeHeader from "./WelcomeHeader";
import MenuInputTitle from "./MenuInputTitle";
import vault from "./images/vaultLabel.png";
import VendInp from "./VendorVaultInputs";
import Submit from "./SubmitBtn";

export default function VaultInputs(){
  return( 
    <div className="page">
      
       <WelcomeHeader />
       <div className="menu">
        <MenuInputTitle image={vault} />
        <VendInp />
        <Submit />
      </div>
    </div>
    
  
    
   
    
  )
}