import './App.css';
import Sidebar from './Sidebar';
import Body from './Body';
import Explore from './Explore';

function App() {
  return (
    <>
      <Explore/>
      <div className="container">
      
        <div className="side"><Sidebar/></div>
        
        <Body/>
      </div>
      
    </>
  );
}

export default App;
