/* eslint-disable react/jsx-closing-tag-location */
/* eslint-disable no-underscore-dangle */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { TOPCHART_URL } from 'utils/urls';
import { Datadiv, Singleshowdiv, Detailsp, Categorylink, SingleDescription } from './DatadisplayCSS';

export const Musicdata = ({ loading, setLoading }) => {
  const [itemDetails, setItemDetails] = useState([]);
  const [musicList, setMusicList] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch(TOPCHART_URL)
      .then((response) => response.json())
      .then((data) => {
        setMusicList(data.body);
        setItemDetails(data.body.map(() => false));
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [setLoading]);

  const toggleHidden = (index) => {
    setItemDetails(itemDetails.map((value, i) => (i === index ? !value : value)));
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <Datadiv>
      {itemDetails
        && itemDetails.length > 0
        && itemDetails.map((hidden, index) => {
          const singleSong = musicList[index];

          return (
            <Singleshowdiv key={singleSong._id} onClick={() => toggleHidden(index)}>
              <div>
                <h2>{`${singleSong.trackName} by ${singleSong.artistName}`}</h2>
                {hidden && (
                  <SingleDescription>
                    <Detailsp>Genre:{'  '}{singleSong.genre}</Detailsp>
                    <Detailsp>Popularity:{'  '}{singleSong.popularity}</Detailsp>
                    <Detailsp>Loudness:{'  '}{singleSong.loudness}</Detailsp>
                    <Detailsp>Dance factor:{'  '}{singleSong.danceability}</Detailsp>
                    <Detailsp>Length - seconds:{'  '}{singleSong.length}</Detailsp>
                    <NavLink to="/musicdata/artist/:name">
                      <Categorylink>Link to:{'  '}{singleSong.artistName}</Categorylink>
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
