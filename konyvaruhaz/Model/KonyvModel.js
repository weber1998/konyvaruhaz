class KonyvModel {
    #konyvekTomb = [];

    constructor() {
        console.log("KonyvModel");
    }

    adatTorol(adat) {
        console.log("törlöm", adat)
    }
    adatModosit(adat) {
        console.log("modositom", adat)
    }
    adatKosarba(adat) {
        console.log("kosárba", adat)
    }

    adatBe(vegpont, myCallBack) {
        fetch(vegpont, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                this.#konyvekTomb = data.konyv;
                console.log(this.#konyvekTomb);
                myCallBack(this.#konyvekTomb);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
}

export default KonyvModel;