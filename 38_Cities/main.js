function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Hyderabad");
describe_city("Khairpur");
describe_city("Dhaka", "Bangladesh");
