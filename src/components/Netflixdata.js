/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { NETFLIXBASE_URL } from 'utils/urls';
import { Datadiv, Singleshowdiv, Detailsp, Categorylink, SingleDescription } from './DatadisplayCSS';

export const Netflixdata = ({ loading, setLoading }) => {
  const [showDetails, setShowDetails] = useState([]);
  const [netflixList, setNetflixList] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(NETFLIXBASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setNetflixList(data.body);
        setShowDetails(data.body.map(() => false));
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [setLoading]);

  const toggleHidden = (index) => {
    setShowDetails(showDetails.map((value, i) => (i === index ? !value : value)));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Datadiv>
      {showDetails
        && showDetails.length > 0
        && showDetails.map((hidden, index) => {
          const singleShow = netflixList[index];

          return (
            <Singleshowdiv key={singleShow._id} onClick={() => toggleHidden(index)}>
              <div>
                <h2>{singleShow.title}</h2>
                {hidden && (
                  <SingleDescription>
                    <Detailsp>Director:{'  '}{singleShow.director}</Detailsp>
                    <Detailsp>Cast:{'  '}{singleShow.cast}</Detailsp>
                    <Detailsp>Origin:{'  '}{singleShow.country}</Detailsp>
                    <Detailsp>Release:{'  '}{singleShow.release_year}</Detailsp>
                    <Detailsp>Description:{'  '}{singleShow.description}</Detailsp>
                    <NavLink to="/netflixdata">
                      <Categorylink>Category:{'  '}{singleShow.listed_in}</Categorylink>
                    </NavLink>
                  </SingleDescription>
                )}
              </div>
            </Singleshowdiv>
          );
        })}
    </Datadiv>
  );
};
