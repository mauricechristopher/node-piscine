function    ft_split(str) {
    
    let arr = new Array();
    str = str.trim().split(/\s+/).sort();

    console.log("Array");
    console.log("(")

    for (var x = 0; str[x]; x++) {
        arr.push('      [' + x + ']' + ' => ' + str[x]);
        console.log(arr[x]);
    }

    console.log(")");
}

ft_split("Hello     World AAA   tab  ");