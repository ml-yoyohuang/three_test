import 'es6-promise/auto';
// import '@/util/init';
import '~/css/entry.scss';

console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV !== 'production') {
  // hack hot reload pug
  require('!!raw-loader!~/html/_master.pug');// eslint-disable-line
  require('!!raw-loader!~/html/gift.pug');// eslint-disable-line
}
document.getElementById('link-gift').classList.add('active');
