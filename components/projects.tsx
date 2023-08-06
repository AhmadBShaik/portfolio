export const Projects = ({ projectsRef }: { projectsRef: React.MutableRefObject<HTMLElement | null> }) => {
  const projects = [
    {
      title: "Happy Travel",
      description:
        "Travel Website which have which let's users to discover travel locations, view latest photographs to know the current scenary.This website will also provides latest news about travel locations.",
      sourceCode: "https://github.com/AhmadBShaik/happy-travel",
      viewLive: "https://ahmadbshaik.github.io/happy-travel/",
    },
    {
      title: "Ethereum unit converter",
      description:
        "The converter which is used to convert ethereum units. Converter which contains simple and extended sections.",
      sourceCode: "https://github.com/AhmadBShaik/EthereumUnitConverter",
      viewLive: "https://ahmadbshaik.github.io/ethereum-unit-converter/",
    },
    {
      title: "QR-Code Generator",
      description:
        "The QR-Code Generator generates multiple Quick Response(QR) Codes and allows user to download all QR Codes as PNG.",
      sourceCode: "https://github.com/AhmadBShaik/qr-code-generator",
      viewLive: "https://ahmadbshaik.github.io/qr-code-generator/",
    },
    {
      title: "Task Manager with Blockchain",
      description:
        "Stores user specific tasks in local node. Every actions is stored as transaction in Ganache.",
      sourceCode: "https://github.com/AhmadBShaik/todo-app-using-blockchain",
    },
  ];
  return <section
    className="w-full max-w-7xl mx-auto p-5 min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-80px)]"
    ref={projectsRef}
    id="projects">
    <div className="my-5 text-xl font-bold">
      Personal Projects
    </div>
    <ul className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 cursor-default">
      {projects.map((project) => (
        <div
          className="border p-5 rounded shadow-md flex flex-col"
          key={project.title}>
          <p className="text-lg font-medium">{project.title}</p>
          <p className="flex-1 mt-2.5">{project.description}</p>
          <div className="flex justify-between mt-2.5">
            <div
              className="text-green-800 bg-white px-2 py-1 rounded cursor-pointer border border-green-800"
              onClick={() => {
                window.open(project.sourceCode, "_blank");
              }}>
              Source Code
            </div>
            {project.viewLive ? (
              <div
                className="bg-green-800 text-white px-2 py-1 rounded cursor-pointer"
                onClick={() => {
                  window.open(project.viewLive, "_blank");
                }}>
                View Live
              </div>
            ) : null}
          </div>
        </div>
      ))}
    </ul>
  </section>
}