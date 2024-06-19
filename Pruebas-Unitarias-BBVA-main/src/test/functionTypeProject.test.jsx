import { describe, expect, test } from "vitest"
import { typeProject} from '../utils/Utils'


describe(' test function type project', ()=>{
   
    test('return correct project', () => {
        let result = typeProject(0)
        expect(typeof result).toBe('string')
        expect(result).toBe('Consumo')

        result = typeProject(1)
        expect(typeof result).not.toBe('number')
        expect(result).toBe('Autoconsumo')

        result = typeProject(8)
        expect(result).toBe('No definido')
      
        result = typeProject('')
        expect(result).toBe('No definido')

        result = typeProject([])
        expect(result).toBe('No definido')
    })
})