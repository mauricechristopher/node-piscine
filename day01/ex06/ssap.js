function    ssap() {
    let arr = new Array;

    for (let j = 2; j < process.argv.length; j++) { 
        let spl = process.argv[j].split(/\s+/);
        if (spl.length > 1)
            for (let x = 0; x < spl.length; x++) {
                arr.push(spl[x]);
            }
        else
            arr.push(spl);
    }
    console.log(arr.sort().join('\n'));
}

ssap();