function    epur_str(str) {
    cut = str.trim().replace(/\s+/g,' ');
    console.log(cut);
}

epur_str(process.argv[2]);