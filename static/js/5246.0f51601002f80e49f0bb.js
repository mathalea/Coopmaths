(self.webpackChunkmathalea=self.webpackChunkmathalea||[]).push([[5246,6969],{72736:(A,e,t)=>{"use strict";t.r(e),t.d(e,{titre:()=>Q,default:()=>a});var i=t(66969),n=t(55339),B=t(48382);const Q="Déterminer un angle grâce à la trigonométrie";function a(){i.default.call(this),this.titre=Q,this.consigne="",this.nbQuestions=1,this.nbQuestionsModifiable=!1,this.nbCols=1,this.nbColsCorr=1,this.sup=1,sortieHtml?this.spacingCorr=3:this.spacingCorr=1.5,this.listePackages="tkz-euclide",this.typeExercice="MG32",this.nouvelleVersion=function(A){this.dimensionsDivMg32=[700,500],this.listeQuestions=[],this.listeCorrections=[];const e=(0,n.nSR)(11,25),t=(0,n.Gag)(e),i=(0,n.nSR)(11,25,[e]),Q=(0,n.Gag)(i),a=(0,n.nSR)(11,25,[e,i]),l=(0,n.Gag)(a);let $,s,w;1==this.sup&&(w=(0,n.nSR)(1,2)),2==this.sup&&(w=(0,n.nSR)(1,6,[2]));const c=(0,n.q$q)([t+Q+l,t+l+Q,Q+t+l,Q+l+t,l+t+Q,l+Q+t]),r=Math.round(10*(5*Math.random()+1))/10,E=Math.round(10*(5*Math.random()+1))/10;$=Math.round((0,B.x_)(Math.atan(E/r))),s=90-$;const g=Math.random()*Math.PI-Math.PI/2,h=Math.round(180*g/Math.PI),o=r,b=E,d=(0,n.S1u)(r,1),D=(0,n.S1u)(E,1);let F=r/Math.cos(Math.atan(E/r));F=Math.round(10*F)/10;const m=(0,n.S1u)(F,1);let u,p=`Dans le triangle $${c}$ rectangle en $${t}$ :<br>`;if(sortieHtml){let e;e=w%2!=0?h<0?"TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMA7AAAAAAAAwCAAAAAAAAAFAAFAcLFHrhR64UBneFHrhR64#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAMtOTD#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUBWgAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAAAFgABWgDAFAAAAAAAAEAAAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAEwD#####AQAAAAAWAAFGAAAAAAAAAAAAQAgAAAAAAAAHAAAAAAoAAAAOAAAADwAAAAEAAAAAAAAAAAAAABMA#####wEAAAAAFgABRAAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAADgAAABD#####AAAAAQAJQ1JvdGF0aW9uAP####8AAAASAAAADgAAABEAAAAPAP####8AAAAAABYAAUIAQCoAAAAAAADALgAAAAAAAAcAAAAAEwAAABUAAAAPAP####8AAAAAABYAAUMAQBAAAAAAAADAOwAAAAAAAAcAAAAAFAAAABX#####AAAAAQAJQ1BvbHlnb25lAP####8AAAAAAAIAAAAEAAAAEgAAABYAAAAXAAAAEv####8AAAACABdDTWFycXVlQW5nbGVHZW9tZXRyaXF1ZQD#####AAAA#wAEAAAAAUAwAAAAAAAAAAAAFgAAABIAAAAX#####wAAAAEACENTZWdtZW50AP####8BAAD#ABAAAAEABAAAABcAAAAW#####wAAAAEAEENNYWNyb0FwcGFyaXRpb24A#####wD#AAAB#####xBAh8ij1wo9cUBHYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFQXBwQkMAAAAAAAEAAAAaAP####8AAAABABFDTWFjcm9EaXNwYXJpdGlvbgD#####AP8AAAH#####EECKaKPXCj1xQEphR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZNYXNxQkMAAAAAAAEAAAAa#####wAAAAEAC0NNYWNyb1BhdXNlAP####8A#wAAAf####8QQI1oo9cKPXFASuFHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAABAAAAGQD#####AAAA#wH#####EECIIKPXCj1xQFqwo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApNYXNxQW5nZHJ0AAAAAAABAAAAGQAAABgA#####wAAAP8B#####xBAjAij1wo9cUBa8KPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQXBwQW5nRHJ0AAAAAAABAAAAGQD#####AAAAAQARQ01hY3JvU3VpdGVNYWNyb3MA#####wAAAP8B#####xBAWMUeuFHrhUB4fCj1wo9cAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAALaHlwb3TDqW51c2UAAAAAAAsAAAAeAAAAGwAAAB0AAAAfAAAAHAAAAB0AAAAeAAAAGwAAAB0AAAAcAAAAHwAAABYA#####wAAAP8ABQAAACBAQIGJiJxJngAAAAEAAAAWAAAAFwAAAA7##########w==":"TWF0aEdyYXBoSmF2YTEuMAAAABI#AAAAAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMAUAAAAAAAAQBQAAAAAAAAFAAFAbFo9cKPXBkB0BhR64Ueu#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAI5MAAAAAFAVoAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8BAAAAABYAAVoAwBQAAAAAAABAAAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAABIA#####wEAAAAAFgABRgAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAADgAAAA8AAAABAAAAAAAAAAAAAAASAP####8BAAAAABYAAUQAAAAAAAAAAABACAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAA4AAAAQ#####wAAAAEACUNSb3RhdGlvbgD#####AAAAEgAAAA4AAAARAAAADwD#####AAAAAAAWAAFCAEAqAAAAAAAAwDgAAAAAAAAHAAAAABMAAAAVAAAADwD#####AAAAAAAWAAFDAMA3AAAAAAAAwEAAAAAAAAAHAAAAABQAAAAV#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAACAAAABAAAABIAAAAWAAAAFwAAABL#####AAAAAgAXQ01hcnF1ZUFuZ2xlR2VvbWV0cmlxdWUA#####wAAAP8ABAAAAAFAMAAAAAAAAAAAABYAAAASAAAAF#####8AAAABAAhDU2VnbWVudAD#####AQAA#wAQAAABAAQAAAAXAAAAFv####8AAAABABBDTWFjcm9BcHBhcml0aW9uAP####8A#wAAAf####8QQIfIo9cKPXFAR2FHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABUFwcEJDAAAAAAABAAAAGgD#####AAAAAQARQ01hY3JvRGlzcGFyaXRpb24A#####wAAAP8B#####xBAimij1wo9cUBKYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGTWFzcUJDAAAAAAABAAAAGv####8AAAABAAtDTWFjcm9QYXVzZQD#####AP8AAAH#####EECNaKPXCj1xQErhR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAQAAABgA#####wAAAP8B#####xBAh#Cj1wo9cUBbcKPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAKTWFzcUFuZ0RydAAAAAAAAQAAABkAAAAXAP####8AAAD#Af####8QQIw4o9cKPXFAXPCj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACUFwcEFuZ0RydAAAAAAAAQAAABkA#####wAAAAEAEUNNYWNyb1N1aXRlTWFjcm9zAP####8AAAD#Af####8QQFjFHrhR64VAeHwo9cKPXAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAC2h5cG90w6ludXNlAAAAAAALAAAAHgAAABsAAAAdAAAAHwAAABwAAAAdAAAAHgAAABsAAAAdAAAAHwAAABwAAAAVAP####8AAAD#AAUAAAAgQEHcp2T0QTQAAAABAAAAFgAAABcAAAAO##########8=":h<0?"TWF0aEdyYXBoSmF2YTEuMAAAABI+TMzNAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMA7AAAAAAAAwCAAAAAAAAAFAAFAcLFHrhR64UBneFHrhR64#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAMtOTD#####AAAAAQAMQ01vaW5zVW5haXJlAAAAAUBWgAAAAAAA#####wAAAAEAEENQb2ludERhbnNSZXBlcmUA#####wEAAAAAFgABWgDAFAAAAAAAAEAAAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAEwD#####AQAAAAAWAAFGAAAAAAAAAAAAQAgAAAAAAAAHAAAAAAoAAAAOAAAADwAAAAEAAAAAAAAAAAAAABMA#####wEAAAAAFgABRAAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAAAQAAAAAAAAAAAAAADgAAABD#####AAAAAQAJQ1JvdGF0aW9uAP####8AAAASAAAADgAAABEAAAAPAP####8AAAAAABYAAUIAQCoAAAAAAADALgAAAAAAAAcAAAAAEwAAABUAAAAPAP####8AAAAAABYAAUMAQBAAAAAAAADAOwAAAAAAAAcAAAAAFAAAABX#####AAAAAQAJQ1BvbHlnb25lAP####8AAAAAAAIAAAAEAAAAEgAAABYAAAAXAAAAEv####8AAAACABdDTWFycXVlQW5nbGVHZW9tZXRyaXF1ZQD#####AAAA#wAEAAAAAUAwAAAAAAAAAAAAFgAAABIAAAAX#####wAAAAEACENTZWdtZW50AP####8BAAD#ABAAAAEABAAAABcAAAAW#####wAAAAEAEENNYWNyb0FwcGFyaXRpb24A#####wD#AAAB#####xBAh8ij1wo9cUBHYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAFQXBwQkMAAAAAAAEAAAAaAP####8AAAABABFDTWFjcm9EaXNwYXJpdGlvbgD#####AP8AAAH#####EECKaKPXCj1xQEphR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAZNYXNxQkMAAAAAAAEAAAAa#####wAAAAEAC0NNYWNyb1BhdXNlAP####8A#wAAAf####8QQI1oo9cKPXFASuFHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABVBhdXNlAAAAAAABAAAAGQD#####AAAA#wH#####EECIIKPXCj1xQFqwo9cKPXACAAAAAAAAAAAAAAAAAQAAAAAAAAAAAApNYXNxQW5nZHJ0AAAAAAABAAAAGQAAABgA#####wAAAP8B#####xBAjAij1wo9cUBa8KPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAJQXBwQW5nRHJ0AAAAAAABAAAAGQD#####AAAAAQARQ01hY3JvU3VpdGVNYWNyb3MA#####wAAAP8B#####xBAWMUeuFHrhUB4fCj1wo9cAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAALaHlwb3TDqW51c2UAAAAAAAsAAAAeAAAAGwAAAB0AAAAfAAAAHAAAAB0AAAAeAAAAGwAAAB0AAAAcAAAAHwAAABYA#####wAAAP8AAwAAACBAQHXBUVjTVQAAAAEAAAAXAAAAFgAAAA7##########w==":"TWF0aEdyYXBoSmF2YTEuMAAAABI#AAAAAAJmcv###wEA#wEAAAAAAAAAAAYfAAADsgAAAQEAAAAAAAAAAQAAACL#####AAAAAQAKQ0NhbGNDb25zdAD#####AAJwaQAWMy4xNDE1OTI2NTM1ODk3OTMyMzg0Nv####8AAAABAApDQ29uc3RhbnRlQAkh+1RELRj#####AAAAAQAKQ1BvaW50QmFzZQD#####AAAAAAAWAAFBAMAUAAAAAAAAQBQAAAAAAAAFAAFAbFo9cKPXBkB0BhR64Ueu#####wAAAAEAFENEcm9pdGVEaXJlY3Rpb25GaXhlAP####8BAAAAABYAAAEAAQAAAAEBP#AAAAAAAAD#####AAAAAQAPQ1BvaW50TGllRHJvaXRlAP####8BAAAAAA4AAUkAwBgAAAAAAAAAAAAAAAAAAAUAAUBHq0OVgQYlAAAAAv####8AAAABAAlDRHJvaXRlQUIA#####wEAAAAAEAAAAQABAAAAAQAAAAP#####AAAAAQAWQ0Ryb2l0ZVBlcnBlbmRpY3VsYWlyZQD#####AQAAAAAWAAABAAEAAAABAAAABP####8AAAABAAlDQ2VyY2xlT0EA#####wEAAAAAAQAAAAEAAAAD#####wAAAAEAEENJbnREcm9pdGVDZXJjbGUA#####wAAAAUAAAAG#####wAAAAEAEENQb2ludExpZUJpcG9pbnQA#####wEAAAAAFgAAAQUAAQAAAAcAAAAJAP####8BAAAAAA4AAUoAwCgAAAAAAADAEAAAAAAAAAUAAgAAAAf#####AAAAAgAHQ1JlcGVyZQD#####AObm5gABAAAAAQAAAAMAAAAJAAAAAAAAAQAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAT#wAAAAAAAAAAAAAT#wAAAAAAAA#####wAAAAEACkNVbml0ZXhSZXAA#####wAEdW5pdAAAAAr#####AAAAAQALQ0hvbW90aGV0aWUA#####wAAAAH#####AAAAAQAKQ09wZXJhdGlvbgMAAAABP#AAAAAAAAD#####AAAAAQAPQ1Jlc3VsdGF0VmFsZXVyAAAAC#####8AAAABAAtDUG9pbnRJbWFnZQD#####AQAAAAAQAAJXIgEBAAAAAAMAAAAM#####wAAAAEACUNMb25ndWV1cgD#####AAAAAQAAAA3#####AAAAAQAHQ0NhbGN1bAD#####AAJ4MQABNgAAAAFAGAAAAAAAAAAAABEA#####wACeDIAATQAAAABQBAAAAAAAAAAAAARAP####8ACGFscGhhZGVnAAI5MAAAAAFAVoAAAAAAAP####8AAAABABBDUG9pbnREYW5zUmVwZXJlAP####8BAAAAABYAAVoAwBQAAAAAAABAAAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAAEAAAAAAAAAAAAAABIA#####wEAAAAAFgABRgAAAAAAAAAAAEAIAAAAAAAABwAAAAAKAAAADgAAAA8AAAABAAAAAAAAAAAAAAASAP####8BAAAAABYAAUQAAAAAAAAAAABACAAAAAAAAAcAAAAACgAAAAEAAAAAAAAAAAAAAA4AAAAQ#####wAAAAEACUNSb3RhdGlvbgD#####AAAAEgAAAA4AAAARAAAADwD#####AAAAAAAWAAFCAEAqAAAAAAAAwDgAAAAAAAAHAAAAABMAAAAVAAAADwD#####AAAAAAAWAAFDAMA3AAAAAAAAwEAAAAAAAAAHAAAAABQAAAAV#####wAAAAEACUNQb2x5Z29uZQD#####AAAAAAACAAAABAAAABIAAAAWAAAAFwAAABL#####AAAAAgAXQ01hcnF1ZUFuZ2xlR2VvbWV0cmlxdWUA#####wAAAP8ABAAAAAFAMAAAAAAAAAAAABYAAAASAAAAF#####8AAAABAAhDU2VnbWVudAD#####AQAA#wAQAAABAAQAAAAXAAAAFv####8AAAABABBDTWFjcm9BcHBhcml0aW9uAP####8A#wAAAf####8QQIfIo9cKPXFAR2FHrhR64QIAAAAAAAAAAAAAAAABAAAAAAAAAAAABUFwcEJDAAAAAAABAAAAGgD#####AAAAAQARQ01hY3JvRGlzcGFyaXRpb24A#####wAAAP8B#####xBAimij1wo9cUBKYUeuFHrhAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAGTWFzcUJDAAAAAAABAAAAGv####8AAAABAAtDTWFjcm9QYXVzZQD#####AP8AAAH#####EECNaKPXCj1xQErhR64UeuECAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAVQYXVzZQAAAAAAAQAAABgA#####wAAAP8B#####xBAh#Cj1wo9cUBbcKPXCj1wAgAAAAAAAAAAAAAAAAEAAAAAAAAAAAAKTWFzcUFuZ0RydAAAAAAAAQAAABkAAAAXAP####8AAAD#Af####8QQIw4o9cKPXFAXPCj1wo9cAIAAAAAAAAAAAAAAAABAAAAAAAAAAAACUFwcEFuZ0RydAAAAAAAAQAAABkA#####wAAAAEAEUNNYWNyb1N1aXRlTWFjcm9zAP####8AAAD#Af####8QQFjFHrhR64VAeHwo9cKPXAIAAAAAAAAAAAAAAAABAAAAAAAAAAAAC2h5cG90w6ludXNlAAAAAAALAAAAHgAAABsAAAAdAAAAHwAAABwAAAAdAAAAHgAAABsAAAAdAAAAHwAAABwAAAAVAP####8AAAD#AAMAAAAgQELJWhOPSZcAAAABAAAAFwAAABYAAAAO##########8=",u=`Dans la figure ci-dessous, le triangle $${c}$ est rectangle en $${t}$.<br>`,1==w&&(u+=`$${Q+l}=${m}$ cm<br>`,u+=`$${t+Q}=${d}$ cm<br>`,u+=`Calculer l'angle $\\widehat{${t+Q+l}}$ à 1° près.`),2==w&&(u+=`$${Q+l}=${m}$ cm<br>`,u+=`$${t+Q}=${d}$ cm<br>`,u+=`Calculer l'angle $\\widehat{${t+l+Q}}$ à 1° près.`),3==w&&(u+=`$${t+l}=${D}$ cm<br>`,u+=`$${Q+l}=${m}$ cm<br>`,u+=`Calculer l'angle $\\widehat{${t+Q+l}}$ à 1° près.`),4==w&&(u+=`$${Q+l}=${m}$ cm<br>`,u+=`$${t+Q}=${d}$ cm<br>`,u+=`Calculer l'angle $\\widehat{${t+l+Q}}$ à 1° près.`),5==w&&(u+=`$${t+l}=${D}$ cm<br>`,u+=`$${t+Q}=${d}$ cm<br>`,u+=`Calculer l'angle $\\widehat{${t+Q+l}}$ à 1° près.`),6==w&&(u+=`$${t+l}=${D}$ cm<br>`,u+=`$${t+Q}=${d}$ cm<br>`,u+=`Calculer l'angle $\\widehat{${t+l+Q}}$ à 1° près.`),this.typeExercice="MG32",this.MG32codeBase64=e,this.MG32code_pour_modifier_la_figure=`\n\t\t\tmtg32App.giveFormula2("MG32svg${A}", "x2", "${b}");\n\t\t\tmtg32App.giveFormula2("MG32svg${A}", "x1", "${o}");\n\t\t\tmtg32App.giveFormula2("MG32svg${A}", "alphadeg", "${h}");\n\t\t\tmtg32App.rename("MG32svg${A}","A","${t}");\n\t\t\tmtg32App.rename("MG32svg${A}","B","${Q}");\n\t\t\tmtg32App.rename("MG32svg${A}","C","${l}");\n\t\t\tmtg32App.calculate("MG32svg${A}");\n\t\t\tmtg32App.display("MG32svg${A}");\n\t\t\t`,u+=`<br>$\\footnotesize{\\textit{Le point \\thickspace ${t} peut être déplacé (si la figure est tronquée).}}$<br>`}else u="\\begin{minipage}{.7 \\linewidth} \t\\vspace{0cm} Sur la figure ci-contre, on a  : \\begin{itemize}",u+=`\n\t\\item Le triangle $${c}$ est rectangle en $${t}$;`,1==w&&(u+=`\n\t\\item $${Q+l}=${m}~\\text{cm}$`,u+=`\n\t\\item $${t+Q}=${d}~\\text{cm}$`,u+=`\\end{itemize} \\bigskip\n\t  Calculer l'angle $\\widehat{${t+Q+l}}$ à 1° près. \\end{minipage}`),2==w&&(u+=`\n\t\\item $${Q+l}=${m}~\\text{cm}$`,u+=`\n\t\\item $${t+Q}=${d}~\\text{cm}$`,u+=`\\end{itemize} \\bigskip\n\t  Calculer l'angle $\\widehat{${t+l+Q}}$ à 1° près. \\end{minipage}`),3==w&&(u+=`\n\t\\item $${Q+l}=${m}~\\text{cm}$`,u+=`\n\t\\item $${t+l}=${D}~\\text{cm}$`,u+=`\\end{itemize} \\bigskip\n\t  Calculer l'angle $\\widehat{${t+Q+l}}$ à 1° près. \\end{minipage}`),4==w&&(u+=`\n\t\\item $${Q+l}=${m}~\\text{cm}$`,u+=`\n\t\\item $${t+Q}=${d}~\\text{cm}$`,u+=`\\end{itemize} \\bigskip\n\t  Calculer l'angle $\\widehat{${t+l+Q}}$ à 1° près. \\end{minipage}`),5==w&&(u+=`\n\t\\item $${t+l}=${D}~\\text{cm}$`,u+=`\n\t\\item $${t+Q}=${d}~\\text{cm}$`,u+=`\\end{itemize} \\bigskip\n\t  Calculer l'angle $\\widehat{${t+Q+l}}$ à 1° près. \\end{minipage}`),6==w&&(u+=`\n\t\\item $${t+l}=${D}~\\text{cm}$`,u+=`\n\t\\item $${t+Q}=${d}~\\text{cm}$`,u+=`\\end{itemize} \\bigskip\n\t  Calculer l'angle $\\widehat{${t+l+Q}}$ à 1° près. \\end{minipage}`),u+="\\begin{minipage}{0.3 \\linewidth}",u+="\n \\begin{tikzpicture}[scale=0.7]",u+="\n\t \\tkzDefPoints{0/0/"+t+","+o+"/0/B,0/"+b+"/C}",u+="\n\t \\tkzDefPointBy[rotation= center "+t+" angle "+h+"](B) \\tkzGetPoint{"+Q+"}",u+="\n\t \\tkzDefPointBy[rotation= center "+t+" angle "+h+"](C) \\tkzGetPoint{"+l+"}",u+="\n\t \\tkzDrawPolygon("+t+","+Q+","+l+")",u+="\n\t \\tkzDefPointBy[homothety=center "+t+" ratio 0.1]("+Q+")\\tkzGetPoint{B}",u+="\n\t \\tkzDefPointBy[rotation= center "+t+" angle 90](B) \\tkzGetPoint{C}",u+="\n\t \\tkzDefPointBy[homothety=center "+t+" ratio 0.1414]("+Q+")\\tkzGetPoint{A}",u+="\n\t \\tkzDefPointBy[rotation= center "+t+" angle 45](A) \\tkzGetPoint{A}",u+="\n\t \\tkzDrawPolygon("+t+",B,A,C)",h>0?(u+="\n\t \\tkzLabelPoints[below]("+t+")",u+="\n\t \\tkzLabelPoints[above right]("+Q+")",u+="\n\t \\tkzLabelPoints[left]("+l+")"):(u+="\n\t \\tkzLabelPoints[left]("+t+")",u+="\n\t \\tkzLabelPoints[below left]("+Q+")",u+="\n\t \\tkzLabelPoints[above right]("+l+")"),u+="\n \\end{tikzpicture}",u+="\\end{minipage}";1==w&&(p+=`Le cosinus de l'angle $\\widehat{${t+Q+l}}$ est défini par :<br>`,p+=`$\\cos \\left(\\widehat{${t+Q+l}}\\right)=${(0,n.qaf)(t+Q,Q+l)}$<br>`,p+="Avec les données numériques :<br>",p+=`$\\cos\\left(\\widehat{${t+Q+l}}\\right)=${(0,n.qaf)(d,m)}$<br>`,p+=`On en déduit que $\\widehat{${t+Q+l}}=\\arccos\\left(${(0,n.qaf)(d,m)}\\right)$<br>`,p+=`Soit $\\widehat{${t+Q+l}}\\approx${$}\\degree$`),2==w&&(p+=`Le cosinus de l'angle $\\widehat{${t+Q+l}}$ est défini par :<br>`,p+=`$\\cos \\left(\\widehat{${t+Q+l}}\\right)=${(0,n.qaf)(t+Q,Q+l)}$<br>`,p+="Avec les données numériques :<br>",p+=`$\\cos\\left(\\widehat{${t+Q+l}}\\right)=${(0,n.qaf)(d,m)}$<br>`,p+=`On en déduit que $\\widehat{${t+Q+l}}=\\arccos\\left(${(0,n.qaf)(d,m)}\\right)$<br>`,p+=`Soit $\\widehat{${t+Q+l}}\\approx${$}\\degree$<br>`,p+="Or, dans un triangle rectangle les angles aigus sont complémentaires, donc :<br>",p+=`$\\widehat{${t+l+Q}}\\approx90-${$}\\approx${s}\\degree$`),3==w&&(p+=`Le sinus de l'angle $\\widehat{${t+Q+l}}$ est défini par :<br>`,p+=`$\\sin \\left(\\widehat{${t+Q+l}}\\right)=${(0,n.qaf)(t+l,Q+l)}$<br>`,p+="Avec les données numériques :<br>",p+=`$\\sin\\left(\\widehat{${t+Q+l}}\\right)=${(0,n.qaf)(D,m)}$<br>`,p+=`On en déduit que $\\widehat{${t+Q+l}}=\\arcsin\\left(${(0,n.qaf)(D,m)}\\right)$<br>`,p+=`Soit $\\widehat{${t+Q+l}}\\approx${$}\\degree$`),4==w&&(p+=`Le sinus de l'angle $\\widehat{${t+l+Q}}$ est défini par :<br>`,p+=`$\\sin \\left(\\widehat{${t+l+Q}}\\right)=${(0,n.qaf)(t+Q,Q+l)}$<br>`,p+="Avec les données numériques :<br>",p+=`$\\sin\\left(\\widehat{${t+l+Q}}\\right)=${(0,n.qaf)(d,m)}$<br>`,p+=`On en déduit que $\\widehat{${t+l+Q}}=\\arcsin\\left(${(0,n.qaf)(d,m)}\\right)$<br>`,p+=`Soit $\\widehat{${t+l+Q}}\\approx${s}\\degree$`),5==w&&(p+=`La tangente de l'angle $\\widehat{${t+Q+l}}$ est définie par :<br>`,p+=`$\\tan \\left(\\widehat{${t+Q+l}}\\right)=${(0,n.qaf)(t+l,t+Q)}$<br>`,p+="Avec les données numériques :<br>",p+=`$\\tan\\left(\\widehat{${t+Q+l}}\\right)=${(0,n.qaf)(D,d)}$<br>`,p+=`On en déduit que $\\widehat{${t+Q+l}}=\\arctan\\left(${(0,n.qaf)(D,d)}\\right)$<br>`,p+=`Soit $\\widehat{${t+Q+l}}\\approx${$}\\degree$`),6==w&&(p+=`La tangente de l'angle $\\widehat{${t+l+Q}}$ est définie par :<br>`,p+=`$\\tan \\left(\\widehat{${t+l+Q}}\\right)=${(0,n.qaf)(t+Q,t+l)}$<br>`,p+="Avec les données numériques :<br>",p+=`$\\tan\\left(\\widehat{${t+l+Q}}\\right)=${(0,n.qaf)(d,D)}$<br>`,p+=`On en déduit que $\\widehat{${t+l+Q}}=\\arctan\\left(${(0,n.qaf)(d,D)}\\right)$<br>`,p+=`Soit $\\widehat{${t+l+Q}}\\approx${s}\\degree$`),this.listeQuestions.push(u),this.listeCorrections.push(p),(0,n.FRy)(this)},this.besoinFormulaireNumerique=["Niveau de difficulté",2,"1 : Calcul de l'angle avec Acos \n 2 : Calcul de l'angle avec Acos, Asin ou Atan"]}},66969:(A,e,t)=>{"use strict";function i(){this.titre="",this.consigne="",this.consigneCorrection="",this.listeQuestions=[],this.listeCorrections=[],this.introduction="",this.contenu="",this.contenuCorrection="",this.nbQuestions=10,this.nbCols=2,this.nbColsCorr=2,this.spacing=1,this.spacingCorr=1,this.beamer=!1,this.besoinFormulaireNumerique=!1,this.besoinFormulaireTexte=!1,this.besoinFormulaireCaseACocher=!1,this.consigneModifiable=!0,this.nbQuestionsModifiable=!0,this.nbColsModifiable=!0,this.nbColsCorrModifiable=!0,this.spacingModifiable=!0,this.spacingCorrModifiable=!0,this.correctionDetailleeDisponible=!1,this.correctionDetaillee=!0,this.video="",this.boutonAide=!1,this.tailleDiaporama=50,this.pasDeVersionLatex=!1,this.qcm=!1,this.qcmDisponible=!1,this.modeQcm=!1,this.mg32Editable=!1,this.nouvelleVersion=function(A){},this.listePackages=[]}t.r(e),t.d(e,{default:()=>i})}}]);
//# sourceMappingURL=5246.0f51601002f80e49f0bb.js.map