// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    let obj = {};
    if (currency==0){
        return {};
    } 
    else if (currency>10000) {
        return {error: "You are rich, my friend! We don't have so much coins for exchange"};
    } 
    else {
        let h = Math.floor(currency/50);
            if (h>0){
                obj["H"] = h;
            }
        let hos = currency%50;
        if (hos!=0){
            let q = Math.floor(hos/25);
                if (q>0) {
                    obj["Q"] = q;
                }
            let qos = hos%25;
                if (qos!=0) {
                    let d = Math.floor(qos/10);
                        if (d>0) {
                            obj["D"] = d;
                        }
                    let dos = qos%10;
                    if (dos!=0) {
                        let n = Math.floor(dos/5);
                            if (n>0) {
                                obj["N"] = n;
                            }
                        let nos = dos%5;
                        if (nos!=0) {
                            obj["P"] = nos;
                        }
                }
            }
        }
    }
    return obj;
}
