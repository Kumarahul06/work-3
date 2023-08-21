class restaurantManager{
    //part-1 
    restaurantList = [
        {
          id: 1,
          restaurantname: "KFC",
          address: "Anand Vihar",
          city: "Delhi",
        },
        {
          id: 2,
          restaurantname: "Dominos",
          address: "Savita Vihar",
          city: "Delhi",
        },
        {
          id: 3,
          restaurantname: "Burger King",
          address: "Civil Lines",
          city: "Pune",
        },
        {
          id: 4,
          restaurantname: "Subway",
          address: "Cantonment",
          city: "Mumbai",
        },
      ];



  printAllRestaurantNames = () => {
    return this.restaurantList.map((data) => {
      return data.restaurantname;
    });
  };

  filterRestaurantByCity = (cityName) => {
    return this.restaurantList.filter((data) => {
      return data.city == cityName;
    });
  };



}
  let restObj = new restaurantManager();

  console.log(restObj);
console.log(restObj.printAllRestaurantNames());
console.log(restObj.filterRestaurantByCity("Mumbai"));
console.log(restObj.filterRestaurantByCity("Delhi"));


var orderData = {
    "Below 500": 20,
    "500-1000": 29,
    "1000-1500": 30,
    "1500-2000": 44,
    "Above 2000": 76,
  };


  let out = 0;

for (key in orderData) {
  out += orderData[key];
}
console.log(out);
console.log(out/5);


function getPercent(orderData) {

    let total = 0;
  
    for (key in orderData) {
      total += orderData[key];
    }
    console.log(total);
    let output = [];
    let count = 0;
    for (key in orderData) {
      let percentValue = ((orderData[key] / total) * 100).toFixed(2);
      count = count + 1;
      let myObj = {};
    
      myObj.id = count;
      myObj.order = key;
      myObj.order_Percent = `${percentValue}`;
      myObj.restaurant = "Punjabi Tadka";
      output.push(myObj);
    }
    return output;
  }
  console.log(getPercent(orderData));

   
  [{id: 1, order: 'Below 500', order_Percent: '10.05', restaurant: 'Punjabi Tadka'},
  {id: 2, order: '500-1000', order_Percent: '14.57', restaurant: 'Punjabi Tadka'}, 
  {id: 3, order: '1000-1500', order_Percent: '15.08', restaurant: 'Punjabi Tadka'}, 
  {id: 4, order: '1500-2000', order_Percent: '22.11', restaurant: 'Punjabi Tadka'}, 
  {id: 5, order: 'Above 2000', order_Percent: '38.19', restaurant: 'Punjabi Tadka'}]