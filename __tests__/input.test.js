const theFilter = require("../input");

// if u used the 'only' method it will skip the all unit tests in the module and just run the 'only' 
// the same for 'skip' 
describe("Doing Some Name Filtration", () => {
    it.only("Should be return name or N/A if it's null", () => {
        expect(theFilter()).toBe('N/A')
    })

    it("Should return the name withount spaces in the beggining and in the end", () => {
        expect(theFilter("   Omar")).toBe('Omar')
    })
})