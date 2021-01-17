const api =
  'https://api.edamam.com/search?q=vegetable&app_id=5d4c78dd&app_key=a22eff998c59bb561936f410722f1fa8&to=100';

fetch(api)
  .then((resp) => resp.json())
  .then((data) => {
    console.log(data);
    for (let i = 0; i < data.hits.length; i++) {
      const vegetablepick = document.getElementById('vegetablepick');
      const vegetablebox = document.createElement('div');
      vegetablebox.classList.add('vegetablebox');
      const recipetitle = document.createElement('h1');
      recipetitle.classList.add('recipetitle');
      recipetitle.innerHTML = data.hits[i].recipe.label;
      const image = document.createElement('img');
      image.src = data.hits[i].recipe.image;
      const button = document.createElement('button');
      button.classList.add('btn-ingridients');
      button.innerHTML = 'ingredients';
      const modal = document.createElement('div');
      modal.classList.add('modalmain');
      const close = document.createElement('span');
      close.classList.add('close');
      close.innerHTML = '&times;';
      const popUp = document.createElement('div');
      popUp.classList.add('popUp');
      const ingredienthero1 = document.createElement('div');
      ingredienthero1.classList.add('ingredienthero1');
      const ingredientTitle = document.createElement('h1');
      ingredientTitle.classList.add('ingredientTitle');
      ingredientTitle.innerHTML = data.hits[i].recipe.label;
      const ingreImage = document.createElement('img');
      ingreImage.src = data.hits[i].recipe.image;

      const ingredienthero2 = document.createElement('div');
      ingredienthero2.classList.add('ingredienthero2');
      const ingreH1 = document.createElement('h1');
      ingreH1.classList.add('ingreH1');
      ingreH1.innerHTML = 'Ingredients';
      const unL = document.createElement('ul');

      for (let j = 0; j < data.hits[i].recipe.ingredientLines.length; j++) {
        const list = document.createElement('LI');
        list.classList.add('list');
        console.log();
        list.innerText = data.hits[i].recipe.ingredientLines[j];
        unL.appendChild(list);
      }

      button.addEventListener('click', function () {
        modal.style.display = 'block';
      });
      close.addEventListener('click', function () {
        modal.style.display = 'none';
      });

      modal.appendChild(popUp);
      modal.appendChild(close);
      popUp.appendChild(ingredienthero1);
      popUp.appendChild(ingredienthero2);
      ingredienthero2.appendChild(ingreH1);
      ingredienthero2.appendChild(unL);
      ingredienthero1.appendChild(ingredientTitle);
      ingredienthero1.appendChild(ingreImage);

      vegetablebox.appendChild(recipetitle);
      vegetablebox.appendChild(image);
      vegetablebox.appendChild(button);
      vegetablepick.appendChild(vegetablebox);
      vegetablepick.appendChild(modal);
    }
  });
