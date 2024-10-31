export type TLanguage = keyof typeof BUTTON_TEXT;

const BUTTON_TEXT = {
  ARM: 'Սեղմի ինձ!',
  RUS: 'Нажми на меня!',
} as const;

const FOOTER_BUTTON_TEXT = {
  ARM: 'Եվ վերջում!',
  RUS: 'И на последок!',
};

const SWITCH_LABELS = {
  ARM: 'ՀԱՅ',
  RUS: 'РУС',
} as const;

const POST_CARD_TEXT = {
  first: {
    RUS: 'Цик, сируник! Сегодня очень важный день, ведь сегодня день рождения самой сладкой булочки (конечно же, с кремом брюле)!',
    ARM: 'Ցիկ, սիրունիկս! Այսօր շատ կարևոր օր է! Այսօր ամենահամով բուլոչկի (իհարկե, կրեմ-բրյուլեով) ծննդյան օրն է!',
  },
  second: {
    RUS: 'Мне бы хотелось сегодня пожелать тебе всего самого доброго и просто поблагодарить тебя за то, что ты есть, что я имею счастье быть с тобой, общаться с тобой, видеть твою улыбку и делать все, чтобы улыбка твоя не сходила с лица!!!',
    ARM: 'Կուզենայի այսօր քեզ ամենաբարի բան ցանկանայ եւ ուղղակի շնորհակալություն հայտնել քեզ, որ կաս, որ ունեմ երջանկություն քո հետ լինել, շփվել, տեսնել քո ժպիտը եւ անել ամեն ինչ, որ քո ժպիտը դեմքիցդ չանհետանա!!!',
  },
  third: {
    RUS: 'Ты очень добрая, чудесная, вдохновляющая, невероятно лучезарная и поразительно искренняя 🥺🥺🥺\n Я каждый день удивляюсь твоей сердечности и от всей души радуюсь, что в моей жизни есть такой человек\n(а если быть точнее - булочка), как ты!',
    ARM: 'Դու շատ բարի, հրաշալի, ոգեշնչող, անսահման պայծառ եւ անչափ անկեղծ ես 🥺🥺🥺\nԱմեն օր զարմանում եմ քո սրտաբացության վրա եւ ամբողջ սրտով ուրախանում, որ իմ կյանքում կա այնպիսի մարդ (իսկ ավելի ճիշտ՝ ասաց - բուլոչկա), ինչպիսին դու ես!',
  },
  fourth: {
    RUS: 'Не знаю, как ты смогла сохранить с годами тот свет, что несешь в себе и даешь другим, но я благодарен тебе и твоей семье, что ты,  несмотря ни на что, осталась такой нежной, чуткой, воздушной зефиркой!\nЯ думал, что таких людей не бывает...',
    ARM: 'Չգիտեմ, թե ինչպես կարողացար տարիների ընթացքում պահպանել այն լույսը, որ կրում ես քո մեջ եւ տալիս ես ուրիշներին, բայց ես շնորհակալ եմ քեզ եւ քո ընտանիքին, որ դու, անկախ ամեն ինչից, մնացել ես այդպիսի նուրբ, զգայուն, թեթեւ զեֆիրի պես մարդ! Ես կարծում էի, որ այդպիսի մարդիկ չեն լինում...',
  },
  fifth: {
    RUS: 'Мне с тобой очень хорошо и я крайне рад, что у меня появился такой человек, которому я могу от чистого сердца сказать все эти слова! В такие моменты я чувствую себя счастливым ✨✨✨',
    ARM: 'Ես քո հետ ինձ չափազանց լավ եմ զգում և անչափ ուրախ եմ, որ իմ կյանքում հայտնվել է այնպիսի մարդ, որին կարող եմ ամբողջ սրտով ասել այս բառերը! Այսպիսի պահերին ինձ իսկապես երջանիկ եմ զգում ✨✨✨',
  },
  sixth: {
    RUS: 'Еще раз поздравляю тебя\nс твоим днем рождения ♥️♥️♥️\nПусть у тебя и твоей семьи все будет хорошо, а со своей стороны я приложу все усилия, чтобы сделать твою жизнь лучше!\nОбещаю!!!\n P.S. Не забудь посмотреть вниз!',
    ARM: 'Կրկին շնորհավորում եմ ծննդյանդ օրը ♥️♥️♥️ \n Թող քեզ և քո ընտանիքին ամեն ինչ լավ լինի, իսկ իմ կողմից կանեմ ամեն ինչ, որպեսզի կյանքդ ավելի լավ դարձնեմ!\nԽոստանում եմ!!!\nP.S. Չմոռանաս նայել ներքեւ!',
  },
} as const;

const FOOTER_TEXT = {
  first: {
    RUS: 'Кого еще благодарить, кроме как Бога!\n(но вообще можно еще поблагодарить Нелли и Наиру, конечно же)',
    ARM: 'Ում էլ շնորհակալ լինել, եթե ոչ Աստծուն!\n(բայց, իհարկե, կարելի է շնորհակալություն հայտնել նաև Նելլիին և Նայրային)',
  },
  second: {
    RUS: 'Крепко крепко тебя обнимаю, держу за ручку и не отпускаю! Не забывай, что рядом! Я очень рад, что ты появилась в моей жизни и мы теперь можем делиться друг с другом своим миром!\nТы просто чудо ♥️♥️♥️',
    ARM: 'Ուժեղ-ուժեղ քեզ գրկում եմ, ձեռքըդ բռնում ու չեմ թողնում! Մի մոռացի, որ կողքիդ եմ! Շատ ուրախ եմ, որ դու հայտնվեցիր իմ կյանքում, և հիմա մենք կարող ենք կիսվել միմյանց մեր աշխարհներով!\nԴու հրաշք ես ♥️♥️♥️',
  },
  third: {
    RUS: 'С любовью, всегда твой, Размик\n🫶🏼🫶🏼🫶🏼✨✨\n(но для тебя еще Винни, конечно же)\n(и Салливан тоже...)',
    ARM: 'Սիրով, միշտ քոնը, Ռազմիկ 🫶🏼🫶🏼🫶🏼✨✨\n(բայց քո համար նաև Վիննի, իհարկե)\n (ու Սալիվանը էլ...)',
  },
} as const;

export { BUTTON_TEXT, SWITCH_LABELS, POST_CARD_TEXT, FOOTER_BUTTON_TEXT, FOOTER_TEXT };
