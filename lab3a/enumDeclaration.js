var Tax;
(function (Tax) {
    Tax[Tax["FICA"] = 10] = "FICA";
    Tax[Tax["STATE"] = 5] = "STATE";
    Tax[Tax["MEDICARE"] = 12] = "MEDICARE";
})(Tax || (Tax = {}));
;
var fica = Tax.FICA;
var state = Tax.STATE;
var medicare = Tax.MEDICARE;
console.log(fica, state, medicare);
