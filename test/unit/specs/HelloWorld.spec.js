import Vue from 'vue'
import HelloWorld from '@/components/HelloWorld'
import ButtonComponent from '@/components/ButtonComponent'

describe('HelloWorld.vue', () => {
    let vm

    beforeEach(() => {
        const Constructor = Vue.extend(HelloWorld)
        vm = new Constructor().$mount()
    })

    it('should render correct contents', () => {
        expect(vm.$el.querySelector('h1').textContent)
        .to.equal('Welcome to my first TDD :)')
    })

    it('should has correct init counter variable', () => {
        expect(vm.$data.count).to.equal(0)
    })

    it('should has child ButtonComponent', () => {
        expect(vm.$options.components.ButtonComponent).to.contain(ButtonComponent)
    })

    it('should increment count', () => {
        vm.increment()
        expect(vm.$data.count).to.equal(1)
    })

    it('should decrement count', () => {
        vm.decrement()
        expect(vm.$data.count).to.equal(-1)
    })

    it('should increment count when click increment button', () => {
        vm.$el.querySelector('.increment-button').click()
        expect(vm.$data.count).to.equal(1)
    })

    it('should decrement count when click decrement button', () => {
        vm.$el.querySelector('.decrement-button').click()
        expect(vm.$data.count).to.equal(-1)
    })


})
