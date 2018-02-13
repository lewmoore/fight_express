function Fighter(){
  this.HP = 100
  this.AP = 10
  this.currentWeapon = 'unarmed'
};

Fighter.prototype.chooseWeapon = function(weapon){
  this.currentWeapon = weapon
}

Fighter.prototype.showWeapon = function(){
  return this.currentWeapon
}

Fighter.prototype.health = function() {
  return this.HP;
};

Fighter.prototype.stats = function() {
  return this.AP;
};
