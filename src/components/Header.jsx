// import { Link } from 'react-router-dom';
import Nav from './Nav'; // Import the Nav component

const PortfolioLayout = ({selectedNav,setSelectedNav}) => {
  return (
    <div>
      
      <header>
        <Nav  selectedNav= {selectedNav} setSelectedNav={setSelectedNav}/> {/* Include the Nav component here */}
        <h1>ASIA HASHIM-BEY</h1>
        {/* Additional header content goes here -Add image*/}
      </header>

    </div>
  );
};

export default PortfolioLayout;
