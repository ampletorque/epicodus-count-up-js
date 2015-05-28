describe('multiply number until limit', function() {
  it("will return output up to limit on divisible limit", function() {
    expect(countUpBy([7, 49])).to.eql([7, 14, 21, 28, 35, 42, 49]);
  });
  it("will return output non-divisible limit", function() {
    expect(countUpBy([8, 55])).to.eql([8, 16, 24, 32, 40, 48]);
  });
});
