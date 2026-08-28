-- RealLife German: vollständige A1-Musterlektion "Im Supermarkt" (90 Sekunden)
-- Niveau-Grundlage: GER A1 – sehr einfache, konkrete Alltagssätze, klare Standardsprache,
-- unmittelbare Bedürfnisse, einfache Fragen/Antworten und häufige Wiederholung.

UPDATE public.lessons
SET description = 'Ein kompletter, einfacher Einkauf: Supermarkt betreten, Einkaufswagen nehmen, Produkte suchen, an der Kasse bezahlen und sich verabschieden.',
    level = 'A1',
    region = 'de',
    category_slug = 'alltag',
    subcategory_slug = 'supermarkt',
    duration_seconds = 90,
    is_premium = false,
    status = 'published',
    updated_at = now()
WHERE id = '11111111-1111-1111-1111-111111111111';

DELETE FROM public.quiz_answers
WHERE question_id IN (
  SELECT id FROM public.quiz_questions
  WHERE lesson_id = '11111111-1111-1111-1111-111111111111'
);
DELETE FROM public.quiz_questions WHERE lesson_id = '11111111-1111-1111-1111-111111111111';
DELETE FROM public.dialogs WHERE lesson_id = '11111111-1111-1111-1111-111111111111';
DELETE FROM public.vocabulary WHERE lesson_id = '11111111-1111-1111-1111-111111111111';
DELETE FROM public.lesson_scenes WHERE lesson_id = '11111111-1111-1111-1111-111111111111';

INSERT INTO public.lesson_scenes (lesson_id, position, german_text, translations) VALUES
('11111111-1111-1111-1111-111111111111',1,'Ich gehe in den Supermarkt.', '{"tr":"Süpermarkete gidiyorum.","ar":"أذهب إلى السوبرماركت.","uk":"Я йду до супермаркету.","bks":"Idem u supermarket.","ro":"Merg la supermarket."}'::jsonb),
('11111111-1111-1111-1111-111111111111',2,'Ich nehme einen Einkaufswagen.', '{"tr":"Bir alışveriş arabası alıyorum.","ar":"آخذ عربة تسوق.","uk":"Я беру візок для покупок.","bks":"Uzimam kolica za kupovinu.","ro":"Iau un cărucior de cumpărături."}'::jsonb),
('11111111-1111-1111-1111-111111111111',3,'Ich brauche Brot, Milch und Äpfel.', '{"tr":"Ekmek, süt ve elmaya ihtiyacım var.","ar":"أحتاج إلى خبز وحليب وتفاح.","uk":"Мені потрібні хліб, молоко та яблука.","bks":"Trebaju mi hljeb, mlijeko i jabuke.","ro":"Am nevoie de pâine, lapte și mere."}'::jsonb),
('11111111-1111-1111-1111-111111111111',4,'Zuerst nehme ich Brot.', '{"tr":"Önce ekmek alıyorum.","ar":"أولاً آخذ الخبز.","uk":"Спочатку я беру хліб.","bks":"Prvo uzimam hljeb.","ro":"Mai întâi iau pâine."}'::jsonb),
('11111111-1111-1111-1111-111111111111',5,'Dann suche ich die Milch.', '{"tr":"Sonra sütü arıyorum.","ar":"ثم أبحث عن الحليب.","uk":"Потім я шукаю молоко.","bks":"Zatim tražim mlijeko.","ro":"Apoi caut laptele."}'::jsonb),
('11111111-1111-1111-1111-111111111111',6,'Entschuldigung, wo ist die Milch?', '{"tr":"Affedersiniz, süt nerede?","ar":"عذراً، أين الحليب؟","uk":"Перепрошую, де молоко?","bks":"Izvinite, gdje je mlijeko?","ro":"Scuzați-mă, unde este laptele?"}'::jsonb),
('11111111-1111-1111-1111-111111111111',7,'Die Milch ist dort hinten.', '{"tr":"Süt arka tarafta.","ar":"الحليب هناك في الخلف.","uk":"Молоко там позаду.","bks":"Mlijeko je tamo pozadi.","ro":"Laptele este acolo, în spate."}'::jsonb),
('11111111-1111-1111-1111-111111111111',8,'Danke.', '{"tr":"Teşekkür ederim.","ar":"شكراً.","uk":"Дякую.","bks":"Hvala.","ro":"Mulțumesc."}'::jsonb),
('11111111-1111-1111-1111-111111111111',9,'Ich nehme sechs Äpfel.', '{"tr":"Altı elma alıyorum.","ar":"آخذ ست تفاحات.","uk":"Я беру шість яблук.","bks":"Uzimam šest jabuka.","ro":"Iau șase mere."}'::jsonb),
('11111111-1111-1111-1111-111111111111',10,'Jetzt gehe ich zur Kasse.', '{"tr":"Şimdi kasaya gidiyorum.","ar":"الآن أذهب إلى صندوق الدفع.","uk":"Тепер я йду до каси.","bks":"Sada idem na kasu.","ro":"Acum merg la casă."}'::jsonb),
('11111111-1111-1111-1111-111111111111',11,'Ich bezahle mit Karte.', '{"tr":"Kartla ödüyorum.","ar":"أدفع بالبطاقة.","uk":"Я плачу карткою.","bks":"Plaćam karticom.","ro":"Plătesc cu cardul."}'::jsonb),
('11111111-1111-1111-1111-111111111111',12,'Auf Wiedersehen!', '{"tr":"Hoşça kalın!","ar":"إلى اللقاء!","uk":"До побачення!","bks":"Doviđenja!","ro":"La revedere!"}'::jsonb);

INSERT INTO public.vocabulary (lesson_id, position, term, translations) VALUES
('11111111-1111-1111-1111-111111111111',1,'der Supermarkt','{"tr":"süpermarket","ar":"السوبرماركت","uk":"супермаркет","bks":"supermarket","ro":"supermarketul"}'::jsonb),
('11111111-1111-1111-1111-111111111111',2,'der Einkaufswagen','{"tr":"alışveriş arabası","ar":"عربة التسوق","uk":"візок для покупок","bks":"kolica za kupovinu","ro":"căruciorul de cumpărături"}'::jsonb),
('11111111-1111-1111-1111-111111111111',3,'die Milch','{"tr":"süt","ar":"الحليب","uk":"молоко","bks":"mlijeko","ro":"laptele"}'::jsonb),
('11111111-1111-1111-1111-111111111111',4,'das Brot','{"tr":"ekmek","ar":"الخبز","uk":"хліб","bks":"hljeb","ro":"pâinea"}'::jsonb),
('11111111-1111-1111-1111-111111111111',5,'der Apfel','{"tr":"elma","ar":"التفاحة","uk":"яблуко","bks":"jabuka","ro":"mărul"}'::jsonb),
('11111111-1111-1111-1111-111111111111',6,'die Kasse','{"tr":"kasa","ar":"صندوق الدفع","uk":"каса","bks":"kasa","ro":"casa"}'::jsonb),
('11111111-1111-1111-1111-111111111111',7,'suchen','{"tr":"aramak","ar":"يبحث","uk":"шукати","bks":"tražiti","ro":"a căuta"}'::jsonb),
('11111111-1111-1111-1111-111111111111',8,'bezahlen','{"tr":"ödemek","ar":"يدفع","uk":"платити","bks":"platiti","ro":"a plăti"}'::jsonb);

INSERT INTO public.dialogs (lesson_id, position, speaker, german_text, translations) VALUES
('11111111-1111-1111-1111-111111111111',1,'A','Entschuldigung, wo ist die Milch?','{"tr":"Affedersiniz, süt nerede?","ar":"عذراً، أين الحليب؟","uk":"Перепрошую, де молоко?","bks":"Izvinite, gdje je mlijeko?","ro":"Scuzați-mă, unde este laptele?"}'::jsonb),
('11111111-1111-1111-1111-111111111111',2,'B','Die Milch ist dort hinten.','{"tr":"Süt arka tarafta.","ar":"الحليب هناك في الخلف.","uk":"Молоко там позаду.","bks":"Mlijeko je tamo pozadi.","ro":"Laptele este acolo, în spate."}'::jsonb),
('11111111-1111-1111-1111-111111111111',3,'A','Danke!','{"tr":"Teşekkür ederim!","ar":"شكراً!","uk":"Дякую!","bks":"Hvala!","ro":"Mulțumesc!"}'::jsonb),
('11111111-1111-1111-1111-111111111111',4,'B','Gerne.','{"tr":"Rica ederim.","ar":"على الرحب والسعة.","uk":"Будь ласка.","bks":"Nema na čemu.","ro":"Cu plăcere."}'::jsonb);

INSERT INTO public.quiz_questions (id, lesson_id, position, kind, prompt, explanation) VALUES
('a1000000-0000-0000-0000-000000000001','11111111-1111-1111-1111-111111111111',1,'multiple_choice','Was nimmt die Person am Eingang?','Am Eingang nimmt die Person einen Einkaufswagen.'),
('a1000000-0000-0000-0000-000000000002','11111111-1111-1111-1111-111111111111',2,'multiple_choice','Was sucht die Person?','Die Person sucht die Milch.'),
('a1000000-0000-0000-0000-000000000003','11111111-1111-1111-1111-111111111111',3,'gap','Ich ___ mit Karte.','Das richtige Verb ist „bezahle“.'),
('a1000000-0000-0000-0000-000000000004','11111111-1111-1111-1111-111111111111',4,'true_false','Die Person nimmt sechs Äpfel.','Im Video heißt es: „Ich nehme sechs Äpfel.“'),
('a1000000-0000-0000-0000-000000000005','11111111-1111-1111-1111-111111111111',5,'multiple_choice','Wo bezahlt die Person?','Bezahlt wird an der Kasse.'),
('a1000000-0000-0000-0000-000000000006','11111111-1111-1111-1111-111111111111',6,'multiple_choice','Was sagt die Person zum Schluss?','Zum Schluss sagt die Person: „Auf Wiedersehen!“');

INSERT INTO public.quiz_answers (question_id, position, text, is_correct) VALUES
('a1000000-0000-0000-0000-000000000001',1,'einen Einkaufswagen',true),
('a1000000-0000-0000-0000-000000000001',2,'einen Stuhl',false),
('a1000000-0000-0000-0000-000000000001',3,'einen Teller',false),
('a1000000-0000-0000-0000-000000000002',1,'die Milch',true),
('a1000000-0000-0000-0000-000000000002',2,'den Bus',false),
('a1000000-0000-0000-0000-000000000002',3,'die Schule',false),
('a1000000-0000-0000-0000-000000000003',1,'bezahle',true),
('a1000000-0000-0000-0000-000000000004',1,'Richtig',true),
('a1000000-0000-0000-0000-000000000004',2,'Falsch',false),
('a1000000-0000-0000-0000-000000000005',1,'an der Kasse',true),
('a1000000-0000-0000-0000-000000000005',2,'im Bus',false),
('a1000000-0000-0000-0000-000000000005',3,'beim Arzt',false),
('a1000000-0000-0000-0000-000000000006',1,'Auf Wiedersehen!',true),
('a1000000-0000-0000-0000-000000000006',2,'Guten Morgen!',false),
('a1000000-0000-0000-0000-000000000006',3,'Gute Nacht!',false);
