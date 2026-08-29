export const REGISTRATION_FORM_URL = "https://forms.gle/YTbWpcrhAw5CJfAx5";

export const EVENT_DATE = new Date("2026-09-19T08:30:00").getTime();

export const EVENTS_DATA = [
  // TECHNICAL EVENTS (4)
  {
    id: "evt-01",
    eventNo: "EVENT 01",
    title: "Explore Innovation",
    category: "technical",
    tagline: "Technical Paper Presentation on recent technological domains and novel innovations.",
    description: "A platform for delegates to present technical papers on recent technological domains. Each presentation must concentrate on a specific aspect or application of recent technology.",
    duration: "10 Minutes + Q&A",
    teamSize: "2 Members per Team",
    timing: "10:30 AM - 01:00 PM",
    icon: "FileText",
    image: "",
    rounds: [
      { round: "Round 1", title: "Paper Submission", description: "Submit 250-word abstract and 7-10 page .docx paper in IEEE format prior to event via email." },
      { round: "Round 2", title: "Stage Presentation", description: "10 minutes presentation + Q&A session with jury panel." }
    ],
    rules: [
      "Teams can have up to 2 participants.",
      "Teams can independently select topics in a recent domain, but each presentation must concentrate on a specific aspect or application of recent technology.",
      "Abstracts should be no longer than 250 words.",
      "Papers should be 7 to 10 pages.",
      "Papers must be submitted in .docx format.",
      "Papers should follow the IEEE format, including sections such as the abstract.",
      "Participants must submit/upload their paper/document prior to the event.",
      "The paper must be submitted via email to sriarunakameshwaran.mca@npsbcet.edu.in."
    ],
    coordinators: "Joice Margreat (+91 80157 67915)"
  },
  {
    id: "evt-02",
    eventNo: "EVENT 02",
    title: "APPFORGE",
    category: "technical",
    tagline: "App Creation Challenge — Transform ideas into practical digital solutions.",
    description: "AppForge is an App Creation Challenge designed to encourage students to transform ideas into practical digital solutions. The event focuses not only on application development, but on problem-solving, creativity, technical knowledge, usability, and each participant's ability to understand and explain their own work.",
    duration: "1 Hour",
    teamSize: "2 Members per Team",
    timing: "11:30 AM - 12:30 PM",
    icon: "Smartphone",
    image: "",
    rounds: [
      { round: "Round 1", title: "Theme Announcement & Development", description: "Judges announce the theme / problem statement. The 1-hour development timer begins." },
      { round: "Round 2", title: "Submission & Demonstration", description: "Participants submit within time and demonstrate their app to the judges for evaluation." }
    ],
    rules: [
      "Format: Offline event at Computer Lab.",
      "Participants report to the venue and basic instructions are given.",
      "Judges announce the theme / problem statement.",
      "The development timer begins (1 hour duration).",
      "Participants develop their application.",
      "Participants submit within the given time.",
      "Participants demonstrate their application.",
      "Judges evaluate the submission and results are finalized."
    ],
    coordinators: "Aishwarya (+91 78713 23512)"
  },
  {
    id: "evt-03",
    eventNo: "EVENT 03",
    title: "TECH MATRIX",
    category: "technical",
    tagline: "Project Expo & Technical Prototype Challenge — Showcase live software demos or physical models.",
    description: "TECH MATRIX is a high-impact technical project expo and evaluation arena. Showcase your functional physical models or live software demos at designated stalls for continuous jury evaluation and direct Q&A sessions.",
    duration: "60 Minutes",
    teamSize: "1 - 4 Members",
    timing: "10:30 AM - 11:30 AM",
    icon: "Cpu",
    image: "",
    rounds: [
      { round: "Round 1", title: "Screening MCQ Test", description: "30 questions (20 marks) on programming fundamentals, syntax, output prediction, logical errors, and debugging concepts." },
      { round: "Round 2", title: "Expo Evaluation (60 Mins)", description: "Judges continuously evaluate stalls based on live prototype demos, technical innovation, and a direct 5-minute Q&A session per team." }
    ],
    rules: [
      "Stalls must be completely set up and operational 15 minutes before the event starts; evaluation begins immediately at the start time.",
      "Every team must showcase a functional physical model or live software demo; static slide decks will not be accepted.",
      "Teams must remain at their assigned stall throughout the full hour to present their project to visiting judges and attendees.",
      "Projects must be original student developments; using commercial off-the-shelf products without major innovation leads to disqualification.",
      "Round 1 Screening MCQ: 30 questions (20 marks) on programming fundamentals, syntax, output prediction, logical errors, and debugging concepts.",
      "Participants must complete Round 1 within the given time limit and select the most appropriate answer (no changes allowed after submission).",
      "Participants who qualify in Round 1 will proceed to Round 2 (Expo Evaluation)."
    ],
    coordinators: "Arish (+91 91764 89548)"
  },
  {
    id: "evt-04",
    eventNo: "EVENT 04",
    title: "CODE ODYSSEY",
    category: "technical",
    tagline: "Debugging Event — Test your syntax precision, error correction, and output prediction.",
    description: "CODE ODYSSEY is a high-octane code debugging competition. Identify and correct syntax, logical, and runtime errors in programs within the time limit to prove your debugging mastery.",
    duration: "60 Minutes",
    teamSize: "1 - 2 Members",
    timing: "11:00 AM - 12:30 PM",
    icon: "Bug",
    image: "",
    rounds: [
      { round: "Round 1", title: "MCQ Test (20 Marks)", description: "30 questions on programming fundamentals, syntax, output prediction, logical errors, and debugging concepts." },
      { round: "Round 2", title: "Debugging Program (30 Marks)", description: "Identify and correct syntax, logical, or runtime errors in given programs to achieve correct output within the time limit." }
    ],
    rules: [
      "Round 1: 30 MCQ questions (20 marks) on programming fundamentals, syntax, output prediction, and logical errors. Select the most appropriate answer; no changes allowed after submission.",
      "Round 2: Provided with programs containing syntax, logical, or runtime errors. Identify and correct errors within the time limit (30 marks based on error identification, correction, and output correctness).",
      "Scoring: Round 1 (20 Marks) + Round 2 (30 Marks) = Total 50 Marks. Combined score determines the winner; tie preference goes to higher Round 2 score.",
      "Participants must follow all instructions given by event coordinators and report to the venue before the event begins.",
      "Use of mobile phones, internet, or external assistance is strictly prohibited during the event.",
      "Discussion or communication with other participants during the event is not allowed.",
      "Any form of malpractice will result in immediate disqualification.",
      "The decision of the event coordinators/judges will be final and binding."
    ],
    coordinators: "Silambarasan (+91 70924 72005)"
  },

  // NON-TECHNICAL EVENTS (4)
  {
    id: "evt-nontech-01",
    eventNo: "EVENT 01",
    title: "QUESTOPIA",
    category: "non-technical",
    tagline: "Screening riddles, campus clue hunt, and final treasure hunt.",
    description: "A multi-stage adventure quest! Solve cryptic riddles to pass the gateway, track down hidden clues across campus, and follow the final clue trail to locate the hidden treasure.",
    duration: "20 Minutes",
    teamSize: "3 – 4 Members",
    timing: "10:30 AM - 01:00 PM",
    icon: "Compass",
    image: "",
    rounds: [
      { round: "Round 1", title: "Gateway", description: "a screening test featuring riddles." },
      { round: "Round 2", title: "Clue Hunt", description: "teams track down hidden clues across the campus." },
      { round: "Round 3", title: "Treasure Hunt", description: "follow the final clue trail to locate the treasure." }
    ],
    rules: [
      "Teams must follow the rounds in the given order and must not tamper with clues or interfere with other teams.",
      "Participants must remain within the designated campus area and must not disturb classes, staff, or other ongoing events.",
      "Any cheating, clue sharing, property damage, or misconduct will result in immediate disqualification.",
      "Participants must report 15 minutes before the event begins.",
      "The decision of the Event Coordinators / Judges will be final and binding."
    ],
    coordinators: "Vignesh (+91 63824 11698)"
  },
  {
    id: "evt-nontech-02",
    eventNo: "EVENT 02",
    title: "DUMB CHARADAS",
    category: "non-technical",
    tagline: "Decode tech puzzles and act out technical words without speaking.",
    description: "Test your non-verbal communication and rapid team coordination! Decode scrambled tech puzzles and act out technical words or identities for your team to guess before time runs out.",
    duration: "15 Minutes",
    teamSize: "3 – 5 Members",
    timing: "11:00 AM - 01:00 PM",
    icon: "Users",
    image: "",
    rounds: [
      { round: "Round 1", title: "Tech Puzzle", description: "decode a scrambled technical word." },
      { round: "Round 2", title: "Tech Charades", description: "act out a technical word or identity for your team to guess." },
      { round: "Round 3", title: "Charades Challenge", description: "act out two related word identities." }
    ],
    rules: [
      "One participant acts out an object, technical word, or identity without speaking, while their team guesses it.",
      "The event consists of a total of 3 rounds as outlined above.",
      "Mobile phone or laptop access is strictly prohibited.",
      "Correct answers will be awarded marks; there is no negative marking for wrong answers.",
      "The decision of the Event Coordinators / Judges will be final and binding."
    ],
    coordinators: "Vignesh (+91 63824 11698)"
  },
  {
    id: "evt-nontech-03",
    eventNo: "EVENT 03",
    title: "NEXORA",
    category: "non-technical",
    tagline: "Spot picture links, piece together clues, and master rapid connection chaos.",
    description: "A fun and intense connective thinking competition! Participants must spot hidden links between picture sets, piece together cryptic clues, and race through rapid-fire connection chaos.",
    duration: "15 Minutes",
    teamSize: "3 – 5 Members",
    timing: "01:30 PM - 03:00 PM",
    icon: "Link2",
    image: "",
    rounds: [
      { round: "Round 1", title: "Picture Connection", description: "spot the link between a set of images." },
      { round: "Round 2", title: "Clue Connect", description: "piece together clues to find the common connection." },
      { round: "Round 3", title: "Connection Chaos", description: "rapid-fire rounds testing quick connective thinking." }
    ],
    rules: [
      "Participants must identify the common connection between the given pictures / clues within the allotted time.",
      "Mobile phone or laptop access is strictly prohibited.",
      "Correct answers will be awarded marks; there is no negative marking for wrong answers.",
      "The decision of the Event Coordinators / Judges will be final and binding."
    ],
    coordinators: "Vignesh (+91 63824 11698)"
  },
  {
    id: "evt-nontech-04",
    eventNo: "EVENT 04",
    title: "TECH BLITZ",
    category: "non-technical",
    tagline: "AI trivia, rapid fire technical challenges, and the ultimate hot seat.",
    description: "A high-octane trivia and speed challenge arena! Answer fast-paced AI and social media questions, tackle fun technical challenges, and brave the intense final hot seat.",
    duration: "15 Minutes",
    teamSize: "Team Event",
    timing: "02:00 PM - 04:00 PM",
    icon: "Zap",
    image: "",
    rounds: [
      { round: "Round 1", title: "Quick Spot", description: "questions related to AI and social media." },
      { round: "Round 2", title: "Rapid Fire Chaos", description: "fun challenges built around technical questions." },
      { round: "Round 3", title: "Hot Seat", description: "a mix of technical and non-technical questions." }
    ],
    rules: [
      "Each participant must answer the questions within the allotted time without help from others.",
      "Mobile phone or laptop access is strictly prohibited.",
      "Correct answers will be awarded marks; there is no negative marking for wrong answers.",
      "The decision of the Event Coordinators / Judges will be final and binding."
    ],
    coordinators: "Vignesh (+91 63824 11698)"
  }
];


