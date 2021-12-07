export default function Works() {
  const projects = [
    { title: "Samitone", description: "Design & Development", year: 2021, URL:"https://samanmanesh.github.io/samitone/" ,imgPath: "./Samitone1.png" },
    {
      title: "Saman's Website",
      description: "Design & Development",
      year: 2021,
      URL: "https://www.samanmanesh.com/",
      imgPath: "./Saman-site-resize.png"
    },
    { title: "Coinbot", description: "Design & Development", year: 2021, URL:"https://github.com/samanmanesh/coinbot" ,
    imgPath: "./coinbot2-resize.jpg" },
  ];

  return (
    <div className="wrapper md:mt-24">
      <main className="grid gap-16">
        <div className="text-center md:text-left">
          <h1 className="mb-12">My Work</h1>
        </div>
        <div className="grid gap-12 lg:gap-24 md:grid-cols-3  ">
          {projects.map((project, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900 rounded-md overflow-hidden h-48 mb-4 relative transition ">
                {/* add placeholder image from unsplash */}
                <a href={project.URL} target="_blank">
                <img src={project.imgPath} alt="project" className="w-full h-full object-cover " />

                <div className="absolute inset-0 bg-red-400 bg-opacity-0 opacity-0 transition grid place-items-center select-none group-hover:bg-opacity-70 group-hover:opacity-100 text-white text-lg font-semibold">Learn more</div>
                </a>
              </div>
              <h2 className="text-2xl font-bold">{project.title}</h2>
              <div className="flex justify-between text-lg ">
                <p>{project.description}</p>
                <span>{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
