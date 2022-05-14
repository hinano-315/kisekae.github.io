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
    },

    //↑↑↑　ここまで中間課題　↑↑↑


    //---------------------------------- ↓↓↓ ここから最終課題 ↓↓↓ ----------------------------------

    //切り替え
    show:true,

    value:10000,
    fil:10000,
    
    tableClass:'base',

    //服の情報
    clothes:[
        {name:'白いニット',type:'トップス', price:6600},
        {name:'黄色のジャケット',type:'トップス', price:7200},
        {name:'ライラックのカーディガン',type:'トップス', price:5300},
        {name:'ピンクのキャミソール',type:'トップス', price:4200},
        {name:'チュニック',type:'トップス', price:4900},
        {name:'デニムのスカート',type:'ボトムス', price:5500},
        {name:'緑のスカート',type:'ボトムス', price:4400},
        {name:'白のパンツ',type:'ボトムス', price:3500}
    ],

    //ボタンで切り替えようと思ったが無理だった
    // sentaku(){
    //     this.fil = parseInt(this.value);
    // },

    get selectclothes() {
        return this.clothes.filter(
          (cl) => cl.price <= this.value  //this.fil
        );
      },
    
    change1(){
        this.tableClass = 'big'
    },

    change2(){
        this.tableClass = 'base'
    },

    change3(){
        this.tableClass = 'small'
    }
}).mount();
