let form = document.getElementById('form');

form.addEventListener('submit',function (event) {
    event.preventDefault();
    let formData = new FormData(form);
    let userName = formData.get('userName');
    let userEmail = formData.get('userEmail');
    let userCountry = formData.get('userCountry');
    let userGender = formData.get('userGender');
    let userAge = formData.get('userAgeRange');
    let userFruits = formData.get('userFavorite');
    let userSports = formData.get('userWant');
    let userRelation = formData.get('userRelation');
    let userFile = formData.get('userFile');

})