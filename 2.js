// comment
const slika = document.getElementById('slika');
slika.addEventListener('mouseenter', uvecajSliku);
slika.addEventListener('mouseleave', umanjiSliku);

function uvecajSliku(){
  slika.style.height = 'initial';
}
function umanjiSliku(){
  slika.style.height = '150px';
}

const tr = document.getElementsByTagName('tr');
for (const i in tr) {
  tr[i].addEventListener('click', function(){
    tr[i].style.display = 'none';
  });
}
