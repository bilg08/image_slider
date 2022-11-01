export const Slide = ({ image, isSameKey }) => {
    return (
        <div style={{ display: isSameKey ? 'block':'none', position: "absolute", width: `100%`, height: `100vh` }}>
      <img style={{ width: `100%`, height: `100%` }} src={image} />
    </div>
  );
};
