(async () => {
  const prompts = [
    {
      "heading": "Virtual Personal Assistant",
      "content": "Develop a ChatGPT-powered virtual assistant that can perform tasks like scheduling appointments, managing emails, and providing personalized recommendations"
    },
    {
      "heading": "Customer Support Automation",
      "content": "Use ChatGPT to automate customer support by handling common queries and providing instant responses"
    },
    {
      "heading": "Content Generation",
      "content": "Create a platform that utilizes ChatGPT to generate high-quality articles, blog posts, and social media content on various topics"
    },
    {
      "heading": "Language Translation Service",
      "content": "Develop a language translation service that uses ChatGPT to provide real-time translations for businesses and individuals"
    },
    {
      "heading": "Resume/CV Builder",
      "content": "Build a ChatGPT-based tool that assists users in creating professional resumes or CVs by offering suggestions and formatting tips"
    },
    {
      "heading": "Mental Health Support",
      "content": "Develop a ChatGPT-powered mental health support system that can offer personalized advice, coping strategies, and encouragement"
    },
    {
      "heading": "E-commerce Personal Shopper",
      "content": "Create a ChatGPT-powered personal shopping assistant that helps customers find and purchase products based on their preferences and needs"
    },
    {
      "heading": "Learning Companion",
      "content": "Build an educational platform that uses ChatGPT to provide interactive and personalized learning experiences for students of all ages"
    },
    {
      "heading": "Language Learning",
      "content": "Develop a language learning app that utilizes ChatGPT to provide conversational practice, vocabulary exercises, and grammar explanations"
    },
    {
      "heading": "Social Media Manager",
      "content": "Create a ChatGPT-based tool that helps businesses manage their social media accounts by suggesting content, engaging with followers, and analyzing performance"
    },
    {
      "heading": "Legal Advice",
      "content": "Build a ChatGPT-powered platform that provides basic legal advice and guidance to individuals and small businesses"
    },
    {
      "heading": "Travel Planner",
      "content": "Develop a ChatGPT-based travel planner that suggests destinations, creates itineraries, and provides information on flights, accommodations, and attractions"
    },
    {
      "heading": "Financial Planning",
      "content": "Create a ChatGPT-powered financial planning tool that offers personalized budgeting advice, investment recommendations, and retirement planning"
    },
    {
      "heading": "News Summarization",
      "content": "Develop a news aggregation platform that uses ChatGPT to generate concise and informative summaries of current events"
    },
    {
      "heading": "Gaming Assistant",
      "content": "Build a ChatGPT-powered gaming assistant that provides tips, hints, and walkthroughs for popular video games"
    },
    {
      "heading": "Real Estate Advisor",
      "content": "Create a ChatGPT-based tool that assists users in finding and evaluating real estate properties based on their preferences and budget"
    },
    {
      "heading": "Fitness Coach",
      "content": "Develop a ChatGPT-powered fitness coach that offers personalized workout routines, nutrition advice, and motivation"
    },
    {
      "heading": "Personal Stylist",
      "content": "Build a ChatGPT-based personal styling tool that helps users choose outfits, accessories, and hairstyles based on their body type, occasion, and preferences"
    },
    {
      "heading": "Language Correction",
      "content": "Create a ChatGPT-powered language correction service that helps users improve their writing skills by offering grammar and style suggestions"
    },
    {
      "heading": "Event Planner",
      "content": "Develop a ChatGPT-based event planning tool that assists users in organizing parties, conferences, and weddings by providing suggestions and managing details"
    },
    {
      "heading": "Recipe Generator",
      "content": "Build a ChatGPT-powered recipe generator that offers customized recipes based on dietary restrictions, ingredients on hand, and personal preferences"
    },
    {
      "heading": "Home Automation",
      "content": "Create a ChatGPT-powered home automation system that allows users to control smart devices through voice or text commands"
    },
    {
      "heading": "Job Interview Preparation",
      "content": "Develop a ChatGPT-based tool that simulates job interviews and provides feedback on answers, body language, and overall performance"
    },
    {
      "heading": "Personal Finance Assistant",
      "content": "Build a ChatGPT-powered personal finance assistant that tracks expenses, sets financial goals, and offers personalized money-saving tips"
    },
    {
      "heading": "Code Review",
      "content": "Create a ChatGPT-powered code review system that assists programmers by providing feedback, suggesting optimizations, and highlighting potential issues"
    },
    {
      "heading": "Relationship Advice",
      "content": "Develop a ChatGPT-powered platform that offers relationship advice, dating tips, and suggestions for improving communication"
    },
    {
      "heading": "Personalized Book Recommendations",
      "content": "Create a ChatGPT-based book recommendation service that suggests books based on users' interests, genres, and reading preferences"
    },
    {
      "heading": "Home Renovation Planner",
      "content": "Build a ChatGPT-powered home renovation planner that assists users in selecting designs, materials, and contractors for their remodeling projects"
    },
    {
      "heading": "Virtual Fitness Classes",
      "content": "Develop a ChatGPT-powered platform that offers virtual fitness classes with personalized instructions, modifications, and progress tracking"
    },
    {
      "heading": "Language Proficiency Assessment",
      "content": "Create a ChatGPT-based language proficiency assessment tool that evaluates users' language skills and provides recommendations for improvement"
    },
    {
      "heading": "Virtual Tour Guide",
      "content": "Build a ChatGPT-powered virtual tour guide that provides interactive tours of popular destinations, landmarks, and museums"
    },
    {
      "heading": "Stock Market Insights",
      "content": "Develop a ChatGPT-based platform that offers real-time stock market insights, trend analysis, and investment strategies"
    },
    {
      "heading": "Music Composition",
      "content": "Create a ChatGPT-powered music composition tool that generates original melodies, chord progressions, and harmonies based on users' preferences"
    },
    {
      "heading": "Resume Review",
      "content": "Build a ChatGPT-powered resume review service that analyzes resumes, offers feedback, and suggests improvements to optimize job search success"
    },
    {
      "heading": "Personalized Fashion Recommendations",
      "content": "Develop a ChatGPT-based fashion recommendation system that suggests clothing items, accessories, and styles based on users' preferences and body type"
    },
    {
      "heading": "Personal Development Coach",
      "content": "Create a ChatGPT-powered personal development coach that provides guidance, motivation, and action plans for personal growth and success"
    },
    {
      "heading": "Meditation and Mindfulness Guide",
      "content": "Build a ChatGPT-powered meditation and mindfulness guide that offers guided meditation sessions, breathing exercises, and relaxation techniques"
    },
    {
      "heading": "Investment Portfolio Management",
      "content": "Develop a ChatGPT-powered investment portfolio management tool that analyzes users' portfolios, offers diversification strategies, and monitors market trends"
    },
    {
      "heading": "Job Search Assistant",
      "content": "Create a ChatGPT-based job search assistant that helps users find job opportunities, prepares customized resumes and cover letters, and provides interview tips"
    },
    {
      "heading": "Personalized Workout Equipment Recommendations",
      "content": "Build a ChatGPT-powered platform that suggests workout equipment and accessories based on users' fitness goals, preferences, and budget"
    },
    {
      "heading": "Interior Design Consultant",
      "content": "Develop a ChatGPT-powered interior design consultant that offers recommendations for furniture, color schemes, and decor based on users' preferences and space"
    },
    {
      "heading": "Personalized Travel Recommendations",
      "content": "Create a ChatGPT-based travel recommendation service that suggests destinations, activities, and accommodations based on users' interests and budgets"
    },
    {
      "heading": "Nutrition and Meal Planning",
      "content": "Build a ChatGPT-powered nutrition and meal planning tool that offers personalized meal plans, recipes, and dietary recommendations"
    },
    {
      "heading": "Online Course Recommendations",
      "content": "Develop a ChatGPT-powered platform that suggests online courses and learning resources based on users' interests, goals, and skill level"
    },
    {
      "heading": "Language Pronunciation Trainer",
      "content": "Create a ChatGPT-powered language pronunciation trainer that provides audio feedback, exercises, and tips to improve users' pronunciation skills"
    },
    {
      "heading": "Personalized Productivity Assistant",
      "content": "Build a ChatGPT-powered productivity assistant that helps users manage their time, set goals, and prioritize tasks for increased efficiency"
    },
    {
      "heading": "Virtual Legal Document Generator",
      "content": "Develop a ChatGPT-powered platform that generates legal documents, such as contracts and agreements, based on users' specific needs and requirements"
    },
    {
      "heading": "Personalized Travel Itineraries",
      "content": "Create a ChatGPT-powered travel itinerary planner that suggests day-by-day plans, attractions, and activities tailored to users' preferences and travel duration"
    },
    {
      "heading": "Legal Document Assistance",
      "content": "Develop a ChatGPT-powered platform that helps users create and customize legal documents such as wills, contracts, and agreements"
    },
    {
      "heading": "Personalized Travel Recommendations",
      "content": "Create a ChatGPT-based travel recommendation service that suggests destinations, attractions, and accommodations based on users' preferences, budget, and travel history"
    },
    {
      "heading": "Fashion Trend Analysis",
      "content": "Build a ChatGPT-powered fashion trend analysis tool that provides insights on the latest fashion trends, styles, and brands to help businesses make informed decisions"
    },
    {
      "heading": "Virtual Language Tutoring",
      "content": "Develop a ChatGPT-powered virtual language tutoring service that offers personalized language lessons, grammar explanations, and conversation practice"
    },
    {
      "heading": "Mental Health Journaling",
      "content": "Create a ChatGPT-powered mental health journaling platform that provides prompts, reflections, and coping strategies to help users manage their emotions and well-being"
    },
    {
      "heading": "Personalized Financial Tips",
      "content": "Build a ChatGPT-based financial tips platform that offers tailored advice on saving, budgeting, investing, and managing personal finances"
    },
    {
      "heading": "AI-powered Copywriting",
      "content": "Develop a ChatGPT-powered copywriting tool that generates persuasive ad copies, marketing content, and product descriptions for businesses"
    },
    {
      "heading": "Personalized Home Decor Recommendations",
      "content": "Create a ChatGPT-based home decor recommendation service that suggests furniture, accessories, and decor based on users' preferences, style, and budget"
    },
    {
      "heading": "Fitness Challenge Platform",
      "content": "Build a ChatGPT-powered fitness challenge platform that provides workout challenges, tracks progress, and offers motivational support to users"
    },
    {
      "heading": "Virtual Career Coach",
      "content": "Develop a ChatGPT-powered virtual career coach that offers guidance, career advice, and interview preparation tips to help individuals navigate their professional paths"
    },
    {
      "heading": "Virtual Language Exchange",
      "content": "Create a ChatGPT-powered platform that facilitates virtual language exchange between users, allowing them to practice speaking and writing in different languages"
    },
    {
      "heading": "Personalized Gift Suggestions",
      "content": "Build a ChatGPT-based gift suggestion service that recommends personalized gift ideas for various occasions based on users' preferences, interests, and relationships"
    },
    {
      "heading": "Legal Research Assistant",
      "content": "Develop a ChatGPT-powered legal research assistant that helps lawyers and legal professionals find relevant cases, statutes, and legal precedents"
    },
    {
      "heading": "Social Media Influencer Analyzer",
      "content": "Create a ChatGPT-powered platform that analyzes social media influencers' engagement, reach, and demographics to help businesses make informed influencer marketing decisions"
    },
    {
      "heading": "Personalized Music Playlist Generator",
      "content": "Build a ChatGPT-powered music playlist generator that creates customized playlists based on users' mood, genre preferences, and activity"
    },
    {
      "heading": "AI-powered Business Analytics",
      "content": "Develop a ChatGPT-powered business analytics tool that analyzes data, generates reports, and provides insights to help businesses make data-driven decisions"
    },
    {
      "heading": "Personalized Home Workout Plans",
      "content": "Create a ChatGPT-based platform that generates customized home workout plans based on users' fitness goals, equipment availability, and time constraints"
    },
    {
      "heading": "Virtual Life Coach",
      "content": "Build a ChatGPT-powered virtual life coach that provides guidance, goal setting, and personal development strategies to help individuals achieve success and fulfillment"
    },
    {
      "heading": "AI-powered Resume Screening",
      "content": "Develop a ChatGPT-based resume screening tool that analyzes resumes, matches candidates with job requirements, and shortlists potential candidates for recruiters"
    },
    {
      "heading": "Personalized Product Recommendations",
      "content": "Create a ChatGPT-powered product recommendation engine that suggests relevant products based on users' preferences, shopping history, and reviews"
    },
    {
      "heading": "AI-based Market Research",
      "content": "Build a ChatGPT-powered market research tool that collects data, analyzes consumer trends, and provides insights to help businesses identify market opportunities"
    },
    {
      "heading": "Personalized Beauty and Skincare Recommendations",
      "content": "Create a ChatGPT-powered beauty and skincare recommendation service that suggests products based on users' skin type, concerns, and preferences"
    },
    {
      "heading": "AI-based Investment Advisory",
      "content": "Develop a ChatGPT-powered investment advisory platform that offers personalized investment strategies, portfolio optimization, and market insights"
    },
    {
      "heading": "Virtual Event Hosting",
      "content": "Build a ChatGPT-powered virtual event hosting service that facilitates online conferences, webinars, and workshops with interactive features and real-time assistance"
    },
    {
      "heading": "AI-powered Health Monitoring",
      "content": "Create a ChatGPT-based health monitoring tool that tracks users' health data, provides insights, and offers personalized recommendations for maintaining well-being"
    },
    {
      "heading": "Personalized Career Development",
      "content": "Develop a ChatGPT-powered career development platform that offers tailored guidance, skill assessments, and career path recommendations"
    },
    {
      "heading": "AI-based Content Curation",
      "content": "Build a ChatGPT-powered content curation platform that gathers, filters, and recommends relevant articles, blog posts, and news based on users' interests and preferences"
    },
    {
      "heading": "Virtual Language Interpretation",
      "content": "Create a ChatGPT-powered virtual language interpretation service that provides real-time interpretation for meetings, conferences, and events"
    },
    {
      "heading": "AI-powered UX/UI Design Feedback",
      "content": "Develop a ChatGPT-based tool that offers feedback and suggestions on user interface (UI) and user experience (UX) designs to improve usability and engagement"
    },
    {
      "heading": "Personalized Meditation Experiences",
      "content": "Create a ChatGPT-powered meditation app that offers guided meditation sessions tailored to users' preferences, goals, and stress levels"
    },
    {
      "heading": "AI-based Content Moderation",
      "content": "Build a ChatGPT-powered content moderation system that analyzes and filters user-generated content for inappropriate or harmful elements"
    },
    {
      "heading": "Virtual Legal Mediation",
      "content": "Develop a ChatGPT-powered virtual legal mediation platform that facilitates dispute resolution and provides guidance to parties involved"
    },
    {
      "heading": "AI-powered Personalized Advertising",
      "content": "Create a ChatGPT-based advertising platform that delivers targeted and personalized ads based on users' preferences, demographics, and behavior"
    },
    {
      "heading": "Virtual Life Planning",
      "content": "Build a ChatGPT-powered virtual life planning service that helps users set goals, create action plans, and track progress for personal and professional development"
    },
    {
      "heading": "AI-based Market Forecasting",
      "content": "Develop a ChatGPT-powered market forecasting tool that analyzes market trends, predicts future outcomes, and assists businesses in making strategic decisions"
    },
    {
      "heading": "Personalized Home Energy Optimization",
      "content": "Create a ChatGPT-powered platform that offers recommendations for energy-efficient practices, devices, and solutions tailored to users' homes and lifestyles"
    },
    {
      "heading": "AI-powered Customer Sentiment Analysis",
      "content": "Build a ChatGPT-based customer sentiment analysis system that analyzes customer feedback, reviews, and social media data to gauge brand sentiment"
    },
    {
      "heading": "Virtual Nutritionist",
      "content": "Develop a ChatGPT-powered virtual nutritionist that provides personalized dietary advice, meal plans, and nutritional information based on users' health goals and preferences"
    },
    {
      "heading": "AI-based Fraud Detection",
      "content": "Create a ChatGPT-powered fraud detection system that analyzes patterns, behaviors, and transactions to identify and prevent fraudulent activities"
    },
    {
      "heading": "Personalized Pet Care Recommendations",
      "content": "Build a ChatGPT-powered pet care recommendation service that offers tailored advice, products, and resources based on users' pets' breed, age, and needs"
    },
    {
      "heading": "Virtual Leadership Training",
      "content": "Develop a ChatGPT-powered virtual leadership training program that offers modules, coaching, and feedback to enhance leadership skills and effectiveness"
    },
    {
      "heading": "AI-based Social Media Sentiment Analysis",
      "content": "Create a ChatGPT-powered social media sentiment analysis tool that tracks brand mentions, analyzes sentiment, and provides insights for reputation management"
    },
    {
      "heading": "AI-based Virtual Assistant",
      "content": "Develop a ChatGPT-powered virtual assistant that provides personalized support, schedules appointments, and assists with various tasks"
    },
    {
      "heading": "Personalized Travel Packing Lists",
      "content": "Create a ChatGPT-based platform that generates customized packing lists based on users' destination, travel duration, and activities"
    },
    {
      "heading": "AI-powered Content Translation",
      "content": "Build a ChatGPT-powered content translation tool that offers accurate and natural language translation for written content"
    },
    {
      "heading": "Virtual Personal Shopper",
      "content": "Develop a ChatGPT-powered virtual personal shopper that recommends and purchases products on behalf of users based on their preferences and needs"
    },
    {
      "heading": "AI-based Resume Writing",
      "content": "Create a ChatGPT-powered resume writing service that generates professional resumes tailored to users' skills, experiences, and industry requirements"
    },
    {
      "heading": "Virtual Home Assistant",
      "content": "Build a ChatGPT-powered virtual home assistant that controls smart devices, manages household tasks, and provides personalized recommendations"
    },
    {
      "heading": "Personalized Investment Education",
      "content": "Develop a ChatGPT-powered investment education platform that offers tutorials, resources, and interactive lessons to help individuals learn about investing"
    },
    {
      "heading": "AI-powered Legal Document Review",
      "content": "Create a ChatGPT-based legal document review system that analyzes and provides suggestions for improving legal documents"
    },
    {
      "heading": "Virtual Personal Stylist",
      "content": "Build a ChatGPT-powered virtual personal stylist that offers fashion advice, outfit suggestions, and shopping recommendations based on users' preferences and body type"
    },
    {
      "heading": "Personalized Recipe Recommendations",
      "content": "Develop a ChatGPT-powered recipe recommendation service that suggests recipes based on users' dietary restrictions, ingredients on hand, and preferences"
    },
    {
      "heading": "AI-based Sentiment Analysis for Brand Reputation",
      "content": "Create a ChatGPT-powered sentiment analysis tool that monitors and analyzes online conversations to assess brand reputation and customer sentiment"
    },
    {
      "heading": "Virtual Language Assessment",
      "content": "Build a ChatGPT-powered virtual language assessment tool that evaluates users' language proficiency and provides customized feedback and learning resources"
    },
    {
      "heading": "Personalized Home Security Consultation",
      "content": "Develop a ChatGPT-powered home security consultation service that provides recommendations on security systems, devices, and measures for users' homes"
    },
    {
      "heading": "AI-powered Data Analysis",
      "content": "Create a ChatGPT-based data analysis tool that assists businesses in processing and interpreting complex data sets for decision-making purposes"
    },
    {
      "heading": "Virtual Career Skills Training",
      "content": "Build a ChatGPT-powered virtual career skills training program that offers interactive modules, simulations, and assessments to enhance professional skills"
    },
    {
      "heading": "Personalized Mental Health Resources",
      "content": "Develop a ChatGPT-powered platform that offers personalized mental health resources, coping strategies, and therapy referrals based on users' needs"
    },
    {
      "heading": "AI-based Social Media Management",
      "content": "Create a ChatGPT-powered social media management tool that automates content scheduling, analyzes engagement, and provides content recommendations"
    },
    {
      "heading": "Virtual Nutrition Coaching",
      "content": "Build a ChatGPT-powered virtual nutrition coaching service that offers personalized meal plans, dietary advice, and accountability for users' health goals"
    },
    {
      "heading": "Personalized Parenting Advice",
      "content": "Develop a ChatGPT-powered parenting advice platform that provides tailored suggestions, tips, and resources based on users' children's ages and developmental stages"
    },
    {
      "heading": "AI-powered Customer Service Chatbot",
      "content": "Create a ChatGPT-based customer service chatbot that handles customer inquiries, provides support, and resolves common issues"
    },
    {
      "heading": "Virtual Job Interview Preparation",
      "content": "Build a ChatGPT-powered virtual job interview preparation service that offers mock interviews, feedback, and tips for interview success"
    },
    {
      "heading": "Personalized Fitness Challenges",
      "content": "Develop a ChatGPT-powered platform that offers personalized fitness challenges, workout plans, and progress tracking for users' fitness journeys"
    }
  ];
  const headingElement = document.getElementById('prompt-heading');
  const contentElement = document.getElementById('prompt-content');
  const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
  headingElement.textContent = randomPrompt.heading;
  contentElement.textContent = randomPrompt.content;
})()
