import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="input-group">
        <img src="https://i.ytimg.com/vi/T7TJH5MF74s/maxresdefault.jpg"  height="100px"></img>
        <input  placeholder="Search" type="text" className="input" ref="search" ></input>
          <button  className="w3-button w3-white w3-border w3-border-red" type="button" onClick={(event) => this.props.onSearchTerm(this.refs.search.value)}> <i className="fa fa-search"></i> </button>
      </div>
      
    )
  }
}

export default SearchBar;