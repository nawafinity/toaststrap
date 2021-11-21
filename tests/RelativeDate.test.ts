import RelativeDate from "../src/RelativeDate"

describe("relative-date-time", function() {
  it('now', function() {
    let result = new RelativeDate(Date.now()).print()
    expect('just now').toBe(result);
  });

  it("my-birthday", function() {
    let result = new RelativeDate("08-01-1995").print()
    expect("26 years ago").toBe(result)
  })

  it("zero", function() {
    // 0 means Jan 01 1970
    let result = new RelativeDate(0).print()
    expect("52 years ago").toBe(result)
  })

  it("timestamps", function() {
    // Apr 20 571
    let result = new RelativeDate(-44138747212000).print()
    expect("1452 years ago").toBe(result)
  })


  it("invalid-date", function() {
    let result = new RelativeDate('50-50-2050').print()
    expect("Unknown").toBe(result)
  })
})
