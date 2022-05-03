document.addEventListener('DOMContentLoaded', () => {

var addLocatinForm = document.querySelector('#addLocationForm');

addLocatinForm.addEventListener('submit', (event) =>{

    event.preventDefault();
        
       db.collection('location').doc().set({
          name: addLocatinForm.name.value,
          latitude: addLocatinForm.latitude.value, 
          longitude: addLocatinForm.longitude.value

        }).then(()=>{

          addLocatinForm.name.value ='',
          addLocatinForm.latitude.value ='', 
          addLocatinForm.longitude.value =''

        location.reload();

     })
}
)
}
)