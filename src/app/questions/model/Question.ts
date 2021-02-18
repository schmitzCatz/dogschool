import { Answer } from './answer';

/**
 * Multiple Choise Question.
 */
export interface Question {
  /** Identifier of this Question */
  number: number;

  /** Question Title. */
  title: string;

  /** Question Text. Aka the question. */
  text?: string;

  /** Question Image. */
  image?: string;

  /** Selection of possible answers */
  answers: Answer[];
}

/**
 * Question database.
 */
export const QUESTIONS: Array<Question> = [
    {
        number: 1,
        title: 'Welches Tier ist der Urahn des heutigen Hundes?',
        answers: [
            { text: 'Der Goldschakal', isCorrect: false },
            { text: 'Der Wolf', isCorrect: true },
            { text: 'Der Kojote', isCorrect: false },
            { text: 'Der Dingo', isCorrect: false }
        ]
    },    
    {
        number: 2,
        title: 'Sind alle Hunde gleich oder gibt es rassetypische Eigenschaften?',
        answers: [
            { text: 'Alle Hunde sind gleich.', isCorrect: false },
            {
                text: 'Je nach Rasse weisen die Hunde unterschiedliche Veranlagungen auf',
                isCorrect: true
            },
            {
                text: 'Verschiedene Rassen unterscheiden sich nur durch ihr äußeres Erscheinungsbild.',
                isCorrect: false
            },
            {
                text: 'Rassetypische Eigenschaften gibt es nicht, aber anhand der Größe kann man eine Einteilung in ”kinderfreundlich”, ”gefährlich”, ”leicht zu erziehen” etc. treffen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 3,
        title: 'Was ist die Grundveranlagung, die jeder Hund in sich trägt?',
        answers: [
            { text: 'Hunde sind Jagdraubtiere.', isCorrect: true },
            {
                text: 'Hunde sind für das Zusammenleben mit Menschen geschaffen worden. Sie sind völlig abhängig vom Menschen und können alleine nicht existieren, da sie sich keine Nahrung beschaffen könnten.',
                isCorrect: false
            },
            {
                text: 'Hunde sind soziale Rudeltiere und darauf ausgerichtet in einem Gruppenverband zu leben.',
                isCorrect: true
            },
            {
                text: 'Hunde sind Aasfresser und suchen deshalb ständig nach toten Tieren.',
                isCorrect: false
            }
        ]
    },
    {
        number: 4,
        title: 'Welche Dinge sind vor der Anschaffung eines Hundes wichtig?',
        answers: [
            { text: 'Ist die Hundehaltung erlaubt?', isCorrect: true },
            {
                text: 'Habe ich die Möglichkeit, den Hund 12-15 Jahre lang sicher zu behalten und zu versorgen?',
                isCorrect: true
            },
            {
                text: 'Passt der ausgesuchte Hund von seiner Rasseveranlagung her tatsächlich zu meinem Lebensstil?',
                isCorrect: true
            },
            {
                text: 'Die Abstammung von hochprämierten Elterntieren.',
                isCorrect: false
            }
        ]
    },
    {
        number: 5,
        title: 'Welche Überlegungen muss man anstellen, wenn man sich einen Hund anschaffen will?',
        answers: [
            {
                text: 'Der ausgewählte Hund sollte von seiner Rasseveranlagung her möglichst gut zu einem passen. Das Aussehen sollte hingegen nicht ausschlaggebend für die Entscheidung sein. ',
                isCorrect: true
            },
            {
                text: 'Beim Zusammenleben mit einem Hund könnten Probleme auftreten. Habe ich dann die Geduld, Zeit, Kraft mich darum zu kümmern?',
                isCorrect: true
            },
            {
                text: 'Werde ich auch in den nächsten 12- 15 Jahren noch genug Zeit und Lust haben, einen Hund zu halten?',
                isCorrect: true
            },
            {
                text: 'Habe ich ausreichend Geld für eine optimale Versorgung des Hundes, auch für medizinische Behandlungen?',
                isCorrect: true
            }
        ]
    },
    {
        number: 6,
        title: 'Unter welchen Umständen sollte man davon absehen, sich einen Hund anzuschaffen?',
        answers: [
            {
                text: 'Bei Berufstätigkeit, wenn der Hund mehr als sechs Stunden täglich alleine sein müsste.',
                isCorrect: true
            },
            {
                text: 'Wenn absehbar ist, dass sich Berufs- oder Lebenssituation ändern werden und nicht sicher ist, ob Hundehaltung dann noch möglich ist.',
                isCorrect: true
            },
            { text: 'Wenn man keinen Garten hat.', isCorrect: false },
            {
                text: 'Wenn man eine starke Allergie auf Hundehaare hat.',
                isCorrect: true
            }
        ]
    },
    {
        number: 7,
        title: 'Welche Bedürfnisse des Hundes müssen bei artgerechter Haltung täglich ausreichend erfüllt werden?',
        answers: [
            {
                text: 'Der Hund muss ausreichend, d.h. mehrere Stunden täglich geistig und körperlich gefordert werden.',
                isCorrect: true
            },
            {
                text: 'Der Hund muss jeden Tag ausreichend lange und mehrmals täglich Sozialkontakte mit Menschen und Artgenossen haben.',
                isCorrect: true
            },
            {
                text: 'Der Hund muss täglich mindestens zwei Mahlzeiten erhalten.',
                isCorrect: false
            },
            {
                text: 'Der Hund sollte vorwiegend in einer Zwingeranlage mit gut isoliertem Boden gehalten werden.',
                isCorrect: false
            }
        ]
    },
    {
        number: 14,
        title: 'Bis zu Welchem Alter bezeichnet man Hunde als "Welpen"?',
        answers: [
            { text: 'Bis zu einem Jahr.', isCorrect: false },
            {
                text: `Von Geburt an bis zum Abschluss der Prägephase (Sozialisationsphase),
                    also ca. bis zum Abschluss des 4. Lebensmonats`,
                isCorrect: true
            },
            { text: 'Bis zur Geschlechtsreife', isCorrect: false },
            { text: 'Bis die nicht mehr gesäugt werden', isCorrect: false }
        ]
    },
    {
        number: 32,
        title: 'Woran kann man erkennen, ob sich ein Hund einem anderen gegenüber dominant verhält? ',
        answers: [
            { text: 'Er legt sich auf die Seite und wedelt', isCorrect: false },
            {
                text: 'Er macht sich groß (Schwanz hoch, Ohren nach vorne, steifer Gang) und weicht Blickkontakt nicht aus.',
                isCorrect: true
            },
            { text: 'Er bellt und legt die Ohren an.', isCorrect: false },
            {
                text: 'Er legt die Schnauze oder Pfote auf den Rücken des anderen Hundes.',
                isCorrect: true
            }
        ]
    },
    {
        number: 50,
        title: 'Wer wäre der beste Ansprechpartner, wenn es zu Problemen im Zusammenleben kommt?',
        answers: [
            {
                text: 'Der Züchter oder ein anderer Halter derselben Rasse.',
                isCorrect: false
            },
            {
                text: 'Ein Tierarzt, der sich auf Verhalten spezialisiert hat.',
                isCorrect: true
            },
            {
                text: 'Ein anderer Hundebesitzer, der seinen Hund gut unter Kontrolle hat.',
                isCorrect: false
            },
            {
                text: ' Ein moderner und erfahrener Hundetrainer, der im Bereich Problemverhalten speziell geschult ist.',
                isCorrect: true
            }
        ]
    },
    {
        number: 68,
        title: 'Ihr frei laufender Hund kommt auf Ihr Rufen nicht zurück. Was kann man tun?',
        answers: [
            {
                text: 'Sich so verstecken, dass man den Hund noch sehen kann und den Hund dann nach einiger Zeit aus dem Versteck heraus noch einmal rufen. Außerdem einen Gehorsamskurs buchen, denn das Rückrufkommando sollte klappen. ',
                isCorrect: true
            },
            {
                text: 'Schnell in die entgegengesetzte Richtung davonrennen und sich so für den Hund interessant machen. Außerdem schnellstmöglich Rat einholen bei einem erfahrenen und modernen Hundeausbilder, der Hunde über positive Trainingstechniken erzieht.',
                isCorrect: true
            },
            {
                text: 'Versuchen, den Hund einzufangen. Solch einen Hund kann man nie wieder ableinen.',
                isCorrect: false
            },
            {
                text: 'Den Hund laut anschreien und mit Strafen drohen, damit er Angst bekommt und herankommt. Wenn der Hund schon älter ist, kann man nichts mehr machen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 79,
        title: 'Was kann passieren, wenn man einen Hund als Erziehungsmaßnahme häufig und hart bestraft?',
        answers: [
            {
                text: 'Er wird die Übung schnell und zuverlässig ausführen, denn so lernt er, dass er brav sein muss.',
                isCorrect: false
            },
            {
                text: 'Er kann scheu und unsicher werden, weil er kein Vertrauen mehr zu seinem Besitzer hat.',
                isCorrect: true
            },
            {
                text: 'Es passiert nichts Schlimmes. Hunde untereinander verhalten sich auch rigoros. Der Hund wird also große Freude bei den Übungen haben, wenn er erst verstanden hat, worum es geht.',
                isCorrect: false
            },
            {
                text: 'Er könnte unter Umständen aggressiv reagieren, weil er sich bedroht fühlt.',
                isCorrect: false
            }
        ]
    },
    {
        number: 106,
        title: 'Auf dem Hundespaziergang kommt einem ein Reiter entgegen. Wie soll man sich verhalten?',
        answers: [
            {
                text: 'Wenn der Hund Pferde kennt, braucht man nichts zu unternehmen, denn dann hat der Hund keine Angst',
                isCorrect: false
            },
            {
                text: 'Man sollte den Hund heranrufen und an die Leine nehmen, bis Pferd und Reiter vorbei sind und man sicher weiß, dass der Hund nicht hinterherrennen wird. ',
                isCorrect: true
            },
            {
                text: `Wenn der Reiter nur ”Schritt” reitet, ist keine Gefahr gegeben,
                 denn das langsame Reiten verleitet nicht zum Jagen. `,
                isCorrect: false
            },
            {
                text: 'Man sollte seinen Hund grundsätzlich unter Kontrolle nehmen, da manche Pferde auch bei ruhigen und freundlichen Hunden ängstlich reagieren und dadurch Unfälle entstehen können. ',
                isCorrect: true
            }
        ]
    },
    {
        number: 123,
        title: 'Sollte man, wenn man einen Hund übernimmt, mit dem Hund zum Tierarzt gehen, auch wenn der Hund einen gesunden Eindruck macht?',
        answers: [
            {
                text: 'Ja, damit der Tierarzt anhand des Impfpasses überprüfen kann, ob der Hund ausreichend geimpft ist.',
                isCorrect: true
            },
            {
                text: 'Ja, damit sich der Hund an den Tierarzt und die Abläufe in der Praxis gewöhnt.',
                isCorrect: true
            },
            {
                text: 'Nein, so etwas ist nicht notwendig und reine Geldverschwendung.',
                isCorrect: false
            },
            {
                text: 'Ja, damit der Tierarzt den Hund möglichst auch einmal gesund kennen lernen kann. Er kann dann krankheitsbedingtes Verhalten besser einordnen.',
                isCorrect: true
            }
        ]
    },
    {
        number: 151,
        title: 'Warum ist es wichtig, seinen Hund regelmäßig gegen Tollwut impfen zu lassen?',
        answers: [
            {
                text: 'Die Tollwutimpfung ist gesetzlich vorgeschrieben.',
                isCorrect: false
            },
            {
                text: 'Tollwut ist eine Infektionskrankheit, mit der sich auch Menschen infizieren können.',
                isCorrect: false
            },
            {
                text: 'Eine Tollwutimpfung ist überflüssig Tollwut kommt in Deutschland überhaupt nicht mehr vor.',
                isCorrect: false
            },
            {
                text: 'Tollwutgeimpfte Hunde stehen gesetzlich besser da als ungeimpfte.',
                isCorrect: true
            }
        ]
    },
    {
        number: 161,
        title: 'Welchen Ausdruck zeigt dieser Hund? ',
        image: 'assets/dog_161.png',
        answers: [
            { text: 'Der Hund ist neutral bis aufmerksam.', isCorrect: false },
            { text: 'Der Hund ist ängstlich.', isCorrect: false },
            { text: 'Der Hund droht selbstsicher.', isCorrect: true },
            { text: 'Der Hund ist unterwürfig.', isCorrect: false }
        ]
    },
    {
        number: 15,
        title: 'Welche Auswirkung hat häufige und lange Zwingerhaltung auf die Wesensentwicklung des Welpen?',
        answers: [
            {
                text: 'So lernt der Hund gut alleine zu bleiben.',
                isCorrect: false
            },
            {
                text: 'Defizite im Sozialverhalten gegenüber Menschen und Artgenossen.',
                isCorrect: true
            },
            {
                text: 'Probleme im Bereich des häuslichen Sauberkeitstrainings.',
                isCorrect: true
            },
            {
                text: 'Die gesundheitliche Widerstandskraft ist größer.',
                isCorrect: false
            }
        ]
    },
    {
        number: 33,
        title: 'Was bedeutet es, wenn ein Hund einem anderen den Kopf auf den Rücken legt?',
        answers: [
            { text: 'Er ist unterwürfig.', isCorrect: false },
            { text: 'Er macht eine Spielaufforderung.', isCorrect: false },
            { text: 'Er ist müde.', isCorrect: false },
            { text: 'Es ist eine Imponiergeste.', isCorrect: true }
        ]
    },
    {
        number: 51,
        title: 'Was hat für Hunde die größte Bedeutung im Bereich der Rangfolge. ',
        answers: [
            {
                text: 'Aufmerksamkeit (Spiel, Futter, Zuwendung) fordern zu können.',
                isCorrect: true
            },
            { text: 'Täglich mehrmals rausgehen zu dürfen.', isCorrect: false },
            {
                text: 'Einen gemütlichen, ggf. erhöhten Liegeplatz zu haben.',
                isCorrect: false
            },
            {
                text: 'Spielzeug zur freien Verfügung zu besitzen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 69,
        title: 'Besteht die Gefahr, durch Strafen einen Hund so zu schockieren, dass er das Vertrauen in einen verliert?',
        answers: [
            {
                text: 'Nein, nicht wenn man vorher ein gutes Verhältnis hatte.',
                isCorrect: false
            },
            {
                text: `Ja, bei sensiblen Hunden manchmal sogar mit Kleinigkeiten,
                 besonders wenn die Handlung für den Hund ”unlogisch” ist.`,
                isCorrect: true
            },
            {
                text: 'Ja, durch inkonsequentes und launisches Vorgehen.',
                isCorrect: true
            },
            { text: 'Nur bei generell ängstlichen Hunden.', isCorrect: false }
        ]
    },
    {
        number: 80,
        title: 'Wie häufig und wie lange sollte man mit dem Hund üben?',
        answers: [
            { text: 'Ein Mal am Tag eine Stunde.', isCorrect: false },
            {
                text: 'So häufig wie es geht, aber immer nur kurz, dann kann sich der Hund am Besten konzentrieren. ',
                isCorrect: true
            },
            {
                text: 'Es ist besonders wichtig, dass man täglich immer zur selben Zeit übt, wie lange, ist abhängig vom Trainingsstand des Hundes.',
                isCorrect: false
            },
            {
                text: 'Zwei Übungen auf jedem Spaziergang sind absolut ausreichend, sonst wird der Hund überfordert. ',
                isCorrect: false
            }
        ]
    },
    {
        number: 107,
        title: 'Der eigene Hund ist plötzlich in eine Rauferei verwickelt. Wie sollte man reagieren?',
        answers: [
            {
                text: 'Man sollte die raufenden Hunde solange möglichst laut anschreien, bis sie aufhören sich zu raufen.',
                isCorrect: false
            },
            {
                text: 'Man sollte sich gar nicht einmischen. Beide Besitzer sollten sich einigen, sich kommentarlos und möglichst zügig in entgegengesetzter Richtung von den Hunden zu entfernen. Die Hunde sollten, sobald sie zum Besitzer kommen, von diesem angeleint werden, um eine mögliche zweite Kampfphase zu vermeiden.',
                isCorrect: true
            },
            {
                text: 'Wenn nur zwei Hunde in die Rauferei verwickelt sind, sollte man die Hunde trennen, indem man am Schwanz oder an den Hinterbeinen zieht, und zwar gleichzeitig bei beiden Hunden. ',
                isCorrect: false
            },
            {
                text: 'Man sollte den Hund, der angegriffen worden ist, hinterher trösten und den anderen streng zurechtweisen und bestrafen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 124,
        title: 'Gibt es Dinge, die man prophylaktisch tun kann, damit der Hund gesund bleibt?',
        answers: [
            {
                text: 'Ja. Der Hund sollte z.B. regelmäßig geimpft werden.',
                isCorrect: true
            },
            {
                text: 'Ja, man sollte den ganzen Körper z.B. beim Bürsten täglich genau anschauen, um Veränderungen oder Parasitenbefall sofort zu erkennen. ',
                isCorrect: true
            },
            {
                text: 'Ja, der Hund sollte nur das beste Futter bekommen. Das ist in aller Regel auch das teuerste.',
                isCorrect: false
            },
            {
                text: 'Ja, einmal wöchentlich sollte man den Hund baden.',
                isCorrect: false
            }
        ]
    },
    {
        number: 152,
        title: 'Wenn im Mietvertrag kein Hinweis zu finden ist, ob Tierhaltung erlaubt ist, darf man sich dann einen Hund anschaffen? ',
        answers: [
            {
                text: 'Nein, erst muss die Zustimmung des Vermieters eingeholt werden.',
                isCorrect: true
            },
            {
                text: 'Ja, aber nur einen Hund, der kleiner als 40 cm Schulterhöhe ist.',
                isCorrect: false
            },
            {
                text: 'Ja, ansonsten müsste ein Haltungsverbot extra erwähnt werden.',
                isCorrect: false
            },
            {
                text: 'Nein, man muss erst die Zustimmung der anderen Mieter einholen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 163,
        title: 'Welchen Ausdruck zeigt dieser Hund?',
        image: 'assets/dog_163.png',
        answers: [
            { text: 'Der Hund ist neutral bis aufmerksam', isCorrect: false },
            { text: 'Der Hund droht aus Unsicherheit.', isCorrect: true },
            { text: 'Der Hund ist friedfertig.', isCorrect: false },
            { text: 'Der Hund ist unterwürfig.', isCorrect: false }
        ]
    },
    {
        number: 16,
        title: 'Woran erkennen Sie eine empfehlenswerte Welpenspielgruppe? ',
        answers: [
            {
                text: 'Es dürfen Hunde verschiedener Rassen teilnehmen.',
                isCorrect: true
            },
            {
                text: 'Der Trainer bestraft einen Welpen sofort, wenn er aggressives Verhalten zeigt, denn die Hunde sollen eine gute Sozialverträglichkeit lernen. ',
                isCorrect: false
            },
            {
                text: 'Es dürfen nur gesunde Hunde bis max. zur 16. Lebenswoche teilnehmen.',
                isCorrect: true
            },
            {
                text: 'Den Welpen werden viele verschiedene Reizsituationen geboten, damit sie ”umweltsicher” werden.',
                isCorrect: true
            }
        ]
    },
    {
        number: 34,
        title: 'Was bedeutet es, wenn sich zwei Hunde direkt in die Augen starren?',
        answers: [
            { text: 'Es bedeutet, dass sie sich gern haben.', isCorrect: false },
            {
                text: 'Es bedeutet, dass sie sich gegenseitig imponieren wollen und messen, wer der stärkere ist.',
                isCorrect: true
            },
            {
                text: 'Auf diese Weise bedrohen sie sich gegenseitig.',
                isCorrect: true
            },
            { text: 'Sie wollen miteinander spielen.', isCorrect: false }
        ]
    },
    {
        number: 52,
        title: 'Wie stellt man zwischen Mensch und Hund die Rangordnung klar?',
        answers: [
            {
                text: 'Man wartet, bis der Hund ein Rangprivileg für sich in Anspruch nimmt oder in einer Übung einen Fehler macht und unterwirft ihn dann, indem man ihn mit Schwung auf den Rücken dreht und dort einen Moment lang festhält. ',
                isCorrect: false
            },
            {
                text: 'Man achtet darauf, dass man selbst derjenige ist, der zum größten Teil zu gemeinsamen Beschäftigungen auffordert.',
                isCorrect: true
            },
            {
                text: 'Man ignoriert aufdringliches und forderndes Verhalten des Hundes.',
                isCorrect: true
            },
            {
                text: 'Man isst demonstrativ vor den Augen des Hundes und gibt ihm von diesem Essen nichts ab.',
                isCorrect: false
            }
        ]
    },
    {
        number: 70,
        title: 'Was ist zu tun, wenn ein Hund, der immer lieb und friedlich war, ganz plötzlich aggressives Verhalten zeigt? ',
        answers: [
            {
                text: 'Der Hund sollte schnellstens dem Tierarzt vorgestellt werden, denn der Hund könnte Schmerzen oder eine Erkrankung haben. ',
                isCorrect: true
            },
            {
                text: 'Man sollte ihn sofort eindrücklich bestrafen, denn so etwas darf man nicht durchgehen lassen.',
                isCorrect: false
            },
            {
                text: 'Gar nichts. Aggressives Verhalten ist ein normales Hundeverhalten.',
                isCorrect: false
            },
            {
                text: 'Man sollte die Fütterung umstellen und mehr Kohlenhydrate füttern.',
                isCorrect: false
            }
        ]
    },
    {
        number: 81,
        title: 'Stimmt es, dass man älteren Hunden nichts mehr beibringen kann?',
        answers: [
            {
                text: 'Ja, Hunde, die älter als ein Jahr sind, können nichts mehr lernen.',
                isCorrect: false
            },
            {
                text: 'Nein, Hunde können ihr Leben lang neue Dinge lernen.',
                isCorrect: true
            },
            {
                text: 'Nein, aber es ist einfacher, schon mit einem Welpen zu üben, dann gewöhnt sich der Hund nicht erst etwas Falsches an.',
                isCorrect: true
            },
            {
                text: 'Nein. Da ein Welpe noch gar nichts lernen kann, sollte man überhaupt mit der Erziehung erst beginnen, wenn der Hund ein Jahr alt ist',
                isCorrect: false
            }
        ]
    },
    {
        number: 108,
        title: 'Auf einer Wiese spielt eine Gruppe von Kindern Fußball. Wie verhalten Sie sich mit Ihrem frei laufenden Hund?',
        answers: [
            {
                text: 'Wenn dies ein Hundeauslaufgebiet ist, darf ich den Hund frei laufen lassen. Ich erkläre den Fußballspielern das und schicke sie weg.',
                isCorrect: false
            },
            {
                text: 'Ich muss gar nichts unternehmen, denn mein Hund ist nicht aggressiv. Für den Fall, dass er im Übermut den Ball kaputt machen sollte, habe ich eine Haftpflichtversicherung.',
                isCorrect: false
            },
            {
                text: 'Ich leine den Hund vorsichtshalber an, bis ich an den Ball spielenden Kindern vorbei bin und sicher weiß, dass der Hund nicht zurücklaufen wird.',
                isCorrect: true
            },
            {
                text: 'Man muss in solchen Situationen nur große Hunde anleinen, denn ein kleiner Hund kann einem Kind nicht gefährlich werden.',
                isCorrect: false
            }
        ]
    },
    {
        number: 125,
        title: 'Wieviel Bewegung braucht ein Hund?',
        answers: [
            {
                text: 'Das ist abhängig von der Größe, dem Alter und dem Gesundheitszustand.',
                isCorrect: true
            },
            {
                text: 'Hunde brauchen nicht viel Bewegung. Es sind Tiere, die Gemütlichkeit lieben.',
                isCorrect: false
            },
            { text: 'Zu viel Bewegung schadet den Gelenken.', isCorrect: false },
            { text: 'Das ist abhängig von der Fütterung.', isCorrect: false }
        ]
    },
    {
        number: 153,
        title: 'Darf man seinen Hund neben dem PKW herlaufen lassen? ',
        answers: [
            { text: 'Nur, wenn man es eilig hat.', isCorrect: false },
            {
                text: 'Nein, das ist laut Straßenverkehrsordnung verboten.',
                isCorrect: true
            },
            {
                text: 'Ja, wenn der Hund langsam daran gewöhnt wird.',
                isCorrect: false
            },
            { text: 'Ja, aber nur auf Feldwegen.', isCorrect: false }
        ]
    },
    {
        number: 164,
        title: 'Welchen Ausdruck zeigt dieser Hund? ',
        image: 'assets/dog_164.png',
        answers: [
            { text: 'Der Hund ist neutral bis aufmerksam.', isCorrect: false },
            { text: 'Der Hund ist stark ängstlich.', isCorrect: true },
            { text: 'Der Hund ist aggressiv.', isCorrect: false },
            { text: 'Der Hund ist unterwürfig.', isCorrect: true }
        ]
    },
    {
        number: 17,
        title: 'Ist es schlimm, wenn der Hund im Welpenalter schon mit vielen Reizsituationen konfrontiert wird?',
        answers: [
            {
                text: 'Nein, denn die im Welpenalter gemachten Erfahrungen haben prägenden Charakter. Hunde, die als Welpen in positiver Weise viele Reizsituationen erleben konnten, sind später selbstsicherer.',
                isCorrect: true
            },
            {
                text: 'Ja, denn Welpen sind noch nicht so aufnahmefähig und sollten möglichst die ersten fünf Monate geschont werden.',
                isCorrect: false
            },
            {
                text: 'Nein, denn ausreichend Erfahrungen im Welpenalter sind für eine optimale Entwicklung des Gehirns ausschlaggebend.',
                isCorrect: true
            },
            {
                text: 'Ja, denn die Hunde, die als Welpen viel kennen gelernt haben, sind nervöser und aktiver und deshalb schwerer zu halten.',
                isCorrect: false
            }
        ]
    },
    {
        number: 35,
        title: 'Was für eine Bedeutung hat es, wenn sich ein Hund flach auf den Boden legt und einen entgegenkommenden Hund mit dem Blick fixiert?',
        answers: [
            {
                text: 'Er möchte vermutlich einen ”Angriff” starten. Dieser Angriff kann spielerisch oder ernst ausgerichtet sein.',
                isCorrect: true
            },
            {
                text: 'Er ist müde und möchte sich schnell noch ein wenig ausruhen, bis der andere Hund da ist.',
                isCorrect: false
            },
            {
                text: 'Es hat gar nichts mit dem anderen Hund zu tun, sondern ist ein Zeichen von starken Bauchschmerzen.',
                isCorrect: false
            },
            {
                text: 'Der liegende Hund verhält sich unterwürfig.',
                isCorrect: false
            }
        ]
    },
    {
        number: 53,
        title: 'Was zeigt eine gute Bindung zwischen Mensch und Hund an?',
        answers: [
            {
                text: 'Der Hund kann mit seinem Menschen ausgelassen spielen.',
                isCorrect: false
            },
            {
                text: 'Der Hund hat Spaß an Übungen, die ”sein” Mensch von ihm verlangt.',
                isCorrect: true
            },
            {
                text: 'Wenn die Bezugspersonen häufig wechseln, lernt der Hund eine grundsätzlich gute Bindung gegenüber allen Menschen.',
                isCorrect: false
            },
            {
                text: 'Ein Hund, der eine gute Bindung zu seinem Besitzer hat, orientiert sich auch auf dem Spaziergang häufig an ihm.',
                isCorrect: true
            }
        ]
    },
    {
        number: 71,
        title: 'Mein Hund hat beim Tierarzt auf dem Tisch sehr viel Angst. Er ist unruhig und zappelig. Manchmal knurrt er auch, wenn ihm etwas unangenehm ist. Ist es günstig, dem Hund gut zuzureden?',
        answers: [
            {
                text: 'Ja, ich sollte möglichst die ganze Zeit mit dem Hund reden, um ihn zu beruhigen.',
                isCorrect: false
            },
            {
                text: 'Nein, ich sollte gar nicht mit ihm reden, weil mein Hund lernen muss, mit derartigen Situationen alleine klar zu kommen.',
                isCorrect: false
            },
            {
                text: 'Nein, ich sollte nur in den Momenten mit ihm reden, wenn er sich brav verhält und nicht knurrt.',
                isCorrect: true
            },
            {
                text: 'Gut zureden ist nicht richtig. Statt dessen sollte man ihn einmal laut anschreien, damit er aufhört sich so aufzuführen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 82,
        title: 'Wie kann man vermeiden, dass der Hund durch Strafen das Vertrauen in seinen Besitzer verliert?',
        answers: [
            {
                text: 'Wenn man Ignorieren als Methode anwendet.',
                isCorrect: true
            },
            {
                text: `Bei einer indirekten Strafe, wie z.B. mit der Wasserpistole zu spritzen,
                 wenn man dabei nicht gleichzeitig schimpft.`,
                isCorrect: true
            },
            {
                text: 'Bei einer indirekten Strafe, wie z.B. mit der Wasserpistole zu spritzen. Dabei sollte man gleichzeitig schimpfen, sonst versteht der Hund nicht, woher das Wasser kam.',
                isCorrect: false
            },
            {
                text: 'Beim Schütteln am Nackenfell und gleichzeitigem Schimpfen, denn eine Hündin maßregelt auf diese Art und Weise auch ihre Welpen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 109,
        title: 'Wie verhalten Sie sich, wenn Sie auf dem Hundespaziergang an einem Kinderspielplatz vorbeikommen?',
        answers: [
            {
                text: 'Mein Hund liebt Kinder. Ich gucke, ob Kinder da sind, damit mein Hund mit den Kindern toben kann.',
                isCorrect: false
            },
            {
                text: 'In der Nähe von Kinderspielplätzen leine ich meinen Hund an. Dadurch kann ich vermeiden, dass sich jemand belästigt oder gefährdet fühlt.',
                isCorrect: true
            },
            {
                text: 'Wenn keine Kinder da sind, lasse ich den Hund laufen, denn er liebt es durch den Sand zu rennen.',
                isCorrect: false
            },
            {
                text: 'Ich habe einen kleinen Hund, der keine Gefahr für Kinder darstellt. Deshalb lasse ich ihn einfach laufen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 126,
        title: 'In welchem Bereich liegt die normale Körpertemperatur des Hundes?',
        answers: [
            { text: 'Im After gemessen ca. 38 °C.', isCorrect: true },
            { text: 'Im After gemessen ca. 36 °C.', isCorrect: false },
            {
                text: 'Solange die Nase kühl und feucht ist, hat der Hund kein Fieber. Fiebermessen ist dann nicht nötig.',
                isCorrect: false
            },
            {
                text: 'Ab einer Temperatur von 39,3 °C hat ein erwachse ner Hund Fieber. ',
                isCorrect: true
            }
        ]
    },
    {
        number: 154,
        title: 'Was ist zur Mitnahme von Hunden im Auto zu sagen? Kreuzen Sie die richtigen Aussagen an.',
        answers: [
            {
                text: 'Der Hund sollte auf dem Beifahrersitz sitzen.',
                isCorrect: false
            },
            {
                text: 'Der Hund sollte im Kofferraum transportiert werden.',
                isCorrect: false
            },
            {
                text: 'Der Hund sollte im Auto gesichert transportiert werden.',
                isCorrect: true
            },
            {
                text: 'Man kann den Hund z.B. in einer Transportbox, die auf dem Rücksitz befestigt ist, transportieren.',
                isCorrect: true
            }
        ]
    },
    {
        number: 165,
        title: 'Welchen Ausdruck zeigt dieser Hund?',
        image: 'assets/dog_165.png',
        answers: [
            { text: 'Der Hund ist neutral bis aufmerksam.', isCorrect: false },
            {
                text: 'Der Hund zeigt Beschwichtigungsverhalten.',
                isCorrect: true
            },
            { text: 'Der Hund zeigt eine Spielaufforderung.', isCorrect: false },
            { text: 'Der Hund ist freundlich-unterwürfig.', isCorrect: true }
        ]
    },
    {
        number: 18,
        title: 'Ist es für die Entwicklung des Welpen sehr wichtig, ob er in seinen ersten Lebenswochen zahlreiche Außenreize kennenlernt?',
        answers: [
            {
                text: 'Ja, denn je mehr Reize der Welpe kennen lernt, desto mehr Verknüpfungen der Nervenbahnen werden in seinem Gehirn angelegt.',
                isCorrect: true
            },
            {
                text: 'Ja, denn vielfältige Reizsituationen geben dem Welpen Selbstvertrauen und Sicherheit im Umgang mit neuen Situationen.',
                isCorrect: true
            },
            {
                text: 'Nein, denn ein Welpe kann noch gar keine Reize verarbeiten.',
                isCorrect: false
            },
            {
                text: 'Nein, denn die Entwicklung des Gehirns hängt nicht vom Angebot verschiedener Reize ab, sondern geschieht automatisch.',
                isCorrect: false
            }
        ]
    },
    {
        number: 36,
        title: 'Was sind Stresssymptome eines Hundes?',
        answers: [
            { text: 'Unruhiges Verhalten und Hecheln.', isCorrect: true },
            { text: 'Futterbetteln.', isCorrect: false },
            {
                text: 'Starkes Haaren und ggf. stumpfes Fell, bei länger anhaltendem Stress.',
                isCorrect: true
            },
            {
                text: 'Nach vorne gerichtete Ohren und Interesse an der Umwelt.',
                isCorrect: false
            }
        ]
    },
    {
        number: 54,
        title: 'Welche Behandlungen können das Vertrauensverhältnis zwischen Hund und Halter schwächen?',
        answers: [
            {
                text: 'Der Einsatz von direkten körperlichen Strafen.',
                isCorrect: true
            },
            {
                text: 'Ein Maßregeln des Hundes wenn er in einer Situation unerwünschtes ängstliches Verhalten zeigt.',
                isCorrect: true
            },
            { text: 'Viel Beschäftigung mit dem Hund.', isCorrect: false },
            { text: 'Aus Hundesicht unlogisches Verhalten.', isCorrect: true }
        ]
    },
    {
        number: 72,
        title: 'Ist es ein Zeichen von Aggression, wenn ein Hund auf dem Spaziergang zu einer fremden Person hinrennt und diese unvermittelt anspringt?',
        answers: [
            {
                text: 'Nicht unbedingt, aber es ist ein Verhalten, das man dem Hund frühzeitig abgewöhnen sollte, da es Leute gibt, die Angst vor Hunden haben.',
                isCorrect: true
            },
            {
                text: 'Ja, Anspringen ist ein aggressives Verhalten.',
                isCorrect: false
            },
            {
                text: 'Nein, das Anspringen ist als Spielaufforderung zu verstehen.',
                isCorrect: false
            },
            {
                text: 'Nein, es ist ein Zeichen großer Zuneigung.',
                isCorrect: false
            }
        ]
    },
    {
        number: 83,
        title: 'Nennen Sie Möglichkeiten, einen Hund zu belohnen.',
        answers: [
            { text: 'Mit Futterhäppchen.', isCorrect: true },
            { text: 'Mit Spielzeug bzw. einem Spiel.', isCorrect: true },
            {
                text: 'Man sollte den Hund fest an sich drücken, ihm ins Ohr sagen, dass er brav war und ihn auf den Kopf küssen.',
                isCorrect: false
            },
            {
                text: 'Man braucht einen Hund nicht extra zu belohnen, er weiß, dass er brav war, wenn er die Übung gut beherrscht.',
                isCorrect: false
            }
        ]
    },
    {
        number: 110,
        title: 'In welcher der folgenden Situationen ist es angebracht, den Hund an der Leine zu halten?',
        answers: [
            {
                text: 'In der Innenstadt und an stark befahrenen Straßen.',
                isCorrect: true
            },
            {
                text: 'Im Treppenhaus und auf Zugangswegen von Mehrfamilienhäusern.',
                isCorrect: true
            },
            { text: 'In Hotels, in Läden oder in Restaurants.', isCorrect: true },
            {
                text: 'In einem Hundeauslaufgebiet, wenn kein anderer Hund da ist, denn dann kann der Hund sowieso nicht spielen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 127,
        title: 'Ist es sinnvoll, den Hund mit einem Mikrochip kennzeichnen zu lassen?',
        answers: [
            {
                text: 'Ja, per Mikrochip kann der Hund immer sicher seinem Besitzer zugeordnet werden. Er ist unverwechselbar und nicht zu fälschen.',
                isCorrect: true
            },
            {
                text: 'Ja. Die Daten eines Mikrochips, der nach den Iso-Richtlinien gefertigt ist, sind auch im Ausland lesbar.',
                isCorrect: true
            },
            {
                text: 'Der Aufwand, den Hund mit einem Mikrochip zu kennzeichnen ist geringer als beim Tätowieren, weil die Narkose entfällt.',
                isCorrect: true
            },
            {
                text: 'Nein, es ist nicht sinnvoll, da der Mikrochip gesundheitlich belastend ist.',
                isCorrect: false
            }
        ]
    },
    {
        number: 155,
        title: 'Welche Rechtsgebiete können für Hundehalter relevant sein?',
        answers: [
            {
                text: 'Strafrecht, Zivilrecht und Ordnungswidrigkeitenrecht.',
                isCorrect: true
            },
            { text: 'Kommunale Bestimmungen.', isCorrect: true },
            { text: 'Tierschutzrecht.', isCorrect: true },
            {
                text: 'Keines, man kann sich notfalls damit herausreden, dass man den Gesetzestext nicht kennt.',
                isCorrect: false
            }
        ]
    },
    {
        number: 166,
        title: 'Welchen Ausdruck zeigt dieser Hund?',
        image: 'assets/dog_166.png',
        answers: [
            {
                text: 'Der Hund ist unsicher und leicht unterwürfig.',
                isCorrect: false
            },
            {
                text: 'Der Hund ist freundlich-aufgeschlossen und aufmerksam.',
                isCorrect: true
            },
            { text: 'Der Hund ist müde.', isCorrect: false },
            { text: 'Der Hund ist aggressiv.', isCorrect: false }
        ]
    },
    {
        number: 19,
        title: 'Welche Erfahrungen sind für ein reibungsloses Zusammenleben in der menschlichen Gesellschaft für einen Welpen wichtig?',
        answers: [
            {
                text: 'Er sollte in positiven Begegnungen viele verschiedenen Menschen (von Babies bis zu alten Menschen) kennenlernen.',
                isCorrect: true
            },
            {
                text: 'Die Teilnahme am Straßenverkehr sollte schrittweise geübt werden.',
                isCorrect: true
            },
            {
                text: 'Welpen sollten möglichst viel im heimischen Bereich gehalten werden, damit sie nicht überfordert werden.',
                isCorrect: false
            },
            {
                text: 'Aufenthalte im Zwinger, damit der Welpe lernen kann, auch einmal alleine zu bleiben.',
                isCorrect: false
            }
        ]
    },
    {
        number: 37,
        title: 'Woran erkennen Sie, dass Hunde miteinander spielen?',
        answers: [
            {
                text: 'Sie zeigen gelegentlich eine Spielaufforderung.',
                isCorrect: true
            },
            {
                text: 'Im Spiel jagt jeder Hund einmal einen anderen und wird selbst auch gejagt.',
                isCorrect: true
            },
            {
                text: 'Im Spiel wird ein Hund in die Ecke getrieben oder umgeworfen. Der ”Unterlegene” quiekt hierbei laut auf, schnappt um sich und hat die Rute eingeklemmt.',
                isCorrect: false
            },
            {
                text: 'Alles ist Spiel, wenn keine offenen Wunden entstehen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 55,
        title: 'Ist es wichtig, mit einem Hund zu üben, dass er sich überall anfassen lässt?',
        answers: [
            {
                text: 'Ja, es fördert das gegenseitige Vertrauen.',
                isCorrect: true
            },
            { text: 'Ja, es erleichtert Pflegemaßnahmen.', isCorrect: true },
            { text: 'Ja, Körperkontakte stärken die Bindung.', isCorrect: true },
            {
                text: 'Nein, man muss so etwas nicht üben. Ein Hund, der gut untergeordnet ist, lässt sich sowieso überall problemlos anfassen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 73,
        title: 'In welcher der genannten Situationen können Hunde aggressiv reagieren?',
        answers: [
            {
                text: 'Wenn sie von einer fremden Person plötzlich angefasst werden und nicht ausweichen können.',
                isCorrect: true
            },
            { text: 'Wenn man sie beim Fressen stört.', isCorrect: true },
            {
                text: 'Beim Tierarzt bei schmerzhaften Manipulationen oder aus Angst.',
                isCorrect: true
            },
            {
                text: 'Wenn man einem fremden Hund nicht in die Augen schaut.',
                isCorrect: false
            }
        ]
    },
    {
        number: 84,
        title: 'Gibt es Strafen, die man als ”artgerecht” bezeichnen kann?',
        answers: [
            {
                text: 'Ja, Schläge, denn Hunde untereinander sind auch nicht zimperlich.',
                isCorrect: false
            },
            {
                text: 'Ja, lautes Anschreien und gleichzeitiges leichtes Schlagen mit der Zeitung.',
                isCorrect: false
            },
            {
                text: 'Ja, Ignorieren, wenn es die Situation zulässt.',
                isCorrect: true
            },
            {
                text: 'Nein, Strafen können niemals ”artgerecht” sein',
                isCorrect: false
            }
        ]
    },
    {
        number: 111,
        title: 'Unter welchen Umständen kann ich meinen Hund in der Öffentlichkeit mit anderen Hunden spielen lassen?',
        answers: [
            { text: 'Im Hundeauslaufgebiet immer', isCorrect: false },
            {
                text: 'Wenn ich mit dem anderen Hundehalter abgeklärt habe, dass Spielkontakt erwünscht ist und beide Hunde frei laufen können.',
                isCorrect: true
            },
            {
                text: 'Niemals an der Straße, an der Leine oder wenn sich andere Menschen oder Tiere durch die spielenden Hunde belästigt fühlen oder gefährdet werden könnten.',
                isCorrect: true
            },
            {
                text: 'An der Straße nur, wenn die Hunde an der Leine sind. Sie könnten sonst beim Spielen auf die Fahrbahn laufen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 134,
        title: 'Wann werden die meisten Hündinnen das erste Mal läufig?',
        answers: [
            { text: 'Wenn sie ausgewachsen sind.', isCorrect: false },
            { text: 'Zwischen 6 und 12 Monaten.', isCorrect: true },
            { text: 'Mit 18 Monaten', isCorrect: false },
            {
                text: 'Wenn man sie von Junghundefutter auf Erwachsenennahrung umstellt.',
                isCorrect: false
            }
        ]
    },
    {
        number: 156,
        title: 'Ist eine Haftpflichtversicherung für den Hund sinnvoll?',
        answers: [
            {
                text: 'Ja, denn jeder Hund kann einen Schaden verursachen, für den sein Halter dann haftet.',
                isCorrect: true
            },
            {
                text: 'Es ist im Tierschutzgesetz vorgeschrieben.',
                isCorrect: false
            },
            {
                text: 'Ohne Haftpflichtversicherung darf der Hund nie frei laufen.',
                isCorrect: false
            },
            {
                text: 'Es ist nicht sinnvoll, sondern eine unnötige Geldausgabe.',
                isCorrect: false
            }
        ]
    },
    {
        number: 167,
        title: 'Welchen Ausdruck zeigt dieser Hund?',
        image: 'assets/dog_167.png',
        answers: [
            { text: 'Der Hund ist ängstlich und unterwürfig.', isCorrect: false },
            { text: 'Der Hund ist neutral bis aufmerksam.', isCorrect: false },
            { text: 'Der Hund droht unsicher und ist erregt.', isCorrect: true },
            { text: 'Der Hund zeigt eine Unterwerfungsgeste.', isCorrect: false }
        ]
    },
    {
        number: 23,
        title: 'Wenn man einen Welpen kauft, sollte man...',
        answers: [
            {
                text: 'besonders in der ersten Phase viel Zeit (ggf. Urlaub) haben, um sich bestmöglich um den Hund kümmern zu können.',
                isCorrect: true
            },
            {
                text: 'den Züchter vorher ”auf Herz und Nieren” geprüft haben, um einen Hund mit guten charakterlichen und genetischen Anlagen zu bekommen.',
                isCorrect: true
            },
            {
                text: 'unbedingt einen Garten haben, denn sonst ist es sehr problematisch, den Hund stubenrein zu bekommen.',
                isCorrect: false
            },
            {
                text: 'sicher sein, dass der Hund auch längerfristig zu dem Lebensstil und den Lebensumständen passt.',
                isCorrect: true
            }
        ]
    },
    {
        number: 41,
        title: 'Zwei Hunde kämpfen miteinander. Die Besitzer stehen daneben und schreien die Hunde an, um den Kampf zu beenden. Wie interpretieren die Hunde dieses Verhalten?',
        answers: [
            {
                text: 'Durch das Anschreien bekommen die Hunde Angst und beenden den Kampf sofort.',
                isCorrect: false
            },
            {
                text: 'Durch die aggressive Stimmung der Besitzer werden die Hunde angestachelt weiterzukämpfen.',
                isCorrect: true
            },
            {
                text: 'Das Schreien der Besitzer beeinflusst das Verhalten der Hunde nicht.',
                isCorrect: false
            },
            {
                text: 'Hunde interessieren sich nicht für das Verhalten von Menschen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 59,
        title: 'Es kommt relativ häufig vor, dass Hunde Kinder im Gesicht verletzen. Warum?',
        answers: [
            {
                text: 'Das Gesicht des Kindes ist in Schnauzenhöhe.',
                isCorrect: true
            },
            {
                text: 'Kinder umarmen Hunde gerne und geben ihnen Küsse. Einigen Hunden ist diese Nähe zu viel und sie versuchen sich durch Schnappen aus der Situation zu befreien.',
                isCorrect: true
            },
            {
                text: 'Die Gesichtsverletzungen entstehen meist nicht durch Bisse, sondern wenn die Kinder angesprungen werden und dabei hinfallen.',
                isCorrect: false
            },
            {
                text: 'Hunde verletzen unbeabsichtigt gelegentlich das Gesicht eines Kindes, wenn sie über das ”Lefzenlecken” Beschwichtigung signalisieren wollen.',
                isCorrect: false
            }
        ]
    },
    {
        number: 77,
        title: 'Gibt es beim Üben mit einem ängstlichen Hund besondere Dinge zu bedenken?',
        answers: [
            {
                text: 'Ja. Hunde können nur lernen, wenn sie entspannt sind und keine Angst haben.',
                isCorrect: true
            },
            {
                text: 'Ja, man muss darauf achten, keine bedrohlichen Gesten in den Übungen zu verwenden.',
                isCorrect: true
            },
            {
                text: 'Ja. Mit einem ängstlichen Hund sollte man lieber gar nicht trainieren, weil er aus Angst heraus beißen könnte',
                isCorrect: false
            },
            {
                text: 'Nein, mit einem ängstlichen Hund kann man trainieren, wie mit jedem anderen auch.',
                isCorrect: true
            }
        ]
    },
    {
        number: 85,
        title: 'Können im Zusammenhang mit Strafe Probleme auftreten?',
        answers: [
            {
                text: 'Ja, der Hund kann Angst vor dem Hundeführer bekommen.',
                isCorrect: true
            },
            {
                text: 'Ja, der Hund kann aggressiv werden, wenn er sich bedroht fühlt oder Schmerzen empfindet.',
                isCorrect: true
            },
            {
                text: 'Ja. Wenn man im falschen Moment bestraft, kann der Hund die Verbindung zwischen Strafe und unerwünschtem Verhalten nicht herstellen.',
                isCorrect: true
            },
            {
                text: 'Nein, man braucht keine Probleme zu erwarten, denn Strafe ist etwas, was der Hund immer versteht.',
                isCorrect: false
            }
        ]
    },
    {
        number: 115,
        title: 'Wie verhalten Sie sich, wenn Ihnen ein Jogger entgegenkommt und Ihr Hund frei läuft?',
        answers: [
            {
                text: 'Ich brauche nichts zu unternehmen, weil mein Hund höchstens zu dem Jogger hinläuft, ihn aber nicht belästigt oder beißt.',
                isCorrect: false
            },
            {
                text: 'Ich rufe meinen Hund zu mir, leine ihn an und lasse ihn erst wieder los, wenn ich sicher weiß, dass er den Jogger nicht verfolgen wird.',
                isCorrect: true
            },
            {
                text: 'Ich renne ein Stückchen mit dem Jogger mit. Das lenkt meinen Hund vom Jogger ab, denn er konzentriert sich dann nur auf mich.',
                isCorrect: false
            },
            {
                text: 'Ich bitte den Jogger möglichst langsam zu laufen, um meinen Hund nicht zum Hinterherrennen zu verleiten.',
                isCorrect: false
            }
        ]
    },
    {
        number: 132,
        title: 'Kann eine Hündin bei der ersten Läufigkeit schon erfolgreich gedeckt werden?',
        answers: [
            { text: 'Ja.', isCorrect: true },
            { text: 'Nein.', isCorrect: false }
        ]
    },
    {
        number: 160,
        title: 'Was geschieht im Falle eines Unfalls, wenn ein Hund ungesichert im Auto transportiert wird?',
        answers: [
            {
                text: 'Er kann aus dem Fahrzeug geschleudert werden und weglaufen.',
                isCorrect: true
            },
            {
                text: 'Eigentlich kann nichts Schlimmes passieren, da die Hunde ja zumeist im Auto liegen.',
                isCorrect: false
            },
            {
                text: 'Der Hund kann bei einem Autounfall ein erhebliches Verletzungsrisiko für Insassen darstellen und auch selbst schwer verletzt werden.',
                isCorrect: true
            },
            {
                text: 'Dem Fahrer kann unabhängig vom Unfallhergang eine Teilschuld zugesprochen werden.',
                isCorrect: true
            }
        ]
    },
    {
        number: 168,
        title: 'Welchen Ausdruck zeigt dieser Hund?',
        image: 'assets/dog_168.png',
        answers: [
            { text: 'Der Hund ist ängstlich und unterwürfig.', isCorrect: false },
            { text: 'Der Hund ist neutral bis aufmerksam.', isCorrect: true },
            { text: 'Der Hund ist müde.', isCorrect: false },
            { text: 'Der Hund droht unsicher und ist erregt.', isCorrect: false }
        ]
    },
    {
        number: 8,
        title: 'Nennen Sie Punkte, die man mindestens erfüllen muss, um einen Hund artgerecht zu halten.',
        answers: [
            {
                text: 'Der Hund braucht täglich häufige Kontaktmöglichkeiten zu Menschen und/oder Hunden.',
                isCorrect: true
            },
            {
                text: 'Hunde brauchen jederzeit freien Zugang zu Wasser.',
                isCorrect: true
            },
            {
                text: 'Hunde brauchen ausreichend häufige (mind. dreimal täglich) und ausreichend lange (mind. zwei Stunden am Tag für einen gesunden Hund) Spaziergänge.',
                isCorrect: true
            },
            {
                text: 'Es muss gewährleistet sein, dass der Hund im Krankheitsfall medizinisch versorgt werden kann.',
                isCorrect: true
            }
        ]
    },
    {
        number: 24,
        title: 'Welche Dinge sprechen gegen den Erwerb eines Welpen aus dieser Quelle?',
        answers: [
            {
                text: 'Die Hündin verbellt jeden, der in die Nähe kommt, und die Welpen bellen oder verstecken sich.',
                isCorrect: true
            },
            { text: 'Die Hunde haben keine Papiere.', isCorrect: false },
            {
                text: 'Die Hunde sind schmuddelig, weil sie im Laub spielen.',
                isCorrect: false
            },
            { text: 'Die Welpen rennen zu jedem hin.', isCorrect: false }
        ]
    },
    {
        number: 41,
        title: 'Warum reagieren viele Hunde an der Leine aggressiver?',
        answers: [
            { text: 'Hunde an der Leine sind mutiger.', isCorrect: false },
            {
                text: 'Hunde können sich an der Leine nicht frei bewegen und ausweichen und fühlen sich schneller bedroht.',
                isCorrect: true
            },
            {
                text: 'Hunde haben dieses Verhalten als Strategie gelernt, um Situationen, die sie ängstigen, schneller beenden oder für sich entscheiden zu können.',
                isCorrect: true
            },
            {
                text: 'Hunde ärgern sich darüber, dass sie angeleint sind und übertragen ihre Wut auf den anderen Hund.',
                isCorrect: false
            }
        ]
    },
    {
        number: 60,
        title: 'Ist es eine Frage des Alters eines Kindes, ob das Zusammenleben mit einem Hund reibungslos funktioniert?',
        answers: [
            {
                text: 'Nein, es ist eine Frage der Gewöhnung, ob der Hund Kinder einer bestimmten Altersklasse akzeptiert oder nicht.',
                isCorrect: true
            },
            {
                text: 'Nein, das hat mit dem Alter nichts zu tun. Ein Hund fühlt sich innerhalb der Familie in jedem Fall rangniedriger als die Kinder.',
                isCorrect: false
            },
            {
                text: 'Indirekt ja, denn reifere Jugendliche werden von vielen Hunden als Erwachsene eingestuft.',
                isCorrect: true
            },
            {
                text: 'Ja. Das Zusammenleben zwischen kleinen Kindern und Hunden ist immer problematisch.',
                isCorrect: false
            }
        ]
    },
    {
        number: 78,
        title: 'Innerhalb welcher Zeit kann ein Hund eine Belohnung sicher mit seiner gezeigten Handlung verknüpfen?',
        answers: [
            {
                text: 'Es dürfen nicht mehr als eine, allerhöchstens zwei Sekunden vergehen.',
                isCorrect: false
            },
            {
                text: 'Man sollte den Hund innerhalb von fünf Sekunden belohnen.',
                isCorrect: true
            },
            {
                text: 'Es ist nicht von der Zeit abhängig, ob der Hund die Übung begreift, sondern nur von der Tatsache, ob die Futterbelohnung lecker genug ist.',
                isCorrect: false
            },
            {
                text: 'Man hat ein paar Minuten Zeit, besonders wenn der Hund die Handlung länger zeigt.',
                isCorrect: false
            }
        ]
    },
    {
        number: 86,
        title: 'Was passiert, wenn man versucht, einen Hund, der gerade Angst hat, mit Worten und durch Streicheln zu beruhigen?',
        answers: [
            {
                text: 'Der Hund wird sich beruhigen und seine Angst verlieren.',
                isCorrect: false
            },
            {
                text: 'Der Hund wird darin bestätigt, dass es sich lohnt, Angst zu haben. Man verschlimmert die Angst.',
                isCorrect: true
            },
            {
                text: 'Man verschlimmert die Angst, denn Hunde untereinander würden sich nicht beruhigen. Die plötzliche Aufmerksamkeit des Besitzers zeigt dem Hund, dass dieser auch eine Unsicherheit verspürt.',
                isCorrect: true
            },
            { text: 'Der Hund könnte aggressiv reagieren.', isCorrect: false }
        ]
    },
    {
        number: 116,
        title: 'Wer ist für das Entfernen von Hundekot verantwortlich?',
        answers: [
            {
                text: 'Die Städte, denn dafür wird Hundesteuer bezahlt.',
                isCorrect: false
            },
            { text: 'Der Halter.', isCorrect: true },
            {
                text: 'Die Allgemeinheit. Jeder, der einen Hundehaufen sieht, muss ihn entfernen.',
                isCorrect: false
            },
            {
                text: 'Niemand. Hundekot muss nicht entfernt werden, denn es ist etwas Natürliches, mit dem man leben muss.',
                isCorrect: false
            }
        ]
    },
    {
        number: 133,
        title: 'Nennen Sie einige Parasiten, die auch in Deutschland sehr häufig vorkommen. ',
        answers: [
            { text: 'Zecken.', isCorrect: true },
            { text: 'Milben.', isCorrect: true },
            { text: 'Flöhe.', isCorrect: true },
            { text: 'Herzwürmer.', isCorrect: false }
        ]
    },
    {
        number: 161,
        title: 'Gibt es gesetzliche Vorschriften für die Zwingerhaltung von Hunden?',
        answers: [
            { text: 'Nein.', isCorrect: false },
            {
                text: 'Ja, es gibt eine Tierschutz-Hundehaltungs-Verordnung.',
                isCorrect: true
            },
            {
                text: 'Ja, sie besagen, dass nur Hunde, die größer als 40 cm Schulterhöhe sind, in Zwingeranlagen gehalten werden dürfen.',
                isCorrect: false
            },
            {
                text: 'Ja, der Hund darf nicht länger als 2 Stunden täglich im Zwinger gehalten werden.',
                isCorrect: false
            }
        ]
    },
    {
        number: 169,
        title: 'Welchen Ausdruck zeigt dieser Hund?',
        image: 'assets/dog_169.png',
        answers: [
            { text: 'Der Hund ist ängstlich und unterwürfig.', isCorrect: true },
            { text: 'Der Hund ist neutral bis aufmerksam.', isCorrect: false },
            { text: 'Der Hund ist müde.', isCorrect: false },
            { text: 'Der Hund zeigt eine Unterwerfungsgeste.', isCorrect: true }
        ]
    }
];
