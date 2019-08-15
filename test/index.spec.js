// importamos la funcion que vamos a testear
import { registerGmail } from "../src/firebase.js";

describe('registerGmail', () => {
    it('debería ser una función', () => {
        expect(typeof registerGmail).toBe('registerGmail');
    });
});