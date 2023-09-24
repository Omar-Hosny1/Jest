const data = require("../all")

it("Should Has 6 Elements", () => {
    expect(data).toHaveLength(7)
})

it("Should Has Number 6", () => {
    expect(data).toContain(6)
})

it("Should Not Has Number 6", () => {
    expect(data).not.toContain(10)
})

it("Should Not Has Number 0", () => {
    for (let i = 0; i < data.length; i++) {
        expect(data[i]).not.toBe(0)
    }
})

test("The First Number should be Positive", () => {
    expect(data[0]).toBeGreaterThan(0)
})

it("Should has 'name' property", () => {
    let obj = {
        name: "Omar"
    }
    expect(obj).toHaveProperty('name', "Omar")
})

function getErrorMessage(pass, msg) {
    return pass ? `Passed: ${msg}` : `Error: ${msg}`
}

expect.extend({
    // target : is the getting value from the expect
    toBeLargerThan(recieved, target) {
        const pass = recieved > target;
        return {
            pass,
            message: () => getErrorMessage(pass, `Expected ${recieved} to be greater than ${target}`)
        }
    },
    toBeBetween(recieved, start, end) {
        const pass = recieved >= start && recieved <= end;
        return {
            pass,
            message: () => getErrorMessage(pass, `Expected ${recieved} to be in between ${start} and ${end}`)
        }
    }
})

it("Should be larger than 1", () => {
    expect(15).toBeLargerThan(10)
})

it("Should be in between than 10 To 100", () => {
    expect(15).toBeBetween(10, 100)
})