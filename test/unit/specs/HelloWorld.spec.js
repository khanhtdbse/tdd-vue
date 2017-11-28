import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import ButtonComponent from '@/components/ButtonComponent'

describe('HelloWorld.vue', () => {
    let vm

    // Khoi tao bien moi khi chay test case
    beforeEach(() => {
        const Constructor = Vue.extend(HelloWorld)
        vm = new Constructor().$mount()
    })

    // Kiem tra noi dung the h1
    it('should render correct contents', () => {
        expect(vm.$el.querySelector('h1').textContent)
        .to.equal('Welcome to my first TDD :)')
    })

    // Kiem tra bien count = 0
    it('should has correct init counter variable', () => {
        expect(vm.$data.count).to.equal(0)
    })

    // Kiem tra HelloWorld component co child component
    it('should has child ButtonComponent', () => {
        expect(vm.$options.components.ButtonComponent).to.contain(ButtonComponent)
    })

    // Kiem tra ham increment
    it('should increment count', () => {
        vm.increment()
        expect(vm.$data.count).to.equal(1)
    })

    // Kiem tra ham decrement
    it('should decrement count', () => {
        vm.decrement()
        expect(vm.$data.count).to.equal(-1)
    })

    // Kiem tra khi click vao button increment
    it('should increment count when click increment button', () => {
        vm.$el.querySelector('.increment-button').click()
        expect(vm.$data.count).to.equal(1)
    })

    // Kiem tra khi click vao button decrement
    it('should decrement count when click decrement button', () => {
        vm.$el.querySelector('.decrement-button').click()
        expect(vm.$data.count).to.equal(-1)
    })


})
