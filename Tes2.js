// OOP:
// class Bus{
//     constructor (driver, penumpang, route, cash) {
//     this.sopir = driver;
//     this.penumpang = penumpang;
//     this.trayek = route;
//     this.cash = cash;
//     };
//     penumpangNaik(namaPenumpang) {
//         this.penumpang.push(namaPenumpang);
//         return this.penumpang;
//     };
//     penumpangTurun(namaPenumpang, bayar) {
//        for (let i=0; i < this.penumpang.length; i++) {
//             if (namaPenumpang == this.penumpang[i]) {
//                 this.penumpang.splice(i,1,null);
//                 this.cash += bayar;
//                 return this.cash;
//                 };  
//             };
//         };
// };
// const Bus1 = new Bus('Joko', [], ["jakarta","semarang"],0);


//Procedural (Functional)
const createBusObj = (driver, penumpang, route, cash) => { 
    let bus = {};
    bus.sopir = driver;
    bus.penumpang = penumpang;
    bus.trayek = route;
    bus.cash = cash;
    return bus;
};
let Angkot = createBusObj('Tarmiji', [], ["jakarta","semarang"], 0);

const penumpangNaik = (namaPenumpang, arrPenumpang, bayar, arrBayar) => {
    let maxPenumpang = 5;
    if (arrPenumpang.length < maxPenumpang) {
        arrPenumpang.push(namaPenumpang);
        Angkot.cash += bayar;
        return arrPenumpang;
    } else {
        alert ("Angkot Penuh Bro!");
    };
};

const penumpangTurun = (namaPenumpang, arrPenumpang) => {
        if (arrPenumpang.length == 0) {
            alert ("Angkot kosong Bro!");
        }; 
        for (let i=0; i < arrPenumpang.length; i++ ) { 
            if (namaPenumpang == arrPenumpang[i]) {
                arrPenumpang.splice(i,1,null);
                return arrPenumpang;  
        };
    };
};

// penumpangNaik("ethan", Angkot.penumpang, 10000, Angkot.cash);
// penumpangTurun("ethan", Angkot.penumpang);

