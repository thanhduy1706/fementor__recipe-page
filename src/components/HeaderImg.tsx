import img from "/images/image-omelette.jpeg";

const HeaderImg = () => {
  return (
    <div className="mb-8 sm:mb-10">
      <img src={img} alt="image omelette" className="rounded-none lg:rounded-xl" />
    </div>
  );
}

export default HeaderImg;
