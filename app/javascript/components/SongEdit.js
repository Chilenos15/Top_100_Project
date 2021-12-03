import React from 'react';
import Artist from './Artist';
import Song from './Song';

const { name, rank, } = artist
const { title, duration, album } = song
const defaultTitle = title ? title : ""
const defaultDuration = duration ? duration : ""
return (
  <>
    <h1>New song from the Artist {name}</h1>
    <form action={`/artists/${name}/songs/${song.id}`} method="post">
      <input type="hidden" name="_method" value="patch" />
      <label>Title</label>
      <input
        type="text"
        required
        defaultValue={defaultTitle}
        name="song[title]"
        />
        <label>Duration</label>
        <textarea
          required
          defaultValue={defaultDuration}
          name="song[duration]"
          ></textarea>
          <button type="submit">Submit</button>
    </form>
    </>
  )
}

export default SongEdit;