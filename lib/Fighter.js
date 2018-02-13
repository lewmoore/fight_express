function Fighter(){
  this.HP = 100
  this.AP = 10
};

Fighter.prototype.health = function() {
  return this.HP;
};

Fighter.prototype.stats = function() {
  return this.AP;
};
