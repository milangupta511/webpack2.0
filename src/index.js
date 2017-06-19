import './styles.scss';
class Car {
    manufacture(car){
        console.log(`A ${car} is created`);
    }
}
let car = new Car;
car.manufacture('benz');