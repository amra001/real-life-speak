const T = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ bks, tr, uk, ro, ar });
const H = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ help: T(bks, tr, uk, ro, ar) });

export const supermarktA1 = {
  lesson: {
    id: "3a9e1f2b-6c4d-4a8e-9b1f-2d5c7a8e0f31",
    slug: "supermarkt-a1",
    title: "Im Supermarkt – A1",
    description:
      "Ein Einkauf im Supermarkt: einen Einkaufswagen nehmen, Produkte finden, nach etwas fragen und an der Kasse bezahlen.",
    level: "A1",
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
      "Artikel der/die/das",
      "Akkusativ nach haben/brauchen/nehmen/möchten",
      "Dativ nach Präpositionen",
      "Possessivartikel",
      "W-Fragen",
      "Modalverb können",
      "Höfliche Sie-Form",
      "Zahlen und Preise",
    ],
    grammar_notes: [
      {
        title: "Warum der, die oder das? — Artikel und Fälle",
        explanation:
          "Jedes deutsche Nomen hat ein festes Geschlecht: männlich (der), weiblich (die) oder sächlich (das). Das ändert sich nie — „der Einkaufswagen“ bleibt immer männlich. Was sich ändert, ist die Form des Artikels, je nachdem welche Rolle das Nomen im Satz spielt (der Fall/Kasus). Im Nominativ bleibt der Artikel wie im Wörterbuch: der Wagen, die Milch, das Brot. Im Akkusativ ändert sich nur die männliche Form: der → einen.",
        examples: [
          "Nominativ: Der Wagen ist kaputt. (der Wagen bleibt der)",
          "Akkusativ: Ich nehme einen Wagen. (der → einen)",
          "Akkusativ: Ich kaufe eine Milch. (die bleibt eine)",
          "Akkusativ: Ich brauche ein Brot. (das bleibt ein)",
        ],
      },
      {
        title: "Akkusativ nach haben, brauchen, nehmen, möchten",
        explanation:
          "Diese Verben verlangen fast immer den Akkusativ, weil danach ein direktes Objekt kommt (das, was man hat/braucht/nimmt/möchte). Deshalb heißt es „einen Wagen“ (nicht „ein Wagen“), weil „der Wagen“ männlich ist und im Akkusativ zu „einen“ wird.",
        examples: [
          "Ich nehme einen Einkaufswagen. (der Wagen → einen Wagen)",
          "Ich brauche eine Tüte. (die Tüte bleibt eine)",
          "Ich möchte ein Kilo Äpfel. (das Kilo bleibt ein)",
        ],
      },
      {
        title: "Dativ nach Präpositionen wie mit, bei, zu",
        explanation:
          "Nach bestimmten Präpositionen steht immer der Dativ. Im Dativ wird „der“ zu „dem“, „die“ zu „der“, „das“ zu „dem“. Das gilt zum Beispiel nach mit, bei, zu, von, nach, aus.",
        examples: [
          "mit dem Einkaufswagen (der Wagen → dem Wagen)",
          "mit der Karte (die Karte → der Karte)",
          "beim Mitarbeiter (bei + dem = beim)",
        ],
      },
      {
        title: "Possessivartikel: mein, meine",
        explanation:
          "Possessivartikel zeigen Besitz an. Die Endung richtet sich nach dem Genus des Nomens: „meine Einkaufsliste“ (die Liste ist feminin), „mein Geld“ (das Geld ist neutral).",
        examples: ["Ich habe meine Einkaufsliste vergessen.", "Wo ist mein Geld?"],
      },
      {
        title: "W-Fragen mit wo und wie viel",
        explanation:
          "„Wo“ fragt nach einem Ort, „wie viel“ nach einer Menge oder einem Preis. Nach dem Fragewort folgt direkt das konjugierte Verb, dann das Subjekt.",
        examples: ["Wo finde ich die Milch?", "Wie viel kostet das Brot?"],
      },
      {
        title: "Modalverb können und die Satzklammer",
        explanation:
          "Bei Modalverben wie „können“ steht das konjugierte Modalverb an Position 2, der eigentliche Infinitiv wandert ganz ans Satzende — das nennt man Satzklammer.",
        examples: ["Können Sie mir bitte helfen?", "Kann ich mit Karte bezahlen?"],
      },
      {
        title: "Höfliche Sie-Form",
        explanation:
          "Im Supermarkt spricht man Mitarbeiter fast immer mit „Sie“ an. Das Verb bekommt dabei die gleiche Endung wie bei „sie“ (Plural): Sie haben, Sie möchten.",
        examples: ["Entschuldigung, haben Sie Zeit?", "Wo finden Sie das Obst?"],
      },
      {
        title: "Zahlen, Maße und Preise",
        explanation:
          "Preise werden mit Zahl + Euro genannt, Mengen meist mit Kilo, Gramm oder Stück. Das ist wichtig beim Obst- und Gemüseeinkauf.",
        examples: ["Das macht 12 Euro 50.", "Ein Kilo Äpfel, bitte."],
      },
    ],
    place_items: [],
  },

  scenes: [
    { id: "supermarkt-a1-s1", position: 1, german_text: "Ich gehe in den Supermarkt, weil ich Lebensmittel brauche.", translations: T("Idem u supermarket jer trebam namirnice.", "Yiyecek malzemelerine ihtiyacım olduğu için süpermarkete gidiyorum.", "Я йду в супермаркет, бо мені потрібні продукти.", "Merg la supermarket pentru că am nevoie de alimente.", "أذهب إلى السوبر ماركت لأنني بحاجة إلى بعض المواد الغذائية.") },
    { id: "supermarkt-a1-s2", position: 2, german_text: "Zuerst nehme ich einen Einkaufswagen.", translations: T("Prvo uzimam kolica za kupovinu.", "Önce bir alışveriş arabası alıyorum.", "Спочатку я беру візок для покупок.", "Mai întâi iau un cărucior de cumpărături.", "أولاً آخذ عربة تسوق.") },
    { id: "supermarkt-a1-s3", position: 3, german_text: "Ich suche Brot, aber ich finde es nicht.", translations: T("Tražim hljeb, ali ga ne mogu naći.", "Ekmek arıyorum ama bulamıyorum.", "Я шукаю хліб, але не можу знайти.", "Caut pâine, dar nu o găsesc.", "أبحث عن الخبز لكنني لا أجده.") },
    { id: "supermarkt-a1-s4", position: 4, german_text: "Entschuldigung, wo finde ich das Brot?", translations: T("Izvinite, gdje mogu naći hljeb?", "Affedersiniz, ekmeği nerede bulabilirim?", "Вибачте, де я можу знайти хліб?", "Scuzați-mă, unde găsesc pâinea?", "عفوًا، أين أجد الخبز؟") },
    { id: "supermarkt-a1-s5", position: 5, german_text: "Das Brot ist im Regal neben der Milch.", translations: T("Hljeb je na polici pored mlijeka.", "Ekmek, sütün yanındaki rafta.", "Хліб на полиці біля молока.", "Pâinea este pe raftul de lângă lapte.", "الخبز موجود على الرف بجانب الحليب.") },
    { id: "supermarkt-a1-s6", position: 6, german_text: "Danke schön! Ich nehme auch Milch und Obst.", translations: T("Hvala lijepo! Uzimam i mlijeko i voće.", "Çok teşekkürler! Ayrıca süt ve meyve alıyorum.", "Дуже дякую! Я також беру молоко і фрукти.", "Mulțumesc mult! Iau și lapte și fructe.", "شكرًا جزيلاً! سآخذ أيضًا حليبًا وفاكهة.") },
    { id: "supermarkt-a1-s7", position: 7, german_text: "Das Gemüse ist frisch und im Angebot.", translations: T("Povrće je svježe i na akciji.", "Sebzeler taze ve indirimde.", "Овочі свіжі і за акцією.", "Legumele sunt proaspete și la ofertă.", "الخضروات طازجة وفي عرض خاص.") },
    { id: "supermarkt-a1-s8", position: 8, german_text: "Ich kaufe ein Kilo Äpfel und Tomaten.", translations: T("Kupujem kilogram jabuka i paradajza.", "Bir kilo elma ve domates alıyorum.", "Я купую кілограм яблук і помідорів.", "Cumpăr un kilogram de mere și roșii.", "أشتري كيلوغرامًا من التفاح والطماطم.") },
    { id: "supermarkt-a1-s9", position: 9, german_text: "Jetzt gehe ich zur Kasse.", translations: T("Sada idem na kasu.", "Şimdi kasaya gidiyorum.", "Тепер я йду до каси.", "Acum merg la casă.", "الآن أذهب إلى الصندوق.") },
    { id: "supermarkt-a1-s10", position: 10, german_text: "Bezahlen Sie bar oder mit Karte?", translations: T("Plaćate li gotovinom ili karticom?", "Nakit mi ödeyeceksiniz yoksa kartla mı?", "Ви платите готівкою чи карткою?", "Plătiți cash sau cu cardul?", "هل تدفع نقدًا أم بالبطاقة؟") },
    { id: "supermarkt-a1-s11", position: 11, german_text: "Ich bezahle mit Karte, bitte.", translations: T("Plaćam karticom, molim.", "Kartla ödüyorum, lütfen.", "Я плачу карткою, будь ласка.", "Plătesc cu cardul, vă rog.", "أدفع بالبطاقة من فضلك.") },
    { id: "supermarkt-a1-s12", position: 12, german_text: "Das macht 12 Euro 50.", translations: T("To je 12 eura i 50 centi.", "Bu 12 avro 50 sent tutuyor.", "Це коштує 12 євро 50.", "Costă 12 euro și 50.", "المجموع 12 يورو و50 سنتًا.") },
    { id: "supermarkt-a1-s13", position: 13, german_text: "Haben Sie eine Tüte für mich?", translations: T("Imate li kesu za mene?", "Benim için bir poşet var mı?", "У вас є пакет для мене?", "Aveți o pungă pentru mine?", "هل لديك كيس لي؟") },
    { id: "supermarkt-a1-s14", position: 14, german_text: "Ja, hier ist eine Tüte. Das kostet 20 Cent extra.", translations: T("Da, evo kese. To košta dodatnih 20 centi.", "Evet, işte bir poşet. Bu 20 sent ekstra.", "Так, ось пакет. Це коштує 20 центів додатково.", "Da, iată o pungă. Costă 20 de cenți în plus.", "نعم، تفضل كيس. يكلف 20 سنتًا إضافيًا.") },
    { id: "supermarkt-a1-s15", position: 15, german_text: "Vielen Dank, auf Wiedersehen!", translations: T("Hvala vam puno, doviđenja!", "Çok teşekkürler, hoşça kalın!", "Дуже дякую, до побачення!", "Mulțumesc mult, la revedere!", "شكرًا جزيلاً، إلى اللقاء!") },
  ],

  vocab: [
    { id: "supermarkt-a1-v1", position: 1, term: "Supermarkt", article: "der", plural: "die Supermärkte", word_class: "Nomen", example: "Ich gehe in den Supermarkt.", translations: T("supermarket", "süpermarket", "супермаркет", "supermarket", "سوبر ماركت") },
    { id: "supermarkt-a1-v2", position: 2, term: "Einkaufswagen", article: "der", plural: "die Einkaufswagen", word_class: "Nomen", example: "Ich nehme einen Einkaufswagen.", translations: T("kolica za kupovinu", "alışveriş arabası", "візок для покупок", "cărucior de cumpărături", "عربة تسوق") },
    { id: "supermarkt-a1-v3", position: 3, term: "Einkaufskorb", article: "der", plural: "die Einkaufskörbe", word_class: "Nomen", example: "Für wenige Produkte reicht ein Einkaufskorb.", translations: T("korpa za kupovinu", "alışveriş sepeti", "кошик для покупок", "coș de cumpărături", "سلة تسوق") },
    { id: "supermarkt-a1-v4", position: 4, term: "Brot", article: "das", plural: "die Brote", word_class: "Nomen", example: "Das Brot ist im Regal.", translations: T("hljeb", "ekmek", "хліб", "pâine", "خبز") },
    { id: "supermarkt-a1-v5", position: 5, term: "Milch", article: "die", plural: "—", word_class: "Nomen", example: "Ich nehme auch Milch.", translations: T("mlijeko", "süt", "молоко", "lapte", "حليب") },
    { id: "supermarkt-a1-v6", position: 6, term: "Obst", article: "das", plural: "—", word_class: "Nomen", example: "Das Obst ist frisch.", translations: T("voće", "meyve", "фрукти", "fructe", "فاكهة") },
    { id: "supermarkt-a1-v7", position: 7, term: "Gemüse", article: "das", plural: "—", word_class: "Nomen", example: "Das Gemüse ist im Angebot.", translations: T("povrće", "sebze", "овочі", "legume", "خضروات") },
    { id: "supermarkt-a1-v8", position: 8, term: "Apfel", article: "der", plural: "die Äpfel", word_class: "Nomen", example: "Ich kaufe ein Kilo Äpfel.", translations: T("jabuka", "elma", "яблуко", "măr", "تفاحة") },
    { id: "supermarkt-a1-v9", position: 9, term: "Tomate", article: "die", plural: "die Tomaten", word_class: "Nomen", example: "Die Tomaten sind rot.", translations: T("paradajz", "domates", "помідор", "roșie", "طماطم") },
    { id: "supermarkt-a1-v10", position: 10, term: "Regal", article: "das", plural: "die Regale", word_class: "Nomen", example: "Das Brot steht im Regal.", translations: T("polica", "raf", "полиця", "raft", "رف") },
    { id: "supermarkt-a1-v11", position: 11, term: "Kasse", article: "die", plural: "die Kassen", word_class: "Nomen", example: "Ich gehe zur Kasse.", translations: T("kasa", "kasa", "каса", "casă de marcat", "صندوق الدفع") },
    { id: "supermarkt-a1-v12", position: 12, term: "Angebot", article: "das", plural: "die Angebote", word_class: "Nomen", example: "Das Gemüse ist im Angebot.", translations: T("akcija/ponuda", "indirim/teklif", "акція/пропозиція", "ofertă", "عرض") },
    { id: "supermarkt-a1-v13", position: 13, term: "Preis", article: "der", plural: "die Preise", word_class: "Nomen", example: "Der Preis steht am Regal.", translations: T("cijena", "fiyat", "ціна", "preț", "سعر") },
    { id: "supermarkt-a1-v14", position: 14, term: "Kilo", article: "das", plural: "die Kilo", word_class: "Nomen", example: "Ein Kilo Äpfel, bitte.", translations: T("kilogram", "kilo", "кілограм", "kilogram", "كيلوغرام") },
    { id: "supermarkt-a1-v15", position: 15, term: "Tüte", article: "die", plural: "die Tüten", word_class: "Nomen", example: "Haben Sie eine Tüte?", translations: T("kesa", "poşet", "пакет", "pungă", "كيس") },
    { id: "supermarkt-a1-v16", position: 16, term: "Karte", article: "die", plural: "die Karten", word_class: "Nomen", example: "Ich bezahle mit Karte.", translations: T("kartica", "kart", "картка", "card", "بطاقة") },
    { id: "supermarkt-a1-v17", position: 17, term: "Bargeld", article: "das", plural: "—", word_class: "Nomen", example: "Ich habe kein Bargeld dabei.", translations: T("gotovina", "nakit", "готівка", "bani cash", "نقود") },
    { id: "supermarkt-a1-v18", position: 18, term: "bezahlen", word_class: "Verb", example: "Ich bezahle an der Kasse.", translations: T("platiti", "ödemek", "платити", "a plăti", "يدفع") },
    { id: "supermarkt-a1-v19", position: 19, term: "kaufen", word_class: "Verb", example: "Ich kaufe Obst und Gemüse.", translations: T("kupiti", "satın almak", "купувати", "a cumpăra", "يشتري") },
    { id: "supermarkt-a1-v20", position: 20, term: "suchen", word_class: "Verb", example: "Ich suche das Brot.", translations: T("tražiti", "aramak", "шукати", "a căuta", "يبحث") },
    { id: "supermarkt-a1-v21", position: 21, term: "finden", word_class: "Verb", example: "Wo finde ich die Milch?", translations: T("naći/pronaći", "bulmak", "знаходити", "a găsi", "يجد") },
    { id: "supermarkt-a1-v22", position: 22, term: "Kassenbon", article: "der", plural: "die Kassenbons", word_class: "Nomen", example: "Hier ist Ihr Kassenbon.", translations: T("račun", "kasa fişi", "чек", "bon fiscal", "إيصال") },
    { id: "supermarkt-a1-v23", position: 23, term: "Pfand", article: "das", plural: "—", word_class: "Nomen", example: "Auf die Flasche gibt es Pfand.", translations: T("kaucija/povratna naknada", "depozito", "застава/депозит", "garanție (pentru sticle)", "تأمين استرجاع") },
    { id: "supermarkt-a1-v24", position: 24, term: "Flasche", article: "die", plural: "die Flaschen", word_class: "Nomen", example: "Ich kaufe eine Flasche Wasser.", translations: T("flaša/boca", "şişe", "пляшка", "sticlă", "زجاجة") },
    { id: "supermarkt-a1-v25", position: 25, term: "Mitarbeiter", article: "der", plural: "die Mitarbeiter", word_class: "Nomen", example: "Ich frage einen Mitarbeiter.", translations: T("uposlenik/radnik", "çalışan", "працівник", "angajat", "موظف") },
    { id: "supermarkt-a1-v26", position: 26, term: "frisch", word_class: "Adjektiv", example: "Das Obst ist frisch.", translations: T("svježe", "taze", "свіжий", "proaspăt", "طازج") },
    { id: "supermarkt-a1-v27", position: 27, term: "billig", word_class: "Adjektiv", example: "Das Brot ist heute billig.", translations: T("jeftino", "ucuz", "дешевий", "ieftin", "رخيص") },
    { id: "supermarkt-a1-v28", position: 28, term: "teuer", word_class: "Adjektiv", example: "Der Kaffee ist teuer.", translations: T("skupo", "pahalı", "дорогий", "scump", "غالٍ") },
  ],

  dialog: [
    { id: "supermarkt-a1-d1-1", position: 1, dialog_index: 1, dialog_title: "Dialog 1 · Auf der Suche nach Brot", speaker: "Kunde", german_text: "Entschuldigung, können Sie mir helfen?", translations: T("Izvinite, možete li mi pomoći?", "Affedersiniz, bana yardımcı olabilir misiniz?", "Вибачте, чи можете ви мені допомогти?", "Scuzați-mă, puteți să mă ajutați?", "عفوًا، هل يمكنك مساعدتي؟") },
    { id: "supermarkt-a1-d1-2", position: 2, dialog_index: 1, dialog_title: "Dialog 1 · Auf der Suche nach Brot", speaker: "Mitarbeiter", german_text: "Ja, natürlich. Was suchen Sie?", translations: T("Da, naravno. Šta tražite?", "Evet, tabii. Ne arıyorsunuz?", "Так, звісно. Що ви шукаєте?", "Da, desigur. Ce căutați?", "نعم بالطبع. ماذا تبحث؟") },
    { id: "supermarkt-a1-d1-3", position: 3, dialog_index: 1, dialog_title: "Dialog 1 · Auf der Suche nach Brot", speaker: "Kunde", german_text: "Ich suche das Brot, aber ich finde es nicht.", translations: T("Tražim hljeb, ali ga ne mogu naći.", "Ekmek arıyorum ama bulamıyorum.", "Я шукаю хліб, але не можу знайти.", "Caut pâine, dar nu o găsesc.", "أبحث عن الخبز لكنني لا أجده.") },
    { id: "supermarkt-a1-d1-4", position: 4, dialog_index: 1, dialog_title: "Dialog 1 · Auf der Suche nach Brot", speaker: "Mitarbeiter", german_text: "Das Brot ist im Regal neben der Milch.", translations: T("Hljeb je na polici pored mlijeka.", "Ekmek, sütün yanındaki rafta.", "Хліб на полиці біля молока.", "Pâinea este pe raftul de lângă lapte.", "الخبز موجود على الرف بجانب الحليب.") },
    { id: "supermarkt-a1-d1-5", position: 5, dialog_index: 1, dialog_title: "Dialog 1 · Auf der Suche nach Brot", speaker: "Kunde", german_text: "Danke schön! Und wo finde ich das Obst?", translations: T("Hvala lijepo! A gdje mogu naći voće?", "Çok teşekkürler! Peki meyveleri nerede bulabilirim?", "Дуже дякую! А де я можу знайти фрукти?", "Mulțumesc mult! Și unde găsesc fructele?", "شكرًا جزيلاً! وأين أجد الفاكهة؟") },
    { id: "supermarkt-a1-d1-6", position: 6, dialog_index: 1, dialog_title: "Dialog 1 · Auf der Suche nach Brot", speaker: "Mitarbeiter", german_text: "Das Obst ist ganz vorne, gleich am Eingang.", translations: T("Voće je sasvim naprijed, odmah kod ulaza.", "Meyveler tam önde, girişin hemen yanında.", "Фрукти зовсім спереду, одразу біля входу.", "Fructele sunt tocmai în față, chiar lângă intrare.", "الفاكهة في المقدمة تمامًا، بجانب المدخل مباشرة.") },
    { id: "supermarkt-a1-d1-7", position: 7, dialog_index: 1, dialog_title: "Dialog 1 · Auf der Suche nach Brot", speaker: "Kunde", german_text: "Super, vielen Dank für Ihre Hilfe!", translations: T("Super, hvala vam puno na pomoći!", "Harika, yardımınız için çok teşekkürler!", "Чудово, дуже дякую за вашу допомогу!", "Super, mulțumesc mult pentru ajutor!", "رائع، شكرًا جزيلاً على مساعدتك!") },
    { id: "supermarkt-a1-d1-8", position: 8, dialog_index: 1, dialog_title: "Dialog 1 · Auf der Suche nach Brot", speaker: "Mitarbeiter", german_text: "Gern geschehen. Brauchen Sie sonst noch etwas?", translations: T("Nema na čemu. Trebate li još nešto?", "Rica ederim. Başka bir şeye ihtiyacınız var mı?", "Будь ласка. Вам потрібно ще щось?", "Cu plăcere. Mai aveți nevoie de altceva?", "على الرحب والسعة. هل تحتاج شيئًا آخر؟") },
    { id: "supermarkt-a1-d1-9", position: 9, dialog_index: 1, dialog_title: "Dialog 1 · Auf der Suche nach Brot", speaker: "Kunde", german_text: "Nein, danke, das ist alles.", translations: T("Ne, hvala, to je sve.", "Hayır, teşekkürler, hepsi bu.", "Ні, дякую, це все.", "Nu, mulțumesc, asta e tot.", "لا شكرًا، هذا كل شيء.") },
    { id: "supermarkt-a1-d1-10", position: 10, dialog_index: 1, dialog_title: "Dialog 1 · Auf der Suche nach Brot", speaker: "Mitarbeiter", german_text: "Gut, dann wünsche ich Ihnen noch viel Spaß beim Einkaufen.", translations: T("Dobro, onda vam želim ugodnu kupovinu.", "Tamam, o zaman alışverişte iyi eğlenceler dilerim.", "Добре, тоді бажаю вам приємних покупок.", "Bine, atunci vă doresc mult spor la cumpărături.", "حسنًا، أتمنى لك وقتًا ممتعًا في التسوق.") },
    { id: "supermarkt-a1-d1-11", position: 11, dialog_index: 1, dialog_title: "Dialog 1 · Auf der Suche nach Brot", speaker: "Kunde", german_text: "Danke, Ihnen auch einen schönen Tag!", translations: T("Hvala, i vama lijep dan!", "Teşekkürler, size de iyi günler!", "Дякую, вам також гарного дня!", "Mulțumesc, o zi frumoasă și dumneavoastră!", "شكرًا، ولك أيضًا يومًا سعيدًا!") },

    { id: "supermarkt-a1-d2-1", position: 1, dialog_index: 2, dialog_title: "Dialog 2 · An der Kasse", speaker: "Kassiererin", german_text: "Guten Tag! Haben Sie alles gefunden?", translations: T("Dobar dan! Jeste li sve pronašli?", "Merhaba! Her şeyi bulabildiniz mi?", "Доброго дня! Ви все знайшли?", "Bună ziua! Ați găsit tot?", "مرحبًا! هل وجدت كل شيء؟") },
    { id: "supermarkt-a1-d2-2", position: 2, dialog_index: 2, dialog_title: "Dialog 2 · An der Kasse", speaker: "Kunde", german_text: "Ja, danke, ich habe alles gefunden.", translations: T("Da, hvala, sve sam pronašao/la.", "Evet, teşekkürler, her şeyi buldum.", "Так, дякую, я все знайшов(шла).", "Da, mulțumesc, am găsit tot.", "نعم، شكرًا، وجدت كل شيء.") },
    { id: "supermarkt-a1-d2-3", position: 3, dialog_index: 2, dialog_title: "Dialog 2 · An der Kasse", speaker: "Kassiererin", german_text: "Das macht dann 12 Euro 50.", translations: T("To je onda 12 eura i 50 centi.", "O zaman 12 avro 50 sent tutuyor.", "Тоді це 12 євро 50.", "Atunci costă 12 euro și 50.", "المبلغ إذن 12 يورو و50 سنتًا.") },
    { id: "supermarkt-a1-d2-4", position: 4, dialog_index: 2, dialog_title: "Dialog 2 · An der Kasse", speaker: "Kunde", german_text: "Kann ich mit Karte bezahlen?", translations: T("Mogu li platiti karticom?", "Kartla ödeyebilir miyim?", "Чи можу я заплатити карткою?", "Pot plăti cu cardul?", "هل يمكنني الدفع بالبطاقة؟") },
    { id: "supermarkt-a1-d2-5", position: 5, dialog_index: 2, dialog_title: "Dialog 2 · An der Kasse", speaker: "Kassiererin", german_text: "Ja, natürlich, kein Problem.", translations: T("Da, naravno, nema problema.", "Evet, tabii, sorun değil.", "Так, звісно, без проблем.", "Da, desigur, nicio problemă.", "نعم، بالطبع، لا مشكلة.") },
    { id: "supermarkt-a1-d2-6", position: 6, dialog_index: 2, dialog_title: "Dialog 2 · An der Kasse", speaker: "Kunde", german_text: "Haben Sie auch eine Tüte für mich?", translations: T("Imate li i kesu za mene?", "Benim için bir poşet de var mı?", "У вас також є пакет для мене?", "Aveți și o pungă pentru mine?", "هل لديك أيضًا كيس لي؟") },
    { id: "supermarkt-a1-d2-7", position: 7, dialog_index: 2, dialog_title: "Dialog 2 · An der Kasse", speaker: "Kassiererin", german_text: "Ja, eine Tüte kostet 20 Cent extra.", translations: T("Da, kesa košta 20 centi dodatno.", "Evet, bir poşet 20 sent ekstra.", "Так, пакет коштує 20 центів додатково.", "Da, o pungă costă 20 de cenți în plus.", "نعم، الكيس يكلف 20 سنتًا إضافيًا.") },
    { id: "supermarkt-a1-d2-8", position: 8, dialog_index: 2, dialog_title: "Dialog 2 · An der Kasse", speaker: "Kunde", german_text: "Kein Problem, ich nehme eine Tüte.", translations: T("Nema problema, uzeću kesu.", "Sorun değil, bir poşet alıyorum.", "Не проблема, я візьму пакет.", "Nicio problemă, iau o pungă.", "لا مشكلة، سآخذ كيسًا.") },
    { id: "supermarkt-a1-d2-9", position: 9, dialog_index: 2, dialog_title: "Dialog 2 · An der Kasse", speaker: "Kassiererin", german_text: "Hier ist Ihr Kassenbon. Einen schönen Tag noch!", translations: T("Evo vašeg računa. Prijatan dan još!", "İşte fişiniz. İyi günler!", "Ось ваш чек. Гарного дня!", "Iată bonul dumneavoastră. O zi frumoasă în continuare!", "تفضل إيصالك. يومًا سعيدًا لك!") },
    { id: "supermarkt-a1-d2-10", position: 10, dialog_index: 2, dialog_title: "Dialog 2 · An der Kasse", speaker: "Kunde", german_text: "Danke, Ihnen auch. Auf Wiedersehen!", translations: T("Hvala, i vama. Doviđenja!", "Teşekkürler, size de. Hoşça kalın!", "Дякую, вам також. До побачення!", "Mulțumesc, la fel. La revedere!", "شكرًا، ولك أيضًا. إلى اللقاء!") },
    { id: "supermarkt-a1-d2-11", position: 11, dialog_index: 2, dialog_title: "Dialog 2 · An der Kasse", speaker: "Kassiererin", german_text: "Auf Wiedersehen!", translations: T("Doviđenja!", "Hoşça kalın!", "До побачення!", "La revedere!", "إلى اللقاء!") },
  ],

  questions: [
    // ===== Übungen (practice) =====
    { id: "supermarkt-a1-q1", position: 1, kind: "single_choice", section: "practice", prompt: "Was nimmt man zuerst im Supermarkt?", explanation: "„Ich nehme einen Einkaufswagen.“ ist richtig.", data: H("Prvo se uzimaju kolica za kupovinu.", "Önce alışveriş arabası alınır.", "Спочатку беруть візок для покупок.", "Mai întâi se ia un cărucior.", "أولاً تُؤخذ عربة التسوق."), quiz_answers: [
      { id: "supermarkt-a1-q1-a1", position: 1, text: "Ich nehme einen Einkaufswagen.", is_correct: true },
      { id: "supermarkt-a1-q1-a2", position: 2, text: "Ich fahre mit dem Zug.", is_correct: false },
      { id: "supermarkt-a1-q1-a3", position: 3, text: "Ich gehe zum Arzt.", is_correct: false },
    ] },
    { id: "supermarkt-a1-q2", position: 2, kind: "single_choice", section: "practice", prompt: "Wie fragt man höflich nach Hilfe?", explanation: "„Entschuldigung, können Sie mir helfen?“ ist die passende Frage.", data: H("Ovo je učtiv način da se zamoli za pomoć.", "Bu, yardım istemenin kibar bir yolu.", "Це ввічливий спосіб попросити про допомогу.", "Acesta este modul politicos de a cere ajutor.", "هذه طريقة مهذبة لطلب المساعدة."), quiz_answers: [
      { id: "supermarkt-a1-q2-a1", position: 1, text: "Entschuldigung, können Sie mir helfen?", is_correct: true },
      { id: "supermarkt-a1-q2-a2", position: 2, text: "Wie viel kostet der Bus?", is_correct: false },
      { id: "supermarkt-a1-q2-a3", position: 3, text: "Wo ist der Bahnhof?", is_correct: false },
    ] },
    { id: "supermarkt-a1-q3", position: 3, kind: "gap", section: "practice", prompt: "Das Brot ist im ___ neben der Milch.", explanation: "Gemeint ist das Möbelstück: „das Regal“.", data: H("Misli se na policu u prodavnici.", "Mağazadaki raf kastediliyor.", "Йдеться про полицю в магазині.", "Este vorba despre raftul din magazin.", "المقصود الرف في المتجر."), quiz_answers: [
      { id: "supermarkt-a1-q3-a1", position: 1, text: "Regal", is_correct: true },
    ] },
    { id: "supermarkt-a1-q4", position: 4, kind: "true_false", section: "practice", prompt: "Der Kunde bezahlt mit Karte.", explanation: "Im Dialog fragt der Kunde „Kann ich mit Karte bezahlen?“ und bekommt „Ja“.", data: H("U dijalogu kupac pita da li može platiti karticom i dobija potvrdan odgovor.", "Diyalogda müşteri kartla ödeyip ödeyemeyeceğini sorar ve evet cevabı alır.", "У діалозі клієнт запитує, чи може заплатити карткою, і отримує ствердну відповідь.", "În dialog clientul întreabă dacă poate plăti cu cardul și primește un răspuns afirmativ.", "في الحوار يسأل الزبون إن كان بإمكانه الدفع بالبطاقة ويحصل على إجابة بنعم."), quiz_answers: [
      { id: "supermarkt-a1-q4-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "supermarkt-a1-q4-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "supermarkt-a1-q5", position: 5, kind: "single_choice", section: "practice", prompt: "Wie viel kostet der Einkauf?", explanation: "„Das macht 12 Euro 50.“", data: H("Cijena piše u tekstu: 12 eura 50.", "Fiyat metinde yazıyor: 12 avro 50.", "Ціна вказана в тексті: 12 євро 50.", "Prețul este în text: 12 euro 50.", "السعر مذكور في النص: 12 يورو و50."), quiz_answers: [
      { id: "supermarkt-a1-q5-a1", position: 1, text: "12 Euro 50", is_correct: true },
      { id: "supermarkt-a1-q5-a2", position: 2, text: "5 Euro", is_correct: false },
      { id: "supermarkt-a1-q5-a3", position: 3, text: "20 Euro", is_correct: false },
    ] },
    { id: "supermarkt-a1-q6", position: 6, kind: "single_choice", section: "practice", prompt: "Was kostet die Tüte extra?", explanation: "„Das kostet 20 Cent extra.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-q6-a1", position: 1, text: "20 Cent", is_correct: true },
      { id: "supermarkt-a1-q6-a2", position: 2, text: "1 Euro", is_correct: false },
      { id: "supermarkt-a1-q6-a3", position: 3, text: "nichts", is_correct: false },
    ] },
    { id: "supermarkt-a1-q7", position: 7, kind: "gap", section: "practice", prompt: "Ich brauche ein___ Tüte. (die Tüte, Akkusativ)", explanation: "die Tüte → im Akkusativ „eine Tüte“ — feminine Form ändert sich nicht.", data: H("die Tüte je ženskog roda, u akuzativu ostaje eine Tüte.", "die Tüte dişildir, akuzatifte eine Tüte olarak kalır.", "die Tüte жіночого роду, у знахідному залишається eine Tüte.", "die Tüte este feminin, la acuzativ rămâne eine Tüte.", "die Tüte مؤنثة، تبقى في حالة المفعول eine Tüte."), quiz_answers: [
      { id: "supermarkt-a1-q7-a1", position: 1, text: "e", is_correct: true },
    ] },
    { id: "supermarkt-a1-q8", position: 8, kind: "single_choice", section: "practice", prompt: "Der Kunde bezahlt an ___ Kasse. Welche Form passt?", explanation: "Nach „an“ (hier als feste Wendung „an der Kasse“) steht der Dativ: die Kasse → der Kasse.", data: H("Poslije „an“ dolazi dativ.", "„an“ dan sonra datif gelir.", "Після „an“ йде давальний відмінок.", "După „an“ urmează dativul.", "بعد „an“ يأتي حالة الجر (داتيف)."), quiz_answers: [
      { id: "supermarkt-a1-q8-a1", position: 1, text: "der", is_correct: true },
      { id: "supermarkt-a1-q8-a2", position: 2, text: "die", is_correct: false },
      { id: "supermarkt-a1-q8-a3", position: 3, text: "das", is_correct: false },
    ] },
    { id: "supermarkt-a1-q9", position: 9, kind: "single_choice", section: "practice", prompt: "Wo ist das Obst laut Dialog?", explanation: "„Das Obst ist ganz vorne, gleich am Eingang.“", data: H("Voće je odmah kod ulaza.", "Meyveler girişin hemen yanında.", "Фрукти одразу біля входу.", "Fructele sunt chiar lângă intrare.", "الفاكهة بجانب المدخل مباشرة."), quiz_answers: [
      { id: "supermarkt-a1-q9-a1", position: 1, text: "am Eingang", is_correct: true },
      { id: "supermarkt-a1-q9-a2", position: 2, text: "an der Kasse", is_correct: false },
      { id: "supermarkt-a1-q9-a3", position: 3, text: "im Keller", is_correct: false },
    ] },
    { id: "supermarkt-a1-q10", position: 10, kind: "single_choice", section: "practice", prompt: "Womit bezahlt der Kunde am Ende?", explanation: "Der Kunde fragt: „Kann ich mit Karte bezahlen?“", data: H("Kupac pita za plaćanje karticom.", "Müşteri kartla ödemeyi soruyor.", "Клієнт запитує про оплату карткою.", "Clientul întreabă despre plata cu cardul.", "يسأل الزبون عن الدفع بالبطاقة."), quiz_answers: [
      { id: "supermarkt-a1-q10-a1", position: 1, text: "mit Karte", is_correct: true },
      { id: "supermarkt-a1-q10-a2", position: 2, text: "mit einem Scheck", is_correct: false },
      { id: "supermarkt-a1-q10-a3", position: 3, text: "mit einem Gutschein", is_correct: false },
    ] },

    // ===== Abschlusstest (40 Fragen) =====
    { id: "supermarkt-a1-t1", position: 1, kind: "single_choice", section: "test", prompt: "Warum geht die Person in den Supermarkt?", explanation: "„Ich gehe in den Supermarkt, weil ich Lebensmittel brauche.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t1-a1", position: 1, text: "Weil sie Lebensmittel braucht.", is_correct: true },
      { id: "supermarkt-a1-t1-a2", position: 2, text: "Weil sie eine Party hat.", is_correct: false },
      { id: "supermarkt-a1-t1-a3", position: 3, text: "Weil der Bus kommt.", is_correct: false },
    ] },
    { id: "supermarkt-a1-t2", position: 2, kind: "true_false", section: "test", prompt: "Der Kunde nimmt zuerst einen Einkaufswagen.", explanation: "Richtig, das steht am Anfang des Textes.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t2-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "supermarkt-a1-t2-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "supermarkt-a1-t3", position: 3, kind: "gap", section: "test", prompt: "Ich kaufe ein ___ Äpfel. (Menge)", explanation: "Gemeint ist die Maßeinheit: „Kilo“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t3-a1", position: 1, text: "Kilo", is_correct: true },
    ] },
    { id: "supermarkt-a1-t4", position: 4, kind: "single_choice", section: "test", prompt: "Wo steht das Brot?", explanation: "„Das Brot ist im Regal neben der Milch.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t4-a1", position: 1, text: "im Regal neben der Milch", is_correct: true },
      { id: "supermarkt-a1-t4-a2", position: 2, text: "an der Kasse", is_correct: false },
      { id: "supermarkt-a1-t4-a3", position: 3, text: "am Eingang", is_correct: false },
    ] },
    { id: "supermarkt-a1-t5", position: 5, kind: "single_choice", section: "test", prompt: "Ich brauche ein___ Brot. (das Brot, Akkusativ) Welche Endung?", explanation: "das Brot bleibt im Akkusativ „ein Brot“ — neutrale Form ändert sich nicht.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t5-a1", position: 1, text: "", is_correct: true },
      { id: "supermarkt-a1-t5-a2", position: 2, text: "en", is_correct: false },
      { id: "supermarkt-a1-t5-a3", position: 3, text: "e", is_correct: false },
    ] },
    { id: "supermarkt-a1-t6", position: 6, kind: "single_choice", section: "test", prompt: "Was ist im Angebot?", explanation: "„Das Gemüse ist frisch und im Angebot.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t6-a1", position: 1, text: "das Gemüse", is_correct: true },
      { id: "supermarkt-a1-t6-a2", position: 2, text: "die Tüte", is_correct: false },
      { id: "supermarkt-a1-t6-a3", position: 3, text: "der Wagen", is_correct: false },
    ] },
    { id: "supermarkt-a1-t7", position: 7, kind: "true_false", section: "test", prompt: "Der Kunde findet das Brot sofort.", explanation: "Falsch — der Kunde muss zuerst danach fragen.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t7-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "supermarkt-a1-t7-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "supermarkt-a1-t8", position: 8, kind: "single_choice", section: "test", prompt: "Was kauft der Kunde neben Brot und Milch?", explanation: "„Ich kaufe ein Kilo Äpfel und Tomaten.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t8-a1", position: 1, text: "Äpfel und Tomaten", is_correct: true },
      { id: "supermarkt-a1-t8-a2", position: 2, text: "Schuhe", is_correct: false },
      { id: "supermarkt-a1-t8-a3", position: 3, text: "ein Buch", is_correct: false },
    ] },
    { id: "supermarkt-a1-t9", position: 9, kind: "single_choice", section: "test", prompt: "Wohin geht der Kunde nach dem Einkaufen?", explanation: "„Jetzt gehe ich zur Kasse.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t9-a1", position: 1, text: "zur Kasse", is_correct: true },
      { id: "supermarkt-a1-t9-a2", position: 2, text: "zum Bahnhof", is_correct: false },
      { id: "supermarkt-a1-t9-a3", position: 3, text: "zum Ausgang ohne zu bezahlen", is_correct: false },
    ] },
    { id: "supermarkt-a1-t10", position: 10, kind: "gap", section: "test", prompt: "Bezahlen Sie bar oder mit ___?", explanation: "Die Kassiererin fragt nach der Zahlungsart: „Karte“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t10-a1", position: 1, text: "Karte", is_correct: true },
    ] },
    { id: "supermarkt-a1-t11", position: 11, kind: "single_choice", section: "test", prompt: "Was kostet die Tüte extra?", explanation: "„Das kostet 20 Cent extra.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t11-a1", position: 1, text: "20 Cent", is_correct: true },
      { id: "supermarkt-a1-t11-a2", position: 2, text: "1 Euro", is_correct: false },
      { id: "supermarkt-a1-t11-a3", position: 3, text: "nichts", is_correct: false },
    ] },
    { id: "supermarkt-a1-t12", position: 12, kind: "single_choice", section: "test", prompt: "Wie viel kostet der ganze Einkauf?", explanation: "„Das macht 12 Euro 50.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t12-a1", position: 1, text: "12 Euro 50", is_correct: true },
      { id: "supermarkt-a1-t12-a2", position: 2, text: "20 Cent", is_correct: false },
      { id: "supermarkt-a1-t12-a3", position: 3, text: "5 Euro", is_correct: false },
    ] },
    { id: "supermarkt-a1-t13", position: 13, kind: "single_choice", section: "test", prompt: "Was bedeutet „das Regal“?", explanation: "Ein Regal ist ein Möbelstück, auf dem Waren stehen.", data: H("Regal je namještaj na kojem stoji roba.", "Raf, üzerinde ürünlerin durduğu bir mobilyadır.", "Полиця - меблі, на яких стоять товари.", "Raftul este o mobilă pe care stau produsele.", "الرف قطعة أثاث توضع عليها البضائع."), quiz_answers: [
      { id: "supermarkt-a1-t13-a1", position: 1, text: "ein Möbelstück für Waren", is_correct: true },
      { id: "supermarkt-a1-t13-a2", position: 2, text: "ein Getränk", is_correct: false },
      { id: "supermarkt-a1-t13-a3", position: 3, text: "eine Kasse", is_correct: false },
    ] },
    { id: "supermarkt-a1-t14", position: 14, kind: "single_choice", section: "test", prompt: "Was ist „der Kassenbon“?", explanation: "Ein Beleg über den Einkauf, den man an der Kasse bekommt.", data: H("Kassenbon je potvrda o kupovini.", "Kasa fişi, alışverişin belgesidir.", "Чек - це документ про покупку.", "Bonul fiscal este dovada cumpărăturii.", "إيصال الشراء هو وثيقة عملية الشراء."), quiz_answers: [
      { id: "supermarkt-a1-t14-a1", position: 1, text: "ein Beleg für den Einkauf", is_correct: true },
      { id: "supermarkt-a1-t14-a2", position: 2, text: "ein Einkaufswagen", is_correct: false },
      { id: "supermarkt-a1-t14-a3", position: 3, text: "eine Tüte", is_correct: false },
    ] },
    { id: "supermarkt-a1-t15", position: 15, kind: "single_choice", section: "test", prompt: "Was macht man mit „der Karte“ an der Kasse?", explanation: "Mit der Karte bezahlt man.", data: H("das Angebot je srednjeg roda, u akuzativu ostaje „ein Angebot“.", "das Angebot nötrdür, akuzatifte „ein Angebot“ olarak kalır.", "das Angebot середнього роду, у знахідному залишається „ein Angebot“.", "das Angebot este neutru, la acuzativ rămâne „ein Angebot“.", "das Angebot محايد، يبقى في حالة المفعول „ein Angebot“."), quiz_answers: [
      { id: "supermarkt-a1-t15-a1", position: 1, text: "bezahlen", is_correct: true },
      { id: "supermarkt-a1-t15-a2", position: 2, text: "essen", is_correct: false },
      { id: "supermarkt-a1-t15-a3", position: 3, text: "waschen", is_correct: false },
    ] },
    { id: "supermarkt-a1-t16", position: 16, kind: "single_choice", section: "test", prompt: "Was ist das Gegenteil von „billig“?", explanation: "Das Gegenteil von billig ist teuer.", data: H("„am“ (an + dem) beschreibt Nähe.", "„am“ (an + dem) yakınlığı ifade eder.", "„am“ (an + dem) означає близькість.", "„am“ (an + dem) descrie apropierea.", "„am“ (an + dem) تصف القرب."), quiz_answers: [
      { id: "supermarkt-a1-t16-a1", position: 1, text: "teuer", is_correct: true },
      { id: "supermarkt-a1-t16-a2", position: 2, text: "frisch", is_correct: false },
      { id: "supermarkt-a1-t16-a3", position: 3, text: "kalt", is_correct: false },
    ] },
    { id: "supermarkt-a1-t17", position: 17, kind: "gap", section: "test", prompt: "Der Kunde nimmt einen ___. (er schiebt ihn durch den Supermarkt)", explanation: "„der Einkaufswagen“ — man schiebt ihn.", data: H("Kod modalnih glagola infinitiv ide na kraj rečenice.", "Modal fiillerde mastar cümlenin sonuna gider.", "У модальних дієсловах інфінітив стоїть у кінці речення.", "La verbele modale infinitivul stă la sfârșitul propoziției.", "مع الأفعال الشرطية يأتي المصدر في نهاية الجملة."), quiz_answers: [
      { id: "supermarkt-a1-t17-a1", position: 1, text: "Einkaufswagen", is_correct: true },
    ] },
    { id: "supermarkt-a1-t18", position: 18, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "der Wagen → im Satz „Ich nehme“ wird daraus „einen Wagen“.", data: H("der Wagen je muškog roda, zato einen Wagen.", "der Wagen eril isimdir, bu yüzden einen Wagen.", "der Wagen чоловічого роду, тому einen Wagen.", "der Wagen este masculin, de aceea einen Wagen.", "der Wagen مذكر، لذلك einen Wagen."), quiz_answers: [
      { id: "supermarkt-a1-t18-a1", position: 1, text: "Ich nehme einen Wagen.", is_correct: true },
      { id: "supermarkt-a1-t18-a2", position: 2, text: "Ich nehme ein Wagen.", is_correct: false },
      { id: "supermarkt-a1-t18-a3", position: 3, text: "Ich nehme eine Wagen.", is_correct: false },
    ] },
    { id: "supermarkt-a1-t19", position: 19, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "„das Kilo“ ändert sich im Akkusativ nicht: „ein Kilo“ bleibt gleich.", data: H("„Wo“ pita za mjesto, ne za osobu ili razlog.", "„Wo“ yeri sorar, kişiyi veya sebebi değil.", "„Wo“ запитує про місце, а не про особу чи причину.", "„Wo“ întreabă despre loc, nu despre persoană sau motiv.", "„Wo“ يسأل عن المكان، وليس عن الشخص أو السبب."), quiz_answers: [
      { id: "supermarkt-a1-t19-a1", position: 1, text: "Ich möchte ein Kilo Äpfel.", is_correct: true },
      { id: "supermarkt-a1-t19-a2", position: 2, text: "Ich möchte einen Kilo Äpfel.", is_correct: false },
      { id: "supermarkt-a1-t19-a3", position: 3, text: "Ich möchte eine Kilo Äpfel.", is_correct: false },
    ] },
    { id: "supermarkt-a1-t20", position: 20, kind: "single_choice", section: "test", prompt: "Ich bezahle ___ Karte. Welches Wort passt?", explanation: "„mit“ passt hier: man benutzt die Karte zum Bezahlen.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t20-a1", position: 1, text: "mit", is_correct: true },
      { id: "supermarkt-a1-t20-a2", position: 2, text: "für", is_correct: false },
      { id: "supermarkt-a1-t20-a3", position: 3, text: "ohne", is_correct: false },
    ] },
    { id: "supermarkt-a1-t21", position: 21, kind: "single_choice", section: "test", prompt: "Ich frage ___ Mitarbeiter. Welches Wort passt?", explanation: "„einen“ ist die Akkusativform von „der Mitarbeiter“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t21-a1", position: 1, text: "einen", is_correct: true },
      { id: "supermarkt-a1-t21-a2", position: 2, text: "ein", is_correct: false },
      { id: "supermarkt-a1-t21-a3", position: 3, text: "eine", is_correct: false },
    ] },
    { id: "supermarkt-a1-t22", position: 22, kind: "single_choice", section: "test", prompt: "Wie fragt man höflich, ob man mit Karte zahlen kann?", explanation: "„Kann ich mit Karte bezahlen?“ ist die höfliche Frage.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t22-a1", position: 1, text: "Kann ich mit Karte bezahlen?", is_correct: true },
      { id: "supermarkt-a1-t22-a2", position: 2, text: "Bezahl ich Karte?", is_correct: false },
      { id: "supermarkt-a1-t22-a3", position: 3, text: "Karte ich bezahlen kann?", is_correct: false },
    ] },
    { id: "supermarkt-a1-t23", position: 23, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "„Können Sie mir helfen?“ — das Verb „helfen“ steht am Ende.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t23-a1", position: 1, text: "Können Sie mir helfen?", is_correct: true },
      { id: "supermarkt-a1-t23-a2", position: 2, text: "Können helfen Sie mir?", is_correct: false },
      { id: "supermarkt-a1-t23-a3", position: 3, text: "Helfen können Sie mir?", is_correct: false },
    ] },
    { id: "supermarkt-a1-t24", position: 24, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "„meine Einkaufsliste“ ist richtig, weil „die Liste“ feminin ist.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t24-a1", position: 1, text: "Ich habe meine Einkaufsliste vergessen.", is_correct: true },
      { id: "supermarkt-a1-t24-a2", position: 2, text: "Ich habe mein Einkaufsliste vergessen.", is_correct: false },
      { id: "supermarkt-a1-t24-a3", position: 3, text: "Ich habe meinen Einkaufsliste vergessen.", is_correct: false },
    ] },
    { id: "supermarkt-a1-t25", position: 25, kind: "single_choice", section: "test", prompt: "Welches Wort passt: „___ finde ich die Milch?“", explanation: "„Wo“ fragt nach dem Ort.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t25-a1", position: 1, text: "Wo", is_correct: true },
      { id: "supermarkt-a1-t25-a2", position: 2, text: "Wer", is_correct: false },
      { id: "supermarkt-a1-t25-a3", position: 3, text: "Warum", is_correct: false },
    ] },
    { id: "supermarkt-a1-t26", position: 26, kind: "single_choice", section: "test", prompt: "Wer sagt im Dialog „Entschuldigung, können Sie mir helfen?“?", explanation: "Das sagt der Kunde, der Hilfe braucht.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t26-a1", position: 1, text: "der Kunde", is_correct: true },
      { id: "supermarkt-a1-t26-a2", position: 2, text: "der Mitarbeiter", is_correct: false },
      { id: "supermarkt-a1-t26-a3", position: 3, text: "niemand", is_correct: false },
    ] },
    { id: "supermarkt-a1-t27", position: 27, kind: "single_choice", section: "test", prompt: "Was antwortet der Kunde auf „Brauchen Sie sonst noch etwas?“", explanation: "„Nein, danke, das ist alles.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t27-a1", position: 1, text: "Nein, danke, das ist alles.", is_correct: true },
      { id: "supermarkt-a1-t27-a2", position: 2, text: "Ja, ein Kilo bitte.", is_correct: false },
      { id: "supermarkt-a1-t27-a3", position: 3, text: "Der Zug fährt um acht.", is_correct: false },
    ] },
    { id: "supermarkt-a1-t28", position: 28, kind: "true_false", section: "test", prompt: "Die Kassiererin fragt, ob der Kunde alles gefunden hat.", explanation: "Richtig — laut Dialog 2 fragt sie am Anfang.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-a1-t28-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "supermarkt-a1-t28-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "supermarkt-a1-t29", position: 29, kind: "single_choice", section: "test", prompt: "Wie reagiert die Kassiererin auf die Frage nach der Kartenzahlung?", explanation: "„Ja, natürlich, kein Problem.“", data: H("Uctivo potvrđuje mogućnost plaćanja karticom.", "Kartla ödemeye kibarca onay veriyor.", "Ввічливо підтверджує можливість оплати карткою.", "Confirmă politicos posibilitatea plății cu cardul.", "توافق بأدب على إمكانية الدفع بالبطاقة."), quiz_answers: [
      { id: "supermarkt-a1-t29-a1", position: 1, text: "Ja, natürlich, kein Problem.", is_correct: true },
      { id: "supermarkt-a1-t29-a2", position: 2, text: "Nein, das geht nicht.", is_correct: false },
      { id: "supermarkt-a1-t29-a3", position: 3, text: "Nur mit Bargeld.", is_correct: false },
    ] },
    { id: "supermarkt-a1-t30", position: 30, kind: "single_choice", section: "test", prompt: "Womit bezahlt man normalerweise im Supermarkt?", explanation: "Bar oder mit Karte — nicht mit einem Scheck.", data: H("U supermarketu se plaća gotovinom ili karticom.", "Süpermarkette genelde nakit veya kartla ödenir.", "У супермаркеті зазвичай платять готівкою або карткою.", "La supermarket se plătește de obicei cash sau cu cardul.", "عادة يُدفع في السوبر ماركت نقدًا أو بالبطاقة."), quiz_answers: [
      { id: "supermarkt-a1-t30-a1", position: 1, text: "bar oder mit Karte", is_correct: true },
      { id: "supermarkt-a1-t30-a2", position: 2, text: "mit einem Scheck", is_correct: false },
      { id: "supermarkt-a1-t30-a3", position: 3, text: "mit einem Brief", is_correct: false },
    ] },
    { id: "supermarkt-a1-t31", position: 31, kind: "true_false", section: "test", prompt: "In Deutschland muss man für eine Plastiktüte im Supermarkt meistens extra bezahlen.", explanation: "Richtig — Plastiktüten kosten normalerweise einen kleinen Betrag extra.", data: H("Plastične kese se obično dodatno plaćaju.", "Plastik poşetler genellikle ekstra ücretlidir.", "За пластикові пакети зазвичай платять додатково.", "Pungile de plastic costă de obicei suplimentar.", "أكياس البلاستيك تُدفع عادة بشكل إضافي."), quiz_answers: [
      { id: "supermarkt-a1-t31-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "supermarkt-a1-t31-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "supermarkt-a1-t32", position: 32, kind: "true_false", section: "test", prompt: "Auf viele Pfandflaschen bekommt man Geld zurück, wenn man sie zurückbringt.", explanation: "Richtig — das nennt man Pfand.", data: H("Za povratne flaše dobija se novac nazad.", "İade edilebilir şişeler için para geri alınır.", "За заставні пляшки повертають гроші.", "Pentru sticlele cu garanție se returnează bani.", "تُرجع الأموال مقابل الزجاجات ذات التأمين."), quiz_answers: [
      { id: "supermarkt-a1-t32-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "supermarkt-a1-t32-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "supermarkt-a1-t33", position: 33, kind: "single_choice", section: "test", prompt: "Was braucht man normalerweise NICHT im Supermarkt zu tun?", explanation: "Man muss im Supermarkt kein Ticket für einen Zug kaufen.", data: H("Voznu kartu ne kupujete u supermarketu.", "Süpermarkette tren bileti almazsınız.", "Квиток на потяг не купують у супермаркеті.", "Nu cumperi bilet de tren la supermarket.", "لا تشتري تذكرة قطار في السوبر ماركت."), quiz_answers: [
      { id: "supermarkt-a1-t33-a1", position: 1, text: "ein Zugticket kaufen", is_correct: true },
      { id: "supermarkt-a1-t33-a2", position: 2, text: "einen Wagen nehmen", is_correct: false },
      { id: "supermarkt-a1-t33-a3", position: 3, text: "an der Kasse bezahlen", is_correct: false },
    ] },
    { id: "supermarkt-a1-t34", position: 34, kind: "single_choice", section: "test", prompt: "Was passt NICHT in einen Supermarkt?", explanation: "Ein Zahnarztstuhl gehört in eine Zahnarztpraxis, nicht in einen Supermarkt.", data: H("Zubarska stolica pripada zubarskoj ordinaciji, ne supermarketu.", "Diş koltuğu diş kliniğine aittir, süpermarkete değil.", "Стоматологічне крісло належить стоматології, а не супермаркету.", "Scaunul de dentist aparține cabinetului stomatologic, nu supermarketului.", "كرسي طبيب الأسنان يخص عيادة الأسنان، وليس السوبر ماركت."), quiz_answers: [
      { id: "supermarkt-a1-t34-a1", position: 1, text: "ein Zahnarztstuhl", is_correct: true },
      { id: "supermarkt-a1-t34-a2", position: 2, text: "ein Einkaufswagen", is_correct: false },
      { id: "supermarkt-a1-t34-a3", position: 3, text: "eine Kasse", is_correct: false },
    ] },
    { id: "supermarkt-a1-t35", position: 35, kind: "single_choice", section: "test", prompt: "Warum ist eine Einkaufsliste nützlich?", explanation: "So vergisst man beim Einkaufen nichts Wichtiges.", data: H("Lista kupovine pomaže da se ništa ne zaboravi.", "Alışveriş listesi hiçbir şeyi unutmamaya yardımcı olur.", "Список покупок допомагає нічого не забути.", "Lista de cumpărături ajută să nu uiți nimic.", "قائمة التسوق تساعد على عدم نسيان أي شيء."), quiz_answers: [
      { id: "supermarkt-a1-t35-a1", position: 1, text: "Man vergisst nichts.", is_correct: true },
      { id: "supermarkt-a1-t35-a2", position: 2, text: "Das Obst wächst schneller.", is_correct: false },
      { id: "supermarkt-a1-t35-a3", position: 3, text: "Es ist verboten, ohne Liste einzukaufen.", is_correct: false },
    ] },
    { id: "supermarkt-a1-t36", position: 36, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "„einen Wagen“ ist die korrekte Akkusativform von „der Wagen“.", data: H("der Wagen -> akuzativ: einen Wagen.", "der Wagen -> akuzatif: einen Wagen.", "der Wagen -> знахідний: einen Wagen.", "der Wagen -> acuzativ: einen Wagen.", "der Wagen -> حالة المفعول: einen Wagen."), quiz_answers: [
      { id: "supermarkt-a1-t36-a1", position: 1, text: "Ich nehme einen Wagen.", is_correct: true },
      { id: "supermarkt-a1-t36-a2", position: 2, text: "Ich nehme ein Wagen.", is_correct: false },
      { id: "supermarkt-a1-t36-a3", position: 3, text: "Ich nehme der Wagen.", is_correct: false },
    ] },
    { id: "supermarkt-a1-t37", position: 37, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "Nach „mit“ steht der Dativ: mit der Karte.", data: H("Poslije mit uvijek dolazi dativ: die Karte -> der Karte.", "mit sonrasi her zaman datif: die Karte -> der Karte.", "Після mit завжди давальний: die Karte -> der Karte.", "Dupa mit urmeaza mereu dativul: die Karte -> der Karte.", "بعد mit يأتي دائمًا حالة الجر: die Karte -> der Karte."), quiz_answers: [
      { id: "supermarkt-a1-t37-a1", position: 1, text: "Ich bezahle mit der Karte.", is_correct: true },
      { id: "supermarkt-a1-t37-a2", position: 2, text: "Ich bezahle mit die Karte.", is_correct: false },
      { id: "supermarkt-a1-t37-a3", position: 3, text: "Ich bezahle mit das Karte.", is_correct: false },
    ] },
    { id: "supermarkt-a1-t38", position: 38, kind: "gap", section: "test", prompt: "Haben ___ eine Tüte für mich? (höfliche Anrede)", explanation: "„Sie“ — die höfliche Anrede.", data: H("Uljudno oslovljavanje nepoznatih osoba je uvijek sa Sie.", "Tanımadığınız kişilere her zaman Sie ile hitap edilir.", "До незнайомих людей завжди звертаються на Sie.", "Adresarea politicoasă a persoanelor necunoscute este mereu cu Sie.", "مخاطبة الغرباء دائمًا تكون بصيغة Sie."), quiz_answers: [
      { id: "supermarkt-a1-t38-a1", position: 1, text: "Sie", is_correct: true },
    ] },
    { id: "supermarkt-a1-t39", position: 39, kind: "single_choice", section: "test", prompt: "Was ist die höfliche Bitte um Hilfe?", explanation: "„Entschuldigung, können Sie mir helfen?“", data: H("Uctivo moli za pomoć.", "Yardım için nazikce rica ediyor.", "Ввічливо просить про допомогу.", "Roagă politicos ajutor.", "يطلب المساعدة بأدب."), quiz_answers: [
      { id: "supermarkt-a1-t39-a1", position: 1, text: "Entschuldigung, können Sie mir helfen?", is_correct: true },
      { id: "supermarkt-a1-t39-a2", position: 2, text: "Hilf mir, du!", is_correct: false },
      { id: "supermarkt-a1-t39-a3", position: 3, text: "Ich brauche nie Hilfe.", is_correct: false },
    ] },
    { id: "supermarkt-a1-t40", position: 40, kind: "single_choice", section: "test", prompt: "Wie geht die Geschichte zu Ende?", explanation: "Der Kunde bezahlt mit Karte, bekommt eine Tüte und den Kassenbon und verabschiedet sich.", data: H("Na kraju price kupac plaća i oprašta se.", "Hikayenin sonunda musteri odeyip vedalasiyor.", "Наприкінці історії клієнт платить і прощається.", "La finalul povestii clientul plateste si isi ia la revedere.", "في نهاية القصة يدفع الزبون ويودّع."), quiz_answers: [
      { id: "supermarkt-a1-t40-a1", position: 1, text: "Der Kunde bezahlt und verabschiedet sich.", is_correct: true },
      { id: "supermarkt-a1-t40-a2", position: 2, text: "Der Kunde geht ohne zu bezahlen.", is_correct: false },
      { id: "supermarkt-a1-t40-a3", position: 3, text: "Der Kunde bleibt im Supermarkt wohnen.", is_correct: false },
    ] },

    // ===== Sprache & Grammatik: zum Anklicken =====
    { id: "supermarkt-a1-g1", position: 1, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist richtig?", explanation: "der Wagen ist männlich; nach „nehme“ (Akkusativ) wird daraus „einen Wagen“.", data: H("der Wagen je muškog roda; poslije nehme (akuzativ) postaje einen Wagen.", "der Wagen eril isimdir; nehme sonrasi (akuzatif) einen Wagen olur.", "der Wagen чоловічого роду; після nehme (знахідний) стає einen Wagen.", "der Wagen este masculin; dupa nehme (acuzativ) devine einen Wagen.", "der Wagen مذكر؛ بعد nehme (حالة المفعول) يصبح einen Wagen."), quiz_answers: [
      { id: "supermarkt-a1-g1-a1", position: 1, text: "Ich nehme einen Wagen.", is_correct: true },
      { id: "supermarkt-a1-g1-a2", position: 2, text: "Ich nehme ein Wagen.", is_correct: false },
      { id: "supermarkt-a1-g1-a3", position: 3, text: "Ich nehme der Wagen.", is_correct: false },
    ] },
    { id: "supermarkt-a1-g2", position: 2, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist richtig?", explanation: "die Tüte ist feminin; im Akkusativ bleibt „eine Tüte“ gleich.", data: H("die Tüte je ženskog roda; u akuzativu ostaje eine Tüte.", "die Tüte disildir; akuzatifte eine Tüte olarak kalir.", "die Tüte жіночого роду; у знахідному залишається eine Tüte.", "die Tüte este feminin; la acuzativ ramane eine Tüte.", "die Tüte مؤنثة؛ تبقى في حالة المفعول eine Tüte."), quiz_answers: [
      { id: "supermarkt-a1-g2-a1", position: 1, text: "Ich brauche eine Tüte.", is_correct: true },
      { id: "supermarkt-a1-g2-a2", position: 2, text: "Ich brauche einen Tüte.", is_correct: false },
      { id: "supermarkt-a1-g2-a3", position: 3, text: "Ich brauche ein Tüte.", is_correct: false },
    ] },
    { id: "supermarkt-a1-g3", position: 3, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist richtig?", explanation: "das Kilo ist sächlich; im Akkusativ ändert es sich nicht: „ein Kilo“.", data: H("das Kilo je srednjeg roda; u akuzativu se ne mijenja: ein Kilo.", "das Kilo notrdur; akuzatifte degismez: ein Kilo.", "das Kilo середнього роду; у знахідному не змінюється: ein Kilo.", "das Kilo este neutru; la acuzativ nu se schimba: ein Kilo.", "das Kilo محايد؛ لا يتغير في حالة المفعول: ein Kilo."), quiz_answers: [
      { id: "supermarkt-a1-g3-a1", position: 1, text: "Ich möchte ein Kilo Äpfel.", is_correct: true },
      { id: "supermarkt-a1-g3-a2", position: 2, text: "Ich möchte einen Kilo Äpfel.", is_correct: false },
      { id: "supermarkt-a1-g3-a3", position: 3, text: "Ich möchte eine Kilo Äpfel.", is_correct: false },
    ] },
    { id: "supermarkt-a1-g4", position: 4, kind: "single_choice", section: "grammar", prompt: "Welches Wort passt: „Ich bezahle ___ Karte.“?", explanation: "Nach „mit“ steht immer der Dativ: die Karte -> der Karte.", data: H("Poslije mit uvijek dolazi dativ: die Karte -> der Karte.", "mit sonrasi her zaman datif: die Karte -> der Karte.", "Після mit завжди давальний: die Karte -> der Karte.", "Dupa mit urmeaza mereu dativul: die Karte -> der Karte.", "بعد mit يأتي دائمًا حالة الجر: die Karte -> der Karte."), quiz_answers: [
      { id: "supermarkt-a1-g4-a1", position: 1, text: "mit", is_correct: true },
      { id: "supermarkt-a1-g4-a2", position: 2, text: "für", is_correct: false },
      { id: "supermarkt-a1-g4-a3", position: 3, text: "ohne", is_correct: false },
    ] },
    { id: "supermarkt-a1-g5", position: 5, kind: "single_choice", section: "grammar", prompt: "Welches Wort passt: „Ich frage ___ Mitarbeiter.“?", explanation: "„einen“ ist die Akkusativform von „der Mitarbeiter“.", data: H("der Mitarbeiter je muškog roda, u akuzativu postaje einen Mitarbeiter.", "der Mitarbeiter eril isimdir, akuzatifte einen Mitarbeiter olur.", "der Mitarbeiter чоловічого роду, у знахідному стає einen Mitarbeiter.", "der Mitarbeiter este masculin, la acuzativ devine einen Mitarbeiter.", "der Mitarbeiter مذكر، يصبح في حالة المفعول einen Mitarbeiter."), quiz_answers: [
      { id: "supermarkt-a1-g5-a1", position: 1, text: "einen", is_correct: true },
      { id: "supermarkt-a1-g5-a2", position: 2, text: "ein", is_correct: false },
      { id: "supermarkt-a1-g5-a3", position: 3, text: "eine", is_correct: false },
    ] },
    { id: "supermarkt-a1-g6", position: 6, kind: "single_choice", section: "grammar", prompt: "Welches Wort passt: „___ finde ich die Milch?“?", explanation: "„Wo“ fragt nach dem Ort.", data: H("Wo pita za mjesto.", "Wo yeri sorar.", "Wo запитує про місце.", "Wo intreaba despre loc.", "Wo يسأل عن المكان."), quiz_answers: [
      { id: "supermarkt-a1-g6-a1", position: 1, text: "Wo", is_correct: true },
      { id: "supermarkt-a1-g6-a2", position: 2, text: "Wer", is_correct: false },
      { id: "supermarkt-a1-g6-a3", position: 3, text: "Warum", is_correct: false },
    ] },
    { id: "supermarkt-a1-g7", position: 7, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist richtig?", explanation: "Bei Modalverben (können) steht der Infinitiv am Satzende.", data: H("Kod modalnih glagola (können) infinitiv ide na kraj recenice.", "Modal fiillerde (können) mastar cumlenin sonuna gider.", "У модальних дієсловах (können) інфінітив стоїть у кінці речення.", "La verbele modale (können) infinitivul sta la sfarsitul propozitiei.", "مع الأفعال الشرطية (können) يأتي المصدر في نهاية الجملة."), quiz_answers: [
      { id: "supermarkt-a1-g7-a1", position: 1, text: "Können Sie mir helfen?", is_correct: true },
      { id: "supermarkt-a1-g7-a2", position: 2, text: "Können helfen Sie mir?", is_correct: false },
      { id: "supermarkt-a1-g7-a3", position: 3, text: "Helfen können Sie mir?", is_correct: false },
    ] },
    { id: "supermarkt-a1-g8", position: 8, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist richtig?", explanation: "„meine Einkaufsliste“ ist richtig, weil „die Liste“ feminin ist (meine mit -e).", data: H("die Liste je zenskog roda, zato meine sa -e.", "die Liste disildir, bu yuzden meine -e ile.", "die Liste жіночого роду, тому meine з -e.", "die Liste este feminin, de aceea meine cu -e.", "die Liste مؤنثة، لذلك meine بحرف -e."), quiz_answers: [
      { id: "supermarkt-a1-g8-a1", position: 1, text: "Ich habe meine Einkaufsliste vergessen.", is_correct: true },
      { id: "supermarkt-a1-g8-a2", position: 2, text: "Ich habe mein Einkaufsliste vergessen.", is_correct: false },
      { id: "supermarkt-a1-g8-a3", position: 3, text: "Ich habe meinen Einkaufsliste vergessen.", is_correct: false },
    ] },

    // ===== Wo ist was? =====
    { id: "supermarkt-a1-p1", position: 1, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Einkaufswagen steht ___ dem Eingang. Welche Präposition passt?", explanation: "„an“ beschreibt eine Position direkt bei einem Punkt (Tür/Eingang).", data: H("„an“ znači tačno kod ulaza.", "„an“ girişin tam yanında anlamına gelir.", "„an“ означає точно біля входу.", "„an“ înseamnă chiar la intrare.", "„an“ تعني عند المدخل مباشرة."), quiz_answers: [
      { id: "supermarkt-a1-p1-a1", position: 1, text: "an", is_correct: true },
      { id: "supermarkt-a1-p1-a2", position: 2, text: "unter", is_correct: false },
      { id: "supermarkt-a1-p1-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "supermarkt-a1-p2", position: 2, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Das Brot liegt ___ der Milch im Regal. Welche Präposition passt?", explanation: "„neben“ beschreibt zwei Dinge direkt nebeneinander.", data: H("„neben“ znači jedno pored drugog.", "„neben“ yan yana anlamına gelir.", "„neben“ означає поруч одне з одним.", "„neben“ înseamnă unul lângă altul.", "„neben“ تعني بجانب بعضهما."), quiz_answers: [
      { id: "supermarkt-a1-p2-a1", position: 1, text: "neben", is_correct: true },
      { id: "supermarkt-a1-p2-a2", position: 2, text: "über", is_correct: false },
      { id: "supermarkt-a1-p2-a3", position: 3, text: "unter", is_correct: false },
    ] },
    { id: "supermarkt-a1-p3", position: 3, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Äpfel liegen ___ dem Tisch. (auf)", explanation: "Die Äpfel liegen oben auf dem Verkaufstisch.", data: H("Jabuke leže na stolu.", "Elmalar masanın üzerinde duruyor.", "Яблука лежать на столі.", "Merele stau pe masă.", "التفاح موضوع على الطاولة."), quiz_answers: [
      { id: "supermarkt-a1-p3-a1", position: 1, text: "auf", is_correct: true },
    ] },
    { id: "supermarkt-a1-p4", position: 4, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Kunde steht ___ der Kasse und wartet. Welche Präposition passt?", explanation: "„an“ (an + der) beschreibt: direkt bei der Kasse.", data: H("„an“ znači direktno kod kase.", "„an“ kasanın hemen yanında anlamına gelir.", "„an“ означає прямо біля каси.", "„an“ înseamnă chiar la casă.", "„an“ تعني عند الصندوق مباشرة."), quiz_answers: [
      { id: "supermarkt-a1-p4-a1", position: 1, text: "an", is_correct: true },
      { id: "supermarkt-a1-p4-a2", position: 2, text: "unter", is_correct: false },
      { id: "supermarkt-a1-p4-a3", position: 3, text: "zwischen", is_correct: false },
    ] },
    { id: "supermarkt-a1-p5", position: 5, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Das Gemüse steht ___ dem Regal. Welche Präposition passt am besten?", explanation: "„in“ beschreibt: innerhalb eines Regals oder einer Kiste.", data: H("„in“ znači unutar polica ili sanduka.", "„in“ raf veya kutu içinde anlamına gelir.", "„in“ означає всередині полиці або ящика.", "„in“ înseamnă în interiorul raftului sau al lăzii.", "„in“ تعني داخل الرف أو الصندوق."), quiz_answers: [
      { id: "supermarkt-a1-p5-a1", position: 1, text: "in", is_correct: true },
      { id: "supermarkt-a1-p5-a2", position: 2, text: "unter", is_correct: false },
      { id: "supermarkt-a1-p5-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "supermarkt-a1-p6", position: 6, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Die Kasse steht ___ dem Ausgang. Welche Präposition passt?", explanation: "„neben“ beschreibt: die Kasse befindet sich direkt neben dem Ausgang.", data: H("Kasa je odmah pored izlaza.", "Kasa çıkışın hemen yanındadır.", "Каса прямо біля виходу.", "Casa este chiar lângă ieșire.", "الصندوق بجانب المخرج مباشرة."), quiz_answers: [
      { id: "supermarkt-a1-p6-a1", position: 1, text: "neben", is_correct: true },
      { id: "supermarkt-a1-p6-a2", position: 2, text: "über", is_correct: false },
      { id: "supermarkt-a1-p6-a3", position: 3, text: "unter", is_correct: false },
    ] },
    { id: "supermarkt-a1-p7", position: 7, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Tüten liegen ___ der Kasse. (auf)", explanation: "„auf der Kasse“ — die Tüten liegen oben auf dem Kassentisch.", data: H("Kese leže na kasi.", "Poşetler kasanın üzerinde duruyor.", "Пакети лежать на касі.", "Pungile stau pe casă.", "الأكياس موضوعة على الصندوق."), quiz_answers: [
      { id: "supermarkt-a1-p7-a1", position: 1, text: "auf", is_correct: true },
    ] },
    { id: "supermarkt-a1-p8", position: 8, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Mitarbeiter steht ___ dem Regal, um zu helfen. Welche Präposition passt?", explanation: "„vor“ beschreibt: direkt vor dem Regal stehend.", data: H("„vor“ znači ispred nečega.", "„vor“ bir şeyin önünde anlamına gelir.", "„vor“ означає перед чимось.", "„vor“ înseamnă în fața a ceva.", "„vor“ تعني أمام شيء ما."), quiz_answers: [
      { id: "supermarkt-a1-p8-a1", position: 1, text: "vor", is_correct: true },
      { id: "supermarkt-a1-p8-a2", position: 2, text: "unter", is_correct: false },
      { id: "supermarkt-a1-p8-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "supermarkt-a1-p9", position: 9, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Das Preisschild hängt ___ dem Regal. Welche Präposition passt?", explanation: "„an“ beschreibt: befestigt an einer senkrechten Fläche.", data: H("„an dem Regal“ znači pričvršćeno na policu.", "„an dem Regal“ rafa asılı anlamına gelir.", "„an dem Regal“ означає прикріплено до полиці.", "„an dem Regal“ înseamnă prins de raft.", "„an dem Regal“ تعني معلق على الرف."), quiz_answers: [
      { id: "supermarkt-a1-p9-a1", position: 1, text: "an", is_correct: true },
      { id: "supermarkt-a1-p9-a2", position: 2, text: "unter", is_correct: false },
      { id: "supermarkt-a1-p9-a3", position: 3, text: "zwischen", is_correct: false },
    ] },
    { id: "supermarkt-a1-p10", position: 10, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Der Wagen steht ___ der Tür. (neben)", explanation: "„neben der Tür“ — der Wagen ist direkt bei der Tür.", data: H("Kolica su odmah pored vrata.", "Araba kapının hemen yanındadır.", "Візок прямо біля дверей.", "Căruciorul este chiar lângă ușă.", "العربة بجانب الباب مباشرة."), quiz_answers: [
      { id: "supermarkt-a1-p10-a1", position: 1, text: "neben", is_correct: true },
    ] },
    { id: "supermarkt-a1-p11", position: 11, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht das Obst? Welche Präposition passt?", explanation: "Das Obst steht „am Eingang“, ganz vorne im Laden.", data: H("Pogledaj sliku: voće je kod ulaza.", "Resme bak: meyveler girişte.", "Подивись на малюнок: фрукти біля входу.", "Uită-te la imagine: fructele sunt la intrare.", "انظر إلى الصورة: الفاكهة عند المدخل."), quiz_answers: [
      { id: "supermarkt-a1-p11-a1", position: 1, text: "am Eingang", is_correct: true },
      { id: "supermarkt-a1-p11-a2", position: 2, text: "unter der Kasse", is_correct: false },
      { id: "supermarkt-a1-p11-a3", position: 3, text: "hinter der Kasse", is_correct: false },
    ] },
    { id: "supermarkt-a1-p12", position: 12, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht die Kassiererin? Welche Präposition passt?", explanation: "Die Kassiererin steht „hinter der Kasse“.", data: H("Kasirka stoji iza kase.", "Kasiyer kasanın arkasında duruyor.", "Касирка стоїть позаду каси.", "Casiera stă în spatele casei.", "تقف الكاشيرة خلف الصندوق."), quiz_answers: [
      { id: "supermarkt-a1-p12-a1", position: 1, text: "hinter der Kasse", is_correct: true },
      { id: "supermarkt-a1-p12-a2", position: 2, text: "vor der Kasse", is_correct: false },
      { id: "supermarkt-a1-p12-a3", position: 3, text: "unter der Kasse", is_correct: false },
    ] },
    { id: "supermarkt-a1-p13", position: 13, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Tomaten liegen ___ dem kleinen Korb. (in)", explanation: "Die Tomaten liegen innerhalb des kleinen Korbes.", data: H("Paradajz je u maloj korpi.", "Domatesler küçük sepetin içinde.", "Помідори лежать у маленькому кошику.", "Roșiile stau în coșul mic.", "الطماطم موجودة داخل السلة الصغيرة."), quiz_answers: [
      { id: "supermarkt-a1-p13-a1", position: 1, text: "in", is_correct: true },
    ] },
    { id: "supermarkt-a1-p14", position: 14, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo hängt das Angebotsschild? Welche Präposition passt?", explanation: "Das Schild hängt „über dem Regal“.", data: H("Znak visi iznad police.", "Tabela rafın üzerinde asılı.", "Табличка висить над полицею.", "Semnul atârnă deasupra raftului.", "اللافتة معلقة فوق الرف."), quiz_answers: [
      { id: "supermarkt-a1-p14-a1", position: 1, text: "über dem Regal", is_correct: true },
      { id: "supermarkt-a1-p14-a2", position: 2, text: "unter dem Regal", is_correct: false },
      { id: "supermarkt-a1-p14-a3", position: 3, text: "in dem Regal", is_correct: false },
    ] },
    { id: "supermarkt-a1-p15", position: 15, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht die Kasse im Supermarkt? Welche Präposition passt?", explanation: "Die Kasse steht „in der Nähe des Ausgangs“.", data: H("Kasa se nalazi blizu izlaza.", "Kasa çıkışın yakınında duruyor.", "Каса розташована біля виходу.", "Casa se află lângă ieșire.", "يقع الصندوق قرب المخرج."), quiz_answers: [
      { id: "supermarkt-a1-p15-a1", position: 1, text: "in der Nähe des Ausgangs", is_correct: true },
      { id: "supermarkt-a1-p15-a2", position: 2, text: "unter dem Ausgang", is_correct: false },
      { id: "supermarkt-a1-p15-a3", position: 3, text: "zwischen dem Ausgang", is_correct: false },
    ] },

    // ===== Dialog bauen =====
    { id: "supermarkt-a1-b1", position: 1, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 1 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: um Hilfe bitten → Nachfrage → suchen → Antwort → Danken.", data: { items: [
      "Kunde: Entschuldigung, können Sie mir helfen?",
      "Mitarbeiter: Ja, natürlich. Was suchen Sie?",
      "Kunde: Ich suche das Brot, aber ich finde es nicht.",
      "Mitarbeiter: Das Brot ist im Regal neben der Milch.",
      "Kunde: Danke schön! Und wo finde ich das Obst?",
    ] }, quiz_answers: [] },
    { id: "supermarkt-a1-b2", position: 2, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 2 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Begrüßung → Preis → Bezahlfrage → Bestätigung → Abschied.", data: { items: [
      "Kassiererin: Guten Tag! Haben Sie alles gefunden?",
      "Kunde: Ja, danke, ich habe alles gefunden.",
      "Kassiererin: Das macht dann 12 Euro 50.",
      "Kunde: Kann ich mit Karte bezahlen?",
      "Kunde: Danke, Ihnen auch. Auf Wiedersehen!",
    ] }, quiz_answers: [] },
  ],
} as const;
