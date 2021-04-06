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

  var variable = 'Che bella giornata';

  initVue(variable)

}

$(init);
