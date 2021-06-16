class Formatter {
   static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, '');
  }
  static titleize(string){
    string.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());

  }
    static titleize(str) {
    const ignore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let title = ''

    let titleWords = str.split(' ').map((word, index) => {
      if(ignore.includes(word) && index != 0)
        return word;
      return this.capitalize(word);
    })

    return titleWords.join(' ');
  }
}

