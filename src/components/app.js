import React, { Component } from 'react'
import { SearchBarContainer } from '../containers/searchBarContainer';
import { CityListContainer } from '../containers/cityListContainer';

export default class App extends Component {
  render() {
    return (
        <div>
          <SearchBarContainer />
          <CityListContainer/>
        </div>
    )
  }
}
