!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var i=function(t){return t&&t.__esModule?t:{default:t}}(n(1));n(3);var r=!1;function o(t,e){r=!0;var n=document.getElementById(t),o="#66CCFF #FFFF00 #9999FF #006666 #0080FF #53C5B9 #00FFCC #99FFFF #EE0000 #363636 #EE82EE".split(" "),s="",a=!0,u=!1,l=void 0;try{for(var h,f=e[Symbol.iterator]();!(a=(h=f.next()).done);a=!0){h.value;s+="<span></span>"}}catch(t){u=!0,l=t}finally{try{a||null==f.return||f.return()}finally{if(u)throw l}}n.innerHTML=s;var c=(0,i.default)(e).history;c.forEach(function(t,i){setTimeout(function(){var s=0,a=!0,u=!1,l=void 0;try{for(var h,f=t[Symbol.iterator]();!(a=(h=f.next()).done);a=!0){var p=h.value;if(n.children[s].innerText=p,p!==e[s]){var d=Math.floor(Math.random()*o.length);n.children[s].style.color=o[d]}else n.children[s].style.color="#2c3e50";s++}}catch(t){u=!0,l=t}finally{try{a||null==f.return||f.return()}finally{if(u)throw l}}++i===c.length&&(r=!1)},40*i)})}!function(t,e){!function(t,e){document.getElementById(t).addEventListener("click",function(){r||o(t,e)})}(t,e),o(t,e)}("title","Haolan Yang")},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(t){return t&&t.__esModule?t:{default:t}}(n(2));var r="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ., @#%&*?/~+-=".split(""),o=function(){var t={};return r.forEach(function(e,n){t[e]=n}),t}();function s(t){for(;t.length<6;)t="0"+t;return t}var a=function(t){var e=function(t){for(var e="",n=0,i=t.length;n<i;n++){var r=t[n],a=o[r];e+=s(Number(a).toString(2))}return e}(t),n=new i.default({geneLength:e.length,mutateProbability:.5,doneFitness:1,populationSize:10,generationsSize:400,getFitness:function(t){for(var n=0,i=0,r=t.length;i<r;i++)t[i]===e[i]&&n++;return n/e.length},onGeneration:function(t,e){var n=0,i=0;this.fitnesses.forEach(function(t,e){t>n&&(n=t,i=e)}),this.history.push(function(t){for(var e="";t.length;){var n="00"+t.substr(0,6);t=t.substr(6);var i=parseInt(n,2);i>=r.length&&(i=Math.floor(Math.random()*(r.length-1))),r[i]||console.log(i,parseInt(n,2)),e+=r[i]}return e}(e[i]))},done:function(){console.log("done!")}});return n.history=[],n.start(),n};e.default=a},function(t,e,n){"use strict";function i(t){let e="";for(let n=0;n<t;n++)e+=Math.floor(100*Math.random())%2==0?"1":"0";return e}t.exports=class{constructor(t){this.currentGeneration=0,this.populations=[],this.fitnesses=[],this.mutateProbability=t.mutateProbability||.5,this.generationsSize=t.generationsSize||100,this.populationSize=t.populationSize||100,this.doneFitness=t.doneFitness||1,this.geneLength=t.geneLength,this.getFitness=t.getFitness,this.outOfGenerationsSize=t.outOfGenerationsSize||this.outOfGenerationsSize,this.onGeneration=t.onGeneration||this.onGeneration,this.done=t.done||this.done}start(){this.initPopulation(),this.makeFitnesses(),this.select()}initPopulation(){this.currentGeneration=1,this.populations=[];for(let t=0,e=this.populationSize;t<e;t++){let t=i(this.geneLength);this.populations.push(t)}this.onGeneration(this.currentGeneration,this.populations)}select(){if(this.currentGeneration>=this.generationsSize)return this.outOfGenerationsSize(this.populations,this.fitnesses);let t=this.getMatches();if(t.length>0)return this.done(t);this.generateNextGeneration()}makeFitnesses(){this.fitnesses=[],this.totalFitness=0,this.populations.forEach((t,e)=>{let n=this.getFitness(t,this.populations);this.fitnesses[e]=n,this.totalFitness+=n})}getMatches(){let t=[];return this.populations.forEach((e,n)=>{let i=this.fitnesses[n];i>=this.doneFitness&&t.push({gene:e,fitness:i,pos:n})}),t}generateNextGeneration(){this.currentGeneration++;let t=[];for(var e=0,n=this.populations.length;e<n;e++){let e=this.rotate(),n=this.rotate(),i=this.crossOver(e,n);i=this.mutate(i),t.push(i)}this.populations=t,this.makeFitnesses(),this.onGeneration(this.currentGeneration,this.populations),this.select()}crossOver(t,e){let n=Math.floor(t.length*Math.random()),i=t.substring(0,n)+e.substring(n),r=e.substring(0,n)+t.substring(n);return this.getFitness(i)>this.getFitness(r)?i:r}mutate(t){if(Math.random()<this.mutateProbability)return t;let e=Math.floor(Math.random()*this.geneLength),n=t.split("");return n[e]=1^+t[e],n.join("")}rotate(){let t=Math.random(),e=0;for(let n=0,i=this.fitnesses.length;n<i;n++)if((e+=this.fitnesses[n])/this.totalFitness>=t)return this.populations[n]}done(){}onGeneration(){}outOfGenerationsSize(){}}},function(t,e){}]);