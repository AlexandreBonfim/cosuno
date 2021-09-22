import { getMany, getSpecialties, getFilterByName, getFilterBySpecialty } from './companies.service'
import { mockCompanies, mockSpecialties } from './companies.mock'

jest.mock('./companies.store', () => ({
  getCompanies: jest.fn(() => mockCompanies)
}))

describe('Companies Module', () => {
  describe('getSpecialties', () => {
    test('should return all the specialties', () => {
      expect(getSpecialties()).toEqual(mockSpecialties)
    })
  })

  describe('getMany', () => {
    test('should return all the companies', () => {
      expect(getMany()).toEqual(mockCompanies)
    })
  })

  describe('getFilterByName', () => {
    test('should return companies based on search term', () => {
      expect(getFilterByName('hatology')).toEqual([mockCompanies[0]])
    })
  })

  describe('getFilterBySpecialty', () => {
    test('should return companies based on search term', () => {
      const expected = [mockCompanies[1], mockCompanies[2]]
      expect(getFilterBySpecialty(['Flooring', 'Carpenter'])).toEqual(expected)
    })

    test('should throw an error when term is empty', () => {
      expect(() => getFilterBySpecialty([])).toThrowError()
    })
  })
})
