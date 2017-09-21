import { Component, Input } from '@angular/core';
import { LoadingConfigService } from './ngx-loading.service';
import { LoadingConfig, ANIMATION_TYPES } from './ngx-loading.config';
var LoadingComponent = (function () {
    function LoadingComponent(loadingConfigService) {
        this.loadingConfigService = loadingConfigService;
        this.config = new LoadingConfig();
        this.ANIMATION_TYPES = ANIMATION_TYPES;
        this.loadingConfig = {
            animationType: '',
            backdropBackgroundColour: '',
            backdropBorderRadius: '',
            fullScreenBackdrop: false,
            primaryColour: '',
            secondaryColour: '',
            tertiaryColour: ''
        };
        this.defaultConfig = {
            animationType: ANIMATION_TYPES.threeBounce,
            backdropBackgroundColour: 'rgba(0, 0, 0, 0.3)',
            backdropBorderRadius: '0px',
            fullScreenBackdrop: false,
            primaryColour: '#ffffff',
            secondaryColour: '#ffffff',
            tertiaryColour: '#ffffff'
        };
    }
    LoadingComponent.prototype.ngOnInit = function () {
        for (var option in this.defaultConfig) {
            if (typeof this.loadingConfig[option] == "boolean") {
                this.loadingConfig[option] = this.config[option] != null ? this.config[option] : false;
                if (this.loadingConfig[option] == false) {
                    this.loadingConfig[option] = this.loadingConfigService.loadingConfig[option] != null ? this.loadingConfigService.loadingConfig[option] : this.defaultConfig[option];
                }
            }
            else {
                this.loadingConfig[option] = this.config[option] != null ? this.config[option] : '';
                if (this.loadingConfig[option] == '') {
                    this.loadingConfig[option] = this.loadingConfigService.loadingConfig[option] != null ? this.loadingConfigService.loadingConfig[option] : this.defaultConfig[option];
                }
            }
        }
        ;
    };
    LoadingComponent.prototype.getAnimationType = function (animationType) {
        var animationTypeSet;
        switch (animationType) {
            case ANIMATION_TYPES.threeBounce:
                animationTypeSet = ANIMATION_TYPES.threeBounce;
                break;
            case ANIMATION_TYPES.rectangleBounce:
                animationTypeSet = ANIMATION_TYPES.rectangleBounce;
                break;
            case ANIMATION_TYPES.rotatingPlane:
                animationTypeSet = ANIMATION_TYPES.rotatingPlane;
                break;
            case ANIMATION_TYPES.wanderingCubes:
                animationTypeSet = ANIMATION_TYPES.wanderingCubes;
                break;
            default:
                animationTypeSet = ANIMATION_TYPES.threeBounce;
        }
        return animationTypeSet;
    };
    LoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-loading',
                    template: "\n        <div *ngIf=\"show\" class=\"backdrop\" [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\" [ngStyle]=\"{'border-radius': loadingConfig?.backdropBorderRadius, 'background-color': loadingConfig?.backdropBackgroundColour}\"></div>\n        <div *ngIf=\"show\">\n            <div *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.threeBounce\" class=\"spinner-three-bounce\" [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\">\n                <div class=\"bounce1\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n                <div class=\"bounce2\" [ngStyle]=\"{'background-color': loadingConfig?.secondaryColour}\"></div>\n                <div class=\"bounce3\" [ngStyle]=\"{'background-color': loadingConfig?.tertiaryColour}\"></div>\n            </div>\n\n            <div class=\"spinner-sk-rotateplane\" *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.rotatingPlane\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\" [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\"></div>\n\n            <div class=\"spinner-rectangle-bounce\" *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.rectangleBounce\" [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\">\n                <div class=\"rect1\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n                <div class=\"rect2\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n                <div class=\"rect3\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n                <div class=\"rect4\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n                <div class=\"rect5\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n            </div>\n\n            <div class=\"spinner-wandering-cubes\" *ngIf=\"getAnimationType(loadingConfig?.animationType) === ANIMATION_TYPES.wanderingCubes\" [ngClass]=\"{'full-screen' : loadingConfig?.fullScreenBackdrop == true}\">\n                <div class=\"cube1\" [ngStyle]=\"{'background-color': loadingConfig?.primaryColour}\"></div>\n                <div class=\"cube2\" [ngStyle]=\"{'background-color': loadingConfig?.secondaryColour}\"></div>\n            </div>\n        </div>\n    ",
                    styles: [
                        "       \n            .backdrop {\n                z-index: 50;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                background-color: rgba(0, 0, 0, 0.3);\n            }\n\n            /* Three Bounce styles */\n\n            .spinner-three-bounce {\n                width: 70px;\n                text-align: center;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                height: 20px;\n                margin: auto;\n                z-index: 51;\n            }\n\n            .spinner-three-bounce > div {\n                width: 18px;\n                height: 18px;\n                background-color: #ffffff;\n\n                border-radius: 100%;\n                display: inline-block;\n                -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n                animation: sk-bouncedelay 1.4s infinite ease-in-out both;\n            }\n\n            .spinner-three-bounce .bounce1 {\n                -webkit-animation-delay: -0.32s;\n                animation-delay: -0.32s;\n            }\n\n            .spinner-three-bounce .bounce2 {\n                -webkit-animation-delay: -0.16s;\n                animation-delay: -0.16s;\n            }\n\n            @-webkit-keyframes sk-bouncedelay {\n                0%, 80%, 100% { -webkit-transform: scale(0) }\n                40% { -webkit-transform: scale(1.0) }\n            }\n\n            @keyframes sk-bouncedelay {\n                0%, 80%, 100% { \n                    -webkit-transform: scale(0);\n                    transform: scale(0);\n                } 40% { \n                    -webkit-transform: scale(1.0);\n                    transform: scale(1.0);\n                }\n            }\n\n\n\n            /* Rotate Plane styles */\n\n            .spinner-sk-rotateplane {\n                width: 40px;\n                height: 40px;\n                background-color: #ffffff;\n                text-align: center;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                z-index: 51;\n                -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;\n                animation: sk-rotateplane 1.2s infinite ease-in-out;\n            }\n\n            @-webkit-keyframes sk-rotateplane {\n                0% { -webkit-transform: perspective(120px) }\n                50% { -webkit-transform: perspective(120px) rotateY(180deg) }\n                100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }\n            }\n\n            @keyframes sk-rotateplane {\n                0% { \n                    transform: perspective(120px) rotateX(0deg) rotateY(0deg);\n                    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) \n                } 50% { \n                    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);\n                    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) \n                } 100% { \n                    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n                    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);\n                }\n            }\n\n\n\n            /* Rectangle Bounce styles*/\n\n            .spinner-rectangle-bounce {\n                width: 50px;\n                height: 40px;\n                font-size: 10px;\n                text-align: center;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                z-index: 51;\n            }\n\n            .spinner-rectangle-bounce > div {\n                background-color: #ffffff;\n                height: 100%;\n                width: 6px;\n                display: inline-block;\n                \n                -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n                animation: sk-stretchdelay 1.2s infinite ease-in-out;\n            }\n\n            .spinner-rectangle-bounce .rect2 {\n                -webkit-animation-delay: -1.1s;\n                animation-delay: -1.1s;\n            }\n\n            .spinner-rectangle-bounce .rect3 {\n                -webkit-animation-delay: -1.0s;\n                animation-delay: -1.0s;\n            }\n\n            .spinner-rectangle-bounce .rect4 {\n                -webkit-animation-delay: -0.9s;\n                animation-delay: -0.9s;\n            }\n\n            .spinner-rectangle-bounce .rect5 {\n                -webkit-animation-delay: -0.8s;\n                animation-delay: -0.8s;\n            }\n\n            @-webkit-keyframes sk-stretchdelay {\n                0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  \n                20% { -webkit-transform: scaleY(1.0) }\n            }\n\n            @keyframes sk-stretchdelay {\n                0%, 40%, 100% { \n                    transform: scaleY(0.4);\n                    -webkit-transform: scaleY(0.4);\n                }  20% { \n                    transform: scaleY(1.0);\n                    -webkit-transform: scaleY(1.0);\n                }\n            }\n\n\n\n            /* Wandering Cubes styles */\n\n            .spinner-wandering-cubes {\n                width: 60px;\n                height: 58px;\n                font-size: 10px;\n                text-align: center;\n                position: absolute;\n                top: 0;\n                left: 0;\n                right: 0;\n                bottom: 0;\n                margin: auto;\n                z-index: 51;\n            }\n\n            .cube1, .cube2 {\n                background-color: #ffffff;\n                width: 15px;\n                height: 15px;\n                position: absolute;\n                top: 0;\n                left: 0;\n                \n                -webkit-animation: sk-cubemove 1.8s infinite ease-in-out;\n                animation: sk-cubemove 1.8s infinite ease-in-out;\n            }\n\n            .cube2 {\n                -webkit-animation-delay: -0.9s;\n                animation-delay: -0.9s;\n            }\n\n            @-webkit-keyframes sk-cubemove {\n                25% { -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5) }\n                50% { -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg) }\n                75% { -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5) }\n                100% { -webkit-transform: rotate(-360deg) }\n            }\n\n            @keyframes sk-cubemove {\n                25% { \n                    transform: translateX(42px) rotate(-90deg) scale(0.5);\n                    -webkit-transform: translateX(42px) rotate(-90deg) scale(0.5);\n                } 50% { \n                    transform: translateX(42px) translateY(42px) rotate(-179deg);\n                    -webkit-transform: translateX(42px) translateY(42px) rotate(-179deg);\n                } 50.1% { \n                    transform: translateX(42px) translateY(42px) rotate(-180deg);\n                    -webkit-transform: translateX(42px) translateY(42px) rotate(-180deg);\n                } 75% { \n                    transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n                    -webkit-transform: translateX(0px) translateY(42px) rotate(-270deg) scale(0.5);\n                } 100% { \n                    transform: rotate(-360deg);\n                    -webkit-transform: rotate(-360deg);\n                }\n            }  \n            \n            .full-screen {\n                position: fixed;\n            }\n        "
                    ]
                },] },
    ];
    /** @nocollapse */
    LoadingComponent.ctorParameters = function () { return [
        { type: LoadingConfigService, },
    ]; };
    LoadingComponent.propDecorators = {
        'show': [{ type: Input },],
        'config': [{ type: Input },],
    };
    return LoadingComponent;
}());
export { LoadingComponent };
//# sourceMappingURL=ngx-loading.component.js.map