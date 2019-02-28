let defalutCity = '上海'

try {
  if (localStorage.city) {
    defalutCity = localStorage.getItem('city');
  }
} catch (e) {

}



export default {
  city: localStorage.getItem('city') || defalutCity

}
