# Startupia — Correcciones y verificación de la web

3 de noviembre de 2026. Alcance: landing comercial.

| Situación encontrada | Corrección aplicada | Verificación |
| --- | --- | --- |
| El HTML adjunto solo redirigía | Se trabajó sobre el código real del sitio existente | Repositorio sincronizado y ruta del Worker inspeccionada |
| Build aparecía a USD 9 en la landing | USD 17 en planes, comparación y recomendación | Prueba comercial y recorrido de navegador |
| El motor conservaba una llamada gratis no confirmada | Mentoría independiente a USD 197/hora | Caso de recomendación de apoyo humano |
| Carrusel, guía y tablero repetían el relato | Un solo recorrido visual de tres pasos | Tres estados comprobados |
| Asistente y FAQ repetían información | FAQ concentrada | Estructura semántica y enlaces locales revisados |
| Demasiadas estadísticas para explicar el problema | Dos cifras y contexto de muestra visible | Fuente oficial consultada y enlazada |
| Academy se mostraba en la oferta inicial | Retirada de la landing comercial | Comprobación automática de contenido |
| El isotipo podía interferir con el eslogan | Escena y tamaño reajustados | Revisión visual de escritorio y móvil |
| Palabras se unían al ocultar saltos de línea en móvil | Espacios semánticos antes de los saltos | Árbol accesible y captura móvil |
| Eslogan demasiado ancho en pantalla estrecha | Escala tipográfica fluida corregida | Dos líneas y ancho útil de 305 px |
| Un titular móvil generaba desbordamiento | Espaciado y tamaño revisados | Documento y viewport con el mismo ancho |
| Algunos objetivos táctiles eran pequeños | Controles móviles ampliados | Revisión de CSS responsive y navegación |
| El contenido del proyecto debía aceptar caracteres especiales | Actualización mediante `textContent` | `A & B <Studio>` no genera HTML |
| Una prueba antigua suponía USD 9 y texto sin marcado | Contrato actualizado al precio aprobado y texto normalizado | 16 suites y TypeScript aprobados |
| La exportación inicial alteraba símbolos de JavaScript al insertar scripts | Exportación mediante funciones de reemplazo y comprobación de sintaxis de cada script integrado | Error detectado en navegador y corregido antes de entregar |
| Documento HTML muy pesado y scripts acumulados | Estilos, scripts, fuentes y recursos separados | Conjunto de landing de aproximadamente 0,55 MB sin comprimir |

## Pruebas realizadas

- 65.536 perfiles distintos del diagnóstico y 196.608 recomendaciones de plan.
- Rechazo de respuestas inválidas; presupuesto cero, Build y Growth.
- Navegación y ajuste a 320, 375, 768, 1024 y 1440 px.
- Cinco herramientas del ecosistema, tres pasos de recorrido, tres fases de Creator y tres retos de Mentors.
- Cambio de perspectiva sin/con sistema, nombre de proyecto y formato móvil de la escena.
- Ocho preguntas del diagnóstico, informe completo, TXT descargado y recomendación según presupuesto.
- Reducción de movimiento y navegación por teclado entre fases de Creator.
- Enlaces internos, IDs únicos, precios, activos locales y sintaxis.
- 16 suites del repositorio preservado y TypeScript.

## Límites y pendientes de verificación

1. Lighthouse y métricas de campo de Core Web Vitals.
2. Safari y Firefox; dispositivos físicos iOS/Android.
3. Revisión especializada con lectores de pantalla y auditoría WCAG completa.
4. Estudios de comprensión y conversión con visitantes reales. No se declara un aumento de conversión sin medirlo.

No se identificaron fallos pendientes en los recorridos de landing comprobados. Esto no equivale a garantizar ausencia de errores en todos los navegadores o situaciones. Las funcionalidades del software y sus integraciones están fuera del alcance de esta entrega de diseño y se conservan en su estado anterior.
