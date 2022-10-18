import KonyvekView from "../View/KonyvekView.js";
import KonyvModel from "../Model/KonyvModel.js";

class KonyvController {
    constructor() {
        console.log("KonyvController");
        const adminGomb=$("#admin");
        const publikusGomb=$("#publikus");
        const konyvmodel = new KonyvModel();
        konyvmodel.adatBe("../adat.json", this.konyvAdatok);

        adminGomb.on("click", () => {
            konyvmodel.adatBe("../adat.json", this.konyvAdatokAdmin);
        })
        publikusGomb.on("click", () => {
            konyvmodel.adatBe("../adat.json", this.konyvAdatokPublikus);
        })

        $(window).on("kosar", (event) => {
            console.log("könyvet a kosárba rakja", event.detail)
            
        })
        
        $(window).on("torol", (event) => {
            console.log("kontrollerben meghívódott a törlés", event.detail)
            konyvmodel.adatTorol(event.detail);
        })
        $(window).on("modosit", (event) => {
            console.log("kontrollerben meghívódott a módosítás", event.detail)
            konyvmodel.adatModosit(event.detail);
        })
    }

    konyvAdatokAdmin(tomb) {
        console.log("admin", tomb);
        let szuloElem=$("main");
        new KonyvekView(tomb, szuloElem);
    }
    konyvAdatokPublikus(tomb) {
        console.log("publikus", tomb);
        let szuloElem=$("main");
        new KonyvekView(tomb, szuloElem);
    }
}

export default KonyvController;