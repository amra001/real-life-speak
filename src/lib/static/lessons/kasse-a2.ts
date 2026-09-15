const T = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ bks, tr, uk, ro, ar });
const H = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ help: T(bks, tr, uk, ro, ar) });

export const kasseA2 = {
  lesson: {
    id: "d7f83a52-9c4e-4b71-8d6a-3e2f5c9b1a84",
    slug: "kasse-a2",
    title: "An der Kasse – A2",
    description:
      "Ein ausführlicherer Ablauf an der Kasse: Rabatte vergleichen, ein Problem mit dem Preis erklären und verschiedene Zahlungsarten benutzen.",
    level: "A2",
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
      "Nebensätze mit weil/dass/wenn",
      "Perfekt (haben/sein + Partizip II)",
      "Trennbare Verben (einpacken, aufladen)",
      "Komparativ (schneller, günstiger)",
      "Wechselpräpositionen",
      "Modalverben im Kontext",
    ],
    grammar_notes: [
      {
        title: "Nebensätze mit weil",
        explanation:
          "„Weil“ leitet einen Grund ein. Im Nebensatz steht das konjugierte Verb am Ende, anders als im Hauptsatz.",
        examples: [
          "Ich zeige die Kundenkarte, weil ich Rabatt bekomme.",
          "Die Kassiererin ruft den Kollegen, weil der Preis nicht stimmt.",
        ],
      },
      {
        title: "Nebensätze mit dass",
        explanation:
          "„Dass“ leitet einen Inhaltssatz ein, oft nach Verben wie sagen, denken, glauben, hoffen. Auch hier steht das Verb am Ende des Nebensatzes.",
        examples: [
          "Ich glaube, dass der Preis auf dem Bildschirm falsch ist.",
          "Die Kassiererin sagt, dass sie den Fehler sofort korrigiert.",
        ],
      },
      {
        title: "Nebensätze mit wenn",
        explanation:
          "„Wenn“ beschreibt eine Bedingung oder einen wiederkehrenden Zeitpunkt. Das Verb steht im Nebensatz am Ende.",
        examples: [
          "Wenn ich kontaktlos bezahle, brauche ich meistens keine PIN.",
          "Wenn die Schlange lang ist, gehe ich zur Selbstbedienungskasse.",
        ],
      },
      {
        title: "Perfekt: haben oder sein + Partizip II",
        explanation:
          "Das Perfekt bildet man mit „haben“ oder „sein“ + Partizip II. Die meisten Verben nehmen „haben“, Verben der Bewegung oder Zustandsänderung nehmen „sein“.",
        examples: [
          "Ich habe an der Kasse bar bezahlt.",
          "Wir sind lange in der Schlange gestanden.",
          "Die Kassiererin hat den Preis korrigiert.",
        ],
      },
      {
        title: "Trennbare Verben: einpacken, aufladen, ausdrucken",
        explanation:
          "Bei trennbaren Verben trennt sich die Vorsilbe im Hauptsatz und wandert ans Ende. Im Perfekt steht „ge“ zwischen Vorsilbe und Stamm.",
        examples: [
          "Ich packe die Waren selbst ein.",
          "Ich habe die Waren selbst eingepackt.",
          "Die Kassiererin druckt den Bon aus.",
        ],
      },
      {
        title: "Komparativ: schneller, günstiger, praktischer",
        explanation:
          "Der Komparativ vergleicht zwei Dinge. Man bildet ihn meist mit -er, oft mit Umlaut. Nach dem Komparativ steht „als“.",
        examples: [
          "Kontaktloses Bezahlen ist schneller als Bargeld.",
          "Die Selbstbedienungskasse ist oft günstiger für kurze Einkäufe.",
          "Mit Kundenkarte ist der Einkauf billiger als ohne.",
        ],
      },
      {
        title: "Wechselpräpositionen: in, an, auf mit Akkusativ oder Dativ",
        explanation:
          "Wechselpräpositionen stehen mit Akkusativ bei einer Bewegung (wohin?) und mit Dativ bei einer Position (wo?).",
        examples: [
          "Ich lege die Karte in das Lesegerät. (wohin? Akkusativ)",
          "Die Karte steckt in dem Lesegerät. (wo? Dativ)",
        ],
      },
      {
        title: "Modalverben im Kontext: müssen, sollen, dürfen",
        explanation:
          "Modalverben drücken Notwendigkeit (müssen), Erwartung (sollen) oder Erlaubnis (dürfen) aus. Der Infinitiv steht am Satzende.",
        examples: [
          "Ich muss meine PIN-Nummer eingeben.",
          "Der Kunde soll den Bon aufheben.",
          "Man darf hier kontaktlos bis zu einem bestimmten Betrag ohne PIN bezahlen.",
        ],
      },
    ],
    place_items: [],
  },

  scenes: [
    { id: "kasse-a2-s1", position: 1, german_text: "Weil ich wenig Zeit habe, gehe ich zur Selbstbedienungskasse.", translations: T("Jer imam malo vremena, idem na samouslužnu kasu.", "Az zamanım olduğu için self servis kasaya gidiyorum.", "Оскільки в мене мало часу, я йду до каси самообслуговування.", "Fiindcă am puțin timp, merg la casa self-service.", "بما أن وقتي قليل، أذهب إلى صندوق الخدمة الذاتية.") },
    { id: "kasse-a2-s2", position: 2, german_text: "Dort scanne ich meine Waren selbst und packe sie ein.", translations: T("Tamo sam skeniram svoju robu i sam je pakujem.", "Orada ürünlerimi kendim okutup poşetliyorum.", "Там я сам сканую свій товар і пакую його.", "Acolo îmi scanez singur produsele și le împachetez.", "هناك أمسح بضاعتي بنفسي وأعبئها.") },
    { id: "kasse-a2-s3", position: 3, german_text: "Ich glaube, dass ein Preis auf dem Bildschirm nicht stimmt.", translations: T("Mislim da jedna cijena na ekranu nije tačna.", "Ekrandaki bir fiyatın doğru olmadığını düşünüyorum.", "Я думаю, що одна ціна на екрані неправильна.", "Cred că un preț de pe ecran nu este corect.", "أعتقد أن سعرًا على الشاشة غير صحيح.") },
    { id: "kasse-a2-s4", position: 4, german_text: "Deshalb drücke ich den Knopf und rufe eine Mitarbeiterin.", translations: T("Zato pritiskam dugme i zovem radnicu.", "Bu yüzden düğmeye basıp bir çalışan çağırıyorum.", "Тому я натискаю кнопку і кличу працівницю.", "De aceea apăs butonul și chem o angajată.", "لذلك أضغط على الزر وأستدعي موظفة.") },
    { id: "kasse-a2-s5", position: 5, german_text: "Sie kommt schnell und prüft den Preis am Regal.", translations: T("Ona brzo dolazi i provjerava cijenu na polici.", "Hızlıca gelip fiyatı rafta kontrol ediyor.", "Вона швидко приходить і перевіряє ціну на полиці.", "Ea vine repede și verifică prețul la raft.", "تأتي بسرعة وتتحقق من السعر عند الرف.") },
    { id: "kasse-a2-s6", position: 6, german_text: "Sie sagt, dass der alte Preis noch im System war.", translations: T("Kaže da je stara cijena još bila u sistemu.", "Eski fiyatın hâlâ sistemde olduğunu söylüyor.", "Вона каже, що стара ціна ще була в системі.", "Ea spune că prețul vechi mai era în sistem.", "تقول إن السعر القديم كان لا يزال في النظام.") },
    { id: "kasse-a2-s7", position: 7, german_text: "Nachdem sie den Preis korrigiert hat, kann ich weiterbezahlen.", translations: T("Nakon što je ispravila cijenu, mogu nastaviti plaćanje.", "Fiyatı düzelttikten sonra ödemeye devam edebiliyorum.", "Після того як вона виправила ціну, я можу продовжити оплату.", "După ce a corectat prețul, pot continua plata.", "بعد أن تصحح السعر، يمكنني متابعة الدفع.") },
    { id: "kasse-a2-s8", position: 8, german_text: "Wenn ich eine Kundenkarte habe, bekomme ich zusätzlichen Rabatt.", translations: T("Ako imam karticu lojalnosti, dobijam dodatni popust.", "Sadakat kartım varsa, ekstra indirim alıyorum.", "Якщо у мене є картка лояльності, я отримую додаткову знижку.", "Dacă am card de fidelitate, primesc reducere suplimentară.", "إذا كان لدي بطاقة ولاء، أحصل على خصم إضافي.") },
    { id: "kasse-a2-s9", position: 9, german_text: "Ich habe meine Kundenkarte diesmal dabei und zeige sie.", translations: T("Ovaj put imam karticu lojalnosti sa sobom i pokazujem je.", "Bu sefer sadakat kartım yanımda ve onu gösteriyorum.", "Цього разу картка лояльності зі мною, і я її показую.", "De data asta am cardul de fidelitate la mine și îl arăt.", "هذه المرة معي بطاقة الولاء وأريها.") },
    { id: "kasse-a2-s10", position: 10, german_text: "Kontaktloses Bezahlen ist schneller als mit Bargeld.", translations: T("Beskontaktno plaćanje je brže od gotovine.", "Temassız ödeme nakitten daha hızlıdır.", "Безконтактна оплата швидша за готівку.", "Plata contactless este mai rapidă decât cu numerar.", "الدفع بدون تلامس أسرع من النقد.") },
    { id: "kasse-a2-s11", position: 11, german_text: "Ich halte meine Karte an das Gerät und warte kurz.", translations: T("Prislonim karticu na uređaj i kratko čekam.", "Kartımı cihaza tutuyorum ve kısaca bekliyorum.", "Я прикладаю картку до пристрою і трохи чекаю.", "Îmi țin cardul lângă aparat și aștept puțin.", "أضع بطاقتي أمام الجهاز وأنتظر قليلًا.") },
    { id: "kasse-a2-s12", position: 12, german_text: "Weil der Betrag höher als üblich ist, muss ich meine PIN eingeben.", translations: T("Jer je iznos veći nego obično, moram unijeti svoj PIN.", "Tutar her zamankinden yüksek olduğu için PIN'imi girmem gerekiyor.", "Оскільки сума вища за звичну, мені треба ввести PIN.", "Fiindcă suma este mai mare decât de obicei, trebuie să introduc PIN-ul.", "بما أن المبلغ أعلى من المعتاد، يجب أن أدخل رقم PIN.") },
    { id: "kasse-a2-s13", position: 13, german_text: "Nachdem die Zahlung akzeptiert wurde, druckt die Maschine den Bon aus.", translations: T("Nakon što je plaćanje prihvaćeno, mašina štampa račun.", "Ödeme kabul edildikten sonra, makine fişi yazdırır.", "Після того як оплату прийнято, апарат друкує чек.", "După ce plata a fost acceptată, aparatul tipărește bonul.", "بعد قبول الدفع، تطبع الآلة الإيصال.") },
    { id: "kasse-a2-s14", position: 14, german_text: "Ich nehme den Bon mit, falls ich etwas zurückgeben möchte.", translations: T("Uzimam račun ako želim nešto vratiti.", "Bir şey iade etmek istersem diye fişi alıyorum.", "Я беру чек на випадок, якщо захочу щось повернути.", "Iau bonul în caz că vreau să returnez ceva.", "آخذ الإيصال في حال أردت إرجاع شيء ما.") },
    { id: "kasse-a2-s15", position: 15, german_text: "Ich bedanke mich und verlasse die Kasse zufrieden.", translations: T("Zahvaljujem se i zadovoljno napuštam kasu.", "Teşekkür ederim ve memnun bir şekilde kasadan ayrılıyorum.", "Я дякую і задоволено відходжу від каси.", "Mulțumesc și plec mulțumit de la casă.", "أشكر وأغادر الصندوق راضيًا.") },
  ],

  vocab: [
    { id: "kasse-a2-v1", position: 1, term: "Selbstbedienungskasse", article: "die", plural: "die Selbstbedienungskassen", word_class: "Nomen", example: "Ich gehe zur Selbstbedienungskasse.", translations: T("samouslužna kasa", "self servis kasa", "каса самообслуговування", "casă self-service", "صندوق الخدمة الذاتية") },
    { id: "kasse-a2-v2", position: 2, term: "Rabatt", article: "der", plural: "die Rabatte", word_class: "Nomen", example: "Mit der Kundenkarte bekomme ich Rabatt.", translations: T("popust", "indirim", "знижка", "reducere", "خصم") },
    { id: "kasse-a2-v3", position: 3, term: "Bildschirm", article: "der", plural: "die Bildschirme", word_class: "Nomen", example: "Der Preis steht auf dem Bildschirm.", translations: T("ekran", "ekran", "екран", "ecran", "الشاشة") },
    { id: "kasse-a2-v4", position: 4, term: "Kartenlesegerät", article: "das", plural: "die Kartenlesegeräte", word_class: "Nomen", example: "Ich halte die Karte an das Kartenlesegerät.", translations: T("čitač kartica", "kart okuyucu", "пристрій зчитування карток", "cititor de card", "قارئ البطاقة") },
    { id: "kasse-a2-v5", position: 5, term: "Betrag", article: "der", plural: "die Beträge", word_class: "Nomen", example: "Der Betrag ist höher als üblich.", translations: T("iznos", "tutar", "сума", "sumă", "المبلغ") },
    { id: "kasse-a2-v6", position: 6, term: "System", article: "das", plural: "die Systeme", word_class: "Nomen", example: "Der alte Preis war noch im System.", translations: T("sistem", "sistem", "система", "sistem", "النظام") },
    { id: "kasse-a2-v7", position: 7, term: "Knopf", article: "der", plural: "die Knöpfe", word_class: "Nomen", example: "Ich drücke den Knopf für Hilfe.", translations: T("dugme", "düğme", "кнопка", "buton", "زر") },
    { id: "kasse-a2-v8", position: 8, term: "Zahlung", article: "die", plural: "die Zahlungen", word_class: "Nomen", example: "Die Zahlung wurde akzeptiert.", translations: T("plaćanje", "ödeme", "оплата", "plată", "الدفع") },
    { id: "kasse-a2-v9", position: 9, term: "Beleg", article: "der", plural: "die Belege", word_class: "Nomen", example: "Der Beleg ist wichtig für die Rückgabe.", translations: T("dokaz o kupovini", "makbuz", "квитанція", "chitanță", "إيصال") },
    { id: "kasse-a2-v10", position: 10, term: "Rückgabe", article: "die", plural: "die Rückgaben", word_class: "Nomen", example: "Bei der Rückgabe brauche ich den Bon.", translations: T("povrat robe", "iade", "повернення", "returnare", "الإرجاع") },
    { id: "kasse-a2-v11", position: 11, term: "Fehler", article: "der", plural: "die Fehler", word_class: "Nomen", example: "Es gibt einen Fehler beim Preis.", translations: T("greška", "hata", "помилка", "eroare", "خطأ") },
    { id: "kasse-a2-v12", position: 12, term: "Kollege", article: "der", plural: "die Kollegen", word_class: "Nomen", example: "Sie ruft einen Kollegen zur Hilfe.", translations: T("kolega", "meslektaş", "колега", "coleg", "زميل") },
    { id: "kasse-a2-v13", position: 13, term: "einpacken", word_class: "Verb", example: "Ich packe die Waren selbst ein.", translations: T("spakovati", "poşetlemek", "пакувати", "a împacheta", "يعبئ") },
    { id: "kasse-a2-v14", position: 14, term: "aufladen", word_class: "Verb", example: "Ich lade die Karte auf.", translations: T("dopuniti (karticu)", "yüklemek", "поповнювати", "a încărca", "يشحن") },
    { id: "kasse-a2-v15", position: 15, term: "ausdrucken", word_class: "Verb", example: "Die Maschine druckt den Bon aus.", translations: T("odštampati", "yazdırmak", "роздрукувати", "a printa", "يطبع") },
    { id: "kasse-a2-v16", position: 16, term: "korrigieren", word_class: "Verb", example: "Sie korrigiert den Preis.", translations: T("ispraviti", "düzeltmek", "виправляти", "a corecta", "يصحح") },
    { id: "kasse-a2-v17", position: 17, term: "prüfen", word_class: "Verb", example: "Sie prüft den Preis am Regal.", translations: T("provjeriti", "kontrol etmek", "перевіряти", "a verifica", "يتحقق") },
    { id: "kasse-a2-v18", position: 18, term: "zurückgeben", word_class: "Verb", example: "Ich möchte das Produkt zurückgeben.", translations: T("vratiti", "iade etmek", "повертати", "a returna", "يعيد") },
    { id: "kasse-a2-v19", position: 19, term: "akzeptieren", word_class: "Verb", example: "Die Karte wird akzeptiert.", translations: T("prihvatiti", "kabul etmek", "приймати", "a accepta", "يقبل") },
    { id: "kasse-a2-v20", position: 20, term: "günstig", word_class: "Adjektiv", example: "Die Selbstbedienungskasse ist günstig für kurze Einkäufe.", translations: T("povoljno", "uygun", "вигідно", "avantajos", "مناسب") },
    { id: "kasse-a2-v21", position: 21, term: "üblich", word_class: "Adjektiv", example: "Der Betrag ist höher als üblich.", translations: T("uobičajeno", "olağan", "звичний", "obișnuit", "معتاد") },
    { id: "kasse-a2-v22", position: 22, term: "zufrieden", word_class: "Adjektiv", example: "Ich bin zufrieden mit dem Service.", translations: T("zadovoljan", "memnun", "задоволений", "mulțumit", "راضٍ") },
    { id: "kasse-a2-v23", position: 23, term: "schnell", word_class: "Adjektiv", example: "Kontaktloses Bezahlen ist schnell.", translations: T("brzo", "hızlı", "швидко", "rapid", "سريع") },
    { id: "kasse-a2-v24", position: 24, term: "Barzahlung", article: "die", plural: "die Barzahlungen", word_class: "Nomen", example: "Ich bevorzuge die Barzahlung.", translations: T("plaćanje gotovinom", "nakit ödeme", "оплата готівкою", "plată cash", "الدفع نقدًا") },
    { id: "kasse-a2-v25", position: 25, term: "Kartenzahlung", article: "die", plural: "die Kartenzahlungen", word_class: "Nomen", example: "Die Kartenzahlung dauert nur ein paar Sekunden.", translations: T("plaćanje karticom", "kartla ödeme", "оплата карткою", "plată cu cardul", "الدفع بالبطاقة") },
    { id: "kasse-a2-v26", position: 26, term: "Sicherheitscode", article: "der", plural: "die Sicherheitscodes", word_class: "Nomen", example: "Manchmal braucht man einen Sicherheitscode.", translations: T("sigurnosni kod", "güvenlik kodu", "код безпеки", "cod de securitate", "رمز الأمان") },
    { id: "kasse-a2-v27", position: 27, term: "Mitarbeiterin", article: "die", plural: "die Mitarbeiterinnen", word_class: "Nomen", example: "Die Mitarbeiterin hilft mir sofort.", translations: T("radnica", "kadın çalışan", "працівниця", "angajată", "الموظفة") },
    { id: "kasse-a2-v28", position: 28, term: "Wartezeit", article: "die", plural: "die Wartezeiten", word_class: "Nomen", example: "Die Wartezeit an der Kasse war kurz.", translations: T("vrijeme čekanja", "bekleme süresi", "час очікування", "timp de așteptare", "وقت الانتظار") },
  ],

  dialog: [
    { id: "kasse-a2-d1-1", position: 1, dialog_index: 1, dialog_title: "Dialog 1 · Problem an der Selbstbedienungskasse", speaker: "Kunde", german_text: "Entschuldigung, ich glaube, dass hier ein Preis nicht stimmt.", translations: T("Izvinite, mislim da ovdje cijena nije tačna.", "Affedersiniz, sanırım burada bir fiyat doğru değil.", "Вибачте, здається, тут ціна неправильна.", "Scuzați-mă, cred că un preț de aici nu este corect.", "عفوًا، أعتقد أن هناك سعرًا غير صحيح.") },
    { id: "kasse-a2-d1-2", position: 2, dialog_index: 1, dialog_title: "Dialog 1 · Problem an der Selbstbedienungskasse", speaker: "Mitarbeiterin", german_text: "Zeigen Sie mir bitte, welches Produkt Sie meinen.", translations: T("Pokažite mi molim vas koji proizvod mislite.", "Lütfen hangi ürünü kastettiğinizi gösterin.", "Покажіть мені, будь ласка, який товар ви маєте на увазі.", "Arătați-mi vă rog ce produs aveți în vedere.", "أرني من فضلك المنتج الذي تقصده.") },
    { id: "kasse-a2-d1-3", position: 3, dialog_index: 1, dialog_title: "Dialog 1 · Problem an der Selbstbedienungskasse", speaker: "Kunde", german_text: "Diese Nudeln hier. Auf dem Regal steht ein anderer Preis als auf dem Bildschirm.", translations: T("Ove tjestenine. Na polici piše druga cijena nego na ekranu.", "Bu makarnalar. Rafta ekrandaki fiyattan farklı bir fiyat yazıyor.", "Ці макарони. На полиці зазначена інша ціна, ніж на екрані.", "Aceste paste. Pe raft scrie alt preț decât pe ecran.", "هذا المعكرونة. مكتوب على الرف سعر مختلف عن الشاشة.") },
    { id: "kasse-a2-d1-4", position: 4, dialog_index: 1, dialog_title: "Dialog 1 · Problem an der Selbstbedienungskasse", speaker: "Mitarbeiterin", german_text: "Ich prüfe das sofort im System. Einen Moment, bitte.", translations: T("Odmah ću to provjeriti u sistemu. Trenutak, molim.", "Bunu hemen sistemde kontrol ediyorum. Bir dakika lütfen.", "Я одразу перевірю це в системі. Хвилинку, будь ласка.", "Verific imediat în sistem. O clipă, vă rog.", "سأتحقق من ذلك فورًا في النظام. لحظة من فضلك.") },
    { id: "kasse-a2-d1-5", position: 5, dialog_index: 1, dialog_title: "Dialog 1 · Problem an der Selbstbedienungskasse", speaker: "Mitarbeiterin", german_text: "Sie haben recht, der alte Preis war noch im System.", translations: T("U pravu ste, stara cijena je još bila u sistemu.", "Haklısınız, eski fiyat hâlâ sistemdeydi.", "Ви маєте рацію, стара ціна ще була в системі.", "Aveți dreptate, prețul vechi mai era în sistem.", "أنت محق، السعر القديم كان لا يزال في النظام.") },
    { id: "kasse-a2-d1-6", position: 6, dialog_index: 1, dialog_title: "Dialog 1 · Problem an der Selbstbedienungskasse", speaker: "Kunde", german_text: "Danke, dass Sie das so schnell geklärt haben.", translations: T("Hvala što ste to tako brzo riješili.", "Bunu bu kadar hızlı çözdüğünüz için teşekkürler.", "Дякую, що так швидко це вирішили.", "Mulțumesc că ați rezolvat asta atât de repede.", "شكرًا لأنك حللت هذا بسرعة.") },
    { id: "kasse-a2-d1-7", position: 7, dialog_index: 1, dialog_title: "Dialog 1 · Problem an der Selbstbedienungskasse", speaker: "Mitarbeiterin", german_text: "Kein Problem, nachdem ich den Preis korrigiert habe, können Sie weitermachen.", translations: T("Nema problema, nakon što sam ispravila cijenu, možete nastaviti.", "Sorun değil, fiyatı düzelttikten sonra devam edebilirsiniz.", "Не проблема, після того як я виправила ціну, ви можете продовжити.", "Nicio problemă, după ce am corectat prețul, puteți continua.", "لا مشكلة، بعد أن صححت السعر، يمكنك المتابعة.") },
    { id: "kasse-a2-d1-8", position: 8, dialog_index: 1, dialog_title: "Dialog 1 · Problem an der Selbstbedienungskasse", speaker: "Kunde", german_text: "Perfekt, ich habe übrigens auch eine Kundenkarte dabei.", translations: T("Odlično, usput imam i karticu lojalnosti sa sobom.", "Mükemmel, bu arada yanımda sadakat kartım da var.", "Чудово, до речі, у мене також є картка лояльності.", "Perfect, apropo am și un card de fidelitate la mine.", "ممتاز، بالمناسبة معي أيضًا بطاقة ولاء.") },
    { id: "kasse-a2-d1-9", position: 9, dialog_index: 1, dialog_title: "Dialog 1 · Problem an der Selbstbedienungskasse", speaker: "Mitarbeiterin", german_text: "Sehr gut, dann scannen Sie die Karte am Anfang noch schnell.", translations: T("Vrlo dobro, onda brzo skenirajte karticu na početku.", "Çok iyi, o zaman kartı en başta hızlıca okutun.", "Дуже добре, тоді швидко відскануйте картку на початку.", "Foarte bine, atunci scanați repede cardul la început.", "جيد جدًا، إذن امسح البطاقة بسرعة في البداية.") },
    { id: "kasse-a2-d1-10", position: 10, dialog_index: 1, dialog_title: "Dialog 1 · Problem an der Selbstbedienungskasse", speaker: "Kunde", german_text: "Mache ich. Vielen Dank für Ihre Hilfe!", translations: T("Uradiću to. Hvala vam puno na pomoći!", "Yaparım. Yardımınız için çok teşekkürler!", "Зроблю. Дуже дякую за допомогу!", "Fac asta. Mulțumesc mult pentru ajutor!", "سأفعل ذلك. شكرًا جزيلاً على مساعدتك!") },
    { id: "kasse-a2-d1-11", position: 11, dialog_index: 1, dialog_title: "Dialog 1 · Problem an der Selbstbedienungskasse", speaker: "Mitarbeiterin", german_text: "Gern geschehen, einen schönen Tag noch!", translations: T("Nema na čemu, prijatan dan još!", "Rica ederim, iyi günler!", "Будь ласка, гарного дня!", "Cu plăcere, o zi frumoasă!", "على الرحب والسعة، يومًا سعيدًا!") },

    { id: "kasse-a2-d2-1", position: 1, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen mit Karte", speaker: "Kassiererin", german_text: "So, das wären dann 24 Euro 90. Bezahlen Sie bar oder mit Karte?", translations: T("Dakle, to bi bilo 24 eura i 90 centi. Plaćate li gotovinom ili karticom?", "Peki, bu 24 avro 90 sent ediyor. Nakit mi kartla mı ödeyeceksiniz?", "Отже, це 24 євро 90. Ви платите готівкою чи карткою?", "Deci, ar fi 24 euro și 90. Plătiți cash sau cu cardul?", "إذن، المجموع 24 يورو و90 سنتًا. هل تدفع نقدًا أم بالبطاقة؟") },
    { id: "kasse-a2-d2-2", position: 2, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen mit Karte", speaker: "Kunde", german_text: "Ich bezahle mit Karte, weil ich kein Bargeld dabeihabe.", translations: T("Plaćam karticom, jer nemam gotovinu sa sobom.", "Kartla ödüyorum çünkü yanımda nakit yok.", "Я плачу карткою, бо в мене немає готівки.", "Plătesc cu cardul, pentru că nu am numerar la mine.", "أدفع بالبطاقة لأنه ليس معي نقود.") },
    { id: "kasse-a2-d2-3", position: 3, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen mit Karte", speaker: "Kassiererin", german_text: "Kein Problem. Halten Sie die Karte bitte an das Gerät.", translations: T("Nema problema. Prislonite karticu na uređaj.", "Sorun değil. Kartınızı cihaza tutun lütfen.", "Немає проблем. Прикладіть, будь ласка, картку до пристрою.", "Nicio problemă. Țineți vă rog cardul lângă aparat.", "لا مشكلة. ضع البطاقة أمام الجهاز من فضلك.") },
    { id: "kasse-a2-d2-4", position: 4, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen mit Karte", speaker: "Kunde", german_text: "Muss ich meine PIN eingeben, weil der Betrag hoch ist?", translations: T("Moram li unijeti PIN jer je iznos visok?", "Tutar yüksek olduğu için PIN'imi girmem gerekiyor mu?", "Чи мушу я ввести PIN, бо сума висока?", "Trebuie să introduc PIN-ul pentru că suma e mare?", "هل يجب أن أدخل رقم PIN لأن المبلغ كبير؟") },
    { id: "kasse-a2-d2-5", position: 5, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen mit Karte", speaker: "Kassiererin", german_text: "Ja, ab einem bestimmten Betrag verlangt das Gerät immer eine PIN.", translations: T("Da, od određenog iznosa uređaj uvijek traži PIN.", "Evet, belirli bir tutardan sonra cihaz her zaman PIN ister.", "Так, від певної суми пристрій завжди вимагає PIN.", "Da, de la o anumită sumă aparatul cere mereu PIN.", "نعم، بدءًا من مبلغ معين يطلب الجهاز دائمًا رقم PIN.") },
    { id: "kasse-a2-d2-6", position: 6, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen mit Karte", speaker: "Kunde", german_text: "Verstanden, ich gebe die Nummer ein.", translations: T("Razumijem, unosim broj.", "Anlaşıldı, numarayı giriyorum.", "Зрозуміло, я введу номер.", "Am înțeles, introduc numărul.", "فهمت، سأدخل الرقم.") },
    { id: "kasse-a2-d2-7", position: 7, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen mit Karte", speaker: "Kassiererin", german_text: "Die Zahlung wurde akzeptiert. Nachdem ich den Bon ausgedruckt habe, sind Sie fertig.", translations: T("Plaćanje je prihvaćeno. Nakon što odštampam račun, gotovi ste.", "Ödeme kabul edildi. Fişi yazdırdıktan sonra işiniz bitti.", "Оплату прийнято. Після того як я роздрукую чек, ви завершите.", "Plata a fost acceptată. După ce printez bonul, ați terminat.", "تم قبول الدفع. بعد أن أطبع الإيصال، تكون قد انتهيت.") },
    { id: "kasse-a2-d2-8", position: 8, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen mit Karte", speaker: "Kunde", german_text: "Super, danke. Brauche ich den Bon für irgendetwas?", translations: T("Super, hvala. Trebam li račun za nešto?", "Harika, teşekkürler. Fişe bir şey için ihtiyacım var mı?", "Чудово, дякую. Чек мені для чогось потрібен?", "Super, mulțumesc. Am nevoie de bon pentru ceva?", "رائع، شكرًا. هل أحتاج الإيصال لشيء ما؟") },
    { id: "kasse-a2-d2-9", position: 9, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen mit Karte", speaker: "Kassiererin", german_text: "Falls Sie etwas zurückgeben möchten, brauchen Sie den Bon als Beleg.", translations: T("Ako želite nešto vratiti, treba vam račun kao dokaz.", "Bir şey iade etmek isterseniz, fişe kanıt olarak ihtiyacınız var.", "Якщо ви захочете щось повернути, вам знадобиться чек як підтвердження.", "Dacă doriți să returnați ceva, aveți nevoie de bon ca dovadă.", "إذا أردت إرجاع شيء، ستحتاج الإيصال كدليل.") },
    { id: "kasse-a2-d2-10", position: 10, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen mit Karte", speaker: "Kunde", german_text: "Gut zu wissen. Vielen Dank für die Hilfe und auf Wiedersehen!", translations: T("Dobro je znati. Hvala vam puno na pomoći i doviđenja!", "İyi bir bilgi. Yardımınız için çok teşekkürler ve hoşça kalın!", "Добре знати. Дуже дякую за допомогу і до побачення!", "Bine de știut. Mulțumesc mult pentru ajutor și la revedere!", "جيد أن أعرف ذلك. شكرًا جزيلاً على المساعدة وإلى اللقاء!") },
    { id: "kasse-a2-d2-11", position: 11, dialog_index: 2, dialog_title: "Dialog 2 · Bezahlen mit Karte", speaker: "Kassiererin", german_text: "Auf Wiedersehen, einen schönen Tag noch!", translations: T("Doviđenja, prijatan dan još!", "Hoşça kalın, iyi günler!", "До побачення, гарного дня!", "La revedere, o zi frumoasă!", "إلى اللقاء، يومًا سعيدًا!") },
  ],

  questions: [
    // ===== Übungen (practice) =====
    { id: "kasse-a2-q1", position: 1, kind: "single_choice", section: "practice", prompt: "Warum geht die Person zur Selbstbedienungskasse?", explanation: "„Weil ich wenig Zeit habe, gehe ich zur Selbstbedienungskasse.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-q1-a1", position: 1, text: "Weil sie wenig Zeit hat.", is_correct: true },
      { id: "kasse-a2-q1-a2", position: 2, text: "Weil sie den Bus verpasst hat.", is_correct: false },
      { id: "kasse-a2-q1-a3", position: 3, text: "Weil die Kasse geschlossen ist.", is_correct: false },
    ] },
    { id: "kasse-a2-q2", position: 2, kind: "single_choice", section: "practice", prompt: "Was denkt die Person über einen Preis auf dem Bildschirm?", explanation: "„Ich glaube, dass ein Preis auf dem Bildschirm nicht stimmt.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-q2-a1", position: 1, text: "Sie glaubt, dass er nicht stimmt.", is_correct: true },
      { id: "kasse-a2-q2-a2", position: 2, text: "Sie glaubt, dass er zu niedrig ist.", is_correct: false },
      { id: "kasse-a2-q2-a3", position: 3, text: "Sie glaubt, dass alles richtig ist.", is_correct: false },
    ] },
    { id: "kasse-a2-q3", position: 3, kind: "gap", section: "practice", prompt: "Deshalb drücke ich den ___ und rufe eine Mitarbeiterin.", explanation: "Gemeint ist der Hilfeknopf: „Knopf“.", data: H("Misli se na dugme za pomoć.", "Yardım düğmesi kastediliyor.", "Йдеться про кнопку виклику допомоги.", "Este vorba despre butonul de ajutor.", "المقصود زر طلب المساعدة."), quiz_answers: [
      { id: "kasse-a2-q3-a1", position: 1, text: "Knopf", is_correct: true },
    ] },
    { id: "kasse-a2-q4", position: 4, kind: "true_false", section: "practice", prompt: "Die Mitarbeiterin sagt, dass der alte Preis noch im System war.", explanation: "Richtig — das erklärt, warum der falsche Preis erschien.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-q4-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-a2-q4-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-a2-q5", position: 5, kind: "single_choice", section: "practice", prompt: "Was bekommt man mit einer Kundenkarte laut Text?", explanation: "„Wenn ich eine Kundenkarte habe, bekomme ich zusätzlichen Rabatt.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-q5-a1", position: 1, text: "zusätzlichen Rabatt", is_correct: true },
      { id: "kasse-a2-q5-a2", position: 2, text: "ein Geschenk", is_correct: false },
      { id: "kasse-a2-q5-a3", position: 3, text: "kostenlose Lieferung", is_correct: false },
    ] },
    { id: "kasse-a2-q6", position: 6, kind: "single_choice", section: "practice", prompt: "Warum ist kontaktloses Bezahlen praktisch?", explanation: "„Kontaktloses Bezahlen ist schneller als mit Bargeld.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-q6-a1", position: 1, text: "Es ist schneller als Bargeld.", is_correct: true },
      { id: "kasse-a2-q6-a2", position: 2, text: "Es ist billiger als Bargeld.", is_correct: false },
      { id: "kasse-a2-q6-a3", position: 3, text: "Es funktioniert nur am Wochenende.", is_correct: false },
    ] },
    { id: "kasse-a2-q7", position: 7, kind: "gap", section: "practice", prompt: "Weil der Betrag höher als üblich ist, muss ich meine PIN ___.", explanation: "Trennbares Verb: „eingeben“.", data: H("Odvojivi glagol eingeben.", "Ayrılabilir fiil eingeben.", "Дієслово з відокремлюваним префіксом eingeben.", "Verb separabil eingeben.", "فعل قابل للانفصال eingeben."), quiz_answers: [
      { id: "kasse-a2-q7-a1", position: 1, text: "eingeben", is_correct: true },
    ] },
    { id: "kasse-a2-q8", position: 8, kind: "single_choice", section: "practice", prompt: "Was passiert, nachdem die Zahlung akzeptiert wurde?", explanation: "„Nachdem die Zahlung akzeptiert wurde, druckt die Maschine den Bon aus.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-q8-a1", position: 1, text: "Die Maschine druckt den Bon aus.", is_correct: true },
      { id: "kasse-a2-q8-a2", position: 2, text: "Die Kasse schließt sofort.", is_correct: false },
      { id: "kasse-a2-q8-a3", position: 3, text: "Man bekommt kein Wechselgeld.", is_correct: false },
    ] },
    { id: "kasse-a2-q9", position: 9, kind: "single_choice", section: "practice", prompt: "Warum nimmt die Person den Bon mit?", explanation: "„Falls ich etwas zurückgeben möchte.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-q9-a1", position: 1, text: "falls sie etwas zurückgeben möchte", is_correct: true },
      { id: "kasse-a2-q9-a2", position: 2, text: "weil er kostenlos ist", is_correct: false },
      { id: "kasse-a2-q9-a3", position: 3, text: "weil er hübsch aussieht", is_correct: false },
    ] },
    { id: "kasse-a2-q10", position: 10, kind: "single_choice", section: "practice", prompt: "Wie fühlt sich die Person am Ende der Geschichte?", explanation: "„Ich bedanke mich und verlasse die Kasse zufrieden.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-q10-a1", position: 1, text: "zufrieden", is_correct: true },
      { id: "kasse-a2-q10-a2", position: 2, text: "wütend", is_correct: false },
      { id: "kasse-a2-q10-a3", position: 3, text: "traurig", is_correct: false },
    ] },

    // ===== Abschlusstest (40 Fragen) =====
    { id: "kasse-a2-t1", position: 1, kind: "single_choice", section: "test", prompt: "Wohin geht die Person, weil sie wenig Zeit hat?", explanation: "„Weil ich wenig Zeit habe, gehe ich zur Selbstbedienungskasse.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t1-a1", position: 1, text: "zur Selbstbedienungskasse", is_correct: true },
      { id: "kasse-a2-t1-a2", position: 2, text: "zum Bahnhof", is_correct: false },
      { id: "kasse-a2-t1-a3", position: 3, text: "zur Bäckerei", is_correct: false },
    ] },
    { id: "kasse-a2-t2", position: 2, kind: "true_false", section: "test", prompt: "An der Selbstbedienungskasse scannt und verpackt der Kunde die Ware selbst.", explanation: "Richtig, das steht im Text.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t2-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-a2-t2-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-a2-t3", position: 3, kind: "gap", section: "test", prompt: "Ich drücke den Knopf und rufe eine ___.", explanation: "Gemeint ist die Person, die hilft: „Mitarbeiterin“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t3-a1", position: 1, text: "Mitarbeiterin", is_correct: true },
    ] },
    { id: "kasse-a2-t4", position: 4, kind: "single_choice", section: "test", prompt: "Was prüft die Mitarbeiterin?", explanation: "„Sie kommt schnell und prüft den Preis am Regal.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t4-a1", position: 1, text: "den Preis am Regal", is_correct: true },
      { id: "kasse-a2-t4-a2", position: 2, text: "die Uhrzeit", is_correct: false },
      { id: "kasse-a2-t4-a3", position: 3, text: "den Ausweis", is_correct: false },
    ] },
    { id: "kasse-a2-t5", position: 5, kind: "single_choice", section: "test", prompt: "Warum war der Preis falsch?", explanation: "„Der alte Preis war noch im System.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t5-a1", position: 1, text: "Der alte Preis war noch im System.", is_correct: true },
      { id: "kasse-a2-t5-a2", position: 2, text: "Das Produkt war kaputt.", is_correct: false },
      { id: "kasse-a2-t5-a3", position: 3, text: "Der Kunde hat sich verrechnet.", is_correct: false },
    ] },
    { id: "kasse-a2-t6", position: 6, kind: "single_choice", section: "test", prompt: "Was bekommt man mit Kundenkarte?", explanation: "„Wenn ich eine Kundenkarte habe, bekomme ich zusätzlichen Rabatt.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t6-a1", position: 1, text: "zusätzlichen Rabatt", is_correct: true },
      { id: "kasse-a2-t6-a2", position: 2, text: "eine kostenlose Tüte", is_correct: false },
      { id: "kasse-a2-t6-a3", position: 3, text: "einen Parkplatz", is_correct: false },
    ] },
    { id: "kasse-a2-t7", position: 7, kind: "true_false", section: "test", prompt: "Der Kunde bezahlt in der Geschichte mit Bargeld.", explanation: "Falsch — er bezahlt kontaktlos mit Karte.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t7-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "kasse-a2-t7-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "kasse-a2-t8", position: 8, kind: "single_choice", section: "test", prompt: "Warum muss der Kunde die PIN eingeben?", explanation: "„Weil der Betrag höher als üblich ist.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t8-a1", position: 1, text: "Weil der Betrag höher als üblich ist.", is_correct: true },
      { id: "kasse-a2-t8-a2", position: 2, text: "Weil die Karte alt ist.", is_correct: false },
      { id: "kasse-a2-t8-a3", position: 3, text: "Weil er es so mag.", is_correct: false },
    ] },
    { id: "kasse-a2-t9", position: 9, kind: "single_choice", section: "test", prompt: "Was druckt die Maschine, nachdem die Zahlung akzeptiert wurde?", explanation: "„…druckt die Maschine den Bon aus.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t9-a1", position: 1, text: "den Bon", is_correct: true },
      { id: "kasse-a2-t9-a2", position: 2, text: "eine Rechnung für den Vermieter", is_correct: false },
      { id: "kasse-a2-t9-a3", position: 3, text: "ein Ticket für den Bus", is_correct: false },
    ] },
    { id: "kasse-a2-t10", position: 10, kind: "gap", section: "test", prompt: "Ich nehme den Bon mit, ___ ich etwas zurückgeben möchte.", explanation: "Gemeint ist die Bedingung: „falls“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t10-a1", position: 1, text: "falls", is_correct: true },
    ] },
    { id: "kasse-a2-t11", position: 11, kind: "single_choice", section: "test", prompt: "Was für ein Gefühl beschreibt der letzte Satz der Geschichte?", explanation: "„Ich bedanke mich und verlasse die Kasse zufrieden.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t11-a1", position: 1, text: "Zufriedenheit", is_correct: true },
      { id: "kasse-a2-t11-a2", position: 2, text: "Wut", is_correct: false },
      { id: "kasse-a2-t11-a3", position: 3, text: "Angst", is_correct: false },
    ] },
    { id: "kasse-a2-t12", position: 12, kind: "single_choice", section: "test", prompt: "Wer prüft in Dialog 1 den Preis?", explanation: "Die Mitarbeiterin prüft den Preis im System.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t12-a1", position: 1, text: "die Mitarbeiterin", is_correct: true },
      { id: "kasse-a2-t12-a2", position: 2, text: "der Busfahrer", is_correct: false },
      { id: "kasse-a2-t12-a3", position: 3, text: "der Nachbar", is_correct: false },
    ] },
    { id: "kasse-a2-t13", position: 13, kind: "single_choice", section: "test", prompt: "Was bedeutet „der Beleg“ hier?", explanation: "Ein Nachweis, dass man etwas gekauft/bezahlt hat.", data: H("Beleg je dokaz o kupovini.", "Beleg, satın alma kanıtıdır.", "Beleg - це доказ покупки.", "Beleg este dovada cumpărăturii.", "Beleg هو دليل الشراء."), quiz_answers: [
      { id: "kasse-a2-t13-a1", position: 1, text: "ein Nachweis über den Kauf", is_correct: true },
      { id: "kasse-a2-t13-a2", position: 2, text: "ein Einkaufswagen", is_correct: false },
      { id: "kasse-a2-t13-a3", position: 3, text: "eine Tüte", is_correct: false },
    ] },
    { id: "kasse-a2-t14", position: 14, kind: "single_choice", section: "test", prompt: "Was bedeutet „akzeptieren“?", explanation: "Etwas annehmen oder gutheißen, z. B. eine Zahlung.", data: H("Akzeptieren znači prihvatiti nešto.", "Akzeptieren, bir şeyi kabul etmek demektir.", "Akzeptieren означає прийняти щось.", "A accepta înseamnă a primi ceva.", "يعني يقبل شيئًا."), quiz_answers: [
      { id: "kasse-a2-t14-a1", position: 1, text: "annehmen", is_correct: true },
      { id: "kasse-a2-t14-a2", position: 2, text: "ablehnen", is_correct: false },
      { id: "kasse-a2-t14-a3", position: 3, text: "vergessen", is_correct: false },
    ] },
    { id: "kasse-a2-t15", position: 15, kind: "single_choice", section: "test", prompt: "Welches Verb passt: „Ich ___ die Waren selbst ein.“?", explanation: "Trennbares Verb „einpacken“ — im Satz „packe … ein“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t15-a1", position: 1, text: "packe", is_correct: true },
      { id: "kasse-a2-t15-a2", position: 2, text: "esse", is_correct: false },
      { id: "kasse-a2-t15-a3", position: 3, text: "fahre", is_correct: false },
    ] },
    { id: "kasse-a2-t16", position: 16, kind: "single_choice", section: "test", prompt: "Was ist das Gegenteil von „schnell“?", explanation: "Das Gegenteil von schnell ist langsam.", data: H("Suprotno od schnell je langsam.", "Schnell'ın zıttı langsam'dır.", "Протилежність до schnell — langsam.", "Opusul lui schnell este langsam.", "عكس schnell هو langsam."), quiz_answers: [
      { id: "kasse-a2-t16-a1", position: 1, text: "langsam", is_correct: true },
      { id: "kasse-a2-t16-a2", position: 2, text: "günstig", is_correct: false },
      { id: "kasse-a2-t16-a3", position: 3, text: "zufrieden", is_correct: false },
    ] },
    { id: "kasse-a2-t17", position: 17, kind: "gap", section: "test", prompt: "Kontaktloses Bezahlen ist schneller ___ Bargeld.", explanation: "Nach dem Komparativ steht „als“.", data: H("Poslije komparativa dolazi als.", "Karşılaştırma sonrasında als gelir.", "Після компаратива йде als.", "Dupa comparativ urmeaza als.", "بعد صيغة المقارنة يأتي als."), quiz_answers: [
      { id: "kasse-a2-t17-a1", position: 1, text: "als", is_correct: true },
    ] },
    { id: "kasse-a2-t18", position: 18, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "Nebensatz mit „weil“: Verb steht am Ende.", data: H("Kod weil glagol ide na kraj recenice.", "Weil'da fiil cumlenin sonuna gider.", "У реченні з weil дієслово стоїть у кінці.", "La weil verbul sta la sfarsitul propozitiei.", "مع weil يأتي الفعل في نهاية الجملة."), quiz_answers: [
      { id: "kasse-a2-t18-a1", position: 1, text: "Ich zeige die Kundenkarte, weil ich Rabatt bekomme.", is_correct: true },
      { id: "kasse-a2-t18-a2", position: 2, text: "Ich zeige die Kundenkarte, weil bekomme ich Rabatt.", is_correct: false },
      { id: "kasse-a2-t18-a3", position: 3, text: "Ich zeige die Kundenkarte weil ich Rabatt bekomme wird.", is_correct: false },
    ] },
    { id: "kasse-a2-t19", position: 19, kind: "single_choice", section: "test", prompt: "Welcher Satz ist richtig?", explanation: "Perfekt mit „haben“ + Partizip II: habe bezahlt.", data: H("Perfekat sa haben + particip.", "Haben + partisip ile perfekt.", "Перфект з haben + дієприкметник.", "Perfect cu haben + participiu.", "الزمن التام مع haben + الفاعل."), quiz_answers: [
      { id: "kasse-a2-t19-a1", position: 1, text: "Ich habe an der Kasse bar bezahlt.", is_correct: true },
      { id: "kasse-a2-t19-a2", position: 2, text: "Ich habe an der Kasse bar bezahlen.", is_correct: false },
      { id: "kasse-a2-t19-a3", position: 3, text: "Ich bin an der Kasse bar bezahlt.", is_correct: false },
    ] },
    { id: "kasse-a2-t20", position: 20, kind: "single_choice", section: "test", prompt: "Welches Wort passt: „Ich bin lange in der Schlange ___.“?", explanation: "Perfekt mit „sein“: gestanden.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t20-a1", position: 1, text: "gestanden", is_correct: true },
      { id: "kasse-a2-t20-a2", position: 2, text: "gegessen", is_correct: false },
      { id: "kasse-a2-t20-a3", position: 3, text: "gefahren", is_correct: false },
    ] },
    { id: "kasse-a2-t21", position: 21, kind: "single_choice", section: "test", prompt: "Welcher Satz mit trennbarem Verb ist richtig?", explanation: "„einpacken“ trennt sich: packe … ein.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t21-a1", position: 1, text: "Ich packe die Waren selbst ein.", is_correct: true },
      { id: "kasse-a2-t21-a2", position: 2, text: "Ich einpacke die Waren selbst.", is_correct: false },
      { id: "kasse-a2-t21-a3", position: 3, text: "Ich packe ein die Waren selbst.", is_correct: false },
    ] },
    { id: "kasse-a2-t22", position: 22, kind: "single_choice", section: "test", prompt: "Welcher Satz drückt eine Bedingung mit „wenn“ aus?", explanation: "„Wenn ich kontaktlos bezahle, brauche ich meistens keine PIN.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t22-a1", position: 1, text: "Wenn ich kontaktlos bezahle, brauche ich meistens keine PIN.", is_correct: true },
      { id: "kasse-a2-t22-a2", position: 2, text: "Wenn ich kontaktlos bezahlen brauche ich meistens keine PIN.", is_correct: false },
      { id: "kasse-a2-t22-a3", position: 3, text: "Ich brauche keine PIN wenn bezahle ich kontaktlos.", is_correct: false },
    ] },
    { id: "kasse-a2-t23", position: 23, kind: "single_choice", section: "test", prompt: "Welcher Satz mit „dass“ ist richtig?", explanation: "„Ich glaube, dass ein Preis auf dem Bildschirm nicht stimmt.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t23-a1", position: 1, text: "Ich glaube, dass ein Preis auf dem Bildschirm nicht stimmt.", is_correct: true },
      { id: "kasse-a2-t23-a2", position: 2, text: "Ich glaube, dass stimmt ein Preis nicht.", is_correct: false },
      { id: "kasse-a2-t23-a3", position: 3, text: "Ich glaube dass ein Preis nicht stimmt er.", is_correct: false },
    ] },
    { id: "kasse-a2-t24", position: 24, kind: "single_choice", section: "test", prompt: "Welcher Komparativsatz ist richtig?", explanation: "„Die Selbstbedienungskasse ist oft günstiger für kurze Einkäufe.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t24-a1", position: 1, text: "Die Selbstbedienungskasse ist oft günstiger für kurze Einkäufe.", is_correct: true },
      { id: "kasse-a2-t24-a2", position: 2, text: "Die Selbstbedienungskasse ist oft günstig für kurze Einkäufe als.", is_correct: false },
      { id: "kasse-a2-t24-a3", position: 3, text: "Die Selbstbedienungskasse günstiger ist für kurze Einkäufe.", is_correct: false },
    ] },
    { id: "kasse-a2-t25", position: 25, kind: "single_choice", section: "test", prompt: "Welches Wort passt: „Ich lege die Karte ___ das Lesegerät.“ (Bewegung)", explanation: "Wechselpräposition mit Akkusativ bei Bewegung: „in das“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t25-a1", position: 1, text: "in", is_correct: true },
      { id: "kasse-a2-t25-a2", position: 2, text: "an", is_correct: false },
      { id: "kasse-a2-t25-a3", position: 3, text: "über", is_correct: false },
    ] },
    { id: "kasse-a2-t26", position: 26, kind: "single_choice", section: "test", prompt: "Wer sagt im Dialog „Entschuldigung, ich glaube, dass hier ein Preis nicht stimmt.“?", explanation: "Das sagt der Kunde.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t26-a1", position: 1, text: "der Kunde", is_correct: true },
      { id: "kasse-a2-t26-a2", position: 2, text: "die Mitarbeiterin", is_correct: false },
      { id: "kasse-a2-t26-a3", position: 3, text: "niemand", is_correct: false },
    ] },
    { id: "kasse-a2-t27", position: 27, kind: "single_choice", section: "test", prompt: "Was antwortet die Mitarbeiterin, nachdem sie den Preis geprüft hat?", explanation: "„Sie haben recht, der alte Preis war noch im System.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t27-a1", position: 1, text: "Sie haben recht, der alte Preis war noch im System.", is_correct: true },
      { id: "kasse-a2-t27-a2", position: 2, text: "Das Produkt ist leider ausverkauft.", is_correct: false },
      { id: "kasse-a2-t27-a3", position: 3, text: "Der Bus fährt um acht.", is_correct: false },
    ] },
    { id: "kasse-a2-t28", position: 28, kind: "true_false", section: "test", prompt: "Der Kunde bezahlt mit Karte, weil er kein Bargeld dabeihat.", explanation: "Richtig — das sagt er im Dialog 2.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t28-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-a2-t28-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-a2-t29", position: 29, kind: "single_choice", section: "test", prompt: "Warum muss der Kunde eine PIN eingeben?", explanation: "Ab einem bestimmten Betrag verlangt das Gerät eine PIN.", data: H("Od odredjenog iznosa uredjaj trazi PIN.", "Belirli tutardan sonra cihaz PIN ister.", "Від певної суми пристрій вимагає PIN.", "De la o anumita suma aparatul cere PIN.", "بدءًا من مبلغ معين يطلب الجهاز رقم PIN."), quiz_answers: [
      { id: "kasse-a2-t29-a1", position: 1, text: "Weil der Betrag höher als üblich ist.", is_correct: true },
      { id: "kasse-a2-t29-a2", position: 2, text: "Weil die Kasse kaputt ist.", is_correct: false },
      { id: "kasse-a2-t29-a3", position: 3, text: "Weil er das immer machen muss.", is_correct: false },
    ] },
    { id: "kasse-a2-t30", position: 30, kind: "single_choice", section: "test", prompt: "Wofür braucht man den Bon, laut Dialog 2?", explanation: "Als Beleg, falls man etwas zurückgeben möchte.", data: H("Bon je potreban za povrat robe.", "Fiş, iade için gereklidir.", "Чек потрібен для повернення товару.", "Bonul e necesar pentru returnare.", "الإيصال ضروري لإرجاع البضاعة."), quiz_answers: [
      { id: "kasse-a2-t30-a1", position: 1, text: "als Beleg für eine Rückgabe", is_correct: true },
      { id: "kasse-a2-t30-a2", position: 2, text: "als Fahrkarte", is_correct: false },
      { id: "kasse-a2-t30-a3", position: 3, text: "als Ausweis", is_correct: false },
    ] },
    { id: "kasse-a2-t31", position: 31, kind: "true_false", section: "test", prompt: "In Deutschland gibt es an vielen Kassen inzwischen auch Selbstbedienungskassen.", explanation: "Richtig — Selbstbedienungskassen sind in vielen Supermärkten üblich geworden.", data: H("Samouslužne kase su danas uobičajene.", "Self servis kasalar artık yaygın.", "Каси самообслуговування стали звичними.", "Casele self-service au devenit obișnuite.", "أصبحت صناديق الخدمة الذاتية شائعة."), quiz_answers: [
      { id: "kasse-a2-t31-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-a2-t31-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-a2-t32", position: 32, kind: "true_false", section: "test", prompt: "Kleine kontaktlose Zahlungen erfordern meistens keine PIN.", explanation: "Richtig — erst ab einem höheren Betrag ist eine PIN nötig.", data: H("Male beskontaktne uplate obicno ne trebaju PIN.", "Küçük temassız ödemeler genelde PIN gerektirmez.", "Малі безконтактні платежі зазвичай не потребують PIN.", "Platile mici contactless de obicei nu necesita PIN.", "المدفوعات الصغيرة بدون تلامس عادة لا تتطلب PIN."), quiz_answers: [
      { id: "kasse-a2-t32-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-a2-t32-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-a2-t33", position: 33, kind: "single_choice", section: "test", prompt: "Was braucht man normalerweise NICHT an der Kasse zu tun?", explanation: "Man muss an der Kasse keinen Flug buchen.", data: H("Let se ne rezerviše na kasi.", "Kasada uçuş rezervasyonu yapılmaz.", "Рейс не бронюють на касі.", "Nu rezervi zbor la casa.", "لا تُحجز رحلة طيران عند الصندوق."), quiz_answers: [
      { id: "kasse-a2-t33-a1", position: 1, text: "einen Flug buchen", is_correct: true },
      { id: "kasse-a2-t33-a2", position: 2, text: "die Ware bezahlen", is_correct: false },
      { id: "kasse-a2-t33-a3", position: 3, text: "einen Bon bekommen", is_correct: false },
    ] },
    { id: "kasse-a2-t34", position: 34, kind: "single_choice", section: "test", prompt: "Was passt NICHT zu einer Selbstbedienungskasse?", explanation: "Ein Friseurstuhl gehört nicht an eine Kasse.", data: H("Frizerska stolica ne pripada kasi.", "Berber koltuğu kasaya ait değil.", "Перукарське крісло не належить до каси.", "Scaunul de frizerie nu apartine casei.", "كرسي الحلاقة لا ينتمي إلى الصندوق."), quiz_answers: [
      { id: "kasse-a2-t34-a1", position: 1, text: "ein Friseurstuhl", is_correct: true },
      { id: "kasse-a2-t34-a2", position: 2, text: "ein Kartenlesegerät", is_correct: false },
      { id: "kasse-a2-t34-a3", position: 3, text: "ein Bildschirm", is_correct: false },
    ] },
    { id: "kasse-a2-t35", position: 35, kind: "single_choice", section: "test", prompt: "Warum ist es gut, den Bon mitzunehmen?", explanation: "Falls man etwas zurückgeben möchte, braucht man ihn als Beleg.", data: H("Bon je koristan ako se nesto vraca.", "Bir sey iade edilecekse fis gerekir.", "Чек потрібен, якщо щось повертають.", "Bonul e util daca returnezi ceva.", "الإيصال مفيد إذا أردت إرجاع شيء."), quiz_answers: [
      { id: "kasse-a2-t35-a1", position: 1, text: "Man braucht ihn als Beleg für eine Rückgabe.", is_correct: true },
      { id: "kasse-a2-t35-a2", position: 2, text: "Er macht den Einkauf billiger.", is_correct: false },
      { id: "kasse-a2-t35-a3", position: 3, text: "Es ist Pflicht, ihn zu sammeln.", is_correct: false },
    ] },
    { id: "kasse-a2-t36", position: 36, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "Trennbares Verb „ausdrucken“: druckt … aus.", data: H("Odvojivi glagol ausdrucken.", "Ayrilabilir fiil ausdrucken.", "Дієслово з відокремлюваним префіксом ausdrucken.", "Verb separabil ausdrucken.", "فعل قابل للانفصال ausdrucken."), quiz_answers: [
      { id: "kasse-a2-t36-a1", position: 1, text: "Die Maschine druckt den Bon aus.", is_correct: true },
      { id: "kasse-a2-t36-a2", position: 2, text: "Die Maschine ausdruckt den Bon.", is_correct: false },
      { id: "kasse-a2-t36-a3", position: 3, text: "Die Maschine druckt aus den Bon.", is_correct: false },
    ] },
    { id: "kasse-a2-t37", position: 37, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig?", explanation: "Nach „nachdem“ steht das Verb im Nebensatz am Ende.", data: H("Poslije nachdem glagol ide na kraj.", "Nachdem sonrasinda fiil sonda.", "Після nachdem дієслово стоїть у кінці.", "Dupa nachdem verbul sta la sfarsit.", "بعد nachdem يأتي الفعل في النهاية."), quiz_answers: [
      { id: "kasse-a2-t37-a1", position: 1, text: "Nachdem sie den Preis korrigiert hat, kann ich weiterbezahlen.", is_correct: true },
      { id: "kasse-a2-t37-a2", position: 2, text: "Nachdem sie hat den Preis korrigiert, kann ich weiterbezahlen.", is_correct: false },
      { id: "kasse-a2-t37-a3", position: 3, text: "Nachdem korrigiert sie den Preis hat, kann ich weiterbezahlen.", is_correct: false },
    ] },
    { id: "kasse-a2-t38", position: 38, kind: "gap", section: "test", prompt: "Ich bezahle mit Karte, ___ ich kein Bargeld dabeihabe.", explanation: "Gemeint ist der Grund: „weil“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-t38-a1", position: 1, text: "weil", is_correct: true },
    ] },
    { id: "kasse-a2-t39", position: 39, kind: "single_choice", section: "test", prompt: "Was ist die höfliche Bitte, den Preis zu zeigen?", explanation: "„Zeigen Sie mir bitte, welches Produkt Sie meinen.“", data: H("Uctivo trazi da se pokaze proizvod.", "Nazikce urunun gosterilmesini ister.", "Ввічливо просить показати товар.", "Roaga politicos sa arate produsul.", "يطلب بأدب إظهار المنتج."), quiz_answers: [
      { id: "kasse-a2-t39-a1", position: 1, text: "Zeigen Sie mir bitte, welches Produkt Sie meinen.", is_correct: true },
      { id: "kasse-a2-t39-a2", position: 2, text: "Zeig mir das, du!", is_correct: false },
      { id: "kasse-a2-t39-a3", position: 3, text: "Ich zeige nie etwas.", is_correct: false },
    ] },
    { id: "kasse-a2-t40", position: 40, kind: "single_choice", section: "test", prompt: "Wie geht die Geschichte zu Ende?", explanation: "Der Kunde bezahlt kontaktlos, erhält den Bon und verlässt die Kasse zufrieden.", data: H("Na kraju price kupac placa i zadovoljno odlazi.", "Hikayenin sonunda musteri odeyip memnun ayriliyor.", "Наприкінці історії клієнт платить і задоволено йде.", "La final clientul plateste si pleaca multumit.", "في النهاية يدفع الزبون ويغادر راضيًا."), quiz_answers: [
      { id: "kasse-a2-t40-a1", position: 1, text: "Der Kunde bezahlt und verlässt die Kasse zufrieden.", is_correct: true },
      { id: "kasse-a2-t40-a2", position: 2, text: "Der Kunde geht ohne zu bezahlen.", is_correct: false },
      { id: "kasse-a2-t40-a3", position: 3, text: "Der Kunde bleibt an der Kasse wohnen.", is_correct: false },
    ] },

    // ===== Sprache & Grammatik: zum Anklicken =====
    { id: "kasse-a2-g1", position: 1, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit „weil“ ist richtig?", explanation: "Im weil-Satz steht das konjugierte Verb am Ende.", data: H("Kod weil glagol ide na kraj recenice.", "Weil'da fiil cumlenin sonuna gider.", "У реченні з weil дієслово стоїть у кінці.", "La weil verbul sta la sfarsitul propozitiei.", "مع weil يأتي الفعل في نهاية الجملة."), quiz_answers: [
      { id: "kasse-a2-g1-a1", position: 1, text: "Ich zeige die Kundenkarte, weil ich Rabatt bekomme.", is_correct: true },
      { id: "kasse-a2-g1-a2", position: 2, text: "Ich zeige die Kundenkarte, weil bekomme ich Rabatt.", is_correct: false },
      { id: "kasse-a2-g1-a3", position: 3, text: "Ich zeige weil die Kundenkarte ich Rabatt bekomme.", is_correct: false },
    ] },
    { id: "kasse-a2-g2", position: 2, kind: "single_choice", section: "grammar", prompt: "Welcher Perfektsatz ist richtig?", explanation: "Perfekt mit „haben“: habe bezahlt.", data: H("Perfekat sa haben.", "Haben ile perfekt.", "Перфект з haben.", "Perfect cu haben.", "الزمن التام مع haben."), quiz_answers: [
      { id: "kasse-a2-g2-a1", position: 1, text: "Ich habe an der Kasse bar bezahlt.", is_correct: true },
      { id: "kasse-a2-g2-a2", position: 2, text: "Ich bin an der Kasse bar bezahlt.", is_correct: false },
      { id: "kasse-a2-g2-a3", position: 3, text: "Ich habe an der Kasse bar bezahlen.", is_correct: false },
    ] },
    { id: "kasse-a2-g3", position: 3, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit trennbarem Verb ist richtig?", explanation: "„einpacken“ trennt sich im Hauptsatz.", data: H("einpacken se odvaja u glavnoj recenici.", "einpacken ana cumlede ayrilir.", "einpacken відокремлюється в головному реченні.", "einpacken se separa in propozitia principala.", "einpacken ينفصل في الجملة الرئيسية."), quiz_answers: [
      { id: "kasse-a2-g3-a1", position: 1, text: "Ich packe die Waren selbst ein.", is_correct: true },
      { id: "kasse-a2-g3-a2", position: 2, text: "Ich einpacke die Waren selbst.", is_correct: false },
      { id: "kasse-a2-g3-a3", position: 3, text: "Ich packe ein die Waren selbst.", is_correct: false },
    ] },
    { id: "kasse-a2-g4", position: 4, kind: "single_choice", section: "grammar", prompt: "Welches Wort passt: „Kontaktloses Bezahlen ist schneller ___ Bargeld.“?", explanation: "Nach dem Komparativ steht „als“.", data: H("Poslije komparativa als.", "Karsilastirmadan sonra als.", "Після компаратива als.", "Dupa comparativ als.", "بعد المقارنة als."), quiz_answers: [
      { id: "kasse-a2-g4-a1", position: 1, text: "als", is_correct: true },
      { id: "kasse-a2-g4-a2", position: 2, text: "wie", is_correct: false },
      { id: "kasse-a2-g4-a3", position: 3, text: "dann", is_correct: false },
    ] },
    { id: "kasse-a2-g5", position: 5, kind: "single_choice", section: "grammar", prompt: "Welches Wort passt: „Ich lege die Karte ___ das Lesegerät.“ (Bewegung, Akkusativ)?", explanation: "Wechselpräposition „in“ mit Akkusativ bei Bewegung.", data: H("Promjenljivi prijedlog in sa akuzativom kod kretanja.", "Hareket durumunda in + akuzatif.", "Змінний прийменник in зі знахідним при русі.", "Prepozitia in cu acuzativ la miscare.", "حرف الجر in مع حالة المفعول عند الحركة."), quiz_answers: [
      { id: "kasse-a2-g5-a1", position: 1, text: "in", is_correct: true },
      { id: "kasse-a2-g5-a2", position: 2, text: "an", is_correct: false },
      { id: "kasse-a2-g5-a3", position: 3, text: "über", is_correct: false },
    ] },
    { id: "kasse-a2-g6", position: 6, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit „dass“ ist richtig?", explanation: "„Ich glaube, dass ein Preis auf dem Bildschirm nicht stimmt.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-g6-a1", position: 1, text: "Ich glaube, dass ein Preis auf dem Bildschirm nicht stimmt.", is_correct: true },
      { id: "kasse-a2-g6-a2", position: 2, text: "Ich glaube, dass stimmt ein Preis nicht.", is_correct: false },
      { id: "kasse-a2-g6-a3", position: 3, text: "Ich glaube dass nicht stimmt ein Preis.", is_correct: false },
    ] },
    { id: "kasse-a2-g7", position: 7, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit „nachdem“ ist richtig?", explanation: "Nach „nachdem“ steht das Verb im Nebensatz am Ende.", data: H("Poslije nachdem glagol ide na kraj.", "Nachdem sonrasinda fiil sonda.", "Після nachdem дієслово стоїть у кінці.", "Dupa nachdem verbul sta la sfarsit.", "بعد nachdem يأتي الفعل في النهاية."), quiz_answers: [
      { id: "kasse-a2-g7-a1", position: 1, text: "Nachdem sie den Preis korrigiert hat, kann ich weiterbezahlen.", is_correct: true },
      { id: "kasse-a2-g7-a2", position: 2, text: "Nachdem hat sie den Preis korrigiert, kann ich weiterbezahlen.", is_correct: false },
      { id: "kasse-a2-g7-a3", position: 3, text: "Nachdem korrigiert den Preis sie hat, kann ich weiterbezahlen.", is_correct: false },
    ] },
    { id: "kasse-a2-g8", position: 8, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit „wenn“ ist richtig?", explanation: "„Wenn ich kontaktlos bezahle, brauche ich meistens keine PIN.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-a2-g8-a1", position: 1, text: "Wenn ich kontaktlos bezahle, brauche ich meistens keine PIN.", is_correct: true },
      { id: "kasse-a2-g8-a2", position: 2, text: "Wenn ich kontaktlos bezahlen, brauche ich meistens keine PIN.", is_correct: false },
      { id: "kasse-a2-g8-a3", position: 3, text: "Wenn bezahle ich kontaktlos, brauche ich meistens keine PIN.", is_correct: false },
    ] },

    // ===== Wo ist was? =====
    { id: "kasse-a2-p1", position: 1, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Die Selbstbedienungskasse steht ___ den normalen Kassen. Welche Präposition passt?", explanation: "„zwischen“ beschreibt: in der Mitte von zwei Kassen.", data: H("„zwischen“ znači u sredini između dvije kase.", "„zwischen“ iki kasa arasında anlamına gelir.", "„zwischen“ означає посередині між двома касами.", "„zwischen“ înseamnă la mijloc între două case.", "„zwischen“ تعني بين صندوقين."), quiz_answers: [
      { id: "kasse-a2-p1-a1", position: 1, text: "zwischen", is_correct: true },
      { id: "kasse-a2-p1-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-a2-p1-a3", position: 3, text: "über", is_correct: false },
    ] },
    { id: "kasse-a2-p2", position: 2, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Hilfeknopf befindet sich ___ dem Bildschirm. Welche Präposition passt?", explanation: "„neben“ beschreibt: direkt neben dem Bildschirm.", data: H("„neben“ znači pored ekrana.", "„neben“ ekranın yanında anlamına gelir.", "„neben“ означає біля екрана.", "„neben“ înseamnă lângă ecran.", "„neben“ تعني بجانب الشاشة."), quiz_answers: [
      { id: "kasse-a2-p2-a1", position: 1, text: "neben", is_correct: true },
      { id: "kasse-a2-p2-a2", position: 2, text: "über", is_correct: false },
      { id: "kasse-a2-p2-a3", position: 3, text: "unter", is_correct: false },
    ] },
    { id: "kasse-a2-p3", position: 3, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Mitarbeiterin steht ___ der Selbstbedienungskasse, um zu helfen. (vor)", explanation: "Sie steht direkt vor der Kasse, um Kunden zu helfen.", data: H("Radnica stoji ispred kase da pomogne.", "Çalışan yardım etmek için kasanın önünde duruyor.", "Працівниця стоїть перед касою, щоб допомогти.", "Angajata sta in fata casei pentru a ajuta.", "تقف الموظفة أمام الصندوق للمساعدة."), quiz_answers: [
      { id: "kasse-a2-p3-a1", position: 1, text: "vor", is_correct: true },
    ] },
    { id: "kasse-a2-p4", position: 4, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Das Kartenlesegerät steht ___ dem Kassenband. Welche Präposition passt?", explanation: "„auf“ beschreibt: oben auf einem kleinen Tisch beim Band.", data: H("„auf“ znači na malom stolu pored trake.", "„auf“ bandin yanindaki masanin uzerinde anlamina gelir.", "„auf“ означає на маленькому столику біля стрічки.", "„auf“ inseamna pe masuta de langa banda.", "„auf“ تعني على الطاولة الصغيرة بجانب السير."), quiz_answers: [
      { id: "kasse-a2-p4-a1", position: 1, text: "auf", is_correct: true },
      { id: "kasse-a2-p4-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-a2-p4-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "kasse-a2-p5", position: 5, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Drucker für den Bon steht ___ der Kasse. Welche Präposition passt am besten?", explanation: "„in“ beschreibt: der Drucker ist innerhalb des Kassengeräts eingebaut.", data: H("„in“ znači ugradjeno unutar uredjaja.", "„in“ cihazin icine yerlesik anlamina gelir.", "„in“ означає вбудований всередині пристрою.", "„in“ inseamna incorporat in interiorul aparatului.", "„in“ تعني مدمج داخل الجهاز."), quiz_answers: [
      { id: "kasse-a2-p5-a1", position: 1, text: "in", is_correct: true },
      { id: "kasse-a2-p5-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-a2-p5-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "kasse-a2-p6", position: 6, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Die Kunden warten ___ der Selbstbedienungskasse. Welche Präposition passt?", explanation: "„vor“ beschreibt: die Kunden warten davor in der Schlange.", data: H("Kupci cekaju ispred kase u redu.", "Musteriler kasanin onunde sirada bekliyor.", "Клієнти чекають перед касою в черзі.", "Clientii asteapta in fata casei la coada.", "الزبائن ينتظرون في طابور أمام الصندوق."), quiz_answers: [
      { id: "kasse-a2-p6-a1", position: 1, text: "vor", is_correct: true },
      { id: "kasse-a2-p6-a2", position: 2, text: "über", is_correct: false },
      { id: "kasse-a2-p6-a3", position: 3, text: "unter", is_correct: false },
    ] },
    { id: "kasse-a2-p7", position: 7, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Der Warenkorb steht ___ dem Kunden. (neben)", explanation: "„neben dem Kunden“ — der Korb steht direkt neben der Person.", data: H("Korpa je pored kupca.", "Sepet musterinin yaninda.", "Кошик стоїть біля клієнта.", "Cosul e langa client.", "السلة بجانب الزبون."), quiz_answers: [
      { id: "kasse-a2-p7-a1", position: 1, text: "neben", is_correct: true },
    ] },
    { id: "kasse-a2-p8", position: 8, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Hilfeknopf hängt ___ dem Bildschirm. Welche Präposition passt?", explanation: "„über“ beschreibt: der Knopf ist oberhalb des Bildschirms angebracht.", data: H("„über“ znači iznad ekrana.", "„über“ ekranin uzerinde anlamina gelir.", "„über“ означає над екраном.", "„über“ inseamna deasupra ecranului.", "„über“ تعني فوق الشاشة."), quiz_answers: [
      { id: "kasse-a2-p8-a1", position: 1, text: "über", is_correct: true },
      { id: "kasse-a2-p8-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-a2-p8-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "kasse-a2-p9", position: 9, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Bon kommt ___ dem kleinen Schlitz am Gerät. Welche Präposition passt?", explanation: "„aus“ beschreibt: der Bon kommt aus dem Schlitz heraus.", data: H("„aus“ znači izlazi iz proreza.", "„aus“ yariktan cikiyor anlamina gelir.", "„aus“ означає виходить із щілини.", "„aus“ inseamna iese din fanta.", "„aus“ تعني يخرج من الفتحة."), quiz_answers: [
      { id: "kasse-a2-p9-a1", position: 1, text: "aus", is_correct: true },
      { id: "kasse-a2-p9-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-a2-p9-a3", position: 3, text: "zwischen", is_correct: false },
    ] },
    { id: "kasse-a2-p10", position: 10, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Mitarbeiterin steht ___ der Kasse und beobachtet mehrere Selbstbedienungskassen. (zwischen)", explanation: "„zwischen den Kassen“ — sie steht in der Mitte, um mehrere Kassen zu überwachen.", data: H("Radnica stoji izmedju kasa da nadgleda.", "Calisan kasalar arasinda gozetlemek icin duruyor.", "Працівниця стоїть між касами, щоб наглядати.", "Angajata sta intre case pentru a supraveghea.", "الموظفة تقف بين الصناديق للمراقبة."), quiz_answers: [
      { id: "kasse-a2-p10-a1", position: 1, text: "zwischen", is_correct: true },
    ] },
    { id: "kasse-a2-p11", position: 11, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht die Kundin, die ihre Kundenkarte zeigt? Welche Präposition passt?", explanation: "Die Kundin steht „an der Kasse“.", data: H("Pogledaj sliku: kupica je na kasi.", "Resme bak: musteri kasada.", "Подивись на малюнок: клієнтка на касі.", "Uita-te la imagine: clienta e la casa.", "انظر إلى الصورة: الزبونة عند الصندوق."), quiz_answers: [
      { id: "kasse-a2-p11-a1", position: 1, text: "an der Kasse", is_correct: true },
      { id: "kasse-a2-p11-a2", position: 2, text: "unter der Kasse", is_correct: false },
      { id: "kasse-a2-p11-a3", position: 3, text: "hinter der Kasse", is_correct: false },
    ] },
    { id: "kasse-a2-p12", position: 12, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht die Mitarbeiterin, die hilft? Welche Präposition passt?", explanation: "Die Mitarbeiterin steht „neben der Selbstbedienungskasse“.", data: H("Radnica stoji pored samoposlužne kase.", "Calisan self servis kasanin yaninda duruyor.", "Працівниця стоїть біля каси самообслуговування.", "Angajata sta langa casa self-service.", "الموظفة تقف بجانب صندوق الخدمة الذاتية."), quiz_answers: [
      { id: "kasse-a2-p12-a1", position: 1, text: "neben der Selbstbedienungskasse", is_correct: true },
      { id: "kasse-a2-p12-a2", position: 2, text: "unter der Selbstbedienungskasse", is_correct: false },
      { id: "kasse-a2-p12-a3", position: 3, text: "über der Selbstbedienungskasse", is_correct: false },
    ] },
    { id: "kasse-a2-p13", position: 13, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Das Portemonnaie liegt ___ der Handtasche. (in)", explanation: "Das Portemonnaie liegt innerhalb der Handtasche.", data: H("Novčanik je u tašni.", "Cüzdan çantanın içinde.", "Гаманець лежить у сумці.", "Portofelul e in geanta.", "المحفظة داخل الحقيبة."), quiz_answers: [
      { id: "kasse-a2-p13-a1", position: 1, text: "in", is_correct: true },
    ] },
    { id: "kasse-a2-p14", position: 14, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo hängt der Bildschirm mit dem Preis? Welche Präposition passt?", explanation: "Der Bildschirm hängt „über dem Kartenlesegerät“.", data: H("Ekran visi iznad citaca kartica.", "Ekran kart okuyucunun uzerinde asili.", "Екран висить над пристроєм зчитування карток.", "Ecranul atarna deasupra cititorului de card.", "الشاشة معلقة فوق قارئ البطاقة."), quiz_answers: [
      { id: "kasse-a2-p14-a1", position: 1, text: "über dem Kartenlesegerät", is_correct: true },
      { id: "kasse-a2-p14-a2", position: 2, text: "unter dem Kartenlesegerät", is_correct: false },
      { id: "kasse-a2-p14-a3", position: 3, text: "in dem Kartenlesegerät", is_correct: false },
    ] },
    { id: "kasse-a2-p15", position: 15, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo befinden sich die Selbstbedienungskassen meistens im Supermarkt? Welche Präposition passt?", explanation: "Sie befinden sich meistens „in der Nähe des Ausgangs“.", data: H("Nalaze se blizu izlaza.", "Cikisin yakininda bulunuyor.", "Розташовані біля виходу.", "Se afla langa iesire.", "تقع قرب المخرج."), quiz_answers: [
      { id: "kasse-a2-p15-a1", position: 1, text: "in der Nähe des Ausgangs", is_correct: true },
      { id: "kasse-a2-p15-a2", position: 2, text: "unter dem Ausgang", is_correct: false },
      { id: "kasse-a2-p15-a3", position: 3, text: "zwischen dem Ausgang", is_correct: false },
    ] },

    // ===== Dialog bauen =====
    { id: "kasse-a2-b1", position: 1, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 1 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Problem melden → zeigen lassen → Produkt nennen → prüfen → bestätigen.", data: { items: [
      "Kunde: Entschuldigung, ich glaube, dass hier ein Preis nicht stimmt.",
      "Mitarbeiterin: Zeigen Sie mir bitte, welches Produkt Sie meinen.",
      "Kunde: Diese Nudeln hier. Auf dem Regal steht ein anderer Preis als auf dem Bildschirm.",
      "Mitarbeiterin: Ich prüfe das sofort im System. Einen Moment, bitte.",
      "Mitarbeiterin: Sie haben recht, der alte Preis war noch im System.",
    ] }, quiz_answers: [] },
    { id: "kasse-a2-b2", position: 2, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 2 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Preis nennen → Zahlungsart → PIN-Frage → bestätigen → verabschieden.", data: { items: [
      "Kassiererin: So, das wären dann 24 Euro 90. Bezahlen Sie bar oder mit Karte?",
      "Kunde: Ich bezahle mit Karte, weil ich kein Bargeld dabeihabe.",
      "Kunde: Muss ich meine PIN eingeben, weil der Betrag hoch ist?",
      "Kassiererin: Ja, ab einem bestimmten Betrag verlangt das Gerät immer eine PIN.",
      "Kunde: Gut zu wissen. Vielen Dank für die Hilfe und auf Wiedersehen!",
    ] }, quiz_answers: [] },
  ],
} as const;
