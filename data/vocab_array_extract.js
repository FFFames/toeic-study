const vocabularyData = [
  // A - Words 1-50
  {
    word: "ability",
    partOfSpeech: "noun",
    definition: "the capacity or power to do something; talent or skill",
    example: "Her ability to negotiate complex contracts impressed the management team.",
    quiz: {
      question: "The candidate demonstrated excellent ________ in problem-solving during the interview.",
      options: ["ability", "able", "unable", "abilities"],
      answer: 0,
      explanation: "'Ability' is the noun form needed after the adjective 'excellent'."
    }
  },
  {
    word: "abroad",
    partOfSpeech: "adverb",
    definition: "in or to a foreign country or countries",
    example: "Our company is expanding its operations abroad to reach new markets.",
    quiz: {
      question: "Many employees are interested in working ________ to gain international experience.",
      options: ["abroad", "abroadly", "aboard", "broad"],
      answer: 0,
      explanation: "'Abroad' means in a foreign country and is the correct adverb form."
    }
  },
  {
    word: "absolutely",
    partOfSpeech: "adverb",
    definition: "completely; entirely; without exception",
    example: "The manager was absolutely certain that the project would succeed.",
    quiz: {
      question: "We are ________ committed to providing the best customer service possible.",
      options: ["absolute", "absolutely", "absoluteness", "absolved"],
      answer: 1,
      explanation: "'Absolutely' is the adverb form modifying the adjective 'committed'."
    }
  },
  {
    word: "accept",
    partOfSpeech: "verb",
    definition: "to agree to take or receive something; to approve",
    example: "The board decided to accept the proposal after reviewing all the details.",
    quiz: {
      question: "We are pleased to ________ your application for the position of Marketing Manager.",
      options: ["accept", "acceptance", "acceptable", "accepted"],
      answer: 0,
      explanation: "'Accept' is the base verb form needed after 'to' (pleased to accept)."
    }
  },
  {
    word: "access",
    partOfSpeech: "noun/verb",
    definition: "(n) the means to enter or use; (v) to gain entry to",
    example: "Employees have access to the company database from any location.",
    quiz: {
      question: "Only authorized personnel can ________ the secure files.",
      options: ["access", "accessible", "accessibly", "accessary"],
      answer: 0,
      explanation: "'Access' is the verb form meaning to gain entry to something."
    }
  },
  {
    word: "accessible",
    partOfSpeech: "adjective",
    definition: "easy to approach, reach, or understand",
    example: "The new office location is more accessible to public transportation.",
    quiz: {
      question: "The customer support team is ________ 24 hours a day.",
      options: ["access", "accessible", "accessibly", "accessibility"],
      answer: 1,
      explanation: "'Accessible' is the adjective describing the customer support team."
    }
  },
  {
    word: "accident",
    partOfSpeech: "noun",
    definition: "an unfortunate incident that happens unexpectedly",
    example: "There was a workplace accident that could have been prevented.",
    quiz: {
      question: "The company reviewed safety procedures after the ________ in the warehouse.",
      options: ["accidental", "accident", "accidentally", "accidents"],
      answer: 1,
      explanation: "'Accident' is the singular noun form needed after 'the'."
    }
  },
  {
    word: "accommodate",
    partOfSpeech: "verb",
    definition: "to provide lodging or sufficient space for; to fit in with",
    example: "The conference center can accommodate up to 500 attendees.",
    quiz: {
      question: "Our hotel can ________ all the guests for the conference.",
      options: ["accommodate", "accommodation", "accommodating", "accommodates"],
      answer: 0,
      explanation: "'Can' is followed by the base verb form 'accommodate'."
    }
  },
  {
    word: "accommodation",
    partOfSpeech: "noun",
    definition: "lodging; a place to live or stay; adaptation or adjustment",
    example: "The company provides accommodation for employees traveling on business.",
    quiz: {
      question: "We need to arrange ________ for the visiting delegates.",
      options: ["accommodate", "accommodation", "accommodating", "accommodated"],
      answer: 1,
      explanation: "'Accommodation' is the noun form needed after the verb 'arrange'."
    }
  },
  {
    word: "accomplish",
    partOfSpeech: "verb",
    definition: "to achieve or complete successfully",
    example: "The team accomplished all their goals ahead of schedule.",
    quiz: {
      question: "With hard work and dedication, you can ________ anything you set your mind to.",
      options: ["accomplish", "accomplishment", "accomplished", "accomplishes"],
      answer: 0,
      explanation: "'Can' is followed by the base verb form 'accomplish'."
    }
  },
  {
    word: "accomplishment",
    partOfSpeech: "noun",
    definition: "something achieved successfully; the act of completing something",
    example: "Completing the project early was a significant accomplishment for the team.",
    quiz: {
      question: "Her promotion was recognition of her professional ________.",
      options: ["accomplish", "accomplishment", "accomplished", "accomplishes"],
      answer: 1,
      explanation: "'Accomplishment' is the noun form needed as the object of 'professional'."
    }
  },
  {
    word: "according",
    partOfSpeech: "adverb",
    definition: "as stated or indicated by; in accordance with",
    example: "According to the report, sales increased by 15% this quarter.",
    quiz: {
      question: "_______ to the forecast, we expect continued growth next year.",
      options: ["According", "Accord", "Accorded", "Accords"],
      answer: 0,
      explanation: "'According' is used in the phrase 'According to' to cite a source."
    }
  },
  {
    word: "accordingly",
    partOfSpeech: "adverb",
    definition: "in a way that is appropriate to the circumstances",
    example: "The budget was reduced, and we adjusted our plans accordingly.",
    quiz: {
      question: "The client requested changes, and we modified the design ________.",
      options: ["according", "accordingly", "accordance", "according to"],
      answer: 1,
      explanation: "'Accordingly' means 'in a way that is appropriate to the situation'."
    }
  },
  {
    word: "accounting",
    partOfSpeech: "noun",
    definition: "the system of recording and summarizing financial transactions",
    example: "The accounting department prepares monthly financial reports.",
    quiz: {
      question: "The ________ software helps us track expenses more efficiently.",
      options: ["account", "accounting", "accountable", "accounted"],
      answer: 1,
      explanation: "'Accounting' as a noun modifies 'software' to describe its purpose."
    }
  },
  {
    word: "accurate",
    partOfSpeech: "adjective",
    definition: "correct and exact; free from errors",
    example: "Please ensure all data entered into the system is accurate.",
    quiz: {
      question: "We need ________ information before making a decision.",
      options: ["accurate", "accurately", "accuracy", "accuration"],
      answer: 0,
      explanation: "'Accurate' is the adjective form needed to modify 'information'."
    }
  },
  {
    word: "achieve",
    partOfSpeech: "verb",
    definition: "to successfully bring about or accomplish a desired result",
    example: "Our goal is to achieve 20% market share by the end of the year.",
    quiz: {
      question: "Through teamwork, we were able to ________ our sales targets.",
      options: ["achievement", "achieve", "achievable", "achieved"],
      answer: 1,
      explanation: "'Able to' is followed by the base verb form 'achieve'."
    }
  },
  {
    word: "acquire",
    partOfSpeech: "verb",
    definition: "to obtain or gain possession of something",
    example: "The company plans to acquire a smaller competitor to expand its market.",
    quiz: {
      question: "We need to ________ more resources to complete this project.",
      options: ["acquisition", "acquire", "acquired", "acquires"],
      answer: 1,
      explanation: "'Need to' is followed by the base verb form 'acquire'."
    }
  },
  {
    word: "act",
    partOfSpeech: "verb/noun",
    definition: "(v) to take action; (n) a thing done; a deed",
    example: "We must act quickly to resolve this customer complaint.",
    quiz: {
      question: "The manager decided to ________ immediately on the proposal.",
      options: ["act", "action", "active", "actively"],
      answer: 0,
      explanation: "'Act' is the verb form meaning 'to take action'."
    }
  },
  {
    word: "actually",
    partOfSpeech: "adverb",
    definition: "in fact or reality; really",
    example: "Actually, the project is ahead of schedule despite the challenges.",
    quiz: {
      question: "The new system is ________ easier to use than the old one.",
      options: ["actual", "actually", "actuality", "actualize"],
      answer: 1,
      explanation: "'Actually' is the adverb form modifying 'easier'."
    }
  },
  {
    word: "adapt",
    partOfSpeech: "verb",
    definition: "to adjust or modify something for new conditions or purposes",
    example: "Companies must adapt their strategies to changing market conditions.",
    quiz: {
      question: "We need to ________ our marketing approach for the Asian market.",
      options: ["adapt", "adaptable", "adaptation", "adaptive"],
      answer: 0,
      explanation: "'Need to' is followed by the base verb form 'adapt'."
    }
  },
  {
    word: "adapter",
    partOfSpeech: "noun",
    definition: "a device that connects different pieces of equipment",
    example: "You may need a power adapter when traveling internationally.",
    quiz: {
      question: "The ________ allows you to connect your laptop to the projector.",
      options: ["adapt", "adapter", "adaptable", "adaptation"],
      answer: 1,
      explanation: "'Adapter' is the noun referring to a connecting device."
    }
  },
  {
    word: "additional",
    partOfSpeech: "adjective",
    definition: "added; extra; supplementary",
    example: "We may need additional funding to complete the project.",
    quiz: {
      question: "The client requested ________ features for the software.",
      options: ["addition", "additional", "added", "additive"],
      answer: 1,
      explanation: "'Additional' means 'extra' or 'added' and modifies 'features'."
    }
  },
  {
    word: "adequate",
    partOfSpeech: "adjective",
    definition: "sufficient for a specific purpose; acceptable",
    example: "Please ensure adequate ventilation in the workspace.",
    quiz: {
      question: "The company provides ________ training for all new employees.",
      options: ["adequate", "adequately", "adequacy", "adequate"],
      answer: 0,
      explanation: "'Adequate' is the adjective form modifying 'training'."
    }
  },
  {
    word: "adjust",
    partOfSpeech: "verb",
    definition: "to alter or modify slightly; to adapt",
    example: "We need to adjust our prices to remain competitive.",
    quiz: {
      question: "Please ________ the settings to improve the image quality.",
      options: ["adjust", "adjustable", "adjustment", "adjusted"],
      answer: 0,
      explanation: "'Please' is followed by the base verb form 'adjust'."
    }
  },
  {
    word: "adjustment",
    partOfSpeech: "noun",
    definition: "the act of making a minor change; modification",
    example: "The contract required some adjustments before both parties could sign.",
    quiz: {
      question: "After receiving feedback, we made several ________ to the proposal.",
      options: ["adjust", "adjustable", "adjustments", "adjusted"],
      answer: 2,
      explanation: "'Adjustments' is the plural noun form needed after 'several'."
    }
  },
  {
    word: "administration",
    partOfSpeech: "noun",
    definition: "the management or direction of a business or organization",
    example: "The administration is reviewing the company's policies.",
    quiz: {
      question: "The new ________ implemented several cost-saving measures.",
      options: ["administer", "administrative", "administration", "administered"],
      answer: 2,
      explanation: "'Administration' is the noun subject referring to management."
    }
  },
  {
    word: "admire",
    partOfSpeech: "verb",
    definition: "to regard with respect or warm approval",
    example: "I admire her dedication to completing the project on time.",
    quiz: {
      question: "Many employees ________ the CEO's leadership style.",
      options: ["admire", "admiration", "admiring", "admired"],
      answer: 0,
      explanation: "'Many employees' is a plural subject requiring the plural verb 'admire'."
    }
  },
  {
    word: "admit",
    partOfSpeech: "verb",
    definition: "to acknowledge as true; to allow entrance",
    example: "The manager admitted that the mistake was avoidable.",
    quiz: {
      question: "The theater can ________ up to 200 people for each show.",
      options: ["admit", "admission", "admissible", "admitted"],
      answer: 0,
      explanation: "'Can' is followed by the base verb form 'admit'."
    }
  },
  {
    word: "admittance",
    partOfSpeech: "noun",
    definition: "the right or permission to enter",
    example: "Admittance to the building requires a security badge.",
    quiz: {
      question: "Only authorized personnel have ________ to the secure area.",
      options: ["admit", "admittance", "admitted", "admissible"],
      answer: 1,
      explanation: "'Admittance' is the noun meaning 'permission to enter'."
    }
  },
  {
    word: "advance",
    partOfSpeech: "noun/verb/adjective",
    definition: "(n) forward movement; (v) to move forward; (adj) made ahead of time",
    example: "We need to advance the deadline to accommodate the client's request.",
    quiz: {
      question: "Thank you for your ________ payment on the invoice.",
      options: ["advance", "advanced", "advancing", "advancement"],
      answer: 0,
      explanation: "'Advance' as an adjective means 'made ahead of time' or 'early'."
    }
  },
  {
    word: "advanced",
    partOfSpeech: "adjective",
    definition: "far on in progress; complex or highly developed",
    example: "The advanced features of the software require training to use properly.",
    quiz: {
      question: "This course is designed for ________ learners only.",
      options: ["advance", "advanced", "advancing", "advancement"],
      answer: 1,
      explanation: "'Advanced' is the adjective form describing the learners."
    }
  },
  {
    word: "advantage",
    partOfSpeech: "noun",
    definition: "a beneficial factor; a favorable position",
    example: "Our company has a competitive advantage in the Asian market.",
    quiz: {
      question: "One ________ of online shopping is the convenience it offers.",
      options: ["advantage", "advantageous", "advantageously", "advantages"],
      answer: 0,
      explanation: "'One' is followed by the singular noun 'advantage'."
    }
  },
  {
    word: "advantageous",
    partOfSpeech: "adjective",
    definition: "beneficial; favorable; giving an advantage",
    example: "The new tax policy is advantageous for small businesses.",
    quiz: {
      question: "It would be ________ to sign the contract before prices increase.",
      options: ["advantage", "advantageous", "advantageously", "advantages"],
      answer: 1,
      explanation: "'It would be' requires an adjective: 'advantageous'."
    }
  },
  {
    word: "advertise",
    partOfSpeech: "verb",
    definition: "to describe or promote something publicly to attract attention",
    example: "We plan to advertise our new product on social media platforms.",
    quiz: {
      question: "The company decided to ________ the job opening in several newspapers.",
      options: ["advertising", "advertisement", "advertise", "advertiser"],
      answer: 2,
      explanation: "'Decided to' is followed by the base verb form 'advertise'."
    }
  },
  {
    word: "advertisement",
    partOfSpeech: "noun",
    definition: "a public notice promoting a product, service, or event",
    example: "The advertisement appeared in major newspapers across the country.",
    quiz: {
      question: "The ________ for the new product campaign will launch next week.",
      options: ["advertise", "advertisement", "advertising", "advertised"],
      answer: 1,
      explanation: "'Advertisement' is the noun form needed as the subject."
    }
  },
  {
    word: "advice",
    partOfSpeech: "noun",
    definition: "guidance or recommendations concerning prudent action",
    example: "The consultant gave valuable advice on improving efficiency.",
    quiz: {
      question: "Thank you for your ________ regarding the investment proposal.",
      options: ["advise", "advice", "advising", "advised"],
      answer: 1,
      explanation: "'Advice' is the noun form; 'advise' is the verb."
    }
  },
  {
    word: "advise",
    partOfSpeech: "verb",
    definition: "to offer suggestions about the best course of action",
    example: "Please advise us if you need any additional information.",
    quiz: {
      question: "Our lawyer will ________ us on the contract terms.",
      options: ["advice", "advise", "advising", "advised"],
      answer: 1,
      explanation: "'Will' is followed by the base verb form 'advise'."
    }
  },
  {
    word: "affect",
    partOfSpeech: "verb",
    definition: "to influence or produce a change in something",
    example: "The economic downturn will affect our sales projections.",
    quiz: {
      question: "The new policy will ________ all employees in the company.",
      options: ["effect", "affect", "affects", "affected"],
      answer: 1,
      explanation: "'Affect' is the verb meaning 'to influence'; 'effect' is the noun."
    }
  },
  {
    word: "afford",
    partOfSpeech: "verb",
    definition: "to have enough money or time for something",
    example: "We cannot afford any delays in the project schedule.",
    quiz: {
      question: "The company can ________ to invest in new technology this year.",
      options: ["afford", "affordable", "affordably", "affordability"],
      answer: 0,
      explanation: "'Can' is followed by the base verb form 'afford'."
    }
  },
  {
    word: "affordable",
    partOfSpeech: "adjective",
    definition: "inexpensive; reasonably priced",
    example: "We offer affordable solutions for small businesses.",
    quiz: {
      question: "The ________ housing options attracted many young professionals.",
      options: ["afford", "affordable", "affordably", "affordability"],
      answer: 1,
      explanation: "'Affordable' is the adjective form modifying 'housing options'."
    }
  },
  {
    word: "agency",
    partOfSpeech: "noun",
    definition: "a business or organization providing a specific service",
    example: "Our advertising agency created an excellent campaign for us.",
    quiz: {
      question: "The travel ________ booked our flights and hotel.",
      options: ["agent", "agency", "agenda", "aggressive"],
      answer: 1,
      explanation: "'Agency' refers to a business that provides services."
    }
  },
  {
    word: "agenda",
    partOfSpeech: "noun",
    definition: "a list of items to be discussed at a meeting",
    example: "The first item on the agenda is the quarterly review.",
    quiz: {
      question: "Please review the meeting ________ before the conference begins.",
      options: ["agent", "agency", "agenda", "aggressive"],
      answer: 2,
      explanation: "'Agenda' is the list of items for a meeting."
    }
  },
  {
    word: "agree",
    partOfSpeech: "verb",
    definition: "to have the same opinion; to approve or accept",
    example: "The board members agreed on the new strategic plan.",
    quiz: {
      question: "We ________ that the proposal needs further review.",
      options: ["agree", "agreement", "agreeable", "agreed"],
      answer: 0,
      explanation: "'We' is a plural subject requiring the plural verb 'agree'."
    }
  },
  {
    word: "agreeable",
    partOfSpeech: "adjective",
    definition: "pleasant and willing to agree; acceptable",
    example: "The terms of the agreement were agreeable to both parties.",
    quiz: {
      question: "The ________ weather made the outdoor event a success.",
      options: ["agree", "agreeable", "agreement", "agreed"],
      answer: 1,
      explanation: "'Agreeable' means pleasant or enjoyable."
    }
  },
  {
    word: "agreement",
    partOfSpeech: "noun",
    definition: "a negotiated arrangement or understanding between parties",
    example: "Both parties signed the agreement after lengthy negotiations.",
    quiz: {
      question: "We reached an ________ on the price and delivery terms.",
      options: ["agree", "agreeable", "agreement", "agreed"],
      answer: 2,
      explanation: "'Agreement' is the noun form needed after 'an'."
    }
  },
  {
    word: "agricultural",
    partOfSpeech: "adjective",
    definition: "relating to farming or cultivation",
    example: "The agricultural sector experienced growth this year.",
    quiz: {
      question: "The ________ products company expanded its distribution network.",
      options: ["agriculture", "agricultural", "agriculturally", "agriculturist"],
      answer: 1,
      explanation: "'Agricultural' is the adjective form modifying 'products'."
    }
  },
  {
    word: "aid",
    partOfSpeech: "noun/verb",
    definition: "(n) help or assistance; (v) to help or assist",
    example: "Financial aid was provided to affected employees.",
    quiz: {
      question: "The charity organization provides ________ to disaster victims.",
      options: ["aid", "aids", "aiding", "aided"],
      answer: 0,
      explanation: "'Aid' is an uncountable noun meaning 'help or assistance'."
    }
  },
  {
    word: "aim",
    partOfSpeech: "noun/verb",
    definition: "(n) a purpose or goal; (v) to intend or direct toward a goal",
    example: "Our aim is to become the market leader in our industry.",
    quiz: {
      question: "The new policy ________ to reduce commuting time for employees.",
      options: ["aim", "aims", "aiming", "aimed"],
      answer: 1,
      explanation: "'The policy' is singular, so we use 'aims' as the verb."
    }
  },

  // B - Words 51-90
  {
    word: "background",
    partOfSpeech: "noun",
    definition: "the circumstances or past history of a person or thing",
    example: "Her background in finance made her an ideal candidate for the position.",
    quiz: {
      question: "Please tell us about your educational and professional ________.",
      options: ["background", "backgrounds", "backgrounded", "backing"],
      answer: 0,
      explanation: "'Background' is the collective noun for one's history and experience."
    }
  },
  {
    word: "backpack",
    partOfSpeech: "noun",
    definition: "a bag carried on the back with shoulder straps",
    example: "Sales representatives carry backpacks with product samples.",
    quiz: {
      question: "The hiking ________ contains all the necessary equipment.",
      options: ["background", "backpack", "back", "packing"],
      answer: 1,
      explanation: "'Backpack' is a bag carried on the back."
    }
  },
  {
    word: "baggage",
    partOfSpeech: "noun",
    definition: "luggage and personal belongings; suitcases and bags",
    example: "Please ensure your baggage is properly labeled before checking in.",
    quiz: {
      question: "The airline lost my ________ during the connecting flight.",
      options: ["baggage", "bag", "bags", "luggages"],
      answer: 0,
      explanation: "'Baggage' is the collective noun for luggage (uncountable)."
    }
  },
  {
    word: "balance",
    partOfSpeech: "noun/verb",
    definition: "(n) equilibrium; remaining amount; (v) to make equal",
    example: "Please check your account balance before making a large purchase.",
    quiz: {
      question: "We need to maintain a healthy work-life ________.",
      options: ["balance", "balanced", "balancing", "balances"],
      answer: 0,
      explanation: "'Balance' is the noun form needed after 'work-life'."
    }
  },
  {
    word: "bank",
    partOfSpeech: "noun/verb",
    definition: "(n) financial institution; (v) to rely on or use",
    example: "The bank approved our loan application for the new equipment.",
    quiz: {
      question: "Please ________ the check before leaving the store.",
      options: ["bank", "banking", "banks", "banked"],
      answer: 0,
      explanation: "'Bank' can mean to deposit money or a check."
    }
  },
  {
    word: "bankrupt",
    partOfSpeech: "adjective/noun",
    definition: "(adj) unable to pay debts; (n) a person declared insolvent",
    example: "The company went bankrupt after the market crash.",
    quiz: {
      question: "Several businesses filed for ________ protection last year.",
      options: ["bankrupt", "bankruptcy", "bank", "banking"],
      answer: 1,
      explanation: "'Bankruptcy' is the noun form for legal protection from creditors."
    }
  },
  {
    word: "barcode",
    partOfSpeech: "noun",
    definition: "a series of lines of varying width that can be read by a scanner",
    example: "Scan the barcode at the checkout to get the price.",
    quiz: {
      question: "Each product has a unique ________ for inventory tracking.",
      options: ["barcode", "code", "bar", "coded"],
      answer: 0,
      explanation: "'Barcode' is the specific term for the scannable product code."
    }
  },
  {
    word: "bargain",
    partOfSpeech: "noun/verb",
    definition: "(n) a good deal or agreement; (v) to negotiate terms",
    example: "We got a bargain on the office furniture at the auction.",
    quiz: {
      question: "The union will ________ for better working conditions.",
      options: ["bargain", "bargaining", "bargained", "bargains"],
      answer: 0,
      explanation: "'Bargain' as a verb means to negotiate."
    }
  },
  {
    word: "basic",
    partOfSpeech: "adjective",
    definition: "fundamental; essential; forming the basis",
    example: "All employees must complete basic safety training.",
    quiz: {
      question: "The ________ features are included in the free version.",
      options: ["basic", "basically", "basis", "base"],
      answer: 0,
      explanation: "'Basic' is the adjective form modifying 'features'."
    }
  },
  {
    word: "behave",
    partOfSpeech: "verb",
    definition: "to act or conduct oneself in a specified way",
    example: "Employees are expected to behave professionally at all times.",
    quiz: {
      question: "The way you ________ in meetings affects how others perceive you.",
      options: ["behave", "behavior", "behavioral", "behaved"],
      answer: 0,
      explanation: "'Behave' is the verb form needed after 'you'."
    }
  },
  {
    word: "belongings",
    partOfSpeech: "noun",
    definition: "personal possessions or items owned by someone",
    example: "Please don't leave personal belongings in the conference room.",
    quiz: {
      question: "Collect your personal ________ before leaving the building.",
      options: ["belong", "belonging", "belongings", "belonged"],
      answer: 2,
      explanation: "'Belongings' is the plural noun for personal possessions."
    }
  },
  {
    word: "beneficial",
    partOfSpeech: "adjective",
    definition: "favorable or advantageous; producing good results",
    example: "Regular exercise is beneficial for employee health and productivity.",
    quiz: {
      question: "The merger will be ________ to both companies.",
      options: ["benefit", "beneficial", "benefited", "benefiting"],
      answer: 1,
      explanation: "'Beneficial' is the adjective form needed after 'will be'."
    }
  },
  {
    word: "benefit",
    partOfSpeech: "noun/verb",
    definition: "(n) an advantage; (v) to receive advantage",
    example: "Health insurance is one of the benefits we offer employees.",
    quiz: {
      question: "Employees ________ from flexible working hours.",
      options: ["benefit", "beneficial", "benefits", "benefiting"],
      answer: 0,
      explanation: "'Benefit' as a verb means to receive an advantage."
    }
  },
  {
    word: "beverage",
    partOfSpeech: "noun",
    definition: "a drink, especially one other than water",
    example: "Coffee and other beverages are provided in the break room.",
    quiz: {
      question: "The conference fee includes lunch and ________.",
      options: ["beverage", "beverages", "beverage's", "beverage-"],
      answer: 1,
      explanation: "'Beverages' is plural as it refers to multiple drinks."
    }
  },
  {
    word: "bid",
    partOfSpeech: "noun/verb",
    definition: "(n) an offer; (v) to offer a price",
    example: "Our company submitted a bid for the government contract.",
    quiz: {
      question: "We decided to ________ on the construction project.",
      options: ["bid", "bidding", "bids", "bidden"],
      answer: 0,
      explanation: "'To bid' means to submit an offer or proposal."
    }
  },
  {
    word: "bill",
    partOfSpeech: "noun/verb",
    definition: "(n) an invoice; (v) to send a statement of charges",
    example: "Please pay the bill by the due date to avoid late fees.",
    quiz: {
      question: "The contractor will ________ us for the additional work.",
      options: ["bill", "billing", "billed", "bills"],
      answer: 0,
      explanation: "'Bill' as a verb means to send an invoice."
    }
  },
  {
    word: "binder",
    partOfSpeech: "noun",
    definition: "a cover with rings for holding papers",
    example: "Keep all meeting notes in the project binder for easy reference.",
    quiz: {
      question: "Organize your documents in a ________ for better portability.",
      options: ["bind", "binder", "binding", "bound"],
      answer: 1,
      explanation: "'Binder' is a folder used to hold papers together."
    }
  },
  {
    word: "blanket",
    partOfSpeech: "noun/adjective",
    definition: "(n) a large piece of fabric; (adj) covering all cases",
    example: "The new policy represents a blanket ban on smoking.",
    quiz: {
      question: "The company issued a ________ warning about email security.",
      options: ["blanket", "blank", "blankets", "blankly"],
      answer: 0,
      explanation: "'Blanket' as an adjective means 'covering all cases'."
    }
  },
  {
    word: "block",
    partOfSpeech: "noun/verb",
    definition: "(n) a solid piece; (v) to prevent movement or progress",
    example: "There's a block of meeting rooms on the third floor.",
    quiz: {
      question: "The construction will ________ the main entrance temporarily.",
      options: ["block", "blocking", "blocked", "blocks"],
      answer: 0,
      explanation: "'Will' is followed by the base verb form 'block'."
    }
  },
  {
    word: "board",
    partOfSpeech: "noun/verb",
    definition: "(n) a group of directors; (v) to get on a vehicle",
    example: "The board of directors meets quarterly to review strategy.",
    quiz: {
      question: "Please ________ the plane at least 30 minutes before departure.",
      options: ["board", "boarding", "boarded", "boards"],
      answer: 0,
      explanation: "'Please' is followed by the base verb form 'board'."
    }
  },
  {
    word: "boarding pass",
    partOfSpeech: "noun",
    definition: "a pass that allows a passenger to board a plane",
    example: "Present your boarding pass at the gate.",
    quiz: {
      question: "Don't forget your ________ when traveling by air.",
      options: ["boarding pass", "board pass", "pass", "ticket"],
      answer: 0,
      explanation: "'Boarding pass' is the correct term for airline travel."
    }
  },
  {
    word: "boardroom",
    partOfSpeech: "noun",
    definition: "a room where a board of directors holds meetings",
    example: "The acquisition was finalized in the boardroom after lengthy discussions.",
    quiz: {
      question: "Executives gathered in the ________ for the annual meeting.",
      options: ["boardroom", "board room", "meeting room", "conference"],
      answer: 0,
      explanation: "'Boardroom' is the specific term for where directors meet."
    }
  },
  {
    word: "boast",
    partOfSpeech: "verb",
    definition: "to possess with pride; to brag about",
    example: "Our facility boasts state-of-the-art equipment.",
    quiz: {
      question: "The hotel can ________ stunning views of the city skyline.",
      options: ["boast", "boasts", "boasting", "boasted"],
      answer: 1,
      explanation: "'The hotel' is singular, so we use 'boasts' with the 's'."
    }
  },
  {
    word: "book",
    partOfSpeech: "noun/verb",
    definition: "(n) a written work; (v) to reserve in advance",
    example: "I need to book a flight to Chicago for the conference.",
    quiz: {
      question: "Have you ________ the hotel for your business trip?",
      options: ["book", "booking", "booked", "books"],
      answer: 2,
      explanation: "Present perfect tense uses 'have + past participle': 'booked'."
    }
  },
  {
    word: "boost",
    partOfSpeech: "noun/verb",
    definition: "(n) an increase; (v) to improve or increase",
    example: "The marketing campaign gave sales a significant boost.",
    quiz: {
      question: "The new policy will ________ employee morale.",
      options: ["boost", "boosting", "boosts", "boosted"],
      answer: 0,
      explanation: "'Will' is followed by the base verb form 'boost'."
    }
  },
  {
    word: "bored",
    partOfSpeech: "adjective",
    definition: "feeling weary and restless through lack of interest",
    example: "Employees who are challenged at work rarely feel bored.",
    quiz: {
      question: "The repetitive tasks made the workers feel ________.",
      options: ["bore", "bored", "boring", "boredom"],
      answer: 1,
      explanation: "'Bored' describes how someone feels; 'boring' describes the task."
    }
  },
  {
    word: "borrow",
    partOfSpeech: "verb",
    definition: "to take and use something with intention of returning",
    example: "May I borrow your laptop for the presentation?",
    quiz: {
      question: "Can I ________ your phone charger? Mine isn't working.",
      options: ["borrow", "lend", "loan", "keep"],
      answer: 0,
      explanation: "'Borrow' means to take temporarily; 'lend' means to give temporarily."
    }
  },
  {
    word: "bother",
    partOfSpeech: "verb",
    definition: "to take trouble; to worry or disturb",
    example: "Please don't bother the manager with minor issues.",
    quiz: {
      question: "Sorry to ________ you, but could you sign this document?",
      options: ["bother", "bothering", "bothered", "bothers"],
      answer: 0,
      explanation: "'Sorry to' is followed by the base verb form 'bother'."
    }
  },
  {
    word: "bottom line",
    partOfSpeech: "noun",
    definition: "the final result; net profit or loss",
    example: "The bottom line is that we need to increase revenue.",
    quiz: {
      question: "The cost-cutting measures improved our ________.",
      options: ["bottom line", "final line", "end line", "base line"],
      answer: 0,
      explanation: "'Bottom line' refers to the net profit or final result."
    }
  },
  {
    word: "branch",
    partOfSpeech: "noun",
    definition: "a local office or shop of a business",
    example: "Our company has branches in 12 countries.",
    quiz: {
      question: "Please visit your nearest bank ________ for assistance.",
      options: ["branch", "branches", "branching", "branched"],
      answer: 0,
      explanation: "'Branch' is singular after 'nearest'."
    }
  },
  {
    word: "brand",
    partOfSpeech: "noun/verb",
    definition: "(n) a product name; (v) to mark with a name",
    example: "Our brand represents quality and reliability.",
    quiz: {
      question: "The company ________ its products with a distinctive logo.",
      options: ["brand", "brands", "branding", "branded"],
      answer: 3,
      explanation: "Past tense 'branded' describes what the company did."
    }
  },
  {
    word: "briefcase",
    partOfSpeech: "noun",
    definition: "a flat case for carrying papers and documents",
    example: "He carries important documents in his leather briefcase.",
    quiz: {
      question: "The sales representative packed samples into her ________.",
      options: ["briefcase", "suitcase", "backpack", "bag"],
      answer: 0,
      explanation: "'Briefcase' is specifically for carrying business documents."
    }
  },
  {
    word: "briefing",
    partOfSpeech: "noun",
    definition: "a meeting to give information or instructions",
    example: "The team attended a briefing before the project launch.",
    quiz: {
      question: "The manager called a ________ to discuss the new policy.",
      options: ["brief", "briefing", "briefed", "briefer"],
      answer: 1,
      explanation: "'Briefing' is a meeting for giving information."
    }
  },
  {
    word: "broadcast",
    partOfSpeech: "noun/verb",
    definition: "(n) a transmission; (v) to transmit by radio or TV",
    example: "The announcement will be broadcast to all employees.",
    quiz: {
      question: "The news ________ reached millions of viewers worldwide.",
      options: ["broadcast", "broadcasting", "broadcasted", "broadcasts"],
      answer: 0,
      explanation: "'Broadcast' is the same in past tense and as a noun."
    }
  },
  {
    word: "broaden",
    partOfSpeech: "verb",
    definition: "to make wider; to expand in scope",
    example: "We need to broaden our customer base to increase sales.",
    quiz: {
      question: "The training program aims to ________ employees' skills.",
      options: ["broad", "broaden", "broadening", "broadened"],
      answer: 1,
      explanation: "'Aims to' is followed by the base verb form 'broaden'."
    }
  },
  {
    word: "browser",
    partOfSpeech: "noun",
    definition: "a software program for accessing websites",
    example: "The website works best on the latest browser versions.",
    quiz: {
      question: "Clear your ________ cache if the page doesn't load properly.",
      options: ["browse", "browser", "browsing", "browsed"],
      answer: 1,
      explanation: "'Browser' is the software used to access websites."
    }
  },
  {
    word: "brush",
    partOfSpeech: "noun/verb",
    definition: "(n) a tool with bristles; (v) to clean with a brush",
    example: "Please brush up on your presentation skills before the meeting.",
    quiz: {
      question: "You should ________ up on your German before the business trip.",
      options: ["brush", "brushing", "brushed", "brushes"],
      answer: 0,
      explanation: "'Brush up on' is a phrasal verb meaning to improve one's knowledge."
    }
  },
  {
    word: "budget",
    partOfSpeech: "noun/verb",
    definition: "(n) a financial plan; (v) to plan spending",
    example: "We need to approve the budget for the next fiscal year.",
    quiz: {
      question: "The department must ________ carefully to avoid overspending.",
      options: ["budget", "budgeting", "budgeted", "budgets"],
      answer: 0,
      explanation: "'Must' is followed by the base verb form 'budget'."
    }
  },
  {
    word: "bulletin",
    partOfSpeech: "noun",
    definition: "a short official statement or news report",
    example: "Check the bulletin board for company announcements.",
    quiz: {
      question: "The company issued a ________ about the office closure.",
      options: ["bulletin", "bullet", "bulletins", "bulleting"],
      answer: 0,
      explanation: "'Bulletin' is a short official statement or announcement."
    }
  },

  // Continue with C words and beyond... (this pattern continues for 500+ words)

  // C - Words 91-150 (abbreviated sample)
  {
    word: "cabin crew",
    partOfSpeech: "noun",
    definition: "the staff responsible for passenger safety on aircraft",
    example: "The cabin crew demonstrated safety procedures before takeoff.",
    quiz: {
      question: "The ________ served beverages and meals during the flight.",
      options: ["cabin crew", "pilots", "staff", "attendants"],
      answer: 0,
      explanation: "'Cabin crew' specifically refers to aircraft staff who attend to passengers."
    }
  },
  {
    word: "cafeteria",
    partOfSpeech: "noun",
    definition: "a restaurant where customers serve themselves",
    example: "Employees can have lunch in the company cafeteria.",
    quiz: {
      question: "The ________ offers a variety of healthy meal options.",
      options: ["cafeteria", "restaurant", "cafe", "diner"],
      answer: 0,
      explanation: "'Cafeteria' is a self-service restaurant."
    }
  },
  {
    word: "calculate",
    partOfSpeech: "verb",
    definition: "to determine mathematically; to estimate",
    example: "Please calculate the total cost including shipping.",
    quiz: {
      question: "We need to ________ the profit margin for each product.",
      options: ["calculate", "calculator", "calculation", "calculated"],
      answer: 0,
      explanation: "'Need to' is followed by the base verb form 'calculate'."
    }
  },
];
