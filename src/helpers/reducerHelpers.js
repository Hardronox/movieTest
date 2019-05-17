/** @format */

export const getReducerStatusSuccess = () => {
  return {
    error: null,
    isLoading: false,
    isSuccess: true,
  };
};

export const getReducerStatusPending = () => {
  return {
    error: null,
    isLoading: true,
    isSuccess: false,
  };
};

export const getReducerStatusError = errorData => {
  return {
    error: errorData,
    isLoading: false,
    isSuccess: false,
  };
};
