const AFFILIATE_TAGS = {
  ja: 'YOUR-JP-TAG-20',
  en: 'YOUR-US-TAG-20'
};

function affLink(asin, lang) {
  const tag = AFFILIATE_TAGS[lang] || AFFILIATE_TAGS.ja;
  const domain = lang === 'en' ? 'www.amazon.com' : 'www.amazon.co.jp';
  return `https://${domain}/dp/${asin}?tag=${tag}`;
}

document.addEventListener('DOMContentLoaded', function() {
  const lang = document.documentElement.lang === 'en' ? 'en' : 'ja';
  document.querySelectorAll('[data-asin]').forEach(function(el) {
    const asin = el.getAttribute('data-asin');
    el.href = affLink(asin, lang);
  });
});
