import React, {Component} from 'react';
import '../App.css';

export default class NavigationComponent extends Component{
    render(){
        return(
            <div className="navBar">
                <a href="./">Management Portal Home</a>
                <a href="https://infrrd.ai/news">News</a>
                <a href="https://infrrd.ai/contact-us">Contact</a>
                <a href="https://infrrd.ai/about-us">About Us</a>
            </div>
        );
    }
}