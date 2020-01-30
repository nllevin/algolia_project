import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
  Configure
} from 'react-instantsearch-dom';
import {
  GoogleMapsLoader,
  GeoSearch,
  Control,
  Marker,
} from 'react-instantsearch-dom-maps';
import PropTypes from 'prop-types';
import './App.css';
const { GOOGLE_MAPS_API_KEY } = require("./keys.js");

const searchClient = algoliasearch('5UDDVDO0RB', '5db4d1012a4e490b710a918547c4dfc0');

class App extends Component {
  render() {
    return (
      <div>
        <header className="header">
          <h1 className="header-title">
            <a href="/">FriendFinder</a>
          </h1>
          <p className="header-subtitle">
            using{' '}
            <a href="https://github.com/algolia/react-instantsearch">
              React InstantSearch
            </a>
          </p>
        </header>

        <div className="container">
          <InstantSearch searchClient={searchClient} indexName="geoloc_contacts">
            <Configure
              hitsPerPage={6}
              getRankingInfo
              aroundLatLngViaIP
              typoTolerance="min"
            />
            <div className="search-panel">
              <div className="search-panel__results">
                <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: 'Find your friends nearby!',
                  }}
                />

                <div className="search-results">
                  <Hits hitComponent={Hit} />
                  <div className="map" style={{ height: 500 }}>
                    <GoogleMapsLoader apiKey={GOOGLE_MAPS_API_KEY}>
                      {google => (
                        <GeoSearch 
                          google={google}
                          initialZoom={8}
                          mapTypeControl={false}
                          initialPosition={{
                            lat: 40.7128,
                            lng: -74.0060
                          }}
                        >
                          {({ hits }) => (
                            <div>
                              {hits.map(hit => (
                                <Marker key={hit.objectID} hit={hit} />
                              ))}
                            </div>
                          )}
                        </GeoSearch>
                      )}
                    </GoogleMapsLoader>
                  </div>
                </div>

                <div className="pagination">
                  <Pagination />
                </div>
              </div>
            </div>
          </InstantSearch>
        </div>
      </div>
    );
  }
}

function Hit(props) {
  const { hit } = props;
  return (
    <article>
      <h1>{hit.firstname} {hit.lastname}</h1>
      <p>{hit.company}</p>
      <p className="address">{hit.address}</p>
      <p className="address-2">{hit.city}, {hit.state}{hit.zip}</p>
      <p>{hit.phone}</p>
      <p>{hit.email}</p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
