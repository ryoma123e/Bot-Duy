const _0x3fb5a1=_0x4995;(function(_0x267c78,_0x2006f8){const _0x28b568=_0x4995,_0x22b82c=_0x267c78();while(!![]){try{const _0x328a47=-parseInt(_0x28b568(0x15b))/0x1+-parseInt(_0x28b568(0x15a))/0x2*(parseInt(_0x28b568(0x148))/0x3)+-parseInt(_0x28b568(0x13f))/0x4+-parseInt(_0x28b568(0x19f))/0x5*(parseInt(_0x28b568(0x146))/0x6)+-parseInt(_0x28b568(0x180))/0x7*(parseInt(_0x28b568(0x13a))/0x8)+-parseInt(_0x28b568(0x174))/0x9*(-parseInt(_0x28b568(0x159))/0xa)+parseInt(_0x28b568(0x14f))/0xb;if(_0x328a47===_0x2006f8)break;else _0x22b82c['push'](_0x22b82c['shift']());}catch(_0x575f03){_0x22b82c['push'](_0x22b82c['shift']());}}}(_0x3f96,0xefd67));const {readdirSync,readFileSync,writeFileSync,existsSync,unlinkSync,rm}=require('fs-extra'),{join,resolve}=require(_0x3fb5a1(0x186)),{execSync}=require(_0x3fb5a1(0x191)),logger=require(_0x3fb5a1(0x1a4)),login=require(_0x3fb5a1(0x132)),listPackage=JSON[_0x3fb5a1(0x1a3)](readFileSync(_0x3fb5a1(0x179)))[_0x3fb5a1(0x157)],listbuiltinModules=require(_0x3fb5a1(0x190))[_0x3fb5a1(0x143)];global['client']=new Object({'commands':new Map(),'events':new Map(),'cooldowns':new Map(),'eventRegistered':new Array(),'handleSchedule':new Array(),'handleReaction':new Array(),'handleReply':new Array(),'mainPath':process['cwd'](),'configPath':new String()}),global[_0x3fb5a1(0x1a2)]=new Object({'threadInfo':new Map(),'threadData':new Map(),'userName':new Map(),'userBanned':new Map(),'threadBanned':new Map(),'commandBanned':new Map(),'threadAllowNSFW':new Array(),'allUserID':new Array(),'allCurrenciesID':new Array(),'allThreadID':new Array()}),global[_0x3fb5a1(0x13c)]=require(_0x3fb5a1(0x16b)),global['nodemodule']=new Object(),global[_0x3fb5a1(0x193)]=new Object(),global[_0x3fb5a1(0x173)]=new Object(),global[_0x3fb5a1(0x167)]=new Array(),global[_0x3fb5a1(0x14e)]=new Object();var configValue;try{global[_0x3fb5a1(0x171)]['configPath']=join(global[_0x3fb5a1(0x171)][_0x3fb5a1(0x16f)],_0x3fb5a1(0x16e)),configValue=require(global[_0x3fb5a1(0x171)][_0x3fb5a1(0x184)]),logger[_0x3fb5a1(0x189)](_0x3fb5a1(0x161));}catch{if(existsSync(global[_0x3fb5a1(0x171)][_0x3fb5a1(0x184)][_0x3fb5a1(0x185)](/\.json/g,'')+_0x3fb5a1(0x176)))configValue=readFileSync(global[_0x3fb5a1(0x171)][_0x3fb5a1(0x184)][_0x3fb5a1(0x185)](/\.json/g,'')+_0x3fb5a1(0x176)),configValue=JSON['parse'](configValue),logger[_0x3fb5a1(0x189)]('Found:\x20'+(global[_0x3fb5a1(0x171)]['configPath']['replace'](/\.json/g,'')+_0x3fb5a1(0x176)));else return logger[_0x3fb5a1(0x189)](_0x3fb5a1(0x15f),_0x3fb5a1(0x13b));}try{for(const key in configValue)global[_0x3fb5a1(0x193)][key]=configValue[key];logger[_0x3fb5a1(0x189)](_0x3fb5a1(0x137));}catch{return logger[_0x3fb5a1(0x189)]('Can\x27t\x20load\x20file\x20config!','error');}const {Sequelize,sequelize}=require(_0x3fb5a1(0x18f));writeFileSync(global['client'][_0x3fb5a1(0x184)]+_0x3fb5a1(0x176),JSON[_0x3fb5a1(0x175)](global[_0x3fb5a1(0x193)],null,0x4),_0x3fb5a1(0x199));const langFile=readFileSync(__dirname+'/languages/'+(global['config'][_0x3fb5a1(0x14e)]||'en')+'.lang',{'encoding':_0x3fb5a1(0x1a1)})['split'](/\r?\n|\r/),langData=langFile[_0x3fb5a1(0x18d)](_0x8efc58=>_0x8efc58[_0x3fb5a1(0x1a0)]('#')!=0x0&&_0x8efc58!='');function _0x3f96(){const _0x9a4151=['1568845GWCXTY','indexOf','utf-8','data','parse','./utils/log.js','example','J-JRt','envConfig','sieudangyeu','name','nodemodule','handleListenError','read_receipt','Config\x20Loaded!','DATABASE','loadedConfig','371408CRlUZW','error','utils','some','size','3270632HDhqFl','presence','successLoadModule','run','builtinModules','«\x20J-JRT\x20»','FCAOption','6UDXncj','hasOwnProperty','4647429aaMQEl','sequelize','ERROR','warn','/modules/events/','/modules/commands','language','47632728fmLAOn','keys','\x0a░░░░░██╗░░░░░░░░░░░██╗██████╗░████████╗\x0a░░░░░██║░░░░░░░░░░░██║██╔══██╗╚══██╔══╝\x0a░░░░░██║█████╗░░░░░██║██████╔╝░░░██║░░░\x0a██╗░░██║╚════╝██╗░░██║██╔══██╗░░░██║░░░\x0a╚█████╔╝░░░░░░╚█████╔╝██║░░██║░░░██║░░░\x0a░╚════╝░░░░░░░░╚════╝░╚═╝░░╚═╝░░░╚═╝░░░\x0a\x0a','failLoadModule','mirai','loadedPackage','/modules/events','commandDisabled','dependencies','errorFormat','16598910CQwTeb','2nEnXmu','1816508aubPUT','models','npm\x20---package-lock\x20false\x20--save\x20install','listenMqtt','config.json\x20not\x20found!','getText','Found\x20file\x20config:\x20config.json','getAppState','1.2.14','onLoad','ms\x20===','.js','moduleData','inherit','commandCategory','handleListen','./utils','successConnectDatabase','nodemodules','config.json','mainPath','notFoundLanguage','client','commands','configModule','9DqirqQ','stringify','.temp','cantInstallPackage','length','./package.json','log','endsWith','events','includes','cantOnload','set','77DysELb','DeveloperMode','finishLoadModule','object','configPath','replace','path','now','APPSTATEPATH','loader','api','timeStart','env','filter','undefined','./includes/database','module','child_process','typ','config','eventRegistered','Có\x20Ý\x20Định\x20Đánh\x20Cắp\x20Source\x20Code\x20Thì\x20Hãy\x20Từ\x20Bỏ','languages','has','Chúc\x20Các\x20Bạn\x20Một\x20Ngày\x20Tốt\x20Lành','utf8','cache','nameExist','node_modules','foundPathAppstate','slice'];_0x3f96=function(){return _0x9a4151;};return _0x3f96();}for(const item of langData){const getSeparator=item['indexOf']('='),itemKey=item[_0x3fb5a1(0x19e)](0x0,getSeparator),itemValue=item['slice'](getSeparator+0x1,item[_0x3fb5a1(0x178)]),head=itemKey[_0x3fb5a1(0x19e)](0x0,itemKey[_0x3fb5a1(0x1a0)]('.')),key=itemKey['replace'](head+'.',''),value=itemValue['replace'](/\\n/gi,'\x0a');if(typeof global[_0x3fb5a1(0x14e)][head]==_0x3fb5a1(0x18e))global['language'][head]=new Object();global[_0x3fb5a1(0x14e)][head][key]=value;}global[_0x3fb5a1(0x160)]=function(..._0x477592){const _0x23e562=_0x3fb5a1,_0x2b2f1c=global[_0x23e562(0x14e)];if(!_0x2b2f1c[_0x23e562(0x147)](_0x477592[0x0]))throw __filename+'\x20-\x20Not\x20found\x20key\x20language:\x20'+_0x477592[0x0];var _0x3924fd=_0x2b2f1c[_0x477592[0x0]][_0x477592[0x1]];for(var _0x5980d2=_0x477592['length']-0x1;_0x5980d2>0x0;_0x5980d2--){const _0x5b03ff=RegExp('%'+_0x5980d2,'g');_0x3924fd=_0x3924fd['replace'](_0x5b03ff,_0x477592[_0x5980d2+0x1]);}return _0x3924fd;};function _0x4995(_0x538323,_0x623358){const _0x3f9600=_0x3f96();return _0x4995=function(_0x499540,_0x399add){_0x499540=_0x499540-0x131;let _0x2a5f7f=_0x3f9600[_0x499540];return _0x2a5f7f;},_0x4995(_0x538323,_0x623358);}try{var appStateFile=resolve(join(global[_0x3fb5a1(0x171)]['mainPath'],global[_0x3fb5a1(0x193)][_0x3fb5a1(0x188)]||'appstate.json')),appState=require(appStateFile);logger[_0x3fb5a1(0x189)](global[_0x3fb5a1(0x160)](_0x3fb5a1(0x153),_0x3fb5a1(0x19d)));}catch{return logger[_0x3fb5a1(0x189)](global[_0x3fb5a1(0x160)](_0x3fb5a1(0x153),'notFoundPathAppstate'),_0x3fb5a1(0x13b));}function onBot({models:_0x3fcf43}){const _0x230847={};_0x230847['appState']=appState,login(_0x230847,async(_0x322c89,_0x2dd992)=>{const _0x3a453e=_0x4995;if(_0x322c89)return logger(JSON['stringify'](_0x322c89),_0x3a453e(0x14a));_0x2dd992['setOptions'](global[_0x3a453e(0x193)][_0x3a453e(0x145)]),writeFileSync(appStateFile,JSON[_0x3a453e(0x175)](_0x2dd992[_0x3a453e(0x162)](),null,'\x09')),global['config']['version']=_0x3a453e(0x163),(global[_0x3a453e(0x171)][_0x3a453e(0x18b)]=new Date()['getTime'](),(function(){const _0x121c8f=_0x3a453e,_0x36f062=readdirSync(global['client'][_0x121c8f(0x16f)]+_0x121c8f(0x14d))[_0x121c8f(0x18d)](_0x2e08ad=>_0x2e08ad[_0x121c8f(0x17b)](_0x121c8f(0x166))&&!_0x2e08ad[_0x121c8f(0x17d)](_0x121c8f(0x1a5))&&!global[_0x121c8f(0x193)][_0x121c8f(0x156)][_0x121c8f(0x17d)](_0x2e08ad));for(const _0x5b9290 of _0x36f062){try{var _0x31d96a=require(global[_0x121c8f(0x171)][_0x121c8f(0x16f)]+'/modules/commands/'+_0x5b9290);if(!_0x31d96a['config']||!_0x31d96a[_0x121c8f(0x142)]||!_0x31d96a['config'][_0x121c8f(0x169)])throw new Error(global[_0x121c8f(0x160)]('mirai',_0x121c8f(0x158)));if(global[_0x121c8f(0x171)][_0x121c8f(0x172)]['has'](_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]||''))throw new Error(global['getText'](_0x121c8f(0x153),_0x121c8f(0x19b)));if(!_0x31d96a['languages']||typeof _0x31d96a[_0x121c8f(0x196)]!=_0x121c8f(0x183)||Object[_0x121c8f(0x150)](_0x31d96a['languages'])[_0x121c8f(0x178)]==0x0)logger[_0x121c8f(0x189)](global[_0x121c8f(0x160)]('mirai',_0x121c8f(0x170),_0x31d96a['config'][_0x121c8f(0x133)]),_0x121c8f(0x14b));if(_0x31d96a['config'][_0x121c8f(0x157)]&&typeof _0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x157)]==_0x121c8f(0x183)){for(const _0x470a1a in _0x31d96a[_0x121c8f(0x193)]['dependencies']){const _0x50702b=join(__dirname,_0x121c8f(0x16d),'node_modules',_0x470a1a);try{if(!global['nodemodule'][_0x121c8f(0x147)](_0x470a1a)){if(listPackage['hasOwnProperty'](_0x470a1a)||listbuiltinModules[_0x121c8f(0x17d)](_0x470a1a))global[_0x121c8f(0x134)][_0x470a1a]=require(_0x470a1a);else global[_0x121c8f(0x134)][_0x470a1a]=require(_0x50702b);}else'';}catch{var _0x2d5d55=![],_0x5d5977;logger[_0x121c8f(0x189)](global[_0x121c8f(0x160)](_0x121c8f(0x153),'notFoundPackage',_0x470a1a,_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]),_0x121c8f(0x14b)),execSync(_0x121c8f(0x15d)+'\x20'+_0x470a1a+(_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x157)][_0x470a1a]=='*'||_0x31d96a[_0x121c8f(0x193)]['dependencies'][_0x470a1a]==''?'':'@'+_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x157)][_0x470a1a]),{'stdio':_0x121c8f(0x168),'env':process['env'],'shell':!![],'cwd':join(__dirname,_0x121c8f(0x16d))});for(let _0x7c781b=0x1;_0x7c781b<=0x3;_0x7c781b++){try{require[_0x121c8f(0x19a)]={};if(listPackage['hasOwnProperty'](_0x470a1a)||listbuiltinModules['includes'](_0x470a1a))global['nodemodule'][_0x470a1a]=require(_0x470a1a);else global[_0x121c8f(0x134)][_0x470a1a]=require(_0x50702b);_0x2d5d55=!![];break;}catch(_0x35e970){_0x5d5977=_0x35e970;}if(_0x2d5d55||!_0x5d5977)break;}if(!_0x2d5d55||_0x5d5977)throw global['getText'](_0x121c8f(0x153),'cantInstallPackage',_0x470a1a,_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)],_0x5d5977);}}logger['loader'](global[_0x121c8f(0x160)](_0x121c8f(0x153),_0x121c8f(0x154),_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]));}if(_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x131)])try{for(const _0x346226 in _0x31d96a['config'][_0x121c8f(0x131)]){if(typeof global['configModule'][_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]]==_0x121c8f(0x18e))global['configModule'][_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]]={};if(typeof global[_0x121c8f(0x193)][_0x31d96a['config']['name']]==_0x121c8f(0x18e))global[_0x121c8f(0x193)][_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]]={};if(typeof global[_0x121c8f(0x193)][_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]][_0x346226]!=='undefined')global['configModule'][_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]][_0x346226]=global[_0x121c8f(0x193)][_0x31d96a['config'][_0x121c8f(0x133)]][_0x346226];else global[_0x121c8f(0x173)][_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]][_0x346226]=_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x131)][_0x346226]||'';if(typeof global[_0x121c8f(0x193)][_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]][_0x346226]==_0x121c8f(0x18e))global[_0x121c8f(0x193)][_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]][_0x346226]=_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x131)][_0x346226]||'';}logger[_0x121c8f(0x189)](global['getText']('mirai',_0x121c8f(0x139),_0x31d96a[_0x121c8f(0x193)]['name']));}catch(_0x1635af){throw new Error(global[_0x121c8f(0x160)]('mirai',_0x121c8f(0x139),_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)],JSON[_0x121c8f(0x175)](_0x1635af)));}if(_0x31d96a['onLoad']){try{const _0x58c2b2={};_0x58c2b2[_0x121c8f(0x18a)]=_0x2dd992,_0x58c2b2['models']=_0x3fcf43,_0x31d96a[_0x121c8f(0x164)](_0x58c2b2);}catch(_0x36147e){throw new Error(global['getText'](_0x121c8f(0x153),_0x121c8f(0x17e),_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)],JSON[_0x121c8f(0x175)](_0x36147e)),_0x121c8f(0x13b));};}if(_0x31d96a['handleEvent'])global[_0x121c8f(0x171)][_0x121c8f(0x194)]['push'](_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]);global[_0x121c8f(0x171)][_0x121c8f(0x172)][_0x121c8f(0x17f)](_0x31d96a[_0x121c8f(0x193)]['name'],_0x31d96a),logger[_0x121c8f(0x189)](global[_0x121c8f(0x160)](_0x121c8f(0x153),_0x121c8f(0x141),_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)]));}catch(_0x2c6edc){logger[_0x121c8f(0x189)](global[_0x121c8f(0x160)](_0x121c8f(0x153),_0x121c8f(0x152),_0x31d96a[_0x121c8f(0x193)][_0x121c8f(0x133)],_0x2c6edc),_0x121c8f(0x13b));};}}()),(function(){const _0x12f5a7=_0x3a453e,_0x1bd70c=readdirSync(global[_0x12f5a7(0x171)][_0x12f5a7(0x16f)]+_0x12f5a7(0x155))['filter'](_0x32b458=>_0x32b458[_0x12f5a7(0x17b)](_0x12f5a7(0x166))&&!global['config']['eventDisabled'][_0x12f5a7(0x17d)](_0x32b458));for(const _0x405e91 of _0x1bd70c){try{var _0x1ee1f1=require(global[_0x12f5a7(0x171)]['mainPath']+_0x12f5a7(0x14c)+_0x405e91);if(!_0x1ee1f1[_0x12f5a7(0x193)]||!_0x1ee1f1[_0x12f5a7(0x142)])throw new Error(global[_0x12f5a7(0x160)](_0x12f5a7(0x153),_0x12f5a7(0x158)));if(global[_0x12f5a7(0x171)][_0x12f5a7(0x17c)][_0x12f5a7(0x197)](_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x133)])||'')throw new Error(global[_0x12f5a7(0x160)]('mirai',_0x12f5a7(0x19b)));if(_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x157)]&&typeof _0x1ee1f1['config']['dependencies']==_0x12f5a7(0x183)){for(const _0x4141aa in _0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x157)]){const _0x2250f0=join(__dirname,_0x12f5a7(0x16d),_0x12f5a7(0x19c),_0x4141aa);try{if(!global[_0x12f5a7(0x134)]['hasOwnProperty'](_0x4141aa)){if(listPackage['hasOwnProperty'](_0x4141aa)||listbuiltinModules[_0x12f5a7(0x17d)](_0x4141aa))global['nodemodule'][_0x4141aa]=require(_0x4141aa);else global['nodemodule'][_0x4141aa]=require(_0x2250f0);}else'';}catch{let _0x170429=![],_0x43d62a;logger['loader'](global[_0x12f5a7(0x160)](_0x12f5a7(0x153),'notFoundPackage',_0x4141aa,_0x1ee1f1['config']['name']),'warn'),execSync('npm\x20--package-lock\x20false\x20--save\x20install'+_0x4141aa+(_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x157)][_0x4141aa]=='*'||_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x157)][_0x4141aa]==''?'':'@'+_0x1ee1f1['config'][_0x12f5a7(0x157)][_0x4141aa]),{'stdio':_0x12f5a7(0x168),'env':process[_0x12f5a7(0x18c)],'shell':!![],'cwd':join(__dirname,_0x12f5a7(0x16d))});for(let _0x270bee=0x1;_0x270bee<=0x3;_0x270bee++){try{require[_0x12f5a7(0x19a)]={};if(global['nodemodule']['includes'](_0x4141aa))break;if(listPackage['hasOwnProperty'](_0x4141aa)||listbuiltinModules[_0x12f5a7(0x17d)](_0x4141aa))global[_0x12f5a7(0x134)][_0x4141aa]=require(_0x4141aa);else global[_0x12f5a7(0x134)][_0x4141aa]=require(_0x2250f0);_0x170429=!![];break;}catch(_0x581fe6){_0x43d62a=_0x581fe6;}if(_0x170429||!_0x43d62a)break;}if(!_0x170429||_0x43d62a)throw global[_0x12f5a7(0x160)](_0x12f5a7(0x153),_0x12f5a7(0x177),_0x4141aa,_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x133)]);}}logger[_0x12f5a7(0x189)](global['getText'](_0x12f5a7(0x153),_0x12f5a7(0x154),_0x1ee1f1[_0x12f5a7(0x193)]['name']));}if(_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x131)])try{for(const _0x15486e in _0x1ee1f1['config'][_0x12f5a7(0x131)]){if(typeof global['configModule'][_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x133)]]==_0x12f5a7(0x18e))global[_0x12f5a7(0x173)][_0x1ee1f1['config'][_0x12f5a7(0x133)]]={};if(typeof global[_0x12f5a7(0x193)][_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x133)]]==_0x12f5a7(0x18e))global['config'][_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x133)]]={};if(typeof global[_0x12f5a7(0x193)][_0x1ee1f1[_0x12f5a7(0x193)]['name']][_0x15486e]!=='undefined')global[_0x12f5a7(0x173)][_0x1ee1f1[_0x12f5a7(0x193)]['name']][_0x15486e]=global['config'][_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x133)]][_0x15486e];else global[_0x12f5a7(0x173)][_0x1ee1f1['config'][_0x12f5a7(0x133)]][_0x15486e]=_0x1ee1f1[_0x12f5a7(0x193)]['envConfig'][_0x15486e]||'';if(typeof global[_0x12f5a7(0x193)][_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x133)]][_0x15486e]=='undefined')global['config'][_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x133)]][_0x15486e]=_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x131)][_0x15486e]||'';}logger['loader'](global[_0x12f5a7(0x160)]('mirai',_0x12f5a7(0x139),_0x1ee1f1[_0x12f5a7(0x193)]['name']));}catch(_0x59e5d9){throw new Error(global[_0x12f5a7(0x160)](_0x12f5a7(0x153),'loadedConfig',_0x1ee1f1[_0x12f5a7(0x193)]['name'],JSON['stringify'](_0x59e5d9)));}if(_0x1ee1f1[_0x12f5a7(0x164)])try{const _0x2ca2ef={};_0x2ca2ef[_0x12f5a7(0x18a)]=_0x2dd992,_0x2ca2ef[_0x12f5a7(0x15c)]=_0x3fcf43,_0x1ee1f1[_0x12f5a7(0x164)](_0x2ca2ef);}catch(_0x3e5bde){throw new Error(global[_0x12f5a7(0x160)](_0x12f5a7(0x153),_0x12f5a7(0x17e),_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x133)],JSON[_0x12f5a7(0x175)](_0x3e5bde)),_0x12f5a7(0x13b));}global['client']['events']['set'](_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x133)],_0x1ee1f1),logger[_0x12f5a7(0x189)](global[_0x12f5a7(0x160)](_0x12f5a7(0x153),_0x12f5a7(0x141),_0x1ee1f1['config'][_0x12f5a7(0x133)]));}catch(_0x3f0af6){logger['loader'](global[_0x12f5a7(0x160)]('mirai','failLoadModule',_0x1ee1f1[_0x12f5a7(0x193)][_0x12f5a7(0x133)],_0x3f0af6),_0x12f5a7(0x13b));}}}())),logger[_0x3a453e(0x189)](global['getText'](_0x3a453e(0x153),_0x3a453e(0x182),global['client'][_0x3a453e(0x172)][_0x3a453e(0x13e)],global['client'][_0x3a453e(0x17c)][_0x3a453e(0x13e)])),logger[_0x3a453e(0x189)]('===\x20'+(Date[_0x3a453e(0x187)]()-global[_0x3a453e(0x171)]['timeStart'])+_0x3a453e(0x165)),writeFileSync(global[_0x3a453e(0x171)]['configPath'],JSON[_0x3a453e(0x175)](global[_0x3a453e(0x193)],null,0x4),_0x3a453e(0x199)),unlinkSync(global[_0x3a453e(0x171)]['configPath']+_0x3a453e(0x176));const _0x473d16={};_0x473d16['api']=_0x2dd992,_0x473d16[_0x3a453e(0x15c)]=_0x3fcf43;const _0x338cea=require('./includes/listen')(_0x473d16);function _0x3f8712(_0x35aa90,_0x4d2f61){const _0x630d58=_0x3a453e;if(_0x35aa90)return logger(global[_0x630d58(0x160)](_0x630d58(0x153),_0x630d58(0x135),JSON[_0x630d58(0x175)](_0x35aa90)),_0x630d58(0x13b));if([_0x630d58(0x140),_0x630d58(0x192),_0x630d58(0x136)][_0x630d58(0x13d)](_0x41f13e=>_0x41f13e==_0x4d2f61['type']))return;if(global[_0x630d58(0x193)][_0x630d58(0x181)]==!![])console[_0x630d58(0x17a)](_0x4d2f61);return _0x338cea(_0x4d2f61);};global[_0x3a453e(0x16a)]=_0x2dd992[_0x3a453e(0x15e)](_0x3f8712),logger(_0x3a453e(0x151),_0x3a453e(0x144)),logger(_0x3a453e(0x195),'J-JRT'),logger(_0x3a453e(0x198),'J-JRT'),logger(global['getText'](_0x3a453e(0x153),'warningSourceCode'),_0x3a453e(0x1a6));});}((async()=>{const _0xa498ac=_0x3fb5a1;try{await sequelize['authenticate']();const _0x10d3e9={};_0x10d3e9['Sequelize']=Sequelize,_0x10d3e9[_0xa498ac(0x149)]=sequelize;const _0x32f112=require('./includes/database/model')(_0x10d3e9);logger(global[_0xa498ac(0x160)]('mirai',_0xa498ac(0x16c)),'DATABASE');const _0x3951d1={};_0x3951d1[_0xa498ac(0x15c)]=_0x32f112,onBot(_0x3951d1);}catch(_0x42d002){logger(global[_0xa498ac(0x160)]('mirai',_0xa498ac(0x16c),JSON[_0xa498ac(0x175)](_0x42d002)),_0xa498ac(0x138));}})());
