
import './App.css';

import { RedocStandalone } from 'redoc';

// import * as swagger from './swagger.json';
function App() {
  return (
    <div className="App">
      <RedocStandalone
  spec={"https://apidocs.antna.co.in/swagger.yaml"}
  options={{
    nativeScrollbars: true,
    theme: { colors: { primary: { main: '#0065fc' } } },
  }}
/>

    </div>
  );
}

export default App;
