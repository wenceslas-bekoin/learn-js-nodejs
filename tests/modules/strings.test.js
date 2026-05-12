import test from "node:test";
import assert from "node:assert";

import { APP_MESSAGES, majuscule, minuscule, espace, prepareTexte } from "../../src/modules/strings.js";

//test pour APP_MESSAGES
test("Le message de bienvenue sera afficher", () => {
    //on vérifie le message attendu
    assert.strictEqual(APP_MESSAGES.welcome, "Bienvenue dans mon application d'apprentissage Nodejs et Javascript!");


});

//test pour majuscule
test("Le texte vas s'afficher en majuscule", () => {
    const resultat = majuscule("je suis en joie !")
    assert.strictEqual(resultat, "JE SUIS EN JOIE !" );
});

//test pour minuscule
test("Afficher le texte en minuscule", () => {
    const texto = minuscule("VRAIMENT EN JOIE");
    assert.strictEqual(texto, "vraiment en joie");
})
