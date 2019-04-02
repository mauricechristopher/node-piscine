function    rostring() {
    if (process.argv[2]) {
        var str = process.argv[2].trim().split(/\s+/);
        var first = str.shift();

        str.push(first);
        console.log(str.join(' '));
    }
    else
        console.log("Enter an argument...")
}

rostring();