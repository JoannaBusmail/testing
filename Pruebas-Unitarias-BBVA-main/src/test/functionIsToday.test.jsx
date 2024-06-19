import { describe, expect, test } from "vitest"
import { isToday} from '../utils/Utils'

describe ('test is today', () => {

    test('should show true fot todays date', ()=>{
        const now =new Date()
        expect(isToday(now)).toBe(true)
        expect(isToday('2024-06-19')).toBe(true)
    })

    test('should show false for past date', ()=>{
        const pastDate =new Date('2010-01-01')
        expect(isToday('2023-06-19')).toBe(false)
        expect(isToday(pastDate)).toBe(false)
    })

    test('should show false for future date', ()=>{
        const futureDate = new Date()
        futureDate.setDate(futureDate.getDate()+1)
        expect(isToday(futureDate)).toBe(false)
    })

    test('should show error for an invalud date string', ()=>{
     expect(()=>{
        isToday('Daniel')
     }).toThrow('Invalid date')
    })

    test('should show error for an object or null value', ()=>{
        expect(()=>{
           isToday({})
        }).toThrow('Invalid date')
        expect(()=>{
            isToday(null)
         }).toThrow('Invalid date')
        
       })

 
       


   
})