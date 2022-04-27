/*eslint-disable*/
import { Route, Link, Switch, Routes } from 'react-router-dom';
import React from 'react';
import cv from '../KangSeonggon.pdf'

function Portfolio() {

    return(
        <iframe className='cv' src={cv}></iframe>
       
    )
}

export default Portfolio;