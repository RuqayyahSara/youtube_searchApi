import React from 'react'
import Item from './item'

const List = (props)=>{
  const videoItems = props.videos.map((video)=>{
      return (
      <Item 
      onVideoSelect={props.onVideoSelect}
      key={video.etag} video={video} />
      )
  });

  return(
     <ul className="media-list"> 
          {videoItems}
     </ul>
   )
}

export default List;
