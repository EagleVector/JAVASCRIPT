function analyzeCarMileage(cars) {
  let averageMileage;
  let highestMileageCar;
  let lowestMileageCar;
  let totalMileage;


  if (cars.length <= 100 && cars.every((car) => car.mileage > 0)) {
    averageMileage = cars.reduce((acc, car) => (acc + car.mileage), 0) / cars.length;
    averageMileage = Number(averageMileage).toFixed(2);

    highestMileageCar = cars.reduce((max, car) => (car.mileage > max.mileage ? car : max), cars[0]);
    lowestMileageCar = cars.reduce((min, car) => (car.mileage < min.mileage ? car : min), cars[0]);
    totalMileage = cars.reduce((acc, car) => acc + car.mileage, 0);
    totalMileage = Number(totalMileage).toFixed(2);
  }
  Output = { 
    averageMileage: Number(averageMileage),
    highestMileageCar: highestMileageCar,
    lowestMileageCar: lowestMileageCar,
    totalMileage: Number(totalMileage)
  };
  return Output;
}

module.exports = analyzeCarMileage;
