import React from "react";
import Auxiliar from "../../hoc/Auxiliar";
import "../Layout/Layout.css";

const layout = (props) => (
  <Auxiliar>

    <div >Toolbar,SideDrawer, Backdrop</div>
    <main className="Content">{props.children}</main>
  </Auxiliar>
);
export default layout;
