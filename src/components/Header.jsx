// import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Nav from './Nav'; // Import the Nav component

const PortfolioLayout = () => {
  return (
    <div>
      
      <header>
        <Navbar/>
        <Nav /> {/* Include the Nav component here */}
        <h1>ASIA HASHIM-BEY</h1>
        {/* Additional header content goes here -Add image*/}
      </header>

    </div>
  );
};

export default PortfolioLayout;
