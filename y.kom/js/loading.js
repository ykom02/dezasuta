// var stroke;
// stroke = new Vivus('mask', {//アニメーションをするIDの指定
//     start:'manual',//自動再生をせずスタートをマニュアルに
//     type: 'scenario-sync',// アニメーションのタイプを設定
//     duration: 5000,//アニメーションの時間設定。数字が小さくなるほど速い
//     forceRender: false,//パスが更新された場合に再レンダリングさせない
//     animTimingFunction:Vivus.EASE,//動きの加速減速設定
// }
// );

// $(function(){
//   setTimeout(function(){
//   $("#loading__logo").fadeIn();
//   },5000);
// });

// $(window).on('load',function(){
//     $("#splash").delay(6000).fadeOut('slow');//ローディング画面を6秒（6000ms）待機してからフェイドアウト
// 	$("#splash_logo").delay(6000).fadeOut('slow');//ロゴを6秒(6000ms）待機してからフェイドアウト
//         stroke.play();//SVGアニメーションの実行
// });


var stroke;
stroke = new Vivus('mask', {//アニメーションをするIDの指定
    start:'manual',//自動再生をせずスタートをマニュアルに
    type: 'scenario-sync',// アニメーションのタイプを設定
    duration: 5000,//アニメーションの時間設定。数字が小さくなるほど速い
    forceRender: false,//パスが更新された場合に再レンダリングさせない
    animTimingFunction:Vivus.EASE,//動きの加速減速設定
}),
$(function () {
  var webStorage = function () {
    if (sessionStorage.getItem('visit')) {
      $("#splash").css("display", "none");
    } else {
      sessionStorage.setItem('visit', 'true'); 
      $("#splash").delay(6000).fadeOut('slow');
    }
  }
  webStorage()
});

$(function(){
  setTimeout(function(){
  $("#loading__logo").fadeIn();
  },5000);
});

$(window).on('load',function(){
    $("#splash").delay(6000).fadeOut('slow');//ローディング画面を6秒（6000ms）待機してからフェイドアウト
	$("#splash_logo").delay(6000).fadeOut('slow');//ロゴを6秒(6000ms）待機してからフェイドアウト
        stroke.play();//SVGアニメーションの実行
});