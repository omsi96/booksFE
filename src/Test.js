const Test = () => {
  const handler = (e) => {
    console.log("I am button", e.target.name);
  };
  return (
    <div>
      <button name="button1" onClick={handler}>
        Button1
        <button name="button2" onClick={handler}>
          Button2
        </button>
        x
      </button>
    </div>
  );
};

export default Test;
