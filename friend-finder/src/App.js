import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  Hits,
  SearchBox,
  Pagination,
  Highlight,
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
            <div className="search-panel">
              <div className="search-panel__results">
                <SearchBox
                  className="searchbox"
                  translations={{
                    placeholder: 'Search',
                  }}
                />

                <div className="search-results">
                  <Hits hitComponent={Hit} />
                  <div className="map" style={{ height: 500 }}>
                    <GoogleMapsLoader apiKey={GOOGLE_MAPS_API_KEY}>
                      {google => (
                        <GeoSearch google={google}>
                          {({ hits }) => (
                            <div>
                              <Control />
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
  return (
    <article>
      <h1>
        <Highlight attribute="firstname" hit={props.hit} />
      </h1>
      <p>
        <Highlight attribute="lastname" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="company" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="address" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="city" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="state" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="zip" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="phone" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="email" hit={props.hit} />
      </p>
      <p>
        <Highlight attribute="web" hit={props.hit} />
      </p>
    </article>
  );
}

Hit.propTypes = {
  hit: PropTypes.object.isRequired,
};

export default App;
