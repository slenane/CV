// CV translations
const language = {
  english: {
    bio: "Self-taught frontend developer from Ireland based in Milan, Italy.",
    "link-header": "Get in touch",
    creator: "Creator of",
    "language-switcher": "Switch language",
    headers: [
      "Technical Experience",
      "Projects",
      "Languages",
      "Education",
      "Interests",
    ],
    experience: [
      {
        position: "Frontend Lead Developer",
        "employment-dates": "Nov 2023 - Present",
        "employment-description":
          "Lead a team of 3 frontend developers in project execution and delivery. Design and implement new UI features to modernize the application. Play a key role in task planning and prioritization. Provide training to new employees and offer feedback on technical assessments.",
      },
      {
        position: "Frontend Developer",
        "employment-dates": "Jun 2022 - Nov 2023",
        "employment-description":
          "Responsible for developing and testing new features on bmetric's Angular application. Developed reporting dashboards to enhance user engagement. Stabilized application performance through essential updates, bug fixes, and the addition of over 1,000 unit tests. Improved user-friendliness by updating editors/interfaces. Conducted code reviews and managed application versions using version control.",
      },
      {
        position: "Web Developer",
        "employment-dates": "Jan 2022 - May 2022",
        "employment-description":
          "Handled support, maintenance, and updates for various GoContact websites, alongside SEO optimization. Collaborated closely with the design team to ensure sites met functional requirements with engaging UX. Conducted competitor website analysis to implement new features. Developed multi-language sites with WordPress and PHP, utilizing custom JavaScript for improved UX and functionality.",
      },
      {
        position: "roadmapr",
        "employment-description":
          "Developed roadmapr, a free-to-use platform for self-taught developers to organize and track progress, while receiving recommendations from professional developers. Built with Angular and Node.js, the platform aimed to guide self-taught developers to employment based on their chosen stack and location.",
      },
      {
        position: "Daily Chess Puzzle",
        "employment-description":
          "Created Daily Chess Puzzle, a chrome extension allowing users to solve chess.com's Daily Puzzle with unlimited access to the puzzle archives, for free! The extension, a final project for Harvard University's Introduction to Computer Science (CS50) course, currently boasts over 600 weekly users. Built mainly with JavaScript, it enables users to access chess.com's puzzles directly from their browser. Utilized chess.com's API to access daily chess archives, allowing users unlimited puzzle access.",
      },
    ],
    languages: [
      ["English", "Native"],
      ["Spanish", "B1"],
      ["Italian", "A1"],
    ],
    education: [
      {
        dates: "Jul 2022 - Sep 2022",
        "course-focus": `
          <li>Angular Component and Service Testing</li>
          <li>Continuous Integration with Travis CI</li>
          <li>Angular E2E Testing with Cypress</li>
        `,
      },
      {
        dates: "Mar 2022 - Apr 2022",
        "course-focus": `
          <li>Create a Content Management System</li>
          <li>Security in PHP</li>
          <li>Object-Oriented Programming</li>
        `,
      },
      {
        dates: "Jan 2022 - Mar 2022",
        "course-focus": `
          <li>Digital Marketing Technologies and Practice</li>
          <li>Creative Methods for Social Media Marketing</li>
          <li>Social Media Marketing Management</li>
          <li>European and International Digital Media</li>
        `,
      },
      {
        dates: "Jun 2021 - Oct 2021",
        "course-focus": `
          <li>Build fast and scalable server-side web applications with Node.js</li>
          <li>REST APIs and GraphQL APIs</li>
          <li>Using databases like MongoDB and SQL</li>
        `,
      },
      {
        dates: "Feb 2021 - Jun 2021",
        "course-focus": `
          <li>C, Python and JavaScript languages</li>
          <li>Topics included abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development</li>
          <li>How to think algorithmically and solve problems efficiently</li>
        `,
      },
      {
        dates: "Jun 2020 - Sep 2020",
        "course-focus": `
          <li>Fundamentals of modern JavaScript</li>
          <li>Object-Oriented programming</li>
          <li>Asynchronous JavaScript</li>
        `,
      },
      {
        dates: "Jul 2020 - Aug 2020",
        "course-focus": `
          <li>Fundamentals of JavaScript including variables, arrays, objects, loops, and functions</li>
          <li>Create algorithms to manipulate strings, factorialize numbers, and calculate the orbit of the International Space Station</li>
          <li>Object-Oriented and Functional Programming</li>
        `,
      },
      {
        dates: "Jun 2020 - Jul 2020",
        "course-focus": `
          <li>Build 30 JavaScript projects in 30 days</li>
          <li>DOM manipulation</li>
          <li>Event capture, propagation, bubbling, and once</li>
        `,
      },
      {
        dates: "Feb 2020 - Jun 2020",
        "course-focus": `
          <li>HTML5, CSS3, JavaScript, Node.js, Express, and MongoDB</li>
          <li>AJAX and APIs</li>
          <li>HTTPS and Security</li>
        `,
      },
      {
        dates: "Dec 2019 - Jan 2020",
        "course-focus": `
          <li>Build webpages with HTML and CSS</li>
          <li>Flexbox and CSS Grid</li>
        `,
      },
    ],
    degree: "Bachelor of Science",
    course: " - Biochemistry - 2.1 Honours (3.5 GPA)",
    "textbooks-read": "Textbooks Read",
    languages: [
      ["Running", "I am currently training for my 3rd marathon."],
      ["Chess", "Rated in top 1.8% of players on chess.com."],
      ["Travel", "Visited over 30 countries and have lived in 6."],
    ],
  },
};

// Language switcher buttons
const englishBtn = document.querySelector(".lang-eng");
const italianBtn = document.querySelector(".lang-ita");

// Content to be updated on language change
const bio = document.querySelector(".bio");
const creator = document.querySelector(".creator");
const linkHeader = document.querySelector(".link-header");
const languageSwitch = document.querySelector(".switch-language");
const textbooksRead = document.querySelector(".textbooks-read");
const degree = document.querySelector(".degree");
const degreeCourse = document.querySelector(".degree-course");
const headers = document.querySelectorAll(".header");
const positions = document.querySelectorAll(".position-title");
const employmentDates = document.querySelectorAll(".employment-dates");
const employmentDescriptions = document.querySelectorAll(
  ".employment-description"
);
const languageName = document.querySelectorAll(".language-name");
const languageLevel = document.querySelectorAll(".language-level");
const courseDates = document.querySelectorAll(".course-dates");
const courseDescription = document.querySelectorAll(".course-description");
const interests = document.querySelectorAll(".interest-name");
const interestText = document.querySelectorAll(".interest-description");

const updateLanguage = (lang) => {
  // Get the current language
  const current = lang === "english" ? language.english : language.italian;
  // Update the content
  bio.textContent = current.bio;
  creator.textContent = current.creator;
  linkHeader.textContent = current["link-header"];
  languageSwitch.textContent = current["language-switcher"];
  textbooksRead.textContent = current["textbooks-read"];
  degree.textContent = current.degree;
  degreeCourse.textContent = current.course;
  for (let i = 0; i < headers.length; i++)
    headers[i].textContent = current.headers[i];
  for (let i = 0; i < courseDates.length; i++)
    courseDates[i].textContent = current.education[i].dates;
  for (let i = 0; i < courseDescription.length; i++)
    courseDescription[i].innerHTML = current.education[i]["course-focus"];
  for (let i = 0; i < positions.length; i++) {
    positions[i].textContent = current.experience[i].position;
    employmentDates[i].textContent = current.experience[i]["employment-dates"];
    employmentDescriptions[i].innerHTML =
      current.experience[i]["employment-description"];
  }
  for (let i = 0; i < languageName.length; i++) {
    languageName[i].textContent = current.languages[i][0];
    languageLevel[i].textContent = current.languages[i][1];
  }
  for (let i = 0; i < interests.length; i++) {
    interests[i].textContent = current.interests[i][0];
    interestText[i].textContent = current.interests[i][1];
  }
};

// Event listeners
englishBtn.addEventListener("click", (e) => {
  e.preventDefault();
  updateLanguage("english");
});
italianBtn.addEventListener("click", (e) => {
  e.preventDefault();
  updateLanguage("italian");
});
window.addEventListener("load", () => {
  if (window.location.href === "https://slenane.github.io/cv/?lang=IT")
    updateLanguage("italian");
});

const tooltip = document.getElementById("tooltip");
const tooltipElements = document.querySelectorAll("[data-tooltip]");

tooltipElements.forEach(function (element) {
  element.addEventListener("mouseover", function (event) {
    const tooltipText = element.getAttribute("data-tooltip");

    tooltip.textContent = tooltipText;
    tooltip.style.display = "block";
    tooltip.style.top = event.clientY - 40 + "px";
    tooltip.style.left = event.clientX - 20 + "px";
  });

  element.addEventListener("mouseout", function () {
    tooltip.style.display = "none";
  });
});
