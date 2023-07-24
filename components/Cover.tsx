import Animation from "./Animation";

const Cover = ({name}: {name: string}) => {
  return (
    <div className="cover">
        <Animation>
      <h1>
      
        <span>{name}</span>
        <div></div>
  
      </h1>
      </Animation>
    </div>
  );
};

export default Cover;
