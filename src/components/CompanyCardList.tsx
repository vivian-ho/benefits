import React from 'react';
import CompanyCard from './CompanyCard';
import { Company } from "../utils";
import "../App.css";

interface Props {
  companies: Company[];
}

const CompanyCardList: React.FC<Props> = ({ companies }) => {
  return (
    <div className="center">
      {companies.map((company) => (
        <CompanyCard key={`${company.ein}-${company.planYear}`} company={company} />
      ))}
    </div>
  );
};

export default CompanyCardList;