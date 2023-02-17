import logo from './logo.svg';
import './App.css';
import Layout from './layout';
import {Link} from "react-router-dom";
import {
createBrowserRouter,RouterProvider
} from "react-router-dom";
function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Layout/>,
      children: [
        {
          path: '/about',
          element: <div>about</div>
        }, 
      {
        path: '/about/us',
        element: <div>US</div>
      },  {
        path: '/about/me',
        element: <div>me</div>
      }]
    },
    {
      path: '*',
      element: <div>sai cmn đường dẫn rồiii</div>
    },
  ]);
  return (
    <div className="container">
      <RouterProvider
        router={router}   >
    </RouterProvider>
    </div>
  );
}

export default App;
