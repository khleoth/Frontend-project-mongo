import React from 'react';
import { NavLink } from 'react-router-dom';
import { NavbarHeader, NavbarP } from './LandingCSS'

export const Navigation = () => {
  return (
    <NavbarHeader>
      <nav>
        <NavLink to="/netflixdata">
          <span>
            <NavbarP>Netflix data</NavbarP>
          </span>
        </NavLink>
        <NavLink to="/musicdata">
          <span>
            <NavbarP>Music data</NavbarP>
          </span>
        </NavLink>
      </nav>
    </NavbarHeader>
  )
}