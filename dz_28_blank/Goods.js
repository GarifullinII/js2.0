// класс Goods. Класс содержит свойства name, amount.

class Goods {
    constructor(n, a, i, c) {
        this.name = n;
        this.amount = a;
        this.image = i;
        this.count = c;
    }

    draw(el) {
        let img = document.createElement('img');

        img.src = this.image;

        document.querySelector(el).innerHTML = `${this.name}${this.amount}${this.count}`;

        document.querySelector(el).append(img);
    }
}

let g_e = new Goods('meat ', ' 30', 'https://avatars.mds.yandex.net/get-zen_doc/1136050/pub_5c37036a5d92d200abadebd0_5c3703adea039800abdcc8b9/scale_1200', ' 2');
g_e.draw('.out-3');