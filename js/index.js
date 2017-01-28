$(function(){

	var all_countries=[];
	$.ajax({
		url:"https://restcountries.eu/rest/v1/all",
		success:function(response){
			all_countries = response;
		}
	});
	countries=[]; 
	$.each(all_countries,function(index,value){
		countries.push(all_countries[index].name);
	});

	var country = $("#country");
	var list = "" ;
	$.each(countries,function(index,value){
		list+="<option>"+value+"</option>";
	});
	country.append(list);

	var nationality = ["Indian","1","2","3"] ;
	var nation = $("#nation");
	var list = ""; 
	$.each(nationality,function(index,value){
		list+="<option>"+value+"</option>";
	});
	nation.append(list);

});