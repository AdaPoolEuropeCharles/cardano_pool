import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { englishContent } from './content/english';
import { frenchContent } from './content/french';
import { germanContent } from './content/german';
import { italianContent } from './content/italian';
import { polishContent } from './content/polish';
import { portugueseContent } from './content/portuguese';
import { spanishContent } from './content/spanish';

const updateContent = () => {
  document.getElementById('title')!!.innerHTML = i18next.t('title');
  document.getElementById('whoAreWe')!!.innerHTML = i18next.t('whoAreWe');
  document.getElementById('whyJoinUs')!!.innerHTML = i18next.t('whyJoinUs');
  document.getElementById('poolDetails')!!.innerHTML = i18next.t('poolDetails');
  document.getElementById('s1.title')!!.innerHTML = i18next.t('whoAreWe');
  document.getElementById('s1.p1')!!.innerHTML = i18next.t('s1.p1');
  document.getElementById('s1.p2')!!.innerHTML = i18next.t('s1.p2');
  document.getElementById('s1.p3')!!.innerHTML = i18next.t('s1.p3');
  document.getElementById('s1.p4')!!.innerHTML = i18next.t('s1.p4');
  document.getElementById('s2.title')!!.innerHTML = i18next.t('whyJoinUs');
  document.getElementById('s2.p1')!!.innerHTML = i18next.t('s2.p1');
  document.getElementById('s2.p2')!!.innerHTML = i18next.t('s2.p2');
  document.getElementById('s2.p3')!!.innerHTML = i18next.t('s2.p3');
  document.getElementById('s2.p4')!!.innerHTML = i18next.t('s2.p4');
  document.getElementById('s2.p5')!!.innerHTML = i18next.t('s2.p5');
  document.getElementById('s2.p6')!!.innerHTML = i18next.t('s2.p6');
  document.getElementById('s2.p7')!!.innerHTML = i18next.t('s2.p7');
  document.getElementById('s2.p8')!!.innerHTML = i18next.t('s2.p8');
  document.getElementById('s2.p9')!!.innerHTML = i18next.t('s2.p9');
  document.getElementById('s3.title')!!.innerHTML = i18next.t('poolDetails');
  document.getElementById('s3.p1')!!.innerHTML = i18next.t('s3.p1');
  document.getElementById('s3.p2')!!.innerHTML = i18next.t('s3.p2');
  document.getElementById('s3.p3')!!.innerHTML = i18next.t('s3.p3');
  document.getElementById('s3.p4')!!.innerHTML = i18next.t('s3.p4');
  document.getElementById('s3.p5')!!.innerHTML = i18next.t('s3.p5');
  document.getElementById('s3.p6')!!.innerHTML = i18next.t('s3.p6');
  document.getElementById('s3.p7')!!.innerHTML = i18next.t('s3.p7');
  document.getElementById('s3.p8')!!.innerHTML = i18next.t('s3.p8');
  document.getElementById('s3.p9')!!.innerHTML = i18next.t('s3.p9');
  document.getElementById('s3.p10')!!.innerHTML = i18next.t('s3.p10');
  document.getElementById('s3.p11')!!.innerHTML = i18next.t('s3.p11');
  document.getElementById('s3.p12')!!.innerHTML = i18next.t('s3.p12');
  document.getElementById('s3.p13')!!.innerHTML = i18next.t('s3.p13');
  document.getElementById('footer.p1')!!.innerHTML = i18next.t('footer.p1');
};

i18next.use(LanguageDetector).init(
  {
    fallbackLng: 'en',
    debug: true,
    resources: {
      en: englishContent,
      fr: frenchContent,
      pl: polishContent,
      it: italianContent,
      de: germanContent,
      es: spanishContent,
      pt: portugueseContent,
    },
  },
  function (err, t) {
    // init set content
    updateContent();
  }
);

document.querySelector('#lang-en')!!.addEventListener('click', () => {
  i18next.changeLanguage('en');
});

document.querySelector('#lang-fr')!!.addEventListener('click', () => {
  i18next.changeLanguage('fr');
});

document.querySelector('#lang-es')!!.addEventListener('click', () => {
  i18next.changeLanguage('es');
});

document.querySelector('#lang-de')!!.addEventListener('click', () => {
  i18next.changeLanguage('de');
});

document.querySelector('#lang-it')!!.addEventListener('click', () => {
  i18next.changeLanguage('it');
});

document.querySelector('#lang-pt')!!.addEventListener('click', () => {
  i18next.changeLanguage('pt');
});

document.querySelector('#lang-pl')!!.addEventListener('click', () => {
  i18next.changeLanguage('pl');
});


i18next.on('languageChanged', () => {
  updateContent();
});
