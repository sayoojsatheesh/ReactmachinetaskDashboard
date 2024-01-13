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
              width: "18px",
              height: "18px",
              display: "inline-block", // to ensure inline rendering
            }}
          ></span>
          <span style={{ fontWeight: "bold", fontSize: ".8rem" }}>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default PieChartCategories;