const T = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ bks, tr, uk, ro, ar });
const H = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ help: T(bks, tr, uk, ro, ar) });

export const kasseA1 = {
  lesson: {
    id: "c4a71f9e-2b6d-4e83-9a5c-7f1d3b8e6c02",
    slug: "kasse-a1",
    title: "An der Kasse – A1",
    description:
      "An der Kasse im Supermarkt: sich anstellen, Waren aufs Band legen, die Kundenkarte zeigen und bezahlen.",
    level: "A1",
    region: "de",
    category_slug: "alltag",
    subcategory_slug: "kasse",
    topic_slug: "kasse",
    topic_title: "An der Kasse",
    duration_seconds: 1800,
    thumbnail_key: "kasse",
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
          "Jedes Nomen an der Kasse hat ein festes Geschlecht: männlich (der), weiblich (die) oder sächlich (das). Im Nominativ bleibt der Artikel wie im Wörterbuch: der Bon, die Kundenkarte, das Kassenband. Im Akkusativ ändert sich nur die männliche Form: der → einen.",
        examples: [
          "Nominativ: Der Bon liegt auf dem Band. (der Bon bleibt der)",
          "Akkusativ: Ich brauche einen Bon. (der → einen)",
          "Akkusativ: Ich zeige eine Kundenkarte. (die bleibt eine)",
        ],
      },
      {
        title: "Akkusativ nach haben, brauchen, nehmen, möchten",
        explanation:
          "Diese Verben verlangen fast immer den Akkusativ, weil danach ein direktes Objekt kommt (das, was man hat/braucht/nimmt/möchte).",
        examples: [
          "Ich habe eine Kundenkarte.",
          "Ich brauche eine Tüte für die Waren.",
          "Ich möchte bar bezahlen.",
        ],
      },
      {
        title: "Dativ nach Präpositionen wie mit, bei, zu",
        explanation:
          "Nach bestimmten Präpositionen steht immer der Dativ. Im Dativ wird „der“ zu „dem“, „die“ zu „der“, „das“ zu „dem“. Das gilt zum Beispiel nach mit, bei, zu, von, nach, aus.",
        examples: [
          "mit der Karte bezahlen (die Karte → der Karte)",
          "mit dem Kassenbon (der Bon → dem Bon)",
          "beim Kassierer fragen (bei + dem = beim)",
        ],
      },
      {
        title: "Possessivartikel: mein, meine",
        explanation:
          "Possessivartikel zeigen Besitz an. Die Endung richtet sich nach dem Genus des Nomens: „meine Kundenkarte“ (die Karte ist feminin), „mein Geld“ (das Geld ist neutral).",
        examples: ["Ich habe meine Kundenkarte vergessen.", "Wo ist mein Portemonnaie?"],
      },
      {
        title: "W-Fragen mit wo und wie viel",
        explanation:
          "„Wo“ fragt nach einem Ort, „wie viel“ nach einer Menge oder einem Preis. Nach dem Fragewort folgt direkt das konjugierte Verb, dann das Subjekt.",
        examples: ["Wo ist die Selbstbedienungskasse?", "Wie viel kostet das zusammen?"],
      },
      {
        title: "Modalverb können und die Satzklammer",
        explanation:
          "Bei Modalverben wie „können“ steht das konjugierte Modalverb an Position 2, der eigentliche Infinitiv wandert ganz ans Satzende — das nennt man Satzklammer.",
        examples: ["Kann ich kontaktlos bezahlen?", "Können Sie den Preis noch einmal prüfen?"],
      },
      {
        title: "Höfliche Sie-Form",
        explanation:
          "An der Kasse spricht man die Kassiererin oder den Kassierer fast immer mit „Sie“ an. Das Verb bekommt dabei die gleiche Endung wie bei „sie“ (Plural): Sie haben, Sie möchten.",
        examples: ["Haben Sie eine Kundenkarte?", "Möchten Sie eine Tüte?"],
      },
      {
        title: "Zahlen, Preise und Geld",
        explanation:
          "Preise werden mit Zahl + Euro genannt. Das ist an der Kasse besonders wichtig, wenn man den Gesamtpreis oder das Wechselgeld nennt.",
        examples: ["Das macht 18 Euro 40.", "Hier sind 20 Euro. Das Wechselgeld, bitte."],
      },
    ],
    place_items: [],
  },

  scenes: [
    { id: "kasse-a1-s1", position: 1, german_text: "Ich stelle mich an der Kasse an.", translations: T("Stajem u red na kasi.", "Kasada sıraya giriyorum.", "Я стаю в чергу на касі.", "Mă așez la coadă la casă.", "أقف في الطابور عند الصندوق.") },
    { id: "kasse-a1-s2", position: 2, german_text: "Die Schlange ist heute lang.", translations: T("Red je danas dug.", "Sıra bugün uzun.", "Черга сьогодні довга.", "Coada este lungă azi.", "الطابور طويل اليوم.") },
    { id: "kasse-a1-s3", position: 3, german_text: "Ich lege meine Waren aufs Kassenband.", translations: T("Stavljam svoju robu na traku.", "Ürünlerimi kasa bandına koyuyorum.", "Я кладу свої товари на стрічку.", "Îmi pun produsele pe banda casei.", "أضع بضاعتي على سير الصندوق.") },
    { id: "kasse-a1-s4", position: 4, german_text: "Die Kassiererin scannt jedes Produkt.", translations: T("Kasirka skenira svaki proizvod.", "Kasiyer her ürünü okutuyor.", "Касирка сканує кожен товар.", "Casiera scanează fiecare produs.", "الكاشيرة تمسح كل منتج ضوئيًا.") },
    { id: "kasse-a1-s5", position: 5, german_text: "Haben Sie eine Kundenkarte?", translations: T("Imate li karticu lojalnosti?", "Sadakat kartınız var mı?", "У вас є картка лояльності?", "Aveți un card de fidelitate?", "هل لديك بطاقة ولاء؟") },
    { id: "kasse-a1-s6", position: 6, german_text: "Nein, ich habe keine Kundenkarte.", translations: T("Ne, nemam karticu lojalnosti.", "Hayır, sadakat kartım yok.", "Ні, у мене немає картки лояльності.", "Nu, nu am card de fidelitate.", "لا، ليس لدي بطاقة ولاء.") },
    { id: "kasse-a1-s7", position: 7, german_text: "Möchten Sie eine Tüte für die Waren?", translations: T("Želite li kesu za robu?", "Ürünler için poşet ister misiniz?", "Хочете пакет для товарів?", "Doriți o pungă pentru produse?", "هل تريد كيسًا للبضاعة؟") },
    { id: "kasse-a1-s8", position: 8, german_text: "Nein, danke, ich habe meine eigene Tasche.", translations: T("Ne, hvala, imam svoju torbu.", "Hayır, teşekkürler, kendi çantam var.", "Ні, дякую, у мене є своя сумка.", "Nu, mulțumesc, am propria mea geantă.", "لا شكرًا، لدي حقيبتي الخاصة.") },
    { id: "kasse-a1-s9", position: 9, german_text: "Das macht 18 Euro 40.", translations: T("To je 18 eura i 40 centi.", "Bu 18 avro 40 sent tutuyor.", "Це коштує 18 євро 40.", "Costă 18 euro și 40.", "المجموع 18 يورو و40 سنتًا.") },
    { id: "kasse-a1-s10", position: 10, german_text: "Bezahlen Sie bar, mit Karte oder kontaktlos?", translations: T("Plaćate li gotovinom, karticom ili beskontaktno?", "Nakit mi, kartla mı yoksa temassız mı ödeyeceksiniz?", "Ви платите готівкою, карткою чи безконтактно?", "Plătiți cash, cu cardul sau contactless?", "هل تدفع نقدًا أم بالبطاقة أم بدون تلامس؟") },
    { id: "kasse-a1-s11", position: 11, german_text: "Ich bezahle kontaktlos mit meiner Karte.", translations: T("Plaćam beskontaktno svojom karticom.", "Kartımla temassız ödüyorum.", "Я плачу безконтактно своєю карткою.", "Plătesc contactless cu cardul meu.", "أدفع بدون تلامس ببطاقتي.") },
    { id: "kasse-a1-s12", position: 12, german_text: "Bitte geben Sie Ihre PIN-Nummer ein.", translations: T("Molim vas unesite svoj PIN broj.", "Lütfen PIN numaranızı girin.", "Будь ласка, введіть свій PIN-код.", "Vă rog introduceți codul PIN.", "الرجاء إدخال رقم التعريف الشخصي.") },
    { id: "kasse-a1-s13", position: 13, german_text: "Ich sehe, der Preis für die Milch ist falsch.", translations: T("Vidim da cijena za mlijeko nije tačna.", "Sütün fiyatının yanlış olduğunu görüyorum.", "Я бачу, що ціна на молоко неправильна.", "Văd că prețul la lapte este greșit.", "أرى أن سعر الحليب غير صحيح.") },
    { id: "kasse-a1-s14", position: 14, german_text: "Entschuldigung, wir korrigieren das sofort.", translations: T("Izvinite, to ćemo odmah ispraviti.", "Özür dilerim, bunu hemen düzeltiyoruz.", "Вибачте, ми одразу це виправимо.", "Scuze, corectăm imediat.", "عذرًا، سنصحح ذلك فورًا.") },
    { id: "kasse-a1-s15", position: 15, german_text: "Hier ist Ihr Kassenbon. Auf Wiedersehen!", translations: T("Evo vašeg računa. Doviđenja!", "İşte fişiniz. Hoşça kalın!", "Ось ваш чек. До побачення!", "Iată bonul dumneavoastră. La revedere!", "تفضل إيصالك. إلى اللقاء!") },
  ],

  vocab: [
    { id: "kasse-a1-v1", position: 1, term: "Kasse", article: "die", plural: "die Kassen", word_class: "Nomen", example: "Ich stelle mich an der Kasse an.", translations: T("kasa", "kasa", "каса", "casă de marcat", "صندوق الدفع") },
    { id: "kasse-a1-v2", position: 2, term: "Kassenband", article: "das", plural: "die Kassenbänder", word_class: "Nomen", example: "Ich lege die Waren aufs Kassenband.", translations: T("traka na kasi", "kasa bandı", "стрічка каси", "banda casei", "سير الصندوق") },
    { id: "kasse-a1-v3", position: 3, term: "Kassiererin", article: "die", plural: "die Kassiererinnen", word_class: "Nomen", example: "Die Kassiererin scannt die Ware.", translations: T("kasirka", "kadın kasiyer", "касирка", "casieră", "الكاشيرة") },
    { id: "kasse-a1-v4", position: 4, term: "Kassierer", article: "der", plural: "die Kassierer", word_class: "Nomen", example: "Der Kassierer hilft mir.", translations: T("kasir", "erkek kasiyer", "касир", "casier", "الكاشير") },
    { id: "kasse-a1-v5", position: 5, term: "Schlange", article: "die", plural: "die Schlangen", word_class: "Nomen", example: "Die Schlange an der Kasse ist lang.", translations: T("red (čekanja)", "sıra", "черга", "coadă", "طابور") },
    { id: "kasse-a1-v6", position: 6, term: "Kundenkarte", article: "die", plural: "die Kundenkarten", word_class: "Nomen", example: "Haben Sie eine Kundenkarte?", translations: T("kartica lojalnosti", "sadakat kartı", "картка лояльності", "card de fidelitate", "بطاقة الولاء") },
    { id: "kasse-a1-v7", position: 7, term: "Kassenbon", article: "der", plural: "die Kassenbons", word_class: "Nomen", example: "Hier ist Ihr Kassenbon.", translations: T("račun", "kasa fişi", "чек", "bon fiscal", "إيصال") },
    { id: "kasse-a1-v8", position: 8, term: "PIN-Nummer", article: "die", plural: "die PIN-Nummern", word_class: "Nomen", example: "Geben Sie Ihre PIN-Nummer ein.", translations: T("PIN broj", "PIN numarası", "PIN-код", "cod PIN", "رقم التعريف الشخصي") },
    { id: "kasse-a1-v9", position: 9, term: "Wechselgeld", article: "das", plural: "—", word_class: "Nomen", example: "Hier ist Ihr Wechselgeld.", translations: T("kusur", "para üstü", "решта", "rest", "الباقي") },
    { id: "kasse-a1-v10", position: 10, term: "Tüte", article: "die", plural: "die Tüten", word_class: "Nomen", example: "Möchten Sie eine Tüte?", translations: T("kesa", "poşet", "пакет", "pungă", "كيس") },
    { id: "kasse-a1-v11", position: 11, term: "Tasche", article: "die", plural: "die Taschen", word_class: "Nomen", example: "Ich habe meine eigene Tasche.", translations: T("torba", "çanta", "сумка", "geantă", "حقيبة") },
    { id: "kasse-a1-v12", position: 12, term: "Karte", article: "die", plural: "die Karten", word_class: "Nomen", example: "Ich bezahle mit Karte.", translations: T("kartica", "kart", "картка", "card", "بطاقة") },
    { id: "kasse-a1-v13", position: 13, term: "Bargeld", article: "das", plural: "—", word_class: "Nomen", example: "Ich habe kein Bargeld dabei.", translations: T("gotovina", "nakit", "готівка", "bani cash", "نقود") },
    { id: "kasse-a1-v14", position: 14, term: "Preis", article: "der", plural: "die Preise", word_class: "Nomen", example: "Der Preis ist falsch.", translations: T("cijena", "fiyat", "ціна", "preț", "سعر") },
    { id: "kasse-a1-v15", position: 15, term: "Selbstbedienungskasse", article: "die", plural: "die Selbstbedienungskassen", word_class: "Nomen", example: "Ich gehe zur Selbstbedienungskasse.", translations: T("samouslužna kasa", "self servis kasa", "каса самообслуговування", "casă self-service", "صندوق الخدمة الذاتية") },
    { id: "kasse-a1-v16", position: 16, term: "Warenkorb", article: "der", plural: "die Warenkörbe", word_class: "Nomen", example: "Der Warenkorb ist voll.", translations: T("korpa za kupovinu", "alışveriş sepeti", "кошик покупок", "coș de cumpărături", "سلة المشتريات") },
    { id: "kasse-a1-v17", position: 17, term: "Rabatt", article: "der", plural: "die Rabatte", word_class: "Nomen", example: "Mit der Karte gibt es Rabatt.", translations: T("popust", "indirim", "знижка", "reducere", "خصم") },
    { id: "kasse-a1-v18", position: 18, term: "Bildschirm", article: "der", plural: "die Bildschirme", word_class: "Nomen", example: "Der Preis steht auf dem Bildschirm.", translations: T("ekran", "ekran", "екран", "ecran", "الشاشة") },
    { id: "kasse-a1-v19", position: 19, term: "scannen", word_class: "Verb", example: "Die Kassiererin scannt die Ware.", translations: T("skenirati", "taramak", "сканувати", "a scana", "يمسح ضوئيًا") },
    { id: "kasse-a1-v20", position: 20, term: "bezahlen", word_class: "Verb", example: "Ich bezahle an der Kasse.", translations: T("platiti", "ödemek", "платити", "a plăti", "يدفع") },
    { id: "kasse-a1-v21", position: 21, term: "einpacken", word_class: "Verb", example: "Ich packe die Waren ein.", translations: T("spakovati", "poşetlemek", "пакувати", "a împacheta", "يعبئ") },
    { id: "kasse-a1-v22", position: 22, term: "warten", word_class: "Verb", example: "Ich warte in der Schlange.", translations: T("čekati", "beklemek", "чекати", "a aștepta", "ينتظر") },
    { id: "kasse-a1-v23", position: 23, term: "kontaktlos", word_class: "Adjektiv", example: "Ich bezahle kontaktlos.", translations: T("beskontaktno", "temassız", "безконтактно", "contactless", "بدون تلامس") },
    { id: "kasse-a1-v24", position: 24, term: "bar", word_class: "Adjektiv", example: "Ich bezahle bar.", translations: T("gotovinom", "nakit", "готівкою", "cash", "نقدًا") },
    { id: "kasse-a1-v25", position: 25, term: "falsch", word_class: "Adjektiv", example: "Der Preis ist falsch.", translations: T("pogrešno", "yanlış", "неправильно", "greșit", "خاطئ") },
    { id: "kasse-a1-v26", position: 26, term: "richtig", word_class: "Adjektiv", example: "Jetzt ist der Preis richtig.", translations: T("tačno", "doğru", "правильно", "corect", "صحيح") },
    { id: "kasse-a1-v27", position: 27, term: "Portemonnaie", article: "das", plural: "die Portemonnaies", word_class: "Nomen", example: "Mein Portemonnaie ist leer.", translations: T("novčanik", "cüzdan", "гаманець", "portofel", "محفظة") },
    { id: "kasse-a1-v28", position: 28, term: "Eingabegerät", article: "das", plural: "die Eingabegeräte", word_class: "Nomen", example: "Geben Sie die PIN am Eingabegerät ein.", translations: T("uređaj za unos", "girdi cihazı", "пристрій для введення", "dispozitiv de introducere", "جهاز إدخال") },
  ],

  dialog: [
    { id: "kasse-a1-d1-1", position: 1, dialog_index: 1, dialog_title: "Dialog 1 · Warten und scannen", speaker: "Kassiererin", german_text: "Guten Tag! Legen Sie die Waren bitte aufs Band.", translations: T("Dobar dan! Molim vas stavite robu na traku.", "Merhaba! Lütfen ürünleri banda koyun.", "Доброго дня! Покладіть, будь ласка, товари на стрічку.", "Bună ziua! Puneți produsele pe bandă, vă rog.", "مرحبًا! ضع البضاعة على السير من فضلك.") },
    { id: "kasse-a1-d1-2", position: 2, dialog_index: 1, dialog_title: "Dialog 1 · Warten und scannen", speaker: "Kunde", german_text: "Ja, gern. Hier sind meine Waren.", translations: T("Da, rado. Evo moje robe.", "Evet, tabii. İşte ürünlerim.", "Так, охоче. Ось мої товари.", "Da, cu plăcere. Iată produsele mele.", "نعم بكل سرور. تفضل بضاعتي.") },
    { id: "kasse-a1-d1-3", position: 3, dialog_index: 1, dialog_title: "Dialog 1 · Warten und scannen", speaker: "Kassiererin", german_text: "Haben Sie eine Kundenkarte?", translations: T("Imate li karticu lojalnosti?", "Sadakat kartınız var mı?", "У вас є картка лояльності?", "Aveți un card de fidelitate?", "هل لديك بطاقة ولاء؟") },
    { id: "kasse-a1-d1-4", position: 4, dialog_index: 1, dialog_title: "Dialog 1 · Warten und scannen", speaker: "Kunde", german_text: "Nein, leider nicht. Ich habe keine Kundenkarte.", translations: T("Ne, nažalost ne. Nemam karticu lojalnosti.", "Hayır, maalesef yok. Sadakat kartım yok.", "Ні, на жаль, ні. У мене немає картки лояльності.", "Nu, din păcate nu. Nu am card de fidelitate.", "لا، للأسف لا. ليس لدي بطاقة ولاء.") },
    { id: "kasse-a1-d1-5", position: 5, dialog_index: 1, dialog_title: "Dialog 1 · Warten und scannen", speaker: "Kassiererin", german_text: "Kein Problem. Möchten Sie eine Tüte?", translations: T("Nema problema. Želite li kesu?", "Sorun değil. Poşet ister misiniz?", "Нічого страшного. Хочете пакет?", "Nicio problemă. Doriți o pungă?", "لا مشكلة. هل تريد كيسًا؟") },
    { id: "kasse-a1-d1-6", position: 6, dialog_index: 1, dialog_title: "Dialog 1 · Warten und scannen", speaker: "Kunde", german_text: "Nein, danke, ich habe meine eigene Tasche dabei.", translations: T("Ne, hvala, imam svoju torbu sa sobom.", "Hayır, teşekkürler, yanımda kendi çantam var.", "Ні, дякую, у мене є своя сумка.", "Nu, mulțumesc, am propria mea geantă la mine.", "لا شكرًا، معي حقيبتي الخاصة.") },
    { id: "kasse-a1-d1-7", position: 7, dialog_index: 1, dialog_title: "Dialog 1 · Warten und scannen", speaker: "Kassiererin", german_text: "Sehr gut. Das ist gut für die Umwelt.", translations: T("Vrlo dobro. To je dobro za okolinu.", "Çok iyi. Bu çevre için iyi.", "Дуже добре. Це добре для довкілля.", "Foarte bine. E bine pentru mediu.", "جيد جدًا. هذا مفيد للبيئة.") },
    { id: "kasse-a1-d1-8", position: 8, dialog_index: 1, dialog_title: "Dialog 1 · Warten und scannen", speaker: "Kunde", german_text: "Ja, das finde ich auch.", translations: T("Da, i ja to mislim.", "Evet, ben de öyle düşünüyorum.", "Так, я теж так думаю.", "Da, așa cred și eu.", "نعم، أعتقد ذلك أيضًا.") },
    { id: "kasse-a1-d1-9", position: 9, dialog_index: 1, dialog_title: "Dialog 1 · Warten und scannen", speaker: "Kassiererin", german_text: "So, alles ist gescannt. Das macht 18 Euro 40.", translations: T("Evo, sve je skenirano. To je 18 eura i 40 centi.", "İşte, her şey tarandı. Bu 18 avro 40 sent tutuyor.", "От, все відскановано. Це коштує 18 євро 40.", "Gata, totul e scanat. Costă 18 euro și 40.", "حسنًا، تم مسح كل شيء. المجموع 18 يورو و40 سنتًا.") },
    { id: "kasse-a1-d1-10", position: 10, dialog_index: 1, dialog_title: "Dialog 1 · Warten und scannen", speaker: "Kunde", german_text: "Gut, danke.", translations: T("Dobro, hvala.", "Tamam, teşekkürler.", "Добре, дякую.", "Bine, mulțumesc.", "حسنًا، شكرًا.") },
    { id: "kasse-a1-d1-11", position: 11, dialog_index: 1, dialog_title: "Dialog 1 · Warten und scannen", speaker: "Kassiererin", german_text: "Bezahlen Sie bar, mit Karte oder kontaktlos?", translations: T("Plaćate li gotovinom, karticom ili beskontaktno?", "Nakit mi, kartla mı yoksa temassız mı ödeyeceksiniz?", "Ви платите готівкою, карткою чи безконтактно?", "Plătiți cash, cu cardul sau contactless?", "هل تدفع نقدًا أم بالبطاقة أم بدون تلامس؟") },

    { id: "kasse-a1-d2-1", position: 1, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen und Problem", speaker: "Kunde", german_text: "Ich bezahle kontaktlos mit meiner Karte.", translations: T("Plaćam beskontaktno svojom karticom.", "Kartımla temassız ödüyorum.", "Я плачу безконтактно своєю карткою.", "Plătesc contactless cu cardul meu.", "أدفع بدون تلامس ببطاقتي.") },
    { id: "kasse-a1-d2-2", position: 2, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen und Problem", speaker: "Kassiererin", german_text: "Gut, bitte halten Sie die Karte an das Gerät.", translations: T("Dobro, molim vas prislonite karticu na uređaj.", "İyi, lütfen kartınızı cihaza tutun.", "Добре, будь ласка, прикладіть картку до пристрою.", "Bine, vă rog țineți cardul lângă aparat.", "حسنًا، الرجاء وضع البطاقة أمام الجهاز.") },
    { id: "kasse-a1-d2-3", position: 3, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen und Problem", speaker: "Kunde", german_text: "Moment, ich sehe hier einen falschen Preis.", translations: T("Trenutak, vidim ovdje pogrešnu cijenu.", "Bir dakika, burada yanlış bir fiyat görüyorum.", "Хвилинку, я бачу тут неправильну ціну.", "Un moment, văd aici un preț greșit.", "لحظة، أرى هنا سعرًا خاطئًا.") },
    { id: "kasse-a1-d2-4", position: 4, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen und Problem", speaker: "Kassiererin", german_text: "Zeigen Sie mir bitte, welches Produkt Sie meinen.", translations: T("Pokažite mi molim vas koji proizvod mislite.", "Lütfen hangi ürünü kastettiğinizi gösterin.", "Покажіть мені, будь ласка, який товар ви маєте на увазі.", "Arătați-mi vă rog ce produs aveți în vedere.", "أرني من فضلك المنتج الذي تقصده.") },
    { id: "kasse-a1-d2-5", position: 5, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen und Problem", speaker: "Kunde", german_text: "Die Milch hier. Der Bildschirm zeigt 2 Euro, aber das Regal zeigt 1 Euro 50.", translations: T("Ovo mlijeko. Ekran pokazuje 2 eura, ali polica pokazuje 1 euro 50.", "Bu süt. Ekran 2 avro gösteriyor, ama raf 1 avro 50 gösteriyor.", "Це молоко. Екран показує 2 євро, а полиця показує 1 євро 50.", "Laptele acesta. Ecranul arată 2 euro, dar raftul arată 1 euro 50.", "هذا الحليب. الشاشة تعرض 2 يورو، لكن الرف يعرض 1 يورو و50.") },
    { id: "kasse-a1-d2-6", position: 6, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen und Problem", speaker: "Kassiererin", german_text: "Entschuldigung, wir korrigieren das sofort.", translations: T("Izvinite, to ćemo odmah ispraviti.", "Özür dilerim, bunu hemen düzeltiyoruz.", "Вибачте, ми одразу це виправимо.", "Scuze, corectăm imediat.", "عذرًا، سنصحح ذلك فورًا.") },
    { id: "kasse-a1-d2-7", position: 7, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen und Problem", speaker: "Kunde", german_text: "Vielen Dank für die Hilfe.", translations: T("Hvala vam puno na pomoći.", "Yardımınız için çok teşekkürler.", "Дуже дякую за допомогу.", "Mulțumesc mult pentru ajutor.", "شكرًا جزيلاً على المساعدة.") },
    { id: "kasse-a1-d2-8", position: 8, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen und Problem", speaker: "Kassiererin", german_text: "Kein Problem. So, jetzt ist der Preis richtig.", translations: T("Nema problema. Evo, sada je cijena tačna.", "Sorun değil. İşte, şimdi fiyat doğru.", "Немає проблем. Ось, тепер ціна правильна.", "Nicio problemă. Gata, acum prețul este corect.", "لا مشكلة. الآن السعر صحيح.") },
    { id: "kasse-a1-d2-9", position: 9, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen und Problem", speaker: "Kunde", german_text: "Perfekt. Ich bezahle jetzt.", translations: T("Odlično. Sada plaćam.", "Mükemmel. Şimdi ödüyorum.", "Чудово. Тепер я плачу.", "Perfect. Plătesc acum.", "ممتاز. سأدفع الآن.") },
    { id: "kasse-a1-d2-10", position: 10, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen und Problem", speaker: "Kassiererin", german_text: "Hier ist Ihr Kassenbon. Auf Wiedersehen!", translations: T("Evo vašeg računa. Doviđenja!", "İşte fişiniz. Hoşça kalın!", "Ось ваш чек. До побачення!", "Iată bonul dumneavoastră. La revedere!", "تفضل إيصالك. إلى اللقاء!") },
    { id: "kasse-a1-d2-11", position: 11, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen und Problem", speaker: "Kunde", german_text: "Danke, Ihnen auch einen schönen Tag!", translations: T("Hvala, i vama lijep dan!", "Teşekkürler, size de iyi günler!", "Дякую, вам також гарного дня!", "Mulțumesc, o zi frumoasă și dumneavoastră!", "شكرًا، ولك أيضًا يومًا سعيدًا!") },
  ],

  questions: [
    // ===== Übungen (practice) =====
    { id: "kasse-a1-q1", position: 1, kind: "single_choice", section: "practice", prompt: "Was macht man zuerst an der Kasse?", explanation: "„Ich lege meine Waren aufs Kassenband.“ ist richtig.", data: H("Prvo se roba stavlja na traku.", "Önce ürünler banda konur.", "Спочатку товари кладуть на стрічку.", "Mai întâi se pun produsele pe bandă.", "أولاً تُوضع البضاعة على السير."), quiz_answers: [
      { id: "kasse-a1-q1-a1", position: 1, text: "Ich lege meine Waren aufs Kassenband.", is_correct: true },
      { id: "kasse-a1-q1-a2", position: 2, text: "Ich fahre mit dem Zug.", is_correct: false },
      { id: "kasse-a1-q1-a3", position: 3, text: "Ich gehe zum Arzt.", is_correct: false },
    ] },
    { id: "kasse-a1-q2", position: 2, kind: "single_choice", section: "practice", prompt: "Wie fragt die Kassiererin nach der Kundenkarte?", explanation: "„Haben Sie eine Kundenkarte?“ ist die passende Frage.", data: H("Ovo je uobičajeno pitanje na kasi.", "Bu, kasada sık sorulan bir soru.", "Це звичайне питання на касі.", "Aceasta este o întrebare obișnuită la casă.", "هذا سؤال شائع عند الصندوق."), quiz_answers: [
      { id: "kasse-a1-q2-a1", position: 1, text: "Haben Sie eine Kundenkarte?", is_correct: true },
      { id: "kasse-a1-q2-a2", position: 2, text: "Wie viel kostet der Bus?", is_correct: false },
      { id: "kasse-a1-q2-a3", position: 3, text: "Wo ist der Bahnhof?", is_correct: false },
    ] },
    { id: "kasse-a1-q3", position: 3, kind: "gap", section: "practice", prompt: "Ich lege die Waren aufs ___. (das Kassenband)", explanation: "Gemeint ist das Band an der Kasse: „das Kassenband“.", data: H("Misli se na traku na kasi.", "Kasadaki bant kastediliyor.", "Йдеться про стрічку на касі.", "Este vorba despre banda de la casă.", "المقصود سير الصندوق."), quiz_answers: [
      { id: "kasse-a1-q3-a1", position: 1, text: "Kassenband", is_correct: true },
    ] },
    { id: "kasse-a1-q4", position: 4, kind: "true_false", section: "practice", prompt: "Der Kunde bezahlt kontaktlos mit Karte.", explanation: "Richtig, im Dialog sagt der Kunde „Ich bezahle kontaktlos mit meiner Karte.“", data: H("U dijalogu kupac plaća beskontaktno.", "Diyalogda müşteri temassız ödeme yapıyor.", "У діалозі клієнт платить безконтактно.", "În dialog clientul plătește contactless.", "في الحوار يدفع الزبون بدون تلامس."), quiz_answers: [
      { id: "kasse-a1-q4-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-a1-q4-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-a1-q5", position: 5, kind: "single_choice", section: "practice", prompt: "Wie viel kostet der Einkauf?", explanation: "„Das macht 18 Euro 40.“", data: H("Cijena piše u tekstu: 18 eura 40.", "Fiyat metinde yazıyor: 18 avro 40.", "Ціна вказана в тексті: 18 євро 40.", "Prețul este în text: 18 euro 40.", "السعر مذكور في النص: 18 يورو و40."), quiz_answers: [
      { id: "kasse-a1-q5-a1", position: 1, text: "18 Euro 40", is_correct: true },
      { id: "kasse-a1-q5-a2", position: 2, text: "5 Euro", is_correct: false },
      { id: "kasse-a1-q5-a3", position: 3, text: "20 Euro", is_correct: false },
    ] },
    { id: "kasse-a1-q6", position: 6, kind: "single_choice", section: "practice", prompt: "Warum braucht der Kunde keine Tüte?", explanation: "„Ich habe meine eigene Tasche dabei.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-q6-a1", position: 1, text: "Er hat seine eigene Tasche dabei.", is_correct: true },
      { id: "kasse-a1-q6-a2", position: 2, text: "Er hat kein Geld.", is_correct: false },
      { id: "kasse-a1-q6-a3", position: 3, text: "Er kauft nichts.", is_correct: false },
    ] },
    { id: "kasse-a1-q7", position: 7, kind: "gap", section: "practice", prompt: "Ich brauche ein___ Tüte. (die Tüte, Akkusativ)", explanation: "die Tüte → im Akkusativ „eine Tüte“ — feminine Form ändert sich nicht.", data: H("die Tüte je ženskog roda, u akuzativu ostaje eine Tüte.", "die Tüte dişildir, akuzatifte eine Tüte olarak kalır.", "die Tüte жіночого роду, у знахідному залишається eine Tüte.", "die Tüte este feminin, la acuzativ rămâne eine Tüte.", "die Tüte مؤنثة، تبقى في حالة المفعول eine Tüte."), quiz_answers: [
      { id: "kasse-a1-q7-a1", position: 1, text: "e", is_correct: true },
    ] },
    { id: "kasse-a1-q8", position: 8, kind: "single_choice", section: "practice", prompt: "Der Kunde bezahlt an ___ Kasse. Welche Form passt?", explanation: "Nach „an“ (hier als feste Wendung „an der Kasse“) steht der Dativ: die Kasse → der Kasse.", data: H("Poslije „an“ dolazi dativ.", "„an“ dan sonra datif gelir.", "Після „an“ йде давальний відмінок.", "După „an“ urmează dativul.", "بعد „an“ يأتي حالة الجر (داتيف)."), quiz_answers: [
      { id: "kasse-a1-q8-a1", position: 1, text: "der", is_correct: true },
      { id: "kasse-a1-q8-a2", position: 2, text: "die", is_correct: false },
      { id: "kasse-a1-q8-a3", position: 3, text: "das", is_correct: false },
    ] },
    { id: "kasse-a1-q9", position: 9, kind: "single_choice", section: "practice", prompt: "Was ist an der Milch falsch?", explanation: "„Der Bildschirm zeigt 2 Euro, aber das Regal zeigt 1 Euro 50.“", data: H("Cijena na ekranu i na polici se ne poklapaju.", "Ekrandaki ve raftaki fiyat uyuşmuyor.", "Ціна на екрані і на полиці не збігається.", "Prețul de pe ecran și de pe raft nu se potrivesc.", "السعر على الشاشة والرف غير متطابقين."), quiz_answers: [
      { id: "kasse-a1-q9-a1", position: 1, text: "Der Preis ist falsch.", is_correct: true },
      { id: "kasse-a1-q9-a2", position: 2, text: "Die Milch ist alt.", is_correct: false },
      { id: "kasse-a1-q9-a3", position: 3, text: "Es gibt keine Milch mehr.", is_correct: false },
    ] },
    { id: "kasse-a1-q10", position: 10, kind: "single_choice", section: "practice", prompt: "Womit bezahlt der Kunde am Ende?", explanation: "Der Kunde bezahlt kontaktlos mit seiner Karte.", data: H("Kupac plaća beskontaktno karticom.", "Müşteri temassız kartla ödüyor.", "Клієнт платить безконтактно карткою.", "Clientul plătește contactless cu cardul.", "يدفع الزبون بدون تلامس ببطاقته."), quiz_answers: [
      { id: "kasse-a1-q10-a1", position: 1, text: "kontaktlos mit Karte", is_correct: true },
      { id: "kasse-a1-q10-a2", position: 2, text: "mit einem Scheck", is_correct: false },
      { id: "kasse-a1-q10-a3", position: 3, text: "mit einem Gutschein", is_correct: false },
    ] },

    // ===== Abschlusstest (40 Fragen) =====
    { id: "kasse-a1-t1", position: 1, kind: "single_choice", section: "test", prompt: "Was macht der Kunde zuerst an der Kasse?", explanation: "„Ich stelle mich an der Kasse an.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t1-a1", position: 1, text: "Er stellt sich an.", is_correct: true },
      { id: "kasse-a1-t1-a2", position: 2, text: "Er geht sofort nach Hause.", is_correct: false },
      { id: "kasse-a1-t1-a3", position: 3, text: "Er ruft den Chef an.", is_correct: false },
    ] },
    { id: "kasse-a1-t2", position: 2, kind: "true_false", section: "test", prompt: "Die Schlange an der Kasse ist heute lang.", explanation: "Richtig, das steht am Anfang des Textes.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t2-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-a1-t2-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-a1-t3", position: 3, kind: "gap", section: "test", prompt: "Die Kassiererin ___ jedes Produkt.", explanation: "Gemeint ist das Verb: „scannt“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t3-a1", position: 1, text: "scannt", is_correct: true },
    ] },
    { id: "kasse-a1-t4", position: 4, kind: "single_choice", section: "test", prompt: "Hat der Kunde eine Kundenkarte?", explanation: "„Nein, ich habe keine Kundenkarte.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t4-a1", position: 1, text: "Nein, er hat keine.", is_correct: true },
      { id: "kasse-a1-t4-a2", position: 2, text: "Ja, er zeigt sie sofort.", is_correct: false },
      { id: "kasse-a1-t4-a3", position: 3, text: "Er weiß es nicht.", is_correct: false },
    ] },
    { id: "kasse-a1-t5", position: 5, kind: "single_choice", section: "test", prompt: "Warum braucht der Kunde keine Tüte vom Laden?", explanation: "Er hat seine eigene Tasche dabei.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t5-a1", position: 1, text: "Er hat seine eigene Tasche.", is_correct: true },
      { id: "kasse-a1-t5-a2", position: 2, text: "Tüten sind verboten.", is_correct: false },
      { id: "kasse-a1-t5-a3", position: 3, text: "Er kauft nur eine Sache.", is_correct: false },
    ] },
    { id: "kasse-a1-t6", position: 6, kind: "single_choice", section: "test", prompt: "Wie viel kostet der Einkauf laut Dialog?", explanation: "„Das macht 18 Euro 40.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t6-a1", position: 1, text: "18 Euro 40", is_correct: true },
      { id: "kasse-a1-t6-a2", position: 2, text: "8 Euro", is_correct: false },
      { id: "kasse-a1-t6-a3", position: 3, text: "40 Euro", is_correct: false },
    ] },
    { id: "kasse-a1-t7", position: 7, kind: "true_false", section: "test", prompt: "Alle Preise sind sofort richtig.", explanation: "Falsch — bei der Milch ist ein Preis falsch.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t7-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "kasse-a1-t7-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "kasse-a1-t8", position: 8, kind: "single_choice", section: "test", prompt: "Womit möchte der Kunde bezahlen?", explanation: "„Ich bezahle kontaktlos mit meiner Karte.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t8-a1", position: 1, text: "kontaktlos mit Karte", is_correct: true },
      { id: "kasse-a1-t8-a2", position: 2, text: "mit einem Buch", is_correct: false },
      { id: "kasse-a1-t8-a3", position: 3, text: "mit einer Uhr", is_correct: false },
    ] },
    { id: "kasse-a1-t9", position: 9, kind: "single_choice", section: "test", prompt: "Was zeigt der Bildschirm bei der Milch?", explanation: "„Der Bildschirm zeigt 2 Euro.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t9-a1", position: 1, text: "2 Euro", is_correct: true },
      { id: "kasse-a1-t9-a2", position: 2, text: "1 Euro 50", is_correct: false },
      { id: "kasse-a1-t9-a3", position: 3, text: "5 Euro", is_correct: false },
    ] },
    { id: "kasse-a1-t10", position: 10, kind: "gap", section: "test", prompt: "Bezahlen Sie bar, mit Karte oder ___?", explanation: "Die Kassiererin fragt nach der dritten Möglichkeit: „kontaktlos“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t10-a1", position: 1, text: "kontaktlos", is_correct: true },
    ] },
    { id: "kasse-a1-t11", position: 11, kind: "single_choice", section: "test", prompt: "Was zeigt das Regal bei der Milch?", explanation: "„Das Regal zeigt 1 Euro 50.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t11-a1", position: 1, text: "1 Euro 50", is_correct: true },
      { id: "kasse-a1-t11-a2", position: 2, text: "2 Euro", is_correct: false },
      { id: "kasse-a1-t11-a3", position: 3, text: "3 Euro", is_correct: false },
    ] },
    { id: "kasse-a1-t12", position: 12, kind: "single_choice", section: "test", prompt: "Was passiert, nachdem der Kunde den falschen Preis bemerkt?", explanation: "Die Kassiererin korrigiert den Preis sofort.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t12-a1", position: 1, text: "Die Kassiererin korrigiert den Preis.", is_correct: true },
      { id: "kasse-a1-t12-a2", position: 2, text: "Der Kunde geht ohne die Milch.", is_correct: false },
      { id: "kasse-a1-t12-a3", position: 3, text: "Die Kasse schließt.", is_correct: false },
    ] },
    { id: "kasse-a1-t13", position: 13, kind: "single_choice", section: "test", prompt: "Was bedeutet „das Kassenband“?", explanation: "Das Band, auf das man die Waren an der Kasse legt.", data: H("Kassenband je traka na kasi za robu.", "Kassenband, kasadaki ürün bandıdır.", "Kassenband — стрічка на касі для товарів.", "Kassenband este banda de la casă pentru produse.", "Kassenband هو سير الصندوق لوضع البضاعة."), quiz_answers: [
      { id: "kasse-a1-t13-a1", position: 1, text: "das Band für die Waren an der Kasse", is_correct: true },
      { id: "kasse-a1-t13-a2", position: 2, text: "ein Getränk", is_correct: false },
      { id: "kasse-a1-t13-a3", position: 3, text: "ein Auto", is_correct: false },
    ] },
    { id: "kasse-a1-t14", position: 14, kind: "single_choice", section: "test", prompt: "Was ist „der Kassenbon“?", explanation: "Ein Beleg über den Einkauf, den man an der Kasse bekommt.", data: H("Kassenbon je potvrda o kupovini.", "Kasa fişi, alışverişin belgesidir.", "Чек - це документ про покупку.", "Bonul fiscal este dovada cumpărăturii.", "إيصال الشراء هو وثيقة عملية الشراء."), quiz_answers: [
      { id: "kasse-a1-t14-a1", position: 1, text: "ein Beleg für den Einkauf", is_correct: true },
      { id: "kasse-a1-t14-a2", position: 2, text: "ein Einkaufswagen", is_correct: false },
      { id: "kasse-a1-t14-a3", position: 3, text: "eine Tüte", is_correct: false },
    ] },
    { id: "kasse-a1-t15", position: 15, kind: "single_choice", section: "test", prompt: "Was macht man mit „der Karte“ an der Kasse?", explanation: "Mit der Karte bezahlt man.", data: H("Karticom se plaća.", "Kartla ödeme yapılır.", "Карткою платять.", "Cu cardul se plătește.", "بالبطاقة يُدفع."), quiz_answers: [
      { id: "kasse-a1-t15-a1", position: 1, text: "bezahlen", is_correct: true },
      { id: "kasse-a1-t15-a2", position: 2, text: "essen", is_correct: false },
      { id: "kasse-a1-t15-a3", position: 3, text: "waschen", is_correct: false },
    ] },
    { id: "kasse-a1-t16", position: 16, kind: "single_choice", section: "test", prompt: "Was ist das Gegenteil von „richtig“?", explanation: "Das Gegenteil von richtig ist falsch.", data: H("Suprotno od richtig je falsch.", "Richtig'ın zıttı falsch'tır.", "Протилежність до richtig — falsch.", "Opusul lui richtig este falsch.", "عكس richtig هو falsch."), quiz_answers: [
      { id: "kasse-a1-t16-a1", position: 1, text: "falsch", is_correct: true },
      { id: "kasse-a1-t16-a2", position: 2, text: "frisch", is_correct: false },
      { id: "kasse-a1-t16-a3", position: 3, text: "kalt", is_correct: false },
    ] },
    { id: "kasse-a1-t17", position: 17, kind: "gap", section: "test", prompt: "Der Kunde bezahlt am Ende ___. (mit Karte, ohne Berührung)", explanation: "„kontaktlos“ — man muss die Karte nicht in ein Gerät stecken.", data: H("Kontaktlos znači bez fizičkog kontakta.", "Kontaktlos, fiziksel temas olmadan demektir.", "Kontaktlos означає без фізичного контакту.", "Kontaktlos înseamnă fără contact fizic.", "Kontaktlos تعني بدون تلامس فعلي."), quiz_answers: [
      { id: "kasse-a1-t17-a1", position: 1, text: "kontaktlos", is_correct: true },
    ] },
    { id: "kasse-a1-t18", position: 18, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "die Kundenkarte ist feminin, im Akkusativ bleibt „eine Kundenkarte“.", data: H("die Kundenkarte je ženskog roda, u akuzativu ostaje eine Kundenkarte.", "die Kundenkarte dişildir, akuzatifte eine Kundenkarte kalır.", "die Kundenkarte жіночого роду, у знахідному залишається eine Kundenkarte.", "die Kundenkarte este feminin, la acuzativ rămâne eine Kundenkarte.", "die Kundenkarte مؤنثة، تبقى eine Kundenkarte."), quiz_answers: [
      { id: "kasse-a1-t18-a1", position: 1, text: "Ich habe eine Kundenkarte.", is_correct: true },
      { id: "kasse-a1-t18-a2", position: 2, text: "Ich habe ein Kundenkarte.", is_correct: false },
      { id: "kasse-a1-t18-a3", position: 3, text: "Ich habe einen Kundenkarte.", is_correct: false },
    ] },
    { id: "kasse-a1-t19", position: 19, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "„der Bon“ ist maskulin, im Akkusativ wird daraus „einen Bon“.", data: H("der Bon je muškog roda, u akuzativu postaje einen Bon.", "der Bon erildir, akuzatifte einen Bon olur.", "der Bon чоловічого роду, у знахідному стає einen Bon.", "der Bon este masculin, la acuzativ devine einen Bon.", "der Bon مذكر، يصبح einen Bon."), quiz_answers: [
      { id: "kasse-a1-t19-a1", position: 1, text: "Ich brauche einen Bon.", is_correct: true },
      { id: "kasse-a1-t19-a2", position: 2, text: "Ich brauche ein Bon.", is_correct: false },
      { id: "kasse-a1-t19-a3", position: 3, text: "Ich brauche eine Bon.", is_correct: false },
    ] },
    { id: "kasse-a1-t20", position: 20, kind: "single_choice", section: "test", prompt: "Ich bezahle ___ Karte. Welches Wort passt?", explanation: "„mit“ passt hier: man benutzt die Karte zum Bezahlen.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t20-a1", position: 1, text: "mit", is_correct: true },
      { id: "kasse-a1-t20-a2", position: 2, text: "für", is_correct: false },
      { id: "kasse-a1-t20-a3", position: 3, text: "ohne", is_correct: false },
    ] },
    { id: "kasse-a1-t21", position: 21, kind: "single_choice", section: "test", prompt: "Ich frage ___ Kassiererin. Welches Wort passt?", explanation: "„eine“ ist die Akkusativform von „die Kassiererin“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t21-a1", position: 1, text: "eine", is_correct: true },
      { id: "kasse-a1-t21-a2", position: 2, text: "einen", is_correct: false },
      { id: "kasse-a1-t21-a3", position: 3, text: "ein", is_correct: false },
    ] },
    { id: "kasse-a1-t22", position: 22, kind: "single_choice", section: "test", prompt: "Wie fragt man höflich, ob man kontaktlos zahlen kann?", explanation: "„Kann ich kontaktlos bezahlen?“ ist die höfliche Frage.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t22-a1", position: 1, text: "Kann ich kontaktlos bezahlen?", is_correct: true },
      { id: "kasse-a1-t22-a2", position: 2, text: "Bezahl ich kontaktlos?", is_correct: false },
      { id: "kasse-a1-t22-a3", position: 3, text: "Kontaktlos ich bezahlen kann?", is_correct: false },
    ] },
    { id: "kasse-a1-t23", position: 23, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "„Können Sie mir helfen?“ — das Verb „helfen“ steht am Ende.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t23-a1", position: 1, text: "Können Sie mir helfen?", is_correct: true },
      { id: "kasse-a1-t23-a2", position: 2, text: "Können helfen Sie mir?", is_correct: false },
      { id: "kasse-a1-t23-a3", position: 3, text: "Helfen können Sie mir?", is_correct: false },
    ] },
    { id: "kasse-a1-t24", position: 24, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "„meine Kundenkarte“ ist richtig, weil „die Kundenkarte“ feminin ist.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t24-a1", position: 1, text: "Ich habe meine Kundenkarte vergessen.", is_correct: true },
      { id: "kasse-a1-t24-a2", position: 2, text: "Ich habe mein Kundenkarte vergessen.", is_correct: false },
      { id: "kasse-a1-t24-a3", position: 3, text: "Ich habe meinen Kundenkarte vergessen.", is_correct: false },
    ] },
    { id: "kasse-a1-t25", position: 25, kind: "single_choice", section: "test", prompt: "Welches Wort passt: „___ ist die Selbstbedienungskasse?“", explanation: "„Wo“ fragt nach dem Ort.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t25-a1", position: 1, text: "Wo", is_correct: true },
      { id: "kasse-a1-t25-a2", position: 2, text: "Wer", is_correct: false },
      { id: "kasse-a1-t25-a3", position: 3, text: "Warum", is_correct: false },
    ] },
    { id: "kasse-a1-t26", position: 26, kind: "single_choice", section: "test", prompt: "Wer sagt im Dialog „Haben Sie eine Kundenkarte?“?", explanation: "Das sagt die Kassiererin.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t26-a1", position: 1, text: "die Kassiererin", is_correct: true },
      { id: "kasse-a1-t26-a2", position: 2, text: "der Kunde", is_correct: false },
      { id: "kasse-a1-t26-a3", position: 3, text: "niemand", is_correct: false },
    ] },
    { id: "kasse-a1-t27", position: 27, kind: "single_choice", section: "test", prompt: "Was antwortet der Kunde auf „Möchten Sie eine Tüte?“", explanation: "„Nein, danke, ich habe meine eigene Tasche.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t27-a1", position: 1, text: "Nein, danke, ich habe meine eigene Tasche.", is_correct: true },
      { id: "kasse-a1-t27-a2", position: 2, text: "Ja, ein Kilo bitte.", is_correct: false },
      { id: "kasse-a1-t27-a3", position: 3, text: "Der Zug fährt um acht.", is_correct: false },
    ] },
    { id: "kasse-a1-t28", position: 28, kind: "true_false", section: "test", prompt: "Die Kassiererin fragt, wie der Kunde bezahlen möchte.", explanation: "Richtig — sie fragt „Bezahlen Sie bar, mit Karte oder kontaktlos?“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a1-t28-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-a1-t28-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-a1-t29", position: 29, kind: "single_choice", section: "test", prompt: "Wie reagiert die Kassiererin auf den falschen Preis?", explanation: "„Entschuldigung, wir korrigieren das sofort.“", data: H("Uctivo se izvinjava i ispravlja grešku.", "Kibarca özür diler ve hatayı düzeltir.", "Ввічливо вибачається і виправляє помилку.", "Își cere politicos scuze și corectează greșeala.", "تعتذر بأدب وتصحح الخطأ."), quiz_answers: [
      { id: "kasse-a1-t29-a1", position: 1, text: "Entschuldigung, wir korrigieren das sofort.", is_correct: true },
      { id: "kasse-a1-t29-a2", position: 2, text: "Nein, das stimmt schon so.", is_correct: false },
      { id: "kasse-a1-t29-a3", position: 3, text: "Das ist nicht mein Problem.", is_correct: false },
    ] },
    { id: "kasse-a1-t30", position: 30, kind: "single_choice", section: "test", prompt: "Womit bezahlt man an der Kasse normalerweise?", explanation: "Bar, mit Karte oder kontaktlos — nicht mit einem Scheck.", data: H("Na kasi se obično plaća gotovinom, karticom ili beskontaktno.", "Kasada genelde nakit, kartla veya temassız ödenir.", "На касі зазвичай платять готівкою, карткою або безконтактно.", "La casă se plătește de obicei cash, cu cardul sau contactless.", "عادة يُدفع عند الصندوق نقدًا أو بالبطاقة أو بدون تلامس."), quiz_answers: [
      { id: "kasse-a1-t30-a1", position: 1, text: "bar, mit Karte oder kontaktlos", is_correct: true },
      { id: "kasse-a1-t30-a2", position: 2, text: "mit einem Scheck", is_correct: false },
      { id: "kasse-a1-t30-a3", position: 3, text: "mit einem Brief", is_correct: false },
    ] },
    { id: "kasse-a1-t31", position: 31, kind: "true_false", section: "test", prompt: "Bei kleinen kontaktlosen Zahlungen braucht man manchmal keine PIN-Nummer.", explanation: "Richtig — kleine Beträge kann man oft ohne PIN kontaktlos bezahlen.", data: H("Za male iznose ponekad nije potreban PIN.", "Küçük tutarlarda bazen PIN gerekmez.", "Для невеликих сум іноді не потрібен PIN.", "Pentru sume mici uneori nu e nevoie de PIN.", "للمبالغ الصغيرة أحيانًا لا حاجة لرقم PIN."), quiz_answers: [
      { id: "kasse-a1-t31-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-a1-t31-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-a1-t32", position: 32, kind: "true_false", section: "test", prompt: "Mit einer Kundenkarte bekommt man manchmal Rabatt.", explanation: "Richtig — Kundenkarten geben oft Rabatt oder Punkte.", data: H("Kartica lojalnosti ponekad daje popust.", "Sadakat kartı bazen indirim sağlar.", "Картка лояльності іноді дає знижку.", "Cardul de fidelitate oferă uneori reducere.", "بطاقة الولاء تمنح أحيانًا خصمًا."), quiz_answers: [
      { id: "kasse-a1-t32-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-a1-t32-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-a1-t33", position: 33, kind: "single_choice", section: "test", prompt: "Was braucht man normalerweise NICHT an der Kasse zu tun?", explanation: "Man muss an der Kasse kein Zugticket kaufen.", data: H("Voznu kartu ne kupujete na kasi.", "Kasada tren bileti almazsınız.", "Квиток на потяг не купують на касі.", "Nu cumperi bilet de tren la casă.", "لا تشتري تذكرة قطار عند الصندوق."), quiz_answers: [
      { id: "kasse-a1-t33-a1", position: 1, text: "ein Zugticket kaufen", is_correct: true },
      { id: "kasse-a1-t33-a2", position: 2, text: "die Waren bezahlen", is_correct: false },
      { id: "kasse-a1-t33-a3", position: 3, text: "einen Kassenbon bekommen", is_correct: false },
    ] },
    { id: "kasse-a1-t34", position: 34, kind: "single_choice", section: "test", prompt: "Was passt NICHT an eine Supermarktkasse?", explanation: "Ein Flugzeugsitz gehört nicht an eine Supermarktkasse.", data: H("Sjedište u avionu ne pripada kasi.", "Uçak koltuğu kasaya ait değil.", "Крісло літака не належить до каси.", "Scaunul de avion nu aparține casei.", "مقعد الطائرة لا ينتمي إلى الصندوق."), quiz_answers: [
      { id: "kasse-a1-t34-a1", position: 1, text: "ein Flugzeugsitz", is_correct: true },
      { id: "kasse-a1-t34-a2", position: 2, text: "ein Kassenband", is_correct: false },
      { id: "kasse-a1-t34-a3", position: 3, text: "ein Kassenbon", is_correct: false },
    ] },
    { id: "kasse-a1-t35", position: 35, kind: "single_choice", section: "test", prompt: "Warum sagt der Kunde etwas zum falschen Preis?", explanation: "Damit er nicht zu viel bezahlt.", data: H("Da ne bi platio previše.", "Fazla ödememek için.", "Щоб не переплатити.", "Ca să nu plătească prea mult.", "حتى لا يدفع أكثر من اللازم."), quiz_answers: [
      { id: "kasse-a1-t35-a1", position: 1, text: "Damit er nicht zu viel bezahlt.", is_correct: true },
      { id: "kasse-a1-t35-a2", position: 2, text: "Damit die Milch länger hält.", is_correct: false },
      { id: "kasse-a1-t35-a3", position: 3, text: "Es ist verboten, still zu sein.", is_correct: false },
    ] },
    { id: "kasse-a1-t36", position: 36, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "„einen Bon“ ist die korrekte Akkusativform von „der Bon“.", data: H("der Bon -> akuzativ: einen Bon.", "der Bon -> akuzatif: einen Bon.", "der Bon -> знахідний: einen Bon.", "der Bon -> acuzativ: einen Bon.", "der Bon -> حالة المفعول: einen Bon."), quiz_answers: [
      { id: "kasse-a1-t36-a1", position: 1, text: "Ich brauche einen Bon.", is_correct: true },
      { id: "kasse-a1-t36-a2", position: 2, text: "Ich brauche ein Bon.", is_correct: false },
      { id: "kasse-a1-t36-a3", position: 3, text: "Ich brauche der Bon.", is_correct: false },
    ] },
    { id: "kasse-a1-t37", position: 37, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "Nach „mit“ steht der Dativ: mit der Karte.", data: H("Poslije mit uvijek dolazi dativ: die Karte -> der Karte.", "mit sonrasi her zaman datif: die Karte -> der Karte.", "Після mit завжди давальний: die Karte -> der Karte.", "Dupa mit urmeaza mereu dativul: die Karte -> der Karte.", "بعد mit يأتي دائمًا حالة الجر: die Karte -> der Karte."), quiz_answers: [
      { id: "kasse-a1-t37-a1", position: 1, text: "Ich bezahle mit der Karte.", is_correct: true },
      { id: "kasse-a1-t37-a2", position: 2, text: "Ich bezahle mit die Karte.", is_correct: false },
      { id: "kasse-a1-t37-a3", position: 3, text: "Ich bezahle mit das Karte.", is_correct: false },
    ] },
    { id: "kasse-a1-t38", position: 38, kind: "gap", section: "test", prompt: "Haben ___ eine Kundenkarte? (höfliche Anrede)", explanation: "„Sie“ — die höfliche Anrede.", data: H("Uljudno oslovljavanje nepoznatih osoba je uvijek sa Sie.", "Tanımadığınız kişilere her zaman Sie ile hitap edilir.", "До незнайомих людей завжди звертаються на Sie.", "Adresarea politicoasă a persoanelor necunoscute este mereu cu Sie.", "مخاطبة الغرباء دائمًا تكون بصيغة Sie."), quiz_answers: [
      { id: "kasse-a1-t38-a1", position: 1, text: "Sie", is_correct: true },
    ] },
    { id: "kasse-a1-t39", position: 39, kind: "single_choice", section: "test", prompt: "Was ist die höfliche Bitte um Hilfe?", explanation: "„Können Sie mir helfen?“", data: H("Uctivo moli za pomoć.", "Yardım için nazikce rica ediyor.", "Ввічливо просить про допомогу.", "Roagă politicos ajutor.", "يطلب المساعدة بأدب."), quiz_answers: [
      { id: "kasse-a1-t39-a1", position: 1, text: "Können Sie mir helfen?", is_correct: true },
      { id: "kasse-a1-t39-a2", position: 2, text: "Hilf mir, du!", is_correct: false },
      { id: "kasse-a1-t39-a3", position: 3, text: "Ich brauche nie Hilfe.", is_correct: false },
    ] },
    { id: "kasse-a1-t40", position: 40, kind: "single_choice", section: "test", prompt: "Wie geht die Geschichte zu Ende?", explanation: "Der Kunde bezahlt kontaktlos, bekommt den Kassenbon und verabschiedet sich.", data: H("Na kraju price kupac plaća i oprašta se.", "Hikayenin sonunda musteri odeyip vedalasiyor.", "Наприкінці історії клієнт платить і прощається.", "La finalul povestii clientul plateste si isi ia la revedere.", "في نهاية القصة يدفع الزبون ويودّع."), quiz_answers: [
      { id: "kasse-a1-t40-a1", position: 1, text: "Der Kunde bezahlt und verabschiedet sich.", is_correct: true },
      { id: "kasse-a1-t40-a2", position: 2, text: "Der Kunde geht ohne zu bezahlen.", is_correct: false },
      { id: "kasse-a1-t40-a3", position: 3, text: "Der Kunde bleibt an der Kasse wohnen.", is_correct: false },
    ] },

    // ===== Sprache & Grammatik: zum Anklicken =====
    { id: "kasse-a1-g1", position: 1, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist richtig?", explanation: "der Bon ist männlich; nach „brauche“ (Akkusativ) wird daraus „einen Bon“.", data: H("der Bon je muškog roda; poslije brauche (akuzativ) postaje einen Bon.", "der Bon eril isimdir; brauche sonrasi (akuzatif) einen Bon olur.", "der Bon чоловічого роду; після brauche (знахідний) стає einen Bon.", "der Bon este masculin; dupa brauche (acuzativ) devine einen Bon.", "der Bon مذكر؛ بعد brauche (حالة المفعول) يصبح einen Bon."), quiz_answers: [
      { id: "kasse-a1-g1-a1", position: 1, text: "Ich brauche einen Bon.", is_correct: true },
      { id: "kasse-a1-g1-a2", position: 2, text: "Ich brauche ein Bon.", is_correct: false },
      { id: "kasse-a1-g1-a3", position: 3, text: "Ich brauche der Bon.", is_correct: false },
    ] },
    { id: "kasse-a1-g2", position: 2, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist richtig?", explanation: "die Kundenkarte ist feminin; im Akkusativ bleibt „eine Kundenkarte“ gleich.", data: H("die Kundenkarte je ženskog roda; u akuzativu ostaje eine Kundenkarte.", "die Kundenkarte disildir; akuzatifte eine Kundenkarte olarak kalir.", "die Kundenkarte жіночого роду; у знахідному залишається eine Kundenkarte.", "die Kundenkarte este feminin; la acuzativ ramane eine Kundenkarte.", "die Kundenkarte مؤنثة؛ تبقى eine Kundenkarte."), quiz_answers: [
      { id: "kasse-a1-g2-a1", position: 1, text: "Ich habe eine Kundenkarte.", is_correct: true },
      { id: "kasse-a1-g2-a2", position: 2, text: "Ich habe einen Kundenkarte.", is_correct: false },
      { id: "kasse-a1-g2-a3", position: 3, text: "Ich habe ein Kundenkarte.", is_correct: false },
    ] },
    { id: "kasse-a1-g3", position: 3, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist richtig?", explanation: "das Wechselgeld ist sächlich; im Akkusativ ändert es sich nicht.", data: H("das Wechselgeld je srednjeg roda; u akuzativu se ne mijenja.", "das Wechselgeld notrdur; akuzatifte degismez.", "das Wechselgeld середнього роду; у знахідному не змінюється.", "das Wechselgeld este neutru; la acuzativ nu se schimba.", "das Wechselgeld محايد؛ لا يتغير في حالة المفعول."), quiz_answers: [
      { id: "kasse-a1-g3-a1", position: 1, text: "Ich nehme das Wechselgeld.", is_correct: true },
      { id: "kasse-a1-g3-a2", position: 2, text: "Ich nehme den Wechselgeld.", is_correct: false },
      { id: "kasse-a1-g3-a3", position: 3, text: "Ich nehme eine Wechselgeld.", is_correct: false },
    ] },
    { id: "kasse-a1-g4", position: 4, kind: "single_choice", section: "grammar", prompt: "Welches Wort passt: „Ich bezahle ___ Karte.“?", explanation: "Nach „mit“ steht immer der Dativ: die Karte -> der Karte.", data: H("Poslije mit uvijek dolazi dativ: die Karte -> der Karte.", "mit sonrasi her zaman datif: die Karte -> der Karte.", "Після mit завжди давальний: die Karte -> der Карте.", "Dupa mit urmeaza mereu dativul: die Karte -> der Karte.", "بعد mit يأتي دائمًا حالة الجر: die Karte -> der Karte."), quiz_answers: [
      { id: "kasse-a1-g4-a1", position: 1, text: "mit", is_correct: true },
      { id: "kasse-a1-g4-a2", position: 2, text: "für", is_correct: false },
      { id: "kasse-a1-g4-a3", position: 3, text: "ohne", is_correct: false },
    ] },
    { id: "kasse-a1-g5", position: 5, kind: "single_choice", section: "grammar", prompt: "Welches Wort passt: „Ich frage ___ Kassierer.“?", explanation: "„einen“ ist die Akkusativform von „der Kassierer“.", data: H("der Kassierer je muškog roda, u akuzativu postaje einen Kassierer.", "der Kassierer eril isimdir, akuzatifte einen Kassierer olur.", "der Kassierer чоловічого роду, у знахідному стає einen Kassierer.", "der Kassierer este masculin, la acuzativ devine einen Kassierer.", "der Kassierer مذكر، يصبح einen Kassierer."), quiz_answers: [
      { id: "kasse-a1-g5-a1", position: 1, text: "einen", is_correct: true },
      { id: "kasse-a1-g5-a2", position: 2, text: "ein", is_correct: false },
      { id: "kasse-a1-g5-a3", position: 3, text: "eine", is_correct: false },
    ] },
    { id: "kasse-a1-g6", position: 6, kind: "single_choice", section: "grammar", prompt: "Welches Wort passt: „___ ist die Selbstbedienungskasse?“?", explanation: "„Wo“ fragt nach dem Ort.", data: H("Wo pita za mjesto.", "Wo yeri sorar.", "Wo запитує про місце.", "Wo intreaba despre loc.", "Wo يسأل عن المكان."), quiz_answers: [
      { id: "kasse-a1-g6-a1", position: 1, text: "Wo", is_correct: true },
      { id: "kasse-a1-g6-a2", position: 2, text: "Wer", is_correct: false },
      { id: "kasse-a1-g6-a3", position: 3, text: "Warum", is_correct: false },
    ] },
    { id: "kasse-a1-g7", position: 7, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist richtig?", explanation: "Bei Modalverben (können) steht der Infinitiv am Satzende.", data: H("Kod modalnih glagola (können) infinitiv ide na kraj recenice.", "Modal fiillerde (können) mastar cumlenin sonuna gider.", "У модальних дієсловах (können) інфінітив стоїть у кінці речення.", "La verbele modale (können) infinitivul sta la sfarsitul propozitiei.", "مع الأفعال الشرطية (können) يأتي المصدر في نهاية الجملة."), quiz_answers: [
      { id: "kasse-a1-g7-a1", position: 1, text: "Kann ich kontaktlos bezahlen?", is_correct: true },
      { id: "kasse-a1-g7-a2", position: 2, text: "Kann bezahlen ich kontaktlos?", is_correct: false },
      { id: "kasse-a1-g7-a3", position: 3, text: "Bezahlen kann ich kontaktlos?", is_correct: false },
    ] },
    { id: "kasse-a1-g8", position: 8, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist richtig?", explanation: "„meine Kundenkarte“ ist richtig, weil „die Kundenkarte“ feminin ist (meine mit -e).", data: H("die Kundenkarte je zenskog roda, zato meine sa -e.", "die Kundenkarte disildir, bu yuzden meine -e ile.", "die Kundenkarte жіночого роду, тому meine з -e.", "die Kundenkarte este feminin, de aceea meine cu -e.", "die Kundenkarte مؤنثة، لذلك meine بحرف -e."), quiz_answers: [
      { id: "kasse-a1-g8-a1", position: 1, text: "Ich habe meine Kundenkarte vergessen.", is_correct: true },
      { id: "kasse-a1-g8-a2", position: 2, text: "Ich habe mein Kundenkarte vergessen.", is_correct: false },
      { id: "kasse-a1-g8-a3", position: 3, text: "Ich habe meinen Kundenkarte vergessen.", is_correct: false },
    ] },

    // ===== Wo ist was? =====
    { id: "kasse-a1-p1", position: 1, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Kunde steht ___ der Kasse und wartet. Welche Präposition passt?", explanation: "„an“ (an + der) beschreibt: direkt bei der Kasse.", data: H("„an“ znači direktno kod kase.", "„an“ kasanın hemen yanında anlamına gelir.", "„an“ означає прямо біля каси.", "„an“ înseamnă chiar la casă.", "„an“ تعني عند الصندوق مباشرة."), quiz_answers: [
      { id: "kasse-a1-p1-a1", position: 1, text: "an", is_correct: true },
      { id: "kasse-a1-p1-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-a1-p1-a3", position: 3, text: "zwischen", is_correct: false },
    ] },
    { id: "kasse-a1-p2", position: 2, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Die Waren liegen ___ dem Kassenband. Welche Präposition passt?", explanation: "„auf“ beschreibt: oben auf dem Band liegend.", data: H("„auf“ znači na traci.", "„auf“ bandın üzerinde anlamına gelir.", "„auf“ означає на стрічці.", "„auf“ înseamnă pe bandă.", "„auf“ تعني على السير."), quiz_answers: [
      { id: "kasse-a1-p2-a1", position: 1, text: "auf", is_correct: true },
      { id: "kasse-a1-p2-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-a1-p2-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "kasse-a1-p3", position: 3, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Kassiererin steht ___ dem Kassenband. (hinter)", explanation: "Die Kassiererin steht hinter dem Band, gegenüber dem Kunden.", data: H("Kasirka stoji iza trake.", "Kasiyer bandın arkasında duruyor.", "Касирка стоїть позаду стрічки.", "Casiera stă în spatele benzii.", "تقف الكاشيرة خلف السير.") , quiz_answers: [
      { id: "kasse-a1-p3-a1", position: 1, text: "hinter", is_correct: true },
    ] },
    { id: "kasse-a1-p4", position: 4, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Das Eingabegerät für die PIN steht ___ der Kasse. Welche Präposition passt?", explanation: "„neben“ beschreibt: direkt neben der Kasse platziert.", data: H("„neben“ znači odmah pored kase.", "„neben“ kasanın hemen yanında anlamına gelir.", "„neben“ означає прямо біля каси.", "„neben“ înseamnă chiar lângă casă.", "„neben“ تعني بجانب الصندوق مباشرة."), quiz_answers: [
      { id: "kasse-a1-p4-a1", position: 1, text: "neben", is_correct: true },
      { id: "kasse-a1-p4-a2", position: 2, text: "über", is_correct: false },
      { id: "kasse-a1-p4-a3", position: 3, text: "unter", is_correct: false },
    ] },
    { id: "kasse-a1-p5", position: 5, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Bildschirm mit dem Preis hängt ___ der Kasse. Welche Präposition passt am besten?", explanation: "„über“ beschreibt: oberhalb der Kasse angebracht.", data: H("„über“ znači iznad kase.", "„über“ kasanın üzerinde anlamına gelir.", "„über“ означає над касою.", "„über“ înseamnă deasupra casei.", "„über“ تعني فوق الصندوق."), quiz_answers: [
      { id: "kasse-a1-p5-a1", position: 1, text: "über", is_correct: true },
      { id: "kasse-a1-p5-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-a1-p5-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "kasse-a1-p6", position: 6, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Die Schlange steht ___ der Kasse. Welche Präposition passt?", explanation: "„vor“ beschreibt: die Kunden warten vor der Kasse.", data: H("Red čeka ispred kase.", "Sıra kasanın önünde bekliyor.", "Черга чекає перед касою.", "Coada așteaptă în fața casei.", "الطابور ينتظر أمام الصندوق."), quiz_answers: [
      { id: "kasse-a1-p6-a1", position: 1, text: "vor", is_correct: true },
      { id: "kasse-a1-p6-a2", position: 2, text: "über", is_correct: false },
      { id: "kasse-a1-p6-a3", position: 3, text: "unter", is_correct: false },
    ] },
    { id: "kasse-a1-p7", position: 7, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Tüten liegen ___ der Kasse. (auf)", explanation: "„auf der Kasse“ — die Tüten liegen oben auf dem Kassentisch.", data: H("Kese leže na kasi.", "Poşetler kasanın üzerinde duruyor.", "Пакети лежать на касі.", "Pungile stau pe casă.", "الأكياس موضوعة على الصندوق."), quiz_answers: [
      { id: "kasse-a1-p7-a1", position: 1, text: "auf", is_correct: true },
    ] },
    { id: "kasse-a1-p8", position: 8, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Warenkorb steht ___ dem Kunden. Welche Präposition passt?", explanation: "„neben“ beschreibt: der Korb steht direkt neben der Person.", data: H("„neben“ znači pored osobe.", "„neben“ kişinin yanında anlamına gelir.", "„neben“ означає поруч з людиною.", "„neben“ înseamnă lângă persoană.", "„neben“ تعني بجانب الشخص."), quiz_answers: [
      { id: "kasse-a1-p8-a1", position: 1, text: "neben", is_correct: true },
      { id: "kasse-a1-p8-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-a1-p8-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "kasse-a1-p9", position: 9, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Kassenbon kommt ___ dem kleinen Drucker. Welche Präposition passt?", explanation: "„aus“ beschreibt: der Bon kommt aus dem Drucker heraus.", data: H("„aus“ znači izlazi iz uređaja.", "„aus“ cihazdan çıkıyor anlamına gelir.", "„aus“ означає виходить із пристрою.", "„aus“ înseamnă iese din aparat.", "„aus“ تعني يخرج من الجهاز."), quiz_answers: [
      { id: "kasse-a1-p9-a1", position: 1, text: "aus", is_correct: true },
      { id: "kasse-a1-p9-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-a1-p9-a3", position: 3, text: "zwischen", is_correct: false },
    ] },
    { id: "kasse-a1-p10", position: 10, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Selbstbedienungskasse steht ___ den normalen Kassen. (zwischen)", explanation: "„zwischen den Kassen“ — die Selbstbedienungskasse steht in der Mitte.", data: H("Samouslužna kasa je između redovnih kasa.", "Self servis kasa normal kasaların arasındadır.", "Каса самообслуговування розташована між звичайними касами.", "Casa self-service este între casele normale.", "صندوق الخدمة الذاتية بين الصناديق العادية."), quiz_answers: [
      { id: "kasse-a1-p10-a1", position: 1, text: "zwischen", is_correct: true },
    ] },
    { id: "kasse-a1-p11", position: 11, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht die Selbstbedienungskasse? Welche Präposition passt?", explanation: "Die Selbstbedienungskasse steht „in der Nähe des Ausgangs“.", data: H("Pogledaj sliku: samouslužna kasa je blizu izlaza.", "Resme bak: self servis kasa çıkışa yakın.", "Подивись на малюнок: каса самообслуговування біля виходу.", "Uită-te la imagine: casa self-service e lângă ieșire.", "انظر إلى الصورة: صندوق الخدمة الذاتية قرب المخرج."), quiz_answers: [
      { id: "kasse-a1-p11-a1", position: 1, text: "in der Nähe des Ausgangs", is_correct: true },
      { id: "kasse-a1-p11-a2", position: 2, text: "unter dem Ausgang", is_correct: false },
      { id: "kasse-a1-p11-a3", position: 3, text: "über dem Ausgang", is_correct: false },
    ] },
    { id: "kasse-a1-p12", position: 12, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht die Kassiererin? Welche Präposition passt?", explanation: "Die Kassiererin steht „hinter der Kasse“.", data: H("Kasirka stoji iza kase.", "Kasiyer kasanın arkasında duruyor.", "Касирка стоїть позаду каси.", "Casiera stă în spatele casei.", "تقف الكاشيرة خلف الصندوق."), quiz_answers: [
      { id: "kasse-a1-p12-a1", position: 1, text: "hinter der Kasse", is_correct: true },
      { id: "kasse-a1-p12-a2", position: 2, text: "vor der Kasse", is_correct: false },
      { id: "kasse-a1-p12-a3", position: 3, text: "unter der Kasse", is_correct: false },
    ] },
    { id: "kasse-a1-p13", position: 13, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Das Portemonnaie liegt ___ der Tasche. (in)", explanation: "Das Portemonnaie liegt innerhalb der Tasche.", data: H("Novčanik je u torbi.", "Cüzdan çantanın içinde.", "Гаманець лежить у сумці.", "Portofelul stă în geantă.", "المحفظة موجودة داخل الحقيبة."), quiz_answers: [
      { id: "kasse-a1-p13-a1", position: 1, text: "in", is_correct: true },
    ] },
    { id: "kasse-a1-p14", position: 14, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo hängt das Kartenlesegerät? Welche Präposition passt?", explanation: "Das Gerät hängt „neben dem Bildschirm“.", data: H("Uređaj za čitanje kartice visi pored ekrana.", "Kart okuyucu ekranın yanında asılı.", "Пристрій для карток висить біля екрана.", "Cititorul de card atârnă lângă ecran.", "قارئ البطاقة معلق بجانب الشاشة."), quiz_answers: [
      { id: "kasse-a1-p14-a1", position: 1, text: "neben dem Bildschirm", is_correct: true },
      { id: "kasse-a1-p14-a2", position: 2, text: "unter dem Bildschirm", is_correct: false },
      { id: "kasse-a1-p14-a3", position: 3, text: "in dem Bildschirm", is_correct: false },
    ] },
    { id: "kasse-a1-p15", position: 15, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo befindet sich die Kasse im Supermarkt? Welche Präposition passt?", explanation: "Die Kasse befindet sich „in der Nähe des Ausgangs“.", data: H("Kasa se nalazi blizu izlaza.", "Kasa çıkışın yakınında duruyor.", "Каса розташована біля виходу.", "Casa se află lângă ieșire.", "يقع الصندوق قرب المخرج."), quiz_answers: [
      { id: "kasse-a1-p15-a1", position: 1, text: "in der Nähe des Ausgangs", is_correct: true },
      { id: "kasse-a1-p15-a2", position: 2, text: "unter dem Ausgang", is_correct: false },
      { id: "kasse-a1-p15-a3", position: 3, text: "zwischen dem Ausgang", is_correct: false },
    ] },

    // ===== Dialog bauen =====
    { id: "kasse-a1-b1", position: 1, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 1 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: begrüßen → Kundenkarte fragen → Antwort → Tüte anbieten → Antwort.", data: { items: [
      "Kassiererin: Guten Tag! Legen Sie die Waren bitte aufs Band.",
      "Kunde: Ja, gern. Hier sind meine Waren.",
      "Kassiererin: Haben Sie eine Kundenkarte?",
      "Kunde: Nein, leider nicht. Ich habe keine Kundenkarte.",
      "Kassiererin: Kein Problem. Möchten Sie eine Tüte?",
    ] }, quiz_answers: [] },
    { id: "kasse-a1-b2", position: 2, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 2 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: bezahlen ankündigen → Fehler bemerken → zeigen → korrigieren → danken.", data: { items: [
      "Kunde: Ich bezahle kontaktlos mit meiner Karte.",
      "Kassiererin: Gut, bitte halten Sie die Karte an das Gerät.",
      "Kunde: Moment, ich sehe hier einen falschen Preis.",
      "Kassiererin: Zeigen Sie mir bitte, welches Produkt Sie meinen.",
      "Kunde: Danke, Ihnen auch einen schönen Tag!",
    ] }, quiz_answers: [] },
  ],
} as const;
