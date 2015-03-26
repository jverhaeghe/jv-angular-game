/**
 * Created by Julien Verhaeghe => jverhaeghe.dev@gmail.com on 25/03/2015.
 */

    'use strict';

    angular
        .module('jvAngularGame.services',[])
        .service('AssetLoader', AssetLoader);

    function AssetLoader() {
        var manifest = [
                {src: "sky.png", id: "sky"},

            ],
            loader = new createjs.LoadQueue(true);

        this.getResult = function (asset) {
            return loader.getResult(asset);
        };
        this.getLoader = function () {
            return loader;
        };
        this.loadAssets = function () {
            loader.loadManifest(manifest, true, "/app/view1/asset/");
        };
    }

