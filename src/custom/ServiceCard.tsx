import { Link } from "react-router-dom";

type incomingData = {
  data: {
    redirect: string,
    image: string,
    id: string,
    title: string
  }
}

const ServiceCard = (props: incomingData) => {
  return (
    <Link to={props.data.redirect} className="w-65 md:w-84 transition-all duration-300 hover:scale-105">
      <img src={props.data.image} className="w-full rounded-bl-3xl rounded-tr-3xl" />
      <p className="text-right text-base md:text-lg px-1">{props.data.id}. {props.data.title}</p>
    </Link>
  );
};

export default ServiceCard;
