import { mount } from '@vue/test-utils'
import ScreenerForm from '@/components/ScreenerForm'

describe('ScreenerForm', () => {
    it('sends respondents answers to screener', () => {
        const screenerSpy = jest.fn()
        const screenerFormWrapper = mount(ScreenerForm,
            {
                propsData: {
                    screener: screenerSpy
                }
            })

        const householdIncomeInput = screenerFormWrapper.find('#household_income')
        householdIncomeInput.setValue(45001)

        const dependentAgeInput = screenerFormWrapper.find('#dependent_age')
        dependentAgeInput.setValue(3)

        const singleParent = screenerFormWrapper.find('#single_parent')
        singleParent.trigger('click')

        const submitButton = screenerFormWrapper.find('#submit')
        submitButton.trigger('click')

        expect(screenerSpy).toBeCalledWith({ hhi: 45000, dependent_age: 3, single_parent: true })

    })

    it('displays respondents eligibility from screener', () => {
        const screenerStub = () => ({coverage_percent: 100, form: 'b123'})
        const screenerFormWrapper = mount(ScreenerForm,
            {
                propsData: {
                    screener: screenerStub
                }
            })

        const householdIncomeInput = screenerFormWrapper.find('#household_income')
        householdIncomeInput.setValue(45000)

        const dependentAgeInput = screenerFormWrapper.find('#dependent_age')
        dependentAgeInput.setValue(3)

        const singleParent = screenerFormWrapper.find('#single_parent')
        singleParent.trigger('click')


        expect(screenerFormWrapper.text()).not.toContain('Form: b123')
        expect(screenerFormWrapper.text()).not.toContain('Coverage: 100%')

        const submitButton = screenerFormWrapper.find('#submit')
        submitButton.trigger('click')


        expect(screenerFormWrapper.text()).toContain('Form: b123')
        expect(screenerFormWrapper.text()).toContain('Coverage Percentage: 100')


    })
})