class CRUDComponent extends HTMLElement {
    constructor() {
        super();
        
        //Inicializar cosas que serán requeridas al momento de la visualización
        //Hasta acá, el elemento no está renderizado. Por lo tanto, tampoco recibe eventos.
        
        this._title = document.createElement('h1');
        this._title.innerText = 'Listado de usuarios';
        this._buttonList = document.createElement('button');
        this._buttonList.innerText = 'Listar';

        this._buttonCreate = document.createElement('button');
        this._buttonCreate.innerText = 'Crear';

        this._buttonEdit = document.createElement('button');
        this._buttonEdit.innerText = 'Editar';

        this._buttonDelete = document.createElement('button');
        this._buttonDelete.innerText = 'Eliminar';

        this._buttonBalance = document.createElement('button');
        this._buttonBalance.innerText = 'Calcular saldo promedio';


        this._table = document.createElement('table');
        this._head = this._table.createTHead();
        this._headRow = this._head.insertRow();

        let col1 = this._headRow.insertCell();
        let col2 = this._headRow.insertCell();
        let col3 = this._headRow.insertCell();

        col1.innerText = "ID";
        col2.innerText = "Username";
        col3.innerText = "Saldo";

        this._tBody = this._table.createTBody();
    }
    
    fillWith(dataArray) {
        //Acá queremos recibir un array de objetos e insertarlos todos en el selector
        //Forma del objeto (data) a recibir: [ { id: 'id', value: 'value' }, ... ];
        
        // Limpiar la tabla antes de llenarla con los nuevos datos
        this._tBody.innerHTML = '';
        
        for (let item of dataArray){
            let row = this._tBody.insertRow();
            let col1 = row.insertCell();
            let col2 = row.insertCell();
            let col3 = row.insertCell();

            col1.innerText = item.id;
            col2.innerText = item.username;
            col3.innerText = item.saldo;
        }
    }


    
    connectedCallback() {
        //Es el primer método que se ejecuta cuando la instancia/objeto es insertado dentro
        //de un nodo que ya sí está representado/renderizado en pantalla.
        //Recién ahora, el objeto pasa a tener estado activo (Recibe eventos y puede contestarlos)
        
        this.appendChild( this._title );
        this.appendChild( this._buttonList );
        this.appendChild( this._buttonCreate );
        this.appendChild( this._buttonEdit );
        this.appendChild( this._buttonDelete );
        this.appendChild( this._buttonBalance );
        this.appendChild( this._table );

        this._buttonList.addEventListener('click', () => {
            this.listButtonClicked();    
        });

        this._buttonCreate.addEventListener('click', () => {
            this.createButtonClicked();
        });

        this._buttonEdit.addEventListener('click', () => {
            this.editButtonClicked();
        });
        
        this._buttonDelete.addEventListener('click', () => {
            this.deleteButtonClicked();
        });

        this._buttonBalance.addEventListener('click', () => {
            this.balanceButtonClicked();    
        });
    }

    listButtonClicked() {
        // Realizar una solicitud AJAX
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '../backend/list.php', true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    if (xhr.responseText) {
                        // Si la respuesta no está vacía, parsearla como JSON
                        let userDataFromServer = JSON.parse(xhr.responseText);
                        // Llenar la tabla con los datos obtenidos
                        this.fillWith(userDataFromServer);
                    } else {
                        console.error('La respuesta del servidor está vacía');
                    }
                } else {
                    console.error('Error al obtener los datos de los usuarios');
                }
            }
        };
        xhr.send();
    }
    
    
    createButtonClicked() {
        // Solicitar al usuario los datos del nuevo usuario
        let username = prompt("Ingrese el nombre de usuario:");
        let saldo = prompt("Ingrese el saldo del usuario:");
    
        // Crear un objeto que contenga los datos del nuevo usuario
        let newUser = {
            username: username,
            saldo: saldo
        };
    
        let xhr = new XMLHttpRequest();
        xhr.open('POST', '../backend/add.php', true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Si la solicitud se completó correctamente, actualizar la lista de usuarios
                    this.listButtonClicked();
                } else {
                    console.error('Error al agregar el nuevo usuario');
                }
            }
        };
        xhr.send(JSON.stringify(newUser));
    }
    
    
    editButtonClicked() {
        let id = prompt("Ingrese el ID del usuario que desea editar:");
        
        let xhr = new XMLHttpRequest();
        xhr.open('GET', `../backend/list.php?id=${id}`, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    let userData = JSON.parse(xhr.responseText);
                    if (userData) {
                        let newUsername = prompt("Ingrese el nuevo nombre de usuario:", userData.username);
                        let nuevoSaldo = prompt("Ingrese el nuevo saldo:", userData.saldo);
    
                        // Crear un objeto que contenga los datos editados del usuario
                        let editedUser = {
                            id: id,
                            username: newUsername,
                            saldo: nuevoSaldo
                        };
    
                        let editXhr = new XMLHttpRequest();
                        editXhr.open('PUT', '../backend/edit.php', true);
                        editXhr.setRequestHeader('Content-Type', 'application/json');
                        editXhr.onreadystatechange = () => {
                            if (editXhr.readyState === XMLHttpRequest.DONE) {
                                if (editXhr.status === 200) {
                                    // Si la solicitud se completó correctamente, actualizar la lista de usuarios
                                    this.listButtonClicked();
                                } else {
                                    console.error('Error al editar el usuario');
                                }
                            }
                        };
                        editXhr.send(JSON.stringify(editedUser));
                    } else {
                        console.error('El usuario con el ID proporcionado no existe');
                    }
                } else {
                    console.error('Error al obtener los datos del usuario');
                }
            }
        };
        xhr.send();
    }
    
    
    deleteButtonClicked() {
        let id = prompt("Ingrese el ID del usuario que desea eliminar:");
    
        let xhr = new XMLHttpRequest();
        xhr.open('DELETE', `../backend/delete.php?id=${id}`, true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Si la solicitud se completó correctamente, actualizar la lista de usuarios
                    this.listButtonClicked();
                } else {
                    console.error('Error al eliminar el usuario');
                }
            }
        };
        xhr.send();
    }
    
    balanceButtonClicked(){
        // Realizar una solicitud AJAX para obtener los saldos de todos los usuarios
        let xhr = new XMLHttpRequest();
        xhr.open('GET', '../backend/balance.php', true);
        xhr.onreadystatechange = () => {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    // Parsear la respuesta como JSON
                    let balances = JSON.parse(xhr.responseText);
                 
                    //Utilizando parseFloat(), se convierte este valor de cadena en un número flotante para poder realizar operaciones matemáticas con él. 
                    //Además, replace('$', '') se utiliza para eliminar el símbolo de dólar del saldo, dejando solo el número. Luego, este número se agrega al total acumulado.
                    let total = 0;
                    for (let balance of balances) {
                        total += parseFloat(balance.saldo.replace('$', ''));
                    }
                    let average = total / balances.length;
                    
                    // Mostrar el saldo promedio. toFixed(2) se utiliza para redondear el promedio a dos decimales antes de mostrarlo.
                    alert(`El saldo promedio de los usuarios es: $${average.toFixed(2)}`);
                } else {
                    console.error('Error al obtener los saldos de los usuarios');
                }
            }
        };
        xhr.send();
    }
    

}

customElements.define( 'x-crud', CRUDComponent );

let myCRUD = new CRUDComponent();

document.body.appendChild(myCRUD);
