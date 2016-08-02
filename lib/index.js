const $ = require('jquery');
const stageConfigs = require('./stages.json');
const Game = require('./game');

$(document).ready(() => {
    for (var i = 0; i < stageConfigs.length; i++) {
      const statement = stageConfigs[i].statement;
      const quizNumber = i+1;
      const $quizLink = $('<div/>', {
        'class': 'quiz-link',
        attr: {
          'stageId': i,
          'quizNumber': quizNumber,
        }
      });
      $quizLink.html('Q'+quizNumber+' '+statement);
      $('.quiz-list').append($quizLink);
    }
    const game = new Game(stageConfigs);
});
