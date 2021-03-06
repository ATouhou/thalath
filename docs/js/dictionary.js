// TODO should be loaded in a clean way: angular module
words_dictionary = [
  ["ضفف", "فضف", "ففض"],
  ["ضفى", "فضى"],
  ["ضغن", "غضن", "نغض"],
  ["ضعف", "فضع", "فعض"],
  ["ضهي", "هيض", "يهض"],
  ["ضهل", "لهض"],
  ["ضحل", "لضح", "لحض"],
  ["ضحك", "كحض"],
  ["ضجر", "ضرج", "جرض"],
  ["ضيؤ", "يضؤ", "ؤيض"],
  ["ضبح", "بحض"],
  ["ضبب", "بضب", "ببض"],
  ["ضلل", "لضل"],
  ["ضال", "اضل"],
  ["ضنن", "نضن", "ننض"],
  ["ضنك", "كضن", "كنض"],
  ["ضنى", "نضى"],
  ["ضمج", "مضج"],
  ["ضمم", "ممض"],
  ["ضطر", "ضرط"],
  ["ضؤل", "لضؤ"],
  ["ضرع", "عرض", "رضع"],
  ["ضرى", "رضى"],
  ["ضوج", "وضج"],
  ["ضوي", "يضو"],
  ["ضوئ", "وضئ"],
  ["ضوؤ", "وضؤ"],
  ["ضوأ", "أضو", "أوض"],
  ["ضأن", "أضن", "أنض"],
  ["صفف", "فصف", "ففص"],
  ["صفد", "صدف", "فصد"],
  ["صفى", "فصى"],
  ["صعد", "صدع"],
  ["صهل", "لهص"],
  ["صهر", "هصر", "رهص"],
  ["صهو", "وهص"],
  ["صحى", "حصى"],
  ["صدق", "قصد"],
  ["صدغ", "دغص"],
  ["صدح", "حصد"],
  ["صدي", "صيد", "يصد"],
  ["صدا", "صاد", "اصد"],
  ["صدم", "صمد", "مصد"],
  ["صدؤ", "ؤصد"],
  ["صدر", "صرد", "رصد"],
  ["صدأ", "أصد"],
  ["صيت", "يصت"],
  ["صين", "يصن", "ينص"],
  ["صير", "يصر", "يرص"],
  ["صبغ", "غصب", "بغص"],
  ["صبب", "بصب", "ببص"],
  ["صبأ", "أصب", "أبص"],
  ["صلص", "لصص"],
  ["صلج", "لجص"],
  ["صلد", "لصد"],
  ["صلي", "يصل", "يلص"],
  ["صان", "انص", "ناص"],
  ["صام", "اصم", "امص"],
  ["صار", "اصر", "ارص"],
  ["صنق", "قنص", "نقص"],
  ["صنع", "نصع", "نعص"],
  ["صمم", "ممص"],
  ["صكك", "كصك"],
  ["صئي", "يصئ"],
  ["صرح", "حصر", "حرص"],
  ["صوي", "يوص", "وصي"],
  ["صوت", "توص", "وصت"],
  ["صور", "وصر", "ورص"],
  ["صأي", "يصأ"],
  ["ثقف", "فثق", "فقث"],
  ["ثقب", "ثبق", "بثق"],
  ["ثقل", "لثق", "لقث"],
  ["ثفل", "فثل", "فلث"],
  ["ثفن", "فثن", "نفث"],
  ["ثغر", "رغث"],
  ["ثعب", "عبث", "بعث"],
  ["ثخن", "خنث"],
  ["ثيب", "يثب", "يبث"],
  ["ثيو", "ثوي", "يثو"],
  ["ثبج", "بجث"],
  ["ثبت", "تثب", "تبث"],
  ["ثلل", "لثل", "للث"],
  ["ثاب", "اثب", "ابث"],
  ["ثائ", "ائث"],
  ["ثاؤ", "اؤث"],
  ["ثني", "يثن"],
  ["ثنن", "نثن"],
  ["ثمن", "مثن"],
  ["ثكن", "نكث", "كثن"],
  ["ثرد", "دثر"],
  ["ثرى", "رثى"],
  ["ثوا", "اثو"],
  ["ثأب", "أثب", "أبث"],
  ["ثأا", "اثأ"],
  ["ثأر", "أثر", "أرث"],
  ["قضف", "فضق", "فقض"],
  ["قضب", "قبض", "بقض"],
  ["قصي", "يقص"],
  ["قصا", "قاص", "اقص"],
  ["قصم", "قمص", "مقص"],
  ["قصو", "وقص"],
  ["قفف", "فقف", "ففق"],
  ["قفز", "فقز", "فزق"],
  ["قعد", "عقد", "دقع"],
  ["قعس", "سقع"],
  ["قهي", "يقه"],
  ["قهر", "هرق", "رهق"],
  ["قحف", "فقح", "فحق"],
  ["قدح", "حقد", "حدق"],
  ["قدم", "مقد", "مدق"],
  ["قشع", "عشق"],
  ["قشد", "شدق"],
  ["قسح", "سحق"],
  ["قسط", "سقط", "طقس"],
  ["قسى", "سقى"],
  ["قيم", "يقم", "يمق"],
  ["قيئ", "يقئ"],
  ["قيؤ", "يؤق"],
  ["قيظ", "يقظ"],
  ["قيأ", "أقي"],
  ["قبج", "بقج"],
  ["قبب", "بقب", "ببق"],
  ["قبى", "بقى"],
  ["قلق", "لقق"],
  ["قلل", "لقل", "للق"],
  ["قلى", "لقى"],
  ["قاه", "اقه"],
  ["قام", "اقم", "امق"],
  ["قاظ", "اقظ"],
  ["قتض", "تضق", "تقض"],
  ["قتص", "تقص"],
  ["قتث", "تثق", "تقث"],
  ["قتد", "تقد", "تدق"],
  ["قتت", "تقت", "تتق"],
  ["قتط", "تقط", "تطق"],
  ["قنج", "جنق"],
  ["قند", "نقد", "ندق"],
  ["قنن", "نقن", "ننق"],
  ["قنى", "نقى"],
  ["قمش", "مقش", "مشق"],
  ["قمم", "مقم"],
  ["قمط", "قطم", "طقم"],
  ["قمئ", "مئق"],
  ["قمؤ", "مؤق"],
  ["قرق", "رقق"],
  ["قرح", "حقر", "حرق"],
  ["قرئ", "رقئ"],
  ["قرؤ", "ؤرق", "رقؤ"],
  ["قرى", "رقى"],
  ["قرآ", "رقآ", "آرق"],
  ["قوض", "وضق", "وقض"],
  ["قوق", "وقق"],
  ["قوى", "وقى"],
  ["قزع", "عزق", "زعق"],
  ["قزح", "حزق"],
  ["فضخ", "فخض", "خفض"],
  ["فضح", "فحض"],
  ["فضل", "لضف", "لفض"],
  ["فضم", "فمض", "مفض"],
  ["فصغ", "فغص"],
  ["فصخ", "فخص", "خصف"],
  ["فصم", "فمص", "مصف"],
  ["فصك", "كصف", "كفص"],
  ["فصأ", "أصف", "أفص"],
  ["فثغ", "فغث"],
  ["فثج", "فجث"],
  ["فثب", "فبث"],
  ["فقه", "فهق"],
  ["فقد", "فدق", "دفق"],
  ["فقب", "فبق", "بقف"],
  ["ففه", "فهف", "هفف"],
  ["ففح", "فحف", "حفف"],
  ["ففج", "فجف", "جفف"],
  ["ففد", "فدف", "دفف"],
  ["ففش", "فشف", "شفف"],
  ["ففل", "فلف", "لفف"],
  ["ففت", "فتف", "تفف"],
  ["ففن", "فنف", "نفف"],
  ["ففك", "فكف", "كفف"],
  ["ففر", "فرف", "رفف"],
  ["ففز", "فزف", "زفف"],
  ["فغق", "غفق"],
  ["فغف", "غفف"],
  ["فغد", "غدف"],
  ["فغش", "شغف"],
  ["فغب", "فبغ"],
  ["فغت", "تغف"],
  ["فغن", "فنغ", "نغف"],
  ["فغط", "فطغ"],
  ["فغو", "غفو", "وغف"],
  ["فغز", "فزغ"],
  ["فعف", "عفف"],
  ["فعج", "فجع", "عجف"],
  ["فعد", "فدع", "دفع"],
  ["فعب", "فبع", "بعف"],
  ["فعت", "عتف", "تعف"],
  ["فعم", "فمع", "معف"],
  ["فعك", "عكف", "كعف"],
  ["فعظ", "فظع"],
  ["فهج", "فجه"],
  ["فهد", "فده", "هدف"],
  ["فهش", "فشه"],
  ["فهب", "فبه", "بهف"],
  ["فهم", "فمه", "مهف"],
  ["فهط", "فطه"],
  ["فهز", "فزه", "زهف"],
  ["فخف", "خفف"],
  ["فخد", "فدخ"],
  ["فخش", "فشخ", "خفش"],
  ["فخط", "خطف"],
  ["فخز", "خزف"],
  ["فحج", "فجح", "جحف"],
  ["فحد", "فدح", "حفد"],
  ["فحش", "فشح", "حشف"],
  ["فحب", "فبح", "بفح"],
  ["فحم", "فمح", "محف"],
  ["فحك", "فكح", "كفح"],
  ["فحط", "فطح", "طفح"],
  ["فحظ", "حفظ"],
  ["فجخ", "جخف"],
  ["فجد", "فدج", "جدف"],
  ["فجش", "فشج"],
  ["فجس", "فسج", "سجف"],
  ["فجب", "بفج"],
  ["فجم", "فمج"],
  ["فجئ", "جفئ"],
  ["فجؤ", "جفؤ"],
  ["فجى", "جفى"],
  ["فجز", "فزج", "جزف"],
  ["فجآ", "جفآ"],
  ["فدش", "فشد"],
  ["فدب", "فبد", "بدف"],
  ["فدم", "فمد"],
  ["فدك", "فكد", "كدف"],
  ["فشم", "فمش", "مفش"],
  ["فشى", "شفى"],
  ["فشظ", "شظف"],
  ["فسف", "سفف"],
  ["فسب", "فبس"],
  ["فسم", "فمس"],
  ["فسط", "فطس", "سفط"],
  ["فسؤ", "ؤسف"],
  ["فسو", "سوف", "وسف"],
  ["فيم", "فمي"],
  ["فيئ", "يفئ"],
  ["فيأ", "أفي"],
  ["فبط", "فطب"],
  ["فبر", "فرب", "برف"],
  ["فبظ", "بفظ"],
  ["فلل", "لفل", "للف"],
  ["فلى", "لفى"],
  ["فاب", "باف"],
  ["فتض", "تضف", "تفض"],
  ["فتد", "تفد", "تدف"],
  ["فتت", "تفت", "تتف"],
  ["فتم", "فمت", "مفت"],
  ["فتئ", "تفئ"],
  ["فنن", "نفن", "ننف"],
  ["فنم", "فمن"],
  ["فنى", "نفى"],
  ["فمط", "فطم", "مطف"],
  ["فمز", "فزم", "مزف"],
  ["فكث", "كثف"],
  ["فكه", "كهف"],
  ["فكم", "مفك", "كفم"],
  ["فكك", "كفك", "ككف"],
  ["فكظ", "كفظ"],
  ["فطف", "طفف"],
  ["فطع", "عطف"],
  ["فرئ", "رفئ"],
  ["فرى", "رفى"],
  ["فرز", "فزر", "زفر"],
  ["فرآ", "رفآ", "رآف"],
  ["فوم", "موف"],
  ["فظن", "نظف"],
  ["فأخ", "أخف"],
  ["فأح", "أفح", "أحف"],
  ["فأس", "أسف"],
  ["فأل", "أفل", "ألف"],
  ["فأو", "أوف"],
  ["غضي", "غيض", "يغض"],
  ["غضب", "بغض"],
  ["غضا", "غاض", "اغض"],
  ["غضر", "غرض"],
  ["غصن", "نصغ", "نغص"],
  ["غفي", "يغف"],
  ["غفا", "غاف", "اغف"],
  ["غدي", "غيد", "يغد"],
  ["غدن", "نغد"],
  ["غدو", "دوغ", "وغد"],
  ["غشي", "يغش"],
  ["غشا", "غاش", "اغش"],
  ["غشت", "غتش", "تغش"],
  ["غشم", "غمش"],
  ["غشو", "غوش", "وغش"],
  ["غيظ", "يغظ"],
  ["غبش", "شغب", "بغش"],
  ["غبب", "بغب"],
  ["غبى", "بغى"],
  ["غلق", "لغق"],
  ["غلل", "لغل", "للغ"],
  ["غلم", "لغم", "مغل"],
  ["غلط", "لغط", "لطغ"],
  ["غلى", "لغى"],
  ["غلظ", "لغظ"],
  ["غات", "اغت"],
  ["غام", "غما", "اغم"],
  ["غاظ", "اغظ"],
  ["غتص", "تصغ", "تغص"],
  ["غتت", "تغت"],
  ["غتم", "تغم", "تمغ"],
  ["غتط", "تغط", "تطغ"],
  ["غتر", "تغر", "ترغ"],
  ["غتظ", "تغظ"],
  ["غنن", "نغن", "ننغ"],
  ["غنم", "نغم", "مغن"],
  ["غنى", "نغى"],
  ["غمض", "مضغ"],
  ["غمد", "دغم", "دمغ"],
  ["غمم", "مغم"],
  ["غطى", "طغى"],
  ["غرش", "شغر"],
  ["غرس", "رسغ"],
  ["غرل", "لغر", "لرغ"],
  ["غرى", "رغى"],
  ["غرز", "غزر", "زغر"],
  ["غوي", "يغو", "وغي"],
  ["غوى", "وغى"],
  ["عصي", "يعص"],
  ["عصو", "عوص", "وعص"],
  ["عثي", "عيث", "يعث"],
  ["عثا", "عاث", "اعث"],
  ["عثو", "وعث"],
  ["عفا", "عاف", "اعف"],
  ["عهر", "هرع"],
  ["عجن", "نعج", "نجع"],
  ["عجم", "جمع"],
  ["عجز", "جزع", "زعج"],
  ["عدس", "دعس", "سعد"],
  ["عدى", "دعى"],
  ["عشم", "شمع", "مشع"],
  ["عشو", "وعش", "وشع"],
  ["عسى", "سعى"],
  ["عسو", "وعس", "وسع"],
  ["عيي", "يعي"],
  ["عيا", "اعي"],
  ["عبب", "بعب"],
  ["عبك", "بعك", "كعب"],
  ["عبط", "عطب", "طبع"],
  ["عبأ", "أعب", "أبع"],
  ["علل", "لعل", "للع"],
  ["علك", "لعك", "كعل"],
  ["عاه", "هاع"],
  ["عات", "عتا", "اعت"],
  ["عاز", "عزا", "اعز"],
  ["عتض", "تضع", "تعض"],
  ["عتص", "تعص"],
  ["عتق", "تقع", "تعق"],
  ["عته", "تهع"],
  ["عتد", "تعد", "تدع"],
  ["عتش", "تعش", "تشع"],
  ["عتس", "تعس", "تسع"],
  ["عتي", "يعت", "تعي"],
  ["عتك", "تعك", "كتع"],
  ["عتز", "عزت", "تعز"],
  ["عنن", "نعن", "ننع"],
  ["عنى", "نعى"],
  ["عنز", "نعز", "نزع"],
  ["عمه", "همع"],
  ["عمى", "معى"],
  ["عكش", "كعش", "كشع"],
  ["عكس", "كعس", "كسع"],
  ["عكا", "اعك", "كاع"],
  ["عكم", "معك", "كعم"],
  ["عكك", "كعك"],
  ["عكز", "كعز"],
  ["عطش", "شعط"],
  ["عطس", "سطع"],
  ["عطل", "لطع", "طلع"],
  ["عطو", "طوع", "وطع"],
  ["عرى", "رعى"],
  ["عوق", "وقع", "وعق"],
  ["عوه", "هوع", "وهع"],
  ["عوى", "وعى"],
  ["عزي", "يعز"],
  ["عزب", "بعز"],
  ["عزر", "زعر", "زرع"],
  ["هجد", "هدج", "جهد"],
  ["هجن", "نهج", "نجه"],
  ["هجى", "جهى"],
  ["هجأ", "أهج", "أجه"],
  ["هدب", "بهد", "بده"],
  ["هدر", "دهر", "رده"],
  ["هدى", "دهى"],
  ["هدأ", "أهد", "أده"],
  ["هيا", "اهي", "ايه"],
  ["هيؤ", "يؤه"],
  ["هيأ", "أهي"],
  ["هبب", "بهب"],
  ["هبط", "بطه"],
  ["هلع", "لهع"],
  ["هلل", "لهل", "لله"],
  ["هلك", "كهل"],
  ["هتج", "تهج", "تجه"],
  ["هتد", "تهد", "تده"],
  ["هتم", "تهم", "تمه"],
  ["هتر", "تهر", "تره"],
  ["هتز", "تهز", "تزه"],
  ["هنن", "نهن", "ننه"],
  ["هنأ", "أهن", "أنه"],
  ["همس", "سهم"],
  ["همم", "مهم"],
  ["هكر", "كهر", "كره"],
  ["هطل", "لهط", "لطه"],
  ["هرش", "شهر", "شره"],
  ["هرس", "سهر"],
  ["هرأ", "أهر", "أره"],
  ["هود", "وهد", "وده"],
  ["هوك", "كهو"],
  ["هوى", "وهى"],
  ["هزج", "جهز"],
  ["هزل", "لهز", "لزه"],
  ["هزر", "زهر"],
  ["هزأ", "أهز", "أزه"],
  ["خضب", "بضخ", "بخض"],
  ["خضل", "لضخ", "لخض"],
  ["خضر", "رضخ"],
  ["خصم", "خمص"],
  ["خدش", "شدخ"],
  ["خدن", "دخن", "نخد"],
  ["خدم", "خمد", "مخد"],
  ["خدر", "خرد", "دخر"],
  ["خشب", "شخب", "بشخ"],
  ["خشن", "نخش", "نشخ"],
  ["خيم", "يخم", "مخي"],
  ["خيط", "خطي", "يخط"],
  ["خبع", "بخع"],
  ["خبب", "بخب"],
  ["خبز", "بخز", "بزخ"],
  ["خلل", "لخل"],
  ["خاض", "اضخ", "اخض"],
  ["خام", "اخم", "مخا"],
  ["خاط", "خطا", "اخط"],
  ["خاؤ", "ؤاخ"],
  ["ختص", "تصخ", "تخص"],
  ["ختل", "لتخ", "تخل"],
  ["ختم", "تخم"],
  ["ختط", "تخط"],
  ["ختز", "تخز"],
  ["خنع", "نخع"],
  ["خنن", "نخن", "ننخ"],
  ["خنى", "نخى"],
  ["خمن", "نخم"],
  ["خمم", "مخم"],
  ["خطم", "مخط"],
  ["خطر", "خرط"],
  ["خطو", "وخط"],
  ["خطأ", "أخط"],
  ["خرؤ", "ؤخر", "ؤرخ"],
  ["خرز", "خزر", "زخر"],
  ["خرأ", "أخر", "أرخ"],
  ["خرآ", "آخر"],
  ["خوض", "وضخ", "وخض"],
  ["خوج", "جوخ", "وجخ"],
  ["خوى", "وخى"],
  ["خزي", "يخز"],
  ["خزل", "لخز", "لزخ"],
  ["خزا", "اخز"],
  ["خزن", "نخز", "زنخ"],
  ["خزم", "مخز", "زخم"],
  ["حضن", "نضح", "نحض"],
  ["حضر", "حرض", "رحض"],
  ["حثي", "حيث", "يحث"],
  ["حثا", "حاث", "احث"],
  ["حثر", "حرث"],
  ["حثو", "وحث"],
  ["حجم", "جمح", "محج"],
  ["حدج", "جحد", "جدح"],
  ["حدس", "حسد"],
  ["حدب", "بحد"],
  ["حدى", "دحى"],
  ["حدأ", "أحد", "أدح"],
  ["حشد", "دحش"],
  ["حشك", "كشح"],
  ["حسك", "كحس", "كسح"],
  ["حيي", "يحي"],
  ["حيا", "احي"],
  ["حبب", "بحب", "ببح"],
  ["حلل", "لحل", "للح"],
  ["حلى", "لحى"],
  ["حاؤ", "اؤح"],
  ["حتث", "تحث"],
  ["حتد", "تحد", "تدح"],
  ["حتت", "تحت", "تتح"],
  ["حتط", "تحط", "تطح"],
  ["حتز", "تحز", "تزح"],
  ["حنث", "نحث"],
  ["حنن", "نحن", "ننح"],
  ["حنؤ", "نؤح"],
  ["حنأ", "أنح"],
  ["حمض", "محض"],
  ["حمص", "مصح", "محص"],
  ["حمد", "مدح"],
  ["حمم", "محم"],
  ["حمى", "محى"],
  ["حمأ", "أحم", "أمح"],
  ["حكك", "كحك"],
  ["حطم", "محط", "طمح"],
  ["حرن", "نحر", "رنح"],
  ["حرى", "رحى"],
  ["حوك", "وحك", "وكح"],
  ["حوى", "وحى"],
  ["حزب", "بحز"],
  ["حزن", "نحز", "نزح"],
  ["حظي", "يحظ"],
  ["حظا", "احظ"],
  ["حظو", "وحظ"],
  ["جثو", "وثج", "وجث"],
  ["جعد", "جدع", "دعج"],
  ["جدى", "دجى"],
  ["جشع", "شجع"],
  ["جشم", "جمش", "مشج"],
  ["جسد", "سجد"],
  ["جسس", "سجس"],
  ["جسى", "سجى"],
  ["جيع", "يعج", "يجع"],
  ["جيب", "جبي", "يجب"],
  ["جيئ", "يجئ", "يئج"],
  ["جيؤ", "يؤج"],
  ["جبه", "بهج", "بجه"],
  ["جبس", "سبج", "بجس"],
  ["جبب", "بجب"],
  ["جبا", "جاب", "اجب"],
  ["جلل", "لجل", "للج"],
  ["جات", "جتا", "تاج"],
  ["جائ", "ائج"],
  ["جاؤ", "اؤج"],
  ["جتث", "تثج", "تجث"],
  ["جتس", "تجس", "تسج"],
  ["جتب", "تجب"],
  ["جتز", "تجز", "تزج"],
  ["جنن", "نجن", "ننج"],
  ["جنك", "كجن"],
  ["جنى", "نجى"],
  ["جمد", "دمج", "مجد"],
  ["جمم", "مجم"],
  ["جرج", "رجج"],
  ["جرش", "شجر", "شرج"],
  ["جرن", "نجر", "نرج"],
  ["جرئ", "رجئ"],
  ["جرؤ", "ؤجر"],
  ["جرى", "رجى"],
  ["جرآ", "آجر"],
  ["جوق", "وجق"],
  ["جوي", "يجو"],
  ["جوب", "بجو", "وجب"],
  ["جوا", "اجو", "اوج"],
  ["جزم", "مجز", "مزج"],
  ["جزى", "زجى"],
  ["جزأ", "أجز", "أزج"],
  ["دفأ", "أفد", "أدف"],
  ["دغل", "لغد", "لدغ"],
  ["دهش", "شهد", "شده"],
  ["دهس", "سهد"],
  ["دهك", "كهد"],
  ["دخس", "سخد"],
  ["دشر", "شرد", "رشد"],
  ["دسس", "سدس"],
  ["دست", "تدس", "تسد"],
  ["دسى", "سدى"],
  ["دبق", "بقد", "بدق"],
  ["دبغ", "بغد"],
  ["دبش", "بدش", "بشد"],
  ["دبس", "سدب", "بسد"],
  ["دبب", "بدب", "ببد"],
  ["دلل", "لدل", "للد"],
  ["دلى", "لدى"],
  ["داخ", "اخد"],
  ["داد", "ادد"],
  ["داي", "ادي", "ايد"],
  ["دنئ", "نئد"],
  ["دنؤ", "نؤد"],
  ["دنى", "ندى"],
  ["دنأ", "أدن", "أند"],
  ["دنآ", "آند"],
  ["دمم", "مدم"],
  ["دمى", "مدى"],
  ["دكك", "كدك", "ككد"],
  ["دئب", "بدئ"],
  ["درد", "ردد"],
  ["درئ", "ردئ", "رئد"],
  ["درء", "ردء"],
  ["درؤ", "ردؤ", "رؤد"],
  ["درى", "ردى"],
  ["درز", "زدر", "زرد"],
  ["درآ", "ردآ"],
  ["دوخ", "وخد", "ودخ"],
  ["دود", "ودد"],
  ["دوط", "طود", "وطد"],
  ["دوى", "ودى"],
  ["شغل", "لغش"],
  ["شعل", "لعش", "لشع"],
  ["شهل", "لهش", "لشه"],
  ["شخر", "شرخ"],
  ["شحط", "شطح"],
  ["شجب", "بجش", "بشج"],
  ["شجو", "وجش", "وشج"],
  ["ششم", "مشش"],
  ["شيل", "يشل", "لشي"],
  ["شيئ", "يشئ"],
  ["شبب", "بشب"],
  ["شلح", "لحش", "لشح"],
  ["شلل", "لشل"],
  ["شاي", "اشي"],
  ["شتق", "تقش", "تشق"],
  ["شته", "تهش", "تشه"],
  ["شتت", "تشت"],
  ["شنق", "نقش", "نشق"],
  ["شنن", "نشن", "ننش"],
  ["شنئ", "نشئ"],
  ["شنؤ", "نشؤ"],
  ["شنر", "نشر", "نرش"],
  ["شنآ", "نشآ"],
  ["شمط", "مشط"],
  ["شكد", "كدش", "كشد"],
  ["شكم", "كشم", "كمش"],
  ["شكك", "كشك", "ككش"],
  ["شطر", "شرط", "طرش"],
  ["شرش", "رشش"],
  ["شرى", "رشى"],
  ["شوى", "وشى"],
  ["شظي", "يشظ"],
  ["شأف", "أفش", "أشف"],
  ["شأم", "أشم", "أمش"],
  ["شأو", "أشو"],
  ["سفي", "سيف", "يسف"],
  ["سغب", "سبغ", "بغس"],
  ["سهب", "سبه", "بهس"],
  ["سيغ", "يسغ"],
  ["سيئ", "يسئ", "يئس"],
  ["سبخ", "بخس", "بسخ"],
  ["سبس", "بسس"],
  ["سبب", "بسب", "ببس"],
  ["سبط", "بسط"],
  ["سلس", "لسس"],
  ["سلل", "لسل", "للس"],
  ["سلئ", "سئل"],
  ["سلآ", "لآس"],
  ["ساغ", "اسغ"],
  ["ساس", "اسس"],
  ["سات", "است", "تاس"],
  ["ساؤ", "ؤاس"],
  ["ستف", "تسف"],
  ["سته", "تهس", "تسه"],
  ["ستخ", "تخس", "تسخ"],
  ["ستو", "تسو", "توس"],
  ["ستأ", "تأس"],
  ["سنق", "نقس", "نسق"],
  ["سنن", "نسن", "ننس"],
  ["سنط", "نسط", "نطس"],
  ["سنى", "نسى"],
  ["سمع", "معس"],
  ["سمم", "مسم", "ممس"],
  ["سمط", "طمس"],
  ["سمى", "مسى"],
  ["سكك", "كسك"],
  ["سطي", "يسط"],
  ["سطر", "سرط", "طرس"],
  ["سئر", "رئس"],
  ["سؤر", "رؤس"],
  ["سرى", "رسى"],
  ["سوغ", "وسغ"],
  ["سوس", "وسس"],
  ["سوؤ", "وسؤ"],
  ["سوى", "وسى"],
  ["سأق", "أقس", "أسق"],
  ["سأح", "أحس", "أسح"],
  ["سأم", "أسم", "أمس"],
  ["سآم", "مآس"],
  ["يضخ", "يخض"],
  ["يضب", "يبض", "بيض"],
  ["يثق", "يقث"],
  ["يثج", "يجث"],
  ["يثل", "يلث", "ليث"],
  ["يقط", "يطق", "طيق"],
  ["يفط", "يطف", "طيف"],
  ["يعك", "كعي"],
  ["يهز", "يزه", "زهي"],
  ["يخد", "يدخ"],
  ["يخت", "يتخ", "تخي"],
  ["يشأ", "أشي"],
  ["ييل", "يلي"],
  ["يبئ", "يئب", "بيئ"],
  ["يبؤ", "يؤب", "بيؤ"],
  ["يبظ", "يظب", "ظبي"],
  ["يلظ", "يظل", "لظي"],
  ["ياق", "اقي"],
  ["ياس", "اسي", "ايس"],
  ["يات", "اتي", "تيا"],
  ["ياو", "اوي"],
  ["ينت", "تين", "تني"],
  ["يمم", "ميم"],
  ["يطر", "طير", "طري"],
  ["يئر", "رئي"],
  ["يؤد", "ؤدي", "ؤيد"],
  ["يؤل", "ؤلي"],
  ["يؤت", "ؤتي"],
  ["يؤو", "ؤوي"],
  ["يرء", "رءي"],
  ["يرؤ", "رؤي"],
  ["يرأ", "رأي", "أري"],
  ["يوف", "وفي"],
  ["يزد", "زيد"],
  ["يزي", "زيي"],
  ["يظن", "ظني"],
  ["يأس", "أسي", "أيس"],
  ["يأب", "أبي"],
  ["يأت", "أتي"],
  ["يأو", "أوي"],
  ["يآس", "آسي", "آيس"],
  ["بضم", "بمض"],
  ["بصم", "بمص", "مصب"],
  ["بصك", "كصب", "كبص"],
  ["بقز", "بزق", "زبق"],
  ["بغم", "مغب"],
  ["بغز", "بزغ", "زغب"],
  ["بعم", "معب"],
  ["بهن", "نهب", "نبه"],
  ["بهم", "مهب"],
  ["بحم", "بمح", "محب"],
  ["بجم", "بمج"],
  ["بجز", "بزج"],
  ["بدم", "بمد", "مدب"],
  ["بدؤ", "ؤدب", "ؤبد"],
  ["بدآ", "آدب", "آبد"],
  ["بشم", "بمش"],
  ["بسن", "نسب", "نبس"],
  ["بسم", "بمس", "مسب"],
  ["بسئ", "بئس"],
  ["بسؤ", "بؤس"],
  ["بسآ", "بآس"],
  ["ببل", "بلب", "لبب"],
  ["ببت", "تبب"],
  ["ببك", "بكب", "كبب"],
  ["ببط", "بطب", "طبب"],
  ["ببر", "برب", "ربب"],
  ["ببز", "بزب"],
  ["بلل", "لبل", "للب"],
  ["بلم", "بمل", "لمب"],
  ["بلى", "لبى"],
  ["باض", "اضب", "ابض"],
  ["باب", "ابب"],
  ["بام", "بما"],
  ["بائ", "ائب"],
  ["باؤ", "اؤب"],
  ["بتت", "تبت", "تتب"],
  ["بتز", "تبز", "تزب"],
  ["بنم", "بمن"],
  ["بكث", "كثب", "كبث"],
  ["بكم", "مبك", "مكب"],
  ["بكى", "كبى"],
  ["بكظ", "كبظ"],
  ["بئر", "برئ", "ربئ"],
  ["برن", "نبر", "نرب"],
  ["برى", "ربى"],
  ["بوي", "ويب", "وبي"],
  ["بوئ", "وبئ"],
  ["بوؤ", "ؤوب", "وبؤ"],
  ["بوز", "وبز", "وزب"],
  ["بوظ", "وبظ", "وظب"],
  ["بظل", "لبظ"],
  ["بظن", "نبظ", "نظب"],
  ["بأق", "أقب", "أبق"],
  ["بأح", "أحب", "أبح"],
  ["بأب", "أبب"],
  ["بأز", "أبز", "أزب"],
  ["بآه", "آبه"],
  ["بآي", "آيب", "آبي"],
  ["بآل", "لآب"],
  ["بآن", "نبآ"],
  ["لضق", "لقض"],
  ["لضب", "لبض"],
  ["لضن", "لنض", "نضل"],
  ["لضم", "لمض", "مضل"],
  ["لضر", "لرض"],
  ["لضو", "وضل"],
  ["لصغ", "لغص"],
  ["لصل", "للص"],
  ["لصك", "كصل", "كلص"],
  ["لصر", "لرص"],
  ["لصأ", "أصل", "ألص"],
  ["لثغ", "لغث"],
  ["لثا", "لاث", "اثل"],
  ["لثن", "نثل"],
  ["لثر", "لرث"],
  ["لقه", "لهق"],
  ["لقر", "لرق"],
  ["لعر", "لرع", "رعل"],
  ["لعظ", "ظلع"],
  ["لهر", "لره", "رهل"],
  ["لخش", "لشخ"],
  ["لخن", "لنخ", "نخل"],
  ["لخر", "لرخ"],
  ["لحر", "لرح", "رحل"],
  ["لحز", "لزح", "زحل"],
  ["لجش", "لشج"],
  ["لجؤ", "ؤجل"],
  ["لجر", "لرج", "رجل"],
  ["لجأ", "أجل", "ألج"],
  ["لجآ", "آجل"],
  ["لدش", "لشد"],
  ["لدر", "لرد"],
  ["لشط", "لطش"],
  ["لشر", "لرش"],
  ["لسر", "لرس", "رسل"],
  ["ليل", "للي"],
  ["لبؤ", "ؤلب"],
  ["لبر", "لرب", "ربل"],
  ["للت", "لتل"],
  ["للم", "لمل", "ملل"],
  ["للك", "لكل", "كلل"],
  ["للط", "لطل", "طلل"],
  ["للو", "لول"],
  ["للز", "لزل", "زلل"],
  ["للظ", "لظل", "ظلل"],
  ["لتث", "تثل", "تلث"],
  ["لته", "تهل", "تله"],
  ["لتت", "تلت", "تتل"],
  ["لتز", "تلز", "تزل"],
  ["لتظ", "تلظ", "تظل"],
  ["لنط", "لطن", "نطل"],
  ["لنؤ", "نؤل"],
  ["لنر", "لرن"],
  ["لمم", "ملم", "ممل"],
  ["لمئ", "لئم", "ملئ"],
  ["لمر", "لرم", "رمل"],
  ["لمظ", "مظل", "ظلم"],
  ["لكك", "كلك", "ككل"],
  ["لكئ", "لئك", "كلئ"],
  ["لكؤ", "كلؤ", "ؤكل"],
  ["لكر", "لرك", "ركل"],
  ["لكظ", "كظل"],
  ["لطر", "رطل"],
  ["لرز", "لزر"],
  ["لرأ", "لأر"],
  ["لوى", "ولى"],
  ["لظا", "الظ", "اظل"],
  ["لظن", "نلظ", "نظل"],
  ["لأق", "أقل", "ألق"],
  ["لأخ", "أخل", "ألخ"],
  ["لأح", "أحل", "ألح"],
  ["لأب", "أبل", "ألب"],
  ["لأط", "أطل"],
  ["لأز", "ألز", "أزل"],
  ["لآف", "آفل", "آلف"],
  ["لآه", "آهل", "آله"],
  ["لآي", "آلي"],
  ["لآن", "آلن"],
  ["اثق", "اقث"],
  ["اقز", "ازق", "زقا"],
  ["افي", "ايف"],
  ["اخت", "اتخ"],
  ["اسأ", "أسا"],
  ["ايك", "اكي", "كاي"],
  ["ابو", "اوب", "واب"],
  ["ابظ", "اظب"],
  ["ابأ", "أبا"],
  ["اته", "تاه"],
  ["انط", "اطن", "ناط"],
  ["انؤ", "ناؤ", "نؤا"],
  ["انأ", "أنا"],
  ["انآ", "آنا"],
  ["امم", "مما"],
  ["امو", "اوم", "ماو"],
  ["اكم", "كام", "كما"],
  ["اطف", "طفا", "طاف"],
  ["ائم", "مائ"],
  ["ائط", "طائ"],
  ["ائر", "رائ"],
  ["ائز", "زائ"],
  ["اؤز", "ؤاز", "زاؤ"],
  ["ارؤ", "راؤ", "رؤا"],
  ["ارأ", "أرا"],
  ["اوص", "وصا"],
  ["اوت", "تاو", "وات"],
  ["ازد", "زاد"],
  ["ازي", "زيا", "زاي"],
  ["تضخ", "تخض"],
  ["تضح", "تحض"],
  ["تضب", "تبض"],
  ["تضن", "تنض", "نتض"],
  ["تضم", "تمض"],
  ["تضئ", "تئض"],
  ["تضر", "ترض", "رتض"],
  ["تصح", "تحص"],
  ["تصب", "تبص"],
  ["تصر", "ترص"],
  ["تثغ", "تغث"],
  ["تثر", "ترث"],
  ["تقح", "تحق"],
  ["تقز", "تزق"],
  ["تفز", "تزف", "زفت"],
  ["تغو", "وغت"],
  ["تغز", "تزغ"],
  ["تعج", "تجع"],
  ["تعط", "تطع"],
  ["تهط", "تطه"],
  ["تخد", "تدخ"],
  ["تخت", "تتخ"],
  ["تخو", "توخ", "وتخ"],
  ["تجد", "تدج"],
  ["تجش", "تشج"],
  ["تجم", "تمج"],
  ["تجئ", "تئج"],
  ["تدي", "تيد"],
  ["تدب", "تبد"],
  ["تدل", "تلد"],
  ["تدن", "تند", "نتد"],
  ["تدم", "تمد", "متد"],
  ["تدك", "تكد", "كتد"],
  ["تدر", "ترد", "رتد"],
  ["تدو", "تود", "وتد"],
  ["تشأ", "أشت", "أتش"],
  ["تسي", "تيس"],
  ["تسط", "طست"],
  ["تسؤ", "تؤس"],
  ["تبط", "تطب"],
  ["تبئ", "تئب"],
  ["تبؤ", "تؤب"],
  ["تبظ", "تظب"],
  ["تلط", "تطل"],
  ["تاؤ", "ؤات"],
  ["تتم", "تمت", "متت"],
  ["تتك", "تكت", "كتت"],
  ["تتر", "ترت"],
  ["تنط", "تطن"],
  ["تنئ", "تئن", "نتئ"],
  ["تنز", "تزن"],
  ["تمط", "تطم", "متط"],
  ["تمز", "تزم", "متز"],
  ["تكك", "كتك", "ككت"],
  ["تكز", "تزك"],
  ["تكظ", "كتظ"],
  ["تكأ", "أتك", "أكت"],
  ["تطو", "توط"],
  ["تئر", "ترئ", "رتئ"],
  ["تؤق", "ؤقت"],
  ["ترؤ", "رتؤ"],
  ["ترى", "رتى"],
  ["ترز", "تزر"],
  ["ترأ", "أتر", "أرت"],
  ["توز", "تزو"],
  ["تزي", "زيت"],
  ["تأق", "أقت", "أتق"],
  ["تأخ", "أخت", "أتخ"],
  ["تأب", "أبت", "أتب"],
  ["تأو", "وأت", "أوت"],
  ["نضع", "نعض"],
  ["نضخ", "نخض"],
  ["نضر", "نرض"],
  ["نضو", "وضن", "ونض"],
  ["نصر", "نرص", "رصن"],
  ["نصأ", "أنص"],
  ["نثق", "نقث"],
  ["نثغ", "نغث"],
  ["نثج", "نجث"],
  ["نثر", "نرث"],
  ["نثو", "وثن"],
  ["نثأ", "أثن", "أنث"],
  ["نقه", "نهق"],
  ["نقز", "نزق", "زنق"],
  ["نغط", "نطغ"],
  ["نغر", "نرغ"],
  ["نغو", "وغن", "ونغ"],
  ["نغز", "نزغ"],
  ["نعك", "كعن"],
  ["نعط", "نطع", "طعن"],
  ["نعظ", "ظعن"],
  ["نهش", "نشه"],
  ["نهس", "نسه"],
  ["نهر", "نره", "رهن"],
  ["نهز", "نزه", "زهن"],
  ["نخر", "نرخ", "رنخ"],
  ["نحد", "ندح"],
  ["ندن", "نند"],
  ["نشك", "نكش", "كشن"],
  ["نسؤ", "نؤس", "ؤنس"],
  ["نسآ", "آسن", "آنس"],
  ["نبن", "ننب"],
  ["نبئ", "نئب"],
  ["ننم", "نمن"],
  ["ننك", "نكن", "كنن"],
  ["ننط", "نطن", "طنن"],
  ["ننو", "نون", "ونن"],
  ["ننز", "نزن", "زنن"],
  ["ننأ", "نأن"],
  ["نمم", "ممن"],
  ["نمط", "نطم", "طمن"],
  ["نمى", "منى"],
  ["نكى", "كنى"],
  ["نكظ", "كظن"],
  ["نكآ", "كآن", "آنك"],
  ["نطر", "رطن"],
  ["نطأ", "أنط", "أطن"],
  ["نئز", "زنئ"],
  ["نؤث", "ؤنث"],
  ["نؤز", "زنؤ"],
  ["نرن", "رنن"],
  ["نرأ", "أنر", "أرن"],
  ["نوى", "ونى"],
  ["نظن", "ظنن"],
  ["نظم", "مظن"],
  ["نأى", "أنى"],
  ["مغو", "وغم"],
  ["معط", "طعم", "طمع"],
  ["مدك", "كدم", "كمد"],
  ["منآ", "آمن"],
  ["ممر", "مرم", "رمم"],
  ["مطى", "طمى"],
  ["مؤن", "ؤمن"],
  ["مرئ", "رئم"],
  ["مرؤ", "ؤمر", "ؤرم"],
  ["مرآ", "آمر"],
  ["موض", "وضم", "ومض"],
  ["موج", "وجم", "ومج"],
  ["مأق", "أقم", "أمق"],
  ["كضف", "كفض"],
  ["كضع", "كعض"],
  ["كضخ", "كخض"],
  ["كضب", "كبض"],
  ["كضم", "كمض"],
  ["كضر", "كرض", "ركض"],
  ["كصح", "كحص"],
  ["كصم", "كمص"],
  ["كصو", "وصك"],
  ["كثر", "كرث"],
  ["كثو", "كوث", "وكث"],
  ["كقح", "كحق"],
  ["كقد", "كدق"],
  ["كقش", "كشق"],
  ["كقب", "كبق"],
  ["كقن", "كنق"],
  ["كقط", "كطق"],
  ["كقر", "كرق"],
  ["كقو", "كوق"],
  ["كقز", "كزق"],
  ["كفخ", "كخف"],
  ["كفأ", "أفك", "أكف"],
  ["كفآ", "كآف"],
  ["كغل", "كلغ"],
  ["كعج", "كجع"],
  ["كخل", "كلخ"],
  ["كخن", "كنخ"],
  ["كخم", "كمخ"],
  ["كخر", "كرخ"],
  ["كخو", "كوخ"],
  ["كخز", "كزخ"],
  ["كحد", "كدح"],
  ["كجد", "كدج"],
  ["كجش", "كشج"],
  ["كجل", "كلج"],
  ["كجم", "كمج"],
  ["كجر", "كرج"],
  ["كجز", "كزج"],
  ["كدس", "كسد"],
  ["كيك", "ككي"],
  ["كبك", "ككب"],
  ["كبط", "كطب"],
  ["كنك", "ككن"],
  ["كنط", "كطن"],
  ["كمط", "كطم"],
  ["كمز", "زكم"],
  ["كمأ", "كأم", "أكم"],
  ["ككر", "كرك", "ركك"],
  ["ككو", "كوك"],
  ["كوع", "وعك", "وكع"],
  ["كوم", "وكم"],
  ["كوى", "وكى"],
  ["كأح", "أحك", "أكح"],
  ["كأد", "أدك", "أكد"],
  ["كأس", "أسك", "أكس"],
  ["كأب", "أبك", "أكب"],
  ["كأز", "أكز", "أزك"],
  ["كآر", "آكر"],
  ["طفأ", "أطف"],
  ["طهر", "رهط"],
  ["طهو", "وهط", "وطه"],
  ["طرؤ", "ؤطر"],
  ["طرأ", "أطر", "أرط"],
  ["طوى", "وطى"],
  ["ؤثر", "ؤرث"],
  ["ؤهل", "ؤله"],
  ["ؤود", "وؤد"],
  ["ؤزر", "رزؤ"],
  ["روى", "ورى"],
  ["رزق", "زرق"],
  ["رزئ", "زئر"],
  ["رزآ", "آزر"],
  ["وضب", "وبض"],
  ["وصأ", "أوص"],
  ["وثق", "وقث"],
  ["وثأ", "أثو"],
  ["وعو", "ووع"],
  ["وهو", "ووه"],
  ["وهز", "وزه", "زهو"],
  ["وخش", "وشخ"],
  ["وخو", "ووخ"],
  ["وحو", "ووح"],
  ["ودو", "وود"],
  ["وشو", "ووش"],
  ["ولو", "وول"],
  ["ولظ", "وظل"],
  ["ونو", "وون"],
  ["ومأ", "أمو", "أوم"],
  ["وطو", "ووط"],
  ["وطأ", "أطو"],
  ["وئر", "ورئ"],
  ["وؤر", "ورؤ"],
  ["ورو", "وور"],
  ["ووز", "وزو"],
  ["وزد", "زود"],
  ["وأق", "أقو", "أوق"],
  ["وأخ", "أخو"],
  ["وأح", "أحو", "أوح"],
  ["وأد", "أدو", "أود"],
  ["زهد", "زده"],
  ["زدن", "زند"],
  ["زنأ", "أنز", "أزن"],
  ["ظفر", "ظرف"],
  ["إثر", "إرث"],
  ["إيل", "إلي"],
  ["إبر", "إرب"],
  ["إمر", "إرم"],
  ["أضف", "أفض"],
  ["أضع", "أعض"],
  ["أضخ", "أخض"],
  ["أضح", "أحض"],
  ["أضب", "أبض"],
  ["أضم", "أمض"],
  ["أضر", "أرض"],
  ["أصغ", "أغص"],
  ["أصخ", "أخص"],
  ["أصح", "أحص"],
  ["أصم", "أمص"],
  ["أصر", "أرص"],
  ["أثق", "أقث"],
  ["أثغ", "أغث"],
  ["أثج", "أجث"],
  ["أقع", "أعق"],
  ["أقح", "أحق"],
  ["أقد", "أدق"],
  ["أقش", "أشق"],
  ["أقن", "أنق"],
  ["أقط", "أطق"],
  ["أقز", "أزق"],
  ["أفز", "أزف"],
  ["أغب", "أبغ"],
  ["أغل", "ألغ"],
  ["أغن", "أنغ"],
  ["أغط", "أطغ"],
  ["أغر", "أرغ"],
  ["أغز", "أزغ"],
  ["أعج", "أجع"],
  ["أعد", "أدع"],
  ["أعش", "أشع"],
  ["أعس", "أسع"],
  ["أعن", "أنع"],
  ["أعم", "أمع"],
  ["أعط", "أطع"],
  ["أعر", "أرع"],
  ["أعو", "أوع"],
  ["أهش", "أشه"],
  ["أهس", "أسه"],
  ["أهب", "أبه"],
  ["أهل", "أله"],
  ["أهم", "أمه"],
  ["أهو", "أوه"],
  ["أخش", "أشخ"],
  ["أخن", "أنخ"],
  ["أحج", "أجح"],
  ["أحش", "أشح"],
  ["أحت", "أتح"],
  ["أحط", "أطح"],
  ["أحر", "أرح"],
  ["أحز", "أزح"],
  ["أجد", "أدج"],
  ["أجس", "أسج"],
  ["أجن", "أنج"],
  ["أجم", "أمج"],
  ["أجو", "أوج"],
  ["أدش", "أشد"],
  ["أدس", "أسد"],
  ["أدي", "أيد"],
  ["أدل", "ألد"],
  ["أدم", "أمد"],
  ["أشب", "أبش"],
  ["أشك", "أكش"],
  ["أشط", "أطش"],
  ["أشر", "أرش"],
  ["أيم", "أمي"],
  ["أيك", "أكي"],
  ["أبظ", "أظب"],
  ["ألظ", "أظل"],
  ["أتم", "أمت"],
  ["أمط", "أطم"],
  ["أمز", "أزم"],
  ["أكر", "أرك"],
  ["أكو", "أوك"],
  ["أوز", "أزو"],
];
