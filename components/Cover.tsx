const Cover = ({name}: {name: string}) => {
  return (
    <div className="cover">
      <h1>
        <span>{name}</span>
        <div></div>
      </h1>
    </div>
  );
};

export default Cover;
