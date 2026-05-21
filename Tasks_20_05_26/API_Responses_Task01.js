
let apiStatusCode = 500;
if (apiStatusCode >= 200 && apiStatusCode <= 299) {
    console.log("Success");
}
else if (apiStatusCode >= 300 && apiStatusCode <= 399) {
    console.log("Redirection");
}
else if (apiStatusCode >= 400 && apiStatusCode <= 499) {
    console.log("Client Error");
}
else if (apiStatusCode >= 500 && apiStatusCode <= 599) {
    console.log("Server Error");
}
else {
    console.log("Invalid");
}