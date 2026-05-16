// TOEIC Part 7: Reading Comprehension
// Single, double, and triple passages with multiple-choice questions
// Format: Business documents (emails, memos, ads, articles, forms)

const part7Passages = [
  // SINGLE PASSAGES (20 passages)
  {
    id: "part7-single-1",
    type: "single",
    documentType: "email",
    title: "Office Relocation Notice",
    content: `From: Management Team
To: All Employees
Date: June 15, 2025
Subject: Office Relocation Announcement

Dear Employees,

We are pleased to announce that our company will be relocating to a new office facility effective July 1st, 2025. The new address is:

Global Solutions Inc.
500 Commerce Street, Suite 2000
New York, NY 10001

The new office offers several advantages including:
• 30% more floor space
• Modern conference facilities
• Enhanced security systems
• Convenient parking garage
• Proximity to public transportation

Moving Schedule:
- June 28-29: Packing and preparation
- June 30: Actual move day (office closed)
- July 1: Operations resume at new location

Please direct all questions to the Facilities Manager at extension 4500.

We appreciate your cooperation during this transition.

Management Team`,
    questions: [
      {
        id: 1,
        type: "main_idea",
        question: "What is the main purpose of this email?",
        options: [
          "To announce a holiday",
          "To inform about office relocation",
          "To request feedback",
          "To schedule training"
        ],
        answer: 1,
        explanation: "The email primarily informs employees about the upcoming office move."
      },
      {
        id: 2,
        type: "detail",
        question: "When will the company move to the new office?",
        options: [
          "June 15th",
          "June 28th",
          "June 30th",
          "July 1st"
        ],
        answer: 2,
        explanation: "The schedule states 'June 30: Actual move day'."
      },
      {
        id: 3,
        type: "detail",
        question: "What advantage does the new office offer?",
        options: [
          "Lower rent",
          "More floor space",
          "Longer business hours",
          "More employees"
        ],
        answer: 1,
        explanation: "The email lists '30% more floor space' as an advantage."
      },
      {
        id: 4,
        type: "vocabulary",
        question: "What does 'proximity' mean in this context?",
        options: [
          "Distance from",
          "Closeness to",
          "View of",
          "Size of"
        ],
        answer: 1,
        explanation: "'Proximity to public transportation' means being close to or near transportation."
      }
    ]
  },

  {
    id: "part7-single-2",
    type: "single",
    documentType: "advertisement",
    title: "Fitness Center Membership",
    content: `CITY FITNESS CENTER
Your Health, Our Priority!

Join City Fitness Center today and transform your life!

MEMBERSHIP OPTIONS:

Basic Membership - $29/month
• Access to cardio equipment
• Locker room access
• Free parking

Premium Membership - $49/month
• All Basic features PLUS:
• Group fitness classes
• Personal trainer consultation
• Swimming pool access
• Sauna and steam room

Corporate Membership - $39/month
• For companies with 10+ employees
• All Premium features included
• Flexible payment options
• Wellness programs for your team

SPECIAL OFFER: Sign up this month and receive:
• 50% off enrollment fee
• Free fitness assessment
• Personal training session

Open: 5 AM - 11 PM daily
Locations: Downtown, Midtown, Westside

Call 555-FITNESS or visit www.cityfitness.com today!`,
    questions: [
      {
        id: 1,
        type: "detail",
        question: "What is included in the Basic Membership?",
        options: [
          "Group fitness classes",
          "Swimming pool access",
          "Cardio equipment access",
          "Personal trainer consultation"
        ],
        answer: 2,
        explanation: "Basic Membership includes 'Access to cardio equipment'."
      },
      {
        id: 2,
        type: "detail",
        question: "How much does a Premium Membership cost?",
        options: [
          "$29/month",
          "$39/month",
          "$49/month",
          "$59/month"
        ],
        answer: 2,
        explanation: "Premium Membership costs '$49/month'."
      },
      {
        id: 3,
        type: "inference",
        question: "Who qualifies for the Corporate Membership?",
        options: [
          "Individuals with 10+ years experience",
          "Companies with at least 10 employees",
          "Premium members who want to upgrade",
          "Anyone who works downtown"
        ],
        answer: 1,
        explanation: "Corporate Membership is 'For companies with 10+ employees'."
      },
      {
        id: 4,
        type: "detail",
        question: "What special offer is available this month?",
        options: [
          "Free membership for one month",
          "50% off monthly fee",
          "50% off enrollment fee",
          "Free personal training for a year"
        ],
        answer: 2,
        explanation: "The offer includes '50% off enrollment fee'."
      }
    ]
  },

  {
    id: "part7-single-3",
    type: "single",
    documentType: "memo",
    title: "New Security Procedures",
    content: `MEMORANDUM

TO: All Building Occupants
FROM: Building Security Office
DATE: March 1, 2025
SUBJECT: Implementation of New Security Procedures

Effective March 15, 2025, the following security procedures will be implemented:

1. ALL EMPLOYEES MUST DISPLAY VISITOR BADGES
All personnel must wear visible identification badges while on premises.
Temporary visitor passes must be obtained from the security desk for all guests.

2. AFTER-HOURS ACCESS
Employees remaining in the building after 8:00 PM must sign out with security.
An access card is required for entry on weekends. Contact your department
administrator to obtain a card.

3. DELIVERIES
All deliveries must be made through the loading dock entrance.
Delivery personnel must present valid identification and sign the delivery log.

4. EMERGENCY PROCEDURES
Emergency exit maps are posted on each floor. Please familiarize yourself
with the nearest exits and assembly points.

Questions regarding these procedures should be directed to:
Security Director, Mr. James Wilson
Phone: 555-0100 ext. 777
Email: jwilson@building.com`,
    questions: [
      {
        id: 1,
        type: "detail",
        question: "When do the new security procedures take effect?",
        options: [
          "March 1st",
          "March 15th",
          "April 1st",
          "Immediately"
        ],
        answer: 1,
        explanation: "The memo states 'Effective March 15, 2025'."
      },
      {
        id: 2,
        type: "detail",
        question: "What must employees do when staying after 8:00 PM?",
        options: [
          "Call security",
          "Sign out with security",
          "Use the loading dock",
          "Obtain a visitor pass"
        ],
        answer: 1,
        explanation: "Employees must 'sign out with security' after 8 PM."
      },
      {
        id: 3,
        type: "detail",
        question: "Where must deliveries be made?",
        options: [
          "Front entrance",
          "Security desk",
          "Loading dock entrance",
          "Employee entrance"
        ],
        answer: 2,
        explanation: "Deliveries must be made 'through the loading dock entrance'."
      },
      {
        id: 4,
        type: "purpose",
        question: "What is the purpose of this memo?",
        options: [
          "To announce new employees",
          "To inform about security changes",
          "To report a security incident",
          "To request security badges"
        ],
        answer: 1,
        explanation: "The memo's purpose is to announce new security procedures."
      }
    ]
  },

  {
    id: "part7-single-4",
    type: "single",
    documentType: "notice",
    title: "Flight Schedule Change",
    content: `NOTICE OF FLIGHT SCHEDULE CHANGE

Dear Passenger,

This notice is to inform you that your upcoming flight has been rescheduled.

FLIGHT DETAILS:
Flight Number: AC852
Route: Toronto to Vancouver
Original Date: May 15, 2025
New Date: May 16, 2025
Departure Time: 9:30 AM
Arrival Time: 11:45 AM

Reason for Change: Aircraft maintenance requirements

WHAT YOU NEED TO DO:
• Confirm your new travel arrangements by calling 1-800-AIR-CAN
• Update any ground transportation or hotel reservations
• Present this notice at check-in

COMPENSATION:
As a gesture of goodwill, we are offering:
- A complimentary meal voucher
- 500 bonus frequent flyer miles
- 10% discount on your next booking

We apologize for any inconvenience this change may cause and thank
you for your understanding and continued patronage.

Air Canada Customer Service`,
    questions: [
      {
        id: 1,
        type: "detail",
        question: "Why was the flight rescheduled?",
        options: [
          "Weather conditions",
          "Aircraft maintenance",
          "Staff shortage",
          "Low passenger numbers"
        ],
        answer: 1,
        explanation: "The notice states 'Reason for Change: Aircraft maintenance requirements'."
      },
      {
        id: 2,
        type: "detail",
        question: "What time does the flight depart?",
        options: [
          "9:30 AM",
          "11:45 AM",
          "10:00 AM",
          "12:00 PM"
        ],
        answer: 0,
        explanation: "The flight departs at '9:30 AM'."
      },
      {
        id: 3,
        type: "detail",
        question: "What compensation is being offered?",
        options: [
          "Full refund",
          "Meal voucher and bonus miles",
          "Free hotel stay",
          "Upgrade to business class"
        ],
        answer: 1,
        explanation: "Compensation includes 'A complimentary meal voucher' and '500 bonus frequent flyer miles'."
      },
      {
        id: 4,
        type: "detail",
        question: "What should the passenger do first?",
        options: [
          "Update hotel reservations",
          "Call to confirm arrangements",
          "Present notice at check-in",
          "Book ground transportation"
        ],
        answer: 1,
        explanation: "The first action item is to 'Confirm your new travel arrangements by calling'."
      }
    ]
  },

  {
    id: "part7-single-5",
    type: "single",
    documentType: "article",
    title: "Remote Work Trends",
    content: `REMOTE WORK: THE NEW NORMAL

By Sarah Johnson, Business Analyst

The workplace landscape has undergone a dramatic transformation in recent years,
with remote work becoming increasingly common. According to a recent survey by
the Global Workforce Institute, approximately 45% of employees now work remotely
at least part of the time, compared to just 15% five years ago.

Companies embracing remote work report several benefits:
• Reduced overhead costs (average savings: 22%)
• Access to a wider talent pool
• Increased employee satisfaction
• Higher productivity levels

However, challenges exist as well:
• Communication difficulties
• Maintaining company culture
• Managing remote teams effectively
• Ensuring data security

Experts predict that hybrid models—combining office and remote work—will
dominate the future. Technology companies are leading the way, with 78%
of tech firms offering flexible work arrangements.

As one HR director noted, "The key to success is clear communication
and trust between employers and employees."`,
    questions: [
      {
        id: 1,
        type: "detail",
        question: "What percentage of employees work remotely part-time?",
        options: [
          "15%",
          "22%",
          "45%",
          "78%"
        ],
        answer: 2,
        explanation: "The article states 'approximately 45% of employees now work remotely at least part of the time'."
      },
      {
        id: 2,
        type: "detail",
        question: "What is the average cost saving for companies?",
        options: [
          "15%",
          "22%",
          "45%",
          "78%"
        ],
        answer: 1,
        explanation: "The article mentions 'average savings: 22%'."
      },
      {
        id: 3,
        type: "inference",
        question: "Which industry is leading in remote work?",
        options: [
          "Healthcare",
          "Finance",
          "Technology",
          "Manufacturing"
        ],
        answer: 2,
        explanation: "The article states 'Technology companies are leading the way'."
      },
      {
        id: 4,
        type: "main_idea",
        question: "What is the main focus of this article?",
        options: [
          "How to manage remote teams",
          "The rise of remote work trends",
          "Problems with remote work",
          "Technology for remote work"
        ],
        answer: 1,
        explanation: "The article discusses the trend of remote work becoming more common."
      }
    ]
  },

  // DOUBLE PASSAGES (8 passages)
  {
    id: "part7-double-1",
    type: "double",
    title: "Conference Registration",
    documents: [
      {
        type: "email",
        title: "Conference Invitation",
        content: `From: Professional Development Association
To: All Members
Date: August 20, 2025
Subject: Annual Leadership Conference 2025

Dear Member,

We are delighted to invite you to our Annual Leadership Conference,
taking place at the Grand Hotel on October 15-17, 2025.

This year's theme: "Leading Through Innovation"

Featured Speakers:
• Dr. Maria Santos - CEO, TechGlobal Inc.
• Mr. James Chen - Author, "The Future of Leadership"
• Ms. Linda Park - Innovation Director, FutureCorp

Registration Fees:
Early Bird (by Sept 15): $399
Regular: $499
On-site: $549

Fees include:
• All conference sessions
• Conference materials
• Daily lunch and refreshments
• Networking dinner

Register online at: www.pda-conference.org
Sincerely,
Conference Committee`
      },
      {
        type: "form",
        title: "Registration Form",
        content: `PROFESSIONAL DEVELOPMENT ASSOCIATION
Annual Leadership Conference 2025 - Registration Form

Name: _____________________________
Organization: ______________________
Title: _____________________________
Email: _____________________________
Phone: _____________________________

Registration Type:
[ ] Early Bird - $399 (deadline: Sept 15)
[ ] Regular - $499
[ ] On-site - $549

Payment Method:
[ ] Credit Card        [ ] Check        [ ] Invoice
Card Number: _________________________
Expiry: _________    CVV: __________

Special Requirements:
[ ] Dietary restrictions: ______________
[ ] Accessibility needs: _______________
[ ] Need hotel accommodation: [ ] Yes [ ] No

I agree to the cancellation policy:
• Full refund if cancelled by Sept 30
• 50% refund if cancelled by Oct 7
• No refund after Oct 7

Signature: __________________________  Date: _________`
      }
    ],
    questions: [
      {
        id: 1,
        type: "detail",
        question: "When is the Early Bird registration deadline?",
        options: [
          "September 15",
          "September 30",
          "October 7",
          "October 15"
        ],
        answer: 0,
        explanation: "Both documents mention 'Early Bird (by Sept 15)'."
      },
      {
        id: 2,
        type: "detail",
        question: "How much is saved by registering early?",
        options: [
          "$50",
          "$100",
          "$150",
          "$200"
        ],
        answer: 2,
        explanation: "$499 (regular) - $399 (early) = $100 difference"
      },
      {
        id: 3,
        type: "detail",
        question: "What is the full refund deadline?",
        options: [
          "September 15",
          "September 30",
          "October 7",
          "October 15"
        ],
        answer: 1,
        explanation: "The form states 'Full refund if cancelled by Sept 30'."
      },
      {
        id: 4,
        type: "detail",
        question: "Who is NOT listed as a featured speaker?",
        options: [
          "Dr. Maria Santos",
          "Mr. James Chen",
          "Ms. Linda Park",
          "Dr. Robert Johnson"
        ],
        answer: 3,
        explanation: "Dr. Robert Johnson is not mentioned in the speaker list."
      },
      {
        id: 5,
        type: "synthesis",
        question: "What is included in the registration fee?",
        options: [
          "Hotel accommodation",
          "All meals",
          "Daily lunch and refreshments",
          "Transportation"
        ],
        answer: 2,
        explanation: "The email lists 'Daily lunch and refreshments' as included."
      }
    ]
  },

  {
    id: "part7-double-2",
    type: "double",
    title: "Product Recall Notice",
    documents: [
      {
        type: "notice",
        title: "Product Recall Notice",
        content: `URGENT PRODUCT RECALL NOTICE

Model: PowerBlender Pro 3000
Affected Units: All units manufactured between
           January 2024 - June 2024
           (Serial numbers: PB3000-24000 to PB3000-24999)

Reason: Safety Hazard - Blade assembly may become
       detached during operation.

Action Required:
1. IMMEDIATELY STOP USING the product
2. Unplug the blender
3. Contact KitchenPro Customer Service

Remedy: Free repair or full refund

Contact Information:
Phone: 1-800-KITCHEN (1-800-548-2436)
Email: support@kitchenpro.com
Website: www.kitchenpro.com/recall

We sincerely apologize for any inconvenience.

KitchenPro Inc.
Customer Safety Division`
      },
      {
        type: "email",
        title: "Customer Response",
        content: `From: customer@email.com
To: support@kitchenpro.com
Date: October 5, 2025
Subject: Product Recall - PowerBlender Pro 3000

Dear KitchenPro Customer Service,

I am writing in response to your product recall notice for the
PowerBlender Pro 3000.

I purchased my blender on March 15, 2024, from BestMart Store.
The serial number is PB3000-24567, which appears to be within
the affected range.

I would like to request a full refund as I no longer feel
comfortable using this product. Please let me know the
process for receiving my refund.

My receipt is attached for your reference.

Thank you for your prompt attention to this matter.

Sincerely,
Margaret Thompson
Email: m.thompson@email.com
Phone: 555-0147`
      }
    ],
    questions: [
      {
        id: 1,
        type: "detail",
        question: "Why is the PowerBlender Pro 3000 being recalled?",
        options: [
          "Electrical fire hazard",
          "Blade assembly may detach",
          "Defective cord",
          "Overheating problem"
        ],
        answer: 1,
        explanation: "The notice states 'Blade assembly may become detached during operation'."
      },
      {
        id: 2,
        type: "detail",
        question: "What is Margaret Thompson requesting?",
        options: [
          "Free repair",
          "Product replacement",
          "Full refund",
          "Store credit"
        ],
        answer: 2,
        explanation: "Margaret states 'I would like to request a full refund'."
      },
      {
        id: 3,
        type: "synthesis",
        question: "When did Margaret purchase her blender?",
        options: [
          "January 2024",
          "March 2024",
          "June 2024",
          "October 2024"
        ],
        answer: 1,
        explanation: "Margaret's email states 'I purchased my blender on March 15, 2024'."
      },
      {
        id: 4,
        type: "synthesis",
        question: "Is Margaret's blender covered by the recall?",
        options: [
          "No, her serial number is not in the range",
          "Yes, her serial number is within the affected range",
          "No, she purchased it too long ago",
          "Yes, all blenders are recalled"
        ],
        answer: 1,
        explanation: "Her serial number PB3000-24567 falls within PB3000-24000 to PB3000-24999."
      },
      {
        id: 5,
        type: "detail",
        question: "What should customers do first when they receive the notice?",
        options: [
          "Contact customer service",
          "Stop using the product",
          "Unplug the blender",
          "Request a refund"
        ],
        answer: 1,
        explanation: "The notice lists 'IMMEDIATELY STOP USING the product' as step 1."
      }
    ]
  },

  // TRIPLE PASSAGES (2 passages)
  {
    id: "part7-triple-1",
    type: "triple",
    title: "Employee Benefits Package",
    documents: [
      {
        type: "memo",
        title: "Benefits Overview",
        content: `MEMORANDUM

TO: All Employees
FROM: Human Resources Department
DATE: January 5, 2025
SUBJECT: Updated Employee Benefits Package

We are pleased to announce enhanced benefits effective February 1, 2025:

HEALTH INSURANCE:
• Medical: PPO Plan - 80% employer-paid
• Dental: 100% employer-paid
• Vision: 100% employer-paid

RETIREMENT:
• 401(k) Plan: Employer match up to 5% of salary
• Vesting: 100% after 3 years

TIME OFF:
• Vacation: 2 weeks (years 1-2), 3 weeks (years 3+)
• Sick days: 10 days annually
• Holidays: 12 paid holidays

ADDITIONAL BENEFITS:
• Life insurance: 2x annual salary
• Tuition reimbursement: Up to $5,000/year
• Employee assistance program

Please review the attached documents for detailed information.

Human Resources Department`
      },
      {
        type: "notice",
        title: "Health Plan Details",
        content: `PPO HEALTH PLAN - SUMMARY OF BENEFITS

Premium: Employee pays 20% of total premium
Deductible: $500 individual / $1,000 family
Out-of-pocket maximum: $3,000 individual / $6,000 family

Covered Services:
• Preventive care: 100% covered
• Primary care visits: $25 copay
• Specialist visits: $50 copay
• Emergency room: $250 copay (+ deductible)
• Prescription drugs: Tier 1 $10 / Tier 2 $30 / Tier 3 $60

Network: Over 10,000 providers nationwide

Enrollment Deadline: January 25, 2025
Changes effective: February 1, 2025`
      },
      {
        type: "notice",
        title: "401(k) Enrollment Information",
        content: `401(k) RETIREMENT PLAN

EMPLOYER MATCH: For every dollar you contribute, the company
                matches up to 5% of your salary.

EXAMPLE: If you earn $50,000 and contribute 5% ($2,500),
          the company contributes $2,500.

INVESTMENT OPTIONS:
• Target-date funds
• Index funds
• Company stock
• Bond funds
• Money market accounts

VESTING SCHEDULE:
Year 1-2: 0% vested
Year 3: 50% vested
Year 4: 75% vested
Year 5+: 100% vested

ENROLLMENT: Complete the online form at www.benefits.com/401k
            by January 25, 2025

Questions? Contact Benefits Hotline: 1-800-555-0400`
      }
    ],
    questions: [
      {
        id: 1,
        type: "synthesis",
        question: "What percentage of health insurance premiums does the employee pay?",
        options: [
          "0%",
          "20%",
          "50%",
          "80%"
        ],
        answer: 1,
        explanation: "The Health Plan states 'Employee pays 20% of total premium'."
      },
      {
        id: 2,
        type: "synthesis",
        question: "How much vacation time does an employee with 4 years of service receive?",
        options: [
          "1 week",
          "2 weeks",
          "3 weeks",
          "4 weeks"
        ],
        answer: 2,
        explanation: "The Benefits memo states '3 weeks (years 3+)'."
      },
      {
        id: 3,
        type: "synthesis",
        question: "What is the copay for a specialist visit?",
        options: [
          "$10",
          "$25",
          "$50",
          "$250"
        ],
        answer: 2,
        explanation: "The Health Plan states 'Specialist visits: $50 copay'."
      },
      {
        id: 4,
        type: "synthesis",
        question: "When is an employee fully vested in the 401(k) plan?",
        options: [
          "After 1 year",
          "After 3 years",
          "After 5 years",
          "Immediately"
        ],
        answer: 2,
        explanation: "The 401(k) notice shows 'Year 5+: 100% vested'."
      },
      {
        id: 5,
        type: "synthesis",
        question: "What is the maximum employer 401(k) contribution for an employee earning $60,000?",
        options: [
          "$1,500",
          "$2,500",
          "$3,000",
          "$5,000"
        ],
        answer: 2,
        explanation: "5% of $60,000 = $3,000 maximum employer match."
      },
      {
        id: 6,
        type: "synthesis",
        question: "What is the enrollment deadline for all benefits?",
        options: [
          "January 5",
          "January 25",
          "February 1",
          "February 15"
        ],
        answer: 1,
        explanation: "All documents mention 'Enrollment Deadline: January 25, 2025'."
      },
      {
        id: 7,
        type: "synthesis",
        question: "Which benefit requires 3 years of service for full benefit?",
        options: [
          "Health insurance",
          "401(k) vesting",
          "Vacation time",
          "Tuition reimbursement"
        ],
        answer: 1,
        explanation: "401(k) vesting reaches 100% after 5 years, but vacation increases after 3 years."
      }
    ]
  },
];

// Helper functions
function getPart7Passages(count = 5, type = null) {
  let passages = type
    ? part7Passages.filter(p => p.type === type)
    : [...part7Passages];
  return passages.sort(() => 0.5 - Math.random()).slice(0, count);
}

function getPart7PassageById(id) {
  return part7Passages.find(p => p.id === id);
}

function getPart7PassagesByDocumentType(documentType) {
  return part7Passages.filter(p =>
    p.documents ? p.documents.some(d => d.type === documentType) : p.documentType === documentType
  );
}

// Export
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { part7Passages, getPart7Passages, getPart7PassageById, getPart7PassagesByDocumentType };
}
