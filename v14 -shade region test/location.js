 var address = document.querySelector("#address");
              var results = document.querySelector("#results");
              var select = document.getElementById("selectLocation");

               function showAddress() {
                results.innerHTML  = ' '
                  if (addressArr.length > 0) {
                    
                    addressArr.forEach(element => {
                      var el = document.createElement("option");
                      el.textContent = element.display_name;
                      el.value = element.display_name;
                      select.appendChild(el);


                      results.innerHTML +=  "<div class='results'>" 
                                   
                                  + "<br> Lat: " + element.lat
                                  + " Lng: " + element.lon
                                  + "</div>" 

                      var marker = L.marker([element.lat,element.lon]).addTo(map);
                    });
                  } else {results.innerHTML  = "<p style='color: red;'>Not found</p>"}
              }
             



              function findAddress() {
                var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + address.value 
                fetch(url)
                          .then(response => response.json())
                          .then(data => addressArr = data)
                          .then(show => showAddress())
                          .catch(err => console.log(err))    
                }

               