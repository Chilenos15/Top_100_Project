import Reach from 'react';
import Artist from './Artist';

const Song = ({ topic, song }) => {

  const { name, rank } = artist
  const { title, duration, album } = song
  return (
    <>
      <h1>Song: {title}</h1>
      <h1>Artist: {name}</h1>
      <p>
        {duration}
      </p>
      <a href={`/artists/${name}`}>Show page of {name}</a>
      </>
  )
}

export default Song;