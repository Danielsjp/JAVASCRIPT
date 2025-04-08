<?php
/* comentario 
multi 
linea */
// Comentario de una linea
# Comentario de una linea 

$entero = 1;
$decimal = 1.2;
$string = "El numero es $entero";
$string2 = 'El numero es $entero';
$frase = "She said me that \"I'm the best\"";
$frase = 'She said me that "I\'m the best"';

echo $frase;

echo $string;
echo($decimal);
ECHO($string);

$nombre = "Manolo";
$apellido = "Parker";
$nombreCompleto = "<p>".$nombre." ".$apellido."</p>";

print($nombreCompleto);

$frutas = ["kiwi", "pera", "mango"];

echo $frutas[0];

$nombreCompleto = ["nombre" => "Mike", "apellido" => "Corleone"];
echo $nombreCompleto["apellido"];


if ($nombre == "Peter")
{
    echo "<p>El nombre es $nombre</p>";

} elseif ($apellido = "Parker") {

    echo "<p>El apelido es $apellido</p>";

} 

else 
{
    echo "<p> El nombre NO es 'Peter', es $nombre</p>";
}

for ($i=0; $i< count($frutas); $i++)
{
    
    echo "<p> $frutas[$i]</p>";
}

foreach($nombreCompleto as $clave => $valor){

    echo "<p> La clave $clave y el valor es $valor</p>";

}

$nombre = "Pepe"

//ahora cerramos parte de php
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Soy el titulo</h1> 
    <?php
        if ($nombre == "Peter"){
            echo  "<img src='1200px-Spider-Man.jpg' with='300' height='300'>";
        }
        elseif ($nombre == "Clarke") {
            echo "<img src='images.jfif' with='300' height='300'>";
        }
        else {
            echo "<img src='shinshan.jpg' with='300' height='300'>";
        }
    ?>

   

</body>
</html>

<!-- 
https://www.imelcf.gob.pa/wp-content/plugins/location-weather/assets/images/icons/weather-icons/ -->


