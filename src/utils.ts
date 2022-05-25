import config from "./config.json";

export interface Company {
  ein: string,
  companyName: string,
  planYear: string,
  employeeCount: number,
  premiumSum: bigint,
  companyState: string,
  brokerCommissionSum: bigint,
  participantsSum: number
};

const getErrorMessage = (error: unknown) => {
  if (error instanceof Error) {
    return error.message;
  }

  return String(error);
};

const reportError = ({ message }: { message: string }) => {
  console.log('An error occurred:', message);
};

const camelize = (text: string) => {
  text = text.replace(/[-_\s.]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');
  return text.substr(0, 1).toLowerCase() + text.substr(1);
}

export const getCompanies = async (useLocalMock?: boolean): Promise<Array<Company | unknown>> => {
  let companies = Array<Company | unknown>();

  try {
    const response = await fetch(useLocalMock ? 'companies.json' : config.url);
    const json = await response.json();
    // transforming to camelCase
    companies = Object.values(json).map(outerValue => {
      const entry = {};
      Object.entries(outerValue).forEach(([key, value]) => {
        entry[camelize(key)] = value;
      })
      return entry;
    });
  } catch (error) {
    if (error) {
      reportError({ message: getErrorMessage(error) });
    }
  } finally {
    return companies;
  }
};

export const formatMoney = (amount, locale: string = 'en-US', currency: string = 'USD'): string => {
  const formatted = new Intl.NumberFormat(locale, { style: 'currency', currency, notation: 'compact', 
    compactDisplay: "short", minimumFractionDigits: 2 }).format(amount);

  return formatted;
}