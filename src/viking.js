// Soldier
class Soldier {
    constructor(health, strength){
        this.health = health
        this.strength = strength
    }
    
    attack(){
        return this.strength

    }
    receiveDamage(damage){
       this.health -= damage


    }

}

// Viking
class Viking extends Soldier{
    
    constructor(name,health, strength){
        super(health, strength)
        this.name = name

    }
    receiveDamage(damage){

        this.damage = damage
        this.health -= damage
        if (this.health){return `${this.name} has received ${this.damage} points of damage`}
        return `${this.name} has died in act of combat`
}

    battleCry(){
        return  "Odin Owns You All!"
    }
    
}

// Saxon
class Saxon extends Soldier{

        receiveDamage(damage){
            this.damage = damage
           
            this.health -= damage
            if(this.health) {return`A Saxon has received ${this.damage} points`} 
            return "A Saxon has died in combat";
            
               

}}

// War
class War {
constructor(){

    this.vikingArmy = []
    this.saxonArmy = []
    this.saxAle = parseInt(Math.random() * this.saxonArmy.length)
    this.vikAle = parseInt(Math.random() * this.vikingArmy.length)
}

addViking(Viking){
    this.vikingArmy.push(Viking)
}
addSaxon(Saxon){
    this.saxonArmy.push(Saxon)
}
vikingAttack(){

    this.saxonArmy[this.saxAle].receiveDamage(this.vikingArmy[this.vikAle].attack())
    
}
saxonAttack(){

    this.vikingArmy[this.vikAle].receiveDamage(this.saxonArmy[this.saxAle].attack())

   
}
showStatus(){

    if(this.saxonArmy.length < 1){return "Vikings have won the war of the century!"}
    if(this.vikingArmy.length < 1){return "Saxons have fought for their lives and survived another day..."}
    return "Vikings and Saxons are still in the thick of battle."

}
}