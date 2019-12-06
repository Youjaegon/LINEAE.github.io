// 원형, 과거, 과거완료, 현재진행, 한국어, 단수형(동규야 부탁한다)
var data = [
["drive", "drove", "driven", "driving", "운전하다", ""],
["ride", "rode", "ridden", "riding", "(탈것에)타다", ""],
["write", "wrote", "written", "writing", "(글씨를)쓰다", ""],
["break", "broke", "broken", "breaking", "부수다", ""],
["choose", "chose", "chosen", "choosing", "선택하다", ""],
["forget", "forgot", "forgotten", "forgetting", "잊다", ""],
["freeze", "froze", "frozen", "freezing", "얼다", ""],
["speak", "spoke", "spoken", "speaking", "말하다,연설하다", ""],
["steal", "stole", "stolen", "stealing", "훔치다", ""],
["begin", "began", "begun", "beginning", "시작하다", ""],
["drink", "drank", "drunk", "drinking", "마시다", ""],
["run", "ran", "run", "running", "달리다", ""],
["shrink", "shrank", "shrunk", "shrinking", "줄어들다", ""],
["sing", "sang", "sung", "singing", "노래하다", ""],
["spring", "sprang", "sprung", "springing", "튀어오르다", ""],
["swim", "swam", "swum", "swimming", "수영하다", ""],
["mistake", "mistook", "mistaken", "mistaking", "실수하다", ""],
["shake", "shook", "shaken", "shaking", "혼들다", ""],
["take", "took", "taken", "taking", "잡다", ""],
["blow", "blew", "blown", "blowing", "불다", ""],
["fly", "flew", "flown", "flying", "날다", ""],
["grow", "grew", "grown", "growing", "자라다", ""],
["know", "knew", "known", "knowing", "알다", ""],
["throw", "threw", "thrown", "throwing", "던지다", ""],
["withdraw", "withdrew", "withdrawn", "withdrawing", "(돈을)인출하다,철회하다", ""],
["swear", "swore", "sworn", "swearing", "맹세하다", "swear"],
["tear", "tore", "torn", "tearing", "찢다", ""],
["wear", "wore", "worn", "wearing", "입다", ""],
["show", "showed", "shown", "showing", "보여주다", ""],
["be(am/is,are)", "was/were", "been", "being", "있다/이다", "is"],
["beat", "beat", "beaten", "beating", "때리다", ""],
["become", "became", "become", "becoming", "되다", ""],
["bite", "bit", "bitten", "biting", "물다", ""],
["come", "came", "come", "coming", "오다", ""],
["do", "did", "done", "doing", "하다", ""],
["eat", "ate", "eaten", "eating", "먹다", ""],
["fall", "fell", "fallen", "falling", "떨어지다", ""],
["forbid", "forbade", "forbidden", "forbidding", "금지하다", ""],
["forgive", "forgave", "forgiven", "forgiving", "용서하다", ""],
["give", "gave", "given", "giving", "주다", ""],
["go", "went", "gone", "going", "가다", ""],
["hide", "hid", "hidden", "hiding", "숨기다", ""],
["lie", "lay", "lain", "lying", "눕다", ""],
["see", "saw", "seen", "seeing", "보다", ""],
["bleed", "bled", "bled", "bleeding", "피를흘리다", ""],
["feed", "fed", "fed", "feeding", "먹이다", ""],
["lead", "led", "led", "leading", "이끌다", ""],
["meet", "met", "met", "meeting", "만나다", ""],
["read", "tead", "read", "reading", "읽다", ""],
["shoot", "shot", "shot", "shooting", "쏘다,발사하다", ""],
["sleep", "slept", "slept", "sleeping", "자다", ""],
["speed", "sped", "sped", "speeding", "속도를내다", ""],
["hear", "heard", "heard", "hearing", "듣다", ""],
["dig", "dug", "dug", "digging", "파다", ""],
["hang", "hung", "hung", "hanging", "매달다", ""],
["stick", "stuck", "stuck", "sticking", "찌르다.붙이다", ""],
["strike", "struck", "struck", "striking", "치다,때리다", ""],
["awake", "awoke", "awoken", "awaking", "(잠에서)깨우다", ""],
["get", "got", "gotten/go~", "getting", "얻다,되다", ""],
["shine", "shone", "shone", "shining", "빛나다", ""],
["win", "won", "won", "wining", "이기다,얻다", ""],
["bend", "bent", "bent", "bending", "구부리다", ""],
["build", "built", "built", "building", "세우다.짓다", ""],
["lend", "lent", "lent", "lending", "빌려주다", ""],
["lose", "lost", "lost", "losing", "잃다", ""],
["send", "sent", "sent", "sending", "보내다", ""],
["spend", "spent", "spent", "spending", "(시간이나 돈을)사용하다", ""],
["deal", "dealt", "dealt", "dealing", "다루다", ""],
["mean", "meant", "meant", "meaning", "의미하다", ""],
["bring", "brought", "brought", "bringing", "가져오다", ""],
["buy", "bought", "bought", "buying", "사다", ""],
["catch", "caught", "caught", "catching", "잡다", ""],
["fight", "fought", "fought", "fighting", "싸우다", ""],
["seek", "sought", "sought", "seeking", "찾다,추구하다", ""],
["teach", "taught", "taught", "teaching", "가르치다", ""],
["think", "thought", "thought", "thinking", "생각하다", ""],
["find", "found", "found", "finding", "찾다.발견하다", ""],
["pay", "paid", "paid", "paying", "지불하다", ""],
["say", "said", "said", "saying", "말하다", ""],
["stand", "stood", "Stood", "standing", "씨다", ""],
["understand", "understood", "understood", "understanding", "이해하다", ""],
["feel", "felt", "felt", "feeling", "느끼다", ""],
["hold", "held", "held", "holding", "잡다,쥐다", ""],
["keep", "kept", "kept", "keeping", "유지하다", ""],
["leave", "left", "leift", "leaving", "떠나다", ""],
["sell", "sold", "sold", "selling", "팔다", ""],
["tell", "told", "told", "telling", "말하다", ""],
["have", "had", "had", "having", "갖다,가지다", "has"],
["light", "lit", "lit", "lighting", "(불을)켜다,밝히다", ""],
["make", "made", "made", "making", "만들다", ""],
["sit", "sat", "sat", "sitting", "앉다", ""],
["slide", "slid", "slid", "sliding", "미끄러지다", ""],
["burst", "burst", "burst", "bursting", "터뜨리다", ""],
["cost", "cost", "cost", "costing", "(비용이)들다", ""],
["cut", "cut", "cut", "cutting", "자르다", ""],
["hit", "hit", "hit", "hitting", "치다", "hit"],
["hurt", "hurt", "hurt", "hurting", "다치게 하다", ""],
["put", "put", "put", "putting", "두다,놓다", ""],
["set", "set", "set", "setting", "놓다,마련하다", ""],
["shut", "shut", "shut", "shutting", "닫다,잠그다", ""],
["spread", "spread", "spread", "spreading", "퍼다,떨치다", ""],
["bear", "bore", "born(e)", "bearing", "출산하다", ""],
]
//["", "", "", "", "", ""],