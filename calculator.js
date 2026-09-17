function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

// ส่งออกฟังก์ชันเพื่อให้ไฟล์อื่น (รวมถึงไฟล์ test) เรียกใช้งานได้
module.exports = {
  add,
  subtract,
  multiply,
  divide
};