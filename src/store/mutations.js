
export default{
    changeCity(state, city) {
        state.city = city;
        localStorage.setItem('city', city);
        try {
          localStorage.setItem('city', city);
        } catch (e) {
  
        }
      }
}