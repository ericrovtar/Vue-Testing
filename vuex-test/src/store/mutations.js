export const DATA_PROPERTIES = {
    id: {
        value: "ID",
        required: true,
        postBack: false
    }
}

export const state = {
    count: 0
};

export const mutations = {
    increment(state) {
        state.count++;
    }
}