export const state = {
    count: 0,
    data: ''
};

export const mutations = {
    increment(state) {
        state.count++;
    },
    loadData(state, newData) {
        state.data = newData;
    }
}