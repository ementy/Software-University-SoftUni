function EvenNumbers(num) {
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}

function Fruit(type, gramms, pricePerKg) {
    let kg = gramms / 1000;
    let price = kg * pricePerKg;
    console.log(`I need ${price.toFixed(2)} leva to buy ${kg.toFixed(2)} kilograms ${type}.`)
}

//Fruit('orange', 2500, 1.80);

function FitnessRates(day, service, time) {
    let MonToFri = [5, 7.5, 4, 6.5, 10, 12.5];
    let WeekEnd = [8, 7, 15]
    let cost = 0;
 
    if (day === "Saturday" || day === "Sunday")
    {
        switch (service) {
            case "Fitness":
                cost = WeekEnd[0];
                break;
            case "Sauna":
                cost = WeekEnd[1];
                break;
            case "Instructor":
                cost = WeekEnd[2];
                break;
            default:
                break;
        }    
    }
    else
    {
        let iterator = 0
        switch (service) {
            case "Sauna":
                iterator = 2;
                break;
            case "Instructor":
                iterator = 4;
            default:
                break;
        }
        if (time > 15.00) {
            iterator = iterator+1;
        }
        cost = MonToFri[iterator];
    }
 
    console.log(cost);  
}

function GDC(num1, num2) {
    let smaller = Math.min(num1, num2);
    let bigger = Math.max(num1, num2);
    for (let i = smaller; i > 0; i--) {
        if (smaller % i == 0 && bigger % i == 0) {
            console.log(i);
            break;
        }
    }
}

// GDC(2154, 458);
// GDC(15, 5);

function SameNumbers(number) {
    let str = number.toString();
    let sum = 0;
    let result = true;
    for (let i = 0; i < str.length-1; i++) {
        if (str[i] != str[i+1]) {
            result = false;
        }
    }
    for (let i = 0; i < str.length; i++) {
        sum += Number(str[i]); 
    }
    console.log(result);
    console.log(sum);
}
      
// SameNumbers(2222222);

function FlightTimetable(arr) {
    let direction = arr[0];
    let destination = arr[1];
    let time = arr[2];
    let flight = arr[3];
    let gate = arr[4];

    console.log(`${direction}: Destination - ${destination}, Flight - ${flight}, Time - ${time}, Gate - ${gate}`);
}

// FlightTimetable(['Departures', 'London', '22:45', 'BR117', '42'])

function CalorieObject(args) {
    let obj = new Object();
    for (let i = 0; i < args.length; i+=2) {
        let propertyName = args[i];
        let propertyValue = Number(args[i+1]);
        obj[propertyName] = propertyValue;
    }
    console.log(obj);
}

//CalorieObject(['Yoghurt', 48, 'Rise', 138, 'Apple', 52]);