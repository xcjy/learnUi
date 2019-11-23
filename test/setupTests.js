const enzyne= require('enzyme')
const Adapter= require('enzyme-adapter-react-16')
enzyne.configure({ adapter: new Adapter() })