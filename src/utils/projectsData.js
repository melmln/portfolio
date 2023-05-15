import polaroid from '../assets/img/Projects/polaroid-project.png';
import elAlba from '../assets/img/Projects/hogar-el-alba-project.png';
import pinned from '../assets/img/Projects/pinned-project.png';

const projectsData = [
    {
        id: "01.",
        title: "Polaroid",
        img: polaroid,
        type: "E-commerce",
        description: "E-commerce website developed with React.js, Firebase and CSS. Cart function, item detail, and category filter."
    },

    {
        id: "02.",
        title: "Hogar El Alba",
        img: elAlba,
        type: "Website",
        description: "Responsive website developed with React.js, CSS. and some libraries. The site includes modals and burger menu functions."
    },

    {
        id: "03.",
        title: "Pinned",
        img: pinned,
        type: "Web App",
        description: "Responsive web app developed with JavaScript, CSS. and SweetAlert library. The app allows users to take notes, save them, and listen to music."
    }
]

export default projectsData;