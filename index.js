// esto solo es para buscar el objeto y ver si esta
// const cardGrid = document.querySelector('.cardGrid')

const projects = [
    {
        url:'./imgdesktopPopUp.svg',
        key: 'project1',
      titulo: 'Multi-Post Stories Gain+Glory',
      tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
      btnLiveHref:'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
      btnSourceHref:'https://github.com/PierreBarba',
      imagen: './crossimg.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!'

    },
    {
        key: 'project2',
      titulo: 'Multi-Post Stories Gain+Glory',
      tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
      btnLiveHref:'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
      btnSourceHref:'https://github.com/PierreBarba',
      imagen: './crossimg.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!'

    },
    {
        key: 'project3',
      titulo: 'Multi-Post Stories Gain+Glory',
      tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
      btnLiveHref:'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
      btnSourceHref:'https://github.com/PierreBarba',
      imagen: './crossimg.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!'
    },
    {
        key: 'project4',
      titulo: 'Multi-Post Stories Gain+Glory',
      tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
      btnLiveHref:'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
      btnSourceHref:'https://github.com/PierreBarba',
      imagen: './crossimg.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!'
    },
    {
        key: 'project5',
      titulo: 'Multi-Post Stories Gain+Glory',
      tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
      btnLiveHref:'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
      btnSourceHref:'https://github.com/PierreBarba',
      imagen: './crossimg.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!'
    },
    {
        key: 'project6',
      titulo: 'Multi-Post Stories Gain+Glory',
      tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
      imagen: './crossimg.svg',
      btnLiveHref:'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
      btnSourceHref:'https://github.com/PierreBarba',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!'
    },
  ];

  function getProject(projectKey) {
    for (let i=0; i< projects.length; i+=1) {
        if (projects[i].key === projectKey) {
            return projects[i];
        }
    }
    return false;
  }
    

//     // const cardWorkDetailsMobile = (index) => `
//   <article class="card-work-details-mobile">
//   <button type="button" class="btn-close-details">
//       <img src="./assest/Icon-Cancel.svg" alt="cancel icon">
//   </button>
//   <div class="card-image-details-mobile">
//       <img src=${dataCards[index].url} alt="">
//   </div>
//   <h2 class="card-title-mobile">
//       ${dataCards[index].title}
//   </h2>


   function createModal (project) { 
     const projectData =getProject(project);
    const modalPopUp = `
  <article class="card-work-details-mobile show" id="card">
  <button type="button" class="btn-close-details">
       <img class="DesktopPopUp" src="./SnapshootPortfolio.svg" alt="cancel icon" onclick=hideModal()>
   </button>
  <div class="card-image-details-mobile" onclick=hideModal()>
      <img src=${projectData.imagen} alt="">
  </div>  
  <section class="myRecentWorkPopUp"  id = "projects-card">
      <h2 class="subTitlePopUp">${projectData.titulo}</h2> 
      <div class="informationCard">
          <div  class = "cardTag"></div>
              <ul>
                  ${ projectData.tecnologias.map((tec) => {
                   return `<li class="myRecentWorkItem">${tec}</li>`
                  }).join('\n')}
              </ul>
          </div>
      </div>
      <p class="card-paragraph-mobile">
           Lorem Ipsum is simply dummy text of the printing and typesetting industrys standard dummy text ever since the 1500s
           Lorem Ipsum is simply dummy text of the printing and typesetting industrys standard dummy text ever since the 1500s
           Lorem Ipsum  Lorem Ipsum is simply 
      </p>
      <div class="card-button-mobile">
          <a href="${projectData.btnLiveHref}" class="btn-card-details-mobile">
          <img src="./arrowBtnComplete.svg" alt="see live icon">
          </a>
          <a href="${projectData.btnSourceHref}" class="btn-card-details-mobile">
          <img src="./githubBtnComplete.svg" alt="github icon">
          </a>
      </div>
  </section>
</article>            
  `;
    document.querySelector('.modal').innerHTML= modalPopUp
                  return modalPopUp
   }

  // cardeElement es solo el nombre que le di para el objeto que estoy
  // creando en este caso es la tarjeta
  const createcard = (project) => {
    //const cardModal = createModal(project)
  //creando contenedor de la tarjeta
    const cardElement = document.createElement('section');
    // asignando propiedades del contenedor cardElement (class,id)
    cardElement.classList.add('post');
    // creando titulo de la tarjeta
    const cardSection = document.createElement('section');
    cardSection.classList.add('cardInformation');
  
    const cardTitle = document.createElement('h3');
    cardTitle.classList.add('subtitle');
    cardTitle.innerText = project.titulo;
    // creando tecnologias
    const ulCard = document.createElement('ul');
    // creando hijo de tecnologías (li)
  
    project.tecnologias.forEach((tec) => {
      const listItem = document.createElement('li');
      listItem.classList.add('myRecentWorkItem');
      listItem.innerText = tec;
      ulCard.appendChild(listItem);
    });
    //  cardGridContainer.appendChild(cardElement);
    //  cardElement.appendChild(cardSection);
    //  cardSection.appendChild(ulCard);
    //  console.log(cardElement);
    //  const liCard2 = document. createElement('li')
    //   // liCard2.classList.add('myRecentWorkItem')
    //   // liCard2.innertText = 'css';
  
    //   // const liCard3 = document. createElement('li')
    //   // liCard3.classList.add('myRecentWorkItem')
    //   // liCard3.innertText = 'JavaScript';
  
    //   // const liCard4 = document. createElement('li')
    //   // liCard4.classList.add('myRecentWorkItem')
    //   // liCard4.innertText = 'html';
    

    
    
    //   // creando boton
    const buttonCardEnd = document.createElement('button');
    buttonCardEnd.type = 'button';
    buttonCardEnd.classList.add('buttongreen');
    buttonCardEnd.innerText = 'See Project';
    buttonCardEnd.setAttribute('onclick', `createModal('${project.key}')`);
    // agregando la tarjeta al grid
    //  cardGridContainer.appendChild(cardElement);
    //  cardElement.appendChild(liCard1)
    //  cardElement.appendChild(liCard2)
    //  cardElement.appendChild(liCard3)
    //  cardElement.appendChild(liCard4)
  
    cardSection.appendChild(cardTitle);
    cardSection.appendChild(ulCard);
    cardSection.appendChild(buttonCardEnd);
    //console.log(buttonCardEnd);
    // function seeProject(){
    //     const b = document.getElementById('card')
    //     if(b.style.display === 'none'){
    //         b.style.display = 'grid';
    //     }
    //     else b.style.display = 'none';
    //    }
    // buttonCardEnd.onclick = seeProject();
    cardElement.appendChild(cardSection);
    return cardElement;

   };

   function hideModal (){
    const modal = document.getElementById('card');
    modal.classList.toggle('show')
   
}
//   // llama la funcion y la ejecuta
  
  // insert cards into cardsGird : iterar arreglo de proyectos e insertar tarjetas
  
  const insertCards = () => {
    const cardGridContainer = document.createElement('div');
    cardGridContainer.classList.add('cardGrid');
    projects.forEach((project) => {
      cardGridContainer.appendChild(createcard(project));
    });
    document.getElementById('myRecentWork').appendChild(cardGridContainer);
  };
  
  // insertCards();
  
  const menuBtn = document.querySelector('.hamburger');
  const headerNavMobile = document.querySelector('.header-nav-mobile');
  const cancelCross = document.querySelector('.cancel-cross');
  const linkSection = document.getElementsByClassName('menu-link');
  
  menuBtn.addEventListener('click', () => {
    headerNavMobile.classList.remove('hidden');
  });
  
  cancelCross.addEventListener('click', () => {
    headerNavMobile.classList.add('hidden');
  });
  
  linkSection[0].addEventListener('click', () => {
    headerNavMobile.classList.toggle('hidden');
  });
  
  linkSection[1].addEventListener('click', () => {
    headerNavMobile.classList.add('hidden');
  });
  
  linkSection[2].addEventListener('click', () => {
    headerNavMobile.classList.add('hidden');
  });
  
  document.addEventListener('DOMContentLoaded', insertCards);
  

  
//   //const myRecentWork = document.querySelector('#myRecentWork');
  
//   myRecentWork.addEventListener('click', (e) => {
//       e.preventDefault()
//       if (e.target.classList.contains('buttongreen')){
          
//       }
//   }

