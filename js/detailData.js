const detailData = () => {
  const preloader = document.querySelector('.preloder');

  const renderGenreList = (genres) => {
    const dropdownBlock = document.querySelector('.header__menu .dropdown');

    genres.forEach(genre => {
      dropdownBlock.insertAdjacentHTML('beforeend', `
          <li><a href="./categories.html?genre=${genre}">${genre}</a></li>
        `)
    }) 
  }

  const renderAnimeDetails = (array, itemId) => {
    const animeObj = array.find(item => item.id == itemId);
    const imageBlock = document.querySelector('.anime__details__pic');
    const viewsBlock = document.querySelector('.view');
    const titleBlock = document.querySelector('.anime__details__title h3');
    const subtitleBlock = document.querySelector('.anime__details__title span');
    const descriptionBlock = document.querySelector('.anime__details__text p');
    const widgetList = document.querySelectorAll('.anime__details__widget ul li');
    const breadcrumb = document.querySelector('.breadcrumb__links span');

    if (animeObj) {
      imageBlock.dataset.setbg = animeObj.image;
      viewsBlock.innerHTML = '';
      viewsBlock.insertAdjacentHTML('beforeend', `<i class="fa fa-eye"></i> ${animeObj.views}`);

      titleBlock.textContent = animeObj.title;
      subtitleBlock.textContent = animeObj['original-title'];
      descriptionBlock.textContent = animeObj.description;

      widgetList[0].insertAdjacentHTML('beforeend', `<span>Date aired:</span> ${animeObj.date}`);
      widgetList[1].insertAdjacentHTML('beforeend', `<span>Rating:</span> ${animeObj.rating}`);
      widgetList[2].insertAdjacentHTML('beforeend', `<span>Genre:</span> ${animeObj.tags.join(', ')}`);

      breadcrumb.textContent = animeObj.genre;

      document.querySelectorAll('.set-bg').forEach((elem) => {
        elem.style.backgroundImage = `url(${elem.dataset.setbg})`;
      });

      // убираем прелоадер
      setTimeout(() => {
        preloader.classList.remove('active');
      }, 500);
    } else {
      console.log('Аниме отсутствует!');
    }
  }

  fetch('./db.json')
    .then((response) => response.json())
    .then((data) => {
      const genres = new Set();
      const genreParams = new URLSearchParams(window.location.search).get("itemId");

      data.anime.forEach((item) => {
        genres.add(item.genre)
      });

      if (genreParams) {
        renderAnimeDetails(data.anime, genreParams);
      } else {
        console.log('Аниме отсутствует!');
      }
      renderGenreList(genres);
    });
  
}

detailData();