import React from 'react';
import { connect } from 'react-redux';
import { getYouTube } from '../actions';

import SearchBar from './search_bar';
import List from './list';
import Detail from './detail';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedVideo: null
    };
  }

  componentDidMount() {
    this.videoSearch('react redux');
  }

  videoSearch = (term)=> {
    this.props.getYouTube(term);
  }

  onVideoSelect = (selectedVideo)=> {
    this.setState({selectedVideo})
  }

  componentWillReceiveProps(nextProps) {
    this.setState({selectedVideo: nextProps.selectedVideo});
  }

  render() {
    console.log(this.props);
    return (
      <div className="container-fluid">
            <SearchBar onSearchTerm={(term)=>this.videoSearch(term)} />
        <div className="row">
            <Detail video={this.state.selectedVideo} />
            <List
              videos={this.props.videos}
              onVideoSelect={(selectedVideo) => this.onVideoSelect(selectedVideo)}  />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state)=> {
  return {
    videos: state.videos,
     selectedVideo: state.videos[0]
    };
}

const mapDispatchToProps = (dispatch) =>{
  return {
    getYouTube : (term)=>{
      dispatch(getYouTube(term))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);