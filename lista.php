<?php include "db.php"; ?>

<h2>Autók listája</h2>

<?php

$result = $conn->query("SELECT * FROM autok ORDER BY ido DESC");

while($row = $result->fetch_assoc()) {

echo "<div style='border:1px solid #ccc; padding:10px; margin:10px;'>";

echo "<b>".$row['marka']." ".$row['modell']."</b><br>";
echo "Évjárat: ".$row['evjarat']."<br>";
echo "Km: ".$row['km']."<br>";
echo "Ár: ".$row['ar']." Ft<br>";
echo "Üzemanyag: ".$row['uzemanyag']."<br>";
echo "Váltó: ".$row['valto']."<br>";

echo "</div>";

}

?>
