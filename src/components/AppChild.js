import { useContext } from 'react';
import MyContext from '../context';

const AppChild = () => {
  const { state, setState } = useContext(MyContext);

  const handleNameChange = () => {
    if (state.name === 'Oreoluwade') {
      setState({ ...state, name: 'Aboluwarin' });
    } else {
      setState({ ...state, name: 'Oreoluwade' });
    }
  };

  const handleCountChange = () => {
    setState({ ...state, count: state.count + 1 });
  };

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      className="app-child"
    >
      <span>
        This is the App child of <h2>{state.name}</h2>
      </span>
      <div>Number of count clicks {state.count}</div>
      <button
        type="button"
        onClick={handleCountChange}
        style={{ width: '100px', marginBottom: '12px', marginTop: '20px' }}
      >
        Update Count
      </button>
      <button
        type="button"
        onClick={handleNameChange}
        style={{ width: '100px', marginBottom: '12px' }}
      >
        Change name
      </button>
    </div>
  );
};

export default AppChild;
