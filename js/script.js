function initVue(externalVar) {

  new Vue({

    el: '#app',
    data: {

      'x': externalVar,

      'imgSearch': 'img/CIAO.jpg'

    }

  });
}

function init() {

  const Variable = 'Che bella giornata';

  initVue(Variable)

}

$(init);
