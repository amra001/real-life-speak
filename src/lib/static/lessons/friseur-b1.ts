const T = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ bks, tr, uk, ro, ar });
const H = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ help: T(bks, tr, uk, ro, ar) });

export const friseurB1 = {
  lesson: {
    id: "7c4d1a83-2f6e-4b9a-b3d8-5e1c9a072f6b",
    slug: "friseur-b1",
    title: "Beim Friseur – B1",
    description:
      "Ein anspruchsvolles Gespräch beim Friseur: Wünsche differenziert ausdrücken, über frühere Erfahrungen berichten, eine Reklamation höflich formulieren und über den Beruf sprechen.",
    level: "B1",
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
          "„Obwohl“ leitet einen Nebensatz ein, der einen Gegensatz zum Hauptsatz ausdrückt — etwas geschieht, obwohl man es nicht erwarten würde. Wie bei allen Nebensätzen steht das konjugierte Verb am Ende.",
        examples: [
          "Ich bin zufrieden, obwohl der Schnitt kürzer geworden ist, als ich wollte.",
          "Obwohl der Salon voll war, musste ich nicht lange warten.",
        ],
      },
      {
        title: "Nebensätze mit damit (Finalsatz)",
        explanation:
          "„Damit“ drückt einen Zweck oder ein Ziel aus (im Unterschied zu „um … zu“, das nur bei gleichem Subjekt funktioniert). „Damit“ wird verwendet, wenn Haupt- und Nebensatz unterschiedliche Subjekte haben.",
        examples: [
          "Die Friseurin zeigt mir den Spiegel, damit ich das Ergebnis von hinten sehen kann.",
          "Sie trägt Handschuhe, damit die Farbe nicht an ihre Hände kommt.",
        ],
      },
      {
        title: "Nebensätze mit nachdem (Vorzeitigkeit)",
        explanation:
          "„Nachdem“ beschreibt, dass etwas VOR dem Ereignis im Hauptsatz passiert ist. Deshalb steht im nachdem-Satz meist ein anderes Tempus (z. B. Plusquamperfekt), während im Hauptsatz das Perfekt oder Präsens steht.",
        examples: [
          "Nachdem die Friseurin die Haare gewaschen hatte, begann sie mit dem Schneiden.",
          "Nachdem ich Platz genommen hatte, fragte sie nach meinen Wünschen.",
        ],
      },
      {
        title: "Konjunktiv II: höfliche Wünsche und Irreales",
        explanation:
          "Konjunktiv II (könnte, würde, hätte gern, wäre) macht Aussagen höflicher, hypothetischer oder drückt etwas Irreales aus. Im Alltag begegnet man ihm vor allem bei höflichen Bitten und Wünschen.",
        examples: [
          "Ich hätte gern einen etwas dunkleren Farbton.",
          "Könnten Sie die Koteletten noch etwas kürzer schneiden?",
          "Wenn ich mehr Zeit hätte, würde ich auch eine Kopfmassage nehmen.",
        ],
      },
      {
        title: "Passiv: Vorgangspassiv mit werden",
        explanation:
          "Das Passiv rückt die Handlung in den Vordergrund, nicht die handelnde Person. Es wird mit „werden“ + Partizip II gebildet. Im Präteritum wird „werden“ zu „wurde“.",
        examples: [
          "Die Haare werden zuerst gewaschen.",
          "Der Termin wurde vor zwei Wochen online gebucht.",
          "Die Schere wird nach jedem Kunden desinfiziert.",
        ],
      },
      {
        title: "Relativsätze mit der/die/das",
        explanation:
          "Relativsätze erweitern ein Nomen mit zusätzlicher Information. Das Relativpronomen richtet sich nach Genus und Numerus des Bezugswortes, der Kasus nach der Funktion im Relativsatz.",
        examples: [
          "Der Kunde, der hier sitzt, wartet schon seit zehn Minuten.",
          "Das Produkt, das sie mir empfohlen hat, riecht sehr angenehm.",
          "Die Friseurin, mit der ich gesprochen habe, ist sehr erfahren.",
        ],
      },
      {
        title: "Indirekte Rede (Grundformen im Alltag)",
        explanation:
          "Um wiederzugeben, was jemand gesagt hat, benutzt man im Alltag oft einfach einen dass-Satz statt des formellen Konjunktiv I. Das Verb steht dann am Ende des Nebensatzes.",
        examples: [
          "Sie hat gesagt, dass der Farbton in zwei Wochen etwas heller wird.",
          "Er hat erklärt, dass die Behandlung etwa eine Stunde dauert.",
        ],
      },
      {
        title: "Wechselpräpositionen im Überblick (Wiederholung, komplexer)",
        explanation:
          "Auf B1-Niveau kombiniert man Wechselpräpositionen oft mit Relativsätzen und Passiv: Man muss gleichzeitig auf Kasus UND Satzbau achten.",
        examples: [
          "Der Stuhl, auf dem ich sitze, ist neu.",
          "Die Produkte werden in ein Regal gestellt, das neben dem Spiegel steht.",
        ],
      },
    ],
    place_items: [],
  },

  scenes: [
    { id: "friseur-b1-s1", position: 1, german_text: "Nachdem ich lange überlegt hatte, habe ich endlich einen Termin bei einem neuen Friseursalon vereinbart.", translations: T("Nakon što sam dugo razmišljao/la, konačno sam dogovorio/la termin u novom frizerskom salonu.", "Uzun süre düşündükten sonra, sonunda yeni bir kuaför salonunda randevu ayarladım.", "Після того як я довго роздумував(ла), я нарешті домовився/лася про запис у новому перукарському салоні.", "După ce m-am gândit mult timp, am stabilit în sfârșit o programare la un salon de frizerie nou.", "بعد أن فكرت طويلاً، حجزت أخيرًا موعدًا في صالون حلاقة جديد.") },
    { id: "friseur-b1-s2", position: 2, german_text: "Herzlich willkommen! Sie sind bestimmt die Kundin, die sich für eine Typberatung angemeldet hat.", translations: T("Srdačno dobrodošli! Vi ste sigurno klijentkinja koja se prijavila za savjetovanje o stilu.", "Hoş geldiniz! Siz kesinlikle stil danışmanlığına kaydolan müşterisiniz.", "Ласкаво просимо! Ви, напевно, та клієнтка, яка записалася на консультацію зі стилю.", "Bine ați venit! Sigur sunteți clienta care s-a înscris pentru o consultație de stil.", "أهلاً وسهلاً! أنت بالتأكيد الزبونة التي سجلت لاستشارة حول الأسلوب.") },
    { id: "friseur-b1-s3", position: 3, german_text: "Genau, ich hätte gern eine komplett neue Frisur, obwohl ich ein bisschen nervös bin.", translations: T("Tačno, željela bih potpuno novu frizuru, iako sam malo nervozna.", "Aynen, tamamen yeni bir saç modeli isterim, biraz gergin olsam da.", "Саме так, я хотіла б повністю нову зачіску, хоча трохи нервую.", "Exact, aș dori o coafură complet nouă, deși sunt puțin nervoasă.", "بالضبط، أرغب في تسريحة شعر جديدة تمامًا، رغم أنني متوترة قليلاً.") },
    { id: "friseur-b1-s4", position: 4, german_text: "Das verstehe ich gut. Lassen Sie uns zuerst besprechen, was für ein Typ Ihnen vorschwebt.", translations: T("To razumijem. Hajde da prvo razgovaramo o tome kakav tip vam se sviđa.", "Bunu iyi anlıyorum. Önce nasıl bir tarz düşündüğünüzü konuşalım.", "Я це добре розумію. Давайте спочатку обговоримо, який тип вам подобається.", "Înțeleg foarte bine. Să discutăm mai întâi ce stil aveți în minte.", "أتفهم ذلك جيدًا. دعنا أولاً نناقش أي نمط تفكرين فيه.") },
    { id: "friseur-b1-s5", position: 5, german_text: "Der Kunde, der vor mir dran war, hatte sich einen ähnlichen Wechsel gewünscht.", translations: T("Klijent koji je bio prije mene želio je sličnu promjenu.", "Benden önce sırası gelen müşteri de benzer bir değişiklik istemişti.", "Клієнт, який був переді мною, хотів схожу зміну.", "Clientul care a fost înaintea mea și-a dorit o schimbare asemănătoare.", "الزبون الذي كان قبلي أراد تغييرًا مشابهًا.") },
    { id: "friseur-b1-s6", position: 6, german_text: "Wenn Sie möchten, könnte ich Ihnen zeigen, wie das Ergebnis bei ihm ausgesehen hat.", translations: T("Ako želite, mogla bih vam pokazati kako je rezultat izgledao kod njega.", "İsterseniz, onda sonucun nasıl göründüğünü size gösterebilirim.", "Якщо хочете, я могла б показати вам, як виглядав результат у нього.", "Dacă doriți, aș putea să vă arăt cum a arătat rezultatul la el.", "إذا أردت، يمكنني أن أريك كيف بدت النتيجة معه.") },
    { id: "friseur-b1-s7", position: 7, german_text: "Ja, gern, das würde mir helfen, mich zu entscheiden.", translations: T("Da, rado, to bi mi pomoglo da se odlučim.", "Evet, lütfen, bu karar vermeme yardımcı olur.", "Так, будь ласка, це допомогло б мені прийняти рішення.", "Da, cu plăcere, m-ar ajuta să mă decid.", "نعم، من فضلك، سيساعدني ذلك على اتخاذ القرار.") },
    { id: "friseur-b1-s8", position: 8, german_text: "Nachdem die Haare gewaschen worden waren, wurde die Kopfhaut sanft massiert.", translations: T("Nakon što je kosa oprana, vlasište je nježno masirano.", "Saçlar yıkandıktan sonra, saç derisi nazikçe masaj yapıldı.", "Після того як волосся було вимито, шкіру голови ніжно масажували.", "După ce părul a fost spălat, scalpul a fost masat ușor.", "بعد أن غُسل الشعر، جرى تدليك فروة الرأس برفق.") },
    { id: "friseur-b1-s9", position: 9, german_text: "Während des Schneidens wurde ausführlich über die neuesten Trends gesprochen.", translations: T("Tokom šišanja se opširno razgovaralo o najnovijim trendovima.", "Kesim sırasında en yeni trendler hakkında uzun uzun konuşuldu.", "Під час стрижки докладно говорили про найновіші тренди.", "În timpul tunsului s-a discutat pe larg despre cele mai noi tendințe.", "أثناء القص جرى الحديث بإسهاب عن أحدث صيحات الموضة.") },
    { id: "friseur-b1-s10", position: 10, german_text: "Die Friseurin, deren Erfahrung man sofort merkt, schlug eine mutige Kurzhaarfrisur vor.", translations: T("Frizerka, čije se iskustvo odmah primijeti, predložila je hrabru kratku frizuru.", "Deneyimi hemen fark edilen kuaför, cesur bir kısa saç modeli önerdi.", "Перукарка, чий досвід одразу помітно, запропонувала сміливу коротку зачіску.", "Frizerița, a cărei experiență se simte imediat, a propus o coafură scurtă îndrăzneață.", "الحلاقة، التي تُلاحظ خبرتها فورًا، اقترحت تسريحة قصيرة جريئة.") },
    { id: "friseur-b1-s11", position: 11, german_text: "Ich war zunächst unsicher, aber sie hat mir versichert, dass es mir stehen würde.", translations: T("Isprva sam bila nesigurna, ali me je uvjerila da će mi stajati.", "Önce kararsızdım ama bana yakışacağına dair beni ikna etti.", "Спочатку я вагалася, але вона запевнила мене, що це мені пасуватиме.", "La început am fost nesigură, dar m-a asigurat că mi se va potrivi.", "كنت في البداية غير متأكدة، لكنها طمأنتني بأنها ستناسبني.") },
    { id: "friseur-b1-s12", position: 12, german_text: "Nachdem der Schnitt fertiggestellt worden war, wurde ich gebeten, in den Spiegel zu schauen.", translations: T("Nakon što je frizura završena, zamoljena sam da pogledam u ogledalo.", "Kesim tamamlandıktan sonra, aynaya bakmam istendi.", "Після того як стрижку було завершено, мене попросили подивитися в дзеркало.", "După ce tunsoarea a fost finalizată, am fost rugată să mă uit în oglindă.", "بعد أن اكتملت القصة، طُلب مني النظر إلى المرآة.") },
    { id: "friseur-b1-s13", position: 13, german_text: "Ehrlich gesagt war ich überrascht, wie gut mir der kurze Schnitt tatsächlich stand.", translations: T("Iskreno rečeno, bila sam iznenađena koliko mi je kratka frizura zapravo dobro stajala.", "Açıkçası, kısa kesimin bana gerçekten ne kadar yakıştığına şaşırdım.", "Чесно кажучи, я була здивована, наскільки насправді мені личила коротка стрижка.", "Sincer, am fost surprinsă cât de bine mi-a stat de fapt tunsoarea scurtă.", "بصراحة، فوجئت بمدى ملاءمة القصة القصيرة لي فعلاً.") },
    { id: "friseur-b1-s14", position: 14, german_text: "Falls ich unzufrieden gewesen wäre, hätte man die Länge natürlich noch anpassen können.", translations: T("Da sam bila nezadovoljna, dužina bi se naravno mogla dodatno prilagoditi.", "Eğer memnun kalmasaydım, uzunluk elbette hâlâ ayarlanabilirdi.", "Якби я була незадоволена, довжину, звісно, ще можна було б підлаштувати.", "Dacă aș fi fost nemulțumită, lungimea ar fi putut fi, desigur, ajustată.", "لو لم أكن راضية، لكان بالإمكان بالطبع تعديل الطول أكثر.") },
    { id: "friseur-b1-s15", position: 15, german_text: "Am Ende habe ich mich bedankt und einen weiteren Termin vereinbart, damit ich die Form gut erhalten kann.", translations: T("Na kraju sam se zahvalila i dogovorila novi termin, kako bih dobro održala formu.", "Sonunda teşekkür ettim ve şekli iyi koruyabilmek için başka bir randevu ayarladım.", "Наприкінці я подякувала і домовилася про ще один запис, щоб добре зберігати форму.", "La final am mulțumit și am stabilit o nouă programare, ca să pot menține bine forma.", "في النهاية شكرت وحددت موعدًا آخر حتى أحافظ على الشكل جيدًا.") },
  ],

  vocab: [
    { id: "friseur-b1-v1", position: 1, term: "Typberatung", article: "die", plural: "die Typberatungen", word_class: "Nomen", example: "Sie hat sich für eine Typberatung angemeldet.", translations: T("savjetovanje o stilu", "stil danışmanlığı", "консультація зі стилю", "consultanță de stil", "استشارة الأسلوب") },
    { id: "friseur-b1-v2", position: 2, term: "Wechsel", article: "der", plural: "die Wechsel", word_class: "Nomen", example: "Er wollte einen kompletten Wechsel.", translations: T("promjena", "değişiklik", "зміна", "schimbare", "تغيير") },
    { id: "friseur-b1-v3", position: 3, term: "Erfahrung", article: "die", plural: "die Erfahrungen", word_class: "Nomen", example: "Man merkt ihre Erfahrung sofort.", translations: T("iskustvo", "deneyim", "досвід", "experiență", "خبرة") },
    { id: "friseur-b1-v4", position: 4, term: "versichern", word_class: "Verb", example: "Sie hat mir versichert, dass es passt.", translations: T("uvjeriti", "temin etmek/söz vermek", "запевняти", "a asigura", "يطمئن") },
    { id: "friseur-b1-v5", position: 5, term: "anpassen", word_class: "Verb", example: "Man kann die Länge noch anpassen.", translations: T("prilagoditi", "ayarlamak/uyarlamak", "підлаштовувати", "a ajusta", "يعدّل") },
    { id: "friseur-b1-v6", position: 6, term: "Reklamation", article: "die", plural: "die Reklamationen", word_class: "Nomen", example: "Ich möchte eine Reklamation vorbringen.", translations: T("reklamacija/žalba", "şikayet/talep", "рекламація", "reclamație", "شكوى") },
    { id: "friseur-b1-v7", position: 7, term: "unzufrieden", word_class: "Adjektiv", example: "Ich bin mit dem Ergebnis unzufrieden.", translations: T("nezadovoljan", "memnun olmayan", "незадоволений", "nemulțumit", "غير راضٍ") },
    { id: "friseur-b1-v8", position: 8, term: "Erwartung", article: "die", plural: "die Erwartungen", word_class: "Nomen", example: "Das entspricht nicht meinen Erwartungen.", translations: T("očekivanje", "beklenti", "очікування", "așteptare", "توقع") },
    { id: "friseur-b1-v9", position: 9, term: "Kompromiss", article: "der", plural: "die Kompromisse", word_class: "Nomen", example: "Wir haben einen Kompromiss gefunden.", translations: T("kompromis", "uzlaşma", "компроміс", "compromis", "حل وسط") },
    { id: "friseur-b1-v10", position: 10, term: "nachbessern", word_class: "Verb", example: "Können Sie das noch nachbessern?", translations: T("naknadno popraviti", "sonradan düzeltmek", "доопрацьовувати", "a remedia ulterior", "تصحيح لاحقًا") },
    { id: "friseur-b1-v11", position: 11, term: "Fachkraft", article: "die", plural: "die Fachkräfte", word_class: "Nomen", example: "Ein Friseur ist eine ausgebildete Fachkraft.", translations: T("stručnjak", "uzman personel", "фахівець", "specialist calificat", "كادر متخصص") },
    { id: "friseur-b1-v12", position: 12, term: "Ausbildung", article: "die", plural: "die Ausbildungen", word_class: "Nomen", example: "Die Ausbildung dauert meist drei Jahre.", translations: T("obuka/naukovanje", "meslek eğitimi", "фахова освіта", "formare profesională", "تدريب مهني") },
    { id: "friseur-b1-v13", position: 13, term: "Hygienevorschrift", article: "die", plural: "die Hygienevorschriften", word_class: "Nomen", example: "Salons müssen Hygienevorschriften einhalten.", translations: T("higijenski propis", "hijyen kuralı", "гігієнічна норма", "normă de igienă", "لائحة النظافة") },
    { id: "friseur-b1-v14", position: 14, term: "desinfizieren", word_class: "Verb", example: "Die Werkzeuge werden desinfiziert.", translations: T("dezinfikovati", "dezenfekte etmek", "дезінфікувати", "a dezinfecta", "تعقيم") },
    { id: "friseur-b1-v15", position: 15, term: "allergisch", word_class: "Adjektiv", example: "Ich bin allergisch gegen bestimmte Farben.", translations: T("alergičan", "alerjik", "алергічний", "alergic", "حساس/مصاب بالحساسية") },
    { id: "friseur-b1-v16", position: 16, term: "Verträglichkeitstest", article: "der", plural: "die Verträglichkeitstests", word_class: "Nomen", example: "Vor der Färbung macht man einen Verträglichkeitstest.", translations: T("test podnošljivosti", "hassasiyet testi", "тест на переносимість", "test de toleranță", "اختبار التحسس") },
    { id: "friseur-b1-v17", position: 17, term: "mutig", word_class: "Adjektiv", example: "Sie hat eine mutige Frisur gewählt.", translations: T("hrabar", "cesur", "сміливий", "curajos", "جريء") },
    { id: "friseur-b1-v18", position: 18, term: "Trend", article: "der", plural: "die Trends", word_class: "Nomen", example: "Sie sprechen über die neuesten Trends.", translations: T("trend", "trend", "тренд", "trend", "اتجاه") },
    { id: "friseur-b1-v19", position: 19, term: "Beratungsgespräch", article: "das", plural: "die Beratungsgespräche", word_class: "Nomen", example: "Zuerst gibt es ein Beratungsgespräch.", translations: T("razgovor za savjetovanje", "danışmanlık görüşmesi", "консультативна бесіда", "consultație", "جلسة استشارية") },
    { id: "friseur-b1-v20", position: 20, term: "Kundenzufriedenheit", article: "die", plural: "—", word_class: "Nomen", example: "Kundenzufriedenheit ist ihr wichtig.", translations: T("zadovoljstvo klijenata", "müşteri memnuniyeti", "задоволеність клієнтів", "satisfacția clienților", "رضا الزبائن") },
    { id: "friseur-b1-v21", position: 21, term: "Struktur", article: "die", plural: "die Strukturen", word_class: "Nomen", example: "Die Struktur des Haares ist wichtig für die Beratung.", translations: T("struktura", "yapı", "структура", "structură", "بنية") },
    { id: "friseur-b1-v22", position: 22, term: "Ansatz", article: "der", plural: "die Ansätze", word_class: "Nomen", example: "Der Ansatz muss nachgefärbt werden.", translations: T("korijen (kose)", "dip (saç)", "коріння (волосся)", "rădăcina părului", "منبت الشعر") },
    { id: "friseur-b1-v23", position: 23, term: "Volumen", article: "das", plural: "—", word_class: "Nomen", example: "Die Frisur soll mehr Volumen bekommen.", translations: T("volumen", "hacim", "об’єм", "volum", "حجم") },
    { id: "friseur-b1-v24", position: 24, term: "auffallen", word_class: "Verb", example: "Der neue Schnitt fällt sofort auf.", translations: T("upadati u oči", "dikkat çekmek", "привертати увагу", "a se remarca", "يلفت الانتباه") },
    { id: "friseur-b1-v25", position: 25, term: "sich beschweren", word_class: "Verb", example: "Ein Kunde hat sich beschwert.", translations: T("žaliti se", "şikayet etmek", "скаржитися", "a se plânge", "يشتكي") },
    { id: "friseur-b1-v26", position: 26, term: "Entschädigung", article: "die", plural: "die Entschädigungen", word_class: "Nomen", example: "Der Salon bietet eine kleine Entschädigung an.", translations: T("naknada/kompenzacija", "tazminat", "компенсація", "despăgubire", "تعويض") },
    { id: "friseur-b1-v27", position: 27, term: "selbstständig", word_class: "Adjektiv", example: "Viele Friseure arbeiten selbstständig.", translations: T("samostalan", "bağımsız/serbest", "самостійний", "independent", "مستقل") },
    { id: "friseur-b1-v28", position: 28, term: "Meisterprüfung", article: "die", plural: "die Meisterprüfungen", word_class: "Nomen", example: "Für einen eigenen Salon braucht man oft die Meisterprüfung.", translations: T("majstorski ispit", "ustalık sınavı", "іспит на майстра", "examen de maistru", "امتحان الاحتراف") },
  ],

  dialog: [
    { id: "friseur-b1-d1-1", position: 1, dialog_index: 1, dialog_title: "Dialog 1 · Beratung und Wunsch", speaker: "Kunde", german_text: "Guten Tag, ich hätte gern eine ausführliche Beratung, bevor wir irgendetwas schneiden.", translations: T("Dobar dan, željela bih detaljno savjetovanje prije nego što bilo šta odsiječemo.", "Merhaba, herhangi bir şey kesmeden önce ayrıntılı bir danışmanlık isterim.", "Доброго дня, я хотіла б детальну консультацію, перш ніж щось стригти.", "Bună ziua, aș dori o consultație detaliată înainte să tăiem ceva.", "مرحبًا، أرغب في استشارة مفصلة قبل أن نقص أي شيء.") },
    { id: "friseur-b1-d1-2", position: 2, dialog_index: 1, dialog_title: "Dialog 1 · Beratung und Wunsch", speaker: "Friseurin", german_text: "Selbstverständlich. Erzählen Sie mir, was Sie an Ihrer aktuellen Frisur stört.", translations: T("Naravno. Ispričajte mi šta vas smeta kod vaše trenutne frizure.", "Elbette. Şu anki saç modelinizde sizi neyin rahatsız ettiğini anlatın.", "Звісно. Розкажіть мені, що вас турбує у вашій теперішній зачісці.", "Desigur. Spuneți-mi ce vă deranjează la coafura actuală.", "بالطبع. أخبريني بما يزعجك في تسريحتك الحالية.") },
    { id: "friseur-b1-d1-3", position: 3, dialog_index: 1, dialog_title: "Dialog 1 · Beratung und Wunsch", speaker: "Kunde", german_text: "Sie ist mir zu unauffällig geworden, obwohl ich früher genau diesen Stil mochte.", translations: T("Postala mi je previše nezanimljiva, iako mi se ranije baš taj stil sviđao.", "Çok sıradan hale geldi, önceden tam da bu tarzı sevmeme rağmen.", "Вона стала для мене занадто непомітною, хоча раніше мені саме цей стиль подобався.", "A devenit prea discretă pentru mine, deși înainte îmi plăcea exact acest stil.", "أصبحت غير ملفتة بالنسبة لي، رغم أنني كنت أحب هذا الأسلوب بالتحديد سابقًا.") },
    { id: "friseur-b1-d1-4", position: 4, dialog_index: 1, dialog_title: "Dialog 1 · Beratung und Wunsch", speaker: "Friseurin", german_text: "Verstehe. Wenn ich Ihnen einen Vorschlag machen dürfte: Wie wäre es mit mehr Volumen und einer neuen Farbe?", translations: T("Razumijem. Ako smijem dati prijedlog: šta kažete na više volumena i novu boju?", "Anlıyorum. Bir öneride bulunabilirsem: daha fazla hacim ve yeni bir renge ne dersiniz?", "Розумію. Якщо можна дати пораду: як щодо більшого об’єму та нового кольору?", "Înțeleg. Dacă mi-ați permite o sugestie: ce ziceți de mai mult volum și o culoare nouă?", "أفهم. إذا سمحت لي باقتراح: ما رأيك بمزيد من الحجم ولون جديد؟") },
    { id: "friseur-b1-d1-5", position: 5, dialog_index: 1, dialog_title: "Dialog 1 · Beratung und Wunsch", speaker: "Kunde", german_text: "Das klingt interessant, obwohl ich noch nie eine so große Veränderung gewagt habe.", translations: T("To zvuči zanimljivo, iako se nikad nisam usudila na tako veliku promjenu.", "Bu kulağa ilginç geliyor, hiç bu kadar büyük bir değişiklik denemesem de.", "Це звучить цікаво, хоча я ще ніколи не наважувалася на таку велику зміну.", "Sună interesant, deși nu am mai îndrăznit niciodată o schimbare atât de mare.", "يبدو هذا مثيرًا، رغم أنني لم أجرؤ من قبل على تغيير بهذا الحجم.") },
    { id: "friseur-b1-d1-6", position: 6, dialog_index: 1, dialog_title: "Dialog 1 · Beratung und Wunsch", speaker: "Friseurin", german_text: "Wir könnten auch klein anfangen, damit Sie sich langsam daran gewöhnen.", translations: T("Mogli bismo početi i malo, kako biste se polako navikli.", "Yavaş yavaş alışmanız için küçük başlayabiliriz de.", "Ми могли б почати й з малого, щоб ви поступово звикли.", "Am putea începe și mai simplu, ca să vă obișnuiți treptat.", "يمكننا أيضًا البدء بشكل صغير حتى تتعودي تدريجيًا.") },
    { id: "friseur-b1-d1-7", position: 7, dialog_index: 1, dialog_title: "Dialog 1 · Beratung und Wunsch", speaker: "Kunde", german_text: "Nein, ich glaube, ich sollte diesmal wirklich mutig sein.", translations: T("Ne, mislim da bih ovaj put stvarno trebala biti hrabra.", "Hayır, sanırım bu sefer gerçekten cesur olmalıyım.", "Ні, я думаю, цього разу мені справді варто бути сміливою.", "Nu, cred că de data asta chiar ar trebui să fiu curajoasă.", "لا، أعتقد أنني يجب أن أكون جريئة فعلاً هذه المرة.") },
    { id: "friseur-b1-d1-8", position: 8, dialog_index: 1, dialog_title: "Dialog 1 · Beratung und Wunsch", speaker: "Friseurin", german_text: "Bevor wir anfangen, sollten wir noch einen Verträglichkeitstest für die Farbe machen.", translations: T("Prije nego počnemo, trebali bismo napraviti test podnošljivosti za boju.", "Başlamadan önce, boya için bir hassasiyet testi yapmalıyız.", "Перш ніж почати, нам варто зробити тест на переносимість фарби.", "Înainte să începem, ar trebui să facem un test de toleranță pentru culoare.", "قبل أن نبدأ، ينبغي أن نجري اختبار حساسية للون.") },
    { id: "friseur-b1-d1-9", position: 9, dialog_index: 1, dialog_title: "Dialog 1 · Beratung und Wunsch", speaker: "Kunde", german_text: "Gute Idee, ich bin nämlich manchmal etwas allergisch auf bestimmte Produkte.", translations: T("Dobra ideja, ponekad sam naime malo alergična na određene proizvode.", "İyi fikir, çünkü bazen belirli ürünlere karşı biraz alerjik oluyorum.", "Гарна ідея, я іноді трохи алергічна на певні продукти.", "Bună idee, uneori sunt puțin alergică la anumite produse.", "فكرة جيدة، فأنا أحيانًا حساسة قليلًا تجاه بعض المنتجات.") },
    { id: "friseur-b1-d1-10", position: 10, dialog_index: 1, dialog_title: "Dialog 1 · Beratung und Wunsch", speaker: "Friseurin", german_text: "Dann warten wir zwanzig Minuten und schauen, ob eine Reaktion auftritt.", translations: T("Onda ćemo pričekati dvadeset minuta i vidjeti da li se pojavljuje reakcija.", "O zaman yirmi dakika bekleyelim ve bir reaksiyon olup olmadığına bakalım.", "Тоді почекаємо двадцять хвилин і подивимося, чи виникне реакція.", "Atunci așteptăm douăzeci de minute și vedem dacă apare o reacție.", "إذن سننتظر عشرين دقيقة ونرى إن ظهر أي تفاعل.") },
    { id: "friseur-b1-d1-11", position: 11, dialog_index: 1, dialog_title: "Dialog 1 · Beratung und Wunsch", speaker: "Kunde", german_text: "In Ordnung, dann bin ich beruhigt und wir können in der Zwischenzeit weiterreden.", translations: T("U redu, onda sam smirena i možemo u međuvremenu dalje razgovarati.", "Tamam, o zaman içim rahatladı ve bu arada konuşmaya devam edebiliriz.", "Гаразд, тоді я заспокоєна, і ми можемо тим часом продовжити розмову.", "Bine, atunci sunt liniștită și putem continua să discutăm între timp.", "حسنًا، إذن أنا مطمئنة ويمكننا الاستمرار في الحديث في هذه الأثناء.") },

    { id: "friseur-b1-d2-1", position: 1, dialog_index: 2, dialog_title: "Dialog 2 · Eine höfliche Reklamation", speaker: "Kunde", german_text: "Entschuldigung, könnten wir kurz über das Ergebnis sprechen? Es entspricht nicht ganz meinen Erwartungen.", translations: T("Izvinite, možemo li kratko razgovarati o rezultatu? Ne odgovara sasvim mojim očekivanjima.", "Affedersiniz, sonuç hakkında kısaca konuşabilir miyiz? Beklentilerimi tam olarak karşılamıyor.", "Перепрошую, чи могли б ми коротко поговорити про результат? Він не зовсім відповідає моїм очікуванням.", "Scuzați-mă, am putea discuta puțin despre rezultat? Nu corespunde chiar așteptărilor mele.", "عذرًا، هل يمكننا التحدث قليلاً عن النتيجة؟ إنها لا تلبي توقعاتي تمامًا.") },
    { id: "friseur-b1-d2-2", position: 2, dialog_index: 2, dialog_title: "Dialog 2 · Eine höfliche Reklamation", speaker: "Friseurin", german_text: "Natürlich, das tut mir leid zu hören. Was genau gefällt Ihnen nicht?", translations: T("Naravno, žao mi je što to čujem. Šta vam se tačno ne sviđa?", "Elbette, bunu duyduğuma üzüldüm. Tam olarak ne hoşunuza gitmiyor?", "Звичайно, мені прикро це чути. Що саме вам не подобається?", "Desigur, îmi pare rău să aud asta. Ce anume nu vă place?", "بالطبع، يؤسفني سماع ذلك. ما الذي لا يعجبك بالضبط؟") },
    { id: "friseur-b1-d2-3", position: 3, dialog_index: 2, dialog_title: "Dialog 2 · Eine höfliche Reklamation", speaker: "Kunde", german_text: "Der Ansatz, der eigentlich dunkler bleiben sollte, wurde leider mitgefärbt.", translations: T("Korijen, koji je trebao ostati tamniji, nažalost je isto obojen.", "Aslında daha koyu kalması gereken dip, maalesef boyaya dahil edildi.", "Коріння, яке мало залишитися темнішим, на жаль, теж пофарбували.", "Rădăcina, care trebuia să rămână mai închisă, a fost din păcate vopsită și ea.", "الجذور، التي كان من المفترض أن تبقى أغمق، صُبغت للأسف أيضًا.") },
    { id: "friseur-b1-d2-4", position: 4, dialog_index: 2, dialog_title: "Dialog 2 · Eine höfliche Reklamation", speaker: "Friseurin", german_text: "Oh, das tut mir wirklich leid. Das hätte natürlich nicht passieren dürfen.", translations: T("Oh, stvarno mi je žao. To se naravno nije smjelo desiti.", "Ah, gerçekten çok üzgünüm. Bu tabii ki olmamalıydı.", "О, мені справді дуже прикро. Цього, звісно, не мало статися.", "Vai, îmi pare foarte rău. Asta, desigur, nu ar fi trebuit să se întâmple.", "أوه، أنا آسفة حقًا. لم يكن يجب أن يحدث هذا بالطبع.") },
    { id: "friseur-b1-d2-5", position: 5, dialog_index: 2, dialog_title: "Dialog 2 · Eine höfliche Reklamation", speaker: "Kunde", german_text: "Wäre es möglich, dass Sie das noch einmal kostenlos nachbessern?", translations: T("Da li bi bilo moguće da to još jednom besplatno popravite?", "Bunu bir kez daha ücretsiz düzeltmeniz mümkün mü acaba?", "Чи можливо, щоб ви це ще раз безкоштовно виправили?", "Ar fi posibil să corectați asta încă o dată, gratuit?", "هل من الممكن أن تصححوا ذلك مرة أخرى مجانًا؟") },
    { id: "friseur-b1-d2-6", position: 6, dialog_index: 2, dialog_title: "Dialog 2 · Eine höfliche Reklamation", speaker: "Friseurin", german_text: "Selbstverständlich, das machen wir gern, und wir übernehmen die Kosten vollständig.", translations: T("Naravno, rado ćemo to uraditi, i mi ćemo u potpunosti preuzeti troškove.", "Elbette, bunu memnuniyetle yaparız ve masrafları tamamen biz üstleniriz.", "Звичайно, ми залюбки це зробимо і повністю покриємо витрати.", "Desigur, o facem cu plăcere și ne asumăm integral costurile.", "بالطبع، سنفعل ذلك بكل سرور، وسنتحمل التكاليف بالكامل.") },
    { id: "friseur-b1-d2-7", position: 7, dialog_index: 2, dialog_title: "Dialog 2 · Eine höfliche Reklamation", speaker: "Kunde", german_text: "Das ist sehr freundlich, ich schätze das wirklich sehr.", translations: T("To je jako ljubazno, to zaista jako cijenim.", "Bu çok kibar, gerçekten çok takdir ediyorum.", "Це дуже люб’язно, я це справді дуже ціную.", "Este foarte amabil, apreciez cu adevărat asta.", "هذا لطيف جدًا، أقدّر ذلك حقًا.") },
    { id: "friseur-b1-d2-8", position: 8, dialog_index: 2, dialog_title: "Dialog 2 · Eine höfliche Reklamation", speaker: "Friseurin", german_text: "Sollen wir gleich morgen einen Termin dafür finden, damit Sie nicht lange warten müssen?", translations: T("Da nađemo termin za to već sutra, kako ne biste morali dugo čekati?", "Yarın hemen bunun için bir randevu bulalım mı, uzun süre beklemek zorunda kalmayasınız diye?", "Знайдемо запис на завтра, щоб вам не довелося довго чекати?", "Să găsim mâine o programare, ca să nu trebuiască să așteptați mult?", "هل نجد موعدًا غدًا مباشرة حتى لا تضطري للانتظار طويلاً؟") },
    { id: "friseur-b1-d2-9", position: 9, dialog_index: 2, dialog_title: "Dialog 2 · Eine höfliche Reklamation", speaker: "Kunde", german_text: "Ja, das würde mir sehr entgegenkommen, vielen Dank für Ihr Verständnis.", translations: T("Da, to bi mi jako odgovaralo, hvala vam na razumijevanju.", "Evet, bu benim için çok uygun olur, anlayışınız için teşekkür ederim.", "Так, це було б для мене дуже зручно, дякую за розуміння.", "Da, mi-ar conveni foarte mult, mulțumesc pentru înțelegere.", "نعم، سيكون ذلك مناسبًا جدًا لي، شكرًا لتفهمك.") },
    { id: "friseur-b1-d2-10", position: 10, dialog_index: 2, dialog_title: "Dialog 2 · Eine höfliche Reklamation", speaker: "Friseurin", german_text: "Gern geschehen. Nachdem wir das korrigiert haben, sind Sie hoffentlich rundum zufrieden.", translations: T("Nema na čemu. Nakon što to ispravimo, nadam se da ćete biti potpuno zadovoljni.", "Rica ederim. Bunu düzelttikten sonra umarım her yönüyle memnun kalırsınız.", "Прошу. Після того як ми це виправимо, сподіваюся, ви будете повністю задоволені.", "Cu plăcere. După ce corectăm asta, sper să fiți pe deplin mulțumită.", "على الرحب والسعة. بعد أن نصحح ذلك، آمل أن تكوني راضية تمامًا.") },
    { id: "friseur-b1-d2-11", position: 11, dialog_index: 2, dialog_title: "Dialog 2 · Eine höfliche Reklamation", speaker: "Kunde", german_text: "Das denke ich auch. Bis morgen dann, und nochmals vielen Dank.", translations: T("I ja tako mislim. Do sutra onda, i još jednom hvala vam puno.", "Ben de öyle düşünüyorum. Yarın görüşürüz o zaman, tekrar çok teşekkürler.", "Я теж так думаю. До завтра тоді, і ще раз дуже дякую.", "Așa cred și eu. Pe mâine atunci, și încă o dată mulțumesc mult.", "أعتقد ذلك أيضًا. إلى الغد إذن، وشكرًا جزيلاً مرة أخرى.") },
  ],

  questions: [
    // ===== Übungen (practice) =====
    { id: "friseur-b1-q1", position: 1, kind: "single_choice", section: "practice", prompt: "Warum wollte die Kundin zunächst eine ausführliche Beratung?", explanation: "Sie wollte vor dem Schneiden genau besprechen, was sie stört und was sie möchte.", data: H("Ona zeli razgovarati prije nego se bilo sta odsijece.", "Bir şey kesilmeden önce konuşmak istiyor.", "Вона хоче обговорити все перед стрижкою.", "Vrea să discute înainte de a se tăia ceva.", "تريد التحدث قبل أن يُقص أي شيء.") , quiz_answers: [
      { id: "friseur-b1-q1-a1", position: 1, text: "Damit vorher klar ist, was genau gemacht wird.", is_correct: true },
      { id: "friseur-b1-q1-a2", position: 2, text: "Weil der Salon geschlossen war.", is_correct: false },
      { id: "friseur-b1-q1-a3", position: 3, text: "Weil sie schon fertig war.", is_correct: false },
    ] },
    { id: "friseur-b1-q2", position: 2, kind: "single_choice", section: "practice", prompt: "Was schlägt die Friseurin im ersten Dialog vor?", explanation: "Mehr Volumen und eine neue Farbe.", data: H("Ovo je u dijalogu navedeno.", "Bu diyalogda belirtiliyor.", "Це вказано в діалозі.", "Acest lucru e menționat în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "friseur-b1-q2-a1", position: 1, text: "mehr Volumen und eine neue Farbe", is_correct: true },
      { id: "friseur-b1-q2-a2", position: 2, text: "eine Perücke", is_correct: false },
      { id: "friseur-b1-q2-a3", position: 3, text: "einen Bart", is_correct: false },
    ] },
    { id: "friseur-b1-q3", position: 3, kind: "gap", section: "practice", prompt: "Ich ___ gern einen etwas dunkleren Farbton. (Konjunktiv II von haben)", explanation: "„hätte“ — höflicher Wunsch im Konjunktiv II.", data: H("Konjunktiv II za uctivu zelju.", "Nazik dilek için Konjunktiv II.", "Кон’юнктив II для ввічливого бажання.", "Conjunctiv II pentru o dorință politicoasă.", "الصيغة الشرطية الثانية للرغبة المهذبة."), quiz_answers: [
      { id: "friseur-b1-q3-a1", position: 1, text: "hätte", is_correct: true },
    ] },
    { id: "friseur-b1-q4", position: 4, kind: "true_false", section: "practice", prompt: "Vor der Färbung wird ein Verträglichkeitstest gemacht.", explanation: "Richtig, das steht im Dialog.", data: H("Ovo je navedeno u dijalogu.", "Bu diyalogda belirtiliyor.", "Це вказано в діалозі.", "Acest lucru e menționat în dialog.", "هذا مذكور في الحوار."), quiz_answers: [
      { id: "friseur-b1-q4-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-b1-q4-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-b1-q5", position: 5, kind: "single_choice", section: "practice", prompt: "Was ist im zweiten Dialog das Problem?", explanation: "Der Ansatz, der dunkler bleiben sollte, wurde mitgefärbt.", data: H("Ovo je problem u drugom dijalogu.", "Bu ikinci diyalogdaki sorundur.", "Це проблема в другому діалозі.", "Aceasta e problema din al doilea dialog.", "هذه هي المشكلة في الحوار الثاني."), quiz_answers: [
      { id: "friseur-b1-q5-a1", position: 1, text: "Der Ansatz wurde versehentlich mitgefärbt.", is_correct: true },
      { id: "friseur-b1-q5-a2", position: 2, text: "Die Haare wurden zu kurz geschnitten.", is_correct: false },
      { id: "friseur-b1-q5-a3", position: 3, text: "Der Termin wurde vergessen.", is_correct: false },
    ] },
    { id: "friseur-b1-q6", position: 6, kind: "single_choice", section: "practice", prompt: "Welcher Satz benutzt das Passiv richtig?", explanation: "„werden“ + Partizip II.", data: H("Pasiv: werden + particip II.", "Edilgen: werden + partizip II.", "Пасив: werden + дієприкметник II.", "Pasiv: werden + participiu II.", "المبني للمجهول: werden + التصريف الثالث."), quiz_answers: [
      { id: "friseur-b1-q6-a1", position: 1, text: "Die Haare werden zuerst gewaschen.", is_correct: true },
      { id: "friseur-b1-q6-a2", position: 2, text: "Die Haare werden zuerst waschen.", is_correct: false },
      { id: "friseur-b1-q6-a3", position: 3, text: "Die Haare sind zuerst gewaschen werden.", is_correct: false },
    ] },
    { id: "friseur-b1-q7", position: 7, kind: "gap", section: "practice", prompt: "Der Kunde, ___ vor mir dran war, hatte einen ähnlichen Wunsch. (Relativpronomen)", explanation: "„der“ — maskulin, Nominativ.", data: H("Relativna zamjenica der za muski rod.", "Eril için der ilgi zamiri.", "Відносний займенник der для чоловічого роду.", "Pronumele relativ der pentru masculin.", "الضمير الموصول der للمذكر."), quiz_answers: [
      { id: "friseur-b1-q7-a1", position: 1, text: "der", is_correct: true },
    ] },
    { id: "friseur-b1-q8", position: 8, kind: "single_choice", section: "practice", prompt: "Warum wird nach der Reklamation kein Geld verlangt?", explanation: "Der Salon übernimmt die Kosten vollständig, weil der Fehler beim Salon lag.", data: H("Salon preuzima troskove jer je greska bila njihova.", "Hata salonda olduğu için masrafları salon üstlenir.", "Салон бере на себе витрати, бо помилка була їхньою.", "Salonul își asumă costurile pentru că greșeala a fost a lor.", "يتحمل الصالون التكاليف لأن الخطأ كان منه.") , quiz_answers: [
      { id: "friseur-b1-q8-a1", position: 1, text: "Weil der Fehler beim Salon lag.", is_correct: true },
      { id: "friseur-b1-q8-a2", position: 2, text: "Weil die Kundin Stammkundin ist.", is_correct: false },
      { id: "friseur-b1-q8-a3", position: 3, text: "Weil heute ein Feiertag ist.", is_correct: false },
    ] },
    { id: "friseur-b1-q9", position: 9, kind: "single_choice", section: "practice", prompt: "Was passiert, nachdem die Haare gewaschen worden waren?", explanation: "Die Kopfhaut wurde sanft massiert.", data: H("Ovo je navedeno u tekstu.", "Bu metinde belirtiliyor.", "Це вказано в тексті.", "Acest lucru e menționat în text.", "هذا مذكور في النص."), quiz_answers: [
      { id: "friseur-b1-q9-a1", position: 1, text: "Die Kopfhaut wurde massiert.", is_correct: true },
      { id: "friseur-b1-q9-a2", position: 2, text: "Der Kunde ist gegangen.", is_correct: false },
      { id: "friseur-b1-q9-a3", position: 3, text: "Die Rechnung wurde bezahlt.", is_correct: false },
    ] },
    { id: "friseur-b1-q10", position: 10, kind: "single_choice", section: "practice", prompt: "Wie reagiert die Kundin am Ende auf den neuen Kurzhaarschnitt?", explanation: "Sie ist überrascht, wie gut er ihr tatsächlich steht.", data: H("Ovo je navedeno u tekstu.", "Bu metinde belirtiliyor.", "Це вказано в тексті.", "Acest lucru e menționat în text.", "هذا مذكور في النص."), quiz_answers: [
      { id: "friseur-b1-q10-a1", position: 1, text: "Sie ist positiv überrascht.", is_correct: true },
      { id: "friseur-b1-q10-a2", position: 2, text: "Sie ist wütend.", is_correct: false },
      { id: "friseur-b1-q10-a3", position: 3, text: "Sie ist gleichgültig.", is_correct: false },
    ] },

    // ===== Abschlusstest (40 Fragen) =====
    { id: "friseur-b1-t1", position: 1, kind: "single_choice", section: "test", prompt: "Was macht die Kundin, nachdem sie lange überlegt hat?", explanation: "Sie vereinbart einen Termin bei einem neuen Salon.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t1-a1", position: 1, text: "Sie vereinbart einen Termin bei einem neuen Salon.", is_correct: true },
      { id: "friseur-b1-t1-a2", position: 2, text: "Sie schneidet sich selbst die Haare.", is_correct: false },
      { id: "friseur-b1-t1-a3", position: 3, text: "Sie sagt den Termin ab.", is_correct: false },
    ] },
    { id: "friseur-b1-t2", position: 2, kind: "true_false", section: "test", prompt: "Die Kundin ist völlig entspannt, weil sie schon oft ihre Frisur komplett geändert hat.", explanation: "Falsch — sie ist nervös und hat so etwas Großes noch nie gewagt.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t2-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "friseur-b1-t2-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "friseur-b1-t3", position: 3, kind: "gap", section: "test", prompt: "Der Kunde, ___ vor mir dran war, hatte einen ähnlichen Wechsel gewünscht.", explanation: "„der“ — Relativpronomen, maskulin, Nominativ.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t3-a1", position: 1, text: "der", is_correct: true },
    ] },
    { id: "friseur-b1-t4", position: 4, kind: "single_choice", section: "test", prompt: "Was passiert, nachdem die Haare gewaschen worden waren?", explanation: "Die Kopfhaut wurde sanft massiert.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t4-a1", position: 1, text: "Die Kopfhaut wurde sanft massiert.", is_correct: true },
      { id: "friseur-b1-t4-a2", position: 2, text: "Die Kundin ist eingeschlafen.", is_correct: false },
      { id: "friseur-b1-t4-a3", position: 3, text: "Die Rechnung wurde geschrieben.", is_correct: false },
    ] },
    { id: "friseur-b1-t5", position: 5, kind: "single_choice", section: "test", prompt: "Worüber wurde während des Schneidens gesprochen?", explanation: "Über die neuesten Trends.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t5-a1", position: 1, text: "über die neuesten Trends", is_correct: true },
      { id: "friseur-b1-t5-a2", position: 2, text: "über das Wetter im Ausland", is_correct: false },
      { id: "friseur-b1-t5-a3", position: 3, text: "über Autos", is_correct: false },
    ] },
    { id: "friseur-b1-t6", position: 6, kind: "single_choice", section: "test", prompt: "Was schlug die Friseurin, deren Erfahrung man sofort merkt, vor?", explanation: "Eine mutige Kurzhaarfrisur.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t6-a1", position: 1, text: "eine mutige Kurzhaarfrisur", is_correct: true },
      { id: "friseur-b1-t6-a2", position: 2, text: "eine lange Perücke", is_correct: false },
      { id: "friseur-b1-t6-a3", position: 3, text: "eine Glatze", is_correct: false },
    ] },
    { id: "friseur-b1-t7", position: 7, kind: "true_false", section: "test", prompt: "Die Kundin war zunächst unsicher, aber die Friseurin hat sie beruhigt.", explanation: "Richtig, laut Text.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t7-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-b1-t7-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-b1-t8", position: 8, kind: "single_choice", section: "test", prompt: "Wie war die Kundin überrascht, als der Schnitt fertig war?", explanation: "Wie gut ihr der kurze Schnitt tatsächlich stand.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t8-a1", position: 1, text: "Wie gut ihr der kurze Schnitt stand.", is_correct: true },
      { id: "friseur-b1-t8-a2", position: 2, text: "Wie teuer der Schnitt war.", is_correct: false },
      { id: "friseur-b1-t8-a3", position: 3, text: "Wie lange sie warten musste.", is_correct: false },
    ] },
    { id: "friseur-b1-t9", position: 9, kind: "single_choice", section: "test", prompt: "Was wäre passiert, wenn die Kundin unzufrieden gewesen wäre?", explanation: "Man hätte die Länge noch anpassen können.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t9-a1", position: 1, text: "Man hätte die Länge noch anpassen können.", is_correct: true },
      { id: "friseur-b1-t9-a2", position: 2, text: "Sie hätte nichts bezahlen müssen.", is_correct: false },
      { id: "friseur-b1-t9-a3", position: 3, text: "Der Salon hätte geschlossen.", is_correct: false },
    ] },
    { id: "friseur-b1-t10", position: 10, kind: "gap", section: "test", prompt: "Sie hat einen weiteren Termin vereinbart, ___ sie die Form gut erhalten kann.", explanation: "„damit“ drückt den Zweck aus.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t10-a1", position: 1, text: "damit", is_correct: true },
    ] },
    { id: "friseur-b1-t11", position: 11, kind: "single_choice", section: "test", prompt: "Warum wollte die Kundin im ersten Dialog zuerst eine ausführliche Beratung?", explanation: "Bevor irgendetwas geschnitten wird, wollte sie ihre Wünsche besprechen.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t11-a1", position: 1, text: "Sie wollte vorher ihre Wünsche besprechen.", is_correct: true },
      { id: "friseur-b1-t11-a2", position: 2, text: "Sie hatte keine Zeit.", is_correct: false },
      { id: "friseur-b1-t11-a3", position: 3, text: "Sie wollte nur zuschauen.", is_correct: false },
    ] },
    { id: "friseur-b1-t12", position: 12, kind: "single_choice", section: "test", prompt: "Was stört die Kundin an ihrer aktuellen Frisur?", explanation: "Sie ist ihr zu unauffällig geworden.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t12-a1", position: 1, text: "Sie ist zu unauffällig geworden.", is_correct: true },
      { id: "friseur-b1-t12-a2", position: 2, text: "Sie ist zu bunt.", is_correct: false },
      { id: "friseur-b1-t12-a3", position: 3, text: "Sie ist zu teuer im Unterhalt.", is_correct: false },
    ] },
    { id: "friseur-b1-t13", position: 13, kind: "single_choice", section: "test", prompt: "Warum wird vor der Färbung ein Verträglichkeitstest gemacht?", explanation: "Weil die Kundin manchmal allergisch auf bestimmte Produkte reagiert.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t13-a1", position: 1, text: "Weil sie manchmal allergisch reagiert.", is_correct: true },
      { id: "friseur-b1-t13-a2", position: 2, text: "Weil es Vorschrift bei jeder Frisur ist.", is_correct: false },
      { id: "friseur-b1-t13-a3", position: 3, text: "Weil die Farbe knapp ist.", is_correct: false },
    ] },
    { id: "friseur-b1-t14", position: 14, kind: "true_false", section: "test", prompt: "Der Verträglichkeitstest dauert laut Dialog zwanzig Minuten.", explanation: "Richtig, laut Dialog 1.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t14-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-b1-t14-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-b1-t15", position: 15, kind: "single_choice", section: "test", prompt: "Was ist im zweiten Dialog das eigentliche Problem?", explanation: "Der Ansatz, der dunkler bleiben sollte, wurde versehentlich mitgefärbt.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t15-a1", position: 1, text: "Der Ansatz wurde mitgefärbt.", is_correct: true },
      { id: "friseur-b1-t15-a2", position: 2, text: "Der Termin wurde verpasst.", is_correct: false },
      { id: "friseur-b1-t15-a3", position: 3, text: "Der Preis war zu hoch.", is_correct: false },
    ] },
    { id: "friseur-b1-t16", position: 16, kind: "single_choice", section: "test", prompt: "Was bietet die Friseurin als Lösung an?", explanation: "Sie bessert kostenlos nach und übernimmt die Kosten vollständig.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t16-a1", position: 1, text: "kostenlose Nachbesserung", is_correct: true },
      { id: "friseur-b1-t16-a2", position: 2, text: "eine Entschuldigung ohne Lösung", is_correct: false },
      { id: "friseur-b1-t16-a3", position: 3, text: "einen Rabattgutschein für Shampoo", is_correct: false },
    ] },
    { id: "friseur-b1-t17", position: 17, kind: "gap", section: "test", prompt: "___ es möglich wäre, dass Sie das noch einmal nachbessern? (Konjunktiv II)", explanation: "„Wäre“ — höfliche Frage im Konjunktiv II.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t17-a1", position: 1, text: "Wäre", is_correct: true },
    ] },
    { id: "friseur-b1-t18", position: 18, kind: "single_choice", section: "test", prompt: "Welcher Satz ist ein korrekter Relativsatz?", explanation: "Das Relativpronomen „die“ bezieht sich auf „die Friseurin“ (feminin) und steht im Dativ nach „mit“.", data: H("Relativna zamjenica die odnosi se na frizerku (zenski rod), dativ.", "İlgi zamiri die kuaföre (dişil) atıfta bulunur, datif.", "Відносний займенник die стосується перукарки (жіночий рід), давальний.", "Pronumele relativ die se referă la frizeriță (feminin), dativ.", "الضمير الموصول die يشير إلى الحلاقة (مؤنث)، حالة الجر."), quiz_answers: [
      { id: "friseur-b1-t18-a1", position: 1, text: "Die Friseurin, mit der ich gesprochen habe, ist sehr erfahren.", is_correct: true },
      { id: "friseur-b1-t18-a2", position: 2, text: "Die Friseurin, mit die ich gesprochen habe, ist sehr erfahren.", is_correct: false },
      { id: "friseur-b1-t18-a3", position: 3, text: "Die Friseurin, mit das ich gesprochen habe, ist sehr erfahren.", is_correct: false },
    ] },
    { id: "friseur-b1-t19", position: 19, kind: "single_choice", section: "test", prompt: "Welcher Satz zeigt korrekte indirekte Rede?", explanation: "Verb am Ende des dass-Satzes.", data: H("Glagol na kraju dass-recenice.", "dass cümlesinin sonunda fiil.", "Дієслово в кінці речення з dass.", "Verbul la finalul propoziției cu dass.", "الفعل في نهاية جملة dass."), quiz_answers: [
      { id: "friseur-b1-t19-a1", position: 1, text: "Sie hat gesagt, dass der Farbton heller wird.", is_correct: true },
      { id: "friseur-b1-t19-a2", position: 2, text: "Sie hat gesagt, dass wird der Farbton heller.", is_correct: false },
      { id: "friseur-b1-t19-a3", position: 3, text: "Sie hat gesagt dass, der Farbton wird heller.", is_correct: false },
    ] },
    { id: "friseur-b1-t20", position: 20, kind: "single_choice", section: "test", prompt: "Welcher Satz benutzt das Passiv im Präteritum korrekt?", explanation: "„wurde“ + Partizip II.", data: H("Preterit pasiva: wurde + particip II.", "Geçmiş zaman edilgen: wurde + partizip II.", "Пасив у минулому: wurde + дієприкметник II.", "Pasiv la trecut: wurde + participiu II.", "المبني للمجهول الماضي: wurde + التصريف الثالث."), quiz_answers: [
      { id: "friseur-b1-t20-a1", position: 1, text: "Der Termin wurde vor zwei Wochen gebucht.", is_correct: true },
      { id: "friseur-b1-t20-a2", position: 2, text: "Der Termin wurde vor zwei Wochen buchen.", is_correct: false },
      { id: "friseur-b1-t20-a3", position: 3, text: "Der Termin wird vor zwei Wochen gebucht wurde.", is_correct: false },
    ] },
    { id: "friseur-b1-t21", position: 21, kind: "single_choice", section: "test", prompt: "Welcher Satz mit „nachdem“ ist korrekt aufgebaut?", explanation: "Nachdem-Satz drückt Vorzeitigkeit aus, oft mit Plusquamperfekt.", data: H("Nachdem-recenica izrazava prijasnjost.", "Nachdem cümlesi öncelik ifade eder.", "Речення з nachdem виражає передування.", "Propoziția cu nachdem exprimă anterioritate.", "جملة nachdem تعبر عن الأسبقية."), quiz_answers: [
      { id: "friseur-b1-t21-a1", position: 1, text: "Nachdem die Haare gewaschen worden waren, begann das Schneiden.", is_correct: true },
      { id: "friseur-b1-t21-a2", position: 2, text: "Nachdem die Haare gewaschen worden waren begann das Schneiden werden.", is_correct: false },
      { id: "friseur-b1-t21-a3", position: 3, text: "Nachdem begann das Schneiden, die Haare gewaschen worden waren.", is_correct: false },
    ] },
    { id: "friseur-b1-t22", position: 22, kind: "single_choice", section: "test", prompt: "Welcher Satz drückt korrekt einen Zweck mit „damit“ aus?", explanation: "„damit“ bei unterschiedlichen Subjekten.", data: H("damit se koristi kad su razliciti subjekti.", "damit farklı özneler için kullanılır.", "damit вживається за різних підметів.", "damit se folosește la subiecte diferite.", "damit تُستخدم عند اختلاف الفاعلين."), quiz_answers: [
      { id: "friseur-b1-t22-a1", position: 1, text: "Sie zeigt mir den Spiegel, damit ich das Ergebnis sehen kann.", is_correct: true },
      { id: "friseur-b1-t22-a2", position: 2, text: "Sie zeigt mir den Spiegel, damit sehe ich das Ergebnis.", is_correct: false },
      { id: "friseur-b1-t22-a3", position: 3, text: "Sie zeigt mir den Spiegel, damit ich sehen das Ergebnis kann.", is_correct: false },
    ] },
    { id: "friseur-b1-t23", position: 23, kind: "true_false", section: "test", prompt: "Der Salon verlangt zusätzliches Geld für die Nachbesserung.", explanation: "Falsch — die Kosten werden vollständig übernommen.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t23-a1", position: 1, text: "Richtig", is_correct: false },
      { id: "friseur-b1-t23-a2", position: 2, text: "Falsch", is_correct: true },
    ] },
    { id: "friseur-b1-t24", position: 24, kind: "single_choice", section: "test", prompt: "Wann wird der Termin für die Nachbesserung gefunden?", explanation: "Bereits für den nächsten Tag.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t24-a1", position: 1, text: "für den nächsten Tag", is_correct: true },
      { id: "friseur-b1-t24-a2", position: 2, text: "in einem Monat", is_correct: false },
      { id: "friseur-b1-t24-a3", position: 3, text: "nie", is_correct: false },
    ] },
    { id: "friseur-b1-t25", position: 25, kind: "gap", section: "test", prompt: "Ich bin zufrieden, ___ der Schnitt kürzer geworden ist, als ich wollte.", explanation: "„obwohl“ drückt einen Gegensatz aus.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t25-a1", position: 1, text: "obwohl", is_correct: true },
    ] },
    { id: "friseur-b1-t26", position: 26, kind: "single_choice", section: "test", prompt: "Wie beschreibt die Kundin die Erfahrung der Friseurin?", explanation: "Man merkt sie sofort.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t26-a1", position: 1, text: "Man merkt sie sofort.", is_correct: true },
      { id: "friseur-b1-t26-a2", position: 2, text: "Sie ist kaum vorhanden.", is_correct: false },
      { id: "friseur-b1-t26-a3", position: 3, text: "Sie ist unwichtig.", is_correct: false },
    ] },
    { id: "friseur-b1-t27", position: 27, kind: "single_choice", section: "test", prompt: "Wie lange dauert eine typische Ausbildung zum Friseur/zur Friseurin in Deutschland?", explanation: "In der Regel drei Jahre.", data: H("Obuka traje obicno tri godine.", "Eğitim genelde üç yıl sürer.", "Навчання зазвичай триває три роки.", "Formarea durează de obicei trei ani.", "يستغرق التدريب عادة ثلاث سنوات."), quiz_answers: [
      { id: "friseur-b1-t27-a1", position: 1, text: "drei Jahre", is_correct: true },
      { id: "friseur-b1-t27-a2", position: 2, text: "ein Wochenende", is_correct: false },
      { id: "friseur-b1-t27-a3", position: 3, text: "zehn Jahre", is_correct: false },
    ] },
    { id: "friseur-b1-t28", position: 28, kind: "true_false", section: "test", prompt: "Wer selbstständig einen eigenen Salon führen möchte, braucht in Deutschland oft eine Meisterprüfung.", explanation: "Richtig — das ist in vielen Fällen erforderlich.", data: H("Za vlastiti salon je cesto potreban majstorski ispit.", "Kendi salonu için genelde ustalık sınavı gerekir.", "Для власного салону часто потрібен іспит на майстра.", "Pentru un salon propriu e adesea necesar examenul de maistru.", "لإدارة صالون خاص غالبًا ما يكون امتحان الاحتراف مطلوبًا."), quiz_answers: [
      { id: "friseur-b1-t28-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-b1-t28-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-b1-t29", position: 29, kind: "single_choice", section: "test", prompt: "Warum werden Werkzeuge zwischen den Kunden desinfiziert?", explanation: "Um Infektionen und die Übertragung von Krankheiten zu vermeiden.", data: H("Da se izbjegnu infekcije.", "Enfeksiyonları önlemek için.", "Щоб уникнути інфекцій.", "Pentru a evita infecțiile.", "لتجنب العدوى."), quiz_answers: [
      { id: "friseur-b1-t29-a1", position: 1, text: "um Infektionen zu vermeiden", is_correct: true },
      { id: "friseur-b1-t29-a2", position: 2, text: "damit sie glänzen", is_correct: false },
      { id: "friseur-b1-t29-a3", position: 3, text: "aus gesetzlicher Neugier", is_correct: false },
    ] },
    { id: "friseur-b1-t30", position: 30, kind: "single_choice", section: "test", prompt: "Was passt am besten zu einem professionellen Reklamationsgespräch?", explanation: "Ruhig erklären, was falsch gelaufen ist, und um eine Lösung bitten.", data: H("Mirno objasniti problem i traziti rjesenje.", "Sorunu sakince açıklamak ve çözüm istemek.", "Спокійно пояснити проблему і попросити рішення.", "A explica calm problema și a cere o soluție.", "شرح المشكلة بهدوء وطلب حل.") , quiz_answers: [
      { id: "friseur-b1-t30-a1", position: 1, text: "ruhig das Problem erklären und um eine Lösung bitten", is_correct: true },
      { id: "friseur-b1-t30-a2", position: 2, text: "laut schreien und den Laden verlassen", is_correct: false },
      { id: "friseur-b1-t30-a3", position: 3, text: "gar nichts sagen", is_correct: false },
    ] },
    { id: "friseur-b1-t31", position: 31, kind: "single_choice", section: "test", prompt: "Welches Nomen bezeichnet die feine chemische Struktur der Haare, die für Farbe und Locken wichtig ist?", explanation: "„die Struktur“.", data: H("Struktura je vazna za boju i uvijanje.", "Yapı, renk ve kıvırma için önemlidir.", "Структура важлива для кольору і завивки.", "Structura este importantă pentru culoare și ondulații.", "البنية مهمة للون والتجعيد."), quiz_answers: [
      { id: "friseur-b1-t31-a1", position: 1, text: "die Struktur", is_correct: true },
      { id: "friseur-b1-t31-a2", position: 2, text: "die Rechnung", is_correct: false },
      { id: "friseur-b1-t31-a3", position: 3, text: "die Tür", is_correct: false },
    ] },
    { id: "friseur-b1-t32", position: 32, kind: "single_choice", section: "test", prompt: "Was bedeutet „der Ansatz“ bei Haaren?", explanation: "Der Bereich nahe der Kopfhaut, wo neues Haar nachwächst.", data: H("Korijen je dio blizu vlasista gdje raste nova kosa.", "Dip, saç derisine yakın yeni saçın çıktığı kısımdır.", "Коріння - ділянка біля шкіри голови, де росте нове волосся.", "Rădăcina e zona de lângă scalp unde crește păr nou.", "الجذور هي المنطقة القريبة من فروة الرأس حيث ينمو الشعر الجديد."), quiz_answers: [
      { id: "friseur-b1-t32-a1", position: 1, text: "der Bereich nahe der Kopfhaut", is_correct: true },
      { id: "friseur-b1-t32-a2", position: 2, text: "die Spitzen der Haare", is_correct: false },
      { id: "friseur-b1-t32-a3", position: 3, text: "ein Werkzeug", is_correct: false },
    ] },
    { id: "friseur-b1-t33", position: 33, kind: "true_false", section: "test", prompt: "Kunden mit bekannten Allergien sollten den Friseur vor der Behandlung informieren.", explanation: "Richtig — das ist wichtig für die Sicherheit.", data: H("Vazno je informisati o alergijama zbog sigurnosti.", "Güvenlik için alerjiler önceden bildirilmelidir.", "Важливо повідомляти про алергії для безпеки.", "Este important să anunți alergiile pentru siguranță.", "من المهم إبلاغ الحلاق بالحساسية من أجل السلامة.") , quiz_answers: [
      { id: "friseur-b1-t33-a1", position: 1, text: "Richtig", is_correct: true },
      { id: "friseur-b1-t33-a2", position: 2, text: "Falsch", is_correct: false },
    ] },
    { id: "friseur-b1-t34", position: 34, kind: "single_choice", section: "test", prompt: "Was ist eine typische Aufgabe, die NICHT zum Berufsbild eines Friseurs gehört?", explanation: "Zahnbehandlungen gehören nicht zum Friseurberuf.", data: H("Zubni tretmani ne spadaju u frizerski posao.", "Diş tedavisi kuaförlük mesleğine ait değildir.", "Стоматологічне лікування не входить у роботу перукаря.", "Tratamentele dentare nu țin de meseria de frizer.", "معالجة الأسنان لا تخص مهنة الحلاقة."), quiz_answers: [
      { id: "friseur-b1-t34-a1", position: 1, text: "Zahnbehandlungen durchführen", is_correct: true },
      { id: "friseur-b1-t34-a2", position: 2, text: "Haare färben und schneiden", is_correct: false },
      { id: "friseur-b1-t34-a3", position: 3, text: "Kunden beraten", is_correct: false },
    ] },
    { id: "friseur-b1-t35", position: 35, kind: "single_choice", section: "test", prompt: "Was zeigt eine gute Kundenzufriedenheit langfristig für einen Salon?", explanation: "Kunden kommen öfter wieder und empfehlen den Salon weiter.", data: H("Zadovoljni klijenti se vracaju i preporucuju salon.", "Memnun müşteriler tekrar gelir ve salonu tavsiye eder.", "Задоволені клієнти повертаються і рекомендують салон.", "Clienții mulțumiți revin și recomandă salonul.", "الزبائن الراضون يعودون ويوصون بالصالون."), quiz_answers: [
      { id: "friseur-b1-t35-a1", position: 1, text: "Kunden kommen wieder und empfehlen den Salon.", is_correct: true },
      { id: "friseur-b1-t35-a2", position: 2, text: "Der Salon muss schließen.", is_correct: false },
      { id: "friseur-b1-t35-a3", position: 3, text: "Die Preise sinken automatisch.", is_correct: false },
    ] },
    { id: "friseur-b1-t36", position: 36, kind: "single_choice", section: "test", prompt: "Welcher Satz nutzt das Passiv im Präsens korrekt?", explanation: "„werden“ + Partizip II im Präsens.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t36-a1", position: 1, text: "Die Schere wird nach jedem Kunden desinfiziert.", is_correct: true },
      { id: "friseur-b1-t36-a2", position: 2, text: "Die Schere wird nach jedem Kunden desinfizieren.", is_correct: false },
      { id: "friseur-b1-t36-a3", position: 3, text: "Die Schere ist nach jedem Kunden desinfiziert werden.", is_correct: false },
    ] },
    { id: "friseur-b1-t37", position: 37, kind: "single_choice", section: "test", prompt: "Welcher Satz mit Konjunktiv II ist korrekt für eine höfliche Bitte?", explanation: "„Könnten Sie …?“ ist Konjunktiv II von „können“.", data: H("Konjunktiv II za uctivu molbu.", "Nazik rica için Konjunktiv II.", "Кон’юнктив II для ввічливого прохання.", "Conjunctiv II pentru o cerere politicoasă.", "الصيغة الشرطية الثانية للطلب المهذب."), quiz_answers: [
      { id: "friseur-b1-t37-a1", position: 1, text: "Könnten Sie das noch etwas kürzer schneiden?", is_correct: true },
      { id: "friseur-b1-t37-a2", position: 2, text: "Können Sie das noch etwas kürzer schneiden gekonnt?", is_correct: false },
      { id: "friseur-b1-t37-a3", position: 3, text: "Könntest das noch etwas kürzer Sie schneiden?", is_correct: false },
    ] },
    { id: "friseur-b1-t38", position: 38, kind: "gap", section: "test", prompt: "Das Produkt, ___ sie mir empfohlen hat, riecht sehr angenehm. (Relativpronomen)", explanation: "„das“ — Neutrum, Akkusativ.", data: H("Relativna zamjenica das za srednji rod.", "Nötr için das ilgi zamiri.", "Відносний займенник das для середнього роду.", "Pronumele relativ das pentru neutru.", "الضمير الموصول das للمحايد."), quiz_answers: [
      { id: "friseur-b1-t38-a1", position: 1, text: "das", is_correct: true },
    ] },
    { id: "friseur-b1-t39", position: 39, kind: "single_choice", section: "test", prompt: "Welcher Satz gibt eine Aussage korrekt in indirekter Form wieder?", explanation: "„Sie hat erklärt, dass …“ mit Verb am Ende.", data: H("Ovo piše u tekstu/dijalogu.", "Bu, metinde/diyalogda böyle geçiyor.", "Це написано в тексті/діалозі.", "Așa scrie în text/dialog.", "هذا مكتوب في النص/الحوار."), quiz_answers: [
      { id: "friseur-b1-t39-a1", position: 1, text: "Sie hat erklärt, dass die Behandlung eine Stunde dauert.", is_correct: true },
      { id: "friseur-b1-t39-a2", position: 2, text: "Sie hat erklärt, dass dauert die Behandlung eine Stunde.", is_correct: false },
      { id: "friseur-b1-t39-a3", position: 3, text: "Sie hat erklärt dass, die Behandlung eine Stunde dauert.", is_correct: false },
    ] },
    { id: "friseur-b1-t40", position: 40, kind: "single_choice", section: "test", prompt: "Wie endet die Geschichte insgesamt?", explanation: "Die Kundin ist zufrieden, bedankt sich und vereinbart einen weiteren Termin zur Pflege.", data: H("Na kraju je klijentkinja zadovoljna i dogovara novi termin.", "Sonunda müşteri memnun ve yeni bir randevu ayarlıyor.", "Наприкінці клієнтка задоволена і домовляється про новий запис.", "La final clienta e mulțumită și stabilește o nouă programare.", "في النهاية الزبونة راضية وتحدد موعدًا جديدًا."), quiz_answers: [
      { id: "friseur-b1-t40-a1", position: 1, text: "Sie ist zufrieden und vereinbart einen weiteren Termin.", is_correct: true },
      { id: "friseur-b1-t40-a2", position: 2, text: "Sie verlässt den Salon wütend.", is_correct: false },
      { id: "friseur-b1-t40-a3", position: 3, text: "Sie bekommt ihr Geld zurück und geht.", is_correct: false },
    ] },

    // ===== Sprache & Grammatik: zum Anklicken =====
    { id: "friseur-b1-g1", position: 1, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit obwohl (Konzessivsatz) ist korrekt gebaut?", explanation: "Verb steht am Ende des obwohl-Satzes.", data: H("Glagol ide na kraj obwohl-recenice.", "obwohl cümlesinde fiil sona gider.", "Дієслово стоїть у кінці речення з obwohl.", "Verbul stă la finalul propoziției cu obwohl.", "الفعل يأتي في نهاية جملة obwohl."), quiz_answers: [
      { id: "friseur-b1-g1-a1", position: 1, text: "Ich bin zufrieden, obwohl der Schnitt kürzer geworden ist.", is_correct: true },
      { id: "friseur-b1-g1-a2", position: 2, text: "Ich bin zufrieden, obwohl ist der Schnitt kürzer geworden.", is_correct: false },
      { id: "friseur-b1-g1-a3", position: 3, text: "Obwohl bin ich zufrieden, der Schnitt kürzer geworden ist.", is_correct: false },
    ] },
    { id: "friseur-b1-g2", position: 2, kind: "single_choice", section: "grammar", prompt: "Welcher Finalsatz mit damit ist korrekt?", explanation: "„damit“ bei unterschiedlichen Subjekten in Haupt- und Nebensatz.", data: H("damit kod razlicitih subjekata.", "Farklı özneler için damit.", "damit при різних підметах.", "damit la subiecte diferite.", "damit عند اختلاف الفاعلين."), quiz_answers: [
      { id: "friseur-b1-g2-a1", position: 1, text: "Sie zeigt mir den Spiegel, damit ich das Ergebnis sehen kann.", is_correct: true },
      { id: "friseur-b1-g2-a2", position: 2, text: "Sie zeigt mir den Spiegel, damit sehen kann ich das Ergebnis.", is_correct: false },
      { id: "friseur-b1-g2-a3", position: 3, text: "Damit ich sehen kann das Ergebnis, sie zeigt mir den Spiegel.", is_correct: false },
    ] },
    { id: "friseur-b1-g3", position: 3, kind: "single_choice", section: "grammar", prompt: "Welcher Satz mit nachdem drückt die Vorzeitigkeit korrekt aus?", explanation: "Plusquamperfekt im nachdem-Satz, Perfekt/Präsens im Hauptsatz.", data: H("Pluskvamperfekt u nachdem-recenici.", "nachdem cümlesinde geçmişin geçmişi.", "Давноминулий час у реченні з nachdem.", "Mai mult ca perfectul în propoziția cu nachdem.", "الماضي البعيد في جملة nachdem."), quiz_answers: [
      { id: "friseur-b1-g3-a1", position: 1, text: "Nachdem die Friseurin die Haare gewaschen hatte, begann sie zu schneiden.", is_correct: true },
      { id: "friseur-b1-g3-a2", position: 2, text: "Nachdem die Friseurin die Haare wäscht, begann sie zu schneiden.", is_correct: false },
      { id: "friseur-b1-g3-a3", position: 3, text: "Nachdem begann sie zu schneiden, die Friseurin die Haare gewaschen hatte.", is_correct: false },
    ] },
    { id: "friseur-b1-g4", position: 4, kind: "single_choice", section: "grammar", prompt: "Welcher Satz zeigt einen höflichen Wunsch im Konjunktiv II korrekt?", explanation: "„hätte gern“ ist eine übliche höfliche Wunschform.", data: H("hätte gern je uobicajena uctiva forma.", "hätte gern yaygın nazik bir dilek biçimidir.", "hätte gern - типова ввічлива форма побажання.", "hätte gern e o formă politicoasă obișnuită.", "hätte gern صيغة مهذبة شائعة للرغبة."), quiz_answers: [
      { id: "friseur-b1-g4-a1", position: 1, text: "Ich hätte gern einen dunkleren Farbton.", is_correct: true },
      { id: "friseur-b1-g4-a2", position: 2, text: "Ich habe gern einen dunkleren Farbton gehabt.", is_correct: false },
      { id: "friseur-b1-g4-a3", position: 3, text: "Ich hätte gerne haben einen dunkleren Farbton.", is_correct: false },
    ] },
    { id: "friseur-b1-g5", position: 5, kind: "single_choice", section: "grammar", prompt: "Welcher Satz benutzt das Vorgangspassiv im Präsens korrekt?", explanation: "„werden“ + Partizip II.", data: H("werden + particip II.", "werden + partizip II.", "werden + дієприкметник II.", "werden + participiu II.", "werden + التصريف الثالث."), quiz_answers: [
      { id: "friseur-b1-g5-a1", position: 1, text: "Die Haare werden zuerst gewaschen.", is_correct: true },
      { id: "friseur-b1-g5-a2", position: 2, text: "Die Haare wird zuerst gewaschen.", is_correct: false },
      { id: "friseur-b1-g5-a3", position: 3, text: "Die Haare werden zuerst waschen.", is_correct: false },
    ] },
    { id: "friseur-b1-g6", position: 6, kind: "single_choice", section: "grammar", prompt: "Welcher Relativsatz mit korrektem Pronomen im Dativ ist richtig?", explanation: "„mit der“ — feminin, Dativ (die Friseurin).", data: H("mit der -> zenski rod, dativ.", "mit der -> dişil, datif.", "mit der -> жіночий рід, давальний.", "mit der -> feminin, dativ.", "mit der -> مؤنث، حالة الجر."), quiz_answers: [
      { id: "friseur-b1-g6-a1", position: 1, text: "Die Friseurin, mit der ich gesprochen habe, ist erfahren.", is_correct: true },
      { id: "friseur-b1-g6-a2", position: 2, text: "Die Friseurin, mit den ich gesprochen habe, ist erfahren.", is_correct: false },
      { id: "friseur-b1-g6-a3", position: 3, text: "Die Friseurin, mit das ich gesprochen habe, ist erfahren.", is_correct: false },
    ] },
    { id: "friseur-b1-g7", position: 7, kind: "single_choice", section: "grammar", prompt: "Welcher Satz gibt eine Aussage korrekt in indirekter Rede (dass-Form) wieder?", explanation: "Verb am Ende des dass-Satzes.", data: H("Glagol na kraju dass-recenice.", "dass cümlesinin sonunda fiil.", "Дієслово в кінці речення з dass.", "Verbul la finalul propoziției cu dass.", "الفعل في نهاية جملة dass."), quiz_answers: [
      { id: "friseur-b1-g7-a1", position: 1, text: "Er hat gesagt, dass die Behandlung eine Stunde dauert.", is_correct: true },
      { id: "friseur-b1-g7-a2", position: 2, text: "Er hat gesagt, dass dauert die Behandlung eine Stunde.", is_correct: false },
      { id: "friseur-b1-g7-a3", position: 3, text: "Er hat gesagt dass die Behandlung dauert eine Stunde.", is_correct: false },
    ] },
    { id: "friseur-b1-g8", position: 8, kind: "single_choice", section: "grammar", prompt: "Welcher Satz kombiniert Wechselpräposition und Relativsatz korrekt?", explanation: "„auf dem“ — Position (wo?), Dativ, im Relativsatz.", data: H("Pozicija (gdje?) -> dativ u relativnoj recenici.", "Konum (nerede?) -> ilgi cümlesinde datif.", "Позиція (де?) -> давальний у відносному реченні.", "Poziție (unde?) -> dativ în propoziția relativă.", "الموقع (أين؟) -> حالة الجر في الجملة الموصولة."), quiz_answers: [
      { id: "friseur-b1-g8-a1", position: 1, text: "Der Stuhl, auf dem ich sitze, ist neu.", is_correct: true },
      { id: "friseur-b1-g8-a2", position: 2, text: "Der Stuhl, auf den ich sitze, ist neu.", is_correct: false },
      { id: "friseur-b1-g8-a3", position: 3, text: "Der Stuhl, auf die ich sitze, ist neu.", is_correct: false },
    ] },

    // ===== Wo ist was? =====
    { id: "friseur-b1-p1", position: 1, kind: "single_choice", section: "places", prompt: "Der Stuhl, ___ dem die Kundin sitzt, lässt sich in der Höhe verstellen. Welche Präposition passt?", explanation: "„auf“ mit Dativ beschreibt Position: worauf sie sitzt.", data: H("Pozicija (na cemu sjedi) -> dativ.", "Konum (üstünde oturduğu) -> datif.", "Позиція (на чому сидить) -> давальний.", "Poziție (pe ce stă) -> dativ.", "الموقع (على ماذا تجلس) -> حالة الجر."), quiz_answers: [
      { id: "friseur-b1-p1-a1", position: 1, text: "auf", is_correct: true },
      { id: "friseur-b1-p1-a2", position: 2, text: "unter", is_correct: false },
      { id: "friseur-b1-p1-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "friseur-b1-p2", position: 2, kind: "single_choice", section: "places", prompt: "Die Produkte werden in ein Regal gestellt, das ___ dem Spiegel steht. Welche Präposition passt?", explanation: "„neben“ beschreibt eine Position direkt daneben.", data: H("„neben“ znaci pored necega.", "„neben“ bir seyin yaninda anlamina gelir.", "„neben“ означае поруч із чимось.", "„neben“ inseamna langa ceva.", "„neben“ تعني بجانب شيء ما."), quiz_answers: [
      { id: "friseur-b1-p2-a1", position: 1, text: "neben", is_correct: true },
      { id: "friseur-b1-p2-a2", position: 2, text: "unter", is_correct: false },
      { id: "friseur-b1-p2-a3", position: 3, text: "über", is_correct: false },
    ] },
    { id: "friseur-b1-p3", position: 3, kind: "gap", section: "places", prompt: "Die Friseurin stellt den Wagen mit den Werkzeugen ___ den Stuhl. (wohin? neben)", explanation: "Bewegung (wohin?) → Akkusativ: „neben den Stuhl“.", data: H("Kretanje -> akuzativ.", "Hareket -> akuzatif.", "Рух -> знахідний.", "Mișcare -> acuzativ.", "الحركة -> حالة المفعول."), quiz_answers: [
      { id: "friseur-b1-p3-a1", position: 1, text: "neben", is_correct: true },
    ] },
    { id: "friseur-b1-p4", position: 4, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo steht der Verträglichkeitstest-Bereich im Salon?", explanation: "In der Nähe des Empfangs, zwischen der Kasse und dem Wartebereich.", data: H("Pogledaj sliku: prostor za test je blizu recepcije.", "Resme bak: test alanı resepsiyona yakın.", "Подивись на малюнок: зона тесту біля рецепції.", "Uită-te la imagine: zona testului e lângă recepție.", "انظر إلى الصورة: منطقة الاختبار قرب الاستقبال."), quiz_answers: [
      { id: "friseur-b1-p4-a1", position: 1, text: "zwischen der Kasse und dem Wartebereich", is_correct: true },
      { id: "friseur-b1-p4-a2", position: 2, text: "unter dem Waschbecken", is_correct: false },
      { id: "friseur-b1-p4-a3", position: 3, text: "hinter dem Spiegel", is_correct: false },
    ] },
    { id: "friseur-b1-p5", position: 5, kind: "single_choice", section: "places", prompt: "Der Kunde, der auf dem Stuhl ___ dem Spiegel sitzt, wartet auf die Farbe. Welche Präposition passt?", explanation: "„vor“ mit Dativ: Position, wo er sitzt.", data: H("Pozicija (gdje sjedi) -> dativ.", "Konum (nerede oturuyor) -> datif.", "Позиція (де сидить) -> давальний.", "Poziție (unde stă) -> dativ.", "الموقع (أين يجلس) -> حالة الجر."), quiz_answers: [
      { id: "friseur-b1-p5-a1", position: 1, text: "vor", is_correct: true },
      { id: "friseur-b1-p5-a2", position: 2, text: "unter", is_correct: false },
      { id: "friseur-b1-p5-a3", position: 3, text: "zwischen", is_correct: false },
    ] },
    { id: "friseur-b1-p6", position: 6, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wohin legt die Friseurin das benutzte Handtuch nach der Behandlung?", explanation: "In den Wäschekorb, der unter dem Regal steht.", data: H("Koristeni peskir se stavlja u kos za rublje.", "Kullanılmış havlu çamaşır sepetine konur.", "Використаний рушник кладуть у кошик для білизни.", "Prosopul folosit se pune în coșul de rufe.", "توضع المنشفة المستعملة في سلة الغسيل."), quiz_answers: [
      { id: "friseur-b1-p6-a1", position: 1, text: "in den Wäschekorb", is_correct: true },
      { id: "friseur-b1-p6-a2", position: 2, text: "auf den Boden", is_correct: false },
      { id: "friseur-b1-p6-a3", position: 3, text: "in die Schublade", is_correct: false },
    ] },
    { id: "friseur-b1-p7", position: 7, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo befindet sich der Empfangstisch im Verhältnis zum Eingang?", explanation: "Direkt neben dem Eingang, gut sichtbar.", data: H("Recepcija je odmah pored ulaza.", "Resepsiyon giriş kapısının hemen yanındadır.", "Рецепція одразу біля входу.", "Recepția este chiar lângă intrare.", "الاستقبال بجانب المدخل مباشرة."), quiz_answers: [
      { id: "friseur-b1-p7-a1", position: 1, text: "direkt neben dem Eingang", is_correct: true },
      { id: "friseur-b1-p7-a2", position: 2, text: "im Keller", is_correct: false },
      { id: "friseur-b1-p7-a3", position: 3, text: "hinter dem Salon", is_correct: false },
    ] },
    { id: "friseur-b1-p8", position: 8, kind: "gap", section: "places", prompt: "Schau dir das Bild an: Der neue Farbkatalog liegt ___ dem Empfangstisch. (auf)", explanation: "Position (wo?) → Dativ: „auf dem Empfangstisch“.", data: H("Katalog boja je na recepcijskom stolu.", "Renk kataloğu resepsiyon masasında.", "Каталог кольорів на рецепційному столі.", "Catalogul de culori e pe masa de recepție.", "كتالوج الألوان على طاولة الاستقبال."), quiz_answers: [
      { id: "friseur-b1-p8-a1", position: 1, text: "auf", is_correct: true },
    ] },
    { id: "friseur-b1-p9", position: 9, kind: "single_choice", section: "places", prompt: "Die Friseurin stellt die Farbschale ___ das kleine Regal neben dem Stuhl. Welche Form passt?", explanation: "Bewegung (wohin?) → Akkusativ: „auf das Regal“.", data: H("Kretanje -> akuzativ.", "Hareket -> akuzatif.", "Рух -> знахідний.", "Mișcare -> acuzativ.", "الحركة -> حالة المفعول."), quiz_answers: [
      { id: "friseur-b1-p9-a1", position: 1, text: "auf", is_correct: true },
      { id: "friseur-b1-p9-a2", position: 2, text: "unter", is_correct: false },
      { id: "friseur-b1-p9-a3", position: 3, text: "hinter", is_correct: false },
    ] },
    { id: "friseur-b1-p10", position: 10, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo hängt die Preisliste, die alle Kunden lesen können?", explanation: "An der Wand, in der Nähe der Kasse.", data: H("Cjenovnik visi na zidu blizu kase.", "Fiyat listesi kasanın yakınındaki duvarda asılı.", "Прейскурант висить на стіні біля каси.", "Lista de prețuri atârnă pe perete lângă casă.", "قائمة الأسعار معلقة على الجدار قرب الصندوق.") , quiz_answers: [
      { id: "friseur-b1-p10-a1", position: 1, text: "an der Wand, in der Nähe der Kasse", is_correct: true },
      { id: "friseur-b1-p10-a2", position: 2, text: "unter dem Stuhl", is_correct: false },
      { id: "friseur-b1-p10-a3", position: 3, text: "in der Schublade", is_correct: false },
    ] },
    { id: "friseur-b1-p11", position: 11, kind: "gap", section: "places", prompt: "Der Kunde, der ___ dem Wartebereich sitzt, liest eine Zeitschrift. (wo? in)", explanation: "Position (wo?) → Dativ: „in dem Wartebereich“.", data: H("Pozicija -> dativ.", "Konum -> datif.", "Позиція -> давальний.", "Poziție -> dativ.", "الموقع -> حالة الجر."), quiz_answers: [
      { id: "friseur-b1-p11-a1", position: 1, text: "in", is_correct: true },
    ] },
    { id: "friseur-b1-p12", position: 12, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo wird die frisch gefärbte Kundin hingesetzt, damit die Farbe einwirken kann?", explanation: "Unter eine spezielle Wärmehaube, die über dem Stuhl hängt.", data: H("Sjedi ispod posebne kape za toplinu.", "Özel bir ısı başlığının altına oturur.", "Сидить під спеціальним теплим ковпаком.", "Stă sub o cască specială de căldură.", "تجلس تحت غطاء حراري خاص.") , quiz_answers: [
      { id: "friseur-b1-p12-a1", position: 1, text: "unter eine Wärmehaube", is_correct: true },
      { id: "friseur-b1-p12-a2", position: 2, text: "neben die Tür", is_correct: false },
      { id: "friseur-b1-p12-a3", position: 3, text: "auf den Boden", is_correct: false },
    ] },
    { id: "friseur-b1-p13", position: 13, kind: "single_choice", section: "places", prompt: "Der Wäschekorb steht ___ dem Regal. Welche Präposition passt am besten?", explanation: "„unter“ beschreibt eine Position darunter.", data: H("„unter“ znaci ispod necega.", "„unter“ bir seyin altinda anlamina gelir.", "„unter“ означае пiд чимось.", "„unter“ inseamna sub ceva.", "„unter“ تعني تحت شيء ما."), quiz_answers: [
      { id: "friseur-b1-p13-a1", position: 1, text: "unter", is_correct: true },
      { id: "friseur-b1-p13-a2", position: 2, text: "über", is_correct: false },
      { id: "friseur-b1-p13-a3", position: 3, text: "vor", is_correct: false },
    ] },
    { id: "friseur-b1-p14", position: 14, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wohin bringt die Friseurin die Kundin, nachdem die Farbe eingewirkt hat?", explanation: "Zurück zum Waschbecken, um die Farbe auszuspülen.", data: H("Klijentkinja se vraca do umivaonika da se ispere boja.", "Müşteri, boyayı durulamak için lavaboya geri götürülür.", "Клієнтку повертають до раковини, щоб змити фарбу.", "Clienta e dusă înapoi la chiuvetă pentru a clăti culoarea.", "تُعاد الزبونة إلى الحوض لشطف اللون.") , quiz_answers: [
      { id: "friseur-b1-p14-a1", position: 1, text: "zurück zum Waschbecken", is_correct: true },
      { id: "friseur-b1-p14-a2", position: 2, text: "zur Kasse", is_correct: false },
      { id: "friseur-b1-p14-a3", position: 3, text: "zum Ausgang", is_correct: false },
    ] },
    { id: "friseur-b1-p15", position: 15, kind: "single_choice", section: "places", prompt: "Schau dir das Bild an: Wo befinden sich die Fachbücher über neue Techniken, die die Friseurin manchmal liest?", explanation: "Im kleinen Regal im Pausenraum hinter dem Empfang.", data: H("Strucne knjige su na polici u sobi za pauzu.", "Uzmanlık kitapları mola odasındaki rafta.", "Фахові книги на полиці в кімнаті відпочинку.", "Cărțile de specialitate sunt pe raftul din camera de pauză.", "الكتب المتخصصة على الرف في غرفة الاستراحة.") , quiz_answers: [
      { id: "friseur-b1-p15-a1", position: 1, text: "im Regal im Pausenraum", is_correct: true },
      { id: "friseur-b1-p15-a2", position: 2, text: "unter dem Frisierstuhl", is_correct: false },
      { id: "friseur-b1-p15-a3", position: 3, text: "in der Kasse", is_correct: false },
    ] },

    // ===== Dialog bauen =====
    { id: "friseur-b1-b1", position: 1, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 1 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Bitte um Beratung → Frage nach Störendem → Vorschlag → Zustimmung zur mutigen Wahl → Verträglichkeitstest.", data: { items: [
      "Kunde: Guten Tag, ich hätte gern eine ausführliche Beratung, bevor wir irgendetwas schneiden.",
      "Friseurin: Erzählen Sie mir, was Sie an Ihrer aktuellen Frisur stört.",
      "Friseurin: Wie wäre es mit mehr Volumen und einer neuen Farbe?",
      "Kunde: Nein, ich glaube, ich sollte diesmal wirklich mutig sein.",
      "Friseurin: Bevor wir anfangen, sollten wir noch einen Verträglichkeitstest für die Farbe machen.",
    ] }, quiz_answers: [] },
    { id: "friseur-b1-b2", position: 2, kind: "dialog_order", section: "dialog_builder", prompt: "Bringe Dialog 2 in die richtige Reihenfolge (Anfang und Ende sind klar).", explanation: "Reihenfolge: Reklamation ansprechen → Problem benennen → Lösung anbieten → Termin vereinbaren → Abschied.", data: { items: [
      "Kunde: Entschuldigung, könnten wir kurz über das Ergebnis sprechen? Es entspricht nicht ganz meinen Erwartungen.",
      "Kunde: Der Ansatz, der eigentlich dunkler bleiben sollte, wurde leider mitgefärbt.",
      "Friseurin: Selbstverständlich, das machen wir gern, und wir übernehmen die Kosten vollständig.",
      "Friseurin: Sollen wir gleich morgen einen Termin dafür finden?",
      "Kunde: Das denke ich auch. Bis morgen dann, und nochmals vielen Dank.",
    ] }, quiz_answers: [] },
  ],
} as const;
