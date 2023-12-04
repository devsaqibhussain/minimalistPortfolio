export const BaseURL = "https://devsaqib.vercel.app";
import {
  BiLogoGmail,
  BiPhoneCall,
  BiLogoTelegram,
  BiLogoDiscordAlt,
  BiLogoReact,
  BiLogoTailwindCss,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoJavascript,
  BiCopy,
} from "react-icons/bi";
import {
  TbBrandUpwork,
  TbBrandFiverr,
  TbBrandNextjs,
  TbBrandWhatsapp,
} from "react-icons/tb";

export const NavLinks = [
  { text: "About me", href: "/aboutme", id: "aboutme" },
  { text: "Projects", href: "/project", id: "project" },
  { text: "Contacts", href: "/contact", id: "contact" },
];
export const HiringSites = [
  {
    name: "Fiverr",
    href: " https://www.fiverr.com/dev_saqib_",
    id: "fiverr",
    icon: <TbBrandFiverr />,
  },
  {
    name: "Upwork",
    href: " https://www.upwork.com/freelancers/~01b212fe3767c5294b",
    id: "upwork",
    icon: <TbBrandUpwork />,
  },
];
export const ContactsList = [
  {
    name: "Gmail",
    href: "mailto:dev.saqibhussain@gmail.com",
    id: "gmail",
    icon: <BiLogoGmail />,
  },
  {
    name: "Discord",
    href: "https://discord.com/users/1123024661630955661",
    id: "discord",
    icon: <BiLogoDiscordAlt />,
  },
  {
    name: "Telegram",
    href: "https://t.me/devsaqib",
    id: "telegram",
    icon: <BiLogoTelegram />,
  },
];
export const phoneNumber = {
  name: "Whatsapp",
  href: "https://wa.me/message/7O7KT6FWVVOHO1",
  number: "+92 3091879755",
  id: "phone",
  icon: <TbBrandWhatsapp />,
  qr: "/whatsappQR.jpg",
};

export const Certifications = [
  {
    name: "Responsive Web Design",
    link: "https://www.freecodecamp.org/certification/fcc7314419a-f426-466c-8a34-25969ef36192/responsive-web-design",
  },
  {
    name: "Data Structure and Algorithms",
    link: "https://www.freecodecamp.org/certification/fcc7314419a-f426-466c-8a34-25969ef36192/javascript-algorithms-and-data-structures",
  },
  {
    name: "Frontend Developement Libraries",
    link: "https://www.freecodecamp.org/certification/fcc7314419a-f426-466c-8a34-25969ef36192/front-end-development-libraries",
  },
];

export const myStack = [
  { name: "Nextjs", icon: <TbBrandNextjs /> },
  { name: "React", icon: <BiLogoReact /> },
  { name: "TailwindCSS", icon: <BiLogoTailwindCss /> },
  { name: "HTML5", icon: <BiLogoHtml5 /> },
  { name: "CSS3", icon: <BiLogoCss3 /> },
  { name: "JavaScript", icon: <BiLogoJavascript /> },
];

export const FrontendProjectDetails = [
  {
    img: "/youtubeClone.jpg",
    desc: "A video Streaming platform inpired by Youtube, uses RapidAPI to search for Youtube videos and stream them with React-Player.",
    title: "Youtube Clone",
    code: "https://github.com/devsaqibhussain/youtubeClone",
    live: "https://devsaqibhussain.github.io/youtubeClone/",
    labels: ["React", "TailwindCSS", "RapidAPI", "React-Player"],
  },
  {
    img: "/amazonClone.jpg",
    title: "Amazon Clone",
    desc: 'An Ecommerce website inpired by Amazon, uses Redux for state managment, has built in "Add to Card" feature and product search.',
    code: "https://github.com/devsaqibhussain/amazon",
    live: "https://devsaqibhussain.github.io/amazon/",
    labels: ["React", "TailwindCSS", "Redux"],
  },
  {
    img: "/hooBank.jpg",
    title: "Landing Page",
    desc: "A landing page that is perfect replica of given figma design.",
    code: "https://github.com/devsaqibhussain/hooBankProject",
    live: "https://devsaqibhussain.github.io/hooBankProject/",
    labels: ["React", "TailwindCSS", "Figma"],
  },
  {
    img: "/portfolioOne.jpg",
    title: "Portfolio 1.0",
    desc: "My first portfolio that I created using react.",
    code: "https://github.com/devsaqibhussain/portfolio",
    live: "https://devsaqibhussain.github.io/portfolio/",
    labels: ["React", "TailwindCSS", "Framer Motion"],
  },
  {
    img: "/portfolioTwo.jpg",
    title: "Portfolio 2.0",
    desc: "My second portfolio that I made using Next JS",
    code: "https://github.com/devsaqibhussain/my-portfolio",
    live: "https://portfolio-2-jade-pi.vercel.app/",
    labels: ["React", "Next JS", "TailwindCSS", "Framer Motion"],
  },
];
export const BackendProjectDetails = [
  {
    img: "/samazon.png",
    desc: "An Ecommerce platform with authentication, anonymous shopping cart, user shopping cart.",
    title: "Samazon",
    code: "https://github.com/devsaqibhussain/samazon",
    live: "https://samazon-devsaqib.vercel.app/",
    labels: [
      "TypeScript",
      "Nextjs",
      "TailwindCSS",
      "Prismadb",
      "Next-Auth",
      "DaisyUI",
    ],
  },
  {
    img: "/sai.png",
    desc: "An AI SAAS platform with authentication, stripe payment system. Works using OPENAI API and has costumer service support.",
    title: "S-AI",
    code: "https://github.com/devsaqibhussain/s-ai",
    live: "https://s-ai.vercel.app",
    labels: [
      "TypeScript",
      "Nextjs",
      "TailwindCSS",
      "Stripe",
      "Prismadb",
      "Clerk",
      "Crisp",
    ],
  },
  {
    img: "/bookstore.png",
    desc: "A simple project where you can add books and view books added by other users. Uses REST API made by me to perform CRUD operations with database.",
    title: "Book Database",
    code: "https://github.com/stars/devsaqibhussain/lists/bookstore",
    live: "https://devsaqib-bookstore.vercel.app/",
    labels: ["MangoDB", "Nodejs", "React", "Vite", "ShadcnUI", "TailwindCSS"],
  },
];
