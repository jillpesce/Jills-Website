import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Intro from './Intro';
import '../style/NavBar.css';

import Navbar from 'react-bootstrap/Navbar';
import NavItem from 'react-bootstrap/NavItem';
import Nav from 'react-bootstrap/Nav';

export default class NavBar extends React.Component {
    render() {
        return (
            <ul id="menu">
            <li class="active" data-menuanchor="Projects">
                <a href="#Projects">Projects</a>
            </li>
            <li data-menuanchor="Involvements">
                <a href="#Involvement">Involvement</a>
            </li>
        </ul>
        );
    }
}