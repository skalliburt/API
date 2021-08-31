jQuery( document ).ready(function() {
   valor = jQuery('#valor').val();
   jQuery("#boton").click(function(){
	jQuery.ajax({
		method: "POST",
		dataType: "json",
		url: "/API/apiGET.php",
		data:{
			"valor": valor
		},
		success:function(response){
			const data = Object.values(response);
			data.map(function(datos) {
				document.getElementById("tabla").innerHTML += `
						
				<td id="id">${datos.api_key}</td>
				<td id="name">${datos.sensor}</td>
				<td id="textColor">${datos.value1}</td>
			`		
			});
  
					
		}
	});
   });
   
   
   var valor0 = "0";
   var valor1 = "1";
   var valor2 = "2";
   var valor3 = "3";
   var valor4 = "4";
   
   jQuery("#simulacro").click(function(){
	   jQuery("#simulacro").prop('disabled', true);
	   
	   jQuery("#emergencia").prop('disabled', true);
	   jQuery("#riesgo_electrico").prop('disabled', true);
	   jQuery("#sismo").prop('disabled', true);
	   
	   	jQuery.ajax({
		method: "POST",
		dataType: "json",
		url: "/API/apiPOST.php",
		data:{
			"valor": valor0
		},
		success:function(response){
			alert("Se ha activado el simulacro.");
		}

	});
   });
   
   jQuery("#emergencia").click(function(){
	   jQuery("#emergencia").prop('disabled', true);
	   jQuery("#simulacro").prop('disabled', true);
	   jQuery("#riesgo_electrico").prop('disabled', true);
	   jQuery("#sismo").prop('disabled', true);
	   
	   	jQuery.ajax({
		method: "POST",
		dataType: "json",
		url: "/API/apiPOST.php",
		data:{
			"valor": valor1
		},
		success:function(response){
			alert("Se ha activado la alarma de emergencia, inicie la evacuación del lugar.");
		}

	});
   });
   
   jQuery("#riesgo_electrico").click(function(){
	   
	   jQuery("#riesgo_electrico").prop('disabled', true);
	   
	   jQuery("#simulacro").prop('disabled', true);
	  
	   jQuery("#emergencia").prop('disabled', true);
	   
	   jQuery("#sismo").prop('disabled', true);
	   
	   
	   	jQuery.ajax({
		method: "POST",
		dataType: "json",
		url: "/API/apiPOST.php",
		data:{
			"valor": valor2
		},
		success:function(response){
			alert("Se ha activado la alarma de riesgo electrico, inicie la evacuación del lugar.");
		}

	});
   });
   
   jQuery("#sismo").click(function(){
	   jQuery("#sismo").prop('disabled', true);
	   jQuery("#simulacro").prop('disabled', true);
	   jQuery("#emergencia").prop('disabled', true);
	   jQuery("#riesgo_electrico").prop('disabled', true);
	   
	   	jQuery.ajax({
		method: "POST",
		dataType: "json",
		url: "/API/apiPOST.php",
		data:{
			"valor": valor3
		},
		success:function(response){
			alert("Se ha activado la alarma de sismo, inicie la evacuación del lugar.");
		}

	});
   });
   
    jQuery("#desactivar").click(function(){
		jQuery("#simulacro").prop('disabled', false);
	    jQuery("#emergencia").prop('disabled', false);
	    jQuery("#riesgo_electrico").prop('disabled', false);
	    jQuery("#sismo").prop('disabled', false);
		
	   	jQuery.ajax({
		method: "POST",
		dataType: "json",
		url: "/API/apiPOST.php",
		data:{
			"valor": valor4
		},
		success:function(response){
			alert("Se ha desactivado la alarma.");
		}

	});
   });
   
   
});

