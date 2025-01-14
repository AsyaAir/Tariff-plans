import Tariff from './components/Tariff/Tariff';
import './App.css'; 

const tariffs = [
  { title: 'Безлимитный 300', price: 300, speed: 10, backgroundColor: '#17a2b8' }, // Бирюзовый
  { title: 'Безлимитный 450', price: 450, speed: 50, backgroundColor: '#28a745' }, // Зеленый
  { title: 'Безлимитный 550', price: 550, speed: 100, backgroundColor: '#dc3545' }, // Красный (выделенный)
  { title: 'Безлимитный 1000', price: 1000, speed: 200, backgroundColor: '#343a40' }, // Черный
];

function App() {
  return (
      <div className="tariffs">
          {tariffs.map((tariff, index) => (
              <Tariff
              key={index}
              title={tariff.title}
              price={tariff.price}
              speed={tariff.speed}
              isHighlighted={tariff.price === 550}
              backgroundColor={tariff.backgroundColor} 
              />
          ))}
      </div>
  );
}

export default App;