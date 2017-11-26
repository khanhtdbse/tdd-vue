
import Vue from 'vue'
import ButtonComponent from '@/components/ButtonComponent'

describe('ButtonComponent.vue', () => {
    let vm

    beforeEach(() => {
        const Constructor = Vue.extend(ButtonComponent)
        vm = new Constructor().$mount()
    })

    it('should have to correct button text', () => {
        expect(vm.$data.text.increment_text)
        .to.equal('Click to increment counter')
        expect(vm.$data.text.decrement_text)
        .to.equal('Click to decrement counter')
    })

    it('should emit event when click button', () => {
        sinon.spy(vm, '$emit')

//        vm.onIncrementButtonClick()
        vm.$refs.incrementButton.click()
        expect(vm.$emit).to.have.been.calledWith('incrementButtonHasBeenClicked')

//       vm.onDecrementButtonClick()
        vm.$refs.decrementButton.click()
        expect(vm.$emit).to.have.been.calledWith('decrementButtonHasBeenClicked')
    })

})
