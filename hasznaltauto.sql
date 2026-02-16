-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Feb 02. 11:20
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `hasznaltauto`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `autok`
--

CREATE TABLE `autok` (
  `id` int(11) NOT NULL,
  `marka` varchar(255) DEFAULT NULL,
  `modell` varchar(255) DEFAULT NULL,
  `evjarat` int(11) DEFAULT NULL,
  `km` int(11) DEFAULT NULL,
  `ar` int(11) DEFAULT NULL,
  `ajtokszama` int(11) DEFAULT NULL,
  `hajtas` varchar(255) DEFAULT NULL,
  `hengerelrendezes` varchar(255) DEFAULT NULL,
  `hengerurtartalom` int(11) DEFAULT NULL,
  `teljesitmeny` int(11) DEFAULT NULL,
  `uzemanyag` varchar(255) DEFAULT NULL,
  `valto` varchar(255) DEFAULT NULL,
  `szin` varchar(255) DEFAULT NULL,
  `karpitszin` varchar(255) DEFAULT NULL,
  `kivitel` varchar(255) DEFAULT NULL,
  `okmanyervenyesseg` varchar(255) DEFAULT NULL,
  `okmanyok` varchar(255) DEFAULT NULL,
  `kornyezetvedelmiosztaly` int(11) DEFAULT NULL,
  `leiras` varchar(255) DEFAULT NULL,
  `felhasznaloH` varchar(255) DEFAULT NULL,
  `hirdetesid` varchar(255) DEFAULT NULL,
  `ido` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- A tábla adatainak kiíratása `autok`
--

INSERT INTO `autok` (`id`, `marka`, `modell`, `evjarat`, `km`, `ar`, `ajtokszama`, `hajtas`, `hengerelrendezes`, `hengerurtartalom`, `teljesitmeny`, `uzemanyag`, `valto`, `szin`, `karpitszin`, `kivitel`, `okmanyervenyesseg`, `okmanyok`, `kornyezetvedelmiosztaly`, `leiras`, `felhasznaloH`, `hirdetesid`, `ido`) VALUES
(1, 'BMW', 'M5', 2011, 80085, 1000000, NULL, NULL, NULL, NULL, NULL, 'Disel', 'manualis', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2026-02-02 10:10:22'),
(2, 'Mercedes', 'Audi', 1999, 878767, 555555555, NULL, NULL, NULL, NULL, NULL, 'Besin', 'avtomat', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2026-02-02 10:14:40');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `felhasznalok`
--

CREATE TABLE `felhasznalok` (
  `id` int(11) NOT NULL,
  `nev` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `jelszo` varchar(255) DEFAULT NULL,
  `bejelentkezes` varchar(255) DEFAULT NULL,
  `jogosultsag` varchar(50) DEFAULT NULL,
  `telefonszam` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `menu`
--

CREATE TABLE `menu` (
  `url` varchar(255) NOT NULL,
  `nev` varchar(255) DEFAULT NULL,
  `jogosultsag` varchar(50) DEFAULT NULL,
  `sorrend` tinyint(4) DEFAULT NULL,
  `szulo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_hungarian_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `autok`
--
ALTER TABLE `autok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `felhasznalok`
--
ALTER TABLE `felhasznalok`
  ADD PRIMARY KEY (`id`);

--
-- A tábla indexei `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`url`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `autok`
--
ALTER TABLE `autok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT a táblához `felhasznalok`
--
ALTER TABLE `felhasznalok`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
