import React, { useContext } from 'react';

const UseContextComponent = () => {
  //Create context devuelve { Provider, Consumer }
  const CountContext = React.createContext(15);
  const count = useContext(CountContext);

  return (
    <div>
    <CountContext.Provider value={ count }>
        { count }
    </CountContext.Provider>
</div>
  );
}

export default UseContextComponent;