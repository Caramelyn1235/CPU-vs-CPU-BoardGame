const Discord = require('discord.js');
const { prefix, token } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
    console.log('Ready!')
})

var rquote = [
    "YES, SACRIFICES. I SAY WE SACRIFICE, UMMM HUTCH.",
    "EATING FOOD IS LIKE PLAYING THE GAME JENGA",
    "DO COCKROACHES SWEAT",
    "YOU'RE MAKING ME LACTOSE INTOLERANT, DORA",
    "YAY MY MOM BOUGHT ME CANDY",
    "FRENCH IS LIKE AP ENGLISH FOR LOCALLY DEVELOPED STUDENTS",
    "WHERE’S THE TOMATO?",
    "BE THE SHOWER. I AM A SHOWER.",
    "FIRST MY COAL HE BURSTED MY COAL",
    "TRISTAN YOU'RE ON FIRE!",
    "WHAT?",
    "WHAT A HEARTBREAKER THIS BOY IS",
    "YOU CAN’T DO THAT TO YOUR BROTHER!",
    "SHE’S BEEN PURIFIED. ALL MY SOAP SAVED HER!",
    "YOU CANNOT TREAT YOUR QUEEN LIKE THIS",
    "STUPID CORTANA. I WAS TRYING TO DELETE A MESSAGE BUT YOU KEEP SENDING ONE WORD SO I WAS LITERALLY PLAYING TAG WITH A THUMB.",
    "TRIST, HUSH CHILD. CHICKEN LEGS ARE YUMMY.",
    "STOP!! IT ACTUALLY TICKLES—OW MY SHOES, OOH OW OW MY THIGH!",
    "IT JUST WENT UP HER NOSE, JUST SHOW A VIDEO OF HER CLEANING THE NOSE. IT JUST WENT PTSHSHSHH, I’M SO DRAINED.",
    "MY GARGLE MUG IS BEING LAUGHED AT BY EVANGELINE! SHE LAUGHED AT MY GARGLE MUG!",
    "I DON'T LIKE THIGHS!",
    "I GOT MY SUGA DADDY AWAITIN’",
    "I THOUGHT TRUMP WAS A SUGAR DADDY",
    "MY ARM IS WARM.",
    "MY CHOCOLATES ARE GONNA MELT!! THEY WERE NEWLY BOUGHT BY TRISTAN.",
    "MY FOOT IS UNDER WANYANG’S BUTT",
    "YOU KICKED MY BUATT. I HAVE TO USE MY HANDS WANYANG!",
    "DON’T STEP ON MY FEET!",
    "NO ONE ANSWERED FELICIA. HE SAID HE FORGAVE ME!",
    "NO DON'T TOUCH MY FOOT, I'M GONNA START KICKING RIGHT NOW.",
    "DON’T TOUCH MY UNDERWEAR I STILL HAVE MY UNDERWEAR ON!",
    "MY UNDERWEAR IS BEING SAT ON",
    "GWAH MY CHOCOLATES AND MY LEG. MY POOR CHOCOLATES ARE YOU OK?",
    "THY HAVE BEEN CHALLENGED BY THE CALVINS!",
    "HE SAID HE BITES MY HAND",
    "AM I PREGNANT? I’M PREGNOT",
    "YOUR WHOLE MOUTH IS YELLOW? YOUR WHOLE MOUTH IS ASIAN",
    "I FORGOT I HAD UNDERWEAR ON",
    "DO YOU WANT ME TO TUCK MY SHIRT IN MY UNDERWEAR",
    "OH NO THERE'S PEOPLE THERE, I DON'T WANNA WEAR MY UNDERWEAR ANYMORE!",
    "YEAH I'M WEARING UNDERWEAR, ARE YOU JUDGING MY FASHION CHOICES!?",
    "UNDERWEAR’S GONNA HURT YOUR SOUL",
    "YOU DON'T HAVE UNDERWEAR ON",
    "I REALLY LIKE MY UNDERWEAR",
    "YOU REALLY ENJOY SMASHING?",
    "YOU SOUND LIKE A CHICKEN",
    "I ADMIT DEFEAT, JUST THIS ONCE",
    "WELL LET'S GO DOWN THE LIST. (TRISTAN BREAKS ARM) SEE THATS THE FIRST THING ON THE LIST",
    "WHAT’S SEMI? WERE THEY UNCONSCIOUS OR SLEEPING WHEN YOU STEPPED ON THEM?",
    "WANYANG IS AN INSULT.",
    "YEAH IN WORLD WAR ONE WE SANK SOME ALMOND SHIP, NEXT WE'RE GONNA SINK SOME WALNUT SHIPS, THEN COCONUT SHIPS",
    "THE FOUR HIGH SCHOOLS IN THIS AREA ARE CALLED THE FOUR ELEGANT PLANTS— PLUM, ORCHID, CHRYSANTHEMUM AND BAMBOO!",
    "MONSTER! KEEP YOUR HANDS AWAY FROM ME!",
    "I DON’T WANT YOUR FAT! DON’T POKE MY FAT!",
    "LOOK AT HOW FAT THIS PIECE IS! THIS FAT!",
    "TREAT ME LIKE A TRASH CAN, GIVE ME ALL YOUR FAT!",
    "YOUR SWEATY IS IN MY FACE. MY SWEATY!",
    "YOU DESERVED YOUR HAIR IN MY FACE!",
    "I’M FREE— OW, MY ARM!",
    "HONORARY MEMBER OF DILDO WHAT",
    "YES SHE HAS A PRIORITY FOR MY HAND, HER BUTT JUST SITS ON IT",
    "YOU GUYS ARE ALL SLANTED.",
    "YOU’RE A WOMAN, I’M A WOMAN.",
    "SHE'S A CON ARTIST WHO FOOLS ALL WITH HER BAJETTES. I STAINED THEM WITH BLOOD U CALLED ME A MURDEROUS ONE AND UR JUST PLAIN LOUSY U CON",
    "I’M BOOM BABY PUSHING",
    "YOU DON'T HAVE PLUSHIES SITTING ON YOURSELF FOR DECORATION PURPOSES",
    "THEY'RE FOR THE HUGGING ENJOYMENTS",
    "THE CAKE IS NOT A TABLE",
    "I BELIEVE IN YOUR VOCABULATIONS",
    "MY FEET ARE SOAPED",
    "I HAD THIS WHOLE PLAN TO FIND A SPERM DONOR AND GET THE SPERM INJECTED. AND BOOM I GOT A BABY TO HOLD AND RAISE AND LOVE",
    "ARE YOU SAYING YOU WILL ABANDON YOUR BABY IF THEY HAVE 6 TOES!?",
    "I WANT AN ORGAN DONOR FOR THE PEOPLE IN NEED OF ORGANS",
    "THEY’RE DYING OUT THERE WITH THEIR DECAYING ORGANS",
    "I NEED TO START A CAMPAIGN FOR THOSE IN NEED OF HEARTS. WE NEED TO FIND A SUITABLE HEART TO FIT THEIR NOSES!",
    "DOES ANYONE HAVE A HEART THAT THEY CAN DONATE, FOR A GOOD CAUSE, FOR BABIES.",
    "DID I JUST GET K’D WITH A PERIOD? THAT IS SO HURTFUL, THE WORST TYPE OF KAYING!",
    "I NEED A HEART FOR NOSES TO CREATE A BABY",
    "NO YOU DON'T CREATE NOSES, NO YOU DON'T MAKE BABIES, WAIT, NO MAKE BABIES!!",
    "NO BUTCHES HERE. I DISOWN YOU AS MY BUTCH.",
    "TERRENCE MAKES KAYAKS FOR A LIVING",
    "I WAS THINKING YOU WERE THE PERFECT FISH TO GET A LIVER FROM. I MEAN, DONATIONS ARE PLENTIFULLY “BEAUTIFUL.",
    "CAN I HAVE YOUR WASHING MACHINE?",
    "NO, I’M PORTUGUESE TODAY. TOMORROW I CAN BE GERMAN",
    "I’M A TUTU IN DISGUISE, DON'T EXPOSE ME YOU DOOR!",
    "MY FISHES HAVE BEEN FIRED LIKE YOUR ANTS",
    "I'M IN BED, IN A THRONE LIKE PILLOWS",
    "WANYANG YOU'RE A FISH",
    "I NEED TO DONATE LUNGS FOR THE FEET FOR THE POTATOES FOR THE BABIES",
    "YOU DON'T HAVE THE BRAIN CAPACITY TO CONTAIN ALL THIS YOLK",
    "JOIN ME AS I CALL FORTH ON YOGURT TO BRING ME THE COCKATOO",
    "GIVE ME YOUR FISH",
    "GIVE ME YOUR LIFE I NEED THE FISHIES",
    "DID YOU RANSACK MY COAL",
    "DOGGIE? ARE YOU BROKEN! MY DOG’S BROKEN!",
    "HE BURNED HE WALKED INTO HIS DEMISE",
    "MY DOGS WON'T FOLLOW ME! OOH… BERRIES!",
    "I KNEW IT WAS A DREAM BUT I WAS PRAYING TO MYSELF PLEASE WHEN I WAKE UP LET ME BE WITH HIM",
    "NO! NOT JAFAR! THE WHITE DUDE!",
    "I SWEAR THE DUDE THAT I LIKED WAS LIKE IN HIS TWENTIES; HE WAS NICE THOUGH.",
    "MY DREAM WAS AT A MALL AND WE WERE RUNNING AROUND A PILLAR. IT WAS A VERY ROMANTIC DREAM.",
    "I DIDN'T NEED MORE SUBCONSCIOUSNESS THROWN AT ME“",
    "I SHOVED MY RING FINGER INTO MY THIGH TRYING TO CATCH MY PHONE",
    "WHO’S SMURFETTE? SHE’S SMURFETTE!?",
    "HE CONFISCATED MY LO-LI-POP-SI",
    "ARRESTED!? FOR SQUATTING",
    "YOURE UNINVITED TO MY BENCH PARTY",
    "IT WAS A GUILTY CONSCIOUS DREAM",
    "WHERE’D YOU GET BUTTHOLES FROM?",
    "THIS IS WORSE THAN MY HOT CHOCOLATE. (WHERE DO I EVEN START? BETTER YET, WHAT DO I EVEN SAY, THIS IS WORSE THAN MY HOT CHOCOLATE.)",
    "FEEL THE WRATH OF MY PEE.",
    "I JUST GOT KILLED BY PEE.",
    "LETS NOT TAKE LIFE SO EASILY.",
    "I;M MUMBLING HUMBLE JUMBLES IN A JUNGLE",
    "AKA PP-MAN!",
    "MOVE YOUR HAIR, TRISTAN!",
    "OH MY GOD, MY WRINKLE!",
    "LOOK AT MY SKIN! MY SKIN WAS FLAWLESS AT THE TIME.",
    "PJ LEG SOUNDS LIKE PIG LEG, RANDOM THOUGHT",
    "DO WE JUST HAND IN THE EVANGELINE?",
    "BRING RAW POTATOES SO WE CAN DRAW FACES ON THEM AND CARVE THEM LIKE A PUMPKIN",
    "DON'T TAP MY HANDS! GET YOUR HANDS OFF MY PILLOW!",
    "I HAVE THIRTEEN SONS",
    "I WANT MY SIXTEEN BABY GIRLS",
    "WHERE ARE MY BABY BOYS?",
    "CORWIN IS GETTING ALL THEM GIRLS",
    "ALL THEM GIRLS FROM THE GRADE NINES, GRADE ELEVENS, UNIVERSITY STUDENTS AND EVEN EIGHTY YEAR OLDS!",
    "THAT HO OVER THERE",
    "THOR IS A THOT",
    "LOOK AT ALL MY BABIES! THEY’RE SO BEAUTIFUL I HAVEN'T FINISHED NAMING THEM",
    "I'M GONNA ABANDON THE BOYS BECAUSE THEY ARE USELESS NOW",
    "THEIR NAMES COMBINED IS COMPUTER!",
    "WAIT DORA, HOW'S IT GOING WITH YOU AND THE TOILET??",
    "DO YOU NOT SHOWER NAKED? ARE YOU WEARING YOUR SOCKS?",
    "WANYANG I DO NOT WANNA EAT YOUR TOES",
    "GET YOUR TOES AWAY FROM MY VICINITY",
    "YOUR FOOT IS IN A VERY UNAPPRECIATED PLACE",
    "MY PITS!",
    "I'LL SQUISH YOU WITH MY THREE THOUSAND POUND BUTT",
    "WHEN I FALL, IT JUST LOOKS LIKE I'M SITTING DOWN CAUSE I'M THAT THICC",
    "STOP SITTING ON MY THICC BUTT",
    "SOMEONE DRANK MY SUGARY POWDERY BABY DADDY!",
    "YOU’VE CORRUPTED ME YOU LIL SHAT!",
    "WHALES BEING ABLE TO INHALE HOGWARTS’ BEST NUISANCES",
    "MY TUMMY IS RUMBLING ‘CAUSE I’M HYUNG.",
    "SECRETLY WRITING A KPOP FANFIC ABOUT MYSELF AND A KPOP START BUT THEN, GASP, PLOT TWIST! I’M THE DOM AND THE HYUNG.",
    "I HIDE ALL THE INVISIBLE PPS!",
    "DID YOU JUST CALL ME A BASIC BOTCH?",
    "THERE'S STILL LARGE INTESTINE UNDER THE JUICE",
    "JUST EAT ME, I’M NOT GONNA RUN.",
    "I’M ALSO ATTRACTED TO THINGS LIKE TABLES, THEY'RE JUST SO... HOT AND WOODY.",
    "I AM FURNISEXUAL, I LIKE TABLES.",
    "I FEEL SO GOOD ABOUT MYSELF NOW THAT I HAVE FIGURED OUT MY PREFERENCE OF FURNITURE.",
    "I CAN’T STAY IN THE TABSEXUAL CATEGORY BECAUSE MY ATTRACTION IS NOT ONLY LIMITED TO EATING SURFACES",
    "I AM ALSO ATTRACTED TO FEET MASSAGERS. THEY ARE VERY SMELLY BEINGS AND VERY FETISHED",
    "WOULD YOU LIKE TO HAVE A THREESOME WITH MY TABLES?",
    "CALVIN IS AS HOT AS MY TABLES",
    "GRADE THREE FRENCH IMMERSION ENGLISH",
    "WHAT BODY PART LANGUAGE DO YOU WANT TO GO INTO? EYE LANGUAGE? HAND LANGUAGE, FEET LANGUAGE? TEETH LANGUAGE?",
    "I STABBED MY FINGER ON THE CHAIR.",
    "OH MY GOD, A FROG! THAT’S LITERALLY MY ACTING.",
    "ME AND MY FIFTY YEAR OLD BRAIN HAVE MEMORY LOSS",
    "IN OTHER WORDS, BECOME A FISH. INHALE THE H2O",
    "IT’S LIKE A DYING DONKEY",
    "PLEASE DON'T INTERRUPT YOUR DYING, YOU CAN DIE ON YOUR OWN TIME.",
    "MY LEG IS IN PAIN, I’M SO MOLDY.",
    "I FEEL LIKE FISH.",
    "I HAVEN’T TOUCHED FISH IN FIVE MONTHS.",
    "DON’T DO THINGS IN ADVANCE. YOU HAVE TO PUSH THEM BACK.",
    "AT LEAST U CAN DO LGBTQ HISTORY, MINE IS ABOUT COOKIE JARS. WHAT DO I DO? THE HISTORY OF THE INVENTION OF THE COOKIE JAR? WHY DOES COOKIE MONSTER LIVE IN THE TRASH CAN?",
    "DOES HE HAVE A LOWER BODY? I'VE ONLY EVER SEEN HALF HIS BODY, I WAS CONVINCED WHEN I WAS YOUNGER THAT THAT WAS HIS WHOLE BODY.",
    "I SLEPT PRETTY EARLY YESTERDAY… (WHAT TIME?) LIKE AT 4 AM",
    "I HAVE CONFUSIONITIS AND IT CAUSES ME TO MISUNDERSTAND FILLETS. IT WAS A MISUNDERSTANDING ON YOUR PART.",
    "I SINCERELY MISUNDERSTAND THEIR INTENTIONS FOR ASKING ME AT 4 AM.",
    "THEY ARE COLLECTIVELY I’M HUNGRY.",
    "I WAIT HERE FOR UR UBER SERVICES.",
    "I AM ONE WITH THE ZOO. I AM ONE WITH THE AIR. I AM ONE WITH DEATH.",
    "OH MY LEGOS. OH I HATE THE COLOUR OF BLUE.",
    "THE BLOCKY CLOUDS THE VIBRATION OF THE DEATH.",
    "DO YOU FEEL THE VIBRATION OF DEATH TRISTAN?",
    "LIKE THE NATURE OF BLOCKS... I HATE THIS.",
    "THE BLUE SKY IS HAUNTING YOU, YOU KNOW WHY? BECAUSE BLUE AND RED DON'T MIX.",
    "AH YES THE FENCES! THEY STORE THE PIGS, THEY STORE THE CHICKEN, THEY STORE THE COWS, YOU KNOW WHAT THEY DON’T STORE? PARKOUR HAPPINESS.",
    "YOU KNOW WHAT THESE LADDERS DON'T DO? SUPPORT YOU FROM FALLING.",
    "THESE LADDERS ARE SERIOUSLY BREAKING MY HEART.",
    "AH YES, ONCE MORE THE LADDERS ARE SUPPORTING ME IN MY HAPPINESS OF PARKOUR? YOU KNOW WHAT ISN'T? THE FENCES",
    "I HAVE BECOME SHAKESPEARE’S DAUGHTER",
    "TRISTAN’S STANDING ON THE BED WITH SHOES! YOU HAVE TO STAND ON THE BED WITH SOCKS!",
    "DID YOU JUST BLOW UP? AUSTIN JUST BLEW UP.",
    "HUUUU WTCHAPATCHA! THE CHICKENS, THE COWS, THE SEAHORSES… THEY ALL UNDERSTAND HOW FENCES ARE BAD.",
    "WOW THAT RHYMES, I’M LIKE SHAKESPEARE.",
    "THE RED BLOCKS AND THE VOID ARE GONNA REJECT ME. THE VOID IS GONNA SPIT ME BACK OUT SO I WON’T BE ABLE TO DIE.",
    "EVEN THE VOID ISN’T EVEN TAKING ME IN, I’M VIBRATING.",
    "I’LL SHOWER THE NEXT TIME I DIE",
    "STOP LAUGHING AT MY MISERY, MY MEMORY LOSS IS REALLY BAD!",
    "OH, HOW THE FENCES ARE EVIL.",
    "I EAT WITH A DORA BOWL.",
    "OMG, I WANT TO EAT A KOREAN PANCAKE WITH TARO!",
    "OMG, IT'S SO PINK WHAT A DOOZY!",
    "DID YOU KNOW THE TROUBLES OF THE MICROPHONES? THERE’S SO MUCH SPIT ON IT",
    "SPITTING IS ILLEGAL YOU WILL GET ARRESTED FOR FIFTEEN YEARS FOR SPITTING.",
    "IS THAT A BI? WHAT A STRANGE CREATURE.",
    "IS THAT A HETERO? NO, NO, NO, YOU’VE GOT IT MISTAKEN! THAT IS A HEDGEHOG!",
    "BLACK HOLE IS MASSIVELY ATTRACTIVE, PERIOD.",
    "I CAN PLAY IN THE MORNING (HOW EARLY IS YOUR MORNING THO?) UH LIKE 1-3 PM",
    "I CALL SPIRITUAL HARASSMENT!",
    "SHE HARASSES GHOSTS TO RETIREMENT",
    "CLEARLY THEY SHALL BE BROUGHT DOWN IN HISTORY IN THE BOOK OF QUODYA",
    "I SAID THAT… UH… PSYCHOLOGICALLY… I’M BEING WARMLY HARASSED",
    "I’M SO SPECIAL, I GET MY OWN BOOK!",
    "I PRODULY RAN INTO THE CREEPER",
    "YOU DIDN'T EVEN LEAVE ME YOUR BOOTS? HOW RUDE!",
    "YOU JUST POPPED UP IN FRONT OF ME AND DIED! I THOUGHT YOU WERE SUFFOCATING IN A TREE!",
    "DO YOU THINK I HAVE POLES SWIRLING AROUND ME?",
    "THERE ARE SO MANY SAPLINGS— WAIT, WHY ARE THERE SO MANY STICKS?",
    "SHE THOUGHT THE SKELETON WAS A SHINY BLOCK.",
    "I’M BEING BURIED AGAINST MY WILL.",
    "LET'S TAKE FARSI.",
    "AM I DEFINITELY NOT LOUD AND 100% QUIET?",
    "I FEEL LIKE YOU'RE USING ME AS YOUR SHIELD. YOU TELL ME TO DO SOMETHING AND THEN YOU LEAVE.",
    "WANYANG, THAT'S NOT HOW YOU SIMP!",
    "I’VE BEEN CHEATED.",
    "YES, AUSTIN, BABY, CHOKE US WITH YOUR CHORDS!",
    "IT WAS MEANT TO BE CONFIDENTIAL, EXCLUSIVE TO THE CHORDS!",
    "AUSTIN BABY IS PLAYING HIS THREE CHORDS.",
    "I NEED TO BE CHOKED NOW, AUSTIN!",
    "WAIVER PULL.",
    "INSTEAD OF “OK BOOMER”, IT’S “OK COOKIE JAR”… I SAID OK BOOMER, NOT OK GOOGLE!",
    "(YOU’RE ALL I NEED…) NO, THANK YOU.",
    "SPLASHES! THAT'S WHY I KEPT SAYING WAVE RIPPLES, I DIDN'T REMEMBER THE WORD!",
    "MY BUZZER WAS THE MOST HELPFUL! I DON’T KNOW WHAT YOU’RE SAYING.",
    "NUNUNUNU DUDUDUDU BATMAN! I HATE CHINESE, I LOVE CHINESE ACTUALLY.",
    "OKAY, GOTTA WORK, PEACE OUT BATMAN!",
    "CAROLYN, I NEED YOUR RICE KRISPIES. DO YOU KNOW HOW LONG I'VE GONE WITHOUT EATING CAROLYN'S RICE KRISPIES?",
    "SHOT SHOT SHOT SHOT SHOT!",
    "CAN SOMEONE PLEASE EXPLAIN TO ME WHAT IS ID.",
    "I STUDY AT YALE, MAJORING IN HARVARD AT OXFORD COUNTRY",
    "AAAAAAAH! THERE'S WINE BOTTLES!",
    "I NEED TO TELL MY LIFE STORY. THEY NEED TO KNOW ABOUT MY CHIPMUNKS.",
    "I SOLD MY HOUSE FOR MY MOM.",
    "I’VE BEEN KICKED OUT OF MY BAR.",
    "GET THE QUESTION MARK! WHY'D YOU BUMP INTO IT!?",
    "MY BACKSTAIRS ARE DOWNPACK.",
    "KAMSAHBNIDAR FOR COMING.",
    "I PULLED UP HER EYELIDS.",
    "I PUT THE CONTEXT IN CONTEXT. I MAKE THE CONTEXT. I CREATE THE CONTEXT. I AM THE CONTEXT.",
    "I DIDN'T SOUND LIKE A SCAMMER.",
    "I WAS JUST TRYING TO PONG MY CUPS.",
    "DID YOU KNOW I BIKED BY A MARIJUANA FARM. I DIDN'T GET HIGH THOUGH. I WISH I GOT HIGH. I GET SO MUCH ENERGY.",
    "I WILL BE THE ONLY VOICE THAT ERUPTS BEYOND VOLCANOES.",
    "NO AUSTIN COME BACK IM SO SORRY JE M'EXCUSE MA CHERI S'IL VOUS PLAIT AUSTIN BABY *MON CHERI AUASTIN BABY AUSTIN BRO BROSHIP? MY DUDE? AUSTIN IM SO SORRY I LOVE U COME BACK",
    "TICK TOCK, NO APPLE MILK.",
    "WHAT DO YOU THINK WE BREATHE? WATER?",
    "BECAUSE I AM A CLOWN.",
    "I ATE THE BASKETBALL. WAIT IT'S A TYPO, AUTOCORRECT (SAID IN REAL LIFE)",
    "OH, THESE ARE GOOD! CAROLYN, YOUR HATRED HAS BEEN REVOKED.",
    "HE LOOKS LIKE A CUPCAKE. IT'S A SWIRL LIKE A SUMO WRESTLER!",
    "PUT THE COOKIES IN THE COOLER. NOT ME! THE COOKIES!",
    "I'M ALWAYS THE VICTIM THE HATRED THE TRAUMATIZATION",
    "I’M A FRECKLE... A FEATURE ON YOUR FACE. I’M A FRECKLE... A DOT ON YOUR FACE!",
    "YOUR BUTT IS SO WARM, IT'S LIKE A HOT PACK FOR MY BUTT!",
    "I'M SO ORIGINAL I DON'T HAVE AN EYE!",
    "WANYANG JUST CALLED ME AN UNDERWEAR MURDERER.",
    "UH… LET’S KILL FREDRICK!",
    "LET’S START KILLING THEM AND SLOWLY MOVE ONTO THE SERVER ADMINS.",
    "I MADE UP THE NAME QUODYA? I WAS GONNA INSULT HOW STUPID OF A NAME IT WAS.",
    "WEREN'T PRES’ PARENTS, LIKE, PUTTING PRESSURE ON HER AND THAT'S WHY SHE RAN AWAY WITH THE BUTLER? (I FORGOT HIS NAME)",
    "I APOLOGIZE BUT I NEED TO CLEANSE MY BODY OF ITS IMPURITIES WITH SOAP AND TAP WATER",
    "SHE CALLED ME ROTTEN FOOD THE OTHER DAY TOO! THE DISREPAIR! NO! I MEAN THE DISREPSEXT! NO! WHY IS DISRESPECT SO HSRD TO SPELL! THE DISPRESOECT, GODSAMIT.",
    "I'M BEING DISRESPECTED BY SPELLING, DISRESPECT WAS BEING DISRESPECTFUL TO ME!",
    "I THOUGHT OF FLAMINGO WHEN I WAS WRITING FABULOUS AND THEN I THOUGHT OF ME SAYING IM JUST THAT FLAMINGO. AND NO. I AM NOT THAT FLAMINGO MY BRAIN JUST DOESN'T WORK THE WAY I WANT.",
    "(I THOUGHT U WERE SHOWERING?) I WAS GOING TO BUT THEN I WAS LIKE OO... WAIT NO NOT OO... SEY UH... IDK WHAT I WAS DOING BUT IMMA GO CLEANSE MYSELF GOODBYE",
    "YOU’RE OLD FRUIT!",
    "FRIIT = FOR REAL I INHALE TIMOTHY",
    "THE LESS U KNOW THE BETTER TO INHALE.",
    "I KNOW, I’M A VERY EXPENSIVE BEING.",
    "IT'S A WIN WIN FOR EVERYONE! JUST LIKE SEXY RED FLAGS",
    "SMEXY FRIED DRUMSTICKS WITH THEIR GOLDEN BROWN CRISPY SKIN... MM, HOT!",
    "MASOCHISM IS TASTY. MASOCHISM IS YUMMY. MASOCHISM IS TRIANGULAR FLAG ON POST.",
    "IT FEELS LIKE I CAN SEE THE SKY. THE RED BLOODY SKY THAT'S DRIPPING, DRIPPING, AND DRIPPING. CELLS, BEE CELLS, HONEY. WINNIE THE POOH IS FALLING FROM THE SKY",
    "I DO LOVE ME SOME SUGAR BUT THE VALENTINES CANDY IS JUST NOT IT FOR ME",
    "TRISTAN FLAGS ON POST",
    "OF WANYANG, THE BULLSHIT, AND THE GRIM REAPER.",
    "HERE LIES WANYANG ZHONG. FOREVER FORGOTTEN, NEVER REMEMBERED, THE MINORITY.",
    "CAROLYN, I AM A SPICY WOMAN",
    "WHERE'S THIS STUPID WORD?",
    "TRISTAN, WHY? WHY IS THERE NO WORD!",
    "HEY THATS THE WRONG WORD, I THOUGHT IT WAS THE WORD BUT... LIFE IS HARD.",
    "NO THATS ALSO NOT THE RIGHT WORD, MOMMY~",
    "YOU’RE PHYSICALLY MUTED? ARE YOU OK? I’M GENUINELY CONCERNED.",
    "HOW'D YOU EVEN MUTE YOURSELF? DID U LIKE STAPLE UR MOUTH TOGETHER... THIS GOT DEEP, I SHOULD STOP JOKING",
    "UR BED RAN AWAY AS SOON AS U STARTED ROTTING.",
    "NO MORE EXCUSES NOW HUH. UR 583 YEARS OLD BRAIN IS NO LONGER FUNCTIONING.",
    "IT IS NOW PINNED AND FOREVER REMEMBERED UNLIKE UR FORGOTTEN SELF",
    "YOUR BRAIN HAS ALREADY BEEN EATEN, GONE, DIGESTED, POOPED OUT, FLUSHED DOWN THE TOILET, EATEN BY FISH, POOPED UP BY FISH, EATEN BY OTHER FISH, THEN POOPED OUT AGAIN, AND EVAPORATED FOREVER",
    "SHIT CAN BE COMPOSTED. UR BULLSHIT BRAIN IS COMPOST",
    "THEY'RE ALREADY SOLD AND STEPPED ON. THROWN AWAY LIKE A PILE OF SHIT.",
    "SMELLY, USELESS AND WASTED. THEY WERE EVAPORATED, AND RAINED DOWN ON EARTH",
    "WHERE IT CREATED A PILE OF SHIT",
    "EMBRACE THE SHIT. SMELL IT, HUG IT, BECOME IT",
    "BECOME ONE WITH THE SHIT WANYANG.",
    "I UNDERSTAND THAT UR GETTING OLD AND BEING 951 IS A LITTLE TOO MUCH FOR UR SOUL TO SUPPORT BUT IT'S OK. U JUST GOTTA ROT AWAY",
    "DON'T UNDERESTIMATE MY ABILITY TO PROCRASTINATE",
    "DEATH, MASOCHISM, ALL THESE BEAUTIFUL THINGS THAT RESULT IN A BEAUTIFUL FRIENDSHIP",
    "DON'T FORGET ABT THE MASOCHISM, A VERY IMPORTANT PERSONALITY TRAIT OF WANYANGS",
    "OF COURSE NOT. WHAT COULD POSSIBLY GO WRONG IN AN ABUSIVE RELATIONSHIP? IT CAN ONLY GO LEFT",
    "TRISTAN GLITCHED.",
    "DID THEY SEXT ON GOOGLE DOCS?",
    "I'M A BIG DICKED MAIN CHARACTER AND YALL ARE MY BACKGROUND CHARACTERS",
    "THESE LIES YOU SPOUT, YOU TREACHEROUS WRENCH",
    "THATS A LIE YOU UNFILTERED SARDINE",
    "I AM HERE TO SAVE U ALL FROM UR BORING DULL LIVES",
    "MY BRAIN ISNT FUNCTIONING ENOUGH FOR ME TO SAY SOMETHING STUPID. BEING STUPID TAKES A LOT OF EFFORT YK. IT'S JUST SO DIFFICULT TO TALK",
    "I WAS PLAYING PIANO WITH A COMPUTER OK",
    "OMG I WAS SO SCARED THE ARTICLE JUST DISAPPEARED BUT NOW ITS BACK",
    "BLOOD PACT THAT U NEVER WANTED BC U DONT WANT TO USE UR BLOOD",
    "TRISTAN HELP ME IM BEING ABSORBED IN A CONVERSATION",
    "MY CALCULATOR WAS AN ACCIDENT. MY FINGEE SLIPPED",
    "I WAS LIKE 'OK WHO LEFT' AND THEN I LOOKED AT ALL THE NAMES, AND I WAS LIKE... WAIT! IT'S ME! I'M MISSING",
    "WANYANG, STOP DROWNING ME IN CONVERSATION! I NEED TO DO MATH!",
    "I HATE APPLICATION COURSES, WHY DO THEY NEED TO EXIST? I LIKE THINKING BUT I DON’T LIKE THINKING.",
    "*TALKING TO HER MATH PAPER* ARE WE DOING THE SAME QUESTION?",
    "WANYANG SPEAKS THE LANGUAGE OF ASMR, THE LANGAUGE OF AUDITORY SADISTIC MASOCHISTIC RAPE",
    "YEA, NADYA, I DON'T UNDERSTAND EITHER, WHY DOES TRISTAN QUOTE ME? I'M CLEARLY NORMAL",
    "STAN STRAY KIDS :) *(i defo didn't make nadya say this)*",
    "I STILL HAVE THREE MINUTES OF MY BREAK. WHAT SHOULD I SPEND IT DOING? READING GAY MANGA…",
    "DON’T STAN BEING HETERO! BE HOMOGENEOUS!",
    "BE A SUBSTANCE. FLOW THROUGH THE AIR. BE THE SUBSTANCE. THAT IS THE SUBSTANCE OF LIFE. YOU MAY QUOTE ME ON THAT.",
    "IT MIGHT EVEN TAKE ME 3 HOURS TO FINISH EATING FRIES",
    "NO, CORWIN BABY! FORGIVE ME FOR MY INCOMPETENCE!",
    "UR SUCH A HORRIBLE PERSON AND YET U SAY UR NOT A SADIST??",
    "YOU KNOW, GOTTA GET SOME OF THAT METABOLISM",
    "IS THIS SUPPOSED TO BE A LOVE HOTEL WHERE U MAKE LOVE IN FRONT OF JESUS? GOTTA GET JESUS’ BLESSING",
    "I DON'T KNOW HOW TO ENGLISH I'M HERE FOR MATH CLASS, NOT ENGLISH",
    "I HATE HOW HE PUTS COMMUNICATION QUESTIONS WHERE YOU ACTUALLY HAVE TO COMMUNICATE",
    "THAT’S SOME NICE POO!",
    "THAT’S A COW? I THOUGHT IT WAS A DEMON.",
    "CAUSE I'M ALL JUMBLED AND SHRUMBLED AND *COUGHS*",
    "WANYANG, I’VE BECOME YOU! I’VE BECOME A MASOCHIST!",
    "YOU’RE A TERRIBLE INFLUENCE, GO AWAY TO THE GARBAGE CAN!",
    "I LEFT FOR FIVE MINUTES AND I’VE BEEN THROWN IN THE GARBAGE",
    "MY COUSINS SO GOOD AT JAPANESE THAT SHE'S BECOME A JAPANESE PERSON. SHE LIVES IN TOKYO NOW.",
    "BAD INFLUENCES GO INTO THE TRASH",
    "HE'S SO EVIL BUT I LOVE HIM. HE'S SO HOT.",
    "THE MAIN CHARACTER IS ALSO HOT BUT I LIKE THE EVIL GUY BETTER",
    "A VERY SEXY LAST NAME",
    "DONT U EVER JUST HEAR SOMEONE'S LAST NAME AND U THINK 'AH THAT IS THE ONE WHO I WILL MARRY.' WHAT AN OUTSTANDING LAST NAME. HOW SEXY",
    "I SHALL MARRY THEM AND CLAIM THE SEXINESS FOR MYSELF",
    "HI AUSTIN PENIS. I SHALL NEVER MARRY U. YOU KNOW WHY? BC PENIS IS NOT A SEXY LAST NAME, AND I SHALL ONLY MARRY THE SEXIEST OF LAST NAMES LIKE DANIELS.",
    "SAMUEL SEO I LOVE SAMUEL SEO BUT HE'S SO BAD AGH",
    "IF MY FUTURE BOYFRIEND DOESN’T LOOK LIKE THIS, I'LL MAKE HIM LOOK LIKE THIS.",
    "IF ANYONE KNOWS A POSSIBLE SAMUEL CANDIDATE, PLS CONTACT ME AT 4168805038.",
    "HE NEEDS TO BE A REAL MAN THAT DOESN'T SELL POKEMON CARDS",
    "NO I WANT HIM TO BE HOT BUT NOT HOT ENOUGH FOR MANY GIRLS TO STEAL HIM FROM ME",
    "THE ONLY THING GETTING ME A BF WAS MY BOOK BUT APPARENTLY IT'S A HOT GUY REPELLANT",
    "MY QUOTES SHALL REPEL SUCH THINGS. BEGONE FOUL HOT GUYS, I SHALL REPEL U AND SAVE THE WORLD WITH MY QUODYA.",
    "AH TO HAVE NO CRUSH THE BEST LIFE TO LIVE. HE'LL SUFFOCATE ME.",
    "WHAT THE HELL AM I GONNA DO WITH A GUY A FOOT TALLER THAN ME. HE’S GONNA CRUSH ME",
    "I CAN'T COUNT ON MY HEART TO BE CRUSH FREE FOR ANOTHER 2 YEARS.",
    "WOULD YOU WANT TO ROOM WITH SOMEONE WHO SHOCKS PEOPLE?",
    "JUST LEAVE ME AND MILGRAM BE. HE'S A WEIRD MAN WITH WEIRD QUALITIES.",
    "CAN I SAY HE DISLIKES HEART ATTACKS BECAUSE HE DIED FROM A HEART ATTACK?",
    "I'M TAKING OFF THE NAZIS FROM HIS DISLIKES, OK? DOES THAT MAKE IT BETTER?",
    "THIS MAN HAS REALLY MESSED UP INTERESTS.",
    "YOU GUYS ARE MY CULT.",
    "I THINK YOU'RE ON DRUGS.",
    "SOMEONE GET THIS MANS A GIRL, A HOT ASIAN GIRL, YOU SAY.",
    "DOES ANYONE KNOW ANY HOT GIRLS THAT WATCH ANIME?",
    "I'M JUST SIMPING FOR A HOT GANGSTER KID WHO’S SIXTEEN.",
    "WANYANG UR FAT FINGERS R INFECTING ME!",
    "MY FOOT IS BETRAYING ME.",
    "I JUST THOUGHT MY DOGS HEAD WAS HIS BUTT AND I THOUGHT HE WAS TWERKING... BUT HE WAS ONLY LICKING HIMSELF",
    "I DESERVE RIGHTS! HOT GUY REPELLANT RIGHTS!",
    "I'M NO LONGER ONLY FURNISEXUAL, I'M ALSO DISEXUAL. SEX MUST DIE. NO MORE ACTS OF REPRODUCTION",
    "PROOF IS NOT EVIDENCE!",
    "YOU’D BE A WALKING NIGHT SHOW UR PIMPLES WOULD GRAB THE ATTENTION OF ALL.",
    "THEY HAVE GREEN LIGHTS AS THEIR BUTT, RIGHT? THEY DON'T HAVE WHITE LIGHTS ON THEIR BUTT.",
    "JUST THINK OF HER AS AN ALIEN.",
    "AND WANYANG IS JUST ILL... SHE’S SO GREEN!",
    "U HAVE PROGRESSED.. U HAVE BECOME A TEENAGER!",
    "WOW, YOU GUYS WERE REALLY  FATTENING YOURSELVES UP",
    "IS SUSHI NOT FOOD?",
    "I WASN'T AWARE OF YOUR FRIENDSHIP W CHING CHING. WOWOW",
    "THE GOVERNMENT SHOULD GO BURN ITSELF.",
    "WE ARE SPIRITUALLY CONNECTED. WE WERE FATED TO MEET.",
    "I WANT DRINK. I’M GONNA DRINK.",
    "WHY DO U AUTOMATICALLY ASSUME I'M DRINKING ALCOHOL?",
    "I'M NOT AN ALCOHOLIC IM ONLY 16. I DRANK MANGO JUICE.",
    "IT'S EASY TO GET DRUNK ON IT BC OF HOW GOOD IT TASTES.",
    "I DON'T KNOW WHAT I DRANK THE FIRST TIME BUT I DRANK LIKE ONE THIRD OF A BOTTLE AND ENDED UP WITH A HANGOVER.",
    "WHEN WE GET OLD ENOUGH WE SHOULD ALL GO DRINKING.",
    "WANYANG STOP TEACHING PEOPLE TO DRINK THEIR SORROWS AWAY",
    "NO I'M USING ALCOHOL TO DRINK AWAY MY NEGLECTION",
    "NONK",
    "PEER PRESSURE DOESN'T WORK ON ME MUAHAHAHA",
    "U GUYS DITCHED ME FOR LEAGUE! WHAT ELSE WAS I SUPPOSED TO DO? I WAS ‘DRINKING AWAY MY SORROWS’ AS WANYANG SAID",
    "MY FATHER FROM ANOTHER MOTHER.",
    "HE AGES ANNUALLY.",
    "THIS IS BIASISM. BLASPHEMY.",
    "I DON'T THINK IT’LL HAPPEN... MY DREAM OF PICKING UP GARBAGE W MY FRIENDS!",
    "WHY WOULD SOMEONE AGREE TO PICKING UP GARBAGE FOR NO REASON?",
    "I OWE YOU MY LIFE. I SHALL REPAY YOU WITH A LEMON.",
    "WHY WOULD SOMEONE THROW PEBBLES AT MY WINDOW? WHAT HAVE I DONE TO DESERVE THAT?",
    "UNKNOWN NUMBERS, PEBBLE THROWERS, I’M SORRY WORLD PLS FORGIVE ME FOR THE SINS I HAVE COMMITTED!",
    "HALLOWEEN IS OVER YET MY HAUNTING IS ONLY JUST STARTING.",
    "IT WOULDN’T HAVE MADE A DIFFERENCE IF YOU WERE SQUATTING ON THE FLOOR NEAR YOUR BED!",
    "DON'T JUDGE MY VOCABULARY USAGE!",
    "HORNY BONK. I NEED A SEVERE HORNY BONK",
    "YOU USELESS PICKLE!",
    "WANYANG WHO? NEVER EXISTED. SHE WAS NEVER BORN INTO THIS WORLD.",
    "YOU MAKE ME SOUND LIKE I'M CRAZY. I'M NOT CRAZY!...WHY IS NO ONE SUPPORTING ME?",
    "I GRAVELY REGRET MY ACTIONS. I’M REPENTING.",
    "YOU ATE A BOOK EARLIER? YOU NEED MORE KNOWLEDGE IN YOUR DIET.",
    "ALL I DID WAS SKIN AUSTIN'S DAD AND THIS IS THE TREATMENT I GET!",
    "LET THE SKINNING BEGIN!",
    "I HAVE NEVER DONE A FREAKY THING! I'M BEING GANGED UP ON.",
    "MY BOOK OF QUODYA IS ENOUGH PROOF OF ME DEFINITELY REMEMBERING EVERYTHING I'VE SAID",
    "IT MAKES MY BUTT FEEL NICE.",
    "INSTAGRAM NEEDS HELL!",
    "I WANT A JAPANESE TOILET, THEY’RE SEXY.",
    "HELLO, YES. SEXY BUTT SPRAYING WATER.",
    "I HAVE TO AUDACITY TO QUESTION YOUR EXISTENCE DON'T EVEN AT ME. I AM THE ONE WHO CREATED U. I HAVE MADE U. WHAT U EAT TODAY. I AM ALLOWED TO QUESTION IF U HAVE SOCKS ON.",
    "LET'S DO A POLL AND STROLL. POLLANDSTROLL, A NEW WORD!",
    "DOES NO ONE WANT TO VIOLATE LAWS WITH ME?",
    "WE MUST DESTROY THE MOTHER OF GRAPPLING HOOKS!",
    "WE CAN FINALLY RESTORE HYENAS TO THEIR RIGHTFUL THRONES",
    "THANK U FOR LISTENING TO MY NAD TALK.",
    "I CAN SEE GREEN, LIKE BROCCOLI! I’M VERY OKAY.",
    "I’M THE FISH; IS AUSTIN THE STRIPPER? NO CHRIS IS THE STRIPPER!",
    "AUSTIN IS THE BUFF LADY!",
    "OF COURSE YOU PASS OUT, YOU RAN OUT OF AIR!",
    "THERES A BUG/SPECK OF DUST FLYING IN MY ROOM! I THREW A TISSUE BOX AT IT.",
    "I LEFT IT THERE AND TOOK PICTURES OF IT, THINKING THAT THERE WAS A DEAD MOTH ON MY FLOOR! I’M CHOKING ON MY SPIT…",
    "BUT I'M NOT SURE I WANT A SUGAR DADDY THATS WORTH $40",
    "WE'VE BEEN BEST FRIENDS SINCE HE TOLD ME HIS EGG ALLERGY!",
    "THIS IS LIKE THE SUGAR DADDY INCIDENT, YOU'RE NOT GETTING OUT OF THIS.",
    "THE MAN WITH THE CURSED BUTT!",
    "MAY YOU AND YOUR BUTT REST IN PEACE!",
    "I'M NOT THAT CRAZY, WELL NOT YET, I HOPE I'LL NEVER GET THAT CRAZY... SIR YOU HAVE TOO LITTLE FAITH IN ME!",
    "MY MEMORY FLUCTUATES AT AN UNHEALTHY LEVEL.",
    "YOU SAID I HAD AN OLD PERSON BODY, YOUR KNEES ARE BAD TOO!",
    "I KICKED WANYANG, SHE'S NO LONGER PART OF MY CULT.",
    "SCREW THE EQUATOR! WHO NEEDS THE EQUATOR? BEGONE WITH THE EQUATOR.",
    "IF YOU JUMP OFF A BRIDGE AND JUMP INTO A FOAM PIT, YOU WON'T DIE!",
    "THAT'S THE WHOLE POINT! YOU NEED TO SUFFOCATE!",
    "WE’RE TALKING ABOUT SUFFOCATION, IT FEELS NICE.",
    "BRO WHAT DO YOU MEAN? I'M HELLA THICC MAN!",
    "ME? FIT? HAVE YOU SEEN MY BELLY ROLLS?",
    "A BIG SISTER VIBE? ME? DO I SEEM RELIABLE?",
    "I AM UR ONEE-SAMA. NOW GO GET ME MY POPSICLE!",
    "YOU CAN CALL ME YOUNG MASTER, UH... THAT MAKES IT SOUND LIKE I’M A LEADER OF SOME GANG.",
    "HMMM… IMAGINE NOT BEING IN A RELATIONSHIP.",
    "WE WERE SENDING BOOTY PICTURES ... OF BEAUTIFUL PLUMP CAT BUTTS!",
    "DAMN, AUSTIN. GUESS WE’RE DATING NOW.",
    "DID MY GIRLFRIEND JUST DIVORCE MY FATHER?",
    "THE MORE THE MERRIER, BUT THE LESS THE BARRIER.",
    "PUSH THE FLUID, TRISTAN! PUSH IT! PUSH IT!",
    "I AM MULTIPLE CHILDREN. I, MY SINGULAR SELF, AM MULTIPLE CHILDS. I’M NOT A CHILDREN, I’M A CHILDS.",
    "IS THIS MY SKIN? I DON'T KNOW IF IT'S MY FLESH OR MY SKIN... BUT IT'S CHIPPED!",
    "NO, SCREW SENSEI! I SHOULD BE PRIORITY.",
    "I FOUND A HOLE IN MY PANT. I CAN STICK MY HAND INTO IT, THAT'S HOW BIG THE HOLE IS!",
    "WHY AM I HOLDING A WINE GLASS IN AN OIL TANK?",
    "NO! WANYANG! YOU PROMISED TO COME DRINK WITH ME!",
    "NOYA WOULDN'T WANT ME TO DO THIS. I CAN'T GO AGAINST HIS WISHES LIKE THAT!",
    "ARE YOU DICTATING MY LOVE LIFE? ARE YOU HITLER? GUYS, CAROLYN'S HITLER!",
    "DON'T DROP SO MANY TRUTH BOMBS AT ME!",
    "SIR MOUNTAIN, THE POPE HAS CALLED YOUR NAME MANY TIMES.",
    "SHUSH, TRISTAN, YOU ARE A SLUSH!",
    "HIT JUNG-UN SHOO!",
    "IRRESPONSIBLE! STOP THIS, THIS ... QUOTING NONSENSE!",
    "I AM UNDERSTANDING, BUT YOU NOT UNDERSTANDING THAT I'M UNDERSTANDING IS WHAT YOU ARE NOT UNDERSTANDING IN THIS UNDERSTANDING",
    "I'M READING MY GAY MANGA BC MY PHONES AT 29% NOW! YAY, I'M HAPPY!",
    "YAY! MY GAY MANGA! I NEED WATER, I AM DEHYDRATED.",
    "I'M MISSING H2O2. THAT'S EXACTLY IT. I WAS LOST FOR A SECOND. I'M A SPECIAL CASE. I NEED EXTRA OXYGEN.",
    "THE TRUE CRACKHEAD IS WANYANG ZHONG, NOT NADYA CHENG. THANK YOU FOR LISTENING TO MY ESSAY. HAVE A GOOD DAY.",
    "IT DOESNT FEEL NICE WHEN I FEEL LIKE I'M BEING GETTING RIDDEN OF",
    "WE STAN GAY AO3 QUOTES.",
    "I HAVE TO SWEAR THE POST",
    "MY CHEST IS ITCHY!",
    "MY GOOGLE TURNED MALE!",
    "LAST WEEK HE WAS FEMALE AND NOW HE GAINED TESTOSTERONE!",
    "I SAY TOO MUCH. I NEED TO DUCT TAPE MY MOUTH.",
    "I’M A WIGGLY PERSON, I JIGGLE LIKE JELLO!",
    "I PRESSED MY HAND ON THE TABLE AND NOW IT HURT MY FINGER. I HAVE A VERY CHUBBY FINGER THOUGH SO IT’S OKAY.",
    "IT'S SO DIRTY BUT SHE'S LITERALLY JUST SAYING SHE'S EATING AN APPLE AND AN LEMON!",
    "I USED SOMEONE'S FINGERS FOR MY OWN PLEASURES.",
    "DELTED YOUR VULGARITY.",
    "LET'S LISTEN TO FIVE MINUTES OF PORN!",
    "THE NORTHERN HEMISPHERE'S GROUP OF BALLISTICS",
    "I THINK IT'S COMMON SENSE TO KNOW YOU DON'T STAB SOMEONE WHEN THEY TELL YOU THEY LIKE YOU, EVEN FOR KIDS!",
    "IT MUST BE THE END OF THE WORLD, I THINK I SEE THE METEORS!",
    "THE CREATURE'S UPPER BODY EXPLODED, AND THE CURSED CHRISTMAS TREE WITH A PINK HEAD JUST GREW OUT OF THE BODY",
    "YOU SMOOTH BRAINED IDIOT!",
    "YOUR ACIDS WILL DESTROY CALVIN'S VASCULAR SYSTEM",
    "WHY WOULD I BIRTH MY ALLERGIES?",
    "I’M A CHICKEN! A TRANSGENDER CHICKEN, SO I WAS A ROOSTER!",
    "YOUR SMALL EGG SELF CANNOT COMPARE TO THE AMOUNT OF NUTRIENTS MY GENDER FLUID CHICKSTER SELF HAS!",
    "NO ONE FOLLOWS MY TREND THOUGH, SO I HAVE TO DO IT AGAIN.",
    "WHO WANTS THEIR RIGHTS RESTRICTED? *silence* NO ONE?",
    "I'M THE ONLY ONE HERE WHO IS VERY SANE AND CALM.",
    "I AM PART OF THE GOVERNMENT, I CREATED YOU AND YOU ARE A ROBOT.",
    "THEY ALL DISAPPEARED LIKE ALL SERIOUS PEOPLE WOULD.",
    "BUT I AM A PERSONALITY TRAIT!",
    "WHAT? NO WAY! I'M THE ONLY ONE WITH CRUNCHY TOENAILS!",
    "YEA, I WANT WANYANG UNDERNEATH ME.",
    "HOW KINKY WANBY."

];

client.on('message', message => {
    //console.log(message.content);
    if(message.content.startsWith(`${prefix}quote`)) {
        var randomquote = rquote[Math.floor(Math.random() * 506  )];
        randomquote = 
        message.channel.send(randomquote)
    }
})

client.on('message', message => {
    //console.log(message.content);
    if(message.content.startsWith(`${prefix}help`)) {
        message.channel.send("Enter '~quote' for a quote from The Book of Quodya!")
    }
})

client.login(token);