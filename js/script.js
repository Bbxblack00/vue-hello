function initVue(externalVar) {

  new Vue({

    el: '#app',
    data: {

      'imgSearch': `img/Ciao.jpg`,

      'x': externalVarm

    }

  });
}

function init() {

  var variable = 'Che bella giornata';

  initVue(variable)

}

$(init);
