var e=class{constructor(e,s,t){this.text=e,this.choices=s,this.answer=t}correctAnswer(e){return e===this.answer}};var s=[{question:"Cual de las siguientes opciones no es un editor de codigo?",choices:["vim","vscode","emacs","word"],answer:"word"},{question:"Que lenguaje de programación no es Orientado a Objetos?",choices:["java","haskell","c++","python"],answer:"haskell"},{question:"Con que lenguaje estilizamos los sitios web?",choices:["css","stylus","sass","html"],answer:"css"}].map((s=>new e(s.question,s.choices,s.answer)));class t{questionsIndex=0;score=0;constructor(e){this.questions=e}getQuestionsIndex(){return this.questions[this.questionsIndex]}isEnded(){return this.questions.length===this.questionsIndex}guess(e){this.getQuestionsIndex().correctAnswer(e)&&this.score++,this.questionsIndex++}}class n{constructor(){}showQuestion(e){document.getElementById("question").textContent=e}showChoices(e,s){const t=document.getElementById("choices");t.innerHTML="";for(let n=0;n<e.length;n++){const o=document.createElement("button");o.className="btn",o.textContent=e[n],o.addEventListener("click",(()=>s(e[n]))),t.appendChild(o)}}showScore(e){const s=`\n    <h1>Result</h1>\n    <h2>Your Score: ${e}</h2>\n    `;document.getElementById("quiz").innerHTML=s}showProgress(e,s){document.getElementById("progress").innerHTML=`Questions: ${e} of ${s}`}}function o(e,s){e.isEnded()?s.showScore(e.score):(s.showQuestion(e.getQuestionsIndex().text),s.showChoices(e.getQuestionsIndex().choices,(t=>{e.guess(t),o(e,s)})),s.showProgress(e.questionsIndex+1,e.questions.length))}o(new t(s),new n);