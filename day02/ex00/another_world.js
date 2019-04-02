function    another_world(str) {
    cut = str.trim().replace(/\s+/g,' ');
    console.log(cut);
}

another_world(process.argv[2]);