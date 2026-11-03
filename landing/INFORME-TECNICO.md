# Startupia — Implementación Editorial Tech Minimalism

Fecha: 3 de noviembre de 2026. Alcance: web comercial de Startupia.

## 1. Alcance ejecutado y preservación

Se continuó el sitio existente `appgprj_6ad93dcdee048191b64b55f0c6e87507`. No se creó otro proyecto ni se sustituyó su arquitectura de alojamiento. El punto de recuperación anterior a este trabajo es el commit `fd8d598685b48fad4fc532037a66cea8e47200df`, conservado en el historial del repositorio de Sites. La publicación anterior era la versión 15.

La instrucción más reciente limita este trabajo a la página comercial. Por ello no se modificaron las rutas, los componentes, los datos, las migraciones, los servicios ni la lógica de Startupia OS, acceso, onboarding o administración. La escena de OS incluida en la landing explica el producto mediante un caso ilustrativo; no constituye un nuevo software. La prueba existente `journey.test.mjs` se ajustó únicamente para reconocer el eslogan con marcado tipográfico y comprobar el precio comercial vigente de la landing.

El archivo adjunto `Startupia (4)(1).html` es una redirección de 520 bytes. Se utilizó el código real de `experience/landing.html`, recuperado y sincronizado desde el proyecto existente, como origen de la intervención. No se trató la redirección como si fuera el código completo.

Referencias obligatorias leídas: «STARTUPIA — Strategic Redesign & Engineering» y la definición integral del negocio suministrada en esta conversación. Las instrucciones específicas de esta entrega prevalecen sobre versiones anteriores de precios o alcance.

## 2. Contenido comercial protegido

| Elemento | Implementación |
| --- | --- |
| Eslogan | «Piensa en grande. Empieza inteligente.» |
| Diferencial | «Cambia de herramienta. Conserva el contexto.» |
| Build | USD 17 por mes |
| Growth | USD 37 por mes |
| Mentors | USD 197 por hora; servicio independiente de OS |
| Disponibilidad de mentorías | Se confirma antes del pago; no se inventan perfiles ni cupos |
| Operators | Benchmarking, entrevistas, análisis comercial y seguimiento de objetivos |
| MVP Creator | Definición, diseño y desarrollo del producto mínimo viable, según el documento vigente |
| Copiloto | Orientación con el contexto registrado de la startup |
| Manager | Proyectos, tareas, documentos y objetivos |
| Digital Creator | Apps, SaaS, webs, tiendas, interfaces, código, datos y personalización con IA |
| Límites de IA | Capacidad limitada o ampliada; no se inventan cuotas ni se promete uso ilimitado |
| Academy | Fuera de la landing comercial del MVP |

La redacción editorial reduce repeticiones, conserva los hechos aprobados y diferencia las capacidades de producto de la demostración visual de esta página. No se incorporaron testimonios, nombres de clientes, resultados comerciales, cifras de usuarios o certificaciones inventadas.

## 3. Decisiones implementadas

| Componente anterior | Decisión | Resultado |
| --- | --- | --- |
| Hero y eslogan | Mantener y mejorar | Tipografía monumental en dos líneas, aparición por máscaras, identidad original y composición espacial |
| Pathfinder | Mantener y destacar | CTA principal, ocho dimensiones y análisis completo descargable |
| Cuatro estadísticas extensas | Reducir y verificar | Dos cifras complementarias, una fuente primaria y la base del estudio visible |
| Comparación sin/con sistema | Transformar | Notas dispersas que se ordenan mediante un control explícito |
| Mapa y carrusel de módulos | Fusionar | Cinco herramientas, un documento común y selección por pestañas |
| Recorrido, guía y tablero | Fusionar | Un único caso con investigación, alcance de MVP y planificación |
| Digital Creator | Mejorar y destacar | Tres estados visuales, nombre editable y vista de escritorio/móvil |
| Mentors | Simplificar | Propuesta independiente, precio y tres retos para contrastar perspectivas |
| Academy | Retirar del MVP comercial | Sin oferta disponible en la landing |
| Build/Growth | Mejorar | Comparación directa, matriz ampliable y precios oficiales |
| Asistente local y FAQ | Fusionar | FAQ breve, sin dos superficies de ayuda que repitan el mismo argumento |
| Catálogos acumulados de efectos | Sustituir en la landing | Movimiento concentrado y reutilizable, sin cifras artificiales de animaciones |

La simplificación afecta al documento servido por la landing. El historial conserva la versión anterior, sus activos y la lógica original para recuperación y trazabilidad.

## 4. Arquitectura de la página

El Worker existente continúa sirviendo `experience/landing.html` en `/` y `/landing`. No fue necesario modificar `worker/index.ts`.

Archivos operativos:

- `experience/landing.html`: estructura semántica, contenido, SVG propios y diálogos.
- `public/landing/landing.css`: tokens, retícula, componentes, composición 3D y responsive.
- `public/landing/landing.js`: navegación local, pestañas, escenas, movimiento y presentación del diagnóstico.
- `public/landing/diagnostic.js`: motor de evidencia recuperado de la landing anterior.
- `public/landing/assets/`: isotipo de vidrio original, fuentes locales y sus licencias.
- `scripts/verify-editorial-landing.mjs`: verificación comercial, de estructura, recursos, scripts y combinaciones del diagnóstico.
- `scripts/export-editorial.mjs`: exportación reproducible a HTML/CSS/JS y generación del ZIP.
- `exports/landing/`: web portable con recursos locales, documentación y una versión HTML autocontenida.

No se añadieron paquetes al proyecto. La landing no requiere React, un motor WebGL, librerías de animación ni solicitudes a proveedores de IA para representar estas experiencias. Se conserva el alojamiento Vinext/Workers del sitio existente porque contiene otras rutas fuera del alcance de esta intervención.

## 5. Sistema visual

Paleta principal: azul `#09162B`, blanco `#FFFFFF`, superficie `#F3F5F7`, acento `#2463EB` y texto `#161A20`. Las variaciones oscuras se reservan a escenas profundas y las superficies grises a demostraciones de producto. Los degradados se limitan a material esférico, transiciones ambientales y profundidad puntual.

Space Grotesk organiza titulares y cifras; Inter sostiene texto y controles. Ambas se sirven localmente con `font-display: swap`. Se reutilizan los archivos y licencias existentes. El isotipo original de vidrio se conserva sin recortarlo ni modificar su proporción. Los símbolos de interfaz forman un conjunto SVG con trazo uniforme; no se usan emojis como iconos.

La retícula máxima es de 1440 px. Los márgenes pasan de 56 a 32, 24 y 20 px según el ancho. Los radios principales son de 7–10 px. Las superficies complejas tienen un único contenedor y una jerarquía clara; se evita convertir cada frase en otra tarjeta.

Las ocho áreas son hero, problema, ecosistema, OS en acción, Digital Creator, Mentors, planes y cierre/FAQ. La alternancia de azul y blanco distingue capítulos. La extensión de cada bloque responde a una demostración o decisión concreta.

## 6. Las tres experiencias emblemáticas

### Hero: identidad en movimiento

El eslogan aparece por líneas mediante máscaras con una entrada inferior a dos segundos. El isotipo original se sitúa entre órbitas discretas y coordenadas editoriales. El desplazamiento controla su orientación y una capa ambiental de salida. El ajuste final mantiene el objeto separado del eslogan y evita que el material de cristal interfiera con su lectura.

La profundidad se produce con CSS y un recurso raster existente; no se presenta como un render WebGL en tiempo real. En móvil el objeto ocupa su propia área debajo de la propuesta y el CTA.

### Ecosistema: conservar el contexto

Cinco pestañas muestran las herramientas alrededor de un mismo caso, Nova Studio. La idea y el cliente permanecen visibles; cambia la aportación de la herramienta activa. El resultado se actualiza con `textContent`, acompañado de un cambio breve de opacidad y posición. El documento conserva una leve perspectiva y la etiqueta de herramienta conecta visualmente el contexto con la acción.

Nova Studio es un ejemplo de presentación. Sus preguntas, tareas y decisiones no se atribuyen a clientes reales ni a un agente ejecutándose en la página.

### Digital Creator: de estructura a producto

La escena ofrece tres estados: intención, estructura y producto. El mismo objeto visual pasa de plano de líneas a una interfaz clara; las plataformas y la esfera construidas en CSS adquieren material, color y profundidad. Cambiar el nombre actualiza la demostración sin interpretar HTML. Dos controles permiten examinar el formato de escritorio y móvil.

La escena se identifica como demostración visual interactiva. No representa una generación ni una publicación realizada por IA. La descripción comercial del producto procede del documento de negocio; el alcance de esta entrega es su presentación web.

## 7. Movimiento, interacción y accesibilidad

| Familia | Uso | Control |
| --- | --- | --- |
| Máscara de texto | Entrada del eslogan | Una entrada; sin bucle |
| Profundidad | Isotipo, documento y demostración | Transformaciones acotadas |
| Scroll reveal | Titulares y escenas | IntersectionObserver; se observa cada bloque hasta su primera entrada |
| Ambiente cromático | Salida de hero y superficie del problema | Interpolación vinculada al scroll |
| Transición de contenido | Herramientas y perspectivas | Web Animations API; duración breve |
| Transformación de producto | Blueprint → estructura → interfaz | Control explícito de tres pestañas |
| Microinteracción | Flechas, botones y enlaces | Hover, foco y pulsación |
| Progreso | Lectura de página | Una actualización por frame solicitado por scroll |

No se secuestra la rueda, el gesto táctil ni el scroll. No hay temporizadores que reproduzcan escenas indefinidamente, vídeos automáticos ni dependencias de GPU pesada. El manejador de scroll es pasivo; `requestAnimationFrame` agrupa las actualizaciones. No se ejecuta un render continuo cuando la página está quieta.

Se atiende `prefers-reduced-motion` y existe un control manual en el pie. Este modo elimina animaciones y transiciones y muestra todo el contenido. Las preferencias no se guardan en almacenamiento del navegador. El contenido base permanece legible si JavaScript está desactivado; las interacciones dependen de JavaScript.

La página incluye idioma español, un H1, regiones con nombre, salto al contenido, foco visible, botones semánticos, pestañas con selección y foco móvil, flechas/Home/End y diálogos nativos. Los iconos decorativos se ocultan a lectores de pantalla. El diagnóstico enfoca el título de cada paso; cerrar devuelve el foco a su activador. El menú móvil admite Escape y cierre al seleccionar un enlace. Los controles táctiles se ampliaron en la revisión móvil.

Estas comprobaciones no equivalen a una certificación WCAG completa ni a una prueba de todos los lectores de pantalla.

## 8. Pathfinder conservado y corregido

Se reutiliza el motor de ocho dimensiones de evidencia con cuatro niveles por dimensión: problema, cliente, investigación, demanda, diferenciación, economía, alcance y recursos. Esto produce 65.536 perfiles combinatorios. Las diferencias comprobadas corresponden al contenido de las interpretaciones, acciones y criterios de cada dimensión, no solo a un identificador de perfil.

El informe muestra tres prioridades, las ocho dimensiones, contradicciones posibles, criterios observables y una ruta de cuatro semanas. No asigna una probabilidad de éxito. El análisis se calcula en memoria; no requiere correo y no envía las respuestas a un servidor.

La recomendación posterior considera prioridad, intensidad de trabajo, apoyo y presupuesto. Elegir USD 17 no produce una recomendación de Growth. El presupuesto cero permite continuar con pruebas gratuitas. La recomendación de mentoría utiliza el precio oficial y no promete una llamada gratuita no confirmada.

El archivo TXT descargado en la prueba de navegador se verificó como no vacío: 4154 bytes con datos sintéticos. Incluye análisis, prioridades, tensiones y ruta; no se creó una cuenta ni un registro empresarial a partir de esa prueba.

## 9. Evidencia y referencias

La landing conserva dos cifras de CB Insights, publicación del 5 de marzo de 2026: mal ajuste producto–mercado en el 43 % y falta de capital en el 70 % de los cierres con causas identificadas. La base son 385 compañías financiadas que cerraron; el informe identifica 431 cierres desde 2023, pero no dispone de causas clasificables para todos. Las causas se superponen. No se transforma esta muestra en una tasa universal de fracaso ni en una predicción individual.

Fuente primaria: https://www.cbinsights.com/research/report/startup-failure-reasons-top/

Verificación durante esta entrega: resultados indexados del sitio oficial con fecha, base y cifras. La página comercial enlaza directamente al estudio y mantiene la explicación de su alcance a la vista.

Referencias creativas consultadas mediante recuperación web: https://unitedcarriers.com/ y https://wearebrand.io/. Se trasladan principios de escala editorial, composición, relato y profundidad, sin reutilizar imágenes, código ni activos de esas empresas. https://pear.no/pero no fue accesible mediante la herramienta de recuperación; no se le atribuyen características no observadas.

## 10. Pruebas y resultados

| Verificación | Resultado |
| --- | --- |
| Sintaxis de los dos scripts de landing | Aprobada con Node |
| Perfiles de diagnóstico | 65.536 analizados; firmas de contenido distintas |
| Recomendaciones de plan | 196.608 casos revisados |
| Entradas inválidas del motor | Rechazadas |
| Precios, anclas, IDs y activos | Verificados automáticamente |
| Rutas de aplicación desde la landing | Sin navegación añadida a otras pantallas |
| Regresión del proyecto existente | 16 suites y TypeScript aprobados |
| Responsive | Marcos de 320, 375, 768, 1024 y 1440 px en Chrome |
| Desbordamiento | Anchos de documento 305, 360, 753, 1009 y 1425 px respectivamente; iguales al área útil tras la barra de desplazamiento |
| Hero en móvil estrecho | Dos líneas, sin recorte lateral del eslogan |
| Menú móvil | Apertura y navegación comprobadas |
| Ecosistema | Cinco herramientas actualizan el panel y su selección |
| Recorrido OS ilustrativo | Tres estados comprobados |
| Mentorías | Tres perspectivas actualizan pregunta y orientación |
| Comparación | Ordenación visual y texto cambian correctamente |
| Digital Creator | Tres fases, formato móvil y nombre editable comprobados |
| Seguridad del nombre editable | `A & B <Studio>` permanece como texto; no crea elementos |
| Diagnóstico en navegador | Ocho respuestas → informe → descarga → recomendación |
| Precio según presupuesto | Build USD 17 y Growth USD 37 comprobados |
| Movimiento reducido | Clase y control manual comprobados; pestañas siguen operativas |
| Teclado | Flecha derecha entre fases de Creator comprobada |
| Descarga TXT | Archivo real, 4154 bytes, verificado en disco |

Las 16 suites existentes incluyen dobles de proveedores y pruebas de contratos del software preservado. No se presentan como pruebas en vivo de APIs, autenticación comercial o cobros. Su utilidad aquí es detectar regresiones; no amplían el alcance acordado para la landing.

El documento HTML anterior pesaba 2.462.367 bytes por sí solo. El conjunto nuevo de HTML, CSS, JavaScript, todas las fuentes locales, imágenes y licencias ronda 0,55 MB sin comprimir. Esta comparación mide bytes de archivos, no una puntuación de rendimiento. Los recursos repetidos pueden almacenarse por separado en caché.

No se ejecutó Lighthouse ni se obtuvo un registro de Core Web Vitals de usuarios reales. Tampoco se declara validación física de Safari, Firefox, iOS o Android. La comprobación responsive usa viewports embebidos de Chrome; no sustituye una matriz de dispositivos reales. Estos son los límites de verificación pendientes.

## 11. Exportación y mantenimiento

Ejecutar `node scripts/verify-editorial-landing.mjs` para comprobar la landing y el motor conservado. Ejecutar `node scripts/check-quality.mjs` para las suites del repositorio y TypeScript. La compilación de producción se realiza mediante el helper oficial de Sites.

`node scripts/export-editorial.mjs` produce:

- `exports/landing/index.html`, `landing.css`, `landing.js` y `diagnostic.js`.
- Los activos y licencias necesarios para esa web.
- `exports/landing/Startupia-autocontenido.html`, que incorpora estilos, scripts, fuentes e imágenes para abrirlo de forma independiente.
- Documentación técnica e informe de correcciones.
- `exports/Startupia-web.zip` con todo lo necesario para la web comercial.

La estructura exportada se incorpora al repositorio GitHub autorizado `rafaelmellov/startupia`, conservando su contenido anterior. La versión completa del alojamiento sigue conservando su historial en el repositorio administrado por Sites. No se incluyen credenciales, archivos de entorno ni datos de clientes en la exportación.

Para revertir la publicación, seleccionar la versión anterior en Sites. Para recuperar únicamente el diseño anterior, restaurar `experience/landing.html` desde el commit de preservación. No se necesita revertir migraciones de datos porque esta entrega no añade ninguna.
