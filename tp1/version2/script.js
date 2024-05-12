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

        this._buttonFuntion = document.createElement('button');
        this._buttonFuntion.innerText = '...';


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
        this.appendChild( this._buttonFuntion );
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
    }

    listButtonClicked(){
        this.fillWith(userData);
    }
    
    createButtonClicked(){
        let newUser = {};
        let nextId = userData[userData.length - 1].id + 1;
        newUser.id = nextId;
        newUser.username = prompt("Ingrese el nombre de usuario:");
        newUser.saldo = '$'+ prompt("Ingrese el saldo del usuario:");
        // Agregar el nuevo usuario a la lista
        userData.push(newUser);
        // Actualizar la lista en pantalla
        this.fillWith(userData);
    }
    
    editButtonClicked() {
        let id = prompt("Ingrese el ID del usuario que desea editar:");
        let userIndex = userData.findIndex(user => user.id === parseInt(id));
        if (userIndex === -1) {
            prompt("El usuario con el ID proporcionado no existe.");
            return;
        }
        let newUsername = prompt("Ingrese el nuevo nombre de usuario:");
        let nuevoSaldo = '$'+ prompt("Ingrese el nuevo saldo:");
        userData[userIndex].username = newUsername;
        userData[userIndex].saldo =  nuevoSaldo;
        
        this.fillWith(userData);
        console.log("Datos actualizados del usuario:");
        console.log(userData[userIndex]);
    }
    
    deleteButtonClicked() {
        let id = prompt("Ingrese el ID del usuario que desea eliminar:");
        let userIndex = userData.findIndex(user => user.id === parseInt(id));
        if (userIndex === -1) {
            console.log("El usuario con el ID proporcionado no existe.");
            return;
        }
        let deletedUser = userData.splice(userIndex, 1)[0];
        console.log("Usuario eliminado:");
        console.log(deletedUser);
        // Actualizar la lista en pantalla
        this.fillWith(userData);
    }

}

customElements.define( 'x-crud', CRUDComponent );
const dataFromServer = '[{"id":1,"username":"IronMan92","saldo":"$100.50"},{"id":2,"username":"LunaGamer77","saldo":"$75.25"},{"id":3,"username":"ShadowNinja123","saldo":"$200.00"},{"id":4,"username":"DragonMasterX","saldo":"$50.75"},{"id":5,"username":"SpaceExplorer99","saldo":"$300.30"},{"id":6,"username":"PixelWizard","saldo":"$150.00"},{"id":7,"username":"MysterySeeker","saldo":"$80.60"},{"id":8,"username":"EternalDreamer","saldo":"$400.20"},{"id":9,"username":"SunnySideUp","saldo":"$10.00"},{"id":10,"username":"NeonPhantom","saldo":"$50.00"},{"id":11,"username":"CyberPunk99","saldo":"$125.75"},{"id":12,"username":"GalacticTraveler","saldo":"$275.50"},{"id":13,"username":"TechWizard","saldo":"$90.25"},{"id":14,"username":"MysticMage","saldo":"$180.00"},{"id":15,"username":"SamuraiWarrior","saldo":"$200.60"},{"id":16,"username":"StealthyAssassin","saldo":"$450.20"},{"id":17,"username":"CosmicExplorer","saldo":"$15.00"},{"id":18,"username":"DreamCatcher","saldo":"$75.00"},{"id":19,"username":"ArcaneSorcerer","saldo":"$300.00"},{"id":20,"username":"StarStrider","saldo":"$500.00"},{"id":21,"username":"NeoGamer","saldo":"$110.00"},{"id":22,"username":"TechNinja","saldo":"$95.50"},{"id":23,"username":"GalacticHero","saldo":"$700.75"},{"id":24,"username":"DreamWalker","saldo":"$250.25"},{"id":25,"username":"CyberMage","saldo":"$180.80"},{"id":26,"username":"SpacePilot","saldo":"$600.00"},{"id":27,"username":"TechSavvy","saldo":"$50.50"},{"id":28,"username":"VirtualWarrior","saldo":"$175.00"},{"id":29,"username":"DigitalNomad","saldo":"$125.20"},{"id":30,"username":"PixelPioneer","saldo":"$300.40"}]';
let userData = JSON.parse(dataFromServer);

let myCRUD = new CRUDComponent();

document.body.appendChild(myCRUD);
