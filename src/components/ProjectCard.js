export const ProjectCard = ({
  title,
  description,
  imgUrl,
  detailsDesc,
  techStack,
  firstPoint,
  secondPoint,
  thirdPoint,
  Link,
}) => {
  return (
    <div className="proj-section">
      <div className="proj-imgbx">
        <a href={Link} target="_blank" rel="noopener noreferrer">
          <div className="proj-img">
          <img src={imgUrl} />
          </div>

          <div className="proj-txtx">
            <h4 className="text-white">{title}</h4>
            <span className="text-white">{description}</span>
          </div>
        </a>
      </div>
      <div className="proj-details">
        <p>~ {detailsDesc}</p>
        <p>Tech Stack - {techStack}</p>
        <p>{firstPoint}</p>
        <p>{secondPoint}</p>
        <p>{thirdPoint}</p>
      </div>
    </div>
  );
};
