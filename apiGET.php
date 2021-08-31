<?php

	$id = $_POST['valor'];
	if($id !== ""){
		
			//Obtener datos GET
			$ch = curl_init();
			$url = 	//https://yourdomain.com/wp-json/supportcandy/v1/statuses; 
	
			curl_setopt($ch, CURLOPT_URL, $url);
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
	
			echo $resp = curl_exec($ch);

	}

?>