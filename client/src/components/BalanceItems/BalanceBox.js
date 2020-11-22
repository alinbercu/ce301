import React, { useReducer, useState, useEffect } from "react";

import { connect } from "react-redux";
import PropTypes from "prop-types";

import { updateBalance } from "../../actions/userActions";
import style from "./BalanceBox.css";

function BalanceBox({ updateBalance, auth, userupdate }) {
  const { isAuthenticated, user } = auth;
  const user_balance = userupdate;

  const [balance, setBalance] = useState(0);

  const [balanceForm, setbalanceForm] = useState("");

  useEffect(() => {
    if (user) {
      setBalance(user.user_balance);
    }
  });

  const onSubmit = () => {
    console.log(user);
    const user_balance = balanceForm;
    const email = user.email;
    console.log(user);
    const newUserBalance = {
      email,
      user_balance,
    };

    if (newUserBalance.user_balance <= 0) {
      //ERROR
    }

    //Attempt to update balance
    updateBalance(newUserBalance);
  };

  return (
    <>
      <h2 style={{ marginLeft: "35px", marginTop: "25px" }}>Balance</h2>

      <div className="currentBalanceBox">
        <p style={{ textAlign: "center" }}>Current balance: £{balance}</p>
      </div>

      <div className="balanceBox">
        <div className="topDiv">
          <p style={{ fontSize: "18px" }}> Add balance </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
          }}
        >
          <div className="mt-3 form-group text-left">
            <label htmlFor="exampleInputEmail1" id="amountLabel">
              Amount
            </label>
            <input
              type="text"
              className="form-control"
              id="amount"
              value={balanceForm}
              onChange={(e) => setbalanceForm(e.target.value)}
              placeholder="Enter amount in £"
            />
            <label htmlFor="exampleInputEmail1" id="paymentLabel">
              Payment method
            </label>
            <select className="form-control" id="payment" name="payment">
              <option value="paypal">Paypal</option>
              <option value="bankpayment">Bank payment</option>
              <option value="cryptocurrency">Cryptocurrency</option>
            </select>
          </div>

          <button className="btn btn-primary" type="submit" id="buttonBalance">
            Add balance
          </button>
        </form>
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  userupdate: state.userupdate,
});

BalanceBox.propTypes = {
  auth: PropTypes.object.isRequired,
  userupdate: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { updateBalance })(BalanceBox);
