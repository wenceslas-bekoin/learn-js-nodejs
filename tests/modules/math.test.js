//outils de test
import test from "node:test";

//assert pour vérifier le résultat
import assert from "node:assert";

//import les fonctions depuis le module math
import { addition, multiplication, soustraire, division } from "../../src/modules/math.js";

//Test pour la fonction addition
test("Addition vas donner le résultat correct", () => {
    //on compare la valeur et le type avec stictEqual
    assert.strictEqual(addition(11, 50), 61);
});

//Test pour la function multiplication
test("Multiplication donnera", () => {
    assert.strictEqual(multiplication(10, 9), 90);//on vérifie le résultat
});

//Test pour la soustraire
test("La soustraction vas donner", ()=>{
    assert.strictEqual(soustraire(200, 150), 50);//on vérifie le résultat
});

//Test pour la function division
test("La division  donnera", ()=>{
    assert.strictEqual(division(25, 5), 5);
});

