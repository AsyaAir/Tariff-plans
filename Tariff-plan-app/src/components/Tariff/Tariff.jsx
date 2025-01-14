import PropTypes from 'prop-types';
import './Tariff.css'; 

const Tariff = ({ title, price, speed, isHighlighted, backgroundColor }) => {
    return (
        <div 
            className={`tariff ${isHighlighted ? 'highlighted' : ''}`} 
            style={{ backgroundColor }}
        >
            <h3 className="tariff-title">{title}</h3>
            <div className="tariff-price">
                <span>руб</span>
                <strong>{price}</strong>
                <span>/мес</span>
            </div>
            <div className="tariff-speed">до {speed} Мбит/сек</div>
            <div className="tariff-traffic">Объем включенного трафика не ограничен</div>
        </div>
    );
};

// Указываем propTypes для компонента Tariff
Tariff.propTypes = {
    title: PropTypes.string.isRequired,    // Обязательная строка
    price: PropTypes.number.isRequired,   // Обязательное число
    speed: PropTypes.number.isRequired,   // Обязательное число
    isHighlighted: PropTypes.bool,         // Необязательное булевое значение
    backgroundColor: PropTypes.string.isRequired,
};

export default Tariff;