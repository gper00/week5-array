const chars = [
  {
    name: "Uzumaki Nartooh",
    gender: "M",
    power: 10000,
    isAlive: true
  },
  {
    name: "Uchiha saskeh",
    gender: "M",
    power: 9900,
    isAlive: true
  },
  {
    name: "Saitama Botak",
    gender: "M",
    power: 100000,
    isAlive: true
  },
  {
    name: "Lionel Messi",
    gender: "M",
    power: 999,
    isAlive: true
  },
  {
    name: "Cristiano Ronaldo",
    gender: "M",
    power: 999,
    isAlive: true
  },
  {
    name: "Patrick Batman",
    gender: "M",
    power: 5000,
    isAlive: true
  },
  {
    name: "Goku",
    gender: "M",
    power: 99999,
    isAlive: true
  },
  {
    name: "Guts",
    gender: "M",
    power: 7000,
    isAlive: true
  },
  {
    name: "Miyamoto Musashi",
    gender: "M",
    power: 5000,
    isAlive: false
  },
  {
    name: "Monkey D Luffy",
    gender: "M",
    power: 9000,
    isAlive: true
  },
  {
    name: "Zoro Marimoo",
    gender: "M",
    power: 8888,
    isAlive: true
  },
  {
    name: "Dororo",
    gender: "F",
    power: 500,
    isAlive: true
  },
  {
    name: "Uchiha Itachieh",
    gender: "M",
    power: 9900,
    isAlive: true
  },
  {
    name: "Soeharto",
    gender: "M",
    power: 10000000,
    isAlive: false
  },
  {
    name: "Mr Pahrul Irfan",
    gender: "M",
    power: 9999999999999,
    isAlive: true
  },
]

// map()
upperCaseCharsName = chars.map(char => char.name.toUpperCase())
console.log("1. map() => Uppercase 'nama'\n", upperCaseCharsName)

// filter()
charsNameLessThanFive = chars.filter(char => char.name.length < 5)
console.log("\n2. filter() => Nama < 5 karakter\n", charsNameLessThanFive)

// reduce()
totalOfCharsName = chars.reduce((acc, char) => acc + char.name.length, 0)
console.log("\n3. reduce() => Jumlah total karakter semua nama =", totalOfCharsName)

// find()
MyDosenSaya = chars.find(char => char.name.includes('Mr'))
console.log("\n4. find() => Mencari dosen saya yang di namanya ada 'Mr'-nya hehe =", MyDosenSaya)

// some()
anyCharsNameMoreThan10 = chars.some(char => char.name.length > 10)
console.log("\n5. some() => Apakah ada nama yang lebih dari 10 karakter =", anyCharsNameMoreThan10)
console.log(`Hasilnya ${anyCharsNameMoreThan10 ? 'ada' : 'nggak'}`)

// every()
allCharsNameMoreThan3 = chars.every(char => char.name.length > 3)
console.log("\n 6. every() => Apakah semua nama lebih dari 3 huruf = ", allCharsNameMoreThan3)
console.log(`Hasilnya ${allCharsNameMoreThan3 ? 'bener' : 'ada yang <= 3 huruf'}`)
