import type { Locale } from '@/lib/i18n';

export interface PowerTrackerContent {
  overview: string;
  challenge: string;
  solution: string;
  features: string[];
  architecture: string[];
  stack: { group: string; items: string[] }[];
  hurdles: string[];
  status: string;
  vision: string;
}

export const powerTrackerContent: Record<Locale, PowerTrackerContent> = {
  fr: {
    overview:
      "PowerTracker est une application Android conçue pour aider les utilisateurs à comprendre et suivre leur consommation d'électricité. Le projet explore comment le logiciel peut rendre la consommation énergétique plus lisible grâce au suivi, aux objectifs, à la visualisation de données et à l'assistance intelligente.",
    challenge:
      "La plupart des foyers ne disposent d'aucun outil simple pour comprendre leur consommation d'électricité. Les factures restent obscures, sans détail ni repère, et il est difficile de savoir si l'on consomme trop ou comment progresser.",
    solution:
      "Une application Android qui centralise la lecture du compteur, la visualisation graphique de la consommation, la définition d'objectifs et des astuces quotidiennes, avec une extraction assistée des informations du compteur par OCR.",
    features: [
      'Authentification utilisateur',
      "Parcours d'accueil (onboarding)",
      "Tableau de bord de consommation d'électricité",
      'Visualisations et graphiques de consommation',
      "Objectifs de consommation d'électricité",
      'Paramètres et gestion du profil',
      'Astuces quotidiennes via WorkManager',
      "Extraction OCR des informations du compteur d'électricité",
      "Interface énergétique et présentation des données",
    ],
    architecture: [
      'Architecture MVVM',
      'Repository Pattern',
      'AuthRepository et UserRepository',
      'ViewModels et ViewModelFactory',
      'WorkManager pour les tâches planifiées',
      'Navigation ViewPager2 dans la mise en œuvre actuelle',
      'Composants de navigation et visuels personnalisés',
    ],
    stack: [
      { group: 'Langage & plateforme', items: ['Kotlin', 'Android SDK (minSdk 27, target 35)', 'Gradle', 'AGP'] },
      { group: 'Données & backend', items: ['Firebase Authentication', 'Cloud Firestore'] },
      { group: 'Fonctionnalités avancées', items: ['WorkManager', 'ML Kit Text Recognition', 'Tesseract OCR', 'MPAndroidChart'] },
    ],
    hurdles: [
      "Intégrer deux approches OCR complémentaires (ML Kit et Tesseract) pour une lecture fiable du compteur selon les conditions.",
      "Concevoir une architecture MVVM claire tout en gardant les ViewModels testables et découplés des sources de données.",
      "Construire des visualisations énergétiques lisibles avec MPAndroidChart sans surcharger l'interface.",
    ],
    status:
      "Les fonctionnalités listées ci-dessus sont implémentées dans l'application sur la base de données de démonstration ou saisies par l'utilisateur. Aucune télémétrie physique de compteur ni synchronisation IoT temps réel n'est encore implémentée.",
    vision:
      "La vision à terme : compteurs d'électricité connectés, mesures matérielles de la consommation, suivi en temps réel, analyses plus intelligentes et une gestion électrique véritablement anticipative.",
  },
  en: {
    overview:
      'PowerTracker is an Android application designed to help users understand and monitor their electricity consumption. The project explores how software can make energy usage easier to understand through consumption monitoring, goals, data visualization and intelligent assistance.',
    challenge:
      'Most households have no simple tool to understand their electricity consumption. Bills remain opaque, with no breakdown or reference points, and it is hard to know whether you are consuming too much or how to improve.',
    solution:
      'An Android app that centralizes meter readings, graphical consumption visualization, goal setting and daily tips, with OCR-assisted extraction of meter information.',
    features: [
      'User authentication',
      'Onboarding experience',
      'Electricity consumption dashboard',
      'Consumption visualizations and charts',
      'Electricity consumption goals',
      'User settings and profile management',
      'Daily tips using WorkManager',
      'OCR-based electricity meter information extraction',
      'Energy-focused interface and data presentation',
    ],
    architecture: [
      'MVVM architecture',
      'Repository Pattern',
      'AuthRepository and UserRepository',
      'ViewModels and ViewModelFactory',
      'WorkManager for scheduled tasks',
      'ViewPager2-based navigation in the current implementation',
      'Custom navigation and visual components',
    ],
    stack: [
      { group: 'Language & platform', items: ['Kotlin', 'Android SDK (minSdk 27, target 35)', 'Gradle', 'AGP'] },
      { group: 'Data & backend', items: ['Firebase Authentication', 'Cloud Firestore'] },
      { group: 'Advanced features', items: ['WorkManager', 'ML Kit Text Recognition', 'Tesseract OCR integration', 'MPAndroidChart'] },
    ],
    hurdles: [
      'Integrating two complementary OCR approaches (ML Kit and Tesseract) for reliable meter reading in varied conditions.',
      'Designing a clean MVVM architecture while keeping ViewModels testable and decoupled from data sources.',
      'Building readable energy visualizations with MPAndroidChart without cluttering the interface.',
    ],
    status:
      'The features listed above are implemented in the app based on demonstration or user-entered data. No physical meter telemetry or real-time IoT synchronization is implemented yet.',
    vision:
      'The long-term vision: connected electricity meters, hardware-based consumption measurements, real-time monitoring, smarter analysis and genuinely proactive electricity management.',
  },
  ar: {
    overview:
      'PowerTracker هو تطبيق أندرويد مصمم لمساعدة المستخدمين على فهم استهلاكهم للكهرباء وتتبعه. يستكشف المشروع كيف يمكن للبرمجيات أن تجعل استهلاك الطاقة أسهل للفهم من خلال المراقبة والأهداف وعرض البيانات والمساعدة الذكية.',
    challenge:
      'لا تمتلك معظم الأسر أي أداة بسيطة لفهم استهلاكها للكهرباء. تبقى الفواتير غامضة، دون تفاصيل أو مرجع، ويصعب معرفة ما إذا كان الاستهلاك مرتفعاً أو كيفية تحسينه.',
    solution:
      'تطبيق أندرويد يركز قراءة العداد وعرض الاستهلاك بيانياً وتحديد الأهداف والنصائح اليومية في مكان واحد، مع استخراج معلومات العداد بمساعدة تقنية OCR.',
    features: [
      'مصادقة المستخدم',
      'تجربة ترحيب (Onboarding)',
      'لوحة متابعة استهلاك الكهرباء',
      'رسوم بيانية ومرئيات للاستهلاك',
      'أهداف استهلاك الكهرباء',
      'الإعدادات وإدارة الملف الشخصي',
      'نصائح يومية عبر WorkManager',
      'استخراج معلومات العداد بتقنية OCR',
      'واجهة موجهة للطاقة وعرض البيانات',
    ],
    architecture: [
      'معمارية MVVM',
      'نمط Repository',
      'AuthRepository وUserRepository',
      'ViewModels وViewModelFactory',
      'WorkManager للمهام المجدولة',
      'تنقل عبر ViewPager2 في التنفيذ الحالي',
      'مكونات تنقل ومرئية مخصصة',
    ],
    stack: [
      { group: 'اللغة والمنصة', items: ['Kotlin', 'Android SDK (minSdk 27, target 35)', 'Gradle', 'AGP'] },
      { group: 'البيانات والخلفية', items: ['Firebase Authentication', 'Cloud Firestore'] },
      { group: 'ميزات متقدمة', items: ['WorkManager', 'ML Kit Text Recognition', 'تكامل Tesseract OCR', 'MPAndroidChart'] },
    ],
    hurdles: [
      'دمج مقاربتين متكاملتين لـ OCR (ML Kit وTesseract) لقراءة موثوقة للعداد في ظروف مختلفة.',
      'تصميم معمارية MVVM واضحة مع الحفاظ على قابلية اختبار ViewModels وفصلها عن مصادر البيانات.',
      'بناء مرئيات طاقة واضحة باستخدام MPAndroidChart دون إرباك الواجهة.',
    ],
    status:
      'الميزات المذكورة أعلاه منفذة في التطبيق استناداً إلى بيانات تجريبية أو مدخلات المستخدم. لم تُنفذ بعد أي قياسات فعلية للعداد أو مزامنة IoT في الوقت الحقيقي.',
    vision:
      'الرؤية المستقبلية: عدادات كهرباء متصلة، قياسات مادية للاستهلاك، مراقبة في الوقت الحقيقي، تحليلات أذكى وإدارة استباقية حقيقية للكهرباء.',
  },
};

export interface DomfixContent {
  overview: string;
  idea: string;
  problem: string;
  solution: string;
  customerJourney: string[];
  technicianJourney: string[];
  smartHome: string;
  tech: string[];
  contribution: string[];
  limitations: string;
}

export const domfixContent: Record<Locale, DomfixContent> = {
  fr: {
    overview:
      "DOMFIX est une application mobile Flutter que j'ai conçue et développée lors de mon stage chez DEVOSOFT. L'idée est entièrement la mienne : faciliter la mise en relation entre clients et techniciens pour la maintenance domestique et les services de maison connectée.",
    idea:
      "DOMFIX est né de mon observation personnelle : trouver un technicien fiable pour une intervention à domicile est souvent chaotique — annonces dispersées, qualité imprévisible, aucun suivi. J'ai conçu l'idée de l'application avant le stage, puis j'ai eu l'opportunité de la développer chez DEVOSOFT.",
    problem:
      "Trouver un technicien fiable pour une réparation ou installer un équipement connecté reste complexe : annonces dispersées, qualité incertaine, aucune visibilité sur la disponibilité ni le suivi des interventions.",
    solution:
      "Une application Flutter à double parcours : les clients publient leurs demandes de service, les techniciens gèrent leurs missions depuis un tableau de bord dédié, avec réservation et suivi intégrés.",
    customerJourney: [
      'Inscription et sélection du rôle client',
      'Parcours des services et sélection du besoin',
      'Demande et réservation de prestation',
      'Suivi de la demande et interaction avec le technicien',
      "Contrôle des équipements de maison connectée depuis l'application",
    ],
    technicianJourney: [
      'Inscription en tant que technicien',
      'Tableau de bord des demandes reçues',
      'Gestion des réservations et disponibilités',
      'Suivi des interventions en cours',
      'Organisation des services et du planning',
    ],
    smartHome:
      "DOMFIX explore aussi les usages de la maison connectée : interfaces de contrôle des équipements domestiques intelligents directement depuis l'application. Le projet reflète mon intérêt pour la combinaison du logiciel mobile et des applications électriques et domotiques concrètes.",
    tech: [
      'Flutter et Dart pour le développement multiplateforme',
      "Firebase pour l'authentification et la synchronisation",
      'Interfaces client et technicien distinctes',
      'UI mobile orientée services et réservation',
    ],
    contribution: [
      "Conception de l'idée originale de l'application",
      "Développement de l'application mobile avec Flutter",
      "Parcours d'interaction client et technicien",
      'Flux de réservation et de demande de service',
      'Interfaces de contrôle pour équipements de maison connectée',
      'Intégration Firebase',
    ],
    limitations:
      "Projet réalisé dans le cadre d'un stage. Aucun chiffre d'utilisateurs, de techniciens, de téléchargements ou de déploiements commerciaux n'est revendiqué. Les fonctionnalités reflètent l'état du projet à l'issue du stage.",
  },
  en: {
    overview:
      'DOMFIX is a Flutter mobile application I designed and developed during my internship at DEVOSOFT. The idea is entirely mine: making it easier to connect customers with technicians for household maintenance and smart-home services.',
    idea:
      "DOMFIX came from my personal observation: finding a reliable technician for a home visit is often chaotic — scattered listings, unpredictable quality, no follow-up. I designed the app concept before the internship, then had the opportunity to build it at DEVOSOFT.",
    problem:
      'Finding a reliable technician for a repair or installing connected equipment remains complex: scattered listings, uncertain quality, no visibility on availability or intervention tracking.',
    solution:
      'A Flutter app with a dual journey: customers post service requests, technicians manage their missions from a dedicated dashboard, with booking and tracking built in.',
    customerJourney: [
      'Registration and customer role selection',
      'Browsing services and selecting a need',
      'Booking and requesting a service',
      'Tracking the request and interacting with the technician',
      'Controlling smart-home devices from the app',
    ],
    technicianJourney: [
      'Registration as a technician',
      'Dashboard of incoming requests',
      'Managing bookings and availability',
      'Tracking ongoing interventions',
      'Organizing services and schedule',
    ],
    smartHome:
      'DOMFIX also explores connected-home use cases: interfaces for controlling smart household equipment directly from the app. The project reflects my interest in combining mobile software with practical electrical and domotic applications.',
    tech: [
      'Flutter and Dart for cross-platform development',
      'Firebase for authentication and synchronization',
      'Distinct customer and technician interfaces',
      'Service- and booking-oriented mobile UI',
    ],
    contribution: [
      'Original concept and idea design',
      'Mobile application development with Flutter',
      'Customer and technician interaction flows',
      'Booking and service request flows',
      'Smart-home device control interfaces',
      'Firebase integration',
    ],
    limitations:
      'Project completed during an internship. No user counts, technician counts, downloads or commercial deployments are claimed. Features reflect the state of the project at the end of the internship.',
  },
  ar: {
    overview:
      'DOMFIX هو تطبيق جوال Flutter صممته وطوّرته خلال تدريبي في DEVOSOFT. الفكرة كلياً فكرتي الشخصية: تسهيل التواصل بين العملاء والتقنيين لأعمال الصيانة المنزلية وخدمات المنزل الذكي.',
    idea:
      'وُلد DOMFIX من ملاحظتي الشخصية: إيجاد تقني موثوق لزيارة منزلية غالباً ما يكون فوضوياً — إعلانات مبعثرة، جودة غير متوقعة، لا متابعة. صممت مفهوم التطبيق قبل التدريب، ثم أتاحت لي فرصة DEVOSOFT بناءه.',
    problem:
      'إيجاد تقني موثوق لإصلاح أو تركيب معدات متصلة يبقى أمراً معقداً: إعلانات مبعثرة، جودة غير مؤكدة، وغياب أي رؤية حول التوفر أو تتبع التدخلات.',
    solution:
      'تطبيق Flutter بمسارين: العملاء ينشرون طلبات الخدمة، والتقنيون يديرون مهامهم من لوحة تحكم مخصصة، مع الحجز والتتبع بشكل مدمج.',
    customerJourney: [
      'التسجيل واختيار دور العميل',
      'تصفح الخدمات واختيار الحاجة',
      'طلب الخدمة وحجزها',
      'تتبع الطلب والتفاعل مع التقني',
      'التحكم في أجهزة المنزل الذكي من التطبيق',
    ],
    technicianJourney: [
      'التسجيل كتقني',
      'لوحة تحكم بالطلبات الواردة',
      'إدارة الحجوزات والتوفر',
      'تتبع التدخلات الجارية',
      'تنظيم الخدمات والجدول الزمني',
    ],
    smartHome:
      'يستكشف DOMFIX أيضاً استخدامات المنزل المتصل: واجهات للتحكم في الأجهزة المنزلية الذكية مباشرة من التطبيق. يعكس المشروع اهتمامي بدمج برمجيات الجوال مع التطبيقات الكهربائية والدوموتيك العملية.',
    tech: [
      'Flutter وDart للتطوير متعدد المنصات',
      'Firebase للمصادقة والمزامنة',
      'واجهات منفصلة للعميل والتقني',
      'واجهة جوال موجهة للخدمات والحجز',
    ],
    contribution: [
      'تصميم الفكرة الأصلية للتطبيق',
      'تطوير التطبيق باستخدام Flutter',
      'مسارات التفاعل بين العميل والتقني',
      'مسارات الحجز وطلبات الخدمة',
      'واجهات التحكم في أجهزة المنزل الذكي',
      'تكامل Firebase',
    ],
    limitations:
      'مشروع أُنجز خلال فترة تدريب. لا تُنسب أي أرقام للمستخدمين أو التقنيين أو التنزيلات أو النشرات التجارية. الميزات تعكس حالة المشروع في نهاية التدريب.',
  },
};
