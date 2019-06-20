import React, { Component } from 'react';

class BookSearch extends Component {
  render() {
    return (
      <div className="book-search">
        <form className="form-inline sb-search-form" onSubmit={this.props.handleSubmit}>
          <input
            type="text"
            name="searchTerm"
            className="sb-search-input"
            placeholder="Search Title"
            onChange={this.props.handleChange}
          />

          <button type="submit" className="sb-search-button">
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default BookSearch;
