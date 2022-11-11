import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Router';

function App() {
  return (
    <div className="mx-auto">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
