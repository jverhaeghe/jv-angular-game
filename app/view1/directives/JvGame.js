/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com on 25/03/2015.
 */
angular.module('jvAngularGame.directives',[])
    .directive('jvGame',jvGame)

jvGame.$inject = ["AssetLoader"];
function jvGame(AssetLoader){
    "use strict";
    return{
        restrict : "E",
        replace : true,
        template : "<canvas width='960' height='400'></canvas>",
        link: function (scope, element, attribute) {
            var w, h, sky, grant, ground, hill, hill2;
            var keepAspectRatio = true;
            drawGame();
            function drawGame() {
                if (scope.stage) {
                    scope.stage.autoClear = true;
                    scope.stage.removeAllChildren();
                    scope.stage.update();
                } else {
                    scope.stage = new createjs.Stage(element[0]);
                }
                w = scope.stage.canvas.width;
                h = scope.stage.canvas.height;


                AssetLoader.getLoader().addEventListener("complete", handleComplete);
                AssetLoader.loadAssets();
            }

            function handleComplete(){
                sky = new createjs.Shape();
                sky.graphics.beginBitmapFill(AssetLoader.getResult("sky")).drawRect(0, 0, w, h);
                scope.stage.addChild(sky);
                scope.stage.update(event);
            }
            function onResize()
            {
                // browser viewport size
                var w = window.innerWidth;
                var h = window.innerHeight;

                // stage dimensions
                var ow = 960; // your stage width
                var oh = 400; // your stage height

                if (keepAspectRatio)
                {
                    // keep aspect ratio
                    var scale = Math.min(w / ow, h / oh);
                    scope.stage.scaleX = scale;
                    scope.stage.scaleY = scale;

                    // adjust canvas size
                    scope.stage.canvas.width = ow * scale;
                    scope.stage.canvas.height = oh * scale;
                }
                else
                {
                    // scale to exact fit
                    scope.stage.scaleX = w / ow;
                    scope.stage.scaleY = h / oh;

                    // adjust canvas size
                    scope.stage.canvas.width = ow * stage.scaleX;
                    scope.stage.canvas.height = oh * stage.scaleY;
                }

                // update the stage
                scope.stage.update()
            }
            window.onresize = function()
            {
                onResize();
            }
        }
    }
}