import { useState, useEffect } from "react";
import RepositoryItem from "./RepoItem";
import "../styles/repositories.scss";
//import { MOCK } from "../mocks/repository";

// MOCK DATA in mocks Repo
// const repository = {
//   name: "unform",
//   description: "Form in React",
//   link: "https://github.com/unform/unform",
// };

const RepositoryList = () => {
  const [repositories, setRepositories] = useState([]);
  // como essa variável repositórios é uma lista do tipo vetor,
  // tem estado inicial um array vazio para state.
  // O estado inicial é semelhante ao que vai armazenar.

  useEffect(() => {
    fetch("https://api.github.com/users/CinPi7/repos").then((response) =>
      response.json().then((data) => setRepositories(data))
    );
  }, []);
  // ele precisa carregar só uma vez, por isso o array vazio.
  console.log(repositories);

  return (
    <section className="repository-list">
      <h1>Repository List</h1>
      <ul className="card">
        {repositories.map((repository, id) => (
          <RepositoryItem repository={repository} key={id} />
        ))}
      </ul>
    </section>
  );
};

/* <RepositoryItem repository={MOCK.repository} />
   <RepositoryItem repository={MOCK.repository} />
   <RepositoryItem repository={MOCK.repository} /> */

export default RepositoryList;
