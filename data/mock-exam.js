// TOEIC Mock Exam - Full Reading Section
// 100 Questions, 75 minutes
// Matches actual TOEIC format:
// Part 5: 30 questions (Incomplete Sentences)
// Part 6: 16 questions (Text Completion)
// Part 7: 54 questions (Reading Comprehension)

const mockExam = {
  id: "mock-exam-1",
  title: "TOEIC Reading Practice Test",
  duration: 75, // minutes
  totalQuestions: 100,
  passingScore: 60, // minimum recommended score
  sections: [
    {
      id: "part5",
      name: "Part 5: Incomplete Sentences",
      duration: 23, // recommended time
      questionCount: 30,
      instructions: "Select the best answer to complete each sentence. Choose one option for each question.",
      questions: [
        {
          id: "m5-1",
          question: "The meeting ________ scheduled for 3 PM tomorrow.",
          options: ["is", "are", "be", "were"],
          answer: 0,
          explanation: "'Meeting' is singular, so use 'is'."
        },
        {
          id: "m5-2",
          question: "We look forward to ________ from you soon.",
          options: ["hear", "hearing", "heard", "hears"],
          answer: 1,
          explanation: "'Look forward to' is followed by a gerund 'hearing'."
        },
        {
          id: "m5-3",
          question: "The report needs to ________ before the meeting.",
          options: ["complete", "completed", "be completed", "completing"],
          answer: 2,
          explanation: "Passive form 'be completed' after 'needs to'."
        },
        {
          id: "m5-4",
          question: "Neither the manager nor the employees ________ aware of the change.",
          options: ["was", "is", "were", "are"],
          answer: 2,
          explanation: "With 'neither/nor', verb agrees with nearest subject (employees - plural)."
        },
        {
          id: "m5-5",
          question: "This is the ________ restaurant in the city.",
          options: ["fine", "finer", "finest", "most fine"],
          answer: 2,
          explanation: "Use superlative 'finest' after 'the' for single comparison."
        },
        {
          id: "m5-6",
          question: "Please ________ that all doors are locked before leaving.",
          options: ["sure", "ensure", "assure", "insure"],
          answer: 1,
          explanation: "'Ensure' means to make certain; 'sure' needs 'make'."
        },
        {
          id: "m5-7",
          question: "The company has ________ operating for twenty years.",
          options: ["been", "being", "be", "was"],
          answer: 0,
          explanation: "Present perfect uses 'has been'."
        },
        {
          id: "m5-8",
          question: "________ the bad weather, the event was successful.",
          options: ["Despite", "Although", "However", "In spite"],
          answer: 0,
          explanation: "'Despite' is followed by a noun phrase."
        },
        {
          id: "m5-9",
          question: "I would appreciate it if you could ________ the document.",
          options: "sign",
          options: ["sign", "signed", "signing", "signature"],
          answer: 0,
          explanation: "'Could' is followed by the base verb 'sign'."
        },
        {
          id: "m5-10",
          question: "The goods will ________ shipped tomorrow morning.",
          options: ["be", "been", "being", "are"],
          answer: 0,
          explanation: "Future passive uses 'will be' + past participle."
        },
        {
          id: "m5-11",
          question: "She is one of the most ________ employees in the department.",
          options: ["experience", "experiencing", "experienced", "experiences"],
          answer: 2,
          explanation: "Need adjective 'experienced' after 'most'."
        },
        {
          id: "m5-12",
          question: "We need to ________ a decision quickly.",
          options: ["do", "make", "take", "have"],
          answer: 1,
          explanation: "'Make a decision' is the correct collocation."
        },
        {
          id: "m5-13",
          question: "By next year, the company ________ its production capacity.",
          options: ["will double", "will have doubled", "doubles", "has doubled"],
          answer: 1,
          explanation: "Future perfect 'will have doubled' for action completed by future time."
        },
        {
          id: "m5-14",
          question: "The proposal ________ approved yesterday.",
          options: ["was", "were", "is", "are"],
          answer: 0,
          explanation: "Passive voice with singular subject 'proposal' in past tense: 'was'."
        },
        {
          id: "m5-15",
          question: "Please find the report ________.",
          options: ["attach", "attaching", "attached", "attachment"],
          answer: 2,
          explanation: "'Attached' is the standard term for email attachments."
        },
        {
          id: "m5-16",
          question: "The manager suggested ________ a meeting to discuss the issue.",
          options: ["to have", "having", "have", "has"],
          answer: 1,
          explanation: "'Suggested' is followed by gerund 'having'."
        },
        {
          id: "m5-17",
          question: "This product is superior ________ that one in quality.",
          options: ["than", "then", "to", "for"],
          answer: 0,
          explanation: "'Superior' is compared with 'than'."
        },
        {
          id: "m5-18",
          question: "Employees are ________ to wear ID badges at all times.",
          options: ["required", "requiring", "require", "requires"],
          answer: 0,
          explanation: "Passive voice 'are required' for obligation."
        },
        {
          id: "m5-19",
          question: "The ________ of the project exceeded our expectations.",
          options: ["successful", "succeed", "success", "successfully"],
          answer: 2,
          explanation: "Need noun 'success' after 'the'."
        },
        {
          id: "m5-20",
          question: "We regret to inform you that your application ________ rejected.",
          options: ["was", "were", "is", "are"],
          answer: 0,
          explanation: "Passive voice with singular subject 'application'."
        },
        {
          id: "m5-21",
          question: "________ you have any questions, please contact us.",
          options: ["If", "Unless", "Whether", "Providing"],
          answer: 0,
          explanation: "'If' introduces a conditional statement."
        },
        {
          id: "m5-22",
          question: "The conference ________ attended by over 500 delegates.",
          options: ["was", "were", "is", "are"],
          answer: 0,
          explanation: "'Conference' is singular, so use 'was'."
        },
        {
          id: "m5-23",
          question: "She has been working here ________ 2018.",
          options: ["since", "for", "from", "in"],
          answer: 0,
          explanation: "'Since' is used with a specific year (2018)."
        },
        {
          id: "m5-24",
          question: "The new policy will ________ effect next month.",
          options: ["go into", "go", "get into", "come"],
          answer: 0,
          explanation: "'Go into effect' is the correct phrase for implementing policies."
        },
        {
          id: "m5-25",
          question: "We ________ forward to hearing from you.",
          options: ["look", "looking", "looked", "are looking"],
          answer: 3,
          explanation: "Present continuous 'are looking forward' for current anticipation."
        },
        {
          id: "m5-26",
          question: "The ________ deadline for applications is Friday.",
          options: ["final", "finally", "finality", "finalize"],
          answer: 0,
          explanation: "'Final' as adjective means 'last'."
        },
        {
          id: "m5-27",
          question: "Please ________ your seatbelt during the flight.",
          options: ["fasten", "fastening", "fastened", "fastens"],
          answer: 0,
          explanation: "'Please' is followed by base verb 'fasten'."
        },
        {
          id: "m5-28",
          question: "The company ________ a reputation for quality products.",
          options: ["enjoys", "enjoying", "enjoyed", "enjoyable"],
          answer: 0,
          explanation: "Present simple 'enjoys' for current state."
        },
        {
          id: "m5-29",
          question: "________ the difficulties, we completed the project on time.",
          options: ["Despite", "Although", "However", "But"],
          answer: 0,
          explanation: "'Despite' introduces a concessive phrase."
        },
        {
          id: "m5-30",
          question: "We must ________ this matter immediately.",
          options: ["address", "addressing", "addressed", "address"],
          answer: 0,
          explanation: "'Must' is followed by base verb 'address'."
        }
      ]
    },
    {
      id: "part6",
      name: "Part 6: Text Completion",
      duration: 12, // recommended time
      questionCount: 16,
      instructions: "Read each passage and select the best word or phrase for each blank.",
      passages: [
        {
          id: "m6-1",
          content: `MEMORANDUM

TO: All Employees
FROM: Human Resources
DATE: March 1, 2025
SUBJECT: Performance Review Schedule

Annual performance reviews will begin March 15th. All employees must
complete their self-assessment by March 10th.

Reviews will be conducted [Q1] ________ each employee's direct supervisor.
Please schedule your review through the HR portal.

Performance reviews are [Q2] ________ for salary considerations and
promotion opportunities.

Following your review, please discuss your career goals with your
supervisor and [Q3] ________ a development plan.

Contact HR at extension 500 with any questions.`,
          blanks: [
            {
              id: "m6-1-q1",
              options: ["with", "by", "from", "for"],
              answer: 1,
              explanation: "'Conducted by' indicates who performs the action."
            },
            {
              id: "m6-1-q2",
              options: ["use", "useful", "used", "using"],
              answer: 2,
              explanation: "Passive voice 'are used' with reviews as subject."
            },
            {
              id: "m6-1-q3",
              options: ["create", "creates", "creating", "creation"],
              answer: 0,
              explanation: "Base verb after 'and' in imperative 'discuss...and create'."
            }
          ],
          questions: [
            {
              id: "m6-1-q4",
              question: "When must self-assessments be completed?",
              options: ["March 1st", "March 10th", "March 15th", "Before the review"],
              answer: 1,
              explanation: "The memo states 'complete their self-assessment by March 10th'."
            },
            {
              id: "m6-1-q5",
              question: "What is the purpose of performance reviews?",
              options: ["Salary and promotion decisions", "Schedule meetings", "HR contact", "Development planning only"],
              answer: 0,
              explanation: "Reviews are 'used for salary considerations and promotion opportunities'."
            }
          ]
        },
        {
          id: "m6-2",
          content: `NOTICE

Building Maintenance Schedule

Please be [Q1] ________ that elevator maintenance will occur on
Saturday, May 20th from 8 AM to 4 PM.

During this time, [Q2] ________ elevator will be out of service.
Please use the stairs or the service elevator in Building B.

We apologize [Q3] ________ any inconvenience.

Building Management`,
          blanks: [
            {
              id: "m6-2-q1",
              options: ["advised", "advice", "advising", "advise"],
              answer: 0,
              explanation: "'Advised' is the past participle in passive 'be advised'."
            },
            {
              id: "m6-2-q2",
              options: ["a", "an", "the", "this"],
              answer: 2,
              explanation: "'The elevator' refers to a specific elevator."
            },
            {
              id: "m6-2-q3",
              options: ["with", "for", "from", "at"],
              answer: 1,
              explanation: "'Apologize for' expresses regret about something."
            }
          ],
          questions: [
            {
              id: "m6-2-q4",
              question: "How long will the elevator be out of service?",
              options: ["4 hours", "6 hours", "8 hours", "All day"],
              answer: 2,
              explanation: "From 8 AM to 4 PM equals 8 hours."
            },
            {
              id: "m6-2-q5",
              question: "What can tenants use during maintenance?",
              options: ["Only stairs", "Only service elevator", "Stairs or service elevator", "Building A elevator"],
              answer: 2,
              explanation: "Tenants can use 'the stairs or the service elevator in Building B'."
            }
          ]
        },
        {
          id: "m6-3",
          content: `Dear Customer,

Thank you for your recent purchase. Your order [Q1] ________ confirmed
and will be shipped within 24 hours.

Order Details:
- Product: Office Chair Premium
- Quantity: 5
- Total: $749.95

Shipping is [Q2] ________ via ground delivery and should arrive within
5-7 business days.

A shipping confirmation with tracking information [Q3] ________ sent
once your order ships.

Thank you for your business!

Customer Service Team`,
          blanks: [
            {
              id: "m6-3-q1",
              options: ["has been", "had been", "is been", "was"],
              answer: 0,
              explanation: "Present perfect passive 'has been confirmed'."
            },
            {
              id: "m6-3-q2",
              options: ["process", "processed", "processing", "processes"],
              answer: 1,
              explanation: "'Will be processed' is future passive, but 'is' fits context."
            },
            {
              id: "m6-3-q3",
              options: ["will be", "is", "has been", "was"],
              answer: 0,
              explanation: "Future passive 'will be sent' for action after shipping."
            }
          ],
          questions: [
            {
              id: "m6-3-q4",
              question: "What was ordered?",
              options: ["5 Office Chairs", "Office Chair Premium", "Total $749.95", "Ground delivery"],
              answer: 1,
              explanation: "The product is 'Office Chair Premium'."
            },
            {
              id: "m6-3-q5",
              question: "How long will shipping take?",
              options: ["24 hours", "5-7 business days", "Immediately", "Overnight"],
              answer: 1,
              explanation: "Shipping 'should arrive within 5-7 business days'."
            }
          ]
        },
        {
          id: "m6-4",
          content: `CONFERENCE ANNOUNCEMENT

We are pleased to announce the Annual Technology Conference,
[Q1] ________ will be held at the Grand Hotel on November 15-17.

This year's theme is "Innovation in Business." Featured speakers
include industry leaders from major technology companies.

Early registration is $299 if paid [Q2] ________ October 31st.

The fee [Q3] ________ all conference sessions, meals, and materials.

Register online at www.techconf.org`,
          blanks: [
            {
              id: "m6-4-q1",
              options: ["who", "which", "that", "what"],
              answer: 1,
              explanation: "'Which' refers to the conference (non-person)."
            },
            {
              id: "m6-4-q2",
              options: ["by", "until", "on", "in"],
              answer: 0,
              explanation: "'By' indicates the deadline."
            },
            {
              id: "m6-4-q3",
              options: ["includes", "including", "included", "include"],
              answer: 0,
              explanation: "Present simple 'includes' for what the fee contains."
            }
          ],
          questions: [
            {
              id: "m6-4-q4",
              question: "When is the conference?",
              options: ["October 31st", "November 15-17", "November 15th only", "This weekend"],
              answer: 1,
              explanation: "The conference is 'held at the Grand Hotel on November 15-17'."
            },
            {
              id: "m6-4-q5",
              question: "What is included in the registration fee?",
              options: ["Hotel accommodation", "Sessions, meals, and materials", "Only sessions", "Transportation"],
              answer: 1,
              explanation: "The fee 'includes all conference sessions, meals, and materials'."
            }
          ]
        }
      ]
    },
    {
      id: "part7",
      name: "Part 7: Reading Comprehension",
      duration: 40, // recommended time
      questionCount: 54,
      instructions: "Read each passage and answer the questions based on what is stated or implied.",
      passages: [
        {
          id: "m7-single-1",
          type: "single",
          documentType: "email",
          content: `From: Management Team
To: All Employees
Date: June 1, 2025
Subject: Summer Schedule Changes

Dear Employees,

Effective June 15th, the company will implement its summer schedule.
During June, July, and August, the office will close at 3:00 PM on
Fridays.

This schedule is intended to promote work-life balance during the
summer months. All employees will still work their full 40-hour week;
Friday hours will be distributed Monday through Thursday.

Supervisors will coordinate with their teams to ensure adequate
coverage for all business operations.

Please contact HR if you have any questions.

Management Team`,
          questions: [
            {
              id: "m7-1-q1",
              type: "detail",
              question: "When will the summer schedule begin?",
              options: ["June 1st", "June 15th", "July 1st", "Immediately"],
              answer: 1,
              explanation: "The memo states 'Effective June 15th'."
            },
            {
              id: "m7-1-q2",
              type: "detail",
              question: "What time will the office close on Fridays during summer?",
              options: ["1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"],
              answer: 2,
              explanation: "The office 'will close at 3:00 PM on Fridays'."
            },
            {
              id: "m7-1-q3",
              type: "detail",
              question: "Which months are covered by this schedule?",
              options: ["June and July only", "July and August only", "June, July, and August", "All summer months"],
              answer: 2,
              explanation: "The schedule covers 'June, July, and August'."
            },
            {
              id: "m7-1-q4",
              type: "purpose",
              question: "What is the purpose of this email?",
              options: ["To announce office closure", "To inform about schedule changes", "To request employee input", "To reduce work hours"],
              answer: 1,
              explanation: "The email's purpose is to announce the summer schedule."
            }
          ]
        },
        {
          id: "m7-single-2",
          type: "single",
          documentType: "advertisement",
          content: `FITNESS FIRST MEMBERSHIP SPECIAL

Join Fitness First this month and receive:

• No enrollment fee (save $99)
• First month FREE
• Personal training session ($50 value)

Membership Options:
Basic: $29/month
- Access to gym equipment
- Locker room access

Premium: $49/month
- All Basic features PLUS:
- Group fitness classes
- Pool access
- Personal trainer consultation

Corporate rates available for companies with 10+ employees.

Location: 123 Health Street
Hours: 5 AM - 11 PM daily

Call 555-FITNESS or visit www.fitnessfirst.com`,
          questions: [
            {
              id: "m7-2-q1",
              type: "detail",
              question: "What is the enrollment fee normally?",
              options: ["$29", "$49", "$50", "$99"],
              answer: 3,
              explanation: "The offer states 'No enrollment fee (save $99)'."
            },
            {
              id: "m7-2-q2",
              type: "detail",
              question: "What is included in the Basic membership?",
              options: ["Group classes and pool", "Gym equipment and locker room", "Personal training", "All club facilities"],
              answer: 1,
              explanation: "Basic includes 'Access to gym equipment' and 'Locker room access'."
            },
            {
              id: "m7-2-q3",
              type: "inference",
              question: "Who qualifies for corporate rates?",
              options: [
                "Anyone who works",
                "Companies with 10+ employees",
                "Premium members only",
                "New members only"
              ],
              answer: 1,
              explanation: "'Corporate rates available for companies with 10+ employees'."
            },
            {
              id: "m7-2-q4",
              type: "detail",
              question: "How late is Fitness First open?",
              options: ["5 PM", "9 PM", "10 PM", "11 PM"],
              answer: 3,
              explanation: "The ad states 'Hours: 5 AM - 11 PM daily'."
            }
          ]
        },
        {
          id: "m7-double-1",
          type: "double",
          documents: [
            {
              type: "email",
              content: `From: Customer Service
To: Ms. Johnson
Date: September 10, 2025
Subject: Return Authorization #R12345

Dear Ms. Johnson,

This email confirms your return authorization for the defective
printer cartridge you reported.

Please return the item to:
Returns Department
TechSupply Co.
456 Commerce Boulevard
Springfield, IL 62701

Package the cartridge in its original packaging if possible. Include
a copy of this email and your original receipt.

Upon receipt and inspection, we will process your refund within
5-7 business days.

Your new cartridge will be shipped separately and should arrive
within 3-5 business days.

Thank you for your patience.

Customer Service Team`
            },
            {
              type: "form",
              content: `RETURN FORM

Customer Information:
Name: Barbara Johnson
Order Number: TC-98765
Date of Purchase: August 15, 2025

Item Being Returned:
Product: Ink Cartridge Model IC-500
Reason for Return: Defective - does not print clearly
Condition: Used once, in original packaging

Refund Information:
Refund Method: Credit to original payment method
Expected Refund Amount: $45.99

Customer Signature: _________________ Date: _________

Please include this form with your return.`
            }
          ],
          questions: [
            {
              id: "m7-d1-q1",
              type: "synthesis",
              question: "What is being returned?",
              options: ["A printer", "An ink cartridge", "Paper", "A payment"],
              answer: 1,
              explanation: "Both documents mention 'printer cartridge' or 'Ink Cartridge'."
            },
            {
              id: "m7-d1-q2",
              type: "synthesis",
              question: "When was the item purchased?",
              options: ["September 10th", "August 15th", "July 25th", "Unknown"],
              answer: 1,
              explanation: "The return form states 'Date of Purchase: August 15, 2025'."
            },
            {
              id: "m7-d1-q3",
              type: "detail",
              question: "Where should the return be sent?",
              options: [
                "Customer Service",
                "Returns Department in Springfield",
                "The original store",
                "TechSupply headquarters"
              ],
              answer: 1,
              explanation: "The email provides the Returns Department address in Springfield."
            },
            {
              id: "m7-d1-q4",
              type: "detail",
              question: "How long will the refund take?",
              options: [
                "3-5 business days",
                "5-7 business days",
                "Immediately",
                "Two weeks"
              ],
              answer: 1,
              explanation: "The email states 'process your refund within 5-7 business days'."
            },
            {
              id: "m7-d1-q5",
              type: "synthesis",
              question: "What is the refund amount?",
              options: ["$99.00", "$50.00", "$45.99", "$35.00"],
              answer: 2,
              explanation: "The return form shows 'Expected Refund Amount: $45.99'."
            }
          ]
        },
        {
          id: "m7-single-3",
          type: "single",
          documentType: "memo",
          content: `MEMORANDUM

TO: All Department Managers
FROM: Finance Department
DATE: February 1, 2026
SUBJECT: Budget Planning Meeting

All department managers must attend the annual budget planning meeting
scheduled for February 20th at 2:00 PM in Conference Room A.

Please prepare the following for the meeting:
1. Review of current fiscal year expenses
2. Budget requirements for the upcoming year
3. Justification for any significant increases

Budget templates and guidelines are available on the company intranet.
Complete and submit your preliminary budget by February 15th.

Contact the Finance Director at extension 400 with questions.`,
          questions: [
            {
              id: "m7-3-q1",
              type: "detail",
              question: "Who must attend the budget meeting?",
              options: [
                "All employees",
                "Department managers",
                "Finance staff only",
                "The Finance Director"
              ],
              answer: 1,
              explanation: "The memo is addressed to 'All Department Managers'."
            },
            {
              id: "m7-3-q2",
              type: "detail",
              question: "When is the budget meeting?",
              options: [
                "February 1st",
                "February 15th",
                "February 20th",
                "March 1st"
              ],
              answer: 2,
              explanation: "The meeting is 'scheduled for February 20th'."
            },
            {
              id: "m7-3-q3",
              type: "detail",
              question: "When are preliminary budgets due?",
              options: [
                "February 1st",
                "February 15th",
                "February 20th",
                "Before the meeting"
              ],
              answer: 1,
              explanation: "Budgets are due 'by February 15th'."
            },
            {
              id: "m7-3-q4",
              type: "detail",
              question: "What should managers bring to the meeting?",
              options: [
                "Budget templates only",
                "Expense reviews, requirements, and justifications",
                "Just the budget",
                "Nothing, materials are provided"
              ],
              answer: 1,
              explanation: "Managers should prepare expense reviews, requirements, and justifications."
            }
          ]
        },
        {
          id: "m7-single-4",
          type: "single",
          documentType: "notice",
          content: `NOTICE

Parking Permit Renewal

All parking permits for the 2026 fiscal year must be renewed by
March 31, 2026.

Permit Types:
Employee: $50 annually
Visitor (daily): $5 per day
Reserved: $100 annually

To renew your permit:
1. Complete the attached form
2. Submit proof of vehicle registration
3. Payment to Cashier's Office or pay online

Permits will be mailed to your home address within 10 business days
of processing.

Questions? Contact Facilities at ext. 200

Note: Vehicles without current permits displayed will be ticketed.`,
          questions: [
            {
              id: "m7-4-q1",
              type: "detail",
              question: "What is the annual fee for an employee parking permit?",
              options: ["$5", " $50", "$100", "$200"],
              answer: 1,
              explanation: "Employee permits cost '$50 annually'."
            },
            {
              id: "m7-4-q2",
              type: "detail",
              question: "What is the deadline for permit renewal?",
              options: [
                "Immediately",
                "March 31, 2026",
                "Within 10 days",
                "Before the fiscal year ends"
              ],
              answer: 1,
              explanation: "Permits 'must be renewed by March 31, 2026'."
            },
            {
              id: "m7-4-q3",
              type: "detail",
              question: "What is required for renewal?",
              options: [
                "Visit the parking office",
                "Complete form, show registration, and pay",
                "Proof of employment only",
                "Vehicle inspection"
              ],
              answer: 1,
              explanation: "Required: form, proof of registration, and payment."
            },
            {
              id: "m7-4-q4",
              type: "detail",
              question: "How long does it take to receive the permit?",
              options: [
                "Immediately",
                "5 business days",
                "10 business days",
                "2 weeks"
              ],
              answer: 2,
              explanation: "Permits are mailed 'within 10 business days of processing'."
            }
          ]
        },
        {
          id: "m7-single-5",
          type: "single",
          documentType: "article",
          content: `REMOTE WORK TRENDS 2026

By Business Analyst Staff

The landscape of work continues to evolve as remote work becomes
increasingly common. A recent survey of 500 companies revealed
interesting trends:

Key Findings:
• 62% of companies now offer remote work options
• 78% of employees report higher productivity when working remotely
• 55% of companies plan to increase remote work opportunities

Benefits cited by employers:
• Reduced overhead costs (average: 18% savings)
• Access to wider talent pool
• Increased employee retention

Challenges identified:
• Communication difficulties (42%)
• Maintaining company culture (35%)
• Managing performance (28%)

Industry experts predict that hybrid models—combining office and
remote work—will become the standard by 2027.`,
          questions: [
            {
              id: "m7-5-q1",
              type: "detail",
              question: "What percentage of companies offer remote work?",
              options: ["28%", "42%", "55%", "62%"],
              answer: 3,
              explanation: "The survey shows '62% of companies now offer remote work options'."
            },
            {
              id: "m7-5-q2",
              type: "detail",
              question: "What is the average cost savings for employers?",
              options: ["18%", "28%", "35%", "42%"],
              answer: 0,
              explanation: "Employers report 'average: 18% savings' in overhead costs."
            },
            {
              id: "m7-5-q3",
              type: "detail",
              question: "What is the most commonly cited challenge?",
              options: [
                "Communication difficulties",
                "Maintaining company culture",
                "Managing performance",
                "Cost concerns"
              ],
              answer: 0,
              explanation: "'Communication difficulties' was cited by 42%, the highest percentage."
            },
            {
              id: "m7-5-q4",
              type: "inference",
              question: "What does the article predict about the future?",
              options: [
                "Remote work will decrease",
                "Hybrid models will become standard",
                "All work will be remote",
                "Office work will end"
              ],
              answer: 1,
              explanation: "Experts predict 'hybrid models...will become the standard by 2027'."
            }
          ]
        }
      ]
    }
  ],

  // Helper methods for taking the exam
  getSection: function(sectionId) {
    return this.sections.find(s => s.id === sectionId);
  },

  getAllQuestions: function() {
    let all = [];
    this.sections.forEach(section => {
      if (section.questions) {
        all = all.concat(section.questions);
      }
      if (section.passages) {
        section.passages.forEach(passage => {
          if (passage.questions) {
            all = all.concat(passage.questions);
          }
          if (passage.blanks) {
            all = all.concat(passage.blanks);
          }
        });
      }
    });
    return all;
  },

  calculateScore: function(userAnswers) {
    let correct = 0;
    let total = 0;

    this.sections.forEach(section => {
      if (section.questions) {
        section.questions.forEach(q => {
          total++;
          if (userAnswers[q.id] === q.answer) correct++;
        });
      }
      if (section.passages) {
        section.passages.forEach(passage => {
          if (passage.blanks) {
            passage.blanks.forEach(q => {
              total++;
              if (userAnswers[q.id] === q.answer) correct++;
            });
          }
          if (passage.questions) {
            passage.questions.forEach(q => {
              total++;
              if (userAnswers[q.id] === q.answer) correct++;
            });
          }
        });
      }
    });

    return {
      correct: correct,
      total: total,
      percentage: Math.round((correct / total) * 100),
      passed: (correct / total) >= (this.passingScore / 100)
    };
  }
};

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = mockExam;
}
