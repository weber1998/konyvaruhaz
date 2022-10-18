class KonyvView {
    constructor(elem, szuloElem) {
        // console.log("KonyvView");
        console.log(szuloElem);
        szuloElem.append(`<tr>
                            <td>${elem.ID}</td>
                            <td>${elem.cim}</td>
                            <td>${elem.szerzo}</td>
                            <td>${elem.ar}</td>
                            <td><button>módosítás</button></td>
                            <td><button>törlés</button></td></tr>`)
        this.recordElem = szuloElem.children(`tr:last-child`);
        this.torolElem =
        this.modositElem = 
        console.log(this.recordElem);
    }
}

export default KonyvView;