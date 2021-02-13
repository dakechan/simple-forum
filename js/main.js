'use strict';

{
  const tl=document.getElementById('tl');
  const btn=document.getElementById('btn');
  const ul=document.getElementById('tl');
  btn.addEventListener('click', ()=>{
    let text=document.getElementById('text').value;
    document.getElementById('text').value='';
    let d=new Date();
    const li=document.createElement('li');
    const p=document.createElement('p');
    li.classList.add('li');
    p.classList.add('p');
   li.textContent=(`${d.getFullYear()}/${String(d.getMonth()+1).padStart(2, '0')}/${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}:${String(d.getSeconds()).padStart(2,'0')}`);
   p.textContent=text;
   ul.appendChild(li);
   li.appendChild(p);
  }); 
}

