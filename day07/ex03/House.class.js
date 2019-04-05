class House {
    getHouseName() {
    }

    getHouseMotto() {
    }

    getHouseSeat() {
    }

    introduce() {
        console.log("House " + this.getHouseName() + " of " + this.getHouseSeat() + " : " + '"' + this.getHouseMotto() + '"');
    }
}

class HouseStark extends House {
    getHouseName() {
        return "Stark";
    }
    getHouseMotto() {
        return "Winter is coming";
    }
    getHouseSeat() {
        return "Winterfell";
    }
}

class HouseMartell extends House {
    getHouseName() {
        return "Martell";
    }
    getHouseMotto() {
        return "Unbowed, Unbent, Unbroken";
    }
    getHouseSeat() {
        return "Sunspear";
    }
}

let houses = new Array(new HouseStark(), new HouseMartell());

houses[0].introduce();
houses[1].introduce();