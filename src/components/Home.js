import React from 'react';
import { HomeDiv, HomeDescription, DescriptionWrapper } from './LandingCSS';

export const Home = () => {
  return (
    <HomeDiv>
      <DescriptionWrapper>
        <HomeDescription>
                Welcome to this database which contains data from 1000+ netflix titles
                and most popular songs at a given time
        </HomeDescription>
      </DescriptionWrapper>
    </HomeDiv>
  )
}