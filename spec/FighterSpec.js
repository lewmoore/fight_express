describe('Fighter', function(){

  beforeEach(function(){
    fighter = new Fighter();
  });

  it('A fighter starts with 100 health', function(){
    expect(fighter.health()).toEqual(100);
  })

  it('A players attack power starts at 10', function(){
    expect(fighter.stats()).toEqual(10)
  })
})
