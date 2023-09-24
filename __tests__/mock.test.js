const mocker = require("../mock")

test("Mock Function", () => {
    const mockerFn = jest.fn(mocker)
    expect(mockerFn("Omar")).toBe("Greeting Omar")
    expect(mockerFn("Hosny")).toBe("Greeting Hosny")
    expect(mockerFn("Mohamed")).toBe("Greeting Mohamed")
    expect(mockerFn("Amin")).toBe("Greeting Amin")
    expect(mockerFn).toHaveBeenCalled()
    expect(mockerFn).toHaveBeenCalledTimes(4)
    expect(mockerFn).toHaveBeenCalledWith('Omar')
})