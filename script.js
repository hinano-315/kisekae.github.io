'use strict';

PetiteVue.createApp({

    //女性の体と、元々着ている服
    url:'image/body_woman.png',
    url2:'image/knit.png',
    url3:'image/blue-skirt.png',

    //服の名前
    tops:'白いニット',
    bottoms:'デニムのスカート',

    //服の値段
    nedan1:6600,
    nedan2:5500,

    //服の値段の合計
    get goukei(){
        return this.nedan1 + this.nedan2;
    },

    // トップス
    tops01(){
        this.url2 = "image/knit.png";
        this.tops = '白いニット'
        this.nedan1 = 6600
    },
    tops02(){
        this.url2 = "image/yellow-jacket.png";
        this.tops = '黄色のジャケット'
        this.nedan1 = 7200
    },
    tops03(){
        this.url2 = "image/cardigan.png";
        this.tops = 'ライラックのカーディガン'
        this.nedan1 = 5300
    },
    tops04(){
        this.url2 = "image/cami.png";
        this.tops = 'ピンクのキャミソール'
        this.nedan1 = 4200
    },
    tops05(){
        this.url2 = "image/tunic.png";
        this.tops = 'チュニック'
        this.nedan1 = 4900
    },

    //ボトムス
    bottoms01(){
        this.url3 = "image/blue-skirt.png";
        this.bottoms = 'デニムのスカート'
        this.nedan2 = 5500
    },
    bottoms02(){
        this.url3 = "image/green-skirt.png";
        this.bottoms = '緑のスカート'
        this.nedan2 = 4400
    },
    bottoms03(){
        this.url3 = "image/white-pants.png";
        this.bottoms = '白のパンツ'
        this.nedan2 = 3500
    },

    //購入ボタンを押したとき
    buy(){
        //別ページに飛ぶプロパティをウェブサイトで参照
        //リンク：https://techacademy.jp/magazine/36488
        window.location="kaikei.html";
    }
    
}).mount();