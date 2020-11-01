const quiz=[
  {
    question : 'ゲーム市場、最も売れたゲーム機はどれ？',
    answers : [
    'スーパファミコン',
    'プレステーション',
    'ニンテンドーDS',
    'ニンテンドー64'
  ],
    correct : 'ニンテンドーDS'
  },
  {
    question : '糸井重里が企画に関わった、任天堂の看板ゲームといえば?',
    answers : [
    'MOTHER2',
    'スーパマリオ',
    'ドンキーコング',
    '星のカービィ'
  ],
    correct : 'MOTHER2'
  },
  {
  question : 'ファイナルファンタジーの主人公の名前は?',
  answers : [
  'フリオニール',
  'クラウド',
  'ディーだ',
  'セシル'
  ],
  correct : 'セシル'
  } 
]


/*
const ;question = 'ゲーム市場、最も売れたゲーム機はどれ？';
const answers = ['スーパファミコン',
'プレステーション',
'ニンテンドーDS',
'ニンテンドー64'];
const correct = 'ニンテンドーDS';
*/
const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;


const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuize = () => {
   document.getElementById('js-question').textContent = quiz[quizIndex].
   question;
/*
$button[0].textContent = answers[0];
$button[1].textContent = answers[1];
$button[2].textContent = answers[2];
$button[3].textContent = answers[3];
*/
let buttonIndex = 0;
while(buttonIndex < buttonLength){
  $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
  buttonIndex++;
}
}
setupQuize();


const clickHandler = (e) => {
  if (quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解!');
    score++;
  }else {
    window.alert('不正解');
   }
   quizIndex++;

   if(quizIndex < quizLength){
    setupQuize();
   } else {
     window.alert('終了！あなたの正解数は'+ score + '/' + 
     quizLength + 'です!');
   }
};

let handlerIndex = 0;

while (handlerIndex < buttonLength) {
   $button[handlerIndex].addEventListener('click',(e) => {
     clickHandler(e);
   });
   handlerIndex++;  
}
/*
$button[0].addEventListener('click',(e)=>{
  clickHandler(e);
});

$button[1].addEventListener('click',(e)=>{
  clickHandler(e);
  });

  $button[2].addEventListener('click',(e)=>{
    clickHandler(e);
    });

    $button[3].addEventListener('click',(e)=>{
      clickHandler(e);
      });
*/

/* //リファクリング前
$button[0].addEventListener('click',()=> {
  if(correct === $button[0].textContent){
    window.alert('正解');
  } else {
    window.alert('不正解');
  }
}) 
*/
