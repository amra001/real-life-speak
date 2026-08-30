/**
 * Füllt die beiden unvollständigen Lektionen (Baustelle B1, Vorstellungsgespräch B2)
 * mit Szenen, Wortschatz und Dialogen. Gibt SQL auf stdout aus:
 *   bun scripts/seed-missing-lessons.ts | psql "$SUPABASE_DB_URL"
 */
const L_BAU = "44444444-4444-4444-4444-444444444444";
const L_VOR = "55555555-5555-5555-5555-555555555555";
const q = (x: string) => "'" + x.replace(/'/g, "''") + "'";
const j = (o: unknown) => q(JSON.stringify(o));
type T = { bks: string; tr: string; uk: string; ro: string; ar: string };
type S = [string, T];
type V = [string, string, string, string, string, T];
type D = [number, string, string, string, string, T];

const bauScenes: S[] = [
 ["Marko kommt früh am Morgen zur Baustelle.",{bks:"Marko rano ujutro dolazi na gradilište.",tr:"Marko sabah erkenden şantiyeye gelir.",uk:"Марко рано вранці приходить на будмайданчик.",ro:"Marko vine dimineața devreme pe șantier.",ar:"يصل ماركو إلى ورشة البناء في الصباح الباكر."}],
 ["Am Tor zeigt er seinen Ausweis.",{bks:"Na kapiji pokazuje svoju iskaznicu.",tr:"Kapıda kimliğini gösterir.",uk:"Біля воріт він показує посвідчення.",ro:"La poartă își arată legitimația.",ar:"عند البوابة يُظهر بطاقته."}],
 ["Im Container zieht er die Arbeitskleidung an.",{bks:"U kontejneru oblači radnu odjeću.",tr:"Konteynerde iş kıyafetini giyer.",uk:"У побутівці він вдягає робочий одяг.",ro:"În container își pune hainele de lucru.",ar:"في الحاوية يرتدي ملابس العمل."}],
 ["Helm, Weste und Sicherheitsschuhe sind Pflicht.",{bks:"Kaciga, prsluk i zaštitne cipele su obavezni.",tr:"Kask, yelek ve iş ayakkabısı zorunludur.",uk:"Каска, жилет і захисне взуття обов'язкові.",ro:"Casca, vesta și bocancii sunt obligatorii.",ar:"الخوذة والسترة وحذاء الأمان إلزامية."}],
 ["Der Polier erklärt den Ablauf für heute.",{bks:"Poslovođa objašnjava današnji plan.",tr:"Ustabaşı bugünkü işleyişi anlatır.",uk:"Бригадир пояснює план на сьогодні.",ro:"Șeful de echipă explică programul de azi.",ar:"يشرح رئيس العمال خطة اليوم."}],
 ["Marko fragt nach, weil er eine Anweisung nicht versteht.",{bks:"Marko pita jer ne razumije jednu uputu.",tr:"Marko bir talimatı anlamadığı için sorar.",uk:"Марко перепитує, бо не зрозумів вказівку.",ro:"Marko întreabă pentru că nu a înțeles o instrucțiune.",ar:"يسأل ماركو لأنه لم يفهم تعليمة."}],
 ["Er holt Bohrmaschine und Werkzeug aus dem Lager.",{bks:"Uzima bušilicu i alat iz skladišta.",tr:"Depodan matkabı ve aletleri alır.",uk:"Він бере дриль та інструменти зі складу.",ro:"Ia bormașina și sculele din depozit.",ar:"يأخذ المثقاب والأدوات من المخزن."}],
 ["Zu zweit tragen sie die schweren Platten.",{bks:"Udvoje nose teške ploče.",tr:"İki kişi ağır levhaları taşır.",uk:"Удвох вони несуть важкі плити.",ro:"În doi cară plăcile grele.",ar:"يحملان الألواح الثقيلة معًا."}],
 ["Auf dem Gerüst arbeitet er langsam und konzentriert.",{bks:"Na skeli radi polako i koncentrirano.",tr:"İskelede yavaş ve dikkatli çalışır.",uk:"На риштуванні він працює повільно й зосереджено.",ro:"Pe schelă lucrează încet și concentrat.",ar:"يعمل على السقالة ببطء وتركيز."}],
 ["Ein Kollege meldet einen Defekt an der Maschine.",{bks:"Kolega prijavljuje kvar na mašini.",tr:"Bir iş arkadaşı makinede arıza bildirir.",uk:"Колега повідомляє про несправність машини.",ro:"Un coleg raportează o defecțiune la mașină.",ar:"يبلّغ زميل عن عطل في الآلة."}],
 ["Der Polier sperrt den Bereich sofort ab.",{bks:"Poslovođa odmah zatvara to područje.",tr:"Ustabaşı bölgeyi hemen kapatır.",uk:"Бригадир одразу перекриває ділянку.",ro:"Șeful de echipă închide imediat zona.",ar:"يغلق رئيس العمال المنطقة فورًا."}],
 ["In der Pause trinken alle Kaffee und reden kurz.",{bks:"Na pauzi svi piju kafu i kratko razgovaraju.",tr:"Molada herkes kahve içer ve kısaca sohbet eder.",uk:"У перерві всі п'ють каву й коротко спілкуються.",ro:"În pauză toți beau cafea și vorbesc puțin.",ar:"في الاستراحة يشربون القهوة ويتحدثون قليلًا."}],
 ["Am Nachmittag räumen sie die Werkzeuge auf.",{bks:"Poslijepodne pospremaju alat.",tr:"Öğleden sonra aletleri toplarlar.",uk:"По обіді вони прибирають інструменти.",ro:"După-amiaza strâng sculele.",ar:"بعد الظهر يرتّبون الأدوات."}],
 ["Marko trägt die geleisteten Stunden in die Liste ein.",{bks:"Marko upisuje odrađene sate u listu.",tr:"Marko çalıştığı saatleri listeye yazar.",uk:"Марко записує відпрацьовані години у список.",ro:"Marko notează orele lucrate în listă.",ar:"يسجّل ماركو ساعات العمل في القائمة."}],
];
const bauVocab: V[] = [
 ["die Baustelle","die","die Baustellen","Nomen","Auf der Baustelle ist immer viel los.",{bks:"gradilište",tr:"şantiye",uk:"будмайданчик",ro:"șantier",ar:"ورشة البناء"}],
 ["der Helm","der","die Helme","Nomen","Ohne Helm darfst du nicht auf die Baustelle.",{bks:"kaciga",tr:"kask",uk:"каска",ro:"cască",ar:"خوذة"}],
 ["die Warnweste","die","die Warnwesten","Nomen","Die Warnweste muss man immer tragen.",{bks:"reflektirajući prsluk",tr:"reflektörlü yelek",uk:"світловідбивний жилет",ro:"vestă reflectorizantă",ar:"سترة تحذيرية"}],
 ["der Sicherheitsschuh","der","die Sicherheitsschuhe","Nomen","Der Sicherheitsschuh schützt den Fuß.",{bks:"zaštitna cipela",tr:"iş ayakkabısı",uk:"захисне взуття",ro:"bocanc de protecție",ar:"حذاء أمان"}],
 ["das Gerüst","das","die Gerüste","Nomen","Das Gerüst ist heute gesperrt.",{bks:"skela",tr:"iskele",uk:"риштування",ro:"schelă",ar:"سقالة"}],
 ["die Bohrmaschine","die","die Bohrmaschinen","Nomen","Die Bohrmaschine ist im Container.",{bks:"bušilica",tr:"matkap",uk:"дриль",ro:"bormașină",ar:"مثقاب"}],
 ["das Werkzeug","das","die Werkzeuge","Nomen","Bring bitte das Werkzeug mit.",{bks:"alat",tr:"alet",uk:"інструмент",ro:"sculă",ar:"أداة"}],
 ["der Polier","der","die Poliere","Nomen","Der Polier erklärt die Arbeit.",{bks:"poslovođa",tr:"ustabaşı",uk:"бригадир",ro:"șef de echipă",ar:"رئيس العمال"}],
 ["die Anweisung","die","die Anweisungen","Nomen","Ich habe die Anweisung verstanden.",{bks:"uputa",tr:"talimat",uk:"вказівка",ro:"instrucțiune",ar:"تعليمة"}],
 ["die Schicht","die","die Schichten","Nomen","Meine Schicht beginnt um sechs.",{bks:"smjena",tr:"vardiya",uk:"зміна",ro:"tură",ar:"وردية"}],
 ["die Pause","die","die Pausen","Nomen","Um zehn machen wir Pause.",{bks:"pauza",tr:"mola",uk:"перерва",ro:"pauză",ar:"استراحة"}],
 ["der Kollege","der","die Kollegen","Nomen","Mein Kollege hilft mir beim Tragen.",{bks:"kolega",tr:"iş arkadaşı",uk:"колега",ro:"coleg",ar:"زميل"}],
 ["der Unfall","der","die Unfälle","Nomen","Zum Glück gab es keinen Unfall.",{bks:"nesreća",tr:"kaza",uk:"нещасний випадок",ro:"accident",ar:"حادث"}],
 ["die Gefahr","die","die Gefahren","Nomen","Hier besteht Gefahr durch Absturz.",{bks:"opasnost",tr:"tehlike",uk:"небезпека",ro:"pericol",ar:"خطر"}],
 ["der Defekt","der","die Defekte","Nomen","Der Defekt an der Maschine ist gemeldet.",{bks:"kvar",tr:"arıza",uk:"несправність",ro:"defecțiune",ar:"عطل"}],
 ["die Leiter","die","die Leitern","Nomen","Halt bitte die Leiter fest.",{bks:"ljestve",tr:"merdiven",uk:"драбина",ro:"scară",ar:"سلم"}],
 ["der Bauleiter","der","die Bauleiter","Nomen","Der Bauleiter kontrolliert die Arbeit.",{bks:"voditelj gradnje",tr:"şantiye şefi",uk:"керівник будівництва",ro:"diriginte de șantier",ar:"مدير الموقع"}],
 ["das Material","das","die Materialien","Nomen","Das Material kommt morgen.",{bks:"materijal",tr:"malzeme",uk:"матеріал",ro:"material",ar:"مواد"}],
 ["die Stunde","die","die Stunden","Nomen","Ich trage die Stunden in die Liste ein.",{bks:"sat",tr:"saat",uk:"година",ro:"oră",ar:"ساعة"}],
 ["der Feierabend","der","die Feierabende","Nomen","Um sechzehn Uhr ist Feierabend.",{bks:"kraj radnog dana",tr:"paydos",uk:"кінець робочого дня",ro:"sfârșitul programului",ar:"نهاية الدوام"}],
];
const bauDialog: D[] = [
 [1,"Arbeitsanweisung am Morgen","A","Polier","Guten Morgen, Marko. Alles fit heute?",{bks:"Dobro jutro, Marko. Jesi li spreman danas?",tr:"Günaydın Marko. Bugün formda mısın?",uk:"Доброго ранку, Марко. Готовий сьогодні?",ro:"Bună dimineața, Marko. Ești în formă azi?",ar:"صباح الخير ماركو. هل أنت جاهز اليوم؟"}],
 [1,"Arbeitsanweisung am Morgen","B","Marko","Ja, alles gut. Was machen wir zuerst?",{bks:"Da, sve u redu. Šta radimo prvo?",tr:"Evet, iyiyim. Önce ne yapıyoruz?",uk:"Так, усе гаразд. Що робимо спершу?",ro:"Da, totul bine. Ce facem mai întâi?",ar:"نعم، كل شيء بخير. ماذا نفعل أولًا؟"}],
 [1,"Arbeitsanweisung am Morgen","A","Polier","Ihr baut das Gerüst an der Nordseite weiter.",{bks:"Nastavljate skelu na sjevernoj strani.",tr:"Kuzey tarafta iskeleyi devam ettiriyorsunuz.",uk:"Ви продовжуєте риштування з північного боку.",ro:"Continuați schela pe partea de nord.",ar:"تكملون السقالة في الجهة الشمالية."}],
 [1,"Arbeitsanweisung am Morgen","B","Marko","Entschuldigung, können Sie das noch einmal sagen?",{bks:"Izvinite, možete li to ponoviti?",tr:"Pardon, tekrar söyler misiniz?",uk:"Вибачте, можете повторити?",ro:"Scuzați, puteți repeta?",ar:"عفوًا، هل يمكنك أن تعيد؟"}],
 [1,"Arbeitsanweisung am Morgen","A","Polier","Klar: Gerüst weiterbauen, dort hinten an der Wand.",{bks:"Naravno: nastavite skelu, tamo kod zida.",tr:"Tabii: iskeleyi orada duvarda devam ettirin.",uk:"Звісно: продовжуйте риштування там біля стіни.",ro:"Sigur: continuați schela acolo, lângă perete.",ar:"بالطبع: أكملوا السقالة هناك عند الجدار."}],
 [1,"Arbeitsanweisung am Morgen","B","Marko","Alles klar. Brauchen wir das große Werkzeug?",{bks:"U redu. Trebamo li veliki alat?",tr:"Anlaşıldı. Büyük alete ihtiyacımız var mı?",uk:"Зрозуміло. Чи потрібен великий інструмент?",ro:"Am înțeles. Avem nevoie de sculele mari?",ar:"مفهوم. هل نحتاج الأدوات الكبيرة؟"}],
 [1,"Arbeitsanweisung am Morgen","A","Polier","Ja, und denk an Helm und Warnweste.",{bks:"Da, i ne zaboravi kacigu i prsluk.",tr:"Evet, kask ve yeleği unutma.",uk:"Так, і не забудь каску та жилет.",ro:"Da, și nu uita casca și vesta.",ar:"نعم، ولا تنسَ الخوذة والسترة."}],
 [2,"Defekt melden","A","Marko","Chef, die Bohrmaschine läuft nicht mehr.",{bks:"Šefe, bušilica više ne radi.",tr:"Şef, matkap artık çalışmıyor.",uk:"Шефе, дриль більше не працює.",ro:"Șefu', bormașina nu mai merge.",ar:"يا رئيس، المثقاب لم يعد يعمل."}],
 [2,"Defekt melden","B","Polier","Seit wann geht sie nicht mehr?",{bks:"Od kada ne radi?",tr:"Ne zamandır çalışmıyor?",uk:"Відколи вона не працює?",ro:"De când nu mai merge?",ar:"منذ متى لا يعمل؟"}],
 [2,"Defekt melden","A","Marko","Seit heute Morgen. Sie wird sehr heiß.",{bks:"Od jutros. Jako se zagrijava.",tr:"Bu sabahtan beri. Çok ısınıyor.",uk:"Від сьогоднішнього ранку. Вона дуже гріється.",ro:"De azi-dimineață. Se încinge tare.",ar:"منذ هذا الصباح. تسخن كثيرًا."}],
 [2,"Defekt melden","B","Polier","Dann sofort ausschalten, das ist gefährlich.",{bks:"Onda odmah isključi, to je opasno.",tr:"O zaman hemen kapat, tehlikeli.",uk:"Тоді негайно вимкни, це небезпечно.",ro:"Atunci oprește imediat, e periculos.",ar:"إذن أطفئه فورًا، هذا خطر."}],
 [2,"Defekt melden","A","Marko","Habe ich schon. Soll ich sie ins Lager bringen?",{bks:"Već jesam. Da je odnesem u skladište?",tr:"Kapattım bile. Depoya götüreyim mi?",uk:"Уже вимкнув. Віднести її на склад?",ro:"Am făcut deja. S-o duc în depozit?",ar:"فعلت ذلك. هل آخذه إلى المخزن؟"}],
 [2,"Defekt melden","B","Polier","Ja, und schreib einen Zettel: Defekt, nicht benutzen.",{bks:"Da, i napiši ceduljicu: kvar, ne koristiti.",tr:"Evet, bir not yaz: arızalı, kullanmayın.",uk:"Так, і напиши записку: несправно, не використовувати.",ro:"Da, și scrie un bilet: defect, a nu se folosi.",ar:"نعم، واكتب ورقة: عطل، لا تستخدموه."}],
 [2,"Defekt melden","A","Marko","Mache ich. Nehme ich so lange die kleine Maschine?",{bks:"Hoću. Da u međuvremenu uzmem malu mašinu?",tr:"Yaparım. Bu arada küçük makineyi alayım mı?",uk:"Зроблю. Взяти поки що малу машину?",ro:"Așa fac. Iau între timp mașina mică?",ar:"سأفعل. هل آخذ الآلة الصغيرة مؤقتًا؟"}],
];

const vorScenes: S[] = [
 ["Amira liest die Stellenanzeige noch einmal in Ruhe.",{bks:"Amira još jednom u miru čita oglas za posao.",tr:"Amira iş ilanını sakince bir kez daha okur.",uk:"Аміра ще раз спокійно читає оголошення про роботу.",ro:"Amira citește încă o dată anunțul de angajare.",ar:"تقرأ أميرة إعلان الوظيفة مرة أخرى بهدوء."}],
 ["Sie bereitet Antworten auf typische Fragen vor.",{bks:"Priprema odgovore na tipična pitanja.",tr:"Tipik sorulara cevaplar hazırlar.",uk:"Вона готує відповіді на типові запитання.",ro:"Pregătește răspunsuri la întrebări tipice.",ar:"تحضّر إجابات للأسئلة المعتادة."}],
 ["Am Morgen wählt sie eine gepflegte, schlichte Kleidung.",{bks:"Ujutro bira urednu, jednostavnu odjeću.",tr:"Sabah bakımlı, sade bir kıyafet seçer.",uk:"Вранці вона обирає охайний, простий одяг.",ro:"Dimineața alege ținută îngrijită și simplă.",ar:"في الصباح تختار ملابس أنيقة وبسيطة."}],
 ["Sie kommt zehn Minuten zu früh in die Firma.",{bks:"Dolazi deset minuta ranije u firmu.",tr:"Şirkete on dakika erken gelir.",uk:"Вона приходить у фірму на десять хвилин раніше.",ro:"Ajunge la firmă cu zece minute mai devreme.",ar:"تصل إلى الشركة قبل عشر دقائق."}],
 ["Am Empfang meldet sie sich freundlich an.",{bks:"Na recepciji se ljubazno najavljuje.",tr:"Resepsiyonda kibarca kendini bildirir.",uk:"На ресепшені вона ввічливо повідомляє про себе.",ro:"La recepție se anunță politicos.",ar:"عند الاستقبال تعرّف عن نفسها بلطف."}],
 ["Im Besprechungsraum begrüßt sie das Team mit Handschlag.",{bks:"U sali za sastanke pozdravlja tim rukovanjem.",tr:"Toplantı odasında ekibi el sıkışarak selamlar.",uk:"У переговорній вона вітається з командою рукостисканням.",ro:"În sala de ședințe salută echipa cu o strângere de mână.",ar:"في قاعة الاجتماعات تحيّي الفريق بالمصافحة."}],
 ["Sie stellt sich kurz und klar vor.",{bks:"Predstavlja se kratko i jasno.",tr:"Kendini kısa ve net tanıtır.",uk:"Вона коротко й чітко представляється.",ro:"Se prezintă scurt și clar.",ar:"تعرّف عن نفسها باختصار ووضوح."}],
 ["Sie erklärt ihre Berufserfahrung mit konkreten Beispielen.",{bks:"Objašnjava svoje radno iskustvo konkretnim primjerima.",tr:"İş deneyimini somut örneklerle anlatır.",uk:"Вона пояснює свій досвід конкретними прикладами.",ro:"Explică experiența profesională cu exemple concrete.",ar:"تشرح خبرتها المهنية بأمثلة ملموسة."}],
 ["Auf die Frage nach Schwächen antwortet sie ehrlich.",{bks:"Na pitanje o slabostima odgovara iskreno.",tr:"Zayıf yönleri sorusuna dürüstçe cevap verir.",uk:"На питання про слабкі сторони вона відповідає чесно.",ro:"La întrebarea despre slăbiciuni răspunde sincer.",ar:"تجيب بصدق عن سؤال نقاط الضعف."}],
 ["Sie spricht über Teamarbeit und Konflikte im Alltag.",{bks:"Govori o timskom radu i svakodnevnim konfliktima.",tr:"Takım çalışması ve günlük anlaşmazlıklardan söz eder.",uk:"Вона говорить про командну роботу та конфлікти.",ro:"Vorbește despre munca în echipă și conflicte.",ar:"تتحدث عن العمل الجماعي والخلافات اليومية."}],
 ["Der Personalleiter erklärt Arbeitszeiten und Aufgaben.",{bks:"Voditelj kadrovske objašnjava radno vrijeme i zadatke.",tr:"İnsan kaynakları müdürü çalışma saatlerini ve görevleri anlatır.",uk:"Керівник кадрів пояснює графік і завдання.",ro:"Directorul de personal explică programul și sarcinile.",ar:"يشرح مدير الموارد البشرية أوقات العمل والمهام."}],
 ["Amira stellt eigene Fragen zur Einarbeitung.",{bks:"Amira postavlja svoja pitanja o uvođenju u posao.",tr:"Amira işe alıştırma hakkında sorular sorar.",uk:"Аміра ставить власні питання про адаптацію.",ro:"Amira pune întrebări despre perioada de acomodare.",ar:"تطرح أميرة أسئلة عن فترة التدريب."}],
 ["Zum Schluss sprechen sie über Gehalt und Vertrag.",{bks:"Na kraju razgovaraju o plati i ugovoru.",tr:"Sonunda maaş ve sözleşmeyi konuşurlar.",uk:"Наостанок вони говорять про зарплату та договір.",ro:"La final discută despre salariu și contract.",ar:"في النهاية يتحدثان عن الراتب والعقد."}],
 ["Sie verabschiedet sich und bedankt sich für das Gespräch.",{bks:"Pozdravlja se i zahvaljuje na razgovoru.",tr:"Vedalaşır ve görüşme için teşekkür eder.",uk:"Вона прощається і дякує за розмову.",ro:"Își ia rămas-bun și mulțumește pentru discuție.",ar:"تودّعهم وتشكرهم على المقابلة."}],
];
const vorVocab: V[] = [
 ["das Vorstellungsgespräch","das","die Vorstellungsgespräche","Nomen","Das Vorstellungsgespräch dauert eine Stunde.",{bks:"razgovor za posao",tr:"iş görüşmesi",uk:"співбесіда",ro:"interviu de angajare",ar:"مقابلة عمل"}],
 ["die Bewerbung","die","die Bewerbungen","Nomen","Meine Bewerbung habe ich online geschickt.",{bks:"prijava za posao",tr:"başvuru",uk:"заявка",ro:"candidatură",ar:"طلب توظيف"}],
 ["die Stellenanzeige","die","die Stellenanzeigen","Nomen","Ich habe die Stellenanzeige im Internet gefunden.",{bks:"oglas za posao",tr:"iş ilanı",uk:"оголошення про роботу",ro:"anunț de angajare",ar:"إعلان وظيفة"}],
 ["der Lebenslauf","der","die Lebensläufe","Nomen","Mein Lebenslauf ist auf dem neuesten Stand.",{bks:"životopis",tr:"özgeçmiş",uk:"резюме",ro:"CV",ar:"سيرة ذاتية"}],
 ["die Berufserfahrung","die","die Berufserfahrungen","Nomen","Ich habe fünf Jahre Berufserfahrung.",{bks:"radno iskustvo",tr:"iş deneyimi",uk:"досвід роботи",ro:"experiență profesională",ar:"خبرة مهنية"}],
 ["die Stärke","die","die Stärken","Nomen","Meine Stärke ist die Arbeit im Team.",{bks:"snaga",tr:"güçlü yön",uk:"сильна сторона",ro:"punct forte",ar:"نقطة قوة"}],
 ["die Schwäche","die","die Schwächen","Nomen","Eine Schwäche von mir ist die Ungeduld.",{bks:"slabost",tr:"zayıf yön",uk:"слабка сторона",ro:"punct slab",ar:"نقطة ضعف"}],
 ["die Qualifikation","die","die Qualifikationen","Nomen","Meine Qualifikation ist anerkannt.",{bks:"kvalifikacija",tr:"nitelik",uk:"кваліфікація",ro:"calificare",ar:"مؤهل"}],
 ["das Zeugnis","das","die Zeugnisse","Nomen","Hier ist mein Zeugnis aus dem Heimatland.",{bks:"svjedodžba",tr:"belge",uk:"свідоцтво",ro:"diplomă",ar:"شهادة"}],
 ["der Arbeitsvertrag","der","die Arbeitsverträge","Nomen","Den Arbeitsvertrag lese ich in Ruhe durch.",{bks:"ugovor o radu",tr:"iş sözleşmesi",uk:"трудовий договір",ro:"contract de muncă",ar:"عقد عمل"}],
 ["das Gehalt","das","die Gehälter","Nomen","Über das Gehalt sprechen wir am Ende.",{bks:"plata",tr:"maaş",uk:"зарплата",ro:"salariu",ar:"راتب"}],
 ["die Probezeit","die","die Probezeiten","Nomen","Die Probezeit dauert sechs Monate.",{bks:"probni rad",tr:"deneme süresi",uk:"випробувальний термін",ro:"perioadă de probă",ar:"فترة تجريبية"}],
 ["die Arbeitszeit","die","die Arbeitszeiten","Nomen","Die Arbeitszeit ist von acht bis sechzehn Uhr.",{bks:"radno vrijeme",tr:"çalışma saati",uk:"робочий час",ro:"program de lucru",ar:"وقت العمل"}],
 ["die Kündigungsfrist","die","die Kündigungsfristen","Nomen","Die Kündigungsfrist beträgt vier Wochen.",{bks:"otkazni rok",tr:"ihbar süresi",uk:"строк розірвання",ro:"termen de preaviz",ar:"مهلة إنهاء العقد"}],
 ["der Personalleiter","der","die Personalleiter","Nomen","Der Personalleiter stellt viele Fragen.",{bks:"voditelj kadrovske",tr:"insan kaynakları müdürü",uk:"керівник кадрів",ro:"director de personal",ar:"مدير الموارد البشرية"}],
 ["die Teamarbeit","die","die Teamarbeiten","Nomen","Teamarbeit macht mir Spaß.",{bks:"timski rad",tr:"takım çalışması",uk:"командна робота",ro:"muncă în echipă",ar:"عمل جماعي"}],
 ["die Einarbeitung","die","die Einarbeitungen","Nomen","Die Einarbeitung dauert zwei Wochen.",{bks:"uvođenje u posao",tr:"işe alıştırma",uk:"адаптація",ro:"perioadă de acomodare",ar:"فترة التدريب"}],
 ["die Weiterbildung","die","die Weiterbildungen","Nomen","Eine Weiterbildung ist mir wichtig.",{bks:"dodatno obrazovanje",tr:"mesleki eğitim",uk:"підвищення кваліфікації",ro:"perfecționare",ar:"تدريب إضافي"}],
 ["die Zusage","die","die Zusagen","Nomen","Nach einer Woche kam die Zusage.",{bks:"potvrda o primanju",tr:"olumlu yanıt",uk:"згода",ro:"acceptare",ar:"موافقة"}],
 ["die Absage","die","die Absagen","Nomen","Eine Absage ist kein Weltuntergang.",{bks:"odbijenica",tr:"olumsuz yanıt",uk:"відмова",ro:"refuz",ar:"رفض"}],
];
const vorDialog: D[] = [
 [1,"Sich vorstellen","A","Personalleiter","Frau Haddad, erzählen Sie kurz etwas über sich.",{bks:"Gospođo Haddad, recite nam ukratko nešto o sebi.",tr:"Bayan Haddad, kısaca kendinizden bahsedin.",uk:"Пані Хаддад, розкажіть коротко про себе.",ro:"Doamnă Haddad, spuneți-ne pe scurt despre dvs.",ar:"سيدة حداد، حدثينا باختصار عن نفسك."}],
 [1,"Sich vorstellen","B","Amira","Gern. Ich bin gelernte Pflegefachkraft und arbeite seit fünf Jahren im Altenheim.",{bks:"Rado. Po struci sam njegovateljica i pet godina radim u domu za starije.",tr:"Memnuniyetle. Bakım elemanıyım ve beş yıldır huzurevinde çalışıyorum.",uk:"Охоче. Я кваліфікована медсестра і п'ять років працюю в будинку літніх людей.",ro:"Cu plăcere. Sunt asistent medical și lucrez de cinci ani într-un cămin.",ar:"بكل سرور. أنا ممرضة مؤهلة وأعمل منذ خمس سنوات في دار المسنين."}],
 [1,"Sich vorstellen","A","Personalleiter","Warum möchten Sie zu uns wechseln?",{bks:"Zašto želite preći kod nas?",tr:"Neden bize geçmek istiyorsunuz?",uk:"Чому ви хочете перейти до нас?",ro:"De ce doriți să veniți la noi?",ar:"لماذا ترغبين في الانتقال إلينا؟"}],
 [1,"Sich vorstellen","B","Amira","Ich suche mehr Verantwortung und die Möglichkeit zur Weiterbildung.",{bks:"Tražim više odgovornosti i mogućnost dodatnog obrazovanja.",tr:"Daha fazla sorumluluk ve eğitim imkânı arıyorum.",uk:"Я шукаю більше відповідальності та можливість навчання.",ro:"Caut mai multă responsabilitate și posibilitatea de perfecționare.",ar:"أبحث عن مسؤولية أكبر وفرصة للتطوير."}],
 [1,"Sich vorstellen","A","Personalleiter","Was sind Ihre Stärken?",{bks:"Koje su vaše snage?",tr:"Güçlü yönleriniz neler?",uk:"Які ваші сильні сторони?",ro:"Care sunt punctele dvs. forte?",ar:"ما نقاط قوتك؟"}],
 [1,"Sich vorstellen","B","Amira","Ich bleibe auch im Stress ruhig und arbeite gern im Team.",{bks:"I u stresu ostajem mirna i volim raditi u timu.",tr:"Streste bile sakin kalırım ve takımla çalışmayı severim.",uk:"Навіть у стресі я лишаюся спокійною і люблю працювати в команді.",ro:"Rămân calmă și în stres și îmi place munca în echipă.",ar:"أبقى هادئة حتى تحت الضغط وأحب العمل ضمن فريق."}],
 [1,"Sich vorstellen","A","Personalleiter","Und eine Schwäche?",{bks:"A neka slabost?",tr:"Peki zayıf yönünüz?",uk:"А слабка сторона?",ro:"Și un punct slab?",ar:"وما نقطة ضعفك؟"}],
 [1,"Sich vorstellen","B","Amira","Ich bin ungeduldig, wenn Absprachen nicht eingehalten werden. Daran arbeite ich.",{bks:"Nestrpljiva sam kad se dogovori ne poštuju. Radim na tome.",tr:"Anlaşmalara uyulmayınca sabırsız olurum. Bunun üzerinde çalışıyorum.",uk:"Я нетерпляча, коли не дотримуються домовленостей. Працюю над цим.",ro:"Sunt nerăbdătoare când nu se respectă înțelegerile. Lucrez la asta.",ar:"أفقد الصبر عندما لا يُلتزم بالاتفاقات، وأعمل على ذلك."}],
 [2,"Konditionen klären","A","Amira","Darf ich fragen, wie die Einarbeitung abläuft?",{bks:"Smijem li pitati kako teče uvođenje u posao?",tr:"İşe alıştırmanın nasıl olduğunu sorabilir miyim?",uk:"Чи можу я запитати, як відбувається адаптація?",ro:"Pot să întreb cum decurge acomodarea?",ar:"هل لي أن أسأل كيف تتم فترة التدريب؟"}],
 [2,"Konditionen klären","B","Personalleiter","Zwei Wochen begleitet Sie eine erfahrene Kollegin.",{bks:"Dvije sedmice vas prati iskusna kolegica.",tr:"İki hafta deneyimli bir meslektaşınız size eşlik eder.",uk:"Два тижні вас супроводжуватиме досвідчена колега.",ro:"Două săptămâni veți fi însoțită de o colegă cu experiență.",ar:"سترافقك زميلة ذات خبرة لمدة أسبوعين."}],
 [2,"Konditionen klären","A","Amira","Wie sind die Arbeitszeiten geregelt?",{bks:"Kako je uređeno radno vrijeme?",tr:"Çalışma saatleri nasıl?",uk:"Як врегульовано робочий час?",ro:"Cum este programul de lucru?",ar:"كيف تُنظَّم أوقات العمل؟"}],
 [2,"Konditionen klären","B","Personalleiter","Wir arbeiten in drei Schichten, den Plan bekommen Sie monatlich.",{bks:"Radimo u tri smjene, plan dobijate mjesečno.",tr:"Üç vardiya çalışıyoruz, planı aylık alırsınız.",uk:"Ми працюємо у три зміни, графік отримуєте щомісяця.",ro:"Lucrăm în trei ture, planul îl primiți lunar.",ar:"نعمل بثلاث ورديات، وتحصلين على الجدول شهريًا."}],
 [2,"Konditionen klären","A","Amira","Und wie sieht es mit dem Gehalt aus?",{bks:"A kako stoji stvar s platom?",tr:"Peki maaş konusu nasıl?",uk:"А як щодо зарплати?",ro:"Și cum stăm cu salariul?",ar:"وماذا عن الراتب؟"}],
 [2,"Konditionen klären","B","Personalleiter","Wir zahlen nach Tarif, die Details stehen im Arbeitsvertrag.",{bks:"Plaćamo po tarifi, detalji su u ugovoru o radu.",tr:"Tarifeye göre ödüyoruz, ayrıntılar sözleşmede.",uk:"Ми платимо за тарифом, деталі — у трудовому договорі.",ro:"Plătim conform grilei, detaliile sunt în contract.",ar:"ندفع وفق التعرفة، والتفاصيل في عقد العمل."}],
];

const out: string[] = [];
function emit(id: string, thumb: string, scenes: S[], vocab: V[], dialog: D[]) {
  out.push(`DELETE FROM public.lesson_scenes WHERE lesson_id = '${id}';`);
  out.push(`DELETE FROM public.vocabulary WHERE lesson_id = '${id}';`);
  out.push(`DELETE FROM public.dialogs WHERE lesson_id = '${id}';`);
  out.push(
    `INSERT INTO public.lesson_scenes (lesson_id, position, german_text, translations, image_key) VALUES\n` +
      scenes.map((s, i) => `('${id}', ${i + 1}, ${q(s[0])}, ${j(s[1])}, ${q(thumb)})`).join(",\n") + ";",
  );
  out.push(
    `INSERT INTO public.vocabulary (lesson_id, position, term, translations, word_class, article, plural, example) VALUES\n` +
      vocab.map((v, i) => `('${id}', ${i + 1}, ${q(v[0])}, ${j(v[5])}, ${q(v[3])}, ${q(v[1])}, ${q(v[2])}, ${q(v[4])})`).join(",\n") + ";",
  );
  out.push(
    `INSERT INTO public.dialogs (lesson_id, position, speaker, german_text, translations, dialog_index, dialog_title, speaker_role) VALUES\n` +
      dialog.map((d, i) => `('${id}', ${i + 1}, ${q(d[2])}, ${q(d[4])}, ${j(d[5])}, ${d[0]}, ${q(d[1])}, ${q(d[3])})`).join(",\n") + ";",
  );
}
emit(L_BAU, "baustelle", bauScenes, bauVocab, bauDialog);
emit(L_VOR, "bewerbung", vorScenes, vorVocab, vorDialog);
console.log(out.join("\n\n"));
