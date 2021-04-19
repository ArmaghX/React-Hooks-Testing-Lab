import React, { useState, useEffect } from "react";

const UseEffectApiRequestComponent = () => {
  let [posts, setPosts] = useState([]);
  let [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://api.github.com/users/armaghx930/repos')
      .then(response => response.json())
      .then(repo => setPosts(repo))
      .finally(() => setIsLoading(false));
  }, []); //Solo se ejecuta una vez si el contenido del Array cambia

  const loading = (isLoading) ? <center>Loading...</center> : null;

  return (
   <fieldset>
      <div>
        { loading  }
        { posts.map((repo, key) => (
          <div key={ key }>
            { repo.name }
          </div>
        ))}
        </div>
    </fieldset>
  );
}

export default UseEffectApiRequestComponent;