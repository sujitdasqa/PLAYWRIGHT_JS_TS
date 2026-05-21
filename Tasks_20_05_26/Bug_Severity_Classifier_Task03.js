
let bugImpactScore = 0;
if (bugImpactScore >= 9 && bugImpactScore <= 10) {
    console.log("Severity: Critical — Block release");
}
else if (bugImpactScore >= 7 && bugImpactScore <= 8) {
    console.log("Severity: High");
}
else if (bugImpactScore >= 4 && bugImpactScore <= 6) {
    console.log("Severity: Medium");
}
else if (bugImpactScore >= 1 && bugImpactScore <= 3) {
    console.log("Severity: Low");
}
else {
    console.log("Invalid score");

}


