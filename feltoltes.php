<?php include "db.php"; ?>

<h2>Autó feltöltése</h2>

<form method="POST">

Márka: <input type="text" name="marka"><br>
Modell: <input type="text" name="modell"><br>
Évjárat: <input type="number" name="evjarat"><br>
Kilométer: <input type="number" name="km"><br>
Ár: <input type="number" name="ar"><br>
Üzemanyag: <input type="text" name="uzemanyag"><br>
Váltó: <input type="text" name="valto"><br>

<button type="submit">Feltöltés</button>

</form>

<?php
if ($_POST) {

$marka = $_POST['marka'];
$modell = $_POST['modell'];
$evjarat = $_POST['evjarat'];
$km = $_POST['km'];
$ar = $_POST['ar'];
$uzemanyag = $_POST['uzemanyag'];
$valto = $_POST['valto'];

$sql = "INSERT INTO autok 
(marka, modell, evjarat, km, ar, uzemanyag, valto)
VALUES
('$marka','$modell','$evjarat','$km','$ar','$uzemanyag','$valto')";

$conn->query($sql);

echo "Sikeres feltöltés!";

}
?>
