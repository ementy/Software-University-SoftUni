function solve(arr) {
    function getModel(arr, town) {
        let townModels = [];
        for (let modelRow of arr) {
            if (modelRow.town === town) {
                let model = townModels.find(t => t.name === town);
                if (model) {
                    model.counter++;
                } else {
                    let newModel = {
                        model: modelRow.model,
                        counter: 1,
                        price: modelRow.price
                    }
                    townModels.push(newModel);
                }
            }
        }
        let sorted = townModels.sort((a, b) => b.counter - a.counter || b.price - a.price || a.model.localeCompare(b.model));
        return sorted[0];
    }

    function getTown(arr) {
        let townsAndTotal = [];
        for (let purchase of arr) {
            let town = townsAndTotal.find(t => t.name === purchase.town);
            if (town) {
                town.profit += purchase.price;
                town.vignettesCount++;
            } else {
                let town = {
                    name: purchase.town,
                    vignettesCount: 1,
                    profit: purchase.price
                }
                townsAndTotal.push(town);
            }
        }

        let sorted = townsAndTotal.sort((a, b) => b.profit - a.profit || b.vignettesCount - a.vignettesCount || a.name.localeCompare(b.name));
        return sorted[0];
    }

    function getTownsWithModel(arr, model) {
        let towns = [];
        for (let townArg of arr) {
            if (townArg.model === model) {
                let town = towns.find(t => t.town === townArg.town);
                if (town) {
                    town.regs.push(townArg.regNumber);
                } else {
                    let town = {
                        town: townArg.town,
                        regs: []
                    };
                    town.regs.push(townArg.regNumber);
                    towns.push(town);
                }
            }
        }
        let sorted = towns.sort((a, b) =>  a.town.localeCompare(b.town));
        return sorted;
    }

    let town = getTown(arr);
    let model = getModel(arr, town.name.toString());
    let towns = getTownsWithModel(arr, model.model);
    console.log(`${town.name} is most profitable - ${town.profit} BGN`);
    console.log(`Most driven model: ${model.model}`);
    for (let town of towns) {
        console.log(town.town + ': ' + town.regs.sort((a, b) => a.localeCompare(b)).join(', '));
    }
}

solve([ { model: 'BMW', regNumber: 'B1234SM', town: 'Varna', price: 2},
    { model: 'BMW', regNumber: 'C5959CZ', town: 'Sofia', price: 8},
    { model: 'Tesla', regNumber: 'NIKOLA', town: 'Burgas', price: 9},
    { model: 'BMW', regNumber: 'A3423SM', town: 'Varna', price: 3},
    { model: 'Lada', regNumber: 'SJSCA', town: 'Sofia', price: 3} ]
);