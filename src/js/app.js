import API from './API';
import Controls from './controls';
import Page from './page';
import '../../service.worker';
import '../css/style.css';

const app = new Controls(new Page(), new API());
app.init();
app.renderArticle();
