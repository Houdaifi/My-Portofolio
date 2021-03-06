import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    'en': {
        Hello: "Hi šš¼! I am",
        myName: 'Houdaifa Amzil',
        job: 'Full Stack Developer',
        Aboutme: "Based in Tangier š²š¦, I'm full time full stack web developer with a short freelance experience on Mobile apps development, currently interested on sharpen my skills and write clean code."+
                "\n Outside of programming i enjoy play League of Legends and Football.",
        iwork: 'I work with...',
        Myprojects: 'Some of my projects...',
        seeResume: 'View Resume',

        city: 'Tangier, Morocco',
        SeeMore: 'View More',

        RobotHello: "Hi! Iām Houdaifa's Robot š¤",
        helpU: 'How can i help you ?',

        sayHi:'Just wanted to say Hi šš¼',
        hireU: "i'd like to hire you š¼ ",
        Based: 'Where are you based ?',

        Decathlon: 'Decathlon Maroc',

        DecathlonProject: "An Android application made for Decathlon Tangier to facilitate and organize the calls diffusion in the store.  \n  The design is based on Decathlon colors.  \n  Calls types: Ordinary calls, Emergency calls, Covid-19 construction guidance.  \n  Technologies used: JAVA, XML",

        GoogleMapsProject: 'Calculate the distance and time between two locations in the map based on travel mode and get the data in an excel file. \n  Built by Vue JS, Google Maps API',

        TriviProject: "Trivi templates is an Android application made for people who love to share Instagram templates like q&a questions, This or That games, My favorites..., Gifs challenges on their stories. \n Feautres Included:  \n -Dividing app by categories. \n -Navigate smoothly between templates. \n -Download or direct share the template. \n -Receive notifications when new templates are added. \n -App rating. \n Technlogies used: Flutter",

        RestaurationProject: "A restoration application, where the administrator add the menu from the web interface and the customer will be able to consult the list of available products, "+
                            "add them to a shopping cart and validate the order by entering his details for delivery. ",

        TrageferProject: "A website made with VueJS and Tailwind CSS for a national metalic construction company.",

        ReponseHi: 'Well thanks for passing by š,<br>I hope you\'ve enjoyed browsing my work. <br>Have a good day š',
        ResponseBased: "I'm based in Tangier, <br> A beautiful city in the north of Morocco, <br> Here is a picture of it",
        ResponsehireU: "Great, Contact me and let get that work done šŖ",

        Salesman: 'Salesman',
        ContactMe: 'Contact me',
        Email: 'E-mail',
        Phone: 'Phone',
        PhoneNumber: '+212 634 89 69 98',
        FullAdresse: 'Av Idrissia, Tangier Morocco',
        Born:"Born on 20th of June 1998",
        Single: 'Single',

        Profile:'Profile',
        Experience:'Experience',

        LicenceInfo: 'Bachelor of Web & Mobile Design and Development',
        LicenceEco: 'Bachelor of Basic Studies in Economics and Management',
        Universtiy: 'Abdelmalik Saadi University',
        OMAC: 'One Million Arab Coders',

        // Languages
        Arabic: 'Arabic',
        English: 'English',
        French: 'French',
        Spanish: 'Spanish',

        Native: 'Native',
        Advanced: 'C1',
        Intermediate: 'B2',

        Back: 'Back to Homepage',
        NotFound: 'Sorry, The page you are looking for does not exist',

        contactslogan: "Iām interested in freelance opportunities, especially ambitious projects. But if you just want to say hi or have a question, please donāt hesitate to contact me."
    },
    'fr': {
        Skills: 'CompĆ©tences',
        Projects: 'Projets ',
        Education: 'Education',
        Resume: 'CV',
        Contact: 'Contact',
        seeResume: 'Voir Mon CV',
        Myprojects: 'Certains de mes projets...',

        job: 'DĆ©veloppeur Full Stack',

        Hello: 'Salut šš¼! Je suis',
        myName: 'Houdaifa Amzil',
        Aboutme: "BasĆ© Ć  Tanger š²š¦, je suis un dĆ©veloppeur web full stack Ć  temps plein avec une courte expĆ©rience en freelance sur le dĆ©veloppement d'applications mobiles, actuellement intĆ©ressĆ© Ć  aiguiser mes compĆ©tences et Ć  Ć©crire du code propre."+
                "\n En dehors de la programmation, j'aime jouer Ć  League of Legends et au football.",
        iwork: "Je travaille avec...",
        SeeMore: 'Voir Plus',

        RobotHello: "Bonjour! Je suis le robot de Houdaifa š¤",
        helpU: 'Comment puis-je vous aider ?',

        sayHi: 'Je veux juste dire bonjour šš¼',
        Based:'OĆ¹ ĆŖtes-vous basĆ© ?',
        hireU: "je veux t'embaucher š¼",

        ReponseHi: 'Merci pour votre visite š, J\'espĆØre que vous avez apprĆ©ciĆ© mon travail, <br> Bonne journĆ©e š',
        ResponseBased: "Je suis basĆ© Ć  Tanger,<br> Une belle ville au nord du Maroc, <br> Voici une photo",
        ResponsehireU: "GĆ©nial, Contactez moi et Allons faire ce travail šŖ",

        ContactMe: 'Contactez-moi',
        Email: 'E-mail',
        Phone: 'TĆ©lephone',
        PhoneNumber: '+212 634 89 69 98',
        FullAdresse: 'Rue Idrissia, Tanger Maroc',
        Born:"NĆ© le 20 juin 1998",
        Single: 'CĆ©libataire',

        Arabic: 'Arabe',
        English: 'Anglais',
        French: 'FranĆ§ais',
        Spanish: 'Espagnol',

        Native: 'Langue maternelle',

        Salesman: 'Vendeur',

        Profile:'Profil',
        Experience:'ExpĆ©rience',

        LicenceInfo: 'Licence en Technologie de Conception et de DĆ©veloppement Web & Mobile',
        LicenceEco: "Licence d'Ć©tudes fondamentales en sciences economiques et gestion",
        Universtiy: 'UniversitĆ© Abdelmalek Saadi',
        OMAC: 'Un million de codeurs arabes',

        Back: "Retour Ć  l'accueil",
        NotFound: "DĆ©solĆ©, la page que vous recherchez n'existe pas.",

        DecathlonProject: "Une application Android rĆ©alisĆ©e pour Decathlon Tanger pour faciliter et organiser la diffusion des appels dans le magasin. \n Le design est basĆ© sur les couleurs de Decathlon.\n"  +
                        "Types d'appels : Appels ordinaires, Appels d'urgence, Conseils de construction Covid-19.  \n Technologies utilisĆ©es : JAVA, XML",
        
        GoogleMapsProject: 'Calculez la distance et le temps entre deux endroits de la carte en fonction du mode de dĆ©placement et rĆ©cupĆ©rez les donnĆ©es dans un fichier excel. \n DĆ©veloppĆ© par Vue JS, Google Maps API',

        TriviProject: "Trivi templates est une application Android faite pour les personnes qui aiment partager des templates Instagram comme des questions Q&A, des jeux This or That, My favorites..., des dĆ©fis Gifs sur leurs stories. \n"+
                    "CaractĆ©ristiques incluses :  -Division de l'application par catĆ©gories. -Navigation fluide entre les modĆØles. -TĆ©lĆ©charger ou partager directement le modĆØle. -Recevoir des notifications lorsque de nouveaux modĆØles sont ajoutĆ©s. \n"+
                    "-Classement de l'application. Technlogies utilisĆ©es : Flutter",

        RestaurationProject: "Il sāagit dāune application de restauration, oĆ¹ lāadministrateur alimente la base de donnĆ©es depuis lāinterface web et le client sera en mesure de consulter la liste des produits disponibles, \n" +
                            "de les ajouter dans un panier et de valider la commande en entrant ses coordonnĆ©es pour livraison.",

        TrageferProject: "Un site web rĆ©alisĆ© avec VueJS et Tailwind CSS pour une entreprise nationale de construction mĆ©tallique.",

        contactslogan: "Je suis intĆ©ressĆ© par les opportunitĆ©s de travail en freelance, en particulier les projets ambitieux. Mais si vous voulez juste dire bonjour ou si vous avez une question, n'hĆ©sitez pas Ć  me contacter."
    },
    'es': {
        Skills: 'Habilidades',
        Projects: 'Proyectos ',
        Resume: 'CV',
        Contact: 'Contacto',
        job: 'Full Stack Developer',
        Myprojects: 'Algunos de mis proyectos...',
        seeResume: 'Ver CV',

        Hello: 'Hola šš¼! Soy',
        myName: 'Houdaifa Amzil',
        Aboutme: "Basado en TĆ”nger š²š¦, soy desarrollador web full stack a tiempo completo con una corta experiencia como freelance en el desarrollo de aplicaciones mĆ³viles, actualmente interesado en afinar mis habilidades y escribir cĆ³digo limpio."+
                "\n Fuera de la programaciĆ³n me gusta jugar a League of Legends y al fĆŗtbol.",
        iwork: 'Yo trabajo con...',
        SeeMore: 'Ver mĆ”s',

        ContactMe: 'Contactame',
        Email: 'Correo',
        Phone: 'TelĆ©fono',
        PhoneNumber: '+212 634 89 69 98',
        FullAdresse: 'Av Idrissia, Tanger Marruecos',
        Born:"Nacido el 20 de junio de 1998",
        Single: 'Soltero',

        // Languages
        Arabic: 'Arabe',
        English: 'InglĆ©s',
        French: 'FrancĆ©s',
        Spanish: 'EspaĆ±ola',

        Native: 'idioma materno',

        Salesman: 'Vendedor',

        Profile:'Perfil',
        Experience:'Experiencia',
        Formation:'FormaciĆ³n',

        LicenceInfo: 'Licenciatura en DiseĆ±o y Desarrollo de PĆ”ginas Web y MĆ³viles',
        LicenceEco: "Licencia de estudios bĆ”sicos en ciencias econĆ³micas y de gestiĆ³n",
        Universtiy: 'Universidad Abdelmalek Saadi',
        OMAC: 'Un millĆ³n de codificadores Ć”rabes',

        Back: "Volver a la pĆ”gina principal",
        NotFound: "Lo sentimos, la pĆ”gina que busca no existe",
        
        DecathlonProject: "Une application Android rĆ©alisĆ©e pour Decathlon Tanger pour faciliter et organiser la diffusion des appels dans le magasin. \n Le design est basĆ© sur les couleurs de Decathlon.\n"  +
                        "Types d'appels : Appels ordinaires, Appels d'urgence, Conseils de construction Covid-19.  \n Technologies utilisĆ©es : JAVA, XML",
        
        GoogleMapsProject: 'Calcular la distancia y el tiempo entre dos lugares en el mapa en funciĆ³n del modo de desplazamiento y obtener los datos en un archivo Excel. \n Desarrollado por Vue JS, Google Maps API',

        TriviProject: "Trivi templates est une application Android faite pour les personnes qui aiment partager des templates Instagram comme des questions Q&A, des jeux This or That, My favorites..., des dĆ©fis Gifs sur leurs stories. \n"+
                    "CaractĆ©ristiques incluses :  -Division de l'application par catĆ©gories. -Navigation fluide entre les modĆØles. -TĆ©lĆ©charger ou partager directement le modĆØle. -Recevoir des notifications lorsque de nouveaux modĆØles sont ajoutĆ©s. \n"+
                    "-Classement de l'application. Technlogies utilisĆ©es : Flutter",

        RestaurationProject: "Una aplicaciĆ³n de restauraciĆ³n, donde el administrador aĆ±ade el menĆŗ desde la interfaz web y el cliente podrĆ” consultar la lista de productos disponibles, \n"+
                            "aĆ±adirlos a un carrito de la compra y validar el pedido introduciendo sus datos para la entrega.",

        TrageferProject: "Una web hecha con Vuejs y Tailwind CSS para una empresa nacional de construcciĆ³n metĆ”lica.",
    },
    'ar': {
        Home: 'Ų§ŁŲ±Ų¦ŁŲ³ŁŲ©',
        Skills: 'ŁŁŲ§Ų±Ų§ŲŖ',
        Projects: 'ŁŲ“Ų§Ų±ŁŲ¹ ',
        Resume: 'Ų³ŁŲ±Ų© Ų°Ų§ŲŖŁŲ©',
        Contact: 'Ų±Ų§Ų³Ł',
        seeResume: 'Ų³ŁŲ±ŲŖŁ Ų§ŁŲ°Ų§ŲŖŁŲ©',
        job: 'ŁŲ·ŁŲ± ŁŁŲ§ŁŲ¹ ŁŁŲØ',

        Hello: 'Ų£ŁŁŲ§Ł šš¼!, Ų£ŁŲ§',
        myName: 'Ų­ŲÆŁŁŲ© Ų£ŁŲ²ŁŁ',
        Aboutme: "Ų£ŁŲ·Ł ŁŁ ŁŲÆŁŁŲ© Ų·ŁŲ¬Ų©Ų Ų£Ų“ŲŖŲŗŁ Ų­Ų§ŁŁŲ§ ŁŲ·ŁŲ± ŁŁŲ§ŁŲ¹ Ų§ŁŁŁŲØ ŲØŲÆŁŲ§Ł ŁŲ§ŁŁ ŁŲ¹ ŲŖŲ¬Ų±ŲØŲ© Ų³Ų§ŲØŁŲ© ŁŁ ŲŖŲ·ŁŁŲ± ŲŖŲ·ŲØŁŁŲ§ŲŖ Ų§ŁŁŁŲ§ŲŖŁŲ Ų­Ų§ŁŁŲ§ ŁŁŲŖŁ ŲØŲµŁŁ ŁŁŲ§Ų±Ų§ŲŖŁ Ł ŁŲŖŲ§ŲØŲ© ŁŁŲÆ ŁŲøŁŁ\n.ŲØŲ¹ŁŲÆŲ§ Ų¹Ł Ų§ŁŲØŲ±ŁŲ¬Ų©Ų Ų£Ų³ŲŖŁŲŖŲ¹ ŲØŁŲ¹ŲØ Ų§ŁŲ£ŁŲ¹Ų§ŲØ Ų£ŁŲ„ŁŁŲŖŲ±ŁŁŁŲ© Ł ŁŲ±Ų© Ų§ŁŁŲÆŁ",
        iwork: '...Ų£Ų¹ŁŁ ŲØ',

        Myprojects: '...ŲØŲ¹Ų¶ ŁŁ ŁŲ“Ų§Ų±ŁŲ¹Ł',
        SeeMore: 'Ų“Ų§ŁŲÆ Ų£ŁŲ«Ų±',
        
        //Robot chat 
        RobotHello: "Ų£ŁŁŲ§Ł Ł Ų³ŁŁŲ§Ł š¤",
        helpU: 'ŁŁŁ ŁŁŁŁŁŁ ŁŲ³Ų§Ų¹ŲÆŲŖŁ Ų',

        sayHi: 'šš¼Ų£Ų±ŲÆŲŖ ŁŁŲ· Ų£Ł Ų£ŁŁŁ ŁŲ±Ų­ŲØŲ§',
        Based:'Ų£ŁŁ ŲŖŁŲ·Ł Ų',
        hireU: 'š¼ Ų£ŁŲÆ ŲŖŁŲøŁŁŁ',
        // End Robot chat

        ContactMe: 'Contactame',
        Email: 'Ų§ŁŲ„ŁŁŁŁ',
        Phone: 'Ų§ŁŁŲ§ŲŖŁ',
        PhoneNumber: '+Ł¢Ł”Ł¢ Ł¦Ł£Ł¤ ŁØŁ© Ł¦Ł© Ł©ŁØ',
        FullAdresse: 'Ų­Ł Ų§ŁŲ„ŲÆŲ±ŁŲ³ŁŲ©Ų Ų·ŁŲ¬Ų© Ų§ŁŁŲŗŲ±ŲØ',
        Born:"ŁŁŲ§ŁŁŲÆ 20 ŁŁŁŁŁ 1998 ",
        Single: 'Ų¹Ų§Ų²ŲØ',

        Salesman: 'ŁŁŲøŁ Ų§ŁŁŲØŁŲ¹Ų§ŲŖ',

        ReponseHi: 'Ų­Ų³ŁŲ§ Ų“ŁŲ±Ų§ Ų¹ŁŁ ŁŲ±ŁŲ±Ł š, Ų§ŲŖŁŁŁ ŁŁ ŁŁŁ Ų¬ŁŲÆš',
        ResponseBased: "Ų£ŁŲ§ ŁŁŁŁ ŁŁ Ų·ŁŲ¬Ų©Ų ŁŲÆŁŁŲ© Ų¬ŁŁŁŲ© ŲŖŁŲ¹ ŁŁ Ų“ŁŲ§Ł Ų§ŁŁŲŗŲ±ŲØŲ ŁŲ°Ł ŲµŁŲ±Ų© ŁŁŲ§",
        ResponsehireU: 'Ų¬ŁŁŁŲ Ų±Ų§Ų³ŁŁŁ Ų§ŁŲ£Ł Ł ŁŁŁŁ ŲØŲ„ŁŁŲ§Ų” ŁŲ°Ų§ Ų§ŁŲ¹ŁŁ',

        Profile:'ŲØŲ±ŁŁŁŁ',
        Experience:'Ų®ŲØŲ±Ų© ',
        Formation:'ŲŖŁŁŁŁ',

        LicenceInfo: 'ŲØŁŲ§ŁŁŲ±ŁŁŲ³ ŲŖŲµŁŁŁ ŁŲŖŲ·ŁŁŲ± ŲŖŲ·ŲØŁŁŲ§ŲŖ Ų§ŁŁŁŲØ ŁŲ§ŁŁŁŲØŲ§ŁŁ',
        LicenceEco: 'ŲØŁŲ§ŁŁŲ±ŁŁŲ³ ŁŁ Ų§ŁŲÆŲ±Ų§Ų³Ų§ŲŖ Ų§ŁŲ£Ų³Ų§Ų³ŁŲ© ŁŁ Ų§ŁŲ§ŁŲŖŲµŲ§ŲÆ ŁŲ§ŁŲ„ŲÆŲ§Ų±Ų©',
        Universtiy: 'Ų¬Ų§ŁŲ¹Ų© Ų¹ŲØŲÆ Ų§ŁŁŁŁ Ų§ŁŲ³Ų¹ŲÆŁ',
        OMAC: 'ŁŲØŲ§ŲÆŲ±Ų© ŁŁŁŁŁ ŁŲØŲ±ŁŲ¬ Ų¹Ų±ŲØŁ',

        // Languages
        Arabic: 'Ų¹Ų±ŲØŁ',
        English: 'Ų„ŁŲ¬ŁŁŲ²Ł',
        French: 'ŁŲ±ŁŲ³Ł',
        Spanish: 'Ų§ŁŲ£Ų³ŲØŲ§ŁŁŲ©',

        // Languages level
        Native: 'Ų§ŁŁŲŗŲ© Ų§ŁŲ£Ł',
        Advanced: 'C1',
        Intermediate: 'B2',

        Back: "Ų§ŁŲ¹ŁŲÆŲ© Ų„ŁŁ Ų§ŁŲµŁŲ­Ų© Ų§ŁŲ±Ų¦ŁŲ³ŁŲ© ",
        NotFound: "Ų¹Ų°Ų±Ų§ Ų Ų§ŁŲµŁŲ­Ų© Ų§ŁŲŖŁ ŲŖŲØŲ­Ų« Ų¹ŁŁŲ§ ŲŗŁŲ± ŁŁŲ¬ŁŲÆŲ© "

    },
};

const i18n = new VueI18n({
    locale: 'en', // set locale
    // fallbackLocale: 'es', // set fallback locale
    messages, // set locale messages
});

export default i18n