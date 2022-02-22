// Este será o Item
import "./../styles/repositories.scss";

const RepositoryItem = (props) => {
  return (
    <div className="container">
      <li>
        <strong>{props.repository.name}</strong>
        <p className="language">Language: {props.repository.language}</p>
        <img
          src="https://avatars.githubusercontent.com/u/49377882?v=4"
          alt="me"
          className="avatar-me"
        />
        <div>
          <a href={props.repository.html_url}>
            Acessar repositório
            <span className="folder-name"> {props.repository.full_name}</span>
          </a>
        </div>
      </li>
    </div>
  );
};

export default RepositoryItem;
