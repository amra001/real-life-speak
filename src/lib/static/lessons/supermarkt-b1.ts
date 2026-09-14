const T = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ bks, tr, uk, ro, ar });
const H = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ help: T(bks, tr, uk, ro, ar) });

export const supermarktB1 = {
  lesson: {
    id: "8e2c4a91-3f7b-4d6e-9a1c-6f2b8e4d7a95",
    slug: "supermarkt-b1",
    title: "Im Supermarkt – B1",
    description:
      "Ein anspruchsvoller Einkauf im Supermarkt: Produkte differenziert vergleichen, eine Reklamation an der Kasse formulieren und über Einkaufsgewohnheiten berichten.",
    level: "B1",
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
          "Ich bin zufrieden, obwohl die Schlange an der Kasse lang war.",
          "Obwohl das Gemüse teurer war, habe ich es gekauft.",
        ],
      },
      {
        title: "Nebensätze mit damit (Finalsatz)",
        explanation:
          "„Damit“ drückt einen Zweck oder ein Ziel aus, wenn Haupt- und Nebensatz unterschiedliche Subjekte haben (im Unterschied zu „um … zu“).",
        examples: [
          "Der Mitarbeiter zeigt mir den Weg, damit ich das Regal finde.",
          "Sie druckt den Bon aus, damit ich die Ware zurückgeben kann.",
        ],
      },
      {
        title: "Nebensätze mit nachdem (Vorzeitigkeit)",
        explanation:
          "„Nachdem“ beschreibt, dass etwas VOR dem Ereignis im Hauptsatz passiert ist. Deshalb steht im nachdem-Satz meist das Plusquamperfekt, im Hauptsatz das Perfekt oder Präsens.",
        examples: [
          "Nachdem ich die Einkaufsliste geschrieben hatte, bin ich losgefahren.",
          "Nachdem der Preis korrigiert worden war, habe ich bezahlt.",
        ],
      },
      {
        title: "Konjunktiv II: höfliche Wünsche und Irreales",
        explanation:
          "Konjunktiv II (könnte, würde, hätte gern, wäre) macht Aussagen höflicher, hypothetischer oder drückt etwas Irreales aus.",
        examples: [
          "Ich hätte gern eine Rückerstattung für das kaputte Produkt.",
          "Könnten Sie mir bitte den Preis überprüfen?",
          "Wenn ich mehr Zeit hätte, würde ich verschiedene Läden vergleichen.",
        ],
      },
      {
        title: "Passiv: Vorgangspassiv mit werden",
        explanation:
          "Das Passiv rückt die Handlung in den Vordergrund, nicht die handelnde Person. Es wird mit „werden“ + Partizip II gebildet. Im Präteritum wird „werden“ zu „wurde“.",
        examples: [
          "Die Ware wird an der Kasse gescannt.",
          "Der Preis wurde falsch eingegeben.",
          "Die Regale werden jeden Morgen neu aufgefüllt.",
        ],
      },
      {
        title: "Relativsätze mit der/die/das",
        explanation:
          "Relativsätze erweitern ein Nomen mit zusätzlicher Information. Das Relativpronomen richtet sich nach Genus und Numerus des Bezugswortes, der Kasus nach der Funktion im Relativsatz.",
        examples: [
          "Der Kunde, der an der Kasse steht, wartet schon lange.",
          "Das Angebot, das im Prospekt stand, war leider schon vorbei.",
          "Die Mitarbeiterin, mit der ich gesprochen habe, war sehr hilfsbereit.",
        ],
      },
      {
        title: "Indirekte Rede (Grundformen im Alltag)",
        explanation:
          "Um wiederzugeben, was jemand gesagt hat, benutzt man im Alltag oft einen dass-Satz statt des formellen Konjunktiv I.",
        examples: [
          "Sie hat gesagt, dass das Angebot nur noch heute gilt.",
          "Er hat erklärt, dass die Rückerstattung ein paar Tage dauert.",
        ],
      },
      {
        title: "Wechselpräpositionen im Überblick (komplexer)",
        explanation:
          "Auf B1-Niveau kombiniert man Wechselpräpositionen oft mit Relativsätzen und Passiv: Man muss gleichzeitig auf Kasus UND Satzbau achten.",
        examples: [
          "Das Regal, in dem die Konserven stehen, wird bald umgeräumt.",
          "Die Kiste wird auf den Wagen gestellt, der neben der Kasse steht.",
        ],
      },
    ],
    place_items: [],
  },

  scenes: [
    { id: "supermarkt-b1-s1", position: 1, german_text: "Nachdem ich meine Einkaufsliste geschrieben hatte, bin ich zum großen Supermarkt am Stadtrand gefahren.", translations: T("Nakon što sam napisao/la listu za kupovinu, odvezao/la sam se do velikog supermarketa na periferiji grada.", "Alışveriş listemi yazdıktan sonra, şehrin kenarındaki büyük süpermarkete gittim.", "Після того як я написав(ла) список покупок, я поїхав(ла) до великого супермаркету на околиці міста.", "După ce mi-am scris lista de cumpărături, am mers la marele supermarket de la marginea orașului.", "بعد أن كتبت قائمة التسوق، ذهبت إلى السوبر ماركت الكبير في ضواحي المدينة.") },
    { id: "supermarkt-b1-s2", position: 2, german_text: "Der Mitarbeiter, der an der Information stand, begrüßte mich freundlich.", translations: T("Radnik koji je stajao na infopultu srdačno me je pozdravio.", "Danışmada duran çalışan beni içtenlikle karşıladı.", "Працівник, який стояв на інформаційній стійці, привітав мене приязно.", "Angajatul care stătea la informații m-a salutat prietenos.", "الموظف الذي كان يقف عند مكتب الاستعلامات رحّب بي بلطف.") },
    { id: "supermarkt-b1-s3", position: 3, german_text: "Ich hätte gern gewusst, ob das Sonderangebot aus dem Prospekt noch gültig ist.", translations: T("Htio/htjela bih znati je li specijalna ponuda iz prospekta još važeća.", "Broşürdeki özel teklifin hâlâ geçerli olup olmadığını bilmek isterdim.", "Я хотів(ла) би знати, чи спеціальна пропозиція з проспекту ще діє.", "Aș fi vrut să știu dacă oferta specială din pliant mai este valabilă.", "كنت أرغب في معرفة إن كان العرض الخاص في الكتيب لا يزال ساريًا.") },
    { id: "supermarkt-b1-s4", position: 4, german_text: "Obwohl das Angebot laut Aushang schon vorbei war, hat man mir freundlicherweise trotzdem den alten Preis berechnet.", translations: T("Iako je ponuda prema oglasu već istekla, ipak su mi ljubazno obračunali staru cijenu.", "İlana göre teklif bitmiş olmasına rağmen, bana yine de eski fiyat nazikçe hesaplandı.", "Хоча акція, за оголошенням, уже закінчилась, мені все одно люб'язно порахували стару ціну.", "Deși oferta se încheiase conform anunțului, mi-au calculat totuși amabil prețul vechi.", "رغم أن العرض قد انتهى وفق الإعلان، إلا أنهم احتسبوا لي السعر القديم بلطف.") },
    { id: "supermarkt-b1-s5", position: 5, german_text: "Die Kundin, die vor mir an der Käsetheke stand, verlangte eine ausführliche Beratung.", translations: T("Kupica koja je stajala ispred mene kod tezge za sir tražila je detaljno savjetovanje.", "Peynir tezgahında benden önce duran müşteri ayrıntılı danışmanlık istedi.", "Клієнтка, яка стояла переді мною біля прилавка з сиром, вимагала докладної консультації.", "Clienta care stătea înaintea mea la tejgheaua de brânzeturi a cerut o consiliere detaliată.", "طلبت الزبونة التي كانت أمامي عند منضدة الجبن استشارة مفصّلة.") },
    { id: "supermarkt-b1-s6", position: 6, german_text: "Während ich wartete, wurden die Regale von zwei Angestellten neu aufgefüllt.", translations: T("Dok sam čekao/la, dva radnika su ponovo punila police.", "Ben beklerken, raflar iki çalışan tarafından yeniden dolduruldu.", "Поки я чекав(ла), полиці наповнювали двоє працівників.", "În timp ce așteptam, rafturile au fost reaprovizionate de doi angajați.", "بينما كنت أنتظر، أعيد تعبئة الرفوف من قبل موظفين اثنين.") },
    { id: "supermarkt-b1-s7", position: 7, german_text: "Das Produkt, das ich eigentlich kaufen wollte, war leider ausverkauft.", translations: T("Proizvod koji sam zapravo želio/la kupiti bio je nažalost rasprodat.", "Aslında satın almak istediğim ürün ne yazık ki tükenmişti.", "Товар, який я, власне, хотів(ла) купити, на жаль, був розпроданий.", "Produsul pe care voiam de fapt să-l cumpăr era, din păcate, epuizat.", "المنتج الذي أردت شراءه فعليًا كان للأسف نافذًا.") },
    { id: "supermarkt-b1-s8", position: 8, german_text: "Ein Mitarbeiter erklärte mir, dass die Lieferung erst am nächsten Tag ankommen würde.", translations: T("Radnik mi je objasnio da će dostava stići tek sljedećeg dana.", "Bir çalışan bana teslimatın ancak ertesi gün geleceğini açıkladı.", "Працівник пояснив мені, що доставка прибуде лише наступного дня.", "Un angajat mi-a explicat că livrarea va sosi abia a doua zi.", "شرح لي أحد الموظفين أن الشحنة لن تصل إلا في اليوم التالي.") },
    { id: "supermarkt-b1-s9", position: 9, german_text: "An der Kasse wurde meine Ware sorgfältig gescannt, obwohl es an diesem Tag sehr voll war.", translations: T("Na kasi je moja roba pažljivo skenirana, iako je toga dana bilo jako gužva.", "Kasada, o gün çok kalabalık olmasına rağmen, malım özenle taranmıştı.", "На касі мій товар ретельно відсканували, хоча того дня було дуже людно.", "La casă, marfa mea a fost scanată cu grijă, deși era foarte aglomerat în ziua aceea.", "عند الصندوق تم مسح بضاعتي بعناية، رغم الازدحام الشديد في ذلك اليوم.") },
    { id: "supermarkt-b1-s10", position: 10, german_text: "Als ich bezahlen wollte, bemerkte ich, dass ein Artikel doppelt berechnet worden war.", translations: T("Kada sam htio/htjela platiti, primijetio/la sam da je jedan artikal naplaćen duplo.", "Ödeme yapmak isterken, bir ürünün iki kez hesaplandığını fark ettim.", "Коли я хотів(ла) заплатити, я помітив(ла), що один товар порахували двічі.", "Când am vrut să plătesc, am observat că un articol fusese calculat de două ori.", "عندما أردت الدفع، لاحظت أن أحد الأصناف حُسب مرتين.") },
    { id: "supermarkt-b1-s11", position: 11, german_text: "Ich hätte mich fast geärgert, aber die Kassiererin, die den Fehler sofort bemerkte, entschuldigte sich höflich.", translations: T("Umalo sam se naljutio/la, ali kasirka, koja je odmah primijetila grešku, ljubazno se izvinila.", "Neredeyse sinirlenecektim ama hatayı hemen fark eden kasiyer kibarca özür diledi.", "Я мало не розсердився(лася), але касирка, яка одразу помітила помилку, ввічливо вибачилась.", "Aproape că m-am supărat, dar casiera, care a observat imediat greșeala, și-a cerut politicos scuze.", "كدت أنزعج، لكن الكاشيرة التي لاحظت الخطأ فورًا اعتذرت بأدب.") },
    { id: "supermarkt-b1-s12", position: 12, german_text: "Nachdem der Betrag korrigiert worden war, wurde mir ein kleiner Rabatt als Entschuldigung angeboten.", translations: T("Nakon što je iznos ispravljen, ponuđen mi je mali popust kao izvinjenje.", "Tutar düzeltildikten sonra, özür olarak küçük bir indirim teklif edildi.", "Після того як суму виправили, мені запропонували невелику знижку як вибачення.", "După ce suma a fost corectată, mi s-a oferit o mică reducere drept scuză.", "بعد أن صُحّح المبلغ، عُرض عليّ خصم صغير كنوع من الاعتذار.") },
    { id: "supermarkt-b1-s13", position: 13, german_text: "Falls mir so etwas noch einmal passieren würde, wüsste ich jetzt, wie man höflich reklamiert.", translations: T("Ako bi mi se to još jednom desilo, sada bih znao/la kako se učtivo žali.", "Bu bana bir daha olsaydı, artık nazikçe nasıl şikayet edileceğini bilirdim.", "Якби зі мною таке сталося ще раз, я б уже знав(ла), як ввічливо поскаржитись.", "Dacă mi s-ar mai întâmpla așa ceva, aș ști acum cum să reclam politicos.", "لو حدث ذلك مرة أخرى، لعرفت الآن كيف أشتكي بأدب.") },
    { id: "supermarkt-b1-s14", position: 14, german_text: "Die Quittung, die mir ausgehändigt wurde, habe ich sorgfältig aufbewahrt.", translations: T("Račun koji mi je uručen pažljivo sam sačuvao/la.", "Bana verilen fişi özenle sakladım.", "Чек, який мені вручили, я ретельно зберіг(ла).", "Chitanța care mi-a fost înmânată am păstrat-o cu grijă.", "احتفظت بعناية بالإيصال الذي سُلّم لي.") },
    { id: "supermarkt-b1-s15", position: 15, german_text: "Am Ende bin ich zufrieden nach Hause gefahren, obwohl der Einkauf länger gedauert hatte, als ich erwartet hatte.", translations: T("Na kraju sam se zadovoljno odvezao/la kući, iako je kupovina trajala duže nego što sam očekivao/la.", "Sonunda, beklediğimden daha uzun sürmesine rağmen mutlu bir şekilde eve döndüm.", "Наприкінці я задоволено поїхав(ла) додому, хоча покупки тривали довше, ніж я очікував(ла).", "La final am plecat mulțumit(ă) spre casă, deși cumpărăturile durase mai mult decât mă așteptasem.", "في النهاية عدت إلى المنزل راضيًا رغم أن التسوق استغرق وقتًا أطول مما توقعت.") },
  ],

  vocab: [
    { id: "supermarkt-b1-v1", position: 1, term: "Sonderangebot", article: "das", plural: "die Sonderangebote", word_class: "Nomen", example: "Das Sonderangebot war noch gültig.", translations: T("posebna ponuda", "özel teklif", "спеціальна пропозиція", "ofertă specială", "عرض خاص") },
    { id: "supermarkt-b1-v2", position: 2, term: "Prospekt", article: "der", plural: "die Prospekte", word_class: "Nomen", example: "Das Angebot stand im Prospekt.", translations: T("prospekt/reklamni letak", "broşür", "проспект/буклет", "pliant", "كتيب دعائي") },
    { id: "supermarkt-b1-v3", position: 3, term: "Beratung", article: "die", plural: "die Beratungen", word_class: "Nomen", example: "Sie verlangte eine ausführliche Beratung.", translations: T("savjetovanje", "danışmanlık", "консультація", "consiliere", "استشارة") },
    { id: "supermarkt-b1-v4", position: 4, term: "auffüllen", word_class: "Verb", example: "Die Regale wurden neu aufgefüllt.", translations: T("popuniti (police)", "doldurmak (raf)", "поповнювати (полиці)", "a reaproviziona", "يعيد التعبئة") },
    { id: "supermarkt-b1-v5", position: 5, term: "ausverkauft", word_class: "Adjektiv", example: "Das Produkt war ausverkauft.", translations: T("rasprodano", "tükenmiş", "розпродано", "epuizat/vândut", "نافد من المخزون") },
    { id: "supermarkt-b1-v6", position: 6, term: "Lieferung", article: "die", plural: "die Lieferungen", word_class: "Nomen", example: "Die Lieferung kommt erst morgen.", translations: T("dostava", "teslimat", "доставка", "livrare", "شحنة/توصيل") },
    { id: "supermarkt-b1-v7", position: 7, term: "scannen", word_class: "Verb", example: "Die Ware wird an der Kasse gescannt.", translations: T("skenirati", "taramak", "сканувати", "a scana", "يمسح ضوئيًا") },
    { id: "supermarkt-b1-v8", position: 8, term: "doppelt", word_class: "Adjektiv", example: "Ein Artikel wurde doppelt berechnet.", translations: T("duplo/dvostruko", "iki kez/çift", "подвійно", "dublu", "مرتين/مضاعف") },
    { id: "supermarkt-b1-v9", position: 9, term: "sich entschuldigen", word_class: "Verb", example: "Die Kassiererin hat sich entschuldigt.", translations: T("izviniti se", "özür dilemek", "вибачатися", "a-și cere scuze", "يعتذر") },
    { id: "supermarkt-b1-v10", position: 10, term: "Rabatt", article: "der", plural: "die Rabatte", word_class: "Nomen", example: "Sie hat mir einen Rabatt angeboten.", translations: T("popust", "indirim", "знижка", "reducere", "خصم") },
    { id: "supermarkt-b1-v11", position: 11, term: "reklamieren", word_class: "Verb", example: "Ich weiß jetzt, wie man höflich reklamiert.", translations: T("reklamirati/žaliti se", "şikayet etmek", "рекламувати/скаржитись", "a reclama", "يشتكي") },
    { id: "supermarkt-b1-v12", position: 12, term: "aufbewahren", word_class: "Verb", example: "Ich habe die Quittung aufbewahrt.", translations: T("sačuvati/čuvati", "saklamak", "зберігати", "a păstra", "يحتفظ به") },
    { id: "supermarkt-b1-v13", position: 13, term: "Rückerstattung", article: "die", plural: "die Rückerstattungen", word_class: "Nomen", example: "Ich hätte gern eine Rückerstattung.", translations: T("povrat novca", "geri ödeme", "повернення коштів", "rambursare", "استرداد المال") },
    { id: "supermarkt-b1-v14", position: 14, term: "überprüfen", word_class: "Verb", example: "Könnten Sie den Preis überprüfen?", translations: T("provjeriti", "kontrol etmek", "перевіряти", "a verifica", "يتحقق من") },
    { id: "supermarkt-b1-v15", position: 15, term: "Beleg", article: "der", plural: "die Belege", word_class: "Nomen", example: "Ohne Beleg keine Rückerstattung.", translations: T("dokaz/potvrda", "belge/fiş", "документ/квитанція", "dovadă/bon", "إثبات/إيصال") },
    { id: "supermarkt-b1-v16", position: 16, term: "Konserve", article: "die", plural: "die Konserven", word_class: "Nomen", example: "Die Konserven stehen in dem Regal.", translations: T("konzerva", "konserve", "консерва", "conservă", "معلبات") },
    { id: "supermarkt-b1-v17", position: 17, term: "umräumen", word_class: "Verb", example: "Das Regal wird bald umgeräumt.", translations: T("preurediti/premjestiti", "yeniden düzenlemek", "переставляти", "a rearanja", "يعيد الترتيب") },
    { id: "supermarkt-b1-v18", position: 18, term: "Aushang", article: "der", plural: "die Aushänge", word_class: "Nomen", example: "Laut Aushang war das Angebot vorbei.", translations: T("oglas/obavijest", "ilan/duyuru", "оголошення", "anunț afișat", "إعلان معلق") },
    { id: "supermarkt-b1-v19", position: 19, term: "gültig", word_class: "Adjektiv", example: "Ist das Angebot noch gültig?", translations: T("važeće", "geçerli", "дійсний", "valabil", "ساري المفعول") },
    { id: "supermarkt-b1-v20", position: 20, term: "Betrag", article: "der", plural: "die Beträge", word_class: "Nomen", example: "Der Betrag wurde korrigiert.", translations: T("iznos", "tutar", "сума", "sumă", "مبلغ") },
    { id: "supermarkt-b1-v21", position: 21, term: "hilfsbereit", word_class: "Adjektiv", example: "Die Mitarbeiterin war sehr hilfsbereit.", translations: T("uslužan/spreman pomoći", "yardımsever", "готовий допомогти", "săritor", "متعاون/مستعد للمساعدة") },
    { id: "supermarkt-b1-v22", position: 22, term: "Kundenservice", article: "der", plural: "—", word_class: "Nomen", example: "Ich habe den Kundenservice angerufen.", translations: T("korisnička podrška", "müşteri hizmetleri", "служба підтримки клієнтів", "serviciul clienți", "خدمة العملاء") },
  ],

  dialog: [
    { id: "supermarkt-b1-d1-1", position: 1, dialog_index: 1, dialog_title: "Dialog 1 · Nachfrage zum Sonderangebot", speaker: "Kunde", german_text: "Entschuldigung, ich hätte gern gewusst, ob das Angebot aus dem Prospekt noch gültig ist.", translations: T("Izvinite, htio/htjela bih znati je li ponuda iz prospekta još važeća.", "Affedersiniz, broşürdeki teklifin hâlâ geçerli olup olmadığını bilmek isterdim.", "Вибачте, я хотів(ла) би знати, чи акція з проспекту ще діє.", "Scuzați-mă, aș fi vrut să știu dacă oferta din pliant mai este valabilă.", "عفوًا، كنت أرغب في معرفة إن كان العرض في الكتيب لا يزال ساريًا.") },
    { id: "supermarkt-b1-d1-2", position: 2, dialog_index: 1, dialog_title: "Dialog 1 · Nachfrage zum Sonderangebot", speaker: "Mitarbeiter", german_text: "Laut Aushang ist das Angebot leider schon seit gestern vorbei.", translations: T("Prema oglasu, ponuda je nažalost istekla još jučer.", "İlana göre teklif ne yazık ki dünden beri bitmiş.", "Згідно з оголошенням, акція, на жаль, закінчилась ще вчора.", "Conform anunțului, oferta s-a încheiat din păcate încă de ieri.", "وفقًا للإعلان، انتهى العرض للأسف منذ الأمس.") },
    { id: "supermarkt-b1-d1-3", position: 3, dialog_index: 1, dialog_title: "Dialog 1 · Nachfrage zum Sonderangebot", speaker: "Kunde", german_text: "Schade, obwohl ich extra deswegen hergekommen bin.", translations: T("Šteta, iako sam upravo zbog toga došao/došla ovamo.", "Yazık, özellikle bunun için buraya geldim.", "Шкода, хоча я приїхав(ла) сюди спеціально через це.", "Păcat, deși am venit special pentru asta.", "للأسف، رغم أنني جئت خصيصًا من أجل ذلك.") },
    { id: "supermarkt-b1-d1-4", position: 4, dialog_index: 1, dialog_title: "Dialog 1 · Nachfrage zum Sonderangebot", speaker: "Mitarbeiter", german_text: "Warten Sie, ich frage kurz meine Kollegin, ob wir eine Ausnahme machen können.", translations: T("Sačekajte, pitat ću kratko koleginicu možemo li napraviti izuzetak.", "Bekleyin, meslektaşıma kısaca bir istisna yapıp yapamayacağımızı soracağım.", "Зачекайте, я запитаю колегу, чи можемо ми зробити виняток.", "Așteptați, o întreb repede pe colega mea dacă putem face o excepție.", "انتظر، سأسأل زميلتي إن كان بإمكاننا القيام باستثناء.") },
    { id: "supermarkt-b1-d1-5", position: 5, dialog_index: 1, dialog_title: "Dialog 1 · Nachfrage zum Sonderangebot", speaker: "Kunde", german_text: "Das wäre wirklich sehr nett von Ihnen.", translations: T("To bi bilo zaista jako ljubazno od vas.", "Bu gerçekten sizden çok naziklik olur.", "Це було б справді дуже люб'язно з вашого боку.", "Ar fi într-adevăr foarte drăguț din partea dumneavoastră.", "سيكون هذا لطفًا كبيرًا منك حقًا.") },
    { id: "supermarkt-b1-d1-6", position: 6, dialog_index: 1, dialog_title: "Dialog 1 · Nachfrage zum Sonderangebot", speaker: "Mitarbeiter", german_text: "Gut, meine Kollegin hat gesagt, dass wir Ihnen ausnahmsweise den alten Preis geben.", translations: T("Dobro, koleginica je rekla da ćemo vam izuzetno dati staru cijenu.", "Tamam, meslektaşım istisnai olarak size eski fiyatı vereceğimizi söyledi.", "Добре, колега сказала, що ми, як виняток, дамо вам стару ціну.", "Bine, colega mea a spus că vă vom oferi excepțional prețul vechi.", "حسنًا، قالت زميلتي إننا سنمنحك السعر القديم استثنائيًا.") },
    { id: "supermarkt-b1-d1-7", position: 7, dialog_index: 1, dialog_title: "Dialog 1 · Nachfrage zum Sonderangebot", speaker: "Kunde", german_text: "Vielen herzlichen Dank, das freut mich sehr.", translations: T("Puno vam hvala, to me jako raduje.", "Çok teşekkür ederim, bu beni çok mutlu etti.", "Дуже щиро дякую, це мене дуже тішить.", "Mulțumesc mult, mă bucur foarte tare.", "شكرًا جزيلاً، هذا يسعدني كثيرًا.") },
    { id: "supermarkt-b1-d1-8", position: 8, dialog_index: 1, dialog_title: "Dialog 1 · Nachfrage zum Sonderangebot", speaker: "Mitarbeiter", german_text: "Gern geschehen. Nächstes Mal empfehle ich Ihnen, etwas früher zu kommen.", translations: T("Nema na čemu. Sljedeći put vam preporučujem da dođete malo ranije.", "Rica ederim. Bir dahaki sefere biraz daha erken gelmenizi tavsiye ederim.", "Будь ласка. Наступного разу раджу вам прийти трохи раніше.", "Cu plăcere. Data viitoare vă recomand să veniți puțin mai devreme.", "على الرحب والسعة. أنصحك بالمجيء أبكر قليلاً في المرة القادمة.") },
    { id: "supermarkt-b1-d1-9", position: 9, dialog_index: 1, dialog_title: "Dialog 1 · Nachfrage zum Sonderangebot", speaker: "Kunde", german_text: "Das werde ich mir merken, danke für den Tipp.", translations: T("To ću zapamtiti, hvala na savjetu.", "Bunu aklımda tutacağım, tavsiye için teşekkürler.", "Я це запам'ятаю, дякую за пораду.", "O să țin minte, mulțumesc pentru sfat.", "سأتذكر ذلك، شكرًا على النصيحة.") },
    { id: "supermarkt-b1-d1-10", position: 10, dialog_index: 1, dialog_title: "Dialog 1 · Nachfrage zum Sonderangebot", speaker: "Mitarbeiter", german_text: "Kein Problem. Ich wünsche Ihnen noch einen angenehmen Einkauf.", translations: T("Nema problema. Želim vam ugodnu kupovinu.", "Sorun değil. Keyifli bir alışveriş dilerim.", "Не проблема. Бажаю вам приємних покупок.", "Nicio problemă. Vă doresc cumpărături plăcute.", "لا مشكلة. أتمنى لك تسوقًا ممتعًا.") },
    { id: "supermarkt-b1-d1-11", position: 11, dialog_index: 1, dialog_title: "Dialog 1 · Nachfrage zum Sonderangebot", speaker: "Kunde", german_text: "Danke, Ihnen auch noch einen schönen Tag!", translations: T("Hvala, i vama lijep dan!", "Teşekkürler, size de iyi günler!", "Дякую, вам також гарного дня!", "Mulțumesc, o zi frumoasă și dumneavoastră!", "شكرًا، ولك أيضًا يومًا سعيدًا!") },

    { id: "supermarkt-b1-d2-1", position: 1, dialog_index: 2, dialog_title: "Dialog 2 · Reklamation an der Kasse", speaker: "Kunde", german_text: "Entschuldigung, ich glaube, ein Artikel wurde doppelt berechnet.", translations: T("Izvinite, mislim da je jedan artikal naplaćen duplo.", "Affedersiniz, sanırım bir ürün iki kez hesaplandı.", "Вибачте, я думаю, один товар порахували двічі.", "Scuzați-mă, cred că un articol a fost calculat de două ori.", "عفوًا، أعتقد أن أحد الأصناف حُسب مرتين.") },
    { id: "supermarkt-b1-d2-2", position: 2, dialog_index: 2, dialog_title: "Dialog 2 · Reklamation an der Kasse", speaker: "Kassiererin", german_text: "Oh, das tut mir wirklich leid. Zeigen Sie mir bitte den Bon.", translations: T("O, jako mi je žao. Pokažite mi molim vas račun.", "Ah, gerçekten üzgünüm. Lütfen fişi gösterin.", "О, мені справді шкода. Покажіть мені, будь ласка, чек.", "Îmi pare foarte rău. Vă rog arătați-mi bonul.", "آه، أنا آسفة حقًا. أرني الإيصال من فضلك.") },
    { id: "supermarkt-b1-d2-3", position: 3, dialog_index: 2, dialog_title: "Dialog 2 · Reklamation an der Kasse", speaker: "Kunde", german_text: "Hier, wie Sie sehen, wurde die Butter zweimal aufgeführt.", translations: T("Evo, kao što vidite, maslac je naveden dva puta.", "İşte, gördüğünüz gibi, tereyağı iki kez listelenmiş.", "Ось, як бачите, масло вказали двічі.", "Iată, cum vedeți, untul a fost listat de două ori.", "ها هي، كما ترى، تم إدراج الزبدة مرتين.") },
    { id: "supermarkt-b1-d2-4", position: 4, dialog_index: 2, dialog_title: "Dialog 2 · Reklamation an der Kasse", speaker: "Kassiererin", german_text: "Sie haben völlig recht, das war ein Fehler beim Scannen.", translations: T("Potpuno ste u pravu, to je bila greška prilikom skeniranja.", "Tamamen haklısınız, bu tarama sırasında bir hataydı.", "Ви абсолютно праві, це була помилка під час сканування.", "Aveți perfectă dreptate, a fost o greșeală la scanare.", "أنت محق تمامًا، كان ذلك خطأ أثناء المسح الضوئي.") },
    { id: "supermarkt-b1-d2-5", position: 5, dialog_index: 2, dialog_title: "Dialog 2 · Reklamation an der Kasse", speaker: "Kunde", german_text: "Könnten Sie den Betrag bitte korrigieren?", translations: T("Biste li molim vas mogli ispraviti iznos?", "Tutarı düzeltebilir misiniz lütfen?", "Чи могли б ви, будь ласка, виправити суму?", "Ați putea corecta suma, vă rog?", "هل يمكنك تصحيح المبلغ من فضلك؟") },
    { id: "supermarkt-b1-d2-6", position: 6, dialog_index: 2, dialog_title: "Dialog 2 · Reklamation an der Kasse", speaker: "Kassiererin", german_text: "Natürlich, ich korrigiere das sofort und entschuldige mich für die Unannehmlichkeit.", translations: T("Naravno, odmah ću to ispraviti i izvinjavam se zbog neugodnosti.", "Tabii ki, bunu hemen düzeltiyorum ve rahatsızlık için özür diliyorum.", "Звісно, я одразу це виправлю і перепрошую за незручності.", "Desigur, corectez imediat și îmi cer scuze pentru inconvenient.", "بالطبع، سأصحح ذلك فورًا وأعتذر عن الإزعاج.") },
    { id: "supermarkt-b1-d2-7", position: 7, dialog_index: 2, dialog_title: "Dialog 2 · Reklamation an der Kasse", speaker: "Kunde", german_text: "Das ist kein Problem, solche Fehler passieren manchmal.", translations: T("Nema problema, takve greške se ponekad dešavaju.", "Sorun değil, böyle hatalar bazen olur.", "Не проблема, такі помилки іноді трапляються.", "Nu e nicio problemă, astfel de greșeli se mai întâmplă.", "لا مشكلة، مثل هذه الأخطاء تحدث أحيانًا.") },
    { id: "supermarkt-b1-d2-8", position: 8, dialog_index: 2, dialog_title: "Dialog 2 · Reklamation an der Kasse", speaker: "Kassiererin", german_text: "Als kleine Entschuldigung schenke ich Ihnen einen Rabatt auf den nächsten Einkauf.", translations: T("Kao malo izvinjenje, poklanjam vam popust na sljedeću kupovinu.", "Küçük bir özür olarak, size bir sonraki alışverişinizde indirim hediye ediyorum.", "Як маленьке вибачення, я даю вам знижку на наступну покупку.", "Ca mică scuză, vă ofer o reducere la următoarea cumpărătură.", "كاعتذار بسيط، سأقدم لك خصمًا على عملية الشراء القادمة.") },
    { id: "supermarkt-b1-d2-9", position: 9, dialog_index: 2, dialog_title: "Dialog 2 · Reklamation an der Kasse", speaker: "Kunde", german_text: "Das ist wirklich nett, vielen Dank für Ihr Verständnis.", translations: T("To je zaista lijepo, hvala vam puno na razumijevanju.", "Bu gerçekten çok naziklik, anlayışınız için çok teşekkür ederim.", "Це справді люб'язно, дуже дякую за розуміння.", "Este într-adevăr drăguț, mulțumesc mult pentru înțelegere.", "هذا لطف حقيقي، شكرًا جزيلاً على تفهمك.") },
    { id: "supermarkt-b1-d2-10", position: 10, dialog_index: 2, dialog_title: "Dialog 2 · Reklamation an der Kasse", speaker: "Kassiererin", german_text: "Hier ist Ihr korrigierter Bon. Ich wünsche Ihnen noch einen schönen Tag.", translations: T("Evo vašeg ispravljenog računa. Želim vam prijatan dan.", "İşte düzeltilmiş fişiniz. İyi günler dilerim.", "Ось ваш виправлений чек. Бажаю вам гарного дня.", "Iată bonul dumneavoastră corectat. Vă doresc o zi frumoasă.", "تفضل إيصالك المصحح. أتمنى لك يومًا سعيدًا.") },
    { id: "supermarkt-b1-d2-11", position: 11, dialog_index: 2, dialog_title: "Dialog 2 · Reklamation an der Kasse", speaker: "Kunde", german_text: "Danke schön, auf Wiedersehen!", translations: T("Hvala lijepo, doviđenja!", "Çok teşekkürler, hoşça kalın!", "Дуже дякую, до побачення!", "Mulțumesc mult, la revedere!", "شكرًا جزيلاً، إلى اللقاء!") },
  ],

  questions: [
    // ===== Übungen (practice) =====
    { id: "supermarkt-b1-q1", position: 1, kind: "single_choice", section: "practice", prompt: "Warum ist der Kunde extra zum Supermarkt gefahren?", explanation: "Wegen des Sonderangebots aus dem Prospekt.", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-b1-q1-a1", position: 1, text: "wegen des Sonderangebots aus dem Prospekt", is_correct: true },
      { id: "supermarkt-b1-q1-a2", position: 2, text: "wegen eines Geburtstags", is_correct: false },
      { id: "supermarkt-b1-q1-a3", position: 3, text: "wegen einer Reparatur", is_correct: false },
    ] },
    { id: "supermarkt-b1-q2", position: 2, kind: "single_choice", section: "practice", prompt: "Welcher Satz enthält einen Nebensatz mit „obwohl“?", explanation: "„Obwohl das Angebot laut Aushang schon vorbei war, hat man mir trotzdem den alten Preis berechnet.“", data: H("obwohl uvodi suprotnost.", "obwohl bir zitlik belirtir.", "obwohl вводить протиставлення.", "obwohl introduce o opozitie.", "obwohl تُدخل تناقضًا."), quiz_answers: [
      { id: "supermarkt-b1-q2-a1", position: 1, text: "Obwohl das Angebot vorbei war, hat man mir den alten Preis berechnet.", is_correct: true },
      { id: "supermarkt-b1-q2-a2", position: 2, text: "Ich kaufe Brot und Milch.", is_correct: false },
      { id: "supermarkt-b1-q2-a3", position: 3, text: "Die Kasse ist neben dem Ausgang.", is_correct: false },
    ] },
    { id: "supermarkt-b1-q3", position: 3, kind: "gap", section: "practice", prompt: "Die Ware wird an der Kasse ___. (scannen, Passiv Präsens)", explanation: "Passiv: wird gescannt.", data: H("Pasiv se gradi sa werden + particip II.", "Edilgen, werden + gecmis zaman ortaci ile yapilir.", "Пасив утворюється werden + дієприкметник II.", "Pasivul se formeaza cu werden + participiu II.", "المبني للمجهول يُبنى بـ werden + التصريف الثالث."), quiz_answers: [
      { id: "supermarkt-b1-q3-a1", position: 1, text: "gescannt", is_correct: true },
    ] },
    { id: "supermarkt-b1-q4", position: 4, kind: "true_false", section: "practice", prompt: "Der Kunde bekommt am Ende trotzdem den alten Preis.", explanation: "Richtig — die Mitarbeiterin macht eine Ausnahme.", data: H("Radnica pravi izuzetak.", "Calisan bir istisna yapiyor.", "Працівниця робить виняток.", "Angajata face o exceptie.", "الموظفة تقوم باستثناء."), quiz_answers: [
      { id: "supermarkt-b1-q4-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "supermarkt-b1-q4-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "supermarkt-b1-q5", position: 5, kind: "single_choice", section: "practice", prompt: "Welcher Satz ist ein Relativsatz?", explanation: "„Der Kunde, der an der Kasse steht, wartet schon lange.“", data: H("Relativna recenica opisuje imenicu.", "Iliski cumle bir ismi tanimlar.", "Означальне речення описує іменник.", "Propozitia relativa descrie un substantiv.", "الجملة الموصولة تصف اسمًا."), quiz_answers: [
      { id: "supermarkt-b1-q5-a1", position: 1, text: "Der Kunde, der an der Kasse steht, wartet schon lange.", is_correct: true },
      { id: "supermarkt-b1-q5-a2", position: 2, text: "Ich kaufe Brot und Milch.", is_correct: false },
      { id: "supermarkt-b1-q5-a3", position: 3, text: "Das macht 12 Euro.", is_correct: false },
    ] },
    { id: "supermarkt-b1-q6", position: 6, kind: "single_choice", section: "practice", prompt: "Was war das Problem an der Kasse im zweiten Dialog?", explanation: "Ein Artikel (die Butter) wurde doppelt berechnet.", data: H("Maslac je naplacen dva puta.", "Tereyagi iki kez hesaplandi.", "Масло порахували двічі.", "Untul a fost calculat de doua ori.", "الزبدة حُسبت مرتين."), quiz_answers: [
      { id: "supermarkt-b1-q6-a1", position: 1, text: "Ein Artikel wurde doppelt berechnet.", is_correct: true },
      { id: "supermarkt-b1-q6-a2", position: 2, text: "Die Kasse war kaputt.", is_correct: false },
      { id: "supermarkt-b1-q6-a3", position: 3, text: "Es gab keinen Rabatt.", is_correct: false },
    ] },
    { id: "supermarkt-b1-q7", position: 7, kind: "gap", section: "practice", prompt: "Ich hätte ___ eine Rückerstattung für das kaputte Produkt. (Konjunktiv II von gern haben)", explanation: "„gern“ + hätte drückt einen höflichen Wunsch aus.", data: H("Konjunktiv II izrazava uctiv zelju.", "Konjunktiv II kibar bir istegi ifade eder.", "Кон'юнктив II виражає ввічливе бажання.", "Conjunctiv II exprima o dorinta politicoasa.", "الصيغة الشرطية الثانية تعبر عن رغبة مهذبة."), quiz_answers: [
      { id: "supermarkt-b1-q7-a1", position: 1, text: "gern", is_correct: true },
    ] },
    { id: "supermarkt-b1-q8", position: 8, kind: "single_choice", section: "practice", prompt: "Wie reagiert die Kassiererin auf die Reklamation?", explanation: "Sie entschuldigt sich und bietet einen Rabatt an.", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-b1-q8-a1", position: 1, text: "Sie entschuldigt sich und bietet einen Rabatt an.", is_correct: true },
      { id: "supermarkt-b1-q8-a2", position: 2, text: "Sie streitet mit dem Kunden.", is_correct: false },
      { id: "supermarkt-b1-q8-a3", position: 3, text: "Sie ignoriert die Reklamation.", is_correct: false },
    ] },
    { id: "supermarkt-b1-q9", position: 9, kind: "single_choice", section: "practice", prompt: "Was empfiehlt der Mitarbeiter dem Kunden für nächstes Mal?", explanation: "„Nächstes Mal empfehle ich Ihnen, etwas früher zu kommen.“", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-b1-q9-a1", position: 1, text: "etwas früher zu kommen", is_correct: true },
      { id: "supermarkt-b1-q9-a2", position: 2, text: "nie wiederzukommen", is_correct: false },
      { id: "supermarkt-b1-q9-a3", position: 3, text: "online zu bestellen", is_correct: false },
    ] },
    { id: "supermarkt-b1-q10", position: 10, kind: "single_choice", section: "practice", prompt: "Was bekommt der Kunde als Entschuldigung für den Fehler?", explanation: "„Als kleine Entschuldigung schenke ich Ihnen einen Rabatt auf den nächsten Einkauf.“", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-b1-q10-a1", position: 1, text: "einen Rabatt auf den nächsten Einkauf", is_correct: true },
      { id: "supermarkt-b1-q10-a2", position: 2, text: "ein neues Produkt gratis", is_correct: false },
      { id: "supermarkt-b1-q10-a3", position: 3, text: "eine Beschwerde-Nummer", is_correct: false },
    ] },

    // ===== Abschlusstest (40 Fragen) =====
    { id: "supermarkt-b1-t1", position: 1, kind: "single_choice", section: "test", prompt: "Was hat die Person gemacht, bevor sie zum Supermarkt gefahren ist?", explanation: "„Nachdem ich meine Einkaufsliste geschrieben hatte, bin ich…gefahren.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-b1-t1-a1", position: 1, text: "Sie hat die Einkaufsliste geschrieben.", is_correct: true },
      { id: "supermarkt-b1-t1-a2", position: 2, text: "Sie hat gekocht.", is_correct: false },
      { id: "supermarkt-b1-t1-a3", position: 3, text: "Sie hat geschlafen.", is_correct: false },
    ] },
    { id: "supermarkt-b1-t2", position: 2, kind: "true_false", section: "test", prompt: "Der Mitarbeiter an der Information begrüßt die Kundin freundlich.", explanation: "Richtig, das steht im Text.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-b1-t2-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "supermarkt-b1-t2-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "supermarkt-b1-t3", position: 3, kind: "gap", section: "test", prompt: "Obwohl das Angebot vorbei war, hat man ihr ___ den alten Preis berechnet. (Adverb)", explanation: "Gemeint ist: trotzdem.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-b1-t3-a1", position: 1, text: "trotzdem", is_correct: true },
    ] },
    { id: "supermarkt-b1-t4", position: 4, kind: "single_choice", section: "test", prompt: "Was wollte die Kundin an der Käsetheke?", explanation: "Eine ausführliche Beratung.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-b1-t4-a1", position: 1, text: "eine ausführliche Beratung", is_correct: true },
      { id: "supermarkt-b1-t4-a2", position: 2, text: "eine Rückerstattung", is_correct: false },
      { id: "supermarkt-b1-t4-a3", position: 3, text: "einen Rabatt", is_correct: false },
    ] },
    { id: "supermarkt-b1-t5", position: 5, kind: "single_choice", section: "test", prompt: "Was passierte, während die Person wartete?", explanation: "Die Regale wurden von zwei Angestellten neu aufgefüllt.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-b1-t5-a1", position: 1, text: "Die Regale wurden aufgefüllt.", is_correct: true },
      { id: "supermarkt-b1-t5-a2", position: 2, text: "Die Kasse ging kaputt.", is_correct: false },
      { id: "supermarkt-b1-t5-a3", position: 3, text: "Der Supermarkt schloss.", is_correct: false },
    ] },
    { id: "supermarkt-b1-t6", position: 6, kind: "single_choice", section: "test", prompt: "Warum war das gewünschte Produkt nicht verfügbar?", explanation: "Es war ausverkauft, die Lieferung kam erst am nächsten Tag.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-b1-t6-a1", position: 1, text: "Es war ausverkauft.", is_correct: true },
      { id: "supermarkt-b1-t6-a2", position: 2, text: "Es war zu teuer.", is_correct: false },
      { id: "supermarkt-b1-t6-a3", position: 3, text: "Es war verboten.", is_correct: false },
    ] },
    { id: "supermarkt-b1-t7", position: 7, kind: "true_false", section: "test", prompt: "An der Kasse gab es keine Probleme.", explanation: "Falsch — ein Artikel wurde doppelt berechnet.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-b1-t7-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "supermarkt-b1-t7-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "supermarkt-b1-t8", position: 8, kind: "single_choice", section: "test", prompt: "Wie reagierte die Kassiererin auf den Fehler?", explanation: "Sie bemerkte ihn sofort und entschuldigte sich höflich.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-b1-t8-a1", position: 1, text: "Sie entschuldigte sich höflich.", is_correct: true },
      { id: "supermarkt-b1-t8-a2", position: 2, text: "Sie wurde wütend.", is_correct: false },
      { id: "supermarkt-b1-t8-a3", position: 3, text: "Sie ignorierte es.", is_correct: false },
    ] },
    { id: "supermarkt-b1-t9", position: 9, kind: "single_choice", section: "test", prompt: "Was bekam die Person als Entschuldigung?", explanation: "Einen kleinen Rabatt.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-b1-t9-a1", position: 1, text: "einen kleinen Rabatt", is_correct: true },
      { id: "supermarkt-b1-t9-a2", position: 2, text: "ein Geschenk", is_correct: false },
      { id: "supermarkt-b1-t9-a3", position: 3, text: "nichts", is_correct: false },
    ] },
    { id: "supermarkt-b1-t10", position: 10, kind: "gap", section: "test", prompt: "Die Quittung, die mir ausgehändigt wurde, habe ich sorgfältig ___. (aufbewahren, Perfekt)", explanation: "Perfekt: aufbewahrt.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-b1-t10-a1", position: 1, text: "aufbewahrt", is_correct: true },
    ] },
    { id: "supermarkt-b1-t11", position: 11, kind: "single_choice", section: "test", prompt: "Wie fühlt sich die Person am Ende der Geschichte?", explanation: "Zufrieden, obwohl der Einkauf länger dauerte.", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-b1-t11-a1", position: 1, text: "zufrieden", is_correct: true },
      { id: "supermarkt-b1-t11-a2", position: 2, text: "wütend", is_correct: false },
      { id: "supermarkt-b1-t11-a3", position: 3, text: "gelangweilt", is_correct: false },
    ] },
    { id: "supermarkt-b1-t12", position: 12, kind: "single_choice", section: "test", prompt: "Was ist ein „Sonderangebot“?", explanation: "Ein zeitlich begrenztes günstigeres Angebot.", data: H("Vremenski ograničena povoljnija ponuda.", "Zaman sınırlı, daha uygun bir teklif.", "Обмежена в часі вигідніша пропозиція.", "O oferta avantajoasa limitata in timp.", "عرض مؤقت أرخص."), quiz_answers: [
      { id: "supermarkt-b1-t12-a1", position: 1, text: "ein zeitlich begrenztes günstiges Angebot", is_correct: true },
      { id: "supermarkt-b1-t12-a2", position: 2, text: "ein Küchengerät", is_correct: false },
      { id: "supermarkt-b1-t12-a3", position: 3, text: "eine Kundenkarte", is_correct: false },
    ] },
    { id: "supermarkt-b1-t13", position: 13, kind: "single_choice", section: "test", prompt: "Was ist eine „Rückerstattung“?", explanation: "Die Rückgabe von bereits bezahltem Geld.", data: H("Vraćanje već plaćenog novca.", "Onceden odenmis paranin iadesi.", "Повернення вже сплачених грошей.", "Returnarea banilor deja platiti.", "استرداد المال المدفوع مسبقًا."), quiz_answers: [
      { id: "supermarkt-b1-t13-a1", position: 1, text: "die Rückgabe von bezahltem Geld", is_correct: true },
      { id: "supermarkt-b1-t13-a2", position: 2, text: "ein neues Produkt", is_correct: false },
      { id: "supermarkt-b1-t13-a3", position: 3, text: "ein Rabatt beim Einkauf", is_correct: false },
    ] },
    { id: "supermarkt-b1-t14", position: 14, kind: "single_choice", section: "test", prompt: "Was bedeutet „ausverkauft“?", explanation: "Es gibt das Produkt momentan nicht mehr zu kaufen.", data: H("Proizvoda trenutno nema.", "Urun su anda yok.", "Товару зараз немає в наявності.", "Produsul nu mai este disponibil momentan.", "المنتج غير متوفر حاليًا."), quiz_answers: [
      { id: "supermarkt-b1-t14-a1", position: 1, text: "nicht mehr auf Lager", is_correct: true },
      { id: "supermarkt-b1-t14-a2", position: 2, text: "sehr günstig", is_correct: false },
      { id: "supermarkt-b1-t14-a3", position: 3, text: "neu im Regal", is_correct: false },
    ] },
    { id: "supermarkt-b1-t15", position: 15, kind: "single_choice", section: "test", prompt: "Was ist das Gegenteil von „gültig“ (bei einem Angebot)?", explanation: "Das Gegenteil ist abgelaufen/vorbei.", data: H("Suprotno od gultig je isteklo/prošlo.", "Gultig'in ziddi suresi dolmus.", "Протилежність gultig - недійсний/минулий.", "Opusul lui gultig este expirat.", "عكس gultig هو منتهي الصلاحية."), quiz_answers: [
      { id: "supermarkt-b1-t15-a1", position: 1, text: "abgelaufen", is_correct: true },
      { id: "supermarkt-b1-t15-a2", position: 2, text: "günstig", is_correct: false },
      { id: "supermarkt-b1-t15-a3", position: 3, text: "frisch", is_correct: false },
    ] },
    { id: "supermarkt-b1-t16", position: 16, kind: "single_choice", section: "test", prompt: "Welcher Satz enthält ein Passiv?", explanation: "„Die Ware wird an der Kasse gescannt.“", data: H("Pasiv se prepoznaje po werden + particip II.", "Edilgen, werden + gecmis zaman ortaci ile tanina.", "Пасив упізнається за werden + дієприкметник II.", "Pasivul se recunoaste prin werden + participiu II.", "المبني للمجهول يُعرف بـ werden + التصريف الثالث."), quiz_answers: [
      { id: "supermarkt-b1-t16-a1", position: 1, text: "Die Ware wird an der Kasse gescannt.", is_correct: true },
      { id: "supermarkt-b1-t16-a2", position: 2, text: "Ich scanne die Ware.", is_correct: false },
      { id: "supermarkt-b1-t16-a3", position: 3, text: "Die Kassiererin scannt.", is_correct: false },
    ] },
    { id: "supermarkt-b1-t17", position: 17, kind: "gap", section: "test", prompt: "Der Preis ___ falsch eingegeben. (werden, Präteritum Passiv)", explanation: "Präteritum Passiv: wurde.", data: H("Preterit pasiva: wurde + particip II.", "Gecmis zaman edilgen: wurde + gecmis zaman ortaci.", "Претерит пасив: wurde + дієприкметник II.", "Preteritul pasiv: wurde + participiu II.", "الماضي البسيط المبني للمجهول: wurde + التصريف الثالث."), quiz_answers: [
      { id: "supermarkt-b1-t17-a1", position: 1, text: "wurde", is_correct: true },
    ] },
    { id: "supermarkt-b1-t18", position: 18, kind: "single_choice", section: "test", prompt: "Welcher Satz enthält einen korrekten Relativsatz?", explanation: "„Der Kunde, der an der Kasse steht, wartet schon lange.“", data: H("Relativna zamjenica se slaze sa imenicom po rodu i broju.", "Iliski zamir, isimle cins ve sayi bakimindan uyumludur.", "Відносний займенник узгоджується з іменником за родом і числом.", "Pronumele relativ se acorda cu substantivul in gen si numar.", "الضمير الموصول يتوافق مع الاسم في الجنس والعدد."), quiz_answers: [
      { id: "supermarkt-b1-t18-a1", position: 1, text: "Der Kunde, der an der Kasse steht, wartet schon lange.", is_correct: true },
      { id: "supermarkt-b1-t18-a2", position: 2, text: "Der Kunde, das an der Kasse steht, wartet schon lange.", is_correct: false },
      { id: "supermarkt-b1-t18-a3", position: 3, text: "Der Kunde, die an der Kasse steht, wartet schon lange.", is_correct: false },
    ] },
    { id: "supermarkt-b1-t19", position: 19, kind: "single_choice", section: "test", prompt: "Welcher Satz drückt einen höflichen Wunsch im Konjunktiv II aus?", explanation: "„Ich hätte gern eine Rückerstattung für das kaputte Produkt.“", data: H("Konjunktiv II je učtiviji od direktnog zahtjeva.", "Konjunktiv II dogrudan istekten daha kibardır.", "Кон'юнктив II ввічливіший за пряму вимогу.", "Conjunctiv II este mai politicos decat o cerere directa.", "الصيغة الشرطية الثانية أكثر تهذيبًا من الطلب المباشر."), quiz_answers: [
      { id: "supermarkt-b1-t19-a1", position: 1, text: "Ich hätte gern eine Rückerstattung.", is_correct: true },
      { id: "supermarkt-b1-t19-a2", position: 2, text: "Ich will eine Rückerstattung sofort!", is_correct: false },
      { id: "supermarkt-b1-t19-a3", position: 3, text: "Gib mir das Geld zurück!", is_correct: false },
    ] },
    { id: "supermarkt-b1-t20", position: 20, kind: "single_choice", section: "test", prompt: "Welches Wort passt: „___ ich die Einkaufsliste geschrieben hatte, bin ich losgefahren.“", explanation: "„Nachdem“ beschreibt Vorzeitigkeit.", data: H("nachdem opisuje prethodnost.", "nachdem oncelik belirtir.", "nachdem описує передування.", "nachdem descrie anterioritatea.", "nachdem تصف السبقية."), quiz_answers: [
      { id: "supermarkt-b1-t20-a1", position: 1, text: "Nachdem", is_correct: true },
      { id: "supermarkt-b1-t20-a2", position: 2, text: "Bevor", is_correct: false },
      { id: "supermarkt-b1-t20-a3", position: 3, text: "Während", is_correct: false },
    ] },
    { id: "supermarkt-b1-t21", position: 21, kind: "single_choice", section: "test", prompt: "Welches Wort passt: „Der Mitarbeiter zeigt mir den Weg, ___ ich das Regal finde.“", explanation: "„damit“ drückt einen Zweck aus (verschiedene Subjekte).", data: H("damit izrazava svrhu kada su subjekti razliciti.", "damit farkli ozneler oldugunda amac ifade eder.", "damit виражає мету при різних підметах.", "damit exprima un scop cand subiectele sunt diferite.", "damit تعبر عن الغرض عند اختلاف الفاعلين."), quiz_answers: [
      { id: "supermarkt-b1-t21-a1", position: 1, text: "damit", is_correct: true },
      { id: "supermarkt-b1-t21-a2", position: 2, text: "um zu", is_correct: false },
      { id: "supermarkt-b1-t21-a3", position: 3, text: "obwohl", is_correct: false },
    ] },
    { id: "supermarkt-b1-t22", position: 22, kind: "single_choice", section: "test", prompt: "Was ist ein Beispiel für indirekte Rede?", explanation: "„Sie hat gesagt, dass das Angebot nur noch heute gilt.“", data: H("Indirektni govor koristi dass-recenicu.", "Dolayli anlatim dass cumlesi kullanir.", "Непряма мова використовує dass-речення.", "Vorbirea indirecta foloseste o propozitie cu dass.", "الكلام غير المباشر يستخدم جملة dass."), quiz_answers: [
      { id: "supermarkt-b1-t22-a1", position: 1, text: "Sie hat gesagt, dass das Angebot nur noch heute gilt.", is_correct: true },
      { id: "supermarkt-b1-t22-a2", position: 2, text: "Das Angebot gilt nur heute.", is_correct: false },
      { id: "supermarkt-b1-t22-a3", position: 3, text: "Gilt das Angebot heute?", is_correct: false },
    ] },
    { id: "supermarkt-b1-t23", position: 23, kind: "single_choice", section: "test", prompt: "Welcher Satz mit Wechselpräposition ist korrekt (Position, Dativ)?", explanation: "„Das Regal, in dem die Konserven stehen, wird bald umgeräumt.“", data: H("Ovo piše u tekstu.", "Bu, metinde geçiyor.", "Це написано в тексті.", "Așa scrie în text.", "هذا مكتوب في النص."), quiz_answers: [
      { id: "supermarkt-b1-t23-a1", position: 1, text: "Das Regal, in dem die Konserven stehen, wird bald umgeräumt.", is_correct: true },
      { id: "supermarkt-b1-t23-a2", position: 2, text: "Das Regal, in das die Konserven stehen, wird bald umgeräumt.", is_correct: false },
      { id: "supermarkt-b1-t23-a3", position: 3, text: "Das Regal, in der die Konserven stehen, wird bald umgeräumt.", is_correct: false },
    ] },
    { id: "supermarkt-b1-t24", position: 24, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig (Konjunktiv II)?", explanation: "„Könnten Sie den Preis überprüfen?“", data: H("Konjunktiv II za uctivu molbu.", "Kibar rica icin Konjunktiv II.", "Кон'юнктив II для ввічливого прохання.", "Conjunctiv II pentru o cerere politicoasa.", "الصيغة الشرطية الثانية لطلب مهذب."), quiz_answers: [
      { id: "supermarkt-b1-t24-a1", position: 1, text: "Könnten Sie den Preis überprüfen?", is_correct: true },
      { id: "supermarkt-b1-t24-a2", position: 2, text: "Können Sie überprüfen den Preis?", is_correct: false },
      { id: "supermarkt-b1-t24-a3", position: 3, text: "Überprüfen Sie können den Preis?", is_correct: false },
    ] },
    { id: "supermarkt-b1-t25", position: 25, kind: "single_choice", section: "test", prompt: "Wer sagt im Dialog „Entschuldigung, ich glaube, ein Artikel wurde doppelt berechnet.“?", explanation: "Das sagt der Kunde.", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-b1-t25-a1", position: 1, text: "der Kunde", is_correct: true },
      { id: "supermarkt-b1-t25-a2", position: 2, text: "die Kassiererin", is_correct: false },
      { id: "supermarkt-b1-t25-a3", position: 3, text: "niemand", is_correct: false },
    ] },
    { id: "supermarkt-b1-t26", position: 26, kind: "single_choice", section: "test", prompt: "Was antwortet die Kassiererin auf die Reklamation?", explanation: "„Sie haben völlig recht, das war ein Fehler beim Scannen.“", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-b1-t26-a1", position: 1, text: "Sie haben völlig recht, das war ein Fehler beim Scannen.", is_correct: true },
      { id: "supermarkt-b1-t26-a2", position: 2, text: "Das ist unmöglich, gehen Sie bitte.", is_correct: false },
      { id: "supermarkt-b1-t26-a3", position: 3, text: "Der Zug fährt um acht.", is_correct: false },
    ] },
    { id: "supermarkt-b1-t27", position: 27, kind: "true_false", section: "test", prompt: "Die Kassiererin bietet dem Kunden einen Rabatt an, obwohl sie den Fehler nicht selbst verursacht hat.", explanation: "Richtig — sie tut es aus Kulanz.", data: H("Ovo piše u dijalogu.", "Bu, diyalogda geçiyor.", "Це написано в діалозі.", "Așa scrie în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "supermarkt-b1-t27-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "supermarkt-b1-t27-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "supermarkt-b1-t28", position: 28, kind: "single_choice", section: "test", prompt: "Warum hat der Mitarbeiter seine Kollegin gefragt?", explanation: "Um eine Ausnahme für den alten Preis zu machen.", data: H("Da bi napravio izuzetak za staru cijenu.", "Eski fiyat icin bir istisna yapmak icin.", "Щоб зробити виняток для старої ціни.", "Pentru a face o exceptie pentru pretul vechi.", "لصنع استثناء من أجل السعر القديم."), quiz_answers: [
      { id: "supermarkt-b1-t28-a1", position: 1, text: "um eine Ausnahme zu machen", is_correct: true },
      { id: "supermarkt-b1-t28-a2", position: 2, text: "um den Kunden zu ärgern", is_correct: false },
      { id: "supermarkt-b1-t28-a3", position: 3, text: "um Pause zu machen", is_correct: false },
    ] },
    { id: "supermarkt-b1-t29", position: 29, kind: "single_choice", section: "test", prompt: "Welches Verb beschreibt, was mit den Regalen im Supermarkt passiert?", explanation: "„auffüllen“ — die Regale werden neu aufgefüllt.", data: H("Police se pune novom robom.", "Raflar yeni urunlerle doldurulur.", "Полиці наповнюють новим товаром.", "Rafturile sunt reaprovizionate cu marfa noua.", "يتم تعبئة الرفوف ببضاعة جديدة."), quiz_answers: [
      { id: "supermarkt-b1-t29-a1", position: 1, text: "auffüllen", is_correct: true },
      { id: "supermarkt-b1-t29-a2", position: 2, text: "bezahlen", is_correct: false },
      { id: "supermarkt-b1-t29-a3", position: 3, text: "reklamieren", is_correct: false },
    ] },
    { id: "supermarkt-b1-t30", position: 30, kind: "single_choice", section: "test", prompt: "Was macht man normalerweise, wenn ein Sonderangebot bereits abgelaufen ist?", explanation: "Man kann höflich nachfragen, ob eine Ausnahme möglich ist.", data: H("Uctivo se pita moze li se napraviti izuzetak.", "Kibarca bir istisna yapilip yapilamayacagi sorulur.", "Ввічливо запитують, чи можливий виняток.", "Se intreaba politicos daca este posibila o exceptie.", "يُسأل بأدب إن كان الاستثناء ممكنًا."), quiz_answers: [
      { id: "supermarkt-b1-t30-a1", position: 1, text: "Man kann höflich nach einer Ausnahme fragen.", is_correct: true },
      { id: "supermarkt-b1-t30-a2", position: 2, text: "Man muss den Laden sofort verlassen.", is_correct: false },
      { id: "supermarkt-b1-t30-a3", position: 3, text: "Man ruft die Polizei.", is_correct: false },
    ] },
    { id: "supermarkt-b1-t31", position: 31, kind: "true_false", section: "test", prompt: "In Deutschland darf man eine fehlerhafte Rechnung an der Kasse reklamieren.", explanation: "Richtig — das ist üblich und wird meistens sofort korrigiert.", data: H("Pogresan racun se moze reklamirati na kasi.", "Hatali fatura kasada sikayet edilebilir.", "Помилковий рахунок можна оскаржити на касі.", "O factura gresita poate fi reclamata la casa.", "يمكن الاعتراض على فاتورة خاطئة عند الصندوق."), quiz_answers: [
      { id: "supermarkt-b1-t31-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "supermarkt-b1-t31-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "supermarkt-b1-t32", position: 32, kind: "true_false", section: "test", prompt: "Sonderangebote in Supermärkten gelten meistens unbegrenzt lange.", explanation: "Falsch — sie sind meist zeitlich begrenzt.", data: H("Posebne ponude su vremenski ograničene.", "Ozel teklifler genelde zaman sinirlidir.", "Спеціальні пропозиції зазвичай обмежені в часі.", "Ofertele speciale sunt de obicei limitate in timp.", "العروض الخاصة عادة محدودة زمنيًا."), quiz_answers: [
      { id: "supermarkt-b1-t32-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "supermarkt-b1-t32-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "supermarkt-b1-t33", position: 33, kind: "single_choice", section: "test", prompt: "Was macht man normalerweise NICHT, wenn ein Produkt ausverkauft ist?", explanation: "Man wartet nicht die ganze Nacht im Laden auf die Lieferung.", data: H("Ne ceka se cijelu noc u prodavnici.", "Magazada bütün gece beklenilmez.", "Не чекають цілу ніч у магазині.", "Nu se asteapta toata noaptea in magazin.", "لا يُنتظر طوال الليل في المتجر."), quiz_answers: [
      { id: "supermarkt-b1-t33-a1", position: 1, text: "die ganze Nacht auf die Lieferung warten", is_correct: true },
      { id: "supermarkt-b1-t33-a2", position: 2, text: "einen Mitarbeiter fragen", is_correct: false },
      { id: "supermarkt-b1-t33-a3", position: 3, text: "ein anderes Produkt kaufen", is_correct: false },
    ] },
    { id: "supermarkt-b1-t34", position: 34, kind: "single_choice", section: "test", prompt: "Was passt NICHT zu einer Reklamation an der Kasse?", explanation: "Ein Flugticket buchen gehört nicht zu einer Reklamation im Supermarkt.", data: H("Rezervacija avionske karte ne pripada reklamaciji u supermarketu.", "Ucak bileti rezervasyonu supermarket sikayetine ait degil.", "Бронювання авіаквитка не стосується скарги в супермаркеті.", "Rezervarea unui bilet de avion nu tine de o reclamatie la supermarket.", "حجز تذكرة طيران لا علاقة له بالشكوى في السوبر ماركت."), quiz_answers: [
      { id: "supermarkt-b1-t34-a1", position: 1, text: "ein Flugticket buchen", is_correct: true },
      { id: "supermarkt-b1-t34-a2", position: 2, text: "den Bon zeigen", is_correct: false },
      { id: "supermarkt-b1-t34-a3", position: 3, text: "den Fehler erklären", is_correct: false },
    ] },
    { id: "supermarkt-b1-t35", position: 35, kind: "single_choice", section: "test", prompt: "Warum ist es sinnvoll, den Kassenbon zu behalten?", explanation: "Man braucht ihn oft, um einen Fehler nachzuweisen oder Waren zurückzugeben.", data: H("Racun je potreban da se dokaze greska ili vrati roba.", "Fis, hatayi kanitlamak veya urun iade etmek icin gereklidir.", "Чек потрібен, щоб довести помилку або повернути товар.", "Bonul e necesar pentru a dovedi o greseala sau a returna marfa.", "الإيصال ضروري لإثبات خطأ أو إرجاع بضاعة."), quiz_answers: [
      { id: "supermarkt-b1-t35-a1", position: 1, text: "um einen Fehler nachweisen zu können", is_correct: true },
      { id: "supermarkt-b1-t35-a2", position: 2, text: "um das Obst frischer zu machen", is_correct: false },
      { id: "supermarkt-b1-t35-a3", position: 3, text: "weil es Pflicht beim Betreten ist", is_correct: false },
    ] },
    { id: "supermarkt-b1-t36", position: 36, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig (Nebensatz mit nachdem)?", explanation: "„Nachdem der Betrag korrigiert worden war, wurde mir ein Rabatt angeboten.“", data: H("Nachdem opisuje prethodnost s plusquamperfektom.", "Nachdem plusquamperfekt ile oncelik belirtir.", "Nachdem описує передування з плюсквамперфектом.", "Nachdem descrie anterioritatea cu mai mult ca perfectul.", "Nachdem تصف السبقية بصيغة الماضي التام السابق."), quiz_answers: [
      { id: "supermarkt-b1-t36-a1", position: 1, text: "Nachdem der Betrag korrigiert worden war, wurde mir ein Rabatt angeboten.", is_correct: true },
      { id: "supermarkt-b1-t36-a2", position: 2, text: "Nachdem der Betrag korrigiert wird, wurde mir ein Rabatt angeboten.", is_correct: false },
      { id: "supermarkt-b1-t36-a3", position: 3, text: "Nachdem der Betrag korrigiert hat, wurde mir ein Rabatt angeboten.", is_correct: false },
    ] },
    { id: "supermarkt-b1-t37", position: 37, kind: "single_choice", section: "test", prompt: "Welcher Satz ist grammatisch richtig (Passiv)?", explanation: "„Die Regale werden jeden Morgen neu aufgefüllt.“", data: H("Pasiv prezenta: werden + particip II.", "Simdiki zaman edilgen: werden + gecmis zaman ortaci.", "Пасив теперішнього часу: werden + дієприкметник II.", "Pasiv prezent: werden + participiu II.", "المبني للمجهول المضارع: werden + التصريف الثالث."), quiz_answers: [
      { id: "supermarkt-b1-t37-a1", position: 1, text: "Die Regale werden jeden Morgen neu aufgefüllt.", is_correct: true },
      { id: "supermarkt-b1-t37-a2", position: 2, text: "Die Regale sind jeden Morgen neu aufgefüllt.", is_correct: false },
      { id: "supermarkt-b1-t37-a3", position: 3, text: "Die Regale haben jeden Morgen neu aufgefüllt.", is_correct: false },
    ] },
    { id: "supermarkt-b1-t38", position: 38, kind: "gap", section: "test", prompt: "Die Kundin, ___ vor mir an der Käsetheke stand, verlangte eine Beratung. (Relativpronomen)", explanation: "„die“ — Relativpronomen für feminines Nomen im Nominativ.", data: H("die je relativna zamjenica za zenski rod u nominativu.", "die, yalin halde disil isim icin iliski zamiridir.", "die - відносний займенник для жіночого роду в називному відмінку.", "die este pronumele relativ pentru feminin la nominativ.", "die ضمير موصول للمؤنث في حالة الرفع."), quiz_answers: [
      { id: "supermarkt-b1-t38-a1", position: 1, text: "die", is_correct: true },
    ] },
    { id: "supermarkt-b1-t39", position: 39, kind: "single_choice", section: "test", prompt: "Was ist eine höfliche Formulierung, um eine Preisüberprüfung zu bitten?", explanation: "„Könnten Sie den Betrag bitte korrigieren?“", data: H("Konjunktiv II cini molbu ucnijim.", "Konjunktiv II ricayi daha kibar yapar.", "Кон'юнктив II робить прохання ввічливішим.", "Conjunctiv II face cererea mai politicoasa.", "الصيغة الشرطية الثانية تجعل الطلب أكثر تهذيبًا."), quiz_answers: [
      { id: "supermarkt-b1-t39-a1", position: 1, text: "Könnten Sie den Betrag bitte korrigieren?", is_correct: true },
      { id: "supermarkt-b1-t39-a2", position: 2, text: "Korrigier das sofort, du!", is_correct: false },
      { id: "supermarkt-b1-t39-a3", position: 3, text: "Das ist mir egal.", is_correct: false },
    ] },
    { id: "supermarkt-b1-t40", position: 40, kind: "single_choice", section: "test", prompt: "Wie geht die Geschichte zu Ende?", explanation: "Die Person fährt zufrieden nach Hause, obwohl der Einkauf länger dauerte als erwartet.", data: H("Osoba se zadovoljno vraca kuci, iako je kupovina trajala duze.", "Kisi, alisveris beklenenden uzun surse de mutlu bir sekilde eve doner.", "Особа задоволено повертається додому, хоча покупки тривали довше.", "Persoana se intoarce acasa multumita, desi cumparaturile au durat mai mult.", "يعود الشخص إلى المنزل راضيًا رغم أن التسوق استغرق وقتًا أطول."), quiz_answers: [
      { id: "supermarkt-b1-t40-a1", position: 1, text: "Sie fährt zufrieden nach Hause.", is_correct: true },
      { id: "supermarkt-b1-t40-a2", position: 2, text: "Sie geht ohne einzukaufen.", is_correct: false },
      { id: "supermarkt-b1-t40-a3", position: 3, text: "Sie bleibt für immer im Supermarkt.", is_correct: false },
    ] },

    // ===== Sprache & Grammatik: zum Anklicken =====
    { id: "supermarkt-b1-g1", position: 1, kind: "single_choice", section: "grammar", prompt: "Welcher Satz enthält einen korrekten Konzessivsatz mit „obwohl“?", explanation: "„Obwohl das Angebot vorbei war, hat man mir den alten Preis berechnet.“ — Verb am Ende.", data: H("Kod obwohl glagol ide na kraj nuzredeg dijela recenice.", "Obwohl'da fiil, yan cumlenin sonuna gider.", "У реченнях з obwohl дієслово стоїть у кінці підрядного речення.", "La obwohl, verbul merge la finalul propozitiei secundare.", "مع obwohl يأتي الفعل في نهاية الجملة الثانوية."), quiz_answers: [
      { id: "supermarkt-b1-g1-a1", position: 1, text: "Obwohl das Angebot vorbei war, hat man mir den alten Preis berechnet.", is_correct: true },
      { id: "supermarkt-b1-g1-a2", position: 2, text: "Obwohl das Angebot war vorbei, hat man mir den alten Preis berechnet.", is_correct: false },
      { id: "supermarkt-b1-g1-a3", position: 3, text: "Obwohl vorbei das Angebot war, hat man mir den alten Preis berechnet.", is_correct: false },
    ] },
    { id: "supermarkt-b1-g2", position: 2, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit „damit“ ist korrekt?", explanation: "„Der Mitarbeiter zeigt mir den Weg, damit ich das Regal finde.“ — unterschiedliche Subjekte.", data: H("Damit se koristi kada su subjekti u recenicama razliciti.", "Damit, cumlelerdeki ozneler farkli oldugunda kullanilir.", "Damit використовується, коли підмети в реченнях різні.", "Damit se foloseste cand subiectele din propozitii sunt diferite.", "damit تُستخدم عند اختلاف الفاعلين في الجملتين."), quiz_answers: [
      { id: "supermarkt-b1-g2-a1", position: 1, text: "Der Mitarbeiter zeigt mir den Weg, damit ich das Regal finde.", is_correct: true },
      { id: "supermarkt-b1-g2-a2", position: 2, text: "Der Mitarbeiter zeigt mir den Weg, damit ich finde das Regal.", is_correct: false },
      { id: "supermarkt-b1-g2-a3", position: 3, text: "Der Mitarbeiter zeigt mir den Weg, damit finde ich das Regal.", is_correct: false },
    ] },
    { id: "supermarkt-b1-g3", position: 3, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit „nachdem“ ist korrekt?", explanation: "Im nachdem-Satz steht meist das Plusquamperfekt: „Nachdem ich die Liste geschrieben hatte, bin ich losgefahren.“", data: H("Nachdem trazi plusquamperfekt u nuzrečenici.", "Nachdem, yan cumlede plusquamperfekt gerektirir.", "Nachdem вимагає плюсквамперфекта в підрядному реченні.", "Nachdem cere mai mult ca perfectul in propozitia secundara.", "nachdem تتطلب صيغة الماضي التام السابق في الجملة الثانوية."), quiz_answers: [
      { id: "supermarkt-b1-g3-a1", position: 1, text: "Nachdem ich die Liste geschrieben hatte, bin ich losgefahren.", is_correct: true },
      { id: "supermarkt-b1-g3-a2", position: 2, text: "Nachdem ich die Liste schreibe, bin ich losgefahren.", is_correct: false },
      { id: "supermarkt-b1-g3-a3", position: 3, text: "Nachdem ich die Liste geschrieben habe, war ich losgefahren.", is_correct: false },
    ] },
    { id: "supermarkt-b1-g4", position: 4, kind: "single_choice", section: "grammar", prompt: "Welcher Satz drückt einen höflichen Wunsch im Konjunktiv II aus?", explanation: "„Ich hätte gern eine Rückerstattung für das kaputte Produkt.“", data: H("Konjunktiv II cini iskaz uctivijim.", "Konjunktiv II ifadeyi daha kibar yapar.", "Кон'юнктив II робить висловлювання ввічливішим.", "Conjunctiv II face afirmatia mai politicoasa.", "الصيغة الشرطية الثانية تجعل التعبير أكثر تهذيبًا."), quiz_answers: [
      { id: "supermarkt-b1-g4-a1", position: 1, text: "Ich hätte gern eine Rückerstattung.", is_correct: true },
      { id: "supermarkt-b1-g4-a2", position: 2, text: "Ich habe eine Rückerstattung sofort!", is_correct: false },
      { id: "supermarkt-b1-g4-a3", position: 3, text: "Gib mir das Geld!", is_correct: false },
    ] },
    { id: "supermarkt-b1-g5", position: 5, kind: "single_choice", section: "grammar", prompt: "Welcher Satz im Passiv ist korrekt?", explanation: "„Die Ware wird an der Kasse gescannt.“ — werden + Partizip II.", data: H("Pasiv se gradi sa werden + particip II.", "Edilgen, werden + gecmis zaman ortaci ile yapilir.", "Пасив утворюється werden + дієприкметник II.", "Pasivul se formeaza cu werden + participiu II.", "المبني للمجهول يُبنى بـ werden + التصريف الثالث."), quiz_answers: [
      { id: "supermarkt-b1-g5-a1", position: 1, text: "Die Ware wird an der Kasse gescannt.", is_correct: true },
      { id: "supermarkt-b1-g5-a2", position: 2, text: "Die Ware wird an der Kasse scannen.", is_correct: false },
      { id: "supermarkt-b1-g5-a3", position: 3, text: "Die Ware ist an der Kasse gescannt werden.", is_correct: false },
    ] },
    { id: "supermarkt-b1-g6", position: 6, kind: "single_choice", section: "grammar", prompt: "Welcher Relativsatz ist korrekt?", explanation: "„Der Kunde, der an der Kasse steht, wartet schon lange.“ — der für maskulines Nomen im Nominativ.", data: H("der je relativna zamjenica za muski rod u nominativu.", "der, yalin halde eril isim icin iliski zamiridir.", "der - відносний займенник для чоловічого роду в називному.", "der este pronumele relativ pentru masculin la nominativ.", "der ضمير موصول للمذكر في حالة الرفع."), quiz_answers: [
      { id: "supermarkt-b1-g6-a1", position: 1, text: "Der Kunde, der an der Kasse steht, wartet schon lange.", is_correct: true },
      { id: "supermarkt-b1-g6-a2", position: 2, text: "Der Kunde, das an der Kasse steht, wartet schon lange.", is_correct: false },
      { id: "supermarkt-b1-g6-a3", position: 3, text: "Der Kunde, die an der Kasse steht, wartet schon lange.", is_correct: false },
    ] },
    { id: "supermarkt-b1-g7", position: 7, kind: "single_choice", section: "grammar", prompt: "Welcher Satz ist ein Beispiel für indirekte Rede?", explanation: "„Er hat erklärt, dass die Rückerstattung ein paar Tage dauert.“", data: H("Indirektni govor sa dass-recenicom u svakodnevnom govoru.", "Gunluk dilde dass cumlesiyle dolayli anlatim.", "Непряма мова з dass-реченням у побутовому мовленні.", "Vorbirea indirecta cu propozitie cu dass in vorbirea zilnica.", "الكلام غير المباشر بجملة dass في الحديث اليومي."), quiz_answers: [
      { id: "supermarkt-b1-g7-a1", position: 1, text: "Er hat erklärt, dass die Rückerstattung ein paar Tage dauert.", is_correct: true },
      { id: "supermarkt-b1-g7-a2", position: 2, text: "Die Rückerstattung dauert ein paar Tage.", is_correct: false },
      { id: "supermarkt-b1-g7-a3", position: 3, text: "Dauert die Rückerstattung ein paar Tage?", is_correct: false },
    ] },
    { id: "supermarkt-b1-g8", position: 8, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit Wechselpräposition beschreibt eine Position (Dativ)?", explanation: "„Das Regal, in dem die Konserven stehen, wird bald umgeräumt.“", data: H("Pozicija (gdje?) trazi dativ.", "Konum (nerede?) datif gerektirir.", "Позиція (де?) вимагає давального відмінка.", "Pozitia (unde?) cere dativul.", "الموقع (أين؟) يتطلب حالة الجر."), quiz_answers: [
      { id: "supermarkt-b1-g8-a1", position: 1, text: "Das Regal, in dem die Konserven stehen, wird bald umgeräumt.", is_correct: true },
      { id: "supermarkt-b1-g8-a2", position: 2, text: "Das Regal, in das die Konserven stehen, wird bald umgeräumt.", is_correct: false },
      { id: "supermarkt-b1-g8-a3", position: 3, text: "Das Regal, in der die Konserven stehen, wird bald umgeräumt.", is_correct: false },
    ] },

    // ===== Wo ist was? =====
    { id: "supermarkt-b1-p1", position: 1, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Die Konserven stehen ___ dem Regal, das gerade umgeräumt wird. Welche Präposition/Form passt?", explanation: "Position (wo?) → Dativ: in dem Regal.", data: H("Pozicija (gdje?) trazi dativ.", "Konum (nerede?) datif gerektirir.", "Позиція (де?) вимагає давального відмінка.", "Pozitia (unde?) cere dativul.", "الموقع (أين؟) يتطلب حالة الجر."), quiz_answers: [
      { id: "supermarkt-b1-p1-a1", position: 1, text: "in dem Regal", is_correct: true },
      { id: "supermarkt-b1-p1-a2", position: 2, text: "in das Regal", is_correct: false },
      { id: "supermarkt-b1-p1-a3", position: 3, text: "an dem Regal", is_correct: false },
    ] },
    { id: "supermarkt-b1-p2", position: 2, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Der Mitarbeiter stellt die Kiste ___ den Wagen, der neben der Kasse steht. Welche Form passt?", explanation: "Bewegung (wohin?) → Akkusativ: auf den Wagen.", data: H("Kretanje (kuda?) trazi akuzativ.", "Hareket (nereye?) akuzatif gerektirir.", "Рух (куди?) вимагає знахідного відмінка.", "Miscarea (unde?) cere acuzativul.", "الحركة (إلى أين؟) تتطلب حالة المفعول."), quiz_answers: [
      { id: "supermarkt-b1-p2-a1", position: 1, text: "auf den Wagen", is_correct: true },
      { id: "supermarkt-b1-p2-a2", position: 2, text: "auf dem Wagen", is_correct: false },
      { id: "supermarkt-b1-p2-a3", position: 3, text: "an den Wagen", is_correct: false },
    ] },
    { id: "supermarkt-b1-p3", position: 3, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die Käsetheke, ___ die Kundin steht, ist am Ende des Ganges. (an der)", explanation: "Relativsatz mit Präposition: an der die Kundin steht.", data: H("Relativna recenica sa prijedlogom trazi odgovarajuci padez.", "Edatlı iliski cumlesi uygun hali gerektirir.", "Означальне речення з прийменником вимагає відповідного відмінка.", "Propozitia relativa cu prepozitie cere cazul corespunzator.", "الجملة الموصولة مع حرف الجر تتطلب الحالة المناسبة."), quiz_answers: [
      { id: "supermarkt-b1-p3-a1", position: 1, text: "an der", is_correct: true },
    ] },
    { id: "supermarkt-b1-p4", position: 4, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo befindet sich die Information, an der der Mitarbeiter steht? Welche Präposition passt?", explanation: "„am Eingang“ — direkt am Eingang des Supermarkts.", data: H("Infopult je odmah kod ulaza.", "Danisma, girisin hemen yanindadir.", "Інформаційна стійка одразу біля входу.", "Informatiile sunt chiar la intrare.", "مكتب الاستعلامات عند المدخل مباشرة."), quiz_answers: [
      { id: "supermarkt-b1-p4-a1", position: 1, text: "am Eingang", is_correct: true },
      { id: "supermarkt-b1-p4-a2", position: 2, text: "unter der Kasse", is_correct: false },
      { id: "supermarkt-b1-p4-a3", position: 3, text: "hinter dem Regal", is_correct: false },
    ] },
    { id: "supermarkt-b1-p5", position: 5, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Die Angestellten füllen die Konserven ___ das Regal, das noch leer ist. Welche Form passt?", explanation: "Bewegung (wohin?) → Akkusativ: in das Regal.", data: H("Kretanje (kuda?) trazi akuzativ.", "Hareket (nereye?) akuzatif gerektirir.", "Рух (куди?) вимагає знахідного відмінка.", "Miscarea (unde?) cere acuzativul.", "الحركة (إلى أين؟) تتطلب حالة المفعول."), quiz_answers: [
      { id: "supermarkt-b1-p5-a1", position: 1, text: "in das Regal", is_correct: true },
      { id: "supermarkt-b1-p5-a2", position: 2, text: "in dem Regal", is_correct: false },
      { id: "supermarkt-b1-p5-a3", position: 3, text: "an das Regal", is_correct: false },
    ] },
    { id: "supermarkt-b1-p6", position: 6, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo wartet die Kundin, die eine Beratung möchte? Welche Präposition passt?", explanation: "„vor der Käsetheke“ — direkt davor.", data: H("Kupica ceka ispred tezge.", "Musteri tezgahin onunde bekliyor.", "Клієнтка чекає перед прилавком.", "Clienta asteapta in fata tejghelei.", "الزبونة تنتظر أمام المنضدة."), quiz_answers: [
      { id: "supermarkt-b1-p6-a1", position: 1, text: "vor der Käsetheke", is_correct: true },
      { id: "supermarkt-b1-p6-a2", position: 2, text: "unter der Käsetheke", is_correct: false },
      { id: "supermarkt-b1-p6-a3", position: 3, text: "hinter der Käsetheke", is_correct: false },
    ] },
    { id: "supermarkt-b1-p7", position: 7, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Der Bon liegt ___ der Tasche der Kundin. (in)", explanation: "Der Bon liegt innerhalb der Tasche.", data: H("Racun je u torbi.", "Fis cantada.", "Чек у сумці.", "Bonul e in geanta.", "الإيصال داخل الحقيبة."), quiz_answers: [
      { id: "supermarkt-b1-p7-a1", position: 1, text: "in", is_correct: true },
    ] },
    { id: "supermarkt-b1-p8", position: 8, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht die Kassiererin, die den Fehler korrigiert? Welche Präposition passt?", explanation: "Die Kassiererin steht „hinter der Kasse“.", data: H("Kasirka stoji iza kase.", "Kasiyer kasanin arkasinda duruyor.", "Касирка стоїть позаду каси.", "Casiera sta in spatele casei.", "تقف الكاشيرة خلف الصندوق."), quiz_answers: [
      { id: "supermarkt-b1-p8-a1", position: 1, text: "hinter der Kasse", is_correct: true },
      { id: "supermarkt-b1-p8-a2", position: 2, text: "vor der Kasse", is_correct: false },
      { id: "supermarkt-b1-p8-a3", position: 3, text: "unter der Kasse", is_correct: false },
    ] },
    { id: "supermarkt-b1-p9", position: 9, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo hängt das abgelaufene Angebotsschild? Welche Präposition passt?", explanation: "Das Schild hängt „über dem Regal“.", data: H("Znak visi iznad police.", "Tabela rafin ustunde asili.", "Табличка висить над полицею.", "Semnul atarna deasupra raftului.", "اللافتة معلقة فوق الرف."), quiz_answers: [
      { id: "supermarkt-b1-p9-a1", position: 1, text: "über dem Regal", is_correct: true },
      { id: "supermarkt-b1-p9-a2", position: 2, text: "unter dem Regal", is_correct: false },
      { id: "supermarkt-b1-p9-a3", position: 3, text: "in dem Regal", is_correct: false },
    ] },
    { id: "supermarkt-b1-p10", position: 10, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Die zwei Angestellten arbeiten ___ dem Regal mit den Konserven. (an)", explanation: "„an dem Regal“ — direkt an diesem Regal.", data: H("Rade odmah kod te police.", "Bu rafin hemen yaninda calisiyorlar.", "Вони працюють прямо біля цієї полиці.", "Lucreaza chiar la acel raft.", "يعملون عند هذا الرف مباشرة."), quiz_answers: [
      { id: "supermarkt-b1-p10-a1", position: 1, text: "an", is_correct: true },
    ] },
    { id: "supermarkt-b1-p11", position: 11, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo befindet sich die Information im Vergleich zum Eingang?", explanation: "Die Information ist „gleich am Eingang“.", data: H("Pogledaj sliku: infopult je odmah kod ulaza.", "Resme bak: danisma girisin hemen yaninda.", "Подивись на малюнок: інформація одразу біля входу.", "Uita-te la imagine: informatiile sunt chiar la intrare.", "انظر إلى الصورة: الاستعلامات عند المدخل مباشرة."), quiz_answers: [
      { id: "supermarkt-b1-p11-a1", position: 1, text: "gleich am Eingang", is_correct: true },
      { id: "supermarkt-b1-p11-a2", position: 2, text: "unter der Kasse", is_correct: false },
      { id: "supermarkt-b1-p11-a3", position: 3, text: "hinter dem Ausgang", is_correct: false },
    ] },
    { id: "supermarkt-b1-p12", position: 12, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht der Kunde, während er wartet?", explanation: "Der Kunde steht „neben der Käsetheke“.", data: H("Kupac stoji pored tezge.", "Musteri tezgahin yaninda duruyor.", "Клієнт стоїть біля прилавка.", "Clientul sta langa tejghea.", "يقف الزبون بجانب المنضدة."), quiz_answers: [
      { id: "supermarkt-b1-p12-a1", position: 1, text: "neben der Käsetheke", is_correct: true },
      { id: "supermarkt-b1-p12-a2", position: 2, text: "unter der Käsetheke", is_correct: false },
      { id: "supermarkt-b1-p12-a3", position: 3, text: "in der Käsetheke", is_correct: false },
    ] },
    { id: "supermarkt-b1-p13", position: 13, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Der korrigierte Bon liegt ___ dem Kassentisch. (auf)", explanation: "Der Bon liegt oben auf dem Kassentisch.", data: H("Racun lezi na kasi.", "Fis kasa masasinin ustunde duruyor.", "Чек лежить на касовому столі.", "Bonul sta pe masa de casa.", "الإيصال موضوع على طاولة الصندوق."), quiz_answers: [
      { id: "supermarkt-b1-p13-a1", position: 1, text: "auf", is_correct: true },
    ] },
    { id: "supermarkt-b1-p14", position: 14, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo hängt das Schild mit dem korrigierten Preis?", explanation: "Das Schild hängt „an dem Regal“.", data: H("Znak visi na polici.", "Tabela rafta asili.", "Табличка висить на полиці.", "Semnul atarna pe raft.", "اللافتة معلقة على الرف."), quiz_answers: [
      { id: "supermarkt-b1-p14-a1", position: 1, text: "an dem Regal", is_correct: true },
      { id: "supermarkt-b1-p14-a2", position: 2, text: "unter dem Regal", is_correct: false },
      { id: "supermarkt-b1-p14-a3", position: 3, text: "in dem Regal", is_correct: false },
    ] },
    { id: "supermarkt-b1-p15", position: 15, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo befindet sich die Kasse im Vergleich zum Ausgang?", explanation: "Die Kasse ist „in der Nähe des Ausgangs“.", data: H("Kasa se nalazi blizu izlaza.", "Kasa cikisin yakininda.", "Каса розташована біля виходу.", "Casa se afla langa iesire.", "يقع الصندوق قرب المخرج."), quiz_answers: [
      { id: "supermarkt-b1-p15-a1", position: 1, text: "in der Nähe des Ausgangs", is_correct: true },
      { id: "supermarkt-b1-p15-a2", position: 2, text: "unter dem Ausgang", is_correct: false },
      { id: "supermarkt-b1-p15-a3", position: 3, text: "zwischen dem Ausgang", is_correct: false },
    ] },

    // ===== Dialog bauen =====
    { id: "supermarkt-b1-b1", position: 1, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 1 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Nachfrage → Antwort → Bedauern → Angebot zur Klärung → Zustimmung.", data: { items: [
      "Kunde: Entschuldigung, ich hätte gern gewusst, ob das Angebot aus dem Prospekt noch gültig ist.",
      "Mitarbeiter: Laut Aushang ist das Angebot leider schon seit gestern vorbei.",
      "Kunde: Schade, obwohl ich extra deswegen hergekommen bin.",
      "Mitarbeiter: Warten Sie, ich frage kurz meine Kollegin, ob wir eine Ausnahme machen können.",
      "Kunde: Das wäre wirklich sehr nett von Ihnen.",
    ] }, quiz_answers: [] },
    { id: "supermarkt-b1-b2", position: 2, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 2 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Reklamation → Bitte um Beleg → Beweis zeigen → Bestätigung des Fehlers → Bitte um Korrektur.", data: { items: [
      "Kunde: Entschuldigung, ich glaube, ein Artikel wurde doppelt berechnet.",
      "Kassiererin: Oh, das tut mir wirklich leid. Zeigen Sie mir bitte den Bon.",
      "Kunde: Hier, wie Sie sehen, wurde die Butter zweimal aufgeführt.",
      "Kassiererin: Sie haben völlig recht, das war ein Fehler beim Scannen.",
      "Kunde: Könnten Sie den Betrag bitte korrigieren?",
    ] }, quiz_answers: [] },
  ],
} as const;
