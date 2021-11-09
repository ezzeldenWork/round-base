import AddNewInvestor from "../components/investor/cards/add";
import InvestorSide from "../components/investor/cards/investorSider";
import Header from "../components/layout/header";

const Investor = () => {
  return (
    <>
      <Header />
      <InvestorSide>
        <AddNewInvestor />
      </InvestorSide>
    </>
  );
};

export default Investor;
