class Jamie extends Lannister {
    with(someone) {
        if (Object.getPrototypeOf(someone.constructor).name != "Lannister") {
            return ("Let's do this");
        }
        else if (someone.constructor.name == "Cersei") {
            return ("With pleasure, but only in a tower in Winterfell, then.");
        }
        else {
            return ("Not even if I'm drunk !");
        }
    }
}