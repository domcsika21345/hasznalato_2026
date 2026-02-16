import { useState } from 'react';
import './css/Register.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [zip, setZip] = useState('');
    const [zipConfirm, setZipConfirm] = useState('');
    const [city, setCity] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [phone, setPhone] = useState('');
    const [newsletter, setNewsletter] = useState(false);
    const [termsAccepted, setTermsAccepted] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError('');
        setSuccess('');

        if (zip !== zipConfirm) {
            setError('Az iranyitoszamok nem egyeznek.');
            return;
        }

        if (password !== passwordConfirm) {
            setError('A jelszavak nem egyeznek.');
            return;
        }

        if (!termsAccepted) {
            setError('Az ASZF es az adatvedelmi tajekoztato elfogadasa kotelezo.');
            return;
        }

        setLoading(true);

        try {
            const response = await fetch('http://localhost:8000/api/regisztracio', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    nev: name,
                    email: email,
                    jelszo: password,
                    telefonszam: phone,
                    iranyitoszam: zip,
                    varos: city
                })
            });

            const data = await response.json();

            if (data.id) {
                setSuccess('Sikeres regisztráció! Átirányítás a bejelentkezéshez...');
                setName('');
                setEmail('');
                setZip('');
                setZipConfirm('');
                setCity('');
                setPassword('');
                setPasswordConfirm('');
                setPhone('');
                setNewsletter(false);
                setTermsAccepted(false);
            } else {
                setError('Hiba: ' + (data.error || 'Ismeretlen hiba'));
            }
        } catch (err) {
            setError('Hálózati hiba: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="page">
            <div className="register-card">
                <h2>Regisztracio</h2>
                <p>Toltsd ki az adatokat a fiok letrehozasahoz.</p>
                <form className="register-form" onSubmit={handleSubmit}>
                    <div className="register-grid">
                        <label className="field">
                            Nev
                            <input
                                type="text"
                                name="name"
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Teljes nev"
                                required
                            />
                        </label>
                        <label className="field">
                            Email cim
                            <input
                                type="email"
                                name="email"
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="nev@email.com"
                                required
                            />
                        </label>
                        <label className="field">
                            Telefonszam
                            <input
                                type="tel"
                                name="phone"
                                value={phone}
                                onChange={(event) => setPhone(event.target.value)}
                                placeholder="Pelda: 06301234567"
                            />
                        </label>
                        <label className="field">
                            Iranyitoszam
                            <input
                                type="text"
                                name="zip"
                                value={zip}
                                onChange={(event) => setZip(event.target.value)}
                                placeholder="Pelda: 1111"
                                inputMode="numeric"
                                required
                            />
                        </label>
                        <label className="field">
                            Iranyitoszam (ujra)
                            <input
                                type="text"
                                name="zipConfirm"
                                value={zipConfirm}
                                onChange={(event) => setZipConfirm(event.target.value)}
                                placeholder="Pelda: 1111"
                                inputMode="numeric"
                                required
                            />
                        </label>
                        <label className="field">
                            Varos
                            <input
                                type="text"
                                name="city"
                                value={city}
                                onChange={(event) => setCity(event.target.value)}
                                placeholder="Pelda: Budapest"
                                required
                            />
                        </label>
                        <label className="field">
                            Jelszo
                            <input
                                type="password"
                                name="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                placeholder="********"
                                required
                            />
                        </label>
                        <label className="field">
                            Jelszo ujra
                            <input
                                type="password"
                                name="passwordConfirm"
                                value={passwordConfirm}
                                onChange={(event) => setPasswordConfirm(event.target.value)}
                                placeholder="********"
                                required
                            />
                        </label>
                    </div>
                    <div className="register-options">
                        <label className="check-field">
                            <input
                                type="checkbox"
                                name="newsletter"
                                checked={newsletter}
                                onChange={(event) => setNewsletter(event.target.checked)}
                            />
                            Fel akarok iratkozni a hirlevelre
                        </label>
                        <label className="check-field">
                            <input
                                type="checkbox"
                                name="terms"
                                checked={termsAccepted}
                                onChange={(event) => setTermsAccepted(event.target.checked)}
                                required
                            />
                            Elolvastam es elfogadom az
                            <a href="/aszf.html" target="_blank" rel="noreferrer">ASZF-et</a>
                             es az
                            <a href="/adatvedelem.html" target="_blank" rel="noreferrer">Adatvedelmi tajekoztatot</a>
                             *
                        </label>
                    </div>
                    {error ? <div className="form-error">{error}</div> : null}
                    {success ? <div className="form-success">{success}</div> : null}
                    <button type="submit" className="register-submit" disabled={loading}>
                        {loading ? 'Feldolgozas...' : 'Regisztracio'}
                    </button>
                </form>
            </div>
        </section>
    );
}
