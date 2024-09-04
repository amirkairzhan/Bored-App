const questionNode = document.querySelector('.question');
const answerNode = document.querySelector('.answer');
const buttonNode = document.querySelector('.btn');

buttonNode.addEventListener('click', function() {
    questionNode.innerHTML = 'Ура, теперь не скучно 🔥';

    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(res => {
            answerNode.innerHTML = res.slip.advice;
        });

    document.body.classList.add('body_back');
});