import { shallowMount } from '@vue/test-utils';
import API from '@/api'
import CounterComponent from '@/components/CounterComponent'

describe('CounterComponent', () => {
  // Mock API
  API.updateCount = jest.fn();
  API.getCount = jest.fn().mockImplementation(() => Promise.resolve(2));

  // Mount component
  const wrapper = shallowMount(CounterComponent, {
    // Props values
    propsData: {
      title: 'My title'
    },
  });

  // HTMLElement that contains the counter value
  const countElt = wrapper.find('span').element;

  describe('Display', () => {

    // Input: API data
    // Output: HTML
    it('displays correct initial counter value from API', () => {
      // this.count is a number but HTMLElement.textContent is a string
      // TIP: We could also use a variable to avoid to duplicate the counter value
      expect(countElt.textContent).toEqual('2');
    });

    // Input: Props
    // Output: HTML
    it('displays correct title from parent component', () => {
      // HTMLElement that contains the title value
      // TIP: No need to declare titleElt outside because it is used only in this test
      const titleElt = wrapper.find('h2').element;

      expect(titleElt.textContent).toEqual('My title');
    });
  });

  describe('Behaviour', () => {
    // Wrappers of Increment and Save buttons
    // TIP: Use unique identifiers (id, class, data attribute...) to make tests more stable
    const incrementBtn = wrapper.findAll('button').at(0);
    const saveBtn = wrapper.findAll('button').at(1);

    // Input: User action
    // Output: HTML
    it('increments counter value when clicking on Increment button', () => {
      // Trigger click event on Increment button
      incrementBtn.trigger('click')

      expect(countElt.textContent).toEqual('3');

      // TIP: We could also test the count variable
      // wrapper.vm == this
      // expect(wrapper.vm.count).toEqual(3);
    });

    // Input: User action
    // Output: Event
    it('emits change event with new counter value when clicking on Increment button', () => {
      // Trigger click event on Increment button
      incrementBtn.trigger('click')

      // wrapper.emitted() == { change: [[3], [4]] }
      expect(wrapper.emitted().change[1][0]).toEqual(4);

      // TIP: There are many other ways to test it (https://vue-test-utils.vuejs.org/api/wrapper/#emitted)
      // Assert event has been emitted
      // expect(wrapper.emitted().change).toBeTruthy();
      // Assert event count
      // expect(wrapper.emitted().change).toHaveLength(2);
      // Use another syntax 
      // expect(wrapper.emitted('change')[1]).toEqual([4]);
    });

    // Input: User action
    // Output: API request
    it('calls API to save new counter value when clicking on Save button', () => {
      // Trigger click event on Save button
      saveBtn.trigger('click')

      expect(API.updateCount).toHaveBeenCalledWith(4);

      // TIP: If the API method has no param, we can use
      // expect(API.updateCount).toHaveBeenCalled();
    });

    // Input: User action
    // Output: Event
    it('emits save event with new counter value when clicking on Save button', () => {
      // TIP: No need to click on Save button again because the event has already been emitted in previous test
      // wrapper.emitted() == { change: [[3], [4]], save: [[4]] }
      expect(wrapper.emitted().save[0][0]).toEqual(4);
    });

  });

  // TIP: Sometimes it's better/easier to reinitialize the component before each test
  /*
  let wrapper = null;
  let countElt = null;

  beforeEach(() => {
    wrapper = shallowMount(CounterComponent, {
      // Props values
      propsData: {
        title: 'My title'
      },
    });
    countElt = wrapper.find('span').element;
  });
  */
});





