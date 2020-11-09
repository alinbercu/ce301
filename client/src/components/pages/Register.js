import React, { Component } from 'react';
import { Container } from 'reactstrap';
import ShoppingList from '../ShoppingList';
import ItemModal from '../ItemModal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { login } from '../../actions/authActions';
import { clearErrors } from '../../actions/errorActions';

function Register() {
    

    return (
        <div className="registerDiv" >
            <form>
            <h1 style={{marginLeft:'5px', marginBottom:'70px'}}>BIG LOGO HERE</h1>
            <h4 style={{marginLeft:'30px', marginBottom:'20px'}}>Register your account</h4>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputName1">Name</label>
                    <input type="name" 
                        className="form-control" 
                        id="name" 
                        placeholder="Enter name"
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" 
                        className="form-control" 
                        id="email" 
                        aria-describedby="emailHelp" 
                        placeholder="Enter email"
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Register
                </button>

            </form>
        </div>
    )
}


export default Register;