import {BiLogoGmail,BiLogoTelegram, BiLogoDiscordAlt} from "react-icons/bi"
import { TbBrandUpwork, TbBrandFiverr } from 'react-icons/tb'
export const NavLinks =[
    {text:"About me",href:"/aboutme",id:"aboutme"},
    {text:"Projects",href:"/project",id:"project"},
    {text:"Contacts",href:"/contact",id:"contact"},
]
export const HiringSites = [
    {name:"Fiverr",href:" https://www.fiverr.com/dev_saqib_",id:"fiverr", icon:<TbBrandFiverr/>},
    {name:"Upwork",href:" https://www.upwork.com/freelancers/~01b212fe3767c5294b",id:"upwork", icon:<TbBrandUpwork/>},
]
export const ContactsList=[
    {name:"Gmail",href:"mailto:dev.saqibhussain@gmail.com",id:"gmail",icon:<BiLogoGmail/>},
    {name:"Discord",href:"https://discord.com/users/1123024661630955661",id:"discord",icon:<BiLogoDiscordAlt/>},
    {name:"Telegram",href:"https://t.me/devsaqib",id:"telegram",icon:<BiLogoTelegram/>},
    
]

// export const ProjectDetails = [
//     {img:"/youtubeClone.jpg",name:"Youtube Clone",code:"https://github.com/devsaqibhussain/youtubeClone",live:"https://devsaqibhussain.github.io/youtubeClone/"},
//     {img:"/amazonClone.jpg",name:"Amazon Clone",code:"https://github.com/devsaqibhussain/amazon",live:"https://devsaqibhussain.github.io/amazon/"},
//     {img:"/hooBank.jpg",name:"Landing Page",code:"https://github.com/devsaqibhussain/hooBankProject",live:"https://devsaqibhussain.github.io/hooBankProject/"},
// ]
// export const Certifications = [
//     {img:"/RWD.jpg",link:"https://www.freecodecamp.org/certification/fcc7314419a-f426-466c-8a34-25969ef36192/responsive-web-design"},
//     {img:"/DSA.jpg",link:"https://www.freecodecamp.org/certification/fcc7314419a-f426-466c-8a34-25969ef36192/javascript-algorithms-and-data-structures"},
//     {img:"/FED.jpg",link:"https://www.freecodecamp.org/certification/fcc7314419a-f426-466c-8a34-25969ef36192/front-end-development-libraries"},
// ]