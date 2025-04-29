export const cardStyles = {
  desktop: {
    width: 1440,
    paddingTop: 170,
    paddingBottom: 104,

    marginLeft: 73,

    gap: 19,

    header: {
      width: 431,
      height: 135,
    },

    selectInterval: {
      size: 530,
      marginTop: 45,
      marginBottom: 40,

      transitionDuration: 1,
    },

    pagination: {
      // Calculate pagination height to make Header + PaginationWrapper equal to SelectIntervalWrapper
      height: 530 + 45 + 40 - 135,
    },
  },

  mobile: {
    header: {
      width: 123,
    },
  },
};
