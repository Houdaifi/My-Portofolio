import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        Hello: "Hi 👋🏼! I'am",
        myName: 'Houdaifa Amzil',
        job: 'Junior Full Stack Developer',
        Aboutme: 'I started to write my first lines of code 5 years ago, starting by learning native Android app developement to Flutter, where i made several apps for local companies and for Play Store.'+
                ' Recently i had the opportunity to join a great team of developers on my first full time job, where i become more concentrated on Web Developement.',
        iwork: 'I love to work with...',
        Myprojects: 'Some of my projects...',
        seeResume: 'View Resume',

        city: 'Tangier, Morocco',
        SeeMore: 'View More'
    },
    'fr': {
        Skills: 'Compétences',
        Projects: 'Projets ',
        Resume: 'CV',
        Contact: 'Contact',
        seeResume: 'Voir Mon CV',
        Myprojects: 'Certains de mes projets...',

        job: 'Développeur Junior Full Stack',

        Hello: 'Salut 👋🏼! Je suis',
        myName: 'Houdaifa Amzil',
        Aboutme: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est sed eaque distinctio saepe, commodi, nisi enim aliquam quae labore quidem vitae tempore! Fuga.',
        iwork: "J'adore travailler avec...",
        SeeMore: 'Voir Plus'
    },
    'es': {
        Skills: 'Habilidades',
        Projects: 'Proyectos ',
        Resume: 'CV',
        Contact: 'Contacto',
        job: 'Junior Full Stack Developer',
        Myprojects: 'Algunos de mis proyectos...',
        seeResume: 'Ver CV',

        Hello: 'Hola 👋🏼! Soy',
        myName: 'Houdaifa Amzil',
        Aboutme: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus est sed eaque distinctio saepe, commodi, nisi enim aliquam quae labore quidem vitae tempore! Fuga.',
        iwork: 'Me encanta trabajar con...',
        SeeMore: 'Ver más'
    },
    'ar': {
        Home: 'الرئيسية',
        Skills: 'مهارات',
        Projects: 'مشاريع ',
        Resume: 'سيرة ذاتية',
        Contact: 'راسل',
        seeResume: 'سيرتي الذاتية',
        job: 'مطور مواقع ويب',

        Hello: 'أهلاً 👋🏼!, أنا',
        myName: 'حديفة أمزيل',
        Aboutme: 'بدأت رحلتي مع البرمجة منذ 5 أعوام، عندما بدأت بتعلم برمجة تطبيقات الهواتف، حيت قمت بتطوير بعض التطبيقات لشركات محلية و نشر بعضها على متجر جوجل ستور.مؤخراً قمت بالإلتحاق بفريق برمجة رائع في أول عمل لي في البرمجة بدوام كامل، حيت صرت مركزاً أكثر على تطوير تطبيقات الويب.',
        iwork: '...أحب العمل ب',

        Myprojects: '...بعض من مشاريعي',
        SeeMore: 'شاهد أكثر'
    },
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    // fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n