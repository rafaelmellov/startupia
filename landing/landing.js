/* Startupia / Editorial Tech Minimalism.
   Landing presentation only. Existing application routes are untouched.
   Local diagnostic engine retained from the existing Startupia website. */
(() => {
'use strict';
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => [...r.querySelectorAll(s)];
const root=document.documentElement;
const prefersReduced=matchMedia('(prefers-reduced-motion: reduce)');
let manualReduced=false;
const reduced=()=>manualReduced||prefersReduced.matches;
const announce=text=>{$('#status-message').textContent=text};
function updateMotion(){
 root.classList.toggle('reduce-motion',reduced());
 root.classList.toggle('js-motion',!reduced());
 $('#motion-toggle').setAttribute('aria-pressed',String(reduced()));
 $('#motion-toggle').textContent=reduced()?'Activar movimiento':'Reducir movimiento';
 scheduleScroll();
}
const menu=$('#navigation'), menuButton=$('#menu-toggle');
function closeMenu(restore=false){menu.classList.remove('open');menuButton.setAttribute('aria-expanded','false');menuButton.setAttribute('aria-label','Abrir menú');if(restore)menuButton.focus()}
menuButton.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));menuButton.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú')});
$$('a',menu).forEach(a=>a.addEventListener('click',()=>closeMenu()));
document.addEventListener('click',e=>{if(!e.target.closest('#header'))closeMenu()});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('open'))closeMenu(true)});
$('#year').textContent=new Date().getFullYear();
$('#motion-toggle').addEventListener('click',()=>{manualReduced=!reduced();updateMotion()});
prefersReduced.addEventListener('change',updateMotion);
function animateContent(el){if(!reduced()&&el.animate)el.animate([{opacity:.35,transform:'translateY(7px)'},{opacity:1,transform:'none'}],{duration:450,easing:'cubic-bezier(.22,1,.36,1)'})}
function selectTab(selector,index,panel){$$(selector).forEach((b,n)=>{b.setAttribute('aria-selected',String(n===index));b.tabIndex=n===index?0:-1});if(panel)panel.setAttribute('aria-labelledby',$$(selector)[index].id)}
function tabKeys(group,selector){group.addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','ArrowDown','ArrowUp','Home','End'].includes(e.key))return;const tabs=$$(selector,group),current=tabs.indexOf(document.activeElement);if(current<0)return;e.preventDefault();const index=e.key==='Home'?0:e.key==='End'?tabs.length-1:(current+(['ArrowRight','ArrowDown'].includes(e.key)?1:-1)+tabs.length)%tabs.length;tabs[index].click();tabs[index].focus()})}
const comparison={without:['MUCHAS PESTAÑAS. NINGUNA PRIORIDAD.','¿Quién es mi cliente?','Otra lista de funciones','¿Por dónde empiezo?','Todo empieza de nuevo.'],with:['UN MISMO CONTEXTO. UNA DIRECCIÓN.','Un cliente concreto','Una función para probar','Tres acciones claras','Lo que aprendes se convierte en tu siguiente paso.']};
$$('[data-compare]').forEach(b=>b.addEventListener('click',()=>{const mode=b.dataset.compare,copy=comparison[mode];$('#comparison-scene').dataset.mode=mode;$$('[data-compare]').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));['comparison-status','note-one','note-two','note-three','comparison-result'].forEach((id,i)=>$('#'+id).textContent=copy[i]);announce(mode==='with'?'Comparación: con Startupia. Un cliente, una prueba y tres acciones.':'Comparación: sin un sistema. Información dispersa.')}));
const ecosystem=[
 {label:'OPERATORS / INVESTIGACIÓN',output:'¿Cómo reservan hoy?\n¿Qué les hace perder tiempo?',chip:'Preparar entrevistas',icon:'search',word:'INFORMACIÓN',description:'Investiga competidores, prepara entrevistas, analiza ventas y da seguimiento a tus objetivos. Datos e hipótesis, siempre diferenciados.'},
 {label:'MVP CREATOR / PRODUCTO MÍNIMO VIABLE',output:'Una búsqueda. Una disponibilidad.\nUna primera reserva.',chip:'Definir y construir el MVP',icon:'layers',word:'PLANIFICACIÓN',description:'Define, diseña y desarrolla el producto mínimo viable. Prioriza la función que permite comprobar tu hipótesis con clientes reales.'},
 {label:'COPILOTO DE IA / DECISIÓN',output:'Antes de ampliar funciones,\ncomprueba la primera reserva.',chip:'Orientación con contexto',icon:'spark',word:'INTELIGENCIA',description:'Tu idea, tus clientes, tus decisiones y tu progreso dan contexto a las respuestas. Pregunta sin tener que explicarlo todo de nuevo.'},
 {label:'STARTUP MANAGER / EJECUCIÓN',output:'Preparar cinco entrevistas.\nProbar una reserva. Registrar señales.',chip:'Organizar el siguiente paso',icon:'grid',word:'EJECUCIÓN',description:'Proyectos, tareas, documentos y objetivos en un mismo workspace. Conecta cada decisión con una acción y registra lo que aprendes.'},
 {label:'DIGITAL CREATOR / CONSTRUCCIÓN',output:'De la estructura de reservas\na una experiencia digital propia.',chip:'Crear el producto digital',icon:'code',word:'PRODUCTO',description:'Crea apps, SaaS, webs y tiendas online. Diseña interfaces, código y datos; personaliza con instrucciones y prepara el lanzamiento.'}
];
function setEco(index){const d=ecosystem[index];selectTab('[data-eco]',index,$('#eco-panel'));$('#eco-label').textContent=d.label;$('#eco-output').textContent=d.output;$('#eco-chip').textContent=d.chip;$('#eco-icon use').setAttribute('href','#i-'+d.icon);$('#eco-word').textContent=d.word;$('#eco-description').textContent=d.description;$$('.eco-progress i').forEach((x,n)=>x.style.background=n===index?'#8dabff':'#ffffff30');animateContent($('.active-entry'));animateContent($('.connected-chip'))}
$$('[data-eco]').forEach(b=>b.addEventListener('click',()=>setEco(Number(b.dataset.eco))));tabKeys($('.ecosystem-menu'),'[data-eco]');
const action=[
 {crumb:'Investigación',title:'Primero, escucha.',sub:'Una buena pregunta vale más que otra suposición.',html:'<div class="interview-line"><span>01</span><p>¿Cómo reservaste tu último estudio?</p><svg aria-hidden="true" class="icon"><use href="#i-check"/></svg></div><div class="interview-line"><span>02</span><p>¿Qué fue lo más difícil de ese proceso?</p><svg aria-hidden="true" class="icon"><use href="#i-check"/></svg></div><div class="interview-line"><span>03</span><p>¿Qué alternativa utilizas hoy?</p><svg aria-hidden="true" class="icon"><use href="#i-check"/></svg></div><div class="demo-insight"><svg aria-hidden="true" class="icon"><use href="#i-spark"/></svg><p>Registra experiencias reales.<br><strong>Separa lo que sabes de lo que supones.</strong></p></div>'},
 {crumb:'MVP Creator',title:'Construye para aprender.',sub:'Elige una función y una señal para probar su valor.',html:'<div class="scope-map"><div class="scope-block">Buscar un estudio</div><span>→</span><div class="scope-block">Consultar disponibilidad</div><span>→</span><div class="scope-block">Solicitar reserva</div></div><span class="eyebrow" style="font-size:6px;color:#7a879a">PUEDE ESPERAR</span><div class="scope-secondary"><span>Programa de puntos</span><span>Chat social</span><span>Funciones extra</span></div><div class="demo-insight"><svg aria-hidden="true" class="icon"><use href="#i-target"/></svg><p>Hipótesis de la prueba<br><strong>¿Un creador solicitaría una reserva desde aquí?</strong></p></div>'},
 {crumb:'Startup Manager',title:'Que llegue a tu agenda.',sub:'Una decisión cobra sentido cuando sabes qué hacer.',html:'<div class="mini-board"><div class="mini-column"><span>POR HACER</span><div class="mini-task">Preparar entrevistas<small>INVESTIGACIÓN</small></div><div class="mini-task">Definir una prueba<small>VALIDACIÓN</small></div></div><div class="mini-column"><span>EN MARCHA</span><div class="mini-task">Delimitar el MVP<small>PRODUCTO</small></div></div><div class="mini-column"><span>APRENDIDO</span><div class="mini-task">Registrar alternativas<small>CONTEXTO</small></div></div></div><div class="demo-insight"><svg aria-hidden="true" class="icon"><use href="#i-grid"/></svg><p>Objetivo de esta semana<br><strong>Preparar la primera prueba con clientes.</strong></p></div>'}
];
$$('[data-action]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.action),d=action[i];selectTab('[data-action]',i,$('#action-panel'));$('#action-breadcrumb').textContent=d.crumb;$('#action-demo-title').textContent=d.title;$('#action-demo-subtitle').textContent=d.sub;$('#action-demo-content').innerHTML=d.html;$('#action-page').textContent='0'+(i+1)+' / 03';animateContent($('#action-demo-content'))}));tabKeys($('.action-steps'),'[data-action]');
const creatorDescriptions=['Toda gran construcción empieza con una intención clara.','Un recorrido, las funciones esenciales y una estructura para desarrollarlas.','La estructura se convierte en una interfaz con identidad propia.'];
$$('.creator-timeline [data-phase]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.phase);selectTab('.creator-timeline [data-phase]',i,$('#creator-canvas'));$('#creator-canvas').dataset.phase=String(i);$('.product-cta').tabIndex=i===2?0:-1;$('#creator-phase-description').textContent=creatorDescriptions[i]}));tabKeys($('.creator-timeline'),'[data-phase]');
$('#creator-name').addEventListener('input',e=>{const name=e.target.value.trim()||'Tu próxima idea';$$('[data-project-name]').forEach(x=>x.textContent=name)});
$$('[data-device]').forEach(b=>b.addEventListener('click',()=>{$('#creator-canvas').dataset.device=b.dataset.device;$$('[data-device]').filter(x=>x.tagName==='BUTTON').forEach(x=>x.setAttribute('aria-pressed',String(x===b)));announce(b.dataset.device==='mobile'?'Demostración en formato móvil.':'Demostración en formato de escritorio.')}));
const mentors=[['«¿Y si mi idea no funciona?»','¿Qué debería comprobar\nantes de invertir más?','Trabaja tu hipótesis, una prueba y el criterio para decidir.'],['«No consigo suficientes clientes.»','¿Qué está frenando\nla decisión de compra?','Contrasta tu segmento, la oferta y el canal de adquisición.'],['«Necesito crecer más rápido.»','¿Qué conviene mejorar\nantes de acelerar?','Revisa retención, márgenes y capacidad para sostener el crecimiento.']];
$$('[data-mentor]').forEach(b=>b.addEventListener('click',()=>{const i=Number(b.dataset.mentor),d=mentors[i];selectTab('[data-mentor]',i,$('#mentor-panel'));$('#mentor-before').textContent=d[0];$('#mentor-after').textContent=d[1];$('#mentor-note').textContent=d[2];animateContent($('#mentor-panel'))}));tabKeys($('.mentor-topic-tabs'),'[data-mentor]');
// Progressive enhancement: no hidden content if IntersectionObserver is unavailable.
let observer;
if('IntersectionObserver' in window){observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('is-visible');observer.unobserve(e.target)}})},{threshold:.08,rootMargin:'0px 0px -20px 0px'});$$('.reveal').forEach(x=>observer.observe(x))}else{$$('.reveal').forEach(x=>x.classList.add('is-visible'))}
const navSections=$$('#navigation a[href^="#"]').map(a=>({link:a,section:$(a.getAttribute('href'))}));
let scrollPending=false;
function scheduleScroll(){if(!scrollPending){scrollPending=true;requestAnimationFrame(updateScroll)}}
function updateScroll(){
 scrollPending=false;
 const y=window.scrollY,h=window.innerHeight,max=Math.max(1,document.documentElement.scrollHeight-h);
 root.style.setProperty('--scroll-progress',String(Math.min(1,y/max)));
 $('#header').classList.toggle('scrolled',y>40);
 if(!reduced()){
  const hero=$('#inicio').getBoundingClientRect();if(hero.bottom>0)root.style.setProperty('--hero-exit',String(Math.min(1,Math.max(0,y/(hero.height||1)))));
  const problem=$('#evidencia').getBoundingClientRect();if(problem.bottom>0&&problem.top<h)$('#evidencia').style.setProperty('--section-tint',String(Math.min(1,Math.max(0,1-problem.top/h))));
  const closing=$('.closing-cta').getBoundingClientRect();if(closing.top<h&&closing.bottom>0)root.style.setProperty('--close-progress',String(Math.max(0,1-closing.top/h)));
 }
 let active=null;for(const item of navSections){if(item.section.getBoundingClientRect().top<=h*.42)active=item.link}
 navSections.forEach(x=>{if(x.link===active)x.link.setAttribute('aria-current','location');else x.link.removeAttribute('aria-current')});
}
window.addEventListener('scroll',scheduleScroll,{passive:true});window.addEventListener('resize',()=>{if(innerWidth>600)closeMenu();scheduleScroll()},{passive:true});
updateMotion();
// Retained evidence engine: 8 dimensions × 4 levels, not a demand predictor.
const D=StartupiaDiagnostic;
const dialog=$('#diagnostic-dialog'),body=$('#diagnostic-body');let answers={},step=0,result=null,lastTrigger=null;
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function focusTitle(){$('#diagnostic-title')?.focus({preventScroll:true})}
function openDiagnostic(trigger){closeMenu();lastTrigger=trigger||document.activeElement;step=0;result=null;renderQuestion();dialog.showModal();focusTitle()}
$$('[data-diagnostic]').forEach(b=>b.addEventListener('click',()=>openDiagnostic(b)));
$$('[data-close]').forEach(b=>b.addEventListener('click',()=>$('#'+b.dataset.close).close()));
$$('dialog').forEach(d=>{d.addEventListener('click',e=>{if(e.target!==d)return;const r=d.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)d.close()});d.addEventListener('close',()=>{if(d===dialog&&lastTrigger?.isConnected)lastTrigger.focus()})});
function renderQuestion(){
 const q=D.dimensions[step];
 body.innerHTML=`<div class="quiz-meta"><span>UNE TU AMBICIÓN CON LA EVIDENCIA</span><span>0${step+1} / 08</span></div><div class="quiz-progress" role="progressbar" aria-label="Progreso del diagnóstico" aria-valuemin="0" aria-valuemax="8" aria-valuenow="${step+1}"><span style="width:${(step+1)*12.5}%"></span></div><h2 id="diagnostic-title" tabindex="-1">${esc(q.question)}</h2><p>Elige la respuesta que describe tu situación hoy.</p><div class="quiz-choices" role="radiogroup" aria-labelledby="diagnostic-title">${q.options.map((o,i)=>`<button class="quiz-choice" role="radio" aria-checked="${answers[q.key]===i}" data-answer="${i}" tabindex="${answers[q.key]===i||answers[q.key]===undefined&&i===0?0:-1}"><span class="choice-radio" aria-hidden="true"></span><span><strong>${esc(o[0])}</strong><small>${esc(o[1])}</small></span></button>`).join('')}</div><div class="quiz-controls"><button class="quiz-back" id="quiz-back" ${step===0?'disabled':''}>← Atrás</button><button class="button primary" id="quiz-next" ${answers[q.key]===undefined?'disabled':''}>${step===7?'Ver mi análisis':'Continuar'} <svg aria-hidden="true" class="icon"><use href="#i-arrow"/></svg></button></div><div class="quiz-note">Sin registro. Tus respuestas permanecen en esta página. <button id="quiz-reset">Borrar respuestas</button></div>`;
 $$('[data-answer]',body).forEach(b=>b.addEventListener('click',()=>{answers[q.key]=Number(b.dataset.answer);$$('[data-answer]',body).forEach(x=>{x.setAttribute('aria-checked',String(x===b));x.tabIndex=x===b?0:-1});$('#quiz-next').disabled=false}));
 $('.quiz-choices').addEventListener('keydown',e=>{if(!['ArrowRight','ArrowLeft','ArrowDown','ArrowUp','Home','End'].includes(e.key))return;e.preventDefault();const choices=$$('[data-answer]',body),current=choices.indexOf(document.activeElement),next=e.key==='Home'?0:e.key==='End'?3:(current+(['ArrowRight','ArrowDown'].includes(e.key)?1:3))%4;choices[next].click();choices[next].focus()});
 $('#quiz-back').addEventListener('click',()=>{step--;renderQuestion();focusTitle()});
 $('#quiz-next').addEventListener('click',()=>{if(!Number.isInteger(answers[q.key]))return;if(step<7){step++;renderQuestion();focusTitle()}else{result=D.analyze(answers);renderResult()}});
 $('#quiz-reset').addEventListener('click',()=>{answers={};step=0;renderQuestion();focusTitle();announce('Respuestas eliminadas.')});
}
function reportText(){return `STARTUPIA PATHFINDER\nOrientación preliminar basada en tus respuestas\n\n${result.title}\n${result.summary}\n\n${result.checks.map(c=>`${c.name}\nTu respuesta: ${c.label}\n${c.interpretation}\nPrueba: ${c.action}\nCriterio: ${c.metric}`).join('\n\n')}\n\nTENSIONES A REVISAR\n${result.tensions.join('\n')}\n\nTUS TRES PRIORIDADES\n${result.priorities.map((p,i)=>`${i+1}. ${p.name}: ${p.action}`).join('\n')}\n\nRUTA DE 30 DÍAS\n${result.next30.join('\n')}\n\nNo demuestra demanda ni garantiza resultados.\nStartupia — Piensa en grande. Empieza inteligente.`}
function downloadReport(){const url=URL.createObjectURL(new Blob([reportText()],{type:'text/plain;charset=utf-8'}));const a=document.createElement('a');a.href=url;a.download='Startupia-Pathfinder.txt';document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1500)}
function renderResult(){
 body.innerHTML=`<span class="report-tag">TU PRÓXIMO PASO / ${esc(result.decision)}</span><h2 id="diagnostic-title" tabindex="-1">${esc(result.title)}</h2><p>${esc(result.summary)}</p><div class="report-chart" aria-label="Señales declaradas por dimensión, de cero a tres">${result.checks.map((c,i)=>`<div class="report-bar" style="--level:${c.level}" aria-label="${esc(c.name)}: ${c.level} de 3"><i aria-hidden="true"></i><span>0${i+1}</span></div>`).join('')}</div><ol class="report-priorities">${result.priorities.map(c=>`<li><strong>${esc(c.name)}</strong><p>${esc(c.action)}</p></li>`).join('')}</ol><details class="report-details"><summary>Ver el análisis completo de las ocho dimensiones</summary>${result.checks.map((c,i)=>`<h3>0${i+1} / ${esc(c.name)}</h3><p><strong>${esc(c.label)}</strong><br>${esc(c.interpretation)}</p><p>Qué comprobar: ${esc(c.metric)}</p>`).join('')}<h3>Contrastes que conviene revisar</h3>${result.tensions.map(t=>`<p>${esc(t)}</p>`).join('')}<h3>Una ruta para los próximos 30 días</h3>${result.next30.map(t=>`<p>${esc(t)}</p>`).join('')}</details><div class="quiz-note">Orientación preliminar basada en reglas y en lo que has declarado. La demanda se comprueba con clientes reales.</div><div class="report-tools"><button class="button primary" id="find-plan">Quiero elevar mi startup de nivel <svg aria-hidden="true" class="icon"><use href="#i-arrow"/></svg></button><button class="text-link" id="report-download">Descargar mi análisis ↓</button></div><button class="quiz-back" id="report-edit">← Revisar mis respuestas</button>`;
 $('#find-plan').addEventListener('click',renderPlan);$('#report-download').addEventListener('click',downloadReport);$('#report-edit').addEventListener('click',()=>{step=0;renderQuestion();focusTitle()});focusTitle();dialog.scrollTop=0;
}
function renderPlan(){
 body.innerHTML='<span class="report-tag">TU CONTEXTO / TU PLAN</span><h2 id="diagnostic-title" tabindex="-1">Elige con criterio.</h2><p>Tu etapa importa. Tu capacidad de inversión también.</p><form id="plan-form" class="plan-form"><label>¿Qué necesitas ahora?<select name="priority"><option value="validate">Validar y enfocar mi primera idea</option><option value="growth">Mejorar ventas y crecimiento</option></select></label><label>¿Cómo vas a trabajar?<select name="workload"><option value="light">Un proyecto, a mi ritmo</option><option value="intensive">Con más análisis y seguimiento</option><option value="team">Coordinando varias responsabilidades</option></select></label><label>¿Qué presupuesto mensual te resulta cómodo?<select name="budget"><option value="0">Prefiero empezar sin contratar</option><option value="17">Hasta USD 17 al mes</option><option value="37">Hasta USD 37 al mes</option></select></label><label>¿Qué apoyo prefieres?<select name="support"><option value="tools">Herramientas de inteligencia artificial</option><option value="both">Herramientas y mentoría independiente</option><option value="human">Orientación de un experto</option></select></label><button type="submit" class="button primary">Ver la recomendación <svg aria-hidden="true" class="icon"><use href="#i-arrow"/></svg></button></form><div id="plan-output" aria-live="polite"></div><button class="quiz-back" id="back-report">← Volver a mi diagnóstico</button>';
 $('#back-report').addEventListener('click',renderResult);$('#plan-form').addEventListener('submit',e=>{e.preventDefault();const data=Object.fromEntries(new FormData(e.target)),r=D.recommend(answers,data),price=r.plan==='Build'?'USD 17/mes':r.plan==='Growth'?'USD 37/mes':r.plan==='Mentors'?'USD 197/hora':'';$('#plan-output').innerHTML=`<div class="plan-result"><h3>${esc(r.name)}</h3><p>${esc(r.reason)}</p>${price?`<p><strong>${price}</strong></p><button type="button" class="button dark-button" data-destination="${r.plan.toLowerCase()}">${r.plan==='Mentors'?'Elegir una mentoría':'Elegir '+esc(r.plan)} <svg aria-hidden="true" class="icon"><use href="#i-arrow"/></svg></button>`:''}</div>`;$('#plan-output').scrollIntoView({behavior:reduced()?'instant':'smooth',block:'nearest'})});focusTitle();dialog.scrollTop=0;
}
$('#privacy-open').addEventListener('click',()=>$('#privacy-dialog').showModal());
$('#erase-diagnostic').addEventListener('click',()=>{answers={};step=0;result=null;$('#privacy-dialog').close();announce('Tus respuestas del diagnóstico se han borrado.')});
})();
