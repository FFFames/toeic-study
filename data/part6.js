// TOEIC Part 6: Text Completion
// Passages with blanks to be filled
// Format: Short business documents (emails, memos, notices, ads) with 4 blanks each

const part6Passages = [
  // Email - Meeting Request
  {
    id: "part6-1",
    type: "email",
    title: "Meeting Request",
    from: "Sarah Chen <s.chen@company.com>",
    to: "All Department Heads",
    subject: "Q4 Planning Meeting",
    content: [
      "Dear Team,",
      "",
      "I am writing to ",
      {blank: 0, options: ["inform", "informing", "informed", "informs"], answer: 0},
      " you that the Q4 planning meeting has been scheduled for next Monday, November 15th, at 10:00 AM in Conference Room B.",
      "",
      "Please come prepared to discuss your department's ",
      {blank: 1, options: ["perform", "performance", "performing", "performed"], answer: 1},
      " during Q3 and your projections for Q4.",
      "",
      "If you are unable to ",
      {blank: 2, options: ["attendance", "attend", "attending", "attended"], answer: 1},
      ", please notify me by Friday so we can reschedule.",
      "",
      "Best regards,",
      "Sarah Chen",
      "Operations Manager"
    ],
    questions: [
      {
        id: 1,
        question: "What is the main purpose of this email?",
        options: [
          "To request a meeting",
          "To inform about a scheduled meeting",
          "To report Q3 performance",
          "To discuss projections"
        ],
        answer: 1,
        explanation: "The email primarily informs team members about an already-scheduled meeting."
      },
      {
        id: 2,
        question: "When should recipients respond if they cannot attend?",
        options: [
          "By Monday",
          "By November 15th",
          "By Friday",
          "Before the meeting starts"
        ],
        answer: 2,
        explanation: "The email states 'please notify me by Friday'."
      }
    ]
  },

  // Memo - Office Policy Change
  {
    id: "part6-2",
    type: "memo",
    title: "Remote Work Policy Update",
    to: "All Employees",
    from: "Human Resources Department",
    date: "October 28, 2025",
    subject: "New Remote Work Guidelines",
    content: [
      "MEMORANDUM",
      "",
      "TO: All Employees",
      "FROM: Human Resources Department",
      "DATE: October 28, 2025",
      "SUBJECT: New Remote Work Guidelines",
      "",
      "Effective November 1st, the company will ",
      {blank: 0, options: ["implement", "implementation", "implementing", "implemented"], answer: 0},
      " a new remote work policy allowing employees to work from home up to two days per week.",
      "",
      "Employees must ",
      {blank: 1, options: ["submission", "submit", "submitting", "submitted"], answer: 1},
      " a formal request to their supervisor at least one week in advance.",
      "",
      "All remote work arrangements are ",
      {blank: 2, options: "subject",
        options: ["subject", "subjected", "subjecting", "subjects"], answer: 0},
      " to management approval based on job requirements.",
      "",
      "Please direct any questions to the HR department at extension 4500."
    ],
    questions: [
      {
        id: 1,
        question: "When will the new policy take effect?",
        options: [
          "October 28th",
          "November 1st",
          "One week from now",
          "Immediately"
        ],
        answer: 1,
        explanation: "The memo states 'Effective November 1st'."
      },
      {
        id: 2,
        question: "What determines whether an employee can work remotely?",
        options: [
          "Supervisor preference",
          "Job requirements",
          "Length of employment",
          "Department only"
        ],
        answer: 1,
        explanation: "Arrangements are 'subject to management approval based on job requirements'."
      }
    ]
  },

  // Advertisement - Product Launch
  {
    id: "part6-3",
    type: "advertisement",
    title: "New Product Announcement",
    content: [
      "INTRODUCING THE NEW",
      "",
      "SmartOffice Pro 5000",
      "",
      "The ",
      {blank: 0, options: ["late", "latest", "lately", "later"], answer: 1},
      " innovation in office productivity is here!",
      "",
      "The SmartOffice Pro 5000 ",
      {blank: 1, options: ["features", "featuring", "feature", "featured"], answer: 0},
      " advanced AI capabilities that streamline your workflow:",
      "",
      "• Voice-activated commands",
      "• Automatic document organization",
      "• Real-time collaboration tools",
      "• 24/7 customer support",
      "",
      "For a ",
      {blank: 2, options: ["limit", "limited", "limiting", "limits"], answer: 1},
      " time, receive a 20% discount when you order online!",
      "",
      "Visit www.smartofficepro.com or call 1-800-555-0199 today!"
    ],
    questions: [
      {
        id: 1,
        question: "What is being advertised?",
        options: [
          "A customer service center",
          "An office productivity product",
          "A collaboration tool",
          "A website"
        ],
        answer: 1,
        explanation: "The ad is for SmartOffice Pro 5000, an office productivity system."
      },
      {
        id: 2,
        question: "How can customers receive a discount?",
        options: [
          "By calling the company",
          "By ordering online",
          "By visiting the store",
          "By ordering in bulk"
        ],
        answer: 1,
        explanation: "The ad states 'receive a 20% discount when you order online'."
      }
    ]
  },

  // Notice - Building Maintenance
  {
    id: "part6-4",
    type: "notice",
    title: "Building Maintenance Notice",
    content: [
      "NOTICE TO ALL TENANTS",
      "",
      "Building Maintenance Schedule",
      "",
      "Please be ",
      {blank: 0, options: ["advised", "advice", "advising", "advise"], answer: 0},
      " that the building elevator will be out of service for maintenance on:",
      "",
      "Date: Saturday, November 20th",
      "Time: 8:00 AM - 6:00 PM",
      "",
      "During this time, please use the stairs or the ",
      {blank: 1, options: ["service", "serving", "served", "serve"], answer: 0},
      " elevator in the adjacent building.",
      "",
      "We apologize for any ",
      {blank: 2, options: ["inconvenient", "inconvenience", "inconveniences", "inconveniently"], answer: 1},
      " and thank you for your cooperation.",
      "",
      "Building Management",
      "Phone: 555-0123"
    ],
    questions: [
      {
        id: 1,
        question: "How long will the elevator be out of service?",
        options: [
          "6 hours",
          "8 hours",
          "10 hours",
          "All day"
        ],
        answer: 2,
        explanation: "From 8:00 AM to 6:00 PM equals 10 hours."
      },
      {
        id: 2,
        question: "What can tenants use during the maintenance?",
        options: [
          "Only the stairs",
          "Only the service elevator",
          "The stairs or service elevator",
          "The adjacent building only"
        ],
        answer: 2,
        explanation: "Tenants can use 'the stairs or the service elevator'."
      }
    ]
  },

  // Internal Memo - Budget Review
  {
    id: "part6-5",
    type: "memo",
    title: "Budget Review Meeting",
    to: "Department Managers",
    from: "Finance Department",
    date: "December 1, 2025",
    subject: "Annual Budget Review",
    content: [
      "MEMORANDUM",
      "",
      "All department managers are required to ",
      {blank: 0, options: ["attend", "attending", "attendance", "attended"], answer: 0},
      " the annual budget review meeting scheduled for December 15th.",
      "",
      "Please prepare a detailed report ",
      {blank: 1, options: ["outlining", "outline", "outlined", "outlines"], answer: 0},
      " your department's expenses for the current fiscal year.",
      "",
      "Additionally, provide ",
      {blank: 2, options: ["projection", "projections", "project", "projected"], answer: 1},
      " for the upcoming year based on your department's goals.",
      "",
      "Submit all materials to the Finance Department by December 10th.",
      "",
      "Thank you for your cooperation.",
      "",
      "Maria Rodriguez",
      "CFO"
    ],
    questions: [
      {
        id: 1,
        question: "Who must attend the budget review meeting?",
        options: [
          "All employees",
          "Department managers",
          "Finance staff only",
          "CFO and managers"
        ],
        answer: 1,
        explanation: "The memo states 'All department managers are required to attend'."
      },
      {
        id: 2,
        question: "When are materials due?",
        options: [
          "December 1st",
          "December 10th",
          "December 15th",
          "Before the meeting"
        ],
        answer: 1,
        explanation: "Materials must be submitted 'by December 10th'."
      }
    ]
  },

  // Email - Order Confirmation
  {
    id: "part6-6",
    type: "email",
    title: "Order Confirmation",
    from: "orders@officesupply.com",
    to: "customer@email.com",
    subject: "Order Confirmation #12345",
    content: [
      "Dear Valued Customer,",
      "",
      "Thank you for your recent order. Your order has been ",
      {blank: 0, options: ["confirmation", "confirmed", "confirm", "confirming"], answer: 1},
      " and will be processed within 24 hours.",
      "",
      "Order Details:",
      "• 5 Boxes of Premium Paper - $25.00",
      "• 20 Ink Cartridges - $200.00",
      "• 3 Desk Organizers - $45.00",
      "",
      "Total: $270.00",
      "",
      "Your order will be shipped via ",
      {blank: 1, options: ["express", "expressed", "expression", "expressing"], answer: 0},
      " delivery and should arrive within 3-5 business days.",
      "",
      "A shipping confirmation with tracking information will be ",
      {blank: 2, options: ["send", "sent", "sending", "sends"], answer: 1},
      " once your order ships.",
      "",
      "Thank you for your business!",
      "",
      "Office Supply Plus",
      "Customer Service: 1-800-555-SHIP"
    ],
    questions: [
      {
        id: 1,
        question: "What is the total cost of the order?",
        options: [
          "$25.00",
          "$200.00",
          "$270.00",
          "$245.00"
        ],
        answer: 2,
        explanation: "The order total is stated as $270.00."
      },
      {
        id: 2,
        question: "How will the customer receive tracking information?",
        options: [
          "By phone call",
          "In a separate email",
          "By postal mail",
          "By visiting the website"
        ],
        answer: 1,
        explanation: "Shipping confirmation 'will be sent once your order ships'."
      }
    ]
  },

  // Job Posting
  {
    id: "part6-7",
    type: "advertisement",
    title: "Job Opening - Marketing Manager",
    content: [
      "CAREER OPPORTUNITY",
      "",
      "Marketing Manager",
      "",
      "GlobalTech Inc. is seeking an experienced Marketing Manager to ",
      {blank: 0, options: ["join", "joining", "joined", "joint"], answer: 0},
      " our dynamic team.",
      "",
      "Responsibilities:",
      "• Develop marketing strategies",
      "• Manage a team of 5 professionals",
      "• Coordinate with sales department",
      "• Analyze market trends",
      "",
      "Requirements:",
      "• Bachelor's degree in Marketing or related field",
      "• Minimum 5 years of marketing experience",
      "• Strong ",
      {blank: 1, options: ["lead", "leading", "leadership", "leader"], answer: 2},
      " skills",
      "• Excellent communication abilities",
      "",
      "We offer a ",
      {blank: 2, options: ["compete", "competitive", "competition", "competitor"], answer: 1},
      " salary and comprehensive benefits package.",
      "",
      "To apply, send resume and cover letter to: careers@globaltech.com",
      "Application deadline: December 31, 2025"
    ],
    questions: [
      {
        id: 1,
        question: "What is the minimum experience required?",
        options: [
          "1 year",
          "3 years",
          "5 years",
          "10 years"
        ],
        answer: 2,
        explanation: "The posting states 'Minimum 5 years of marketing experience'."
      },
      {
        id: 2,
        question: "How should candidates apply?",
        options: [
          "By visiting the office",
          "By phone call",
          "By email",
          "By mail"
        ],
        answer: 2,
        explanation: "Candidates should 'send resume and cover letter to: careers@globaltech.com'."
      }
    ]
  },

  // Notice - Event Cancellation
  {
    id: "part6-8",
    type: "notice",
    title: "Event Cancellation Notice",
    content: [
      "IMPORTANT NOTICE",
      "",
      "EVENT CANCELLATION",
      "",
      "We regret to inform you that the Annual Company Gala, ",
      {blank: 0, options: ["schedule", "scheduled", "scheduling", "schedules"], answer: 1},
      " for December 20th, has been cancelled due to unforeseen circumstances.",
      "",
      "All ticket purchases will be fully ",
      {blank: 1, options: ["refund", "refunded", "refunding", "refunds"], answer: 1},
      " within 7-10 business days.",
      "",
      "We apologize for any inconvenience and appreciate your ",
      {blank: 2, options: ["understand", "understanding", "understood", "understands"], answer: 1},
      ".",
      "",
      "Event Planning Committee",
      "Contact: events@company.com for questions"
    ],
    questions: [
      {
        id: 1,
        question: "Why was the event cancelled?",
        options: [
          "Low ticket sales",
          "Unforeseen circumstances",
          "Venue problems",
          "Weather conditions"
        ],
        answer: 1,
        explanation: "The notice states 'due to unforeseen circumstances'."
      },
      {
        id: 2,
        question: "What will happen to ticket purchases?",
        options: [
          "They will be credited",
          "They will be refunded",
          "They are non-refundable",
          "They will be applied to next year"
        ],
        answer: 1,
        explanation: "All ticket purchases 'will be fully refunded'."
      }
    ]
  },

  // Email - Meeting Follow-up
  {
    id: "part6-9",
    type: "email",
    title: "Meeting Follow-up",
    from: "John Smith <j.smith@company.com>",
    to: "Project Team",
    subject: "Follow-up: Client Meeting",
    content: [
      "Hi Team,",
      "",
      "Thank you for your ",
      {blank: 0, options: ["participate", "participation", "participant", "participated"], answer: 1},
      " in today's client meeting.",
      "",
      "As discussed, please complete the following action items:",
      "",
      "1. Submit your project updates by Friday",
      "2. Review the client feedback document",
      "3. Prepare a ",
      {blank: 1, options: ["propose", "proposal", "proposed", "proposing"], answer: 1},
      " for the next phase",
      "",
      "Our next client meeting is ",
      {blank: 2, options: ["schedule", "scheduled", "scheduling", "schedules"], answer: 1},
      " for next Tuesday at 2 PM.",
      "",
      "Let me know if you have any questions.",
      "",
      "Best,",
      "John"
    ],
    questions: [
      {
        id: 1,
        question: "When are project updates due?",
        options: [
          "Today",
          "Friday",
          "Next Tuesday",
          "Before the next meeting"
        ],
        answer: 1,
        explanation: "Action item 1 states 'Submit your project updates by Friday'."
      },
      {
        id: 2,
        question: "What is the purpose of this email?",
        options: [
          "To schedule a meeting",
          "To follow up on a meeting",
          "To introduce the team",
          "To request client feedback"
        ],
        answer: 1,
        explanation: "The subject line and content indicate this is follow-up communication."
      }
    ]
  },

  // Memo - Training Schedule
  {
    id: "part6-10",
    type: "memo",
    title: "Training Schedule Announcement",
    to: "All Employees",
    from: "Training Department",
    date: "January 5, 2026",
    subject: "New Software Training",
    content: [
      "MEMORANDUM",
      "",
      "TO: All Employees",
      "FROM: Training Department",
      "DATE: January 5, 2026",
      "SUBJECT: New Software Training",
      "",
      "Beginning February 1st, all employees must ",
      {blank: 0, options: ["completion", "complete", "completing", "completed"], answer: 1},
      " the new software training program.",
      "",
      "Training sessions will be conducted ",
      {blank: 1, options: ["duty", "during", "do", "doing"], answer: 1},
      " regular business hours on the following schedule:",
      "",
      "Week 1: Sales Department",
      "Week 2: Marketing Department",
      "Week 3: Finance Department",
      "Week 4: All other departments",
      "",
      "Please ",
      {blank: 2, options: "register",
        options: ["register", "registration", "registered", "registers"], answer: 0},
      " through the employee portal by January 25th.",
      "",
      "Contact HR at ext. 5000 with any questions."
    ],
    questions: [
      {
        id: 1,
        question: "When must the training be completed?",
        options: [
          "By January 25th",
          "By February 1st",
          "During Week 1",
          "Before registration"
        ],
        answer: 1,
        explanation: "Training 'must complete...Beginning February 1st' means the deadline approaches February 1st."
      },
      {
        id: 2,
        question: "Which department trains in Week 1?",
        options: [
          "Marketing Department",
          "Finance Department",
          "Sales Department",
          "All departments"
        ],
        answer: 2,
        explanation: "The schedule shows 'Week 1: Sales Department'."
      }
    ]
  },

  // Additional passages continue...
  // For brevity, showing 10 complete passages
  // Full implementation would include 20+ passages
];

// Helper functions
function getPart6Passages(count = 5) {
  return part6Passages.sort(() => 0.5 - Math.random()).slice(0, count);
}

function getPart6PassageById(id) {
  return part6Passages.find(p => p.id === id);
}

function getPart6PassagesByType(type) {
  return part6Passages.filter(p => p.type === type);
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { part6Passages, getPart6Passages, getPart6PassageById, getPart6PassagesByType };
}
