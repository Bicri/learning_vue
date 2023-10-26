import { mount, shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter'


describe('counter component', () => {
    // test('debe hacer match con el snapshot', () => {

    //     const wrapper = shallowMount(Counter)

    //     expect( wrapper.html() ).toMatchSnapshot()
    // })

    let wrapper;

    beforeEach( () => {
        wrapper = shallowMount( Counter )
    })


    test('Debe tener el valor por defecto Counter', () => {
        //const wrapper = shallowMount( Counter )

        expect( wrapper.find('h2').exists() ).toBeTruthy()

        const h2 = wrapper.find('h2')

        //console.log(h2.text())

        expect( h2.text() ).toBe('Contador')
    })

    test('El valor por defecto debe ser 100 en p', () => {
        //const wrapper = shallowMount( Counter )

        const pTags = wrapper.findAll('p')

        const p2 = pTags[1]

        expect( p2.text() ).toBe('100')

        const pAttribute = wrapper.find('[data-testId="counter"]')

        expect( pAttribute.text() ).toBe('100')
    })

    test('Debe incrementar el valor en 1 del contador', async() => {
        //const wrapper = shallowMount( Counter )

        const increaseBtn = wrapper.find('button')

        await increaseBtn.trigger('click')

        const value = wrapper.find('[data-testId="counter"]').text()

        expect( value ).toBe('101')
    })

    test('Debe decrementar el valor en 1 del contador', async() => {

        const decreaseBtn = wrapper.find('[data-testId="decrease"]')

        let value = wrapper.find('[data-testId="counter"]').text()

        const inicial = 100
        for( let i = 1; i < 3; i++ )
        {
            await decreaseBtn.trigger('click')
            value = wrapper.find('[data-testId="counter"]').text()
            expect( value ).toBe(`${inicial - i}`)
        }

    })

    test('Debe de establecer el valor por defecto', async() => {
        
        const { start, title } = wrapper.props()
        const start2 = wrapper.props('start')

        const value = wrapper.find('[data-testId="counter"]').text()

        expect( Number(value) ).toBe( start ) 
    })

    test('debe mostrar la prop title', () => {

        const title = 'Hola mundo'

        const wrapper = shallowMount( Counter, {
            props: {
                title: title
            }
        } )

        expect( wrapper.find('h2').text() ).toBe( title )
    })
})