var _$_c40d=["\x23\x69\x6E\x70\x75\x74\x5F\x6F\x75\x74\x70\x75\x74","\x74\x61\x5F\x65\x78\x61\x6D\x70\x6C\x65\x73","\x0A\x0A","\x5C\x24\x31","\x23\x74\x65\x78\x74\x5F\x6F\x63\x63","\x23\x62\x65\x66\x6F\x72\x65\x5F\x61\x66\x74\x65\x72","\x62\x65\x66\x6F\x72\x65","\x28","\x29","\x67","\x0A\x24\x31","\x69\x6E\x73\x74\x65\x61\x64","\x0A","\x61\x66\x74\x65\x72","\x24\x31\x0A","\x23\x63\x68\x61\x72\x5F\x6E\x75\x6D","\x67\x65\x74","\x23\x66\x69\x6C\x65\x5F\x75\x70\x6C\x6F\x61\x64","\x55\x54\x46\x2D\x38","\x4E\x6F\x20\x62\x6C\x6F\x62\x73\x20\x6F\x6E\x20\x49\x45\x20\x76\x65\x72\x3C\x31\x30","\x0D\x0A","\x69\x6E\x70\x75\x74\x5F\x6F\x75\x74\x70\x75\x74","\x74\x65\x78\x74\x2F\x70\x6C\x61\x69\x6E","\x6E\x75\x6C\x6C\x2E\x74\x78\x74","\x46\x69\x6C\x65\x20\x6E\x61\x6D\x65\x3A","\x4E\x65\x77\x20\x44\x6F\x63\x75\x6D\x65\x6E\x74","\x2E\x74\x78\x74","\x61","\x6E\x6F\x6E\x65","","\x63\x68\x69\x6C\x64\x57\x69\x6E\x64\x6F\x77","\x6C\x6F\x63\x61\x74\x69\x6F\x6E\x3D\x79\x65\x73\x2C\x20\x6D\x65\x6E\x75\x62\x61\x72\x3D\x79\x65\x73\x2C\x20\x74\x6F\x6F\x6C\x62\x61\x72\x3D\x79\x65\x73","\x3C\x68\x74\x6D\x6C\x3E\x3C\x68\x65\x61\x64\x3E\x3C\x2F\x68\x65\x61\x64\x3E\x3C\x62\x6F\x64\x79\x3E","\x3C\x62\x72\x3E","\x3C\x2F\x62\x6F\x64\x79\x3E\x3C\x2F\x68\x74\x6D\x6C\x3E","\x41\x42\x43\x41\x42\x43\x41\x42\x43","\x23\x73\x65\x74\x74\x69\x6E\x67\x73","\x41\x70\x70\x6C\x69\x65\x64","\x23\x61\x64\x64\x4C\x69\x6E\x65\x42\x72\x65\x61\x6B\x73","\x2E\x7B\x31\x2C","\x7D","\x63\x68\x61\x6E\x67\x65","\x2E\x63\x68\x61\x72\x61\x63\x74\x65\x72\x2D\x6E\x75\x6D\x62\x65\x72","\x2E\x74\x65\x78\x74\x2D\x6F\x63\x63\x75\x72\x65\x6E\x63\x65","\x2E\x74\x65\x78\x74\x2D\x6F\x63\x63\x75\x72\x65\x6E\x63\x65\x2C\x20\x2E\x63\x68\x61\x72\x61\x63\x74\x65\x72\x2D\x6E\x75\x6D\x62\x65\x72","\x2E\x63\x6C\x69\x70\x62\x6F\x61\x72\x64","\x4C\x69\x6E\x65\x73\x20\x72\x65\x6D\x6F\x76\x65\x64\x3A\x20\x30","\x23\x69\x6E\x73\x74\x61\x6E\x63\x65\x73","\x23\x63\x6C\x65\x61\x72\x41\x6C\x6C\x2C\x20\x23\x65\x64\x69\x74\x5F\x64\x65\x6C\x65\x74\x65","\x23\x66\x69\x6C\x65\x5F\x6E\x65\x77","\x23\x66\x69\x6C\x65\x5F\x64\x6F\x77\x6E\x6C\x6F\x61\x64","\x23\x66\x69\x6C\x65\x5F\x70\x72\x69\x6E\x74","\x23\x65\x64\x69\x74\x5F\x75\x6E\x64\x6F","\x23\x65\x64\x69\x74\x5F\x72\x65\x64\x6F","\x23\x65\x64\x69\x74\x5F\x63\x6F\x70\x79","\x23\x65\x64\x69\x74\x5F\x73\x65\x6C\x65\x63\x74"];var area=$(_$_c40d[0]),examples=JSON.parse(localStorage.getItem(_$_c40d[1]));function AddLine(){var a=area.val().replace(/\n(?=.)/gm,_$_c40d[2]);area.val(a)}function TextOccurence(){var a=area.val(),d=$(_$_c40d[4]).val().replace(/([.*+?^=!:${}()|\[\]\/\\])/g,_$_c40d[3]),h=$(_$_c40d[5]).val();_$_c40d[6]== h?a= a.replace( new RegExp(_$_c40d[7]+ d+ _$_c40d[8],_$_c40d[9]),_$_c40d[10]):_$_c40d[11]== h?a= a.replace( new RegExp(_$_c40d[7]+ d+ _$_c40d[8],_$_c40d[9]),_$_c40d[12]):_$_c40d[13]== h&& (a= a.replace( new RegExp(_$_c40d[7]+ d+ _$_c40d[8],_$_c40d[9]),_$_c40d[14])),area.val(a)}function CharLen(){var a=area.val(),d=1* $(_$_c40d[15]).val();a= (a= (a= a.chunk(d)).join(_$_c40d[12])).replace(/\n /g,_$_c40d[12]),area.val(a)}function loadText(){var a=$(_$_c40d[17])[_$_c40d[16]](0).files[0],d= new FileReader;d.onload= function(a){var d=a.target.result;area.val(d)},d.readAsText(a,_$_c40d[18])}function saveText(a,d){var h=navigator.userAgent.match(/MSIE\s([\d.]+)/),b=navigator.userAgent.match(/Trident\/7.0/)&& navigator.userAgent.match(/rv:11/),g=navigator.userAgent.match(/Edge/g),c=h?h[1]:b?11:g?12:-1;if(h&& c< 10){console.log(_$_c40d[19])}else {d= (d= document.getElementById(_$_c40d[21]).value).replace(/\r?\n/g,_$_c40d[20]);var f= new Blob([d],{type:_$_c40d[22]});if(_$_c40d[23]!= (a= prompt(_$_c40d[24],_$_c40d[25])+ _$_c40d[26])){if(c>  -1){window.navigator.msSaveBlob(f,a)}else {var j=document.createElement(_$_c40d[27]);j.download= a,j.href= window.URL.createObjectURL(f),j.onclick= function(a){document.body.removeChild(a.target)},j.style.display= _$_c40d[28],document.body.appendChild(j),j.click()}}}}function printTextArea(){childWindow= window.open(_$_c40d[29],_$_c40d[30],_$_c40d[31]),childWindow.document.open(),childWindow.document.write(_$_c40d[32]),childWindow.document.write(document.getElementById(_$_c40d[21]).value.replace(/\n/gi,_$_c40d[33])),childWindow.document.write(_$_c40d[34]),childWindow.print(),childWindow.document.close(),childWindow.close()}1== examples&& area.val(_$_c40d[35]),$(_$_c40d[38]).click(function(){Remember();area.val().replace(/\r\n|\r|\n/gm,_$_c40d[12]);var a=$(_$_c40d[36]).val();1== a?TextOccurence():2== a?CharLen():3== a&& AddLine(),Toast(_$_c40d[37]),Remember()}),String.prototype.chunk= function(a){return void(0)=== a&& (a= 2),this.match(RegExp(_$_c40d[39]+ a+ _$_c40d[40],_$_c40d[9]))},String.prototype.wordWrap= function(a,d,h){var b,g,c,f=this.split(_$_c40d[12]);if(a> 0){for(b in f){for(c= f[b],f[b]= _$_c40d[29];c.length> a;g= h?a:(g= c.substr(0,a).match(/\S*$/)).input.length- g[0].length|| a,f[b]+= c.substr(0,g)+ ((c= c.substr(g)).length?d:_$_c40d[29])){;};f[b]+= c}};return f.join(_$_c40d[12])},$(_$_c40d[36]).on(_$_c40d[41],function(){var a=$(_$_c40d[36]).val();1== a?($(_$_c40d[42]).hide(),$(_$_c40d[43]).show()):2== a?($(_$_c40d[43]).hide(),$(_$_c40d[42]).show()):3== a&& $(_$_c40d[44]).hide()}),$(_$_c40d[45]).click(function(){Clipboard(area)}),$(_$_c40d[48]).click(function(){area.val(_$_c40d[29]),$(_$_c40d[47]).html(_$_c40d[46])}),$(_$_c40d[49]).click(function(){area.val(_$_c40d[29])}),$(_$_c40d[17]).on(_$_c40d[41],function(){loadText()}),$(_$_c40d[50]).click(function(){saveText()}),$(_$_c40d[51]).click(function(){printTextArea()}),$(_$_c40d[52]).click(function(){var a=History.undo();void(0)!== a&& area.val(a)}),$(_$_c40d[53]).click(function(){var a=History.redo();void(0)!== a&& area.val(a)}),$(_$_c40d[54]).click(function(){Clipboard(area)}),$(_$_c40d[55]).click(function(){area.select().focus()});var History=function(){var a=[],d=0;return {remember:function(h){a[d- 1]!== h&& (a.splice(d,10),a.push(h),a.splice(0,a.length- 10),d= a.length)},undo:function(){if(d> 1){return a[--d- 1]}},redo:function(){if(d< a.length){return a[d++]}}}}();function Remember(){var a=area.val();History.remember(a)}Remember()