// App script: i18n, gallery slider, dark/light toggle, AOS init
const LOCALES = {
  en: {
    "hero.title":"Modern, colorful educational tool for teachers",
    "hero.subtitle":"Built for middle-school teachers today — adapting soon for primary & high schools. Manage classes, grades, observations and communicate via project chats.",
    "hero.ctaPrimary":"Get started",
    "hero.ctaSecondary":"Preview app",
    "about.title":"What is DZ Teacher's Tool?",
    "about.subtitle":"A smart mobile-first application that helps teachers manage rosters, enter trimester grades, record observations, and stay connected with the team via the teacher project chats.",
    "about.f1Title":"Class & roster management","about.f1Body":"Create classes, organize students and export rosters.",
    "about.f2Title":"Grades & observations","about.f2Body":"Enter trimester scores, write observations and track progress.",
    "about.f3Title":"Manage via project chats","about.f3Body":"We coordinate setup and custom support directly through the teacher project chats.",
    "about.f4Title":"Localized & secure","about.f4Body":"Full EN/FR/AR support and responsible privacy-first design.",
    "features.title":"Key Features",
    "features.c1Title":"Manage classes & students","features.c1Body":"Fast student search, batch imports and class templates.",
    "features.c2Title":"Grades & reports","features.c2Body":"Trimester averages, export to PDF/Excel, and colorized notes.",
    "features.c3Title":"Teacher tools","features.c3Body":"Observation templates, quick edits and role-based actions.",
    "features.c4Title":"Cloud & offline","features.c4Body":"Local-first UX backed by Firestore for sync and backups.",
    "gallery.title":"In-app Gallery","gallery.subtitle":"Swipe through screens inside a phone frame. Use next/prev or autoplay.",
    "pricing.title":"Plans & Pricing","pricing.subtitle":"Choose a plan that matches your school calendar.",
    "pricing.trimesterTitle":"Trimester","pricing.yearTitle":"Educational Year",
    "pricing.p1":"All features included","pricing.p2":"Email & form support","pricing.p3":"Ideal for trials",
    "pricing.p4":"All features included","pricing.p5":"Priority support","pricing.p6":"Best annual value","pricing.cta":"Contact",
    "contact.title":"Contact & Support","contact.subtitle":"Questions, activation, integrations or school-wide deployments — reach us.","contact.emailTitle":"Email support","contact.formTitle":"Request form","contact.formHint":"Fill the Google Form to start","contact.privacyTitle":"Privacy policy","contact.privacyHint":"Read how we protect your data"
  },
  fr: {
    "hero.title":"Outil moderne et coloré pour les enseignants",
    "hero.subtitle":"Conçu pour les enseignants du collège aujourd'hui — adapté bientôt pour le primaire et le lycée. Gérez les classes, notes, observations et communiquez via les chats du projet enseignant.",
    "hero.ctaPrimary":"Commencer","hero.ctaSecondary":"Voir l'app",
    "about.title":"Qu'est-ce que DZ Teacher's Tool ?",
    "about.subtitle":"Application mobile pensée pour aider les enseignants à gérer les effectifs, saisir les notes trimestrielles, enregistrer des observations et rester connectés via les chats du projet.",
    "about.f1Title":"Gestion des classes & effectifs","about.f1Body":"Créez des classes, organisez les élèves et exportez les listes.",
    "about.f2Title":"Notes & observations","about.f2Body":"Saisissez les notes, écrivez des observations et suivez la progression.",
    "about.f3Title":"Gestion via les chats du projet","about.f3Body":"Nous coordonnons l'installation et le support via les chats du projet enseignant.",
    "about.f4Title":"Localisé & sûr","about.f4Body":"Support complet EN/FR/AR avec design respectueux de la vie privée.",
    "features.title":"Principales fonctionnalités",
    "features.c1Title":"Gérer classes & élèves","features.c1Body":"Recherche rapide, import en lot et modèles de classe.",
    "features.c2Title":"Notes & rapports","features.c2Body":"Moyennes trimestrielles, export PDF/Excel, notes colorisées.",
    "features.c3Title":"Outils enseignant","features.c3Body":"Modèles d'observation, éditions rapides et actions par rôle.",
    "features.c4Title":"Cloud & hors-ligne","features.c4Body":"UX locale avec Firestore pour synchronisation et sauvegarde.",
    "gallery.title":"Galerie intégrée","gallery.subtitle":"Feuilletez les écrans dans un cadre de téléphone. Utilisez précédent/suivant ou lecture automatique.",
    "pricing.title":"Plans & Tarifs","pricing.subtitle":"Choisissez la formule adaptée à votre calendrier scolaire.",
    "pricing.trimesterTitle":"Trimestre","pricing.yearTitle":"Année scolaire",
    "pricing.p1":"Toutes les fonctions incluses","pricing.p2":"Support email & formulaire","pricing.p3":"Idéal pour essais",
    "pricing.p4":"Toutes les fonctions incluses","pricing.p5":"Support prioritaire","pricing.p6":"Meilleure valeur annuelle","pricing.cta":"Contacter",
    "contact.title":"Contact & Support","contact.subtitle":"Questions, activation, intégrations ou déploiements scolaires — contactez-nous.","contact.emailTitle":"Support e-mail","contact.formTitle":"Formulaire","contact.formHint":"Remplissez le formulaire Google","contact.privacyTitle":"Politique de confidentialité","contact.privacyHint":"Consultez comment nous protégeons vos données"
  },
  ar: {
    "hero.title":"أداة عصرية وملوّنة للمعلمين",
    "hero.subtitle":"مصممة لمدرسي التعليم المتوسط اليوم — وسندعم قريبًا الابتدائي والثانوي. إدارة الأقسام، الدرجات، والملاحظات والتواصل عبر محادثات المشروع.",
    "hero.ctaPrimary":"ابدأ الآن","hero.ctaSecondary":"معاينة التطبيق",
    "about.title":"ما هي DZ Teacher's Tool؟",
    "about.subtitle":"تطبيق مخصّص للجوال يساعد المعلمين على إدارة قوائم التلاميذ، إدخال علامات الفصول، تسجيل الملاحظات، والتواصل عبر محادثات المشروع.",
    "about.f1Title":"إدارة الأقسام و القوائم","about.f1Body":"إنشاء الأقسام، تنظيم التلاميذ وتصدير القوائم.",
    "about.f2Title":"العلامات و الملاحظات","about.f2Body":"إدخال العلامات الفصلية، تسجيل الملاحظات ومتابعة التقدّم.",
    "about.f3Title":"الإدارة عبر محادثات المشروع","about.f3Body":"ننسّق الإعداد والدعم عبر محادثات مشروع المعلمين.",
    "about.f4Title":"محلية و آمنة","about.f4Body":"دعم كامل بالعربية/الفرنسية/الإنجليزية وتصميم يحترم الخصوصية.",
    "features.title":"الميزات الرئيسية",
    "features.c1Title":"إدارة الأقسام و الطلاب","features.c1Body":"بحث سريع، استيراد بالجملة ونماذج أقسام.",
    "features.c2Title":"الدرجات و التقارير","features.c2Body":"متوسطات الفصول، تصدير PDF/Excel، و ملاحظات ملونة.",
    "features.c3Title":"أدوات المعلم","features.c3Body":"قوالب ملاحظة، تعديلات سريعة و صلاحيات حسب الدور.",
    "features.c4Title":"سحابي و يدعم العمل دون اتصال","features.c4Body":"تجربة محلية مدعومة بـ Firestore للمزامنة والنسخ الاحتياطي.",
    "gallery.title":"معرض داخل التطبيق","gallery.subtitle":"تصفّح الواجهات داخل إطار هاتف. استخدم السابق/التالي أو التشغيل التلقائي.",
    "pricing.title":"الخطط والأسعار","pricing.subtitle":"اختر الخطة المتوافقة مع التقويم الدراسي.",
    "pricing.trimesterTitle":"كل فصل دراسي","pricing.yearTitle":"السنة الدراسية",
    "pricing.p1":"جميع الميزات متاحة","pricing.p2":"دعم عبر البريد و النموذج","pricing.p3":"مناسب للتجربة",
    "pricing.p4":"جميع الميزات متاحة","pricing.p5":"دعم ذو أولوية","pricing.p6":"أفضل قيمة سنوية","pricing.cta":"تواصل",
    "contact.title":"التواصل والدعم","contact.subtitle":"الأسئلة، التفعيل، التكاملات أو النشر على مستوى المدرسة — تواصل معنا.","contact.emailTitle":"دعم البريد الإلكتروني","contact.formTitle":"نموذج الطلب","contact.formHint":"املأ نموذج Google","contact.privacyTitle":"سياسة الخصوصية","contact.privacyHint":"اطّلع على كيفية حماية بياناتك"
  }
};

const GALLERY = [
  "https://firebasestorage.googleapis.com/v0/b/teachertooldz.firebasestorage.app/o/1.png?alt=media&token=a0750f75-e654-42e3-848b-cfd6ffab193a",
  "https://firebasestorage.googleapis.com/v0/b/teachertooldz.firebasestorage.app/o/2.png?alt=media&token=c1dd97c4-28e7-4d89-807b-3a9fd355bd7b",
  "https://firebasestorage.googleapis.com/v0/b/teachertooldz.firebasestorage.app/o/3.png?alt=media&token=b867255e-e3ab-4979-9440-8105f09517d5",
  "https://firebasestorage.googleapis.com/v0/b/teachertooldz.firebasestorage.app/o/4.png?alt=media&token=175e0156-108f-4d62-b1bf-27d7f2cc1107",
  "https://firebasestorage.googleapis.com/v0/b/teachertooldz.firebasestorage.app/o/5.png?alt=media&token=80ad0339-c6dd-4a3c-8e0a-cb111220aec9"
];

let lang = localStorage.getItem('lang') || 'en';
let current = 0;
let autoplay = true;
let autoplayInterval = null;

function applyLocale() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = LOCALES[lang][key] || LOCALES['en'][key] || '';
    if(text) el.textContent = text;
  });
  // RTL if arabic
  if(lang === 'ar') {
    document.documentElement.dir = 'rtl';
    document.body.style.fontFamily = 'Cairo, Inter, system-ui, sans-serif';
  } else {
    document.documentElement.dir = 'ltr';
    document.body.style.fontFamily = 'Inter, system-ui, sans-serif';
  }
}

function setLang(l){
  lang = l;
  localStorage.setItem('lang', l);
  applyLocale();
}

function initLangButtons(){
  document.querySelectorAll('.lang-btn').forEach(b=>{
    b.addEventListener('click', ()=> setLang(b.dataset.lang));
    if(b.dataset.lang === lang) b.classList.add('active');
  });
}

function updateGallery(){
  const img = document.getElementById('galleryImage');
  const hero = document.getElementById('heroCarousel');
  img.src = GALLERY[current];
  if(hero) hero.src = GALLERY[current];
  document.querySelectorAll('.dot').forEach((d,idx)=> d.classList.toggle('active', idx===current));
}

function next(){ current = (current+1) % GALLERY.length; updateGallery(); }
function prev(){ current = (current-1+GALLERY.length) % GALLERY.length; updateGallery(); }

function initGallery(){
  const dotsWrap = document.getElementById('dots');
  dotsWrap.innerHTML = '';
  GALLERY.forEach((_,i)=>{
    const btn = document.createElement('button');
    btn.className = 'dot';
    btn.addEventListener('click', ()=>{ current = i; updateGallery(); });
    dotsWrap.appendChild(btn);
  });
  document.getElementById('prevBtn').addEventListener('click', prev);
  document.getElementById('nextBtn').addEventListener('click', next);
  updateGallery();
  // autoplay
  autoplayInterval = setInterval(()=>{ if(autoplay) next(); }, 3800);
}

// theme toggle
function initTheme(){
  const tBtn = document.getElementById('themeToggle');
  const saved = localStorage.getItem('theme') || 'light';
  document.body.classList.toggle('dark', saved === 'dark');
  tBtn.addEventListener('click', ()=>{
    const isDark = document.body.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    tBtn.innerHTML = isDark ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  });
  tBtn.innerHTML = document.body.classList.contains('dark') ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
}

// init
document.addEventListener('DOMContentLoaded', ()=>{
  // year
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();
  initLangButtons();
  applyLocale();
  initGallery();
  initTheme();
  // hero rotate small
  setInterval(()=>{ current = (current+1)%GALLERY.length; document.getElementById('heroCarousel').src = GALLERY[current]; }, 4500);
  AOS.init({ once: true, duration: 700 });
});
