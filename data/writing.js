// TOEIC Writing Section: Email Response Practice
// Prompts for writing professional business emails with sample responses

const writingPrompts = [
  // Type 1: Responding to Inquiries (5 prompts)
  {
    id: "writing-1",
    type: "respond_to_inquiry",
    category: "customer_service",
    title: "Product Information Inquiry",
    incomingEmail: {
      from: "customer@email.com",
      to: "sales@company.com",
      subject: "Question about OfficePro 5000",
      date: "October 15, 2025",
      body: `Dear Sales Team,

I am interested in purchasing the OfficePro 5000 software for my
company. I have a few questions:

1. What is the price per user license?
2. Do you offer discounts for bulk purchases?
3. Is training included with the purchase?

I would appreciate your prompt response.

Thank you,
John Martinez
Operations Manager
ABC Corporation`
    },
    requirements: {
      information: [2, 3],
      questions: [1, 2]
    },
    task: "Write a response email that: (1) provides pricing information, (2) explains discount options, (3) mentions training availability, and (4) asks about their company size.",
    tips: [
      "Use a professional greeting",
      "Address all three questions from the inquiry",
      "Include a call to action",
      "Close professionally"
    ],
    sampleResponse: `Dear Mr. Martinez,

Thank you for your interest in OfficePro 5000. I am pleased to provide
the information you requested:

1. Pricing: $149 per user per month for annual subscriptions, or $199
   for monthly billing.

2. Volume Discounts: We offer tiered pricing for bulk purchases:
   - 10-24 users: 10% discount
   - 25-49 users: 15% discount
   - 50+ users: 20% discount

3. Training: All subscriptions include access to our online training
   portal, and on-site training is available for an additional fee.

Approximately how many users would your company require? This will help
me provide a more accurate quote.

Please let me know if you need any additional information.

Best regards,
Sales Team
OfficePro Solutions`,
    evaluationCriteria: [
      "Addresses all three questions from the original email",
      "Provides 2 pieces of information (pricing, discounts, training)",
      "Asks 1-2 relevant questions",
      "Maintains professional tone throughout",
      "Uses proper email format (salutation, body, closing)",
      "Is clear and concise"
    ]
  },

  {
    id: "writing-2",
    type: "respond_to_inquiry",
    category: "customer_service",
    title: "Hotel Reservation Inquiry",
    incomingEmail: {
      from: "guest@email.com",
      to: "reservations@grandhotel.com",
      subject: "Room Reservation for November",
      date: "September 28, 2025",
      body: `Dear Grand Hotel,

I am planning to visit your city for a business conference in
November. I would like to know:

1. Do you have rooms available from November 12-15?
2. What is your nightly rate for a business room?
3. Is airport shuttle service available?

Also, do you offer any corporate rates?

Best regards,
Sarah Lee`
    },
    requirements: {
      information: [2, 3],
      questions: [1, 2]
    },
    task: "Write a response email confirming availability, providing rate information, explaining shuttle service, and asking about their company.",
    tips: [
      "Begin with availability confirmation",
      "Include specific pricing details",
      "Mention additional services available",
      "Ask for booking confirmation"
    ],
    sampleResponse: `Dear Ms. Lee,

Thank you for your inquiry about Grand Hotel accommodations. I am pleased
to confirm that we have business rooms available for your requested dates
of November 12-15.

Our business room rate is $189 per night, which includes:
- Complimentary breakfast
- High-speed internet access
- Use of our business center
- Daily newspaper

Regarding your question about airport transportation, we do provide a
complimentary shuttle that runs every 30 minutes from 6:00 AM to 10:00 PM
daily.

For corporate rates, we offer a 15% discount for guests with a valid
company ID. May I ask which company you represent?

We look forward to welcoming you to Grand Hotel. Please let us know if
you would like to make a reservation.

Sincerely,
Reservations Team
Grand Hotel`,
    evaluationCriteria: [
      "Confirms room availability",
      "Provides room rate and details",
      "Explains shuttle service",
      "Mentions corporate discount",
      "Asks about company for corporate rate",
      "Professional tone and format"
    ]
  },

  {
    id: "writing-3",
    type: "respond_to_inquiry",
    category: "customer_service",
    title: "Course Registration Inquiry",
    incomingEmail: {
      from: "student@email.com",
      to: "info@languagecenter.com",
      subject: "Information about Business English Course",
      date: "January 10, 2026",
      body: `Dear Language Center,

I saw your advertisement for the Business English course and am
interested in enrolling. Could you please tell me:

1. When does the next course start?
2. How long is the course?
3. What is the total fee?

Also, is there a placement test required?

Thank you in advance,
Maria Garcia`
    },
    requirements: {
      information: [2, 3],
      questions: [1, 2]
    },
    task: "Write a response providing course details, explaining fees, describing placement testing, and asking about the student's current English level.",
    tips: [
      "Provide clear course schedule information",
      "Break down all costs clearly",
      "Explain the placement process",
      "Encourage enrollment"
    ],
    sampleResponse: `Dear Ms. Garcia,

Thank you for your interest in our Business English course! I am happy
to provide the information you requested:

Course Schedule:
Our next Business English course begins on February 3rd and runs for
12 weeks, with classes held every Tuesday and Thursday from 6:00 PM to
8:30 PM.

Course Fees:
- Tuition: $895
- Materials fee: $75
- Registration fee: $50
- Total: $1,020

Regarding your question about placement: Yes, we do require a brief
placement test to ensure students are assigned to the appropriate level.
The test takes approximately 30 minutes and can be completed online or
at our center.

May I ask about your current English proficiency level? This will help
us recommend the most suitable class for you.

If you have any other questions, please don't hesitate to contact us.

Best regards,
Admissions Office
Language Center`,
    evaluationCriteria: [
      "Provides start date and duration",
      "Lists all fees clearly",
      "Explains placement test requirement",
      "Asks about English level",
      "Friendly and helpful tone",
      "Proper email format"
    ]
  },

  {
    id: "writing-4",
    type: "respond_to_inquiry",
    category: "customer_service",
    title: "Shipping Information Request",
    incomingEmail: {
      from: "buyer@email.com",
      to: "orders@onlinestore.com",
      subject: "Question about Shipping Options",
      date: "December 5, 2025",
      body: `Dear OnlineStore Customer Service,

I would like to order a laptop from your website but have questions
about shipping:

1. What shipping options do you offer?
2. How long does each option take?
3. Do you ship internationally?

I live in Canada.

Thank you for your help,
David Chen`
    },
    requirements: {
      information: [2, 3],
      questions: [1, 2]
    },
    task: "Write a response explaining shipping options, delivery times, international shipping to Canada, and asking about the specific laptop model.",
    tips: [
      "List all shipping options clearly",
      "Include both time and cost information",
      "Explain any international shipping restrictions",
      "Offer assistance with the order"
    ],
    sampleResponse: `Dear Mr. Chen,

Thank you for your inquiry about our shipping options. I am happy to
provide the following information:

Shipping Options:
1. Standard Shipping (5-7 business days) - FREE
2. Express Shipping (2-3 business days) - $15
3. Next Day Air (1 business day) - $35

International Shipping:
Yes, we do ship to Canada! International shipping costs are calculated
based on weight and destination. Typically, shipping to Canada takes
7-10 business days via our standard international service ($25), or
3-5 business days via express international service ($45).

Please note: Some electronic items may have additional restrictions
for international shipping.

May I ask which laptop model you are interested in purchasing? This will
allow me to confirm international availability and provide a complete
shipping quote.

Please let us know if you have any other questions.

Best regards,
Customer Service Team
OnlineStore`,
    evaluationCriteria: [
      "Lists all shipping options with times and costs",
      "Confirms international shipping to Canada",
      "Provides international shipping timeframes and costs",
      "Mentions possible restrictions",
      "Asks about specific laptop model",
      "Professional and helpful tone"
    ]
  },

  {
    id: "writing-5",
    type: "respond_to_inquiry",
    category: "customer_service",
    title: "Job Application Inquiry",
    incomingEmail: {
      from: "applicant@email.com",
      to: "hr@techcorp.com",
      subject: "Question about Marketing Position",
      date: "March 8, 2026",
      body: `Dear HR Department,

I am interested in applying for the Marketing Manager position I saw
advertised on your website. Could you please tell me:

1. What is the application deadline?
2. Should I include salary requirements with my application?
3. Are remote work options available?

Thank you for your time,
Jennifer Park`
    },
    requirements: {
      information: [2, 3],
      questions: [1, 2]
    },
    task: "Write a response providing the deadline, explaining the application process regarding salary, describing work arrangement options, and asking about the applicant's years of experience.",
    tips: [
      "Provide clear deadline information",
      "Give professional advice on salary disclosure",
      "Be honest about work arrangement policies",
      "Encourage the application"
    ],
    sampleResponse: `Dear Ms. Park,

Thank you for your interest in the Marketing Manager position at
TechCorp! I am pleased to provide the information you requested:

Application Deadline:
The deadline for applications is March 31st. However, we encourage
early submissions as we will begin interviewing qualified candidates
on a rolling basis.

Salary Requirements:
Including salary requirements is optional. We prefer to discuss
compensation during the interview process after both parties have had
a chance to discuss the role and qualifications.

Work Arrangements:
Our Marketing Manager position is primarily based in our headquarters
with a hybrid schedule option (3 days in office, 2 days remote) after
the initial training period.

May I ask how many years of marketing experience you have? This will help
us determine if your background matches our requirements.

We look forward to receiving your application!

Best regards,
HR Department
TechCorp`,
    evaluationCriteria: [
      "Provides the application deadline",
      "Explains optional nature of salary requirements",
      "Describes hybrid work arrangement",
      "Asks about experience",
      "Welcoming and professional tone",
      "Proper email structure"
    ]
  },

  // Type 2: Making Requests (5 prompts)
  {
    id: "writing-6",
    type: "make_request",
    category: "business_communication",
    title: "Requesting Meeting Room",
    incomingEmail: {
      from: "employee@company.com",
      to: "admin@company.com",
      subject: "Meeting Room Reservation",
      date: "April 12, 2026",
      body: `Dear Administration,

I need to organize a client presentation for our department.`
    },
    requirements: {
      information: [2, 3],
      questions: [1, 2]
    },
    task: "Write an email requesting a meeting room. Include: your preferred date and time, room capacity needed, and AV equipment requirements. Ask about availability and confirmation process.",
    tips: [
      "Be specific about date, time, and duration",
      "Clearly state room size/capacity needed",
      "List all equipment requirements",
      "Ask for confirmation timeline"
    ],
    sampleResponse: `Dear Administration,

I would like to request a meeting room reservation for an upcoming
client presentation.

Details:
- Date: Friday, April 25th
- Time: 2:00 PM - 4:00 PM
- Room capacity needed: 15-20 people
- Equipment required: Projector, screen, conference phone, and
  whiteboard

Could you please check availability for this time? Additionally, what
is your process for confirming room reservations?

Thank you for your assistance.

Best regards,
Project Manager
Marketing Department`,
    evaluationCriteria: [
      "Includes specific date and time",
      "States capacity requirements",
      "Lists equipment needed",
      "Asks about availability",
      "Asks about confirmation process",
      "Professional tone"
    ]
  },

  {
    id: "writing-7",
    type: "make_request",
    category: "business_communication",
    title: "Requesting Information from Colleague",
    incomingEmail: {
      from: "manager@company.com",
      to: "analyst@company.com",
      subject: "Q3 Sales Data Needed",
      date: "July 15, 2025",
      body: `I am preparing the quarterly report and need some information.`
    },
    requirements: {
      information: [1, 2],
      questions: [1, 2]
    },
    task: "Write an email requesting sales data from a colleague. Include: what specific data you need, the deadline, and the purpose. Ask if they need any clarification.",
    tips: [
      "Clearly specify what data is needed",
      "Set a reasonable deadline",
      "Explain why the data is needed",
      "Offer to discuss if needed"
    ],
    sampleResponse: `Hi,

I hope this email finds you well. I am currently preparing the Q3
performance report for management and would appreciate your assistance
with the sales data.

Specifically, I need:
- Total sales by region for July-September
- Top 5 performing products
- Any notable trends or anomalies

Could you please provide this information by Wednesday, July 20th?
This will allow me sufficient time to compile the complete report.

Please let me know if you need any clarification on what I'm looking
for, or if this deadline presents any challenges.

Thank you in advance for your help!

Best regards`,
    evaluationCriteria: [
      "Clearly lists needed data points",
      "Sets a specific deadline",
      "Explains the purpose (report preparation)",
      "Asks if clarification is needed",
      "Professional and polite tone",
      "Appropriate for internal communication"
    ]
  },

  {
    id: "writing-8",
    type: "make_request",
    category: "business_communication",
    title: "Requesting Time Off",
    incomingEmail: {
      from: "employee@company.com",
      to: "supervisor@company.com",
      subject: "Vacation Request",
      date: "August 20, 2025",
      body: `Dear Supervisor,

I would like to request some time off for a family vacation.`
    },
    requirements: {
      information: [2, 3],
      questions: [0, 1]
    },
    task: "Write an email requesting vacation time. Include: specific dates, reason (briefly), and coverage plan. Ask about approval process.",
    tips: [
      "Give exact dates for the time off",
      "Provide work coverage arrangements",
      "Be professional about the request",
      "Show consideration for team needs"
    ],
    sampleResponse: `Dear Supervisor,

I would like to request vacation time for an upcoming family trip.

Requested Dates:
Monday, September 15th through Friday, September 26th
(Return to work: Monday, September 29th)

Work Coverage:
During my absence, John Smith has agreed to handle my ongoing projects.
I will provide him with all necessary documentation and brief him on
any pending items before my departure. I will also be available by
email for any urgent matters that may arise.

What is the approval process for this request? Should I submit anything
through HR or is your email confirmation sufficient?

Thank you for considering my request. I will ensure all my work is
up to date before leaving.

Best regards`,
    evaluationCriteria: [
      "Provides specific dates",
      "Includes return to work date",
      "Explains work coverage plan",
      "Asks about approval process",
      "Professional and considerate",
      "Shows responsibility"
    ]
  },

  {
    id: "writing-9",
    type: "make_request",
    category: "business_communication",
    title: "Requesting Quote from Vendor",
    incomingEmail: {
      from: "purchasing@company.com",
      to: "sales@vendor.com",
      subject: "Price Quote Request",
      date: "October 30, 2025",
      body: `Dear Sales Team,

We are interested in purchasing office equipment.`
    },
    requirements: {
      information: [2, 3],
      questions: [1, 2]
    },
    task: "Write an email requesting a price quote. Include: items needed, quantities, and delivery timeline. Ask about bulk discounts and payment terms.",
    tips: [
      "Be specific about products and quantities",
      "Include delivery requirements",
      "Ask about discount opportunities",
      "Inquire about payment options"
    ],
    sampleResponse: `Dear Sales Team,

I am writing to request a price quote for office equipment for our
company.

Items Needed:
- 10 Ergonomic office chairs
- 5 Standing desks
- 20 Desk lamps
- 10 File cabinets

Delivery: We would need these items delivered by December 15th.

Could you please provide a quote for these items? Additionally, do you
offer any volume discounts for orders of this size?

What payment terms do you offer? Do you require payment upon delivery
or do you provide net-30 terms?

Thank you for your prompt attention to this request. I look forward to
receiving your quote.

Best regards,
Purchasing Manager`,
    evaluationCriteria: [
      "Lists all items with quantities",
      "Specifies delivery deadline",
      "Asks about volume discounts",
      "Inquires about payment terms",
      "Professional business tone",
      "Clear and organized"
    ]
  },

  {
    id: "writing-10",
    type: "make_request",
    category: "business_communication",
    title: "Requesting Reference Letter",
    incomingEmail: {
      from: "former_employee@email.com",
      to: "manager@company.com",
      subject: "Request for Reference",
      date: "November 5, 2025",
      body: `Dear Former Manager,

I hope you are doing well. I am applying for a new position.`
    },
    requirements: {
      information: [1, 2],
      questions: [0, 1]
    },
    task: "Write an email requesting a reference letter. Include: position applying for, key achievements to highlight, and deadline. Ask about preferred format.",
    tips: [
      "Remind them of your work together",
      "Be specific about what to include",
      "Give adequate time for completion",
      "Offer to provide additional information"
    ],
    sampleResponse: `Dear [Former Manager's Name],

I hope this email finds you well. It was a pleasure working under your
supervision at [Previous Company], and I learned a great deal from
your guidance.

I am writing to request a professional reference letter. I am currently
applying for a Senior Marketing position at ABC Corporation, and they
have requested professional references.

In terms of my achievements, it would be helpful if you could mention:
- The successful product launch I led in Q4
- My role in increasing our department's sales by 25%
- My leadership skills in managing the marketing team

Could you provide the letter by November 20th? Also, do you prefer to
send the letter directly to me or to the hiring manager?

Thank you for considering my request. I truly appreciate your support
in my career development.

Best regards,
[Your Name]`,
    evaluationCriteria: [
      "References past professional relationship",
      "States the position being applied for",
      "Lists specific achievements to highlight",
      "Provides deadline",
      "Asks about preferred format/delivery",
      "Grateful and professional tone"
    ]
  },

  // Type 3: Providing Information (5 prompts)
  {
    id: "writing-11",
    type: "provide_information",
    category: "business_communication",
    title: "Confirming Appointment",
    incomingEmail: {
      from: "client@email.com",
      to: "service@company.com",
      subject: "Appointment Inquiry",
      date: "February 14, 2026",
      body: `Dear Service Department,

I would like to schedule a service appointment for my home
security system.`
    },
    requirements: {
      information: [2, 3],
      questions: [1, 2]
    },
    task: "Write an email confirming an appointment. Include: date and time, technician name, what to expect, and preparation needed. Ask if they need to reschedule.",
    tips: [
      "Confirm all appointment details clearly",
      "Provide technician information",
      "Explain the service process",
      "List any preparation steps needed"
    ],
    sampleResponse: `Dear Valued Customer,

Thank you for contacting our Service Department. I am pleased to
confirm your service appointment.

Appointment Details:
- Date: Wednesday, February 21st
- Time: 9:00 AM - 11:00 AM
- Technician: Mark Johnson (Technician ID: 4521)
- Service: Annual security system inspection and maintenance

What to Expect:
Mark will inspect your entire security system, test all sensors and
cameras, replace batteries as needed, and perform any necessary
software updates.

Preparation Needed:
Please ensure that someone over 18 is home during the appointment.
Clear access to all security panels and sensors would be appreciated.

Will this appointment time work for you, or would you prefer to
reschedule?

If you have any questions before the appointment, please don't
hesitate to contact us.

Best regards,
Customer Service Team
SecureHome Systems`,
    evaluationCriteria: [
      "Confirms date and time",
      "Provides technician name and ID",
      "Explains what the service involves",
      "Lists preparation needed",
      "Offers rescheduling option",
      "Professional and helpful"
    ]
  },

  {
    id: "writing-12",
    type: "provide_information",
    category: "business_communication",
    title: "Providing Project Update",
    incomingEmail: {
      from: "manager@company.com",
      to: "client@company.com",
      subject: "Project Status Update",
      date: "May 20, 2026",
      body: `Dear Client,

I wanted to provide you with an update on our project progress.`
    },
    requirements: {
      information: [2, 3],
      questions: [0, 1]
    },
    task: "Write an email providing a project update. Include: current status, completed milestones, upcoming tasks, and timeline. Ask if they have questions.",
    tips: [
      "Be positive about progress",
      "Be honest about any delays",
      "Provide specific dates",
      "Include next steps clearly"
    ],
    sampleResponse: `Dear [Client Name],

I am pleased to provide you with an update on the [Project Name]
progress.

Current Status:
The project is proceeding well and we are on track to meet our
original timeline. Overall, we are approximately 60% complete.

Completed Milestones:
✓ Website design finalization (Completed: April 15th)
✓ Database setup and configuration (Completed: May 1st)
✓ Core functionality development (Completed: May 18th)

Upcoming Tasks:
• User acceptance testing (Begins: June 1st)
• Content population (Begins: June 10th)
• Final testing and quality assurance (Begins: June 20th)

Timeline:
We remain on schedule for launch on July 15th, as originally planned.

Do you have any questions about the project progress or the upcoming
milestones?

Thank you for your continued partnership.

Best regards,
Project Manager`,
    evaluationCriteria: [
      "Gives clear overall status",
      "Lists completed milestones with dates",
      "Outlines upcoming tasks",
      "Confirms timeline",
      "Asks if client has questions",
      "Professional and organized"
    ]
  },

  {
    id: "writing-13",
    type: "provide_information",
    category: "business_communication",
    title: "Explaining Policy Change",
    incomingEmail: {
      from: "hr@company.com",
      to: "all-staff@company.com",
      subject: "Important: Remote Work Policy Update",
      date: "June 1, 2026",
      body: `Dear Team,

We are writing to inform you about an update to our remote work policy.`
    },
    requirements: {
      information: [2, 3],
      questions: [0, 1]
    },
    task: "Write an email announcing a policy change. Include: what is changing, when it takes effect, reasons for the change, and who to contact for questions. Ask for feedback or concerns.",
    tips: [
      "State the change clearly at the beginning",
      "Explain the reasons positively",
      "Be specific about effective date",
      "Provide support resources"
    ],
    sampleResponse: `Dear Team,

I am writing to announce an important update to our remote work policy,
effective July 1, 2026.

What is Changing:
Our company is implementing a hybrid work model. Employees will work
in the office 3 days per week and remotely 2 days per week. Department
heads will determine specific schedules for their teams.

Reason for the Change:
This decision is based on employee feedback and our commitment to
providing flexible work arrangements while maintaining collaboration
and team cohesion. The hybrid model balances flexibility with the
benefits of in-person collaboration.

Department heads will work with their teams to establish schedules by
June 15th.

We understand this is a significant change. If you have any questions
or concerns, please speak with your supervisor or contact HR directly
at hr@company.com.

Thank you for your understanding and cooperation as we implement this
new policy.

Best regards,
HR Department`,
    evaluationCriteria: [
      "Clearly states what is changing",
      "Provides effective date",
      "Explains reasons for the change",
      "Gives timeline for implementation",
      "Offers contact for questions",
      "Professional tone"
    ]
  },

  {
    id: "writing-14",
    type: "provide_information",
    category: "business_communication",
    title: "Reporting Technical Issue",
    incomingEmail: {
      from: "user@company.com",
      to: "it-support@company.com",
      subject: "Computer Problem",
      date: "July 22, 2026",
      body: `Dear IT Support,

I am having trouble with my computer and need assistance.`
    },
    requirements: {
      information: [2, 3],
      questions: [0, 1]
    },
    task: "Write an email reporting a technical problem. Include: what is happening, when it started, troubleshooting steps already tried, and urgency. Ask about resolution timeline.",
    tips: [
      "Describe the problem specifically",
      "Include exact error messages if any",
      "List troubleshooting already attempted",
      "Indicate impact on work"
    ],
    sampleResponse: `Dear IT Support,

I am experiencing a technical issue with my work computer and would
appreciate your assistance.

Problem Description:
My computer frequently freezes when I attempt to open multiple
applications simultaneously. When this happens, I must restart the
computer to regain functionality.

Error Message:
"Application not responding" appears, and the screen becomes unresponsive.

When Started:
This issue began yesterday morning (July 21st) and has occurred
approximately 8 times since then.

Troubleshooting Already Attempted:
• Restarted the computer multiple times
• Closed all background applications
• Ran a virus scan (no threats detected)
• Checked for Windows updates (all current)

Impact:
This issue is significantly affecting my productivity, particularly
when I need to run multiple programs for my daily tasks.

Could you please estimate when you might be able to resolve this issue?

Thank you for your help.

Best regards,
[Your Name]
[Extension/Contact Information]`,
    evaluationCriteria: [
      "Describes problem clearly",
      "Includes error message",
      "States when problem started",
      "Lists troubleshooting attempted",
      "Explains impact on work",
      "Asks about resolution timeline"
    ]
  },

  {
    id: "writing-15",
    type: "provide_information",
    category: "business_communication",
    title: "Submitting Report",
    incomingEmail: {
      from: "analyst@company.com",
      to: "manager@company.com",
      subject: "Monthly Sales Report",
      date: "August 5, 2026",
      body: `Dear Manager,

Please find attached the monthly sales report for your review.`
    },
    requirements: {
      information: [2, 3],
      questions: [0, 1]
    },
    task: "Write an email submitting a report. Include: what the report contains, key findings, recommendations, and offer to present/discuss. Ask for feedback.",
    tips: [
      "Summarize the report briefly",
      "Highlight important findings",
      "Include clear recommendations",
      "Offer to discuss further"
    ],
    sampleResponse: `Dear [Manager's Name],

Please find attached the Monthly Sales Report for July 2026.

Report Contents:
This report analyzes sales performance across all regions, compares
results to the same period last year, and identifies key trends
affecting our business.

Key Findings:
• Overall sales increased by 12% compared to July 2025
• The Western region showed the strongest growth at 18%
• Online sales continue to outpace in-store purchases
• The new product line exceeded initial projections by 25%

Recommendations:
1. Increase inventory allocation to the Western region
2. Consider additional investment in e-commerce capabilities
3. Expand the successful product line into additional categories

Would you like me to present these findings to the management team?
I am available to discuss the report in detail at your convenience.

I look forward to your feedback.

Best regards,
[Your Name]
Sales Analyst`,
    evaluationCriteria: [
      "Summarizes report contents",
      "Presents key findings clearly",
      "Provides numbered recommendations",
      "Offers to present findings",
      "Asks for feedback",
      "Professional format"
    ]
  },

  // Type 4: Scheduling/Confirming (5 prompts)
  {
    id: "writing-16",
    type: "schedule_meeting",
    category: "business_communication",
    title: "Scheduling Client Meeting",
    incomingEmail: {
      from: "sales@company.com",
      to: "client@company.com",
      subject: "Meeting Request",
      date: "September 10, 2026",
      body: `Dear Client,

We would like to schedule a meeting to discuss our proposal.`
    },
    requirements: {
      information: [2, 3],
      questions: [1, 2]
    },
    task: "Write an email proposing meeting times. Include: purpose, proposed dates/times, duration, and location. Ask for their availability.",
    tips: [
      "Propose multiple time options",
      "Be clear about meeting purpose",
      "Specify duration and format",
      "Be flexible with alternatives"
    ],
    sampleResponse: `Dear [Client Name],

I hope this email finds you well. Following our recent conversation,
we would like to schedule a meeting to present our proposal for your
consideration.

Purpose:
The meeting will cover our recommended solution for your [specific need],
including pricing options, implementation timeline, and expected benefits.

Proposed Meeting Times:
• Tuesday, September 19th at 10:00 AM
• Wednesday, September 20th at 2:00 PM
• Thursday, September 21st at 11:00 AM

Duration:
The presentation will take approximately 45-60 minutes.

Location:
We can meet at your offices or via video conference—whichever is more
convenient for you.

Please let me know which of these times works best for you, or if you
would prefer to propose alternative dates.

I look forward to our discussion.

Best regards,
[Your Name]
Account Manager`,
    evaluationCriteria: [
      "States meeting purpose clearly",
      "Offers multiple time options",
      "Specifies duration",
      "Offers location flexibility",
      "Asks for availability",
      "Professional and accommodating"
    ]
  },

  {
    id: "writing-17",
    type: "schedule_meeting",
    category: "business_communication",
    title: "Confirming Interview Schedule",
    incomingEmail: {
      from: "hr@company.com",
      to: "candidate@email.com",
      subject: "Interview Confirmation",
      date: "October 5, 2026",
      body: `Dear Candidate,

We are pleased to invite you for an interview.`
    },
    requirements: {
      information: [2, 3],
      questions: [0, 1]
    },
    task: "Write an email confirming an interview. Include: date, time, location, who they will meet, and what to bring. Ask if they need to reschedule.",
    tips: [
      "Provide clear logistics information",
      "Include parking/transportation details",
      "List interview participants",
      "Explain interview format"
    ],
    sampleResponse: `Dear [Candidate Name],

We are pleased to confirm your interview for the [Position Name] role.

Interview Details:
Date: Friday, October 13th
Time: 2:00 PM - 3:30 PM
Location: Our offices at 123 Business Avenue, Suite 500

You will be interviewing with:
• Ms. Jennifer Lee, HR Manager
• Mr. David Chen, Department Head
• Ms. Sarah Park, Team Lead

Please bring:
• A copy of your resume
• Samples of relevant work (if applicable)
• A list of professional references

Parking:
Free visitor parking is available in the lot adjacent to our building.
Please mention your name at the security desk for directions to our
floor.

The interview will consist of both behavioral and technical questions
in a panel format.

Will this time still work for you, or do you need to reschedule?

We look forward to meeting you!

Best regards,
HR Department`,
    evaluationCriteria: [
      "Confirms date and time clearly",
      "Provides address/location",
      "Lists interview participants",
      "Tells what to bring",
      "Includes parking information",
      "Offers rescheduling option"
    ]
  },

  {
    id: "writing-18",
    type: "schedule_meeting",
    category: "business_communication",
    title: "Rescheduling Appointment",
    incomingEmail: {
      from: "client@company.com",
      to: "service@company.com",
      subject: "Need to Reschedule",
      date: "November 15, 2026",
      body: `Dear Service Provider,

Unfortunately, I need to reschedule our upcoming appointment.`
    },
    requirements: {
      information: [2, 3],
      questions: [1, 2]
    },
    task: "Write an email requesting to reschedule. Include: original appointment details, reason for change, and proposed new times. Ask about availability.",
    tips: [
      "Acknowledge the inconvenience",
      "Be apologetic but professional",
      "Suggest specific alternative times",
      "Confirm original appointment details"
    ],
    sampleResponse: `Dear [Service Provider],

I am writing to request a rescheduling of my upcoming appointment.

Original Appointment:
- Date: Monday, November 20th
- Time: 10:00 AM
- Service: [Service Type]

Reason for Rescheduling:
An urgent business matter has arisen that requires my attendance on
November 20th. I sincerely apologize for any inconvenience this may
cause.

Proposed Alternative Times:
• Wednesday, November 22nd at 10:00 AM
• Thursday, November 23rd at 2:00 PM
• Friday, November 24th at 11:00 AM

Please let me know if any of these alternative times work for you. I
greatly appreciate your flexibility and understanding.

Thank you for your assistance.

Best regards,
[Your Name]`,
    evaluationCriteria: [
      "References original appointment",
      "Explains reason for change",
      "Proposes specific alternatives",
      "Apologizes for inconvenience",
      "Expresses appreciation",
      "Professional tone"
    ]
  },

  {
    id: "writing-19",
    type: "schedule_meeting",
    category: "business_communication",
    title: "Confirming Event Attendance",
    incomingEmail: {
      from: "employee@company.com",
      to: "organizer@company.com",
      subject: "Team Building Event",
      date: "December 1, 2026",
      body: `Dear Organizer,

I received the invitation to the team building event.`
    },
    requirements: {
      information: [2, 3],
      questions: [0, 1]
    },
    task: "Write an email confirming event attendance. Include: confirmation, dietary restrictions if any, and transportation needs. Ask about dress code.",
    tips: [
      "Confirm attendance clearly",
      "Provide dietary information if relevant",
      "Indicate transportation needs",
      "Ask about event details"
    ],
    sampleResponse: `Dear [Organizer's Name],

Thank you for the invitation to the team building event on December
15th. I am pleased to confirm my attendance.

I am looking forward to the activities and the opportunity to connect
with colleagues outside of the office environment.

Dietary Requirements:
I am vegetarian. Please let me know if this has been noted for the
catering arrangements.

Transportation:
I will not require company transportation as I live nearby and can
arrive independently.

Could you please inform me about the dress code for the event? I want
to ensure I am appropriately dressed for the planned activities.

Thank you for organizing this event for our team!

Best regards,
[Your Name]`,
    evaluationCriteria: [
      "Confirms attendance clearly",
      "Provides dietary information",
      "Addresses transportation",
      "Asks about dress code",
      "Expresses enthusiasm",
      "Polite and professional"
    ]
  },

  {
    id: "writing-20",
    type: "schedule_meeting",
    category: "business_communication",
    title: "Follow-Up After Meeting",
    incomingEmail: {
      from: "sales@company.com",
      to: "prospect@company.com",
      subject: "Thank You for the Meeting",
      date: "January 8, 2027",
      body: `Dear Prospect,

It was a pleasure meeting with you earlier today.`
    },
    requirements: {
      information: [2, 3],
      questions: [1, 2]
    },
    task: "Write a follow-up email after a meeting. Include: appreciation, summary of discussion, agreed next steps, and timeline. Ask for questions or concerns.",
    tips: [
      "Express gratitude for the meeting",
      "Summarize key points discussed",
      "Clarify action items and responsibilities",
      "Set clear expectations for next steps"
    ],
    sampleResponse: `Dear [Prospect's Name],

Thank you for taking the time to meet with me earlier today. I truly
enjoyed our discussion about [Topic] and learning more about your
company's needs.

Meeting Summary:
We discussed your current challenges with [specific issue] and how
our solution could help address these concerns. Key points included:
• Your timeline for implementation: [timeframe]
• Budget considerations: [amount/range]
• Decision-making process: [stakeholders involved]

Next Steps Agreed Upon:
1. I will send a detailed proposal by [date]
2. You will share this with your team by [date]
3. We will schedule a follow-up call for [date/time]

I will send the promised documentation within 48 hours as discussed.

Please don't hesitate to reach out if you have any questions or if
there's anything additional you need from me in the meantime.

I look forward to continuing our conversation.

Best regards,
[Your Name]`,
    evaluationCriteria: [
      "Thanks the recipient for the meeting",
      "Summarizes key discussion points",
      "Lists agreed next steps clearly",
      "Confirms timeline for follow-up",
      "Offers to answer questions",
      "Professional and relationship-building"
    ]
  }
];

// Helper functions
function getWritingPrompts(count = 5, type = null) {
  let prompts = type
    ? writingPrompts.filter(p => p.type === type)
    : [...writingPrompts];
  return prompts.sort(() => 0.5 - Math.random()).slice(0, count);
}

function getWritingPromptById(id) {
  return writingPrompts.find(p => p.id === id);
}

function getWritingPromptsByCategory(category) {
  return writingPrompts.filter(p => p.category === category);
}

// Evaluation helper for user responses
function evaluateWritingResponse(promptId, userResponse) {
  const prompt = getWritingPromptById(promptId);
  if (!prompt) return null;

  const criteria = prompt.evaluationCriteria;
  const feedback = [];

  // Basic checks (in a real application, this would use AI analysis)
  const hasGreeting = /^(dear|hi|hello)/i.test(userResponse.trim());
  const hasClosing = /(best regards|sincerely|thanks|best)/i.test(userResponse.trim());
  const wordCount = userResponse.split(/\s+/).length;
  const adequateLength = wordCount >= 80 && wordCount <= 300;

  feedback.push({
    criterion: "Professional greeting",
    passed: hasGreeting,
    comment: hasGreeting ? "Good professional greeting" : "Consider adding a formal greeting"
  });

  feedback.push({
    criterion: "Professional closing",
    passed: hasClosing,
    comment: hasClosing ? "Good professional closing" : "Consider adding a formal closing"
  });

  feedback.push({
    criterion: "Appropriate length",
    passed: adequateLength,
    comment: adequateLength ? "Good length for business email" : "Email may be too short or too long"
  });

  return {
    prompt: prompt,
    feedback: feedback,
    overallScore: feedback.filter(f => f.passed).length / feedback.length * 100
  };
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    writingPrompts,
    getWritingPrompts,
    getWritingPromptById,
    getWritingPromptsByCategory,
    evaluateWritingResponse
  };
}
