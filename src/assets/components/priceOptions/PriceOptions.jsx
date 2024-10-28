import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
  const priceOptions = [
    {
      "id": 1,
      "name": "Powerhouse Gym",
      "features": [
        "24/7 Access", 
        "Personal Training", 
        "Free Weights", 
        "Cardio Machines", 
        "Sauna", 
        "Steam Room", 
        "Indoor Track", 
        "Powerlifting Equipment", 
        "Child Care", 
        "Massage Therapy"
      ],
      "price": 50
    },
    {
      "id": 2,
      "name": "Fit & Flex",
      "features": [
        "Group Classes", 
        "Swimming Pool", 
        "Yoga Studio", 
        "Nutrition Counseling", 
        "Locker Rooms", 
        "Pilates Studio", 
        "Spinning Classes", 
        "Boxing Ring", 
        "Parking Facility", 
        "Virtual Training Sessions"
      ],
      "price": 70
    },
    {
      "id": 3,
      "name": "Urban Strength",
      "features": [
        "CrossFit", 
        "Functional Training", 
        "Outdoor Area", 
        "Strength Equipment", 
        "Juice Bar", 
        "Climbing Wall", 
        "TRX Suspension Training", 
        "Olympic Lifting Area", 
        "Recovery Lounge", 
        "Wi-Fi Access"
      ],
      "price": 65
    }
  ]
  
      

    return (
        <div>
            <h1 className="text-center font-bold text-4xl" >Best price Options</h1>
       <div className=" grid  md:grid-cols-3 gap-6  ">
       {
priceOptions.map(option=> <PriceOption key={option.id} option={option}></PriceOption>)

            }
           
       </div>
        </div>
    );
};

export default PriceOptions;