import React from 'react';
import { Component } from 'react';

import Booklist from "../containers/book-list";
import BookDetail from '../containers/bookDetail';

export default class App extends Component {
  render() {
    return (
      <div>
      	<Booklist />
      	<BookDetail />
      </div>
    );
  }
}
