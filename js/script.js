function initVue(externalVar) {

  new Vue({

    el: '#app',
    data: {

      'x': externalVar,

      'imgSearch': 'CIAO.jpg'

    }

  });
}

function init() {

  const Variable = 'Che bella giornata';

  initVue(variable)

}

$(init);
