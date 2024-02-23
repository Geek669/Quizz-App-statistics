const STORE = {
    questions: {
        autores: [
            {
                question: "¿Quién es considerado el fundador de la estadística moderna?",
                code: ``,
                answers: [
                    "Carl Friedrich Gauss",
                    "Blaise Pascal",
                    "Sir Francis Galton",
                    "Karl Pearson"
                ],
                correctAnswer: "Karl pearson"

            }, {
                question: "¿Cuál de los siguientes autores estadísticos introdujo por primera vez el concepto de distribución normal?",
                code: ``,
                answers: [
                    "Blaise Pascal",
                    "Sir Isaac Newton",
                    "Carl Friedrich Gauss",
                    "Adolphe Quetelet"
                ],
                correctAnswer: "Carl Friedrich Gauss"
            }, {
                question: "¿Qué  autor estadístico fue pionero en el desarrollo de la teoría de la correlación?",
                code: ``,
                answers: [
                    "Blaise Pascal",
                    "Sir Francis Galton",
                    "Karl Pearson",
                    "Adolphe Quetelet"
                ],
                correctAnswer: "Karl Pearson"
            }, {
                question: "¿Quién fue el primero en utilizar métodos estadísticos para estudiar la herencia y la variabilidad biológica?",
                code: ``,
                answers: [
                    "Francis Galton",
                    "Adolphe Quetelet",
                    "Karl Pearson",
                    "Blaise Pascal"
                ],
                correctAnswer: "Francis Galton"
            }, {
                question: "¿Cuál de los siguientes autores estadísticos contribuyó al desarrollo de la estadística eugenésica?",
                code: ``,
                answers: [
                    "Karl Pearson",
                    "Francis Galton",
                    "Adolphe Quetelet",
                    "Blaise Pascal"
                ],
                correctAnswer: "Francis Galton"

            }
        ],
        historia: [
            {
                question: "¿Qué es la estadística?",
                code: ``,
                answers: [
                    "La ciencia que estudia la recolección, organización, análisis e interpretación de datos",
                    "La rama de las matemáticas que se ocupa del azar y la probabilidad",
                    "La técnica para contar objetos en un conjunto",
                    "La forma de graficar información en una computadora"
                ],
                correctAnswer: "La ciencia que estudia la recolección, organización, análisis e interpretación de datos"
            }, {
                question: "¿Qué medida de tendencia central se utiliza para representar el valor medio de un conjunto de datos?",
                code: ``,
                answers: [
                    "Mediana",
                    "Moda",
                    "Media",
                    "Varianza"
                ],
                correctAnswer: "Media"
            }, {
                question: "¿Cuál de las siguientes opciones describe mejor el concepto de mediana?",
                code: ``,
                answers: [
                    "El valor que ocurre con mayor frecuencia en un conjunto de datos",
                    "El valor que se encuentra en el centro de un conjunto de datos cuando están ordenados de menor a mayor",
                    "La suma de todos los valores en un conjunto de datos dividida por el número total de valores",
                    "Ninguna de las anteriores"
                ],
                correctAnswer: "El valor que se encuentra en el centro de un conjunto de datos cuando están ordenados de menor a mayor"
            }, {
                question: "¿Qué medida de dispersión se utiliza para representar la variabilidad de un conjunto de datos alrededor de su media?",
                code: ``,
                answers: [
                    "Rango",
                    "Desviación Estándar",
                    "Mediana",
                    "Varianza"
                ],
                correctAnswer: "Desviación Estándar"
            }, {
                question: "¿Cuál es la media de la siguiente lista de números: 10, 14, 12, 16,?",
                code: ``,
                answers: [
                    "12",
                    "14",
                    "16",
                    "13"
                ],
                correctAnswer: "13"
            }
        ],
        Variables: [
            {
                question: "¿Cuál de las siguientes afirmaciones describe mejor la varianza en estadística?",
                code: ``,
                answers: [
                    "Es la raíz cuadrada de la desviación estándar",
                    "Es una medida de la dispersión de los datos alrededor de la media",
                    "Es la suma de los cuadrados de las desviaciones de cada dato respecto a la media, dividida por el número de datos menos uno",
                    "Es una medida de tendencia central"
                ],
                correctAnswer: "Es la suma de los cuadrados de las desviaciones de cada dato respecto a la media, dividida por el número de datos menos uno"
            }, {
                question: "¿Qué medida de dispersión se calcula como la diferencia entre el tercer cuartil (Q3) y el primer cuartil (Q1)?",
                code: ``,
                answers: [
                    "Rango",
                    "Varianza",
                    "Ninguna",
                    "Rango intercuartil (RIC)"
                ],
                correctAnswer: "Rango intercuartil (RIC)"
            }, {
                question: " ¿Cuál de las siguientes medidas de tendencia central es más afectada por los valores atípicos?",
                code: ``,
                answers: [
                    "Mediana",
                    "Moda",
                    "Media",
                    "Ninguna de las anteriores"
                ],
                correctAnswer: "Media"
            }, {
                question: "¿Qué medida de dispersión es más sensible a los valores extremos en un conjunto de datos?",
                code: ``,
                answers: [
                    "Rango",
                    "Desviación Estándar",
                    "Varianza",
                    "Mediana"
                ],
                correctAnswer: "Desviación Estándar"
            }, {
                question: " ¿Qué se obtiene al restar el tercer cuartil (Q3) del primer cuartil (Q1)?",
                code: ``,
                answers: [
                    "Rango intercuartílico",
                    "Ninguno",
                    "Diagrama de Barras",
                    "Moda"
                ],
                correctAnswer: "Rango intercuartílico"
            },
        ],
        cuartiles: [
            {
                question: "¿Qué son las variables estadísticas?",
                code: ``,
                answers: [
                    "Son características que pueden ser medidas en un conjunto de dato",
                    "Son valores que pueden tomar las variables estadísticas",
                    "Son conjuntos de datos que se utilizan para realizar análisis estadísticos",
                    "No hay diferencia entre ambas"
                ],
                correctAnswer: "Son características que pueden ser medidas en un conjunto de datos"
            }, {
                question: "¿Qué tipos de variables estadísticas existen?",
                code:
                    ``,
                answers: [
                    "Cualitativas y cuantitativas",
                    "Discretas y continuas",
                    "Independientes y dependientes",
                    "Todas las anteriores"
                ],
                correctAnswer: "Todas las anteriores"
            }, {
                question: "Calcula el primer cuartil, el segundo cuartil y el tercer cuartil de los siguientes datos:",
                code: `3, 5, 7, 9, 11, 13, 15, 17, 19`,
                answers: [
                    "Primer cuartil 7, segundo cuartil 11, tercer cuartil 15",
                    "Primer cuartil 3, segundo caurtil 13, tercer cuartil 19",
                    "Ninguna",
                    "Primer cuartil 9, segundo cuartil 15, tercer cuartil 17"
                ],
                correctAnswer: "Primer cuartil 7, segundo cuartil 11, tercer cuartil 15"
            }, {
                question: "¿Quién es considerado el padre de la estadística?",
                code:
                    ``,
                answers: [
                    " Francis Galton",
                    "Isaac Newton",
                    "Karl Pearson",
                    "Ronald Fisher"
                ],
                correctAnswer: "Karl Pearson"
            }, {
                question: "¿Quién introdujo por primera vez el término estadística en su sentido moderno?",
                code:
                    ``,
                answers: [
                    "Gottfried Wilhelm Leibniz",
                    "Albert Einsten",
                    "Tomas Estrada",
                    "Ninguno"
                ],
                correctAnswer: "Gottfried Wilhelm Leibniz"
            }
        ],
        ejercicios: [
            {
                question: "¿Qué aplicaciones tiene la estadística descriptiva en la investigación científica?",
                code:
                    ``,
                answers: [
                    "Analizar la variabilidad de los datos y calcular la significancia estadística",
                    "Identificar la muestra más representativa para un experimento",
                    "Realizar pruebas de hipótesis para establecer relaciones causales entre variables",
                    "Resumir y presentar los datos de un estudio de manera concisa y comprensible"
                ],
                correctAnswer: "Resumir y presentar los datos de un estudio de manera concisa y comprensible"
            }, {
                question: "¿Cuál es la diferencia principal entre estadística descriptiva y estadística inferencial?",
                code:
                    ``,
                answers: [
                    "La estadística descriptiva se utiliza para realizar pruebas de hipótesis, mientras que la estadística inferencial se utiliza para calcular medidas de tendencia central",
                    " La estadística descriptiva se utiliza para resumir y describir datos, mientras que la estadística inferencial se utiliza para hacer predicciones y tomar decisiones basadas en muestras de datos",
                    "Resumir datos y calcular varianza y desviación estándar",
                    "Ninguna"
                ],
                correctAnswer: "La estadística descriptiva se utiliza para realizar pruebas de hipótesis, mientras que la estadística inferencial se utiliza para calcular medidas de tendencia central"
            }, {
                question: "¿Cuáles son los diagramas más comúnmente utilizados en estadística descriptiva para representar la distribución de datos?",
                code:
                    ``,
                answers: [
                    "Diagrama de dispersión y diagrama de barras",
                    "Diagrama de línea y diagrama de caja y bigotes",
                    "Diagrama de torta y diagrama de área",
                    " Diagrama de puntos y diagrama de sectores"
                ],
                correctAnswer: "Diagrama de línea y diagrama de caja y bigotes"
            }, {
                question: " ¿En qué áreas laborales cotidianas se utiliza comúnmente la estadística para la toma de decisiones?",
                code: ``,
                answers: [
                    "En la gestión de recursos humanos y la contratación de personal",
                    "En el diseño de productos y la ingeniería de procesos",
                    "En el análisis de ventas y la planificación de marketing",
                    "Todas las anteriores"
                ],
                correctAnswer: "Todas las anteriores"
            }, {
                question: " ¿En qué aspectos de la vida laboral se utiliza ampliamente la estadística para optimizar procesos y tomar decisiones informadas?",
                code:
                    ``,
                answers: [
                    "En la logística y el control de inventario",
                    "En la investigación de mercado y la segmentación de clientes",
                    "Todas las opciones anteriores",
                    "En el análisis financiero y la gestión de riesgos"
                ],
                correctAnswer: "Todas las opciones anteriores"
            }
        ],
        percentiles: [
            {
                question: "¿Qué representa el percentil 75 en un conjunto de datos?",
                code: ``,
                answers: [
                    "El valor por debajo del cual se encuentra el 25% de los datos",
                    "El valor por debajo del cual se encuentra el 75% de los datos",
                    "El valor por encima del cual se encuentra el 75% de los datos",
                    "El valor por encima del cual se encuentra el 25% de los datos"
                ],
                correctAnswer: "El valor por debajo del cual se encuentra el 75% de los datos"
            }, {
                question: "¿Cómo se calcula el percentil 50?",
                code: ``,
                answers: [
                    "Se ordenan los datos de menor a mayor y se encuentra el valor que divide al conjunto en dos partes iguales",
                    "Se suma el valor del percentil 25 al percentil 75 y se divide entre 2",
                    "Se toma el valor medio de todos los datos en el conjunto",
                    "Se encuentra el valor que ocurre con mayor frecuencia en el conjunto de datos"
                ],
                correctAnswer: "Se ordenan los datos de menor a mayor y se encuentra el valor que divide al conjunto en dos partes iguales"
            }, {
                question: "¿Cuál es la interpretación del percentil 90 en un conjunto de datos?",
                code: ``,
                answers: [
                    "El valor por debajo del cual se encuentra el 10% de los datos",
                    "El valor por debajo del cual se encuentra el 90% de los datos",
                    "El valor por encima del cual se encuentra el 10% de los datos",
                    "El valor por encima del cual se encuentra el 90% de los datos"
                ],
                correctAnswer: "El valor por debajo del cual se encuentra el 90% de los datos"

            }, {
                question4: "¿Qué representa el percentil 25 en un conjunto de datos?",
                code: ``,
                answers: [
                    "El valor por debajo del cual se encuentra el 25% de los datos",
                    "El valor por debajo del cual se encuentra el 75% de los datos",
                    "El valor por encima del cual se encuentra el 25% de los datos",
                    "El valor por encima del cual se encuentra el 75% de los datos"
                ],
                correctAnswer: "El valor por debajo del cual se encuentra el 25% de los datos"

            }, {
                question: "¿Cómo se interpreta el percentil 10 en estadística?",
                code: ``,
                answers: [
                    "El valor por debajo del cual se encuentra el 90% de los datos",
                    "El valor por debajo del cual se encuentra el 10% de los datos",
                    "El valor por encima del cual se encuentra el 90% de los datos",
                    "El valor por encima del cual se encuentra el 10% de los datos"
                ],
                correctAnswer: "El valor por debajo del cual se encuentra el 10% de los datos"
            }
        ],
        gráficos: [
            {
                question: "¿Qué tipo de gráfico es mejor utilizar para representar la distribución de una variable categórica?",
                code: ``,
                answers: [
                    "Histograma",
                    "Diagrama de dispersión",
                    "Diagrama de caja y bigotes",
                    "Gráfico de barras"
                ],
                correctAnswer: "Gráfico de barras"
            }, {
                question: "¿Cuál de los siguientes gráficos es útil para mostrar la relación entre dos variables numéricas?",
                code: ``,
                answers: [
                    "Gráfico circular",
                    "Diagrama de dispersión",
                    "Histograma",
                    "Gráfico de barras"
                ],
                correctAnswer: "Diagrama de dispersión"
            }, {
                question: "¿Qué gráfico se utiliza comúnmente para mostrar la distribución de una variable numérica?",
                code: ``,
                answers: [
                    "Gráfico de barras",
                    "Diagrama de dispersión",
                    "Histograma",
                    "Diagrama de caja y bigotes"
                ],
                correctAnswer: "Histograma"
            }, {
                question: "¿Qué tipo de gráfico es adecuado para representar la relación entre una variable categórica y una variable numérica?",
                code: ``,
                answers: [
                    "Diagrama de caja y bigotes",
                    "Gráfico de barras",
                    "Diagrama de dispersión",
                    "Gráfico circular"
                ],
                correctAnswer: "Diagrama de caja y bigotes"
            }, {
                question: "¿Qué gráfico es útil para mostrar la composición porcentual de diferentes categorías?",
                code: ``,
                answers: [
                    "Histograma",
                    "Diagrama de caja y bigotes",
                    "Gráfico circular",
                    "Diagrama de dispersión"
                ],
                correctAnswer: "Gráfico circular"
            }
        ],
        muestreo: [
            {
                question: "¿Qué tipo de muestreo se utiliza cuando los elementos de la población se seleccionan de manera aleatoria y cada elemento tiene la misma probabilidad de ser seleccionado?",
                code: ``,
                answers: [
                    "Muestreo aleatorio simple",
                    "Muestreo estratificado",
                    "Muestreo sistemático",
                    "Muestreo por conglomerados"
                ],
                correctAnswer: "Muestreo aleatorio simple"
            }, {
                question: "¿Qué método de muestreo se utiliza cuando la población se divide en subgrupos homogéneos y luego se selecciona una muestra de cada subgrupo?",
                code: ``,
                answers: [
                    "Muestreo aleatorio simple",
                    "Muestreo estratificado",
                    "Muestreo sistemático",
                    "Muestreo por conglomerados"
                ],
                correctAnswer: "Muestreo estratificado"
            }, {
                question: "¿Qué tipo de muestreo implica seleccionar cada k-ésimo elemento de la población después de ordenarla?",
                code: ``,
                answers: [
                    "Muestreo aleatorio simple",
                    "Muestreo estratificado",
                    "Muestreo sistemático",
                    "Muestreo por conglomerados"
                ],
                correctAnswer: "Muestreo sistemático"

            }, {
                question: "¿Qué método de muestreo se utiliza cuando la población se divide en grupos naturales y se seleccionan algunos de estos grupos para formar la muestra?",
                code: ``,
                answers: [
                    "Muestreo aleatorio simple",
                    "Muestreo estratificado",
                    "Muestreo sistemático",
                    "Muestreo por conglomerados"
                ],
                correctAnswer: "Muestreo por conglomerados"
            }, {
                question: "¿Qué tipo de muestreo se utiliza cuando se selecciona una muestra de manera que cada elemento tiene la misma probabilidad de ser seleccionado, pero la selección se realiza en grupos de elementos?",
                code: ``,
                answers: [
                    "Muestreo aleatorio simple",
                    "Muestreo estratificado",
                    "Muestreo sistemático",
                    "Muestreo por conglomerados"
                ],
                correctAnswer: "Muestreo por conglomerados"
            }
        ],
        probabilidad: [
            {
                question: "¿Qué representa la probabilidad en estadística?",
                code: ``,
                answers: [
                    "La certeza absoluta de que un evento o resultado ocurrirá",
                    "La medida de la frecuencia con la que ocurre un evento en un experimento aleatorio",
                    "El valor esperado de una variable aleatoria en un conjunto de datos",
                    "El margen de error asociado con una estimación estadística"
                ],
                correctAnswer: "La medida de la frecuencia con la que ocurre un evento en un experimento aleatorio"

            },
            {
                question: "¿Qué valor tiene la probabilidad de un evento que es imposible que ocurra?",
                code: ``,
                answers: [
                    "0",
                    "0.5",
                    "1",
                    "No se puede determinar"
                ],
                correctAnswer: "0"
            }, {
                question: "¿Cómo se define la probabilidad de un evento en un experimento aleatorio?",
                code: ``,
                answers: [
                    "Como el número total de resultados posibles en el experimento",
                    "Como la suma de las frecuencias de los resultados observado",
                    "Como la proporción de resultados favorables al evento con respecto al número total de resultados posibles",
                    "Como la media de los resultados observados"
                ],
                correctAnswer: "Como la proporción de resultados favorables al evento con respecto al número total de resultados posibles"
            }, {
                question: "¿Cuál es el rango de valores posibles para la probabilidad de un evento?",
                code: ``,
                answers: [
                    "De 0 a 1, inclusive.",
                    "De -1 a 1, inclusive.",
                    "De 0 a infinito.",
                    "No hay límite en los valores posibles."
                ],
                correctAnswer: "De 0 a 1, inclusive."

            }, {
                question: "¿Qué representan las probabilidades complementarias?",
                code: ``,
                answers: [
                    "Las probabilidades que suman 1",
                    "Las probabilidades que suman 0",
                    "Las probabilidades que se excluyen mutuamente",
                    "Las probabilidades que se suman al menos a 0.5"
                ],
                correctAnswer: "Las probabilidades que suman 1"

            }
        ],
        medidas: [
            {
                question : "¿Qué tipo de medida estadística se utiliza para describir la ubicación central de un conjunto de datos?",
                code: ``,
                answers : [
                    "Medidas de dispersión",
                    "Medidas de tendencia central",
                    "Medidas de posición",
                    "Medidas de forma"
                ],
                correctAnswer : "Medidas de tendencia central"
            },
            {
                // Segunda pregunta
                question : "¿Cuál es una medida de dispersión comúnmente utilizada en estadística?",
                code: ``,
                answers : [
                    "La media",
                    "La varianza",
                    "La mediana",
                    "La moda"
                ],
                correctAnswer : "La varianza"
            },
            {
             
                // Tercera pregunta
                question : "¿Qué medida estadística se utiliza para representar la cantidad de variabilidad en un conjunto de datos?",
                code: ``,
                answers : [
                    "Medidas de dispersión",
                    "Medidas de tendencia central",
                    "Medidas de posición",
                    "Medidas de forma"
                ],
                correctAnswer : "Medidas de dispersión"
            },
            {
                // Cuarta pregunta
                question : "¿Cuál de las siguientes no es una medida de tendencia central?",
                code: ``,
                answers : [
                    "La media",
                    "La varianza",
                    "La mediana",
                    "La moda"
                ],
                correctAnswer : "La varianza"
            },
            {
                // Quinta pregunta
                question : "¿Qué medida estadística se utiliza para identificar los valores que dividen un conjunto de datos en partes iguales?",
                code: ``,
                answers : [
                    "Medidas de dispersión",
                    "Medidas de tendencia central",
                    "Medidas de posición",
                    "Medidas de forma"
                ],
                correctAnswer : "Medidas de posición"
            },
            
             
        ],
    }
};


// Function marcar el  cuestionario. Crear un modelo para el estado de nuestra aplicación.
function makeQuiz() {
    // Crear un objeto para almacenar el estado de la aplicación al comenzar la prueba
    return {
        // Recopilar una pregunta aleatoria de las preguntas disponibles para cada categoría
        questions: helpers.getRandomQuestions(STORE),
        // Booleano para saber si el cuestionario está en progreso o no.
        midQuiz: false,
        // Conjunto de respuestas correctas/incorrectas para usar en nuestra barra de progreso
        progress: {
            progressBar: [],
            incorrectCategories: []
        },
        // Booleano para determinar si se debe mostrar el estado final
        completed: false,
        // Seguimiento de en que pregunta estamos actualmente
        currentQuestion: 0,
        // Realiza un seguimiento del total de respuestas correctas
        correctAnswers: 0,
        // Mantiene la respuesta seleccionada actual
        currentAnswer: "",
        //Realiza un seguimiento del % completado
        percCorrect: 0
    }
}

// Aplique animaciones de desvanecimiento y prepare el escenario para cambios de texto/elementos DOM
function $fade(appState) {

    // Este es el estado completo de un cuestionario.
    if (appState.completed) {

        // Desaparecer elementos con la promesa de evitar un comportamiento entrecortado
        $.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
            .done(function () {

                // Mostrar resultados del cuestionario
                $showResults(appState);
                $('.results-wrapper').hide().removeClass('hide');
                $('.question-answer-wrapper, .results-wrapper').fadeIn(500);
            });

        // Esto es si la aplicación recién se está iniciando.
    } else if (appState.midQuiz === false) {

        // obten una bandera que la aplicación ha comenzado
        appState.midQuiz = true;
        // Desaparecer elementos con la promesa de evitar un comportamiento entrecortado
        $.when($('.question-answer-wrapper, .question-wrapper, .code, .answer-wrapper, .start-quiz, .quit-quiz, .results-wrapper, .progress, .progress-bar').fadeOut(500))
            .done(function () {
                // Eliminar cualquier progreso de una prueba anterior (si corresponde);
                helpers.updateProgressBar(appState);
                $('.progress-count').html('1 / 10');
                $('.progress-perc').html('');
                // Matar resultados anteriores
                $('.failures').remove();
                // Hay mucho que hacer... principalmente simplemente configurar un nuevo entorno para una nueva prueba.
                $updateQuestion(appState);
                $('progress-bar').empty();
                $('progress-fill').html('Progress: <span class="progress-count">1 / 10</span><span class="progress-perc"></span>');
                $('.question-answer-wrapper, .answer-wrapper').removeClass('begin');
                $('.submit-btn, .progress, .progress-bar').removeClass('hide');
                $('.progress, .progress-bar').hide();
                $('.question-answer-wrapper, .question-wrapper, .answer-wrapper, .progress, .progress-bar').fadeIn(500);
                if (!$('.code').hasClass('hide')) { $('.code').fadeIn(500) };
            });

        // Esto es si la aplicación está en medio de la ejecución.
    } else if (appState.midQuiz) {
        $.when($('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeOut(500))
            .done(function () {
                $updateQuestion(appState);
                $('.question-answer-wrapper, .question-wrapper, .answer-wrapper').fadeIn(500);
            });
    }
}

// trabajo en progreso agregar happy...
function $showResults(appState) {
    if (appState.correctAnswers === 10) {
        let endMsg = `Has acertado el  ${appState.percCorrect}% correcto!
        No tengo nada más que enseñarte. Sigue adelante y prospera!
`;
    } else {
        $('.answer-btn').remove();
        let endMsg = `Tu nivel de conocimiento en estadística es  de  ${appState.percCorrect}% !`
        let endFeedback = ``;
        if (appState.progress.incorrectCategories.length === 0) {
            endFeedback = `¡Lo lograste! ¡Buen trabajo!`;
        } else {
            endFeedback = `Tienes que prepararte en las siguientes categorías:`;
        }

        $('.quiz-end-score').html(endMsg);
        let $failList = $('<ul class="failures"></ul>');
        appState.progress.incorrectCategories.map((cat => {
            $failList.append("<li class='category'>" + cat + "</li>");
        }));
        $('.quiz-end-feedback-p').html(endFeedback);
        $('.quiz-end-categories').append($failList);
        $('.results-wrapper').removeClass('hide').css('display', 'flex');
        $('.question-answer-wrapper, .results-wrapper, .quiz-end-feedback, .quiz-end-score, .retry-btn').css('display', 'flex').fadeIn(500);
    }

}

// Actualice la pregunta, el código, las respuestas y los botones en el DOM mientras estamos en un estado desvanecido
function $updateQuestion(appState) {
    $('.answer-btn').remove();

    // Actualice la pregunta y el texto del código con la pregunta actual
    $('.question').html(appState.questions[appState.currentQuestion].question);
    // Este es un truco para ocultar/mostrar la parte del código
    // Sólo 1/3 de las preguntas contienen código, por lo que lo ocultamos si no están presentes
    if (appState.questions[appState.currentQuestion].code == ``) {
        $('.code').addClass('hide');
    } else {
        $('.code').removeClass('hide');
        $('.code').html(`<pre>${appState.questions[appState.currentQuestion].code}</pre>`);
    }

    // Cambiar continuar regresar para enviar
    $('.continue-btn')
        .val("Submit")
        .removeClass('continue-btn')
        .addClass('submit-btn')
        .prop('disabled', true);

    // Agregue las respuestas disponibles para la pregunta.
    let $answers = [];

    // Agregar las respuestas a una matriz temporal
    for (let i = 0; i < appState.questions[appState.currentQuestion].answers.length; i++) {

        // Agregar respuestas a las preguntas actuales a una matriz
        let $answer = $('<button class="answer-btn" type="button"></button>');
        $answer.html(appState.questions[appState.currentQuestion].answers[i]);
        $answers.push($answer);
    }

    // Mezcla las respuestas
    helpers.shuffleAnswers($answers)

    // Enviar respuestas al DOM
    $answers.forEach((answer) => {
        $('.answer-wrapper').prepend(answer);
    });
}

// Clase simple y habilitar/deshabilitar la selección DOM cuando se selecciona la respuesta
function selectAnswer(answer) {
    $('.answer-btn').removeClass('selected');
    answer.addClass('selected');
    $('.submit-btn').prop('disabled', false);
}

// La respuesta es seleccionada y enviada.
// envia estado de retroalimentacion
function submitAnswer(appState) {

    // Esto se devolverá verdadero o falso según su respuesta.
    let correct;

    // Agregue estilos a las respuestas para mostrar si su respuesta fue correcta o no.
    $('.answer-btn').each(function () {
        if ($(this).html() === appState.questions[appState.currentQuestion].correctAnswer) {
            $(this).addClass('pass');
            // If answer is correct and selected...
            if ($(this).hasClass('selected')) {
                correct = "pass";
                appState.correctAnswers++;
                appState.questions[appState.currentQuestion];
            }

            // Manejar la respuesta correcta si la respuesta seleccionada es incorrecta
        } else if ($(this).hasClass('selected')) {
            $(this).addClass('fail dim-answer');
            correct = "fail";
            appState.progress.incorrectCategories.push(appState.questions[appState.currentQuestion].category);

            // Atino a las otras respuestas para que la correcta prevalezca más
        } else {
            $(this).addClass('dim-answer');
        }
    });

    // Agregue un indicador de barra de progreso a nuestro objeto appState
    appState.progress.progressBar.push(`<div class="progress-indicator ${correct}"></div>`);

    // Actualizar nuestro porcentaje correcto (analizar un flotante y configurarlo en un porcentaje fijo)
    appState.percCorrect = parseFloat(appState.correctAnswers / (appState.currentQuestion + 1) * 100).toFixed();

    // actualice nuestra pregunta actual VS la duración total del cuestionario
    $('.progress-count').html(`
		${appState.currentQuestion + 1} / ${appState.questions.length}
	`);

    // Actualizar nuestro porcentaje correcto actual
    $('.progress-perc').html(`
		 // ${(appState.percCorrect)}% Correct
	`)

    // Cambiar enviar volver para continuar
    $('.submit-btn')
        .val("Continue")
        .removeClass('submit-btn')
        .addClass('continue-btn')

    // Deshabilitar la selección de respuestas
    $('.answer-btn').prop("disabled", true);

    // Actualiza nuestra barra de progreso DOM
    helpers.updateProgressBar(appState);

    // continua la siguiente pregunta
    appState.currentQuestion++;

    // Verificar si hemos terminado o no
    if (appState.currentQuestion === appState.questions.length) {
        appState.completed = true;
    }

}

// Por querer tirar la toalla saldra este,...
function killQuiz() {
    $('.start-quiz, .quit-quiz').hide();
    let failureMsg = "Si vas a tirar la toalla que sea porque ya te secaste la frente para seguir luchando.."
    let msgSplit = failureMsg.split(" ");
    let counter = 0;
    $('.question').empty();
    let startTroll = setInterval(function () {
        $('.question').append(msgSplit[counter] + " ");
        counter++;
        if (counter > msgSplit.length - 1) {
            clearInterval(startTroll);
            $('.start-quiz').text('No te rindas, Tu puedes! Empezar Test').fadeIn(500);
        }
    }, 250);
}

// These are simple algorithms to modify data that don't need an individual function
let helpers = {
    // Pick a random question from the available ones
    pickRandomQ: function (obj, section) {
        return Math.floor(Math.random() * obj.questions[section].length);
    },
    // Gather a random question from every category
    getRandomQuestions: function (obj) {
        let questions = [];
        let categories = Object.keys(obj.questions);
        categories.forEach((cat) => {
            let randomQ = this.pickRandomQ(obj, cat);
            let question = obj.questions[cat][randomQ];
            question.category = cat;
            questions.push(question);
        });
        return questions;
    },
    // Shuffle the answers so they don't appear in the same order
    shuffleAnswers: function (arr) {
        for (var i = arr.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    },
    // Update progress bar DOM element
    updateProgressBar: function (appState) {
        $('.progress-bar').empty();
        appState.progress.progressBar.forEach((progInd => {
            $('.progress-bar').append(progInd);
        }))
    }
}

// Lets start the show
$(function () {

    // Kill any form refresh
    $('.answer-wrapper').on('submit', function (e) {
        e.preventDefault();
    });

    // Storage for quiz app state
    let quizData;

    // Start quiz
    $('.start-quiz, .retry-btn').on('click', function () {
        quizData = makeQuiz();
        $fade(quizData);
    });

    // Select an answer
    $('.question-answer-wrapper').on('click', '.answer-btn', function () {
        selectAnswer($(this));
    })

    // Submit your answer to display feedback and advance question counter
    $('.question-answer-wrapper').on('click', '.submit-btn', function (e) {
        submitAnswer(quizData);
    });

    // Submit your answer to display feedback and advance question counter
    $('.question-answer-wrapper').on('click', '.continue-btn', function () {
        $fade(quizData);
    });

    // Easter egg to chastize the user
    $('.quit-quiz').on('click', function () {
        killQuiz();
    })
})
