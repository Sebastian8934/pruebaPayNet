
const url = 'https://api.thecatapi.com/v1/images/search';
var listUser = document.getElementById('list-user');
var formId = document.getElementById('formId');
var app = document.getElementById('app');
var formIdImg = document.getElementById('formIdImg');


//Clases
class UI {

    cargarImg(){

        var contarDiv = document.getElementsByName('contarDiv');
        if(contarDiv.length >= 1) {
            contarDiv[0].remove();
        }

        fetch(url)
        .then(response => response.json() )
        .then(data => {

                sessionStorage.setItem('id',data[0].id);
                sessionStorage.setItem('url',data[0].url);
                sessionStorage.setItem('width',data[0].width);
                sessionStorage.setItem('height',data[0].height);

                const element = document.createElement('div');
                element.innerHTML = `
                    <div name="contarDiv" class="card text-center mt-4">
                        <div class="card-body">

                        <img src="${data[0].url}" class="sizeImg" alt="">

                        <div class="form-group mt-4">
                        <a class="btn btn-primary btn-block" name="guardar">Guardar</a>
                        </div>

                        </div>
                    </div>
                `;
                listUser.appendChild(element);
        })
        .catch(err=>console.log(err)); 
    }


    GuardarImg(){
      var id = sessionStorage.getItem('id');
      var url = sessionStorage.getItem('url');
      var width = sessionStorage.getItem('width');
      var height = sessionStorage.getItem('height');
      alert('sorry apenas iba por el endpoint' + 'La informacion de la imagen la muestra en consola')
      console.log('id :' + id, 'url :' + url ,'width :' + width ,'height :' + height);
    }

}

//Eventos
evenListerner();
function evenListerner(){
    formId.addEventListener('submit',cargarImg);
    listUser.addEventListener('click',GuardarImg);
}

function cargarImg(){
    const ui = new UI();
    ui.cargarImg();
}

function GuardarImg(e){
    const ui = new UI();
    ui.GuardarImg(e.target);
}