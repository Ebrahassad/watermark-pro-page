const translations = {
  en: {
    nav_features:"Features",
    nav_how:"How it works",
    nav_screens:"Screenshots",
    nav_privacy:"Privacy Policy",
    nav_contact:"Contact",
    badge:"Professional Photo Watermarking",
    hero_title:"Protect your photos with Watermark Pro.",
    hero_text:"Add your logo or watermark to your photos with precise control over position, size, opacity and rotation.",
    download:"Download APK",
    learn:"Learn how it works",
    about_label:"ABOUT",
    about_title:"A simple way to brand your photos.",
    about_text:"Watermark Pro gives you the essential tools you need to add a professional watermark without complicated editing software.",
    features_label:"FEATURES",
    features_title:"Everything you need.",
    f1_title:"Custom Position",
    f1_text:"Place your watermark exactly where you want it.",
    f2_title:"Size & Opacity",
    f2_text:"Control watermark size and transparency precisely.",
    f3_title:"Rotation",
    f3_text:"Rotate your watermark for the perfect composition.",
    f4_title:"JPG & PNG",
    f4_text:"Export your finished photos in popular formats.",
    f5_title:"Logo Background",
    f5_text:"Remove unwanted backgrounds from your logo.",
    f6_title:"Fast Processing",
    f6_text:"Process your photos quickly and save the result.",
    how_label:"HOW IT WORKS",
    how_title:"Four simple steps.",
    s1_title:"Choose your photos",
    s1_text:"Select one or multiple photos to process.",
    s2_title:"Add your logo",
    s2_text:"Choose the logo or image you want to use.",
    s3_title:"Customize",
    s3_text:"Adjust position, size, opacity and rotation.",
    s4_title:"Save & share",
    s4_text:"Save the finished image and share it anywhere.",
    screens_label:"PREVIEW",
    screens_title:"See Watermark Pro in action.",
    download_title:"Ready to protect your photos?",
    download_text:"Download the latest Android release.",
    coming:"COMING SOON",
    windows_text:"A desktop version is currently planned.",
    contact_label:"CONTACT",
    contact_title:"Need help?",
    contact_text:"Contact us for support, feedback or questions about Watermark Pro."
  },

  ar: {
    nav_features:"المميزات",
    nav_how:"طريقة الاستخدام",
    nav_screens:"صور التطبيق",
    nav_privacy:"سياسة الخصوصية",
    nav_contact:"تواصل معنا",
    badge:"علامة مائية احترافية للصور",
    hero_title:"احمِ صورك مع Watermark Pro.",
    hero_text:"أضف شعارك أو علامتك المائية إلى صورك مع تحكم دقيق في الموضع والحجم والشفافية والدوران.",
    download:"تحميل APK",
    learn:"شاهد طريقة العمل",
    about_label:"عن التطبيق",
    about_title:"طريقة بسيطة واحترافية لتمييز صورك.",
    about_text:"يوفر لك Watermark Pro الأدوات الأساسية لإضافة علامة مائية احترافية دون الحاجة إلى برامج تحرير معقدة.",
    features_label:"المميزات",
    features_title:"كل ما تحتاجه.",
    f1_title:"تحديد الموضع",
    f1_text:"ضع العلامة المائية في المكان الذي تريده بدقة.",
    f2_title:"الحجم والشفافية",
    f2_text:"تحكم بدقة في حجم العلامة المائية ودرجة شفافيتها.",
    f3_title:"الدوران",
    f3_text:"قم بتدوير العلامة المائية للحصول على التصميم المناسب.",
    f4_title:"JPG و PNG",
    f4_text:"احفظ الصور النهائية بالصيَغ الشائعة.",
    f5_title:"إزالة خلفية الشعار",
    f5_text:"تخلص من الخلفيات غير المرغوبة في الشعار.",
    f6_title:"معالجة سريعة",
    f6_text:"عالج صورك بسرعة واحفظ النتيجة.",
    how_label:"طريقة العمل",
    how_title:"أربع خطوات بسيطة.",
    s1_title:"اختر الصور",
    s1_text:"حدد صورة واحدة أو عدة صور لمعالجتها.",
    s2_title:"أضف شعارك",
    s2_text:"اختر الشعار أو الصورة التي تريد استخدامها.",
    s3_title:"خصص العلامة",
    s3_text:"اضبط الموضع والحجم والشفافية والدوران.",
    s4_title:"احفظ وشارك",
    s4_text:"احفظ الصورة النهائية وشاركها في أي مكان.",
    screens_label:"معاينة",
    screens_title:"شاهد Watermark Pro أثناء العمل.",
    download_title:"جاهز لحماية صورك؟",
    download_text:"حمّل أحدث إصدار من Android.",
    coming:"قريبًا",
    windows_text:"نعمل على إصدار مخصص لأجهزة Windows.",
    contact_label:"تواصل معنا",
    contact_title:"هل تحتاج إلى مساعدة؟",
    contact_text:"تواصل معنا للدعم أو الملاحظات أو أي استفسار حول Watermark Pro."
  }
};

let lang = localStorage.getItem("watermark_lang") || "en";

function applyLanguage(){
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key = el.dataset.i18n;
    if(translations[lang][key]) el.textContent = translations[lang][key];
  });

  document.getElementById("languageBtn").textContent =
    lang === "ar" ? "English" : "العربية";
}

document.getElementById("languageBtn").addEventListener("click",()=>{
  lang = lang === "en" ? "ar" : "en";
  localStorage.setItem("watermark_lang",lang);
  applyLanguage();
});

applyLanguage();
