const age = 15;
const isOldEnough = age >= 18;

if (isOldEnough) {
    console.log('Sarah can start driving license 🚘');
}else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years`);
}