function convertCurrency() {
    var usdAmount = parseFloat(document.getElementById("usdInput").value);
    var thbRate = 31.22;
    var thbAmount = usdAmount * thbRate;
    document.getElementById("result").innerHTML = usdAmount.toFixed(2) + " USD = " + thbAmount.toFixed(2) + " THB";
}