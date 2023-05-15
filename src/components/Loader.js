const Loader = ({ loading }) => {
  return (
    <div className={`loader ${loading && "loading"}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
