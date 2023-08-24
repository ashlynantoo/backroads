const Title = ({ titlePart1, titlePart2 }) => {
  return (
    <div className="section-title">
      <h2>
        {titlePart1} <span>{titlePart2}</span>
      </h2>
    </div>
  );
};
export default Title;
