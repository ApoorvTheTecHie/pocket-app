//File Name: index.js
//Path: src/actions/
//Description: all the actions are imported and exported from here as filenames
import * as auth from './auth';
import * as favorites from './favorites';
export default {
	...auth,
	...favorites
}