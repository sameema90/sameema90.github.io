
const location_api_url = 'https://countriesnow.space/api/v0.1/countries/positions';

          async function locData(){
              const response = await fetch(location_api_url);
              const data1 = await response.json();
              const {data, iso2, lat, long} = data1;
            
              document.getElementById('name').textContent = data1.name;
              document.getElementById('iso').textContent = iso2;
              document.getElementById('lat').textContent = lat;
              document.getElementById('long').textContent = long;

              for (let i=0; i<data.length; i++){
                console.log(data[i].name);
                console.log(data[i].lat);
                console.log(data[i].long);
                var circle = L.circle([data[i].lat,data[i].long]).addTo(map);
                

            }


          }
          locData();