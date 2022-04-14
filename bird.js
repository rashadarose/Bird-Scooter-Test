//Upload Project to git
//in this program you will end up using some sort of geolocation algorithm this one is from
//https://www.geodatasource.com 
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//:::                                                                         :::
//:::  This routine calculates the distance between two points (given the     :::
//:::  latitude/longitude of those points). It is being used to calculate     :::
//:::  the distance between two locations using GeoDataSource (TM) prodducts  :::
//:::                                                                         :::
//:::  Definitions:                                                           :::
//:::    South latitudes are negative, east longitudes are positive           :::
//:::                                                                         :::
//:::  Passed to function:                                                    :::
//:::    lat1, lon1 = Latitude and Longitude of point 1 (in decimal degrees)  :::
//:::    lat2, lon2 = Latitude and Longitude of point 2 (in decimal degrees)  :::
//:::    unit = the unit you desire for results                               :::
//:::           where: 'M' is statute miles (default)                         :::
//:::                  'K' is kilometers                                      :::
//:::                  'N' is nautical miles                                  :::
//:::                                                                         :::
//:::  Worldwide cities and other features databases with latitude longitude  :::
//:::  are available at https://www.geodatasource.com                         :::
//:::                                                                         :::
//:::  For enquiries, please contact sales@geodatasource.com                  :::
//:::                                                                         :::
//:::  Official Web site: https://www.geodatasource.com                       :::
//:::                                                                         :::
//:::               GeoDataSource.com (C) All Rights Reserved 2018            :::
//:::                                                                         :::
//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/*
timestamp:int, time in seconds
bird_id: string, bird id name 
event_type:string, eg.(DROP, Start_ride, End_Ride)
x:double, coordinates x,y 
y:double, 
user_id:int
drop events dont have a user_id instead is NULL;

NOTE:
int rows = matrix.length;
int cols = matrix[0].length;  

1 count total number of drops
2 which bird ends up the furthest away from drop location: what is the distance
3 which bird travel the longest after all rides, how far was that

Question 1
1 read txt file
2 Count every Drop in string
3 Print to screen or file
*/
//Question1 Code:
const fs = require('fs'); 
const os = require('os');
 
fs.readFile('events.txt', (err, data) => { 
    if (err) throw err; 
	
	  var count = ((data.toString()).match(/DROP/g) || []).length;
	  var lines = (data.toString()).split('\n');
	  var list = [];
	  var num = 0;
	  var OPN1_Lon = [];
	  var OPN1_Lat = [];
	  var OPN1_Arr = [];
	   var dupes = [];
        var uniqueEmployees = [];
	
	 
	 for(var i=0; i< lines.length; i++ ){
						 
			list.push(lines[i].split(','))					
		}
				
						
		/*for (var k in list) {
			// use hasOwnProperty to filter out keys from the Object.prototype
			if (list.hasOwnProperty(k)) {
				//console.log('key is: ' + k + ', value is: ' + list[k][1]);
			}
		}*/
		
		for(var j=0; j < lines.length; j++ ){
			if(list[j][1] === 'OPN1'){
			OPN1_Lon.push(list[j][3]); 
			OPN1_Lat.push(list[j][4]);
			
			}
		}
		
					
			/*list.forEach(function(index, element){
			if (!dupes[element.name]) {
					dupes[element.name] = true;
					uniqueEmployees.push(element);
				}
			});*/
	//console.log(OPN1_Lon[0]);
	console.log(count + ' Drops in Total'); 
	  
	 /*"Console Log of entire array" const util = require('util')
	  util.inspect.defaultOptions.maxArrayLength = null;
      console.log(util.inspect(list, { maxArrayLength: null }))*/
	
	  
	  //col - list[0]
	  //row - list
	  //console.log(OPN1_Lon,OPN1_Lat);

}) 

/*Question 2 
1 read text 
2
3

*/
//Question2 Code:
function distance(lon1,lat1,lon2,lat2,unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1/180;
		var radlat2 = Math.PI * lat2/180;
		var theta = lon1-lon2;
		var radtheta = Math.PI * theta/180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180/Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit=="K") { dist = dist * 1.609344 }
		if (unit=="N") { dist = dist * 0.8684 }
		//return dist;
		console.log(dist);
	}
}

//distance(33.28280226855614,-87.88162047789511,35.28280206855614,-87.88162047789511,'M');



/*Question2
in order to know which bird travel the furthest away from drop location we ned an associative array / hash table
{key, value}
once we map the bird_id to events {}
when then used the distance function inside of a bigger function to add all of the distances for each bird_id

*/
/*
var houseObj = new Object(); // or just {}
houseObj['one'] = 1;
houseObj['two'] = 2;
houseObj['three'] = 3;

// show the values stored
for (var k in houseObj) {
    // use hasOwnProperty to filter out keys from the Object.prototype
    if (houseObj.hasOwnProperty(k)) {
        console.log('key is: ' + k + ', value is: ' + houseObj[k]);
    }
}
  */      














