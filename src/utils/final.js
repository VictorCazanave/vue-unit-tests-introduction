export default {
  /**
   * Convert date string into date object
   *
   * @param {string} value - Date value from API (YYYYMMDD)
   * @returns {Date} Date object for GUI
   */
  parseDate(value) {
    let date = null;

    if (/^\d{8}$/.test(value)) {
      const year = parseInt(value.slice(0, 4), 10);
      const month = parseInt(value.slice(4, 6), 10) - 1;
      const day = parseInt(value.slice(6, 8), 10);

      date = new Date(year, month, day);
    }

    return date;
  }
}