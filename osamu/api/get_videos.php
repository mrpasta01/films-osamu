<?php
	require_once 'config.php';
	
	$c = 5;
	$o = 0;
	if(isset($_GET['count']))	$c = intval($_GET['count']);
			if ($c>5) $c=5;
	if(isset($_GET['offset']))	$o = intval($_GET['offset']);
	
	$sql = sprintf('SELECT `ID`, `Title`, `Opisanie`, `Rezishor`, `Year`, `POSTER` FROM `videos` LIMIT %d OFFSET %d', $c,$o);
	$films = $conn->query($sql);
	
	$result = '{"film": [';
	foreach ($films as $row){
	$Rezishor = $row['Rezishor'];
	$Title = $row['Title'];
	$ID = $row['ID'];
	$YEAR = $row['Year'];
	$POSTER =$row['POSTER'];
	$Opisanie=$row['Opisanie'];
	$result .= sprintf('{"Rezishor":"%s", "Title":"%s", "Year":%d, "id":%d, "POSTER":"%s", "Opisanie":"%s"}, ', $Rezishor,$Title,$YEAR,$ID,$POSTER,$Opisanie);
	}
	$result = rtrim($result, ', ');
	$result .= ']}';
	echo $result;
?>
