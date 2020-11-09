import React, { Component, Fragment } from 'react';
import { Container } from 'reactstrap';
import ShoppingList from '../ShoppingList';
import ItemModal from '../ItemModal';
import AppNavbar from '../AppNavbar';

function Dashboard() {
    return (
        <Fragment>
            
            <AppNavbar />
                
            <Container>          
                <ItemModal />
                <ShoppingList />
            </Container>

        </Fragment>
    )
}


export default Dashboard;