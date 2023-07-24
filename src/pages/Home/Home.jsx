import Menu from '../Menu/Menu';
import About from '../About/About';
import Table from "../Table/Table";
import { criaElementos } from '../../helpers/criaElementos';
import  discount  from '../../data/discount';
import Card from '../../components/Cards/Promocoes/Card';

import Slide from '../../components/Slide/Slide';

import { Discount } from './styles';
function Home() {
  return (
    <div>
      <Discount>
        {criaElementos(discount, Card)}
      </Discount>
      <Menu />
      <About />
      <Table />
      <Slide />
    </div>
  );
}

export default Home