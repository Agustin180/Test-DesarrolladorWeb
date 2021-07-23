
    // DECLARACION VARIABLES //

const start__button = document.getElementById("start-button")
const question__type = document.getElementById("question-type")
const answer__end = document.getElementById("answer-end")
const question__ = document.getElementById("question")
const answer__ = document.getElementById("answer-finally-text")

    // EVENTOS CLICK GENERALES //

start__button.addEventListener('click', () => {
    start__button.innerHTML = 'Siguiente';
    question__type.style.display = 'block';
    answer__end.style.display = 'block';
    answer__.style.display = 'none';
});

answer__end.addEventListener('click', () => {
    answer__.style.display = 'block';
});

    // PREGUNTAS //

const questions = [
        'Diferencia entre =, == y ===',
        'Que son las siglas IIFE y que significan',
        'Que significa HTML',
        'Que significa CSS',
        'Que son los tags o etiquetas semanticas',
        'Para que sirven las etiquetas "Article", "Title", "Sidebar" y "Navbar".',
        'Formas de aplicar estilos CSS',
        'Diferencia entre "ID" y "Clases"',
        'Como hago para que una columna de "Divs" o "Imagenes" se vean en forma de fila.',
        'Como hacer animaciones',
        'Como hago para que un rectangulo aumente de tamaño cuando paso el mouse por encima',
        'Que son las pseudoclases',
        'Como usar Media queries',
        'Que es un preprocesador de "CSS" y para que sive',
        'Que es un "Scope"',
        'Diferencias "var", "let" y "const"',
        'Que es un "Hosting"',
        'Que es "Single-threaded"',
        '¿Es JavaScript "Single-threaded"?',
        'Diferencia "Arrow Functions" y "Functions"',
        'Que es una clase en JavaScript',
        'Como maneja JavaScript el asincronismo',
        'Consideraciones al usar "this"',
        'Que son los "Closures"',
        'Como funciona la herencia en JavaScript',
        'Que es "React"',
        'Que es el "DOM"',
        'Que es el virtual DOM y para que es usado',
        'Diferencia entre "Stateful" y "Stateless" Components',
        'Listar los lifecycle methods (ciclos de vida) en React',
        'Que son los "Hooks" en React',
        'Que es "Redux" y para que sirve',
        'Que es "Angular"',
        'Que es "Unit Testing"',
        'Que es y para que sirve el testing',
        'Que es Integration Testing',
        'Que son las "Metodologias Agiles", nombrar una',
        'Que son las "Pseudo-Clases en CSS"',
        'Que son los "Pseudo-Elementos" en CSS',
        'Formas de comentar en "HTML", "CSS" y "JS"',
        'Diferencia entre "display: none;" y "visibility: hidden;"'

]

    // RESPUESTAS //

    const answers = [
        '"=" Se usa para la declaraciones de variables, "==" se usa en los bucles y significa que "x" cosa es igual a otra "x" cosa mientras que "===" es que estrictamente tienen que ser iguales tanto valor como tipo de valor"',
        'Las siglas "IIFE" significan "Immediately invoked function expression" es cuando declaramos una funcion y en ese mismo instante la utilizamos.',
        'Las siglas "HTML" significan Lenguaje de marcado de hipertexto o HyperText Markup Language en ingles, define el significado y la estructura del contenido web.',
        'Las siglas "CSS" significan Lenguaje de estilo en cascada o cascading style sheets en ingles. define la presentación y estilo de un documento.',
        'Los tags/etiquetas semanticas es cuando usamos etiquetas que tienen relacion y describen lo que trata su contenido esto ayuda a que las páginas web sean mejor indexadas por los buscadores.',
        'La etiqueta "Article" especifica contenido autónomo e independiente. La etiqueta "Title" define el título del documento. El título debe ser solo texto y se muestra en la barra de título del navegador o en la pestaña de la página. .La etiqueta "Sidebar" se utiliza para ordenar o listar información importante en una columna situada a la izquierda, a la derecha o a ambos lados de la pantalla. La etiqueta "Navbar" representa una sección de una página cuyo propósito es proporcionar enlaces de navegación.',
        'Existen 3 formas de aplicar CSS, la primera es estilo en linea es decir en la misma etiqueta creada aplicar el estilo, la segunda es en la etiqueta "Header" aplicar todo el estilo ya que es contenido que no se ve y la tercera que es la mas optima es un archivo externo ".css" donde este todo el estilo cargado.',
        'El ID es un identificador unico que debe usarse en la misma etiqueta una sola vez mientras que las Clases se pueden usar en las etiquetas tantas veces quieras.',
        'Podrias usar floats para flotarlos pegados a sus otros "Divs" o "Imagenes" para asi queden en forma de fila.',
        'Debes colocar la propiedad "Animations" en el estilo de la etiqueta que quieras aplicarselo, luego el nombre, su duracion y por ultimo la propiedad. Luego debes hacer un @keyframes "Nombre de tu animacion" abres llaves y dentro de las llaves dices de "from" a "to" el valor o tambien puedes usar "%" que es la opcion optima.',
        'Aplicando la propiedad :hover en la etiqueta y especificar el "Font-size" a un numero mayor al establecido en la etiqueta',
        'es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado. Por ejemplo,  :hover',
        'Usando @Media y las especificaciones que les diga el usuario por ejemplo "max-width 600px" es decir que de 600px o mas bajo tendra esas propiedades',
        'Es una herramienta que nos permite escribir pseudocódigo CSS que luego será compilado de convertir en CSS tal y como lo conocemos de forma habitual. Te permite escribir CSS en un idioma alternativo y ofrece funciones avanzadas como variables, funciones y la posibilidad de incluir archivos.',
        'El "Scope" es el alcance que una variable tendrá en tu código, en JavaScript tenemos varias opciones: global, local y bloque.',
        'CONST: NO cambiara su valor en ningún momento en el futuro. VAR: SI puede cambiar su valor y su scope es local. LET: Es una variable que también podra cambiar su valor, pero solo vivirá (Funcionara) en el bloque donde fue declarada.',
        'Alojamiento web es el servicio que provee a los usuarios de Internet un sistema para poder almacenar información, imágenes, vídeo, o cualquier contenido accesible vía web.',
        'Un hilo (thread) es básicamente un proceso simple que un programa puede usar para completar tareas ("tasks"). Cada hilo solo puede realizar una tarea a la vez',
        'JavScript es Single-thread. Aún con múltiples procesadores, solo se puede ejecutar tareas en un solo hilo,',
        'Las Arrow Functions es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.',
        'Son una mejora sintáctica sobre la herencia basada en prototipos de JavaScript. Las clases proveen una sintaxis mucho más clara y simple para crear objetos y lidiar con la herencia.',
        'Quiere decir esto es que al ejecutar código JavaScript el hilo de ejecución continuará a pesar de encontrarse en situaciones en las que no obtenga un resultado inmediatamente.',
        'El valor de "this" está determinado por cómo se invoca a la función. No puede ser establecida mediante una asignación en tiempo de ejecución, y puede ser diferente cada vez que la función es invocada.',
        'Una clausura (Closures) permite acceder al ámbito de una función exterior desde una función interior.',
        'JavaScript Implementa una herencia que nos permite asociar un objeto prototipo con una función constructora. De esta manera, el nuevo objeto hereda todas las propiedades del objeto prototipo.',
        'React es una biblioteca Javascript de código abierto diseñada para crear interfaces de usuario con el objetivo de facilitar el desarrollo de aplicaciones en una sola página(SPA).',
        'Es una interfaz de programación de aplicaciones (API) para documentos validos HTML y bien construidos XML. Define la estructura lógica de los documentos y el modo en que se accede y manipula.',
        'Es una representación del DOM guardada en memoria. Actúa de intermediario entre los estados de la aplicación y los estados del DOM (vistos por el usuario)',
        'Las aplicaciones Stateful van a reaccionar por el estado actual, en cambio las Stateless son independiente del estado y de las peticiones anteriores y posteriores.',
        'En React el ciclo de vida son una serie de funciones que se ejecutan en distintos momentos de la vida del componente y nos permiten realizar distintas acciones en estos momentos',
        'Los Hooks son una nueva API de la librería de React que nos permite tener estado, y otras características de React, en los componentes creados con una funcion.',
        'Redux es una librería para controlar el estado de nuestras aplicaciones web fácilmente, de una forma consistente entre cliente y servidor,',
        'Angular es un framework de desarrollo para JavaScript creado por Google que se utiliza para crear y mantener aplicaciones web de una sola página.',
        'En la programacion Unit Testing (Prueba unitaria) es una forma de comprobar el correcto funcionamiento de una unidad de código.',
        'El testing en programación se refiere a la comprobación de que todo el código que se ha escrito funciona. Se trata de comprobar que, ante todas las situaciones a las que se puede enfrentar la web o aplicacion que creemos, la respuesta sea la correcta en cada caso.',
        'TDD o Test Driven Development (desarrollo dirigido por tests) es una práctica de programación que consiste en escribir primero las pruebas (generalmente unitarias), después escribir el código fuente que pase la prueba satisfactoriamente y, por último, refactorizar el código escrito.',
        'Pruebas de integración son aquellas que se realizan en el ámbito del desarrollo de software una vez que se han aprobado las pruebas unitarias y lo que prueban es que todos los elementos unitarios que componen el software, funcionan juntos correctamente probándolos en grupo.',
        'no se planifica ni se diseña el producto por adelantado, evoluciona basándose en bucles de retroalimentación. 2 Metodologias por ejemplo son "Scrum" y "Kanban"',
        'Una pseudoclase CSS es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado. Por ejemplo, :hover aplicará un estilo cuando el usuario haga hover sobre el elemento especificado por el selector.',
        'los pseudoelementos son otra de las características de CSS que permiten hacer referencias a comportamientos virtuales no tangibles, o lo que es lo mismo, se le puede dar estilo a elementos que no existen realmente en el HTML, y que se pueden generar desde CSS, ejemplo ::before y ::after.',
        'En HTML puedes comentar con <----> en CSS /*---*/ y JS /----/',
        'Display none oculta totalmente el contenido incluyendo el espacio que ocupa mientras que display hidden oculta solo lo visual pero el contenido sigue ocupado el espacio de su contenedor.'

]

    // FUNCIONES //

function generateQuote(){
    let randomNumber = Math.floor(Math.random()*(questions.length));

    for (i=0; i != randomNumber ; i++){

    question__.innerHTML = questions[randomNumber];
    answer__.innerHTML = answers[randomNumber];

    }
}

start__button.addEventListener('click',generateQuote);







