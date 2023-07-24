import { Conteiner } from './styles';
import Card from '../Cards/Costumers/Card';
import costumers from '../../data/costumers';
import { criaElementos } from '../../helpers/criaElementos';
function Slide() {
  return (
      <Conteiner>
          <h2>What Says Our Customers</h2>
      <div className="cards">{criaElementos(costumers, Card)}</div>

      <div className="buttons">
        <button className="btn"><span>&#8249;</span></button>
        <button className="btn"><span>&#8250;</span></button>
      </div>
    </Conteiner>
  );
}

export default Slide