
// let arr = process.argv.slice(2).map(str => str.split()).flat().sort();

let arr = [];

for (let j = 2; j < process.argv.length; j++) {
    let spl = process.argv[j].split(/\s+/);
    if (spl.length > 1)
        for (let x = 0; x < spl.length; x++) {
            arr.push(spl[x]);
        }
    else
        arr.push(spl);
}

let bet = [].concat.apply([], arr);
function cmp(a, b) {
    const cmpstr = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ0123456789 !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
    let i = 0;

    while (i < a.length) {
        let posa = cmpstr.indexOf(a[i]);
        let posb = cmpstr.indexOf(b[i]);
        if (posa < posb) {
            return -1;
        }
        else if (posa > posb) {
            return 1;
        }
        else {
            i++;
        }
    }
}




console.log(bet.sort(cmp).join('\n'));