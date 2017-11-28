
import Vue from 'vue'
import ButtonComponent from '@/components/ButtonComponent'

describe('ButtonComponent.vue', () => {
    let vm

    // Khoi tao bien moi khi chay test case
    beforeEach(() => {
        const Constructor = Vue.extend(ButtonComponent)
        vm = new Constructor().$mount()
    })

    // Kiem tra text o moi button
    it('should have to correct button text', () => {
        expect(vm.$data.text.increment_text)
        .to.equal('Click to increment counter')
        expect(vm.$data.text.decrement_text)
        .to.equal('Click to decrement counter')
    })

    // Kiem tra emit event khi click vao button
    it('should emit event when click button', () => {
        // Tao spy cho vm.$emit
        sinon.spy(vm, '$emit')

        // Click button increment
        vm.$refs.incrementButton.click()
        // Assertion
        expect(vm.$emit).to.have.been.calledWith('incrementButtonHasBeenClicked')
        
        // Click button decrement
        vm.$refs.decrementButton.click()
        // Assertion
        expect(vm.$emit).to.have.been.calledWith('decrementButtonHasBeenClicked')
    })

})
