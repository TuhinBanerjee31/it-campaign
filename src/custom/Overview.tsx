import overviewImg from "../assets/overview.jpeg"

const Overview = () => {
  return (
    <div className='min-h-screen flex items-center'>
      <img src={overviewImg} className="w-[28vw] rounded-bl-4xl rounded-tr-4xl" />
    </div>
  )
}

export default Overview
