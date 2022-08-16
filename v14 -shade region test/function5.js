function myFunction5() {
    let select = document.getElementById("selectNumber");
    let message5 = document.querySelector("#message5");

    message5.innerHTML = "Selected location is: " + element.display_name;

    if (element.display_name == 'london')
        L.polygon([
            [40.7,-111.9],//Utah
            [30.6,-104.0],//Texas
            [30.3,-97.7],//Austin
            [30,-90.1],//New Orleans
            
            [33.0,-87.4],//Tuscaloosa
            [28,-82.5],//Tampa
            [26.7,-81.8],//Cape Coral
            [33.7,-84.4],//Atlanta
        
            [36.2,-81.7],//Boone
        
            [38.9,-77.0],//Wahington
            [38.9,-77.1],//Washington
            [42.7,-84.5],//Detroit
            [40.8,-87.7],//Chicago
            
            [41.6,-93.7]//Des Moines
        
            
            ]).addTo(map).bindPopup("Visibility area.")
        
            polygon.setStyle({
            fillColor: '#0000FF'
            });
}