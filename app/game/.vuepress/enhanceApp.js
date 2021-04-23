import Page from './components/Page';
import LastPage from './components/LastPage';
import Item from './components/Item';


export default ({ Vue }) => {
	Vue.component('Page', Page);
	Vue.component('LastPage', LastPage);
	Vue.component('Item', Item);
};
