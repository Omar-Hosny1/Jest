const some = (...numbers) => {
    return numbers.reduce((acc, curr) => acc + curr, null)
}

module.exports = some