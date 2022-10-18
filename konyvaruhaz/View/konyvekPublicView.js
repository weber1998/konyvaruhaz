// listázzuk a könyveket a div-ekben

class KonyvekPublicView {
    #elem;
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        console.log(szuloElem);
        this.#elem = elem;
        szuloElem.append(`  <div>${elem.cim}</div>
                            <div>${elem.szerzo}</div>
                            <div>${elem.ar}</div>
                            <button class="kosarba">Kosárba</button>`)
        this.recordElem = szuloElem.children(`tr:last-child`);
        this.kosarbaElem = this.recordElem.children("button");
        console.log(this.modositElem);
        this.kosarbaElem.on("click",()=>{
            console.log("kosárba");
            this.kattintasTrigger("kosarba");
        })
    }

    kattintasTrigger(esemenyNeve) {
        console.log(esemenyNeve)
        const esemeny = new CustomEvent(esemenyNeve,{detail:this.#elem.ID})
        window.dispatchEvent(esemeny);
    }
}

export default KonyvekPublicView;