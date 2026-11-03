/* Startupia diagnostic: 8 independent four-level evidence dimensions = 65,536 profiles.
   This is a transparent, local decision framework, not a demand prediction model. */
const StartupiaDiagnostic = (() => {
'use strict';
const dimensions = [
 {key:'pain',name:'Urgencia del problema',question:'¿Qué sabes del problema que quieres resolver?',tool:'Operators · Entrevistas',options:[
 ['Es una intuición mía','Todavía no he observado el problema en clientes.','La hipótesis nace de tu perspectiva. Aún falta comprobar si otras personas viven esa dificultad, con qué frecuencia y con qué consecuencias.','Habla con cinco personas del segmento. Pide que describan la última vez que vivieron el problema, sin presentar tu solución.','Registra cinco episodios reales, su frecuencia y la alternativa utilizada.'],
 ['Me dicen que sería útil','He recibido opiniones favorables.','Una opinión amable puede indicar interés, pero no demuestra urgencia. Distingue lo que las personas dicen de lo que hacen cuando aparece el problema.','Solicita ejemplos recientes, tiempo perdido y dinero gastado. Descarta elogios sin una conducta que los respalde.','Compara episodios y consecuencias en cinco entrevistas.'],
 ['Lo viven con frecuencia','Tengo ejemplos concretos y repetidos.','Los episodios repetidos ofrecen una base para investigar. Falta saber qué segmento sufre más y qué consecuencia justificaría cambiar de solución.','Agrupa los episodios por cliente y elige el grupo con la consecuencia más clara y frecuente.','Identifica un patrón repetido en al menos tres entrevistas.'],
 ['Ya invierten en resolverlo','Dedican dinero o esfuerzo a una alternativa.','El esfuerzo invertido en alternativas es una señal de relevancia. No demuestra que cambiarán a tu oferta: el coste de cambiar también cuenta.','Documenta la alternativa actual y propone una prueba que mejore un resultado concreto.','Registra gasto actual, fricción de cambio y aceptación de la prueba.']
 ]},
 {key:'audience',name:'Precisión del cliente',question:'¿Qué tan definido tienes a tu primer cliente?',tool:'MVP Creator · Nicho',options:[
 ['Casi cualquier persona','Mi público todavía es muy amplio.','Un público universal dificulta encontrar patrones y diseñar una oferta convincente. La primera prueba necesita un grupo delimitado.','Elige una ocupación o situación, un problema y una forma concreta de contactar a esas personas.','Redacta un segmento y una lista de diez contactos potenciales.'],
 ['Un sector general','Sé la industria, pero no el perfil concreto.','El sector ofrece dirección, pero dentro de él pueden existir compradores con problemas y presupuestos muy distintos.','Separa usuario y comprador. Elige un rol, un tamaño de organización y un momento de necesidad.','Identifica quién usa, quién decide y quién paga.'],
 ['Un segmento específico','Conozco su contexto y quién decide.','El segmento ya permite una prueba enfocada. Comprueba que los contactos realmente comparten la necesidad, sin agruparlos solo por datos demográficos.','Recluta cinco personas que cumplan los mismos criterios y compara sus conductas.','Registra criterios de inclusión y diferencias entre respuestas.'],
 ['Un nicho al que ya accedo','Puedo contactar a compradores concretos.','El acceso al nicho facilita aprender con rapidez. Aun así, una red cercana puede introducir sesgos de cortesía o representar solo una parte del mercado.','Añade contactos fuera de tu círculo y contrasta sus respuestas con las de tu red.','Compara las señales de contactos cercanos y nuevos.']
 ]},
 {key:'evidence',name:'Calidad de la investigación',question:'¿Qué investigación directa has realizado?',tool:'Operators · Investigación',options:[
 ['Ninguna todavía','He trabajado principalmente desde mi idea.','La información actual no permite distinguir una necesidad recurrente de una suposición. La prioridad es aprender antes de ampliar el producto.','Prepara entrevistas neutrales y registra respuestas literales, contexto y fecha.','Completa cinco entrevistas con personas del nicho.'],
 ['Conversaciones informales','Sin un guion ni registros comparables.','Las conversaciones aportan pistas, aunque sin registros pueden favorecer el recuerdo de las respuestas más optimistas.','Usa el mismo guion abierto con nuevos participantes y separa observaciones de interpretaciones.','Crea una tabla de episodios, alternativas y objeciones.'],
 ['Entrevistas documentadas','Puedo comparar patrones y objeciones.','La investigación registrada permite contrastar hipótesis. El siguiente paso es comprobar si las conductas se sostienen cuando haces una oferta.','Convierte el patrón principal en una hipótesis y prueba una oferta concreta.','Define de antemano qué conducta apoyaría o refutaría la hipótesis.'],
 ['Experimentos comparables','Tengo resultados y criterios documentados.','Los experimentos son una base más sólida si las muestras, las condiciones y los criterios están claros. Revisa sesgos y resultados que contradigan la idea.','Repite la prueba con un grupo nuevo o una condición distinta antes de generalizar.','Compara resultados, tamaño de muestra y limitaciones.']
 ]},
 {key:'demand',name:'Señales de demanda',question:'¿Qué han hecho las personas frente a tu oferta?',tool:'MVP Creator · Validación',options:[
 ['Todavía no la he ofrecido','No he probado una propuesta concreta.','Aún no existe una señal conductual de demanda. Una idea bien descrita sigue siendo una hipótesis hasta que el cliente actúa.','Presenta una oferta pequeña con un siguiente paso explícito: una conversación de prueba o un piloto.','Mide cuántas personas aceptan el siguiente paso y por qué rechazan.'],
 ['Me gusta / lista de espera','Han mostrado interés, sin usar ni pagar.','El interés inicial es útil para reclutar, pero no equivale a uso ni compra. La fricción del siguiente paso puede cambiar la respuesta.','Invita a esas personas a una prueba concreta con fecha, alcance y compromiso claro.','Registra invitados, aceptaciones y participación real.'],
 ['Prueban o piden un piloto','Existe uso inicial, todavía sin repetición.','Probar la solución es una señal más fuerte que elogiarla. Falta demostrar un resultado útil, repetición y disposición de pago.','Observa una tarea completa y acuerda una fecha para revisar el resultado y la oferta pagada.','Mide activación, resultado logrado y regreso a la solución.'],
 ['Pagan y regresan','Tengo compras y señales de uso repetido.','Pago y repetición son señales importantes, pero por sí solos no prueban un ajuste sostenible con el mercado. Revisa margen, cohortes y dependencia de pocos clientes.','Analiza por segmento quién repite, quién abandona y cuánto cuesta atenderlo.','Registra retención por cohorte, margen y concentración de ingresos.']
 ]},
 {key:'difference',name:'Ventaja frente a alternativas',question:'¿Por qué te elegirían frente a lo que usan hoy?',tool:'Operators · Benchmarking',options:[
 ['No he comparado alternativas','No sé bien cómo resuelven esto hoy.','Sin entender las alternativas es fácil competir contra un problema imaginario. Hacerlo manualmente o no hacer nada también son competidores.','Compara tres alternativas incluyendo la solución manual y el statu quo.','Anota resultado, coste, fricción y motivo para cambiar.'],
 ['Por tener más funciones','Mi ventaja se basa en cantidad o tecnología.','Más funciones no garantizan un beneficio relevante. Una herramienta más compleja también puede exigir más aprendizaje.','Elige un resultado específico y explica por qué lo entregarías con menos esfuerzo o coste.','Contrasta ese beneficio con cinco compradores del segmento.'],
 ['Por un beneficio concreto','Puedo explicar una diferencia relevante.','Una diferencia clara merece una prueba. Aún falta saber si importa lo suficiente para vencer la inercia de la alternativa actual.','Compara dos mensajes sobre el mismo beneficio sin cambiar simultáneamente precio y público.','Registra comprensión, objeciones y siguiente acción.'],
 ['Clientes explican por qué cambian','Tengo motivos de elección documentados.','Los motivos expresados por clientes ayudan a enfocar la oferta. Comprueba que se repiten fuera de casos excepcionales y que puedes sostener la ventaja.','Contrasta motivos de compra y de abandono con clientes recientes.','Agrupa motivos repetidos y costes necesarios para mantener la ventaja.']
 ]},
 {key:'economics',name:'Viabilidad comercial',question:'¿Qué conoces del precio y el coste de servir al cliente?',tool:'Operators · Análisis comercial',options:[
 ['No los he calculado','Precio y costes todavía son suposiciones.','Sin una aproximación a ingresos y costes, vender más podría aumentar las pérdidas. Necesitas un escenario sencillo, no una proyección inflada.','Estima precio, coste variable y tiempo de atención por cliente. Separa datos observados y supuestos.','Calcula margen por cliente en un escenario prudente.'],
 ['Tengo estimaciones','Aún no las he contrastado con ventas.','Las estimaciones permiten orientar una prueba, pero no demuestran rentabilidad. Comprueba las partidas que más cambian el margen.','Prueba la oferta con precio explícito y registra el coste real de entregar el piloto.','Compara margen estimado y observado en cada piloto.'],
 ['Tengo ventas y costes medidos','Todavía no sé si se repiten a escala.','Las ventas aportan datos útiles. Revisa descuentos, horas del fundador y costes de adquisición que pueden estar ocultos.','Calcula margen de contribución y coste de captar un cliente sin omitir trabajo manual.','Registra margen, adquisición y repetición por canal.'],
 ['Mido margen y adquisición','Conozco sus variaciones por segmento.','Un seguimiento regular ayuda a decidir dónde crecer. Comprueba que la adquisición y el margen se mantienen al ampliar el volumen.','Define límites de coste y margen que detengan una campaña si deja de funcionar.','Revisa cohortes y escenarios de sensibilidad antes de aumentar gasto.']
 ]},
 {key:'scope',name:'Alcance y ejecución',question:'¿Qué tan pequeño y ejecutable es tu primer producto?',tool:'MVP Creator + Startup Manager',options:[
 ['Quiero construirlo todo','Tengo muchas funciones y ninguna prueba.','Un alcance amplio alarga el tiempo hasta aprender. Primero necesitas una prueba que responda la pregunta más arriesgada.','Reduce la propuesta a un problema, una persona y una tarea. Prueba un servicio manual si es suficiente.','Define un experimento ejecutable esta semana.'],
 ['Tengo una lista de prioridades','Aún no he recortado lo que no es esencial.','Ordenar funciones ayuda, pero una lista larga puede seguir escondiendo varias hipótesis. El MVP debe tener una sola pregunta central.','Clasifica cada función según si es imprescindible para probar esa hipótesis. Pospón el resto.','Escribe qué aprenderás y qué quedará fuera.'],
 ['Un MVP acotado','Tiene objetivo, responsable y fecha.','El alcance parece ejecutable según lo declarado. Asegúrate de que la fecha incluya contacto con clientes y revisión de resultados.','Define criterio de aprendizaje y prepara reclutamiento antes de terminar la construcción.','Completa una prueba de extremo a extremo y registra lo aprendido.'],
 ['Ya entrego y mejoro con datos','Cada iteración responde a aprendizajes.','El ciclo de entrega y aprendizaje es una fortaleza si las mejoras cambian resultados relevantes. Evita confundir actividad con progreso.','Prioriza la limitación más importante y cambia una variable por iteración.','Vincula cada tarea con un resultado observado.']
 ]},
 {key:'runway',name:'Capacidad para aprender',question:'¿Cuánto margen tienes para probar sin comprometer tus obligaciones?',tool:'Startup Manager · Objetivos',options:[
 ['Muy poco y sin presupuesto claro','Necesito limitar al máximo el gasto.','Con recursos ajustados, la prueba debe proteger tus obligaciones. No comprometas dinero esencial para construir antes de recoger señales.','Fija un límite de dinero y horas. Usa entrevistas, una oferta manual y herramientas disponibles.','Registra el gasto máximo que puedes asumir sin afectar necesidades básicas.'],
 ['Un límite pequeño definido','Puedo dedicar algunas horas y dinero.','Tener límites permite diseñar una prueba viable. Evita consumir el presupuesto en apariencia o funciones que no cambien la decisión.','Asigna el presupuesto a la hipótesis principal y reserva tiempo para revisar resultados.','Define fecha de revisión y regla para detener o modificar la prueba.'],
 ['Recursos para varias pruebas','Puedo aprender e iterar con orden.','Contar con margen ayuda si cada prueba reduce una incertidumbre. Gastar más no compensa una hipótesis mal formulada.','Distribuye recursos entre tres pruebas secuenciales y condiciona la siguiente al aprendizaje anterior.','Revisa tiempo, gasto y evidencia antes de cada nueva inversión.'],
 ['Un presupuesto y seguimiento regular','Reviso caja, tiempo y decisiones.','El seguimiento de recursos apoya una ejecución sostenible. Mantén escenarios prudentes y evita que el presupuesto disponible dicte el tamaño del producto.','Revisa caja y capacidad junto a retención y margen antes de ampliar equipo o adquisición.','Establece un umbral de gasto y una reserva para escenarios adversos.']
 ]}
];
function valid(a){return dimensions.every(d=>Number.isInteger(a?.[d.key])&&a[d.key]>=0&&a[d.key]<4)}
function analyze(a){
 if(!valid(a))throw new Error('Completa las ocho dimensiones del diagnóstico.');
 const profile=dimensions.map(d=>a[d.key]).join('');
 const checks=dimensions.map((d,i)=>({key:d.key,name:d.name,level:a[d.key],label:d.options[a[d.key]][0],interpretation:d.options[a[d.key]][2],action:d.options[a[d.key]][3],metric:d.options[a[d.key]][4],tool:d.tool,order:i}));
 const gaps=checks.filter(d=>d.level<2).sort((x,y)=>x.level-y.level||x.order-y.order);
 let priorities=[...checks].sort((x,y)=>x.level-y.level||x.order-y.order).slice(0,3);
 const tensions=[];
 if(a.demand>=2&&a.evidence===0)tensions.push('Declaras pruebas o ventas sin investigación registrada. Conserva esa señal, pero documenta quién compró, por qué y en qué condiciones antes de generalizar.');
 if(a.demand>=2&&a.audience<2)tensions.push('Hay señales de uso, pero el cliente sigue siendo amplio. Segmenta los resultados: el promedio puede ocultar un nicho que sí responde.');
 if(a.pain<2&&a.scope>=2)tensions.push('El producto está más avanzado que la evidencia del problema. Pausa nuevas funciones y observa si resuelve una dificultad real y recurrente.');
 if(a.demand<2&&a.economics>=2)tensions.push('Has indicado ventas o métricas económicas, pero pocas señales frente a la oferta. Revisa si ambos datos corresponden al mismo producto y periodo.');
 if(a.demand===3&&a.economics<2)tensions.push('Que el cliente pague no significa que cada venta sea sostenible. Verifica el coste completo de servirlo antes de aumentar adquisición.');
 if(a.scope<2&&a.runway<2)tensions.push('Un alcance amplio y recursos limitados elevan el riesgo de agotar tiempo y caja antes de aprender. Prueba una entrega manual con un límite explícito.');
 if(a.difference<2&&a.demand<2)tensions.push('Todavía falta comprobar tanto el interés como la razón para elegirte. Contrasta la propuesta con la alternativa que el cliente utiliza hoy.');
 if(a.evidence>=2&&a.demand<2)tensions.push('Las entrevistas ya aportan contexto. La siguiente incógnita se resuelve con una oferta y una conducta observable, no solo con más opiniones.');
 if(a.runway===0)tensions.push('Prioriza pruebas gratuitas o de coste mínimo. Contratar herramientas o mentorías es opcional y debe respetar tu capacidad de gasto.');
 if(!tensions.length)tensions.push('No aparecen tensiones fuertes entre las respuestas. Contrasta igualmente lo declarado con registros y busca señales que puedan refutar tu hipótesis.');
 const band=a.pain<2||a.audience<2||a.evidence<1?0:a.demand<2?1:a.demand<3||a.economics<2?2:3;
 if(band===3)priorities=['demand','economics','scope'].map(k=>checks.find(c=>c.key===k));
 else if(a.demand<2&&!priorities.some(c=>c.key==='demand'))priorities[2]=checks.find(c=>c.key==='demand');
 const titles=['Tu idea necesita contacto con la realidad.','Hay una hipótesis que merece una prueba.','Hay señales iniciales. Comprueba que se sostienen.','Hay una base para mejorar con disciplina.'];
 const summaries=['Antes de invertir en desarrollo, concreta el cliente y demuestra que el problema aparece en su vida. Hoy la información declarada aún no basta para juzgar la demanda.','Tu planteamiento empieza a tomar forma. La pregunta decisiva es si un cliente actuará frente a una oferta concreta. Diseña esa prueba antes de ampliar el producto.','El uso o las primeras respuestas permiten aprender. Comprueba repetición, valor entregado y coste antes de tratar estas señales como un negocio sostenible.','Has declarado señales comerciales y seguimiento económico. Revisa retención, margen y capacidad de entrega antes de ampliar la inversión.'];
 return {profile,band,title:titles[band],summary:summaries[band],checks,gaps,priorities,tensions,signalCount:checks.filter(d=>d.level>=2).length,
 decision:band===0?'Investigar antes de construir':band===1?'Probar una oferta pequeña':band===2?'Medir valor y repetición':'Optimizar antes de escalar',
 next30:band<2?['Semana 1 · Entrevista al nicho y registra episodios reales.','Semana 2 · Presenta una oferta manual o un prototipo acotado.','Semana 3 · Observa la conducta y compara resultados con tu criterio inicial.','Semana 4 · Decide si repetir, modificar el segmento o detener la hipótesis.']:['Semana 1 · Revisa activación, retención y costes por segmento.','Semana 2 · Prueba una mejora sobre la principal limitación.','Semana 3 · Contrasta el resultado con una cohorte nueva.','Semana 4 · Amplía solo si los resultados y la capacidad lo respaldan.']};
}
function recommend(a,p){
 if(!valid(a))throw new Error('Primero completa el diagnóstico.');
 const budget=Number(p.budget), human=p.support==='human';
 if(![0,17,37].includes(budget))throw new Error('Selecciona tu presupuesto.');
 if(human)return {plan:'Mentors',name:'Startupia Mentors · USD 197/hora',reason:'Prefieres revisar una decisión con un especialista. Las mentorías son independientes de Startupia OS: USD 197/hora, previa confirmación de disponibilidad.',introCall:false};
 if(budget===0)return {plan:null,name:'Puedes empezar sin contratar nada.',reason:'Si ahora prefieres no gastar, empieza por las pruebas del diagnóstico. Puedes volver a los planes cuando tenga sentido para ti.',free:true};
 
 const readiness=a.demand>=2&&a.economics>=1;
 const growth=readiness&&(p.priority==='growth'||p.workload==='team'||p.workload==='intensive')&&budget>=37;
 const plan=growth?'Growth':'Build';
 let reason=growth?'Has declarado señales de uso y una necesidad de análisis o coordinación más intensa. Growth ofrece más capacidad de IA y gestión avanzada.':'Tus prioridades pueden abordarse con las herramientas esenciales para investigar, definir el MVP y organizar la ejecución. Build es el punto de partida de menor coste.';
 if(!readiness&&(p.priority==='growth'||p.workload==='intensive'))reason+=' El deseo de crecer todavía necesita más evidencia; no justifica por sí solo subir de plan.';
 if(p.support==='both')reason+=' Puedes complementar OS con una mentoría independiente cuando una decisión lo requiera; no está incluida en la suscripción.';

 if(budget===17)reason+=' Respeta tu límite declarado de USD 17/mes; no necesitas contratar Growth para continuar.';
 return {plan,name:'Startupia OS '+plan,reason,mentorOptional:human};
}
return {dimensions,valid,analyze,recommend,profileCount:4**8};
})();
if(typeof module!=='undefined')module.exports=StartupiaDiagnostic;
