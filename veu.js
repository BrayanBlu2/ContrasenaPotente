const { createApp } = Vue;

const App = {
  data() {
    return {
        ArrayMinus: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
        ArrayMayus: ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
        ArrayNums: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        ArraySimbols: [".", "?", "/","¡", "'", "|", "$", "&", "%", "(", ")", "-", "_", ":", ";", ">", "<", "]", "[", "{", "}", "^", "*", "@", "#", "+", "=", "°", "~"],
        minusculas: true,
        mayusculas: true,
        simbolos:true,
        numeros:true,
        cantidad:20,
        contraseñaGenerada: '',
    };

  },
  methods: {

    copiarContra(){
      if(this.contraseñaGenerada != ''){
        navigator.clipboard.writeText(this.contraseñaGenerada); //Enviar al portapapeles de window lo que ha copiado.
        alert("Copiado");
      }else{
        alert("No hay contraseña para copiar");
      }
    },

    generarContraseña() {
      this.verificarCasillas();
      this.validarCantidad();
      
      let contraseña = '';
      const caracteres = [];
  
      if (this.minusculas) {
        for (let i = 0; i < this.ArrayMinus.length; i++) {
          caracteres.push(this.ArrayMinus[i]);
        }
      }
      if (this.mayusculas) {
        for (let i = 0; i < this.ArrayMayus.length; i++) {
          caracteres.push(this.ArrayMayus[i]);
        }
      }
      if (this.numeros) {
        for (let i = 0; i < this.ArrayNums.length; i++) {
          caracteres.push(this.ArrayNums[i]);
        }
      }
      if (this.simbolos) {
        for (let i = 0; i < this.ArraySimbols.length; i++) {
          caracteres.push(this.ArraySimbols[i]);
        }
      }
  
      for (let i = 0; i < this.cantidad; i++) {
        const numAleatorio = Math.floor(Math.random() * caracteres.length);
        contraseña += caracteres[numAleatorio];
      }
  
      this.contraseñaGenerada = contraseña;
    },

    validarCantidad() {
      if (this.cantidad < 20) {
        this.cantidad = 20;
        alert("La cantidad no puede ser inferior a 20");
      } else if (this.cantidad > 255) {
        this.cantidad = 255;
        alert("La cantidad no puede ser mayor a 255");
      }
    },
    verificarCasillas(){
      if(this.minusculas == false && this.mayusculas == false && this.numeros == false && this.simbolos == false){
        alert("Debes seleccionar al menos una casilla");
        this.minusculas = true;
        this.mayusculas = true;
        this.numeros = true;
        this.simbolos = true;
      }
    },
  },

  template:`            
    <h1>Generador de contraseña</h1>
    <div id="parte1">
      <div id="parte1-1">
        <label>Contraseña:</label>
        <input type="text" id="generar" readonly v-model="contraseñaGenerada" placeholder="Genera tu contraseña"/>
      </div>
      <button @click="copiarContra()">Copy</button>   
    </div>

    <div id="parte2">
  
      <p> Mínimo:20/ Máximo:255 carácteres</p> 
      <input type="number" id="cantidad" v-model="cantidad"/>
      <input type="range" min="20" max="255" v-model="cantidad" id="range">
    </div>

    <h2>Elige que tendra tu contraseña</h2>
    <div id="parte3">
      <div class="parte3-1">
        <input type="checkbox" v-model="minusculas">Minúsculas</input>

        <input type="checkbox" v-model="mayusculas">Mayúsculas</input>
      </div>
      <div class="parte3-1">
        <input type="checkbox" v-model="numeros">Números</input>

        <input type="checkbox" v-model="simbolos">Símbolos</input>
      </div>   
    <button @click="generarContraseña()"> Generar</button>
    </div>
  `,
};

// Crear la aplicación y montarla en el elemento con id="app"
createApp(App).mount('#app');




