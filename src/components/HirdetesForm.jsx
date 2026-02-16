import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './css/HirdetesFeladasa.css';

export default function HirdetesForm() {
    const navigate = useNavigate();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    
    // Az összes adatbázis mező felvétele a state-be
    const [formData, setFormData] = useState({
        marka: '',
        modell: '',
        evjarat: '',
        km: '',
        ar: '',
        uzemanyag: 'Benzin',
        valto: 'Manuális',
        leiras: '',
        ajtokszama: '',
        hajtas: '',
        hengerelrendezes: '',
        hengerurtartalom: '',
        teljesitmeny: '', // lóerő
        szin: '',
        karpitszin: '',
        kivitel: '', // pl. sedan, kombi
        okmanyervenyesseg: '',
        okmanyok: '', // pl. érvényes magyar okmányok
        kornyezetvedelmiosztaly: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        // TODO: A felhasznaloH majd a bejelentkezett user ID-ja lesz
        const dataToSend = {
            ...formData,
            felhasznaloH: 1
        };

        try {
            const response = await fetch('http://localhost:8000/api/autok', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(dataToSend)
            });

            if (response.ok) {
                setSuccess('Hirdetés sikeresen feladva! Visszatérés a főoldalra...');
                setTimeout(() => {
                    navigate('/'); 
                }, 2000);
            } else {
                const errorData = await response.json();
                console.error("Backend hiba:", errorData);
                setError('Hiba történt: ' + (errorData.message || JSON.stringify(errorData)));
            }
        } catch (err) {
            console.error("Hálózati hiba:", err);
            setError('Nem sikerült elérni a szervert.');
        }
    };

    return (
        <div className="hirdetesfeladas-page">
            <div className="hirdetesfeladas-container">
                <h2>Részletes gépjármű hirdetés feladása</h2>
                
                {error && <div className="error-message" style={{color: 'red', marginBottom: '10px'}}>{error}</div>}
                {success && <div className="success-message" style={{color: 'green', marginBottom: '10px'}}>{success}</div>}

                <form onSubmit={handleSubmit} className="hirdetes-form-grid">
                    
                    {/* Alapadatok */}
                    <div className="form-group">
                        <label>Márka *</label>
                        <input type="text" name="marka" required onChange={handleChange} placeholder="Pl. Ford" />
                    </div>
                    <div className="form-group">
                        <label>Modell *</label>
                        <input type="text" name="modell" required onChange={handleChange} placeholder="Pl. Focus" />
                    </div>
                    <div className="form-group">
                        <label>Évjárat *</label>
                        <input type="number" name="evjarat" required onChange={handleChange} min="1950" max="2026" />
                    </div>
                    <div className="form-group">
                        <label>Kilométeróra állása (km) *</label>
                        <input type="number" name="km" required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                        <label>Vételár (Ft) *</label>
                        <input type="number" name="ar" required onChange={handleChange} />
                    </div>

                    {/* Műszaki adatok */}
                    <div className="form-group">
                        <label>Hengerűrtartalom (cm³)</label>
                        <input type="number" name="hengerurtartalom" onChange={handleChange} placeholder="Pl. 1600" />
                    </div>
                    <div className="form-group">
                        <label>Teljesítmény (LE / kW)</label>
                        <input type="number" name="teljesitmeny" onChange={handleChange} placeholder="Pl. 100" />
                    </div>
                    <div className="form-group">
                        <label>Üzemanyag *</label>
                        <select name="uzemanyag" onChange={handleChange}>
                            <option value="Benzin">Benzin</option>
                            <option value="Dízel">Dízel</option>
                            <option value="Elektromos">Elektromos</option>
                            <option value="Hibrid">Hibrid</option>
                            <option value="LPG">LPG</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Váltó típusa *</label>
                        <select name="valto" onChange={handleChange}>
                            <option value="Manuális">Manuális</option>
                            <option value="Automata">Automata</option>
                            <option value="Fokozatmentes">Fokozatmentes</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Hajtás</label>
                        <select name="hajtas" onChange={handleChange}>
                            <option value="">Válassz...</option>
                            <option value="Elsőkerék">Elsőkerék</option>
                            <option value="Hátsókerék">Hátsókerék</option>
                            <option value="Összkerék">Összkerék</option>
                        </select>
                    </div>

                    {/* Külső és Belső */}
                    <div className="form-group">
                        <label>Kivitel</label>
                        <select name="kivitel" onChange={handleChange}>
                            <option value="">Válassz...</option>
                            <option value="Sedan">Sedan</option>
                            <option value="Kombi">Kombi</option>
                            <option value="Ferdehátú">Ferdehátú</option>
                            <option value="Egyterű">Egyterű</option>
                            <option value="SUV">SUV / Terepjáró</option>
                            <option value="Cabrio">Cabrio</option>
                            <option value="Coupe">Coupe</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Ajtók száma</label>
                        <select name="ajtokszama" onChange={handleChange}>
                            <option value="">Válassz...</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Szín</label>
                        <input type="text" name="szin" onChange={handleChange} placeholder="Pl. Fekete" />
                    </div>
                    <div className="form-group">
                        <label>Kárpit színe</label>
                        <input type="text" name="karpitszin" onChange={handleChange} placeholder="Pl. Szürke" />
                    </div>

                    {/* Okmányok */}
                    <div className="form-group">
                        <label>Okmányok jellege</label>
                        <select name="okmanyok" onChange={handleChange}>
                            <option value="">Válassz...</option>
                            <option value="Érvényes magyar okmányokkal">Érvényes magyar okmányokkal</option>
                            <option value="Külföldi okmányokkal">Külföldi okmányokkal</option>
                            <option value="Okmányok nélkül">Okmányok nélkül</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Műszaki érvényesség</label>
                        <input type="text" name="okmanyervenyesseg" onChange={handleChange} placeholder="ÉÉÉÉ/HH formátum" />
                    </div>
                    
                    <div className="form-group">
                        <label>Környezetvédelmi osztály</label>
                        <input type="number" name="kornyezetvedelmiosztaly" onChange={handleChange} placeholder="Pl. 6 (Euro 6)" />
                    </div>

                    {/* Leírás */}
                    <div className="form-group full-width" style={{gridColumn: "1 / -1"}}>
                        <label>Leírás</label>
                        <textarea name="leiras" rows="5" onChange={handleChange} placeholder="Részletes leírás az autóról..." style={{width: '100%'}}></textarea>
                    </div>

                    <button type="submit" className="submit-btn" style={{gridColumn: "1 / -1", marginTop: "20px", padding: "12px", fontSize: "18px", cursor: "pointer"}}>
                        Hirdetés feladása
                    </button>
                </form>
            </div>
        </div>
    );
}