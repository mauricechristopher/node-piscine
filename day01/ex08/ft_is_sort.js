function    ft_is_sort(str) {
    str = str.split(/\s+/);

    var sorted = 0;
    for (var i = 0; i < str.length; i++) {
        if (str[i] > str[i+1]) {
            sorted = 1;
        }
        continue;
    }
    if (sorted == 0) {
        console.log("The array is sorted :)");
    }
    else
        console.log("The array is not sorted :(");
}

var unsort = "What are we doing now ?";
var sort = ("!/@#;^", "42", "Hello World", "hi", "zZzZzZz");

ft_is_sort(unsort);
ft_is_sort(sort);