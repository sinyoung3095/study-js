const replyService = () => {
    const write = (post) => {};
    const getList = (page = 1, callback) => {
        if (callback) {
            callback();
        }
    };
    const update = (post) => {};
    const remove = (id) => {};

    return { write: write, getList: getList, update: update, remove: remove };
};
