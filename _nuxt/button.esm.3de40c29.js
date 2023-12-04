import{W as y,aa as u,o as l,c as d,a1 as p,y as r,d as k,t as m,a0 as z,q as c,s as w,v as C,z as b,x as g,A as f,a as O}from"./entry.323330fb.js";import{s as v}from"./basecomponent.esm.2d4f1dfa.js";import{s as N}from"./index.esm.0779d2e7.js";var T=`
@layer primevue {
    .p-badge {
        display: inline-block;
        border-radius: 10px;
        text-align: center;
        padding: 0 .5rem;
    }

    .p-overlay-badge {
        position: relative;
    }

    .p-overlay-badge .p-badge {
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(50%,-50%);
        transform-origin: 100% 0;
        margin: 0;
    }

    .p-badge-dot {
        width: .5rem;
        min-width: .5rem;
        height: .5rem;
        border-radius: 50%;
        padding: 0;
    }

    .p-badge-no-gutter {
        padding: 0;
        border-radius: 50%;
    }
}
`,A={root:function(n){var t=n.props,a=n.instance;return["p-badge p-component",{"p-badge-no-gutter":u.isNotEmpty(t.value)&&String(t.value).length===1,"p-badge-dot":u.isEmpty(t.value)&&!a.$slots.default,"p-badge-lg":t.size==="large","p-badge-xl":t.size==="xlarge","p-badge-info":t.severity==="info","p-badge-success":t.severity==="success","p-badge-warning":t.severity==="warning","p-badge-danger":t.severity==="danger"}]}},E=y.extend({name:"badge",css:T,classes:A}),j={name:"BaseBadge",extends:v,props:{value:{type:[String,Number],default:null},severity:{type:String,default:null},size:{type:String,default:null}},style:E,provide:function(){return{$parentInstance:this}}},h={name:"Badge",extends:j};function D(e,n,t,a,S,s){return l(),d("span",r({class:e.cx("root")},e.ptm("root"),{"data-pc-name":"badge"}),[p(e.$slots,"default",{},function(){return[k(m(e.value),1)]})],16)}h.render=D;function i(e){"@babel/helpers - typeof";return i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(n){return typeof n}:function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},i(e)}function o(e,n,t){return n=L(n),n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function L(e){var n=V(e,"string");return i(n)==="symbol"?n:String(n)}function V(e,n){if(i(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==void 0){var a=t.call(e,n||"default");if(i(a)!=="object")return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return(n==="string"?String:Number)(e)}var q={root:function(n){var t=n.instance,a=n.props;return["p-button p-component",o(o(o(o(o(o(o(o({"p-button-icon-only":t.hasIcon&&!a.label&&!a.badge,"p-button-vertical":(a.iconPos==="top"||a.iconPos==="bottom")&&a.label,"p-disabled":t.$attrs.disabled||t.$attrs.disabled===""||a.loading,"p-button-loading":a.loading,"p-button-loading-label-only":a.loading&&!t.hasIcon&&a.label,"p-button-link":a.link},"p-button-".concat(a.severity),a.severity),"p-button-raised",a.raised),"p-button-rounded",a.rounded),"p-button-text",a.text),"p-button-outlined",a.outlined),"p-button-sm",a.size==="small"),"p-button-lg",a.size==="large"),"p-button-plain",a.plain)]},loadingIcon:"p-button-loading-icon pi-spin",icon:function(n){var t=n.props;return["p-button-icon",{"p-button-icon-left":t.iconPos==="left"&&t.label,"p-button-icon-right":t.iconPos==="right"&&t.label,"p-button-icon-top":t.iconPos==="top"&&t.label,"p-button-icon-bottom":t.iconPos==="bottom"&&t.label}]},label:"p-button-label"},K=y.extend({name:"button",classes:q}),M={name:"BaseButton",extends:v,props:{label:{type:String,default:null},icon:{type:String,default:null},iconPos:{type:String,default:"left"},iconClass:{type:String,default:null},badge:{type:String,default:null},badgeClass:{type:String,default:null},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},link:{type:Boolean,default:!1},severity:{type:String,default:null},raised:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},text:{type:Boolean,default:!1},outlined:{type:Boolean,default:!1},size:{type:String,default:null},plain:{type:Boolean,default:!1}},style:K,provide:function(){return{$parentInstance:this}}},$={name:"Button",extends:M,methods:{getPTOptions:function(n){var t,a;return this.ptm(n,{parent:{props:(t=this.$parent)===null||t===void 0?void 0:t.$props,state:(a=this.$parent)===null||a===void 0?void 0:a.$data},context:{disabled:this.disabled}})}},computed:{disabled:function(){return this.$attrs.disabled||this.$attrs.disabled===""||this.loading},defaultAriaLabel:function(){return this.label?this.label+(this.badge?" "+this.badge:""):this.$attrs["aria-label"]},hasIcon:function(){return this.icon||this.$slots.icon}},components:{SpinnerIcon:N,Badge:h},directives:{ripple:z}},R=["aria-label","disabled","data-pc-severity"];function U(e,n,t,a,S,s){var B=c("SpinnerIcon"),I=c("Badge"),P=w("ripple");return C((l(),d("button",r({class:e.cx("root"),type:"button","aria-label":s.defaultAriaLabel,disabled:s.disabled},s.getPTOptions("root"),{"data-pc-name":"button","data-pc-severity":e.severity}),[p(e.$slots,"default",{},function(){return[e.loading?p(e.$slots,"loadingicon",{key:0,class:b([e.cx("loadingIcon"),e.cx("icon")])},function(){return[e.loadingIcon?(l(),d("span",r({key:0,class:[e.cx("loadingIcon"),e.cx("icon"),e.loadingIcon]},e.ptm("loadingIcon")),null,16)):(l(),g(B,r({key:1,class:[e.cx("loadingIcon"),e.cx("icon")],spin:""},e.ptm("loadingIcon")),null,16,["class"]))]}):p(e.$slots,"icon",{key:1,class:b([e.cx("icon")])},function(){return[e.icon?(l(),d("span",r({key:0,class:[e.cx("icon"),e.icon,e.iconClass]},e.ptm("icon")),null,16)):f("",!0)]}),O("span",r({class:e.cx("label")},e.ptm("label")),m(e.label||" "),17),e.badge?(l(),g(I,r({key:2,value:e.badge,class:e.badgeClass,unstyled:e.unstyled},e.ptm("badge")),null,16,["value","class","unstyled"])):f("",!0)]})],16,R)),[[P]])}$.render=U;const H=Object.freeze(Object.defineProperty({__proto__:null,default:$},Symbol.toStringTag,{value:"Module"}));export{h as a,H as b,$ as s};
