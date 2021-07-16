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
        iwork: 'I work with...',
        Myprojects: 'Some of my projects...',
        seeResume: 'View Resume',

        city: 'Tangier, Morocco',
        SeeMore: 'View More',

        RobotHello: "Hi! I’m Houdaifa's Robot 🤖",
        helpU: 'How can i help you ?',

        sayHi:'Just wanted to say Hi 👋🏼',
        hireU: "i'd like to hire you 💼 ",
        TellJoke: 'Tell me a joke',
        Based: 'Where are you based ?',

        ReponseHi: 'Well thanks for passing by 😀,<br>I hope you\'ve enjoyed browsing my work. <br>Have a good day 🙏',
        ResponseBased: "I'm based in Tangier, <br> A beautiful city in the north of Morocco, <br> Here is a picture of it",
        Joke: "Q: What's the object-oriented way to become wealthy ?<br> A: Inheritance 😂😂😂",
        ResponsehireU: "Great, Contact me and let get that work done 💪"
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
        iwork: "Je travaille avec...",
        SeeMore: 'Voir Plus',

        RobotHello: "Bonjour! Je suis le robot de Houdaifa 🤖",
        helpU: 'Comment puis-je vous aider ?',

        sayHi: 'Je veux juste dire bonjour 👋🏼',
        Based:'Où êtes-vous basé ?',
        hireU: "je veux t'embaucher 💼",

        ReponseHi: 'Merci pour votre visite 😀, J\'espère que vous avez apprécié mon travail, <br> Bonne journée 🙏',
        ResponseBased: "Je suis basé à Tanger,<br> Une belle ville au nord du Maroc, <br> Voici une photo",
        ResponsehireU: "Génial, Contactez moi et Allons faire ce travail 💪"
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
        iwork: 'Yo trabajo con...',
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
        iwork: '...أعمل ب',

        Myprojects: '...بعض من مشاريعي',
        SeeMore: 'شاهد أكثر',
        
        //Robot chat 
        RobotHello: "أهلاً و سهلاً 🤖",
        helpU: 'كيف يمكنني مساعدتك ؟',

        sayHi: '👋🏼أردت فقط أن أقول مرحبا',
        Based:'أين تقطن ؟',
        TellJoke: 'أخبرني نكتة',
        hireU: '💼 أود توظيفك',

        ReponseHi: 'حسنا شكرا على مرورك 😀, اتمنى لك يوم جيد🙏',
        ResponseBased: "أنا مقيم في طنجة، مدينة جميلة تقع في شمال المغرب، هذه صورة لها",
        Joke: "Q: What's the object-oriented way to become wealthy ?<br> A: Inheritance 😂😂😂",
        ResponsehireU: 'جميل، راسلني الأن و لنقم بإنهاء هذا العمل'
    },
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    // fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n