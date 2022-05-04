/*eslint-disable*/
import { Route, Link, Switch, Routes } from 'react-router-dom';
import React from 'react';
import cv from '../KangSeonggon_cv.pdf'
import rhino from '../rhino.png'

function Portfolio() {

    return(
        <>
        <section className='portfolio'>
            <div className='resume'>
                <iframe className='cv' src={cv}></iframe>
            </div>
            <div className='overlay'>
                <div className='container'>
                    <h1>Resume</h1>
                    <p>Download Gon CV</p>
                    <img src={rhino}></img>
                    <a href={cv} download>
                        <input type='submit' value="Download" className="btn btn-primary"></input>
                    </a>
                </div>
            </div>

        </section>
        


        </>
        
       
    )
}

export default Portfolio;