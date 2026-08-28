-- RealLife German quality rebuild: A1 · In der Bäckerei
-- Ziel: natürliche Alltagssprache, klarer GER-A1-Rahmen, echter roter Faden,
-- mehrere Dialoge, Präpositionen, umfangreicher Wortschatz und echte interaktive Übungen.

-- Lektion selbst
UPDATE public.lessons
SET title = 'In der Bäckerei',
    description = 'Eine komplette Alltagssituation in der Bäckerei: begrüßen, Brot und Brötchen kaufen, nach Zutaten fragen, bezahlen und sich verabschieden.',
    level = 'A1',
    region = 'de',
    category_slug = 'alltag',
    subcategory_slug = 'baeckerei',
    topic_slug = 'baeckerei',
    topic_title = 'In der Bäckerei',
    duration_seconds = 900,
    thumbnail_key = 'baeckerei',
    is_premium = false,
    status = 'published',
    grammar_topics = ARRAY['Höflich bestellen', 'Mengenangaben', 'Lokale Präpositionen'],
    grammar_notes = '[
      {"title":"Höflich bestellen","explanation":"In der Bäckerei klingt „Ich hätte gern …, bitte.“ sehr natürlich und höflich. Auch „Ich nehme …, bitte.“ ist üblich.","examples":["Ich hätte gern ein Mischbrot, bitte.","Ich nehme vier Brötchen, bitte.","Zwei Brezeln, bitte."]},
      {"title":"Mengen nennen","explanation":"Bei vielen Lebensmitteln steht nach der Zahl direkt der Plural.","examples":["ein Brot", "zwei Brezeln", "vier Brötchen"]},
      {"title":"Wo ist was?","explanation":"Für Orte verwenden wir häufig in, auf, neben, vor und hinter.","examples":["Das Brot liegt im Regal.","Die Brezeln liegen neben den Brötchen.","Die Kasse ist hinter der Theke."]}
    ]'::jsonb,
    place_items = '[
      {"german_text":"Das Brot liegt im Regal.","preposition":"in", "image_key":"baeckerei", "translations":{"tr":"Ekmek rafta.","ar":"الخبز في الرف.","uk":"Хліб лежить на полиці.","bks":"Hljeb je na polici.","ro":"Pâinea este pe raft."}},
      {"german_text":"Die Brezeln liegen neben den Brötchen.","preposition":"neben", "image_key":"baeckerei", "translations":{"tr":"Pretzeller küçük ekmeklerin yanında.","ar":"البريتزل بجانب الخبز الصغير.","uk":"Кренделі лежать поруч із булочками.","bks":"Perece su pored peciva.","ro":"Covrigii sunt lângă chifle."}},
      {"german_text":"Die Verkäuferin steht hinter der Theke.","preposition":"hinter", "image_key":"baeckerei", "translations":{"tr":"Satıcı tezgâhın arkasında duruyor.","ar":"البائعة تقف خلف المنضدة.","uk":"Продавчиня стоїть за прилавком.","bks":"Prodavačica stoji iza pulta.","ro":"Vânzătoarea stă în spatele tejghelei."}},
      {"german_text":"Die Kundin steht vor der Theke.","preposition":"vor", "image_key":"baeckerei", "translations":{"tr":"Müşteri tezgâhın önünde duruyor.","ar":"الزبونة تقف أمام المنضدة.","uk":"Покупчиня стоїть перед прилавком.","bks":"Kupac stoji ispred pulta.","ro":"Clienta stă în fața tejghelei."}},
      {"german_text":"Die Tüte liegt auf der Theke.","preposition":"auf", "image_key":"baeckerei", "translations":{"tr":"Poşet tezgâhın üzerinde.","ar":"الكيس على المنضدة.","uk":"Пакет лежить на прилавку.","bks":"Kesa je na pultu.","ro":"Punga este pe tejghea."}}
    ]'::jsonb,
    updated_at = now()
WHERE id = '22222222-2222-2222-2222-222222222222';

-- Alte Inhalte dieser Lektion entfernen
DELETE FROM public.quiz_answers
WHERE question_id IN (
  SELECT id FROM public.quiz_questions WHERE lesson_id = '22222222-2222-2222-2222-222222222222'
);
DELETE FROM public.quiz_questions WHERE lesson_id = '22222222-2222-2222-2222-222222222222';
DELETE FROM public.dialogs WHERE lesson_id = '22222222-2222-2222-2222-222222222222';
DELETE FROM public.vocabulary WHERE lesson_id = '22222222-2222-2222-2222-222222222222';
DELETE FROM public.lesson_scenes WHERE lesson_id = '22222222-2222-2222-2222-222222222222';

-- Fotostory: 16 Textzeilen, gebündelt in 10 sinnvolle visuelle Szenen
INSERT INTO public.lesson_scenes (lesson_id, position, german_text, translations, image_key, scene_group) VALUES
('22222222-2222-2222-2222-222222222222',1,'Mara geht in die Bäckerei.','{"tr":"Mara fırına gidiyor.","ar":"تذهب مارا إلى المخبز.","uk":"Мара йде до пекарні.","bks":"Mara ide u pekaru.","ro":"Mara merge la brutărie."}','baeckerei','eingang'),
('22222222-2222-2222-2222-222222222222',2,'Sie schaut sich die Brote und Brötchen an.','{"tr":"Ekmeklere ve küçük ekmeklere bakıyor.","ar":"تنظر إلى الخبز واللفائف.","uk":"Вона дивиться на хліб і булочки.","bks":"Gleda hljeb i peciva.","ro":"Se uită la pâini și chifle."}','baeckerei','auslage'),
('22222222-2222-2222-2222-222222222222',3,'Die Verkäuferin sagt: „Guten Morgen!“','{"tr":"Satıcı: „Günaydın!“ diyor.","ar":"تقول البائعة: «صباح الخير!»","uk":"Продавчиня каже: «Доброго ранку!»","bks":"Prodavačica kaže: „Dobro jutro!“","ro":"Vânzătoarea spune: „Bună dimineața!“"}','baeckerei','begruesung'),
('22222222-2222-2222-2222-222222222222',4,'Mara sagt: „Guten Morgen. Ich hätte gern ein Mischbrot, bitte.“','{"tr":"Mara: „Günaydın. Bir karışık ekmek alabilir miyim, lütfen?“ diyor.","ar":"تقول مارا: «صباح الخير. أود خبزًا مشكّلًا، من فضلك.»","uk":"Мара каже: «Доброго ранку. Я хотіла б один змішаний хліб, будь ласка.»","bks":"Mara kaže: „Dobro jutro. Htjela bih jedan miješani hljeb, molim.“","ro":"Mara spune: „Bună dimineața. Aș dori o pâine mixtă, vă rog.“"}','baeckerei','brot-bestellen'),
('22222222-2222-2222-2222-222222222222',5,'Die Verkäuferin fragt: „Möchten Sie das Brot geschnitten?“','{"tr":"Satıcı soruyor: „Ekmeği dilimlenmiş ister misiniz?“","ar":"تسأل البائعة: «هل تريدين الخبز مقطعًا؟»","uk":"Продавчиня запитує: «Бажаєте хліб нарізаний?»","bks":"Prodavačica pita: „Želite li da hljeb bude narezan?“","ro":"Vânzătoarea întreabă: „Doriți pâinea feliată?“"}','baeckerei','brot-schneiden'),
('22222222-2222-2222-2222-222222222222',6,'Mara antwortet: „Ja, bitte.“','{"tr":"Mara cevap veriyor: „Evet, lütfen.“","ar":"تجيب مارا: «نعم، من فضلك.»","uk":"Мара відповідає: «Так, будь ласка.»","bks":"Mara odgovara: „Da, molim.“","ro":"Mara răspunde: „Da, vă rog.“"}','baeckerei','brot-schneiden'),
('22222222-2222-2222-2222-222222222222',7,'Die Verkäuferin schneidet das Brot.','{"tr":"Satıcı ekmeği dilimliyor.","ar":"تقطع البائعة الخبز.","uk":"Продавчиня нарізає хліб.","bks":"Prodavačica reže hljeb.","ro":"Vânzătoarea feliază pâinea."}','baeckerei','brot-schneiden'),
('22222222-2222-2222-2222-222222222222',8,'Mara sagt: „Ich nehme auch vier Brötchen, bitte.“','{"tr":"Mara: „Dört küçük ekmek de alayım, lütfen.“ diyor.","ar":"تقول مارا: «سآخذ أيضًا أربع لفائف، من فضلك.»","uk":"Мара каже: «Я візьму ще чотири булочки, будь ласка.»","bks":"Mara kaže: „Uzet ću i četiri peciva, molim.“","ro":"Mara spune: „Mai iau și patru chifle, vă rog.“"}','baeckerei','broetchen'),
('22222222-2222-2222-2222-222222222222',9,'Die Verkäuferin fragt: „Sonst noch etwas?“','{"tr":"Satıcı soruyor: „Başka bir şey?“","ar":"تسأل البائعة: «هل تريدين شيئًا آخر؟»","uk":"Продавчиня запитує: «Ще щось?»","bks":"Prodavačica pita: „Još nešto?“","ro":"Vânzătoarea întreabă: „Mai doriți ceva?“"}','baeckerei','weiter-bestellen'),
('22222222-2222-2222-2222-222222222222',10,'Mara sagt: „Ja, zwei Brezeln, bitte.“','{"tr":"Mara: „Evet, iki pretzel, lütfen.“ diyor.","ar":"تقول مارا: «نعم، قطعتان من البريتزل، من فضلك.»","uk":"Мара каже: «Так, два кренделі, будь ласка.»","bks":"Mara kaže: „Da, dvije perece, molim.“","ro":"Mara spune: „Da, doi covrigi, vă rog.“"}','baeckerei','weiter-bestellen'),
('22222222-2222-2222-2222-222222222222',11,'Die Verkäuferin legt alles in eine Tüte.','{"tr":"Satıcı her şeyi bir poşete koyuyor.","ar":"تضع البائعة كل شيء في كيس.","uk":"Продавчиня кладе все в пакет.","bks":"Prodavačica stavlja sve u kesu.","ro":"Vânzătoarea pune totul într-o pungă."}','baeckerei','tuete'),
('22222222-2222-2222-2222-222222222222',12,'Sie sagt: „Das macht acht Euro sechzig.“','{"tr":"Şöyle diyor: „Sekiz euro altmış.“","ar":"تقول: «المجموع ثمانية يورو وستون سنتًا.»","uk":"Вона каже: «Разом вісім євро шістдесят.»","bks":"Kaže: „To je osam eura i šezdeset centi.“","ro":"Spune: „În total sunt opt euro și șaizeci.“"}','baeckerei','bezahlen'),
('22222222-2222-2222-2222-222222222222',13,'Mara bezahlt mit Karte.','{"tr":"Mara kartla ödüyor.","ar":"تدفع مارا بالبطاقة.","uk":"Мара платить карткою.","bks":"Mara plaća karticom.","ro":"Mara plătește cu cardul."}','baeckerei','bezahlen'),
('22222222-2222-2222-2222-222222222222',14,'Die Verkäuferin sagt: „Danke. Schönen Tag noch!“','{"tr":"Satıcı: „Teşekkürler. İyi günler!“ diyor.","ar":"تقول البائعة: «شكرًا. يومًا سعيدًا!»","uk":"Продавчиня каже: «Дякую. Гарного дня!»","bks":"Prodavačica kaže: „Hvala. Ugodan dan!“","ro":"Vânzătoarea spune: „Mulțumesc. O zi frumoasă!“"}','baeckerei','abschied'),
('22222222-2222-2222-2222-222222222222',15,'Mara sagt: „Danke, Ihnen auch.“','{"tr":"Mara: „Teşekkürler, size de.“ diyor.","ar":"تقول مارا: «شكرًا، ولكِ أيضًا.»","uk":"Мара каже: «Дякую, і вам також.»","bks":"Mara kaže: „Hvala, također.“","ro":"Mara spune: „Mulțumesc, la fel.“"}','baeckerei','abschied'),
('22222222-2222-2222-2222-222222222222',16,'Mara verlässt die Bäckerei.','{"tr":"Mara fırından çıkıyor.","ar":"تغادر مارا المخبز.","uk":"Мара виходить із пекарні.","bks":"Mara izlazi iz pekare.","ro":"Mara iese din brutărie."}','baeckerei','ausgang');

-- 22 A1-Vokabeln mit Beispielen
INSERT INTO public.vocabulary (lesson_id, position, term, translations, word_class, article, plural, example, example_translations, collocations) VALUES
('22222222-2222-2222-2222-222222222222',1,'Bäckerei','{"tr":"fırın","ar":"مخبز","uk":"пекарня","bks":"pekara","ro":"brutărie"}','Nomen','die','Bäckereien','Ich gehe in die Bäckerei.','{"tr":"Fırına gidiyorum.","ar":"أذهب إلى المخبز.","uk":"Я йду до пекарні.","bks":"Idem u pekaru.","ro":"Merg la brutărie."}',ARRAY['in die Bäckerei gehen']),
('22222222-2222-2222-2222-222222222222',2,'Brot','{"tr":"ekmek","ar":"خبز","uk":"хліб","bks":"hljeb","ro":"pâine"}','Nomen','das','Brote','Ich hätte gern ein Brot, bitte.','{"tr":"Bir ekmek alabilir miyim, lütfen?","ar":"أود خبزًا، من فضلك.","uk":"Я хотіла б один хліб, будь ласка.","bks":"Htio/Htjela bih jedan hljeb, molim.","ro":"Aș dori o pâine, vă rog."}',ARRAY['ein Brot kaufen','Brot schneiden']),
('22222222-2222-2222-2222-222222222222',3,'Mischbrot','{"tr":"karışık unlu ekmek","ar":"خبز مخلوط","uk":"змішаний хліб","bks":"miješani hljeb","ro":"pâine mixtă"}','Nomen','das','Mischbrote','Ich nehme ein Mischbrot.','{"tr":"Bir karışık ekmek alıyorum.","ar":"سآخذ خبزًا مخلوطًا.","uk":"Я візьму один змішаний хліб.","bks":"Uzet ću jedan miješani hljeb.","ro":"Iau o pâine mixtă."}',ARRAY['ein Mischbrot nehmen']),
('22222222-2222-2222-2222-222222222222',4,'Brötchen','{"tr":"küçük ekmek","ar":"لفافة خبز","uk":"булочка","bks":"pecivo","ro":"chiflă"}','Nomen','das','Brötchen','Ich nehme vier Brötchen.','{"tr":"Dört küçük ekmek alıyorum.","ar":"سآخذ أربع لفائف خبز.","uk":"Я візьму чотири булочки.","bks":"Uzet ću četiri peciva.","ro":"Iau patru chifle."}',ARRAY['vier Brötchen','frische Brötchen']),
('22222222-2222-2222-2222-222222222222',5,'Brezel','{"tr":"pretzel","ar":"بريتزل","uk":"крендель","bks":"pereca","ro":"covrig"}','Nomen','die','Brezeln','Zwei Brezeln, bitte.','{"tr":"İki pretzel, lütfen.","ar":"قطعتان من البريتزل، من فضلك.","uk":"Два кренделі, будь ласка.","bks":"Dvije perece, molim.","ro":"Doi covrigi, vă rog."}',ARRAY['eine Brezel nehmen']),
('22222222-2222-2222-2222-222222222222',6,'Verkäuferin','{"tr":"satıcı","ar":"بائعة","uk":"продавчиня","bks":"prodavačica","ro":"vânzătoare"}','Nomen','die','Verkäuferinnen','Die Verkäuferin hilft mir.','{"tr":"Satıcı bana yardım ediyor.","ar":"البائعة تساعدني.","uk":"Продавчиня мені допомагає.","bks":"Prodavačica mi pomaže.","ro":"Vânzătoarea mă ajută."}',ARRAY['die Verkäuferin fragen']),
('22222222-2222-2222-2222-222222222222',7,'Kundin','{"tr":"müşteri","ar":"زبونة","uk":"покупчиня","bks":"kupac","ro":"clientă"}','Nomen','die','Kundinnen','Die Kundin bezahlt.','{"tr":"Müşteri ödüyor.","ar":"الزبونة تدفع.","uk":"Покупчиня платить.","bks":"Kupac plaća.","ro":"Clienta plătește."}',ARRAY['die Kundin fragt']),
('22222222-2222-2222-2222-222222222222',8,'Theke','{"tr":"tezgâh","ar":"منضدة","uk":"прилавок","bks":"pult","ro":"tejghea"}','Nomen','die','Theken','Die Tüte liegt auf der Theke.','{"tr":"Poşet tezgâhın üzerinde.","ar":"الكيس على المنضدة.","uk":"Пакет лежить на прилавку.","bks":"Kesa je na pultu.","ro":"Punga este pe tejghea."}',ARRAY['hinter der Theke','vor der Theke']),
('22222222-2222-2222-2222-222222222222',9,'Regal','{"tr":"raf","ar":"رف","uk":"полиця","bks":"polica","ro":"raft"}','Nomen','das','Regale','Das Brot liegt im Regal.','{"tr":"Ekmek rafta.","ar":"الخبز في الرف.","uk":"Хліб лежить на полиці.","bks":"Hljeb je na polici.","ro":"Pâinea este pe raft."}',ARRAY['im Regal']),
('22222222-2222-2222-2222-222222222222',10,'Tüte','{"tr":"poşet","ar":"كيس","uk":"пакет","bks":"kesa","ro":"pungă"}','Nomen','die','Tüten','Alles kommt in eine Tüte.','{"tr":"Her şey bir poşete konuyor.","ar":"كل شيء يوضع في كيس.","uk":"Усе кладуть у пакет.","bks":"Sve ide u kesu.","ro":"Totul intră într-o pungă."}',ARRAY['in eine Tüte legen']),
('22222222-2222-2222-2222-222222222222',11,'Karte','{"tr":"kart","ar":"بطاقة","uk":"картка","bks":"kartica","ro":"card"}','Nomen','die','Karten','Ich bezahle mit Karte.','{"tr":"Kartla ödüyorum.","ar":"أدفع بالبطاقة.","uk":"Я плачу карткою.","bks":"Plaćam karticom.","ro":"Plătesc cu cardul."}',ARRAY['mit Karte bezahlen']),
('22222222-2222-2222-2222-222222222222',12,'schneiden','{"tr":"kesmek","ar":"يقطع","uk":"різати","bks":"rezati","ro":"a tăia"}','Verb','','','Die Verkäuferin schneidet das Brot.','{"tr":"Satıcı ekmeği kesiyor.","ar":"البائعة تقطع الخبز.","uk":"Продавчиня ріже хліб.","bks":"Prodavačica reže hljeb.","ro":"Vânzătoarea taie pâinea."}',ARRAY['Brot schneiden','geschnittenes Brot']),
('22222222-2222-2222-2222-222222222222',13,'bezahlen','{"tr":"ödemek","ar":"يدفع","uk":"платити","bks":"platiti","ro":"a plăti"}','Verb','','','Ich bezahle mit Karte.','{"tr":"Kartla ödüyorum.","ar":"أدفع بالبطاقة.","uk":"Я плачу карткою.","bks":"Plaćam karticom.","ro":"Plătesc cu cardul."}',ARRAY['mit Karte bezahlen','bar bezahlen']),
('22222222-2222-2222-2222-222222222222',14,'nehmen','{"tr":"almak","ar":"يأخذ","uk":"брати","bks":"uzeti","ro":"a lua"}','Verb','','','Ich nehme zwei Brezeln.','{"tr":"İki pretzel alıyorum.","ar":"سآخذ قطعتين من البريتزل.","uk":"Я візьму два кренделі.","bks":"Uzet ću dvije perece.","ro":"Iau doi covrigi."}',ARRAY['ich nehme ...']),
('22222222-2222-2222-2222-222222222222',15,'möchten','{"tr":"istemek","ar":"يرغب","uk":"хотіти","bks":"željeti","ro":"a dori"}','Verb','','','Möchten Sie das Brot geschnitten?','{"tr":"Ekmeği dilimlenmiş ister misiniz?","ar":"هل تريدين الخبز مقطعًا؟","uk":"Бажаєте хліб нарізаний?","bks":"Želite li da hljeb bude narezan?","ro":"Doriți pâinea feliată?"}',ARRAY['möchten Sie ...?']),
('22222222-2222-2222-2222-222222222222',16,'geschnitten','{"tr":"dilimlenmiş","ar":"مقطع","uk":"нарізаний","bks":"narezan","ro":"feliat"}','Adjektiv','','','Ich möchte das Brot geschnitten.','{"tr":"Ekmeği dilimlenmiş istiyorum.","ar":"أريد الخبز مقطعًا.","uk":"Я хочу хліб нарізаний.","bks":"Želim da hljeb bude narezan.","ro":"Vreau pâinea feliată."}',ARRAY['Brot geschnitten']),
('22222222-2222-2222-2222-222222222222',17,'frisch','{"tr":"taze","ar":"طازج","uk":"свіжий","bks":"svjež","ro":"proaspăt"}','Adjektiv','','','Die Brötchen sind frisch.','{"tr":"Küçük ekmekler taze.","ar":"لفائف الخبز طازجة.","uk":"Булочки свіжі.","bks":"Peciva su svježa.","ro":"Chiflele sunt proaspete."}',ARRAY['frische Brötchen']),
('22222222-2222-2222-2222-222222222222',18,'noch','{"tr":"daha / başka","ar":"أيضًا / المزيد","uk":"ще","bks":"još","ro":"încă"}','Adverb','','','Möchten Sie noch etwas?','{"tr":"Başka bir şey ister misiniz?","ar":"هل تريدين شيئًا آخر؟","uk":"Бажаєте ще щось?","bks":"Želite li još nešto?","ro":"Mai doriți ceva?"}',ARRAY['noch etwas']),
('22222222-2222-2222-2222-222222222222',19,'bitte','{"tr":"lütfen","ar":"من فضلك","uk":"будь ласка","bks":"molim","ro":"vă rog"}','Partikel','','','Zwei Brötchen, bitte.','{"tr":"İki küçük ekmek, lütfen.","ar":"لفافتان، من فضلك.","uk":"Дві булочки, будь ласка.","bks":"Dva peciva, molim.","ro":"Două chifle, vă rog."}',ARRAY['bitte','ja, bitte']),
('22222222-2222-2222-2222-222222222222',20,'danke','{"tr":"teşekkürler","ar":"شكرًا","uk":"дякую","bks":"hvala","ro":"mulțumesc"}','Partikel','','','Danke, Ihnen auch.','{"tr":"Teşekkürler, size de.","ar":"شكرًا، ولك أيضًا.","uk":"Дякую, і вам також.","bks":"Hvala, također.","ro":"Mulțumesc, la fel."}',ARRAY['vielen Dank']),
('22222222-2222-2222-2222-222222222222',21,'Euro','{"tr":"euro","ar":"يورو","uk":"євро","bks":"euro","ro":"euro"}','Nomen','der','Euro','Das macht acht Euro sechzig.','{"tr":"Sekiz euro altmış.","ar":"المجموع ثمانية يورو وستون سنتًا.","uk":"Разом вісім євро шістдесят.","bks":"To je osam eura i šezdeset centi.","ro":"În total sunt opt euro și șaizeci."}',ARRAY['acht Euro sechzig']),
('22222222-2222-2222-2222-222222222222',22,'etwas','{"tr":"bir şey","ar":"شيء","uk":"щось","bks":"nešto","ro":"ceva"}','Pronomen','','','Sonst noch etwas?','{"tr":"Başka bir şey?","ar":"شيء آخر؟","uk":"Ще щось?","bks":"Još nešto?","ro":"Altceva?"}',ARRAY['noch etwas','sonst noch etwas']);

-- Drei zusammenhängende Dialoge
INSERT INTO public.dialogs (lesson_id, position, speaker, german_text, translations, dialog_index, dialog_title, speaker_role) VALUES
('22222222-2222-2222-2222-222222222222',1,'A','Guten Morgen!','{"tr":"Günaydın!","ar":"صباح الخير!","uk":"Доброго ранку!","bks":"Dobro jutro!","ro":"Bună dimineața!"}',1,'Brot und Brötchen kaufen','Verkäuferin'),
('22222222-2222-2222-2222-222222222222',2,'B','Guten Morgen. Ich hätte gern ein Mischbrot, bitte.','{"tr":"Günaydın. Bir karışık ekmek alabilir miyim, lütfen?","ar":"صباح الخير. أود خبزًا مخلوطًا، من فضلك.","uk":"Доброго ранку. Я хотіла б один змішаний хліб, будь ласка.","bks":"Dobro jutro. Htjela bih jedan miješani hljeb, molim.","ro":"Bună dimineața. Aș dori o pâine mixtă, vă rog."}',1,'Brot und Brötchen kaufen','Kundin'),
('22222222-2222-2222-2222-222222222222',3,'A','Gerne. Möchten Sie das Brot geschnitten?','{"tr":"Tabii. Ekmeği dilimlenmiş ister misiniz?","ar":"بكل سرور. هل تريدين الخبز مقطعًا؟","uk":"Звичайно. Бажаєте хліб нарізаний?","bks":"Naravno. Želite li da hljeb bude narezan?","ro":"Sigur. Doriți pâinea feliată?"}',1,'Brot und Brötchen kaufen','Verkäuferin'),
('22222222-2222-2222-2222-222222222222',4,'B','Ja, bitte. Und vier Brötchen, bitte.','{"tr":"Evet, lütfen. Bir de dört küçük ekmek, lütfen.","ar":"نعم، من فضلك. وأربع لفائف خبز أيضًا.","uk":"Так, будь ласка. І ще чотири булочки.","bks":"Da, molim. I četiri peciva, molim.","ro":"Da, vă rog. Și patru chifle, vă rog."}',1,'Brot und Brötchen kaufen','Kundin'),
('22222222-2222-2222-2222-222222222222',5,'A','Sehr gern. Sonst noch etwas?','{"tr":"Memnuniyetle. Başka bir şey?","ar":"بكل سرور. شيء آخر؟","uk":"Із задоволенням. Ще щось?","bks":"Naravno. Još nešto?","ro":"Cu plăcere. Mai doriți ceva?"}',1,'Brot und Brötchen kaufen','Verkäuferin'),
('22222222-2222-2222-2222-222222222222',6,'B','Nein, danke.','{"tr":"Hayır, teşekkürler.","ar":"لا، شكرًا.","uk":"Ні, дякую.","bks":"Ne, hvala.","ro":"Nu, mulțumesc."}',1,'Brot und Brötchen kaufen','Kundin'),

('22222222-2222-2222-2222-222222222222',7,'B','Entschuldigung, sind in diesem Gebäck Nüsse?','{"tr":"Affedersiniz, bu hamur işinde fındık veya kuruyemiş var mı?","ar":"عذرًا، هل توجد مكسرات في هذه المخبوزات؟","uk":"Перепрошую, у цій випічці є горіхи?","bks":"Izvinite, ima li u ovom pecivu orašastih plodova?","ro":"Scuzați-mă, sunt nuci în acest produs de patiserie?"}',2,'Nach Zutaten fragen','Kundin'),
('22222222-2222-2222-2222-222222222222',8,'A','Nein, in diesem Gebäck sind keine Nüsse.','{"tr":"Hayır, bu hamur işinde kuruyemiş yok.","ar":"لا، لا توجد مكسرات في هذه المخبوزات.","uk":"Ні, у цій випічці немає горіхів.","bks":"Ne, u ovom pecivu nema orašastih plodova.","ro":"Nu, acest produs nu conține nuci."}',2,'Nach Zutaten fragen','Verkäuferin'),
('22222222-2222-2222-2222-222222222222',9,'B','Gut, dann nehme ich eins, bitte.','{"tr":"Tamam, o zaman bir tane alayım, lütfen.","ar":"حسنًا، إذن سآخذ واحدة، من فضلك.","uk":"Добре, тоді я візьму одну, будь ласка.","bks":"Dobro, onda ću uzeti jedno, molim.","ro":"Bine, atunci iau unul, vă rog."}',2,'Nach Zutaten fragen','Kundin'),
('22222222-2222-2222-2222-222222222222',10,'A','Gerne.','{"tr":"Tabii.","ar":"بكل سرور.","uk":"Звичайно.","bks":"Naravno.","ro":"Sigur."}',2,'Nach Zutaten fragen','Verkäuferin'),

('22222222-2222-2222-2222-222222222222',11,'A','Das macht acht Euro sechzig.','{"tr":"Sekiz euro altmış.","ar":"المجموع ثمانية يورو وستون سنتًا.","uk":"Разом вісім євро шістдесят.","bks":"To je osam eura i šezdeset centi.","ro":"În total sunt opt euro și șaizeci."}',3,'Bezahlen und verabschieden','Verkäuferin'),
('22222222-2222-2222-2222-222222222222',12,'B','Mit Karte, bitte.','{"tr":"Kartla, lütfen.","ar":"بالبطاقة، من فضلك.","uk":"Карткою, будь ласка.","bks":"Karticom, molim.","ro":"Cu cardul, vă rog."}',3,'Bezahlen und verabschieden','Kundin'),
('22222222-2222-2222-2222-222222222222',13,'A','Danke. Hier ist Ihre Tüte.','{"tr":"Teşekkürler. Poşetiniz burada.","ar":"شكرًا. هذا كيسك.","uk":"Дякую. Ось ваш пакет.","bks":"Hvala. Evo vaše kese.","ro":"Mulțumesc. Iată punga dumneavoastră."}',3,'Bezahlen und verabschieden','Verkäuferin'),
('22222222-2222-2222-2222-222222222222',14,'B','Danke. Auf Wiedersehen!','{"tr":"Teşekkürler. Hoşça kalın!","ar":"شكرًا. إلى اللقاء!","uk":"Дякую. До побачення!","bks":"Hvala. Doviđenja!","ro":"Mulțumesc. La revedere!"}',3,'Bezahlen und verabschieden','Kundin'),
('22222222-2222-2222-2222-222222222222',15,'A','Auf Wiedersehen!','{"tr":"Hoşça kalın!","ar":"إلى اللقاء!","uk":"До побачення!","bks":"Doviđenja!","ro":"La revedere!"}',3,'Bezahlen und verabschieden','Verkäuferin');

-- ÜBUNGEN (16 Aufgaben)
INSERT INTO public.quiz_questions (id, lesson_id, position, kind, prompt, explanation, section, data) VALUES
('b1000000-0000-0000-0000-000000000001','22222222-2222-2222-2222-222222222222',1,'single_choice','Was möchte Mara zuerst kaufen?','Achte auf die erste Bestellung im Dialog.','uebungen','{}'),
('b1000000-0000-0000-0000-000000000002','22222222-2222-2222-2222-222222222222',2,'true_false','Mara möchte das Brot ungeschnitten.','Die Verkäuferin fragt nach dem Schneiden und Mara sagt „Ja, bitte.“','uebungen','{}'),
('b1000000-0000-0000-0000-000000000003','22222222-2222-2222-2222-222222222222',3,'gap_select','Ich hätte gern ___ Mischbrot, bitte.','Bei „Mischbrot“ steht hier der unbestimmte Artikel „ein“.','uebungen','{"options":["ein","eine","einen","einer"]}'),
('b1000000-0000-0000-0000-000000000004','22222222-2222-2222-2222-222222222222',4,'sentence_order','Baue den höflichen Satz.','Beginne mit „Ich“ und nutze die feste Wendung „hätte gern“.','uebungen','{"words":["Ich","hätte","gern","vier","Brötchen","bitte."]}'),
('b1000000-0000-0000-0000-000000000005','22222222-2222-2222-2222-222222222222',5,'gap_select','Die Brezeln liegen ___ den Brötchen.','Gesucht ist eine lokale Präposition.','uebungen','{"options":["neben","unter","hinter","zwischen"]}'),
('b1000000-0000-0000-0000-000000000006','22222222-2222-2222-2222-222222222222',6,'multi_choice','Welche Sätze kann eine Kundin in der Bäckerei natürlich sagen?','Mehrere Antworten sind richtig.','uebungen','{}'),
('b1000000-0000-0000-0000-000000000007','22222222-2222-2222-2222-222222222222',7,'single_choice','Was bedeutet „Sonst noch etwas?“','Das ist eine typische Frage beim Einkaufen.','uebungen','{}'),
('b1000000-0000-0000-0000-000000000008','22222222-2222-2222-2222-222222222222',8,'match','Ordne die Wörter ihrer Bedeutung zu.','Nutze deine ausgewählte Hilfssprache.','uebungen','{"pairs":[{"left":"die Bäckerei","translations":{"tr":"fırın","ar":"مخبز","uk":"пекарня","bks":"pekara","ro":"brutărie"}},{"left":"das Brot","translations":{"tr":"ekmek","ar":"خبز","uk":"хліб","bks":"hljeb","ro":"pâine"}},{"left":"die Tüte","translations":{"tr":"poşet","ar":"كيس","uk":"пакет","bks":"kesa","ro":"pungă"}},{"left":"bezahlen","translations":{"tr":"ödemek","ar":"يدفع","uk":"платити","bks":"platiti","ro":"a plăti"}}]}'),
('b1000000-0000-0000-0000-000000000009','22222222-2222-2222-2222-222222222222',9,'dialog_order','Bringe den kurzen Bestelldialog in die richtige Reihenfolge.','Erst begrüßen, dann bestellen, dann reagiert die Verkäuferin.','uebungen','{"items":["Verkäuferin: Guten Morgen!","Kundin: Guten Morgen. Ich hätte gern ein Mischbrot, bitte.","Verkäuferin: Gerne. Möchten Sie das Brot geschnitten?","Kundin: Ja, bitte."]}'),
('b1000000-0000-0000-0000-000000000010','22222222-2222-2222-2222-222222222222',10,'single_choice','Die Verkäuferin fragt: „Sonst noch etwas?“ Was passt?','Wähle eine natürliche Antwort.','uebungen','{}'),
('b1000000-0000-0000-0000-000000000011','22222222-2222-2222-2222-222222222222',11,'gap','Das macht acht Euro ___.','Schreibe die Zahl als Wort.','uebungen','{}'),
('b1000000-0000-0000-0000-000000000012','22222222-2222-2222-2222-222222222222',12,'single_choice','Wie fragt man höflich nach Nüssen?','Die Frage muss kurz, korrekt und natürlich sein.','uebungen','{}'),
('b1000000-0000-0000-0000-000000000013','22222222-2222-2222-2222-222222222222',13,'order','Bringe den Einkauf in die richtige Reihenfolge.','Folge dem roten Faden der Geschichte.','uebungen','{"items":["Die Kundin begrüßt die Verkäuferin.","Sie bestellt Brot und Brötchen.","Die Verkäuferin packt alles ein.","Die Kundin bezahlt.","Beide verabschieden sich."]}'),
('b1000000-0000-0000-0000-000000000014','22222222-2222-2222-2222-222222222222',14,'single_choice','Wo steht die Verkäuferin?','Nutze den Abschnitt „Wo ist was?“.','uebungen','{}'),
('b1000000-0000-0000-0000-000000000015','22222222-2222-2222-2222-222222222222',15,'sentence_order','Baue den Satz zum Bezahlen.','Der Satz beginnt mit „Ich“.','uebungen','{"words":["Ich","bezahle","mit","Karte."]}'),
('b1000000-0000-0000-0000-000000000016','22222222-2222-2222-2222-222222222222',16,'true_false','„Ich hätte gern …“ ist eine höfliche Form beim Bestellen.','Diese Wendung ist beim Einkaufen sehr üblich.','uebungen','{}');

-- Antworten Übungen
INSERT INTO public.quiz_answers (question_id, position, text, is_correct) VALUES
('b1000000-0000-0000-0000-000000000001',1,'ein Mischbrot',true),('b1000000-0000-0000-0000-000000000001',2,'einen Kaffee',false),('b1000000-0000-0000-0000-000000000001',3,'einen Kuchen',false),('b1000000-0000-0000-0000-000000000001',4,'eine Tüte',false),
('b1000000-0000-0000-0000-000000000002',1,'Richtig',false),('b1000000-0000-0000-0000-000000000002',2,'Falsch',true),
('b1000000-0000-0000-0000-000000000003',1,'ein',true),
('b1000000-0000-0000-0000-000000000006',1,'Ich hätte gern ein Brot, bitte.',true),('b1000000-0000-0000-0000-000000000006',2,'Zwei Brezeln, bitte.',true),('b1000000-0000-0000-0000-000000000006',3,'Gib Brot.',false),('b1000000-0000-0000-0000-000000000006',4,'Ich nehme vier Brötchen, bitte.',true),
('b1000000-0000-0000-0000-000000000007',1,'Möchten Sie noch etwas?',true),('b1000000-0000-0000-0000-000000000007',2,'Wo wohnen Sie?',false),('b1000000-0000-0000-0000-000000000007',3,'Wie spät ist es?',false),
('b1000000-0000-0000-0000-000000000010',1,'Ja, zwei Brezeln, bitte.',true),('b1000000-0000-0000-0000-000000000010',2,'Ich wohne in Graz.',false),('b1000000-0000-0000-0000-000000000010',3,'Heute ist Montag.',false),
('b1000000-0000-0000-0000-000000000011',1,'sechzig',true),
('b1000000-0000-0000-0000-000000000012',1,'Sind in diesem Gebäck Nüsse?',true),('b1000000-0000-0000-0000-000000000012',2,'Wo Nüsse?',false),('b1000000-0000-0000-0000-000000000012',3,'Nüsse machen?',false),
('b1000000-0000-0000-0000-000000000014',1,'hinter der Theke',true),('b1000000-0000-0000-0000-000000000014',2,'unter der Theke',false),('b1000000-0000-0000-0000-000000000014',3,'auf der Theke',false),
('b1000000-0000-0000-0000-000000000016',1,'Richtig',true),('b1000000-0000-0000-0000-000000000016',2,'Falsch',false);

-- ABSCHLUSSTEST (6 Aufgaben)
INSERT INTO public.quiz_questions (id, lesson_id, position, kind, prompt, explanation, section, data) VALUES
('b2000000-0000-0000-0000-000000000001','22222222-2222-2222-2222-222222222222',1,'single_choice','Welche Bestellung klingt natürlich und höflich?','Achte auf eine typische Formulierung in der Bäckerei.','test','{}'),
('b2000000-0000-0000-0000-000000000002','22222222-2222-2222-2222-222222222222',2,'gap_select','Die Tüte liegt ___ der Theke.','Gesucht ist eine lokale Präposition.','test','{"options":["auf","unter","hinter","zwischen"]}'),
('b2000000-0000-0000-0000-000000000003','22222222-2222-2222-2222-222222222222',3,'sentence_order','Baue den Satz.','Nutze die Wörter in der richtigen Reihenfolge.','test','{"words":["Zwei","Brezeln","bitte."]}'),
('b2000000-0000-0000-0000-000000000004','22222222-2222-2222-2222-222222222222',4,'multi_choice','Welche Aussagen passen zur Geschichte?','Mehrere Antworten sind richtig.','test','{}'),
('b2000000-0000-0000-0000-000000000005','22222222-2222-2222-2222-222222222222',5,'dialog_order','Ordne den Bezahl-Dialog.','Zuerst nennt die Verkäuferin den Preis.','test','{"items":["Verkäuferin: Das macht acht Euro sechzig.","Kundin: Mit Karte, bitte.","Verkäuferin: Danke. Hier ist Ihre Tüte.","Kundin: Danke. Auf Wiedersehen!"]}'),
('b2000000-0000-0000-0000-000000000006','22222222-2222-2222-2222-222222222222',6,'true_false','In der Bäckerei kann man sagen: „Ich hätte gern ein Brot, bitte.“','Das ist eine natürliche und höfliche Bestellung.','test','{}');

INSERT INTO public.quiz_answers (question_id, position, text, is_correct) VALUES
('b2000000-0000-0000-0000-000000000001',1,'Ich hätte gern ein Mischbrot, bitte.',true),('b2000000-0000-0000-0000-000000000001',2,'Brot bestellen jetzt.',false),('b2000000-0000-0000-0000-000000000001',3,'Du gibst mir Brot.',false),
('b2000000-0000-0000-0000-000000000002',1,'auf',true),
('b2000000-0000-0000-0000-000000000004',1,'Mara kauft ein Mischbrot.',true),('b2000000-0000-0000-0000-000000000004',2,'Mara kauft vier Brötchen.',true),('b2000000-0000-0000-0000-000000000004',3,'Mara bezahlt mit Karte.',true),('b2000000-0000-0000-0000-000000000004',4,'Mara kauft zehn Kuchen.',false),
('b2000000-0000-0000-0000-000000000006',1,'Richtig',true),('b2000000-0000-0000-0000-000000000006',2,'Falsch',false);
