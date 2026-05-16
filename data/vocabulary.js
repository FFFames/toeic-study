// TOEIC Vocabulary - 1000+ Essential Words with Meanings, Examples, and Practice Questions
// Sources: Barron's TOEIC, Pass the TOEIC Test, vocabulary.com, Loora.com
// Each word includes source and difficulty level (easy, medium, hard, expert)

const vocabularyData = [
  {
  word: "ability",
  partOfSpeech: "noun",
  definition: "the capacity or power to do something; talent or skill",
  example: "Her ability to negotiate complex contracts impressed the management team.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "abroad",
  partOfSpeech: "adverb",
  definition: "in or to a foreign country or countries",
  example: "Our company is expanding its operations abroad to reach new markets.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "absolutely",
  partOfSpeech: "adverb",
  definition: "completely; entirely; without exception",
  example: "The manager was absolutely certain that the project would succeed.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "accept",
  partOfSpeech: "verb",
  definition: "to agree to take or receive something; to approve",
  example: "The board decided to accept the proposal after reviewing all the details.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "access",
  partOfSpeech: "noun/verb",
  definition: "(n) the means to enter or use; (v) to gain entry to",
  example: "Employees have access to the company database from any location.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "accessible",
  partOfSpeech: "adjective",
  definition: "easy to approach, reach, or understand",
  example: "The new office location is more accessible to public transportation.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "accident",
  partOfSpeech: "noun",
  definition: "an unfortunate incident that happens unexpectedly",
  example: "There was a workplace accident that could have been prevented.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "accommodate",
  partOfSpeech: "verb",
  definition: "to provide lodging or sufficient space for; to fit in with",
  example: "The conference center can accommodate up to 500 attendees.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "accommodation",
  partOfSpeech: "noun",
  definition: "lodging; a place to live or stay; adaptation or adjustment",
  example: "The company provides accommodation for employees traveling on business.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "accomplish",
  partOfSpeech: "verb",
  definition: "to achieve or complete successfully",
  example: "The team accomplished all their goals ahead of schedule.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "accomplishment",
  partOfSpeech: "noun",
  definition: "something achieved successfully; the act of completing something",
  example: "Completing the project early was a significant accomplishment for the team.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "according",
  partOfSpeech: "adverb",
  definition: "as stated or indicated by; in accordance with",
  example: "According to the report, sales increased by 15% this quarter.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "accordingly",
  partOfSpeech: "adverb",
  definition: "in a way that is appropriate to the circumstances",
  example: "The budget was reduced, and we adjusted our plans accordingly.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "accounting",
  partOfSpeech: "noun",
  definition: "the system of recording and summarizing financial transactions",
  example: "The accounting department prepares monthly financial reports.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "accurate",
  partOfSpeech: "adjective",
  definition: "correct and exact; free from errors",
  example: "Please ensure all data entered into the system is accurate.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "achieve",
  partOfSpeech: "verb",
  definition: "to successfully bring about or accomplish a desired result",
  example: "Our goal is to achieve 20% market share by the end of the year.",
  source: "Pass the TOEIC Test",
  difficulty: "medium"
},
  {
  word: "acquire",
  partOfSpeech: "verb",
  definition: "to obtain or gain possession of something",
  example: "The company plans to acquire a smaller competitor to expand its market.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "act",
  partOfSpeech: "verb/noun",
  definition: "(v) to take action; (n) a thing done; a deed",
  example: "We must act quickly to resolve this customer complaint.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "actually",
  partOfSpeech: "adverb",
  definition: "in fact or reality; really",
  example: "Actually, the project is ahead of schedule despite the challenges.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "adapt",
  partOfSpeech: "verb",
  definition: "to adjust or modify something for new conditions or purposes",
  example: "Companies must adapt their strategies to changing market conditions.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "adapter",
  partOfSpeech: "noun",
  definition: "a device that connects different pieces of equipment",
  example: "You may need a power adapter when traveling internationally.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "additional",
  partOfSpeech: "adjective",
  definition: "added; extra; supplementary",
  example: "We may need additional funding to complete the project.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "adequate",
  partOfSpeech: "adjective",
  definition: "sufficient for a specific purpose; acceptable",
  example: "Please ensure adequate ventilation in the workspace.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "adjust",
  partOfSpeech: "verb",
  definition: "to alter or modify slightly; to adapt",
  example: "We need to adjust our prices to remain competitive.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "adjustment",
  partOfSpeech: "noun",
  definition: "the act of making a minor change; modification",
  example: "The contract required some adjustments before both parties could sign.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "administration",
  partOfSpeech: "noun",
  definition: "the management or direction of a business or organization",
  example: "The administration is reviewing the company's policies.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "admire",
  partOfSpeech: "verb",
  definition: "to regard with respect or warm approval",
  example: "I admire her dedication to completing the project on time.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "admit",
  partOfSpeech: "verb",
  definition: "to acknowledge as true; to allow entrance",
  example: "The manager admitted that the mistake was avoidable.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "admittance",
  partOfSpeech: "noun",
  definition: "the right or permission to enter",
  example: "Admittance to the building requires a security badge.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "advance",
  partOfSpeech: "noun/verb/adjective",
  definition: "(n) forward movement; (v) to move forward; (adj) made ahead of time",
  example: "We need to advance the deadline to accommodate the client's request.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "advanced",
  partOfSpeech: "adjective",
  definition: "far on in progress; complex or highly developed",
  example: "The advanced features of the software require training to use properly.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "advantage",
  partOfSpeech: "noun",
  definition: "a beneficial factor; a favorable position",
  example: "Our company has a competitive advantage in the Asian market.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "advantageous",
  partOfSpeech: "adjective",
  definition: "beneficial; favorable; giving an advantage",
  example: "The new tax policy is advantageous for small businesses.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "advertise",
  partOfSpeech: "verb",
  definition: "to describe or promote something publicly to attract attention",
  example: "We plan to advertise our new product on social media platforms.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "advertisement",
  partOfSpeech: "noun",
  definition: "a public notice promoting a product, service, or event",
  example: "The advertisement appeared in major newspapers across the country.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "advice",
  partOfSpeech: "noun",
  definition: "guidance or recommendations concerning prudent action",
  example: "The consultant gave valuable advice on improving efficiency.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "advise",
  partOfSpeech: "verb",
  definition: "to offer suggestions about the best course of action",
  example: "Please advise us if you need any additional information.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "affect",
  partOfSpeech: "verb",
  definition: "to influence or produce a change in something",
  example: "The economic downturn will affect our sales projections.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "afford",
  partOfSpeech: "verb",
  definition: "to have enough money or time for something",
  example: "We cannot afford any delays in the project schedule.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "affordable",
  partOfSpeech: "adjective",
  definition: "inexpensive; reasonably priced",
  example: "We offer affordable solutions for small businesses.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "agency",
  partOfSpeech: "noun",
  definition: "a business or organization providing a specific service",
  example: "Our advertising agency created an excellent campaign for us.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "agenda",
  partOfSpeech: "noun",
  definition: "a list of items to be discussed at a meeting",
  example: "The first item on the agenda is the quarterly review.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "agree",
  partOfSpeech: "verb",
  definition: "to have the same opinion; to approve or accept",
  example: "The board members agreed on the new strategic plan.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "agreeable",
  partOfSpeech: "adjective",
  definition: "pleasant and willing to agree; acceptable",
  example: "The terms of the agreement were agreeable to both parties.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "agreement",
  partOfSpeech: "noun",
  definition: "a negotiated arrangement or understanding between parties",
  example: "Both parties signed the agreement after lengthy negotiations.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "agricultural",
  partOfSpeech: "adjective",
  definition: "relating to farming or cultivation",
  example: "The agricultural sector experienced growth this year.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "aid",
  partOfSpeech: "noun/verb",
  definition: "(n) help or assistance; (v) to help or assist",
  example: "Financial aid was provided to affected employees.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "aim",
  partOfSpeech: "noun/verb",
  definition: "(n) a purpose or goal; (v) to intend or direct toward a goal",
  example: "Our aim is to become the market leader in our industry.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "background",
  partOfSpeech: "noun",
  definition: "the circumstances or past history of a person or thing",
  example: "Her background in finance made her an ideal candidate for the position.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "backpack",
  partOfSpeech: "noun",
  definition: "a bag carried on the back with shoulder straps",
  example: "Sales representatives carry backpacks with product samples.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "baggage",
  partOfSpeech: "noun",
  definition: "luggage and personal belongings; suitcases and bags",
  example: "Please ensure your baggage is properly labeled before checking in.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "balance",
  partOfSpeech: "noun/verb",
  definition: "(n) equilibrium; remaining amount; (v) to make equal",
  example: "Please check your account balance before making a large purchase.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "bank",
  partOfSpeech: "noun/verb",
  definition: "(n) financial institution; (v) to rely on or use",
  example: "The bank approved our loan application for the new equipment.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "bankrupt",
  partOfSpeech: "adjective/noun",
  definition: "(adj) unable to pay debts; (n) a person declared insolvent",
  example: "The company went bankrupt after the market crash.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "barcode",
  partOfSpeech: "noun",
  definition: "a series of lines of varying width that can be read by a scanner",
  example: "Scan the barcode at the checkout to get the price.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "bargain",
  partOfSpeech: "noun/verb",
  definition: "(n) a good deal or agreement; (v) to negotiate terms",
  example: "We got a bargain on the office furniture at the auction.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "basic",
  partOfSpeech: "adjective",
  definition: "fundamental; essential; forming the basis",
  example: "All employees must complete basic safety training.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "behave",
  partOfSpeech: "verb",
  definition: "to act or conduct oneself in a specified way",
  example: "Employees are expected to behave professionally at all times.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "belongings",
  partOfSpeech: "noun",
  definition: "personal possessions or items owned by someone",
  example: "Please don't leave personal belongings in the conference room.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "beneficial",
  partOfSpeech: "adjective",
  definition: "favorable or advantageous; producing good results",
  example: "Regular exercise is beneficial for employee health and productivity.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "benefit",
  partOfSpeech: "noun/verb",
  definition: "(n) an advantage; (v) to receive advantage",
  example: "Health insurance is one of the benefits we offer employees.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "beverage",
  partOfSpeech: "noun",
  definition: "a drink, especially one other than water",
  example: "Coffee and other beverages are provided in the break room.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "bid",
  partOfSpeech: "noun/verb",
  definition: "(n) an offer; (v) to offer a price",
  example: "Our company submitted a bid for the government contract.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "bill",
  partOfSpeech: "noun/verb",
  definition: "(n) an invoice; (v) to send a statement of charges",
  example: "Please pay the bill by the due date to avoid late fees.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "binder",
  partOfSpeech: "noun",
  definition: "a cover with rings for holding papers",
  example: "Keep all meeting notes in the project binder for easy reference.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "blanket",
  partOfSpeech: "noun/adjective",
  definition: "(n) a large piece of fabric; (adj) covering all cases",
  example: "The new policy represents a blanket ban on smoking.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "block",
  partOfSpeech: "noun/verb",
  definition: "(n) a solid piece; (v) to prevent movement or progress",
  example: "There's a block of meeting rooms on the third floor.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "board",
  partOfSpeech: "noun/verb",
  definition: "(n) a group of directors; (v) to get on a vehicle",
  example: "The board of directors meets quarterly to review strategy.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "boarding pass",
  partOfSpeech: "noun",
  definition: "a pass that allows a passenger to board a plane",
  example: "Present your boarding pass at the gate.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "boardroom",
  partOfSpeech: "noun",
  definition: "a room where a board of directors holds meetings",
  example: "The acquisition was finalized in the boardroom after lengthy discussions.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "boast",
  partOfSpeech: "verb",
  definition: "to possess with pride; to brag about",
  example: "Our facility boasts state-of-the-art equipment.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "book",
  partOfSpeech: "noun/verb",
  definition: "(n) a written work; (v) to reserve in advance",
  example: "I need to book a flight to Chicago for the conference.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "boost",
  partOfSpeech: "noun/verb",
  definition: "(n) an increase; (v) to improve or increase",
  example: "The marketing campaign gave sales a significant boost.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "bored",
  partOfSpeech: "adjective",
  definition: "feeling weary and restless through lack of interest",
  example: "Employees who are challenged at work rarely feel bored.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "borrow",
  partOfSpeech: "verb",
  definition: "to take and use something with intention of returning",
  example: "May I borrow your laptop for the presentation?",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "bother",
  partOfSpeech: "verb",
  definition: "to take trouble; to worry or disturb",
  example: "Please don't bother the manager with minor issues.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "bottom line",
  partOfSpeech: "noun",
  definition: "the final result; net profit or loss",
  example: "The bottom line is that we need to increase revenue.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "branch",
  partOfSpeech: "noun",
  definition: "a local office or shop of a business",
  example: "Our company has branches in 12 countries.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "brand",
  partOfSpeech: "noun/verb",
  definition: "(n) a product name; (v) to mark with a name",
  example: "Our brand represents quality and reliability.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "briefcase",
  partOfSpeech: "noun",
  definition: "a flat case for carrying papers and documents",
  example: "He carries important documents in his leather briefcase.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "briefing",
  partOfSpeech: "noun",
  definition: "a meeting to give information or instructions",
  example: "The team attended a briefing before the project launch.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "broadcast",
  partOfSpeech: "noun/verb",
  definition: "(n) a transmission; (v) to transmit by radio or TV",
  example: "The announcement will be broadcast to all employees.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "broaden",
  partOfSpeech: "verb",
  definition: "to make wider; to expand in scope",
  example: "We need to broaden our customer base to increase sales.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "browser",
  partOfSpeech: "noun",
  definition: "a software program for accessing websites",
  example: "The website works best on the latest browser versions.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "brush",
  partOfSpeech: "noun/verb",
  definition: "(n) a tool with bristles; (v) to clean with a brush",
  example: "Please brush up on your presentation skills before the meeting.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "budget",
  partOfSpeech: "noun/verb",
  definition: "(n) a financial plan; (v) to plan spending",
  example: "We need to approve the budget for the next fiscal year.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "bulletin",
  partOfSpeech: "noun",
  definition: "a short official statement or news report",
  example: "Check the bulletin board for company announcements.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "cabin crew",
  partOfSpeech: "noun",
  definition: "the staff responsible for passenger safety on aircraft",
  example: "The cabin crew demonstrated safety procedures before takeoff.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "cafeteria",
  partOfSpeech: "noun",
  definition: "a restaurant where customers serve themselves",
  example: "Employees can have lunch in the company cafeteria.",
  source: "Pass the TOEIC Test",
  difficulty: "easy"
},
  {
  word: "contract",
  partOfSpeech: "noun",
  definition: "a binding agreement that is enforceable by law",
  example: "The word 'contract' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "assurance",
  partOfSpeech: "noun",
  definition: "a binding commitment to do or give or refrain from something",
  example: "The word 'assurance' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "determine",
  partOfSpeech: "verb",
  definition: "find out or learn with certainty, as by making an inquiry",
  example: "The word 'determine' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "engage",
  partOfSpeech: "verb",
  definition: "consume all of one's attention or time",
  example: "The word 'engage' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "establish",
  partOfSpeech: "verb",
  definition: "set up or found",
  example: "The word 'establish' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "provision",
  partOfSpeech: "noun",
  definition: "the activity of supplying something",
  example: "The word 'provision' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "resolve",
  partOfSpeech: "verb",
  definition: "find a solution or answer",
  example: "The word 'resolve' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "specific",
  partOfSpeech: "adjective",
  definition: "stated explicitly or in detail",
  example: "The word 'specific' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "assure",
  partOfSpeech: "verb",
  definition: "inform positively and with certainty and confidence",
  example: "The word 'assure' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "cancel",
  partOfSpeech: "verb",
  definition: "declare null and void",
  example: "The word 'cancel' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "cancelled",
  partOfSpeech: "adjective",
  definition: "no longer planned or scheduled",
  example: "The word 'cancelled' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "obligation",
  partOfSpeech: "noun",
  definition: "the state of being bound to do or pay something",
  example: "The word 'obligation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "obligatory",
  partOfSpeech: "adjective",
  definition: "required by compulsion or convention",
  example: "The word 'obligatory' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "provide",
  partOfSpeech: "verb",
  definition: "give something useful or necessary to",
  example: "The word 'provide' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "specify",
  partOfSpeech: "verb",
  definition: "be particular about",
  example: "The word 'specify' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "specification",
  partOfSpeech: "noun",
  definition: "the act of naming explicitly",
  example: "The word 'specification' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "attract",
  partOfSpeech: "verb",
  definition: "exert a force on",
  example: "The word 'attract' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "compare",
  partOfSpeech: "verb",
  definition: "examine and note the similarities or differences of",
  example: "The word 'compare' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "competition",
  partOfSpeech: "noun",
  definition: "the act of contending with others for rewards or resources",
  example: "The word 'competition' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "consume",
  partOfSpeech: "verb",
  definition: "take in as food",
  example: "The word 'consume' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "convince",
  partOfSpeech: "verb",
  definition: "make realize the truth or validity of something",
  example: "The word 'convince' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "fad",
  partOfSpeech: "noun",
  definition: "an interest followed with exaggerated zeal",
  example: "The word 'fad' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "inspiration",
  partOfSpeech: "noun",
  definition: "arousal of the mind to unusual activity or creativity",
  example: "The word 'inspiration' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "persuasion",
  partOfSpeech: "noun",
  definition: "communication intended to induce belief or action",
  example: "The word 'persuasion' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "productive",
  partOfSpeech: "adjective",
  definition: "capable of bringing forth, especially abundantly",
  example: "The word 'productive' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "attraction",
  partOfSpeech: "noun",
  definition: "the quality of arousing interest",
  example: "The word 'attraction' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "attractive",
  partOfSpeech: "adjective",
  definition: "pleasing to the eye or mind as through beauty or charm",
  example: "The word 'attractive' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "comparison",
  partOfSpeech: "noun",
  definition: "the act of examining resemblances",
  example: "The word 'comparison' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "comparable",
  partOfSpeech: "adjective",
  definition: "able to be described as similar",
  example: "The word 'comparable' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "compete",
  partOfSpeech: "verb",
  definition: "engage in a contest or measure oneself against others",
  example: "The word 'compete' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "competitive",
  partOfSpeech: "adjective",
  definition: "involving rivalry over something",
  example: "The word 'competitive' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "consumer",
  partOfSpeech: "noun",
  definition: "a person who uses goods or services",
  example: "The word 'consumer' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "satisfy",
  partOfSpeech: "verb",
  definition: "meet the requirements or expectations of",
  example: "The word 'satisfy' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "satisfactory",
  partOfSpeech: "adjective",
  definition: "giving contentment",
  example: "The word 'satisfactory' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "characteristic",
  partOfSpeech: "adjective",
  definition: "typical or distinctive",
  example: "The word 'characteristic' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "consequence",
  partOfSpeech: "noun",
  definition: "a phenomenon that is caused by some previous phenomenon",
  example: "The word 'consequence' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "consider",
  partOfSpeech: "verb",
  definition: "think about carefully; weigh",
  example: "The word 'consider' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "imply",
  partOfSpeech: "verb",
  definition: "express or state indirectly",
  example: "The word 'imply' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "promise",
  partOfSpeech: "noun",
  definition: "a verbal commitment agreeing to do something in the future",
  example: "The word 'promise' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "protect",
  partOfSpeech: "verb",
  definition: "shield from danger, injury, destruction, or damage",
  example: "The word 'protect' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "reputation",
  partOfSpeech: "noun",
  definition: "the general estimation that the public has for a person",
  example: "The word 'reputation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "require",
  partOfSpeech: "verb",
  definition: "have need of",
  example: "The word 'require' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "variety",
  partOfSpeech: "noun",
  definition: "a category of things distinguished by a common quality",
  example: "The word 'variety' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "characterize",
  partOfSpeech: "verb",
  definition: "be typical of",
  example: "The word 'characterize' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "consideration",
  partOfSpeech: "noun",
  definition: "the process of giving careful thought to something",
  example: "The word 'consideration' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "considerable",
  partOfSpeech: "adjective",
  definition: "large in number, amount, extent, or degree",
  example: "The word 'considerable' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "implication",
  partOfSpeech: "noun",
  definition: "something that is inferred",
  example: "The word 'implication' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "implicit",
  partOfSpeech: "adjective",
  definition: "suggested though not directly expressed",
  example: "The word 'implicit' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "protection",
  partOfSpeech: "noun",
  definition: "the activity of shielding someone or something",
  example: "The word 'protection' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "reputable",
  partOfSpeech: "adjective",
  definition: "held in high esteem and honor",
  example: "The word 'reputable' is commonly used in business English.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "repute",
  partOfSpeech: "noun",
  definition: "the state of being held in high esteem and honor",
  example: "The word 'repute' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "requirement",
  partOfSpeech: "noun",
  definition: "necessary activity",
  example: "The word 'requirement' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "requisite",
  partOfSpeech: "adjective",
  definition: "necessary for relief or supply",
  example: "The word 'requisite' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "address",
  partOfSpeech: "noun",
  definition: "the place where a person or organization can be found",
  example: "The word 'address' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "demonstrate",
  partOfSpeech: "verb",
  definition: "give an exhibition of to an interested audience",
  example: "The word 'demonstrate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "develop",
  partOfSpeech: "verb",
  definition: "progress or evolve through a process of natural growth",
  example: "The word 'develop' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "evaluate",
  partOfSpeech: "verb",
  definition: "estimate the nature, quality, ability or significance of",
  example: "The word 'evaluate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "gather",
  partOfSpeech: "verb",
  definition: "assemble or get together",
  example: "The word 'gather' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "primarily",
  partOfSpeech: "adverb",
  definition: "for the most part",
  example: "The word 'primarily' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "risk",
  partOfSpeech: "noun",
  definition: "a source of danger",
  example: "The word 'risk' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "strategy",
  partOfSpeech: "noun",
  definition: "an elaborate and systematic plan of action",
  example: "The word 'strategy' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "substitution",
  partOfSpeech: "noun",
  definition: "putting one thing or person in the place of another",
  example: "The word 'substitution' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "demonstration",
  partOfSpeech: "noun",
  definition: "a show or display",
  example: "The word 'demonstration' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "demonstrative",
  partOfSpeech: "adjective",
  definition: "a pronoun that points out an intended referent",
  example: "The word 'demonstrative' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "development",
  partOfSpeech: "noun",
  definition: "a process in which something passes to a different stage",
  example: "The word 'development' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "evaluation",
  partOfSpeech: "noun",
  definition: "the act of ascertaining or judging the quality of",
  example: "The word 'evaluation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "strategic",
  partOfSpeech: "adjective",
  definition: "relating to an elaborate and systematic plan of action",
  example: "The word 'strategic' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "substitute",
  partOfSpeech: "noun",
  definition: "a person or thing that can take the place of another",
  example: "The word 'substitute' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "conference",
  partOfSpeech: "noun",
  definition: "a prearranged meeting for consultation or discussion",
  example: "The word 'conference' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "accommodate",
  partOfSpeech: "verb",
  definition: "have room for; hold without crowding",
  example: "The word 'accommodate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "attend",
  partOfSpeech: "verb",
  definition: "be present",
  example: "The word 'attend' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "location",
  partOfSpeech: "noun",
  definition: "the act of putting something in a certain place",
  example: "The word 'location' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "register",
  partOfSpeech: "noun",
  definition: "an official written record of names or events",
  example: "The word 'register' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "select",
  partOfSpeech: "verb",
  definition: "pick out or choose from a number of alternatives",
  example: "The word 'select' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "session",
  partOfSpeech: "noun",
  definition: "a meeting for execution of a group's functions",
  example: "The word 'session' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "accommodation",
  partOfSpeech: "noun",
  definition: "making or becoming suitable; adjusting to circumstances",
  example: "The word 'accommodation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "accommodating",
  partOfSpeech: "adjective",
  definition: "obliging; willing to do favors",
  example: "The word 'accommodating' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "arrange",
  partOfSpeech: "verb",
  definition: "put into a proper or systematic order",
  example: "The word 'arrange' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "associate",
  partOfSpeech: "verb",
  definition: "bring or come into action",
  example: "The word 'associate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "attendance",
  partOfSpeech: "noun",
  definition: "the act of being present at a meeting or event",
  example: "The word 'attendance' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "selection",
  partOfSpeech: "noun",
  definition: "the act of choosing",
  example: "The word 'selection' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "selective",
  partOfSpeech: "adjective",
  definition: "characterized by very careful or fastidious choice",
  example: "The word 'selective' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "registration",
  partOfSpeech: "noun",
  definition: "the act of registering for something",
  example: "The word 'registration' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "access",
  partOfSpeech: "noun",
  definition: "the right to enter",
  example: "The word 'access' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "allocate",
  partOfSpeech: "verb",
  definition: "distribute according to a plan or set apart for a purpose",
  example: "The word 'allocate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "compatible",
  partOfSpeech: "adjective",
  definition: "able to exist and perform in harmonious combination",
  example: "The word 'compatible' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "delete",
  partOfSpeech: "verb",
  definition: "cut or eliminate",
  example: "The word 'delete' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "display",
  partOfSpeech: "noun",
  definition: "something intended to communicate a particular impression",
  example: "The word 'display' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "duplicate",
  partOfSpeech: "noun",
  definition: "a copy that corresponds to an original exactly",
  example: "The word 'duplicate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "failure",
  partOfSpeech: "noun",
  definition: "an act that does not succeed",
  example: "The word 'failure' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "ignore",
  partOfSpeech: "verb",
  definition: "refuse to acknowledge",
  example: "The word 'ignore' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "search",
  partOfSpeech: "verb",
  definition: "look or seek",
  example: "The word 'search' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "accessible",
  partOfSpeech: "adjective",
  definition: "capable of being reached",
  example: "The word 'accessible' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "allocation",
  partOfSpeech: "noun",
  definition: "the act of distributing or apportioning according to a plan",
  example: "The word 'allocation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "capacity",
  partOfSpeech: "noun",
  definition: "capability to perform or produce",
  example: "The word 'capacity' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "durable",
  partOfSpeech: "adjective",
  definition: "existing for a long time",
  example: "The word 'durable' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "initiative",
  partOfSpeech: "noun",
  definition: "readiness to embark on bold new ventures",
  example: "The word 'initiative' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "recur",
  partOfSpeech: "verb",
  definition: "happen or occur again",
  example: "The word 'recur' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "reduction",
  partOfSpeech: "noun",
  definition: "the act of decreasing something",
  example: "The word 'reduction' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "stock",
  partOfSpeech: "noun",
  definition: "a supply of something available for future use",
  example: "The word 'stock' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "afford",
  partOfSpeech: "verb",
  definition: "have the financial means to do something or buy something",
  example: "The word 'afford' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "initiation",
  partOfSpeech: "noun",
  definition: "the act of starting something for the first time",
  example: "The word 'initiation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "physical",
  partOfSpeech: "adjective",
  definition: "involving the body as distinguished from the mind or spirit",
  example: "The word 'physical' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "recurrence",
  partOfSpeech: "noun",
  definition: "event of happening again, especially at regular intervals",
  example: "The word 'recurrence' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "appreciation",
  partOfSpeech: "noun",
  definition: "understanding of the nature or meaning of something",
  example: "The word 'appreciation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "code",
  partOfSpeech: "noun",
  definition: "a set of rules or principles or laws",
  example: "The word 'code' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "expose",
  partOfSpeech: "verb",
  definition: "make visible or apparent",
  example: "The word 'expose' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "glimpse",
  partOfSpeech: "noun",
  definition: "a brief or incomplete view",
  example: "The word 'glimpse' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "practice",
  partOfSpeech: "noun",
  definition: "a customary way of operation or behavior",
  example: "The word 'practice' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "reinforce",
  partOfSpeech: "verb",
  definition: "strengthen and support",
  example: "The word 'reinforce' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "appreciate",
  partOfSpeech: "verb",
  definition: "be fully aware of; realize fully",
  example: "The word 'appreciate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "exposure",
  partOfSpeech: "noun",
  definition: "the state of being exposed to harm",
  example: "The word 'exposure' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "practical",
  partOfSpeech: "adjective",
  definition: "guided by experience and observation rather than theory",
  example: "The word 'practical' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "reinforcement",
  partOfSpeech: "noun",
  definition: "an act performed to strengthen approved behavior",
  example: "The word 'reinforcement' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "verbalize",
  partOfSpeech: "verb",
  definition: "express in speech",
  example: "The word 'verbalize' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "verbal",
  partOfSpeech: "adjective",
  definition: "of or relating to or formed from words in general",
  example: "The word 'verbal' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "facilitate",
  partOfSpeech: "verb",
  definition: "make easier",
  example: "The word 'facilitate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "network",
  partOfSpeech: "noun",
  definition: "an open fabric woven together at regular intervals",
  example: "The word 'network' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "process",
  partOfSpeech: "noun",
  definition: "a particular course of action intended to achieve a result",
  example: "The word 'process' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "replace",
  partOfSpeech: "verb",
  definition: "put something back where it belongs",
  example: "The word 'replace' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "revolution",
  partOfSpeech: "noun",
  definition: "a single complete turn",
  example: "The word 'revolution' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "skill",
  partOfSpeech: "noun",
  definition: "an ability that has been acquired by training",
  example: "The word 'skill' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "software",
  partOfSpeech: "noun",
  definition: "written programs operating on a computer system",
  example: "The word 'software' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "store",
  partOfSpeech: "noun",
  definition: "a mercantile establishment for the sale of goods or services",
  example: "The word 'store' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "revolutionary",
  partOfSpeech: "adjective",
  definition: "markedly new or introducing radical change",
  example: "The word 'revolutionary' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "technical",
  partOfSpeech: "adjective",
  definition: "of or relating to aptitude in a practical skill",
  example: "The word 'technical' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "assemble",
  partOfSpeech: "verb",
  definition: "create by putting components or members together",
  example: "The word 'assemble' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "courier",
  partOfSpeech: "noun",
  definition: "a person who carries a message",
  example: "The word 'courier' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "mention",
  partOfSpeech: "verb",
  definition: "make reference to",
  example: "The word 'mention' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "petition",
  partOfSpeech: "noun",
  definition: "a formal request that something be submitted to an authority",
  example: "The word 'petition' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "revise",
  partOfSpeech: "verb",
  definition: "make changes to",
  example: "The word 'revise' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "complicate",
  partOfSpeech: "verb",
  definition: "make less simple",
  example: "The word 'complicate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "complicated",
  partOfSpeech: "adjective",
  definition: "difficult to analyze or understand",
  example: "The word 'complicated' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "revised",
  partOfSpeech: "adjective",
  definition: "improved or brought up to date",
  example: "The word 'revised' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "revision",
  partOfSpeech: "noun",
  definition: "the act of altering",
  example: "The word 'revision' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "abundant",
  partOfSpeech: "adjective",
  definition: "present in great quantity",
  example: "The word 'abundant' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "accomplishment",
  partOfSpeech: "noun",
  definition: "the action of achieving something",
  example: "The word 'accomplishment' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "candidate",
  partOfSpeech: "noun",
  definition: "someone who is considered for something",
  example: "The word 'candidate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "commensurate",
  partOfSpeech: "adjective",
  definition: "corresponding in size or degree or extent",
  example: "The word 'commensurate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "profile",
  partOfSpeech: "noun",
  definition: "an outline of something, especially a face from the side",
  example: "The word 'profile' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "qualification",
  partOfSpeech: "noun",
  definition: "the act of modifying or changing the strength of some idea",
  example: "The word 'qualification' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "recruit",
  partOfSpeech: "verb",
  definition: "cause to assemble or enlist in the military",
  example: "The word 'recruit' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "submit",
  partOfSpeech: "verb",
  definition: "yield to the control of another",
  example: "The word 'submit' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "accomplish",
  partOfSpeech: "verb",
  definition: "achieve with effort",
  example: "The word 'accomplish' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "qualify",
  partOfSpeech: "verb",
  definition: "prove capable or fit; meet requirements",
  example: "The word 'qualify' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "qualified",
  partOfSpeech: "adjective",
  definition: "meeting the proper standards and requirements for a task",
  example: "The word 'qualified' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "apply",
  partOfSpeech: "verb",
  definition: "employ for a particular purpose",
  example: "The word 'apply' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "background",
  partOfSpeech: "noun",
  definition: "the part of a scene behind objects in the front",
  example: "The word 'background' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "confidence",
  partOfSpeech: "noun",
  definition: "belief in yourself and your abilities",
  example: "The word 'confidence' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "expert",
  partOfSpeech: "noun",
  definition: "a person with special knowledge who performs skillfully",
  example: "The word 'expert' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "hesitant",
  partOfSpeech: "adjective",
  definition: "unable to act or decide quickly or firmly",
  example: "The word 'hesitant' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "application",
  partOfSpeech: "noun",
  definition: "the action of putting something into operation",
  example: "The word 'application' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "expertise",
  partOfSpeech: "noun",
  definition: "skillfulness by virtue of possessing special knowledge",
  example: "The word 'expertise' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "hesitation",
  partOfSpeech: "noun",
  definition: "the act of pausing uncertainly",
  example: "The word 'hesitation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "presentation",
  partOfSpeech: "noun",
  definition: "the act of formally giving something, as a prize",
  example: "The word 'presentation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "conduct",
  partOfSpeech: "noun",
  definition: "the way a person behaves toward other people",
  example: "The word 'conduct' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "generate",
  partOfSpeech: "verb",
  definition: "bring into existence",
  example: "The word 'generate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "mentor",
  partOfSpeech: "noun",
  definition: "a wise and trusted guide and advisor",
  example: "The word 'mentor' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "reject",
  partOfSpeech: "verb",
  definition: "refuse to accept or acknowledge",
  example: "The word 'reject' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "success",
  partOfSpeech: "noun",
  definition: "an event that accomplishes its intended purpose",
  example: "The word 'success' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "conductor",
  partOfSpeech: "noun",
  definition: "the person who leads a musical group",
  example: "The word 'conductor' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "rejection",
  partOfSpeech: "noun",
  definition: "the act of turning something down",
  example: "The word 'rejection' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "succeed",
  partOfSpeech: "verb",
  definition: "attain success or reach a desired goal",
  example: "The word 'succeed' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "basis",
  partOfSpeech: "noun",
  definition: "the fundamental assumptions from which something is begun",
  example: "The word 'basis' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "aware",
  partOfSpeech: "adjective",
  definition: "having or showing knowledge or understanding or realization",
  example: "The word 'aware' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "benefit",
  partOfSpeech: "noun",
  definition: "something that aids or promotes well-being",
  example: "The word 'benefit' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "compensate",
  partOfSpeech: "verb",
  definition: "make amends for",
  example: "The word 'compensate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "eligible",
  partOfSpeech: "adjective",
  definition: "qualified for or allowed or worthy of being chosen",
  example: "The word 'eligible' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "negotiate",
  partOfSpeech: "verb",
  definition: "discuss the terms of an arrangement",
  example: "The word 'negotiate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "raise",
  partOfSpeech: "verb",
  definition: "move upwards",
  example: "The word 'raise' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "retire",
  partOfSpeech: "verb",
  definition: "withdraw from active participation",
  example: "The word 'retire' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "base",
  partOfSpeech: "noun",
  definition: "lowest support of a structure",
  example: "The word 'base' is commonly used in business English.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "beneficial",
  partOfSpeech: "adjective",
  definition: "promoting or enhancing well-being",
  example: "The word 'beneficial' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "compensation",
  partOfSpeech: "noun",
  definition: "the act of making amends for service, loss, or injury",
  example: "The word 'compensation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "flexible",
  partOfSpeech: "adjective",
  definition: "able to bend easily",
  example: "The word 'flexible' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "flexibility",
  partOfSpeech: "noun",
  definition: "the property of being easily bent or shaped",
  example: "The word 'flexibility' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "negotiation",
  partOfSpeech: "noun",
  definition: "a discussion intended to produce an agreement",
  example: "The word 'negotiation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "achievement",
  partOfSpeech: "noun",
  definition: "the action of accomplishing something",
  example: "The word 'achievement' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "contribute",
  partOfSpeech: "verb",
  definition: "give, provide, or supply something",
  example: "The word 'contribute' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "dedication",
  partOfSpeech: "noun",
  definition: "complete and wholehearted fidelity",
  example: "The word 'dedication' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "loyal",
  partOfSpeech: "adjective",
  definition: "steadfast in allegiance or duty",
  example: "The word 'loyal' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "merit",
  partOfSpeech: "noun",
  definition: "the quality of being deserving",
  example: "The word 'merit' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "obviously",
  partOfSpeech: "adverb",
  definition: "unmistakably",
  example: "The word 'obviously' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "promote",
  partOfSpeech: "verb",
  definition: "assign to a higher position",
  example: "The word 'promote' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "recognition",
  partOfSpeech: "noun",
  definition: "identifying something or someone by remembering",
  example: "The word 'recognition' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "value",
  partOfSpeech: "noun",
  definition: "the quality that renders something desirable",
  example: "The word 'value' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "achieve",
  partOfSpeech: "verb",
  definition: "gain with effort",
  example: "The word 'achieve' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "contribution",
  partOfSpeech: "noun",
  definition: "a voluntary gift made to some worthwhile cause",
  example: "The word 'contribution' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "contributor",
  partOfSpeech: "noun",
  definition: "a writer published in a periodical or as part of a book",
  example: "The word 'contributor' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "dedicate",
  partOfSpeech: "verb",
  definition: "give entirely to a specific person, activity, or cause",
  example: "The word 'dedicate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "loyalty",
  partOfSpeech: "noun",
  definition: "the quality of being steadfast in allegiance or duty",
  example: "The word 'loyalty' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "product",
  partOfSpeech: "noun",
  definition: "an artifact that has been created by someone or some process",
  example: "The word 'product' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "promotion",
  partOfSpeech: "noun",
  definition: "the act of raising in rank or position",
  example: "The word 'promotion' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "promoter",
  partOfSpeech: "noun",
  definition: "someone who is an active supporter and advocate",
  example: "The word 'promoter' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "bargain",
  partOfSpeech: "noun",
  definition: "an agreement between parties fixing obligations of each",
  example: "The word 'bargain' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "behavior",
  partOfSpeech: "noun",
  definition: "the way a person acts toward other people",
  example: "The word 'behavior' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "comfort",
  partOfSpeech: "noun",
  definition: "a state of being relaxed and feeling no pain",
  example: "The word 'comfort' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "expand",
  partOfSpeech: "verb",
  definition: "extend in one or more directions",
  example: "The word 'expand' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "explore",
  partOfSpeech: "verb",
  definition: "travel to or penetrate into",
  example: "The word 'explore' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "item",
  partOfSpeech: "noun",
  definition: "a distinct part that can be specified separately in a group",
  example: "The word 'item' is commonly used in business English.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "mandatory",
  partOfSpeech: "adjective",
  definition: "required by rule",
  example: "The word 'mandatory' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "merchandise",
  partOfSpeech: "noun",
  definition: "commodities offered for sale",
  example: "The word 'merchandise' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "trend",
  partOfSpeech: "noun",
  definition: "a general tendency to change, as of opinion",
  example: "The word 'trend' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "comfortable",
  partOfSpeech: "adjective",
  definition: "providing or experiencing physical well-being or relief",
  example: "The word 'comfortable' is commonly used in business English.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "expansion",
  partOfSpeech: "noun",
  definition: "the act of increasing in size or volume or quantity or scope",
  example: "The word 'expansion' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "expanded",
  partOfSpeech: "adjective",
  definition: "increased in extent or size or bulk or scope",
  example: "The word 'expanded' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "exploration",
  partOfSpeech: "noun",
  definition: "travel for the purpose of discovery",
  example: "The word 'exploration' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "mandate",
  partOfSpeech: "noun",
  definition: "a formal statement of a command to do something",
  example: "The word 'mandate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "strict",
  partOfSpeech: "adjective",
  definition: "rigidly accurate; allowing no deviation from a standard",
  example: "The word 'strict' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "diversify",
  partOfSpeech: "verb",
  definition: "vary in order to spread risk or to expand",
  example: "The word 'diversify' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "enterprise",
  partOfSpeech: "noun",
  definition: "a purposeful or industrious undertaking",
  example: "The word 'enterprise' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "essentially",
  partOfSpeech: "adverb",
  definition: "at bottom or by something's very nature",
  example: "The word 'essentially' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "everyday",
  partOfSpeech: "adjective",
  definition: "commonplace and ordinary",
  example: "The word 'everyday' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "function",
  partOfSpeech: "noun",
  definition: "what something is used for",
  example: "The word 'function' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "maintain",
  partOfSpeech: "verb",
  definition: "keep in a certain state, position, or activity",
  example: "The word 'maintain' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "obtain",
  partOfSpeech: "verb",
  definition: "come into possession of",
  example: "The word 'obtain' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "prerequisite",
  partOfSpeech: "noun",
  definition: "something that is needed or obligatory in advance",
  example: "The word 'prerequisite' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "quality",
  partOfSpeech: "noun",
  definition: "an essential and distinguishing attribute of something",
  example: "The word 'quality' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "smooth",
  partOfSpeech: "adjective",
  definition: "having a surface free from roughness or irregularities",
  example: "The word 'smooth' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "source",
  partOfSpeech: "noun",
  definition: "the place where something begins",
  example: "The word 'source' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "stationery",
  partOfSpeech: "noun",
  definition: "paper cut to an appropriate size for writing letters",
  example: "The word 'stationery' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "diverse",
  partOfSpeech: "adjective",
  definition: "distinctly dissimilar or unlike",
  example: "The word 'diverse' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "enterprising",
  partOfSpeech: "adjective",
  definition: "marked by initiative and readiness to undertake new projects",
  example: "The word 'enterprising' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "essential",
  partOfSpeech: "adjective",
  definition: "basic and fundamental",
  example: "The word 'essential' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "essence",
  partOfSpeech: "noun",
  definition: "the choicest or most vital part of some idea or experience",
  example: "The word 'essence' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "functional",
  partOfSpeech: "adjective",
  definition: "designed for or capable of a particular use",
  example: "The word 'functional' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "carrier",
  partOfSpeech: "noun",
  definition: "a person or firm transporting people or goods or messages",
  example: "The word 'carrier' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "fulfill",
  partOfSpeech: "verb",
  definition: "meet a want or need",
  example: "The word 'fulfill' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "inventory",
  partOfSpeech: "noun",
  definition: "a detailed list of all the items in stock",
  example: "The word 'inventory' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "minimize",
  partOfSpeech: "verb",
  definition: "make small or insignificant",
  example: "The word 'minimize' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "supply",
  partOfSpeech: "verb",
  definition: "circulate or distribute or equip with",
  example: "The word 'supply' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "accuracy",
  partOfSpeech: "noun",
  definition: "the quality of being near to the true value",
  example: "The word 'accuracy' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "accurate",
  partOfSpeech: "adjective",
  definition: "characterized by perfect conformity to fact or truth",
  example: "The word 'accurate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "integrate",
  partOfSpeech: "verb",
  definition: "make into a whole or make part of a whole",
  example: "The word 'integrate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "integration",
  partOfSpeech: "noun",
  definition: "the act of combining into a whole",
  example: "The word 'integration' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "minimal",
  partOfSpeech: "adjective",
  definition: "the least possible",
  example: "The word 'minimal' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "minimum",
  partOfSpeech: "noun",
  definition: "the smallest possible quantity",
  example: "The word 'minimum' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "suffice",
  partOfSpeech: "verb",
  definition: "be adequate, either in quality or quantity",
  example: "The word 'suffice' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "sufficient",
  partOfSpeech: "adjective",
  definition: "of a quantity that can fulfill a need or requirement",
  example: "The word 'sufficient' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "compile",
  partOfSpeech: "verb",
  definition: "get or gather together",
  example: "The word 'compile' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "discount",
  partOfSpeech: "noun",
  definition: "an amount or percentage deducted",
  example: "The word 'discount' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "efficient",
  partOfSpeech: "adjective",
  definition: "being effective without wasting time, effort, or expense",
  example: "The word 'efficient' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "estimate",
  partOfSpeech: "verb",
  definition: "judge tentatively",
  example: "The word 'estimate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "impose",
  partOfSpeech: "verb",
  definition: "charge and collect payment",
  example: "The word 'impose' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "mistake",
  partOfSpeech: "noun",
  definition: "a wrong action attributable to bad judgment or inattention",
  example: "The word 'mistake' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "promptly",
  partOfSpeech: "adverb",
  definition: "with little or no delay",
  example: "The word 'promptly' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "rectify",
  partOfSpeech: "verb",
  definition: "make right or correct",
  example: "The word 'rectify' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "estimation",
  partOfSpeech: "noun",
  definition: "an approximate calculation of quantity or degree or worth",
  example: "The word 'estimation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "imposition",
  partOfSpeech: "noun",
  definition: "the act of enforcing something",
  example: "The word 'imposition' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "imposing",
  partOfSpeech: "adjective",
  definition: "befitting an important, distinguished, or powerful person",
  example: "The word 'imposing' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "prompt",
  partOfSpeech: "adjective",
  definition: "according to schedule or without delay",
  example: "The word 'prompt' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "adjustment",
  partOfSpeech: "noun",
  definition: "the act of making something different",
  example: "The word 'adjustment' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "crucial",
  partOfSpeech: "adjective",
  definition: "of extreme importance; vital to the resolution of a crisis",
  example: "The word 'crucial' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "discrepancy",
  partOfSpeech: "noun",
  definition: "a difference between conflicting facts or claims or opinions",
  example: "The word 'discrepancy' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "disturb",
  partOfSpeech: "verb",
  definition: "trouble deeply",
  example: "The word 'disturb' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "liability",
  partOfSpeech: "noun",
  definition: "the state of being legally obliged and responsible",
  example: "The word 'liability' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "reflection",
  partOfSpeech: "noun",
  definition: "the phenomenon of a wave being thrown back from a surface",
  example: "The word 'reflection' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "tedious",
  partOfSpeech: "adjective",
  definition: "so lacking in interest as to cause mental weariness",
  example: "The word 'tedious' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "verify",
  partOfSpeech: "verb",
  definition: "confirm the truth of",
  example: "The word 'verify' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "adjust",
  partOfSpeech: "verb",
  definition: "alter or regulate so as to conform to a standard",
  example: "The word 'adjust' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "automatic",
  partOfSpeech: "adjective",
  definition: "operating with minimal human intervention",
  example: "The word 'automatic' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "automation",
  partOfSpeech: "noun",
  definition: "the act of implementing the control of equipment",
  example: "The word 'automation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "reflect",
  partOfSpeech: "verb",
  definition: "throw or bend back from a surface",
  example: "The word 'reflect' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "accept",
  partOfSpeech: "verb",
  definition: "receive willingly something given or offered",
  example: "The word 'accept' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "balance",
  partOfSpeech: "noun",
  definition: "harmonious arrangement or relation of parts within a whole",
  example: "The word 'balance' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "borrow",
  partOfSpeech: "verb",
  definition: "get temporarily",
  example: "The word 'borrow' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "dividend",
  partOfSpeech: "noun",
  definition: "a number to be divided by another number",
  example: "The word 'dividend' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "mortgage",
  partOfSpeech: "noun",
  definition: "a conveyance of property as security for repaying a loan",
  example: "The word 'mortgage' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "restricted",
  partOfSpeech: "adjective",
  definition: "subject to an act of limitation",
  example: "The word 'restricted' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "signature",
  partOfSpeech: "noun",
  definition: "your name written in your own handwriting",
  example: "The word 'signature' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "transaction",
  partOfSpeech: "noun",
  definition: "conducting business within or between groups",
  example: "The word 'transaction' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "acceptance",
  partOfSpeech: "noun",
  definition: "the state of being satisfactory",
  example: "The word 'acceptance' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "acceptable",
  partOfSpeech: "adjective",
  definition: "worthy of approval or satisfactory",
  example: "The word 'acceptable' is commonly used in business English.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "caution",
  partOfSpeech: "noun",
  definition: "judiciousness in avoiding harm or danger",
  example: "The word 'caution' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "cautious",
  partOfSpeech: "adjective",
  definition: "showing careful forethought",
  example: "The word 'cautious' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "deduction",
  partOfSpeech: "noun",
  definition: "the act of removing a part from the whole",
  example: "The word 'deduction' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "restrict",
  partOfSpeech: "verb",
  definition: "limit access to",
  example: "The word 'restrict' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "restriction",
  partOfSpeech: "noun",
  definition: "an act of limiting",
  example: "The word 'restriction' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "transact",
  partOfSpeech: "verb",
  definition: "conduct business",
  example: "The word 'transact' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "accumulate",
  partOfSpeech: "verb",
  definition: "get or gather together",
  example: "The word 'accumulate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "asset",
  partOfSpeech: "noun",
  definition: "a useful or valuable quality",
  example: "The word 'asset' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "audit",
  partOfSpeech: "verb",
  definition: "examine carefully for accuracy",
  example: "The word 'audit' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "budget",
  partOfSpeech: "noun",
  definition: "a summary of intended expenditures",
  example: "The word 'budget' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "debt",
  partOfSpeech: "noun",
  definition: "the state of owing something, especially money",
  example: "The word 'debt' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "outstanding",
  partOfSpeech: "adjective",
  definition: "of major significance or importance",
  example: "The word 'outstanding' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "reconcile",
  partOfSpeech: "verb",
  definition: "come to terms",
  example: "The word 'reconcile' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "accumulation",
  partOfSpeech: "noun",
  definition: "a gain or increase in something over time",
  example: "The word 'accumulation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "profit",
  partOfSpeech: "noun",
  definition: "the advantageous quality of being beneficial",
  example: "The word 'profit' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "attitude",
  partOfSpeech: "noun",
  definition: "a complex mental state involving beliefs and feelings",
  example: "The word 'attitude' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "commit",
  partOfSpeech: "verb",
  definition: "engage in or perform",
  example: "The word 'commit' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "conservative",
  partOfSpeech: "adjective",
  definition: "resistant to change",
  example: "The word 'conservative' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "fund",
  partOfSpeech: "noun",
  definition: "a reserve of money set aside for some purpose",
  example: "The word 'fund' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "invest",
  partOfSpeech: "verb",
  definition: "lay out money or resources in an enterprise",
  example: "The word 'invest' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "portfolio",
  partOfSpeech: "noun",
  definition: "a large, thin case for loose papers or drawings or maps",
  example: "The word 'portfolio' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "resource",
  partOfSpeech: "noun",
  definition: "aid or support that may be drawn upon when needed",
  example: "The word 'resource' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "aggression",
  partOfSpeech: "noun",
  definition: "a disposition to behave forcefully and energetically",
  example: "The word 'aggression' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "commitment",
  partOfSpeech: "noun",
  definition: "the act of binding yourself to a course of action",
  example: "The word 'commitment' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "noncommittal",
  partOfSpeech: "adjective",
  definition: "refusing to bind oneself to a particular course of action",
  example: "The word 'noncommittal' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "conserve",
  partOfSpeech: "verb",
  definition: "keep in safety and protect from harm, loss, or destruction",
  example: "The word 'conserve' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "investment",
  partOfSpeech: "noun",
  definition: "laying out money or capital in an enterprise",
  example: "The word 'investment' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "investor",
  partOfSpeech: "noun",
  definition: "someone who commits capital to gain financial returns",
  example: "The word 'investor' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "wisdom",
  partOfSpeech: "noun",
  definition: "accumulated knowledge or erudition or enlightenment",
  example: "The word 'wisdom' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "wise",
  partOfSpeech: "adjective",
  definition: "having intelligence and discernment",
  example: "The word 'wise' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "joint",
  partOfSpeech: "noun",
  definition: "junction by which parts or objects are linked together",
  example: "The word 'joint' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "preparation",
  partOfSpeech: "noun",
  definition: "setting in order in advance some act or purpose",
  example: "The word 'preparation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "desire",
  partOfSpeech: "noun",
  definition: "the feeling that accompanies an unsatisfied state",
  example: "The word 'desire' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "forecast",
  partOfSpeech: "noun",
  definition: "a prediction about how something will develop",
  example: "The word 'forecast' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "level",
  partOfSpeech: "noun",
  definition: "a relative position or degree of value in a graded group",
  example: "The word 'level' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "overall",
  partOfSpeech: "adjective",
  definition: "involving only main features",
  example: "The word 'overall' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "perspective",
  partOfSpeech: "noun",
  definition: "a way of regarding situations or topics",
  example: "The word 'perspective' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "project",
  partOfSpeech: "noun",
  definition: "a planned undertaking",
  example: "The word 'project' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "realistic",
  partOfSpeech: "adjective",
  definition: "aware or expressing awareness of things as they are",
  example: "The word 'realistic' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "target",
  partOfSpeech: "noun",
  definition: "a reference point to shoot at",
  example: "The word 'target' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "translation",
  partOfSpeech: "noun",
  definition: "rendering in another language with the same meaning",
  example: "The word 'translation' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "yield",
  partOfSpeech: "verb",
  definition: "give or supply",
  example: "The word 'yield' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "adjacent",
  partOfSpeech: "adjective",
  definition: "having a common boundary or edge",
  example: "The word 'adjacent' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "collaboration",
  partOfSpeech: "noun",
  definition: "act of working jointly",
  example: "The word 'collaboration' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "concentrate",
  partOfSpeech: "verb",
  definition: "make denser, stronger, or purer",
  example: "The word 'concentrate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "conducive",
  partOfSpeech: "adjective",
  definition: "tending to bring about; being partly responsible for",
  example: "The word 'conducive' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "hamper",
  partOfSpeech: "verb",
  definition: "prevent the progress or free movement of",
  example: "The word 'hamper' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "lobby",
  partOfSpeech: "noun",
  definition: "a large entrance or reception room or area",
  example: "The word 'lobby' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "scrutiny",
  partOfSpeech: "noun",
  definition: "the act of examining something closely, as for mistakes",
  example: "The word 'scrutiny' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "collaborate",
  partOfSpeech: "verb",
  definition: "work together on a common enterprise or project",
  example: "The word 'collaborate' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "collaborative",
  partOfSpeech: "adjective",
  definition: "accomplished by working jointly",
  example: "The word 'collaborative' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "concentration",
  partOfSpeech: "noun",
  definition: "the spatial property of being crowded together",
  example: "The word 'concentration' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "concentrated",
  partOfSpeech: "adjective",
  definition: "gathered together or made less diffuse",
  example: "The word 'concentrated' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "disrupt",
  partOfSpeech: "verb",
  definition: "make a break in",
  example: "The word 'disrupt' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "option",
  partOfSpeech: "noun",
  definition: "one of a number of things from which only one can be chosen",
  example: "The word 'option' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "optional",
  partOfSpeech: "adjective",
  definition: "possible but not necessary; left to personal choice",
  example: "The word 'optional' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "scrutinize",
  partOfSpeech: "verb",
  definition: "examine carefully for accuracy",
  example: "The word 'scrutinize' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "inscrutable",
  partOfSpeech: "adjective",
  definition: "difficult or impossible to understand",
  example: "The word 'inscrutable' is commonly used in business English.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "agenda",
  partOfSpeech: "noun",
  definition: "a list of matters to be taken up, as at a meeting",
  example: "The word 'agenda' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "conclude",
  partOfSpeech: "verb",
  definition: "bring to a close",
  example: "The word 'conclude' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "goal",
  partOfSpeech: "noun",
  definition: "the state of affairs that a plan is intended to achieve",
  example: "The word 'goal' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "priority",
  partOfSpeech: "noun",
  definition: "status established in order of importance or urgency",
  example: "The word 'priority' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "progress",
  partOfSpeech: "noun",
  definition: "the act of moving forward, as toward a goal",
  example: "The word 'progress' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "adhere",
  partOfSpeech: "verb",
  definition: "stick to firmly",
  example: "The word 'adhere' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "length",
  partOfSpeech: "noun",
  definition: "the linear extent in space from one end to the other",
  example: "The word 'length' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "period",
  partOfSpeech: "noun",
  definition: "an amount of time",
  example: "The word 'period' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "periodic",
  partOfSpeech: "adjective",
  definition: "happening or recurring at regular intervals",
  example: "The word 'periodic' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "prior",
  partOfSpeech: "adjective",
  definition: "earlier in time",
  example: "The word 'prior' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "prioritize",
  partOfSpeech: "verb",
  definition: "assign a status in order of importance or urgency",
  example: "The word 'prioritize' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "progression",
  partOfSpeech: "noun",
  definition: "the act of moving forward, as toward a goal",
  example: "The word 'progression' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "progressive",
  partOfSpeech: "adjective",
  definition: "favoring or promoting modern or innovative ideas",
  example: "The word 'progressive' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "adherence",
  partOfSpeech: "noun",
  definition: "the property or act of sticking together",
  example: "The word 'adherence' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "adherent",
  partOfSpeech: "noun",
  definition: "someone who believes and helps to spread a doctrine",
  example: "The word 'adherent' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "conclusion",
  partOfSpeech: "noun",
  definition: "a position or opinion reached after consideration",
  example: "The word 'conclusion' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "conclusive",
  partOfSpeech: "adjective",
  definition: "forming a decisive end or resolution",
  example: "The word 'conclusive' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "conform",
  partOfSpeech: "verb",
  definition: "be similar, be in line with",
  example: "The word 'conform' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "defect",
  partOfSpeech: "noun",
  definition: "a failing or deficiency",
  example: "The word 'defect' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "enhance",
  partOfSpeech: "verb",
  definition: "increase",
  example: "The word 'enhance' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "garment",
  partOfSpeech: "noun",
  definition: "an article of clothing",
  example: "The word 'garment' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "inspect",
  partOfSpeech: "verb",
  definition: "look over carefully",
  example: "The word 'inspect' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "inspection",
  partOfSpeech: "noun",
  definition: "a formal or official examination",
  example: "The word 'inspection' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "inspector",
  partOfSpeech: "noun",
  definition: "an investigator who observes carefully",
  example: "The word 'inspector' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "perceptive",
  partOfSpeech: "adjective",
  definition: "of or relating to awareness via the senses",
  example: "The word 'perceptive' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "repel",
  partOfSpeech: "verb",
  definition: "force or drive back",
  example: "The word 'repel' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "repellent",
  partOfSpeech: "adjective",
  definition: "serving or tending to cause aversion",
  example: "The word 'repellent' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "uniform",
  partOfSpeech: "noun",
  definition: "clothing of distinctive design worn by members of a group",
  example: "The word 'uniform' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "uniformity",
  partOfSpeech: "noun",
  definition: "the quality of lacking diversity or variation",
  example: "The word 'uniformity' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "perceive",
  partOfSpeech: "verb",
  definition: "become aware of through the senses",
  example: "The word 'perceive' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "perception",
  partOfSpeech: "noun",
  definition: "the process of becoming aware through the senses",
  example: "The word 'perception' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "perceived",
  partOfSpeech: "adjective",
  definition: "detected by instinct or inference",
  example: "The word 'perceived' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "response",
  partOfSpeech: "noun",
  definition: "the speech act of continuing a conversational exchange",
  example: "The word 'response' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "anxious",
  partOfSpeech: "adjective",
  definition: "causing or fraught with or showing nervousness",
  example: "The word 'anxious' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "anxiety",
  partOfSpeech: "noun",
  definition: "a vague unpleasant emotion in anticipation of a misfortune",
  example: "The word 'anxiety' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "assume",
  partOfSpeech: "verb",
  definition: "take to be the case or to be true",
  example: "The word 'assume' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "assumption",
  partOfSpeech: "noun",
  definition: "the act of taking something for granted",
  example: "The word 'assumption' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "experiment",
  partOfSpeech: "noun",
  definition: "the act of conducting a controlled test or investigation",
  example: "The word 'experiment' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "logic",
  partOfSpeech: "noun",
  definition: "the branch of philosophy that analyzes inference",
  example: "The word 'logic' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "logical",
  partOfSpeech: "adjective",
  definition: "based on known statements or events or conditions",
  example: "The word 'logical' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "respond",
  partOfSpeech: "verb",
  definition: "show a reaction to something",
  example: "The word 'respond' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "respondent",
  partOfSpeech: "adjective",
  definition: "replying",
  example: "The word 'respondent' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "responsible",
  partOfSpeech: "adjective",
  definition: "worthy of or requiring trust; held accountable",
  example: "The word 'responsible' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "responsibility",
  partOfSpeech: "noun",
  definition: "the social force that binds you to a course of action",
  example: "The word 'responsibility' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "supervise",
  partOfSpeech: "verb",
  definition: "watch and direct",
  example: "The word 'supervise' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "ascertain",
  partOfSpeech: "verb",
  definition: "learn or discover with confidence",
  example: "The word 'ascertain' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "decade",
  partOfSpeech: "noun",
  definition: "a period of 10 years",
  example: "The word 'decade' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "decadent",
  partOfSpeech: "adjective",
  definition: "relating to indulgence in something pleasurable",
  example: "The word 'decadent' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "decadence",
  partOfSpeech: "noun",
  definition: "the state of being degenerate in mental or moral qualities",
  example: "The word 'decadence' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "examine",
  partOfSpeech: "verb",
  definition: "observe, check out, and look over carefully or inspect",
  example: "The word 'examine' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "research",
  partOfSpeech: "noun",
  definition: "a seeking for knowledge",
  example: "The word 'research' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "researcher",
  partOfSpeech: "noun",
  definition: "a scientist devoted to systematic investigation",
  example: "The word 'researcher' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "solve",
  partOfSpeech: "verb",
  definition: "find the answer to or understand the meaning of",
  example: "The word 'solve' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "solvent",
  partOfSpeech: "adjective",
  definition: "capable of meeting financial obligations",
  example: "The word 'solvent' is commonly used in business English.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "ASAP",
  partOfSpeech: "expression",
  definition: "As Soon As Possible - used to express urgency or the need for immediate action",
  example: "Using 'ASAP' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Backburner",
  partOfSpeech: "noun",
  definition: "To temporarily set aside a task or project that is not a priority",
  example: "Using 'Backburner' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Balls in the air",
  partOfSpeech: "idiom",
  definition: "Juggling multiple tasks or responsibilities simultaneously",
  example: "Using 'Balls in the air' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Too much on my plate",
  partOfSpeech: "idiom",
  definition: "Feeling overwhelmed with too many tasks or responsibilities",
  example: "Using 'Too much on my plate' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Boil the ocean",
  partOfSpeech: "idiom",
  definition: "Taking on a task that is too ambitious, impractical, or unnecessarily complex",
  example: "Using 'Boil the ocean' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Brain dump",
  partOfSpeech: "noun",
  definition: "Quickly transferring ideas or information from your mind onto paper or digital format",
  example: "Using 'Brain dump' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Game changer",
  partOfSpeech: "noun",
  definition: "Any idea, product, or decision that significantly alters the current situation",
  example: "Using 'Game changer' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Good to go",
  partOfSpeech: "expression",
  definition: "Something is complete, finalized, or ready for action",
  example: "Using 'Good to go' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Herding cats",
  partOfSpeech: "idiom",
  definition: "The challenge of managing disorganized or uncoordinated individuals or groups",
  example: "Using 'Herding cats' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Run it up the flagpole",
  partOfSpeech: "idiom",
  definition: "Proposing an idea to see how others react or seeking approval",
  example: "Using 'Run it up the flagpole' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Return on Investment (ROI)",
  partOfSpeech: "noun",
  definition: "The measurement of how much profit or value is gained from an investment",
  example: "Using 'Return on Investment (ROI)' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Profit margin",
  partOfSpeech: "noun",
  definition: "The percentage of revenue that remains as profit after all expenses",
  example: "Using 'Profit margin' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Cash flow",
  partOfSpeech: "noun",
  definition: "The net amount of cash moving in and out of a business",
  example: "Using 'Cash flow' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Assets",
  partOfSpeech: "noun",
  definition: "Valuable resources owned by a business such as buildings, inventory, or cash",
  example: "Using 'Assets' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "Liabilities",
  partOfSpeech: "noun",
  definition: "A company's financial obligations or debts including loans and accounts payable",
  example: "Using 'Liabilities' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Equity",
  partOfSpeech: "noun",
  definition: "The value remaining after liabilities are subtracted from assets",
  example: "Using 'Equity' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Break-even point",
  partOfSpeech: "noun",
  definition: "The point at which total revenue equals total costs",
  example: "Using 'Break-even point' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Diversification",
  partOfSpeech: "noun",
  definition: "A strategy that spreads investments across different assets to minimize risk",
  example: "Using 'Diversification' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Capital expenditure (CapEx)",
  partOfSpeech: "noun",
  definition: "Funds used to acquire or upgrade physical assets like equipment",
  example: "Using 'Capital expenditure (CapEx)' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Net worth",
  partOfSpeech: "noun",
  definition: "The total value calculated by subtracting liabilities from assets",
  example: "Using 'Net worth' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Target market",
  partOfSpeech: "noun",
  definition: "A defined group of potential customers toward whom marketing is directed",
  example: "Using 'Target market' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Value proposition",
  partOfSpeech: "noun",
  definition: "A statement explaining why customers should choose your product or service",
  example: "Using 'Value proposition' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Conversion rate",
  partOfSpeech: "noun",
  definition: "The percentage of users who complete a desired action",
  example: "Using 'Conversion rate' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Brand equity",
  partOfSpeech: "noun",
  definition: "The value and strength of a brand based on customer perception",
  example: "Using 'Brand equity' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Lead generation",
  partOfSpeech: "noun",
  definition: "The process of attracting potential customers",
  example: "Using 'Lead generation' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Customer journey",
  partOfSpeech: "noun",
  definition: "The total experience a customer has from discovery to purchase",
  example: "Using 'Customer journey' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Call to Action (CTA)",
  partOfSpeech: "noun",
  definition: "A prompt encouraging users to take a specific next step",
  example: "Using 'Call to Action (CTA)' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Upselling",
  partOfSpeech: "noun",
  definition: "A sales strategy encouraging customers to purchase higher-end products",
  example: "Using 'Upselling' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Market penetration",
  partOfSpeech: "noun",
  definition: "A strategy measuring how much a product is used in its market",
  example: "Using 'Market penetration' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Positioning statement",
  partOfSpeech: "noun",
  definition: "A statement defining how a brand differs from competitors",
  example: "Using 'Positioning statement' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Scope",
  partOfSpeech: "noun",
  definition: "The boundaries and deliverables of a project",
  example: "Using 'Scope' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "Milestone",
  partOfSpeech: "noun",
  definition: "A significant event or checkpoint in a project timeline",
  example: "Using 'Milestone' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Stakeholder",
  partOfSpeech: "noun",
  definition: "Any individual or group affected by a project or its outcome",
  example: "Using 'Stakeholder' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Gantt chart",
  partOfSpeech: "noun",
  definition: "A visual timeline outlining project tasks and dependencies",
  example: "Using 'Gantt chart' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Risk management",
  partOfSpeech: "noun",
  definition: "The process of identifying and mitigating potential risks",
  example: "Using 'Risk management' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Critical path",
  partOfSpeech: "noun",
  definition: "The sequence of dependent tasks determining project duration",
  example: "Using 'Critical path' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Resource allocation",
  partOfSpeech: "noun",
  definition: "The strategic assignment of people and tools to project tasks",
  example: "Using 'Resource allocation' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Work Breakdown Structure (WBS)",
  partOfSpeech: "noun",
  definition: "The hierarchical decomposition of a project into components",
  example: "Using 'Work Breakdown Structure (WBS)' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Agile",
  partOfSpeech: "noun",
  definition: "A project management methodology emphasizing iterative development",
  example: "Using 'Agile' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "medium"
},
  {
  word: "Deliverable",
  partOfSpeech: "noun",
  definition: "A specific output that must be completed as part of a project",
  example: "Using 'Deliverable' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Onboarding",
  partOfSpeech: "noun",
  definition: "The structured process of integrating a new employee into a company",
  example: "Using 'Onboarding' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Employee retention",
  partOfSpeech: "noun",
  definition: "Strategies used to keep valuable employees within the organization",
  example: "Using 'Employee retention' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Performance appraisal",
  partOfSpeech: "noun",
  definition: "Formal evaluations of an employee's work",
  example: "Using 'Performance appraisal' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Diversity & Inclusion (D&I)",
  partOfSpeech: "noun",
  definition: "Fostering a workplace that values varied backgrounds",
  example: "Using 'Diversity & Inclusion (D&I)' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Work-life balance",
  partOfSpeech: "noun",
  definition: "Balancing professional responsibilities with personal time",
  example: "Using 'Work-life balance' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Employee engagement",
  partOfSpeech: "noun",
  definition: "A worker's emotional commitment toward their organization",
  example: "Using 'Employee engagement' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Company culture",
  partOfSpeech: "noun",
  definition: "Shared values and behaviors that define the work environment",
  example: "Using 'Company culture' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Conflict resolution",
  partOfSpeech: "noun",
  definition: "Methods used to address disputes constructively",
  example: "Using 'Conflict resolution' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Succession planning",
  partOfSpeech: "noun",
  definition: "Identifying and developing internal candidates for leadership roles",
  example: "Using 'Succession planning' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "360-Degree feedback",
  partOfSpeech: "noun",
  definition: "Comprehensive performance reviews from peers and managers",
  example: "Using '360-Degree feedback' is common in professional business settings.",
  source: "Barron's TOEIC",
  difficulty: "hard"
},
  {
  word: "Touch base",
  partOfSpeech: "idiom",
  definition: "Briefly connecting or checking in with someone",
  example: "Using 'Touch base' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Circle back",
  partOfSpeech: "idiom",
  definition: "Revisiting a topic later when more information is available",
  example: "Using 'Circle back' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "On the same page",
  partOfSpeech: "idiom",
  definition: "Having mutual understanding or agreement",
  example: "Using 'On the same page' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Bandwidth",
  partOfSpeech: "noun",
  definition: "Someone's capacity to take on additional work",
  example: "Using 'Bandwidth' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Take it offline",
  partOfSpeech: "idiom",
  definition: "Moving a conversation to a more private setting",
  example: "Using 'Take it offline' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Loop in",
  partOfSpeech: "verb",
  definition: "Including someone in a conversation or email thread",
  example: "Using 'Loop in' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Action items",
  partOfSpeech: "noun",
  definition: "Specific tasks assigned after meetings",
  example: "Using 'Action items' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Stake your claim",
  partOfSpeech: "idiom",
  definition: "Confidently expressing your position or interest",
  example: "Using 'Stake your claim' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
},
  {
  word: "Ping me",
  partOfSpeech: "idiom",
  definition: "Message me or contact me",
  example: "Using 'Ping me' is common in professional business settings.",
  source: "Loora Business English",
  difficulty: "expert"
}
];

// Helper function to get words by letter
function getWordsByLetter(letter) {
  return vocabularyData.filter(word => word.word.startsWith(letter.toUpperCase()));
}

// Helper function to get random words for quizzes
function getRandomWords(count) {
  const shuffled = [...vocabularyData].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

// Helper function to get words by difficulty
function getWordsByDifficulty(difficulty) {
  return vocabularyData.filter(word => word.difficulty === difficulty);
}

// Helper function to get words by source
function getWordsBySource(source) {
  return vocabularyData.filter(word => word.source === source);
}

// Log the total count
console.log(`Total vocabulary words loaded: ${vocabularyData.length}`);

// Export for use in main application
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { vocabularyData, getWordsByLetter, getRandomWords, getWordsByDifficulty, getWordsBySource };
}