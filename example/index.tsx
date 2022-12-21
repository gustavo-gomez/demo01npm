import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {RangeBar} from '../.';

const App = () => {
	return (
		<div>
			<RangeBar
				level={60}
				startPercLabel={"start"}
				endPercLabel={"end"}
				startPercentage={5}
				endPercentage={60}
				showRangeValues
				showLevelNumber
			/>
		</div>
	);
};

ReactDOM.render(<App/>, document.getElementById('root'));
