import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Imports for Header and Navigation

import Header from "./components/Header";
// import Navbar from "./components/Navbar";
import Nav from "./components/Nav";

import AboutPage from "./app/AboutPage";
// import Footer from "./components/Footer";
import { useLocation } from "react-router-dom";

function App() {
  const currentPage = useLocation().pathname;

  return (
    <div>
      <Header>
        <Nav currentPage={currentPage} />
      </Header>
      <main>
        <AboutPage currentPage={currentPage} />
      </main>
      <Footer />
    </div>
  );
}

export default App;

// // Bringing in the pages the router will use to conditionally show the appropriate views


// import App from './App';
// import ErrorPage from './app/ErrorPage';
// import AboutPage from './app/AboutPage';
// // import ResumePage from './app/ResumePage';
// import ContactPage from './app/ContactPage';

// // Define the accessible routes, and which components respond to which URL
// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         element: <HomePage />,
//       },
//       {
//         path: 'profile/:id',
//         element: <ProfilePage />,
//       },
//       {
//         path: 'about',
//         element: <AboutPage />,
//       },
//       {
//         // path: 'resume',
//         // element: <ResumePage />,
//       },
//       {
//         path: 'contact',
//         element: <ContactPage />,
//       },
//     ],
//   },
// ]);

