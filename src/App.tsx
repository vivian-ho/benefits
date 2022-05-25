import { useState, useEffect } from 'react';
import "./App.css";
import CompanyCardList from './components/CompanyCardList';
import { getCompanies } from './utils';

const App = () => {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // fetch once on component mount
    const fetchOnce = async () => {
      const response = await getCompanies();
      setCompanies(response);
    }
    if (companies.length === 0) {
      fetchOnce();
    }
  }, []);

  return (
    <div className="container">
      <CompanyCardList companies={companies} />
    </div>
  )
}

export default App;
