import PropTypes from "prop-types";
import Feature from "../Feature";


const PriceOption = ({option}) => {
    const {name,features,price}=option
    return (
        <div className=" p-4  flex-col bg-yellow-300  rounded-lg flex   ">
          <div className="text-4xl ml-8">  <h1>{name}</h1>
          <h1> price:{price}</h1></div>
<div className="flex-grow "> 
{
    features.map((feature,idx)=> <Feature key={idx} feature={feature}> </Feature>)
}
</div>
<div className="text-center bg-green-400 p-2 hover:bg-green-600">
    <button>buy now</button>
</div>
        </div>
    );
};

PriceOption.propTypes ={
    option:PropTypes.string
}
export default PriceOption;