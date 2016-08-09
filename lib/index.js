const $ = require('jquery');
const stageConfigs = require('./stages.json');
const Game = require('./game');

$(document).ready(() => {
    const game = new Game($('.stage'), stageConfigs);

    let clicked = false;
    $('body').click(() => {
        if (!clicked) {
            setTimeout(() => {
                alert('そろそろ次の人に代わってね');
                clicked = false;
            }, 5 * 60 * 1000);
            clicked = true;
        }
    })

    $('.modal').each((index, element) => {
        const $modal = $(element);
        $modal.find('.close').click(() => {
            $modal.remove();
        });
    });
});
