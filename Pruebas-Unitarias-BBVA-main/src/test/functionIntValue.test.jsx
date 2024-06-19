import { describe, expect, test } from "vitest"
import { intValue} from '../utils/Utils'

describe ('test intValue', () => {

    test('should return true for a valid integer string', () => {
        expect(intValue('123')).toBe(true)
    })

    test('should return false for a no valid integer', () => {
        expect(intValue('camila')).toBe(false)
        expect(intValue(null)).toBe(false)
        expect(intValue(undefined)).toBe(false)
        expect(intValue('0,5')).toBe(false)
    })

    test('should return false for an empty value', () => {
        expect(intValue(' ')).toBe(false)
        expect(intValue('565 ')).toBe(false)
    })

    test('should return false for a negative value', () => {
        expect(intValue('-5.5')).toBe(false)
        expect(intValue('-565')).toBe(false)
        expect(intValue(3.35)).toBe(false)
    })
})