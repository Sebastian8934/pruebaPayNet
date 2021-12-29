
const url = 'https://api.thecatapi.com/v1/images/search';
var listUser = document.getElementById('list-user');
var formId = document.getElementById('formId');
var app = document.getElementById('app');
var formIdImg = document.getElementById('formIdImg');
var listImg = document.getElementById('listImg');

//Clases
class UI {
    
    alert('no me dio el tiempo para hacerlo con una api y base de datos');

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

        const element = document.createElement('div');

        element.innerHTML = `
                    <div name="contarDiv" class="card text-center mt-4">
                        <div class="card-body">

                        <img src="${url}" class="sizeImgList" alt="">

                        <div class="form-group mt-4">
                            <a class="btn btn-danger btn-block" name="eliminar">eliminar</a>
                        </div>

                        </div>
                    </div>
                `;
        listImg.appendChild(element);        
    }

    EliminarImg(e){
        e.parentElement.parentElement.remove();
    }

}

//Eventos
evenListerner();
function evenListerner(){
    formId.addEventListener('submit',cargarImg);
    listUser.addEventListener('click',GuardarImg);
    listImg.addEventListener('click',EliminarImg);
}

function cargarImg(){
    const ui = new UI();
    ui.cargarImg();
}

function GuardarImg(e){
    const ui = new UI();
    ui.GuardarImg(e.target);
}

function EliminarImg(e){
    const ui = new UI();
    ui.EliminarImg(e.target);
}
