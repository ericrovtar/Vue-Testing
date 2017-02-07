export const DATA_PROPERTIES = {
    id: {
        value: "ID",
        required: true,
        postBack: false
    }
}

export const dataProperties = (state) =>  {
    return DATA_PROPERTIES
};

export const count = (state) => {
    return state.count;
}

export const data = (state) => {
    return state.data;
}