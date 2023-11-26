import './App.css';
import ClientCardSection from './components/ClientCardSection/ClientCardSection';
import SmallCard from './components/SmallCard/SmallCard';
import Header from './components/Header/Header';
import {clientCardData1, clientCardData2} from './data/clientCardData';
import {smallCardData1, smallCardData2, smallCardData3} from './data/smallCardData';
import CardWithPrice from './components/CardWithPrice/CardWithPrice'
import { priceCardData1} from './data/priceCardData';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='container' id='top'>
      <Header />
      <div className='section'>
        <div className='div-gap'></div>
        <ClientCardSection data={clientCardData1} />
        <SmallCard data={smallCardData1} title='Top Cyber Monday Deal Categories' />
        <SmallCard data={smallCardData2} title='Top Sellers in Book for you' />
        <ClientCardSection data={clientCardData2} />
        <SmallCard data={smallCardData3} title='Best Sellers in Computers and Accessories' />
        <CardWithPrice data={priceCardData1} title='Best Deals' />
      </div>
      <Footer />
    </div>
  )
}

export default App;
