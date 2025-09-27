import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// IMPORTING CONTAINERS
import Hero from './containers/Hero'
import Header from './containers/Header'
import About from "./containers/About";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header/>
    <Hero/>
    <About/>
  </StrictMode>,
)
