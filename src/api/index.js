export default {
  getCount() {
    return Promise.resolve(3);
  },

  updateCount(count) {
    return Promise.resolve(count);
  }
}