import React from 'react';

const ArtistNew = ({ billboard, artist }) => {

  const { id, name } = billboard 
  const { name, rank } = artist
  const defaultName = name ? name : ""
  const defaultRank = rank ? rank : ""
  return (
    <>
      <h1>New artist from the Billboard {name}</h1>
      <form action={`/billboards/${id}/artists`} method="post">
        <label>Name</label>
        <input 
          type="text"
          required 
          defaultValue={defaultName}
          name="artist[name]"
        />
        <label>Rank</label>
        <textarea
          required 
          defaultValue={defaultRank}
          name="artist[rank]"
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default ArtistNew;