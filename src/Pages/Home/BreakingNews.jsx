import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const BreakingNews = () => {
    return (
        <div className="flex mb-8 bg-[#F3F3F3]">
            <button className="px-6 py-2 bg-[#D72050] text-[#FFF] font-medium text-xl">Latest</button>
            <Marquee speed={90} autoFill={true}>
  <div className="text-black">
  <Link to="/">I can be a React component, multiple React components, or just some text.</Link>
  <Link className="mr-8" to="/">I can be a React component, multiple React components, or just some text.</Link>
  <Link className="mr-8" to="/">I can be a React component, multiple React components, or just some text.</Link>
  </div>
</Marquee>
        </div>
    );
};

export default BreakingNews;