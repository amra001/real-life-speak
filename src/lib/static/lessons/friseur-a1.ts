const T = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ bks, tr, uk, ro, ar });
const H = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ help: T(bks, tr, uk, ro, ar) });

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
    grammar_topics: [
      "Artikel der/die/das",
      "Akkusativ nach haben/brauchen/nehmen",
      "Dativ nach Präpositionen",
      "W-Fragen",
      "Modalverb können",
      "Höfliche Sie-Form",
    ],
    grammar_notes: [
      {
        title: "Warum der, die oder das? — Artikel und Fälle",
        explanation:
          "Jedes deutsche Nomen hat ein festes Geschlecht: männlich (der), weiblich (die) oder sächlich (das). Das ändert sich nie — „der Termin“ bleibt immer männlich. Was sich ändert, ist die Form des Artikels, je nachdem welche Rolle das Nomen im Satz spielt (der Fall/Kasus). Im Nominativ (Subjekt, „wer/was?“) bleibt der Artikel wie im Wörterbuch: der Termin, die Schere, das Haar. Im Akkusativ (direktes Objekt, „wen/was?“) ändert sich nur die männliche Form: der → einen. Die weibliche und sächliche Form bleiben gleich.",
        examples: [
          "Nominativ: Der Termin ist um zehn Uhr. (der Termin bleibt der)",
          "Akkusativ: Ich habe einen Termin. (der → einen)",
          "Akkusativ: Ich habe eine Frage. (die bleibt eine)",
          "Akkusativ: Ich habe ein Problem. (das bleibt ein)",
        ],
      },
      {
        title: "Akkusativ nach haben, brauchen, nehmen, möchten",
        explanation:
          "Diese Verben verlangen fast immer den Akkusativ, weil danach ein direktes Objekt kommt (das, was man hat/braucht/nimmt). Deshalb heißt es „einen Termin“ (nicht „ein Termin“), weil „der Termin“ männlich ist und im Akkusativ zu „einen“ wird.",
        examples: [
          "Ich habe keinen Termin. (der Termin → keinen Termin)",
          "Ich brauche einen Haarschnitt. (der Haarschnitt → einen Haarschnitt)",
          "Ich nehme die Schere. (die Schere bleibt die)",
        ],
      },
      {
        title: "Dativ nach Präpositionen wie mit, bei, zu",
        explanation:
          "Nach bestimmten Präpositionen steht immer der Dativ — unabhängig davon, ob davor Nominativ oder Akkusativ stünde. Im Dativ wird „der“ zu „dem“, „die“ zu „der“, „das“ zu „dem“. Das gilt zum Beispiel nach mit, bei, zu, von, nach, aus.",
        examples: [
          "mit dem Kamm (der Kamm → dem Kamm)",
          "mit der Schere (die Schere → der Schere)",
          "beim Friseur (bei + dem = beim)",
        ],
      },
      {
        title: "Possessivartikel: Ihre Haare",
        explanation:
          "„Ihr/Ihre“ ist die höfliche Form von „dein/deine“ und bezieht sich auf die angesprochene Person (Sie). Die Endung richtet sich nach dem Nomen: „die Haare“ ist Plural, deshalb „Ihre Haare“.",
        examples: ["Wie möchten Sie Ihre Haare?", "Gefällt Ihnen Ihr Haarschnitt?"],
      },
      {
        title: "W-Fragen mit wie und wie viel",
        explanation:
          "„Wie“ fragt nach der Art oder dem Aussehen einer Sache, „wie viel“ nach einer Menge. Nach dem Fragewort folgt direkt das konjugierte Verb, dann das Subjekt.",
        examples: ["Wie möchten Sie Ihre Haare?", "Wie viel soll ich abschneiden?"],
      },
      {
        title: "Modalverb können und die Satzklammer",
        explanation:
          "Bei Modalverben wie „können“ steht das konjugierte Modalverb an Position 2, der eigentliche Infinitiv wandert ganz ans Satzende — das nennt man Satzklammer.",
        examples: ["Kann ich die Haare kürzer haben?", "Können Sie das bitte noch einmal sagen?"],
      },
      {
        title: "Höfliche Sie-Form",
        explanation:
          "Beim Friseur spricht man sich mit fremden Erwachsenen fast immer mit „Sie“ an. Das Verb bekommt dabei die gleiche Endung wie bei „sie“ (Plural): Sie möchten, Sie haben.",
        examples: ["Haben Sie einen Termin?", "Bitte setzen Sie sich."],
      },
      {
        title: "Zahlen, Maße und Preise",
        explanation:
          "Preise werden mit Zahl + Euro genannt, Längenmaße meist mit Zentimeter. Bei „nur“ betont man, dass es wenig ist.",
        examples: ["Das macht 25 Euro.", "Nur zwei Zentimeter, bitte."],
      },
    ],
    place_items: [],
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
    { id: "friseur-a1-v9", position: 9, term: "die Schere", article: "die", plural: "die Scheren", word_class: "Nomen", example: "Der Friseur nimmt die Schere.", translations: T("makaze", "makas", "ножиці", "foarfeca", "مقص") },
    { id: "friseur-a1-v10", position: 10, term: "der Kamm", article: "der", plural: "die Kämme", word_class: "Nomen", example: "Er kämmt die Haare mit dem Kamm.", translations: T("češalj", "tarak", "гребінець", "pieptenele", "مشط") },
    { id: "friseur-a1-v11", position: 11, term: "der Spiegel", article: "der", plural: "die Spiegel", word_class: "Nomen", example: "Der Kunde sitzt vor dem Spiegel.", translations: T("ogledalo", "ayna", "дзеркало", "oglinda", "مرآة") },
    { id: "friseur-a1-v12", position: 12, term: "waschen", word_class: "Verb", example: "Zuerst wäscht die Friseurin die Haare.", translations: T("prati", "yıkamak", "мити", "a spăla", "يغسل") },
  ],

  dialog: [
    { id: "friseur-a1-d1-1", position: 1, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Kunde", german_text: "Guten Tag, ich habe leider keinen Termin.", translations: T("Dobar dan, nažalost nemam termin.", "Merhaba, maalesef randevum yok.", "Доброго дня, на жаль, у мене немає запису.", "Bună ziua, din păcate nu am programare.", "مرحبًا، للأسف ليس لدي موعد.") },
    { id: "friseur-a1-d1-2", position: 2, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Friseurin", german_text: "Kein Problem, wir haben in zehn Minuten Zeit.", translations: T("Nema problema, imamo vremena za deset minuta.", "Sorun değil, on dakika sonra vaktimiz var.", "Не проблема, у нас буде час за десять хвилин.", "Nicio problemă, avem timp în zece minute.", "لا مشكلة، لدينا وقت بعد عشر دقائق.") },
    { id: "friseur-a1-d1-3", position: 3, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Kunde", german_text: "Das ist gut, danke.", translations: T("To je dobro, hvala.", "Bu iyi, teşekkürler.", "Це добре, дякую.", "Este bine, mulțumesc.", "هذا جيد، شكرًا.") },
    { id: "friseur-a1-d1-4", position: 4, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Friseurin", german_text: "Bitte, kommen Sie mit. Setzen Sie sich hier vor den Spiegel.", translations: T("Izvolite, pođite sa mnom. Sjednite ovdje ispred ogledala.", "Buyurun, benimle gelin. Aynanın önüne oturun.", "Прошу, ходімо зі мною. Сідайте тут перед дзеркалом.", "Poftiți, veniți cu mine. Luați loc aici, în fața oglinzii.", "تفضل، تعال معي. اجلس هنا أمام المرآة.") },
    { id: "friseur-a1-d1-5", position: 5, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Friseurin", german_text: "So, wie möchten Sie Ihre Haare?", translations: T("Dakle, kako želite svoju kosu?", "Peki, saçınızı nasıl istersiniz?", "Отже, як ви хочете зробити зачіску?", "Deci, cum doriți părul?", "إذن، كيف تريد شعرك؟") },
    { id: "friseur-a1-d1-6", position: 6, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Kunde", german_text: "Bitte nur die Spitzen, ungefähr zwei Zentimeter.", translations: T("Samo vrhove, molim, otprilike dva centimetra.", "Lütfen sadece uçları, yaklaşık iki santim.", "Лише кінчики, будь ласка, приблизно два сантиметри.", "Doar vârfurile, vă rog, aproximativ doi centimetri.", "الأطراف فقط من فضلك، حوالي سنتيمترين.") },
    { id: "friseur-a1-d1-7", position: 7, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Friseurin", german_text: "Gerne. Möchten Sie vorher noch eine Haarwäsche?", translations: T("Rado. Želite li prije toga i pranje kose?", "Elbette. Önce saç yıkamak ister misiniz?", "Із задоволенням. Бажаєте спочатку помити волосся?", "Cu plăcere. Doriți mai întâi și o spălare?", "بكل سرور. هل تريد أولاً غسل الشعر؟") },
    { id: "friseur-a1-d1-8", position: 8, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Kunde", german_text: "Ja, gerne, das wäre gut.", translations: T("Da, rado, to bi bilo dobro.", "Evet, olur, iyi olur.", "Так, будь ласка, це було б добре.", "Da, cu plăcere, ar fi bine.", "نعم، من فضلك، سيكون ذلك جيدًا.") },
    { id: "friseur-a1-d1-9", position: 9, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Friseurin", german_text: "Gut, dann gehen wir zuerst zum Waschbecken.", translations: T("Dobro, onda idemo prvo do umivaonika.", "Tamam, o zaman önce lavaboya gidelim.", "Добре, тоді спочатку підійдемо до раковини.", "Bine, atunci mergem mai întâi la chiuvetă.", "حسنًا، إذن لنذهب أولاً إلى الحوض.") },
    { id: "friseur-a1-d1-10", position: 10, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Friseurin", german_text: "Ist das Wasser zu warm oder zu kalt?", translations: T("Je li voda pretopla ili prehladna?", "Su çok mu sıcak yoksa çok mu soğuk?", "Вода занадто тепла чи занадто холодна?", "Apa este prea caldă sau prea rece?", "هل الماء ساخن جدًا أم بارد جدًا؟") },
    { id: "friseur-a1-d1-11", position: 11, dialog_index: 1, dialog_title: "Dialog 1 · Ankunft beim Friseur", speaker: "Kunde", german_text: "Nein, das ist genau richtig, danke.", translations: T("Ne, to je baš u redu, hvala.", "Hayır, tam kararında, teşekkürler.", "Ні, це саме те, що треба, дякую.", "Nu, este exact bine, mulțumesc.", "لا، هذا مناسب تمامًا، شكرًا.") },

    { id: "friseur-a1-d2-1", position: 1, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Friseurin", german_text: "So, fertig! Gefällt Ihnen der Haarschnitt?", translations: T("Eto, gotovo! Sviđa li vam se frizura?", "İşte, bitti! Saç kesiminizi beğendiniz mi?", "Ось, готово! Вам подобається стрижка?", "Gata! Vă place tunsoarea?", "ها قد انتهينا! هل يعجبك القص؟") },
    { id: "friseur-a1-d2-2", position: 2, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Kunde", german_text: "Ja, sehr gut, vielen Dank!", translations: T("Da, jako dobro, hvala vam puno!", "Evet, çok güzel, çok teşekkür ederim!", "Так, дуже добре, дуже дякую!", "Da, foarte bine, mulțumesc mult!", "نعم، جيد جدًا، شكرًا جزيلاً!") },
    { id: "friseur-a1-d2-3", position: 3, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Friseurin", german_text: "Möchten Sie noch etwas Haarspray oder Gel?", translations: T("Želite li još malo laka za kosu ili gela?", "Biraz saç spreyi veya jöle ister misiniz?", "Бажаєте ще трохи лаку для волосся чи гелю?", "Mai doriți puțin fixativ sau gel?", "هل تريد بعض رذاذ الشعر أو الجل؟") },
    { id: "friseur-a1-d2-4", position: 4, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Kunde", german_text: "Nein danke, das ist nicht nötig.", translations: T("Ne, hvala, to nije potrebno.", "Hayır teşekkürler, gerek yok.", "Ні, дякую, це не потрібно.", "Nu, mulțumesc, nu este necesar.", "لا شكرًا، ليس ضروريًا.") },
    { id: "friseur-a1-d2-5", position: 5, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Friseurin", german_text: "Gut. Das macht dann 25 Euro, bitte.", translations: T("Dobro. To je onda 25 eura, molim.", "Tamam. O zaman 25 avro, lütfen.", "Добре. Тоді це 25 євро, будь ласка.", "Bine. Atunci costă 25 de euro, vă rog.", "حسنًا. إذن المبلغ 25 يورو من فضلك.") },
    { id: "friseur-a1-d2-6", position: 6, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Kunde", german_text: "Kann ich mit Karte bezahlen?", translations: T("Mogu li platiti karticom?", "Kartla ödeyebilir miyim?", "Чи можу я заплатити карткою?", "Pot plăti cu cardul?", "هل يمكنني الدفع بالبطاقة؟") },
    { id: "friseur-a1-d2-7", position: 7, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Friseurin", german_text: "Ja, natürlich, kein Problem.", translations: T("Da, naravno, nema problema.", "Evet, tabii, sorun değil.", "Так, звісно, без проблем.", "Da, desigur, nicio problemă.", "نعم، بالطبع، لا مشكلة.") },
    { id: "friseur-a1-d2-8", position: 8, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Kunde", german_text: "Hier, bitte. Vielen Dank für den schönen Haarschnitt.", translations: T("Izvolite. Hvala vam puno na lijepoj frizuri.", "Buyurun. Güzel saç kesimi için çok teşekkürler.", "Прошу. Дуже дякую за гарну стрижку.", "Poftim. Mulțumesc mult pentru tunsoarea frumoasă.", "تفضل. شكرًا جزيلاً على القصة الجميلة.") },
    { id: "friseur-a1-d2-9", position: 9, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Friseurin", german_text: "Sehr gerne! Kommen Sie doch in sechs Wochen wieder.", translations: T("Vrlo rado! Dođite ponovo za šest sedmica.", "Rica ederim! Altı hafta sonra tekrar gelin.", "Із задоволенням! Приходьте знову через шість тижнів.", "Cu mare plăcere! Reveniți în șase săptămâni.", "بكل سرور! تعال مرة أخرى بعد ستة أسابيع.") },
    { id: "friseur-a1-d2-10", position: 10, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Kunde", german_text: "Das mache ich. Auf Wiedersehen!", translations: T("To ću i uraditi. Doviđenja!", "Öyle yapacağım. Hoşça kalın!", "Так і зроблю. До побачення!", "Așa voi face. La revedere!", "سأفعل ذلك. إلى اللقاء!") },
    { id: "friseur-a1-d2-11", position: 11, dialog_index: 2, dialog_title: "Dialog 2 · Zum Schluss", speaker: "Friseurin", german_text: "Auf Wiedersehen, einen schönen Tag noch!", translations: T("Doviđenja, prijatan dan još!", "Hoşça kalın, iyi günler!", "До побачення, гарного дня!", "La revedere, o zi frumoasă!", "إلى اللقاء، يومًا سعيدًا!") },
  ],

  questions: [
    // ===== Übungen (practice) =====
    { id: "friseur-a1-q1", position: 1, kind: "single_choice", section: "practice", prompt: "Was sagt man, wenn man keinen Termin hat?", explanation: "„Nein, ich habe keinen Termin.“ ist die passende Antwort.", data: H("Kada nemate termin, kažete: „Ich habe keinen Termin.“", "Randevunuz olmadığında şöyle dersiniz: „Ich habe keinen Termin.“", "Коли у вас немає запису, кажете: „Ich habe keinen Termin.“", "Când nu aveți programare, spuneți: „Ich habe keinen Termin.“", "عندما لا يكون لديك موعد، تقول: „Ich habe keinen Termin.“"), quiz_answers: [
      { id: "friseur-a1-q1-a1", position: 1, text: "Nein, ich habe keinen Termin.", is_correct: true },
      { id: "friseur-a1-q1-a2", position: 2, text: "Ich möchte eine Pizza bestellen.", is_correct: false },
      { id: "friseur-a1-q1-a3", position: 3, text: "Der Bus kommt um zehn Uhr.", is_correct: false },
    ] },
    { id: "friseur-a1-q2", position: 2, kind: "single_choice", section: "practice", prompt: "Wie fragt der Friseur nach dem gewünschten Haarschnitt?", explanation: "„Wie möchten Sie Ihre Haare?“ ist die passende Frage.", data: H("„Wie“ pita za način/izgled.", "„Wie“ şekli/görünüşü sorar.", "„Wie“ запитує про спосіб/вигляд.", "„Wie“ întreabă despre fel/aspect.", "„Wie“ يسأل عن الشكل/الطريقة."), quiz_answers: [
      { id: "friseur-a1-q2-a1", position: 1, text: "Wie möchten Sie Ihre Haare?", is_correct: true },
      { id: "friseur-a1-q2-a2", position: 2, text: "Wie viel kostet der Bus?", is_correct: false },
      { id: "friseur-a1-q2-a3", position: 3, text: "Wo ist der Bahnhof?", is_correct: false },
    ] },
    { id: "friseur-a1-q3", position: 3, kind: "gap", section: "practice", prompt: "Bitte nur die ___ schneiden.", explanation: "Gemeint sind die Haarenden: „die Spitzen“.", data: H("Misli se na krajeve kose.", "Saç uçları kastediliyor.", "Йдеться про кінчики волосся.", "Este vorba despre vârfurile părului.", "المقصود أطراف الشعر."), quiz_answers: [
      { id: "friseur-a1-q3-a1", position: 1, text: "Spitzen", is_correct: true },
    ] },
    { id: "friseur-a1-q4", position: 4, kind: "true_false", section: "practice", prompt: "Der Kunde möchte eine Haarwäsche.", explanation: "Im Dialog sagt der Kunde „Ja, gerne.“ zur Haarwäsche.", data: H("U dijalogu klijent kaže „Ja, gerne.“ na pranje kose.", "Diyalogda müşteri saç yıkamaya „Ja, gerne.“ diyor.", "У діалозі клієнт каже „Ja, gerne.“ щодо миття волосся.", "În dialog clientul spune „Ja, gerne.“ despre spălare.", "في الحوار يقول الزبون „Ja, gerne.“ عن غسل الشعر."), quiz_answers: [
      { id: "friseur-a1-q4-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-a1-q4-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-a1-q5", position: 5, kind: "single_choice", section: "practice", prompt: "Wie viel kostet der Haarschnitt?", explanation: "„Das macht 25 Euro.“", data: H("Preis steht im Text: 25 Euro.", "Fiyat metinde yazıyor: 25 avro.", "Ціна вказана в тексті: 25 євро.", "Prețul este în text: 25 de euro.", "السعر مذكور في النص: 25 يورو."), quiz_answers: [
      { id: "friseur-a1-q5-a1", position: 1, text: "25 Euro", is_correct: true },
      { id: "friseur-a1-q5-a2", position: 2, text: "10 Euro", is_correct: false },
      { id: "friseur-a1-q5-a3", position: 3, text: "50 Euro", is_correct: false },
    ] },
    { id: "friseur-a1-q6", position: 6, kind: "single_choice", section: "practice", prompt: "Was sagt man zum Abschied?", explanation: "„Auf Wiedersehen!“ ist die übliche Verabschiedung.", data: H("Uobičajen pozdrav pri odlasku.", "Ayrılırken kullanılan yaygın veda.", "Звичайне прощання при відході.", "Salutul obișnuit la despărțire.", "التحية المعتادة عند المغادرة."), quiz_answers: [
      { id: "friseur-a1-q6-a1", position: 1, text: "Auf Wiedersehen!", is_correct: true },
      { id: "friseur-a1-q6-a2", position: 2, text: "Guten Appetit!", is_correct: false },
      { id: "friseur-a1-q6-a3", position: 3, text: "Gute Nacht!", is_correct: false },
    ] },
    { id: "friseur-a1-q7", position: 7, kind: "gap", section: "practice", prompt: "Ich habe kein___ Termin. (der Termin, Akkusativ)", explanation: "der Termin → im Akkusativ „keinen Termin“.", data: H("der Termin → akuzativ: keinen Termin.", "der Termin → akuzatif: keinen Termin.", "der Termin → знахідний: keinen Termin.", "der Termin → acuzativ: keinen Termin.", "der Termin → في حالة المفعول: keinen Termin."), quiz_answers: [
      { id: "friseur-a1-q7-a1", position: 1, text: "en", is_correct: true },
    ] },
    { id: "friseur-a1-q8", position: 8, kind: "single_choice", section: "practice", prompt: "Der Friseur schneidet die Haare mit ___ Schere. Welche Form passt?", explanation: "Nach „mit“ steht immer der Dativ: die Schere → der Schere.", data: H("Poslije „mit“ uvijek dolazi dativ.", "„mit“ dan sonra her zaman datif gelir.", "Після „mit“ завжди йде давальний відмінок.", "După „mit“ urmează mereu dativul.", "بعد „mit“ يأتي دائمًا حالة الجر (داتيف)."), quiz_answers: [
      { id: "friseur-a1-q8-a1", position: 1, text: "der", is_correct: true },
      { id: "friseur-a1-q8-a2", position: 2, text: "die", is_correct: false },
      { id: "friseur-a1-q8-a3", position: 3, text: "das", is_correct: false },
    ] },
    { id: "friseur-a1-q9", position: 9, kind: "single_choice", section: "practice", prompt: "Was macht die Friseurin zuerst, bevor sie schneidet?", explanation: "Laut Dialog 1 geht sie zuerst mit der Kundin zum Waschbecken.", data: H("Zuerst wird gewaschen, dann geschnitten.", "Önce yıkanır, sonra kesilir.", "Спочатку миють, потім стрижуть.", "Mai întâi se spală, apoi se taie.", "أولاً يُغسل الشعر، ثم يُقص."), quiz_answers: [
      { id: "friseur-a1-q9-a1", position: 1, text: "Sie wäscht die Haare.", is_correct: true },
      { id: "friseur-a1-q9-a2", position: 2, text: "Sie bezahlt die Rechnung.", is_correct: false },
      { id: "friseur-a1-q9-a3", position: 3, text: "Sie verlässt den Salon.", is_correct: false },
    ] },
    { id: "friseur-a1-q10", position: 10, kind: "single_choice", section: "practice", prompt: "Womit bezahlt der Kunde am Ende?", explanation: "Der Kunde fragt: „Kann ich mit Karte bezahlen?“", data: H("Kunde pita za plaćanje karticom.", "Müşteri kartla ödemeyi soruyor.", "Клієнт запитує про оплату карткою.", "Clientul întreabă despre plata cu cardul.", "يسأل الزبون عن الدفع بالبطاقة."), quiz_answers: [
      { id: "friseur-a1-q10-a1", position: 1, text: "mit Karte", is_correct: true },
      { id: "friseur-a1-q10-a2", position: 2, text: "mit Bargeld", is_correct: false },
      { id: "friseur-a1-q10-a3", position: 3, text: "mit einem Gutschein", is_correct: false },
    ] },

    // ===== Abschlusstest (40 Fragen: Geschichte, Vokabular, Grammatik, Dialog, Wissen) =====
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
    { id: "friseur-a1-t5", position: 5, kind: "single_choice", section: "test", prompt: "Ich habe ein___ Frage. (die Frage, Akkusativ) Welche Endung?", explanation: "die Frage bleibt im Akkusativ „eine Frage“ — feminine Form ändert sich nicht.", data: null, quiz_answers: [
      { id: "friseur-a1-t5-a1", position: 1, text: "e", is_correct: true },
      { id: "friseur-a1-t5-a2", position: 2, text: "en", is_correct: false },
      { id: "friseur-a1-t5-a3", position: 3, text: "", is_correct: false },
    ] },
    { id: "friseur-a1-t6", position: 6, kind: "single_choice", section: "test", prompt: "Warum geht die Person zum Friseur?", explanation: "„Ich gehe zum Friseur, weil meine Haare zu lang sind.“", data: null, quiz_answers: [
      { id: "friseur-a1-t6-a1", position: 1, text: "Weil die Haare zu lang sind.", is_correct: true },
      { id: "friseur-a1-t6-a2", position: 2, text: "Weil sie eine Party hat.", is_correct: false },
      { id: "friseur-a1-t6-a3", position: 3, text: "Weil der Salon schließt.", is_correct: false },
    ] },
    { id: "friseur-a1-t7", position: 7, kind: "true_false", section: "test", prompt: "Der Kunde hat vorher einen Termin gebucht.", explanation: "Falsch — der Kunde kommt ohne Termin.", data: null, quiz_answers: [
      { id: "friseur-a1-t7-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "friseur-a1-t7-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "friseur-a1-t8", position: 8, kind: "single_choice", section: "test", prompt: "Wie lange muss der Kunde ohne Termin warten?", explanation: "„Wir haben in zehn Minuten Zeit.“", data: null, quiz_answers: [
      { id: "friseur-a1-t8-a1", position: 1, text: "zehn Minuten", is_correct: true },
      { id: "friseur-a1-t8-a2", position: 2, text: "eine Stunde", is_correct: false },
      { id: "friseur-a1-t8-a3", position: 3, text: "einen Tag", is_correct: false },
    ] },
    { id: "friseur-a1-t9", position: 9, kind: "single_choice", section: "test", prompt: "Wo setzt sich der Kunde hin?", explanation: "„Setzen Sie sich hier vor den Spiegel.“", data: null, quiz_answers: [
      { id: "friseur-a1-t9-a1", position: 1, text: "vor den Spiegel", is_correct: true },
      { id: "friseur-a1-t9-a2", position: 2, text: "neben die Tür", is_correct: false },
      { id: "friseur-a1-t9-a3", position: 3, text: "unter das Fenster", is_correct: false },
    ] },
    { id: "friseur-a1-t10", position: 10, kind: "gap", section: "test", prompt: "Ist das Wasser zu ___ oder zu kalt?", explanation: "Die Friseurin fragt nach der Wassertemperatur: „warm“.", data: null, quiz_answers: [
      { id: "friseur-a1-t10-a1", position: 1, text: "warm", is_correct: true },
    ] },
    { id: "friseur-a1-t11", position: 11, kind: "single_choice", section: "test", prompt: "Was bietet die Friseurin am Ende zusätzlich an?", explanation: "„Möchten Sie noch etwas Haarspray oder Gel?“", data: null, quiz_answers: [
      { id: "friseur-a1-t11-a1", position: 1, text: "Haarspray oder Gel", is_correct: true },
      { id: "friseur-a1-t11-a2", position: 2, text: "einen Kaffee", is_correct: false },
      { id: "friseur-a1-t11-a3", position: 3, text: "ein Buch", is_correct: false },
    ] },
    { id: "friseur-a1-t12", position: 12, kind: "single_choice", section: "test", prompt: "Wann soll der Kunde wiederkommen?", explanation: "„Kommen Sie doch in sechs Wochen wieder.“", data: null, quiz_answers: [
      { id: "friseur-a1-t12-a1", position: 1, text: "in sechs Wochen", is_correct: true },
      { id: "friseur-a1-t12-a2", position: 2, text: "morgen", is_correct: false },
      { id: "friseur-a1-t12-a3", position: 3, text: "nächstes Jahr", is_correct: false },
    ] },
    { id: "friseur-a1-t13", position: 13, kind: "single_choice", section: "test", prompt: "Was bedeutet „die Spitzen“?", explanation: "Die Spitzen sind die Enden der Haare.", data: null, quiz_answers: [
      { id: "friseur-a1-t13-a1", position: 1, text: "die Enden der Haare", is_correct: true },
      { id: "friseur-a1-t13-a2", position: 2, text: "die Wurzeln der Haare", is_correct: false },
      { id: "friseur-a1-t13-a3", position: 3, text: "die Farbe der Haare", is_correct: false },
    ] },
    { id: "friseur-a1-t14", position: 14, kind: "single_choice", section: "test", prompt: "Was ist „der Kamm“?", explanation: "Ein Werkzeug, mit dem man Haare kämmt/ordnet.", data: null, quiz_answers: [
      { id: "friseur-a1-t14-a1", position: 1, text: "Ein Werkzeug zum Kämmen", is_correct: true },
      { id: "friseur-a1-t14-a2", position: 2, text: "Ein Getränk", is_correct: false },
      { id: "friseur-a1-t14-a3", position: 3, text: "Ein Kleidungsstück", is_correct: false },
    ] },
    { id: "friseur-a1-t15", position: 15, kind: "single_choice", section: "test", prompt: "Was macht man mit „der Schere“?", explanation: "Mit der Schere schneidet man die Haare.", data: null, quiz_answers: [
      { id: "friseur-a1-t15-a1", position: 1, text: "Haare schneiden", is_correct: true },
      { id: "friseur-a1-t15-a2", position: 2, text: "Haare waschen", is_correct: false },
      { id: "friseur-a1-t15-a3", position: 3, text: "Haare färben", is_correct: false },
    ] },
    { id: "friseur-a1-t16", position: 16, kind: "single_choice", section: "test", prompt: "Was ist das Gegenteil von „lang“ bei Haaren?", explanation: "Das Gegenteil von lang ist kurz.", data: null, quiz_answers: [
      { id: "friseur-a1-t16-a1", position: 1, text: "kurz", is_correct: true },
      { id: "friseur-a1-t16-a2", position: 2, text: "warm", is_correct: false },
      { id: "friseur-a1-t16-a3", position: 3, text: "billig", is_correct: false },
    ] },
    { id: "friseur-a1-t17", position: 17, kind: "gap", section: "test", prompt: "Der Kunde sitzt vor dem ___. (er sieht sich selbst)", explanation: "„der Spiegel“ — man sieht sich darin.", data: null, quiz_answers: [
      { id: "friseur-a1-t17-a1", position: 1, text: "Spiegel", is_correct: true },
    ] },
    { id: "friseur-a1-t18", position: 18, kind: "single_choice", section: "test", prompt: "der Termin — welcher Artikel im Akkusativ nach „haben“?", explanation: "Männliche Nomen ändern sich im Akkusativ: der → einen.", data: null, quiz_answers: [
      { id: "friseur-a1-t18-a1", position: 1, text: "einen Termin", is_correct: true },
      { id: "friseur-a1-t18-a2", position: 2, text: "ein Termin", is_correct: false },
      { id: "friseur-a1-t18-a3", position: 3, text: "eine Termin", is_correct: false },
    ] },
    { id: "friseur-a1-t19", position: 19, kind: "single_choice", section: "test", prompt: "das Problem — welche Form im Akkusativ?", explanation: "Sächliche Nomen ändern sich im Akkusativ nicht: das bleibt ein.", data: null, quiz_answers: [
      { id: "friseur-a1-t19-a1", position: 1, text: "ein Problem", is_correct: true },
      { id: "friseur-a1-t19-a2", position: 2, text: "einen Problem", is_correct: false },
      { id: "friseur-a1-t19-a3", position: 3, text: "eine Problem", is_correct: false },
    ] },
    { id: "friseur-a1-t20", position: 20, kind: "single_choice", section: "test", prompt: "Welche Präposition verlangt immer den Dativ?", explanation: "„mit“ steht immer mit Dativ.", data: null, quiz_answers: [
      { id: "friseur-a1-t20-a1", position: 1, text: "mit", is_correct: true },
      { id: "friseur-a1-t20-a2", position: 2, text: "für", is_correct: false },
      { id: "friseur-a1-t20-a3", position: 3, text: "ohne", is_correct: false },
    ] },
    { id: "friseur-a1-t21", position: 21, kind: "single_choice", section: "test", prompt: "bei + dem = ?", explanation: "„bei dem“ verschmilzt zu „beim“.", data: null, quiz_answers: [
      { id: "friseur-a1-t21-a1", position: 1, text: "beim", is_correct: true },
      { id: "friseur-a1-t21-a2", position: 2, text: "bein", is_correct: false },
      { id: "friseur-a1-t21-a3", position: 3, text: "beis", is_correct: false },
    ] },
    { id: "friseur-a1-t22", position: 22, kind: "single_choice", section: "test", prompt: "Wie lautet die Sie-Form von „möchten“ in einer Frage?", explanation: "„Möchten Sie …?“ ist die höfliche Form.", data: null, quiz_answers: [
      { id: "friseur-a1-t22-a1", position: 1, text: "Möchten Sie …?", is_correct: true },
      { id: "friseur-a1-t22-a2", position: 2, text: "Möchtest du …?", is_correct: false },
      { id: "friseur-a1-t22-a3", position: 3, text: "Möchte ich …?", is_correct: false },
    ] },
    { id: "friseur-a1-t23", position: 23, kind: "single_choice", section: "test", prompt: "Wo steht der Infinitiv bei „Kann ich die Haare kürzer haben?“", explanation: "Bei Modalverben steht der Infinitiv am Satzende (Satzklammer).", data: null, quiz_answers: [
      { id: "friseur-a1-t23-a1", position: 1, text: "am Satzende", is_correct: true },
      { id: "friseur-a1-t23-a2", position: 2, text: "an Position 2", is_correct: false },
      { id: "friseur-a1-t23-a3", position: 3, text: "ganz am Anfang", is_correct: false },
    ] },
    { id: "friseur-a1-t24", position: 24, kind: "single_choice", section: "test", prompt: "„Ihre Haare“ — warum die Endung -e?", explanation: "„die Haare“ ist Plural, deshalb „Ihre“ mit -e.", data: null, quiz_answers: [
      { id: "friseur-a1-t24-a1", position: 1, text: "weil „Haare“ Plural ist", is_correct: true },
      { id: "friseur-a1-t24-a2", position: 2, text: "weil „Haare“ männlich ist", is_correct: false },
      { id: "friseur-a1-t24-a3", position: 3, text: "ohne Grund, Zufall", is_correct: false },
    ] },
    { id: "friseur-a1-t25", position: 25, kind: "single_choice", section: "test", prompt: "Welches Fragewort passt: „___ möchten Sie Ihre Haare?“", explanation: "„Wie“ fragt nach der Art.", data: null, quiz_answers: [
      { id: "friseur-a1-t25-a1", position: 1, text: "Wie", is_correct: true },
      { id: "friseur-a1-t25-a2", position: 2, text: "Wer", is_correct: false },
      { id: "friseur-a1-t25-a3", position: 3, text: "Warum", is_correct: false },
    ] },
    { id: "friseur-a1-t26", position: 26, kind: "single_choice", section: "test", prompt: "Wer sagt im Dialog „Guten Tag, ich habe leider keinen Termin.“?", explanation: "Das sagt der Kunde beim Betreten des Salons.", data: null, quiz_answers: [
      { id: "friseur-a1-t26-a1", position: 1, text: "der Kunde", is_correct: true },
      { id: "friseur-a1-t26-a2", position: 2, text: "die Friseurin", is_correct: false },
      { id: "friseur-a1-t26-a3", position: 3, text: "niemand", is_correct: false },
    ] },
    { id: "friseur-a1-t27", position: 27, kind: "single_choice", section: "test", prompt: "Was antwortet der Kunde auf „Möchten Sie noch etwas Haarspray oder Gel?“", explanation: "„Nein danke, das ist nicht nötig.“", data: null, quiz_answers: [
      { id: "friseur-a1-t27-a1", position: 1, text: "Nein danke, das ist nicht nötig.", is_correct: true },
      { id: "friseur-a1-t27-a2", position: 2, text: "Ja, ein Kilo bitte.", is_correct: false },
      { id: "friseur-a1-t27-a3", position: 3, text: "Der Zug fährt um acht.", is_correct: false },
    ] },
    { id: "friseur-a1-t28", position: 28, kind: "true_false", section: "test", prompt: "Der Kunde bekommt vor dem Schneiden eine Haarwäsche.", explanation: "Richtig — laut Dialog 1 wird zuerst gewaschen.", data: null, quiz_answers: [
      { id: "friseur-a1-t28-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-a1-t28-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-a1-t29", position: 29, kind: "single_choice", section: "test", prompt: "Wie reagiert die Friseurin auf die Bezahlung mit Karte?", explanation: "„Ja, natürlich, kein Problem.“", data: null, quiz_answers: [
      { id: "friseur-a1-t29-a1", position: 1, text: "Ja, natürlich, kein Problem.", is_correct: true },
      { id: "friseur-a1-t29-a2", position: 2, text: "Nein, das geht nicht.", is_correct: false },
      { id: "friseur-a1-t29-a3", position: 3, text: "Nur mit Bargeld.", is_correct: false },
    ] },
    { id: "friseur-a1-t30", position: 30, kind: "single_choice", section: "test", prompt: "Womit schneidet ein Friseur normalerweise die Haare?", explanation: "Mit einer Schere (manchmal auch mit einer Maschine) — nicht mit einer Nagelzange.", data: null, quiz_answers: [
      { id: "friseur-a1-t30-a1", position: 1, text: "mit einer Schere", is_correct: true },
      { id: "friseur-a1-t30-a2", position: 2, text: "mit einer Nagelzange", is_correct: false },
      { id: "friseur-a1-t30-a3", position: 3, text: "mit einem Löffel", is_correct: false },
    ] },
    { id: "friseur-a1-t31", position: 31, kind: "true_false", section: "test", prompt: "In Deutschland braucht man normalerweise eine Ausbildung, um als Friseur/Friseurin zu arbeiten.", explanation: "Richtig — Friseur ist ein anerkannter Ausbildungsberuf (meist 3 Jahre).", data: null, quiz_answers: [
      { id: "friseur-a1-t31-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-a1-t31-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-a1-t32", position: 32, kind: "true_false", section: "test", prompt: "Friseure müssen auf Hygiene achten, z. B. Werkzeuge zwischen Kunden reinigen.", explanation: "Richtig — das ist wichtig, um Infektionen zu vermeiden.", data: null, quiz_answers: [
      { id: "friseur-a1-t32-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-a1-t32-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-a1-t33", position: 33, kind: "single_choice", section: "test", prompt: "Was trägt ein Kunde beim Haareschneiden meistens, damit die Kleidung sauber bleibt?", explanation: "Einen Umhang/ein Cape, das über die Schultern gelegt wird.", data: null, quiz_answers: [
      { id: "friseur-a1-t33-a1", position: 1, text: "einen Umhang", is_correct: true },
      { id: "friseur-a1-t33-a2", position: 2, text: "einen Helm", is_correct: false },
      { id: "friseur-a1-t33-a3", position: 3, text: "einen Regenschirm", is_correct: false },
    ] },
    { id: "friseur-a1-t34", position: 34, kind: "single_choice", section: "test", prompt: "Was passt NICHT in einen Friseursalon?", explanation: "Ein Ofen zum Backen von Brot gehört in eine Bäckerei, nicht in einen Friseursalon.", data: null, quiz_answers: [
      { id: "friseur-a1-t34-a1", position: 1, text: "ein Ofen zum Brotbacken", is_correct: true },
      { id: "friseur-a1-t34-a2", position: 2, text: "ein Spiegel", is_correct: false },
      { id: "friseur-a1-t34-a3", position: 3, text: "eine Schere", is_correct: false },
    ] },
    { id: "friseur-a1-t35", position: 35, kind: "single_choice", section: "test", prompt: "Was ist ein guter Grund, vorher einen Termin zu machen?", explanation: "So muss man beim Friseur nicht warten.", data: null, quiz_answers: [
      { id: "friseur-a1-t35-a1", position: 1, text: "Man muss nicht warten.", is_correct: true },
      { id: "friseur-a1-t35-a2", position: 2, text: "Das Haar wächst schneller.", is_correct: false },
      { id: "friseur-a1-t35-a3", position: 3, text: "Es ist verboten, ohne Termin zu kommen.", is_correct: false },
    ] },
    { id: "friseur-a1-t36", position: 36, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "„einen Termin“ ist die korrekte Akkusativform von „der Termin“.", data: null, quiz_answers: [
      { id: "friseur-a1-t36-a1", position: 1, text: "Ich habe einen Termin.", is_correct: true },
      { id: "friseur-a1-t36-a2", position: 2, text: "Ich habe ein Termin.", is_correct: false },
      { id: "friseur-a1-t36-a3", position: 3, text: "Ich habe der Termin.", is_correct: false },
    ] },
    { id: "friseur-a1-t37", position: 37, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "Nach „mit“ steht der Dativ: mit der Schere.", data: null, quiz_answers: [
      { id: "friseur-a1-t37-a1", position: 1, text: "Sie schneidet mit der Schere.", is_correct: true },
      { id: "friseur-a1-t37-a2", position: 2, text: "Sie schneidet mit die Schere.", is_correct: false },
      { id: "friseur-a1-t37-a3", position: 3, text: "Sie schneidet mit das Schere.", is_correct: false },
    ] },
    { id: "friseur-a1-t38", position: 38, kind: "gap", section: "test", prompt: "Bitte setzen Sie ___. (höfliche Aufforderung, Sie-Form)", explanation: "„sich“ — Bitte setzen Sie sich.", data: null, quiz_answers: [
      { id: "friseur-a1-t38-a1", position: 1, text: "sich", is_correct: true },
    ] },
    { id: "friseur-a1-t39", position: 39, kind: "single_choice", section: "test", prompt: "Was ist die höfliche Bitte um Wiederholung?", explanation: "„Können Sie das bitte noch einmal sagen?“", data: null, quiz_answers: [
      { id: "friseur-a1-t39-a1", position: 1, text: "Können Sie das bitte noch einmal sagen?", is_correct: true },
      { id: "friseur-a1-t39-a2", position: 2, text: "Sag das nochmal, du!", is_correct: false },
      { id: "friseur-a1-t39-a3", position: 3, text: "Ich verstehe nie etwas.", is_correct: false },
    ] },
    { id: "friseur-a1-t40", position: 40, kind: "single_choice", section: "test", prompt: "Was ist die Hauptidee der ganzen Geschichte?", explanation: "Der Kunde geht spontan (ohne Termin) zum Friseur, lässt Haare waschen und schneiden und bezahlt zufrieden mit Karte.", data: null, quiz_answers: [
      { id: "friseur-a1-t40-a1", position: 1, text: "Ein spontaner Friseurbesuch ohne Termin, der gut endet.", is_correct: true },
      { id: "friseur-a1-t40-a2", position: 2, text: "Ein Streit im Restaurant.", is_correct: false },
      { id: "friseur-a1-t40-a3", position: 3, text: "Eine Zugfahrt in den Urlaub.", is_correct: false },
    ] },

    // ===== Wo ist was? =====
    { id: "friseur-a1-p1", position: 1, kind: "single_choice", section: "places", prompt: "Der Kunde sitzt ___ dem Spiegel. Welche Präposition passt am besten?", explanation: "„vor“ beschreibt: der Kunde ist vor dem Spiegel, mit Blick darauf.", data: H("„vor“ znači ispred nečega, s pogledom na to.", "„vor“ bir şeyin önünde, ona bakarak anlamına gelir.", "„vor“ означає перед чимось, дивлячись на це.", "„vor“ înseamnă în fața a ceva, privind spre el.", "„vor“ تعني أمام شيء ما، مع النظر إليه."), quiz_answers: [
      { id: "friseur-a1-p1-a1", position: 1, text: "vor", is_correct: true },
      { id: "friseur-a1-p1-a2", position: 2, text: "unter", is_correct: false },
      { id: "friseur-a1-p1-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "friseur-a1-p2", position: 2, kind: "single_choice", section: "places", prompt: "Die Schere liegt ___ dem Kamm auf dem Tisch. Welche Präposition passt?", explanation: "„neben“ beschreibt zwei Dinge direkt nebeneinander.", data: H("„neben“ znači jedno pored drugog.", "„neben“ yan yana anlamına gelir.", "„neben“ означає поруч одне з одним.", "„neben“ înseamnă unul lângă altul.", "„neben“ تعني بجانب بعضهما."), quiz_answers: [
      { id: "friseur-a1-p2-a1", position: 1, text: "neben", is_correct: true },
      { id: "friseur-a1-p2-a2", position: 2, text: "über", is_correct: false },
      { id: "friseur-a1-p2-a3", position: 3, text: "in", is_correct: false },
    ] },
    { id: "friseur-a1-p3", position: 3, kind: "gap", section: "places", prompt: "Der Friseur steht ___ dem Kunden. (hinter dem Stuhl)", explanation: "Der Friseur arbeitet von hinten am Kopf des Kunden: „hinter dem Kunden“.", data: H("Frizer radi iza glave klijenta.", "Kuaför müşterinin arkasında çalışır.", "Перукар працює позаду голови клієнта.", "Frizerul lucrează în spatele capului clientului.", "يعمل الحلاق خلف رأس الزبون."), quiz_answers: [
      { id: "friseur-a1-p3-a1", position: 1, text: "hinter", is_correct: true },
    ] },

    // ===== Dialog bauen =====
    { id: "friseur-a1-b1", position: 1, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 1 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Begrüßung → Termin-Info → Setzen → Wunsch äußern → Details klären.", data: { items: [
      "Kunde: Guten Tag, ich habe leider keinen Termin.",
      "Friseurin: Kein Problem, wir haben in zehn Minuten Zeit.",
      "Friseurin: Setzen Sie sich hier vor den Spiegel.",
      "Friseurin: Wie möchten Sie Ihre Haare?",
      "Kunde: Bitte nur die Spitzen, ungefähr zwei Zentimeter.",
    ] }, quiz_answers: [] },
    { id: "friseur-a1-b2", position: 2, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 2 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Ergebnis zeigen → Zusatzangebot → Preis → Bezahlen → Abschied.", data: { items: [
      "Friseurin: So, fertig! Gefällt Ihnen der Haarschnitt?",
      "Kunde: Ja, sehr gut, vielen Dank!",
      "Friseurin: Das macht dann 25 Euro, bitte.",
      "Kunde: Kann ich mit Karte bezahlen?",
      "Kunde: Auf Wiedersehen!",
    ] }, quiz_answers: [] },
  ],
} as const;
