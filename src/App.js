/* eslint-disable max-len */
import React, { useState } from 'react'
import { BrowserRouter, Routes, Route/* , Navigate */ } from 'react-router-dom';
import { Navigation } from 'components/Navigation'
import { Home } from 'components/Home';
import { Netflixdata } from 'components/Netflixdata';
import { Musicdata } from 'components/Musicdata'

export const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/netflixdata" element={<Netflixdata loading={loading} setLoading={setLoading} />} />
        <Route path="/musicdata" element={<Musicdata loading={loading} setLoading={setLoading} />} />
        {/* <Route path="/moviedetails/:id" element={<MovieDetails />} />
        <Route path="/tvlist" element={<TvList loading={loading} setLoading={setLoading} />} />
        <Route path="/tvdetails/:id" element={<TvDetails />} />
        <Route path="/404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/404" />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

/* https://project-mongo-api-3oe2ikwwwa-lz.a.run.app */