
class CRUDComponent extends HTMLElement
{
	constructor()
	{
		super();
		
		//Inicializar cosas que serán requeridas al momento de la visualización
		//Hasta acá, el elemento no está renderizado. Por lo tanto, tampoco recibe eventos.
		
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
	
	fillWith( dataArray )
	{
		//Acá queremos recibir un array de objetos e insertarlos todos en el selector
		//Forma del objeto (data) a recibir: [ { id: 'id', value: 'value' }, ... ];
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
	
	connectedCallback()
	{
		//Es el primer método que se ejecuta cuando la instancia/objeto es insertado dentro
		//de un nodo que ya sí está representado/renderizado en pantalla.
		//Recién ahora, el objeto pasa a tener estado activo (Recibe eventos y puede contestarlos)
		
		this.appendChild( this._buttonList );
		this.appendChild( this._buttonCreate );
		this.appendChild( this._buttonEdit );
		this.appendChild( this._buttonDelete );
		this.appendChild( this._buttonFuntion );
		this.appendChild( this._table );

	}
	
	disconnectedCallback()
	{
		//Se ejecuta cuando el elemento gráfico es retirado del nodo que lo representa.
		//Vuelve a estar desconectado de la recepción de eventos.
	}
	
	adoptedCallback()
	{
		//Se ejecuta sólo cuando el objeto es movido de "proceso" o de "pestaña"
	}
	
	attributesChangedCallback( oldValue, newValue )
	{
		//Se utiliza sólo para personalizar el comportamiento ante cambios en los valores de los atributos
		//que se definen en la propiedad observableAttributes()
	}
	
	static get observableAttributes()
	{
		//Sirve para definir atributos del estilo "HTML" y que tienen posibilidad de ser modificados
		//durante la ejecución.
		return ["value"];
	}
}

customElements.define( 'x-crud', CRUDComponent );

let myCRUD = new CRUDComponent();


document.body.appendChild(myCRUD);

//<html> --> objeto: document
//pestaña del navegador --> objeto: window
//window.document.body
