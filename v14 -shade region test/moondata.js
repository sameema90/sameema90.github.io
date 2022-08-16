function moondata(){

  const location_api_url = 'https://countriesnow.space/api/v0.1/countries/positions';
  var q_value_store = [];
  var q_value_loc = [];

  let userInput3 = document.querySelector("#start");

  console.log("---> User Input Date " + userInput3.value);

  async function locData(){
      const response = await fetch(location_api_url);
      const data1 = await response.json();
      const {data, iso2, lat, long} = data1;
    
      document.getElementById('name').textContent = data1.name;
      document.getElementById('iso').textContent = iso2;
      document.getElementById('lat').textContent = lat;
      document.getElementById('long').textContent = long;


      //for (let i=0; i<data.length; i++){
      for (let i=0; i<50; i++){
        console.log(data[i].name);
        console.log(data[i].lat);
        console.log(data[i].long);

        //var circle = L.circle([data[i].lat,data[i].long]).addTo(map);
        //api_url_array[i] = 'https://api.ipgeolocation.io/astronomy?apiKey=17d520e41641430da5ee34394d96d2de&lat='+data[i].lat+'&long='+data[i].long+'&date='+ userInput3.value;
        api_url_array[i] = 'https://api.ipgeolocation.io/astronomy?apiKey=4054658c8a974da4b8a9324b76ee6f7f&lat='+data[i].lat+'&long='+data[i].long+'&date='+ userInput3.value;
        //api_url_array[i] = 'https://api.ipgeolocation.io/astronomy?apiKey=4054658c8a974da4b8a9324b76ee6f7f&lat='+'31.13'+'&long='+'34.88'+'&date='+ '1993-12-14';
        //api_url_array[i] = 'https://api.ipgeolocation.io/astronomy?apiKey=17d520e41641430da5ee34394d96d2de&lat='+'31.83'+'&long='+'35.24'+'&date='+ '1998-10-21';
        q_value = getData(api_url_array[i],data[i].lat,data[i].long);
        console.log(api_url_array[i]);
        //console.log('q='+q);
      }
  }
  locData();


  // var lat_array = ['35','36','37']
  // var long_array = ['21','22','23']
  var api_url_array = [];

  // for (let i=0; i<lat_array.length; i++){ 
  //   api_url_array[i] = 'https://api.ipgeolocation.io/astronomy?apiKey=4054658c8a974da4b8a9324b76ee6f7f&lat='+lat_array[i]+'&long='+long_array[i]+'&date='+'1870-07-25';
  //   console.log('lat= '+lat_array[i]);
  //   console.log('lat= '+long_array[i]);
  //   console.log('api= '+api_url_array[i]);

  // }

  //17d520e41641430da5ee34394d96d2de
  //const api_url = 'https://api.ipgeolocation.io/astronomy?apiKey=17d520e41641430da5ee34394d96d2de&lat='+'38'+'&long='+'23.5'+'&date='+'1870-07-25';


  var greenIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var redIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
    //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var blueIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-blue.png',
    //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var yellowIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-yellow.png',
    //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var blackIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-black.png',
    //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  var orangeIcon = new L.Icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-orange.png',
    //shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  //async function getData(api_url,loc_lat,loc_long){
  async function getData(api_url_array,loc_lat,loc_long){
    const response = await fetch(api_url_array);
    const data = await response.json();
    const {moon_altitude, moon_azimuth, sun_altitude, sun_azimuth} = data;

  
    
    // document.getElementById('moonalt').textContent = moon_altitude;
    // document.getElementById('moonaz').textContent = moon_azimuth;
    // document.getElementById('sunalt').textContent = sun_altitude;
    // document.getElementById('sunaz').textContent = sun_azimuth;
    // document.getElementById('daz').textContent = (sun_azimuth - moon_azimuth);
    
    
    console.log('moonalt= '+data.moon_altitude);
    console.log('moonaz= '+data.moon_azimuth);
    console.log('sunalt= '+data.sun_altitude);
    console.log('sunaz= '+data.sun_azimuth);
    console.log('moondis= '+data.moon_distance);

    function degrees(radians) {
      return radians * (180 / Math.PI);
    }

    function calculatecos(deg){
      var rad = (Math.PI/180)*deg;

      return Math.cos(rad);

    }

    let DAZ= (data.sun_azimuth) - (data.moon_azimuth);
    console.log('DAZ=' + DAZ);//fine

    let ARCV = (data.sun_altitude)-(data.moon_altitude);
    console.log('ARCV=' + ARCV);//fine

    let cosARCV = calculatecos(ARCV);
    //console.log('cosARCV=' + cosARCV);//fine

    let cosDAZ = calculatecos(DAZ);
    //console.log('cosDAZ=' + cosDAZ);//fine

  //   if (ARCV>=22 || DAZ>=22){
    let cosARCL = cosARCV*cosDAZ;
    //console.log('cosARCL=' + cosARCL);
    let ARCL = degrees(Math.acos(cosARCL))
    console.log('ARCL=' + ARCL);
  //   }else{
  //     let ARCL = Math.SQRT2(Math.pow(ARCV,2)+Math.pow(DAZ,2));
  //     console.log('ARCL=' + cosARCL);
  //     }
    
    let p = degrees(Math.asin(6378.14/data.moon_distance))*60;//fine

    console.log('p='+p);

    let SD = 0.27245*p;

    let sinh =Math.sin(data.moon_altitude*(Math.PI/180));

    let sinp =Math.sin(p*(Math.PI/180));

    //let SD1= SD*(1+((Math.sin(data.moon_altitude))*(Math.sin(p))));
    let SD1= SD*(1+(sinh*sinp));
    //console.log('SD1='+SD1);//fine

    //let W= (SD1*(1-(cosARCL)))/Math.pow(60,2);//wrong value
    let W= (SD1*(1-(cosARCL)));
    console.log('W='+W);

    let q = (ARCV - (11.8371 - (6.3226*W) + (0.7319*Math.pow(W,2)) - (0.1018*Math.pow(W,3))))/10;
    console.log('q='+q);

    if (q > 0.216){
      console.log('entered green '+q);
      var circle = L.marker([loc_lat,loc_long],{icon: greenIcon}).addTo(map);
      //message2.innerHTML = "Moon is easily visible in your location";
    }else if (0.216 >= q > -0.014){
      var circle = L.marker([loc_lat,loc_long],{icon: blueIcon}).addTo(map);
      //message2.innerHTML = "Moon is visible under perfect consitions in your location";
    }else if (-0.014 >= q > -0.160){
      var circle = L.marker([loc_lat,loc_long],{icon: yellowIcon}).addTo(map);
      //message2.innerHTML = "You may need to use optical aid to find the new crescent in your location";
    }else if (-0.160 >= q > -0.232){
      var circle = L.marker([loc_lat,loc_long],{icon: orangeIcon}).addTo(map);
      //message2.innerHTML = "You will need to use optical aid to find the new crescent in your location";
    }else if (-0.232 >= q > -0.293){
      var circle = L.marker([loc_lat,loc_long],{icon: redIcon}).addTo(map);
      //message2.innerHTML = "You will not be able to see the crescent with a telescope in your location";
    } else if (q <= -0.293){
      var circle = L.marker([loc_lat,loc_long],{icon: blackIcon}).addTo(map);
      //message2.innerHTML = "Moon is not visible in your location";
    }else {
      message2.innerHTML = "q must be between -0.293 and 0.216 to show visibility criteria";
    }
    //q_value_store.push(q)

    //return q;  

  }
  //getData(api_url);



  function print_result(){
    console.log('q val length = '+q_value_store.length);

    for (let i=0; i<q_value_store.length; i++){ 
      console.log('q val stored = '+q_value_store[i]);
    }
  }

  print_result();

};
