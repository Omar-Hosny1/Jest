const sum = require("../sum");

describe("Checks the Numbers", () => {

    describe("check if there is no numbers", () => {
        it("should return null", () => {
            expect(sum()).toBe(null)
        })
    })

    describe("check if there is numbers", () => {
        it("Should return the input", () => {
            expect(sum(5)).toEqual(5)
        })


        it("Should sum up the two nums", () => {
            expect(sum(5, 10)).toEqual(15)
        })
    })
})

