function make_Shirt(size, text) {
    if (size === void 0) { size = "Large"; }
    if (text === void 0) { text = "I love typescript"; }
    console.log("Creating a ".concat(size, " shirt with the message:").concat(text, "."));
}
make_Shirt();
make_Shirt("Medium");
make_Shirt("Small", "I love Python.");
