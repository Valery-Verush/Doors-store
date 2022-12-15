export const toggleIsLoading = (obj) => {
  obj.setState((state) => {
    return {
      ...state,
      isLoading: !state.isLoading,
    };
  });
};
