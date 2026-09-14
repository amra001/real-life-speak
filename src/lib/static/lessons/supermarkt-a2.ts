const T = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ bks, tr, uk, ro, ar });
const H = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ help: T(bks, tr, uk, ro, ar) });

export const supermarktA2 = {
  lesson: {
    id: "5b8f2e14-7d3a-4c92-8e5f-1a4b6c9d2e73",
    slug: "supermarkt-a2",
    title: "Im Supermarkt – A2",
    description:
      "Ein ausführlicherer Einkauf im Supermarkt: Produkte vergleichen, nach günstigeren Alternativen fragen und ein Problem an der Kasse lösen.",
    level: "A2",
    region: "de",
    category_slug: "alltag",
    subcategory_slug: "supermarkt",
    topic_slug: "supermarkt",
    topic_title: "Im Supermarkt",
    duration_seconds: 1800,
    thumbnail_key: "supermarkt",
    video_url: null,
    is_premium: false,
    status: "published",
    popularity: 10,
    grammar_topics: [
      "Nebensätze mit weil/dass/wenn",
      "Perfekt (haben/sein + Partizip II)",
      "Trennbare Verben (einkaufen, mitnehmen)",
      "Komparativ (billiger, teurer, frischer)",
      "Wechselpräpositionen",
      "Modalverben im Kontext",
    ],
    grammar_notes: [
      {
        title: "Nebensätze mit weil",
        explanation:
          "„Weil“ leitet einen Grund ein. Im Nebensatz steht das konjugierte Verb am Ende, anders als im Hauptsatz.",
        examples: [
          "Ich kaufe Nudeln, weil sie im Angebot sind.",
          "Sie fragt den Mitarbeiter, weil sie das Produkt nicht findet.",
        ],
      },
      {
        title: "Nebensätze mit dass",
        explanation:
          "„Dass“ leitet einen Inhaltssatz ein, oft nach Verben wie sagen, denken, glauben, hoffen. Auch hier steht das Verb am Ende des Nebensatzes.",
        examples: [
          "Ich glaube, dass die Milch noch im Kühlregal steht.",
          "Der Mitarbeiter sagt, dass das Produkt bald wieder da ist.",
        ],
      },
      {
        title: "Nebensätze mit wenn",
        explanation:
          "„Wenn“ beschreibt eine Bedingung oder einen wiederkehrenden Zeitpunkt. Das Verb steht im Nebensatz am Ende.",
        examples: [
          "Wenn ich einkaufen gehe, nehme ich immer eine Liste mit.",
          "Wenn das Obst nicht frisch ist, bringe ich es zurück.",
        ],
      },
      {
        title: "Perfekt: haben oder sein + Partizip II",
        explanation:
          "Das Perfekt bildet man mit „haben“ oder „sein“ + Partizip II. Die meisten Verben nehmen „haben“, Verben der Bewegung oder Zustandsänderung nehmen „sein“.",
        examples: [
          "Ich habe Brot und Milch gekauft.",
          "Wir sind zum Supermarkt gegangen.",
          "Sie hat die Einkaufsliste vergessen.",
        ],
      },
      {
        title: "Trennbare Verben: einkaufen, mitnehmen, einpacken",
        explanation:
          "Bei trennbaren Verben trennt sich die Vorsilbe im Hauptsatz und wandert ans Ende. Im Perfekt steht „ge“ zwischen Vorsilbe und Stamm.",
        examples: [
          "Ich kaufe heute im Supermarkt ein.",
          "Ich habe heute im Supermarkt eingekauft.",
          "Nimm bitte auch Wasser mit!",
        ],
      },
      {
        title: "Komparativ: billiger, teurer, frischer",
        explanation:
          "Der Komparativ vergleicht zwei Dinge. Man bildet ihn meist mit -er, oft mit Umlaut. Nach dem Komparativ steht „als“.",
        examples: [
          "Diese Milch ist billiger als die andere.",
          "Das Gemüse hier ist frischer als im anderen Laden.",
          "Der Käse ist teurer als die Butter.",
        ],
      },
      {
        title: "Wechselpräpositionen: in, an, auf mit Akkusativ oder Dativ",
        explanation:
          "Wechselpräpositionen stehen mit Akkusativ bei einer Bewegung (wohin?) und mit Dativ bei einer Position (wo?).",
        examples: [
          "Ich lege die Milch in den Wagen. (wohin? Akkusativ)",
          "Die Milch steht in dem Wagen. (wo? Dativ)",
        ],
      },
      {
        title: "Modalverben im Kontext: müssen, sollen, dürfen",
        explanation:
          "Modalverben drücken Notwendigkeit, Erwartung oder Erlaubnis aus. Der Infinitiv des Hauptverbs steht am Satzende.",
        examples: [
          "Ich muss noch Obst kaufen.",
          "Man darf hier nicht ohne Maske einkaufen.",
          "Du sollst die Quittung aufheben.",
        ],
      },
    ],
    place_items: [],
  },

  scenes: [
    { id: "supermarkt-a2-s1", position: 1, german_text: "Am Samstag bin ich in den Supermarkt gegangen, weil unser Kühlschrank fast leer war.", translations: T("U subotu sam otišao/la u supermarket jer nam je frižider bio skoro prazan.", "Cumartesi süpermarkete gittim çünkü buzdolabımız neredeyse boştu.", "У суботу я пішов(шла) до супермаркету, бо наш холодильник був майже порожній.", "Sâmbătă am mers la supermarket pentru că frigiderul nostru era aproape gol.", "يوم السبت ذهبت إلى السوبر ماركت لأن ثلاجتنا كانت شبه فارغة.") },
    { id: "supermarkt-a2-s2", position: 2, german_text: "Ich habe eine lange Einkaufsliste geschrieben, damit ich nichts vergesse.", translations: T("Napisao/la sam dugačku listu za kupovinu da ništa ne zaboravim.", "Hiçbir şeyi unutmamak için uzun bir alışveriş listesi yazdım.", "Я написав(ла) довгий список покупок, щоб нічого не забути.", "Am scris o listă lungă de cumpărături ca să nu uit nimic.", "كتبت قائمة تسوق طويلة حتى لا أنسى أي شيء.") },
    { id: "supermarkt-a2-s3", position: 3, german_text: "Als ich einkaufen war, habe ich zuerst einen Einkaufswagen genommen.", translations: T("Kada sam bio/la u kupovini, prvo sam uzeo/la kolica.", "Alışveriş yaparken önce bir alışveriş arabası aldım.", "Коли я був(ла) на покупках, спочатку взяв(ла) візок.", "Când am fost la cumpărături, mai întâi am luat un cărucior.", "عندما كنت أتسوق، أخذت أولاً عربة تسوق.") },
    { id: "supermarkt-a2-s4", position: 4, german_text: "Ich habe eine Mitarbeiterin gefragt, ob es günstigeres Olivenöl gibt.", translations: T("Pitao/la sam radnicu ima li jeftinijeg maslinovog ulja.", "Bir çalışana daha ucuz zeytinyağı olup olmadığını sordum.", "Я запитав(ла) працівницю, чи є дешевша оливкова олія.", "Am întrebat o angajată dacă există ulei de măsline mai ieftin.", "سألت موظفة إن كان هناك زيت زيتون أرخص.") },
    { id: "supermarkt-a2-s5", position: 5, german_text: "Sie hat gesagt, dass die Hausmarke billiger ist als die bekannte Marke.", translations: T("Rekla je da je vlastita marka jeftinija od poznate marke.", "Kendi markanın tanınmış markadan daha ucuz olduğunu söyledi.", "Вона сказала, що власна марка дешевша за відому марку.", "A spus că marca proprie este mai ieftină decât marca cunoscută.", "قالت إن الماركة الخاصة بالمحل أرخص من الماركة المعروفة.") },
    { id: "supermarkt-a2-s6", position: 6, german_text: "Das Gemüse in der Obstabteilung war frischer als letzte Woche.", translations: T("Povrće u odjelu za voće bilo je svježije nego prošle sedmice.", "Meyve reyonundaki sebzeler geçen haftaya göre daha tazeydi.", "Овочі у відділі фруктів були свіжіші, ніж минулого тижня.", "Legumele din raionul de fructe erau mai proaspete decât săptămâna trecută.", "كانت الخضروات في قسم الفاكهة أكثر طزاجة من الأسبوع الماضي.") },
    { id: "supermarkt-a2-s7", position: 7, german_text: "Ich habe auch Nudeln mitgenommen, weil sie im Angebot waren.", translations: T("Uzeo/la sam i tjesteninu jer je bila na akciji.", "Makarna da aldım çünkü indirimdeydi.", "Я також взяв(ла) макарони, бо вони були за акцією.", "Am luat și paste, pentru că erau la ofertă.", "أخذت أيضًا المعكرونة لأنها كانت في عرض خاص.") },
    { id: "supermarkt-a2-s8", position: 8, german_text: "An der Kasse habe ich bemerkt, dass der Preis für den Käse nicht gestimmt hat.", translations: T("Na kasi sam primijetio/la da cijena sira nije bila tačna.", "Kasada peynirin fiyatının doğru olmadığını fark ettim.", "На касі я помітив(ла), що ціна на сир була невірна.", "La casă am observat că prețul pentru brânză nu a fost corect.", "لاحظت عند الصندوق أن سعر الجبن لم يكن صحيحًا.") },
    { id: "supermarkt-a2-s9", position: 9, german_text: "Die Kassiererin hat freundlich den Preis korrigiert, nachdem ich sie darauf hingewiesen hatte.", translations: T("Kasirka je ljubazno ispravila cijenu, nakon što sam je na to upozorio/la.", "Ona dikkatini çektikten sonra kasiyer nazikçe fiyatı düzeltti.", "Касирка люб'язно виправила ціну, після того як я звернув(ла) на це увагу.", "Casiera a corectat amabil prețul, după ce i-am atras atenția.", "صحّحت الكاشيرة السعر بلطف بعد أن نبّهتها إلى ذلك.") },
    { id: "supermarkt-a2-s10", position: 10, german_text: "Ich habe vergessen, meine eigene Tasche mitzunehmen.", translations: T("Zaboravio/la sam ponijeti svoju torbu.", "Kendi çantamı getirmeyi unuttum.", "Я забув(ла) взяти свою сумку.", "Am uitat să iau propria mea sacoșă.", "نسيت أن أحضر حقيبتي الخاصة.") },
    { id: "supermarkt-a2-s11", position: 11, german_text: "Deshalb habe ich eine Papiertüte gekauft, obwohl sie extra gekostet hat.", translations: T("Zato sam kupio/la papirnu kesu, iako je koštala dodatno.", "Bu yüzden ekstra ücretli olmasına rağmen bir kağıt torba satın aldım.", "Тому я купив(ла) паперовий пакет, хоча він коштував додатково.", "De aceea am cumpărat o pungă de hârtie, deși a costat în plus.", "لذلك اشتريت كيسًا ورقيًا رغم أنه كلّف إضافيًا.") },
    { id: "supermarkt-a2-s12", position: 12, german_text: "Ich habe mit Karte bezahlt, weil ich kein Bargeld dabei hatte.", translations: T("Platio/la sam karticom jer nisam imao/la gotovinu kod sebe.", "Yanımda nakit olmadığı için kartla ödedim.", "Я заплатив(ла) карткою, бо не мав(ла) при собі готівки.", "Am plătit cu cardul pentru că nu aveam bani cash la mine.", "دفعت بالبطاقة لأنني لم أكن أحمل نقودًا معي.") },
    { id: "supermarkt-a2-s13", position: 13, german_text: "Am Ende habe ich alle Sachen selbst eingepackt.", translations: T("Na kraju sam sam/sama sve stvari spakovao/la.", "Sonunda tüm eşyaları kendim topladım.", "Наприкінці я сам(а) все спакував(ла).", "La final am ambalat singur(ă) toate lucrurile.", "في النهاية عبّأت كل الأغراض بنفسي.") },
    { id: "supermarkt-a2-s14", position: 14, german_text: "Bevor ich gegangen bin, habe ich meinen Kassenbon in die Tasche gesteckt.", translations: T("Prije nego što sam otišao/la, stavio/la sam račun u torbu.", "Gitmeden önce, fişimi çantaya koydum.", "Перед тим як піти, я поклав(ла) чек у сумку.", "Înainte să plec, mi-am pus bonul în geantă.", "قبل أن أغادر، وضعت الإيصال في الحقيبة.") },
    { id: "supermarkt-a2-s15", position: 15, german_text: "Ich bin zufrieden nach Hause gefahren, obwohl der Einkauf länger gedauert hat als erwartet.", translations: T("Zadovoljno sam se odvezao/la kući, iako je kupovina trajala duže nego što sam očekivao/la.", "Beklenenden uzun sürmesine rağmen mutlu bir şekilde eve döndüm.", "Я задоволено поїхав(ла) додому, хоча покупки тривали довше, ніж очікувалося.", "Am plecat mulțumit(ă) spre casă, deși cumpărăturile au durat mai mult decât mă așteptam.", "عدت إلى المنزل راضيًا رغم أن التسوق استغرق وقتًا أطول من المتوقع.") },
  ],

  vocab: [
    { id: "supermarkt-a2-v1", position: 1, term: "Einkaufsliste", article: "die", plural: "die Einkaufslisten", word_class: "Nomen", example: "Ich schreibe eine Einkaufsliste.", translations: T("lista za kupovinu", "alışveriş listesi", "список покупок", "listă de cumpărături", "قائمة تسوق") },
    { id: "supermarkt-a2-v2", position: 2, term: "Kühlregal", article: "das", plural: "die Kühlregale", word_class: "Nomen", example: "Die Milch steht im Kühlregal.", translations: T("rashladna polica", "soğutucu raf", "холодильна полиця", "raft frigorific", "رف التبريد") },
    { id: "supermarkt-a2-v3", position: 3, term: "Hausmarke", article: "die", plural: "die Hausmarken", word_class: "Nomen", example: "Die Hausmarke ist billiger.", translations: T("vlastita marka trgovine", "mağaza markası", "власна марка магазину", "marcă proprie", "الماركة الخاصة بالمتجر") },
    { id: "supermarkt-a2-v4", position: 4, term: "Olivenöl", article: "das", plural: "—", word_class: "Nomen", example: "Ich suche günstigeres Olivenöl.", translations: T("maslinovo ulje", "zeytinyağı", "оливкова олія", "ulei de măsline", "زيت الزيتون") },
    { id: "supermarkt-a2-v5", position: 5, term: "Nudeln", article: "die", plural: "die Nudeln", word_class: "Nomen", example: "Die Nudeln waren im Angebot.", translations: T("tjestenina", "makarna", "макарони", "paste", "معكرونة") },
    { id: "supermarkt-a2-v6", position: 6, term: "Käse", article: "der", plural: "die Käse", word_class: "Nomen", example: "Der Preis für den Käse hat nicht gestimmt.", translations: T("sir", "peynir", "сир", "brânză", "جبن") },
    { id: "supermarkt-a2-v7", position: 7, term: "einkaufen", word_class: "Verb", example: "Ich kaufe heute ein.", translations: T("kupovati", "alışveriş yapmak", "робити покупки", "a face cumpărături", "التسوق") },
    { id: "supermarkt-a2-v8", position: 8, term: "mitnehmen", word_class: "Verb", example: "Nimm bitte auch Wasser mit!", translations: T("ponijeti", "yanına almak", "брати з собою", "a lua cu tine", "يأخذ معه") },
    { id: "supermarkt-a2-v9", position: 9, term: "einpacken", word_class: "Verb", example: "Ich habe alles selbst eingepackt.", translations: T("spakovati", "paketlemek", "пакувати", "a ambala", "يعبئ") },
    { id: "supermarkt-a2-v10", position: 10, term: "bemerken", word_class: "Verb", example: "Ich habe den Fehler bemerkt.", translations: T("primijetiti", "fark etmek", "помічати", "a observa", "يلاحظ") },
    { id: "supermarkt-a2-v11", position: 11, term: "korrigieren", word_class: "Verb", example: "Sie hat den Preis korrigiert.", translations: T("ispraviti", "düzeltmek", "виправляти", "a corecta", "يصحح") },
    { id: "supermarkt-a2-v12", position: 12, term: "günstig", word_class: "Adjektiv", example: "Diese Marke ist günstiger.", translations: T("povoljno", "uygun/ucuz", "вигідний", "avantajos", "مناسب/رخيص") },
    { id: "supermarkt-a2-v13", position: 13, term: "Abteilung", article: "die", plural: "die Abteilungen", word_class: "Nomen", example: "Die Obstabteilung ist vorne.", translations: T("odjel", "reyon/bölüm", "відділ", "raion", "قسم") },
    { id: "supermarkt-a2-v14", position: 14, term: "Quittung", article: "die", plural: "die Quittungen", word_class: "Nomen", example: "Ich hebe die Quittung auf.", translations: T("račun/priznanica", "makbuz/fiş", "квитанція", "chitanță", "إيصال") },
    { id: "supermarkt-a2-v15", position: 15, term: "eigene", word_class: "Adjektiv", example: "Ich habe meine eigene Tasche vergessen.", translations: T("vlastito/sopstveno", "kendi (ait)", "власний", "propriu", "خاص/شخصي") },
    { id: "supermarkt-a2-v16", position: 16, term: "Tasche", article: "die", plural: "die Taschen", word_class: "Nomen", example: "Ich habe eine Stofftasche dabei.", translations: T("torba", "çanta", "сумка", "geantă", "حقيبة") },
    { id: "supermarkt-a2-v17", position: 17, term: "Bargeld", article: "das", plural: "—", word_class: "Nomen", example: "Ich hatte kein Bargeld dabei.", translations: T("gotovina", "nakit", "готівка", "bani cash", "نقود") },
    { id: "supermarkt-a2-v18", position: 18, term: "Kühlschrank", article: "der", plural: "die Kühlschränke", word_class: "Nomen", example: "Unser Kühlschrank war leer.", translations: T("frižider", "buzdolabı", "холодильник", "frigider", "ثلاجة") },
    { id: "supermarkt-a2-v19", position: 19, term: "leer", word_class: "Adjektiv", example: "Der Kühlschrank war fast leer.", translations: T("prazno", "boş", "порожній", "gol", "فارغ") },
    { id: "supermarkt-a2-v20", position: 20, term: "hinweisen", word_class: "Verb", example: "Ich habe sie auf den Fehler hingewiesen.", translations: T("ukazati/upozoriti", "dikkat çekmek", "звертати увагу", "a atrage atenția", "ينبّه") },
    { id: "supermarkt-a2-v21", position: 21, term: "vergessen", word_class: "Verb", example: "Ich habe die Tasche vergessen.", translations: T("zaboraviti", "unutmak", "забувати", "a uita", "ينسى") },
    { id: "supermarkt-a2-v22", position: 22, term: "erwarten", word_class: "Verb", example: "Der Einkauf hat länger gedauert als erwartet.", translations: T("očekivati", "beklemek", "очікувати", "a aștepta", "يتوقع") },
    { id: "supermarkt-a2-v23", position: 23, term: "frisch", word_class: "Adjektiv", example: "Das Gemüse war frischer als letzte Woche.", translations: T("svježe", "taze", "свіжий", "proaspăt", "طازج") },
    { id: "supermarkt-a2-v24", position: 24, term: "billig", word_class: "Adjektiv", example: "Die Hausmarke ist billiger.", translations: T("jeftino", "ucuz", "дешевий", "ieftin", "رخيص") },
    { id: "supermarkt-a2-v25", position: 25, term: "teuer", word_class: "Adjektiv", example: "Die bekannte Marke ist teurer.", translations: T("skupo", "pahalı", "дорогий", "scump", "غالٍ") },
    { id: "supermarkt-a2-v26", position: 26, term: "Preis", article: "der", plural: "die Preise", word_class: "Nomen", example: "Der Preis hat nicht gestimmt.", translations: T("cijena", "fiyat", "ціна", "preț", "سعر") },
    { id: "supermarkt-a2-v27", position: 27, term: "Papiertüte", article: "die", plural: "die Papiertüten", word_class: "Nomen", example: "Ich habe eine Papiertüte gekauft.", translations: T("papirna kesa", "kağıt torba", "паперовий пакет", "pungă de hârtie", "كيس ورقي") },
    { id: "supermarkt-a2-v28", position: 28, term: "zufrieden", word_class: "Adjektiv", example: "Ich bin zufrieden nach Hause gefahren.", translations: T("zadovoljno", "memnun", "задоволений", "mulțumit", "راضٍ") },
  ],

  dialog: [
    { id: "supermarkt-a2-d1-1", position: 1, dialog_index: 1, dialog_title: "Dialog 1 · Nach günstigerem Öl fragen", speaker: "Kunde", german_text: "Entschuldigen Sie, gibt es hier auch ein günstigeres Olivenöl?", translations: T("Izvinite, ima li ovdje i jeftinijeg maslinovog ulja?", "Affedersiniz, burada daha ucuz zeytinyağı da var mı?", "Вибачте, чи є тут дешевша оливкова олія?", "Scuzați-mă, există și un ulei de măsline mai ieftin aici?", "عفوًا، هل يوجد هنا زيت زيتون أرخص؟") },
    { id: "supermarkt-a2-d1-2", position: 2, dialog_index: 1, dialog_title: "Dialog 1 · Nach günstigerem Öl fragen", speaker: "Mitarbeiterin", german_text: "Ja, die Hausmarke dort ist billiger als die bekannte Marke.", translations: T("Da, tamošnja vlastita marka je jeftinija od poznate marke.", "Evet, oradaki mağaza markası, tanınmış markadan daha ucuz.", "Так, тамтешня власна марка дешевша за відому марку.", "Da, marca proprie de acolo este mai ieftină decât marca cunoscută.", "نعم، الماركة الخاصة هناك أرخص من الماركة المعروفة.") },
    { id: "supermarkt-a2-d1-3", position: 3, dialog_index: 1, dialog_title: "Dialog 1 · Nach günstigerem Öl fragen", speaker: "Kunde", german_text: "Schmeckt sie auch so gut, obwohl sie günstiger ist?", translations: T("Da li i ona ukusna, iako je jeftinija?", "Daha ucuz olmasına rağmen o kadar iyi mi?", "Чи вона теж смачна, хоча дешевша?", "Are un gust la fel de bun, deși e mai ieftin?", "هل مذاقه جيد أيضًا رغم أنه أرخص؟") },
    { id: "supermarkt-a2-d1-4", position: 4, dialog_index: 1, dialog_title: "Dialog 1 · Nach günstigerem Öl fragen", speaker: "Mitarbeiterin", german_text: "Ja, viele Kunden sagen, dass sie fast gleich schmeckt.", translations: T("Da, mnogi kupci kažu da ima gotovo isti ukus.", "Evet, birçok müşteri neredeyse aynı tadı verdiğini söylüyor.", "Так, багато клієнтів кажуть, що смак майже однаковий.", "Da, mulți clienți spun că are aproape același gust.", "نعم، يقول الكثير من الزبائن إن مذاقه مشابه تقريبًا.") },
    { id: "supermarkt-a2-d1-5", position: 5, dialog_index: 1, dialog_title: "Dialog 1 · Nach günstigerem Öl fragen", speaker: "Kunde", german_text: "Gut, dann nehme ich die Hausmarke.", translations: T("Dobro, onda ću uzeti vlastitu marku.", "Tamam, o zaman mağaza markasını alıyorum.", "Добре, тоді я візьму власну марку.", "Bine, atunci iau marca proprie.", "حسنًا، سآخذ الماركة الخاصة إذن.") },
    { id: "supermarkt-a2-d1-6", position: 6, dialog_index: 1, dialog_title: "Dialog 1 · Nach günstigerem Öl fragen", speaker: "Mitarbeiterin", german_text: "Gute Wahl. Brauchen Sie sonst noch Hilfe?", translations: T("Dobar izbor. Trebate li još pomoć?", "İyi seçim. Başka yardıma ihtiyacınız var mı?", "Гарний вибір. Вам потрібна ще якась допомога?", "Alegere bună. Mai aveți nevoie de ajutor?", "اختيار جيد. هل تحتاج مساعدة أخرى؟") },
    { id: "supermarkt-a2-d1-7", position: 7, dialog_index: 1, dialog_title: "Dialog 1 · Nach günstigerem Öl fragen", speaker: "Kunde", german_text: "Ja, wissen Sie, ob das Gemüse heute frisch geliefert wurde?", translations: T("Da, znate li da li je povrće danas svježe dostavljeno?", "Evet, sebzelerin bugün taze teslim edilip edilmediğini biliyor musunuz?", "Так, ви знаєте, чи привезли овочі свіжими сьогодні?", "Da, știți dacă legumele au fost livrate proaspete azi?", "نعم، هل تعرف إن كانت الخضروات وصلت طازجة اليوم؟") },
    { id: "supermarkt-a2-d1-8", position: 8, dialog_index: 1, dialog_title: "Dialog 1 · Nach günstigerem Öl fragen", speaker: "Mitarbeiterin", german_text: "Ja, das Gemüse ist heute Morgen frisch gekommen.", translations: T("Da, povrće je stiglo svježe jutros.", "Evet, sebzeler bu sabah taze geldi.", "Так, овочі надійшли свіжими сьогодні вранці.", "Da, legumele au sosit proaspete azi-dimineață.", "نعم، وصلت الخضروات طازجة صباح اليوم.") },
    { id: "supermarkt-a2-d1-9", position: 9, dialog_index: 1, dialog_title: "Dialog 1 · Nach günstigerem Öl fragen", speaker: "Kunde", german_text: "Super, dann kaufe ich auch etwas Gemüse.", translations: T("Super, onda ću kupiti i malo povrća.", "Harika, o zaman biraz sebze de alacağım.", "Чудово, тоді я також куплю трохи овочів.", "Super, atunci cumpăr și niște legume.", "رائع، سأشتري إذن بعض الخضروات أيضًا.") },
    { id: "supermarkt-a2-d1-10", position: 10, dialog_index: 1, dialog_title: "Dialog 1 · Nach günstigerem Öl fragen", speaker: "Mitarbeiterin", german_text: "Gerne, ich zeige Ihnen den Weg dorthin.", translations: T("Rado, pokazaću vam put dotle.", "Memnuniyetle, size oraya giden yolu göstereyim.", "Із задоволенням, я покажу вам туди дорогу.", "Cu plăcere, vă arăt drumul într-acolo.", "بكل سرور، سأريك الطريق إلى هناك.") },
    { id: "supermarkt-a2-d1-11", position: 11, dialog_index: 1, dialog_title: "Dialog 1 · Nach günstigerem Öl fragen", speaker: "Kunde", german_text: "Vielen Dank, das ist sehr freundlich von Ihnen.", translations: T("Hvala vam puno, to je jako ljubazno od vas.", "Çok teşekkürler, bu sizden çok naziklik.", "Дуже дякую, це дуже люб'язно з вашого боку.", "Mulțumesc mult, este foarte drăguț din partea dumneavoastră.", "شكرًا جزيلاً، هذا لطف كبير منك.") },

    { id: "supermarkt-a2-d2-1", position: 1, dialog_index: 2, dialog_title: "Dialog 2 · Problem an der Kasse", speaker: "Kunde", german_text: "Entschuldigung, ich glaube, dass der Preis für den Käse nicht stimmt.", translations: T("Izvinite, mislim da cijena sira nije tačna.", "Affedersiniz, sanırım peynirin fiyatı doğru değil.", "Вибачте, я думаю, ціна на сир невірна.", "Scuzați-mă, cred că prețul pentru brânză nu este corect.", "عفوًا، أعتقد أن سعر الجبن غير صحيح.") },
    { id: "supermarkt-a2-d2-2", position: 2, dialog_index: 2, dialog_title: "Dialog 2 · Problem an der Kasse", speaker: "Kassiererin", german_text: "Oh, das tut mir leid. Ich schaue mir das gleich an.", translations: T("O, žao mi je. Odmah ću to pogledati.", "Ah, üzgünüm. Hemen bakıyorum.", "О, вибачте. Я одразу перевірю.", "Oh, îmi pare rău. Mă uit imediat la asta.", "آه، أنا آسفة. سأتحقق من ذلك فورًا.") },
    { id: "supermarkt-a2-d2-3", position: 3, dialog_index: 2, dialog_title: "Dialog 2 · Problem an der Kasse", speaker: "Kunde", german_text: "Auf dem Schild stand ein anderer Preis als auf dem Bon.", translations: T("Na natpisu je pisala drugačija cijena nego na računu.", "Etikette faturadan farklı bir fiyat yazıyordu.", "На ярлику була вказана інша ціна, ніж у чеку.", "Pe etichetă scria un preț diferit față de bon.", "كان السعر المكتوب على اللافتة مختلفًا عن الإيصال.") },
    { id: "supermarkt-a2-d2-4", position: 4, dialog_index: 2, dialog_title: "Dialog 2 · Problem an der Kasse", speaker: "Kassiererin", german_text: "Sie haben recht, das System hat sich geirrt. Ich korrigiere es sofort.", translations: T("U pravu ste, sistem je pogriješio. Odmah ću to ispraviti.", "Haklısınız, sistem hata yapmış. Hemen düzeltiyorum.", "Ви маєте рацію, система помилилася. Я одразу виправлю.", "Aveți dreptate, sistemul a greșit. Corectez imediat.", "أنت محق، النظام أخطأ. سأصحح ذلك فورًا.") },
    { id: "supermarkt-a2-d2-5", position: 5, dialog_index: 2, dialog_title: "Dialog 2 · Problem an der Kasse", speaker: "Kunde", german_text: "Danke, dass Sie das so schnell geregelt haben.", translations: T("Hvala što ste to tako brzo riješili.", "Bunu bu kadar hızlı çözdüğünüz için teşekkür ederim.", "Дякую, що так швидко це вирішили.", "Mulțumesc că ați rezolvat asta atât de repede.", "شكرًا لأنك حللت الأمر بهذه السرعة.") },
    { id: "supermarkt-a2-d2-6", position: 6, dialog_index: 2, dialog_title: "Dialog 2 · Problem an der Kasse", speaker: "Kassiererin", german_text: "Kein Problem. Möchten Sie eine Tüte, weil Sie Ihre eigene vergessen haben?", translations: T("Nema problema. Želite li kesu, budući da ste zaboravili svoju?", "Sorun değil. Kendi çantanızı unuttuğunuz için bir torba ister misiniz?", "Не проблема. Бажаєте пакет, оскільки забули свій?", "Nicio problemă. Doriți o pungă, având în vedere că v-ați uitat-o pe a dumneavoastră?", "لا مشكلة. هل تريد كيسًا لأنك نسيت كيسك الخاص؟") },
    { id: "supermarkt-a2-d2-7", position: 7, dialog_index: 2, dialog_title: "Dialog 2 · Problem an der Kasse", speaker: "Kunde", german_text: "Ja, bitte, das wäre nett.", translations: T("Da, molim, to bi bilo lijepo.", "Evet, lütfen, bu iyi olur.", "Так, будь ласка, це було б добре.", "Da, vă rog, ar fi drăguț.", "نعم من فضلك، سيكون ذلك لطيفًا.") },
    { id: "supermarkt-a2-d2-8", position: 8, dialog_index: 2, dialog_title: "Dialog 2 · Problem an der Kasse", speaker: "Kassiererin", german_text: "Bitte schön. Das macht dann insgesamt 18 Euro 30.", translations: T("Izvolite. To je onda ukupno 18 eura 30 centi.", "Buyurun. Bu toplamda 18 avro 30 sent tutuyor.", "Прошу. Це разом 18 євро 30.", "Poftim. Costă în total 18 euro 30.", "تفضل. المجموع إذن 18 يورو و30 سنتًا.") },
    { id: "supermarkt-a2-d2-9", position: 9, dialog_index: 2, dialog_title: "Dialog 2 · Problem an der Kasse", speaker: "Kunde", german_text: "Hier, ich bezahle mit Karte.", translations: T("Izvolite, plaćam karticom.", "Buyurun, kartla ödüyorum.", "Прошу, я плачу карткою.", "Poftim, plătesc cu cardul.", "تفضلي، أدفع بالبطاقة.") },
    { id: "supermarkt-a2-d2-10", position: 10, dialog_index: 2, dialog_title: "Dialog 2 · Problem an der Kasse", speaker: "Kassiererin", german_text: "Alles erledigt. Vielen Dank und einen schönen Tag noch!", translations: T("Sve gotovo. Hvala vam puno i prijatan dan još!", "Her şey tamam. Çok teşekkürler ve iyi günler!", "Все готово. Дуже дякую і гарного дня!", "Totul e gata. Mulțumesc mult și o zi frumoasă în continuare!", "كل شيء تم. شكرًا جزيلاً ويومًا سعيدًا لك!") },
    { id: "supermarkt-a2-d2-11", position: 11, dialog_index: 2, dialog_title: "Dialog 2 · Problem an der Kasse", speaker: "Kunde", german_text: "Danke, Ihnen auch. Auf Wiedersehen!", translations: T("Hvala, i vama. Doviđenja!", "Teşekkürler, size de. Hoşça kalın!", "Дякую, вам також. До побачення!", "Mulțumesc, la fel. La revedere!", "شكرًا، ولك أيضًا. إلى اللقاء!") },
  ],

  questions: [
    // ===== Übungen (practice) =====
    { id: "supermarkt-a2-q1", position: 1, kind: "single_choice", section: "practice", prompt: "Warum ist die Kundin in den Supermarkt gegangen?", explanation: "„…weil unser Kühlschrank fast leer war.“", data: H("Razlog je prazan frižider.", "Sebep, boş buzdolabı.", "Причина - порожній холодильник.", "Motivul este frigiderul gol.", "السبب هو الثلاجة الفارغة."), quiz_answers: [
      { id: "supermarkt-a2-q1-a1", position: 1, text: "weil der Kühlschrank fast leer war", is_correct: true },
      { id: "supermarkt-a2-q1-a2", position: 2, text: "weil sie Geburtstag hatte", is_correct: false },
      { id: "supermarkt-a2-q1-a3", position: 3, text: "weil der Bus nicht kam", is_correct: false },
    ] },
    { id: "supermarkt-a2-q2", position: 2, kind: "single_choice", section: "practice", prompt: "Welches Verb passt: „Ich habe alles selbst ___.“ (einpacken, Perfekt)", explanation: "Trennbares Verb im Perfekt: eingepackt.", data: H("Kod glagola sa odvojivim prefiksom, ge dolazi između prefiksa i korijena.", "Ayrılabilir fiillerde ge, önek ile kök arasına gelir.", "У дієсловах з відокремлюваним префіксом ge стоїть між префіксом і коренем.", "La verbele cu prefix separabil, ge vine între prefix și rădăcină.", "في الأفعال ذات البادئة المنفصلة يأتي ge بين البادئة والجذر."), quiz_answers: [
      { id: "supermarkt-a2-q2-a1", position: 1, text: "eingepackt", is_correct: true },
      { id: "supermarkt-a2-q2-a2", position: 2, text: "gepackt ein", is_correct: false },
      { id: "supermarkt-a2-q2-a3", position: 3, text: "einpackt", is_correct: false },
    ] },
    { id: "supermarkt-a2-q3", position: 3, kind: "gap", section: "practice", prompt: "Diese Milch ist ___ als die andere. (billig, Komparativ)", explanation: "Komparativ von billig: billiger.", data: H("Komparativ se gradi sa -er.", "Karşılaştırma -er ile yapılır.", "Компаратив утворюється за допомогою -er.", "Comparativul se formează cu -er.", "يُصاغ التفضيل بإضافة -er."), quiz_answers: [
      { id: "supermarkt-a2-q3-a1", position: 1, text: "billiger", is_correct: true },
    ] },
    { id: "supermarkt-a2-q4", position: 4, kind: "true_false", section: "practice", prompt: "Der Kunde hat seine eigene Tasche mitgebracht.", explanation: "Falsch — er hat vergessen, sie mitzunehmen.", data: H("Kupac je zaboravio torbu.", "Müşteri çantasını unuttu.", "Клієнт забув сумку.", "Clientul a uitat sacoșa.", "نسي الزبون حقيبته."), quiz_answers: [
      { id: "supermarkt-a2-q4-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "supermarkt-a2-q4-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "supermarkt-a2-q5", position: 5, kind: "single_choice", section: "practice", prompt: "Was hat die Mitarbeiterin über die Hausmarke gesagt?", explanation: "„…dass sie fast gleich schmeckt.“", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-a2-q5-a1", position: 1, text: "dass sie fast gleich schmeckt", is_correct: true },
      { id: "supermarkt-a2-q5-a2", position: 2, text: "dass sie viel teurer ist", is_correct: false },
      { id: "supermarkt-a2-q5-a3", position: 3, text: "dass es sie nicht mehr gibt", is_correct: false },
    ] },
    { id: "supermarkt-a2-q6", position: 6, kind: "single_choice", section: "practice", prompt: "Was war das Problem an der Kasse?", explanation: "Der Preis für den Käse hat nicht gestimmt.", data: H("Cijena sira nije bila tačna.", "Peynirin fiyatı yanlıştı.", "Ціна на сир була невірна.", "Prețul pentru brânză nu era corect.", "كان سعر الجبن غير صحيح."), quiz_answers: [
      { id: "supermarkt-a2-q6-a1", position: 1, text: "Der Preis für den Käse stimmte nicht.", is_correct: true },
      { id: "supermarkt-a2-q6-a2", position: 2, text: "Die Kasse war kaputt.", is_correct: false },
      { id: "supermarkt-a2-q6-a3", position: 3, text: "Es gab keine Tüten mehr.", is_correct: false },
    ] },
    { id: "supermarkt-a2-q7", position: 7, kind: "gap", section: "practice", prompt: "Ich kaufe Nudeln, ___ sie im Angebot sind. (Grund)", explanation: "„weil“ leitet einen Grund ein.", data: H("weil uvodi razlog.", "weil sebep bildiren cümleyi başlatır.", "weil вводить причину.", "weil introduce un motiv.", "weil تُدخل السبب."), quiz_answers: [
      { id: "supermarkt-a2-q7-a1", position: 1, text: "weil", is_correct: true },
    ] },
    { id: "supermarkt-a2-q8", position: 8, kind: "single_choice", section: "practice", prompt: "Welcher Satz beschreibt eine Bewegung (Akkusativ)?", explanation: "„Ich lege die Milch in den Wagen.“ beschreibt eine Bewegung (wohin?).", data: H("Wechselpräpozicija sa akuzativom opisuje kretanje.", "Değişken edatlar akuzatifle hareketi belirtir.", "Змінна прийменникова конструкція зі знахідним описує рух.", "Prepoziția cu acuzativ descrie mișcarea.", "حرف الجر مع حالة المفعول يصف الحركة."), quiz_answers: [
      { id: "supermarkt-a2-q8-a1", position: 1, text: "Ich lege die Milch in den Wagen.", is_correct: true },
      { id: "supermarkt-a2-q8-a2", position: 2, text: "Die Milch steht in dem Wagen.", is_correct: false },
      { id: "supermarkt-a2-q8-a3", position: 3, text: "Die Milch war im Wagen.", is_correct: false },
    ] },
    { id: "supermarkt-a2-q9", position: 9, kind: "single_choice", section: "practice", prompt: "Wie hat die Kassiererin auf das Preisproblem reagiert?", explanation: "„Sie haben recht, das System hat sich geirrt. Ich korrigiere es sofort.“", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-a2-q9-a1", position: 1, text: "Sie hat den Preis sofort korrigiert.", is_correct: true },
      { id: "supermarkt-a2-q9-a2", position: 2, text: "Sie hat den Kunden weggeschickt.", is_correct: false },
      { id: "supermarkt-a2-q9-a3", position: 3, text: "Sie hat nichts gesagt.", is_correct: false },
    ] },
    { id: "supermarkt-a2-q10", position: 10, kind: "single_choice", section: "practice", prompt: "Wie viel hat der Kunde am Ende insgesamt bezahlt?", explanation: "„Das macht dann insgesamt 18 Euro 30.“", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-a2-q10-a1", position: 1, text: "18 Euro 30", is_correct: true },
      { id: "supermarkt-a2-q10-a2", position: 2, text: "12 Euro 50", is_correct: false },
      { id: "supermarkt-a2-q10-a3", position: 3, text: "20 Euro", is_correct: false },
    ] },

    // ===== Abschlusstest (40 Fragen) =====
    { id: "supermarkt-a2-t1", position: 1, kind: "single_choice", section: "test", prompt: "Wann ist die Kundin einkaufen gegangen?", explanation: "„Am Samstag bin ich in den Supermarkt gegangen…“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t1-a1", position: 1, text: "am Samstag", is_correct: true },
      { id: "supermarkt-a2-t1-a2", position: 2, text: "am Montag", is_correct: false },
      { id: "supermarkt-a2-t1-a3", position: 3, text: "am Feiertag", is_correct: false },
    ] },
    { id: "supermarkt-a2-t2", position: 2, kind: "true_false", section: "test", prompt: "Die Person hat eine Einkaufsliste geschrieben.", explanation: "Richtig, das steht im Text.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t2-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "supermarkt-a2-t2-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "supermarkt-a2-t3", position: 3, kind: "gap", section: "test", prompt: "Sie hat gesagt, dass die Hausmarke ___ ist als die bekannte Marke. (Komparativ von billig)", explanation: "Komparativ: billiger.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t3-a1", position: 1, text: "billiger", is_correct: true },
    ] },
    { id: "supermarkt-a2-t4", position: 4, kind: "single_choice", section: "test", prompt: "Was hat die Kundin die Mitarbeiterin gefragt?", explanation: "Ob es günstigeres Olivenöl gibt.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t4-a1", position: 1, text: "ob es günstigeres Olivenöl gibt", is_correct: true },
      { id: "supermarkt-a2-t4-a2", position: 2, text: "ob der Laden bald schließt", is_correct: false },
      { id: "supermarkt-a2-t4-a3", position: 3, text: "ob es einen Parkplatz gibt", is_correct: false },
    ] },
    { id: "supermarkt-a2-t5", position: 5, kind: "single_choice", section: "test", prompt: "Welches Partizip II passt zu „kaufen“?", explanation: "kaufen → gekauft (Perfekt mit haben).", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t5-a1", position: 1, text: "gekauft", is_correct: true },
      { id: "supermarkt-a2-t5-a2", position: 2, text: "kauft", is_correct: false },
      { id: "supermarkt-a2-t5-a3", position: 3, text: "gekauften", is_correct: false },
    ] },
    { id: "supermarkt-a2-t6", position: 6, kind: "single_choice", section: "test", prompt: "Warum hat die Kundin Nudeln mitgenommen?", explanation: "„…weil sie im Angebot waren.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t6-a1", position: 1, text: "weil sie im Angebot waren", is_correct: true },
      { id: "supermarkt-a2-t6-a2", position: 2, text: "weil sie ihr Lieblingsessen sind", is_correct: false },
      { id: "supermarkt-a2-t6-a3", position: 3, text: "weil sie fast leer waren", is_correct: false },
    ] },
    { id: "supermarkt-a2-t7", position: 7, kind: "true_false", section: "test", prompt: "An der Kasse war alles sofort richtig.", explanation: "Falsch — der Preis für den Käse hat nicht gestimmt.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t7-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "supermarkt-a2-t7-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "supermarkt-a2-t8", position: 8, kind: "single_choice", section: "test", prompt: "Was hat die Kassiererin gemacht, nachdem sie darauf hingewiesen wurde?", explanation: "Sie hat den Preis freundlich korrigiert.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t8-a1", position: 1, text: "Sie hat den Preis korrigiert.", is_correct: true },
      { id: "supermarkt-a2-t8-a2", position: 2, text: "Sie hat sich geweigert.", is_correct: false },
      { id: "supermarkt-a2-t8-a3", position: 3, text: "Sie hat den Kunden nach Hause geschickt.", is_correct: false },
    ] },
    { id: "supermarkt-a2-t9", position: 9, kind: "single_choice", section: "test", prompt: "Was hat die Kundin vergessen?", explanation: "„Ich habe vergessen, meine eigene Tasche mitzunehmen.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t9-a1", position: 1, text: "ihre eigene Tasche", is_correct: true },
      { id: "supermarkt-a2-t9-a2", position: 2, text: "ihr Portemonnaie", is_correct: false },
      { id: "supermarkt-a2-t9-a3", position: 3, text: "ihre Einkaufsliste", is_correct: false },
    ] },
    { id: "supermarkt-a2-t10", position: 10, kind: "gap", section: "test", prompt: "Deshalb hat sie eine ___ gekauft, obwohl sie extra gekostet hat.", explanation: "Gemeint ist die Ersatztüte: „Papiertüte“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t10-a1", position: 1, text: "Papiertüte", is_correct: true },
    ] },
    { id: "supermarkt-a2-t11", position: 11, kind: "single_choice", section: "test", prompt: "Womit hat die Kundin bezahlt?", explanation: "„Ich habe mit Karte bezahlt, weil ich kein Bargeld dabei hatte.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t11-a1", position: 1, text: "mit Karte", is_correct: true },
      { id: "supermarkt-a2-t11-a2", position: 2, text: "bar", is_correct: false },
      { id: "supermarkt-a2-t11-a3", position: 3, text: "mit einem Gutschein", is_correct: false },
    ] },
    { id: "supermarkt-a2-t12", position: 12, kind: "single_choice", section: "test", prompt: "Wer hat am Ende alle Sachen eingepackt?", explanation: "„Am Ende habe ich alle Sachen selbst eingepackt.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t12-a1", position: 1, text: "die Kundin selbst", is_correct: true },
      { id: "supermarkt-a2-t12-a2", position: 2, text: "die Kassiererin", is_correct: false },
      { id: "supermarkt-a2-t12-a3", position: 3, text: "ein anderer Mitarbeiter", is_correct: false },
    ] },
    { id: "supermarkt-a2-t13", position: 13, kind: "single_choice", section: "test", prompt: "Was bedeutet „die Hausmarke“?", explanation: "Eine Marke, die dem Supermarkt selbst gehört, meist günstiger.", data: H("Vlastita marka trgovine, obično jeftinija.", "Mağazanın kendi markası, genelde daha ucuz.", "Власна марка магазину, зазвичай дешевша.", "Marca proprie a magazinului, de obicei mai ieftină.", "الماركة الخاصة بالمتجر، عادة أرخص."), quiz_answers: [
      { id: "supermarkt-a2-t13-a1", position: 1, text: "eine günstigere Marke des Supermarkts", is_correct: true },
      { id: "supermarkt-a2-t13-a2", position: 2, text: "eine internationale Luxusmarke", is_correct: false },
      { id: "supermarkt-a2-t13-a3", position: 3, text: "ein Küchengerät", is_correct: false },
    ] },
    { id: "supermarkt-a2-t14", position: 14, kind: "single_choice", section: "test", prompt: "Was ist „die Quittung“?", explanation: "Ein Beleg, den man aufhebt, z. B. für Rückgaben.", data: H("Priznanica koja se čuva.", "Saklanan makbuz.", "Квитанція, яку зберігають.", "Chitanța pe care o păstrezi.", "الإيصال الذي يُحتفظ به."), quiz_answers: [
      { id: "supermarkt-a2-t14-a1", position: 1, text: "ein Zahlungsbeleg", is_correct: true },
      { id: "supermarkt-a2-t14-a2", position: 2, text: "eine Einkaufsliste", is_correct: false },
      { id: "supermarkt-a2-t14-a3", position: 3, text: "eine Tüte", is_correct: false },
    ] },
    { id: "supermarkt-a2-t15", position: 15, kind: "single_choice", section: "test", prompt: "Was ist das Gegenteil von „frisch“ bei Lebensmitteln?", explanation: "Das Gegenteil von frisch ist alt/nicht mehr frisch.", data: H("Suprotno od frisch je staro/pokvareno.", "Frisch'in zıttı bayat/eski.", "Протилежність frisch - старий/несвіжий.", "Opusul lui frisch este vechi/alterat.", "عكس frisch هو قديم/فاسد."), quiz_answers: [
      { id: "supermarkt-a2-t15-a1", position: 1, text: "alt", is_correct: true },
      { id: "supermarkt-a2-t15-a2", position: 2, text: "billig", is_correct: false },
      { id: "supermarkt-a2-t15-a3", position: 3, text: "leer", is_correct: false },
    ] },
    { id: "supermarkt-a2-t16", position: 16, kind: "single_choice", section: "test", prompt: "Welches Wort ist ein trennbares Verb?", explanation: "„einkaufen“ trennt sich: Ich kaufe … ein.", data: H("einkaufen se dijeli u glavnoj rečenici.", "einkaufen ana cümlede ayrılır.", "einkaufen розділяється в головному реченні.", "einkaufen se separă în propoziția principală.", "einkaufen ينفصل في الجملة الرئيسية."), quiz_answers: [
      { id: "supermarkt-a2-t16-a1", position: 1, text: "einkaufen", is_correct: true },
      { id: "supermarkt-a2-t16-a2", position: 2, text: "bezahlen", is_correct: false },
      { id: "supermarkt-a2-t16-a3", position: 3, text: "kosten", is_correct: false },
    ] },
    { id: "supermarkt-a2-t17", position: 17, kind: "gap", section: "test", prompt: "Ich kaufe heute im Supermarkt ___. (einkaufen, trennbares Verb)", explanation: "Die Vorsilbe „ein“ wandert ans Satzende.", data: H("Prefiks ein ide na kraj rečenice.", "Ein öneki cümlenin sonuna gider.", "Префікс ein переходить у кінець речення.", "Prefixul ein merge la sfârșitul propoziției.", "البادئة ein تنتقل إلى نهاية الجملة."), quiz_answers: [
      { id: "supermarkt-a2-t17-a1", position: 1, text: "ein", is_correct: true },
    ] },
    { id: "supermarkt-a2-t18", position: 18, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "Perfekt mit „haben“: Ich habe Brot gekauft.", data: H("Perfekt sa haben je uobičajen za većinu glagola.", "Haben ile perfekt çoğu fiil için kullanılır.", "Перфект з haben типовий для більшості дієслів.", "Perfectul cu haben este obișnuit pentru majoritatea verbelor.", "الماضي التام مع haben شائع لمعظم الأفعال."), quiz_answers: [
      { id: "supermarkt-a2-t18-a1", position: 1, text: "Ich habe Brot gekauft.", is_correct: true },
      { id: "supermarkt-a2-t18-a2", position: 2, text: "Ich bin Brot gekauft.", is_correct: false },
      { id: "supermarkt-a2-t18-a3", position: 3, text: "Ich habe Brot kaufen.", is_correct: false },
    ] },
    { id: "supermarkt-a2-t19", position: 19, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "Perfekt mit „sein“ bei Bewegung: Wir sind gegangen.", data: H("Perfekt sa sein je uobičajen kod glagola kretanja.", "Sein ile perfekt hareket fiillerinde kullanılır.", "Перфект з sein типовий для дієслів руху.", "Perfectul cu sein este pentru verbele de mișcare.", "الماضي التام مع sein يُستخدم لأفعال الحركة."), quiz_answers: [
      { id: "supermarkt-a2-t19-a1", position: 1, text: "Wir sind zum Supermarkt gegangen.", is_correct: true },
      { id: "supermarkt-a2-t19-a2", position: 2, text: "Wir haben zum Supermarkt gegangen.", is_correct: false },
      { id: "supermarkt-a2-t19-a3", position: 3, text: "Wir sind zum Supermarkt gehen.", is_correct: false },
    ] },
    { id: "supermarkt-a2-t20", position: 20, kind: "single_choice", section: "test", prompt: "Welches Wort passt: „Diese Milch ist billiger ___ die andere.“", explanation: "Nach dem Komparativ steht „als“.", data: H("Poslije komparativa dolazi als.", "Karşılaştırma sonrasında als gelir.", "Після компаратива йде als.", "După comparativ urmează als.", "بعد صيغة التفضيل يأتي als."), quiz_answers: [
      { id: "supermarkt-a2-t20-a1", position: 1, text: "als", is_correct: true },
      { id: "supermarkt-a2-t20-a2", position: 2, text: "wie", is_correct: false },
      { id: "supermarkt-a2-t20-a3", position: 3, text: "dass", is_correct: false },
    ] },
    { id: "supermarkt-a2-t21", position: 21, kind: "single_choice", section: "test", prompt: "Welches Wort passt: „Ich glaube, ___ die Milch noch da ist.“", explanation: "„dass“ leitet einen Inhaltssatz ein.", data: H("dass uvodi izjavnu rečenicu.", "dass bir bildirim cümlesini başlatır.", "dass вводить підрядне речення змісту.", "dass introduce o propoziție enunțiativă.", "dass تُدخل جملة الخبر."), quiz_answers: [
      { id: "supermarkt-a2-t21-a1", position: 1, text: "dass", is_correct: true },
      { id: "supermarkt-a2-t21-a2", position: 2, text: "weil", is_correct: false },
      { id: "supermarkt-a2-t21-a3", position: 3, text: "wenn", is_correct: false },
    ] },
    { id: "supermarkt-a2-t22", position: 22, kind: "single_choice", section: "test", prompt: "Wie fragt man höflich nach einer günstigeren Alternative?", explanation: "„Gibt es hier auch ein günstigeres Olivenöl?“", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-a2-t22-a1", position: 1, text: "Gibt es hier auch ein günstigeres Olivenöl?", is_correct: true },
      { id: "supermarkt-a2-t22-a2", position: 2, text: "Wo ist der Bahnhof?", is_correct: false },
      { id: "supermarkt-a2-t22-a3", position: 3, text: "Wie spät ist es?", is_correct: false },
    ] },
    { id: "supermarkt-a2-t23", position: 23, kind: "single_choice", section: "test", prompt: "Welcher Satz mit Wechselpräposition beschreibt eine Position (Dativ)?", explanation: "„Die Milch steht in dem Wagen.“ beschreibt eine Position (wo?).", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t23-a1", position: 1, text: "Die Milch steht in dem Wagen.", is_correct: true },
      { id: "supermarkt-a2-t23-a2", position: 2, text: "Ich lege die Milch in den Wagen.", is_correct: false },
      { id: "supermarkt-a2-t23-a3", position: 3, text: "Ich stelle die Milch in den Wagen.", is_correct: false },
    ] },
    { id: "supermarkt-a2-t24", position: 24, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "„Ich muss noch Obst kaufen.“ — Modalverb + Infinitiv am Ende.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t24-a1", position: 1, text: "Ich muss noch Obst kaufen.", is_correct: true },
      { id: "supermarkt-a2-t24-a2", position: 2, text: "Ich muss kaufen noch Obst.", is_correct: false },
      { id: "supermarkt-a2-t24-a3", position: 3, text: "Kaufen ich muss noch Obst.", is_correct: false },
    ] },
    { id: "supermarkt-a2-t25", position: 25, kind: "single_choice", section: "test", prompt: "Welches Wort passt: „___ ich einkaufen gehe, nehme ich immer eine Liste mit.“", explanation: "„Wenn“ beschreibt eine Bedingung oder Wiederholung.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a2-t25-a1", position: 1, text: "Wenn", is_correct: true },
      { id: "supermarkt-a2-t25-a2", position: 2, text: "Weil", is_correct: false },
      { id: "supermarkt-a2-t25-a3", position: 3, text: "Ob", is_correct: false },
    ] },
    { id: "supermarkt-a2-t26", position: 26, kind: "single_choice", section: "test", prompt: "Wer sagt im Dialog „Entschuldigen Sie, gibt es hier auch ein günstigeres Olivenöl?“?", explanation: "Das sagt der Kunde.", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-a2-t26-a1", position: 1, text: "der Kunde", is_correct: true },
      { id: "supermarkt-a2-t26-a2", position: 2, text: "die Mitarbeiterin", is_correct: false },
      { id: "supermarkt-a2-t26-a3", position: 3, text: "niemand", is_correct: false },
    ] },
    { id: "supermarkt-a2-t27", position: 27, kind: "single_choice", section: "test", prompt: "Was antwortet die Kassiererin, als sie den Fehler bemerkt?", explanation: "„Sie haben recht, das System hat sich geirrt. Ich korrigiere es sofort.“", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-a2-t27-a1", position: 1, text: "Sie haben recht, das System hat sich geirrt.", is_correct: true },
      { id: "supermarkt-a2-t27-a2", position: 2, text: "Das ist unmöglich.", is_correct: false },
      { id: "supermarkt-a2-t27-a3", position: 3, text: "Der Zug fährt um acht.", is_correct: false },
    ] },
    { id: "supermarkt-a2-t28", position: 28, kind: "true_false", section: "test", prompt: "Der Kunde hat am Ende eine Tüte bekommen, weil er seine eigene vergessen hatte.", explanation: "Richtig — laut Dialog 2.", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-a2-t28-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "supermarkt-a2-t28-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "supermarkt-a2-t29", position: 29, kind: "single_choice", section: "test", prompt: "Wie viel hat der Kunde insgesamt bezahlt?", explanation: "„Das macht dann insgesamt 18 Euro 30.“", data: H("Ukupna cijena je 18 eura 30 centi.", "Toplam fiyat 18 avro 30 sent.", "Загальна ціна - 18 євро 30.", "Prețul total este 18 euro 30.", "المبلغ الإجمالي 18 يورو و30 سنتًا."), quiz_answers: [
      { id: "supermarkt-a2-t29-a1", position: 1, text: "18 Euro 30", is_correct: true },
      { id: "supermarkt-a2-t29-a2", position: 2, text: "12 Euro 50", is_correct: false },
      { id: "supermarkt-a2-t29-a3", position: 3, text: "25 Euro", is_correct: false },
    ] },
    { id: "supermarkt-a2-t30", position: 30, kind: "single_choice", section: "test", prompt: "Was macht man normalerweise, wenn ein Preis an der Kasse falsch ist?", explanation: "Man weist freundlich darauf hin, damit es korrigiert wird.", data: H("Ljubazno se ukazuje na grešku.", "Nazikçe hataya dikkat çekilir.", "Ввічливо звертають увагу на помилку.", "Se atrage atenția politicos asupra greșelii.", "يُشار إلى الخطأ بلطف."), quiz_answers: [
      { id: "supermarkt-a2-t30-a1", position: 1, text: "Man weist die Kassiererin freundlich darauf hin.", is_correct: true },
      { id: "supermarkt-a2-t30-a2", position: 2, text: "Man geht ohne zu bezahlen.", is_correct: false },
      { id: "supermarkt-a2-t30-a3", position: 3, text: "Man ruft die Polizei.", is_correct: false },
    ] },
    { id: "supermarkt-a2-t31", position: 31, kind: "true_false", section: "test", prompt: "In vielen deutschen Supermärkten muss man eine Plastiktüte extra bezahlen, um Müll zu reduzieren.", explanation: "Richtig — das ist eine übliche Umweltmaßnahme.", data: H("Plastične kese se plaćaju da bi se smanjio otpad.", "Plastik torbalar atığı azaltmak için ücretlidir.", "За пластикові пакети платять, щоб зменшити відходи.", "Pungile de plastic se plătesc pentru a reduce deșeurile.", "تُدفع أكياس البلاستيك لتقليل النفايات."), quiz_answers: [
      { id: "supermarkt-a2-t31-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "supermarkt-a2-t31-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "supermarkt-a2-t32", position: 32, kind: "true_false", section: "test", prompt: "Hausmarken sind meistens teurer als bekannte Markenprodukte.", explanation: "Falsch — Hausmarken sind meist günstiger.", data: H("Vlastite marke su obično jeftinije.", "Mağaza markaları genelde daha ucuz.", "Власні марки зазвичай дешевші.", "Mărcile proprii sunt de obicei mai ieftine.", "الماركات الخاصة عادة أرخص."), quiz_answers: [
      { id: "supermarkt-a2-t32-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "supermarkt-a2-t32-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "supermarkt-a2-t33", position: 33, kind: "single_choice", section: "test", prompt: "Was tut man normalerweise, wenn man vergessen hat, eine eigene Tasche mitzunehmen?", explanation: "Man kauft im Supermarkt eine Tüte.", data: H("Kupuje se kesa u supermarketu.", "Süpermarkette torba satın alınır.", "У супермаркеті купують пакет.", "Se cumpără o pungă la supermarket.", "يُشترى كيس من السوبر ماركت."), quiz_answers: [
      { id: "supermarkt-a2-t33-a1", position: 1, text: "Man kauft eine Tüte im Supermarkt.", is_correct: true },
      { id: "supermarkt-a2-t33-a2", position: 2, text: "Man trägt alles in den Händen ohne Tüte.", is_correct: false },
      { id: "supermarkt-a2-t33-a3", position: 3, text: "Man muss zurück nach Hause gehen.", is_correct: false },
    ] },
    { id: "supermarkt-a2-t34", position: 34, kind: "single_choice", section: "test", prompt: "Was passt NICHT in einen Supermarkt?", explanation: "Ein Reisepass-Schalter gehört auf ein Amt, nicht in einen Supermarkt.", data: H("Šalter za pasoše pripada uredu, ne supermarketu.", "Pasaport gişesi bir kuruma aittir, süpermarkete değil.", "Паспортний стіл належить установі, а не супермаркету.", "Ghișeul de pașapoarte aparține unei instituții, nu supermarketului.", "شباك جوازات السفر يخص مؤسسة رسمية، وليس السوبر ماركت."), quiz_answers: [
      { id: "supermarkt-a2-t34-a1", position: 1, text: "ein Reisepass-Schalter", is_correct: true },
      { id: "supermarkt-a2-t34-a2", position: 2, text: "ein Kühlregal", is_correct: false },
      { id: "supermarkt-a2-t34-a3", position: 3, text: "eine Kasse", is_correct: false },
    ] },
    { id: "supermarkt-a2-t35", position: 35, kind: "single_choice", section: "test", prompt: "Warum ist eine Quittung wichtig?", explanation: "Man braucht sie oft für Rückgaben oder Reklamationen.", data: H("Priznanica je potrebna za povrat robe.", "Makbuz genellikle iade için gereklidir.", "Квитанція часто потрібна для повернень.", "Chitanța este necesară adesea pentru retururi.", "الإيصال ضروري غالبًا للإرجاع."), quiz_answers: [
      { id: "supermarkt-a2-t35-a1", position: 1, text: "Man braucht sie oft für Rückgaben.", is_correct: true },
      { id: "supermarkt-a2-t35-a2", position: 2, text: "Sie macht das Obst frischer.", is_correct: false },
      { id: "supermarkt-a2-t35-a3", position: 3, text: "Sie ist Pflicht zum Betreten des Ladens.", is_correct: false },
    ] },
    { id: "supermarkt-a2-t36", position: 36, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "Perfekt: „Ich habe die Milch gekauft.“", data: H("Perfekt sa haben za glagol kaufen.", "Kaufen fiili için haben ile perfekt.", "Перфект з haben для дієслова kaufen.", "Perfect cu haben pentru verbul kaufen.", "الماضي التام مع haben لفعل kaufen."), quiz_answers: [
      { id: "supermarkt-a2-t36-a1", position: 1, text: "Ich habe die Milch gekauft.", is_correct: true },
      { id: "supermarkt-a2-t36-a2", position: 2, text: "Ich bin die Milch gekauft.", is_correct: false },
      { id: "supermarkt-a2-t36-a3", position: 3, text: "Ich habe die Milch kaufen.", is_correct: false },
    ] },
    { id: "supermarkt-a2-t37", position: 37, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "Das Gemüse hier ist frischer als im anderen Laden.", data: H("Poslije komparativa dolazi als.", "Karşılaştırma sonrasında als gelir.", "Після компаратива йде als.", "După comparativ urmează als.", "بعد صيغة التفضيل يأتي als."), quiz_answers: [
      { id: "supermarkt-a2-t37-a1", position: 1, text: "Das Gemüse hier ist frischer als im anderen Laden.", is_correct: true },
      { id: "supermarkt-a2-t37-a2", position: 2, text: "Das Gemüse hier ist frischer wie im anderen Laden.", is_correct: false },
      { id: "supermarkt-a2-t37-a3", position: 3, text: "Das Gemüse hier ist frisch als im anderen Laden.", is_correct: false },
    ] },
    { id: "supermarkt-a2-t38", position: 38, kind: "gap", section: "test", prompt: "Ich kaufe heute im Supermarkt ___. (einkaufen)", explanation: "„ein“ — die Vorsilbe steht am Satzende.", data: H("Kod glagola sa odvojivim prefiksom, prefiks ide na kraj.", "Ayrılabilir fiillerde önek sona gider.", "У дієсловах з відокремлюваним префіксом префікс іде в кінець.", "La verbele cu prefix separabil, prefixul merge la sfârșit.", "في الأفعال ذات البادئة المنفصلة تنتقل البادئة إلى النهاية."), quiz_answers: [
      { id: "supermarkt-a2-t38-a1", position: 1, text: "ein", is_correct: true },
    ] },
    { id: "supermarkt-a2-t39", position: 39, kind: "single_choice", section: "test", prompt: "Was ist eine höfliche Möglichkeit, einen Fehler an der Kasse anzusprechen?", explanation: "„Entschuldigung, ich glaube, dass der Preis nicht stimmt.“", data: H("Uctivo ukazuje na problem.", "Sorunu nazikçe belirtiyor.", "Ввічливо вказує на проблему.", "Semnalează politicos problema.", "يشير إلى المشكلة بأدب."), quiz_answers: [
      { id: "supermarkt-a2-t39-a1", position: 1, text: "Entschuldigung, ich glaube, dass der Preis nicht stimmt.", is_correct: true },
      { id: "supermarkt-a2-t39-a2", position: 2, text: "Das ist falsch, du!", is_correct: false },
      { id: "supermarkt-a2-t39-a3", position: 3, text: "Ich zahle nie wieder hier.", is_correct: false },
    ] },
    { id: "supermarkt-a2-t40", position: 40, kind: "single_choice", section: "test", prompt: "Wie geht die Geschichte zu Ende?", explanation: "Die Kundin bezahlt, packt alles ein und fährt zufrieden nach Hause.", data: H("Na kraju price kupac placa i odlazi kuci zadovoljan.", "Hikayenin sonunda musteri odeyip mutlu bir sekilde eve gidiyor.", "Наприкінці історії клієнтка платить і задоволено їде додому.", "La finalul povestii clienta plateste si pleaca multumita acasa.", "في نهاية القصة تدفع الزبونة وتعود إلى المنزل راضية."), quiz_answers: [
      { id: "supermarkt-a2-t40-a1", position: 1, text: "Sie bezahlt, packt alles ein und fährt zufrieden nach Hause.", is_correct: true },
      { id: "supermarkt-a2-t40-a2", position: 2, text: "Sie geht ohne einzukaufen.", is_correct: false },
      { id: "supermarkt-a2-t40-a3", position: 3, text: "Sie bleibt die ganze Nacht im Supermarkt.", is_correct: false },
    ] },

    // ===== Sprache & Grammatik: zum Anklicken =====
    { id: "supermarkt-a2-g1", position: 1, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist richtig?", explanation: "Perfekt mit „haben“: Ich habe Brot gekauft.", data: H("Perfekt sa haben za vecinu glagola.", "Cogu fiil icin haben ile perfekt.", "Перфект з haben для більшості дієслів.", "Perfect cu haben pentru majoritatea verbelor.", "الماضي التام مع haben لمعظم الأفعال."), quiz_answers: [
      { id: "supermarkt-a2-g1-a1", position: 1, text: "Ich habe Brot gekauft.", is_correct: true },
      { id: "supermarkt-a2-g1-a2", position: 2, text: "Ich bin Brot gekauft.", is_correct: false },
      { id: "supermarkt-a2-g1-a3", position: 3, text: "Ich habe Brot kaufen.", is_correct: false },
    ] },
    { id: "supermarkt-a2-g2", position: 2, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist richtig?", explanation: "Perfekt mit „sein“ bei Bewegungsverben: Wir sind gegangen.", data: H("Perfekt sa sein kod glagola kretanja.", "Hareket fiillerinde sein ile perfekt.", "Перфект з sein у дієсловах руху.", "Perfect cu sein la verbele de miscare.", "الماضي التام مع sein في أفعال الحركة."), quiz_answers: [
      { id: "supermarkt-a2-g2-a1", position: 1, text: "Wir sind zum Supermarkt gegangen.", is_correct: true },
      { id: "supermarkt-a2-g2-a2", position: 2, text: "Wir haben zum Supermarkt gegangen.", is_correct: false },
      { id: "supermarkt-a2-g2-a3", position: 3, text: "Wir sind zum Supermarkt gehen.", is_correct: false },
    ] },
    { id: "supermarkt-a2-g3", position: 3, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit trennbarem Verb ist richtig?", explanation: "Bei „einkaufen“ trennt sich „ein“ im Hauptsatz und steht am Ende.", data: H("Prefiks ein se odvaja u glavnoj recenici.", "Ein oneki ana cumlede ayrilir.", "Префікс ein відокремлюється в головному реченні.", "Prefixul ein se separa in propozitia principala.", "البادئة ein تنفصل في الجملة الرئيسية."), quiz_answers: [
      { id: "supermarkt-a2-g3-a1", position: 1, text: "Ich kaufe heute im Supermarkt ein.", is_correct: true },
      { id: "supermarkt-a2-g3-a2", position: 2, text: "Ich einkaufe heute im Supermarkt.", is_correct: false },
      { id: "supermarkt-a2-g3-a3", position: 3, text: "Ich kaufe einkaufen heute.", is_correct: false },
    ] },
    { id: "supermarkt-a2-g4", position: 4, kind: "single_choice", section: "grammar", prompt: "Welches Wort passt: „Diese Milch ist billiger ___ die andere.“?", explanation: "Nach dem Komparativ steht immer „als“.", data: H("Poslije komparativa uvijek dolazi als.", "Karsilastirma sonrasinda her zaman als gelir.", "Після компаратива завжди йде als.", "Dupa comparativ urmeaza mereu als.", "بعد صيغة التفضيل يأتي دائمًا als."), quiz_answers: [
      { id: "supermarkt-a2-g4-a1", position: 1, text: "als", is_correct: true },
      { id: "supermarkt-a2-g4-a2", position: 2, text: "wie", is_correct: false },
      { id: "supermarkt-a2-g4-a3", position: 3, text: "dass", is_correct: false },
    ] },
    { id: "supermarkt-a2-g5", position: 5, kind: "single_choice", section: "grammar", prompt: "Welches Wort passt: „Ich glaube, ___ die Milch noch da ist.“?", explanation: "„dass“ leitet einen Inhaltssatz ein.", data: H("dass uvodi izjavnu recenicu.", "dass bir bildirim cumlesini baslatir.", "dass вводить підрядне речення змісту.", "dass introduce o propozitie enuntiativa.", "dass تُدخل جملة الخبر."), quiz_answers: [
      { id: "supermarkt-a2-g5-a1", position: 1, text: "dass", is_correct: true },
      { id: "supermarkt-a2-g5-a2", position: 2, text: "weil", is_correct: false },
      { id: "supermarkt-a2-g5-a3", position: 3, text: "wenn", is_correct: false },
    ] },
    { id: "supermarkt-a2-g6", position: 6, kind: "single_choice", section: "grammar", prompt: "Welches Wort passt: „___ ich einkaufen gehe, nehme ich immer eine Liste mit.“?", explanation: "„Wenn“ beschreibt eine wiederkehrende Bedingung.", data: H("Wenn opisuje ponavljajuci uslov.", "Wenn tekrarlanan bir kosulu belirtir.", "Wenn описує повторювану умову.", "Wenn descrie o conditie repetata.", "Wenn تصف شرطًا متكررًا."), quiz_answers: [
      { id: "supermarkt-a2-g6-a1", position: 1, text: "Wenn", is_correct: true },
      { id: "supermarkt-a2-g6-a2", position: 2, text: "Weil", is_correct: false },
      { id: "supermarkt-a2-g6-a3", position: 3, text: "Ob", is_correct: false },
    ] },
    { id: "supermarkt-a2-g7", position: 7, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit Modalverb ist richtig?", explanation: "Bei Modalverben (müssen) steht der Infinitiv am Satzende.", data: H("Kod modalnih glagola (mussen) infinitiv ide na kraj recenice.", "Modal fiillerde (mussen) mastar cumlenin sonuna gider.", "У модальних дієсловах (mussen) інфінітив стоїть у кінці речення.", "La verbele modale (mussen) infinitivul sta la sfarsitul propozitiei.", "مع الأفعال الشرطية (mussen) يأتي المصدر في نهاية الجملة."), quiz_answers: [
      { id: "supermarkt-a2-g7-a1", position: 1, text: "Ich muss noch Obst kaufen.", is_correct: true },
      { id: "supermarkt-a2-g7-a2", position: 2, text: "Ich muss kaufen noch Obst.", is_correct: false },
      { id: "supermarkt-a2-g7-a3", position: 3, text: "Kaufen ich muss noch Obst.", is_correct: false },
    ] },
    { id: "supermarkt-a2-g8", position: 8, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit Wechselpräposition beschreibt eine Bewegung (Akkusativ)?", explanation: "„Ich lege die Milch in den Wagen.“ beschreibt eine Bewegung (wohin?).", data: H("Wechselpräpozicija sa akuzativom opisuje kretanje.", "Degisken edatlar akuzatifle hareketi belirtir.", "Змінна прийменникова конструкція зі знахідним описує рух.", "Prepozitia cu acuzativ descrie miscarea.", "حرف الجر مع حالة المفعول يصف الحركة."), quiz_answers: [
      { id: "supermarkt-a2-g8-a1", position: 1, text: "Ich lege die Milch in den Wagen.", is_correct: true },
      { id: "supermarkt-a2-g8-a2", position: 2, text: "Ich lege die Milch in dem Wagen.", is_correct: false },
      { id: "supermarkt-a2-g8-a3", position: 3, text: "Die Milch steht in den Wagen.", is_correct: false },
    ] },

    // ===== Wo ist was? =====
    { id: "supermarkt-a2-p1", position: 1, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Die Kundin legt die Milch ___ den Einkaufswagen. Welche Präposition/Form passt?", explanation: "Bewegung (wohin?) → Akkusativ: in den Wagen.", data: H("Kretanje (kuda?) trazi akuzativ.", "Hareket (nereye?) akuzatif gerektirir.", "Рух (куди?) вимагає знахідного відмінка.", "Miscarea (unde?) cere acuzativul.", "الحركة (إلى أين؟) تتطلب حالة المفعول."), quiz_answers: [
      { id: "supermarkt-a2-p1-a1", position: 1, text: "in den Wagen", is_correct: true },
      { id: "supermarkt-a2-p1-a2", position: 2, text: "in dem Wagen", is_correct: false },
      { id: "supermarkt-a2-p1-a3", position: 3, text: "an den Wagen", is_correct: false },
    ] },
    { id: "supermarkt-a2-p2", position: 2, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Die Milch steht jetzt ___ dem Wagen. Welche Form passt?", explanation: "Position (wo?) → Dativ: in dem Wagen.", data: H("Pozicija (gdje?) trazi dativ.", "Konum (nerede?) datif gerektirir.", "Позиція (де?) вимагає давального відмінка.", "Pozitia (unde?) cere dativul.", "الموقع (أين؟) يتطلب حالة الجر."), quiz_answers: [
      { id: "supermarkt-a2-p2-a1", position: 1, text: "in dem Wagen", is_correct: true },
      { id: "supermarkt-a2-p2-a2", position: 2, text: "in den Wagen", is_correct: false },
      { id: "supermarkt-a2-p2-a3", position: 3, text: "in das Wagen", is_correct: false },
    ] },
    { id: "supermarkt-a2-p3", position: 3, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Nudeln liegen ___ dem Regal, direkt neben dem Reis. (auf)", explanation: "Die Nudeln liegen oben auf dem Regal.", data: H("Tjestenina lezi na polici.", "Makarna rafin ustunde duruyor.", "Макарони лежать на полиці.", "Pastele stau pe raft.", "المعكرونة موضوعة على الرف."), quiz_answers: [
      { id: "supermarkt-a2-p3-a1", position: 1, text: "auf", is_correct: true },
    ] },
    { id: "supermarkt-a2-p4", position: 4, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Käse liegt ___ dem Kühlregal. Welche Präposition passt?", explanation: "„in“ beschreibt: innerhalb des Kühlregals.", data: H("„in“ znaci unutar rashladne police.", "„in“ sogutucu rafin icinde anlamina gelir.", "„in“ означає всередині холодильної полиці.", "„in“ inseamna in interiorul raftului frigorific.", "„in“ تعني داخل رف التبريد."), quiz_answers: [
      { id: "supermarkt-a2-p4-a1", position: 1, text: "in", is_correct: true },
      { id: "supermarkt-a2-p4-a2", position: 2, text: "über", is_correct: false },
      { id: "supermarkt-a2-p4-a3", position: 3, text: "unter", is_correct: false },
    ] },
    { id: "supermarkt-a2-p5", position: 5, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Kunde steht ___ der Käsetheke, um zu fragen. Welche Präposition passt?", explanation: "„vor“ beschreibt: direkt vor der Theke stehend.", data: H("„vor“ znaci ispred nečega.", "„vor“ bir seyin onunde anlamina gelir.", "„vor“ означає перед чимось.", "„vor“ inseamna in fata a ceva.", "„vor“ تعني أمام شيء ما."), quiz_answers: [
      { id: "supermarkt-a2-p5-a1", position: 1, text: "vor", is_correct: true },
      { id: "supermarkt-a2-p5-a2", position: 2, text: "unter", is_correct: false },
      { id: "supermarkt-a2-p5-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "supermarkt-a2-p6", position: 6, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Das Angebotsschild hängt ___ dem Regal. Welche Präposition passt?", explanation: "„über“ beschreibt: oberhalb des Regals.", data: H("„über“ znaci iznad nečega.", "„über“ bir seyin uzerinde anlamina gelir.", "„über“ означає над чимось.", "„über“ inseamna deasupra a ceva.", "„über“ تعني فوق شيء ما."), quiz_answers: [
      { id: "supermarkt-a2-p6-a1", position: 1, text: "über", is_correct: true },
      { id: "supermarkt-a2-p6-a2", position: 2, text: "unter", is_correct: false },
      { id: "supermarkt-a2-p6-a3", position: 3, text: "neben", is_correct: false },
    ] },
    { id: "supermarkt-a2-p7", position: 7, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Kassiererin steht ___ der Kasse. (hinter)", explanation: "„hinter der Kasse“ — die Kassiererin arbeitet dort.", data: H("Kasirka stoji iza kase.", "Kasiyer kasanin arkasinda duruyor.", "Касирка стоїть позаду каси.", "Casiera sta in spatele casei.", "تقف الكاشيرة خلف الصندوق."), quiz_answers: [
      { id: "supermarkt-a2-p7-a1", position: 1, text: "hinter", is_correct: true },
    ] },
    { id: "supermarkt-a2-p8", position: 8, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Einkaufswagen steht ___ dem Ausgang. Welche Präposition passt?", explanation: "„zwischen“ beschreibt: zwischen zwei Punkten (Kasse und Ausgang).", data: H("„zwischen“ znaci izmedju dvije tacke.", "„zwischen“ iki nokta arasinda anlamina gelir.", "„zwischen“ означає між двома точками.", "„zwischen“ inseamna intre doua puncte.", "„zwischen“ تعني بين نقطتين."), quiz_answers: [
      { id: "supermarkt-a2-p8-a1", position: 1, text: "zwischen der Kasse und", is_correct: true },
      { id: "supermarkt-a2-p8-a2", position: 2, text: "unter", is_correct: false },
      { id: "supermarkt-a2-p8-a3", position: 3, text: "über", is_correct: false },
    ] },
    { id: "supermarkt-a2-p9", position: 9, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo liegen die Tomaten? Welche Präposition passt?", explanation: "Die Tomaten liegen „in einer Kiste“ in der Obstabteilung.", data: H("Paradajz je u sanduku.", "Domatesler bir kutuda.", "Помідори в ящику.", "Rosiile sunt intr-o lada.", "الطماطم في صندوق."), quiz_answers: [
      { id: "supermarkt-a2-p9-a1", position: 1, text: "in einer Kiste", is_correct: true },
      { id: "supermarkt-a2-p9-a2", position: 2, text: "unter der Kasse", is_correct: false },
      { id: "supermarkt-a2-p9-a3", position: 3, text: "hinter der Tür", is_correct: false },
    ] },
    { id: "supermarkt-a2-p10", position: 10, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Papiertüten liegen ___ der Kasse. (neben)", explanation: "„neben der Kasse“ — die Tüten sind direkt daneben.", data: H("Kese su odmah pored kase.", "Torbalar kasanin hemen yanindadir.", "Пакети прямо біля каси.", "Pungile sunt chiar langa casa.", "الأكياس بجانب الصندوق مباشرة."), quiz_answers: [
      { id: "supermarkt-a2-p10-a1", position: 1, text: "neben", is_correct: true },
    ] },
    { id: "supermarkt-a2-p11", position: 11, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht der Einkaufswagen am Anfang? Welche Präposition passt?", explanation: "Der Wagen steht „am Eingang“.", data: H("Pogledaj sliku: kolica su kod ulaza.", "Resme bak: araba girişte.", "Подивись на малюнок: візок біля входу.", "Uita-te la imagine: caruciorul e la intrare.", "انظر إلى الصورة: العربة عند المدخل."), quiz_answers: [
      { id: "supermarkt-a2-p11-a1", position: 1, text: "am Eingang", is_correct: true },
      { id: "supermarkt-a2-p11-a2", position: 2, text: "an der Kasse", is_correct: false },
      { id: "supermarkt-a2-p11-a3", position: 3, text: "im Kühlregal", is_correct: false },
    ] },
    { id: "supermarkt-a2-p12", position: 12, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht die Mitarbeiterin, die hilft? Welche Präposition passt?", explanation: "Die Mitarbeiterin steht „neben dem Regal“.", data: H("Radnica stoji pored police.", "Calisan rafin yanında duruyor.", "Працівниця стоїть біля полиці.", "Angajata sta langa raft.", "تقف الموظفة بجانب الرف."), quiz_answers: [
      { id: "supermarkt-a2-p12-a1", position: 1, text: "neben dem Regal", is_correct: true },
      { id: "supermarkt-a2-p12-a2", position: 2, text: "unter dem Regal", is_correct: false },
      { id: "supermarkt-a2-p12-a3", position: 3, text: "in dem Regal", is_correct: false },
    ] },
    { id: "supermarkt-a2-p13", position: 13, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Der Kassenbon liegt ___ der Tasche. (in)", explanation: "Der Kassenbon liegt innerhalb der Tasche.", data: H("Racun je u torbi.", "Fis cantada.", "Чек у сумці.", "Bonul e in geanta.", "الإيصال داخل الحقيبة."), quiz_answers: [
      { id: "supermarkt-a2-p13-a1", position: 1, text: "in", is_correct: true },
    ] },
    { id: "supermarkt-a2-p14", position: 14, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo hängt das Preisschild für das Olivenöl? Welche Präposition passt?", explanation: "Das Schild hängt „an dem Regal“.", data: H("Znak visi na polici.", "Tabela rafta asili.", "Табличка висить на полиці.", "Semnul atarna pe raft.", "اللافتة معلقة على الرف."), quiz_answers: [
      { id: "supermarkt-a2-p14-a1", position: 1, text: "an dem Regal", is_correct: true },
      { id: "supermarkt-a2-p14-a2", position: 2, text: "unter dem Regal", is_correct: false },
      { id: "supermarkt-a2-p14-a3", position: 3, text: "in dem Regal", is_correct: false },
    ] },
    { id: "supermarkt-a2-p15", position: 15, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo befindet sich die Kasse im Vergleich zum Ausgang? Welche Präposition passt?", explanation: "Die Kasse ist „in der Nähe des Ausgangs“.", data: H("Kasa se nalazi blizu izlaza.", "Kasa cikisin yakininda.", "Каса розташована біля виходу.", "Casa e langa iesire.", "الصندوق قرب المخرج."), quiz_answers: [
      { id: "supermarkt-a2-p15-a1", position: 1, text: "in der Nähe des Ausgangs", is_correct: true },
      { id: "supermarkt-a2-p15-a2", position: 2, text: "unter dem Ausgang", is_correct: false },
      { id: "supermarkt-a2-p15-a3", position: 3, text: "zwischen dem Ausgang", is_correct: false },
    ] },

    // ===== Dialog bauen =====
    { id: "supermarkt-a2-b1", position: 1, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 1 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Frage nach Alternative → Antwort → Nachfrage → Bestätigung → Entscheidung.", data: { items: [
      "Kunde: Entschuldigen Sie, gibt es hier auch ein günstigeres Olivenöl?",
      "Mitarbeiterin: Ja, die Hausmarke dort ist billiger als die bekannte Marke.",
      "Kunde: Schmeckt sie auch so gut, obwohl sie günstiger ist?",
      "Mitarbeiterin: Ja, viele Kunden sagen, dass sie fast gleich schmeckt.",
      "Kunde: Gut, dann nehme ich die Hausmarke.",
    ] }, quiz_answers: [] },
    { id: "supermarkt-a2-b2", position: 2, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 2 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Problem melden → Reaktion → Grund nennen → Korrektur → Abschied.", data: { items: [
      "Kunde: Entschuldigung, ich glaube, dass der Preis für den Käse nicht stimmt.",
      "Kassiererin: Oh, das tut mir leid. Ich schaue mir das gleich an.",
      "Kunde: Auf dem Schild stand ein anderer Preis als auf dem Bon.",
      "Kassiererin: Sie haben recht, das System hat sich geirrt. Ich korrigiere es sofort.",
      "Kunde: Danke, Ihnen auch. Auf Wiedersehen!",
    ] }, quiz_answers: [] },
  ],
} as const;
