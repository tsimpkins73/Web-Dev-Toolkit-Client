import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
import { shallow } from 'enzyme';
import FavoritesDiv from '../FavoritesDiv';


it.only('renders without crashing', () => {
  let articles= {}
  let favoritesTrue ={};
        shallow(<FavoritesDiv articles= {articles} favoritesTrue ={favoritesTrue} />);
      });