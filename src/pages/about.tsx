export default function About() {
  const education = [
    {
      title: "Computer Programming & Analysis",
      school: "Seneca College",
      date: "2020 - Current",
      location: "Toronto, Canada",
    },
    {
      title: "Civil Engineering",
      school: "University of Shiraz",
      date: "2012 - 2016",
      location: "Shiraz, Iran",
    }
  ];

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "SQL",
    "Apollo",
    "Next.js",
    "Git",
    "HTML",
    "CSS",
    "SASS",
    "SCSS",
    "Styled Components","Tailwind CSS"
  ]

  return (
    <div className="wrapper md:mt-24">
      <main className="grid gap-16 xl:grid-cols-2 divide-y-2 xl:divide-y-0 xl:divide-x-2 divide-gray-700 divide-solid">
        <div className="text-center md:text-left">
          <h1 className="mb-12">About me</h1>
          <p className="text-2xl font-medium text-gray-700 mb-12 mx-auto md:ml-0 max-w-sm">
            My name is Saman Manesh, <br />
            I'm a full-stack developer focused on front-end based in Toronto.
          </p>
          <p className="text-lg font-medium text-gray-700 mb-12 mx-auto md:ml-0 max-w-sm">
            I enjoy using my obsessive attention to detail, my love for making
            things, and my mission-driven work ethic to literally change the
            world. That’s why I love working with diverse people who want to
            make the world a little better.
          </p>
        </div>
        <div className="md:pl-8">
          <h2 className="text-3xl font-medium mt-8">Education & Skills</h2>
          <div className="grid gap-y-2 gap-x-6 md:grid-cols-2 mt-6">
            <div>
            {education.map((item, index) => (
              <div key={index} className="mb-8 bg-gray-900 text-white p-4 rounded-md">
                <h3 className="text-lg font-medium mb-3">{item.title}</h3>
                <p className="font-medium text-gray-300 mb-2 leading-none">
                  {item.school}
                </p>
                <p className="font-medium text-gray-300 mb-2 leading-none">
                  {item.date}
                </p>
                <p className="font-medium text-gray-300 mb-2 leading-none">
                  {item.location}
                </p>
              </div>
            ))}
            </div>
            <div>
              <div className="flex flex-wrap gap-1">
              {skills.map((item, index) => (
                <div key={index} className="inline-block bg-gray-900 text-white px-2 py-1 rounded-md mb-2">
                  {item}
                </div>
              ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
