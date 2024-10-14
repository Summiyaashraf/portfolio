import React from 'react';
import Heading from './Heading';
import Card from './Card';

const data = [
  {
    id: 0,
    title: "Static Interactive Resume",
    desc: "Crafted a sleek, interactive static resume using HTML and CSS, showcasing my skills and experience with clean design and responsive elements.",
    img: "/Project_01.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Interactive Elements", "Static Web Page", "Resume Builder"],
  },
  {
    id: 1,
    title: "Shareable Resume Builder",
    desc: "Developed a user-friendly shareable resume builder, enabling users to easily create and share professional resumes online.",
    img: "/Project_02.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Resume Builder", "Shareable", "User-Friendly", "Web Development"],
  },
  {
    id: 2,
    title: "Student ID Card",
    desc: "Designed a Student ID Card component using Next.js and Tailwind CSS, offering a modern and responsive layout.",
    img: "/Project_03.png",
    tags: ["Next.js", "Tailwind CSS", "React", "Dynamic Components", "Responsive Design", "Student ID", "Web Development"],
  },
  {
    id: 3,
    title: "Buttons",
    desc: "Created a responsive Navbar with interactive buttons for About, Footer, and Contact sections using Next.js for seamless navigation.",
    img: "/Project_04.png",
    tags: ["Next.js", "React", "Tailwind CSS", "Responsive Design", "Navigation", "Web Development", "User Interface"],
  },
  {
    id: 4,
    title: "My Resume",
    desc: "Developed a professional and visually appealing resume, highlighting skills and experience with clean design and structured layout.",
    img: "/Project_05.png",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design", "Web Development", "Professional Resume", "Portfolio"],
  },
  {
    id: 5,
    title: "My Image",
    desc: "Implemented an interactive hover effect on an image, dynamically displaying 'Summiya' using HTML, CSS, and JavaScript for a personalized touch.",
    img: "/Project_06.png",
    tags: ["HTML", "CSS", "JavaScript", "Hover Effect", "Image Manipulation", "Interactive Design", "Web Development"],
  },
  {
    id: 6,
    title: "Foam",
    desc: "Created a user-friendly form with essential input fields, ensuring smooth data entry and submission using HTML and CSS.",
    img: "/Project_07.png",
    tags: ["HTML", "CSS", "JavaScript", "Form Validation", "User Input", "Responsive Design", "Web Development"],
  },
];

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='text-black grid gap-20 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el) => (
          <Card 
            key={el.id}
            title={el.title}
            desc={el.desc}
            img={el.img}
            tags={el.tags}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
