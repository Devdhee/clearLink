import star from "../assets/Star.svg";

function Rating() {
  return (
    <div className="flex gap-1 mb-1">
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
      <img src={star} alt="star" />
    </div>
  );
}

export default Rating;
