import React from 'react';
import {shallow, configure} from 'enzyme';
import {HomePageBase} from '../index';
import {HeaderBase} from '../../../components/Header';
import movies from '../../../fixtures/movies.json';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('home page test', () => {
  it('should contain the same amount of movies block as in json', () => {
    const props = {
      movies,
      getMoviesData: function () {}
    };

    const HomePage = shallow(<HomePageBase {...props} />);

    expect(HomePage.find('.movieDescription').length).toBe(movies.length);
  });
});

describe('header test', () => {
  it('should contain back button in case of param', () => {
    const props = {
      showBackButton: true,
    };

    const Header = shallow(<HeaderBase {...props} />);

    expect(Header.find('Link').length).toBe(1);
  });
});

// here you can see some of tests that I've written before

// describe('auth reducer test', () => {
//   it('login form should contain 2 inputs and button', () => {
//     const props = {
//       auth: {
//         emailError: 'error',
//       },
//     };
//
//     const login = shallow(<Login {...props} />);
//
//     // expect(login.find('Button').length).toBe(1);
//
//     // console.log(login.debug());
//
//     // login.find('TextField').simulate('change', {currentTarget: {value: 'asdf'}});
//     login.find('Button').simulate('click');
//
//     // console.log(login.find('Button'));
//
//     // expect(props.logIn).toHaveBeenCalledWith({text: 'asdf'});
//   });
//
//   it('login button should fire request', () => {
//     const props = {
//       auth: {
//         emailError: 'error',
//       },
//     };
//
//     const login = shallow(<Login {...props} />);
//
//     login.find('Button').simulate('click');
//   });
// });
//
// describe('register form test', () => {
//   it('register form should contain 2 inputs and button', () => {
//     const props = {
//       auth: {
//         emailError: 'error',
//       },
//     };
//
//     const login = shallow(<Login {...props} />);
//
//     login.find('Button').simulate('click');
//   });
//
//   it('register button should fire request', () => {
//     const props = {
//       auth: {
//         emailError: 'error',
//       },
//     };
//
//     const login = shallow(<Login {...props} />);
//
//     // expect(login.find('Button').length).toBe(1);
//
//     // console.log(login.debug());
//
//     // login.find('TextField').simulate('change', {currentTarget: {value: 'asdf'}});
//     login.find('Button').simulate('click');
//
//     // console.log(login.find('Button'));
//
//     // expect(props.logIn).toHaveBeenCalledWith({text: 'asdf'});
//   });
//
//   // it('login should contain 2 inputs', () => {
//   //   jest.spyOn(api, 'signIn').mockImplementation(() => Promise.resolve({data: 'user is logged in'}))
//   //
//   //   login.find('button').simulate('click');
//   //
//   //   expect(api.signIn).toHaveBeenCalledWith('input1val', 'input2val');
//   // })
//   //
//
//   // it('defaultAvatar text', () => {
//   //   expect(defaultAvatar.find('img').exists()).toBe(true);
//   //   expect(defaultAvatar.find('img').hasClass('asdf')).toBe(true);
//   //
//   //   // selectors
//   //   // find('div .img #asdf a[href="tabi"]') all css selectors
//   //
//   //   // find('[text="Some Title"]') props selectors except key/ref
//   //
//   //   // constructor/displayName
//   //
//   //   // find({href: 'http://asdf'}) object
//   //
//   //   // expect(defaultAvatar.find('div').text()).toBe('asdf');
//   // })
//
//   it('snapshot testing', () => {
//     // const mobileStickyFoorter = shallow(<MobileStickyFooter/>);
//     //
//     // expect(ToJson(mobileStickyFoorter)).toMatchSnapshot();
//   });
//
//   it('props testing', () => {
//     // let color = '#697379';
//     //
//     // const search = shallow(<Search color={color}/>);
//     //
//     // expect(search.props().children.props.children.props.fill).toBe(color);
//     // expect(search.find('path').props().fill).toBe(color);
//   });
//
//   // conditional rendering
//   it('props testing 2', () => {
//     // const egg = shallow(<Egg hide={false}/>);
//     //
//     // expect(egg.find('div').length).toBe(1);
//     //
//     // egg.setProps({hide: true});
//     //
//     // //first node
//     // expect(egg.get(0)).toBeNull();
//   });
//
//   // // simulate testing
//   // it('simulate testing 2', () => {
//   //
//   //   //empty state
//   //   expect(login.find('h2').text()).toBe('');
//   //
//   //   login.simulate('change', {currentTarget: 'Alex'});
//   //
//   //   expect(login.find('h2').text()).toBe('Alex');
//   //
//   // })
//   //
//   // // setState testing
//   // it('setState testing', () => {
//   //
//   //   //to check attr name
//   //   expect(login.find('button').attributeName('disabled')).toBe('true');
//   //
//   //   login.setState({disabled: false});
//   //
//   //   expect(login.find('button').attributeName('disabled')).toBe('false');
//   //
//   // })
//   //
//   // it('lifecycle testing', () => {
//   //   jest.spyOn(Login.prototype, 'componentDidMount');
//   //
//   //   const login = shallow(<Login/>);
//   //
//   //   expect(login.prototype.componentDidMount.mock.calls.length).toBe(1);
//   //
//   //   expect(login.find('button').attributeName('disabled')).toBe('false');
//   //   // check state or props change
//   //   // expect(login.find('button').attributeName('disabled')).toBe('false');
//   //
//   // })
//   //
//   //
//   // it('methods testing', () => {
//   //   const login = shallow(<Login/>);
//   //
//   //   const result = login.instance().methodName('param');
//   //
//   //   expect(result).toBe(true);
//
//   // })
// });
