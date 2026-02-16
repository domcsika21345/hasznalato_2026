import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Importáljuk a navigációt
import './css/HirdetesFeladasa.css';
import { FaCar, FaMotorcycle, FaBicycle } from 'react-icons/fa';

export default function HirdetesFeladasa() {
  const navigate = useNavigate(); // Hook használata
  const [activeTab, setActiveTab] = useState(null);
  const userName = 'János'; // TODO: Felhasználó nevét az auth-ból venni

  const handleSelectCategory = (id) => {
      // Ha rákattint, egyből vigyen át a kitöltő oldalra
      // Vagy ha külön gombot akarsz, akkor ez a 'onClick' mehet a gombra
      if(id === 'auto') {
          navigate('/hirdetesform'); // Átirányítás
      } else {
          alert("Jelenleg csak autó hirdetés adható fel!");
      }
  };

  const categories = [
    {
      id: 'auto',
      title: 'Személyautó Feladása',
      icon: <FaCar />,
      description: 'Személyautó hirdetés feladása'
    },
    {
      id: 'motor',
      title: 'Motorkerékpár Feladása',
      icon: <FaMotorcycle />,
      description: 'Motorkerékpár hirdetés feladása'
    },
    {
      id: 'egyeb',
      title: 'Egyéb (Kerékpár)',
      icon: <FaBicycle />,
      description: 'Egyéb járműves hirdetés feladása'
    }
  ];

  return (
    <div className="hirdetesfeladas-page">
      <div className="hirdetesfeladas-container">
        <div className="hirdetesfeladas-header">
          <h1>Mit szeretne eladni?</h1>
          <p>Üdvözlünk, <span className="user-name">{userName}</span>! Válasszon kategóriát:</p>
        </div>

        <div className="hirdetesfeladas-content">
          <div className="categories-grid">
            {categories.map((category) => (
              <div
                key={category.id}
                className="category-card"
              >
                <div className="category-icon">
                  {category.icon}
                </div>
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                
                {/* Ez a gomb visz át az új oldalra */}
                <button 
                    className="submit-btn" 
                    onClick={() => handleSelectCategory(category.id)}
                    style={{marginTop: '10px'}}
                >
                  Kiválasztás
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}