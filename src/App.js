
import { Container,Row,Col } from 'react-bootstrap';
import './App.css';
import TransportMode from './components/TransportMode';

function App() {
  return (
    <div className="App">
       <Container className='main-heading'>
         <Row>
            <h1>Expossure Assentment</h1>
         </Row>
         <TransportMode/>
       </Container>
    </div>
  );
}

export default App;
