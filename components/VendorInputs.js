import React, {Component} from "react";
import Header from "./Header_LogoButtons.js";
import MenuInputTitle from "./MenuInputTitle";
import vendor from "./images/vendorLabel.png";
import VendInp from "./VendorVaultInputs";
import Submit from "./SubmitBtn";

export default function VaultInputs(){
  return( 
    <div className="page">
      
       <Header />
       <div className="menu">
        <MenuInputTitle image={vendor} />
        <VendInp type="vendor" />
        <Submit />
      </div>
    </div>
    
  
    
   
    
  )
}