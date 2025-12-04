// Data Source
const wordData = {
    "level1": [
        // Super Basic (Numbers, Colors, Family, Basic Verbs)
        { id: 1001, en: "apple", ja: "りんご" }, { id: 1002, en: "dog", ja: "犬" }, { id: 1003, en: "cat", ja: "猫" }, { id: 1004, en: "book", ja: "本" }, { id: 1005, en: "school", ja: "学校" },
        { id: 1006, en: "pen", ja: "ペン" }, { id: 1007, en: "desk", ja: "机" }, { id: 1008, en: "chair", ja: "椅子" }, { id: 1009, en: "teacher", ja: "先生" }, { id: 1010, en: "student", ja: "生徒" },
        { id: 1011, en: "mother", ja: "母" }, { id: 1012, en: "father", ja: "父" }, { id: 1013, en: "sister", ja: "姉・妹" }, { id: 1014, en: "brother", ja: "兄・弟" }, { id: 1015, en: "friend", ja: "友達" },
        { id: 1016, en: "house", ja: "家" }, { id: 1017, en: "room", ja: "部屋" }, { id: 1018, en: "bed", ja: "ベッド" }, { id: 1019, en: "window", ja: "窓" }, { id: 1020, en: "door", ja: "ドア" },
        { id: 1021, en: "morning", ja: "朝" }, { id: 1022, en: "afternoon", ja: "昼" }, { id: 1023, en: "evening", ja: "夕方" }, { id: 1024, en: "night", ja: "夜" }, { id: 1025, en: "today", ja: "今日" },
        { id: 1026, en: "tomorrow", ja: "明日" }, { id: 1027, en: "yesterday", ja: "昨日" }, { id: 1028, en: "Sunday", ja: "日曜日" }, { id: 1029, en: "Monday", ja: "月曜日" }, { id: 1030, en: "Friday", ja: "金曜日" },
        { id: 1031, en: "one", ja: "1" }, { id: 1032, en: "two", ja: "2" }, { id: 1033, en: "three", ja: "3" }, { id: 1034, en: "ten", ja: "10" }, { id: 1035, en: "hundred", ja: "100" },
        { id: 1036, en: "red", ja: "赤" }, { id: 1037, en: "blue", ja: "青" }, { id: 1038, en: "yellow", ja: "黄色" }, { id: 1039, en: "green", ja: "緑" }, { id: 1040, en: "white", ja: "白" },
        { id: 1041, en: "black", ja: "黒" }, { id: 1042, en: "big", ja: "大きい" }, { id: 1043, en: "small", ja: "小さい" }, { id: 1044, en: "long", ja: "長い" }, { id: 1045, en: "short", ja: "短い" },
        { id: 1046, en: "hot", ja: "暑い" }, { id: 1047, en: "cold", ja: "寒い" }, { id: 1048, en: "good", ja: "良い" }, { id: 1049, en: "bad", ja: "悪い" }, { id: 1050, en: "happy", ja: "幸せな" },
        { id: 1051, en: "sad", ja: "悲しい" }, { id: 1052, en: "run", ja: "走る" }, { id: 1053, en: "walk", ja: "歩く" }, { id: 1054, en: "eat", ja: "食べる" }, { id: 1055, en: "drink", ja: "飲む" },
        { id: 1056, en: "sleep", ja: "眠る" }, { id: 1057, en: "read", ja: "読む" }, { id: 1058, en: "write", ja: "書く" }, { id: 1059, en: "speak", ja: "話す" }, { id: 1060, en: "listen", ja: "聞く" },
        { id: 1061, en: "go", ja: "行く" }, { id: 1062, en: "come", ja: "来る" }, { id: 1063, en: "have", ja: "持っている" }, { id: 1064, en: "like", ja: "好き" }, { id: 1065, en: "want", ja: "欲しい" },
        { id: 1066, en: "play", ja: "遊ぶ" }, { id: 1067, en: "study", ja: "勉強する" }, { id: 1068, en: "work", ja: "働く" }, { id: 1069, en: "cook", ja: "料理する" }, { id: 1070, en: "swim", ja: "泳ぐ" },
        { id: 1071, en: "bird", ja: "鳥" }, { id: 1072, en: "fish", ja: "魚" }, { id: 1073, en: "flower", ja: "花" }, { id: 1074, en: "tree", ja: "木" }, { id: 1075, en: "river", ja: "川" },
        { id: 1076, en: "mountain", ja: "山" }, { id: 1077, en: "sea", ja: "海" }, { id: 1078, en: "sky", ja: "空" }, { id: 1079, en: "sun", ja: "太陽" }, { id: 1080, en: "moon", ja: "月" },
        { id: 1081, en: "car", ja: "車" }, { id: 1082, en: "bus", ja: "バス" }, { id: 1083, en: "train", ja: "電車" }, { id: 1084, en: "bike", ja: "自転車" }, { id: 1085, en: "plane", ja: "飛行機" },
        { id: 1086, en: "head", ja: "頭" }, { id: 1087, en: "hand", ja: "手" }, { id: 1088, en: "foot", ja: "足" }, { id: 1089, en: "eye", ja: "目" }, { id: 1090, en: "mouth", ja: "口" },
        { id: 1091, en: "name", ja: "名前" }, { id: 1092, en: "time", ja: "時間" }, { id: 1093, en: "money", ja: "お金" }, { id: 1094, en: "water", ja: "水" }, { id: 1095, en: "milk", ja: "牛乳" },
        { id: 1096, en: "bread", ja: "パン" }, { id: 1097, en: "rice", ja: "米" }, { id: 1098, en: "egg", ja: "卵" }, { id: 1099, en: "meat", ja: "肉" }, { id: 1100, en: "fruit", ja: "果物" }
    ],
    "level2": [
        // JHS Grade 1 (Basic Grammar, Daily Life)
        { id: 2001, en: "about", ja: "〜について" }, { id: 2002, en: "after", ja: "〜の後で" }, { id: 2003, en: "again", ja: "また" }, { id: 2004, en: "all", ja: "すべての" }, { id: 2005, en: "always", ja: "いつも" },
        { id: 2006, en: "answer", ja: "答える" }, { id: 2007, en: "any", ja: "いくつかの" }, { id: 2008, en: "ask", ja: "尋ねる" }, { id: 2009, en: "beautiful", ja: "美しい" }, { id: 2010, en: "because", ja: "なぜなら" },
        { id: 2011, en: "before", ja: "〜の前に" }, { id: 2012, en: "begin", ja: "始める" }, { id: 2013, en: "best", ja: "最も良い" }, { id: 2014, en: "birthday", ja: "誕生日" }, { id: 2015, en: "breakfast", ja: "朝食" },
        { id: 2016, en: "bring", ja: "持ってくる" }, { id: 2017, en: "buy", ja: "買う" }, { id: 2018, en: "call", ja: "呼ぶ" }, { id: 2019, en: "can", ja: "〜できる" }, { id: 2020, en: "change", ja: "変える" },
        { id: 2021, en: "city", ja: "市" }, { id: 2022, en: "class", ja: "授業" }, { id: 2023, en: "clean", ja: "きれいな" }, { id: 2024, en: "club", ja: "クラブ" }, { id: 2025, en: "color", ja: "色" },
        { id: 2026, en: "computer", ja: "コンピュータ" }, { id: 2027, en: "country", ja: "国" }, { id: 2028, en: "day", ja: "日" }, { id: 2029, en: "dear", ja: "親愛なる" }, { id: 2030, en: "dinner", ja: "夕食" },
        { id: 2031, en: "do", ja: "する" }, { id: 2032, en: "doctor", ja: "医者" }, { id: 2033, en: "early", ja: "早く" }, { id: 2034, en: "easy", ja: "簡単な" }, { id: 2035, en: "enjoy", ja: "楽しむ" },
        { id: 2036, en: "every", ja: "毎〜" }, { id: 2037, en: "family", ja: "家族" }, { id: 2038, en: "fast", ja: "速い" }, { id: 2039, en: "favorite", ja: "お気に入りの" }, { id: 2040, en: "find", ja: "見つける" },
        { id: 2041, en: "fine", ja: "元気な" }, { id: 2042, en: "first", ja: "最初の" }, { id: 2043, en: "for", ja: "〜のために" }, { id: 2044, en: "from", ja: "〜から" }, { id: 2045, en: "fun", ja: "楽しみ" },
        { id: 2046, en: "game", ja: "試合" }, { id: 2047, en: "get", ja: "手に入れる" }, { id: 2048, en: "girl", ja: "女の子" }, { id: 2049, en: "give", ja: "与える" }, { id: 2050, en: "glad", ja: "うれしい" },
        { id: 2051, en: "great", ja: "すばらしい" }, { id: 2052, en: "hard", ja: "一生懸命に" }, { id: 2053, en: "help", ja: "助ける" }, { id: 2054, en: "here", ja: "ここに" }, { id: 2055, en: "high", ja: "高い" },
        { id: 2056, en: "home", ja: "家" }, { id: 2057, en: "homework", ja: "宿題" }, { id: 2058, en: "hope", ja: "望む" }, { id: 2059, en: "how", ja: "どのように" }, { id: 2060, en: "idea", ja: "考え" },
        { id: 2061, en: "interesting", ja: "おもしろい" }, { id: 2062, en: "job", ja: "仕事" }, { id: 2063, en: "join", ja: "参加する" }, { id: 2064, en: "just", ja: "ちょうど" }, { id: 2065, en: "keep", ja: "保つ" },
        { id: 2066, en: "kind", ja: "親切な" }, { id: 2067, en: "know", ja: "知っている" }, { id: 2068, en: "language", ja: "言語" }, { id: 2069, en: "last", ja: "最後の" }, { id: 2070, en: "late", ja: "遅い" },
        { id: 2071, en: "learn", ja: "学ぶ" }, { id: 2072, en: "leave", ja: "去る" }, { id: 2073, en: "letter", ja: "手紙" }, { id: 2074, en: "library", ja: "図書館" }, { id: 2075, en: "life", ja: "生活" },
        { id: 2076, en: "little", ja: "少しの" }, { id: 2077, en: "live", ja: "住む" }, { id: 2078, en: "look", ja: "見る" }, { id: 2079, en: "love", ja: "愛する" }, { id: 2080, en: "lunch", ja: "昼食" },
        { id: 2081, en: "make", ja: "作る" }, { id: 2082, en: "many", ja: "多くの" }, { id: 2083, en: "meet", ja: "会う" }, { id: 2084, en: "member", ja: "一員" }, { id: 2085, en: "more", ja: "もっと" },
        { id: 2086, en: "much", ja: "たくさんの" }, { id: 2087, en: "near", ja: "近くに" }, { id: 2088, en: "need", ja: "必要とする" }, { id: 2089, en: "new", ja: "新しい" }, { id: 2090, en: "next", ja: "次の" },
        { id: 2091, en: "nice", ja: "素敵な" }, { id: 2092, en: "now", ja: "今" }, { id: 2093, en: "often", ja: "しばしば" }, { id: 2094, en: "old", ja: "古い" }, { id: 2095, en: "only", ja: "〜だけ" },
        { id: 2096, en: "open", ja: "開く" }, { id: 2097, en: "other", ja: "他の" }, { id: 2098, en: "our", ja: "私たちの" }, { id: 2099, en: "park", ja: "公園" }, { id: 2100, en: "party", ja: "パーティー" }
    ],
    "level3": [
        // JHS Grade 2 (Past Tense, Future, Comparisons)
        { id: 3001, en: "able", ja: "〜できる" }, { id: 3002, en: "abroad", ja: "海外へ" }, { id: 3003, en: "advice", ja: "助言" }, { id: 3004, en: "afraid", ja: "恐れて" }, { id: 3005, en: "ago", ja: "〜前に" },
        { id: 3006, en: "agree", ja: "同意する" }, { id: 3007, en: "airport", ja: "空港" }, { id: 3008, en: "another", ja: "もう一つの" }, { id: 3009, en: "arrive", ja: "到着する" }, { id: 3010, en: "art", ja: "芸術" },
        { id: 3011, en: "believe", ja: "信じる" }, { id: 3012, en: "better", ja: "より良い" }, { id: 3013, en: "boat", ja: "ボート" }, { id: 3014, en: "born", ja: "生まれた" }, { id: 3015, en: "both", ja: "両方の" },
        { id: 3016, en: "break", ja: "壊す" }, { id: 3017, en: "bridge", ja: "橋" }, { id: 3018, en: "build", ja: "建てる" }, { id: 3019, en: "busy", ja: "忙しい" }, { id: 3020, en: "care", ja: "世話" },
        { id: 3021, en: "careful", ja: "注意深い" }, { id: 3022, en: "carry", ja: "運ぶ" }, { id: 3023, en: "catch", ja: "捕まえる" }, { id: 3024, en: "chance", ja: "機会" }, { id: 3025, en: "change", ja: "変化" },
        { id: 3026, en: "check", ja: "確認する" }, { id: 3027, en: "child", ja: "子供" }, { id: 3028, en: "choose", ja: "選ぶ" }, { id: 3029, en: "clothes", ja: "衣服" }, { id: 3030, en: "cloud", ja: "雲" },
        { id: 3031, en: "company", ja: "会社" }, { id: 3032, en: "continue", ja: "続ける" }, { id: 3033, en: "cool", ja: "涼しい" }, { id: 3034, en: "could", ja: "〜できた" }, { id: 3035, en: "culture", ja: "文化" },
        { id: 3036, en: "cut", ja: "切る" }, { id: 3037, en: "danger", ja: "危険" }, { id: 3038, en: "dark", ja: "暗い" }, { id: 3039, en: "decide", ja: "決める" }, { id: 3040, en: "deep", ja: "深い" },
        { id: 3041, en: "delicious", ja: "おいしい" }, { id: 3042, en: "die", ja: "死ぬ" }, { id: 3043, en: "different", ja: "異なった" }, { id: 3044, en: "difficult", ja: "難しい" }, { id: 3045, en: "dream", ja: "夢" },
        { id: 3046, en: "during", ja: "〜の間" }, { id: 3047, en: "each", ja: "それぞれの" }, { id: 3048, en: "earth", ja: "地球" }, { id: 3049, en: "east", ja: "東" }, { id: 3050, en: "end", ja: "終わり" },
        { id: 3051, en: "enough", ja: "十分な" }, { id: 3052, en: "enter", ja: "入る" }, { id: 3053, en: "even", ja: "〜でさえ" }, { id: 3054, en: "ever", ja: "これまでに" }, { id: 3055, en: "example", ja: "例" },
        { id: 3056, en: "exciting", ja: "わくわくさせる" }, { id: 3057, en: "experience", ja: "経験" }, { id: 3058, en: "face", ja: "顔" }, { id: 3059, en: "fact", ja: "事実" }, { id: 3060, en: "fall", ja: "落ちる" },
        { id: 3061, en: "famous", ja: "有名な" }, { id: 3062, en: "far", ja: "遠くに" }, { id: 3063, en: "farm", ja: "農場" }, { id: 3064, en: "feel", ja: "感じる" }, { id: 3065, en: "festival", ja: "祭り" },
        { id: 3066, en: "few", ja: "少数の" }, { id: 3067, en: "field", ja: "野原" }, { id: 3068, en: "fight", ja: "戦う" }, { id: 3069, en: "finally", ja: "ついに" }, { id: 3070, en: "finish", ja: "終える" },
        { id: 3071, en: "fire", ja: "火" }, { id: 3072, en: "floor", ja: "床" }, { id: 3073, en: "follow", ja: "従う" }, { id: 3074, en: "food", ja: "食べ物" }, { id: 3075, en: "foreign", ja: "外国の" },
        { id: 3076, en: "forest", ja: "森" }, { id: 3077, en: "forget", ja: "忘れる" }, { id: 3078, en: "free", ja: "自由な" }, { id: 3079, en: "front", ja: "前" }, { id: 3080, en: "future", ja: "未来" },
        { id: 3081, en: "garden", ja: "庭" }, { id: 3082, en: "gift", ja: "贈り物" }, { id: 3083, en: "glass", ja: "コップ" }, { id: 3084, en: "group", ja: "集団" }, { id: 3085, en: "grow", ja: "成長する" },
        { id: 3086, en: "guest", ja: "客" }, { id: 3087, en: "half", ja: "半分" }, { id: 3088, en: "happen", ja: "起こる" }, { id: 3089, en: "health", ja: "健康" }, { id: 3090, en: "hear", ja: "聞こえる" },
        { id: 3091, en: "heart", ja: "心" }, { id: 3092, en: "heavy", ja: "重い" }, { id: 3093, en: "history", ja: "歴史" }, { id: 3094, en: "hobby", ja: "趣味" }, { id: 3095, en: "hold", ja: "持つ" },
        { id: 3096, en: "holiday", ja: "休日" }, { id: 3097, en: "hospital", ja: "病院" }, { id: 3098, en: "hour", ja: "時間" }, { id: 3099, en: "human", ja: "人間" }, { id: 3100, en: "hungry", ja: "空腹の" }
    ],
    "level4": [
        // JHS Grade 3 (Passive, Perfect Tense, Participles, Relatives)
        { id: 4001, en: "ability", ja: "能力" }, { id: 4002, en: "accept", ja: "受け入れる" }, { id: 4003, en: "accident", ja: "事故" }, { id: 4004, en: "action", ja: "行動" }, { id: 4005, en: "activity", ja: "活動" },
        { id: 4006, en: "actually", ja: "実は" }, { id: 4007, en: "add", ja: "加える" }, { id: 4008, en: "address", ja: "住所" }, { id: 4009, en: "adult", ja: "大人" }, { id: 4010, en: "advantage", ja: "利点" },
        { id: 4011, en: "against", ja: "〜に対して" }, { id: 4012, en: "allow", ja: "許す" }, { id: 4013, en: "almost", ja: "ほとんど" }, { id: 4014, en: "alone", ja: "一人で" }, { id: 4015, en: "already", ja: "すでに" },
        { id: 4016, en: "although", ja: "〜だけれども" }, { id: 4017, en: "among", ja: "〜の間で" }, { id: 4018, en: "amount", ja: "量" }, { id: 4019, en: "ancient", ja: "古代の" }, { id: 4020, en: "announce", ja: "発表する" },
        { id: 4021, en: "anyway", ja: "とにかく" }, { id: 4022, en: "appear", ja: "現れる" }, { id: 4023, en: "area", ja: "地域" }, { id: 4024, en: "around", ja: "〜の周りに" }, { id: 4025, en: "article", ja: "記事" },
        { id: 4026, en: "artist", ja: "芸術家" }, { id: 4027, en: "asleep", ja: "眠って" }, { id: 4028, en: "attention", ja: "注意" }, { id: 4029, en: "audience", ja: "聴衆" }, { id: 4030, en: "average", ja: "平均" },
        { id: 4031, en: "avoid", ja: "避ける" }, { id: 4032, en: "balance", ja: "バランス" }, { id: 4033, en: "basic", ja: "基本的な" }, { id: 4034, en: "beauty", ja: "美しさ" }, { id: 4035, en: "behavior", ja: "振る舞い" },
        { id: 4036, en: "behind", ja: "〜の後ろに" }, { id: 4037, en: "benefit", ja: "利益" }, { id: 4038, en: "besides", ja: "〜の他に" }, { id: 4039, en: "beyond", ja: "〜を越えて" }, { id: 4040, en: "bit", ja: "少し" },
        { id: 4041, en: "blind", ja: "目の見えない" }, { id: 4042, en: "blood", ja: "血" }, { id: 4043, en: "board", ja: "板" }, { id: 4044, en: "body", ja: "体" }, { id: 4045, en: "boil", ja: "沸騰させる" },
        { id: 4046, en: "borrow", ja: "借りる" }, { id: 4047, en: "bottom", ja: "底" }, { id: 4048, en: "brain", ja: "脳" }, { id: 4049, en: "brave", ja: "勇敢な" }, { id: 4050, en: "breath", ja: "息" },
        { id: 4051, en: "bright", ja: "明るい" }, { id: 4052, en: "burn", ja: "燃える" }, { id: 4053, en: "business", ja: "仕事" }, { id: 4054, en: "cause", ja: "原因" }, { id: 4055, en: "celebrate", ja: "祝う" },
        { id: 4056, en: "center", ja: "中心" }, { id: 4057, en: "century", ja: "世紀" }, { id: 4058, en: "certain", ja: "確かな" }, { id: 4059, en: "chance", ja: "機会" }, { id: 4060, en: "character", ja: "性格" },
        { id: 4061, en: "cheap", ja: "安い" }, { id: 4062, en: "check", ja: "小切手" }, { id: 4063, en: "cheer", ja: "元気づける" }, { id: 4064, en: "chemical", ja: "化学の" }, { id: 4065, en: "choice", ja: "選択" },
        { id: 4066, en: "circle", ja: "円" }, { id: 4067, en: "citizen", ja: "市民" }, { id: 4068, en: "clear", ja: "晴れた" }, { id: 4069, en: "clerk", ja: "店員" }, { id: 4070, en: "clever", ja: "利口な" },
        { id: 4071, en: "climate", ja: "気候" }, { id: 4072, en: "climb", ja: "登る" }, { id: 4073, en: "close", ja: "近い" }, { id: 4074, en: "cloth", ja: "布" }, { id: 4075, en: "coast", ja: "海岸" },
        { id: 4076, en: "collect", ja: "集める" }, { id: 4077, en: "college", ja: "大学" }, { id: 4078, en: "common", ja: "共通の" }, { id: 4079, en: "communicate", ja: "伝達する" }, { id: 4080, en: "community", ja: "地域社会" },
        { id: 4081, en: "compare", ja: "比較する" }, { id: 4082, en: "complain", ja: "不平を言う" }, { id: 4083, en: "complete", ja: "完全な" }, { id: 4084, en: "condition", ja: "状態" }, { id: 4085, en: "connect", ja: "つなぐ" },
        { id: 4086, en: "consider", ja: "よく考える" }, { id: 4087, en: "contact", ja: "接触" }, { id: 4088, en: "contain", ja: "含む" }, { id: 4089, en: "content", ja: "内容" }, { id: 4090, en: "continue", ja: "続く" },
        { id: 4091, en: "control", ja: "支配する" }, { id: 4092, en: "convenient", ja: "便利な" }, { id: 4093, en: "conversation", ja: "会話" }, { id: 4094, en: "corner", ja: "角" }, { id: 4095, en: "correct", ja: "正しい" },
        { id: 4096, en: "cost", ja: "費用がかかる" }, { id: 4097, en: "cotton", ja: "綿" }, { id: 4098, en: "cough", ja: "咳" }, { id: 4099, en: "count", ja: "数える" }, { id: 4100, en: "course", ja: "進路" }
    ]
};

// State
let currentLevel = null;
let activeWords = [];
let currentIndex = 0;
let isFlipped = false;

// DOM Elements
const levelSelection = document.getElementById('level-selection');
const gameArea = document.getElementById('game-area');
const completionMessage = document.getElementById('completion-message');
const flashcard = document.getElementById('flashcard');
const wordEn = document.getElementById('word-en');
const wordJa = document.getElementById('word-ja');
const progressText = document.getElementById('progress-text');
const memorizedCheckbox = document.getElementById('memorized-checkbox');

// Initialization
document.addEventListener('DOMContentLoaded', () => {
    // Level Selection Buttons
    document.querySelectorAll('.level-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const level = btn.getAttribute('data-level');
            startGame(level);
        });
    });

    // Card Flip
    flashcard.addEventListener('click', (e) => {
        // Prevent flip if clicking the checkbox
        if (e.target.closest('.memorize-check')) return;

        flipCard();
    });

    // Navigation Buttons
    document.getElementById('prev-btn').addEventListener('click', prevCard);
    document.getElementById('next-btn').addEventListener('click', nextCard);

    // Back Buttons
    document.getElementById('back-to-menu').addEventListener('click', showMenu);
    document.getElementById('back-to-menu-complete').addEventListener('click', showMenu);

    // Memorized Checkbox
    memorizedCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            markAsMemorized();
        }
    });

    // Reset Level
    document.getElementById('reset-level-btn').addEventListener('click', resetLevelProgress);

    // Initial Level Calculation
    calculateTotalLevel();
});

// Game Logic
function startGame(level) {
    currentLevel = level;
    loadWords(level);

    if (activeWords.length === 0) {
        showCompletion();
    } else {
        // Shuffle words for randomness
        shuffleArray(activeWords);
        currentIndex = 0;
        isFlipped = false;
        updateCardDisplay();

        levelSelection.classList.add('hidden');
        completionMessage.classList.add('hidden');
        gameArea.classList.remove('hidden');
    }
}

function loadWords(level) {
    const allWords = wordData[level];
    const memorizedIds = JSON.parse(localStorage.getItem(`memorized_${level}`)) || [];

    // Filter out memorized words
    activeWords = allWords.filter(word => !memorizedIds.includes(word.id));
}

function updateCardDisplay() {
    if (activeWords.length === 0) {
        showCompletion();
        return;
    }

    // Ensure index wraps around
    if (currentIndex >= activeWords.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = activeWords.length - 1;

    const word = activeWords[currentIndex];

    // Reset card state
    flashcard.classList.remove('flipped');
    isFlipped = false;
    memorizedCheckbox.checked = false;

    // Update text with small delay to hide transition if needed, 
    // but here we update immediately as the card is front-facing
    wordEn.textContent = word.en;
    wordJa.textContent = word.ja;

    progressText.textContent = `残り: ${activeWords.length}単語`;
}

function flipCard() {
    isFlipped = !isFlipped;
    flashcard.classList.toggle('flipped');

    if (isFlipped) {
        // Speak English word when flipped to back (or front? Spec says "speak on flip")
        // Usually better to speak when showing English, but let's speak when flipping to back as a reinforcement?
        // Or maybe speak immediately when English is shown?
        // Let's speak the English word when flipping.
        speak(activeWords[currentIndex].en);
    }
}

function nextCard() {
    currentIndex++;
    updateCardDisplay();
}

function prevCard() {
    currentIndex--;
    updateCardDisplay();
}

function markAsMemorized() {
    const word = activeWords[currentIndex];

    // Save to LocalStorage
    const memorizedIds = JSON.parse(localStorage.getItem(`memorized_${currentLevel}`)) || [];
    if (!memorizedIds.includes(word.id)) {
        memorizedIds.push(word.id);
        localStorage.setItem(`memorized_${currentLevel}`, JSON.stringify(memorizedIds));

        // Update total level immediately
        calculateTotalLevel();
    }

    // Remove from active list
    activeWords.splice(currentIndex, 1);

    // Delay slightly to show the check animation, then move to next
    setTimeout(() => {
        if (activeWords.length === 0) {
            showCompletion();
        } else {
            // Current index now points to the next word (since we removed one), 
            // but we need to check bounds
            if (currentIndex >= activeWords.length) {
                currentIndex = 0;
            }
            updateCardDisplay();
        }
    }, 500);
}

function showCompletion() {
    gameArea.classList.add('hidden');
    levelSelection.classList.add('hidden');
    completionMessage.classList.remove('hidden');
}

function showMenu() {
    gameArea.classList.add('hidden');
    completionMessage.classList.add('hidden');
    levelSelection.classList.remove('hidden');

    // Recalculate level when returning to menu (just in case)
    calculateTotalLevel();
}

function resetLevelProgress() {
    if (confirm("このレベルの学習記録をリセットしますか？")) {
        localStorage.removeItem(`memorized_${currentLevel}`);
        calculateTotalLevel(); // Update level after reset
        startGame(currentLevel);
    }
}

function calculateTotalLevel() {
    let totalWords = 0;
    let totalMemorized = 0;

    // Iterate through all levels in wordData
    for (const level in wordData) {
        const wordsInLevel = wordData[level];
        totalWords += wordsInLevel.length;

        const memorizedIds = JSON.parse(localStorage.getItem(`memorized_${level}`)) || [];
        // Ensure we only count valid IDs that exist in the current data (in case data changed)
        const validMemorized = memorizedIds.filter(id => wordsInLevel.some(w => w.id === id));
        totalMemorized += validMemorized.length;
    }

    if (totalWords === 0) return;

    // Calculate percentage (Level 0 - 100)
    const level = Math.floor((totalMemorized / totalWords) * 100);

    // Animate the number
    animateValue("current-level", parseInt(document.getElementById("current-level").innerText), level, 1000);
}

function animateValue(id, start, end, duration) {
    if (start === end) return;
    const range = end - start;
    let current = start;
    const increment = end > start ? 1 : -1;
    const stepTime = Math.abs(Math.floor(duration / range));
    const obj = document.getElementById(id);

    const timer = setInterval(function () {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

// Utilities
function speak(text) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'en-US';
        window.speechSynthesis.speak(utterance);
    }
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
