// TOEIC Part 5: Incomplete Sentences
// 100+ practice questions covering grammar and vocabulary
// Format: Single sentence with one blank, choose best option from 4 choices

const part5Questions = [
  // GRAMMAR QUESTIONS (40 questions)
  // Verb Tenses
  {
    id: 1,
    category: "grammar",
    topic: "verb tenses",
    question: "The company ________ its profits by 20% last year.",
    options: ["increased", "has increased", "increases", "is increasing"],
    answer: 0,
    explanation: "Use past simple tense 'increased' because 'last year' indicates a completed past time."
  },
  {
    id: 2,
    category: "grammar",
    topic: "verb tenses",
    question: "By the time you arrive, we ________ the presentation.",
    options: ["will finish", "will have finished", "finish", "are finishing"],
    answer: 1,
    explanation: "Use future perfect 'will have finished' for an action completed before a future time."
  },
  {
    id: 3,
    category: "grammar",
    topic: "verb tenses",
    question: "Ms. Johnson ________ for this company since 2015.",
    options: ["works", "is working", "has worked", "worked"],
    answer: 2,
    explanation: "Use present perfect 'has worked' with 'since' for an action continuing from past to present."
  },
  {
    id: 4,
    category: "grammar",
    topic: "passive voice",
    question: "The decision ________ by the board of directors tomorrow.",
    options: ["will make", "will be made", "is making", "makes"],
    answer: 1,
    explanation: "Use passive voice 'will be made' because the decision receives the action."
  },
  {
    id: 5,
    category: "grammar",
    topic: "subject-verb agreement",
    question: "The news about the merger ________ surprising to everyone.",
    options: "were",
    options: ["is", "are", "were", "have been"],
    answer: 0,
    explanation: "'News' is an uncountable noun taking a singular verb 'is'."
  },
  {
    id: 6,
    category: "grammar",
    topic: "subject-verb agreement",
    question: "Neither the manager nor the employees ________ aware of the change.",
    options: ["was", "were", "is", "has been"],
    answer: 1,
    explanation: "With 'neither/nor', the verb agrees with the nearest subject 'employees' (plural)."
  },
  {
    id: 7,
    category: "grammar",
    topic: "prepositions",
    question: "We look forward ________ from you soon.",
    options: ["to hear", "hearing", "to hearing", "hear"],
    answer: 2,
    explanation: "The phrase is 'look forward to' where 'to' is a preposition followed by 'hearing' (gerund)."
  },
  {
    id: 8,
    category: "grammar",
    topic: "prepositions",
    question: "She is responsible ________ managing the team schedule.",
    options: ["in", "at", "for", "with"],
    answer: 2,
    explanation: "'Responsible for' is the correct preposition combination."
  },
  {
    id: 9,
    category: "grammar",
    topic: "articles",
    question: "She is ________ most experienced candidate on the team.",
    options: ["a", "an", "the", "no article"],
    answer: 2,
    explanation: "Use 'the' with superlative 'most'."
  },
  {
    id: 10,
    category: "grammar",
    topic: "conditional",
    question: "If we ________ earlier, we would have caught the flight.",
    options: ["left", "had left", "leave", "would leave"],
    answer: 1,
    explanation: "Third conditional uses 'had + past participle' in the if-clause."
  },
  {
    id: 11,
    category: "grammar",
    topic: "modals",
    question: "You ________ submit the report by Friday at the latest.",
    options: ["may", "might", "must", "could"],
    answer: 2,
    explanation: "'Must' expresses obligation/necessity."
  },
  {
    id: 12,
    category: "grammar",
    topic: "modals",
    question: "The package ________ have arrived by now.",
    options: ["should", "would", "shall", "will"],
    answer: 0,
    explanation: "'Should have' expresses expectation about a past event."
  },
  {
    id: 13,
    category: "grammar",
    topic: "infinitives/gerunds",
    question: "The manager avoided ________ the difficult questions.",
    options: ["to answer", "answer", "answering", "answered"],
    answer: 2,
    explanation: "'Avoid' is followed by a gerund 'answering'."
  },
  {
    id: 14,
    category: "grammar",
    topic: "infinitives/gerunds",
    question: "We plan ________ our marketing strategy next month.",
    options: ["revise", "to revise", "revising", "revision"],
    answer: 1,
    explanation: "'Plan' is followed by an infinitive 'to revise'."
  },
  {
    id: 15,
    category: "grammar",
    topic: "conjunctions",
    question: "_______ it was raining, the event continued as scheduled.",
    options: ["Despite", "Although", "However", "In spite"],
    answer: 1,
    explanation: "'Although' introduces a concessive clause with a subject and verb."
  },
  {
    id: 16,
    category: "grammar",
    topic: "relative clauses",
    question: "The employee ________ report won the award was promoted.",
    options: ["who", "whose", "whom", "which"],
    answer: 1,
    explanation: "'Whose' shows possession (the report belonging to the employee)."
  },
  {
    id: 17,
    category: "grammar",
    topic: "comparisons",
    question: "This year's sales are ________ than last year's.",
    options: ["good", "better", "best", "more good"],
    answer: 1,
    explanation: "Use comparative 'better' after 'than'."
  },
  {
    id: 18,
    category: "grammar",
    topic: "comparisons",
    question: "This is the ________ software we have ever released.",
    options: ["innovative", "more innovative", "most innovative", "innovatively"],
    answer: 2,
    explanation: "Use superlative 'most innovative' after 'the'."
  },
  {
    id: 19,
    category: "grammar",
    topic: "causative",
    question: "We need to ________ the office painted before the meeting.",
    options: ["do", "make", "have", "get"],
    answer: 2,
    explanation: "'Have something done' is the causative structure."
  },
  {
    id: 20,
    category: "grammar",
    topic: "reported speech",
    question: "He said that he ________ the document the following day.",
    options: ["will sign", "would sign", "signs", "signed"],
    answer: 1,
    explanation: "In reported speech, 'will' becomes 'would'."
  },
  // VOCABULARY QUESTIONS (40 questions)
  {
    id: 21,
    category: "vocabulary",
    topic: "word choice",
    question: "The new policy will ________ significant changes to our operations.",
    options: ["affect", "effect", "affects", "effects"],
    answer: 0,
    explanation: "'Affect' is a verb meaning 'to influence'; 'effect' is a noun."
  },
  {
    id: 22,
    category: "vocabulary",
    topic: "word choice",
    question: "The positive ________ of the merger were immediately visible.",
    options: ["affects", "effects", "effective", "effectively"],
    answer: 1,
    explanation: "'Effects' is the noun meaning 'results or consequences'."
  },
  {
    id: 23,
    category: "vocabulary",
    topic: "business terms",
    question: "Our company has established a ________ in the European market.",
    options: ["presence", "present", "presentation", "presently"],
    answer: 0,
    explanation: "'Presence' means existence or established position in a market."
  },
  {
    id: 24,
    category: "vocabulary",
    topic: "business terms",
    question: "The ________ for the new position closes on Friday.",
    options: ["deadline", "deadline", "dead line", "dead-line"],
    answer: 0,
    explanation: "'Deadline' is the final time for completing something."
  },
  {
    id: 25,
    category: "vocabulary",
    topic: "confusing words",
    question: "Please ________ that all requirements are met.",
    options: ["assure", "ensure", "insure", "assure"],
    answer: 1,
    explanation: "'Ensure' means to make certain; 'assure' is to give confidence; 'insure' is for insurance."
  },
  {
    id: 26,
    category: "vocabulary",
    topic: "confusing words",
    question: "We can ________ you that your data is secure.",
    options: ["ensure", "assure", "insure", "assure"],
    answer: 1,
    explanation: "'Assure' is used when giving confidence to someone."
  },
  {
    id: 27,
    category: "vocabulary",
    topic: "phrasal verbs",
    question: "The meeting was ________ until next week.",
    options: ["called off", "called on", "called up", "called in"],
    answer: 0,
    explanation: "'Call off' means to cancel or postpone."
  },
  {
    id: 28,
    category: "vocabulary",
    topic: "phrasal verbs",
    question: "Please ________ the form before your appointment.",
    options: ["fill in", "fill out", "fill up", "fill away"],
    answer: 1,
    explanation: "'Fill out' means to complete a form."
  },
  {
    id: 29,
    category: "vocabulary",
    topic: "collocations",
    question: "We need to ________ a meeting to discuss the proposal.",
    options: ["do", "make", "hold", "take"],
    answer: 2,
    explanation: "'Hold a meeting' is the correct collocation."
  },
  {
    id: 30,
    category: "vocabulary",
    topic: "collocations",
    question: "She ________ a significant contribution to the project.",
    options: ["did", "made", "took", "had"],
    answer: 1,
    explanation: "'Make a contribution' is the correct collocation."
  },
  {
    id: 31,
    category: "vocabulary",
    topic: "business vocabulary",
    question: "The ________ showed a 15% increase in quarterly revenue.",
    options: ["finance", "financial", "fiscal", "finances"],
    answer: 2,
    explanation: "'Fiscal' relates to financial matters and revenue reporting."
  },
  {
    id: 32,
    category: "vocabulary",
    topic: "business vocabulary",
    question: "All employees must comply with company ________.",
    options: ["polices", "policies", "police", "policy"],
    answer: 1,
    explanation: "'Policies' refers to official rules or guidelines."
  },
  {
    id: 33,
    category: "vocabulary",
    topic: "similar meanings",
    question: "The manager ________ the employees for their hard work.",
    options: ["complimented", "complemented", "completed", "complied"],
    answer: 0,
    explanation: "'Compliment' means to praise; 'complement' means to complete."
  },
  {
    id: 34,
    category: "vocabulary",
    topic: "similar meanings",
    question: "The new software ________ our existing systems perfectly.",
    options: ["compliments", "complements", "compiles", "complies"],
    answer: 1,
    explanation: "'Complement' means to complete or enhance something."
  },
  {
    id: 35,
    category: "vocabulary",
    topic: "word forms",
    question: "The ________ of the project exceeded our expectations.",
    options: ["successful", "succeed", "success", "successfully"],
    answer: 2,
    explanation: "Need a noun after 'the': 'success'."
  },
  {
    id: 36,
    category: "vocabulary",
    topic: "word forms",
    question: "We ________ invite you to our annual conference.",
    options: ["cordial", "cordially", "cordiality", "cordially's"],
    answer: 1,
    explanation: "'Cordially' is the adverb form modifying 'invite'."
  },
  {
    id: 37,
    category: "vocabulary",
    topic: "business context",
    question: "The ________ between the two companies has been beneficial.",
    options: "collaboration",
    options: ["collaborate", "collaboration", "collaborative", "collaborator"],
    answer: 1,
    explanation: "'Collaboration' is the noun form meaning 'working together'."
  },
  {
    id: 38,
    category: "vocabulary",
    topic: "business context",
    question: "Our main ________ lowered their prices yesterday.",
    options: ["competitor", "competition", "competitive", "compete"],
    answer: 0,
    explanation: "'Competitor' refers to a business rival."
  },
  {
    id: 39,
    category: "vocabulary",
    topic: "formal language",
    question: "I would ________ it if you could review this document.",
    options: ["appreciate", "appreciation", "appreciative", "appreciated"],
    answer: 0,
    explanation: "'Would appreciate' is a formal expression of request."
  },
  {
    id: 40,
    category: "vocabulary",
    topic: "formal language",
    question: "Please find the report ________.",
    options: ["attach", "attaching", "attached", "attachment"],
    answer: 2,
    explanation: "'Attached' is the standard phrase for email attachments."
  },

  // ADDITIONAL GRAMMAR & VOCABULARY MIXED (60 more questions)
  {
    id: 41,
    category: "mixed",
    topic: "mixed",
    question: "The conference ________ attended by over 500 delegates.",
    options: ["was", "were", "is", "are"],
    answer: 0,
    explanation: "Passive voice with singular subject 'conference' requires 'was'."
  },
  {
    id: 42,
    category: "mixed",
    topic: "mixed",
    question: "Neither the CEO nor the board members ________ the proposal.",
    options: ["accepts", "accept", "accepting", "accepted"],
    answer: 1,
    explanation: "With 'neither/nor', verb agrees with nearest subject (board members - plural)."
  },
  {
    id: 43,
    category: "mixed",
    topic: "mixed",
    question: "The manager suggested ________ a meeting to discuss the issue.",
    options: ["to have", "having", "have", "has"],
    answer: 1,
    explanation: "'Suggest' is followed by a gerund 'having'."
  },
  {
    id: 44,
    category: "mixed",
    topic: "mixed",
    question: "This is the ________ office building in the city.",
    options: ["tall", "taller", "tallest", "most tall"],
    answer: 2,
    explanation: "Use superlative 'tallest' with 'the' and single item being compared."
  },
  {
    id: 45,
    category: "mixed",
    topic: "mixed",
    question: "We ________ the supplier for the delay in delivery.",
    options: ["complained to", "complained about", "complained", "complained with"],
    answer: 0,
    explanation: "'Complain to' someone; 'complain about' something."
  },
  {
    id: 46,
    category: "mixed",
    topic: "mixed",
    question: "The employee was ________ for consistently arriving late.",
    options: ["praised", "promoted", "reprimanded", "rewarded"],
    answer: 2,
    explanation: "'Reprimanded' means to scold or rebuke for negative behavior."
  },
  {
    id: 47,
    category: "mixed",
    topic: "mixed",
    question: "________ the bad weather, the event was successful.",
    options: ["Despite", "Although", "However", "In spite"],
    answer: 0,
    explanation: "'Despite' is followed by a noun phrase."
  },
  {
    id: 48,
    category: "mixed",
    topic: "mixed",
    question: "The report needs to ________ before the meeting.",
    options: ["be completed", "complete", "completing", "completion"],
    answer: 0,
    explanation: "Passive form 'be completed' after 'needs to'."
  },
  {
    id: 49,
    category: "mixed",
    topic: "mixed",
    question: "She is one of the most ________ employees in the company.",
    options: ["dedicate", "dedicated", "dedication", "dedicating"],
    answer: 1,
    explanation: "Need adjective 'dedicated' after 'most'."
  },
  {
    id: 50,
    category: "mixed",
    topic: "mixed",
    question: "The goods will be ________ within three business days.",
    options: ["dispatch", "dispatched", "dispatching", "dispatches"],
    answer: 1,
    explanation: "Passive voice 'will be dispatched'."
  },
  {
    id: 51,
    category: "mixed",
    topic: "mixed",
    question: "We look forward to ________ from our international clients.",
    options: ["hear", "hearing", "heard", "hears"],
    answer: 1,
    explanation: "'Look forward to' is followed by gerund 'hearing'."
  },
  {
    id: 52,
    category: "mixed",
    topic: "mixed",
    question: "The marketing ________ was launched last month.",
    options: ["campaign", "campaigns", "campaigning", "campaigners"],
    answer: 0,
    explanation: "Singular 'campaign' after 'the marketing'."
  },
  {
    id: 53,
    category: "mixed",
    topic: "mixed",
    question: "You ________ have informed us about the schedule change.",
    options: ["should", "would", "could", "might"],
    answer: 0,
    explanation: "'Should have' expresses criticism about a past obligation."
  },
  {
    id: 54,
    category: "mixed",
    topic: "mixed",
    question: "The company ________ its operations to Asia last year.",
    options: ["expands", "expanded", "expanding", "expansion"],
    answer: 1,
    explanation: "Past tense 'expanded' for action completed 'last year'."
  },
  {
    id: 55,
    category: "mixed",
    topic: "mixed",
    question: "________ we increase production, costs will decrease.",
    options: ["If", "Unless", "Provided", "Whether"],
    answer: 0,
    explanation: "'If' introduces a conditional statement."
  },
  {
    id: 56,
    category: "mixed",
    topic: "mixed",
    question: "The ________ of employees support the new policy.",
    options: ["majority", "major", "more", "most"],
    answer: 0,
    explanation: "'Majority' means more than half."
  },
  {
    id: 57,
    category: "mixed",
    topic: "mixed",
    question: "Please ________ your contact information below.",
    options: "fill",
    options: ["fill in", "fill out", "fill up", "fill off"],
    answer: 1,
    explanation: "'Fill out' means to complete a form with information."
  },
  {
    id: 58,
    category: "mixed",
    topic: "mixed",
    question: "The contract ________ both parties to comply with regulations.",
    options: ["obliges", "obligated", "obligation", "obligatory"],
    answer: 0,
    explanation: "'Obliges' is the verb form meaning 'requires legally'."
  },
  {
    id: 59,
    category: "mixed",
    topic: "mixed",
    question: "She was ________ to Manager after only six months.",
    options: ["promoted", "promoting", "promotion", "promote"],
    answer: 0,
    explanation: "Passive voice 'was promoted' describes receiving a promotion."
  },
  {
    id: 60,
    category: "mixed",
    topic: "mixed",
    question: "The ________ of the merger will be announced next week.",
    options: ["complete", "completion", "completed", "completes"],
    answer: 1,
    explanation: "'Completion' is the noun form needed after 'the'."
  },
  {
    id: 61,
    category: "mixed",
    topic: "mixed",
    question: "We cannot ________ responsibility for the lost items.",
    options: ["accept", "accepting", "acceptable", "acceptance"],
    answer: 0,
    explanation: "'Cannot' is followed by base verb 'accept'."
  },
  {
    id: 62,
    category: "mixed",
    topic: "mixed",
    question: "The data ________ that sales have increased steadily.",
    options: ["indicate", "indicates", "indicating", "indication"],
    answer: 1,
    explanation: "Subject 'data' is treated as singular in business contexts."
  },
  {
    id: 63,
    category: "mixed",
    topic: "mixed",
    question: "Employees are required to ________ their working hours.",
    options: ["record", "recording", "recorded", "records"],
    answer: 0,
    explanation: "'Required to' is followed by base verb 'record'."
  },
  {
    id: 64,
    category: "mixed",
    topic: "mixed",
    question: "The ________ of the meeting has been changed to 3 PM.",
    options: ["time", "timing", "schedule", "scheduled"],
    answer: 0,
    explanation: "'Time' refers to when something happens."
  },
  {
    id: 65,
    category: "mixed",
    topic: "mixed",
    question: "We need to ________ more staff for the busy season.",
    options: ["hire", "hirees", "hiring", "hired"],
    answer: 0,
    explanation: "'Need to' is followed by base verb 'hire'."
  },
  {
    id: 66,
    category: "mixed",
    topic: "mixed",
    question: "The product ________ well in international markets.",
    options: ["sells", "selling", "sold", "sell"],
    answer: 0,
    explanation: "Present simple 'sells' for a general fact."
  },
  {
    id: 67,
    category: "mixed",
    topic: "mixed",
    question: "________ excellent organizational skills, she was appointed team leader.",
    options: ["Since", "Because", "Due to", "Although"],
    answer: 2,
    explanation: "'Due to' is followed by a noun phrase."
  },
  {
    id: 68,
    category: "mixed",
    topic: "mixed",
    question: "The report ________ be submitted by the end of the day.",
    options: ["must", "can", "may", "might"],
    answer: 0,
    explanation: "'Must' expresses obligation."
  },
  {
    id: 69,
    category: "mixed",
    topic: "mixed",
    question: "We ________ forward to working with you.",
    options: ["look", "looking", "looked", "are looking"],
    answer: 3,
    explanation: "Present continuous 'are looking forward' for current anticipation."
  },
  {
    id: 70,
    category: "mixed",
    topic: "mixed",
    question: "The manager ________ the team to improve performance.",
    options: ["encouraged", "encouraging", "encouragement", "encourages"],
    answer: 0,
    explanation: "Past tense 'encouraged' for completed action."
  },
  {
    id: 71,
    category: "mixed",
    topic: "mixed",
    question: "Please ensure that all ________ are properly labeled.",
    options: ["package", "packages", "packaging", "packaged"],
    answer: 1,
    explanation: "Plural 'packages' after 'all'."
  },
  {
    id: 72,
    category: "mixed",
    topic: "mixed",
    question: "The company ________ a reputation for quality products.",
    options: ["enjoys", "enjoying", "enjoyed", "enjoyable"],
    answer: 0,
    explanation: "Present simple 'enjoys' for a current state."
  },
  {
    id: 73,
    category: "mixed",
    topic: "mixed",
    question: "________ the difficulties, the project was completed on time.",
    options: ["Despite", "Although", "However", "Even"],
    answer: 0,
    explanation: "'Despite' is followed by a noun phrase."
  },
  {
    id: 74,
    category: "mixed",
    topic: "mixed",
    question: "We ________ that the shipment will arrive tomorrow.",
    options: ["anticipate", "anticipation", "anticipating", "anticipated"],
    answer: 0,
    explanation: "'Anticipate' is the verb meaning 'expect'."
  },
  {
    id: 75,
    category: "mixed",
    topic: "mixed",
    question: "The employee ________ for the company for ten years.",
    options: ["has worked", "have worked", "working", "works"],
    answer: 0,
    explanation: "Present perfect 'has worked' with singular subject 'employee'."
  },
  {
    id: 76,
    category: "mixed",
    topic: "mixed",
    question: "Please ________ us know if you need assistance.",
    options: ["let", "lets", "letting", "to let"],
    answer: 0,
    explanation: "'Please' is followed by base verb 'let'."
  },
  {
    id: 77,
    category: "mixed",
    topic: "mixed",
    question: "The new policy will ________ effect next month.",
    options: ["go into", "go", "get into", "come"],
    answer: 0,
    explanation: "'Go into effect' is the correct phrase for implementing policies."
  },
  {
    id: 78,
    category: "mixed",
    topic: "mixed",
    question: "We ________ the proposal to management for approval.",
    options: ["submitted", "submitting", "submit", "submits"],
    answer: 0,
    explanation: "Past tense 'submitted' for completed action."
  },
  {
    id: 79,
    category: "mixed",
    topic: "mixed",
    question: "The ________ of the conference exceeded our expectations.",
    options: ["attend", "attendees", "attending", "attended"],
    answer: 1,
    explanation: "'Attendees' means people who attended."
  },
  {
    id: 80,
    category: "mixed",
    topic: "mixed",
    question: "She is ________ for the sales department.",
    options: ["responsibility", "responsible", "respond", "responded"],
    answer: 1,
    explanation: "'Responsible for' means having duty for something."
  },
  {
    id: 81,
    category: "mixed",
    topic: "mixed",
    question: "The document needs ________ by the legal department.",
    options: ["review", "reviewing", "to review", "to be reviewed"],
    answer: 3,
    explanation: "'Needs to be reviewed' is passive form."
  },
  {
    id: 82,
    category: "mixed",
    topic: "mixed",
    question: "We ________ to offer you the position of Senior Analyst.",
    options: ["please", "pleased", "are pleased", "pleasing"],
    answer: 2,
    explanation: "'Are pleased' is correct for expressing willingness."
  },
  {
    id: 83,
    category: "mixed",
    topic: "mixed",
    question: "The ________ were informed about the schedule change.",
    options: ["employ", "employee", "employees", "employed"],
    answer: 2,
    explanation: "Plural 'employees' for the people."
  },
  {
    id: 84,
    category: "mixed",
    topic: "mixed",
    question: "Please ________ this email to your colleagues.",
    options: ["forward", "forwards", "forwarding", "forwarded"],
    answer: 0,
    explanation: "'Forward' is the verb meaning to send on."
  },
  {
    id: 85,
    category: "mixed",
    topic: "mixed",
    question: "The company ________ profit for five consecutive years.",
    options: ["made", "has made", "making", "makes"],
    answer: 1,
    explanation: "Present perfect 'has made' for action continuing to present."
  },
  {
    id: 86,
    category: "mixed",
    topic: "mixed",
    question: "We would ________ if you could confirm your attendance.",
    options: ["appreciate", "appreciation", "appreciative", "appreciated"],
    answer: 0,
    explanation: "'Would appreciate' is a formal request."
  },
  {
    id: 87,
    category: "mixed",
    topic: "mixed",
    question: "The ________ of the project depends on funding approval.",
    options: ["successful", "succeed", "success", "successfully"],
    answer: 2,
    explanation: "'Success' is the noun meaning 'achievement of goal'."
  },
  {
    id: 88,
    category: "mixed",
    topic: "mixed",
    question: "Employees are ________ to wear ID badges at all times.",
    options: ["required", "requiring", "require", "requires"],
    answer: 0,
    explanation: "Passive voice 'are required' for obligation."
  },
  {
    id: 89,
    category: "mixed",
    topic: "mixed",
    question: "The ________ deadline for applications is Friday.",
    options: ["final", "finally", "finality", "finalize"],
    answer: 0,
    explanation: "'Final' as adjective means 'last'."
  },
  {
    id: 90,
    category: "mixed",
    topic: "mixed",
    question: "We ________ our customers the highest quality service.",
    options: ["provide", "providing", "provided", "provides"],
    answer: 0,
    explanation: "Present simple 'provide' for a general fact."
  },
  {
    id: 91,
    category: "mixed",
    topic: "mixed",
    question: "The manager delegated the task ________ her assistant.",
    options: ["to", "for", "with", "at"],
    answer: 0,
    explanation: "'Delegate to' is the correct preposition."
  },
  {
    id: 92,
    category: "mixed",
    topic: "mixed",
    question: "Please ________ the attached document for your reference.",
    options: ["find", "finding", "found", "finds"],
    answer: 0,
    explanation: "'Please find' is standard email phrase."
  },
  {
    id: 93,
    category: "mixed",
    topic: "mixed",
    question: "The company ________ its headquarters to New York.",
    options: ["relocated", "relocation", "relocates", "relocating"],
    answer: 0,
    explanation: "Past tense 'relocated' for completed action."
  },
  {
    id: 94,
    category: "mixed",
    topic: "mixed",
    question: "We need to ________ a solution to this problem quickly.",
    options: ["come up with", "come up", "come to", "come at"],
    answer: 0,
    explanation: "'Come up with' means to produce or create."
  },
  {
    id: 95,
    category: "mixed",
    topic: "mixed",
    question: "The ________ was unable to attend the meeting due to illness.",
    options: ["chairman", "chair", "chairing", "chaired"],
    answer: 0,
    explanation: "'Chairman' is the person leading a meeting."
  },
  {
    id: 96,
    category: "mixed",
    topic: "mixed",
    question: "________ the high cost, we decided to proceed.",
    options: ["Despite", "Although", "However", "Even"],
    answer: 0,
    explanation: "'Despite' introduces a concession."
  },
  {
    id: 97,
    category: "mixed",
    topic: "mixed",
    question: "We ________ that our customers receive excellent service.",
    options: ["ensure", "ensures", "ensuring", "ensured"],
    answer: 0,
    explanation: "'Ensure' means to make certain."
  },
  {
    id: 98,
    category: "mixed",
    topic: "mixed",
    question: "The ________ for the position must have five years of experience.",
    options: ["require", "requirement", "required", "requiring"],
    answer: 1,
    explanation: "'Requirement' means something needed."
  },
  {
    id: 99,
    category: "mixed",
    topic: "mixed",
    question: "Please ________ your seatbelt during the flight.",
    options: ["fasten", "fastening", "fastened", "fastens"],
    answer: 0,
    explanation: "'Fasten' is the verb meaning to secure."
  },
  {
    id: 100,
    category: "mixed",
    topic: "mixed",
    question: "The ________ of our products has improved significantly.",
    options: ["quality", "qualify", "qualified", "qualification"],
    answer: 0,
    explanation: "'Quality' refers to the standard of something."
  },
];

// Helper functions
function getPart5Questions(count = 10, category = null) {
  let questions = category
    ? part5Questions.filter(q => q.category === category)
    : [...part5Questions];
  return questions.sort(() => 0.5 - Math.random()).slice(0, count);
}

function getPart5QuestionById(id) {
  return part5Questions.find(q => q.id === id);
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { part5Questions, getPart5Questions, getPart5QuestionById };
}
