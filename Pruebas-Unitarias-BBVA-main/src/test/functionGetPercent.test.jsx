import { describe, expect, test } from "vitest"
import { getPercent} from '../utils/Utils'

describe("test funcion percent", () => {
test('calculate the correct percentage', () => {
    const result =  getPercent(50, 200)
    expect (result).toBe(25.00)
    expect(typeof result).toBe('number')
    expect (typeof result).not.toBe('string')

})

test ('throws error if value or total is not a number', ()=>{
    expect(()=> getPercent('50', '200')).toThrow('Both value and total must be number')
    expect(()=> getPercent('50',200)).toThrow('Both value and total must be number')
    expect(()=> getPercent('abc',200)).toThrow('Both value and total must be number')
    expect(()=> getPercent(50,'dsds')).toThrow('Both value and total must be number')
    
})

test('throws error if total is zero', ()=>{
    expect(()=>getPercent(5, 0)).toThrow('Total must not be zero')
    expect(()=>getPercent(5, 0)).toThrowError
})

test('if value or total is null throw error', ()=>{
    expect(()=>getPercent(5, null)).toThrow('Both value and total must be numbers')
    expect(()=>getPercent(5, null)).toThrowError
    expect(()=>getPercent(null, 100)).toThrow('Both value and total must be numbers')
})


})