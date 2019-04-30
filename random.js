function random(largo) {
  const char = 'QWERTYUIOPSDFAGHJKLÑZXCVbnmMNbvcxzñlkjhgfsadpoiuytrewq1234567890?¡¿*|'
  let string = ''

  for (let i = 0; i < largo; i++) {
    const index = Math.round(Math.random() * char.length - 1)
    string += char[index]
  }

  return string
}

module.exports = random
