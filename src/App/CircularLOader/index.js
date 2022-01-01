import "./index.css";
const circularLoader = () => {
  return (
    <>
      <div>loader</div>
      <div className="loader-main">
        <div className="loader" />
      </div>
    </>
  );
};

export default circularLoader;
