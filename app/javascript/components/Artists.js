import React from 'react';

const Artists = ({ billboard, artists, }) => {

  const { id, name } = billboard
  // const id = billboard.id
  // const name = billboard.name
  const url = `/billboards/${id}/artists/`
  return(
    <>
      <h1>All artists from {name}</h1>
      <a href={`/billboards/${id}/artists/new`}>Add new artist</a>
      {/* artists = [{ name: 'adfadf', rank: 'dasfasdf', id: 1}, { name: 'adfadf', rank: 'dasfasdf', id: 2}] */}
      { artists.map( (artist) => (
        <>
          <h3>{artist.name}</h3>
          <a href={`${url}${artist.id}`}>Show</a>
          <a href={`${url}${artist.id}/edit`}>Edit</a>
          <a href={`${url}${artist.id}`} data-method="delete">
            Delete
          </a>
        </>
      ))}
    </>
  )
}

export default Artists;