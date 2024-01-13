const ImageContainer = ({ images }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        height:'40px'
      }}
    >
      {images.map((item, index) => (
        <img
          key={index}
          src={item}
          alt={`Social Media Image ${index + 1}`}
          style={{
            maxWidth: "25px", 
            height: "25px", 
            
          }}
        />
      ))}
    </div>
  );
};

export default ImageContainer;
