function Bus(driver, [], route, cash) {
    this.sopir = driver;
    this.penumpang = [];
    this.trayek = route;
    this.cash = cash;
    this.penumpangNaik = function penumpangNaik(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    };
    this.penumpangTurun = function penumpangTurun(namaPenumpang, bayar) {
       for (i=0; i<this.penumpang.length; i++) {
            if (namaPenumpang == this.penumpang[i]) {
                this.penumpang.splice(i,1,null);
                this.cash += bayar;
                return this.cash;
            } 
            // else {
            //     alert("Penumpang Tidak Ada");
            //     return this.penumpang;
            //     }
       }
    };
};

let Bus1 = new Bus('Tarmiji','','Jakarta - Semarang',0);
// // let Bus2 = new Bus('Joko', namaPenumpang, 'Jakarta - Jember',0);

