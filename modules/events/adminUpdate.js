const _0x29352e=_0x3913;(function(_0x512b86,_0x5b4ef0){const _0x360b23=_0x3913,_0x1efaf6=_0x512b86();while(!![]){try{const _0x49c3b0=-parseInt(_0x360b23(0x1d4))/0x1+-parseInt(_0x360b23(0x1fd))/0x2+parseInt(_0x360b23(0x1e0))/0x3+-parseInt(_0x360b23(0x21d))/0x4*(-parseInt(_0x360b23(0x1f6))/0x5)+parseInt(_0x360b23(0x1dd))/0x6+-parseInt(_0x360b23(0x1ff))/0x7*(-parseInt(_0x360b23(0x205))/0x8)+-parseInt(_0x360b23(0x20f))/0x9*(parseInt(_0x360b23(0x224))/0xa);if(_0x49c3b0===_0x5b4ef0)break;else _0x1efaf6['push'](_0x1efaf6['shift']());}catch(_0x4fc36a){_0x1efaf6['push'](_0x1efaf6['shift']());}}}(_0x2d15,0x76159),module['exports']['config']={'name':_0x29352e(0x1ce),'eventType':[_0x29352e(0x214),_0x29352e(0x1e4),_0x29352e(0x20a),_0x29352e(0x211),'log:thread-icon',_0x29352e(0x1e7),_0x29352e(0x200),'log:magic-words','log:thread-approval-mode',_0x29352e(0x221)],'version':_0x29352e(0x1ef),'credits':_0x29352e(0x220),'description':_0x29352e(0x215),'envConfig':{'autoUnsend':!![],'sendNoti':!![],'timeToUnsend':0xa}},module[_0x29352e(0x1e5)][_0x29352e(0x21a)]=async function({event:_0x339fe9,api:_0x420f1b,Threads:_0xdd917b,Users:_0x20c7d5}){const _0x9fe390=_0x29352e,{author:_0x839130,threadID:_0x44b112,logMessageType:_0x5afc80,logMessageData:_0x371bdc}=_0x339fe9,{setData:_0x457c38,getData:_0x41baae}=_0xdd917b,_0x12d47d=require('fs');var _0x843462=__dirname+'/emoji.json';if(!_0x12d47d[_0x9fe390(0x1d1)](_0x843462))_0x12d47d[_0x9fe390(0x21e)](_0x843462,JSON[_0x9fe390(0x1f2)]({}));if(_0x839130==_0x44b112)return;try{let _0xee8f00=(await _0x41baae(_0x44b112))[_0x9fe390(0x1d9)];switch(_0x5afc80){case _0x9fe390(0x214):{if(_0x371bdc['ADMIN_EVENT']==_0x9fe390(0x217))_0xee8f00[_0x9fe390(0x1e9)][_0x9fe390(0x203)]({'id':_0x371bdc[_0x9fe390(0x1f5)]}),_0x420f1b[_0x9fe390(0x213)](_0x9fe390(0x21c)+_0x371bdc[_0x9fe390(0x1f5)]+_0x9fe390(0x1ee),_0x44b112);else _0x371bdc[_0x9fe390(0x1fc)]==_0x9fe390(0x1d0)&&(_0xee8f00[_0x9fe390(0x1e9)]=_0xee8f00['adminIDs']['filter'](_0xf7aa64=>_0xf7aa64['id']!=_0x371bdc['TARGET_ID']),_0x420f1b['sendMessage'](_0x9fe390(0x20e)+_0x371bdc['TARGET_ID'],_0x44b112));break;}case _0x9fe390(0x20a):{_0xee8f00[_0x9fe390(0x208)][_0x371bdc[_0x9fe390(0x1d3)]]=_0x371bdc[_0x9fe390(0x1f4)],_0x420f1b[_0x9fe390(0x213)](_0x9fe390(0x1ed)+(_0x371bdc[_0x9fe390(0x1f4)]['length']==0x0?_0x9fe390(0x1ec)+_0x371bdc[_0x9fe390(0x1d3)]:'FOR\x20UPDATE\x20USER\x27S\x20nicknames\x20'+_0x371bdc[_0x9fe390(0x1d3)]+'\x20WALL:\x20'+_0x371bdc[_0x9fe390(0x1f4)])+'.',_0x44b112);break;}case _0x9fe390(0x1e4):{_0xee8f00['threadName']=_0x339fe9[_0x9fe390(0x1e3)]['name']||null,_0x420f1b[_0x9fe390(0x213)](_0x9fe390(0x1ed)+(_0xee8f00[_0x9fe390(0x1cb)]?_0x9fe390(0x20b)+_0xee8f00[_0x9fe390(0x1cb)]:_0x9fe390(0x1d6))+'.',_0x44b112);break;}case _0x9fe390(0x1ea):{let _0x440b00=JSON['parse'](_0x12d47d[_0x9fe390(0x1e6)](_0x843462));_0xee8f00[_0x9fe390(0x1f0)]=_0x339fe9[_0x9fe390(0x1e3)]['thread_icon']||'👍';if(global[_0x9fe390(0x204)][this[_0x9fe390(0x1f3)][_0x9fe390(0x202)]]['sendNoti'])_0x420f1b[_0x9fe390(0x213)](_0x9fe390(0x207)+_0x339fe9['logMessageBody'][_0x9fe390(0x1eb)](_0x9fe390(0x1db),_0x9fe390(0x1d5))+_0x9fe390(0x222)+(_0x440b00[_0x44b112]||_0x9fe390(0x1e2)),_0x44b112,async(_0x52a22f,_0x181854)=>{const _0xfb50c0=_0x9fe390;_0x440b00[_0x44b112]=_0xee8f00[_0xfb50c0(0x1f0)],_0x12d47d[_0xfb50c0(0x21e)](_0x843462,JSON[_0xfb50c0(0x1f2)](_0x440b00));if(global[_0xfb50c0(0x204)][this[_0xfb50c0(0x1f3)]['name']][_0xfb50c0(0x218)])return await new Promise(_0x36c034=>setTimeout(_0x36c034,global[_0xfb50c0(0x204)][this['config'][_0xfb50c0(0x202)]]['timeToUnsend']*0x3e8)),_0x420f1b[_0xfb50c0(0x1e1)](_0x181854[_0xfb50c0(0x1c9)]);else return;});break;}case _0x9fe390(0x211):{if(_0x371bdc[_0x9fe390(0x1fa)]=='group_call_started'){const _0x4baec8=await _0x20c7d5[_0x9fe390(0x20d)](_0x371bdc[_0x9fe390(0x21b)]);_0x420f1b['sendMessage'](_0x9fe390(0x1cc)+_0x4baec8+_0x9fe390(0x1cf)+(_0x371bdc[_0x9fe390(0x219)]?_0x9fe390(0x1f1):'')+_0x9fe390(0x1d7),_0x44b112);}else{if(_0x371bdc[_0x9fe390(0x1fa)]==_0x9fe390(0x1df)){const _0x170af4=_0x371bdc[_0x9fe390(0x1f8)];let _0x3975d8=Math[_0x9fe390(0x206)](_0x170af4/0xe10),_0xb40cc1=Math[_0x9fe390(0x206)]((_0x170af4-_0x3975d8*0xe10)/0x3c),_0x48d19a=_0x170af4-_0x3975d8*0xe10-_0xb40cc1*0x3c;if(_0x3975d8<0xa)_0x3975d8='0'+_0x3975d8;if(_0xb40cc1<0xa)_0xb40cc1='0'+_0xb40cc1;if(_0x48d19a<0xa)_0x48d19a='0'+_0x48d19a;const _0x10e156=_0x3975d8+':'+_0xb40cc1+':'+_0x48d19a;_0x420f1b[_0x9fe390(0x213)]('[⚜️]\x20GROUP\x20UPDATE\x20[⚜️]\x0a»\x20'+(_0x371bdc[_0x9fe390(0x219)]?_0x9fe390(0x1f1):'')+_0x9fe390(0x1fe)+_0x10e156,_0x44b112);}else{if(_0x371bdc[_0x9fe390(0x1de)]){const _0x25faa8=await _0x20c7d5[_0x9fe390(0x20d)](_0x371bdc[_0x9fe390(0x1de)]);_0x420f1b[_0x9fe390(0x213)](_0x9fe390(0x1cc)+_0x25faa8+_0x9fe390(0x1f9)+(_0x371bdc['group_call_type']=='1'?_0x9fe390(0x1f1):'')+'CALL.\x20\x0a\x20WELCOME\x20'+_0x25faa8+'\x20on\x20the\x20call\x20❤🥳🎉',_0x44b112);}}}break;}case _0x9fe390(0x210):{return _0x420f1b[_0x9fe390(0x213)](_0x9fe390(0x21f)+_0x339fe9[_0x9fe390(0x1e3)]['magic_word']+_0x9fe390(0x1f7)+_0x339fe9[_0x9fe390(0x1e3)][_0x9fe390(0x1ca)]+'\x0a[⚜️]\x20Emoij:\x20'+(_0x339fe9['logMessageData'][_0x9fe390(0x1e8)]||_0x9fe390(0x212))+'\x0a[⚜️]\x20Total\x20'+_0x339fe9[_0x9fe390(0x1e3)][_0x9fe390(0x201)]+'\x20word\x20effects\x20added',_0x44b112);}case _0x9fe390(0x221):{var _0x1d64a=_0x339fe9[_0x9fe390(0x1e3)]['question_json'],_0x592ff5=JSON[_0x9fe390(0x1fb)](_0x1d64a);if(_0x339fe9[_0x9fe390(0x1e3)][_0x9fe390(0x1da)]==_0x9fe390(0x216))return _0x420f1b[_0x9fe390(0x213)](''+_0x339fe9[_0x9fe390(0x1d8)],_0x44b112);if(_0x339fe9[_0x9fe390(0x1e3)]['event_type']==_0x9fe390(0x1cd))return _0x420f1b[_0x9fe390(0x213)](''+_0x339fe9[_0x9fe390(0x1d8)],_0x44b112);}case _0x9fe390(0x1e7):{_0xee8f00['threadColor']=_0x339fe9[_0x9fe390(0x1e3)][_0x9fe390(0x20c)]||'🌤';if(global[_0x9fe390(0x204)][this[_0x9fe390(0x1f3)][_0x9fe390(0x202)]]['sendNoti'])_0x420f1b['sendMessage']('[⚜️]\x20UPDATE\x20GROUP\x20CODE\x20[⚜️]\x0a»\x20\x20'+_0x339fe9[_0x9fe390(0x1d8)][_0x9fe390(0x1eb)](_0x9fe390(0x223),_0x9fe390(0x1dc)),_0x44b112,async(_0x2c6d14,_0x1df238)=>{const _0x57e41f=_0x9fe390;if(global[_0x57e41f(0x204)][this['config'][_0x57e41f(0x202)]][_0x57e41f(0x218)])return await new Promise(_0x3e0c0a=>setTimeout(_0x3e0c0a,global[_0x57e41f(0x204)][this[_0x57e41f(0x1f3)][_0x57e41f(0x202)]][_0x57e41f(0x1d2)]*0x3e8)),_0x420f1b[_0x57e41f(0x1e1)](_0x1df238[_0x57e41f(0x1c9)]);else return;});break;}}await _0x457c38(_0x44b112,{'threadInfo':_0xee8f00});}catch(_0x380a64){console[_0x9fe390(0x209)](_0x380a64);};});function _0x3913(_0x4f5146,_0x4727d6){const _0x2d15c2=_0x2d15();return _0x3913=function(_0x39132a,_0x6a48a6){_0x39132a=_0x39132a-0x1c9;let _0x22531b=_0x2d15c2[_0x39132a];return _0x22531b;},_0x3913(_0x4f5146,_0x4727d6);}function _0x2d15(){const _0x471174=['\x20STARTED\x20A\x20','remove_admin','existsSync','timeToUnsend','participant_id','662269xTOrtq','icon','TO\x20REMOVE\x20GROUP\x20NAME','CALL\x0a\x20PLZ\x20JOIN\x20EVERYONE','logMessageBody','threadInfo','event_type','emoticon','color','2967390ZwEhjG','joining_user','group_call_ended','870627apBbVa','unsendMessage','unclear','logMessageData','log:thread-name','exports','readFileSync','log:thread-color','emoji_effect','adminIDs','log:thread-icon','replace','TO\x20REMOVE\x20USER\x27S\x20NAME\x20','[⚜️]\x20UPDATE\x20GROUP\x20CODE\x20[⚜️]\x0a»\x20','\x20BECOME\x20A\x20GROUP\x20ADMINISTRATOR\x20\x0a\x20CONGRATULATIONS','1.0.1','threadIcon','VIDEO\x20','stringify','config','nickname','TARGET_ID','10ynfmxB','\x20added\x20effects:\x20','call_duration','\x20JOINED\x20THE\x20','event','parse','ADMIN_EVENT','184660kKphrU','CALL\x20HAS\x20ENDED.\x0a»\x20CALL\x20DURATION:\x20','2120797iFbSMJ','log:link-status','new_magic_word_count','name','push','configModule','8AefSSg','floor','[⚜️]\x20UPDATE\x20GROUP\x20CODE\x20[⚜️]\x0a»\x20\x20','nicknames','log','log:user-nickname','FOR\x20UPDATE\x20GROUP\x20NAME\x20OF\x20SMALL:\x20','thread_color','getNameUser','[⚜️]\x20UPDATE\x20GROUP\x20CODE\x20[⚜️]\x0a»\x20TO\x20REMOVE\x20THE\x20USER\x27S\x20ADMINISTRATION\x20STATEMENT\x20','6223851DBEIKB','log:magic-words','log:thread-call','No\x20emoji','sendMessage','log:thread-admins','Update\x20group\x20information\x20quickly','question_creation','add_admin','autoUnsend','video','run','caller_id','[⚜️]\x20UPDATE\x20GROUP\x20CODE\x20[⚜️]\x0a»\x20USER\x20UPDATE\x20','1684132pharSD','writeFileSync','[⚜️]\x20Theme\x20','SHANKAR\x20SUMAN','log:thread-poll','\x0a»\x20Original\x20Icons:\x20','Topic','10QIYJil','messageID','theme_name','threadName','[⚜️]\x20GROUP\x20UPDATE\x20[⚜️]\x0a»\x20','update_vote','adminUpdate'];_0x2d15=function(){return _0x471174;};return _0x2d15();}
