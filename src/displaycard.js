export default function DisplayCard({ displayObj }) {
  const content = Object.keys(displayObj).map((key) => {
    return (
      <div className="listItem">
        {key}:{displayObj[key]}
      </div>
    );
  });

  return <div className="displayCardContainer">{content}</div>;
}
