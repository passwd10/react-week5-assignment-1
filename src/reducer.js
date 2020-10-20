const initialState = {
  regions: [],
  categories: [],
};

const initialAction = {
  type: 'initialAction',
};

const reducers = {
  setRegions: (state, { regions }) => ({
    ...state,
    regions,
  }),
  setCategories: (state, { categories }) => ({
    ...state,
    categories,
  }),
  selectCategory: (state, payload) => {
    const newCategories = state.categories.map((category) => {
      const { id, name } = category;

      return {
        ...category,
        name: id === payload.id
          ? `${name}(v)`
          : name,
      };
    });

    return {
      ...state,
      categories: newCategories,
    };
  },
};

export default function reducer(state = initialState, action = initialAction) {
  const { type, payload } = action;

  if (!reducers[type]) {
    return state;
  }

  return reducers[type](state, payload);
}
