import React, { Component, Fragment } from "react";
import { Container } from "reactstrap";
import ShoppingList from "../ShoppingList";
import ItemModal from "../ItemModal";
import AppNavbar from "../AppNavbar";
import AppSideBar from "../AppSidebar/AppSidebar";
import InfoBoxes from "../DashboardItems/InfoBoxes";
import BalanceBox from "../BalanceItems/BalanceBox";
import OrderBoxes from "../OrderSmsItems/OrderBoxes";

function OrderSMS() {
  return (
    <Fragment>
      <div className="container1">
        <div className="first">
          <AppSideBar />
        </div>
        <div className="second">
          <AppNavbar /> {/* navbar TOP  */}
          <OrderBoxes />
        </div>
      </div>
    </Fragment>
  );
}

export default OrderSMS;
