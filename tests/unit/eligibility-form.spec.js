import { screener } from '@/eligibility-screener'

describe('Eligibility Screener', () => {
  describe('Child Day Care', () => {

    it('returns 90 for coverage if the dependent is under 5 and hhi is under $25,000', () => {
      const eligibilityResults = screener({ dependent_age: 4, hhi: 20000 })
      expect(eligibilityResults.coverage_percent).toEqual(90)
      expect(eligibilityResults.form).toEqual('B202')
    })

    it('returns 100 for coverage if the dependent is under 5, hhi is under $25,000, and single parent household', () => {
      const eligibilityResults = screener({ dependent_age: 4, hhi: 20000, single_parent: true })
      expect(eligibilityResults.coverage_percent).toEqual(100)
      expect(eligibilityResults.form).toEqual('b202')
    })


    it('returns 50 for coverage if the dependent is under 5 and hhi between $25,000 - $45,000', () => {
      const eligibilityResults = screener({ dependent_age: 4, hhi: 40000 })
      expect(eligibilityResults.coverage_percent).toEqual(50)
      expect(eligibilityResults.form).toEqual('b202')
    })

    it('returns 60 for coverage if the dependent is under 5, hhi between $25,000 - $45,000, and single parent household', () => {
      const eligibilityResults = screener({ dependent_age: 4, hhi: 40000, single_parent: true })
      expect(eligibilityResults.coverage_percent).toEqual(60)
      expect(eligibilityResults.form).toEqual('b202')
    })

    it('returns 0 for coverage if the dependent is under 5, hhi over $45,000', () => {
      const eligibilityResults = screener({ dependent_age: 4, hhi: 46000 })
      expect(eligibilityResults.coverage_percent).toEqual(0)
      expect(eligibilityResults.form).toEqual('b202')
    })

    it('returns 0 for coverage if the dependent is under 5, hhi over $45,000 and single parent is true', () => {
      const eligibilityResults = screener({ dependent_age: 4, hhi: 46000, single_parent: true })
      expect(eligibilityResults.coverage_percent).toEqual(0)
      expect(eligibilityResults.form).toEqual('b202')
    })
  })

})
