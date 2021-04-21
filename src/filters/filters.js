import Vue from 'vue';

Vue.filter('capitalize', value => {
  if (value) {
    const firstChar = value.charAt(0).toUpperCase();
    const rest = value.substr(1);

    return firstChar + rest;
  }
  return '';
});
