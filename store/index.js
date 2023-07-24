
export const state = () => ({
	tasks: [],
	selected: [],
	done: 0,
	counter: 0,
})

export const mutations = {
	LOAD_STORE() {
		if (localStorage.getItem('store')) {
			try {
				this.replaceState(JSON.parse(localStorage.getItem('store')));
			}
			catch (e) {
				console.log('Could not initialize store', e);
			}
		}
	},
	ADD_TASK(state, task) {
		state.tasks = [...state.tasks, { content: task, done: false }];
		state.counter += 1;
		localStorage.setItem('store', JSON.stringify(state));
	},
	REMOVE_TASK(state, task) {
		state.tasks.splice(state.tasks.indexOf(task), 1);
		state.counter < 0 ? state.counter = 0 : state.counter -= 1;
		state.done < 0 ? state.done = 0 : state.done -= 1;
		localStorage.setItem('store', JSON.stringify(state));
	},

	TOGGLE_TASK(state, task) {

		task.done = !task.done;
		task.done ? (state.done += 1, state.counter -= 1) : (state.done -= 1, state.counter += 1);
		localStorage.setItem('store', JSON.stringify(state));

	}

}