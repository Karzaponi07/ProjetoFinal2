const dicas = document.querySelectorAll('.dicas button');

function ativarDicas(event){
const dicas = event.currentTarget;
const controls = dicas.getAttribute('aria-controls');
const resposta = document.getElementById(controls);


resposta.classList.toggle('ativa');
const ativa = resposta.classList.contains("ativa");
dicas.setAttribute("aria-expanded", "true");
}

function eventosDicas(dicas){
    dicas.addEventListener('click', ativarDicas);
}

dicas.forEach(eventosDicas);
