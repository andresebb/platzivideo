import React, { Component } from 'react';
import Header from '../components/Header';
import Search from "../components/Search";
import Carousel from '../components/Carousel';

import '../assets/styles/app.scss';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <Search />
                <Carousel/>
            </div>
        )
    }
}
