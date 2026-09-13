const T = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ bks, tr, uk, ro, ar });
const H = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ help: T(bks, tr, uk, ro, ar) });

export const friseurA2 = {
  lesson: {
    id: "3e9a2f5c-6b1d-4c8a-9f0e-2d7b5a4c8e19",
    slug: "friseur-a2",
    title: "Beim Friseur – A2",
    description:
      "Ein Besuch beim Friseur: den Wunschschnitt beschreiben, über Probleme sprechen, ein kleines Gespräch führen und bezahlen.",
    level: "A2",
    region: "de",
    category_slug: "alltag",
    subcategory_slug: "friseur",
    topic_slug: "friseur",
    topic_title: "Beim Friseur",
    duration_seconds: 1800,
    thumbnail_key: "friseur-salon",
    video_url: null,
    is_premium: false,
    status: "published",
    popularity: 10,
    grammar_topics: [
      "Perfekt mit haben/sein",
      "Nebensätze mit weil/dass",
      "Wechselpräpositionen",
      "Adjektivdeklination (Grundlagen)",
      "Trennbare Verben",
      "Komparativ",
    ],
    grammar_notes: [
      {
        title: "Perfekt mit haben",
        explanation:
          "Die meisten Verben bilden das Perfekt mit „haben“ + Partizip II. Das Partizip steht am Satzende, „haben“ konjugiert an Position 2. Das brauchst du, um über Dinge zu sprechen, die schon passiert sind — zum Beispiel den letzten Friseurbesuch.",
        examples: [
          "Ich habe einen Termin gemacht.",
          "Die Friseurin hat meine Haare gewaschen.",
          "Wir haben lange gewartet.",
        ],
      },
      {
        title: "Perfekt mit sein",
        explanation:
          "Verben der Bewegung oder Zustandsänderung (gehen, kommen, werden) bilden das Perfekt mit „sein“. Ob ein Verb „sein“ oder „haben“ nimmt, muss man meist einfach lernen.",
        examples: [
          "Ich bin zum Friseur gegangen.",
          "Sie ist pünktlich gekommen.",
          "Der Termin ist schnell vorbei gewesen.",
        ],
      },
      {
        title: "Nebensätze mit weil",
        explanation:
          "„Weil“ leitet einen Grund ein. Im Nebensatz steht das konjugierte Verb ganz am Ende — anders als im Hauptsatz. Das erlaubt längere, natürlichere Erklärungen als einfache Hauptsätze.",
        examples: [
          "Ich gehe zum Friseur, weil meine Haare zu lang geworden sind.",
          "Sie ist zufrieden, weil der Schnitt gut aussieht.",
        ],
      },
      {
        title: "Nebensätze mit dass",
        explanation:
          "„Dass“ leitet einen Nebensatz ein, der etwas beschreibt, das jemand sagt, denkt oder möchte. Auch hier steht das Verb am Ende des Nebensatzes.",
        examples: [
          "Ich finde, dass der Haarschnitt sehr gut aussieht.",
          "Die Friseurin sagt, dass die Farbe gut hält.",
        ],
      },
      {
        title: "Wechselpräpositionen: in, an, auf, vor, hinter, neben, zwischen, über, unter",
        explanation:
          "Diese neun Präpositionen können mit Akkusativ ODER Dativ stehen. Die Regel: Bewegung/Richtung (wohin?) → Akkusativ. Ort/Position (wo?) → Dativ. Vergleiche: „Ich setze mich auf den Stuhl“ (wohin? → Akkusativ) vs. „Ich sitze auf dem Stuhl“ (wo? → Dativ).",
        examples: [
          "Wohin? Sie setzt sich vor den Spiegel. (Akkusativ)",
          "Wo? Sie sitzt vor dem Spiegel. (Dativ)",
          "Wohin? Er hängt den Umhang an die Wand. (Akkusativ)",
          "Wo? Der Umhang hängt an der Wand. (Dativ)",
        ],
      },
      {
        title: "Adjektivdeklination nach dem bestimmten Artikel",
        explanation:
          "Nach „der/die/das“ bekommt das Adjektiv meist die Endung -e (Nominativ Singular) oder -en (in vielen anderen Fällen). Nach dem unbestimmten Artikel (ein/eine) ändern sich die Endungen etwas anders. Für A2 reicht es, die häufigsten Muster zu erkennen.",
        examples: [
          "der kurze Haarschnitt (Nominativ, maskulin)",
          "die neue Frisur (Nominativ, feminin)",
          "mit dem neuen Shampoo (Dativ)",
        ],
      },
      {
        title: "Trennbare Verben",
        explanation:
          "Verben wie „abschneiden“, „aussehen“, „anprobieren“ trennen ihre Vorsilbe im Hauptsatz: Die Vorsilbe wandert ans Satzende, das restliche Verb bleibt an Position 2.",
        examples: [
          "Ich schneide die Spitzen ab.",
          "Die neue Frisur sieht gut aus.",
          "Probieren Sie den Pony einmal an.",
        ],
      },
      {
        title: "Komparativ bei Adjektiven",
        explanation:
          "Der Komparativ vergleicht zwei Dinge und wird meist mit -er gebildet; kurze Adjektive bekommen oft einen Umlaut. Nach dem Komparativ steht „als“.",
        examples: [
          "Die Haare sind jetzt kürzer als vorher.",
          "Dieser Farbton ist länger haltbar als der alte.",
        ],
      },
    ],
    place_items: [],
  },

  scenes: [
    { id: "friseur-a2-s1", position: 1, german_text: "Ich habe einen Termin gemacht, weil meine Haare seit Monaten nicht geschnitten wurden.", translations: T("Zakazao/la sam termin jer mi kosa mjesecima nije šišana.", "Randevu aldım çünkü saçlarım aylardır kesilmedi.", "Я записався/лася, бо моє волосся не стригли місяцями.", "Am făcut o programare pentru că părul meu nu a fost tuns de luni de zile.", "حجزت موعدًا لأن شعري لم يُقص منذ أشهر.") },
    { id: "friseur-a2-s2", position: 2, german_text: "Guten Tag, schön dass Sie gekommen sind! Bitte, nehmen Sie Platz.", translations: T("Dobar dan, drago mi je da ste došli! Izvolite, sjednite.", "Merhaba, geldiğinize sevindim! Lütfen oturun.", "Доброго дня, радий/рада, що ви прийшли! Прошу, сідайте.", "Bună ziua, mă bucur că ați venit! Vă rog, luați loc.", "مرحبًا، يسعدني أنك أتيت! تفضل بالجلوس.") },
    { id: "friseur-a2-s3", position: 3, german_text: "Ich möchte gerne einen kürzeren Haarschnitt, aber nicht zu kurz.", translations: T("Željela bih kraću frizuru, ali ne prekratku.", "Daha kısa bir saç kesimi istiyorum ama çok kısa olmasın.", "Я хотів/ла б коротшу зачіску, але не занадто коротку.", "Aș dori o tunsoare mai scurtă, dar nu prea scurtă.", "أرغب في قصة أقصر، لكن ليست قصيرة جدًا.") },
    { id: "friseur-a2-s4", position: 4, german_text: "Kein Problem. Sollen wir vorne einen Pony ausprobieren?", translations: T("Nema problema. Da probamo šiške naprijed?", "Sorun değil. Öne kâkül denemek ister misiniz?", "Без проблем. Спробуємо чубчик спереду?", "Nicio problemă. Să încercăm un breton în față?", "لا مشكلة. هل نجرب غرة من الأمام؟") },
    { id: "friseur-a2-s5", position: 5, german_text: "Das können wir versuchen, obwohl ich noch nie einen Pony hatte.", translations: T("To možemo probati, iako nikad nisam imala šiške.", "Bunu deneyebiliriz, hiç kâkülüm olmamış olsa da.", "Ми можемо спробувати, хоча в мене ще ніколи не було чубчика.", "Putem încerca, deși nu am avut niciodată breton.", "يمكننا تجربة ذلك، رغم أنني لم أحصل على غرة من قبل.") },
    { id: "friseur-a2-s6", position: 6, german_text: "Zuerst wäscht die Friseurin die Haare und massiert kurz die Kopfhaut.", translations: T("Prvo frizerka opere kosu i kratko masira vlasište.", "Önce kuaför saçları yıkar ve kısa süre saç derisini masaj yapar.", "Спочатку перукарка миє волосся й коротко масажує шкіру голови.", "Mai întâi frizerița spală părul și masează scurt scalpul.", "أولاً تغسل الحلاقة الشعر وتدلك فروة الرأس لفترة قصيرة.") },
    { id: "friseur-a2-s7", position: 7, german_text: "Das fühlt sich sehr angenehm an, das habe ich gebraucht.", translations: T("To je jako prijatno, upravo mi je to trebalo.", "Bu çok rahatlatıcı, tam da buna ihtiyacım vardı.", "Це дуже приємно, саме це мені й було потрібно.", "Este foarte plăcut, exact de asta aveam nevoie.", "هذا شعور مريح جدًا، كنت بحاجة إلى ذلك.") },
    { id: "friseur-a2-s8", position: 8, german_text: "Während sie schneidet, erzählt die Kundin, dass sie bald umzieht.", translations: T("Dok šiša, klijentkinja priča da se uskoro seli.", "O keserken, müşteri yakında taşınacağını anlatıyor.", "Поки вона стриже, клієнтка розповідає, що скоро переїжджає.", "În timp ce taie, clienta povestește că se mută curând.", "أثناء القص، تخبر الزبونة أنها ستنتقل قريبًا.") },
    { id: "friseur-a2-s9", position: 9, german_text: "Ach, das ist ja spannend! Wohin geht es denn?", translations: T("Ah, to je uzbudljivo! Kuda ideš?", "Ah, bu çok heyecan verici! Nereye taşınıyorsun?", "Ой, це ж цікаво! А куди?", "Ah, e interesant! Unde te muți?", "آه، هذا مثير! إلى أين ستنتقلين؟") },
    { id: "friseur-a2-s10", position: 10, german_text: "Als die Friseurin fertig ist, sieht die Frisur viel frischer aus als vorher.", translations: T("Kad frizerka završi, frizura izgleda mnogo svježije nego prije.", "Kuaför işini bitirdiğinde, saç modeli öncekinden çok daha canlı görünüyor.", "Коли перукарка закінчує, зачіска виглядає набагато свіжіше, ніж раніше.", "Când frizerița termină, coafura arată mult mai proaspătă decât înainte.", "عندما تنتهي الحلاقة، تبدو التسريحة أكثر انتعاشًا من ذي قبل.") },
    { id: "friseur-a2-s11", position: 11, german_text: "Leider ist der Pony ein bisschen zu kurz geworden, finden Sie nicht?", translations: T("Nažalost, šiške su ispale malo prekratke, zar ne mislite?", "Ne yazık ki kâkül biraz fazla kısa oldu, sizce de öyle değil mi?", "На жаль, чубчик вийшов трохи закоротким, чи не так?", "Din păcate, bretonul a ieșit un pic prea scurt, nu credeți?", "للأسف أصبحت الغرة قصيرة قليلاً جدًا، ألا تعتقد ذلك؟") },
    { id: "friseur-a2-s12", position: 12, german_text: "Machen Sie sich keine Sorgen, das wächst in ein paar Wochen wieder nach.", translations: T("Ne brinite, to će za par sedmica ponovo narasti.", "Endişelenmeyin, birkaç hafta içinde tekrar uzayacaktır.", "Не хвилюйтеся, за кілька тижнів воно знову відросте.", "Nu vă faceți griji, va crește la loc în câteva săptămâni.", "لا تقلق، سينمو مرة أخرى خلال أسابيع قليلة.") },
    { id: "friseur-a2-s13", position: 13, german_text: "Zum Schluss föhnt sie die Haare und stylt sie mit etwas Gel.", translations: T("Na kraju osuši kosu fenom i stilizuje je s malo gela.", "Sonunda saçları kurutur ve biraz jöleyle şekillendirir.", "Наприкінці вона висушує волосся феном і укладає трохи гелем.", "La final, usucă părul cu fonul și îl coafează cu puțin gel.", "أخيرًا تجفف الشعر وتصففه بقليل من الجل.") },
    { id: "friseur-a2-s14", position: 14, german_text: "Das macht heute 32 Euro, weil Sie auch eine Kopfmassage bekommen haben.", translations: T("To danas iznosi 32 eura, jer ste dobili i masažu glave.", "Bugün 32 avro tutuyor, çünkü kafa masajı da aldınız.", "Сьогодні це коштує 32 євро, бо ви також отримали масаж голови.", "Astăzi costă 32 de euro, pentru că ați primit și un masaj al capului.", "يبلغ اليوم 32 يورو، لأنك حصلت أيضًا على تدليك للرأس.") },
    { id: "friseur-a2-s15", position: 15, german_text: "Vielen Dank, es hat mir wirklich gut gefallen. Bis zum nächsten Mal!", translations: T("Puno hvala, stvarno mi se svidjelo. Do sljedećeg puta!", "Çok teşekkürler, gerçekten çok beğendim. Bir sonrakine kadar!", "Дуже дякую, мені справді дуже сподобалося. До наступного разу!", "Mulțumesc mult, mi-a plăcut foarte mult. Pe data viitoare!", "شكرًا جزيلاً، أعجبني ذلك حقًا. إلى المرة القادمة!") },
  ],

  vocab: [
    { id: "friseur-a2-v1", position: 1, term: "Kopfhaut", article: "die", plural: "die Kopfhäute", word_class: "Nomen", example: "Die Friseurin massiert die Kopfhaut.", translations: T("vlasište", "saç derisi", "шкіра голови", "scalp", "فروة الرأس") },
    { id: "friseur-a2-v2", position: 2, term: "Pony", article: "der", plural: "die Ponys", word_class: "Nomen", example: "Sollen wir einen Pony ausprobieren?", translations: T("šiške", "kâkül", "чубчик", "breton", "غرة") },
    { id: "friseur-a2-v3", position: 3, term: "Kopfmassage", article: "die", plural: "die Kopfmassagen", word_class: "Nomen", example: "Ich habe auch eine Kopfmassage bekommen.", translations: T("masaža glave", "kafa masajı", "масаж голови", "masaj al capului", "تدليك الرأس") },
    { id: "friseur-a2-v4", position: 4, term: "nachwachsen", word_class: "Verb", example: "Der Pony wächst schnell nach.", translations: T("ponovo rasti", "yeniden uzamak", "відростати", "a crește la loc", "ينمو من جديد") },
    { id: "friseur-a2-v5", position: 5, term: "umziehen", word_class: "Verb", example: "Sie erzählt, dass sie bald umzieht.", translations: T("seliti se", "taşınmak", "переїжджати", "a se muta", "الانتقال") },
    { id: "friseur-a2-v6", position: 6, term: "föhnen", word_class: "Verb", example: "Zum Schluss föhnt sie die Haare.", translations: T("sušiti fenom", "föne kurutmak", "сушити феном", "a usca cu fonul", "تجفيف بالمجفف") },
    { id: "friseur-a2-v7", position: 7, term: "stylen", word_class: "Verb", example: "Sie stylt die Haare mit Gel.", translations: T("stilizovati", "şekillendirmek", "укладати", "a coafa", "تصفيف الشعر") },
    { id: "friseur-a2-v8", position: 8, term: "angenehm", word_class: "Adjektiv", example: "Das fühlt sich angenehm an.", translations: T("prijatno", "rahatlatıcı", "приємно", "plăcut", "مريح") },
    { id: "friseur-a2-v9", position: 9, term: "frisch", word_class: "Adjektiv", example: "Die Frisur sieht frisch aus.", translations: T("svježe", "taze/canlı", "свіжий", "proaspăt", "منتعش") },
    { id: "friseur-a2-v10", position: 10, term: "Farbton", article: "der", plural: "die Farbtöne", word_class: "Nomen", example: "Der Farbton passt gut zu Ihnen.", translations: T("nijansa boje", "renk tonu", "відтінок кольору", "nuanță de culoare", "درجة اللون") },
    { id: "friseur-a2-v11", position: 11, term: "Strähnen", article: "die", plural: "die Strähnen", word_class: "Nomen", example: "Möchten Sie ein paar Strähnen?", translations: T("pramenovi", "röfle", "пасма", "șuvițe", "خصلات") },
    { id: "friseur-a2-v12", position: 12, term: "Dauerwelle", article: "die", plural: "die Dauerwellen", word_class: "Nomen", example: "Sie überlegt eine Dauerwelle.", translations: T("trajna", "kalıcı dalga", "хімічна завивка", "permanent", "تجعيد دائم") },
    { id: "friseur-a2-v13", position: 13, term: "empfehlen", word_class: "Verb", example: "Was empfehlen Sie mir?", translations: T("preporučiti", "önermek", "рекомендувати", "a recomanda", "يوصي") },
    { id: "friseur-a2-v14", position: 14, term: "Kopfhautprobleme", article: "die", plural: "—", word_class: "Nomen", example: "Ich habe manchmal Kopfhautprobleme.", translations: T("problemi s vlasištem", "saç derisi sorunları", "проблеми зі шкірою голови", "probleme ale scalpului", "مشاكل فروة الرأس") },
    { id: "friseur-a2-v15", position: 15, term: "Spliss", article: "der", plural: "—", word_class: "Nomen", example: "Ich habe viel Spliss.", translations: T("cijepane vrhove", "kırık uçlar", "січене волосся", "vârfuri despicate", "أطراف متقصفة") },
    { id: "friseur-a2-v16", position: 16, term: "trocken", word_class: "Adjektiv", example: "Meine Haare sind sehr trocken.", translations: T("suho", "kuru", "сухий", "uscat", "جاف") },
    { id: "friseur-a2-v17", position: 17, term: "fettig", word_class: "Adjektiv", example: "Am Abend werden die Haare fettig.", translations: T("masno", "yağlı", "жирний", "gras", "دهني") },
    { id: "friseur-a2-v18", position: 18, term: "Pflege", article: "die", plural: "—", word_class: "Nomen", example: "Diese Pflege ist sehr gut für trockenes Haar.", translations: T("njega", "bakım", "догляд", "îngrijire", "عناية") },
    { id: "friseur-a2-v19", position: 19, term: "vereinbaren", word_class: "Verb", example: "Ich möchte einen Termin vereinbaren.", translations: T("dogovoriti", "ayarlamak", "домовитися", "a stabili", "الاتفاق على") },
    { id: "friseur-a2-v20", position: 20, term: "Kundenkarte", article: "die", plural: "die Kundenkarten", word_class: "Nomen", example: "Haben Sie eine Kundenkarte?", translations: T("kartica lojalnosti", "müşteri kartı", "картка клієнта", "cardul de client", "بطاقة العميل") },
    { id: "friseur-a2-v21", position: 21, term: "Rabatt", article: "der", plural: "die Rabatte", word_class: "Nomen", example: "Mit der Karte gibt es einen Rabatt.", translations: T("popust", "indirim", "знижка", "reducere", "خصم") },
    { id: "friseur-a2-v22", position: 22, term: "aussehen", word_class: "Verb", example: "Die neue Frisur sieht toll aus.", translations: T("izgledati", "görünmek", "виглядати", "a arăta", "يبدو") },
    { id: "friseur-a2-v23", position: 23, term: "abschneiden", word_class: "Verb", example: "Ich schneide nur wenig ab.", translations: T("odsjeći", "kesip atmak", "відрізати", "a tăia", "قص") },
    { id: "friseur-a2-v24", position: 24, term: "zufrieden", word_class: "Adjektiv", example: "Ich bin sehr zufrieden mit dem Ergebnis.", translations: T("zadovoljan", "memnun", "задоволений", "mulțumit", "راضٍ") },
    { id: "friseur-a2-v25", position: 25, term: "Ergebnis", article: "das", plural: "die Ergebnisse", word_class: "Nomen", example: "Das Ergebnis gefällt mir sehr.", translations: T("rezultat", "sonuç", "результат", "rezultat", "نتيجة") },
    { id: "friseur-a2-v26", position: 26, term: "Kopfmassageöl", article: "das", plural: "—", word_class: "Nomen", example: "Sie benutzt ein spezielles Öl.", translations: T("ulje za masažu", "masaj yağı", "олія для масажу", "ulei de masaj", "زيت التدليك") },
    { id: "friseur-a2-v27", position: 27, term: "vorschlagen", word_class: "Verb", example: "Die Friseurin schlägt einen neuen Stil vor.", translations: T("predložiti", "önermek", "пропонувати", "a propune", "يقترح") },
    { id: "friseur-a2-v28", position: 28, term: "unsicher", word_class: "Adjektiv", example: "Ich bin unsicher, ob mir der Pony steht.", translations: T("nesiguran", "kararsız", "невпевнений", "nesigur", "غير متأكد") },
  ],

  dialog: [
    { id: "friseur-a2-d1-1", position: 1, dialog_index: 1, dialog_title: "Dialog 1 · Wunschschnitt beschreiben", speaker: "Kunde", german_text: "Guten Tag, ich habe letzte Woche online einen Termin gebucht.", translations: T("Dobar dan, prošle sedmice sam onlajn zakazao/la termin.", "Merhaba, geçen hafta internetten randevu almıştım.", "Доброго дня, минулого тижня я забронював(ла) запис онлайн.", "Bună ziua, am făcut o programare online săptămâna trecută.", "مرحبًا، لقد حجزت موعدًا عبر الإنترنت الأسبوع الماضي.") },
    { id: "friseur-a2-d1-2", position: 2, dialog_index: 1, dialog_title: "Dialog 1 · Wunschschnitt beschreiben", speaker: "Friseurin", german_text: "Ja, ich sehe es hier im System. Was darf es denn heute sein?", translations: T("Da, vidim to ovdje u sistemu. Šta bi trebalo biti danas?", "Evet, sistemde görüyorum. Bugün ne yapmak istersiniz?", "Так, я бачу це тут у системі. Що ж сьогодні буде?", "Da, văd aici în sistem. Ce doriți astăzi?", "نعم، أراه هنا في النظام. ماذا تريد اليوم؟") },
    { id: "friseur-a2-d1-3", position: 3, dialog_index: 1, dialog_title: "Dialog 1 · Wunschschnitt beschreiben", speaker: "Kunde", german_text: "Ich möchte, dass die Haare hinten kürzer werden, aber vorne etwas länger bleiben.", translations: T("Želim da kosa iza bude kraća, ali sprijeda ostane malo duža.", "Arkada saçların daha kısa olmasını, önde biraz daha uzun kalmasını istiyorum.", "Я хочу, щоб волосся ззаду стало коротшим, а спереду залишилося трохи довшим.", "Aș vrea ca părul din spate să fie mai scurt, dar în față să rămână puțin mai lung.", "أريد أن يصبح الشعر من الخلف أقصر، لكن يبقى من الأمام أطول قليلاً.") },
    { id: "friseur-a2-d1-4", position: 4, dialog_index: 1, dialog_title: "Dialog 1 · Wunschschnitt beschreiben", speaker: "Friseurin", german_text: "Verstehe, also ein Stil, der hinten kürzer und vorne länger ist.", translations: T("Razumijem, dakle stil koji je pozadi kraći, a sprijeda duži.", "Anlıyorum, yani arkası kısa önü uzun bir stil.", "Розумію, отже стиль, коротший ззаду і довший спереду.", "Înțeleg, deci un stil mai scurt în spate și mai lung în față.", "أفهم، إذن نمط أقصر من الخلف وأطول من الأمام.") },
    { id: "friseur-a2-d1-5", position: 5, dialog_index: 1, dialog_title: "Dialog 1 · Wunschschnitt beschreiben", speaker: "Kunde", german_text: "Genau. Weil ich morgens wenig Zeit habe, soll es außerdem leicht zu stylen sein.", translations: T("Tačno. Pošto ujutro imam malo vremena, treba i lako da se stilizuje.", "Aynen. Sabahları vaktim az olduğu için ayrıca kolay şekillenmesi lazım.", "Саме так. Оскільки вранці в мене мало часу, це також має бути легко укладати.", "Exact. Deoarece dimineața am puțin timp, ar trebui să fie ușor de coafat.", "بالضبط. ولأنني لا أملك وقتًا كافيًا في الصباح، يجب أن تكون سهلة التصفيف أيضًا.") },
    { id: "friseur-a2-d1-6", position: 6, dialog_index: 1, dialog_title: "Dialog 1 · Wunschschnitt beschreiben", speaker: "Friseurin", german_text: "Kein Problem, dafür habe ich einen guten Vorschlag.", translations: T("Nema problema, za to imam dobar prijedlog.", "Sorun değil, bunun için iyi bir önerim var.", "Без проблем, для цього в мене є хороша пропозиція.", "Nicio problemă, am o propunere bună pentru asta.", "لا مشكلة، لدي اقتراح جيد لذلك.") },
    { id: "friseur-a2-d1-7", position: 7, dialog_index: 1, dialog_title: "Dialog 1 · Wunschschnitt beschreiben", speaker: "Kunde", german_text: "Sollen wir vielleicht auch ein paar Strähnen machen?", translations: T("Da li bismo možda mogli napraviti i par pramenova?", "Belki birkaç röfle de yapmalı mıyız?", "Може, зробимо ще й кілька пасом?", "Poate ar trebui să facem și câteva șuvițe?", "هل يمكننا أيضًا عمل بعض الخصلات؟") },
    { id: "friseur-a2-d1-8", position: 8, dialog_index: 1, dialog_title: "Dialog 1 · Wunschschnitt beschreiben", speaker: "Friseurin", german_text: "Das können wir machen, obwohl es ein bisschen länger dauert.", translations: T("To možemo uraditi, iako to malo duže traje.", "Bunu yapabiliriz, biraz daha uzun sürse de.", "Ми можемо це зробити, хоча це триватиме трохи довше.", "Putem face asta, deși durează un pic mai mult.", "يمكننا فعل ذلك، رغم أنه سيستغرق وقتًا أطول قليلاً.") },
    { id: "friseur-a2-d1-9", position: 9, dialog_index: 1, dialog_title: "Dialog 1 · Wunschschnitt beschreiben", speaker: "Kunde", german_text: "Das macht nichts, ich habe heute Zeit.", translations: T("Nema veze, danas imam vremena.", "Önemli değil, bugün vaktim var.", "Нічого, у мене сьогодні є час.", "Nu-i nimic, am timp astăzi.", "لا بأس، لدي وقت اليوم.") },
    { id: "friseur-a2-d1-10", position: 10, dialog_index: 1, dialog_title: "Dialog 1 · Wunschschnitt beschreiben", speaker: "Friseurin", german_text: "Gut, dann fangen wir mit der Haarwäsche an.", translations: T("Dobro, onda počinjemo pranjem kose.", "Tamam, o zaman saç yıkamayla başlayalım.", "Добре, тоді почнемо з миття волосся.", "Bine, atunci începem cu spălarea părului.", "حسنًا، إذن لنبدأ بغسل الشعر.") },
    { id: "friseur-a2-d1-11", position: 11, dialog_index: 1, dialog_title: "Dialog 1 · Wunschschnitt beschreiben", speaker: "Kunde", german_text: "In Ordnung, ich freue mich schon auf das Ergebnis.", translations: T("U redu, već se radujem rezultatu.", "Tamam, sonucu şimdiden merak ediyorum.", "Гаразд, я вже радію результату.", "Bine, deja mă bucur de rezultat.", "حسنًا، أنا متحمس بالفعل للنتيجة.") },

    { id: "friseur-a2-d2-1", position: 1, dialog_index: 2, dialog_title: "Dialog 2 · Kleines Problem und Bezahlung", speaker: "Friseurin", german_text: "So, ich bin fertig. Was meinen Sie, gefällt Ihnen der neue Stil?", translations: T("Eto, gotova sam. Šta mislite, sviđa li vam se novi stil?", "İşte bitirdim. Sizce, yeni stili beğendiniz mi?", "От, я закінчила. Що скажете, вам подобається новий стиль?", "Gata, am terminat. Ce părere aveți, vă place noul stil?", "ها قد انتهيت. ما رأيك، هل يعجبك النمط الجديد؟") },
    { id: "friseur-a2-d2-2", position: 2, dialog_index: 2, dialog_title: "Dialog 2 · Kleines Problem und Bezahlung", speaker: "Kunde", german_text: "Er gefällt mir sehr, obwohl vorne noch etwas unordentlich aussieht.", translations: T("Sviđa mi se jako, iako sprijeda još izgleda malo neuredno.", "Çok beğendim, önü hâlâ biraz dağınık görünse de.", "Мені дуже подобається, хоча спереду виглядає ще трохи неохайно.", "Îmi place foarte mult, deși în față arată încă puțin dezordonat.", "أعجبني كثيرًا، رغم أن الأمام لا يزال يبدو غير مرتب قليلاً.") },
    { id: "friseur-a2-d2-3", position: 3, dialog_index: 2, dialog_title: "Dialog 2 · Kleines Problem und Bezahlung", speaker: "Friseurin", german_text: "Stimmt, das korrigiere ich noch schnell, bevor wir fertig sind.", translations: T("Tačno, to ću brzo ispraviti prije nego što završimo.", "Haklısınız, bitirmeden önce onu hızlıca düzeltirim.", "Ваша правда, я це швидко виправлю перед тим, як закінчимо.", "Aveți dreptate, corectez asta repede înainte să terminăm.", "صحيح، سأصحح ذلك بسرعة قبل أن ننتهي.") },
    { id: "friseur-a2-d2-4", position: 4, dialog_index: 2, dialog_title: "Dialog 2 · Kleines Problem und Bezahlung", speaker: "Kunde", german_text: "Danke, jetzt sieht es viel besser aus als vorher.", translations: T("Hvala, sad izgleda mnogo bolje nego prije.", "Teşekkürler, şimdi öncekinden çok daha iyi görünüyor.", "Дякую, тепер це виглядає набагато краще, ніж раніше.", "Mulțumesc, acum arată mult mai bine decât înainte.", "شكرًا، الآن يبدو أفضل بكثير من قبل.") },
    { id: "friseur-a2-d2-5", position: 5, dialog_index: 2, dialog_title: "Dialog 2 · Kleines Problem und Bezahlung", speaker: "Friseurin", german_text: "Freut mich sehr. Möchten Sie noch ein Pflegeprodukt für zu Hause mitnehmen?", translations: T("Drago mi je. Želite li ponijeti i proizvod za njegu kod kuće?", "Çok sevindim. Evde kullanmak için bir bakım ürünü almak ister misiniz?", "Дуже радий/рада. Бажаєте також взяти засіб для догляду додому?", "Mă bucur mult. Doriți să luați și un produs de îngrijire pentru acasă?", "يسعدني ذلك. هل ترغب في أخذ منتج للعناية لاستخدامه في المنزل؟") },
    { id: "friseur-a2-d2-6", position: 6, dialog_index: 2, dialog_title: "Dialog 2 · Kleines Problem und Bezahlung", speaker: "Kunde", german_text: "Nein danke, ich glaube, das brauche ich diesmal nicht.", translations: T("Ne, hvala, mislim da mi to ovaj put ne treba.", "Hayır teşekkürler, sanırım bu sefer buna ihtiyacım yok.", "Ні, дякую, я думаю, цього разу мені це не потрібно.", "Nu, mulțumesc, cred că nu am nevoie de asta de data asta.", "لا شكرًا، أعتقد أنني لست بحاجة إليه هذه المرة.") },
    { id: "friseur-a2-d2-7", position: 7, dialog_index: 2, dialog_title: "Dialog 2 · Kleines Problem und Bezahlung", speaker: "Friseurin", german_text: "Kein Problem. Das macht dann 32 Euro, weil Sie auch die Strähnen bekommen haben.", translations: T("Nema problema. To onda iznosi 32 eura, jer ste dobili i pramenove.", "Sorun değil. O zaman 32 avro tutuyor, çünkü röfle de yaptırdınız.", "Без проблем. Тоді це 32 євро, бо ви також отримали пасма.", "Nicio problemă. Atunci costă 32 de euro, pentru că ați primit și șuvițele.", "لا مشكلة. إذن المبلغ 32 يورو، لأنك حصلت أيضًا على الخصلات.") },
    { id: "friseur-a2-d2-8", position: 8, dialog_index: 2, dialog_title: "Dialog 2 · Kleines Problem und Bezahlung", speaker: "Kunde", german_text: "Das ist in Ordnung. Kann ich mit der Kundenkarte bezahlen?", translations: T("To je u redu. Mogu li platiti karticom lojalnosti?", "Tamam. Müşteri kartımla ödeyebilir miyim?", "Це нормально. Чи можу я заплатити карткою клієнта?", "E în regulă. Pot plăti cu cardul de client?", "لا بأس. هل يمكنني الدفع ببطاقة العميل؟") },
    { id: "friseur-a2-d2-9", position: 9, dialog_index: 2, dialog_title: "Dialog 2 · Kleines Problem und Bezahlung", speaker: "Friseurin", german_text: "Natürlich, damit bekommen Sie sogar einen kleinen Rabatt.", translations: T("Naravno, s tim čak dobijate i mali popust.", "Tabii, onunla küçük bir indirim bile alıyorsunuz.", "Звісно, з нею ви навіть отримаєте невелику знижку.", "Desigur, cu el primiți chiar și o mică reducere.", "بالطبع، وستحصل بها حتى على خصم صغير.") },
    { id: "friseur-a2-d2-10", position: 10, dialog_index: 2, dialog_title: "Dialog 2 · Kleines Problem und Bezahlung", speaker: "Kunde", german_text: "Super, dann komme ich bestimmt bald wieder.", translations: T("Super, onda ću sigurno uskoro ponovo doći.", "Harika, o zaman kesinlikle yakında yine gelirim.", "Чудово, тоді я точно скоро прийду знову.", "Super, atunci cu siguranță revin curând.", "رائع، سأعود بالتأكيد قريبًا.") },
    { id: "friseur-a2-d2-11", position: 11, dialog_index: 2, dialog_title: "Dialog 2 · Kleines Problem und Bezahlung", speaker: "Friseurin", german_text: "Sehr gerne! Auf Wiedersehen und einen schönen Tag noch!", translations: T("Vrlo rado! Doviđenja i prijatan dan još!", "Rica ederim! Hoşça kalın ve iyi günler!", "Із задоволенням! До побачення і гарного дня!", "Cu mare plăcere! La revedere și o zi frumoasă!", "بكل سرور! إلى اللقاء ويومًا سعيدًا!") },
  ],

  questions: [
    // ===== Übungen (practice) =====
    { id: "friseur-a2-q1", position: 1, kind: "single_choice", section: "practice", prompt: "Warum ist die Kundin zum Friseur gegangen?", explanation: "Weil ihre Haare seit Monaten nicht geschnitten wurden.", data: H("Razlog je uveden sa „weil“.", "Sebep „weil“ ile veriliyor.", "Причина введена через „weil“.", "Motivul este introdus cu „weil“.", "السبب مقدَّم بـ „weil“."), quiz_answers: [
      { id: "friseur-a2-q1-a1", position: 1, text: "Weil ihre Haare seit Monaten nicht geschnitten wurden.", is_correct: true },
      { id: "friseur-a2-q1-a2", position: 2, text: "Weil sie eine Party hat.", is_correct: false },
      { id: "friseur-a2-q1-a3", position: 3, text: "Weil der Salon umzieht.", is_correct: false },
    ] },
    { id: "friseur-a2-q2", position: 2, kind: "single_choice", section: "practice", prompt: "Welcher Satz beschreibt den Wunsch der Kundin am besten?", explanation: "Sie möchte hinten kürzer, vorne etwas länger.", data: H("Nebenrečenica sa „dass“ opisuje želju.", "„dass“ yan cümlesi isteği anlatır.", "Підрядне речення з „dass“ описує бажання.", "Propoziția cu „dass“ descrie dorința.", "الجملة الفرعية بـ „dass“ تصف الرغبة."), quiz_answers: [
      { id: "friseur-a2-q2-a1", position: 1, text: "Ich möchte, dass die Haare hinten kürzer werden.", is_correct: true },
      { id: "friseur-a2-q2-a2", position: 2, text: "Ich möchte, dass der Bus schneller fährt.", is_correct: false },
      { id: "friseur-a2-q2-a3", position: 3, text: "Ich möchte, dass es morgen regnet.", is_correct: false },
    ] },
    { id: "friseur-a2-q3", position: 3, kind: "gap", section: "practice", prompt: "Ich habe einen Termin ___. (Perfekt von „machen“)", explanation: "„gemacht“ — Perfekt mit haben.", data: H("Perfekt: haben + Partizip II.", "Perfekt: haben + Partizip II.", "Перфект: haben + дієприкметник II.", "Perfect: haben + participiu II.", "الزمن التام: haben + الفعل الماضي."), quiz_answers: [
      { id: "friseur-a2-q3-a1", position: 1, text: "gemacht", is_correct: true },
    ] },
    { id: "friseur-a2-q4", position: 4, kind: "true_false", section: "practice", prompt: "Der Pony ist am Ende ein bisschen zu kurz geworden.", explanation: "Richtig, das sagt die Kundin selbst.", data: H("Ovo je u priči navedeno.", "Bu hikayede belirtiliyor.", "Це вказано в історії.", "Acest lucru este menționat în poveste.", "هذا مذكور في القصة."), quiz_answers: [
      { id: "friseur-a2-q4-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-a2-q4-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-a2-q5", position: 5, kind: "single_choice", section: "practice", prompt: "Wie viel kostet der Besuch mit Kopfmassage?", explanation: "32 Euro, weil eine Kopfmassage dazukam.", data: H("Cijena je navedena u priči.", "Fiyat hikayede belirtiliyor.", "Ціна вказана в історії.", "Prețul este menționat în poveste.", "السعر مذكور في القصة."), quiz_answers: [
      { id: "friseur-a2-q5-a1", position: 1, text: "32 Euro", is_correct: true },
      { id: "friseur-a2-q5-a2", position: 2, text: "25 Euro", is_correct: false },
      { id: "friseur-a2-q5-a3", position: 3, text: "45 Euro", is_correct: false },
    ] },
    { id: "friseur-a2-q6", position: 6, kind: "single_choice", section: "practice", prompt: "Welcher Satz benutzt eine trennbare Verbform richtig?", explanation: "„sieht … aus“ trennt sich vom Präfix „aus-“.", data: H("Prefiks ide na kraj rečenice.", "Önek cümlenin sonuna gider.", "Префікс переноситься в кінець речення.", "Prefixul merge la finalul propoziției.", "البادئة تذهب إلى نهاية الجملة."), quiz_answers: [
      { id: "friseur-a2-q6-a1", position: 1, text: "Die neue Frisur sieht gut aus.", is_correct: true },
      { id: "friseur-a2-q6-a2", position: 2, text: "Die neue Frisur aussieht gut.", is_correct: false },
      { id: "friseur-a2-q6-a3", position: 3, text: "Die neue Frisur ausseht gut.", is_correct: false },
    ] },
    { id: "friseur-a2-q7", position: 7, kind: "gap", section: "practice", prompt: "Die Haare sind jetzt kürzer ___ vorher. (Komparativ)", explanation: "Nach dem Komparativ steht „als“.", data: H("Poslije komparativa dolazi „als“.", "Karşılaştırmadan sonra „als“ gelir.", "Після компаратива йде „als“.", "După comparativ urmează „als“.", "بعد صيغة المقارنة تأتي „als“."), quiz_answers: [
      { id: "friseur-a2-q7-a1", position: 1, text: "als", is_correct: true },
    ] },
    { id: "friseur-a2-q8", position: 8, kind: "single_choice", section: "practice", prompt: "Wohin setzt sich die Kundin am Anfang?", explanation: "Bewegung → Akkusativ: „vor den Spiegel“.", data: H("Kretanje → akuzativ.", "Hareket → akuzatif.", "Рух → знахідний.", "Mișcare → acuzativ.", "الحركة → حالة المفعول."), quiz_answers: [
      { id: "friseur-a2-q8-a1", position: 1, text: "vor den Spiegel", is_correct: true },
      { id: "friseur-a2-q8-a2", position: 2, text: "vor dem Spiegel", is_correct: false },
      { id: "friseur-a2-q8-a3", position: 3, text: "vor der Spiegel", is_correct: false },
    ] },
    { id: "friseur-a2-q9", position: 9, kind: "single_choice", section: "practice", prompt: "Was erzählt die Kundin während des Schneidens?", explanation: "Dass sie bald umzieht.", data: H("Ovo je u priči.", "Bu hikayede geçiyor.", "Це в історії.", "Acest lucru e în poveste.", "هذا في القصة."), quiz_answers: [
      { id: "friseur-a2-q9-a1", position: 1, text: "Dass sie bald umzieht.", is_correct: true },
      { id: "friseur-a2-q9-a2", position: 2, text: "Dass sie krank ist.", is_correct: false },
      { id: "friseur-a2-q9-a3", position: 3, text: "Dass sie heiratet.", is_correct: false },
    ] },
    { id: "friseur-a2-q10", position: 10, kind: "single_choice", section: "practice", prompt: "Womit bezahlt die Kundin am Ende und was bekommt sie dadurch?", explanation: "Mit der Kundenkarte, und dadurch einen Rabatt.", data: H("Kundenkarte donosi popust.", "Müşteri kartı indirim getirir.", "Картка клієнта дає знижку.", "Cardul de client aduce o reducere.", "بطاقة العميل تمنح خصمًا."), quiz_answers: [
      { id: "friseur-a2-q10-a1", position: 1, text: "mit der Kundenkarte, einen Rabatt", is_correct: true },
      { id: "friseur-a2-q10-a2", position: 2, text: "mit Bargeld, ein Geschenk", is_correct: false },
      { id: "friseur-a2-q10-a3", position: 3, text: "mit Karte, gar nichts", is_correct: false },
    ] },

    // ===== Abschlusstest (40 Fragen) =====
    { id: "friseur-a2-t1", position: 1, kind: "single_choice", section: "test", prompt: "Wann hat die Kundin den Termin gebucht?", explanation: "Letzte Woche, online.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t1-a1", position: 1, text: "letzte Woche, online", is_correct: true },
      { id: "friseur-a2-t1-a2", position: 2, text: "vor einem Jahr", is_correct: false },
      { id: "friseur-a2-t1-a3", position: 3, text: "heute Morgen, telefonisch", is_correct: false },
    ] },
    { id: "friseur-a2-t2", position: 2, kind: "true_false", section: "test", prompt: "Die Kundin möchte vorne kürzer und hinten länger.", explanation: "Falsch — es ist umgekehrt: hinten kürzer, vorne länger.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t2-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "friseur-a2-t2-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "friseur-a2-t3", position: 3, kind: "gap", section: "test", prompt: "Sie ist zufrieden, ___ der Schnitt gut aussieht.", explanation: "„weil“ leitet den Grund ein.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t3-a1", position: 1, text: "weil", is_correct: true },
    ] },
    { id: "friseur-a2-t4", position: 4, kind: "single_choice", section: "test", prompt: "Was schlägt die Friseurin vor, um dem Wunsch der Kundin zu entsprechen?", explanation: "Einen Pony auszuprobieren.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t4-a1", position: 1, text: "einen Pony ausprobieren", is_correct: true },
      { id: "friseur-a2-t4-a2", position: 2, text: "die Haare färben", is_correct: false },
      { id: "friseur-a2-t4-a3", position: 3, text: "eine Perücke tragen", is_correct: false },
    ] },
    { id: "friseur-a2-t5", position: 5, kind: "single_choice", section: "test", prompt: "Welcher Satz ist korrekt gebildet?", explanation: "Perfekt mit „sein“ bei Bewegungsverben: „Ich bin gegangen.“", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t5-a1", position: 1, text: "Ich bin zum Friseur gegangen.", is_correct: true },
      { id: "friseur-a2-t5-a2", position: 2, text: "Ich habe zum Friseur gegangen.", is_correct: false },
      { id: "friseur-a2-t5-a3", position: 3, text: "Ich bin zum Friseur gehen.", is_correct: false },
    ] },
    { id: "friseur-a2-t6", position: 6, kind: "single_choice", section: "test", prompt: "Was macht die Friseurin zuerst nach der Begrüßung?", explanation: "Sie wäscht die Haare und massiert die Kopfhaut.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t6-a1", position: 1, text: "Sie wäscht die Haare und massiert die Kopfhaut.", is_correct: true },
      { id: "friseur-a2-t6-a2", position: 2, text: "Sie schneidet sofort die Haare.", is_correct: false },
      { id: "friseur-a2-t6-a3", position: 3, text: "Sie kassiert das Geld.", is_correct: false },
    ] },
    { id: "friseur-a2-t7", position: 7, kind: "true_false", section: "test", prompt: "Die Kundin hatte schon einmal einen Pony.", explanation: "Falsch — sie sagt, sie hatte noch nie einen Pony.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t7-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "friseur-a2-t7-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "friseur-a2-t8", position: 8, kind: "single_choice", section: "test", prompt: "Was erzählt die Kundin während der Friseurin schneidet?", explanation: "Dass sie bald umzieht.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t8-a1", position: 1, text: "Dass sie bald umzieht.", is_correct: true },
      { id: "friseur-a2-t8-a2", position: 2, text: "Dass sie einen Hund hat.", is_correct: false },
      { id: "friseur-a2-t8-a3", position: 3, text: "Dass sie Urlaub macht.", is_correct: false },
    ] },
    { id: "friseur-a2-t9", position: 9, kind: "single_choice", section: "test", prompt: "Was findet die Kundin, nachdem der Pony fertig ist?", explanation: "Sie findet ihn ein bisschen zu kurz.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t9-a1", position: 1, text: "ein bisschen zu kurz", is_correct: true },
      { id: "friseur-a2-t9-a2", position: 2, text: "viel zu lang", is_correct: false },
      { id: "friseur-a2-t9-a3", position: 3, text: "perfekt", is_correct: false },
    ] },
    { id: "friseur-a2-t10", position: 10, kind: "gap", section: "test", prompt: "Das wächst in ein paar ___ wieder nach.", explanation: "„Wochen“ — laut Text.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t10-a1", position: 1, text: "Wochen", is_correct: true },
    ] },
    { id: "friseur-a2-t11", position: 11, kind: "single_choice", section: "test", prompt: "Womit stylt die Friseurin die Haare zum Schluss?", explanation: "Mit etwas Gel.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t11-a1", position: 1, text: "mit etwas Gel", is_correct: true },
      { id: "friseur-a2-t11-a2", position: 2, text: "mit Wasser", is_correct: false },
      { id: "friseur-a2-t11-a3", position: 3, text: "mit Öl", is_correct: false },
    ] },
    { id: "friseur-a2-t12", position: 12, kind: "single_choice", section: "test", prompt: "Warum kostet der Besuch 32 statt 25 Euro?", explanation: "Weil die Kundin auch eine Kopfmassage bekommen hat.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t12-a1", position: 1, text: "Weil sie eine Kopfmassage bekommen hat.", is_correct: true },
      { id: "friseur-a2-t12-a2", position: 2, text: "Weil der Salon teurer geworden ist.", is_correct: false },
      { id: "friseur-a2-t12-a3", position: 3, text: "Weil sie zu spät gekommen ist.", is_correct: false },
    ] },
    { id: "friseur-a2-t13", position: 13, kind: "single_choice", section: "test", prompt: "Was bedeutet „Spliss“?", explanation: "Cijepani/oštećeni vrhovi kose.", data: H("Spliss su oštećeni vrhovi kose.", "Spliss kırık/hasarlı saç uçlarıdır.", "Spliss - пошкоджені кінчики волосся.", "Spliss sunt vârfurile despicate ale părului.", "Spliss هي أطراف الشعر المتقصفة."), quiz_answers: [
      { id: "friseur-a2-t13-a1", position: 1, text: "beschädigte Haarspitzen", is_correct: true },
      { id: "friseur-a2-t13-a2", position: 2, text: "eine Haarfarbe", is_correct: false },
      { id: "friseur-a2-t13-a3", position: 3, text: "ein Werkzeug", is_correct: false },
    ] },
    { id: "friseur-a2-t14", position: 14, kind: "single_choice", section: "test", prompt: "Was ist eine „Dauerwelle“?", explanation: "Eine dauerhafte Lockenbehandlung.", data: H("Trajna je proces koji trajno kovrdža kosu.", "Kalıcı dalga, saçı kalıcı olarak kıvırma işlemidir.", "Хімічна завивка - процес, що постійно кучерявить волосся.", "Permanentul este un tratament care ondulează permanent părul.", "التجعيد الدائم هو معالجة تجعد الشعر بشكل دائم."), quiz_answers: [
      { id: "friseur-a2-t14-a1", position: 1, text: "eine dauerhafte Lockenbehandlung", is_correct: true },
      { id: "friseur-a2-t14-a2", position: 2, text: "ein Shampoo", is_correct: false },
      { id: "friseur-a2-t14-a3", position: 3, text: "ein Termin am Montag", is_correct: false },
    ] },
    { id: "friseur-a2-t15", position: 15, kind: "single_choice", section: "test", prompt: "Welcher Satz benutzt „dass“ richtig?", explanation: "Verb steht am Ende des Nebensatzes.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t15-a1", position: 1, text: "Ich finde, dass der Haarschnitt gut aussieht.", is_correct: true },
      { id: "friseur-a2-t15-a2", position: 2, text: "Ich finde, dass aussieht der Haarschnitt gut.", is_correct: false },
      { id: "friseur-a2-t15-a3", position: 3, text: "Ich finde dass, gut aussieht der Haarschnitt.", is_correct: false },
    ] },
    { id: "friseur-a2-t16", position: 16, kind: "single_choice", section: "test", prompt: "Was ist das Gegenteil von „trocken“ bei Haaren?", explanation: "Fettig.", data: H("Suprotno od suho je masno.", "Kurunun zıttı yağlıdır.", "Протилежність сухого - жирний.", "Opusul lui uscat este gras.", "عكس الجاف هو الدهني."), quiz_answers: [
      { id: "friseur-a2-t16-a1", position: 1, text: "fettig", is_correct: true },
      { id: "friseur-a2-t16-a2", position: 2, text: "kurz", is_correct: false },
      { id: "friseur-a2-t16-a3", position: 3, text: "billig", is_correct: false },
    ] },
    { id: "friseur-a2-t17", position: 17, kind: "gap", section: "test", prompt: "Ich schneide die Spitzen ___. (trennbares Verb: abschneiden)", explanation: "„ab“ trennt sich vom Verb.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t17-a1", position: 1, text: "ab", is_correct: true },
    ] },
    { id: "friseur-a2-t18", position: 18, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "Bewegung (wohin?) → Akkusativ: „auf den Stuhl“.", data: H("Kretanje (kuda?) -> akuzativ.", "Hareket (nereye?) -> akuzatif.", "Рух (куди?) -> знахідний.", "Mișcare (unde?) -> acuzativ.", "الحركة (إلى أين؟) -> حالة المفعول."), quiz_answers: [
      { id: "friseur-a2-t18-a1", position: 1, text: "Sie setzt sich auf den Stuhl.", is_correct: true },
      { id: "friseur-a2-t18-a2", position: 2, text: "Sie setzt sich auf dem Stuhl.", is_correct: false },
      { id: "friseur-a2-t18-a3", position: 3, text: "Sie setzt sich auf der Stuhl.", is_correct: false },
    ] },
    { id: "friseur-a2-t19", position: 19, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "Position (wo?) → Dativ: „auf dem Stuhl“.", data: H("Pozicija (gdje?) -> dativ.", "Konum (nerede?) -> datif.", "Позиція (де?) -> давальний.", "Poziție (unde?) -> dativ.", "الموقع (أين؟) -> حالة الجر."), quiz_answers: [
      { id: "friseur-a2-t19-a1", position: 1, text: "Sie sitzt auf dem Stuhl.", is_correct: true },
      { id: "friseur-a2-t19-a2", position: 2, text: "Sie sitzt auf den Stuhl.", is_correct: false },
      { id: "friseur-a2-t19-a3", position: 3, text: "Sie sitzt auf das Stuhl.", is_correct: false },
    ] },
    { id: "friseur-a2-t20", position: 20, kind: "single_choice", section: "test", prompt: "Was benutzt der Kunde am Ende, um zu bezahlen?", explanation: "Die Kundenkarte.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t20-a1", position: 1, text: "die Kundenkarte", is_correct: true },
      { id: "friseur-a2-t20-a2", position: 2, text: "Bargeld", is_correct: false },
      { id: "friseur-a2-t20-a3", position: 3, text: "einen Gutschein", is_correct: false },
    ] },
    { id: "friseur-a2-t21", position: 21, kind: "single_choice", section: "test", prompt: "Was bekommt der Kunde durch die Kundenkarte?", explanation: "Einen kleinen Rabatt.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t21-a1", position: 1, text: "einen kleinen Rabatt", is_correct: true },
      { id: "friseur-a2-t21-a2", position: 2, text: "ein Geschenk", is_correct: false },
      { id: "friseur-a2-t21-a3", position: 3, text: "einen zweiten Termin gratis", is_correct: false },
    ] },
    { id: "friseur-a2-t22", position: 22, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "Perfekt mit „haben“: „Ich habe gewartet.“", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t22-a1", position: 1, text: "Wir haben lange gewartet.", is_correct: true },
      { id: "friseur-a2-t22-a2", position: 2, text: "Wir sind lange gewartet.", is_correct: false },
      { id: "friseur-a2-t22-a3", position: 3, text: "Wir haben lange warten.", is_correct: false },
    ] },
    { id: "friseur-a2-t23", position: 23, kind: "true_false", section: "test", prompt: "Die Friseurin korrigiert den Pony noch einmal, bevor sie fertig sind.", explanation: "Richtig — laut Dialog 2.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t23-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-a2-t23-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-a2-t24", position: 24, kind: "single_choice", section: "test", prompt: "Was lehnt die Kundin im zweiten Dialog ab?", explanation: "Ein Pflegeprodukt für zu Hause.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t24-a1", position: 1, text: "ein Pflegeprodukt für zu Hause", is_correct: true },
      { id: "friseur-a2-t24-a2", position: 2, text: "einen neuen Termin", is_correct: false },
      { id: "friseur-a2-t24-a3", position: 3, text: "die Kopfmassage", is_correct: false },
    ] },
    { id: "friseur-a2-t25", position: 25, kind: "gap", section: "test", prompt: "Er gefällt mir sehr, ___ vorne noch etwas unordentlich aussieht.", explanation: "„obwohl“ zeigt einen Gegensatz.", data: H("„obwohl“ pokazuje suprotnost.", "„obwohl“ zıtlık gösterir.", "„obwohl“ показує протиставлення.", "„obwohl“ arată o contradicție.", "„obwohl“ تُظهر تناقضًا."), quiz_answers: [
      { id: "friseur-a2-t25-a1", position: 1, text: "obwohl", is_correct: true },
    ] },
    { id: "friseur-a2-t26", position: 26, kind: "single_choice", section: "test", prompt: "Wer sagt „Kein Problem, dafür habe ich einen guten Vorschlag.“?", explanation: "Die Friseurin.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t26-a1", position: 1, text: "die Friseurin", is_correct: true },
      { id: "friseur-a2-t26-a2", position: 2, text: "der Kunde", is_correct: false },
      { id: "friseur-a2-t26-a3", position: 3, text: "niemand", is_correct: false },
    ] },
    { id: "friseur-a2-t27", position: 27, kind: "single_choice", section: "test", prompt: "Warum soll der Stil leicht zu stylen sein?", explanation: "Weil der Kunde morgens wenig Zeit hat.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t27-a1", position: 1, text: "Weil er morgens wenig Zeit hat.", is_correct: true },
      { id: "friseur-a2-t27-a2", position: 2, text: "Weil er den Salon nicht mag.", is_correct: false },
      { id: "friseur-a2-t27-a3", position: 3, text: "Weil es billiger ist.", is_correct: false },
    ] },
    { id: "friseur-a2-t28", position: 28, kind: "true_false", section: "test", prompt: "Die Strähnen dauern ein bisschen länger als ein normaler Haarschnitt.", explanation: "Richtig — die Friseurin sagt das im Dialog.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t28-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-a2-t28-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-a2-t29", position: 29, kind: "single_choice", section: "test", prompt: "Wie reagiert der Kunde, als die Friseurin einen Rabatt erwähnt?", explanation: "Er sagt, dass er bestimmt bald wiederkommt.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t29-a1", position: 1, text: "Er sagt, dass er bald wiederkommt.", is_correct: true },
      { id: "friseur-a2-t29-a2", position: 2, text: "Er beschwert sich.", is_correct: false },
      { id: "friseur-a2-t29-a3", position: 3, text: "Er verlangt sein Geld zurück.", is_correct: false },
    ] },
    { id: "friseur-a2-t30", position: 30, kind: "single_choice", section: "test", prompt: "Wie lange dauert eine Ausbildung zum Friseur/zur Friseurin in der Regel?", explanation: "Meistens etwa drei Jahre.", data: H("Obuka za frizera traje obicno oko tri godine.", "Kuaförlük eğitimi genelde yaklaşık üç yıl sürer.", "Навчання на перукаря зазвичай триває близько трьох років.", "Formarea de frizer durează de obicei circa trei ani.", "يستغرق تدريب الحلاقة عادة نحو ثلاث سنوات."), quiz_answers: [
      { id: "friseur-a2-t30-a1", position: 1, text: "etwa drei Jahre", is_correct: true },
      { id: "friseur-a2-t30-a2", position: 2, text: "etwa zehn Jahre", is_correct: false },
      { id: "friseur-a2-t30-a3", position: 3, text: "einen Tag", is_correct: false },
    ] },
    { id: "friseur-a2-t31", position: 31, kind: "true_false", section: "test", prompt: "Ein Friseursalon muss Werkzeuge wie Scheren und Kämme zwischen den Kunden desinfizieren.", explanation: "Richtig — das ist eine wichtige Hygieneregel.", data: H("Dezinfekcija alata je vazno higijensko pravilo.", "Aletlerin dezenfekte edilmesi önemli bir hijyen kuralıdır.", "Дезінфекція інструментів - важливе правило гігієни.", "Dezinfectarea uneltelor este o regulă importantă de igienă.", "تعقيم الأدوات قاعدة نظافة مهمة."), quiz_answers: [
      { id: "friseur-a2-t31-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-a2-t31-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-a2-t32", position: 32, kind: "single_choice", section: "test", prompt: "Was benutzt ein Friseur, um die Haare nach dem Waschen zu trocknen?", explanation: "Einen Fön.", data: H("Fen se koristi za susenje kose.", "Fön saçı kurutmak için kullanılır.", "Фен використовують для сушіння волосся.", "Uscătorul se folosește pentru a usca părul.", "يستخدم المجفف لتجفيف الشعر."), quiz_answers: [
      { id: "friseur-a2-t32-a1", position: 1, text: "einen Fön", is_correct: true },
      { id: "friseur-a2-t32-a2", position: 2, text: "einen Staubsauger", is_correct: false },
      { id: "friseur-a2-t32-a3", position: 3, text: "eine Bügeleisen", is_correct: false },
    ] },
    { id: "friseur-a2-t33", position: 33, kind: "single_choice", section: "test", prompt: "Was ist eine gute Vorbereitung, bevor man zum Friseur geht, wenn man eine Farbe möchte?", explanation: "Sich vorher über den gewünschten Farbton informieren oder ein Bild mitbringen.", data: H("Dobro je unaprijed razmisliti o zeljenoj nijansi.", "İstenen renk tonunu önceden düşünmek iyidir.", "Добре заздалегідь подумати про бажаний відтінок.", "Este bine să te gândești din timp la nuanța dorită.", "من الجيد التفكير مسبقًا في درجة اللون المرغوبة."), quiz_answers: [
      { id: "friseur-a2-t33-a1", position: 1, text: "sich vorher über den Farbton informieren", is_correct: true },
      { id: "friseur-a2-t33-a2", position: 2, text: "nichts essen", is_correct: false },
      { id: "friseur-a2-t33-a3", position: 3, text: "zu spät kommen", is_correct: false },
    ] },
    { id: "friseur-a2-t34", position: 34, kind: "single_choice", section: "test", prompt: "Was passt NICHT zu einer Kopfmassage?", explanation: "Ein Schraubenzieher gehört nicht zur Kopfmassage.", data: H("Odvijac ne pripada masazi glave.", "Tornavida kafa masajına ait değildir.", "Викрутка не належить до масажу голови.", "Șurubelnița nu are legătură cu masajul capului.", "مفك البراغي لا علاقة له بتدليك الرأس."), quiz_answers: [
      { id: "friseur-a2-t34-a1", position: 1, text: "ein Schraubenzieher", is_correct: true },
      { id: "friseur-a2-t34-a2", position: 2, text: "die Finger der Friseurin", is_correct: false },
      { id: "friseur-a2-t34-a3", position: 3, text: "spezielles Öl", is_correct: false },
    ] },
    { id: "friseur-a2-t35", position: 35, kind: "single_choice", section: "test", prompt: "Warum ist ein Termin oft besser als spontan vorbeizukommen?", explanation: "Man muss meist nicht so lange warten.", data: H("Termin obicno znaci krace cekanje.", "Randevu genelde daha az bekleme demektir.", "Запис зазвичай означає менше очікування.", "Programarea înseamnă de obicei mai puțină așteptare.", "الموعد يعني عادة انتظارًا أقصر."), quiz_answers: [
      { id: "friseur-a2-t35-a1", position: 1, text: "Man wartet meist kürzer.", is_correct: true },
      { id: "friseur-a2-t35-a2", position: 2, text: "Es ist immer kostenlos.", is_correct: false },
      { id: "friseur-a2-t35-a3", position: 3, text: "Man muss nicht bezahlen.", is_correct: false },
    ] },
    { id: "friseur-a2-t36", position: 36, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "Perfekt mit „sein“ bei Zustandsveränderung: „ist geworden“.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t36-a1", position: 1, text: "Der Pony ist ein bisschen zu kurz geworden.", is_correct: true },
      { id: "friseur-a2-t36-a2", position: 2, text: "Der Pony hat ein bisschen zu kurz geworden.", is_correct: false },
      { id: "friseur-a2-t36-a3", position: 3, text: "Der Pony ist ein bisschen zu kurz werden.", is_correct: false },
    ] },
    { id: "friseur-a2-t37", position: 37, kind: "single_choice", section: "test", prompt: "Welcher Satz drückt einen Gegensatz korrekt aus?", explanation: "„obwohl“ verbindet zwei gegensätzliche Ideen.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t37-a1", position: 1, text: "Wir machen das, obwohl es länger dauert.", is_correct: true },
      { id: "friseur-a2-t37-a2", position: 2, text: "Wir machen das, obwohl dauert es länger.", is_correct: false },
      { id: "friseur-a2-t37-a3", position: 3, text: "Obwohl wir das machen dauert länger es.", is_correct: false },
    ] },
    { id: "friseur-a2-t38", position: 38, kind: "gap", section: "test", prompt: "Die Frisur sieht viel frischer aus ___ vorher.", explanation: "„als“ nach dem Komparativ.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-a2-t38-a1", position: 1, text: "als", is_correct: true },
    ] },
    { id: "friseur-a2-t39", position: 39, kind: "single_choice", section: "test", prompt: "Was ist typisch für eine gute Beratung beim Friseur?", explanation: "Die Friseurin fragt genau nach den Wünschen und gibt Vorschläge.", data: H("Dobar savjet znaci pitati i predloziti.", "İyi danışmanlık, sormak ve önermektir.", "Гарна консультація означає питати і пропонувати.", "O consultanță bună înseamnă a întreba și a propune.", "الاستشارة الجيدة تعني السؤال والاقتراح."), quiz_answers: [
      { id: "friseur-a2-t39-a1", position: 1, text: "Sie fragt nach Wünschen und macht Vorschläge.", is_correct: true },
      { id: "friseur-a2-t39-a2", position: 2, text: "Sie schneidet sofort, ohne zu fragen.", is_correct: false },
      { id: "friseur-a2-t39-a3", position: 3, text: "Sie ignoriert die Kundin.", is_correct: false },
    ] },
    { id: "friseur-a2-t40", position: 40, kind: "single_choice", section: "test", prompt: "Wie endet die Geschichte?", explanation: "Die Kundin bedankt sich und verabschiedet sich, sehr zufrieden.", data: H("Na kraju price klijentkinja se zahvaljuje i oprasta.", "Hikaye sonunda müşteri teşekkür edip vedalaşıyor.", "Наприкінці історії клієнтка дякує і прощається.", "La finalul poveștii clienta mulțumește și își ia rămas bun.", "في نهاية القصة تشكر الزبونة وتودّع."), quiz_answers: [
      { id: "friseur-a2-t40-a1", position: 1, text: "Die Kundin bedankt sich und verabschiedet sich.", is_correct: true },
      { id: "friseur-a2-t40-a2", position: 2, text: "Die Kundin beschwert sich beim Chef.", is_correct: false },
      { id: "friseur-a2-t40-a3", position: 3, text: "Die Kundin geht ohne zu bezahlen.", is_correct: false },
    ] },

    // ===== Sprache & Grammatik: zum Anklicken =====
    { id: "friseur-a2-g1", position: 1, kind: "single_choice", section: "grammar", prompt: "Welcher Satz benutzt das Perfekt mit haben richtig?", explanation: "„gemacht“ mit haben, weil „machen“ kein Bewegungsverb ist.", data: H("machen koristi haben, ne sein.", "machen fiili haben alır, sein değil.", "machen вживається з haben, а не sein.", "machen folosește haben, nu sein.", "machen يستخدم haben وليس sein."), quiz_answers: [
      { id: "friseur-a2-g1-a1", position: 1, text: "Ich habe einen Termin gemacht.", is_correct: true },
      { id: "friseur-a2-g1-a2", position: 2, text: "Ich bin einen Termin gemacht.", is_correct: false },
      { id: "friseur-a2-g1-a3", position: 3, text: "Ich habe einen Termin machen.", is_correct: false },
    ] },
    { id: "friseur-a2-g2", position: 2, kind: "single_choice", section: "grammar", prompt: "Welcher Satz benutzt das Perfekt mit sein richtig?", explanation: "„gehen“ ist ein Bewegungsverb → Perfekt mit sein.", data: H("gehen je glagol kretanja -> sein.", "gehen bir hareket fiilidir -> sein.", "gehen - дієслово руху -> sein.", "gehen este verb de mișcare -> sein.", "gehen فعل حركة -> sein."), quiz_answers: [
      { id: "friseur-a2-g2-a1", position: 1, text: "Ich bin zum Friseur gegangen.", is_correct: true },
      { id: "friseur-a2-g2-a2", position: 2, text: "Ich habe zum Friseur gegangen.", is_correct: false },
      { id: "friseur-a2-g2-a3", position: 3, text: "Ich habe zum Friseur gegehen.", is_correct: false },
    ] },
    { id: "friseur-a2-g3", position: 3, kind: "single_choice", section: "grammar", prompt: "Welcher Nebensatz mit „weil“ ist richtig gebaut?", explanation: "Im weil-Satz steht das Verb am Ende.", data: H("U weil-recenici glagol ide na kraj.", "weil cümlesinde fiil sona gider.", "У реченні з weil дієслово стоїть у кінці.", "În propoziția cu weil verbul stă la final.", "في جملة weil يأتي الفعل في النهاية."), quiz_answers: [
      { id: "friseur-a2-g3-a1", position: 1, text: "..., weil meine Haare zu lang geworden sind.", is_correct: true },
      { id: "friseur-a2-g3-a2", position: 2, text: "..., weil sind meine Haare zu lang geworden.", is_correct: false },
      { id: "friseur-a2-g3-a3", position: 3, text: "..., weil geworden sind meine Haare zu lang.", is_correct: false },
    ] },
    { id: "friseur-a2-g4", position: 4, kind: "single_choice", section: "grammar", prompt: "Welcher dass-Satz ist richtig gebaut?", explanation: "Auch im dass-Satz steht das Verb am Ende.", data: H("I u dass-recenici glagol ide na kraj.", "dass cümlesinde de fiil sona gider.", "У реченні з dass дієслово теж стоїть у кінці.", "Și în propoziția cu dass verbul stă la final.", "وفي جملة dass أيضًا يأتي الفعل في النهاية."), quiz_answers: [
      { id: "friseur-a2-g4-a1", position: 1, text: "Ich finde, dass der Haarschnitt gut aussieht.", is_correct: true },
      { id: "friseur-a2-g4-a2", position: 2, text: "Ich finde, dass gut aussieht der Haarschnitt.", is_correct: false },
      { id: "friseur-a2-g4-a3", position: 3, text: "Ich finde dass der Haarschnitt aussieht gut.", is_correct: false },
    ] },
    { id: "friseur-a2-g5", position: 5, kind: "single_choice", section: "grammar", prompt: "Wohin oder wo? Welche Form passt: „Sie setzt sich vor ___ Spiegel.“", explanation: "Bewegung (wohin?) → Akkusativ: „den Spiegel“.", data: H("Kretanje (kuda?) -> akuzativ.", "Hareket (nereye?) -> akuzatif.", "Рух (куди?) -> знахідний.", "Mișcare (unde?) -> acuzativ.", "الحركة (إلى أين؟) -> حالة المفعول."), quiz_answers: [
      { id: "friseur-a2-g5-a1", position: 1, text: "den", is_correct: true },
      { id: "friseur-a2-g5-a2", position: 2, text: "dem", is_correct: false },
      { id: "friseur-a2-g5-a3", position: 3, text: "der", is_correct: false },
    ] },
    { id: "friseur-a2-g6", position: 6, kind: "single_choice", section: "grammar", prompt: "Wohin oder wo? Welche Form passt: „Sie sitzt vor ___ Spiegel.“", explanation: "Position (wo?) → Dativ: „dem Spiegel“.", data: H("Pozicija (gdje?) -> dativ.", "Konum (nerede?) -> datif.", "Позиція (де?) -> давальний.", "Poziție (unde?) -> dativ.", "الموقع (أين؟) -> حالة الجر."), quiz_answers: [
      { id: "friseur-a2-g6-a1", position: 1, text: "dem", is_correct: true },
      { id: "friseur-a2-g6-a2", position: 2, text: "den", is_correct: false },
      { id: "friseur-a2-g6-a3", position: 3, text: "der", is_correct: false },
    ] },
    { id: "friseur-a2-g7", position: 7, kind: "single_choice", section: "grammar", prompt: "Welcher Satz benutzt das trennbare Verb „aussehen“ richtig?", explanation: "„aus“ wandert ans Satzende.", data: H("aus ide na kraj recenice.", "aus cümlenin sonuna gider.", "aus переноситься в кінець речення.", "aus merge la finalul propoziției.", "aus تذهب إلى نهاية الجملة."), quiz_answers: [
      { id: "friseur-a2-g7-a1", position: 1, text: "Die Frisur sieht frischer aus.", is_correct: true },
      { id: "friseur-a2-g7-a2", position: 2, text: "Die Frisur aussieht frischer.", is_correct: false },
      { id: "friseur-a2-g7-a3", position: 3, text: "Die Frisur sieht ausfrischer.", is_correct: false },
    ] },
    { id: "friseur-a2-g8", position: 8, kind: "single_choice", section: "grammar", prompt: "Welcher Komparativ-Satz ist richtig?", explanation: "Komparativ + „als“ zum Vergleich.", data: H("Komparativ + als za poredjenje.", "Karşılaştırma + als kıyaslama için.", "Компаратив + als для порівняння.", "Comparativ + als pentru comparație.", "صيغة المقارنة + als للمقارنة."), quiz_answers: [
      { id: "friseur-a2-g8-a1", position: 1, text: "Die Haare sind kürzer als vorher.", is_correct: true },
      { id: "friseur-a2-g8-a2", position: 2, text: "Die Haare sind kürzer wie vorher.", is_correct: false },
      { id: "friseur-a2-g8-a3", position: 3, text: "Die Haare sind kurz als vorher.", is_correct: false },
    ] },

    // ===== Wo ist was? =====
    { id: "friseur-a2-p1", position: 1, kind: "single_choice", section: "places", prompt: "Die Kundin setzt sich ___ den Frisierstuhl. Welche Form passt?", explanation: "Bewegung (wohin?) → Akkusativ.", data: H("Kretanje -> akuzativ.", "Hareket -> akuzatif.", "Рух -> знахідний.", "Mișcare -> acuzativ.", "الحركة -> حالة المفعول."), quiz_answers: [
      { id: "friseur-a2-p1-a1", position: 1, text: "auf den", is_correct: true },
      { id: "friseur-a2-p1-a2", position: 2, text: "auf dem", is_correct: false },
      { id: "friseur-a2-p1-a3", position: 3, text: "auf der", is_correct: false },
    ] },
    { id: "friseur-a2-p2", position: 2, kind: "single_choice", section: "places", prompt: "Der Fön hängt ___ der Wand neben dem Spiegel. Welche Form passt?", explanation: "Position (wo?) → Dativ.", data: H("Pozicija -> dativ.", "Konum -> datif.", "Позиція -> давальний.", "Poziție -> dativ.", "الموقع -> حالة الجر."), quiz_answers: [
      { id: "friseur-a2-p2-a1", position: 1, text: "an", is_correct: true },
      { id: "friseur-a2-p2-a2", position: 2, text: "auf", is_correct: false },
      { id: "friseur-a2-p2-a3", position: 3, text: "unter", is_correct: false },
    ] },
    { id: "friseur-a2-p3", position: 3, kind: "gap", section: "places", prompt: "Die Friseurin stellt die Flasche ___ das Regal. (wohin? auf)", explanation: "Bewegung → Akkusativ: „auf das Regal“.", data: H("Kretanje -> akuzativ.", "Hareket -> akuzatif.", "Рух -> знахідний.", "Mișcare -> acuzativ.", "الحركة -> حالة المفعول."), quiz_answers: [
      { id: "friseur-a2-p3-a1", position: 1, text: "auf", is_correct: true },
    ] },
    { id: "friseur-a2-p4", position: 4, kind: "single_choice", section: "places", prompt: "Die Strähnenfolie liegt ___ dem Tisch, direkt neben der Schere. Welche Präposition passt?", explanation: "„auf“ beschreibt eine Fläche, auf der etwas liegt (Position).", data: H("Pozicija na povrsini -> dativ.", "Yüzey üzerindeki konum -> datif.", "Позиція на поверхні -> давальний.", "Poziție pe o suprafață -> dativ.", "الموقع على سطح -> حالة الجر."), quiz_answers: [
      { id: "friseur-a2-p4-a1", position: 1, text: "auf", is_correct: true },
      { id: "friseur-a2-p4-a2", position: 2, text: "unter", is_correct: false },
      { id: "friseur-a2-p4-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "friseur-a2-p5", position: 5, kind: "single_choice", section: "places", prompt: "Der Kunde stellt seine Tasche ___ den Stuhl. Welche Form passt?", explanation: "Bewegung (wohin?) → Akkusativ: „unter den Stuhl“.", data: H("Kretanje -> akuzativ.", "Hareket -> akuzatif.", "Рух -> знахідний.", "Mișcare -> acuzativ.", "الحركة -> حالة المفعول."), quiz_answers: [
      { id: "friseur-a2-p5-a1", position: 1, text: "unter", is_correct: true },
      { id: "friseur-a2-p5-a2", position: 2, text: "über", is_correct: false },
      { id: "friseur-a2-p5-a3", position: 3, text: "neben", is_correct: false },
    ] },
    { id: "friseur-a2-p6", position: 6, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo liegt die Strähnenfolie?", explanation: "Auf dem kleinen Tisch neben der Schere.", data: H("Pogledaj sliku: folija za pramenove je na malom stolu.", "Resme bak: röfle folyosu küçük masanın üzerinde.", "Подивись на малюнок: фольга для пасом на маленькому столику.", "Uită-te la imagine: folia pentru șuvițe e pe măsuța mică.", "انظر إلى الصورة: ورق الخصلات على الطاولة الصغيرة."), quiz_answers: [
      { id: "friseur-a2-p6-a1", position: 1, text: "auf dem kleinen Tisch", is_correct: true },
      { id: "friseur-a2-p6-a2", position: 2, text: "unter dem Stuhl", is_correct: false },
      { id: "friseur-a2-p6-a3", position: 3, text: "hinter dem Spiegel", is_correct: false },
    ] },
    { id: "friseur-a2-p7", position: 7, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wohin stellt die Friseurin die Pflegeprodukte?", explanation: "Sie stellt sie auf das Regal.", data: H("Pogledaj sliku: proizvodi idu na policu.", "Resme bak: ürünler rafa konur.", "Подивись на малюнок: продукти ставлять на полицю.", "Uită-te la imagine: produsele merg pe raft.", "انظر إلى الصورة: توضع المنتجات على الرف."), quiz_answers: [
      { id: "friseur-a2-p7-a1", position: 1, text: "auf das Regal", is_correct: true },
      { id: "friseur-a2-p7-a2", position: 2, text: "unter das Regal", is_correct: false },
      { id: "friseur-a2-p7-a3", position: 3, text: "neben das Regal", is_correct: false },
    ] },
    { id: "friseur-a2-p8", position: 8, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht der Wagen mit den Werkzeugen?", explanation: "Zwischen dem Spiegel und dem Waschbecken.", data: H("Pogledaj sliku: kolica su izmedju ogledala i umivaonika.", "Resme bak: araba ayna ile lavabo arasında.", "Подивись на малюнок: візок між дзеркалом і раковиною.", "Uită-te la imagine: căruciorul e între oglindă și chiuvetă.", "انظر إلى الصورة: العربة بين المرآة والحوض."), quiz_answers: [
      { id: "friseur-a2-p8-a1", position: 1, text: "zwischen dem Spiegel und dem Waschbecken", is_correct: true },
      { id: "friseur-a2-p8-a2", position: 2, text: "über dem Spiegel", is_correct: false },
      { id: "friseur-a2-p8-a3", position: 3, text: "unter dem Waschbecken", is_correct: false },
    ] },
    { id: "friseur-a2-p9", position: 9, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Das Handtuch hängt ___ dem Haken. (an)", explanation: "Position (wo?) → Dativ: „an dem Haken“.", data: H("Peskir visi na kuki.", "Havlu askıda asılı.", "Рушник висить на гачку.", "Prosopul atârnă în cuier.", "المنشفة معلقة على الخطاف."), quiz_answers: [
      { id: "friseur-a2-p9-a1", position: 1, text: "an", is_correct: true },
    ] },
    { id: "friseur-a2-p10", position: 10, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wohin legt die Friseurin den Kamm nach dem Gebrauch?", explanation: "Zurück in die Schublade.", data: H("Ceslja se vraca u fioku.", "Tarak çekmeceye geri konur.", "Гребінець повертається в шухляду.", "Pieptenele se pune înapoi în sertar.", "يُعاد المشط إلى الدرج."), quiz_answers: [
      { id: "friseur-a2-p10-a1", position: 1, text: "in die Schublade", is_correct: true },
      { id: "friseur-a2-p10-a2", position: 2, text: "in der Schublade", is_correct: false },
      { id: "friseur-a2-p10-a3", position: 3, text: "auf der Schublade", is_correct: false },
    ] },
    { id: "friseur-a2-p11", position: 11, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo wartet der nächste Kunde?", explanation: "Im Wartebereich, neben dem Eingang.", data: H("Sljedeci klijent ceka u cekaonici.", "Bir sonraki müşteri bekleme alanında bekliyor.", "Наступний клієнт чекає в зоні очікування.", "Următorul client așteaptă în zona de așteptare.", "الزبون التالي ينتظر في منطقة الانتظار."), quiz_answers: [
      { id: "friseur-a2-p11-a1", position: 1, text: "im Wartebereich, neben dem Eingang", is_correct: true },
      { id: "friseur-a2-p11-a2", position: 2, text: "unter dem Frisierstuhl", is_correct: false },
      { id: "friseur-a2-p11-a3", position: 3, text: "hinter der Kasse", is_correct: false },
    ] },
    { id: "friseur-a2-p12", position: 12, kind: "single_choice", section: "places", prompt: "Der Friseur stellt den Wagen ___ den Frisierstuhl. Welche Form passt?", explanation: "Bewegung (wohin?) → Akkusativ: „neben den Stuhl“.", data: H("Kretanje -> akuzativ.", "Hareket -> akuzatif.", "Рух -> знахідний.", "Mișcare -> acuzativ.", "الحركة -> حالة المفعول."), quiz_answers: [
      { id: "friseur-a2-p12-a1", position: 1, text: "neben", is_correct: true },
      { id: "friseur-a2-p12-a2", position: 2, text: "über", is_correct: false },
      { id: "friseur-a2-p12-a3", position: 3, text: "unter", is_correct: false },
    ] },
    { id: "friseur-a2-p13", position: 13, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo hängt der Spiegel im Salon?", explanation: "An der Wand, direkt vor dem Frisierstuhl.", data: H("Ogledalo visi na zidu, ispred stolice.", "Ayna duvarda, koltuğun tam önünde.", "Дзеркало висить на стіні, прямо перед кріслом.", "Oglinda atârnă pe perete, chiar în fața scaunului.", "المرآة معلقة على الجدار أمام الكرسي مباشرة."), quiz_answers: [
      { id: "friseur-a2-p13-a1", position: 1, text: "an der Wand, vor dem Frisierstuhl", is_correct: true },
      { id: "friseur-a2-p13-a2", position: 2, text: "unter dem Frisierstuhl", is_correct: false },
      { id: "friseur-a2-p13-a3", position: 3, text: "in der Schublade", is_correct: false },
    ] },
    { id: "friseur-a2-p14", position: 14, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Kasse steht ___ der Tür. (neben)", explanation: "Position (wo?) → Dativ: „neben der Tür“.", data: H("Kasa je pored vrata.", "Kasa kapının yanında.", "Каса біля дверей.", "Casa e lângă ușă.", "الصندوق بجانب الباب."), quiz_answers: [
      { id: "friseur-a2-p14-a1", position: 1, text: "neben", is_correct: true },
    ] },
    { id: "friseur-a2-p15", position: 15, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wohin geht die Kundin nach der Haarwäsche?", explanation: "Zurück zum Frisierstuhl vor dem Spiegel.", data: H("Klijentkinja se vraca na stolicu ispred ogledala.", "Müşteri, aynanın önündeki koltuğa geri döner.", "Клієнтка повертається до крісла перед дзеркалом.", "Clienta se întoarce la scaunul din fața oglinzii.", "تعود الزبونة إلى الكرسي أمام المرآة."), quiz_answers: [
      { id: "friseur-a2-p15-a1", position: 1, text: "zum Frisierstuhl vor dem Spiegel", is_correct: true },
      { id: "friseur-a2-p15-a2", position: 2, text: "zur Kasse", is_correct: false },
      { id: "friseur-a2-p15-a3", position: 3, text: "zum Ausgang", is_correct: false },
    ] },

    // ===== Dialog bauen =====
    { id: "friseur-a2-b1", position: 1, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 1 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Begrüßung/Termin → Wunsch beschreiben → Details klären → Strähnen anbieten → Start der Wäsche.", data: { items: [
      "Kunde: Guten Tag, ich habe letzte Woche online einen Termin gebucht.",
      "Friseurin: Was darf es denn heute sein?",
      "Kunde: Ich möchte, dass die Haare hinten kürzer werden, aber vorne etwas länger bleiben.",
      "Friseurin: Sollen wir vielleicht auch ein paar Strähnen machen?",
      "Friseurin: Gut, dann fangen wir mit der Haarwäsche an.",
    ] }, quiz_answers: [] },
    { id: "friseur-a2-b2", position: 2, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 2 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Ergebnis zeigen → kleines Problem → Produkt ablehnen → Preis nennen → Abschied.", data: { items: [
      "Friseurin: So, ich bin fertig. Gefällt Ihnen der neue Stil?",
      "Kunde: Er gefällt mir sehr, obwohl vorne noch etwas unordentlich aussieht.",
      "Kunde: Nein danke, ich glaube, das brauche ich diesmal nicht.",
      "Friseurin: Das macht dann 32 Euro, weil Sie auch die Strähnen bekommen haben.",
      "Friseurin: Auf Wiedersehen und einen schönen Tag noch!",
    ] }, quiz_answers: [] },
  ],
} as const;
