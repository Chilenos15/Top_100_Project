import React from 'react';

const Artist = ({ billboard, artist }) => {

  const { id } = billboard
  const { name, rank } = artist
  return (
    <>
      <h1>Artist: {name}</h1>
      <h1>Billboard: {name}</h1>
      <p>
        {rank}
      </p>
      <a href={`/billboards/${id}`}>Show page of {name}</a>
    </>
  )
}

export default Artist;