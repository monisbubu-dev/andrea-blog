export interface BlogArticle {
  id: string;
  sectionNumber: number;
  navTitle: string;
  fullTitle: string;
  category: string;
  date: string;
  readTime: string;
  imageMarker: string;
  imageSrc: string;
  imageAlt: string;
  text: string;
  accentColor: string; // one of the 5 palette colors
  secondaryAccent: string;
  ribbonColor: string;
  keyVocabulary: {
    word: string;
    type: string;
    definition: string;
  }[];
  keyTakeaway: string;
}

export const PALETTE = {
  navy: '#003C7F',
  ocean: '#0065A8',
  sky: '#008FC2',
  teal: '#00B9CB',
  mint: '#00E1C6',
};

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    id: 'section-1',
    sectionNumber: 1,
    navTitle: 'My Personal English Learning Blog',
    fullTitle: 'My Personal English Learning Blog',
    category: 'Language Immersion & Method',
    date: 'Autumn 2026',
    readTime: '2 min read',
    imageMarker: 'foto england usa.png',
    imageSrc: '/public/assets/aistudio/foto_england_usa_3c3b208c.png',
    imageAlt: 'Cultural collage of English landmarks and cities across the UK and USA',
    text: `Hello everyone! My name is Andrea Ospina, and in this blog, I will share some activities that have allowed me to approach and learn the English language in a proactive, entertaining, and fun way, going beyond a purely academic focus. When we learn a language in a versatile way—such as immersing ourselves in contexts we love to research and explore—expanding our English vocabulary becomes incredibly enriching, and the learning process itself becomes much more meaningful.`,
    accentColor: '#003C7F',
    secondaryAccent: '#00B9CB',
    ribbonColor: '#0065A8',
    keyVocabulary: [
      { word: 'proactive', type: 'adjective', definition: 'Taking action by causing change rather than reacting after something has happened.' },
      { word: 'versatile', type: 'adjective', definition: 'Able to adapt or be adapted to many different functions or activities.' },
      { word: 'enriching', type: 'adjective', definition: 'Improving or enhancing the quality or value of something.' },
      { word: 'meaningful', type: 'adjective', definition: 'Having real importance, purpose, or depth.' },
    ],
    keyTakeaway: 'Language acquisition flourishes when tied to intrinsic curiosity, multidisciplinary research, and active real-world engagement.',
  },
  {
    id: 'section-2',
    sectionNumber: 2,
    navTitle: 'About me',
    fullTitle: 'About me',
    category: 'Profile & Technology',
    date: 'Bio & Journey',
    readTime: '1 min read',
    imageMarker: 'About me.png',
    imageSrc: '/public/assets/aistudio/About_me_9d336140.png',
    imageAlt: 'Illustration of Andrea coding with laptop, glasses, and friendly greeting',
    text: `I am Andrea Ospina, a student of Multimedia and Web Development Technology at SENA. I love everything related to technology, design, and science. I truly enjoy learning every day and teaching others.`,
    accentColor: '#0065A8',
    secondaryAccent: '#00E1C6',
    ribbonColor: '#008FC2',
    keyVocabulary: [
      { word: 'multimedia', type: 'noun', definition: 'Using more than one medium of expression or communication.' },
      { word: 'development', type: 'noun', definition: 'The process of designing, coding, testing, and maintaining software.' },
      { word: 'technology', type: 'noun', definition: 'The application of scientific knowledge for practical purposes.' },
    ],
    keyTakeaway: 'Passionate about integrating creative digital multimedia, clean code architectures, and continuous shared knowledge.',
  },
  {
    id: 'section-3',
    sectionNumber: 3,
    navTitle: 'Dialoguing possible solutions to problems in a social context',
    fullTitle: 'Dialoguing possible solutions to problems in a social context',
    category: 'Social Awareness & Ethics',
    date: 'Social Reflection',
    readTime: '3 min read',
    imageMarker: 'Dialoging.png',
    imageSrc: '/src/assets/images/dialoging_social_discussion_1794278872443.jpg',
    imageAlt: 'Diverse collaborative group actively discussing and dialoguing solutions to social challenges',
    text: `I reflect on how our inner state controls the outcome, because the way we approach our work and study activities says a lot about the type of person we are. We must be responsible and do our work well. We have to monitor our inner state, and motivation is very important. We should motivate ourselves every day because it is a great way to stay consistent and grow in all our actions. Sometimes we might feel inconsistent or lack motivation. For this reason, we should set short- and long-term goals to monitor our development and evolution over time. I also believe that empathy is key to understanding others' needs and proposing effective solutions. Collaborative work allows us to combine different ideas to achieve a common goal.`,
    accentColor: '#008FC2',
    secondaryAccent: '#003C7F',
    ribbonColor: '#003C7F',
    keyVocabulary: [
      { word: 'inner state', type: 'noun phrase', definition: 'A person\'s psychological, emotional, and cognitive mindset.' },
      { word: 'consistent', type: 'adjective', definition: 'Acting or done in the same way over time, especially so as to be fair or accurate.' },
      { word: 'empathy', type: 'noun', definition: 'The ability to understand and share the feelings, perspectives, and needs of another person.' },
      { word: 'collaborative', type: 'adjective', definition: 'Produced or conducted by two or more parties working together cooperatively.' },
    ],
    keyTakeaway: 'Self-monitoring, daily motivation, and mutual empathy are the bedrock of transformative social problem solving.',
  },
  {
    id: 'section-4',
    sectionNumber: 4,
    navTitle: 'Gold museum in Bogotá',
    fullTitle: 'Gold museum in Bogotá',
    category: 'Colombian Heritage & Tourism',
    date: 'Cultural Spotlight',
    readTime: '2 min read',
    imageMarker: 'raft muisca.jpg',
    imageSrc: '/public/assets/aistudio/raft_muisca_edbd3be6.jpg',
    imageAlt: 'The iconic pre-Columbian Muisca Raft (Balsa Muisca) made of gold at Museo del Oro',
    text: `I want to learn how I can present a fantastic tourist attraction in Colombia: The Gold Museum, or Museo del Oro. Located in the center of Bogotá, it is a massive and beautiful museum that many tourists visit every day. Inside, you can see thousands of gold pieces, such as the 'Muisca Raft' (Balsa Muisca), the 'Poporo Quimbaya', and the 'Bat Man' figure. The Gold Museum is an amazing place to learn about history and art. Admission is very affordable, and you can take beautiful photos. I invite you to visit Bogotá and explore this great museum.`,
    accentColor: '#00B9CB',
    secondaryAccent: '#0065A8',
    ribbonColor: '#0065A8',
    keyVocabulary: [
      { word: 'tourist attraction', type: 'noun phrase', definition: 'A place of interest that tourists visit, typically for its inherent or exhibited cultural value.' },
      { word: 'affordable', type: 'adjective', definition: 'Inexpensive and reasonably priced so that many people can enjoy it.' },
      { word: 'pre-Columbian', type: 'adjective', definition: 'Relating to the history and culture of the Americas before the arrival of Christopher Columbus.' },
    ],
    keyTakeaway: 'Celebrating ancestral craftsmanship and inviting the global community to discover Bogotá\'s historic wonders in English.',
  },
  {
    id: 'section-5',
    sectionNumber: 5,
    navTitle: 'Job Interview',
    fullTitle: 'Job Interview',
    category: 'Career Strategies & Tech Industry',
    date: 'Professional Communication',
    readTime: '3 min read',
    imageMarker: 'job interview.png',
    imageSrc: '/public/assets/aistudio/job_interview_80c4aeeb.png',
    imageAlt: 'Candidate and interviewers discussing technical qualifications during a professional job interview',
    text: `When facing a job interview, especially in the technology sector, it is essential to demonstrate confidence, clear vocalization, and accurate pronunciation, as well as to project a strong presence and be assertive. However, there are additional tips to ensure a successful outcome. For instance, you should prepare an elevator pitch—that is, having a one- to two-minute monologue ready in English where you summarize who you are, your approach to development, and the unique value you bring to a team. Practice this presentation until it flows naturally; this will help you build confidence from the very first minute and overcome the conversational fluency barrier. Furthermore, applying the STAR method (Situation, Task, Action, Result) is highly effective for answering behavioral questions. Finally, always remember that an interview is a two-way conversation. Asking insightful questions about their infrastructure, deployment processes, or team dynamics at the end of the meeting shows genuine interest. By combining technical readiness with strong communication strategies, you will undoubtedly leave a lasting and professional impression on the recruiters.`,
    accentColor: '#003C7F',
    secondaryAccent: '#00E1C6',
    ribbonColor: '#008FC2',
    keyVocabulary: [
      { word: 'elevator pitch', type: 'noun phrase', definition: 'A brief, persuasive speech used to spark interest in who you are and what you do.' },
      { word: 'assertive', type: 'adjective', definition: 'Having or showing a confident and forceful personality while remaining polite.' },
      { word: 'STAR method', type: 'acronym / framework', definition: 'Situation, Task, Action, Result: a structured method for responding to behavioral interview questions.' },
      { word: 'two-way conversation', type: 'noun phrase', definition: 'An interaction where both sides exchange ideas, questions, and evaluations equally.' },
    ],
    keyTakeaway: 'Combining the STAR framework with a refined elevator pitch transforms technical expertise into compelling communication.',
  },
  {
    id: 'section-6',
    sectionNumber: 6,
    navTitle: 'Student-Centered Mind Map: Personal Learning Environment (PLE)',
    fullTitle: 'Student-Centered Mind Map: Personal Learning Environment (PLE)',
    category: 'Pedagogy & Digital Learning Tools',
    date: 'Educational Architecture',
    readTime: '4 min read',
    imageMarker: 'ple.png',
    imageSrc: '/public/assets/aistudio/ple_fa5c9340.png',
    imageAlt: 'Detailed diagram illustrating the Student-Centered Personal Learning Environment (PLE)',
    text: `Nowadays, it is important to recognize the need to design highly engaging activities for students to increase their motivation. The proliferation of the Internet, web tools and services, smart applications, social networks, and freely accessible educational resources has substantiated the need to approach foreign language learning from these perspectives. The principles of a user-centered learning approach formed the basis for constructing personalized, active learning environments, which are highly adaptable, responsive to changing needs, and facilitate cognitive processes. In the learning process, it is important to take into account the actors of communication, such as pedagogy and the learning approach. Pedagogy must shift from being "institution-centered" to having a "student-tutor-device" focus. Information and Communication Technologies (ICTs) accumulate novel data and information, disseminate them, and serve as a means of knowledge transfer. Thus, they perform the function of both tools and objects of knowledge. For students, personal learning suggests autonomy and increased responsibility, along with their active participation in the learning process. Finally, the foreign language teacher acts as a facilitator who coordinates resources, using appropriate didactic approaches and teaching methods.`,
    accentColor: '#0065A8',
    secondaryAccent: '#00B9CB',
    ribbonColor: '#0065A8',
    keyVocabulary: [
      { word: 'Personal Learning Environment', type: 'pedagogical term', definition: 'Systems that help learners take control of and manage their own learning.' },
      { word: 'cognitive processes', type: 'noun phrase', definition: 'Mental operations including perception, memory, reasoning, and judgment.' },
      { word: 'facilitator', type: 'noun', definition: 'An educator who guides and supports learning rather than merely lecturing.' },
      { word: 'ICTs', type: 'acronym', definition: 'Information and Communication Technologies.' },
    ],
    keyTakeaway: 'Modern language pedagogy transitions from institutional rigidity to autonomous, device-mediated, student-led discovery.',
  },
  {
    id: 'section-7',
    sectionNumber: 7,
    navTitle: 'Crime and Punishment',
    fullTitle: 'Crime and Punishment',
    category: 'Philosophy, Law & Behavioral Science',
    date: 'Critical Analysis',
    readTime: '3 min read',
    imageMarker: 'crime.png',
    imageSrc: '/public/assets/aistudio/crime_7dc69f63.png',
    imageAlt: 'Gold balance scale symbol of legal justice and balance between crime and punishment',
    text: `A crime is an act that breaks a law relating to how one should behave in society. The harm caused by the act is seen as an offense against society as a whole, not just a specific person. More specifically, a crime is an act (something you do) or an omission (something you fail to do) that goes against the law and is punishable upon conviction. The exact definition of crime is a philosophical issue without a universally agreed-upon answer. Fields such as law, politics, sociology, and psychology define crime in different ways. The criminality of an action is dependent on its context; acts of violence will be seen as crimes in many circumstances, but as permissible or desirable in others. Historically, crime was seen as a manifestation of evil, but this has been superseded by modern criminal theories. In behavioral psychology (specifically operant conditioning, introduced by B.F. Skinner), punishment is defined strictly by its effect: a consequence that reduces the frequency of a behavior. According to Skinner's definition, punishment is a procedure in which responses are followed by either (a) the removal of a positive reinforcer, or (b) the presentation of a negative reinforcer (or an aversive stimulus). This definition requires that positive and negative reinforcers are identified through their respective procedures of positive and negative reinforcement.`,
    accentColor: '#003C7F',
    secondaryAccent: '#008FC2',
    ribbonColor: '#003C7F',
    keyVocabulary: [
      { word: 'omission', type: 'noun', definition: 'A failure to do something, especially something that one has a legal or moral duty to do.' },
      { word: 'operant conditioning', type: 'psychological term', definition: 'A method of learning that occurs through rewards and punishments for behavior.' },
      { word: 'reinforcer', type: 'psychological term', definition: 'A stimulus that strengthens or increases the frequency of the behavior that precedes it.' },
      { word: 'aversive stimulus', type: 'noun phrase', definition: 'An unpleasant event or stimulus intended to decrease a behavior.' },
    ],
    keyTakeaway: 'Examining crime through legal, societal, and Skinnerian operant conditioning frameworks to unpack human behavior.',
  },
];
