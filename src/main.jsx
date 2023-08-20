import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';


// Imports for app Sections

import App from './App';
import Contact from './app/ContactPage';
import About from './app/AboutPage';
import Resume from './app/ResumePage';


// Define the accessible routes, and which components respond to which URL


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     default: '/AboutPage', // Set default route to AboutPage
//     children: [
//       {
//         path: '/AboutPage',
//         element: <About />,
//       },
//       {
//         path: '/ResumePage',
//         element: <Resume />,
//       },
//       {
//         path: '/ContactPage',
//         element: <Contact />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router}>
    <App /> 
  /* </RouterProvider> */
);

export default App;

