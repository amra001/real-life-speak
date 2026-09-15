const T = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ bks, tr, uk, ro, ar });
const H = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ help: T(bks, tr, uk, ro, ar) });

export const kasseB1 = {
  lesson: {
    id: "e91b6c34-4f8a-4d05-9b7e-2a6f8d3c5e17",
    slug: "kasse-b1",
    title: "An der Kasse – B1",
    description:
      "Eine anspruchsvolle Situation an der Kasse: eine Preisdifferenz reklamieren, über Zahlungsgewohnheiten sprechen und den Ablauf beim Bezahlen genau erklären.",
    level: "B1",
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
      "Nebensätze mit obwohl/damit/nachdem",
      "Konjunktiv II (könnte, würde, hätte gern)",
      "Passiv (Präsens und Präteritum)",
      "Relativsätze",
      "Indirekte Rede (Grundlagen)",
    ],
    grammar_notes: [
      {
        title: "Nebensätze mit obwohl (Konzessivsatz)",
        explanation:
          "„Obwohl“ leitet einen Nebensatz ein, der einen Gegensatz zum Hauptsatz ausdrückt. Wie bei allen Nebensätzen steht das konjugierte Verb am Ende.",
        examples: [
          "Obwohl die Schlange an der Kasse lang war, hat alles schnell geklappt.",
          "Ich habe kontaktlos bezahlt, obwohl der Betrag recht hoch war.",
        ],
      },
      {
        title: "Nebensätze mit damit (Finalsatz)",
        explanation:
          "„Damit“ drückt einen Zweck oder ein Ziel aus, wenn Haupt- und Nebensatz unterschiedliche Subjekte haben (im Unterschied zu „um … zu“).",
        examples: [
          "Die Kassiererin ruft eine Kollegin, damit der Preis überprüft wird.",
          "Ich zeige den Bon, damit die Reklamation schneller bearbeitet wird.",
        ],
      },
      {
        title: "Nebensätze mit nachdem (Vorzeitigkeit)",
        explanation:
          "„Nachdem“ beschreibt, dass etwas VOR dem Ereignis im Hauptsatz passiert ist. Deshalb steht im nachdem-Satz meist das Plusquamperfekt, im Hauptsatz das Perfekt oder Präsens.",
        examples: [
          "Nachdem ich die Preisdifferenz bemerkt hatte, habe ich die Kassiererin informiert.",
          "Nachdem der Fehler korrigiert worden war, habe ich bezahlt.",
        ],
      },
      {
        title: "Konjunktiv II: höfliche Wünsche und Irreales",
        explanation:
          "Konjunktiv II (könnte, würde, hätte gern, wäre) macht Aussagen höflicher, hypothetischer oder drückt etwas Irreales aus.",
        examples: [
          "Könnten Sie den Preis bitte noch einmal überprüfen?",
          "Ich hätte gern eine Erklärung für die Preisdifferenz.",
          "Wenn ich mehr Zeit hätte, würde ich zur Selbstbedienungskasse gehen.",
        ],
      },
      {
        title: "Passiv: Vorgangspassiv mit werden",
        explanation:
          "Das Passiv rückt die Handlung in den Vordergrund, nicht die handelnde Person. Es wird mit „werden“ + Partizip II gebildet. Im Präteritum wird „werden“ zu „wurde“.",
        examples: [
          "Die Ware wird an der Kasse gescannt.",
          "Der Preis wurde falsch eingegeben.",
          "Der Kassenbon wird automatisch gedruckt.",
        ],
      },
      {
        title: "Relativsätze mit der/die/das",
        explanation:
          "Relativsätze erweitern ein Nomen mit zusätzlicher Information. Das Relativpronomen richtet sich nach Genus und Numerus des Bezugswortes, der Kasus nach der Funktion im Relativsatz.",
        examples: [
          "Der Kunde, der an der Kasse wartet, wird langsam ungeduldig.",
          "Die Kassiererin, mit der ich gesprochen habe, war sehr freundlich.",
          "Das Produkt, das falsch gescannt wurde, kostete zu viel.",
        ],
      },
      {
        title: "Indirekte Rede (Grundformen im Alltag)",
        explanation:
          "Um wiederzugeben, was jemand gesagt hat, benutzt man im Alltag oft einen dass-Satz statt des formellen Konjunktiv I.",
        examples: [
          "Sie hat gesagt, dass der alte Preis noch im System war.",
          "Der Kunde hat erklärt, dass er kontaktlos bezahlen möchte.",
        ],
      },
      {
        title: "Wechselpräpositionen im Überblick (komplexer)",
        explanation:
          "Auf B1-Niveau kombiniert man Wechselpräpositionen oft mit Relativsätzen und Passiv: Man muss gleichzeitig auf Kasus UND Satzbau achten.",
        examples: [
          "Das Gerät, in dem die Karte gehalten wird, piept kurz.",
          "Die Kundenkarte wird an das Lesegerät gehalten, das neben der Kasse steht.",
        ],
      },
    ],
    place_items: [],
  },

  scenes: [
    { id: "kasse-b1-s1", position: 1, german_text: "Obwohl die Schlange an der Kasse ziemlich lang war, hatte ich genug Zeit, um zu warten.", translations: T("Iako je red na kasi bio prilično dug, imao/la sam dovoljno vremena da čekam.", "Kasadaki sıra oldukça uzun olmasına rağmen, beklemek için yeterli zamanım vardı.", "Хоча черга на касі була досить довгою, у мене було достатньо часу почекати.", "Deși coada la casă era destul de lungă, am avut suficient timp să aștept.", "رغم أن الطابور عند الصندوق كان طويلاً إلى حد ما، كان لدي وقت كافٍ للانتظار.") },
    { id: "kasse-b1-s2", position: 2, german_text: "Die Kassiererin, die vor mir gerade eine andere Kundin bediente, wirkte sehr geduldig.", translations: T("Kasirka koja je upravo preda mnom opsluživala drugu kupicu djelovala je vrlo strpljivo.", "Önümde tam o an başka bir müşteriyle ilgilenen kasiyer çok sabırlı görünüyordu.", "Касирка, яка щойно обслуговувала іншу клієнтку переді мною, здавалася дуже терплячою.", "Casiera, care tocmai deservea o altă clientă înaintea mea, părea foarte răbdătoare.", "بدت الكاشيرة، التي كانت تخدم زبونة أخرى أمامي، صبورة جدًا.") },
    { id: "kasse-b1-s3", position: 3, german_text: "Nachdem ich meine Waren aufs Band gelegt hatte, wurden sie zügig gescannt.", translations: T("Nakon što sam stavio/la svoju robu na traku, brzo je skenirana.", "Ürünlerimi banda koyduktan sonra hızlıca tarandılar.", "Після того як я поклав(ла) свої товари на стрічку, їх швидко відсканували.", "După ce mi-am pus produsele pe bandă, au fost scanate rapid.", "بعد أن وضعت بضاعتي على السير، تم مسحها ضوئيًا بسرعة.") },
    { id: "kasse-b1-s4", position: 4, german_text: "Die Kassiererin fragte mich, ob ich eine Kundenkarte hätte, damit ich Punkte sammeln könnte.", translations: T("Kasirka me je pitala imam li karticu lojalnosti, da bih mogao/la skupljati bodove.", "Kasiyer, puan toplayabilmem için sadakat kartım olup olmadığını sordu.", "Касирка запитала мене, чи є у мене картка лояльності, щоб я міг(ла) накопичувати бали.", "Casiera m-a întrebat dacă am un card de fidelitate, ca să pot aduna puncte.", "سألتني الكاشيرة إن كان لدي بطاقة ولاء حتى أتمكن من جمع النقاط.") },
    { id: "kasse-b1-s5", position: 5, german_text: "Ich hätte gern gewusst, wie viele Punkte ich für diesen Einkauf bekommen würde.", translations: T("Htio/htjela bih znati koliko bih bodova dobio/la za ovu kupovinu.", "Bu alışveriş için kaç puan alacağımı bilmek isterdim.", "Я хотів(ла) би знати, скільки балів я отримав(ла) б за цю покупку.", "Aș fi vrut să știu câte puncte aș primi pentru această cumpărătură.", "كنت أرغب في معرفة عدد النقاط التي سأحصل عليها مقابل هذه المشتريات.") },
    { id: "kasse-b1-s6", position: 6, german_text: "Während die Ware gescannt wurde, bemerkte ich eine Preisdifferenz beim Käse.", translations: T("Dok je roba skenirana, primijetio/la sam razliku u cijeni kod sira.", "Ürünler taranırken, peynirde bir fiyat farkı fark ettim.", "Поки товар сканували, я помітив(ла) розбіжність у ціні на сир.", "În timp ce marfa era scanată, am observat o diferență de preț la brânză.", "بينما كانت البضاعة تُمسح، لاحظت فرقًا في السعر بخصوص الجبن.") },
    { id: "kasse-b1-s7", position: 7, german_text: "Ich sagte höflich, dass der Preis auf dem Bildschirm nicht mit dem Preisschild übereinstimmte.", translations: T("Ljubazno sam rekao/la da se cijena na ekranu ne poklapa s cijenom na etiketi.", "Ekrandaki fiyatın etiketle uyuşmadığını nazikçe söyledim.", "Я ввічливо сказав(ла), що ціна на екрані не збігається з ціною на етикетці.", "Am spus politicos că prețul de pe ecran nu corespundea cu cel de pe etichetă.", "قلت بأدب إن السعر على الشاشة لا يتطابق مع سعر البطاقة.") },
    { id: "kasse-b1-s8", position: 8, german_text: "Die Kassiererin, die den Fehler sofort erkannte, rief eine Kollegin zur Überprüfung.", translations: T("Kasirka, koja je odmah prepoznala grešku, pozvala je koleginicu na provjeru.", "Hatayı hemen fark eden kasiyer, kontrol için bir meslektaşını çağırdı.", "Касирка, яка одразу помітила помилку, покликала колегу для перевірки.", "Casiera, care a observat imediat greșeala, a chemat o colegă pentru verificare.", "الكاشيرة، التي لاحظت الخطأ فورًا، استدعت زميلة للتحقق.") },
    { id: "kasse-b1-s9", position: 9, german_text: "Nachdem der Preis korrigiert worden war, konnte ich meinen Einkauf fortsetzen.", translations: T("Nakon što je cijena ispravljena, mogao/la sam nastaviti kupovinu.", "Fiyat düzeltildikten sonra alışverişime devam edebildim.", "Після того як ціну виправили, я зміг(могла) продовжити покупки.", "După ce prețul a fost corectat, am putut să-mi continui cumpărăturile.", "بعد أن صُحح السعر، تمكنت من متابعة تسوقي.") },
    { id: "kasse-b1-s10", position: 10, german_text: "Ich hätte gern kontaktlos bezahlt, aber der Betrag war zu hoch für eine Zahlung ohne PIN.", translations: T("Rado bih platio/la beskontaktno, ali iznos je bio previsok za plaćanje bez PIN-a.", "Temassız ödemek isterdim ama tutar PIN'siz ödeme için çok yüksekti.", "Я хотів(ла) би заплатити безконтактно, але сума була занадто високою для оплати без PIN.", "Aș fi plătit cu plăcere contactless, dar suma era prea mare pentru o plată fără PIN.", "كنت أرغب في الدفع بدون تلامس، لكن المبلغ كان مرتفعًا جدًا للدفع بدون رقم PIN.") },
    { id: "kasse-b1-s11", position: 11, german_text: "Nachdem ich meine PIN eingegeben hatte, wurde die Zahlung sofort bestätigt.", translations: T("Nakon što sam unio/unijela svoj PIN, plaćanje je odmah potvrđeno.", "PIN'imi girdikten sonra ödeme hemen onaylandı.", "Після того як я ввів(ввела) свій PIN, оплату одразу підтвердили.", "După ce am introdus PIN-ul, plata a fost confirmată imediat.", "بعد أن أدخلت رقم PIN، تم تأكيد الدفع فورًا.") },
    { id: "kasse-b1-s12", position: 12, german_text: "Der Kassenbon, der automatisch gedruckt wurde, zeigte den korrigierten Endpreis.", translations: T("Kasa isječak, koji je automatski odštampan, pokazivao je ispravljenu konačnu cijenu.", "Otomatik olarak yazdırılan fiş, düzeltilmiş son fiyatı gösterdi.", "Чек, який роздрукували автоматично, показував виправлену кінцеву ціну.", "Bonul, care a fost printat automat, arăta prețul final corectat.", "الإيصال، الذي طُبع تلقائيًا، أظهر السعر النهائي المصحح.") },
    { id: "kasse-b1-s13", position: 13, german_text: "Obwohl es kurz etwas Verzögerung gab, war ich mit dem Service zufrieden.", translations: T("Iako je bilo kratkog kašnjenja, bio/la sam zadovoljan/na uslugom.", "Kısa bir gecikme olmasına rağmen hizmetten memnun kaldım.", "Хоча була невелика затримка, я був(була) задоволений(а) обслуговуванням.", "Deși a existat o mică întârziere, am fost mulțumit de serviciu.", "رغم وجود تأخير بسيط، كنت راضيًا عن الخدمة.") },
    { id: "kasse-b1-s14", position: 14, german_text: "Die Kassiererin erklärte mir, dass solche Preisfehler leider gelegentlich vorkommen.", translations: T("Kasirka mi je objasnila da se takve greške u cijeni nažalost povremeno dešavaju.", "Kasiyer bana böyle fiyat hatalarının ne yazık ki ara sıra olduğunu açıkladı.", "Касирка пояснила мені, що такі помилки в ціні, на жаль, іноді трапляються.", "Casiera mi-a explicat că astfel de erori de preț apar, din păcate, ocazional.", "شرحت لي الكاشيرة أن أخطاء الأسعار من هذا النوع تحدث للأسف أحيانًا.") },
    { id: "kasse-b1-s15", position: 15, german_text: "Ich bedankte mich, nahm den Bon und verließ die Kasse mit einem guten Gefühl.", translations: T("Zahvalio/la sam se, uzeo/la sam račun i napustio/la sam kasu s dobrim osjećajem.", "Teşekkür ettim, fişi aldım ve kasadan iyi bir hisle ayrıldım.", "Я подякував(ла), взяв(взяла) чек і пішов(пішла) від каси з гарним відчуттям.", "Am mulțumit, am luat bonul și am plecat de la casă cu un sentiment bun.", "شكرت، أخذت الإيصال وغادرت الصندوق بشعور جيد.") },
  ],

  vocab: [
    { id: "kasse-b1-v1", position: 1, term: "Preisdifferenz", article: "die", plural: "die Preisdifferenzen", word_class: "Nomen", example: "Ich habe eine Preisdifferenz beim Käse bemerkt.", translations: T("razlika u cijeni", "fiyat farkı", "різниця в ціні", "diferență de preț", "فرق السعر") },
    { id: "kasse-b1-v2", position: 2, term: "Preisschild", article: "das", plural: "die Preisschilder", word_class: "Nomen", example: "Der Preis stimmt nicht mit dem Preisschild überein.", translations: T("cjenovna etiketa", "fiyat etiketi", "цінник", "etichetă de preț", "بطاقة السعر") },
    { id: "kasse-b1-v3", position: 3, term: "Reklamation", article: "die", plural: "die Reklamationen", word_class: "Nomen", example: "Ich möchte eine Reklamation machen.", translations: T("reklamacija", "şikayet", "рекламація", "reclamație", "شكوى") },
    { id: "kasse-b1-v4", position: 4, term: "Endpreis", article: "der", plural: "die Endpreise", word_class: "Nomen", example: "Der Kassenbon zeigt den korrigierten Endpreis.", translations: T("konačna cijena", "son fiyat", "кінцева ціна", "preț final", "السعر النهائي") },
    { id: "kasse-b1-v5", position: 5, term: "Punkt", article: "der", plural: "die Punkte", word_class: "Nomen", example: "Mit der Kundenkarte sammle ich Punkte.", translations: T("bod", "puan", "бал", "punct", "نقطة") },
    { id: "kasse-b1-v6", position: 6, term: "Verzögerung", article: "die", plural: "die Verzögerungen", word_class: "Nomen", example: "Es gab eine kurze Verzögerung an der Kasse.", translations: T("kašnjenje", "gecikme", "затримка", "întârziere", "تأخير") },
    { id: "kasse-b1-v7", position: 7, term: "Bestätigung", article: "die", plural: "die Bestätigungen", word_class: "Nomen", example: "Ich warte auf die Bestätigung der Zahlung.", translations: T("potvrda", "onay", "підтвердження", "confirmare", "التأكيد") },
    { id: "kasse-b1-v8", position: 8, term: "Kollegin", article: "die", plural: "die Kolleginnen", word_class: "Nomen", example: "Sie rief eine Kollegin zur Überprüfung.", translations: T("koleginica", "meslektaş (kadın)", "колега (жінка)", "colegă", "زميلة") },
    { id: "kasse-b1-v9", position: 9, term: "Überprüfung", article: "die", plural: "die Überprüfungen", word_class: "Nomen", example: "Der Preis braucht eine Überprüfung.", translations: T("provjera", "kontrol", "перевірка", "verificare", "التحقق") },
    { id: "kasse-b1-v10", position: 10, term: "Fehler", article: "der", plural: "die Fehler", word_class: "Nomen", example: "Solche Preisfehler kommen gelegentlich vor.", translations: T("greška", "hata", "помилка", "eroare", "خطأ") },
    { id: "kasse-b1-v11", position: 11, term: "Service", article: "der", plural: "die Services", word_class: "Nomen", example: "Ich war mit dem Service zufrieden.", translations: T("usluga", "hizmet", "сервіс", "serviciu", "الخدمة") },
    { id: "kasse-b1-v12", position: 12, term: "Zahlungsart", article: "die", plural: "die Zahlungsarten", word_class: "Nomen", example: "Welche Zahlungsart bevorzugen Sie?", translations: T("način plaćanja", "ödeme yöntemi", "спосіб оплати", "metodă de plată", "طريقة الدفع") },
    { id: "kasse-b1-v13", position: 13, term: "Geduld", article: "die", plural: "—", word_class: "Nomen", example: "Die Kassiererin hatte viel Geduld.", translations: T("strpljenje", "sabır", "терпіння", "răbdare", "الصبر") },
    { id: "kasse-b1-v14", position: 14, term: "korrigieren", word_class: "Verb", example: "Der Preis wurde korrigiert.", translations: T("ispraviti", "düzeltmek", "виправляти", "a corecta", "يصحح") },
    { id: "kasse-b1-v15", position: 15, term: "übereinstimmen", word_class: "Verb", example: "Der Preis stimmt nicht mit dem Schild überein.", translations: T("poklapati se", "uyuşmak", "збігатися", "a corespunde", "يتطابق") },
    { id: "kasse-b1-v16", position: 16, term: "bemerken", word_class: "Verb", example: "Ich habe eine Preisdifferenz bemerkt.", translations: T("primijetiti", "fark etmek", "помічати", "a observa", "يلاحظ") },
    { id: "kasse-b1-v17", position: 17, term: "erkennen", word_class: "Verb", example: "Die Kassiererin erkannte den Fehler sofort.", translations: T("prepoznati", "fark etmek/tanımak", "розпізнавати", "a recunoaște", "يتعرف") },
    { id: "kasse-b1-v18", position: 18, term: "vorkommen", word_class: "Verb", example: "Solche Fehler kommen gelegentlich vor.", translations: T("dešavati se", "meydana gelmek", "траплятися", "a se întâmpla", "يحدث") },
    { id: "kasse-b1-v19", position: 19, term: "bestätigen", word_class: "Verb", example: "Die Zahlung wurde bestätigt.", translations: T("potvrditi", "onaylamak", "підтверджувати", "a confirma", "يؤكد") },
    { id: "kasse-b1-v20", position: 20, term: "übernehmen", word_class: "Verb", example: "Die Kollegin übernimmt die Überprüfung.", translations: T("preuzeti", "devralmak", "перебирати", "a prelua", "يتولى") },
    { id: "kasse-b1-v21", position: 21, term: "gelegentlich", word_class: "Adjektiv", example: "Preisfehler kommen gelegentlich vor.", translations: T("povremeno", "ara sıra", "час від часу", "ocazional", "أحيانًا") },
    { id: "kasse-b1-v22", position: 22, term: "zügig", word_class: "Adjektiv", example: "Die Waren wurden zügig gescannt.", translations: T("brzo/hitro", "hızlı", "швидко", "rapid", "بسرعة") },
    { id: "kasse-b1-v23", position: 23, term: "geduldig", word_class: "Adjektiv", example: "Die Kassiererin war sehr geduldig.", translations: T("strpljiv", "sabırlı", "терплячий", "răbdător", "صبور") },
    { id: "kasse-b1-v24", position: 24, term: "höflich", word_class: "Adjektiv", example: "Ich habe höflich auf den Fehler hingewiesen.", translations: T("učtiv", "kibar", "ввічливий", "politicos", "مهذب") },
    { id: "kasse-b1-v25", position: 25, term: "zufrieden", word_class: "Adjektiv", example: "Ich war am Ende zufrieden.", translations: T("zadovoljan", "memnun", "задоволений", "mulțumit", "راضٍ") },
    { id: "kasse-b1-v26", position: 26, term: "Endsumme", article: "die", plural: "die Endsummen", word_class: "Nomen", example: "Die Endsumme wurde nach der Korrektur angezeigt.", translations: T("konačan iznos", "toplam tutar", "загальна сума", "sumă totală", "المبلغ الإجمالي") },
    { id: "kasse-b1-v27", position: 27, term: "Kontrolle", article: "die", plural: "die Kontrollen", word_class: "Nomen", example: "Der Preis wurde bei der Kontrolle geändert.", translations: T("kontrola", "kontrol", "контроль", "control", "المراقبة") },
    { id: "kasse-b1-v28", position: 28, term: "Beschwerde", article: "die", plural: "die Beschwerden", word_class: "Nomen", example: "Ich musste keine Beschwerde einreichen.", translations: T("žalba/prigovor", "şikayet", "скарга", "plângere", "شكوى") },
  ],

  dialog: [
    { id: "kasse-b1-d1-1", position: 1, dialog_index: 1, dialog_title: "Dialog 1 · Eine Preisdifferenz klären", speaker: "Kunde", german_text: "Entschuldigen Sie, könnten Sie den Preis für diesen Käse bitte noch einmal überprüfen?", translations: T("Izvinite, biste li molim vas ponovo provjerili cijenu ovog sira?", "Affedersiniz, bu peynirin fiyatını lütfen bir kez daha kontrol edebilir misiniz?", "Вибачте, чи могли б ви, будь ласка, ще раз перевірити ціну цього сиру?", "Scuzați-mă, ați putea verifica vă rog încă o dată prețul acestei brânze?", "عفوًا، هل يمكنك التحقق من سعر هذا الجبن مرة أخرى من فضلك؟") },
    { id: "kasse-b1-d1-2", position: 2, dialog_index: 1, dialog_title: "Dialog 1 · Eine Preisdifferenz klären", speaker: "Kassiererin", german_text: "Natürlich. Was fällt Ihnen denn auf?", translations: T("Naravno. Šta ste primijetili?", "Tabii ki. Neyi fark ettiniz?", "Звісно. Що ви помітили?", "Desigur. Ce ați observat?", "بالطبع. ماذا لاحظت؟") },
    { id: "kasse-b1-d1-3", position: 3, dialog_index: 1, dialog_title: "Dialog 1 · Eine Preisdifferenz klären", speaker: "Kunde", german_text: "Der Preis auf dem Bildschirm stimmt nicht mit dem Preisschild im Regal überein.", translations: T("Cijena na ekranu se ne poklapa s cijenom na etiketi u polici.", "Ekrandaki fiyat, raftaki fiyat etiketiyle uyuşmuyor.", "Ціна на екрані не збігається з ціною на етикетці на полиці.", "Prețul de pe ecran nu corespunde cu eticheta de pe raft.", "السعر على الشاشة لا يتطابق مع بطاقة السعر على الرف.") },
    { id: "kasse-b1-d1-4", position: 4, dialog_index: 1, dialog_title: "Dialog 1 · Eine Preisdifferenz klären", speaker: "Kassiererin", german_text: "Ich verstehe. Damit wir das schnell klären können, rufe ich eine Kollegin, die das im Regal überprüft.", translations: T("Razumijem. Da bismo to brzo riješili, zvat ću koleginicu koja će to provjeriti u polici.", "Anlıyorum. Bunu hızlıca çözebilmemiz için, rafı kontrol edecek bir meslektaşımı çağırıyorum.", "Розумію. Щоб ми могли швидко це вирішити, я покличу колегу, яка перевірить це на полиці.", "Înțeleg. Ca să rezolvăm rapid, chem o colegă care să verifice la raft.", "أفهم. حتى نحل هذا بسرعة، سأستدعي زميلة للتحقق من الرف.") },
    { id: "kasse-b1-d1-5", position: 5, dialog_index: 1, dialog_title: "Dialog 1 · Eine Preisdifferenz klären", speaker: "Kunde", german_text: "Das wäre sehr freundlich, danke.", translations: T("To bi bilo vrlo ljubazno, hvala.", "Bu çok nazik olur, teşekkürler.", "Це було б дуже люб'язно, дякую.", "Ar fi foarte amabil, mulțumesc.", "سيكون ذلك لطيفًا جدًا، شكرًا.") },
    { id: "kasse-b1-d1-6", position: 6, dialog_index: 1, dialog_title: "Dialog 1 · Eine Preisdifferenz klären", speaker: "Kassiererin", german_text: "Nachdem meine Kollegin nachgeschaut hat, wissen wir, welcher Preis stimmt.", translations: T("Nakon što je moja koleginica pogledala, znat ćemo koja cijena je tačna.", "Meslektaşım baktıktan sonra hangi fiyatın doğru olduğunu bileceğiz.", "Після того як моя колега подивиться, ми знатимемо, яка ціна правильна.", "După ce colega mea a verificat, vom ști ce preț este corect.", "بعد أن تتحقق زميلتي، سنعرف السعر الصحيح.") },
    { id: "kasse-b1-d1-7", position: 7, dialog_index: 1, dialog_title: "Dialog 1 · Eine Preisdifferenz klären", speaker: "Kollegin", german_text: "Ich habe nachgeschaut: Das Preisschild im Regal war noch nicht aktualisiert worden.", translations: T("Pogledala sam: etiketa u polici još nije bila ažurirana.", "Baktım: raftaki fiyat etiketi henüz güncellenmemişti.", "Я перевірила: цінник на полиці ще не оновили.", "Am verificat: eticheta de la raft nu fusese încă actualizată.", "تحققت: بطاقة السعر على الرف لم يتم تحديثها بعد.") },
    { id: "kasse-b1-d1-8", position: 8, dialog_index: 1, dialog_title: "Dialog 1 · Eine Preisdifferenz klären", speaker: "Kassiererin", german_text: "Damit Sie nicht zu viel bezahlen, geben wir Ihnen den niedrigeren Preis.", translations: T("Da ne biste platili previše, dat ćemo vam nižu cijenu.", "Fazla ödemenizi engellemek için size daha düşük fiyatı veriyoruz.", "Щоб ви не переплатили, ми дамо вам нижчу ціну.", "Ca să nu plătiți prea mult, vă dăm prețul mai mic.", "حتى لا تدفع أكثر من اللازم، سنمنحك السعر الأقل.") },
    { id: "kasse-b1-d1-9", position: 9, dialog_index: 1, dialog_title: "Dialog 1 · Eine Preisdifferenz klären", speaker: "Kunde", german_text: "Das ist sehr fair, vielen Dank für die schnelle Klärung.", translations: T("To je vrlo fer, hvala vam puno na brzom rješavanju.", "Bu çok adil, hızlı çözüm için çok teşekkürler.", "Це дуже справедливо, дуже дякую за швидке вирішення.", "Este foarte corect, mulțumesc mult pentru rezolvarea rapidă.", "هذا عادل جدًا، شكرًا جزيلاً على الحل السريع.") },
    { id: "kasse-b1-d1-10", position: 10, dialog_index: 1, dialog_title: "Dialog 1 · Eine Preisdifferenz klären", speaker: "Kassiererin", german_text: "Kein Problem. Nachdem wir den Preis korrigiert haben, können wir mit der Zahlung fortfahren.", translations: T("Nema problema. Nakon što smo ispravili cijenu, možemo nastaviti s plaćanjem.", "Sorun değil. Fiyatı düzelttikten sonra ödemeye devam edebiliriz.", "Немає проблем. Після того як ми виправили ціну, можемо продовжити оплату.", "Nicio problemă. După ce am corectat prețul, putem continua cu plata.", "لا مشكلة. بعد أن صححنا السعر، يمكننا متابعة الدفع.") },
    { id: "kasse-b1-d1-11", position: 11, dialog_index: 1, dialog_title: "Dialog 1 · Eine Preisdifferenz klären", speaker: "Kunde", german_text: "Gerne, ich bezahle jetzt kontaktlos.", translations: T("Rado, sada plaćam beskontaktno.", "Tabii, şimdi temassız ödüyorum.", "Охоче, тепер я плачу безконтактно.", "Cu plăcere, plătesc acum contactless.", "بكل سرور، سأدفع الآن بدون تلامس.") },

    { id: "kasse-b1-d2-1", position: 1, dialog_index: 2, dialog_title: "Dialog 2 · Über Bezahlgewohnheiten sprechen", speaker: "Kassiererin", german_text: "Bezahlen Sie eigentlich meistens kontaktlos oder bevorzugen Sie Bargeld?", translations: T("Da li obično plaćate beskontaktno ili preferirate gotovinu?", "Genelde temassız mı ödüyorsunuz yoksa nakit mi tercih ediyorsunuz?", "Ви зазвичай платите безконтактно чи надаєте перевагу готівці?", "De obicei plătiți contactless sau preferați numerarul?", "هل عادة تدفع بدون تلامس أم تفضل النقد؟") },
    { id: "kasse-b1-d2-2", position: 2, dialog_index: 2, dialog_title: "Dialog 2 · Über Bezahlgewohnheiten sprechen", speaker: "Kunde", german_text: "Obwohl ich früher fast immer bar bezahlt habe, nutze ich heute meistens die Karte.", translations: T("Iako sam ranije skoro uvijek plaćao/la gotovinom, danas najčešće koristim karticu.", "Eskiden neredeyse hep nakit ödesem de, bugün genelde kartı kullanıyorum.", "Хоча раніше я майже завжди платив(ла) готівкою, сьогодні я здебільшого користуюся карткою.", "Deși înainte plăteam aproape mereu cash, azi folosesc de obicei cardul.", "رغم أنني كنت أدفع نقدًا دائمًا تقريبًا في السابق، أستخدم اليوم البطاقة غالبًا.") },
    { id: "kasse-b1-d2-3", position: 3, dialog_index: 2, dialog_title: "Dialog 2 · Über Bezahlgewohnheiten sprechen", speaker: "Kassiererin", german_text: "Das machen viele Kunden so, weil kontaktloses Bezahlen einfach schneller ist.", translations: T("To rade mnogi kupci, jer je beskontaktno plaćanje jednostavno brže.", "Birçok müşteri böyle yapıyor, çünkü temassız ödeme daha hızlı.", "Так роблять багато клієнтів, бо безконтактна оплата просто швидша.", "Mulți clienți fac asta, pentru că plata contactless este pur și simplu mai rapidă.", "يفعل ذلك كثير من الزبائن لأن الدفع بدون تلامس أسرع ببساطة.") },
    { id: "kasse-b1-d2-4", position: 4, dialog_index: 2, dialog_title: "Dialog 2 · Über Bezahlgewohnheiten sprechen", speaker: "Kunde", german_text: "Ich hätte allerdings gern gewusst, ob es ein Limit für Zahlungen ohne PIN gibt.", translations: T("Ipak bih volio/voljela znati postoji li limit za plaćanja bez PIN-a.", "Yine de PIN'siz ödemeler için bir limit olup olmadığını bilmek isterdim.", "Проте я хотів(ла) би знати, чи є ліміт для платежів без PIN.", "Totuși aș fi vrut să știu dacă există o limită pentru plățile fără PIN.", "لكنني كنت أرغب في معرفة إن كان هناك حد أقصى للدفع بدون PIN.") },
    { id: "kasse-b1-d2-5", position: 5, dialog_index: 2, dialog_title: "Dialog 2 · Über Bezahlgewohnheiten sprechen", speaker: "Kassiererin", german_text: "Ja, ab einem bestimmten Betrag wird immer eine PIN-Eingabe verlangt.", translations: T("Da, od određenog iznosa se uvijek traži unos PIN-a.", "Evet, belirli bir tutardan sonra her zaman PIN girişi istenir.", "Так, від певної суми завжди вимагається введення PIN.", "Da, de la o anumită sumă se cere mereu introducerea PIN-ului.", "نعم، بدءًا من مبلغ معين يُطلب دائمًا إدخال رقم PIN.") },
    { id: "kasse-b1-d2-6", position: 6, dialog_index: 2, dialog_title: "Dialog 2 · Über Bezahlgewohnheiten sprechen", speaker: "Kunde", german_text: "Das ergibt Sinn, damit niemand mit einer verlorenen Karte hohe Beträge ausgeben kann.", translations: T("To ima smisla, kako niko s izgubljenom karticom ne bi mogao potrošiti velike iznose.", "Bu mantıklı, kimsenin kayıp bir kartla yüksek tutarlar harcayamaması için.", "Це має сенс, щоб ніхто із загубленою карткою не міг витратити великі суми.", "Are sens, ca nimeni să nu poată cheltui sume mari cu un card pierdut.", "هذا منطقي، حتى لا يتمكن أحد من إنفاق مبالغ كبيرة ببطاقة مفقودة.") },
    { id: "kasse-b1-d2-7", position: 7, dialog_index: 2, dialog_title: "Dialog 2 · Über Bezahlgewohnheiten sprechen", speaker: "Kassiererin", german_text: "Genau. Der Endpreis heute liegt übrigens bei 34 Euro 20.", translations: T("Tačno tako. Konačna cijena danas iznosi, usput, 34 eura i 20 centi.", "Aynen. Bu arada bugünkü son fiyat 34 avro 20 sent.", "Точно. До речі, кінцева ціна сьогодні становить 34 євро 20.", "Exact. Apropo, prețul final de azi este 34 euro și 20.", "بالضبط. بالمناسبة السعر النهائي اليوم هو 34 يورو و20.") },
    { id: "kasse-b1-d2-8", position: 8, dialog_index: 2, dialog_title: "Dialog 2 · Über Bezahlgewohnheiten sprechen", speaker: "Kunde", german_text: "Gut, dann gebe ich meine PIN ein, weil der Betrag über dem Limit liegt.", translations: T("Dobro, onda ću unijeti svoj PIN, jer je iznos iznad limita.", "Tamam, o zaman PIN'imi giriyorum çünkü tutar limitin üzerinde.", "Добре, тоді я введу свій PIN, бо сума перевищує ліміт.", "Bine, atunci introduc PIN-ul, pentru că suma depășește limita.", "حسنًا، سأدخل رقم PIN لأن المبلغ يتجاوز الحد المسموح.") },
    { id: "kasse-b1-d2-9", position: 9, dialog_index: 2, dialog_title: "Dialog 2 · Über Bezahlgewohnheiten sprechen", speaker: "Kassiererin", german_text: "Die Zahlung wurde soeben bestätigt. Der Bon wird gleich gedruckt.", translations: T("Plaćanje je upravo potvrđeno. Račun se odmah štampa.", "Ödeme az önce onaylandı. Fiş hemen yazdırılıyor.", "Оплату щойно підтвердили. Чек зараз надрукується.", "Plata a fost tocmai confirmată. Bonul se printează imediat.", "تم تأكيد الدفع للتو. سيُطبع الإيصال الآن.") },
    { id: "kasse-b1-d2-10", position: 10, dialog_index: 2, dialog_title: "Dialog 2 · Über Bezahlgewohnheiten sprechen", speaker: "Kunde", german_text: "Perfekt, vielen Dank für das interessante Gespräch und Ihre Hilfe.", translations: T("Odlično, hvala vam puno na zanimljivom razgovoru i pomoći.", "Mükemmel, ilginç sohbet ve yardımınız için çok teşekkürler.", "Чудово, дуже дякую за цікаву розмову та вашу допомогу.", "Perfect, mulțumesc mult pentru conversația interesantă și pentru ajutor.", "ممتاز، شكرًا جزيلاً على الحديث الممتع ومساعدتك.") },
    { id: "kasse-b1-d2-11", position: 11, dialog_index: 2, dialog_title: "Dialog 2 · Über Bezahlgewohnheiten sprechen", speaker: "Kassiererin", german_text: "Sehr gern, ich wünsche Ihnen noch einen schönen Tag!", translations: T("Vrlo rado, želim vam još lijep dan!", "Rica ederim, size iyi günler dilerim!", "Дуже приємно, бажаю вам гарного дня!", "Cu multă plăcere, vă doresc o zi frumoasă!", "بكل سرور، أتمنى لك يومًا سعيدًا!") },
  ],

  questions: [
    // ===== Übungen (practice) =====
    { id: "kasse-b1-q1", position: 1, kind: "single_choice", section: "practice", prompt: "Warum hatte der Kunde trotz der langen Schlange keine Probleme zu warten?", explanation: "„Obwohl die Schlange … lang war, hatte ich genug Zeit, um zu warten.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-q1-a1", position: 1, text: "Er hatte genug Zeit.", is_correct: true },
      { id: "kasse-b1-q1-a2", position: 2, text: "Er kannte die Kassiererin.", is_correct: false },
      { id: "kasse-b1-q1-a3", position: 3, text: "Die Kasse war leer.", is_correct: false },
    ] },
    { id: "kasse-b1-q2", position: 2, kind: "single_choice", section: "practice", prompt: "Warum fragte die Kassiererin nach einer Kundenkarte?", explanation: "„…damit ich Punkte sammeln könnte.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-q2-a1", position: 1, text: "Damit der Kunde Punkte sammeln könnte.", is_correct: true },
      { id: "kasse-b1-q2-a2", position: 2, text: "Damit die Kasse schneller schließt.", is_correct: false },
      { id: "kasse-b1-q2-a3", position: 3, text: "Damit der Kunde weniger zahlt, ohne Grund.", is_correct: false },
    ] },
    { id: "kasse-b1-q3", position: 3, kind: "gap", section: "practice", prompt: "Während die Ware gescannt wurde, bemerkte ich eine ___ beim Käse.", explanation: "Gemeint ist der Unterschied im Preis: „Preisdifferenz“.", data: H("Misli se na razliku u cijeni.", "Fiyat farkı kastediliyor.", "Йдеться про різницю в ціні.", "Este vorba despre diferența de preț.", "المقصود فرق السعر."), quiz_answers: [
      { id: "kasse-b1-q3-a1", position: 1, text: "Preisdifferenz", is_correct: true },
    ] },
    { id: "kasse-b1-q4", position: 4, kind: "true_false", section: "practice", prompt: "Die Kassiererin erkannte den Fehler sofort und rief eine Kollegin.", explanation: "Richtig, so steht es im Text.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-q4-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-b1-q4-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-b1-q5", position: 5, kind: "single_choice", section: "practice", prompt: "Warum konnte der Kunde nicht kontaktlos ohne PIN bezahlen?", explanation: "„…der Betrag war zu hoch für eine Zahlung ohne PIN.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-q5-a1", position: 1, text: "Der Betrag war zu hoch.", is_correct: true },
      { id: "kasse-b1-q5-a2", position: 2, text: "Die Karte war kaputt.", is_correct: false },
      { id: "kasse-b1-q5-a3", position: 3, text: "Er hatte keine Karte dabei.", is_correct: false },
    ] },
    { id: "kasse-b1-q6", position: 6, kind: "single_choice", section: "practice", prompt: "Was zeigte der Kassenbon am Ende?", explanation: "„Der Kassenbon … zeigte den korrigierten Endpreis.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-q6-a1", position: 1, text: "den korrigierten Endpreis", is_correct: true },
      { id: "kasse-b1-q6-a2", position: 2, text: "die Öffnungszeiten", is_correct: false },
      { id: "kasse-b1-q6-a3", position: 3, text: "den Namen der Kassiererin", is_correct: false },
    ] },
    { id: "kasse-b1-q7", position: 7, kind: "gap", section: "practice", prompt: "Der Kassenbon, der automatisch gedruckt ___, zeigte den korrigierten Preis.", explanation: "Passiv im Präteritum: „wurde“.", data: H("Pasiv u preteritu: wurde.", "Preteritte edilgen: wurde.", "Пасив у минулому: wurde.", "Pasiv la preteret: wurde.", "المبني للمجهول في الماضي: wurde."), quiz_answers: [
      { id: "kasse-b1-q7-a1", position: 1, text: "wurde", is_correct: true },
    ] },
    { id: "kasse-b1-q8", position: 8, kind: "single_choice", section: "practice", prompt: "Wie erklärte die Kassiererin den Fehler?", explanation: "„…dass solche Preisfehler leider gelegentlich vorkommen.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-q8-a1", position: 1, text: "Solche Fehler kommen gelegentlich vor.", is_correct: true },
      { id: "kasse-b1-q8-a2", position: 2, text: "Das ist nie passiert.", is_correct: false },
      { id: "kasse-b1-q8-a3", position: 3, text: "Der Kunde hat sich geirrt.", is_correct: false },
    ] },
    { id: "kasse-b1-q9", position: 9, kind: "single_choice", section: "practice", prompt: "Wie fühlte sich der Kunde am Ende?", explanation: "„…verließ die Kasse mit einem guten Gefühl.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-q9-a1", position: 1, text: "mit einem guten Gefühl", is_correct: true },
      { id: "kasse-b1-q9-a2", position: 2, text: "wütend", is_correct: false },
      { id: "kasse-b1-q9-a3", position: 3, text: "gleichgültig", is_correct: false },
    ] },
    { id: "kasse-b1-q10", position: 10, kind: "single_choice", section: "practice", prompt: "Warum hatte der Kunde trotz kurzer Verzögerung ein gutes Gesamterlebnis?", explanation: "„Obwohl es kurz etwas Verzögerung gab, war ich mit dem Service zufrieden.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-q10-a1", position: 1, text: "Er war mit dem Service zufrieden.", is_correct: true },
      { id: "kasse-b1-q10-a2", position: 2, text: "Er bekam alles gratis.", is_correct: false },
      { id: "kasse-b1-q10-a3", position: 3, text: "Er musste nicht bezahlen.", is_correct: false },
    ] },

    // ===== Abschlusstest (40 Fragen) =====
    { id: "kasse-b1-t1", position: 1, kind: "single_choice", section: "test", prompt: "Was fiel dem Kunden trotz der Länge der Schlange leicht?", explanation: "Er hatte genug Zeit, um zu warten.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t1-a1", position: 1, text: "das Warten", is_correct: true },
      { id: "kasse-b1-t1-a2", position: 2, text: "das Bezahlen ohne Karte", is_correct: false },
      { id: "kasse-b1-t1-a3", position: 3, text: "das Verlassen des Ladens", is_correct: false },
    ] },
    { id: "kasse-b1-t2", position: 2, kind: "true_false", section: "test", prompt: "Die Waren wurden zügig gescannt, nachdem der Kunde sie aufs Band gelegt hatte.", explanation: "Richtig, das steht im Text.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t2-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-b1-t2-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-b1-t3", position: 3, kind: "gap", section: "test", prompt: "Die Kassiererin fragte, ob der Kunde eine Kundenkarte hätte, ___ er Punkte sammeln könnte.", explanation: "Finalsatz: „damit“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t3-a1", position: 1, text: "damit", is_correct: true },
    ] },
    { id: "kasse-b1-t4", position: 4, kind: "single_choice", section: "test", prompt: "Wobei bemerkte der Kunde eine Preisdifferenz?", explanation: "Beim Käse.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t4-a1", position: 1, text: "beim Käse", is_correct: true },
      { id: "kasse-b1-t4-a2", position: 2, text: "beim Brot", is_correct: false },
      { id: "kasse-b1-t4-a3", position: 3, text: "beim Wasser", is_correct: false },
    ] },
    { id: "kasse-b1-t5", position: 5, kind: "single_choice", section: "test", prompt: "Wie äußerte der Kunde sein Anliegen?", explanation: "Er sagte es höflich.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t5-a1", position: 1, text: "höflich", is_correct: true },
      { id: "kasse-b1-t5-a2", position: 2, text: "wütend", is_correct: false },
      { id: "kasse-b1-t5-a3", position: 3, text: "gar nicht", is_correct: false },
    ] },
    { id: "kasse-b1-t6", position: 6, kind: "single_choice", section: "test", prompt: "Wer rief die Kassiererin zur Überprüfung?", explanation: "Sie rief eine Kollegin.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t6-a1", position: 1, text: "eine Kollegin", is_correct: true },
      { id: "kasse-b1-t6-a2", position: 2, text: "den Filialleiter", is_correct: false },
      { id: "kasse-b1-t6-a3", position: 3, text: "die Polizei", is_correct: false },
    ] },
    { id: "kasse-b1-t7", position: 7, kind: "true_false", section: "test", prompt: "Der Kunde konnte seinen Einkauf erst fortsetzen, nachdem der Preis korrigiert worden war.", explanation: "Richtig, das steht im Text.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t7-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-b1-t7-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-b1-t8", position: 8, kind: "single_choice", section: "test", prompt: "Warum konnte der Kunde nicht ohne PIN bezahlen?", explanation: "Der Betrag war zu hoch für eine Zahlung ohne PIN.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t8-a1", position: 1, text: "Der Betrag war zu hoch.", is_correct: true },
      { id: "kasse-b1-t8-a2", position: 2, text: "Die Kasse war offline.", is_correct: false },
      { id: "kasse-b1-t8-a3", position: 3, text: "Er hatte die falsche Karte.", is_correct: false },
    ] },
    { id: "kasse-b1-t9", position: 9, kind: "single_choice", section: "test", prompt: "Was passierte, nachdem der Kunde seine PIN eingegeben hatte?", explanation: "Die Zahlung wurde sofort bestätigt.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t9-a1", position: 1, text: "Die Zahlung wurde sofort bestätigt.", is_correct: true },
      { id: "kasse-b1-t9-a2", position: 2, text: "Die Kasse ging kaputt.", is_correct: false },
      { id: "kasse-b1-t9-a3", position: 3, text: "Er musste noch einmal bezahlen.", is_correct: false },
    ] },
    { id: "kasse-b1-t10", position: 10, kind: "gap", section: "test", prompt: "Der Kassenbon, der automatisch gedruckt wurde, zeigte den korrigierten ___.", explanation: "Gemeint ist der finale Betrag: „Endpreis“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t10-a1", position: 1, text: "Endpreis", is_correct: true },
    ] },
    { id: "kasse-b1-t11", position: 11, kind: "single_choice", section: "test", prompt: "Wie erklärte die Kassiererin den Preisfehler am Ende?", explanation: "Solche Preisfehler kommen gelegentlich vor.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t11-a1", position: 1, text: "Solche Fehler kommen gelegentlich vor.", is_correct: true },
      { id: "kasse-b1-t11-a2", position: 2, text: "Das ist noch nie passiert.", is_correct: false },
      { id: "kasse-b1-t11-a3", position: 3, text: "Der Kunde hat sich verrechnet.", is_correct: false },
    ] },
    { id: "kasse-b1-t12", position: 12, kind: "single_choice", section: "test", prompt: "Was bedeutet „die Preisdifferenz“?", explanation: "Der Unterschied zwischen zwei genannten Preisen.", data: H("Preisdifferenz je razlika između dvije cijene.", "Preisdifferenz, iki fiyat arasındaki farktır.", "Preisdifferenz — це різниця між двома цінами.", "Preisdifferenz este diferența dintre doua preturi.", "Preisdifferenz هو الفرق بين سعرين."), quiz_answers: [
      { id: "kasse-b1-t12-a1", position: 1, text: "der Unterschied zwischen zwei Preisen", is_correct: true },
      { id: "kasse-b1-t12-a2", position: 2, text: "der Preis für eine Tüte", is_correct: false },
      { id: "kasse-b1-t12-a3", position: 3, text: "eine Art Rabatt", is_correct: false },
    ] },
    { id: "kasse-b1-t13", position: 13, kind: "single_choice", section: "test", prompt: "Was bedeutet „übereinstimmen“?", explanation: "Zwei Dinge sind identisch oder passen zueinander.", data: H("Übereinstimmen znači poklapati se.", "Übereinstimmen, uyuşmak demektir.", "Übereinstimmen означає збігатися.", "A corespunde inseamna a se potrivi.", "يعني يتطابق."), quiz_answers: [
      { id: "kasse-b1-t13-a1", position: 1, text: "gleich sein / zusammenpassen", is_correct: true },
      { id: "kasse-b1-t13-a2", position: 2, text: "sich streiten", is_correct: false },
      { id: "kasse-b1-t13-a3", position: 3, text: "vergessen", is_correct: false },
    ] },
    { id: "kasse-b1-t14", position: 14, kind: "single_choice", section: "test", prompt: "Welche Aussage benutzt korrektes Passiv?", explanation: "„Der Preis wurde falsch eingegeben.“ ist Passiv im Präteritum.", data: H("Ovo je pasivna recenica u preteritu.", "Bu, preteritte edilgen bir cumledir.", "Це пасивне речення в минулому.", "Aceasta e o propozitie la pasiv, preterit.", "هذه جملة مبنية للمجهول في الماضي."), quiz_answers: [
      { id: "kasse-b1-t14-a1", position: 1, text: "Der Preis wurde falsch eingegeben.", is_correct: true },
      { id: "kasse-b1-t14-a2", position: 2, text: "Der Preis hat falsch eingegeben.", is_correct: false },
      { id: "kasse-b1-t14-a3", position: 3, text: "Der Preis wird falsch einzugeben.", is_correct: false },
    ] },
    { id: "kasse-b1-t15", position: 15, kind: "single_choice", section: "test", prompt: "Welcher Relativsatz ist korrekt?", explanation: "„Der Kunde, der an der Kasse wartet, wird langsam ungeduldig.“", data: H("Relativna zamjenica der odgovara muškom rodu i nominativu.", "İlgi zamiri der, eril ve yalın hale uyar.", "Відносний займенник der відповідає чоловічому роду і називному відмінку.", "Pronumele relativ der corespunde masculinului si nominativului.", "الضمير الموصول der يطابق المذكر وحالة الرفع."), quiz_answers: [
      { id: "kasse-b1-t15-a1", position: 1, text: "Der Kunde, der an der Kasse wartet, wird langsam ungeduldig.", is_correct: true },
      { id: "kasse-b1-t15-a2", position: 2, text: "Der Kunde, den an der Kasse wartet, wird langsam ungeduldig.", is_correct: false },
      { id: "kasse-b1-t15-a3", position: 3, text: "Der Kunde, der an der Kasse warten, wird langsam ungeduldig.", is_correct: false },
    ] },
    { id: "kasse-b1-t16", position: 16, kind: "single_choice", section: "test", prompt: "Was ist das Gegenteil von „geduldig“?", explanation: "Das Gegenteil von geduldig ist ungeduldig.", data: H("Suprotno od geduldig je ungeduldig.", "Geduldig'in zitti ungeduldig'dir.", "Протилежність до geduldig — ungeduldig.", "Opusul lui geduldig este ungeduldig.", "عكس geduldig هو ungeduldig."), quiz_answers: [
      { id: "kasse-b1-t16-a1", position: 1, text: "ungeduldig", is_correct: true },
      { id: "kasse-b1-t16-a2", position: 2, text: "zügig", is_correct: false },
      { id: "kasse-b1-t16-a3", position: 3, text: "höflich", is_correct: false },
    ] },
    { id: "kasse-b1-t17", position: 17, kind: "gap", section: "test", prompt: "___ die Schlange lang war, hatte ich genug Zeit. (Konzessivsatz)", explanation: "Konzessivsatz mit „obwohl“.", data: H("Rečenica dopuštanja s obwohl.", "obwohl ile izin cumlesi.", "Речення допусту з obwohl.", "Propozitie concesiva cu obwohl.", "جملة تنازلية بـ obwohl."), quiz_answers: [
      { id: "kasse-b1-t17-a1", position: 1, text: "Obwohl", is_correct: true },
    ] },
    { id: "kasse-b1-t18", position: 18, kind: "single_choice", section: "test", prompt: "Welcher Satz mit Konjunktiv II ist korrekt formuliert?", explanation: "„Könnten Sie den Preis bitte noch einmal überprüfen?“", data: H("Konjunktiv II za ucitivije zahtjeve: könnten.", "Nazik ricalar icin Konjunktiv II: könnten.", "Кон'юнктив II для ввічливих прохань: könnten.", "Conjunctiv II pentru cereri politicoase: könnten.", "الصيغة الشرطية الثانية للطلبات المهذبة: könnten."), quiz_answers: [
      { id: "kasse-b1-t18-a1", position: 1, text: "Könnten Sie den Preis bitte noch einmal überprüfen?", is_correct: true },
      { id: "kasse-b1-t18-a2", position: 2, text: "Könnten Sie den Preis bitte noch einmal überprüft?", is_correct: false },
      { id: "kasse-b1-t18-a3", position: 3, text: "Können Sie den Preis bitte noch einmal überprüften?", is_correct: false },
    ] },
    { id: "kasse-b1-t19", position: 19, kind: "single_choice", section: "test", prompt: "Welcher Satz mit „nachdem“ ist grammatisch korrekt?", explanation: "„Nachdem ich meine PIN eingegeben hatte, wurde die Zahlung sofort bestätigt.“", data: H("Nach nachdem: Plusquamperfekt im Nebensatz, Perfekt/Praesens im Hauptsatz.", "Nachdem'den sonra yan cumlede gecmis zaman, ana cumlede perfekt.", "Після nachdem: плюсквамперфект у підрядному, перфект у головному.", "Dupa nachdem: mai mult ca perfectul in subordonata, perfectul in principala.", "بعد nachdem: الماضي التام في الجملة الفرعية، الماضي في الرئيسية."), quiz_answers: [
      { id: "kasse-b1-t19-a1", position: 1, text: "Nachdem ich meine PIN eingegeben hatte, wurde die Zahlung sofort bestätigt.", is_correct: true },
      { id: "kasse-b1-t19-a2", position: 2, text: "Nachdem ich meine PIN eingebe, wurde die Zahlung sofort bestätigt.", is_correct: false },
      { id: "kasse-b1-t19-a3", position: 3, text: "Nachdem ich meine PIN eingegeben habe hatte, wurde die Zahlung bestätigt.", is_correct: false },
    ] },
    { id: "kasse-b1-t20", position: 20, kind: "single_choice", section: "test", prompt: "Welcher Satz mit indirekter Rede (dass-Satz) ist korrekt?", explanation: "„Sie hat gesagt, dass der alte Preis noch im System war.“", data: H("Indirektni govor sa dass-recenicom.", "Dass cumlesi ile dolayli anlatim.", "Непряма мова з dass-реченням.", "Vorbire indirecta cu propozitie dass.", "الكلام غير المباشر بجملة dass."), quiz_answers: [
      { id: "kasse-b1-t20-a1", position: 1, text: "Sie hat gesagt, dass der alte Preis noch im System war.", is_correct: true },
      { id: "kasse-b1-t20-a2", position: 2, text: "Sie hat gesagt, dass war der alte Preis noch im System.", is_correct: false },
      { id: "kasse-b1-t20-a3", position: 3, text: "Sie hat gesagt dass der alte Preis noch im System.", is_correct: false },
    ] },
    { id: "kasse-b1-t21", position: 21, kind: "single_choice", section: "test", prompt: "Welcher Satz mit „damit“ ist richtig?", explanation: "„Die Kassiererin ruft eine Kollegin, damit der Preis überprüft wird.“", data: H("Finalna rečenica s damit.", "Damit ile amac cumlesi.", "Речення мети з damit.", "Propozitie finala cu damit.", "جملة الغرض بـ damit."), quiz_answers: [
      { id: "kasse-b1-t21-a1", position: 1, text: "Die Kassiererin ruft eine Kollegin, damit der Preis überprüft wird.", is_correct: true },
      { id: "kasse-b1-t21-a2", position: 2, text: "Die Kassiererin ruft eine Kollegin, damit der Preis wird überprüft.", is_correct: false },
      { id: "kasse-b1-t21-a3", position: 3, text: "Die Kassiererin ruft eine Kollegin damit überprüft der Preis wird.", is_correct: false },
    ] },
    { id: "kasse-b1-t22", position: 22, kind: "single_choice", section: "test", prompt: "Welcher Passivsatz beschreibt den Kassenvorgang korrekt?", explanation: "„Die Ware wird an der Kasse gescannt.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t22-a1", position: 1, text: "Die Ware wird an der Kasse gescannt.", is_correct: true },
      { id: "kasse-b1-t22-a2", position: 2, text: "Die Ware scannt an der Kasse wird.", is_correct: false },
      { id: "kasse-b1-t22-a3", position: 3, text: "Die Ware wird an der Kasse scannen.", is_correct: false },
    ] },
    { id: "kasse-b1-t23", position: 23, kind: "single_choice", section: "test", prompt: "Welcher Relativsatz beschreibt die Kassiererin korrekt?", explanation: "„Die Kassiererin, mit der ich gesprochen habe, war sehr freundlich.“", data: H("Relativna zamjenica u dativu poslije mit.", "Mit sonrasi datif ilgi zamiri.", "Відносний займенник у давальному після mit.", "Pronume relativ la dativ dupa mit.", "الضمير الموصول في حالة الجر بعد mit."), quiz_answers: [
      { id: "kasse-b1-t23-a1", position: 1, text: "Die Kassiererin, mit der ich gesprochen habe, war sehr freundlich.", is_correct: true },
      { id: "kasse-b1-t23-a2", position: 2, text: "Die Kassiererin, mit die ich gesprochen habe, war sehr freundlich.", is_correct: false },
      { id: "kasse-b1-t23-a3", position: 3, text: "Die Kassiererin, mit den ich gesprochen habe, war sehr freundlich.", is_correct: false },
    ] },
    { id: "kasse-b1-t24", position: 24, kind: "single_choice", section: "test", prompt: "Welcher Konjunktiv-II-Satz drückt einen Wunsch aus?", explanation: "„Ich hätte gern eine Erklärung für die Preisdifferenz.“", data: H("Konjunktiv II za zelje: hätte gern.", "Dilek icin Konjunktiv II: hätte gern.", "Кон'юнктив II для бажань: hätte gern.", "Conjunctiv II pentru dorinte: hätte gern.", "الشرطية الثانية للرغبات: hätte gern."), quiz_answers: [
      { id: "kasse-b1-t24-a1", position: 1, text: "Ich hätte gern eine Erklärung für die Preisdifferenz.", is_correct: true },
      { id: "kasse-b1-t24-a2", position: 2, text: "Ich habe gern eine Erklärung für die Preisdifferenz.", is_correct: false },
      { id: "kasse-b1-t24-a3", position: 3, text: "Ich hätte gerne hatte eine Erklärung.", is_correct: false },
    ] },
    { id: "kasse-b1-t25", position: 25, kind: "single_choice", section: "test", prompt: "Wer sagt im Dialog „Ich verstehe. Damit wir das schnell klären können, rufe ich eine Kollegin.“?", explanation: "Das sagt die Kassiererin.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t25-a1", position: 1, text: "die Kassiererin", is_correct: true },
      { id: "kasse-b1-t25-a2", position: 2, text: "der Kunde", is_correct: false },
      { id: "kasse-b1-t25-a3", position: 3, text: "die Kollegin", is_correct: false },
    ] },
    { id: "kasse-b1-t26", position: 26, kind: "single_choice", section: "test", prompt: "Was stellte die Kollegin bei der Überprüfung fest?", explanation: "„Das Preisschild im Regal war noch nicht aktualisiert worden.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t26-a1", position: 1, text: "Das Preisschild war nicht aktualisiert worden.", is_correct: true },
      { id: "kasse-b1-t26-a2", position: 2, text: "Das Produkt war abgelaufen.", is_correct: false },
      { id: "kasse-b1-t26-a3", position: 3, text: "Die Kasse war kaputt.", is_correct: false },
    ] },
    { id: "kasse-b1-t27", position: 27, kind: "single_choice", section: "test", prompt: "Wie reagierte die Kassiererin auf den nicht aktualisierten Preis?", explanation: "Sie gab dem Kunden den niedrigeren Preis.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t27-a1", position: 1, text: "Sie gab ihm den niedrigeren Preis.", is_correct: true },
      { id: "kasse-b1-t27-a2", position: 2, text: "Sie verlangte den höheren Preis.", is_correct: false },
      { id: "kasse-b1-t27-a3", position: 3, text: "Sie schloss die Kasse.", is_correct: false },
    ] },
    { id: "kasse-b1-t28", position: 28, kind: "true_false", section: "test", prompt: "Im zweiten Dialog spricht der Kunde darüber, dass er früher meistens bar bezahlt hat.", explanation: "Richtig — er sagt, dass er heute meistens die Karte nutzt.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t28-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-b1-t28-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-b1-t29", position: 29, kind: "single_choice", section: "test", prompt: "Warum gibt es ein Limit für kontaktlose Zahlungen ohne PIN?", explanation: "Damit niemand mit einer verlorenen Karte hohe Beträge ausgeben kann.", data: H("Da niko sa izgubljenom karticom ne moze potrositi visoke iznose.", "Kayıp bir kartla kimse yüksek tutar harcayamasın diye.", "Щоб ніхто із загубленою карткою не міг витратити великі суми.", "Ca nimeni sa nu poata cheltui sume mari cu un card pierdut.", "حتى لا يستطيع أحد إنفاق مبالغ كبيرة ببطاقة مفقودة."), quiz_answers: [
      { id: "kasse-b1-t29-a1", position: 1, text: "Damit niemand mit einer verlorenen Karte viel Geld ausgeben kann.", is_correct: true },
      { id: "kasse-b1-t29-a2", position: 2, text: "Damit die Kasse langsamer arbeitet.", is_correct: false },
      { id: "kasse-b1-t29-a3", position: 3, text: "Damit die Kassiererin mehr Pausen bekommt.", is_correct: false },
    ] },
    { id: "kasse-b1-t30", position: 30, kind: "single_choice", section: "test", prompt: "Wie hoch war der Endpreis im zweiten Dialog?", explanation: "„Der Endpreis heute liegt übrigens bei 34 Euro 20.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t30-a1", position: 1, text: "34 Euro 20", is_correct: true },
      { id: "kasse-b1-t30-a2", position: 2, text: "14 Euro 20", is_correct: false },
      { id: "kasse-b1-t30-a3", position: 3, text: "43 Euro 20", is_correct: false },
    ] },
    { id: "kasse-b1-t31", position: 31, kind: "true_false", section: "test", prompt: "In Deutschland ist kontaktloses Bezahlen inzwischen weit verbreitet.", explanation: "Richtig — viele Menschen nutzen kontaktloses Bezahlen im Alltag.", data: H("Beskontaktno plaćanje je danas veoma rasprostranjeno.", "Temassız ödeme günümüzde yaygın.", "Безконтактна оплата сьогодні дуже поширена.", "Plata contactless este raspandita azi.", "الدفع بدون تلامس منتشر اليوم."), quiz_answers: [
      { id: "kasse-b1-t31-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-b1-t31-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-b1-t32", position: 32, kind: "true_false", section: "test", prompt: "Preisfehler zwischen Regal und Kassensystem können gelegentlich vorkommen.", explanation: "Richtig — das erklärt auch die Kassiererin im Text.", data: H("Greske u cijeni izmedju police i sistema mogu se povremeno desiti.", "Raf ve sistem arasindaki fiyat hatalari ara sira olabilir.", "Помилки в цінах між полицею і системою можуть іноді траплятися.", "Erorile de pret intre raft si sistem pot aparea ocazional.", "أخطاء الأسعار بين الرف والنظام قد تحدث أحيانًا."), quiz_answers: [
      { id: "kasse-b1-t32-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "kasse-b1-t32-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "kasse-b1-t33", position: 33, kind: "single_choice", section: "test", prompt: "Was gehört normalerweise NICHT zu einer Reklamation an der Kasse?", explanation: "Ein Termin beim Zahnarzt gehört nicht dazu.", data: H("Termin kod zubara ne spada u ovo.", "Diş hekimi randevusu buna dahil değil.", "Запис до стоматолога сюди не належить.", "Programarea la dentist nu tine de asta.", "موعد طبيب الأسنان لا يتعلق بهذا."), quiz_answers: [
      { id: "kasse-b1-t33-a1", position: 1, text: "ein Termin beim Zahnarzt", is_correct: true },
      { id: "kasse-b1-t33-a2", position: 2, text: "eine falsche Preisangabe", is_correct: false },
      { id: "kasse-b1-t33-a3", position: 3, text: "ein Scanfehler", is_correct: false },
    ] },
    { id: "kasse-b1-t34", position: 34, kind: "single_choice", section: "test", prompt: "Was passt NICHT zu einer Reklamation an der Kasse?", explanation: "Ein Flugticket buchen gehört nicht dazu.", data: H("Rezervacija leta ne spada ovamo.", "Ucak bileti rezervasyonu buna dahil degil.", "Бронювання авіаквитка сюди не належить.", "Rezervarea unui bilet de avion nu tine de asta.", "حجز تذكرة طيران لا يتعلق بهذا."), quiz_answers: [
      { id: "kasse-b1-t34-a1", position: 1, text: "ein Flugticket buchen", is_correct: true },
      { id: "kasse-b1-t34-a2", position: 2, text: "einen Preisfehler melden", is_correct: false },
      { id: "kasse-b1-t34-a3", position: 3, text: "eine Preisdifferenz zeigen", is_correct: false },
    ] },
    { id: "kasse-b1-t35", position: 35, kind: "single_choice", section: "test", prompt: "Warum ist es sinnvoll, höflich auf einen Fehler hinzuweisen?", explanation: "So wird das Problem meist schneller und freundlicher gelöst.", data: H("Uctivo ukazivanje na gresku brze rjesava problem.", "Nazikce hataya isaret etmek sorunu hizli cozer.", "Ввічливо вказавши на помилку, проблему вирішують швидше.", "Aratand politicos o greseala, problema se rezolva mai repede.", "الإشارة بأدب إلى خطأ تحل المشكلة بسرعة أكبر."), quiz_answers: [
      { id: "kasse-b1-t35-a1", position: 1, text: "Das Problem wird meist schneller und freundlicher gelöst.", is_correct: true },
      { id: "kasse-b1-t35-a2", position: 2, text: "Der Preis steigt automatisch.", is_correct: false },
      { id: "kasse-b1-t35-a3", position: 3, text: "Es ist verboten, etwas zu sagen.", is_correct: false },
    ] },
    { id: "kasse-b1-t36", position: 36, kind: "single_choice", section: "test", prompt: "Welcher Satz zeigt korrektes Passiv im Präteritum?", explanation: "„Der Preis wurde falsch eingegeben.“", data: H("Pasiv preterit sa wurde.", "Wurde ile preterit edilgen.", "Пасив у минулому з wurde.", "Pasiv preterit cu wurde.", "المبني للمجهول في الماضي بـ wurde."), quiz_answers: [
      { id: "kasse-b1-t36-a1", position: 1, text: "Der Preis wurde falsch eingegeben.", is_correct: true },
      { id: "kasse-b1-t36-a2", position: 2, text: "Der Preis wird falsch eingegeben hatte.", is_correct: false },
      { id: "kasse-b1-t36-a3", position: 3, text: "Der Preis wurde falsch einzugeben.", is_correct: false },
    ] },
    { id: "kasse-b1-t37", position: 37, kind: "single_choice", section: "test", prompt: "Welcher Relativsatz beschreibt das Produkt korrekt?", explanation: "„Das Produkt, das falsch gescannt wurde, kostete zu viel.“", data: H("Relativna zamjenica das za srednji rod, akuzativ.", "Notr ve akuzatif icin ilgi zamiri das.", "Відносний займенник das для середнього роду, знахідний.", "Pronume relativ das pentru neutru, acuzativ.", "الضمير الموصول das للمحايد وحالة المفعول."), quiz_answers: [
      { id: "kasse-b1-t37-a1", position: 1, text: "Das Produkt, das falsch gescannt wurde, kostete zu viel.", is_correct: true },
      { id: "kasse-b1-t37-a2", position: 2, text: "Das Produkt, der falsch gescannt wurde, kostete zu viel.", is_correct: false },
      { id: "kasse-b1-t37-a3", position: 3, text: "Das Produkt, das falsch gescannt wird, kostete zu viel.", is_correct: false },
    ] },
    { id: "kasse-b1-t38", position: 38, kind: "gap", section: "test", prompt: "___ ich meine PIN eingegeben hatte, wurde die Zahlung sofort bestätigt.", explanation: "Vorzeitigkeit ausgedrückt mit „Nachdem“.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "kasse-b1-t38-a1", position: 1, text: "Nachdem", is_correct: true },
    ] },
    { id: "kasse-b1-t39", position: 39, kind: "single_choice", section: "test", prompt: "Welcher Satz mit indirekter Rede gibt wieder, was der Kunde sagte?", explanation: "„Der Kunde hat erklärt, dass er kontaktlos bezahlen möchte.“", data: H("Indirektni govor sa dass.", "Dass ile dolayli anlatim.", "Непряма мова з dass.", "Vorbire indirecta cu dass.", "الكلام غير المباشر بـ dass."), quiz_answers: [
      { id: "kasse-b1-t39-a1", position: 1, text: "Der Kunde hat erklärt, dass er kontaktlos bezahlen möchte.", is_correct: true },
      { id: "kasse-b1-t39-a2", position: 2, text: "Der Kunde hat erklärt, dass möchte er kontaktlos bezahlen.", is_correct: false },
      { id: "kasse-b1-t39-a3", position: 3, text: "Der Kunde hat erklärt dass er kontaktlos bezahlen.", is_correct: false },
    ] },
    { id: "kasse-b1-t40", position: 40, kind: "single_choice", section: "test", prompt: "Wie geht die Geschichte insgesamt zu Ende?", explanation: "Der Kunde bezahlt, bedankt sich und verlässt die Kasse mit einem guten Gefühl.", data: H("Na kraju price kupac se zahvaljuje i odlazi zadovoljan.", "Hikaye sonunda musteri tesekkur edip memnun ayriliyor.", "Наприкінці історії клієнт дякує і йде задоволений.", "La final clientul multumeste si pleaca multumit.", "في النهاية يشكر الزبون ويغادر بشعور جيد."), quiz_answers: [
      { id: "kasse-b1-t40-a1", position: 1, text: "Der Kunde bedankt sich und geht mit einem guten Gefühl.", is_correct: true },
      { id: "kasse-b1-t40-a2", position: 2, text: "Der Kunde beschwert sich weiter.", is_correct: false },
      { id: "kasse-b1-t40-a3", position: 3, text: "Der Kunde verlässt den Laden ohne zu bezahlen.", is_correct: false },
    ] },

    // ===== Sprache & Grammatik: zum Anklicken =====
    { id: "kasse-b1-g1", position: 1, kind: "single_choice", section: "grammar", prompt: "Welcher Konzessivsatz mit „obwohl“ ist korrekt?", explanation: "Im obwohl-Satz steht das Verb am Ende.", data: H("Kod obwohl glagol ide na kraj.", "Obwohl'da fiil sonda.", "У реченні з obwohl дієслово в кінці.", "La obwohl verbul sta la sfarsit.", "مع obwohl يأتي الفعل في النهاية."), quiz_answers: [
      { id: "kasse-b1-g1-a1", position: 1, text: "Obwohl die Schlange lang war, hatte ich genug Zeit.", is_correct: true },
      { id: "kasse-b1-g1-a2", position: 2, text: "Obwohl war die Schlange lang, hatte ich genug Zeit.", is_correct: false },
      { id: "kasse-b1-g1-a3", position: 3, text: "Obwohl die Schlange lang, war ich hatte genug Zeit.", is_correct: false },
    ] },
    { id: "kasse-b1-g2", position: 2, kind: "single_choice", section: "grammar", prompt: "Welcher Finalsatz mit „damit“ ist korrekt?", explanation: "„Die Kassiererin ruft eine Kollegin, damit der Preis überprüft wird.“", data: H("Finalna recenica sa damit.", "Damit ile amac cumlesi.", "Речення мети з damit.", "Propozitie finala cu damit.", "جملة الغرض بـ damit."), quiz_answers: [
      { id: "kasse-b1-g2-a1", position: 1, text: "Die Kassiererin ruft eine Kollegin, damit der Preis überprüft wird.", is_correct: true },
      { id: "kasse-b1-g2-a2", position: 2, text: "Die Kassiererin ruft eine Kollegin damit wird der Preis überprüft.", is_correct: false },
      { id: "kasse-b1-g2-a3", position: 3, text: "Die Kassiererin ruft eine Kollegin, damit überprüft der Preis wird.", is_correct: false },
    ] },
    { id: "kasse-b1-g3", position: 3, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit „nachdem“ zeigt korrekte Zeitenfolge?", explanation: "Nebensatz im Plusquamperfekt, Hauptsatz im Perfekt/Präsens.", data: H("Plusquamperfekt u nachdem-recenici.", "Nachdem cumlesinde gecmis zaman.", "Плюсквамперфект у реченні з nachdem.", "Mai mult ca perfectul in propozitia cu nachdem.", "الماضي التام في جملة nachdem."), quiz_answers: [
      { id: "kasse-b1-g3-a1", position: 1, text: "Nachdem ich meine PIN eingegeben hatte, wurde die Zahlung bestätigt.", is_correct: true },
      { id: "kasse-b1-g3-a2", position: 2, text: "Nachdem ich meine PIN eingebe, wurde die Zahlung bestätigt.", is_correct: false },
      { id: "kasse-b1-g3-a3", position: 3, text: "Nachdem ich meine PIN eingegeben habe, wurde die Zahlung bestätigt hatte.", is_correct: false },
    ] },
    { id: "kasse-b1-g4", position: 4, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit Konjunktiv II drückt einen höflichen Wunsch aus?", explanation: "„Ich hätte gern eine Erklärung für die Preisdifferenz.“", data: H("Konjunktiv II za zelje.", "Dilek icin Konjunktiv II.", "Кон'юнктив II для бажань.", "Conjunctiv II pentru dorinte.", "الشرطية الثانية للرغبات."), quiz_answers: [
      { id: "kasse-b1-g4-a1", position: 1, text: "Ich hätte gern eine Erklärung für die Preisdifferenz.", is_correct: true },
      { id: "kasse-b1-g4-a2", position: 2, text: "Ich habe gern eine Erklärung für die Preisdifferenz.", is_correct: false },
      { id: "kasse-b1-g4-a3", position: 3, text: "Ich hätte gern gehabt eine Erklärung.", is_correct: false },
    ] },
    { id: "kasse-b1-g5", position: 5, kind: "single_choice", section: "grammar", prompt: "Welcher Passivsatz im Präsens ist korrekt?", explanation: "„Die Ware wird an der Kasse gescannt.“", data: H("Pasiv u prezentu sa wird.", "Simdiki zamanda edilgen wird ile.", "Пасив у теперішньому з wird.", "Pasiv prezent cu wird.", "المبني للمجهول في المضارع بـ wird."), quiz_answers: [
      { id: "kasse-b1-g5-a1", position: 1, text: "Die Ware wird an der Kasse gescannt.", is_correct: true },
      { id: "kasse-b1-g5-a2", position: 2, text: "Die Ware wird an der Kasse scannen.", is_correct: false },
      { id: "kasse-b1-g5-a3", position: 3, text: "Die Ware scannt wird an der Kasse.", is_correct: false },
    ] },
    { id: "kasse-b1-g6", position: 6, kind: "single_choice", section: "grammar", prompt: "Welcher Relativsatz mit Dativ ist korrekt?", explanation: "„Die Kassiererin, mit der ich gesprochen habe, war sehr freundlich.“", data: H("Relativna zamjenica u dativu poslije mit.", "Mit sonrasi datif ilgi zamiri.", "Відносний займенник у давальному після mit.", "Pronume relativ la dativ dupa mit.", "الضمير الموصول في حالة الجر بعد mit."), quiz_answers: [
      { id: "kasse-b1-g6-a1", position: 1, text: "Die Kassiererin, mit der ich gesprochen habe, war sehr freundlich.", is_correct: true },
      { id: "kasse-b1-g6-a2", position: 2, text: "Die Kassiererin, mit die ich gesprochen habe, war sehr freundlich.", is_correct: false },
      { id: "kasse-b1-g6-a3", position: 3, text: "Die Kassiererin, mit dem ich gesprochen habe, war sehr freundlich.", is_correct: false },
    ] },
    { id: "kasse-b1-g7", position: 7, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit indirekter Rede ist korrekt?", explanation: "„Sie hat gesagt, dass der alte Preis noch im System war.“", data: H("Indirektni govor sa dass.", "Dass ile dolayli anlatim.", "Непряма мова з dass.", "Vorbire indirecta cu dass.", "الكلام غير المباشر بـ dass."), quiz_answers: [
      { id: "kasse-b1-g7-a1", position: 1, text: "Sie hat gesagt, dass der alte Preis noch im System war.", is_correct: true },
      { id: "kasse-b1-g7-a2", position: 2, text: "Sie hat gesagt, dass war der alte Preis noch im System.", is_correct: false },
      { id: "kasse-b1-g7-a3", position: 3, text: "Sie hat gesagt, dass der alte Preis noch im System war gewesen.", is_correct: false },
    ] },
    { id: "kasse-b1-g8", position: 8, kind: "single_choice", section: "grammar", prompt: "Welcher Satz kombiniert Wechselpräposition mit Relativsatz korrekt?", explanation: "„Die Kundenkarte wird an das Lesegerät gehalten, das neben der Kasse steht.“", data: H("Relativna zamjenica das za srednji rod, Lesegerät.", "Notr icin ilgi zamiri das, Lesegerät.", "Відносний займенник das для середнього роду, Lesegerät.", "Pronume relativ das pentru neutru, Lesegerät.", "الضمير الموصول das للمحايد، Lesegerät."), quiz_answers: [
      { id: "kasse-b1-g8-a1", position: 1, text: "Die Kundenkarte wird an das Lesegerät gehalten, das neben der Kasse steht.", is_correct: true },
      { id: "kasse-b1-g8-a2", position: 2, text: "Die Kundenkarte wird an das Lesegerät gehalten, der neben der Kasse steht.", is_correct: false },
      { id: "kasse-b1-g8-a3", position: 3, text: "Die Kundenkarte wird an das Lesegerät gehalten, das neben der Kasse steht wird.", is_correct: false },
    ] },

    // ===== Wo ist was? =====
    { id: "kasse-b1-p1", position: 1, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Das Preisschild, das nicht aktualisiert wurde, hängt ___ dem Regal. Welche Präposition passt?", explanation: "„an“ beschreibt: befestigt an der senkrechten Fläche des Regals.", data: H("„an“ znači pričvršćeno na policu.", "„an“ rafa asili anlamina gelir.", "„an“ означає прикріплено до полиці.", "„an“ inseamna prins de raft.", "„an“ تعني معلق على الرف."), quiz_answers: [
      { id: "kasse-b1-p1-a1", position: 1, text: "an", is_correct: true },
      { id: "kasse-b1-p1-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-b1-p1-a3", position: 3, text: "zwischen", is_correct: false },
    ] },
    { id: "kasse-b1-p2", position: 2, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Die Kollegin, die den Preis überprüft, steht ___ dem Regal. Welche Präposition passt?", explanation: "„vor“ beschreibt: sie steht direkt davor, um den Preis zu prüfen.", data: H("„vor“ znači ispred police.", "„vor“ rafin onunde anlamina gelir.", "„vor“ означає перед полицею.", "„vor“ inseamna in fata raftului.", "„vor“ تعني أمام الرف."), quiz_answers: [
      { id: "kasse-b1-p2-a1", position: 1, text: "vor", is_correct: true },
      { id: "kasse-b1-p2-a2", position: 2, text: "über", is_correct: false },
      { id: "kasse-b1-p2-a3", position: 3, text: "unter", is_correct: false },
    ] },
    { id: "kasse-b1-p3", position: 3, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Der Kunde, der wartet, steht ___ der Kollegin und der Kassiererin. (zwischen)", explanation: "Der Kunde steht zwischen den beiden Personen, um beide Antworten zu hören.", data: H("Kupac stoji izmedju obje osobe.", "Musteri iki kisi arasinda duruyor.", "Клієнт стоїть між двома людьми.", "Clientul sta intre cele doua persoane.", "الزبون يقف بين الشخصين."), quiz_answers: [
      { id: "kasse-b1-p3-a1", position: 1, text: "zwischen", is_correct: true },
    ] },
    { id: "kasse-b1-p4", position: 4, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Das Kartenlesegerät, das neben der Kasse steht, hängt ___ einem kleinen Ständer. Welche Präposition passt?", explanation: "„auf“ beschreibt: das Gerät steht oben auf dem Ständer.", data: H("„auf“ znači na postolju.", "„auf“ standin uzerinde anlamina gelir.", "„auf“ означає на підставці.", "„auf“ inseamna pe suport.", "„auf“ تعني على الحامل."), quiz_answers: [
      { id: "kasse-b1-p4-a1", position: 1, text: "auf", is_correct: true },
      { id: "kasse-b1-p4-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-b1-p4-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "kasse-b1-p5", position: 5, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Bildschirm mit dem Endpreis hängt ___ dem Kartenlesegerät. Welche Präposition passt am besten?", explanation: "„über“ beschreibt: oberhalb des Kartenlesegeräts angebracht.", data: H("„über“ znači iznad citaca kartica.", "„über“ kart okuyucunun uzerinde anlamina gelir.", "„über“ означає над пристроєм зчитування карток.", "„über“ inseamna deasupra cititorului de card.", "„über“ تعني فوق قارئ البطاقة."), quiz_answers: [
      { id: "kasse-b1-p5-a1", position: 1, text: "über", is_correct: true },
      { id: "kasse-b1-p5-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-b1-p5-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "kasse-b1-p6", position: 6, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Die wartenden Kunden stehen ___ der Kasse in einer Reihe. Welche Präposition passt?", explanation: "„vor“ beschreibt: die Kunden warten in einer Reihe davor.", data: H("Kupci koji cekaju stoje ispred kase u redu.", "Bekleyen musteriler kasanin onunde sira halinde.", "Клієнти, які чекають, стоять у ряд перед касою.", "Clientii care asteapta stau in rand in fata casei.", "الزبائن المنتظرون يقفون في صف أمام الصندوق."), quiz_answers: [
      { id: "kasse-b1-p6-a1", position: 1, text: "vor", is_correct: true },
      { id: "kasse-b1-p6-a2", position: 2, text: "über", is_correct: false },
      { id: "kasse-b1-p6-a3", position: 3, text: "unter", is_correct: false },
    ] },
    { id: "kasse-b1-p7", position: 7, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Der Kassenbon liegt ___ dem Kassenband. (auf)", explanation: "„auf dem Kassenband“ — der Bon liegt oben auf dem Band.", data: H("Racun lezi na traci.", "Fis bandin uzerinde duruyor.", "Чек лежить на стрічці.", "Bonul sta pe banda.", "الإيصال موضوع على السير."), quiz_answers: [
      { id: "kasse-b1-p7-a1", position: 1, text: "auf", is_correct: true },
    ] },
    { id: "kasse-b1-p8", position: 8, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Die Kassiererin, die den Fehler erklärt, steht ___ dem Kunden. Welche Präposition passt?", explanation: "„gegenüber“ beschreibt: sie steht dem Kunden direkt gegenüber.", data: H("„gegenüber“ znači nasuprot kupca.", "„gegenüber“ musterinin karsisinda anlamina gelir.", "„gegenüber“ означає навпроти клієнта.", "„gegenüber“ inseamna in fata clientului.", "„gegenüber“ تعني مقابل الزبون."), quiz_answers: [
      { id: "kasse-b1-p8-a1", position: 1, text: "gegenüber", is_correct: true },
      { id: "kasse-b1-p8-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-b1-p8-a3", position: 3, text: "in", is_correct: false },
    ] },
    { id: "kasse-b1-p9", position: 9, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der neue Bon kommt ___ dem Drucker. Welche Präposition passt?", explanation: "„aus“ beschreibt: der Bon kommt aus dem Drucker.", data: H("„aus“ znači izlazi iz printera.", "„aus“ yaziciden cikiyor anlamina gelir.", "„aus“ означає виходить із принтера.", "„aus“ inseamna iese din imprimanta.", "„aus“ تعني يخرج من الطابعة."), quiz_answers: [
      { id: "kasse-b1-p9-a1", position: 1, text: "aus", is_correct: true },
      { id: "kasse-b1-p9-a2", position: 2, text: "unter", is_correct: false },
      { id: "kasse-b1-p9-a3", position: 3, text: "zwischen", is_correct: false },
    ] },
    { id: "kasse-b1-p10", position: 10, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Kollegin steht ___ dem Regal mit dem Käse und der Kasse. (zwischen)", explanation: "„zwischen dem Regal und der Kasse“ — sie läuft zwischen beiden Orten.", data: H("Koleginica se krece izmedju police i kase.", "Meslektas raf ile kasa arasinda gidip geliyor.", "Колега рухається між полицею і касою.", "Colega se misca intre raft si casa.", "الزميلة تتحرك بين الرف والصندوق."), quiz_answers: [
      { id: "kasse-b1-p10-a1", position: 1, text: "zwischen", is_correct: true },
    ] },
    { id: "kasse-b1-p11", position: 11, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo befindet sich das Regal mit dem Preisschild, laut Geschichte? Welche Präposition passt?", explanation: "Das Regal befindet sich „in der Nähe der Kasse“.", data: H("Polica se nalazi blizu kase.", "Raf kasaya yakin bulunuyor.", "Полиця розташована біля каси.", "Raftul se afla langa casa.", "الرف يقع قرب الصندوق."), quiz_answers: [
      { id: "kasse-b1-p11-a1", position: 1, text: "in der Nähe der Kasse", is_correct: true },
      { id: "kasse-b1-p11-a2", position: 2, text: "unter der Kasse", is_correct: false },
      { id: "kasse-b1-p11-a3", position: 3, text: "über der Kasse", is_correct: false },
    ] },
    { id: "kasse-b1-p12", position: 12, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht die Kollegin, während sie den Preis prüft? Welche Präposition passt?", explanation: "Sie steht „vor dem Regal“, um den Preis zu prüfen.", data: H("Koleginica stoji ispred police.", "Meslektas rafin onunde duruyor.", "Колега стоїть перед полицею.", "Colega sta in fata raftului.", "الزميلة تقف أمام الرف."), quiz_answers: [
      { id: "kasse-b1-p12-a1", position: 1, text: "vor dem Regal", is_correct: true },
      { id: "kasse-b1-p12-a2", position: 2, text: "hinter dem Regal", is_correct: false },
      { id: "kasse-b1-p12-a3", position: 3, text: "unter dem Regal", is_correct: false },
    ] },
    { id: "kasse-b1-p13", position: 13, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Der neue Kassenbon liegt ___ der alten Quittung. (neben)", explanation: "Der neue Bon liegt direkt neben der alten Quittung auf dem Tisch.", data: H("Novi racun lezi pored stare potvrde.", "Yeni fis eski makbuzun yaninda.", "Новий чек лежить біля старої квитанції.", "Noul bon sta langa vechea chitanta.", "الإيصال الجديد بجانب الإيصال القديم."), quiz_answers: [
      { id: "kasse-b1-p13-a1", position: 1, text: "neben", is_correct: true },
    ] },
    { id: "kasse-b1-p14", position: 14, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo hängt das Schild mit den Öffnungszeiten der Kasse? Welche Präposition passt?", explanation: "Das Schild hängt „über der Kasse“.", data: H("Znak sa radnim vremenom visi iznad kase.", "Calisma saatleri tabelasi kasanin uzerinde asili.", "Табличка з робочим часом висить над касою.", "Semnul cu orarul atarna deasupra casei.", "لافتة أوقات العمل معلقة فوق الصندوق."), quiz_answers: [
      { id: "kasse-b1-p14-a1", position: 1, text: "über der Kasse", is_correct: true },
      { id: "kasse-b1-p14-a2", position: 2, text: "unter der Kasse", is_correct: false },
      { id: "kasse-b1-p14-a3", position: 3, text: "in der Kasse", is_correct: false },
    ] },
    { id: "kasse-b1-p15", position: 15, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo befindet sich die Reklamationsecke im Supermarkt üblicherweise? Welche Präposition passt?", explanation: "Sie befindet sich üblicherweise „in der Nähe des Kundenservice“.", data: H("Nalazi se blizu korisnickog servisa.", "Genelde musteri hizmetlerine yakindir.", "Зазвичай розташована біля обслуговування клієнтів.", "Se afla de obicei langa serviciul clienti.", "تقع عادة قرب خدمة العملاء."), quiz_answers: [
      { id: "kasse-b1-p15-a1", position: 1, text: "in der Nähe des Kundenservice", is_correct: true },
      { id: "kasse-b1-p15-a2", position: 2, text: "unter dem Kundenservice", is_correct: false },
      { id: "kasse-b1-p15-a3", position: 3, text: "zwischen dem Kundenservice", is_correct: false },
    ] },

    // ===== Dialog bauen =====
    { id: "kasse-b1-b1", position: 1, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 1 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Bitte äußern → nachfragen → Problem nennen → Kollegin rufen → Ergebnis bestätigen.", data: { items: [
      "Kunde: Entschuldigen Sie, könnten Sie den Preis für diesen Käse bitte noch einmal überprüfen?",
      "Kassiererin: Natürlich. Was fällt Ihnen denn auf?",
      "Kunde: Der Preis auf dem Bildschirm stimmt nicht mit dem Preisschild im Regal überein.",
      "Kassiererin: Ich verstehe. Damit wir das schnell klären können, rufe ich eine Kollegin, die das im Regal überprüft.",
      "Kollegin: Ich habe nachgeschaut: Das Preisschild im Regal war noch nicht aktualisiert worden.",
    ] }, quiz_answers: [] },
    { id: "kasse-b1-b2", position: 2, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 2 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Frage zur Zahlungsart → Antwort → Frage zum Limit → Antwort → Abschluss.", data: { items: [
      "Kassiererin: Bezahlen Sie eigentlich meistens kontaktlos oder bevorzugen Sie Bargeld?",
      "Kunde: Obwohl ich früher fast immer bar bezahlt habe, nutze ich heute meistens die Karte.",
      "Kunde: Ich hätte allerdings gern gewusst, ob es ein Limit für Zahlungen ohne PIN gibt.",
      "Kassiererin: Ja, ab einem bestimmten Betrag wird immer eine PIN-Eingabe verlangt.",
      "Kunde: Perfekt, vielen Dank für das interessante Gespräch und Ihre Hilfe.",
    ] }, quiz_answers: [] },
  ],
} as const;
