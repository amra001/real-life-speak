-- Batch 1: Ersetzt generische Mad-Libs-Platzhaltertexte durch echte, themenspezifische
-- A1-Alltagsdialoge für 8 Lektionen: Friseur, Restaurant, Kasse, Bus, Chef, Kollegen,
-- Telefonieren, Termin.

UPDATE public.lesson_scenes SET german_text = 'Ich gehe zum Friseur, weil meine Haare zu lang sind.', translations = '{"bks":"Idem kod frizera jer mi je kosa predugačka.","tr":"Saçlarım çok uzun olduğu için kuaföre gidiyorum.","uk":"Я йду до перукаря, бо моє волосся задовге.","ro":"Merg la frizer pentru că părul meu este prea lung.","ar":"أذهب إلى الحلاق لأن شعري طويل جدًا."}'::jsonb WHERE id = '6bd22632-8f96-4977-aa2a-c3adf883164c';

UPDATE public.lesson_scenes SET german_text = 'Guten Tag! Haben Sie einen Termin?', translations = '{"bks":"Dobar dan! Imate li termin?","tr":"Merhaba! Randevunuz var mı?","uk":"Доброго дня! У вас є запис?","ro":"Bună ziua! Aveți programare?","ar":"مرحبًا! هل لديك موعد؟"}'::jsonb WHERE id = '1d1c1a2c-7ddf-4f45-acc9-3a7d1e5e6d91';

UPDATE public.lesson_scenes SET german_text = 'Nein, ich habe keinen Termin.', translations = '{"bks":"Ne, nemam termin.","tr":"Hayır, randevum yok.","uk":"Ні, у мене немає запису.","ro":"Nu, nu am programare.","ar":"لا، ليس لدي موعد."}'::jsonb WHERE id = '24248e07-cdea-4a12-8ba0-69253b3e2ac8';

UPDATE public.lesson_scenes SET german_text = 'Kein Problem. Bitte setzen Sie sich.', translations = '{"bks":"Nema problema. Izvolite sjesti.","tr":"Sorun değil. Lütfen oturun.","uk":"Не проблема. Будь ласка, сідайте.","ro":"Nicio problemă. Vă rog, luați loc.","ar":"لا مشكلة. تفضل بالجلوس."}'::jsonb WHERE id = '017ceda7-1ecd-4f5b-b9e1-daa76150c5ce';

UPDATE public.lesson_scenes SET german_text = 'Wie möchten Sie Ihre Haare?', translations = '{"bks":"Kako želite svoju kosu?","tr":"Saçınızı nasıl istersiniz?","uk":"Як ви хочете зробити зачіску?","ro":"Cum doriți părul?","ar":"كيف تريد شعرك؟"}'::jsonb WHERE id = 'ffa94749-2b6d-4fb5-81b7-96d53649e62b';

UPDATE public.lesson_scenes SET german_text = 'Bitte nur die Spitzen schneiden.', translations = '{"bks":"Molim vas, samo šišajte vrhove.","tr":"Lütfen sadece uçlarını kesin.","uk":"Будь ласка, лише підстригти кінчики.","ro":"Vă rog, tăiați doar vârfurile.","ar":"من فضلك قص الأطراف فقط."}'::jsonb WHERE id = 'c3286ba8-fc51-46e9-9620-946a8c321973';

UPDATE public.lesson_scenes SET german_text = 'Wie viel soll ich abschneiden? – Nur zwei Zentimeter, bitte.', translations = '{"bks":"Koliko da odsječem? – Samo dva centimetra, molim.","tr":"Ne kadar keseyim? – Sadece iki santim, lütfen.","uk":"Скільки зрізати? – Лише два сантиметри, будь ласка.","ro":"Cât să tai? – Doar doi centimetri, vă rog.","ar":"كم يجب أن أقص؟ - سنتيمترين فقط من فضلك."}'::jsonb WHERE id = '0394ad69-173e-4347-9f6f-fb147173d47e';

UPDATE public.lesson_scenes SET german_text = 'Möchten Sie auch eine Haarwäsche?', translations = '{"bks":"Želite li i pranje kose?","tr":"Saç yıkama da ister misiniz?","uk":"Бажаєте також помити волосся?","ro":"Doriți și spălarea părului?","ar":"هل تريد أيضًا غسل الشعر؟"}'::jsonb WHERE id = 'd6d3c73c-9c6c-48c3-bf84-4e157f66c692';

UPDATE public.lesson_scenes SET german_text = 'Ja, gerne.', translations = '{"bks":"Da, rado.","tr":"Evet, lütfen.","uk":"Так, будь ласка.","ro":"Da, cu plăcere.","ar":"نعم، من فضلك."}'::jsonb WHERE id = '6c59dee2-ed80-4b05-822c-e3b1a64a952a';

UPDATE public.lesson_scenes SET german_text = 'Das Wasser ist warm. Ist das okay?', translations = '{"bks":"Voda je topla. Je li to u redu?","tr":"Su ılık. Uygun mu?","uk":"Вода тепла. Це нормально?","ro":"Apa este caldă. Este în regulă?","ar":"الماء دافئ. هل هذا مناسب؟"}'::jsonb WHERE id = '3a219d00-71ea-4f39-b1cc-ec150d5d85a3';

UPDATE public.lesson_scenes SET german_text = 'Ja, das ist perfekt.', translations = '{"bks":"Da, savršeno je.","tr":"Evet, mükemmel.","uk":"Так, ідеально.","ro":"Da, este perfect.","ar":"نعم، هذا ممتاز."}'::jsonb WHERE id = '3ff66690-9bb7-457f-a2c2-2a296e796af7';

UPDATE public.lesson_scenes SET german_text = 'So, fertig! Gefällt Ihnen der Haarschnitt?', translations = '{"bks":"Eto, gotovo! Sviđa li vam se frizura?","tr":"İşte, bitti! Saç kesiminizi beğendiniz mi?","uk":"Ось, готово! Вам подобається стрижка?","ro":"Gata! Vă place tunsoarea?","ar":"ها قد انتهينا! هل يعجبك القص؟"}'::jsonb WHERE id = '81a070c6-8d20-4341-9243-fe1c35fd91c1';

UPDATE public.lesson_scenes SET german_text = 'Ja, sehr gut. Vielen Dank!', translations = '{"bks":"Da, jako dobro. Hvala vam puno!","tr":"Evet, çok güzel. Çok teşekkür ederim!","uk":"Так, дуже добре. Дуже дякую!","ro":"Da, foarte bine. Mulțumesc mult!","ar":"نعم، جيد جدًا. شكرًا جزيلاً!"}'::jsonb WHERE id = '677ca358-be26-42cf-ba16-bc51e346984d';

UPDATE public.lesson_scenes SET german_text = 'Das macht 25 Euro.', translations = '{"bks":"To je 25 eura.","tr":"Bu 25 avro tutuyor.","uk":"Це коштує 25 євро.","ro":"Costă 25 de euro.","ar":"يبلغ ذلك 25 يورو."}'::jsonb WHERE id = 'bde70033-8839-4ea2-ab52-5d15bf037373';

UPDATE public.lesson_scenes SET german_text = 'Hier, bitte. Auf Wiedersehen!', translations = '{"bks":"Izvolite. Doviđenja!","tr":"Buyurun. Hoşça kalın!","uk":"Прошу. До побачення!","ro":"Poftim. La revedere!","ar":"تفضل. إلى اللقاء!"}'::jsonb WHERE id = '07257b49-9259-42f3-aa01-85ac6ae4b4a8';

UPDATE public.lesson_scenes SET german_text = 'Ich gehe heute Abend mit einem Freund ins Restaurant.', translations = '{"bks":"Danas navečer idem s prijateljem u restoran.","tr":"Bu akşam bir arkadaşımla restorana gidiyorum.","uk":"Сьогодні ввечері я йду в ресторан з другом.","ro":"În seara asta merg la restaurant cu un prieten.","ar":"سأذهب مساء اليوم مع صديق إلى المطعم."}'::jsonb WHERE id = '42f28e1c-203a-45a7-99f7-1e31c4199662';

UPDATE public.lesson_scenes SET german_text = 'Guten Abend! Haben Sie reserviert?', translations = '{"bks":"Dobro veče! Imate li rezervaciju?","tr":"İyi akşamlar! Rezervasyonunuz var mı?","uk":"Добрий вечір! Ви забронювали столик?","ro":"Bună seara! Ați rezervat?","ar":"مساء الخير! هل لديك حجز؟"}'::jsonb WHERE id = 'ef4a5025-9c32-45a1-836f-83fcd0ab738f';

UPDATE public.lesson_scenes SET german_text = 'Ja, auf den Namen Schmidt.', translations = '{"bks":"Da, na ime Schmidt.","tr":"Evet, Schmidt adına.","uk":"Так, на ім''я Шмідт.","ro":"Da, pe numele Schmidt.","ar":"نعم، باسم شميت."}'::jsonb WHERE id = '54058b93-7e9e-4560-8373-7494c4c80719';

UPDATE public.lesson_scenes SET german_text = 'Hier ist Ihr Tisch. Die Speisekarte, bitte.', translations = '{"bks":"Ovo je vaš sto. Izvolite jelovnik.","tr":"İşte masanız. Buyurun menü.","uk":"Ось ваш столик. Ось меню.","ro":"Iată masa dumneavoastră. Poftim meniul.","ar":"هذه طاولتكم. تفضلوا قائمة الطعام."}'::jsonb WHERE id = 'be92767f-f884-4286-90fe-bbcd2f4775c8';

UPDATE public.lesson_scenes SET german_text = 'Was können Sie mir empfehlen?', translations = '{"bks":"Šta mi možete preporučiti?","tr":"Bana ne önerirsiniz?","uk":"Що ви можете порекомендувати?","ro":"Ce îmi puteți recomanda?","ar":"بماذا تنصحني؟"}'::jsonb WHERE id = '48e0955c-fb59-41d3-a906-5065c9a2c781';

UPDATE public.lesson_scenes SET german_text = 'Die Suppe des Tages ist heute sehr gut.', translations = '{"bks":"Dnevna supa je danas jako dobra.","tr":"Günün çorbası bugün çok güzel.","uk":"Суп дня сьогодні дуже смачний.","ro":"Supa zilei este foarte bună azi.","ar":"شوربة اليوم لذيذة جدًا اليوم."}'::jsonb WHERE id = '97f0fd64-ff73-4038-bbde-f695b095d7bc';

UPDATE public.lesson_scenes SET german_text = 'Gut, ich nehme die Suppe und einen Salat.', translations = '{"bks":"Dobro, uzeću supu i salatu.","tr":"Tamam, çorba ve salata alacağım.","uk":"Добре, я візьму суп і салат.","ro":"Bine, iau supa și o salată.","ar":"حسنًا، سآخذ الشوربة وسلطة."}'::jsonb WHERE id = '36b2c96e-f0f9-4cbb-883f-67c997f14861';

UPDATE public.lesson_scenes SET german_text = 'Und was möchten Sie trinken?', translations = '{"bks":"A šta želite popiti?","tr":"Peki ne içmek istersiniz?","uk":"А що бажаєте пити?","ro":"Și ce doriți să beți?","ar":"وماذا تريد أن تشرب؟"}'::jsonb WHERE id = '59d90cd3-a5a8-41c7-9c2a-541b93c414a6';

UPDATE public.lesson_scenes SET german_text = 'Ein Wasser, bitte.', translations = '{"bks":"Jednu vodu, molim.","tr":"Bir su, lütfen.","uk":"Одну воду, будь ласка.","ro":"O apă, vă rog.","ar":"ماء واحد من فضلك."}'::jsonb WHERE id = '161b1d93-62d5-4432-853c-b9c1fb6d5e97';

UPDATE public.lesson_scenes SET german_text = 'Schmeckt Ihnen das Essen?', translations = '{"bks":"Da li vam prija hrana?","tr":"Yemek hoşunuza gitti mi?","uk":"Вам смакує їжа?","ro":"Vă place mâncarea?","ar":"هل يعجبك الطعام؟"}'::jsonb WHERE id = '8363ac98-706b-47e3-a7cb-173ffdbfba39';

UPDATE public.lesson_scenes SET german_text = 'Ja, sehr lecker, danke.', translations = '{"bks":"Da, jako je ukusno, hvala.","tr":"Evet, çok lezzetli, teşekkürler.","uk":"Так, дуже смачно, дякую.","ro":"Da, foarte gustos, mulțumesc.","ar":"نعم، لذيذ جدًا، شكرًا."}'::jsonb WHERE id = '9c9d9ac5-a179-4c68-a12a-a34a54661369';

UPDATE public.lesson_scenes SET german_text = 'Möchten Sie noch einen Nachtisch?', translations = '{"bks":"Želite li još i desert?","tr":"Tatlı ister misiniz?","uk":"Бажаєте ще десерт?","ro":"Mai doriți un desert?","ar":"هل تريد حلوى أيضًا؟"}'::jsonb WHERE id = 'f1037c42-fcf3-42bf-b0b9-26c5beae0e0f';

UPDATE public.lesson_scenes SET german_text = 'Nein, danke. Die Rechnung, bitte.', translations = '{"bks":"Ne, hvala. Račun, molim.","tr":"Hayır, teşekkürler. Hesap, lütfen.","uk":"Ні, дякую. Рахунок, будь ласка.","ro":"Nu, mulțumesc. Nota de plată, vă rog.","ar":"لا، شكرًا. الفاتورة من فضلك."}'::jsonb WHERE id = '8887fe6c-2d53-46fc-b8ea-388468956655';

UPDATE public.lesson_scenes SET german_text = 'Das macht zusammen 18 Euro.', translations = '{"bks":"To je ukupno 18 eura.","tr":"Toplam 18 avro.","uk":"Разом 18 євро.","ro":"În total 18 euro.","ar":"المجموع 18 يورو."}'::jsonb WHERE id = '6d21731b-422c-4eaa-bea4-b3e9105ebb9c';

UPDATE public.lesson_scenes SET german_text = 'Hier, bitte. Auf Wiedersehen und einen schönen Abend!', translations = '{"bks":"Izvolite. Doviđenja i prijatno veče!","tr":"Buyurun. Hoşça kalın, iyi akşamlar!","uk":"Прошу. До побачення, гарного вечора!","ro":"Poftim. La revedere și o seară plăcută!","ar":"تفضل. إلى اللقاء ومساء سعيدًا!"}'::jsonb WHERE id = '87f549c7-ffda-4cad-8760-e785f3c2c3b5';

UPDATE public.lesson_scenes SET german_text = 'Ich stehe an der Kasse im Supermarkt.', translations = '{"bks":"Stojim na kasi u supermarketu.","tr":"Süpermarkette kasadayım.","uk":"Я стою біля каси в супермаркеті.","ro":"Sunt la casă în supermarket.","ar":"أنا واقف عند الصندوق في السوبرماركت."}'::jsonb WHERE id = '8a467271-ad28-43c3-9da9-c3a7a180a9ad';

UPDATE public.lesson_scenes SET german_text = 'Haben Sie eine Kundenkarte?', translations = '{"bks":"Imate li karticu za kupce?","tr":"Müşteri kartınız var mı?","uk":"У вас є картка постійного клієнта?","ro":"Aveți card de client?","ar":"هل لديك بطاقة عميل؟"}'::jsonb WHERE id = '51875460-237e-45ef-88e5-780e07f054ec';

UPDATE public.lesson_scenes SET german_text = 'Nein, ich habe keine.', translations = '{"bks":"Ne, nemam.","tr":"Hayır, yok.","uk":"Ні, у мене немає.","ro":"Nu, nu am.","ar":"لا، ليس لدي."}'::jsonb WHERE id = 'd1fc6d07-054f-4516-a878-e5d08ed3a2ba';

UPDATE public.lesson_scenes SET german_text = 'Kein Problem. Das macht zwölf Euro fünfzig.', translations = '{"bks":"Nema problema. To je dvanaest eura i pedeset centi.","tr":"Sorun değil. On iki avro elli sent tutuyor.","uk":"Не проблема. Це дванадцять євро п''ятдесят.","ro":"Nicio problemă. Costă doisprezece euro și cincizeci.","ar":"لا مشكلة. المجموع اثنا عشر يورو وخمسون سنتًا."}'::jsonb WHERE id = 'bb3717fc-2969-49df-a323-7cda202ff1f9';

UPDATE public.lesson_scenes SET german_text = 'Kann ich mit Karte bezahlen?', translations = '{"bks":"Mogu li platiti karticom?","tr":"Kartla ödeyebilir miyim?","uk":"Чи можу я заплатити карткою?","ro":"Pot să plătesc cu cardul?","ar":"هل يمكنني الدفع بالبطاقة؟"}'::jsonb WHERE id = '37917b4e-708c-4451-874d-55b1ecdf2075';

UPDATE public.lesson_scenes SET german_text = 'Ja, natürlich. Bitte stecken Sie die Karte hier ein.', translations = '{"bks":"Da, naravno. Molim vas, ubacite karticu ovdje.","tr":"Evet, tabii. Lütfen kartı buraya takın.","uk":"Так, звісно. Будь ласка, вставте картку сюди.","ro":"Da, desigur. Vă rog introduceți cardul aici.","ar":"نعم بالطبع. من فضلك ضع البطاقة هنا."}'::jsonb WHERE id = '4065adaf-5bf2-4e58-a179-85d18ae2664f';

UPDATE public.lesson_scenes SET german_text = 'Brauchen Sie eine Tüte?', translations = '{"bks":"Treba li vam kesa?","tr":"Torbaya ihtiyacınız var mı?","uk":"Вам потрібен пакет?","ro":"Aveți nevoie de o pungă?","ar":"هل تحتاج إلى كيس؟"}'::jsonb WHERE id = 'edf316fa-227e-4efd-848b-e474cab1dc7d';

UPDATE public.lesson_scenes SET german_text = 'Ja, bitte, eine kleine Tüte.', translations = '{"bks":"Da, molim, malu kesu.","tr":"Evet, lütfen, küçük bir torba.","uk":"Так, будь ласка, маленький пакет.","ro":"Da, vă rog, o pungă mică.","ar":"نعم من فضلك، كيس صغير."}'::jsonb WHERE id = '9ba1f2df-3299-4e8a-9e2d-140879fff984';

UPDATE public.lesson_scenes SET german_text = 'Das macht fünfzig Cent extra.', translations = '{"bks":"To je pedeset centi dodatno.","tr":"Bu ekstra elli sent.","uk":"Це додатково п''ятдесят центів.","ro":"Costă cincizeci de cenți în plus.","ar":"يكلف ذلك خمسين سنتًا إضافيًا."}'::jsonb WHERE id = '99add958-8741-42c3-8708-f22dc07d51b6';

UPDATE public.lesson_scenes SET german_text = 'Kein Problem.', translations = '{"bks":"Nema problema.","tr":"Sorun değil.","uk":"Не проблема.","ro":"Nicio problemă.","ar":"لا مشكلة."}'::jsonb WHERE id = '5cb8c501-016b-4b56-a0ea-f45a047cb942';

UPDATE public.lesson_scenes SET german_text = 'Möchten Sie den Kassenbon?', translations = '{"bks":"Želite li račun?","tr":"Fişi ister misiniz?","uk":"Бажаєте чек?","ro":"Doriți bonul fiscal?","ar":"هل تريد الإيصال؟"}'::jsonb WHERE id = '27f9c7ab-3a63-4d6a-8ded-a3a814a5ce3d';

UPDATE public.lesson_scenes SET german_text = 'Ja, bitte.', translations = '{"bks":"Da, molim.","tr":"Evet, lütfen.","uk":"Так, будь ласка.","ro":"Da, vă rog.","ar":"نعم، من فضلك."}'::jsonb WHERE id = '8fd1fe1c-27fc-419a-9c64-240b72bcb862';

UPDATE public.lesson_scenes SET german_text = 'Hier ist Ihr Kassenbon und Ihre Karte.', translations = '{"bks":"Evo vašeg računa i kartice.","tr":"İşte fişiniz ve kartınız.","uk":"Ось ваш чек і картка.","ro":"Iată bonul și cardul dumneavoastră.","ar":"هذا إيصالك وبطاقتك."}'::jsonb WHERE id = '618042ca-ef19-4ee4-9111-8c9b11d05142';

UPDATE public.lesson_scenes SET german_text = 'Vielen Dank.', translations = '{"bks":"Hvala vam puno.","tr":"Çok teşekkürler.","uk":"Дуже дякую.","ro":"Mulțumesc mult.","ar":"شكرًا جزيلاً."}'::jsonb WHERE id = '94b825ab-aa9a-4dbb-b888-5db99827f10c';

UPDATE public.lesson_scenes SET german_text = 'Auf Wiedersehen und einen schönen Tag noch!', translations = '{"bks":"Doviđenja i prijatan dan!","tr":"Hoşça kalın, iyi günler!","uk":"До побачення, гарного дня!","ro":"La revedere și o zi frumoasă!","ar":"إلى اللقاء ويومًا سعيدًا!"}'::jsonb WHERE id = '05380433-e932-4b73-adeb-95ad9021a886';

UPDATE public.lesson_scenes SET german_text = 'Ich warte an der Haltestelle auf den Bus.', translations = '{"bks":"Čekam autobus na stanici.","tr":"Durakta otobüsü bekliyorum.","uk":"Я чекаю на автобус на зупинці.","ro":"Aștept autobuzul la stație.","ar":"أنتظر الحافلة عند المحطة."}'::jsonb WHERE id = '543a8a0c-7ada-406f-bb21-2c877fdade0d';

UPDATE public.lesson_scenes SET german_text = 'Entschuldigung, fährt dieser Bus zum Bahnhof?', translations = '{"bks":"Izvinite, da li ovaj autobus ide do stanice?","tr":"Affedersiniz, bu otobüs istasyona gidiyor mu?","uk":"Перепрошую, цей автобус їде до вокзалу?","ro":"Scuzați-mă, acest autobuz merge la gară?","ar":"عفوًا، هل تذهب هذه الحافلة إلى المحطة؟"}'::jsonb WHERE id = '901a542d-258d-4310-9cc6-5b361491931a';

UPDATE public.lesson_scenes SET german_text = 'Ja, das ist die richtige Linie.', translations = '{"bks":"Da, to je prava linija.","tr":"Evet, doğru hat bu.","uk":"Так, це правильний маршрут.","ro":"Da, aceasta este linia corectă.","ar":"نعم، هذا هو الخط الصحيح."}'::jsonb WHERE id = 'ac564dc4-6db4-44d0-9e4e-3570c6b3ecb0';

UPDATE public.lesson_scenes SET german_text = 'Wie viel kostet die Fahrkarte?', translations = '{"bks":"Koliko košta karta?","tr":"Bilet ne kadar?","uk":"Скільки коштує квиток?","ro":"Cât costă biletul?","ar":"كم يكلف التذكرة؟"}'::jsonb WHERE id = '472410a3-3ea3-4131-b708-44c5b80c02ca';

UPDATE public.lesson_scenes SET german_text = 'Eine Fahrkarte kostet zwei Euro achtzig.', translations = '{"bks":"Karta košta dva eura i osamdeset centi.","tr":"Bir bilet iki avro seksen sent.","uk":"Один квиток коштує два євро вісімдесят.","ro":"Un bilet costă doi euro optzeci.","ar":"تكلفة التذكرة يوروان وثمانون سنتًا."}'::jsonb WHERE id = 'e84add50-ffaf-4d79-bbc7-5461f662a5dc';

UPDATE public.lesson_scenes SET german_text = 'Kann ich beim Fahrer bezahlen?', translations = '{"bks":"Mogu li platiti kod vozača?","tr":"Şoföre ödeyebilir miyim?","uk":"Чи можу я заплатити водієві?","ro":"Pot plăti la șofer?","ar":"هل يمكنني الدفع للسائق؟"}'::jsonb WHERE id = '61363363-3d4a-4b06-833a-5d4ea0fd3de1';

UPDATE public.lesson_scenes SET german_text = 'Ja, das ist kein Problem.', translations = '{"bks":"Da, nema problema.","tr":"Evet, sorun değil.","uk":"Так, не проблема.","ro":"Da, nu este o problemă.","ar":"نعم، لا مشكلة."}'::jsonb WHERE id = '4eba9ba7-11df-4df9-ba65-f58cbcd10d2d';

UPDATE public.lesson_scenes SET german_text = 'Wo muss ich aussteigen?', translations = '{"bks":"Gdje trebam izaći?","tr":"Nerede inmem gerekiyor?","uk":"Де мені виходити?","ro":"Unde trebuie să cobor?","ar":"أين يجب أن أنزل؟"}'::jsonb WHERE id = 'd58cb19b-dcf9-4a95-938b-82d7ea1771fe';

UPDATE public.lesson_scenes SET german_text = 'An der dritten Haltestelle.', translations = '{"bks":"Na trećoj stanici.","tr":"Üçüncü durakta.","uk":"На третій зупинці.","ro":"La a treia stație.","ar":"عند المحطة الثالثة."}'::jsonb WHERE id = 'c9e01832-2e8c-4f9b-ae1e-0b7bdfe4d1f4';

UPDATE public.lesson_scenes SET german_text = 'Können Sie mir bitte Bescheid sagen?', translations = '{"bks":"Možete li mi javiti, molim vas?","tr":"Bana haber verebilir misiniz lütfen?","uk":"Скажіть мені, будь ласка, коли буде треба виходити?","ro":"Puteți să-mi spuneți, vă rog?","ar":"هل يمكنك إخباري من فضلك؟"}'::jsonb WHERE id = '760d0f41-dd10-412e-8f27-5ae0ba0d695c';

UPDATE public.lesson_scenes SET german_text = 'Ja, gerne.', translations = '{"bks":"Da, rado.","tr":"Evet, tabii.","uk":"Так, звісно.","ro":"Da, cu plăcere.","ar":"نعم، بكل سرور."}'::jsonb WHERE id = 'b1e69848-b5b9-4b9f-b536-bd3303e44fb2';

UPDATE public.lesson_scenes SET german_text = 'Die nächste Haltestelle ist Ihre.', translations = '{"bks":"Sljedeća stanica je vaša.","tr":"Bir sonraki durak sizin.","uk":"Наступна зупинка ваша.","ro":"Următoarea stație este a dumneavoastră.","ar":"المحطة القادمة هي محطتك."}'::jsonb WHERE id = '40915cbe-53d2-4198-bd26-d678c4f94ecf';

UPDATE public.lesson_scenes SET german_text = 'Vielen Dank für die Information.', translations = '{"bks":"Hvala vam na informaciji.","tr":"Bilgi için teşekkürler.","uk":"Дякую за інформацію.","ro":"Mulțumesc pentru informație.","ar":"شكرًا على المعلومة."}'::jsonb WHERE id = '9c74bdaf-e339-4a4b-b035-e6ec7bae0b5a';

UPDATE public.lesson_scenes SET german_text = 'Kein Problem. Schönen Tag noch.', translations = '{"bks":"Nema na čemu. Prijatan dan.","tr":"Rica ederim. İyi günler.","uk":"Нема за що. Гарного дня.","ro":"Cu plăcere. O zi frumoasă.","ar":"عفوًا. يومًا سعيدًا."}'::jsonb WHERE id = '5c4cd1c0-958c-4c6b-a428-712570ad9d88';

UPDATE public.lesson_scenes SET german_text = 'Auf Wiedersehen!', translations = '{"bks":"Doviđenja!","tr":"Hoşça kalın!","uk":"До побачення!","ro":"La revedere!","ar":"إلى اللقاء!"}'::jsonb WHERE id = '48ae6243-be5f-46a0-86ce-dc2b3ba71b45';

UPDATE public.lesson_scenes SET german_text = 'Ich möchte mit meinem Chef über meine Aufgabe sprechen.', translations = '{"bks":"Želim razgovarati sa svojim šefom o svom zadatku.","tr":"Patronumla görevim hakkında konuşmak istiyorum.","uk":"Я хочу поговорити з начальником про своє завдання.","ro":"Vreau să vorbesc cu șeful meu despre sarcina mea.","ar":"أريد التحدث مع مديري بخصوص مهمتي."}'::jsonb WHERE id = '7efffd9c-3e56-4207-9bac-1b64dc3136e8';

UPDATE public.lesson_scenes SET german_text = 'Guten Morgen. Haben Sie kurz Zeit?', translations = '{"bks":"Dobro jutro. Imate li malo vremena?","tr":"Günaydın. Kısaca vaktiniz var mı?","uk":"Доброго ранку. У вас є трохи часу?","ro":"Bună dimineața. Aveți puțin timp?","ar":"صباح الخير. هل لديك وقت قليل؟"}'::jsonb WHERE id = '39a40644-3afe-4c20-99c8-4bede93a7df1';

UPDATE public.lesson_scenes SET german_text = 'Ja, natürlich. Worum geht es?', translations = '{"bks":"Da, naravno. O čemu se radi?","tr":"Evet, tabii. Konu nedir?","uk":"Так, звісно. Про що йдеться?","ro":"Da, desigur. Despre ce este vorba?","ar":"نعم بالطبع. ما الموضوع؟"}'::jsonb WHERE id = 'cba4d7b5-89f4-4f30-bb34-4bea6ada3d81';

UPDATE public.lesson_scenes SET german_text = 'Ich habe eine Frage zu meiner Aufgabe.', translations = '{"bks":"Imam pitanje o svom zadatku.","tr":"Görevimle ilgili bir sorum var.","uk":"У мене є питання щодо мого завдання.","ro":"Am o întrebare despre sarcina mea.","ar":"لدي سؤال بخصوص مهمتي."}'::jsonb WHERE id = '17488496-bd81-4aa0-b0b8-a3a1f1df6ff3';

UPDATE public.lesson_scenes SET german_text = 'Welche Frage haben Sie genau?', translations = '{"bks":"Koje je tačno vaše pitanje?","tr":"Tam olarak sorunuz nedir?","uk":"Яке саме у вас питання?","ro":"Care este întrebarea dumneavoastră exact?","ar":"ما هو سؤالك بالضبط؟"}'::jsonb WHERE id = '882dd5bb-6f8f-4abb-85b9-2cd77c9f996b';

UPDATE public.lesson_scenes SET german_text = 'Ich verstehe die Anweisung nicht ganz.', translations = '{"bks":"Ne razumijem baš uputstvo.","tr":"Talimatı tam olarak anlamıyorum.","uk":"Я не зовсім розумію інструкцію.","ro":"Nu înțeleg complet instrucțiunea.","ar":"لا أفهم التعليمات تمامًا."}'::jsonb WHERE id = '10a7960b-9639-4323-85a4-a20cac2979ce';

UPDATE public.lesson_scenes SET german_text = 'Kein Problem, ich erkläre es noch einmal.', translations = '{"bks":"Nema problema, objasniću još jednom.","tr":"Sorun değil, tekrar açıklayayım.","uk":"Не проблема, я поясню ще раз.","ro":"Nicio problemă, vă explic din nou.","ar":"لا مشكلة، سأشرح مرة أخرى."}'::jsonb WHERE id = '13347ab9-1184-4c08-88f9-b069826c3219';

UPDATE public.lesson_scenes SET german_text = 'Zuerst prüfen Sie die Liste, dann rufen Sie den Kunden an.', translations = '{"bks":"Prvo provjerite listu, zatim pozovite kupca.","tr":"Önce listeyi kontrol edin, sonra müşteriyi arayın.","uk":"Спочатку перевірте список, потім зателефонуйте клієнту.","ro":"Mai întâi verificați lista, apoi sunați clientul.","ar":"أولاً تحقق من القائمة، ثم اتصل بالعميل."}'::jsonb WHERE id = '16a785b7-8fc0-44da-b68f-772086478445';

UPDATE public.lesson_scenes SET german_text = 'Ah, jetzt verstehe ich es.', translations = '{"bks":"Ah, sad razumijem.","tr":"Ah, şimdi anladım.","uk":"А, тепер я розумію.","ro":"Ah, acum înțeleg.","ar":"آه، الآن فهمت."}'::jsonb WHERE id = '3c6152aa-7127-4210-9f37-11f7b8dd945b';

UPDATE public.lesson_scenes SET german_text = 'Gut. Haben Sie noch weitere Fragen?', translations = '{"bks":"Dobro. Imate li još pitanja?","tr":"İyi. Başka sorunuz var mı?","uk":"Добре. Ще є питання?","ro":"Bine. Mai aveți întrebări?","ar":"جيد. هل لديك أسئلة أخرى؟"}'::jsonb WHERE id = '52702959-2929-4c05-a956-4d6df6ba6940';

UPDATE public.lesson_scenes SET german_text = 'Nein, das war alles. Vielen Dank.', translations = '{"bks":"Ne, to je bilo sve. Hvala vam puno.","tr":"Hayır, hepsi bu kadar. Çok teşekkürler.","uk":"Ні, це все. Дуже дякую.","ro":"Nu, asta a fost tot. Mulțumesc mult.","ar":"لا، هذا كل شيء. شكرًا جزيلاً."}'::jsonb WHERE id = 'ba07489e-a87f-4ad4-8ec2-3a8a0365fcc4';

UPDATE public.lesson_scenes SET german_text = 'Gerne. Bis wann brauchen Sie die Aufgabe fertig?', translations = '{"bks":"Nema na čemu. Do kada vam treba zadatak gotov?","tr":"Rica ederim. Görevi ne zamana kadar bitirmeniz gerekiyor?","uk":"Будь ласка. До якого часу вам потрібно закінчити завдання?","ro":"Cu plăcere. Până când trebuie să terminați sarcina?","ar":"عفوًا. متى تحتاج إلى إنهاء المهمة؟"}'::jsonb WHERE id = 'e38cc7a6-f0ba-4ca3-b616-e5be4e3516cc';

UPDATE public.lesson_scenes SET german_text = 'Bis heute Nachmittag.', translations = '{"bks":"Do danas popodne.","tr":"Bugün öğleden sonraya kadar.","uk":"До сьогоднішнього дня.","ro":"Până în această după-amiază.","ar":"حتى ظهر اليوم."}'::jsonb WHERE id = '389f22e4-d0a2-4647-bbad-916117b4cbdd';

UPDATE public.lesson_scenes SET german_text = 'Gut, das schaffe ich.', translations = '{"bks":"Dobro, to mogu.","tr":"Tamam, bunu başarırım.","uk":"Добре, я впораюся.","ro":"Bine, pot să reușesc.","ar":"حسنًا، سأنجز ذلك."}'::jsonb WHERE id = 'cdb0c049-e67a-41a3-8121-3c4afae31796';

UPDATE public.lesson_scenes SET german_text = 'Perfekt. Vielen Dank für Ihre Hilfe.', translations = '{"bks":"Savršeno. Hvala vam na pomoći.","tr":"Mükemmel. Yardımınız için teşekkürler.","uk":"Чудово. Дякую за допомогу.","ro":"Perfect. Mulțumesc pentru ajutor.","ar":"ممتاز. شكرًا على مساعدتك."}'::jsonb WHERE id = '9b257f67-11b4-4ece-a18f-32c6634866ca';

UPDATE public.lesson_scenes SET german_text = 'Ich arbeite seit einer Woche in der neuen Firma.', translations = '{"bks":"Radim u novoj firmi već sedmicu.","tr":"Yeni şirkette bir haftadır çalışıyorum.","uk":"Я працюю в новій компанії вже тиждень.","ro":"Lucrez de o săptămână la firma nouă.","ar":"أعمل في الشركة الجديدة منذ أسبوع."}'::jsonb WHERE id = '51710533-5b6e-4db2-a759-542cf7fc309d';

UPDATE public.lesson_scenes SET german_text = 'Guten Morgen! Ich bin Ihr neuer Kollege.', translations = '{"bks":"Dobro jutro! Ja sam vaš novi kolega.","tr":"Günaydın! Ben yeni meslektaşınızım.","uk":"Доброго ранку! Я ваш новий колега.","ro":"Bună dimineața! Sunt noul dumneavoastră coleg.","ar":"صباح الخير! أنا زميلك الجديد."}'::jsonb WHERE id = 'f44f4317-00af-4385-983f-3664c3119f35';

UPDATE public.lesson_scenes SET german_text = 'Hallo, schön, Sie kennenzulernen. Ich heiße Peter.', translations = '{"bks":"Zdravo, drago mi je. Zovem se Peter.","tr":"Merhaba, tanıştığımıza memnun oldum. Adım Peter.","uk":"Привіт, приємно познайомитися. Мене звати Петер.","ro":"Bună, mă bucur să vă cunosc. Mă numesc Peter.","ar":"مرحبًا، سررت بمعرفتك. اسمي بيتر."}'::jsonb WHERE id = '0e7d9db6-8ecc-4075-8210-c2edec7c5380';

UPDATE public.lesson_scenes SET german_text = 'Können Sie mir helfen? Ich finde den Drucker nicht.', translations = '{"bks":"Možete li mi pomoći? Ne mogu naći štampač.","tr":"Bana yardım edebilir misiniz? Yazıcıyı bulamıyorum.","uk":"Можете допомогти? Я не можу знайти принтер.","ro":"Mă puteți ajuta? Nu găsesc imprimanta.","ar":"هل يمكنك مساعدتي؟ لا أجد الطابعة."}'::jsonb WHERE id = '1d0cf4e2-3f6b-48c0-871d-4b8bc08eeb5b';

UPDATE public.lesson_scenes SET german_text = 'Klar, der Drucker ist im Nebenraum.', translations = '{"bks":"Naravno, štampač je u susjednoj prostoriji.","tr":"Tabii, yazıcı yan odada.","uk":"Звісно, принтер у сусідній кімнаті.","ro":"Sigur, imprimanta este în camera alăturată.","ar":"بالتأكيد، الطابعة في الغرفة المجاورة."}'::jsonb WHERE id = '9f5f80af-19c8-428a-abcc-0a11d312df2a';

UPDATE public.lesson_scenes SET german_text = 'Vielen Dank. Wie lange arbeiten Sie schon hier?', translations = '{"bks":"Hvala vam puno. Koliko dugo radite ovdje?","tr":"Çok teşekkürler. Ne zamandır burada çalışıyorsunuz?","uk":"Дуже дякую. Як довго ви тут працюєте?","ro":"Mulțumesc mult. De cât timp lucrați aici?","ar":"شكرًا جزيلاً. منذ متى تعمل هنا؟"}'::jsonb WHERE id = 'db424052-2833-4013-866c-0d4c379180c6';

UPDATE public.lesson_scenes SET german_text = 'Seit drei Jahren.', translations = '{"bks":"Već tri godine.","tr":"Üç yıldır.","uk":"Вже три роки.","ro":"De trei ani.","ar":"منذ ثلاث سنوات."}'::jsonb WHERE id = '2d3e4ccf-8ef2-4630-9d61-f372a83ae2cc';

UPDATE public.lesson_scenes SET german_text = 'Wo ist die Kaffeeküche?', translations = '{"bks":"Gdje je kuhinja za kafu?","tr":"Kahve mutfağı nerede?","uk":"Де кухня для кави?","ro":"Unde este bucătăria pentru cafea?","ar":"أين مطبخ القهوة؟"}'::jsonb WHERE id = '70ae1871-cf6e-4273-b7d1-8ac7effc01c7';

UPDATE public.lesson_scenes SET german_text = 'Direkt neben dem Aufzug.', translations = '{"bks":"Odmah pored lifta.","tr":"Asansörün hemen yanında.","uk":"Прямо біля ліфта.","ro":"Chiar lângă lift.","ar":"بجانب المصعد مباشرة."}'::jsonb WHERE id = 'f3688316-104d-4b8b-ac98-203d6d60c0f5';

UPDATE public.lesson_scenes SET german_text = 'Möchten Sie mit uns zu Mittag essen?', translations = '{"bks":"Želite li ručati sa nama?","tr":"Bizimle öğle yemeği yemek ister misiniz?","uk":"Бажаєте пообідати з нами?","ro":"Doriți să luați prânzul cu noi?","ar":"هل تريد تناول الغداء معنا؟"}'::jsonb WHERE id = '2e6d8c49-31c9-4519-807d-52d42ef35a20';

UPDATE public.lesson_scenes SET german_text = 'Ja, gerne! Wann treffen wir uns?', translations = '{"bks":"Da, rado! Kada se nalazimo?","tr":"Evet, seve seve! Ne zaman buluşuyoruz?","uk":"Так, з радістю! Коли зустрічаємось?","ro":"Da, cu plăcere! Când ne întâlnim?","ar":"نعم، بكل سرور! متى نلتقي؟"}'::jsonb WHERE id = 'fd43110b-374b-4b95-95e8-5b35e2900383';

UPDATE public.lesson_scenes SET german_text = 'Um zwölf Uhr, vor dem Eingang.', translations = '{"bks":"U dvanaest sati, ispred ulaza.","tr":"Saat on ikide, girişin önünde.","uk":"О дванадцятій, перед входом.","ro":"La ora douăsprezece, în fața intrării.","ar":"في الساعة الثانية عشرة، أمام المدخل."}'::jsonb WHERE id = 'a503c35e-edb7-4127-afd6-2e38f40daf86';

UPDATE public.lesson_scenes SET german_text = 'Gut, bis später!', translations = '{"bks":"Dobro, vidimo se kasnije!","tr":"Tamam, sonra görüşürüz!","uk":"Добре, до зустрічі!","ro":"Bine, ne vedem mai târziu!","ar":"حسنًا، أراك لاحقًا!"}'::jsonb WHERE id = '3287a7f7-662d-4ced-a8e0-2515d96acdc9';

UPDATE public.lesson_scenes SET german_text = 'Bis später!', translations = '{"bks":"Vidimo se!","tr":"Görüşürüz!","uk":"До зустрічі!","ro":"Pe curând!","ar":"أراك لاحقًا!"}'::jsonb WHERE id = 'ca0b6702-fe9e-42d7-857c-b1b8f25b8ec4';

UPDATE public.lesson_scenes SET german_text = 'Schön, dass wir jetzt zusammenarbeiten.', translations = '{"bks":"Lijepo je što sada radimo zajedno.","tr":"Artık birlikte çalışmamız güzel.","uk":"Приємно, що тепер ми працюємо разом.","ro":"Mă bucur că lucrăm împreună acum.","ar":"من الجميل أننا نعمل معًا الآن."}'::jsonb WHERE id = 'ef5aca12-2d28-41c1-8028-3ed259978aef';

UPDATE public.lesson_scenes SET german_text = 'Das Telefon klingelt in meinem Büro.', translations = '{"bks":"Telefon zvoni u mojoj kancelariji.","tr":"Ofisimde telefon çalıyor.","uk":"У моєму офісі дзвонить телефон.","ro":"Telefonul sună în biroul meu.","ar":"يرن الهاتف في مكتبي."}'::jsonb WHERE id = 'd1078b14-c588-4ee2-b859-379424d66a34';

UPDATE public.lesson_scenes SET german_text = 'Firma Müller, guten Tag. Was kann ich für Sie tun?', translations = '{"bks":"Firma Müller, dobar dan. Kako mogu pomoći?","tr":"Müller Şirketi, merhaba. Sizin için ne yapabilirim?","uk":"Компанія Мюллер, доброго дня. Чим можу допомогти?","ro":"Firma Müller, bună ziua. Cu ce vă pot ajuta?","ar":"شركة مولر، مرحبًا. كيف يمكنني مساعدتك؟"}'::jsonb WHERE id = '3921169a-86fe-45d0-8562-a625a84ea8d4';

UPDATE public.lesson_scenes SET german_text = 'Guten Tag, ich möchte gerne Herrn Meyer sprechen.', translations = '{"bks":"Dobar dan, želio bih razgovarati sa gospodinom Meyerom.","tr":"Merhaba, Bay Meyer ile konuşmak istiyorum.","uk":"Доброго дня, я хотів би поговорити з паном Маєром.","ro":"Bună ziua, aș dori să vorbesc cu domnul Meyer.","ar":"مرحبًا، أود التحدث مع السيد ماير."}'::jsonb WHERE id = 'f84f5bc8-0af5-41ae-a4a0-ef55a9ac74af';

UPDATE public.lesson_scenes SET german_text = 'Herr Meyer ist gerade nicht an seinem Platz.', translations = '{"bks":"Gospodin Meyer trenutno nije za svojim stolom.","tr":"Bay Meyer şu anda masasında değil.","uk":"Пана Маєра зараз немає на місці.","ro":"Domnul Meyer nu este acum la birou.","ar":"السيد ماير غير موجود حاليًا."}'::jsonb WHERE id = '7d505b3c-aaae-4a14-962c-5b5dc08ebf6b';

UPDATE public.lesson_scenes SET german_text = 'Kann ich eine Nachricht hinterlassen?', translations = '{"bks":"Mogu li ostaviti poruku?","tr":"Mesaj bırakabilir miyim?","uk":"Чи можу я залишити повідомлення?","ro":"Pot lăsa un mesaj?","ar":"هل يمكنني ترك رسالة؟"}'::jsonb WHERE id = '67cc10c2-6733-4331-9235-011491598c00';

UPDATE public.lesson_scenes SET german_text = 'Ja, natürlich. Wie ist Ihr Name?', translations = '{"bks":"Da, naravno. Kako se zovete?","tr":"Evet, tabii. Adınız nedir?","uk":"Так, звісно. Як вас звати?","ro":"Da, desigur. Cum vă numiți?","ar":"نعم بالطبع. ما اسمك؟"}'::jsonb WHERE id = '0b74a33b-2ef6-4bda-82ce-12dabc86f73f';

UPDATE public.lesson_scenes SET german_text = 'Mein Name ist Frau Krause.', translations = '{"bks":"Zovem se gospođa Krause.","tr":"Benim adım Bayan Krause.","uk":"Мене звати пані Краузе.","ro":"Numele meu este doamna Krause.","ar":"اسمي السيدة كراوزه."}'::jsonb WHERE id = 'a08d0d37-ce62-4c66-a4fa-6b7cb975884b';

UPDATE public.lesson_scenes SET german_text = 'Und Ihre Telefonnummer, bitte?', translations = '{"bks":"I vaš broj telefona, molim?","tr":"Ve telefon numaranız, lütfen?","uk":"І ваш номер телефону, будь ласка?","ro":"Și numărul dumneavoastră de telefon, vă rog?","ar":"ورقم هاتفك من فضلك؟"}'::jsonb WHERE id = '7ae86c3e-47f4-4cc1-9d8e-daae4045ac2e';

UPDATE public.lesson_scenes SET german_text = 'Die Nummer ist null eins fünf eins, zwei drei vier fünf.', translations = '{"bks":"Broj je nula jedan pet jedan, dva tri četiri pet.","tr":"Numara sıfır bir beş bir, iki üç dört beş.","uk":"Номер: нуль один п''ять один, два три чотири п''ять.","ro":"Numărul este zero unu cinci unu, doi trei patru cinci.","ar":"الرقم هو صفر واحد خمسة واحد، اثنان ثلاثة أربعة خمسة."}'::jsonb WHERE id = 'd0a0a668-5ebb-4d90-8f31-72e8a383d491';

UPDATE public.lesson_scenes SET german_text = 'Ich notiere das. Worum geht es?', translations = '{"bks":"Zabilježiću to. O čemu se radi?","tr":"Not alıyorum. Konu ne?","uk":"Я записую. Про що йдеться?","ro":"Notez asta. Despre ce este vorba?","ar":"سأدون ذلك. ما الموضوع؟"}'::jsonb WHERE id = '88187ef1-1525-43d0-9706-ba0c229bc06f';

UPDATE public.lesson_scenes SET german_text = 'Es geht um den Termin am Montag.', translations = '{"bks":"Radi se o terminu u ponedjeljak.","tr":"Pazartesi günkü randevu ile ilgili.","uk":"Йдеться про зустріч у понеділок.","ro":"Este vorba despre întâlnirea de luni.","ar":"الأمر يتعلق بموعد يوم الاثنين."}'::jsonb WHERE id = '5fb5a47a-c175-4820-a037-449da001aa23';

UPDATE public.lesson_scenes SET german_text = 'Gut, ich richte es Herrn Meyer aus.', translations = '{"bks":"Dobro, prenijeću to gospodinu Meyeru.","tr":"Tamam, Bay Meyer''e ileteceğim.","uk":"Добре, я передам це пану Маєру.","ro":"Bine, îi transmit domnului Meyer.","ar":"حسنًا، سأخبر السيد ماير."}'::jsonb WHERE id = '44902ade-ef63-4943-9dd4-e7a3400f8f2a';

UPDATE public.lesson_scenes SET german_text = 'Vielen Dank. Auf Wiederhören.', translations = '{"bks":"Hvala vam puno. Doviđenja.","tr":"Çok teşekkürler. Görüşmek üzere.","uk":"Дуже дякую. До побачення.","ro":"Mulțumesc mult. La revedere.","ar":"شكرًا جزيلاً. إلى اللقاء."}'::jsonb WHERE id = 'b8f4814e-8e4b-47fd-8fc6-16ca8724488b';

UPDATE public.lesson_scenes SET german_text = 'Auf Wiederhören und einen schönen Tag!', translations = '{"bks":"Doviđenja i prijatan dan!","tr":"Görüşmek üzere, iyi günler!","uk":"До побачення, гарного дня!","ro":"La revedere și o zi frumoasă!","ar":"إلى اللقاء ويومًا سعيدًا!"}'::jsonb WHERE id = '2784b8c6-5ea2-45e6-958b-53aebb2c6d70';

UPDATE public.lesson_scenes SET german_text = 'Danke, Ihnen auch!', translations = '{"bks":"Hvala, i vama isto!","tr":"Teşekkürler, size de!","uk":"Дякую, вам також!","ro":"Mulțumesc, la fel!","ar":"شكرًا، ولك أيضًا!"}'::jsonb WHERE id = 'd43fdb42-f7b9-4539-b106-d5580c523cc8';

UPDATE public.lesson_scenes SET german_text = 'Ich möchte einen Termin beim Arzt vereinbaren.', translations = '{"bks":"Želim zakazati termin kod ljekara.","tr":"Doktordan randevu almak istiyorum.","uk":"Я хочу записатися на прийом до лікаря.","ro":"Vreau să programez o vizită la medic.","ar":"أريد حجز موعد عند الطبيب."}'::jsonb WHERE id = 'a1d1222f-6b06-45ba-9459-35220fc70390';

UPDATE public.lesson_scenes SET german_text = 'Praxis Doktor Weber, guten Tag.', translations = '{"bks":"Ordinacija doktora Webera, dobar dan.","tr":"Doktor Weber muayenehanesi, merhaba.","uk":"Кабінет доктора Вебера, доброго дня.","ro":"Cabinetul doctorului Weber, bună ziua.","ar":"عيادة الدكتور فيبر، مرحبًا."}'::jsonb WHERE id = 'fafbe147-9e13-4dac-950c-6d59ec76ffb0';

UPDATE public.lesson_scenes SET german_text = 'Guten Tag, ich möchte gerne einen Termin.', translations = '{"bks":"Dobar dan, želio bih termin.","tr":"Merhaba, bir randevu almak istiyorum.","uk":"Доброго дня, я хотів би записатися.","ro":"Bună ziua, aș dori o programare.","ar":"مرحبًا، أريد حجز موعد."}'::jsonb WHERE id = 'd448889f-6315-40e8-95f4-4c0430c6a44f';

UPDATE public.lesson_scenes SET german_text = 'Waren Sie schon einmal bei uns?', translations = '{"bks":"Da li ste već bili kod nas?","tr":"Daha önce bize geldiniz mi?","uk":"Ви вже були у нас раніше?","ro":"Ați mai fost la noi vreodată?","ar":"هل زرتنا من قبل؟"}'::jsonb WHERE id = '311895e2-652f-4c5e-810c-c817c330bcda';

UPDATE public.lesson_scenes SET german_text = 'Nein, ich bin ein neuer Patient.', translations = '{"bks":"Ne, ja sam novi pacijent.","tr":"Hayır, ben yeni bir hastayım.","uk":"Ні, я новий пацієнт.","ro":"Nu, sunt un pacient nou.","ar":"لا، أنا مريض جديد."}'::jsonb WHERE id = '615d9b80-72e2-46de-8214-1af4fb655d3d';

UPDATE public.lesson_scenes SET german_text = 'Welcher Tag passt Ihnen?', translations = '{"bks":"Koji dan vam odgovara?","tr":"Hangi gün size uygun?","uk":"Який день вам підходить?","ro":"Ce zi vi se potrivește?","ar":"أي يوم يناسبك؟"}'::jsonb WHERE id = '0e32f4f7-fdff-40a9-beb4-aa4365f11e23';

UPDATE public.lesson_scenes SET german_text = 'Passt es am Donnerstag?', translations = '{"bks":"Da li vam odgovara u četvrtak?","tr":"Perşembe günü uygun mu?","uk":"Чи підходить вам четвер?","ro":"Se potrivește joi?","ar":"هل يناسبك يوم الخميس؟"}'::jsonb WHERE id = 'c5e12b19-c460-43f5-aacd-5f5d1faa5106';

UPDATE public.lesson_scenes SET german_text = 'Ja, wir haben um zehn Uhr noch einen Termin frei.', translations = '{"bks":"Da, imamo slobodan termin u deset sati.","tr":"Evet, saat onda hâlâ boş bir randevumuz var.","uk":"Так, у нас є вільний час о десятій годині.","ro":"Da, mai avem o programare liberă la ora zece.","ar":"نعم، لدينا موعد متاح في الساعة العاشرة."}'::jsonb WHERE id = 'ce7a9577-e11e-45a7-bb93-22b35d8bd5e9';

UPDATE public.lesson_scenes SET german_text = 'Das passt gut.', translations = '{"bks":"To mi dobro odgovara.","tr":"Bu iyi uyuyor.","uk":"Це чудово підходить.","ro":"Asta mi se potrivește bine.","ar":"هذا يناسبني جيدًا."}'::jsonb WHERE id = '2b76b27a-5bb3-49ab-8231-1cf33bffc097';

UPDATE public.lesson_scenes SET german_text = 'Wie ist Ihr Name, bitte?', translations = '{"bks":"Kako se zovete, molim?","tr":"Adınız nedir, lütfen?","uk":"Як вас звати, будь ласка?","ro":"Cum vă numiți, vă rog?","ar":"ما اسمك من فضلك؟"}'::jsonb WHERE id = 'f8951427-5653-4273-8d14-e0675a58e479';

UPDATE public.lesson_scenes SET german_text = 'Mein Name ist Anna Roth.', translations = '{"bks":"Zovem se Anna Roth.","tr":"Benim adım Anna Roth.","uk":"Мене звати Анна Рот.","ro":"Numele meu este Anna Roth.","ar":"اسمي آنا روث."}'::jsonb WHERE id = '3d0d78c6-d8d6-47a0-a010-b3441b9d7b1e';

UPDATE public.lesson_scenes SET german_text = 'Bitte bringen Sie Ihre Versichertenkarte mit.', translations = '{"bks":"Molimo ponesite svoju zdravstvenu karticu.","tr":"Lütfen sigorta kartınızı yanınızda getirin.","uk":"Будь ласка, візьміть із собою страхову картку.","ro":"Vă rog aduceți cardul de asigurare.","ar":"من فضلك أحضر بطاقة التأمين الخاصة بك."}'::jsonb WHERE id = 'f00dda01-8b28-4a1c-b028-2e5112d5d6e2';

UPDATE public.lesson_scenes SET german_text = 'Alles klar, das mache ich.', translations = '{"bks":"U redu, uradiću to.","tr":"Tamam, öyle yapacağım.","uk":"Добре, я так і зроблю.","ro":"Bine, așa voi face.","ar":"حسنًا، سأفعل ذلك."}'::jsonb WHERE id = '668fa20d-e255-4745-92a4-6f1a5e56fbbd';

UPDATE public.lesson_scenes SET german_text = 'Bis Donnerstag um zehn Uhr.', translations = '{"bks":"Do četvrtka u deset sati.","tr":"Perşembe saat ona kadar.","uk":"До четверга о десятій.","ro":"Până joi la ora zece.","ar":"إلى الخميس الساعة العاشرة."}'::jsonb WHERE id = 'c7ba2a8c-04a1-4bb0-bda4-241dcb8fafb5';

UPDATE public.lesson_scenes SET german_text = 'Vielen Dank. Auf Wiederhören!', translations = '{"bks":"Hvala vam puno. Doviđenja!","tr":"Çok teşekkürler. Görüşmek üzere!","uk":"Дуже дякую. До побачення!","ro":"Mulțumesc mult. La revedere!","ar":"شكرًا جزيلاً. إلى اللقاء!"}'::jsonb WHERE id = '5c229e66-2947-4499-b00d-19284775a514';