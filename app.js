'use strict';

/* WortWerk — Lernwortschatz 4. No libraries, accounts, analytics or external requests. */
const CAT = {
  furniture: {label:'Мебель', de:'MÖBEL'},
  describe: {label:'Описание', de:'BESCHREIBEN'},
  money: {label:'Деньги', de:'GELD'},
  other: {label:'Другие слова', de:'WEITERE WÖRTER'}
};

function word(id, cat, de, ru, plural, example, exampleRu, note='', aliases=[]) {
  return {id,cat,de,ru,plural,example,exampleRu,note,aliases,
    noun:/^(der|die|das)\s/.test(de)};
}
const WORDS = [
  word('m01','furniture','die Möbel','мебель','только мн. ч.','Die Möbel sind modern.','Мебель современная.','Слово употребляется во множественном числе.'),
  word('m02','furniture','das Bett','кровать','die Betten','Das Bett ist bequem.','Кровать удобная.'),
  word('m03','furniture','das Bild','картина','die Bilder','Das Bild ist schön.','Картина красивая.','Также: изображение.',['изображение']),
  word('m04','furniture','die Lampe','лампа','die Lampen','Die Lampe ist neu.','Лампа новая.','Также: светильник.',['светильник']),
  word('m05','furniture','der Schrank','шкаф','die Schränke','Der Schrank ist groß.','Шкаф большой.'),
  word('m06','furniture','der Kasten','шкаф','die Kästen','Der Kasten steht im Zimmer.','Шкаф стоит в комнате.','В этом значении преимущественно австрийский вариант.'),
  word('m07','furniture','der Sessel','кресло','die Sessel','Der Sessel ist praktisch.','Кресло удобное.','В Австрии der Sessel может также означать «стул».', ['стул (в Австрии)']),
  word('m08','furniture','das Fauteuil','кресло','die Fauteuils','Das Fauteuil ist bequem.','Кресло удобное.','Употребляется в Австрии и Швейцарии.'),
  word('m09','furniture','das Sofa','диван','die Sofas','Das Sofa ist sehr groß.','Диван очень большой.'),
  word('m10','furniture','die Couch','диван','die Couches / die Couchen','Die Couch ist teuer.','Диван дорогой.'),
  word('m11','furniture','der Stuhl','стул','die Stühle','Der Stuhl ist leicht.','Стул лёгкий.'),
  word('m12','furniture','der Teppich','ковёр','die Teppiche','Der Teppich ist schön.','Ковёр красивый.'),
  word('m13','furniture','der Tisch','стол','die Tische','Der Tisch ist zu klein.','Стол слишком маленький.'),

  word('d01','describe','groß','большой','','Das Zimmer ist groß.','Комната большая.'),
  word('d02','describe','hässlich','некрасивый','','Ich finde die Lampe hässlich.','Я считаю эту лампу некрасивой.','Также: уродливый.',['уродливый']),
  word('d03','describe','klein','маленький','','Der Tisch ist klein.','Стол маленький.'),
  word('d04','describe','kurz','короткий','','Der Text ist kurz.','Текст короткий.'),
  word('d05','describe','lang','длинный','','Der Teppich ist lang.','Ковёр длинный.'),
  word('d06','describe','leicht','лёгкий','','Der Stuhl ist leicht.','Стул лёгкий.'),
  word('d07','describe','modern','современный','','Die Möbel sind modern.','Мебель современная.'),
  word('d08','describe','praktisch','практичный','','Das ist sehr praktisch.','Это очень удобно.','Также: удобный.',['удобный']),
  word('d09','describe','schlecht','плохой','','Die Qualität ist schlecht.','Качество плохое.'),
  word('d10','describe','nicht schlecht','неплохой','','Das ist nicht schlecht!','Это неплохо!','Буквально: не плохой.',['неплохо','не плохой']),
  word('d11','describe','schön','красивый','','Das Bild ist schön.','Картина красивая.'),
  word('d12','describe','schwer','тяжёлый','','Der Schrank ist schwer.','Шкаф тяжёлый.','В других контекстах: трудный.',['трудный']),
  word('d13','describe','sehr','очень','','Das Bett ist sehr groß.','Кровать очень большая.','Например: sehr groß / sehr klein.'),
  word('d14','describe','zu','слишком','','Das Sofa ist zu klein.','Диван слишком маленький.','В сочетаниях: zu groß / zu klein.'),

  word('g01','money','der Euro','евро','die Euros','Das kostet einen Euro.','Это стоит один евро.','После числительных обычно: 100 Euro (без -s).'),
  word('g02','money','100 Euro','100 евро','','Das kostet 100 Euro.','Это стоит 100 евро.','Также по-немецки: hundert Euro.',['сто евро']),
  word('g03','money','der Cent','цент','die Cents','Das kostet 50 Cent.','Это стоит 50 центов.'),
  word('g04','money','der Preis','цена','die Preise','Der Preis ist gut.','Цена хорошая.'),
  word('g05','money','das Angebot','предложение','die Angebote','Das Angebot ist interessant.','Предложение интересное.','В магазине также: акция, предложение со скидкой.',['акция']),
  word('g06','money','das Sonderangebot','спецпредложение','die Sonderangebote','Das ist ein Sonderangebot.','Это специальное предложение.','Товар по акции.',['специальное предложение','товар по акции']),
  word('g07','money','kosten','стоить','','Was kostet der Tisch?','Сколько стоит стол?','О цене товара.'),
  word('g08','money','machen','делать','','Das macht 50 Euro.','Это составляет 50 евро.','В контексте покупок также: составлять (о сумме).',['составлять']),
  word('g09','money','das macht …','с вас …','','Das macht 20 Euro.','С вас 20 евро.','Также: это составляет…',['это составляет']),
  word('g10','money','günstig','выгодный по цене','','Das ist wirklich günstig.','Это действительно выгодно.','Также: недорогой.',['недорогой','выгодный']),
  word('g11','money','billig','дешёвый','','Die Lampe ist billig.','Лампа дешёвая.','Иногда может подразумевать низкое качество.'),
  word('g12','money','teuer','дорогой','','Das Bett ist teuer.','Кровать дорогая.'),

  word('w01','other','die Hilfe','помощь','die Hilfen (редко)','Ich brauche Hilfe.','Мне нужна помощь.','В обычном значении чаще используется в единственном числе.'),
  word('w02','other','das Zimmer','комната','die Zimmer','Mein Zimmer ist klein.','Моя комната маленькая.'),
  word('w03','other','brauchen','нуждаться','','Ich brauche einen Tisch.','Мне нужен стол.','Также: нуждаться в чём-либо, требоваться.',['быть нужным','требоваться']),
  word('w04','other','finden','находить','','Ich finde das Sofa schön.','Я считаю диван красивым.','Также: считать, находить что-то каким-либо.',['считать']),
  word('w05','other','sagen','говорить','','Was sagen Sie?','Что вы говорите?','Также: сказать.',['сказать']),
  word('w06','other','nur','только','','Das kostet nur zehn Euro.','Это стоит всего десять евро.','Также: лишь.',['лишь','всего']),
  word('w07','other','wirklich','действительно','','Das ist wirklich schön.','Это действительно красиво.','Также: в самом деле.',['в самом деле'])
];
const BY_ID = Object.fromEntries(WORDS.map(w => [w.id, w]));
const $ = id => document.getElementById(id);
const randomize = items => {
  const a = [...items];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};
const state = {screen:'home', topic:'furniture', index:0, flipped:false, direction:'de-ru', quiz:null};
const topicOrder = ['furniture','describe','money','other'];
const screens = ['home','topics','cards','quiz'];

function showScreen(screen, push = true, topic = null) {
  if (topic) state.topic = topic;
  state.screen = screen;
  for (const item of screens) $(item + 'Screen').hidden = item !== screen;
  $('backButton').hidden = screen === 'home';
  if (push) history.pushState({screen, topic:state.topic}, '');
  if (screen === 'topics') renderTopics();
  if (screen === 'cards') renderCard();
  if (screen === 'quiz') renderQuiz();
  window.scrollTo({top:0, behavior:'instant'});
}
function renderTopics() {
  const container = $('topicList');
  container.replaceChildren();
  topicOrder.forEach((key,i) => {
    const cat=CAT[key];
    const count=WORDS.filter(w=>w.cat===key).length;
    const btn=document.createElement('button');
    btn.className='topic-button';btn.type='button';btn.dataset.topic=key;
    btn.innerHTML=`<span class="topic-number">0${i+1}</span><span class="topic-name"><strong>${cat.label}</strong><small>${count} ${pluralWords(count)}</small></span><span class="topic-arrow" aria-hidden="true">→</span>`;
    container.appendChild(btn);
  });
}
function pluralWords(n) {
  if (n%10 === 1 && n%100 !== 11) return 'слово';
  if (n%10 >= 2 && n%10 <= 4 && (n%100 < 12 || n%100 > 14)) return 'слова';
  return 'слов';
}
function topicWords() { return WORDS.filter(w=>w.cat===state.topic); }
function openTopic(topic) {
  state.index=0;
  state.flipped=false;
  state.direction='de-ru';
  showScreen('cards',true,topic);
}
function setGermanWord(el, str) {
  el.replaceChildren();
  const match = str.match(/^(der|die|das)\s+(.+)$/);
  if (!match) {el.textContent=str;return;}
  const article=document.createElement('span');
  article.className='article-'+match[1];
  article.textContent=match[1]+' ';
  el.append(article, document.createTextNode(match[2]));
}
function renderCard() {
  const deck=topicWords();
  const w=deck[state.index];
  if (!w) return;
  $('cardsTitle').textContent=CAT[state.topic].label;
  $('cardCount').textContent=`${state.index+1} / ${deck.length}`;
  $('cardProgress').style.width=`${((state.index+1)/deck.length)*100}%`;
  $('directionButton').innerHTML=state.direction==='de-ru'?'DE → RU <span aria-hidden="true">⇄</span>':'RU → DE <span aria-hidden="true">⇄</span>';
  const front=!state.flipped;
  const german=(state.direction==='de-ru')===front;
  $('cardFaceLabel').textContent=german?'НЕМЕЦКИЙ':'РУССКИЙ';
  const text=german?w.de:w.ru;
  const el=$('cardWord');
  el.lang=german?'de':'ru';
  if (german) setGermanWord(el,text);
  else el.textContent=text;
  el.classList.toggle('is-long',text.length>24);
  const detail=$('cardDetail');
  detail.replaceChildren();
  if (!front) {
    const items=[];
    if(w.plural) items.push(`Мн. ч.: ${w.plural}`);
    if(w.note) items.push(w.note);
    detail.textContent=items.join(' · ');
  }
  $('cardHint').textContent=front?'Нажми, чтобы увидеть перевод ↻':'Нажми, чтобы перевернуть ↻';
  $('flashcard').classList.toggle('is-back',!front);
  $('flashcard').setAttribute('aria-pressed',String(!front));
  $('prevCard').disabled=state.index===0;
  $('nextCard').disabled=state.index===deck.length-1;
}
function moveCard(step) {
  const next=state.index+step;
  if(next<0||next>=topicWords().length)return;
  state.index=next;state.flipped=false;renderCard();
}
function speakGerman() {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();
  const utterance=new SpeechSynthesisUtterance(topicWords()[state.index].de);
  utterance.lang='de-DE';utterance.rate=.86;
  const voice=window.speechSynthesis.getVoices().find(v=>v.lang.toLowerCase().startsWith('de'));
  if(voice) utterance.voice=voice;
  window.speechSynthesis.speak(utterance);
}
function startQuiz() {
  state.quiz={ids:randomize(WORDS.map(w=>w.id)).slice(0,10),index:0,score:0,chosen:null,options:[]};
  makeOptions();
  showScreen('quiz');
}
function makeOptions() {
  const q=state.quiz;
  if(!q || q.index>=q.ids.length) return;
  const correct=BY_ID[q.ids[q.index]];
  // Don't show synonyms as different answer choices (e.g. "кресло" for both Sessel and Fauteuil).
  const seen=new Set([correct.ru.toLowerCase()]);
  const candidates=randomize(WORDS.filter(w=>w.id!==correct.id && w.cat===correct.cat)).concat(
    randomize(WORDS.filter(w=>w.id!==correct.id && w.cat!==correct.cat)));
  const options=[correct];
  for (const item of candidates) {
    const key=item.ru.toLowerCase();
    if(seen.has(key))continue;
    seen.add(key);options.push(item);
    if(options.length===4)break;
  }
  q.options=randomize(options).map(w=>w.id);
}
function renderQuiz() {
  const q=state.quiz;
  if(!q) return;
  const done=q.index>=q.ids.length;
  $('quizQuestionArea').hidden=done;
  $('quizResults').hidden=!done;
  $('quizCount').textContent=done?'10 / 10':`${q.index+1} / ${q.ids.length}`;
  $('quizProgress').style.width=`${((done?q.ids.length:q.index+1)/q.ids.length)*100}%`;
  if(done) {
    $('resultScore').textContent=`${q.score} из ${q.ids.length} правильных ответов`;
    return;
  }
  const target=BY_ID[q.ids[q.index]];
  setGermanWord($('quizWord'),target.de);
  const options=$('quizOptions');options.replaceChildren();
  for (const id of q.options) {
    const btn=document.createElement('button');
    btn.type='button';btn.className='answer-button';btn.dataset.answer=id;
    btn.textContent=BY_ID[id].ru;
    if(q.chosen!==null){
      btn.disabled=true;
      if(id===target.id)btn.classList.add('correct');
      else if(id===q.chosen)btn.classList.add('incorrect');
    }
    options.appendChild(btn);
  }
  const answered=q.chosen!==null;
  $('quizFeedback').hidden=!answered;
  $('nextQuestion').hidden=!answered;
  if(answered){
    const right=q.chosen===target.id;
    $('quizFeedback').classList.toggle('bad',!right);
    $('quizFeedback').textContent=right?'Правильно!':`Правильный ответ: ${target.ru}`;
    $('nextQuestion').textContent=q.index===q.ids.length-1?'Показать результат →':'Следующий вопрос →';
  }
}
function chooseAnswer(id) {
  const q=state.quiz;
  if(!q || q.chosen!==null)return;
  q.chosen=id;
  if(id===q.ids[q.index])q.score++;
  renderQuiz();
}
function nextQuestion(){
  const q=state.quiz;
  if(!q || q.chosen===null)return;
  q.index++;q.chosen=null;
  makeOptions();renderQuiz();
}
$('openCards').addEventListener('click',()=>showScreen('topics'));
$('openQuiz').addEventListener('click',startQuiz);
$('topicList').addEventListener('click',e=>{
  const btn=e.target.closest('[data-topic]');
  if(btn)openTopic(btn.dataset.topic);
});
$('backButton').addEventListener('click',()=>history.back());
$('flashcard').addEventListener('click',()=>{state.flipped=!state.flipped;renderCard();});
$('directionButton').addEventListener('click',()=>{state.direction=state.direction==='de-ru'?'ru-de':'de-ru';state.flipped=false;renderCard();});
$('prevCard').addEventListener('click',()=>moveCard(-1));
$('nextCard').addEventListener('click',()=>moveCard(1));
$('speakCard').addEventListener('click',speakGerman);
$('quizOptions').addEventListener('click',e=>{
  const btn=e.target.closest('[data-answer]');
  if(btn)chooseAnswer(btn.dataset.answer);
});
$('nextQuestion').addEventListener('click',nextQuestion);
$('restartQuiz').addEventListener('click',()=>{state.quiz={ids:randomize(WORDS.map(w=>w.id)).slice(0,10),index:0,score:0,chosen:null,options:[]};makeOptions();renderQuiz();});
$('returnHome').addEventListener('click',()=>history.back());
window.addEventListener('popstate',e=>{
  const target=e.state;
  showScreen(target?.screen||'home',false,target?.topic||null);
});
// Accept left/right arrow keys when studying cards on a desktop.
document.addEventListener('keydown',e=>{
  if(state.screen!=='cards')return;
  if(e.key==='ArrowLeft')moveCard(-1);
  if(e.key==='ArrowRight')moveCard(1);
});
history.replaceState({screen:'home',topic:'furniture'},'');
showScreen('home',false);
if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost')) {
  window.addEventListener('load',()=>navigator.serviceWorker.register('./service-worker.js').catch(()=>{}));
}
