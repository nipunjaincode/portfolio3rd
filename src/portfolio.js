/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Nipun's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Nipun Jain Portfolio",
    type: "website",
    url: "https://lucifernipun22.github.io/",
  },
};

//Home Page
const greeting = {
  title: "Nipun Jain",
  logo_name: "NipunJain",
  subTitle:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  resumeLink:
    "https://drive.google.com/file/d/1703Y7wra3D4M8pFblk-qli5cR__LTf-3/view?usp=sharing",
  portfolio_repository: "https://github.com/lucifernipun22",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/lucifernipun22",
  // linkedin: "https://www.linkedin.com/in/nipun-jain-1a223a166/",
  // gmail: "nipunj270@gmail.com",
  // gitlab: "https://gitlab.com/lucifernipun22",
  // facebook: "https://www.facebook.com/nipun.jain.7796420/",
  // twitter: "https://twitter.com/NipunJa45651753",
  // instagram: "https://www.instagram.com/nipun6430/"

  {
    name: "Github",
    link: "https://github.com/lucifernipun22",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/nipun-jain-1a223a166/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "https://www.youtube.com/channel/UCg4Q4efuAY7qoqUA9lI7_ig",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:nipunj270@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/NipunJa45651753",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  
];

const skills = {
  data: [
    {
      title: "Full Stack Android Development",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Building responsive Android Apps",
        "⚡ Developing mobile applications using Java and Kotlin",
        "⚡ Creating application backend in Spring Boot",
        "⚡ I learn Data Structure from the Scratch."
      ],
      softwareSkills: [
        {
          skillName: "Java",
        iconifyClass: "logos:java",
        
      },
      {
        skillName: "Kotlin",
      iconifyClass: "logos:kotlin",
      
    },
        {
          skillName: "HTML",
        iconifyClass: "logos:html-5",
        
      },
      {
        skillName: "Spring-Boot",
      iconifyClass: "logos:spring-icon",
      
    },
    {
      skillName: "Firebase",
    iconifyClass: "logos:firebase",
    
  },
  {
    skillName: "Rabbit-Mq",
  iconifyClass: "logos:rabbitmq-icon",
  
},
{
  skillName: "Intellij-idea",
iconifyClass: "logos:intellij-idea",

},
    {
  skillName: "VS Code",
iconifyClass: "vscode-icons:file-type-vscode",

},
{
  skillName: "MySQL",
iconifyClass: "simple-icons:mysql",

},
{
  skillName: "Python",
iconifyClass: "logos:python",

},
      ],
    },
    
    ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "cib:hackerrank",
      style: {
        color: "#2EC866",
        
        
        
      },
      
      profileLink: "https://www.hackerrank.com/lucifernipun22",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/nipun_22",
    },
    {
      siteName: "Codeforces",
      iconifyClassname: "simple-icons:codeforces",
      style: {
        color: "#1F8ACB",
      },
      profileLink: "https://codeforces.com/profile/nipunjain22",
    },
    {
      siteName: "Hackerearth",
      iconifyClassname: "simple-icons:hackerearth",
      style: {
        color: "#323754",
      },
      profileLink: "https://www.hackerearth.com/@lucifernipun22",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Masai School",
      subtitle: "Diploma Degree in Full Stack Android Development",
      logo_path: "iiitk_logo.png",
      alt_name: "Masai School",
      duration: "2020-present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like Data Structure, Algorithms, DBMS, OS etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Android Development.",
      ],
      website_link: "https://www.masai.school/",
      
    },
    {
      title: "M.D. Jain Inter College Agra",
      subtitle: "Secondary Education",
      logo_path: "iiitk_logo.png",
      alt_name: "M.D. Jain Inter College Agra",
      duration: "2019-2020",
      descriptions: [
        "⚡ I am from PCM background and complete my secondary education.",
        "⚡ Apart from this, I also have a interest in computers and coding during this I learned lots of things like basic of computer network and ethical hacking. ",
      ],
      
    },
  ],
};





// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Android Apps projects.",
  avatar_image_path: "projects_image.svg",
  
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated_ashutosh.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Data Structure & Algorithm, Android, Firebase and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://lucifernipun22.medium.com/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle:
      "Agra Uttar-Pradesh, 282007",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/@27.204287,77.9624324,15z",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 6395230924",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  projectsHeader,
  contactPageData,
};
