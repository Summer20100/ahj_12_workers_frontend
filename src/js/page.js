import fallbackIcon from '../assets/png/feather-pen.png';

export default class Page {
  constructor() {
    this.body = document.body;
    this.container = document.querySelector('.container');
    this.timeNow = new Date();
    this.timestamp = `${this.timeNow.getHours()}:${this.timeNow.getMinutes()} ${this.timeNow.getDay()}.${this.timeNow.getMonth()}.${this.timeNow.getFullYear()}`;
    this.icon = fallbackIcon;
    this.description = [
      'Science Advances: вороны способны распознать лингвистическую рекурсию',
      'Science Alert: банан оказался естественным источником радиации',
      'SM NEWS: Пользователи GitHub подали иск против Microsoft за использование их кода для модели ИИ',
    ];
  }

  loadingRender() {
    this.newsEl = document.createElement('div');
    this.newsEl.className = 'news';
    this.titleEl = document.createElement('div');
    this.titleEl.className = 'news__title';
    this.titleEl.textContent = 'Научные новости';
    this.updateBtnEl = document.createElement('div');
    this.updateBtnEl.className = 'update__btn';
    this.updateBtnEl.textContent = 'Обновить';
    this.articlesEl = document.createElement('div');
    this.articlesEl.className = 'articles';
    this.newsEl.append(this.titleEl, this.updateBtnEl, this.articlesEl);
    this.container.append(this.newsEl);
    this.body.append(this.container);
    for (let i = 0; i < 3; i += 1) {
      this.loadingArticle(this.timestamp, this.icon, this.description[i]);
    }
  }

  loadingArticle(timestamp, image, description) {
    this.articleEl = document.createElement('div');
    this.articleEl.className = 'article';
    this.timestampEl = document.createElement('div');
    this.timestampEl.className = 'timestamp loading';
    this.timestampEl.textContent = timestamp;
    this.descriptionEl = document.createElement('div');
    this.descriptionEl.className = 'article__description loading';
    this.descriptionEl.textContent = description;
    this.imageEl = document.createElement('img');
    this.imageEl.className = 'article__image loading';
    this.imageEl.style.width = `${75}px`;
    this.imageEl.style.height = `${75}px`;
    this.articleEl.append(this.timestampEl, this.imageEl, this.descriptionEl);
    this.articlesEl.append(this.articleEl);
  }

  renderArticle(timestamp, image, description) {
    this.articleEl = document.createElement('div');
    this.articleEl.className = 'article';
    this.timestampEl = document.createElement('div');
    this.timestampEl.className = 'timestamp';
    this.timestampEl.textContent = timestamp;
    this.descriptionEl = document.createElement('div');
    this.descriptionEl.className = 'article__description';
    this.descriptionEl.textContent = description;
    this.imageEl = document.createElement('img');
    this.imageEl.src = image;
    this.imageEl.className = 'article__image';
    this.imageEl.style.width = `${75}px`;
    this.imageEl.style.height = `${75}px`;
    this.articleEl.append(this.timestampEl, this.imageEl, this.descriptionEl);
    this.articlesEl.append(this.articleEl);
  }

  renderError() {
    this.errorEl = document.createElement('div');
    this.errorEl.className = 'error';
    this.errorEl.style.width = `${document.querySelector('.news').offsetWidth}px`;
    this.errorEl.style.height = `${document.querySelector('.news').offsetHeight}px`;
    this.errorTextEl = document.createElement('div');
    this.errorTextEl.className = 'error__msg';
    this.p1 = document.createElement('p');
    this.p1.textContent = 'Не удалось загрузить данные';
    this.p2 = document.createElement('p');
    this.p2.textContent = 'Проверьте подключение';
    this.p3 = document.createElement('p');
    this.p3.textContent = 'и обновите страницу';
    this.errorTextEl.append(this.p1, this.p2, this.p3);
    this.errorEl.append(this.errorTextEl);
    this.body.append(this.errorEl);
  }
}
