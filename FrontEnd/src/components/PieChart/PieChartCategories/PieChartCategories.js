const PieChartCategories = ({ lables }) => {
  let colors = ["#67c587", "#88d1a1", "#a9deba", "#c9ead4", "#eaf6ed"];

  return (
    <div>
      {lables?.map((item, index) => (
        <div
          key={index}
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginTop: "4px",
            paddingLeft: "1rem",
          }}
        >
          <span
            style={{
              borderRadius: "50%",
              backgroundColor: `${colors[index]}`,
              width: "16px",
              height: "16px",
              display: "inline-block", 
            }}
          ></span>
          <span style={{ fontWeight: "bold", fontSize: ".7rem" }}>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default PieChartCategories;
