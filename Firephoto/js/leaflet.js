document.addEventListener('DOMContentLoaded', ()=>{

    var map = L.map('map').setView([50.375384675566444, -4.14261817932129], 13);

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoibWVzdGVyaSIsImEiOiJjbDJnOGswaXUwMWwyM2RxaDBjaGt5bGhzIn0.ssQSctpUDrxyS4XzucdrHQ'
    }).addTo(map);

    // db.collection('location').get().then((querysnapshot) =>{
    //     querysnapshot.forEach((doc) =>{
    //         console.log(doc.data());
    //         var loc = doc.data();
    //         var marker = L.marker([loc.lat, loc.lng]).addTo(map);
    //     })
    // })

    var modalElems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(modalElems);

    var addImageModal = document.querySelector('#addImageModal');
    var instance = M.Modal.getInstance(addImageModal);

   // var latPlaceholder = document.querySelector('#latPlaceholder');
   // var lngPlaceholder = document.querySelector('#lngPlaceholder');

    var latField = document.querySelector('#latField');
    var lngField = document.querySelector('#lngField');

    map.on('click', clickedMap);

    function clickedMap(event){
        

        latField.value =   event.latlng.lat;
        lngField.value =   event.latlng.lng;

        instance.open();

//    db.collection('location').doc().set({
//
//          lat: event.latlng.lat, 
//        lng: event.latlng.lng
//
//      }).then(()=>{
//        location.reload();
//
//      })

      //  console.log(event);
      //  console.log(event.latlng.lat, event.latlng.lng);
    }

})