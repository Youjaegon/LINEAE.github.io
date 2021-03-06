const TenseEnum = Object.freeze({
    "present": 1,
    "past": 2,
    "future": 3
})
const PersonEnum = Object.freeze({
    "first": 1,
    "second": 2,
    "third": 3
})
const PluralEnum = Object.freeze({
    "singular": 1,
    "plural": 2
})

function tenseToString(tense) {
    var ret = "";
    switch (tense) {
        case TenseEnum.present:
            ret = "present";
            break;
        case TenseEnum.past:
            ret = "past";
            break;
        case TenseEnum.present:
            ret = "future";
            break;
    }
    return ret;
}

function personToString(person) {
    var ret = "";
    switch (person) {
        case PersonEnum.first:
            ret = "first";
            break;
        case PersonEnum.second:
            ret = "second";
            break;
        case PersonEnum.third:
            ret = "third";
            break;
    }
    return ret;
}

function pluralToString(plural) {
    var ret = "";
    switch (plural) {
        case PluralEnum.singular:
            ret = "singular";
            break;
        case PluralEnum.plural:
            ret = "plural";
            break;
    }
    return ret;
}

function tenseToString(tense) {
    var ret = "";
    switch (tense) {
        case TenseEnum.present:
            ret = "present";
            break;
        case TenseEnum.past:
            ret = "past";
            break;
        case TenseEnum.present:
            ret = "future";
            break;
    }
    return ret;
}

class Subject {
    constructor(name, person, plural) {
        this.name = name;
        this.person = person;
        this.plural = plural;
    }
    toString() {
        return "name:" + this.name +
            "\nperson:" + personToString(this.person) +
            "\nplural:" + pluralToString(this.plural);
    }
}

const subjects = [
    new Subject("I", PersonEnum.first, PluralEnum.singular),
    new Subject("You", PersonEnum.second, PluralEnum.singular),
    new Subject("He", PersonEnum.third, PluralEnum.singular),
    new Subject("She", PersonEnum.third, PluralEnum.singular),
    new Subject("We", PersonEnum.first, PluralEnum.plural),
    new Subject("You", PersonEnum.second, PluralEnum.plural),
    new Subject("They", PersonEnum.third, PluralEnum.plural)
];


class Tense {
    constructor(tense, progressive, perfect) {
        this.tense = tense;
        this.progressive = progressive;
        this.perfect = perfect;
    }

    toString() {
        return "tense:" + tenseToString(this.tense) +
            "\nprogressive:" + this.progressive +
            "\nperfect:" + this.perfect;
    }
    
    getDisplayTense(subject, positive) {
        var verbPrefix = " ";
        switch (this.tense) {
            case TenseEnum.present: {
                if (this.perfect == true) {
                    if (subject.person == PersonEnum.third && subject.plural == PluralEnum.singular) {
                        if(positive) {
                            if (this.progressive == true) {
                                verbPrefix = "'s ";
                            } else {
                                verbPrefix = " has ";
                            }
                        } else {
                            verbPrefix = " hasn't ";
                        }
                    } else {
                        if(positive) {
                            verbPrefix = "'ve ";
                        } else {
                            verbPrefix = " haven't ";
                        }
                    }

                    if (this.progressive == true) {
                        verbPrefix += "been ";  
                    } 

                } else {
                    if (this.progressive == true) {
                        if(positive) {
                            if (subject.person == PersonEnum.first && subject.plural == PluralEnum.singular) {
                                verbPrefix = "'m ";
                            } else if (subject.person == PersonEnum.third && subject.plural == PluralEnum.singular) {
                                verbPrefix = "'s' ";
                            } else {
                                verbPrefix = "'re ";
                            }
                        } else {
                            if (subject.person == PersonEnum.first && subject.plural == PluralEnum.singular) {
                                verbPrefix = "'m not ";
                            } else if (subject.person == PersonEnum.third && subject.plural == PluralEnum.singular) {
                                verbPrefix = " isn't ";
                            } else {
                                verbPrefix = " aren't ";
                            }
                        }
                    } else {
                        if(positive) {

                        } else {
                            if (subject.person == PersonEnum.third && subject.plural == PluralEnum.singular) {
                                verbPrefix = " doesn't ";
                            } else {
                                verbPrefix = " don't ";
                            }
                        }
                    } 
                }
                break;
            }
            case TenseEnum.past: {
                if (this.perfect == true) {
                    if(positive) {
                        verbPrefix = "'d ";
                    } else{
                        verbPrefix = " hadn't ";
                    }
                    if (this.progressive == true) {
                        verbPrefix += "been ";
                    }

                } else {
                    if (this.progressive == true) {
                        if(positive) {
                            if (subject.person == PersonEnum.first && subject.plural == PluralEnum.singular) {
                                verbPrefix = " was ";
                            } else if (subject.person == PersonEnum.third && subject.plural == PluralEnum.singular) {
                                verbPrefix = " was ";
                            } else {
                                verbPrefix = " were ";
                            } 
                        } else{
                            if (subject.person == PersonEnum.first && subject.plural == PluralEnum.singular) {
                                verbPrefix = " wasn't ";
                            } else if (subject.person == PersonEnum.third && subject.plural == PluralEnum.singular) {
                                verbPrefix = " wasn't ";
                            } else {
                                verbPrefix = " weren't ";
                            }
                        }
                    } else {
                        if(positive) {

                        } else {
                            verbPrefix = " didn't ";
                        }
                    } 
                }
                break;
            }

            case TenseEnum.future: {
                if(positive) {
                    verbPrefix = "'ll ";
                }else{
                    verbPrefix = " won't ";
                }
                if (this.perfect == true) {
                    verbPrefix += "have ";
                    if (this.progressive == true) {
                        verbPrefix += "been ";
                    }

                } else {
                    if (this.progressive == true) {
                        verbPrefix += "be ";
                    }
                }
                break;
            }
        }
        return verbPrefix;
    }
}

const tenses = [
    new Tense(TenseEnum.present, false, false),
    new Tense(TenseEnum.present, true, false),
    new Tense(TenseEnum.present, false, true),
    new Tense(TenseEnum.present, true, true),

    new Tense(TenseEnum.past, false, false),
    new Tense(TenseEnum.past, true, false),
    new Tense(TenseEnum.past, false, true),
    new Tense(TenseEnum.past, true, true),

    new Tense(TenseEnum.future, false, false),
    new Tense(TenseEnum.future, true, false),
    new Tense(TenseEnum.future, false, true),
    new Tense(TenseEnum.future, true, true),
];


function convertToThird(verb) {
    //불규칙이 있을 경우 처리
    if(verb.third && verb.third != "") {
        return verb.third;
    }

    var base = verb.base
    var lastIndex = base.length - 1;
    var lastCh = base[lastIndex];
    var newVerb = base.slice(0, lastIndex);
    switch(lastCh) {
        case 'a':
        case 'i':
        case 'o':
        case 'u':
            newVerb = newVerb + lastCh + "es";  //동사 뒤에는 es
            break;
        case 'y':
            newVerb += "ies";   //y는 i로 고치고 ex
            break;
        default:
            newVerb = newVerb + lastCh + "s";   //나머지는 s
            break;       
    }
    return newVerb;

}

class Verb {
    constructor(base, past, perfect, progressive, kor, third) {
        this.base = base;
        this.past = past;
        this.perfect = perfect;
        this.progressive = progressive;
        this.kor = kor;
        this.third = third;
    }

    toString() {
        return "base:" + this.base +
            "\npast:" + this.past +
            "\nperfect:" + this.perfect +
            "\nprogressive:" + this.progressive +
            "\nkor:" + this.kor +
            "\nthird:" + this.third;
    }

    getDisplayVerb(subject, tense, positive) {
        var displayVerb = "";
        switch (tense.tense) {
            case TenseEnum.present: {
                if (tense.perfect == true) {
                    if (tense.progressive == true) {                    
                        displayVerb = this.progressive;
                    } else {
                        displayVerb = this.perfect;
                    }

                } else {
                    if (tense.progressive == true) {
                        displayVerb = this.progressive;
                    } else {
                        if (positive && subject.person == PersonEnum.third && subject.plural == PluralEnum.singular) {
                            displayVerb = convertToThird(this);
                        } else {
                            displayVerb = this.base;
                        }
                    }
                }
                break;
            }
            case TenseEnum.past: {
                if (tense.perfect == true) {                
                    if (tense.progressive == true) {
                        displayVerb = this.progressive;
                    } else {
                        displayVerb = this.perfect;
                    }

                } else {
                    if (tense.progressive == true) {                    
                        displayVerb = this.progressive;
                    } else {
                        if (positive) {
                            displayVerb = this.past;
                        } else {
                            displayVerb = this.base;
                        }
                    }
                }
                break;
            }

            case TenseEnum.future: {           
                if (tense.perfect == true) {                
                    if (tense.progressive == true) {                    
                        displayVerb = this.progressive;
                    } else {
                        displayVerb = this.perfect;
                    }
                } else {
                    if (tense.progressive == true) {                    
                        displayVerb = this.progressive;
                    } else {
                        displayVerb = this.base;
                    }
                }
                break;
            }
        }
        return displayVerb;
    }
}

const verbs = [];

(function () {
    for (var i = 0; i < irregularVerbsData.length; i++) {
        var item = irregularVerbsData[i];
        verbs[i] = new Verb(item[0], item[1], item[2], item[3], item[4], item[5]);
    }
})()

class Article {
    constructor(index, description) {
        this.index = index;
        this.description = description;
    }
}

const articles = [];
(function () {
    for (var i = 0; i < imageArticlesData.length; i++) {
        var item = imageArticlesData[i];
        articles[i] = new Article(i + 1, item[0]);
    }
})()

class Adjective {
    constructor(category, eng, kor) {
        this.category = category;
        this.eng = eng;
        this.kor = kor;
    }
}

const adjectives = [];
(function () {
    for (var i = 0; i < adjectivesData.length; i++) {
        var item = adjectivesData[i];
        adjectives[i] = new Adjective(item[0], item[1], item[2]);
    }
})()