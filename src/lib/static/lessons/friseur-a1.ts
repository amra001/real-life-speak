const T = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ bks, tr, uk, ro, ar });

export const friseurA1 = {
  lesson: {
    id: "781b7cb1-98a7-439d-9984-5faf528e0a05",
    slug: "friseur-a1",
    title: "Beim Friseur – A1",
    description:
      "Ein Besuch beim Friseur: Haarschnitt wünschen, Fragen beantworten, sich verabschieden.",
    level: "A1",
    region: "de",
    category_slug: "alltag",
    subcategory_slug: "friseur",
    topic_slug: "friseur",
    topic_title: "Beim Friseur",
    duration_seconds: 1800,
    thumbnail_key: null,
    video_url: null,
    is_premium: false,
    status: "published",
    popularity: 10,
    grammar_topics: ["W-Fragen", "Modalverb können", "Höfliche Sie-Form", "Zahlen und Preise"],
    grammar_notes: [
      {
        title: "W-Fragen mit wie",
        explanation: "„Wie“ fragt nach der Art oder dem Aussehen. Danach folgt meist das Verb.",
        examples: ["Wie möchten Sie Ihre Haare?", "Wie viel soll ich abschneiden?"],
      },
      {
        title: "Modalverb können",
        explanation: "Mit „kann/können“ fragt oder erlaubt man höflich etwas; der zweite Verb steht am Satzende.",
        examples: ["Kann ich die Hose anprobieren?", "Können Sie das bitte noch einmal sagen?"],
      },
      {
        title: "Höfliche Sie-Form",
        explanation: "Beim Friseur spricht man sich meist mit „Sie“ an — das ist höflich und üblich zwischen Fremden.",
        examples: ["Haben Sie einen Termin?", "Bitte setzen Sie sich."],
      },
      {
        title: "Zahlen und Preise",
        explanation: "Preise werden mit Zahl + Euro genannt; Maße oft mit Zentimeter.",
        examples: ["Das macht 25 Euro.", "Nur zwei Zentimeter, bitte."],
      },
    ],
    place_items: [
      {
        german_text: "Der Kunde sitzt auf dem Friseurstuhl vor dem Spiegel.",
        preposition: "vor",
        image_key: null,
        translations: T(
          "Klijent sjedi na frizerskoj stolici ispred ogledala.",
          "Müşteri aynanın önündeki kuaför koltuğunda oturuyor.",
          "Клієнт сидить у перукарському кріслі перед дзеркалом.",
          "Clientul stă pe scaunul de frizerie în fața oglinzii.",
          "يجلس الزبون على كرسي الحلاقة أمام المرآة."
        ),
      },
      {
        german_text: "Die Schere liegt neben dem Kamm auf dem kleinen Tisch.",
        preposition: "neben",
        image_key: null,
        translations: T(
          "Makaze leže pored češlja na malom stolu.",
          "Makas, küçük masanın üzerinde tarağın yanında duruyor.",
          "Ножиці лежать біля гребінця на маленькому столику.",
          "Foarfeca stă lângă pieptene pe măsuța mică.",
          "المقص بجانب المشط على الطاولة الصغيرة."
        ),
      },
    ],
  },

  scenes: [
    { id: "friseur-a1-s1", position: 1, german_text: "Ich gehe zum Friseur, weil meine Haare zu lang sind.", translations: T("Idem kod frizera jer mi je kosa predugačka.", "Saçlarım çok uzun olduğu için kuaföre gidiyorum.", "Я йду до перукаря, бо моє волосся задовге.", "Merg la frizer pentru că părul meu este prea lung.", "أذهب إلى الحلاق لأن شعري طويل جدًا.") },
    { id: "friseur-a1-s2", position: 2, german_text: "Guten Tag! Haben Sie einen Termin?", translations: T("Dobar dan! Imate li termin?", "Merhaba! Randevunuz var mı?", "Доброго дня! У вас є запис?", "Bună ziua! Aveți programare?", "مرحبًا! هل لديك موعد؟") },
    { id: "friseur-a1-s3", position: 3, german_text: "Nein, ich habe keinen Termin.", translations: T("Ne, nemam termin.", "Hayır, randevum yok.", "Ні, у мене немає запису.", "Nu, nu am programare.", "لا، ليس لدي موعد.") },
    { id: "friseur-a1-s4", position: 4, german_text: "Kein Problem. Bitte setzen Sie sich.", translations: T("Nema problema. Izvolite sjesti.", "Sorun değil. Lütfen oturun.", "Не проблема. Будь ласка, сідайте.", "Nicio problemă. Vă rog, luați loc.", "لا مشكلة. تفضل بالجلوس.") },
    { id: "friseur-a1-s5", position: 5, german_text: "Wie möchten Sie Ihre Haare?", translations: T("Kako želite svoju kosu?", "Saçınızı nasıl istersiniz?", "Як ви хочете зробити зачіску?", "Cum doriți părul?", "كيف تريد شعرك؟") },
    { id: "friseur-a1-s6", position: 6, german_text: "Bitte nur die Spitzen schneiden.", translations: T("Molim vas, samo šišajte vrhove.", "Lütfen sadece uçlarını kesin.", "Будь ласка, лише підстригти кінчики.", "Vă rog, tăiați doar vârfurile.", "من فضلك قص الأطراف فقط.") },
    { id: "friseur-a1-s7", position: 7, german_text: "Wie viel soll ich abschneiden? – Nur zwei Zentimeter, bitte.", translations: T("Koliko da odsječem? – Samo dva centimetra, molim.", "Ne kadar keseyim? – Sadece iki santim, lütfen.", "Скільки зрізати? – Лише два сантиметри, будь ласка.", "Cât să tai? – Doar doi centimetri, vă rog.", "كم يجب أن أقص؟ - سنتيمترين فقط من فضلك.") },
    { id: "friseur-a1-s8", position: 8, german_text: "Möchten Sie auch eine Haarwäsche?", translations: T("Želite li i pranje kose?", "Saç yıkama da ister misiniz?", "Бажаєте також помити волосся?", "Doriți și spălarea părului?", "هل تريد أيضًا غسل الشعر؟") },
    { id: "friseur-a1-s9", position: 9, german_text: "Ja, gerne.", translations: T("Da, rado.", "Evet, lütfen.", "Так, будь ласка.", "Da, cu plăcere.", "نعم، من فضلك.") },
    { id: "friseur-a1-s10", position: 10, german_text: "Das Wasser ist warm. Ist das okay?", translations: T("Voda je topla. Je li to u redu?", "Su ılık. Uygun mu?", "Вода тепла. Це нормально?", "Apa este caldă. Este în regulă?", "الماء دافئ. هل هذا مناسب؟") },
    { id: "friseur-a1-s11", position: 11, german_text: "Ja, das ist perfekt.", translations: T("Da, savršeno je.", "Evet, mükemmel.", "Так, ідеально.", "Da, este perfect.", "نعم، هذا ممتاز.") },
    { id: "friseur-a1-s12", position: 12, german_text: "So, fertig! Gefällt Ihnen der Haarschnitt?", translations: T("Eto, gotovo! Sviđa li vam se frizura?", "İşte, bitti! Saç kesiminizi beğendiniz mi?", "Ось, готово! Вам подобається стрижка?", "Gata! Vă place tunsoarea?", "ها قد انتهينا! هل يعجبك القص؟") },
    { id: "friseur-a1-s13", position: 13, german_text: "Ja, sehr gut. Vielen Dank!", translations: T("Da, jako dobro. Hvala vam puno!", "Evet, çok güzel. Çok teşekkür ederim!", "Так, дуже добре. Дуже дякую!", "Da, foarte bine. Mulțumesc mult!", "نعم، جيد جدًا. شكرًا جزيلاً!") },
    { id: "friseur-a1-s14", position: 14, german_text: "Das macht 25 Euro.", translations: T("To je 25 eura.", "Bu 25 avro tutuyor.", "Це коштує 25 євро.", "Costă 25 de euro.", "يبلغ ذلك 25 يورو.") },
    { id: "friseur-a1-s15", position: 15, german_text: "Hier, bitte. Auf Wiedersehen!", translations: T("Izvolite. Doviđenja!", "Buyurun. Hoşça kalın!", "Прошу. До побачення!", "Poftim. La revedere!", "تفضل. إلى اللقاء!") },
  ],

  vocab: [
    { id: "friseur-a1-v1", position: 1, term: "der Friseur", article: "der", plural: "die Friseure", word_class: "Nomen", example: "Ich gehe zum Friseur.", translations: T("frizer", "kuaför", "перукар", "frizer", "حلاق") },
    { id: "friseur-a1-v2", position: 2, term: "der Termin", article: "der", plural: "die Termine", word_class: "Nomen", example: "Haben Sie einen Termin?", translations: T("termin", "randevu", "запис", "programare", "موعد") },
    { id: "friseur-a1-v3", position: 3, term: "die Haare", article: "die", plural: "die Haare", word_class: "Nomen", example: "Meine Haare sind zu lang.", translations: T("kosa", "saç", "волосся", "părul", "الشعر") },
    { id: "friseur-a1-v4", position: 4, term: "die Spitzen", article: "die", plural: "die Spitzen", word_class: "Nomen", example: "Bitte nur die Spitzen schneiden.", translations: T("vrhovi", "uçlar", "кінчики", "vârfurile", "الأطراف") },
    { id: "friseur-a1-v5", position: 5, term: "schneiden", word_class: "Verb", example: "Können Sie die Haare schneiden?", translations: T("šišati", "kesmek", "стригти", "a tăia", "يقص") },
    { id: "friseur-a1-v6", position: 6, term: "die Haarwäsche", article: "die", plural: "die Haarwäschen", word_class: "Nomen", example: "Möchten Sie eine Haarwäsche?", translations: T("pranje kose", "saç yıkama", "миття волосся", "spălarea părului", "غسل الشعر") },
    { id: "friseur-a1-v7", position: 7, term: "der Zentimeter", article: "der", plural: "die Zentimeter", word_class: "Nomen", example: "Nur zwei Zentimeter, bitte.", translations: T("centimetar", "santim", "сантиметр", "centimetru", "سنتيمتر") },
    { id: "friseur-a1-v8", position: 8, term: "gefallen", word_class: "Verb", example: "Gefällt Ihnen der Haarschnitt?", translations: T("sviđati se", "beğenmek", "подобатися", "a-i plăcea", "يعجب") },
  ],

  dialog: [
    { id: "friseur-a1-d1-1", position: 1, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Kunde", german_text: "Guten Tag, ich habe leider keinen Termin.", translations: T("Dobar dan, nažalost nemam termin.", "Merhaba, maalesef randevum yok.", "Доброго дня, на жаль, у мене немає запису.", "Bună ziua, din păcate nu am programare.", "مرحبًا، للأسف ليس لدي موعد.") },
    { id: "friseur-a1-d1-2", position: 2, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Friseurin", german_text: "Kein Problem, bitte setzen Sie sich kurz.", translations: T("Nema problema, molim vas, sjednite na trenutak.", "Sorun değil, lütfen bir dakika oturun.", "Не проблема, будь ласка, присядьте на хвилинку.", "Nicio problemă, luați loc puțin.", "لا مشكلة، تفضل بالجلوس قليلاً.") },
    { id: "friseur-a1-d1-3", position: 3, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Friseurin", german_text: "So, wie möchten Sie Ihre Haare?", translations: T("Dakle, kako želite svoju kosu?", "Peki, saçınızı nasıl istersiniz?", "Отже, як ви хочете зробити зачіску?", "Deci, cum doriți părul?", "إذن، كيف تريد شعرك؟") },
    { id: "friseur-a1-d1-4", position: 4, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Kunde", german_text: "Bitte nur die Spitzen, ungefähr zwei Zentimeter.", translations: T("Samo vrhove, molim, otprilike dva centimetra.", "Lütfen sadece uçları, yaklaşık iki santim.", "Лише кінчики, будь ласка, приблизно два сантиметри.", "Doar vârfurile, vă rog, aproximativ doi centimetri.", "الأطراف فقط من فضلك، حوالي سنتيمترين.") },

    { id: "friseur-a1-d2-1", position: 1, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Friseurin", german_text: "So, fertig! Gefällt Ihnen der Haarschnitt?", translations: T("Eto, gotovo! Sviđa li vam se frizura?", "İşte, bitti! Saç kesiminizi beğendiniz mi?", "Ось, готово! Вам подобається стрижка?", "Gata! Vă place tunsoarea?", "ها قد انتهينا! هل يعجبك القص؟") },
    { id: "friseur-a1-d2-2", position: 2, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Kunde", german_text: "Ja, sehr gut, vielen Dank!", translations: T("Da, jako dobro, hvala vam puno!", "Evet, çok güzel, çok teşekkür ederim!", "Так, дуже добре, дуже дякую!", "Da, foarte bine, mulțumesc mult!", "نعم، جيد جدًا، شكرًا جزيلاً!") },
    { id: "friseur-a1-d2-3", position: 3, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Friseurin", german_text: "Das macht 25 Euro, bitte.", translations: T("To je 25 eura, molim.", "Bu 25 avro tutuyor, lütfen.", "Це коштує 25 євро, будь ласка.", "Costă 25 de euro, vă rog.", "يبلغ ذلك 25 يورو من فضلك.") },
    { id: "friseur-a1-d2-4", position: 4, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Kunde", german_text: "Hier, bitte. Auf Wiedersehen!", translations: T("Izvolite. Doviđenja!", "Buyurun. Hoşça kalın!", "Прошу. До побачення!", "Poftim. La revedere!", "تفضل. إلى اللقاء!") },
  ],

  questions: [
    { id: "friseur-a1-q1", position: 1, kind: "single_choice", section: "practice", prompt: "Was sagt man, wenn man keinen Termin hat?", explanation: "„Nein, ich habe keinen Termin.“ ist die passende Antwort.", data: null, quiz_answers: [
      { id: "friseur-a1-q1-a1", position: 1, text: "Nein, ich habe keinen Termin.", is_correct: true },
      { id: "friseur-a1-q1-a2", position: 2, text: "Ich möchte eine Pizza bestellen.", is_correct: false },
      { id: "friseur-a1-q1-a3", position: 3, text: "Der Bus kommt um zehn Uhr.", is_correct: false },
    ] },
    { id: "friseur-a1-q2", position: 2, kind: "single_choice", section: "practice", prompt: "Wie fragt der Friseur nach dem gewünschten Haarschnitt?", explanation: "„Wie möchten Sie Ihre Haare?“ ist die passende Frage.", data: null, quiz_answers: [
      { id: "friseur-a1-q2-a1", position: 1, text: "Wie möchten Sie Ihre Haare?", is_correct: true },
      { id: "friseur-a1-q2-a2", position: 2, text: "Wie viel kostet der Bus?", is_correct: false },
      { id: "friseur-a1-q2-a3", position: 3, text: "Wo ist der Bahnhof?", is_correct: false },
    ] },
    { id: "friseur-a1-q3", position: 3, kind: "gap", section: "practice", prompt: "Bitte nur die ___ schneiden.", explanation: "Gemeint sind die Haarenden: „die Spitzen“.", data: null, quiz_answers: [
      { id: "friseur-a1-q3-a1", position: 1, text: "Spitzen", is_correct: true },
    ] },
    { id: "friseur-a1-q4", position: 4, kind: "true_false", section: "practice", prompt: "Der Kunde möchte eine Haarwäsche.", explanation: "Im Dialog sagt der Kunde „Ja, gerne.“ zur Haarwäsche.", data: null, quiz_answers: [
      { id: "friseur-a1-q4-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-a1-q4-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-a1-q5", position: 5, kind: "single_choice", section: "practice", prompt: "Wie viel kostet der Haarschnitt?", explanation: "„Das macht 25 Euro.“", data: null, quiz_answers: [
      { id: "friseur-a1-q5-a1", position: 1, text: "25 Euro", is_correct: true },
      { id: "friseur-a1-q5-a2", position: 2, text: "10 Euro", is_correct: false },
      { id: "friseur-a1-q5-a3", position: 3, text: "50 Euro", is_correct: false },
    ] },
    { id: "friseur-a1-q6", position: 6, kind: "single_choice", section: "practice", prompt: "Was sagt man zum Abschied?", explanation: "„Auf Wiedersehen!“ ist die übliche Verabschiedung.", data: null, quiz_answers: [
      { id: "friseur-a1-q6-a1", position: 1, text: "Auf Wiedersehen!", is_correct: true },
      { id: "friseur-a1-q6-a2", position: 2, text: "Guten Appetit!", is_correct: false },
      { id: "friseur-a1-q6-a3", position: 3, text: "Gute Nacht!", is_correct: false },
    ] },

    { id: "friseur-a1-t1", position: 1, kind: "single_choice", section: "test", prompt: "Was fragt der Friseur zuerst?", explanation: "„Haben Sie einen Termin?“", data: null, quiz_answers: [
      { id: "friseur-a1-t1-a1", position: 1, text: "Haben Sie einen Termin?", is_correct: true },
      { id: "friseur-a1-t1-a2", position: 2, text: "Wie ist das Wetter?", is_correct: false },
      { id: "friseur-a1-t1-a3", position: 3, text: "Wo wohnen Sie?", is_correct: false },
    ] },
    { id: "friseur-a1-t2", position: 2, kind: "true_false", section: "test", prompt: "Der Kunde bezahlt 25 Euro.", explanation: "Richtig, das steht im Text.", data: null, quiz_answers: [
      { id: "friseur-a1-t2-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-a1-t2-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-a1-t3", position: 3, kind: "gap", section: "test", prompt: "Nur zwei ___, bitte.", explanation: "Gemeint ist die Maßeinheit: „Zentimeter“.", data: null, quiz_answers: [
      { id: "friseur-a1-t3-a1", position: 1, text: "Zentimeter", is_correct: true },
    ] },
    { id: "friseur-a1-t4", position: 4, kind: "single_choice", section: "test", prompt: "Welches Wort passt zu „die Haare schneiden“?", explanation: "„der Friseur“ ist die Person, die Haare schneidet.", data: null, quiz_answers: [
      { id: "friseur-a1-t4-a1", position: 1, text: "der Friseur", is_correct: true },
      { id: "friseur-a1-t4-a2", position: 2, text: "der Bäcker", is_correct: false },
      { id: "friseur-a1-t4-a3", position: 3, text: "der Busfahrer", is_correct: false },
    ] },
  ],
} as const;
