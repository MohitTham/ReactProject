import React from 'react';

	  // destructure the images array from the props object
  function Results(props) {
  const { jokes } = props;

  // return early if there are no images
  if (!jokes.length) {
    return <h2>No Images Found!</h2>;
  }

  return (
    <div className="jokePanel">
      {jokes.map(joke => (
        <div key={joke.id} >
          
        </div>
      ))}
    </div>
  );
}
export default Results;

