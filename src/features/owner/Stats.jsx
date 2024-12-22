function Stats({ projects }) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.map((project) =>
    project.status === "OPEN"
  ).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => acc + curr.proposals.length,
    0
  );

    // console.log(projects.map((project) => project.status.includes("OPEN")));
    
  return (
    <div>
      <p>{numOfProjects}</p>
      <p>{numOfAcceptedProjects}</p>
      <p>{numOfProposals}</p>
    </div>
  );
}
export default Stats;
