const fillers = {
    /*adventurer: ["My dude", "Bro", "Adventurer", "Traveller", "Fellow", "Citizen", "Ashen One", "Dragonborn", "Cool person", "Tarnished", "$adventurer and $adventurer", "$adventurer, $adventurer, and $adventurer", "Geoff"],
    pre: ["Fra", "Tro", "Gre", "Pan", "Ast", "Ara"],
    post: ["gria", "ston", "gott", "-on-the-lee", "ora", "Ara", "uwu"],
    people: ["kindly", "meek", "brave", "wise", "sacred", "cherished", "honored", "forgotten", "apathetic", "mystic", "orca"],
    item: ["axe", "staff", "book", "cloak", "shield", "club", "sword", "magic gloves", "galvel", "fists", "mace", "potato"],
    num: ["two", "three", "eleven", "so many", "too many", "an unsatisfying number of", "barely any", "an unspecified amount of", "surely a satisfactory number of"],
    looty: ["gleaming", "valuable", "esteemed", "rare", "exalted", "scintillating", "kinda gross but still usefull", "complete garbage"],
    loots: ["coins", "chalices", "ingots", "hides", "victory points", "gems", "scrolls", "bananas", "noodles", "goblins", "CS Majors", "college credits"],
    baddies: ["orcs", "glubs", "fishmen", "cordungles", "mountain trolls", "college professors", "dragon", "evil $adventurer", "agents of chaos"],
    message: ["call", "txt", "post", "decree", "shoutz", "tweets", "choiche", "hearkens", "harkening", "harkenening", "harkenenening", "...wait, no! Come back", "Watermelon"],
    */
    //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    //Adding custom fillers
    adjective: ["scared", "redundant", "truculent", "envious", "young", "empty", "jagged", "heady", "angry", "descriptive", "hard", "fascinated", "sad", "enormous", "receptive",
        "unkempt", "warlike", "obsolete", "zany", "absorbing", "loose", "barbarous", "amuck", "rabid", "voiceless", "mountainous", "tired", "unequaled", "sophisticated", "eminent", "lavish", "tricky",
    ],
    propernoun: ["Miley Cyrus", "Kim Kardashian", "Kayne West", "Margaret Thatcher", "George Washington", "Ghandi", "Nelson Mandela", "Christopher Columbus", "Justin Beiber",
        "Lady Gaga", "Katy Perry", "Justin Timberlake", "Bill Clinton", "Elizabeth Taylor", "Tom Cruise", "Clint Eastwood", "Alfred Hitchcock", "Stephen Hawking", "Tom Hanks", "Oprah Winfrey",
        "Beyonce", "Hilary Clinton", "Dr Suess", "Ray Charles", "Sean Connery", "Julia Roberts", "Pele", "Meryl Streep", "Helen Keller", "Robin Williams", "Steve Martin", "Fred Astaire", "Whoopi Goldberg",
        "Jane Austen", "Bob Hope", "Jessica Simpson", "Frank Lloyd Wright", "Pamela Anderson", "Susan Boyle", "Mae West", "Snoopy", "Jim Carrey", "Michael J Fox"
    ],
    commonnoun: ["hearing",
        "trainer",
        "poetry",
        "system",
        "bath",
        "mom",
        "recommendation",
        "efficiency",
        "association",
        "grocery",
        "solution",
        "month",
        "insect",
        "strategy",
        "guest",
        "philosophy",
        "weakness",
        "hospital",
        "organization",
        "effort",
        "cookie",
        "decision",
        "editor",
        "version",
        "appearance",
        "math",
        "heart",
        "beer",
        "advice",
        "presence",
        "television",
        "assistance",
        "establishment",
        "recipe",
        "world",
        "baseball",
        "nature",
        "courage",
        "debt",
        "hotel",
        "safety",
        "information",
        "physics",
        "patience",
        "virus",
        "tongue",
        "refrigerator",
        "preference",
        "revenue",
        "ratio"
    ],
    noun: ["$propernoun", "$commonnoun", "$propernoun and $commonnoun", "$propernoun and $propernoun and $commonnoun", "$propernoun and $propernoun"],
    verb: ["push", "commission", "dispose", "hurry", "campaign", "flow", "breed", "cause", "conclude", "excuse", "believe", "deny", "show"],
    continuousverb: ["$verb-s"],
    place: ["Birmingham", "United Kingdom", "Cologne", "Germany", "Santiago", "Chile", "Belo Horizonte", "Brazil", "São Paulo", "Riyadh", "Saudi Arabia", "Casablanca", "Morocco", "Durban", "South Africa"],
    being: ["$noun"],
    subject: ["$propernoun"],
    predicate: [" $continuousverb that the song is $adjective"],
    sentence: ["$subject" + "$predicate"]
};

/*const template = `$adventurer, heed my $message!
  
  I have just come from $pre$post where the $people folk are in desperate need. Their town has been overrun by $baddies. You must venture forth at once, taking my $item, and help them.
  
  It is told that the one who can rescue them will be awarded with $num $looty $loots. Surely this must tempt one such as yourself!
  `;
*/
const template =
    `
$propernoun IN THE $adjective $commonnoun WITH $commonnoun

Picture $noun in a $adjective on a river,
With $adjective trees and $adjective skies
Somebody calls you, you $verb quite $verb,
A girl with $adjective eyes.

Cellophane $propernoun of $adjective and green,
$continuousverb over your head.
$verb for the girl with the $commonnoun in her eyes,
And she's gone.

$propernoun in the sky with $being
$propernoun in the sky with $commonnoun
$propernoun in the sky with $commonnoun

Follow $propernoun down to a $place by a fountain
Where rocking horse $commonnoun eat $commonnoun pies,
Everyone $verb as you $verb past the flowers,
That $verb so incredibly high.

Newspaper $commonnoun appear on the shore,
Waiting to take you away.
Climb in the back with your $commonnoun in the clouds,
And you're gone.

Picture yourself on a train in a $commonnoun,
With $adjective porters with looking glass $commonnoun,
Suddenly someone is there at the turnstile,
The girl with $commonnoun eyes.

$noun in the sky with $noun...
$propernoun in the sky with $commonnoun...
$commonnoun in the sky with $commonnoun...

REVIEWS: 
$sentence,

$sentence,

$sentence,

$sentence,

$sentence,

$sentence,

$sentence,
`

// STUDENTS: You don't need to edit code below this line.

const slotPattern = /\$(\w+)/;

function replacer(match, name) {
    let options = fillers[name];
    if (options) {
        return options[Math.floor(Math.random() * options.length)];
    } else {
        return `<UNKNOWN:${name}>`;
    }
}

function generate() {
    let story = template;
    while (story.match(slotPattern)) {
        story = story.replace(slotPattern, replacer);
    }

    /* global box */
    box.innerText = story;
}

/* global clicker */
clicker.onclick = generate;

generate();