function    aff_param() {
    for (let j = 2; j < process.argv.length; j++) {  
        console.log(process.argv[j]);
    }
}
aff_param();