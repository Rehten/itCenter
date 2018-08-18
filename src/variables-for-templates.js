//Переменные для всех блоков - можно сказать, что это модель
//настройка домена в зависимости от режима сборк(продакшн или дев)
let url;
const isProd = () => process.env.NODE_ENV === 'production'
if(isProd()) {
    //отрефачить на ит-центр.ком.уа
    url = './../../../../../../../';
} else {
    url = '.';
}

module.exports =  {
    url: url
}