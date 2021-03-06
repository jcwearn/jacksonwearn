'use strict';

const React = require('react');
const ReactDOM = require('react-dom');

const Intro = require('./Intro');
const About = require('./About');
const Header = require('./Header');
const Footer = require('./Footer');
const Contact = require('../containers/ContactContainer');

const App = ({ dispatch }) => {
    return (
        <div>
            <Header/>
            <Intro
                jobTitle={'Senior Software Engineer'}
                companyUrl={'https://www.cnn.com/'}
                companyTitle={'CNN'}
            />
            <About
                text={'Hi.  My name is Jackson. I am a Senior Software Engineer for the Elections Team at CNN.  I am a chronic tinkerer.  I read code, I write code, and I love expanding my technological arsenal.  I have a strong fondness for Node.js and Ruby, but I am always eager to try bleeding edge technologies.  Feel free to drop me a line if you’re interested in learning about my work experience, or if you just want to chat.'}
            />
            <Contact/>
            <Footer/>
        </div>
    );
};

module.exports = App;
