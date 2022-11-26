const projects = [
    {
      url: './SnapshootPortfolio.png',
      key: 'project1',
      titulo: 'Multi-Post Stories Gain+Glory',
      tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
      btnLiveHref: 'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
      btnSourceHref: 'https://github.com/PierreBarba',
      imagen: './crossimg.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!',
  
    },
    {
      url: './imgdesktopPopUp.svg',
      key: 'project2',
      titulo: 'Multi-Post Stories Gain+Glory',
      tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
      btnLiveHref: 'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
      btnSourceHref: 'https://github.com/PierreBarba',
      imagen: './crossimg.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!',
  
    },
    {
      url: './imgdesktopPopUp.svg',
      key: 'project3',
      titulo: 'Multi-Post Stories Gain+Glory',
      tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
      btnLiveHref: 'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
      btnSourceHref: 'https://github.com/PierreBarba',
      imagen: './crossimg.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!',
    },
    {
      url: './imgdesktopPopUp.svg',
      key: 'project4',
      titulo: 'Multi-Post Stories Gain+Glory',
      tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
      btnLiveHref: 'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
      btnSourceHref: 'https://github.com/PierreBarba',
      imagen: './crossimg.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!',
    },
    {
      url: './imgdesktopPopUp.svg',
      key: 'project5',
      titulo: 'Multi-Post Stories Gain+Glory',
      tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
      btnLiveHref: 'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
      btnSourceHref: 'https://github.com/PierreBarba',
      imagen: './crossimg.svg',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!',
    },
    {
      url: './imgdesktopPopUp.svg',
      key: 'project6',
      titulo: 'Multi-Post Stories Gain+Glory',
      tecnologias: ['Ruby on rails', 'css', 'JavaScript', 'html'],
      imagen: './crossimg.svg',
      btnLiveHref: 'https://pierrebarba.github.io/portfolio-setup-and-movile-first/',
      btnSourceHref: 'https://github.com/PierreBarba',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga! Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti ad molestiae dolorem excepturi ipsam dolorum illum molestias vero veritatis fuga!',
    },
  ];
  
  function getProject(projectKey) {
    for (let i = 0; i < projects.length; i += 1) {
      if (projects[i].key === projectKey) {
        return projects[i];
      }
    }
    return false;
  }
  
  function createModal(project) {
    const projectData = getProject(project);
    const modalPopUp = `
    <article class="card-work-details-mobile show" id="card">
    <button type="button" class="btn-close">
      <img class="closePng" src="./closeButton.png" onclick=hideModal()>
    </button>
    <button type="button" class="btn-close-details">
         <img class="DesktopPopUp" src="./SnapshootPortfolio.png" alt="cancel icon">
     </button>
    <div class="card-image-details-mobile" onclick=hideModal()>
        <img src=${projectData.imagen} alt="">
    </div>  
    <section class="myRecentWorkPopUp"  id = "projects-card">
        <h2 class="subTitlePopUp">${projectData.titulo}</h2> 
        <div class="informationCard">
            <div  class = "cardTag"></div>
                <ul>
                    ${projectData.tecnologias.map((tec) => `<li class="myRecentWorkItem">${tec}</li>`).join('\n')}
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
    document.querySelector('.modal').innerHTML = modalPopUp;
    return modalPopUp;
  }
  console.log(createModal);
  // cardeElement es solo el nombre que le di para el objeto que estoy
  // creando en este caso es la tarjeta
  const createcard = (project) => {
    // const cardModal = createModal(project)
    // creando contenedor de la tarjeta
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
  
    //   // creando boton
    const buttonCardEnd = document.createElement('button');
    buttonCardEnd.type = 'button';
    buttonCardEnd.classList.add('buttongreen');
    buttonCardEnd.innerText = 'See Project';
    //fix button see project
    buttonCardEnd.setAttribute('onclick', `createModal('${project.key}')`);
  
    cardSection.appendChild(cardTitle);
    cardSection.appendChild(ulCard);
    cardSection.appendChild(buttonCardEnd);
  
    cardElement.appendChild(cardSection);
    return cardElement;
  };
  
  function hideModal() {
    const modal = document.getElementById('card');
    modal.classList.toggle('show');
  }
  console.log(hideModal);
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

const finishform = document.querySelector('.finishForm');
const email = document.querySelector('.inputEmail');
const emailError =document.querySelector('.emailError')
const regExp = /^[a-z0-9]+@[a-z0-9-]+\.[a-z0-9-.]+$/;
console.log(finishform)
finishform.addEventListener('submit', (e) => {
    if (email.value.match(regExp)){
        emailError.style.display = 'none';
        return true;
    }else {
        e.preventDefault();
        emailError.style.display = 'block';
        console.log(emailError)
        return false;
    }
})
console.log(finishform);
