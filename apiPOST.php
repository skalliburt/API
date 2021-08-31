<?php 
	
	$estado = $_POST["valor"];
	$arreglo_estados = array("0","1","2","3","4");
	$api_key = "8";
	
	$cont=0;
	for($i=0; $i<count($arreglo_estados); $i++){
		$recorrido = $arreglo_estados[$i];
		if(preg_match("/".$estado."/",$recorrido,$resultado[$cont3])){
			
			$datos = $resultado[$cont] = ($arreglo_estados[$i]);
			$cont++;
		

			
			//API URL
			$url = '//https://yourdomain.com/wp-json/supportcandy/v1/statuses;';

			//create a new cURL resource
			$ch = curl_init($url);

			//setup request to send json via POST
			
			//el dato debe estar incrustado en el array
		
			$data = array(
				'api_key' => $api_key,
				'sensor' => '123456',
				'value1' => $datos,
				'value2' => '123456',
				'value3' => '123450000000006'
			);
			
			
			
			echo $payload = json_encode($data);

			//attach encoded JSON string to the POST fields
			curl_setopt($ch, CURLOPT_POSTFIELDS, $payload);

			//set the content type to application/json
			curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type:application/json'));

			//return response instead of outputting
			curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

			//execute the POST request
			$result = curl_exec($ch);

			//close cURL resource
			curl_close($ch);


		
		}
		
	}

