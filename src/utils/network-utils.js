export function findObjectById(data, id){
    return data.find(object => object.id === id);
  };


export function findEventsByCity(data, city){
   return data.filter(cityData => cityData.city.toLowerCase() === city.toLowerCase());
};
  