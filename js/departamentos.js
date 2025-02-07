

const botonesdepartamento=async()=>{
    const departamentosform = document.getElementById('OpcionesDespartamentos');
    const contenedor = document.getElementById('contenedor');
    const boton = document.getElementById("botonEstudiantes");
    const Departamentos =document.getElementById('Departamentos');
    const Prosfesores =document.getElementById('Prosfesores');
    const Universidad1 =document.getElementById('Universidad1');
    const Universidad2 =document.getElementById('Universidad2');
    const Universidad3 =document.getElementById('Universidad3');
    const Universidad4 =document.getElementById('Universidad4');
    const Universidad5 =document.getElementById('Universidad5');
    const Universidad6 =document.getElementById('Universidad6');
    const contenedoor =document.getElementById('OpcionesDespartamentos');
    contenedoor.innerHTML = `
      <form>
          <button class="botonsDepartamentos" id="botoncrearDepartamento"type="button" onclick="formularioCrearDEpartamento()">Crear Departamentos</button>
          <button class="botonsDepartamentos" id="botonmodificarDepartamento" type="button" onclick="()">Modificar Departamentos</button>
          <button class="botonsDepartamentos" id="botonmostrarListado" type="button" onclick="mostrarListado()">Ver Listado de Deprtamentos</button>
          <div id="departamentoss"></div>
          <button id="atras" class="atras" onclick="inicio()">atras</button>
          
      </form>
  `;
   
    contenedor.style.alignContent='center';
    departamentosform.style.display='flex';
    departamentosform.style.width='1550px';
    departamentosform.style.height='630px';
    departamentosform.style.justifyContent='center';
    departamentosform.style.padding='2rem ';


    boton.style.display="none";
    Departamentos.style.display='none';
    Prosfesores.style.display='none';
    Universidad1.style.display='none';
    Universidad2.style.display='none';
    Universidad3.style.display='none';
    Universidad4.style.display='none';
    Universidad5.style.display='none';
    Universidad6.style.display='none';
}

const formularioCrearDEpartamento= async()=>{
    const boton1= document.getElementById('botoncrearDepartamento');
    const boton2 = document.getElementById('botonmodificarDepartamento')
    const boton3 = document.getElementById('botonmostrarListado')
    const contenedorestu = document.getElementById('departamentoss');
    contenedorestu.innerHTML = `
      <form id="MenuCrearDepartamento">
        <h3>Menu Crear Departamentos</h3>
        <label for="identificacionDepartamento">Numero de Identificacion del Departamento:</label>
        <input type="number" id="identificacionDepartamento" required>
        <label for="nombreDepartamento">Nombre del Departamento:</label>
        <input type="text" id="nombreDepartamento" required>
        <button id="atras" class="atras" onclick="botonesdepartamento()">atras</button>
        
      </form>
  `;
    const atras=document.getElementById('atras');
    atras.style.display = 'none';
   boton1.style.display='none';
   boton2.style.display='none';
   boton3.style.display='none' ;
   await creardepartamentos();
   
}

const creardepartamentos= async ()=>{
    const nombreInput=document.getElementById('nombreDepartamento');
    const IdInput=document.getElementById('identificacionDepartamento')

    const nombre=nombreInput.value;
    const Id=IdInput.value;

    const nuevo={
        id:listaDepartamentos.length+1,
        identificaion:Id,
        nombre:nombre,
    }

  
    await guardar(nuevo);
    await loadEstudiantes();
    
    IdInput.value='';
    nombreInput.value='';

    alert('Departamento creado con éxito!');

    return nuevo;

}

const modificarDepartamento =async()=>{
    const boton1= document.getElementById('botoncrearDepartamento');
    const boton2 = document.getElementById('botonmodificarDepartamento');
    const boton3 = document.getElementById('botonmostrarListado');
    const contenedorestu = document.getElementById('crearEDepartamento');
    boton1.style.display='none';
    boton2.style.display='none';
    boton3.style.display='none';
    
    verificarDepartamentos();
    if (Estado==='Encontrado'){
        contenedorestu.innerHTML = `
      <form id="MenuModificarEDepartamento">
        <h3>Menu Modificar EDepartamentos</h3>
        <h3>Seleccione el item que desea modificar</h3>
        
        <button for="identificacionEDepartamento" onclick="modificarIdentificacionDepartamento()">Numero de Identificacion del Departamento:</button>
        
        <button for="nombreEDepartamento" onclick="modificarNombre()">Nombre del Departamento:</button>
        
        
        <button id="atras" class="atras" onclick="botonesdepartamento()">atras</button>
        
      </form>
  `;
    }

}
const verificarDepartamentos= async=()=>{
    const Estado='';
    const nombre=document.getElementById('nombreDepartamento')
    const contenedorestu = document.getElementById('crearEstudiante');
    contenedorestu.innerHTML = `
      <form id="MenuModificarEstudiante">
        <h3>Menu Mofificar Departamento</h3>
        <label for="nombreDepartamento">Nombre del Departamento:</label>
        <input type="number" id="nombreDepartamento" required>
      </form>
  `;
    for ( const estudiante of listaEstiudiantes){
        if (estudiante[identificaion]===nombre){
            alert('Estudiante Encontrado!');
            Estado='Encontrado'
        }
        else{
            alert('No se encontro el Departamento!')
        }
    }

    return [Estado, Departamentos]
}
const modificarIdentificacionDepartamento=()=>{
    const contenedorestu = document.getElementById('Departamentos');
    contenedorestu.innerHTML = `
    <form id="MenuModificarDepartamento">
    <h3>Menu modificar Identificacion</h3>
    <label for="identificacionDepartamento">Numero de Identificacion del Departamento:</label>
    <input type="number" id="identificacionDepartamento" required>
    
    <button type="button" onclick="GuardarModificionDepartamento()">Guardar Modificion Departamento</button>
    
    <button type="button" onclick="GuardarModificion()">Guardar Modificion Departamento</button>
        
    <button id="atras" class="atras" onclick="modificarDepartamento()">atras</button>
    </form>

    `;
}
const modificarNombre=()=>{
    const contenedorestu = document.getElementById('crearEstudiante');
    contenedorestu.innerHTML = `
    <form id="MenuModificarDepartamento">
    <h3>Menu modificar Nombre</h3>
    <label for="nombreEstudiante">Nombre del Departamento:</label>
    <input type="text" id="nombreDepartamento" required></input>
    
    <button type="button" onclick="GuardarModificionDepartamento()">Guardar Modificion Departamento</button>
    
    <button type="button" onclick="GuardarModificion()">Guardar Modificion Departamento</button>
        
    <button id="atras" class="atras" onclick="modificarDepartamento()">atras</button>
    </form>
    `;
}
