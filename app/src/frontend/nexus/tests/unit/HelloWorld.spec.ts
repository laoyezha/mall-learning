import { render, fireEvent } from '@testing-library/vue'
// src/components/__tests__/HelloWorld.spec.ts
// import { shallowMount, MountingOptions } from '@vue/test-utils'
// // import HelloWorld from '@/components/HelloWorld.vue'
// // import HelloWorld from '../../src/components/HelloWorld.vue'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   test('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld  as any, {
//       propsData: { msg }
//     })
//     // expect(wrapper.text()).toMatch(msg)
//   })
// })

import Component from '@/components/HelloWorld.vue'
// /home/yejx/learning/mall-learning/app/src/frontend/nexus/src/components/HelloWorld.vue
test('increments value on click', async () => {
  // The render method returns a collection of utilities to query your component.
  const { getByText,getByLabelText } = render(Component)

  // getByText returns the first matching node for the provided text, and
  // throws an error if no elements match or if more than one match is found.
  getByText('count is: 0')

  const button = getByLabelText('button')

  // Dispatch a native click event to our button element.
  await fireEvent.click(button)
  await fireEvent.click(button)

  getByText('Times clicked: 2')
})