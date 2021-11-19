import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import {createSerializer} from 'enzyme-to-json';
// import '@testing-library/jest-dom/extend-expect';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer( createSerializer({ mode: 'deep' }) )
