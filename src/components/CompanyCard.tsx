import { useState } from 'react';
import { Company, formatMoney } from "../utils";
import '../App.css';

interface Props {
  company: Company;
};

const CompanyCard: React.FC<Props> = ({ company }) => {
  const [showMore, setShowMore] = useState(true);
  const actionText = `Show ${showMore ? 'more' : 'less'}`;
  const icon = showMore ? 'right arrow-down' : 'right arrow-up';

  return (
    <div className="company-card">
      <h3>{company.companyName}</h3>
      <div className="info">
        <div className="state"><div className="label">State</div><div className="value">{company.companyState}</div></div>
        <div className="employee-count"><div className="label">Employees</div><div className="value">{company.employeeCount}</div></div>
        <div className="plan-year"><div className="label">Year</div><div className="value">{company.planYear}</div></div>
      </div>
      <hr />
      <div className="moreOrLess" onClick={() => setShowMore(!showMore)}>
        <p className="icon-container">{actionText} <span className={icon} /></p>
        {!showMore && (
          <ul className="more">
            <li><span className="more-label">Premium: </span>{formatMoney(company.premiumSum)} </li>
            <li><span className="more-label">Participants: </span>{company.participantsSum} </li>
            <li><span className="more-label">Broker Commissions: </span>{formatMoney(company.brokerCommissionSum)}</li>
          </ul>)
        }
      </div>
    </div>
  )
}

export default CompanyCard;
