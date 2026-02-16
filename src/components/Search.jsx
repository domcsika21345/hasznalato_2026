import './css/Search.css';

const BRANDS = ['Audi', 'BMW', 'Ford', 'Honda', 'Mercedes', 'Opel', 'Skoda', 'Toyota', 'Volkswagen'];
const FUELS = ['Benzin', 'Dizel', 'Hibrid', 'Elektromos'];
const YEARS = ['2000', '2005', '2010', '2015', '2020', '2023', '2024', '2025', '2026'];
const PRICES = ['500000Ft', '1000000Ft', '1500000Ft', '2000000Ft', '3000000Ft', '4000000Ft', '5000000Ft', '7000000Ft', '10000000Ft'];

export default function Search() {
	return (
		<section className="search-frame">
			<h3>Auto kereses</h3>
			<form className="search-form">
				<div className="field">
					<label htmlFor="brand">Marka</label>
					<select id="brand" name="brand" defaultValue="">
						<option value="">Valassz markat</option>
						{BRANDS.map((brand) => (
							<option key={brand} value={brand}>{brand}</option>
						))}
					</select>
				</div>
				<div className="field">
					<label htmlFor="fuel">Uzemanyag</label>
					<select id="fuel" name="fuel" defaultValue="">
						<option value="">Valassz uzemanyagot</option>
						{FUELS.map((fuel) => (
							<option key={fuel} value={fuel}>{fuel}</option>
						))}
					</select>
				</div>
				<div className="field">
					<label>Evjarat</label>
					<div className="range">
						<select name="yearFrom" defaultValue="">
							<option value="">Tol</option>
							{YEARS.map((year) => (
								<option key={`from-${year}`} value={year}>{year}</option>
							))}
						</select>
						<select name="yearTo" defaultValue="">
							<option value="">Ig</option>
							{YEARS.map((year) => (
								<option key={`to-${year}`} value={year}>{year}</option>
							))}
						</select>
					</div>
				</div>
				<div className="field">
					<label>Ar</label>
					<div className="range">
						<select name="priceFrom" defaultValue="">
							<option value="">Tol</option>
							{PRICES.map((price) => (
								<option key={`pf-${price}`} value={price}>{price}</option>
							))}
						</select>
						<select name="priceTo" defaultValue="">
							<option value="">Ig</option>
							{PRICES.map((price) => (
								<option key={`pt-${price}`} value={price}>{price}</option>
							))}
						</select>
					</div>
				</div>
				<button type="submit">Kereses</button>
			</form>
		</section>
	);
}
