const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator Tests', () => {
  // ทำงานครั้งเดียวก่อนเริ่มทดสอบทุก test ใน block นี้ (เช่น การเปิด Connection หรือโหลดข้อมูลเตรียมไว้)
  beforeAll(() => {
    console.log('--- เริ่มการทดสอบฟังก์ชัน Calculator ทั้งหมด ---');
  });

  // ทำงานครั้งเดียวก่อนเริ่ม "แต่ละ" test (เช่น การเตรียม Mock Data ใหม่เพื่อไม่ให้ส่งผลกระทบข้าม test)
  beforeEach(() => {
    console.log('กำลังรันการทดสอบ...');
  });

  // ทำงานหลังจบ "แต่ละ" test (เช่น การคืนค่า Mock หรือล้างข้อมูลชั่วคราว)
  afterEach(() => {
    console.log('การทดสอบเสร็จสิ้น');
  });

  // ทำงานครั้งเดียวหลังจากทำทุก test ใน block นี้เสร็จสิ้น (เช่น การปิด Connection, คืนความจำระบบ)
  afterAll(() => {
    console.log('--- การทดสอบทั้งหมดเสร็จสมบูรณ์ ---');
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtracts 5 - 2 to equal 3', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiplies 3 * 4 to equal 12', () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test('divides 10 / 2 to equal 5', () => {
    expect(divide(10, 2)).toBe(5);
  });

  test('throws error when dividing by zero', () => {
    expect(() => divide(10, 0)).toThrow('Cannot divide by zero');
  });
});