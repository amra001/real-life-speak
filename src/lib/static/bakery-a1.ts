const T = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ bks, tr, uk, ro, ar });
const A = (id: string, text: string, is_correct: boolean, position: number) => ({ id, text, is_correct, position });
const H = (bks: string, tr: string, uk: string, ro: string, ar: string) => ({ help: T(bks, tr, uk, ro, ar) });

export const bakeryA1Override = {
  lesson: {
    id: "22222222-2222-2222-2222-222222222222",
    slug: "baeckerei-a1",
    title: "In der Bäckerei",
    description: "Ein vollständiges A1-Lernmodul mit Bildstory, Wortschatz, zwei echten Dialogen, Grammatik, Präpositionen, interaktiven Aufgaben und großem Abschlusstest.",
    level: "A1",
    region: "de",
    category_slug: "alltag",
    subcategory_slug: "baeckerei",
    topic_slug: "baeckerei",
    topic_title: "In der Bäckerei",
    duration_seconds: 2700,
    thumbnail_key: "baeckerei",
    video_url: null,
    is_premium: false,
    status: "published",
    popularity: 100,
    grammar_topics: ["Höflich einkaufen", "der / die / das", "ein / eine / einen", "Akkusativ beim Kaufen", "Mengen und Stückzahlen", "Lokale Präpositionen", "mit / ohne", "bar / mit Karte bezahlen"],
    grammar_notes: [
      { title: "Natürlich in der Bäckerei sprechen", explanation: "Im Alltag sagt man zum Beispiel: „Ich hätte gern …“, „Ich nehme …“, „Haben Sie …?“ oder „Zwei Brötchen, bitte.“", examples: ["Ich hätte gern ein Stück Apfelkuchen, bitte.", "Ich nehme noch ein Mischbrot.", "Haben Sie etwas Süßes ohne Nüsse?", "Kann ich auch mit Karte zahlen?"] },
      { title: "Artikel und Akkusativ", explanation: "Lerne Nomen immer mit Artikel. Bei maskulinen Nomen wird der Artikel im Akkusativ oft zu den/einen.", examples: ["der Kuchen → Ich nehme den Kuchen.", "die Brezel → Ich nehme eine Brezel.", "das Brot → Ich nehme ein Brot.", "der Apfelkuchen → Ich hätte gern einen Apfelkuchen."] },
      { title: "Wo ist was?", explanation: "Mit vor, hinter, neben, in, auf, zwischen, unter und gegenüber beschreiben wir Orte. Bei Bildaufgaben gilt: Erst genau schauen, dann antworten.", examples: ["Mara steht vor der Theke.", "Die Verkäuferin steht hinter der Theke.", "Das Brot liegt im Regal.", "Die Verkäuferin steht Mara gegenüber."] },
      { title: "Deutschland und Österreich", explanation: "Regionale Wörter werden sichtbar gemacht. In Österreich hört man zum Beispiel oft „Semmel“ statt „Brötchen“ und „Brieftasche“ statt „Portemonnaie“.", examples: ["das Brötchen (AT: die Semmel)", "das Portemonnaie (AT: die Brieftasche)"] }
    ],
    place_items: [
      { german_text: "Mara steht vor der Theke.", preposition: "vor", image_key: "baeck-bestellen", translations: T("Mara stoji ispred pulta.", "Mara tezgâhın önünde duruyor.", "Мара стоїть перед прилавком.", "Mara stă în fața tejghelei.", "تقف مارا أمام المنضدة.") },
      { german_text: "Die Verkäuferin steht hinter der Theke.", preposition: "hinter", image_key: "baeck-bestellen", translations: T("Prodavačica stoji iza pulta.", "Satıcı tezgâhın arkasında duruyor.", "Продавчиня стоїть за прилавком.", "Vânzătoarea stă în spatele tejghelei.", "تقف البائعة خلف المنضدة.") },
      { german_text: "Die Verkäuferin steht Mara gegenüber.", preposition: "gegenüber", image_key: "baeck-bestellen", translations: T("Prodavačica stoji nasuprot Mari.", "Satıcı Mara'nın karşısında duruyor.", "Продавчиня стоїть навпроти Мари.", "Vânzătoarea stă vizavi de Mara.", "تقف البائعة مقابل مارا.") },
      { german_text: "Das Brot liegt im Regal.", preposition: "in", image_key: "baeck-auslage", translations: T("Hljeb je na polici.", "Ekmek rafta.", "Хліб лежить на полиці.", "Pâinea este pe raft.", "الخبز على الرف.") },
      { german_text: "Die Brote liegen nebeneinander.", preposition: "nebeneinander", image_key: "baeck-auslage", translations: T("Hljebovi su jedan pored drugog.", "Ekmekler yan yana.", "Хлібини лежать поруч.", "Pâinile sunt una lângă alta.", "أرغفة الخبز بجانب بعضها.") },
      { german_text: "Das Gebäck liegt in der Auslage.", preposition: "in", image_key: "baeck-auslage", translations: T("Pecivo je u vitrini.", "Hamur işleri vitrinde.", "Випічка лежить у вітрині.", "Produsele de patiserie sunt în vitrină.", "المعجنات في واجهة العرض.") },
      { german_text: "Mara steht gegenüber der Verkäuferin.", preposition: "gegenüber", image_key: "baeck-bestellen", translations: T("Mara stoji nasuprot prodavačici.", "Mara satıcının karşısında duruyor.", "Мара стоїть навпроти продавчині.", "Mara stă vizavi de vânzătoare.", "تقف مارا مقابل البائعة.") },
      { german_text: "Die Ware ist hinter der Scheibe.", preposition: "hinter", image_key: "baeck-auslage", translations: T("Roba je iza stakla.", "Ürünler camın arkasında.", "Товар за склом.", "Produsele sunt în spatele geamului.", "البضاعة خلف الزجاج.") },
      { german_text: "Mara steht neben der Auslage.", preposition: "neben", image_key: "baeck-auslage", translations: T("Mara stoji pored vitrine.", "Mara vitrinin yanında duruyor.", "Мара стоїть біля вітрини.", "Mara stă lângă vitrină.", "تقف مارا بجانب واجهة العرض.") },
      { german_text: "Die Verkäuferin steht zwischen Theke und Regal.", preposition: "zwischen", image_key: "baeck-bestellen", translations: T("Prodavačica stoji između pulta i police.", "Satıcı tezgâh ile raf arasında duruyor.", "Продавчиня стоїть між прилавком і полицею.", "Vânzătoarea stă între tejghea și raft.", "تقف البائعة بين المنضدة والرف.") }
    ]
  },

  scenes: [
    { id: "bak-s1", position: 1, scene_group: "bild-1", image_key: "baeck-new-01", german_text: "Mara kommt in die Bäckerei.", translations: T("Mara ulazi u pekaru.", "Mara fırına giriyor.", "Мара заходить до пекарні.", "Mara intră în brutărie.", "تدخل مارا إلى المخبز.") },
    { id: "bak-s2", position: 2, scene_group: "bild-2", image_key: "baeck-new-02", german_text: "Sie schaut sich die Auslage an.", translations: T("Gleda ponudu u vitrini.", "Vitrine bakıyor.", "Вона дивиться на вітрину.", "Se uită la vitrină.", "تنظر إلى واجهة العرض.") },
    { id: "bak-s3", position: 3, scene_group: "bild-3", image_key: "baeck-new-03", german_text: "Sie sieht Brot, Brötchen und Kuchen.", translations: T("Vidi hljeb, pecivo i kolače.", "Ekmek, küçük ekmekler ve pasta görüyor.", "Вона бачить хліб, булочки й пиріг.", "Vede pâine, chifle și prăjituri.", "ترى الخبز واللفائف والكعك.") },
    { id: "bak-s4", position: 4, scene_group: "bild-4", image_key: "baeck-new-04", german_text: "Die Verkäuferin sagt: „Guten Morgen. Was darf es sein?“", translations: T("Prodavačica kaže: „Dobro jutro. Izvolite?“", "Satıcı: „Günaydın. Ne arzu edersiniz?“ diyor.", "Продавчиня каже: «Доброго ранку. Що бажаєте?»", "Vânzătoarea spune: „Bună dimineața. Ce doriți?“", "تقول البائعة: «صباح الخير. ماذا تريدين؟»") },
    { id: "bak-s5", position: 5, scene_group: "bild-5", image_key: "baeck-new-05", german_text: "Mara sagt: „Ich hätte gern ein Stück Apfelkuchen, bitte.“", translations: T("Mara kaže: „Htjela bih komad kolača od jabuka, molim.“", "Mara: „Bir dilim elmalı pasta istiyorum, lütfen.“ diyor.", "Мара каже: «Я хотіла б шматок яблучного пирога, будь ласка.»", "Mara spune: „Aș dori o felie de prăjitură cu mere, vă rog.“", "تقول مارا: «أود قطعة من كعكة التفاح، من فضلك.»") },
    { id: "bak-s6", position: 6, scene_group: "bild-6", image_key: "baeck-new-06", german_text: "Die Verkäuferin nimmt ein Stück Apfelkuchen.", translations: T("Prodavačica uzima komad kolača od jabuka.", "Satıcı bir dilim elmalı pasta alıyor.", "Продавчиня бере шматок яблучного пирога.", "Vânzătoarea ia o felie de prăjitură cu mere.", "تأخذ البائعة قطعة من كعكة التفاح.") },
    { id: "bak-s7", position: 7, scene_group: "bild-7", image_key: "baeck-new-07", german_text: "Mara sagt: „Ich nehme noch ein Mischbrot, bitte.“", translations: T("Mara kaže: „Uzet ću još jedan miješani hljeb, molim.“", "Mara: „Bir karışık ekmek daha alayım, lütfen.“ diyor.", "Мара каже: «Я візьму ще один змішаний хліб, будь ласка.»", "Mara spune: „Mai iau și o pâine mixtă, vă rog.“", "تقول مارا: «سآخذ أيضًا خبزًا مشكّلًا، من فضلك.»") },
    { id: "bak-s8", position: 8, scene_group: "bild-8", image_key: "baeck-new-08", german_text: "Die Verkäuferin fragt: „Geschnitten oder ganz?“", translations: T("Prodavačica pita: „Narezano ili cijelo?“", "Satıcı soruyor: „Dilimlenmiş mi, bütün mü?“", "Продавчиня питає: «Нарізаний чи цілий?»", "Vânzătoarea întreabă: „Feliată sau întreagă?“", "تسأل البائعة: «مقطع أم كامل؟»") },
    { id: "bak-s9", position: 9, scene_group: "bild-9", image_key: "baeck-new-09", german_text: "Mara antwortet: „Geschnitten, bitte.“", translations: T("Mara odgovara: „Narezano, molim.“", "Mara: „Dilimlenmiş, lütfen.“ diyor.", "Мара відповідає: «Нарізаний, будь ласка.»", "Mara răspunde: „Feliată, vă rog.“", "تجيب مارا: «مقطعًا، من فضلك.»") },
    { id: "bak-s10", position: 10, scene_group: "bild-10", image_key: "baeck-new-10", german_text: "Die Verkäuferin schneidet das Brot in Scheiben.", translations: T("Prodavačica reže hljeb na kriške.", "Satıcı ekmeği dilimliyor.", "Продавчиня нарізає хліб скибками.", "Vânzătoarea feliază pâinea.", "تقطع البائعة الخبز إلى شرائح.") },
    { id: "bak-s11", position: 11, scene_group: "bild-11", image_key: "baeck-new-11", german_text: "Sie packt das Brot ein.", translations: T("Pakuje hljeb.", "Ekmeği paketliyor.", "Вона пакує хліб.", "Împachetează pâinea.", "تغلف الخبز.") },
    { id: "bak-s12", position: 12, scene_group: "bild-12", image_key: "baeck-new-12", german_text: "Die Verkäuferin nennt den Preis.", translations: T("Prodavačica kaže cijenu.", "Satıcı fiyatı söylüyor.", "Продавчиня називає ціну.", "Vânzătoarea spune prețul.", "تذكر البائعة السعر.") },
    { id: "bak-s13", position: 13, scene_group: "bild-13", image_key: "baeck-new-13", german_text: "Mara schaut in ihr Portemonnaie (AT: Brieftasche).", translations: T("Mara gleda u novčanik.", "Mara cüzdanına bakıyor.", "Мара дивиться у гаманець.", "Mara se uită în portofel.", "تنظر مارا في محفظتها.") },
    { id: "bak-s14", position: 14, scene_group: "bild-14", image_key: "baeck-new-14", german_text: "Sie fragt: „Kann ich auch mit Karte zahlen?“", translations: T("Pita: „Mogu li platiti karticom?“", "Soruyor: „Kartla da ödeyebilir miyim?“", "Вона питає: «Можна заплатити карткою?»", "Întreabă: „Pot plăti și cu cardul?“", "تسأل: «هل يمكنني الدفع بالبطاقة؟»") },
    { id: "bak-s15", position: 15, scene_group: "bild-15", image_key: "baeck-new-15", german_text: "Die Verkäuferin sagt: „Ja, natürlich.“", translations: T("Prodavačica kaže: „Da, naravno.“", "Satıcı: „Evet, tabii.“ diyor.", "Продавчиня каже: «Так, звичайно.»", "Vânzătoarea spune: „Da, desigur.“", "تقول البائعة: «نعم، بالطبع.»") },
    { id: "bak-s16", position: 16, scene_group: "bild-16", image_key: "baeck-bezahlen", german_text: "Mara bezahlt mit Karte.", translations: T("Mara plaća karticom.", "Mara kartla ödüyor.", "Мара платить карткою.", "Mara plătește cu cardul.", "تدفع مارا بالبطاقة.") },
    { id: "bak-s17", position: 17, scene_group: "bild-17", image_key: "baeck-erhalten", german_text: "Die Verkäuferin gibt Mara die Tüte.", translations: T("Prodavačica daje Mari vrećicu.", "Satıcı Mara'ya poşeti veriyor.", "Продавчиня дає Марі пакет.", "Vânzătoarea îi dă Marei punga.", "تعطي البائعة مارا الكيس.") },
    { id: "bak-s18", position: 18, scene_group: "bild-18", image_key: "baeck-erhalten", german_text: "Mara sagt: „Danke schön.“", translations: T("Mara kaže: „Hvala lijepo.“", "Mara: „Çok teşekkür ederim.“ diyor.", "Мара каже: «Дуже дякую.»", "Mara spune: „Mulțumesc frumos.“", "تقول مارا: «شكرًا جزيلاً.»") },
    { id: "bak-s19", position: 19, scene_group: "bild-19", image_key: "baeck-eintreten", german_text: "Die Verkäuferin sagt: „Auf Wiedersehen.“", translations: T("Prodavačica kaže: „Doviđenja.“", "Satıcı: „Hoşça kalın.“ diyor.", "Продавчиня каже: «До побачення.»", "Vânzătoarea spune: „La revedere.“", "تقول البائعة: «إلى اللقاء.»") },
    { id: "bak-s20", position: 20, scene_group: "bild-20", image_key: "baeck-eintreten", german_text: "Mara verlässt die Bäckerei mit ihrer Tüte.", translations: T("Mara izlazi iz pekare sa vrećicom.", "Mara poşetiyle fırından çıkıyor.", "Мара виходить із пекарні з пакетом.", "Mara iese din brutărie cu punga ei.", "تغادر مارا المخبز ومعها الكيس.") }
  ],

  vocabulary: [],
  dialogues: [],
  questions: []
};
