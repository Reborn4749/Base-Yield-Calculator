const tokenType = document.getElementById("tokenType");
const daysInput = document.getElementById("stakingDays");
const btn = document.getElementById("calcBtn");
const input = document.getElementById("usdcAmount");
const display = document.getElementById("yieldResult");
btn.addEventListener("click", function() {
    let amount = input.value;
    let apy = tokenType.value === "USDC" ? 0.10 : 0.05;
    let days = daysInput.value || 365;
    let yieldEared = (amount * apy * days) / 365;
    display.textContent = yieldEared.toFixed(4);
});
const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function() {
    input.value = "";
    daysInput.value = "";
    display.textContent = "0";
});
