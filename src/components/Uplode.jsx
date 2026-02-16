import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/Uplode.css';

export default function Uplode() {
  const [showModal, setShowModal] = useState(false);
  const [isRobot, setIsRobot] = useState(false);
  const navigate = useNavigate();

  const handleUploadClick = () => {
    setShowModal(true);
    setIsRobot(false);
  };

  const handleContinue = () => {
    if (isRobot) {
      setShowModal(false);
      navigate('/hirdetesfeladas');
    }
  };

  return (
    <>
      <button 
        className="upload-btn"
        onClick={handleUploadClick}
      >
        + Hirdetés Feladása
      </button>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close"
              onClick={() => setShowModal(false)}
            >
              ✕
            </button>
            <h2>Hirdetés Feladása</h2>
            <p>Kérjük erősítsd meg, hogy nem vagy robot:</p>
            
            <div className="robot-check">
              <input
                type="checkbox"
                id="notRobot"
                checked={isRobot}
                onChange={(e) => setIsRobot(e.target.checked)}
              />
              <label htmlFor="notRobot">Nem vagyok robot</label>
            </div>

            <button
              className={`continue-btn ${isRobot ? 'active' : 'disabled'}`}
              onClick={handleContinue}
              disabled={!isRobot}
            >
              Tovább
            </button>
          </div>
        </div>
      )}
    </>
  );
}