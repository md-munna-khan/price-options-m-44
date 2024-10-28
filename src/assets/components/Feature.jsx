
import PropTypes from "prop-types";
import { FaCircleArrowRight } from "react-icons/fa6";
const Feature = ({feature}) => {
    return (
        <div className=" ml-6 p-2 gap-4">
      <div className="flex items-center space-x-2">   <FaCircleArrowRight className=" space-x-4"></FaCircleArrowRight>  {feature}</div>
         
        </div>
        
    );
};
Feature.propTypes={
    feature:PropTypes.string
}
export default Feature;