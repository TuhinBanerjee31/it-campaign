import { Link } from "react-router-dom";

type incomingData = {
  image: string;
}

const NewsCard = (props: incomingData) => {
  return (
    <div className="group max-w-md min-h-80 rounded-lg font-sora bg-cover bg-center bg-no-repeat cursor-pointer" style={{backgroundImage: `url(${props.image})`}}>
        <Link to={"/"} className="opacity-0 group-hover:opacity-100 flex flex-col justify-end transition-opacity duration-300 bg-[#0000005e] max-w-md min-h-80 rounded-lg p-5">
            <h3 className="text-lg text-primary-50 font-medium">Vision of web3</h3>
            <p className="text-xs tracking-wider text-primary-50">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque esse possimus aperiam error consequuntur assumenda excepturi expedita reiciendis distinctio aliquid veniam qui fugit, nobis architecto perspiciatis iure saepe ad earum.</p>
        </Link>
    </div>
  );
};

export default NewsCard;
