
function thousands_separators(nStr) {
    nStr += '';
    var x1=x[0];
    var x2= x.length >1?'-'+x[1]:'';
    var rgx =/(\d+)(\d{3})/;
    while(rgx.text (x1)){
        x1=x1.replace(rgx,'$1'+','+'$2');
    }
    return x1+x2;
    module.exports = thousands_separators;
    alert(module.exports);
}

