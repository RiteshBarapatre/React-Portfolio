import img1 from "./images/project1.jpg"
import img2 from "./images/project2.jpg"
import img3 from "./images/project3.jpg"
import img4 from "./images/project4.jpg"
import img5 from "./images/project5.jpg"
import img6 from "./images/project6.jpg"
import img7 from "./images/project7.jpg"

const logotext = "RITESH";
const meta = {
    title: "Ritesh Barapatre",
    description: "I’m Ritesh Barapatre Full stack devloper,currently working in India",
};

const dataportfolio = [
    {
        img : img1,
        link : "https://crypto-hunter-ebfc1.web.app/",
        description : "This is the app used to track the crypto currency"
    },
    {
        img : img2,
        link : "https://fir-32f4c.web.app/",
        description : "Amazon Clone"
    },
    {
        img : img3,
        link : "https://show-mania.netlify.app",
        description : "Movie app including ticket booking"
    },
    {
        img : img4,
        link : "https://yt-jobs-clone.netlify.app",
        description : "Job searching site for youtube content creators"
    },
    {
        img : img5,
        link : "https://task-manager-by-ritesh.netlify.app",
        description : "Task Manager"
    },
    {
        img : img6,
        link : "https://panoram-cgi.netlify.app/",
        description : "Collabarated project of previous internship"
    },
    {
        img : img7,
        link : "https://esg-bites.netlify.app/",
        description : "Collabarated project of previous internship"
    },
]

const introdata = {
    title: "I’m Ritesh Barapatre",
    animated: {
        first: "I love coding",
        second: "I code cool websites",
        third: "I develop future",
    },
    description: "A MERN stack developer with 6 months of industry experience and lots of skills !",
    your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
    title: "A bit about my self",
    aboutme: "I bring a fresh perspective coupled with a strong foundation in the MERN stack. Despite my relatively short tenure, I've demonstrated a deep passion for web development and a commitment to continuous learning. I have hands-on experience building responsive web applications using MongoDB, Express.js, React, and Node.js, along with proficiency in HTML5, CSS3, and JavaScript (ES6+). ",
};
const worktimeline = [{
        jobtitle: "React Developer",
        where: "Banao Technologies",
        date: "2023-2024",
    }
];

const skills = [{
        name: "Python",
        value: 50,
    },
    {
        name: "Javascript",
        value: 90,
    },
    {
        name: "React",
        value: 85,
    },
    {
        name: "Node JS",
        value: 80,
    },
    {
        name: "Express JS",
        value: 70,
    },
    {
        name: "Mongo DB",
        value: 75,
    },
];

const services = [{
        title: "Frontend Dev",
        description: "I bring a good knowledge of HTML and CSS on the table with lots of react framework.",
    },
    {
        title: "Backend Dev",
        description: "Creating seamless API using Node.js and Express.js",
    },
    {
        title: "Deploying",
        description: "Deploying the site live both static and dynamic using various tools.",
    },
];

const contactConfig = {
    YOUR_EMAIL: "riteshbarapatre543@gmail.com",
    YOUR_FONE: "(+91)86058-46914",
    description: "Contact me for any kind of work in MERN stack. Feel free to hire 🙂",
    // creat an emailjs.com account 
    // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
    YOUR_SERVICE_ID: "service_htek4we",
    YOUR_TEMPLATE_ID: "template_oqf5inq",
    YOUR_USER_ID: "HZtAKIgsJttWzeUZC",
};

const socialprofils = {
    github: "https://github.com/RiteshBarapatre",
    linkedin: "https://www.linkedin.com/in/ritesh-barapatre-1a373b232/",
    twitter: "https://x.com/RiteshR12669",
};
export {
    meta,
    dataabout,
    dataportfolio,
    worktimeline,
    skills,
    services,
    introdata,
    contactConfig,
    socialprofils,
    logotext,
};