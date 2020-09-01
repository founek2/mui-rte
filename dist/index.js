"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var React=require("react"),React__default=_interopDefault(React),Immutable=_interopDefault(require("immutable")),classNames=_interopDefault(require("classnames")),styles$6=require("@material-ui/core/styles"),Paper=_interopDefault(require("@material-ui/core/Paper")),draftJs=require("draft-js"),FormatBoldIcon=_interopDefault(require("@material-ui/icons/FormatBold")),FormatItalicIcon=_interopDefault(require("@material-ui/icons/FormatItalic")),FormatUnderlinedIcon=_interopDefault(require("@material-ui/icons/FormatUnderlined")),StrikethroughIcon=_interopDefault(require("@material-ui/icons/StrikethroughS")),HighlightIcon=_interopDefault(require("@material-ui/icons/Highlight")),TitleIcon=_interopDefault(require("@material-ui/icons/Title")),InsertLinkIcon=_interopDefault(require("@material-ui/icons/InsertLink")),PhotoLibraryIcon=_interopDefault(require("@material-ui/icons/PhotoLibrary")),FormatListNumberedIcon=_interopDefault(require("@material-ui/icons/FormatListNumbered")),FormatListBulletedIcon=_interopDefault(require("@material-ui/icons/FormatListBulleted")),FormatQuoteIcon=_interopDefault(require("@material-ui/icons/FormatQuote")),CodeIcon=_interopDefault(require("@material-ui/icons/Code")),FormatClearIcon=_interopDefault(require("@material-ui/icons/FormatClear")),SaveIcon=_interopDefault(require("@material-ui/icons/Save")),UndoIcon=_interopDefault(require("@material-ui/icons/Undo")),RedoIcon=_interopDefault(require("@material-ui/icons/Redo")),IconButton=_interopDefault(require("@material-ui/core/IconButton")),MuiLink=_interopDefault(require("@material-ui/core/Link")),Button=_interopDefault(require("@material-ui/core/Button")),Grid=_interopDefault(require("@material-ui/core/Grid")),Popover=_interopDefault(require("@material-ui/core/Popover")),TextField=_interopDefault(require("@material-ui/core/TextField")),ButtonGroup=_interopDefault(require("@material-ui/core/ButtonGroup")),InsertPhotoIcon=_interopDefault(require("@material-ui/icons/InsertPhoto")),MovieIcon=_interopDefault(require("@material-ui/icons/Movie")),CheckIcon=_interopDefault(require("@material-ui/icons/Check")),DeleteIcon=_interopDefault(require("@material-ui/icons/DeleteOutline")),FormatAlignCenter=_interopDefault(require("@material-ui/icons/FormatAlignCenter")),FormatAlignLeft=_interopDefault(require("@material-ui/icons/FormatAlignLeft")),FormatAlignRight=_interopDefault(require("@material-ui/icons/FormatAlignRight")),List=_interopDefault(require("@material-ui/core/List")),ListItem=_interopDefault(require("@material-ui/core/ListItem")),__assign=function(){return(__assign=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},ToolbarButton=function(t){var e=t.inlineMode?"small":t.size||"medium",n=t.inlineMode?"-toolbar":"",r=(t.editorId||"mui-rte")+"-"+(t.id||t.label)+"-button"+n,o={id:r,onMouseDown:function(e){e.preventDefault(),t.onClick&&t.onClick(t.style,t.type,r,t.inlineMode)},disabled:t.disabled||!1};return t.icon?React__default.createElement(IconButton,__assign({},o,{"aria-label":t.label,color:t.active?"primary":"default",size:e}),t.icon):t.component?React__default.createElement(t.component,__assign({},o,{active:t.active||!1})):null},getSelectionInfo=function(e){var t=e.getSelection(),n=t.getStartOffset(),r=e.getCurrentContent(),o=r.getBlockForKey(t.getStartKey()),a=e.getCurrentInlineStyle(),i=o.getEntityAt(n),l="";return i&&(l=r.getEntity(i).getType()),{inlineStyle:a,blockType:o.getType(),entityType:l,linkKey:i,block:o}},removeBlockFromMap=function(e,t){var n=e.getCurrentContent(),r=draftJs.Modifier.removeRange(n,new draftJs.SelectionState({anchorKey:t.getKey(),anchorOffset:0,focusKey:t.getKey(),focusOffset:t.getLength()}),"backward"),o=r.getBlockMap().delete(t.getKey());return r.merge({blockMap:o,selectionAfter:n.getSelectionAfter()})},atomicBlockExists=function(t,e){if(e)return e.find(function(e){return"atomic"===e.type&&e.name===t&&void 0!==e.atomicComponent})},isGreaterThan=function(e,t){return!!t&&t<e},clearInlineStyles=function(n,e){var t=["BOLD","ITALIC","UNDERLINE"];return e&&(t=t.concat(Object.getOwnPropertyNames(e))),t.reduce(function(e,t){return draftJs.Modifier.removeInlineStyle(e,n.getSelection(),t)},n.getCurrentContent())},getEditorBounds=function(e){return{selectionRect:draftJs.getVisibleSelectionRect(window),editorRect:e.getBoundingClientRect()}},getLineNumber=function(e){var t=e.getSelection().getStartKey();return e.getCurrentContent().getBlockMap().keySeq().findIndex(function(e){return e===t})},STYLE_TYPES=[{label:"H2",name:"title",style:"header-two",icon:React__default.createElement(TitleIcon,null),type:"block"},{label:"Bold",name:"bold",style:"BOLD",icon:React__default.createElement(FormatBoldIcon,null),type:"inline"},{label:"Italic",name:"italic",style:"ITALIC",icon:React__default.createElement(FormatItalicIcon,null),type:"inline"},{label:"Underline",name:"underline",style:"UNDERLINE",icon:React__default.createElement(FormatUnderlinedIcon,null),type:"inline"},{label:"Strikethrough",name:"strikethrough",style:"STRIKETHROUGH",icon:React__default.createElement(StrikethroughIcon,null),type:"inline"},{label:"Highlight",name:"highlight",style:"HIGHLIGHT",icon:React__default.createElement(HighlightIcon,null),type:"inline"},{label:"Undo",name:"undo",style:"UNDO",icon:React__default.createElement(UndoIcon,null),type:"callback"},{label:"Redo",name:"redo",style:"REDO",icon:React__default.createElement(RedoIcon,null),type:"callback"},{label:"Link",name:"link",style:"LINK",icon:React__default.createElement(InsertLinkIcon,null),type:"callback",id:"link-control"},{label:"Media",name:"media",style:"IMAGE",icon:React__default.createElement(PhotoLibraryIcon,null),type:"callback",id:"media-control"},{label:"UL",name:"bulletList",style:"unordered-list-item",icon:React__default.createElement(FormatListBulletedIcon,null),type:"block"},{label:"OL",name:"numberList",style:"ordered-list-item",icon:React__default.createElement(FormatListNumberedIcon,null),type:"block"},{label:"Blockquote",name:"quote",style:"blockquote",icon:React__default.createElement(FormatQuoteIcon,null),type:"block"},{label:"Code Block",name:"code",style:"code-block",icon:React__default.createElement(CodeIcon,null),type:"block"},{label:"Clear",name:"clear",style:"clear",icon:React__default.createElement(FormatClearIcon,null),type:"callback"},{label:"Save",name:"save",style:"save",icon:React__default.createElement(SaveIcon,null),type:"callback"}],Toolbar=function(a){var e=React.useState(a.controls?[]:STYLE_TYPES),t=e[0],n=e[1],i=a.editorState,r=a.inlineMode?"-inline-toolbar":"-toolbar";return React.useEffect(function(){var r;a.controls&&(r=[],a.controls.filter(function(e,t){return a.controls.indexOf(e)>=t}).forEach(function(t){var e,n=STYLE_TYPES.find(function(e){return e.name===t});n?r.push(n):!a.customControls||(e=a.customControls.find(function(e){return e.name===t}))&&"atomic"!==e.type&&(e.icon||e.component)&&r.push({id:e.id||e.name+"Id",name:e.name,label:e.name,style:e.name.toUpperCase(),icon:e.icon,component:e.component,type:e.type,clickFnName:"onCustomClick"})}),n(r))},[a.controls,a.customControls]),React__default.createElement("div",{id:a.id+r,className:a.className},t.map(function(e){if(a.inlineMode&&"inline"!==e.type&&"link"!==e.name&&"clear"!==e.name)return null;var t,n,r=!1,o=a.onClick;return"inline"===e.type?r=i.getCurrentInlineStyle().has(e.style):"block"===e.type?(t=i.getSelection(),(n=i.getCurrentContent().getBlockForKey(t.getStartKey()))&&(r=e.style===n.getType())):"IMAGE"!==e.style&&"LINK"!==e.style||(r=e.style===getSelectionInfo(i).entityType),React__default.createElement(ToolbarButton,{id:e.id,editorId:a.id,key:"key-"+e.label,active:r,label:e.label,onClick:o,style:e.style,type:e.type,icon:e.icon,component:e.component,inlineMode:a.inlineMode,disabled:a.disabled,size:a.size})}))},Link=function(e){var t=e.contentState.getEntity(e.entityKey).getData(),n=t.url,r=t.className;return React__default.createElement(MuiLink,{href:n,className:r+" editor-anchor",target:"_blank"},e.children)},styles=function(e){var t=e.shadows;return styles$6.createStyles({root:{margin:"5px 0 1px",outline:"none"},editable:{cursor:"pointer","&:hover":{boxShadow:t[3]}},focused:{boxShadow:t[3]},centered:{textAlign:"center"},leftAligned:{textAlign:"left"},rightAligned:{textAlign:"right"}})},Media=function(e){var t,n,r,o=e.contentState.getEntity(e.block.getEntityAt(0)).getData(),a=o.url,i=o.width,l=(o.height,o.alignment),c=o.type,u=e.blockProps,s=u.onClick,d=u.readOnly,f=u.focusKey,m=localStorage.getItem("jwt");return React__default.createElement("div",{className:classNames(((t={})[e.classes.centered]="center"===l,t[e.classes.leftAligned]="left"===l,t[e.classes.rightAligned]="right"===l,t))},(r={src:m?a+"?jwt="+m:a,className:classNames(e.classes.root,((n={})[e.classes.editable]=!d,n[e.classes.focused]=!d&&f===e.block.getKey(),n)),width:i,height:"auto",onClick:function(){d||s(e.block)}},c&&"image"!==c?"video"===c?React__default.createElement("video",__assign({},r,{autoPlay:!1,controls:!0})):null:React__default.createElement("img",__assign({},r))))},Media$1=styles$6.withStyles(styles,{withTheme:!0})(Media),styles$1=function(e){var t=e.palette;return styles$6.createStyles({root:{fontStyle:"italic",color:t.grey[800],borderLeft:"4px solid "+t.grey.A100}})},Blockquote=function(e){return React__default.createElement("div",{className:e.classes.root},e.children)},Blockquote$1=styles$6.withStyles(styles$1,{withTheme:!0})(Blockquote),styles$2=function(e){var t=e.spacing,n=e.palette;return styles$6.createStyles({root:{backgroundColor:n.grey[200],padding:t(1,2,1,2)}})},CodeBlock=function(e){return React__default.createElement("div",{className:e.classes.root},e.children)},CodeBlock$1=styles$6.withStyles(styles$2,{withTheme:!0})(CodeBlock),styles$3=function(e){var t=e.spacing;return styles$6.createStyles({linkPopover:{padding:t(2,2,2,2),maxWidth:250},linkTextField:{width:"100%"}})},UrlPopover=function(e){var t=React.useState(e.data||{url:void 0,width:void 0,height:void 0,alignment:void 0,type:void 0}),i=t[0],l=t[1],n=e.classes;return React__default.createElement(Popover,{open:void 0!==e.anchor,anchorEl:e.anchor,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"}},React__default.createElement("div",{className:n.linkPopover},React__default.createElement(Grid,{container:!0,spacing:1},React__default.createElement(Grid,{container:!0,item:!0,xs:!0,spacing:1},React__default.createElement(Grid,{item:!0,xs:12},React__default.createElement(TextField,{className:n.linkTextField,onChange:function(e){return l(__assign(__assign({},i),{url:e.target.value}))},label:"URL",defaultValue:e.data&&e.data.url,autoFocus:!0,InputLabelProps:{shrink:!0}})),e.isMedia?React__default.createElement(React__default.Fragment,null,React__default.createElement(Grid,{item:!0,xs:12},React__default.createElement(ButtonGroup,{fullWidth:!0},React__default.createElement(Button,{color:i.type&&"image"!==i.type?"default":"primary",size:"small",onClick:function(){return l(__assign(__assign({},i),{type:"image"}))}},React__default.createElement(InsertPhotoIcon,null)),React__default.createElement(Button,{color:"video"===i.type?"primary":"default",size:"small",onClick:function(){return l(__assign(__assign({},i),{type:"video"}))}},React__default.createElement(MovieIcon,null)))),React__default.createElement(Grid,{item:!0,xs:12},React__default.createElement(TextField,{onChange:function(e){return t=e.target.value,n="width",void(""!==t?(a=parseInt(t,10),isNaN(a)||l(__assign(__assign({},i),((o={})[n]=a,o)))):l(__assign(__assign({},i),((r={})[n]=void 0,r))));var t,n,r,o,a},value:i.width||"",label:"Width",InputLabelProps:{shrink:!0}})),React__default.createElement(Grid,{item:!0,xs:12},React__default.createElement(ButtonGroup,{fullWidth:!0},React__default.createElement(Button,{color:"left"===i.alignment?"primary":"default",size:"small",onClick:function(){return l(__assign(__assign({},i),{alignment:"left"}))}},React__default.createElement(FormatAlignLeft,null)),React__default.createElement(Button,{color:"center"===i.alignment?"primary":"default",size:"small",onClick:function(){return l(__assign(__assign({},i),{alignment:"center"}))}},React__default.createElement(FormatAlignCenter,null)),React__default.createElement(Button,{color:"right"===i.alignment?"primary":"default",size:"small",onClick:function(){return l(__assign(__assign({},i),{alignment:"right"}))}},React__default.createElement(FormatAlignRight,null))))):null),React__default.createElement(Grid,{container:!0,item:!0,xs:12,direction:"row",justify:"flex-end"},e.data&&e.data.url?React__default.createElement(Button,{onClick:function(){return e.onConfirm(e.isMedia,"")}},React__default.createElement(DeleteIcon,null)):null,React__default.createElement(Button,{onClick:function(){return e.onConfirm(e.isMedia,i.url,i.width,i.height,i.alignment,i.type)}},React__default.createElement(CheckIcon,null))))))},UrlPopover$1=styles$6.withStyles(styles$3,{withTheme:!0})(UrlPopover),styles$4=function(){return styles$6.createStyles({container:{minWidth:"200px",position:"absolute",zIndex:10},item:{cursor:"pointer"}})},Autocomplete=function(n){if(!n.items.length)return null;var r=n.classes;return React__default.createElement(Paper,{className:r.container,style:{top:n.top,left:n.left}},React__default.createElement(List,{dense:!0},n.items.map(function(e,t){return React__default.createElement(ListItem,{key:t,className:r.item,selected:t===n.selectedIndex,onClick:function(){return n.onClick(t)}},e.content)})))},Autocomplete$1=styles$6.withStyles(styles$4,{withTheme:!0})(Autocomplete),styles$5=function(e){var t=e.spacing,n=e.typography,r=e.palette;return styles$6.createStyles({root:{},container:{margin:t(1,0,0,0),position:"relative",fontFamily:n.body1.fontFamily,fontSize:n.body1.fontSize,"& figure":{margin:0}},inheritFontSize:{fontSize:"inherit"},editor:{},editorContainer:{margin:t(1,0,0,0),cursor:"text",width:"100%",padding:t(0,0,1,0)},editorReadOnly:{borderBottom:"none"},error:{borderBottom:"2px solid red"},hidePlaceholder:{display:"none"},placeHolder:{color:r.grey[600],position:"absolute"},linkPopover:{padding:t(2,2,2,2)},linkTextField:{width:"100%"},anchorLink:{},toolbar:{},inlineToolbar:{maxWidth:"180px",position:"absolute",padding:"5px",zIndex:10}})},blockRenderMap=Immutable.Map({blockquote:{element:"blockquote",wrapper:React__default.createElement(Blockquote$1,null)},"code-block":{element:"pre",wrapper:React__default.createElement(CodeBlock$1,null)}}),styleRenderMap={STRIKETHROUGH:{textDecoration:"line-through"},HIGHLIGHT:{backgroundColor:"yellow"}},hasCommandModifier=draftJs.KeyBindingUtil.hasCommandModifier,autocompleteMinSearchCharCount=2,lineHeight=26,defaultInlineToolbarControls=["bold","italic","underline","clear"],findLinkEntities=function(e,t,n){e.findEntityRanges(function(e){var t=e.getEntity();return null!==t&&"LINK"===n.getEntity(t).getType()},t)},findDecoWithRegex=function(e,t,n){for(var r,o,a=t.getText();null!==(r=e.exec(a));)n(o=r.index,o+r[0].length)},useEditorState=function(e){var t=[{strategy:findLinkEntities,component:Link}];e.decorators&&e.decorators.forEach(function(n){return t.push({strategy:function(e,t){findDecoWithRegex(n.regex,e,t)},component:n.component})});var n=new draftJs.CompositeDecorator(t),r=e.defaultValue||e.value;return r?draftJs.EditorState.createWithContent(draftJs.convertFromRaw(JSON.parse(r)),n):draftJs.EditorState.createEmpty(n)},MUIRichTextEditor=function(E,e){var t,n,r,u=E.classes,o=E.controls,a=E.customControls,i=React.useState({}),m=i[0],l=i[1],c=React.useState(!1),s=c[0],d=c[1],f=React.useState(""),C=f[0],g=f[1],p=React.useState(0),b=p[0],y=p[1],_=React.useState(function(){return useEditorState(E)}),k=_[0],h=_[1],v=React.useState(""),R=v[0],S=v[1],I=React.useState({style:void 0,block:void 0}),T=I[0],B=I[1],L=React.useRef(null),M=E.id||"mui-rte",D=React.useRef(void 0),x=React.useRef(k),F=React.useRef(void 0),A=React.useRef(void 0),N=React.useRef(void 0),w=E.autocomplete&&E.autocomplete.suggestLimit||5,P=React.useRef({start:0,end:0});React.useImperativeHandle(e,function(){return{focus:function(){W()},save:function(){j()},insertAtomicBlock:function(e,t){Y(e,t)},insertAtomicBlockSync:function(e,t){Y(e,t)},insertAtomicBlockAsync:function(e,t,n){V(e,t,n)}}}),React.useEffect(function(){var e=useEditorState(E),t={},n=JSON.parse(JSON.stringify(styleRenderMap));E.customControls&&E.customControls.forEach(function(e){"inline"===e.type&&e.inlineStyle?n[e.name.toUpperCase()]=e.inlineStyle:"block"===e.type&&e.blockWrapper&&(t[e.name.toUpperCase()]={element:"div",wrapper:e.blockWrapper})}),B({style:n,block:draftJs.DefaultDraftBlockRenderMap.merge(blockRenderMap,Immutable.Map(t))});var r=draftJs.EditorState.forceSelection(e,e.getSelection());return!0===E.readOnly?h(r):h(draftJs.EditorState.moveFocusToEnd(r)),X(!0),function(){X()}},[E.value,E.defaultValue]),React.useEffect(function(){E.onChange&&E.onChange(k),x.current=k},[k]),React.useEffect(function(){D.current=m.toolbarPosition},[m.toolbarPosition]),React.useEffect(function(){C.length<autocompleteMinSearchCharCount&&y(0)},[C]);function q(){g(""),N.current=void 0,A.current=void 0}function J(e){var t=e.target.nodeName;q(),"IMG"!==t&&"VIDEO"!==t&&setTimeout(function(){var e=x.current.getSelection();if(e.isCollapsed()||void 0!==D&&P.current.start===e.getStartOffset()&&P.current.end===e.getEndOffset()){var t=getSelectionInfo(x.current);return"IMAGE"===t.entityType?void ie(t.block):void l(__assign(__assign({},m),{toolbarPosition:void 0}))}P.current={start:e.getStartOffset(),end:e.getEndOffset()};var n,r=L.current.editor,o=getEditorBounds(r),a=o.editorRect,i=o.selectionRect;i&&(n={top:r.offsetTop-48+(i.top-a.top),left:r.offsetLeft+(i.left-a.left)},l(__assign(__assign({},m),{toolbarPosition:n})))},1)}function U(e){var t,n,r,o,a,i,l,c,u,s,d,f,m,g,p,y,_,h=e||b,v=z();v.length>h&&(t=v[h],r=(n=A.current).getFocusOffset()+C.length+1,o=n.merge({focusOffset:r}),F.current.atomicBlockName?(a=F.current.atomicBlockName,f=a,m=o,g=t.value,atomicBlockExists(f,E.customControls)&&(p=draftJs.Modifier.removeRange(x.current.getCurrentContent(),m,"forward"),y=draftJs.EditorState.push(x.current,p,"remove-range"),_=le(y,f.toUpperCase(),{value:g},{selection:y.getCurrentContent().getSelectionAfter()}),H(_))):(i=o,l=t.value,u=k.getCurrentContent().createEntity("AC_ITEM","IMMUTABLE").getLastCreatedEntityKey(),s=draftJs.Modifier.replaceText(x.current.getCurrentContent(),i,l,x.current.getCurrentInlineStyle(),u),d=draftJs.EditorState.push(x.current,s,"insert-characters"),!1===F.current.insertSpaceAfter?H(d):(c=draftJs.Modifier.insertText(d.getCurrentContent(),d.getSelection()," ",d.getCurrentInlineStyle()),H(draftJs.EditorState.push(d,c,"insert-characters"))))),G()}function O(e,t,n){var r=getSelectionInfo(e),o=e.getCurrentContent(),a=r.linkKey,i=void 0;a&&(i=o.getEntity(a).getData()),l({urlData:i,urlKey:a,toolbarPosition:n?m.toolbarPosition:void 0,anchorUrlPopover:n?document.getElementById(M+"-"+t+"-control-button-toolbar"):document.getElementById(M+"-"+t+"-control-button"),urlIsMedia:"media"===t||void 0})}function K(e,t){O(t||k,"media",e)}function $(e,t,n,r){if("inline"===t)return ae(e);if("block"===t)return oe(e);switch(e){case"UNDO":h(draftJs.EditorState.undo(k));break;case"REDO":h(draftJs.EditorState.redo(k));break;case"LINK":l=r,k.getSelection().isCollapsed()||O(k,"link",l);break;case"IMAGE":K(r);break;case"clear":o=clearInlineStyles(k,T.style),a=getSelectionInfo(k),i=draftJs.EditorState.push(k,o,"change-inline-style"),h(draftJs.RichUtils.toggleBlockType(i,a.blockType));break;case"save":j();break;default:!function(e,t){if(E.customControls)for(var n=0,r=E.customControls;n<r.length;n++){var o,a=r[n];if(a.name.toUpperCase()===e){a.onClick&&(setTimeout(function(){return L.current.blur()},0),(o=a.onClick(k,a.name,document.getElementById(t)))?(o.getSelection().isCollapsed()?h:te)(o):k.getSelection().isCollapsed()||re());break}}}(e,n)}var o,a,i,l}var G=function(){q(),y(0),re()},z=function(){return C.length<autocompleteMinSearchCharCount?[]:F.current.items.filter(function(e){return 0<e.keys.filter(function(e){return e.includes(C)}).length}).splice(0,w)},H=function(e){h(e)},W=function(){d(!0),setTimeout(function(){return L.current.focus()},0),E.onFocus&&E.onFocus()},j=function(){E.onSave&&E.onSave(JSON.stringify(draftJs.convertToRaw(k.getCurrentContent())))},Y=function(e,t){var n,r=atomicBlockExists(e,E.customControls);r&&(n=le(k,r.name.toUpperCase(),t,{selection:k.getCurrentContent().getSelectionAfter()}),te(n))},V=function(n,e,t){var r=Q(n,t),o=r.getFocusOffset()+1,a=r.merge({focusOffset:o});e.then(function(e){var t=le(x.current,n,e.data,{selection:a});H(t)}).catch(function(e){var t;e||(t=draftJs.Modifier.removeRange(x.current.getCurrentContent(),a,"forward"),H(draftJs.EditorState.push(x.current,t,"remove-range")))})},Q=function(e,t){var n=t||e+"...",r=x.current.getCurrentContent(),o=r.createEntity("ASYNC_ATOMICBLOCK","IMMUTABLE").getLastCreatedEntityKey(),a=draftJs.Modifier.insertText(x.current.getCurrentContent(),r.getSelectionAfter(),n,void 0,o),i=r.getSelectionAfter(),l=draftJs.EditorState.push(x.current,a,"insert-characters");return H(l),i},X=function(e){void 0===e&&(e=!1);var t=L.current.editor;t&&(t.removeEventListener("mouseup",J),e&&t.addEventListener("mouseup",J))},Z=function(e){var t,n=m.urlKey;if(!e)return n&&(t=k.getSelection(),h(draftJs.RichUtils.toggleLink(k,t,null))),void ne();var r,o,a,i=k.getCurrentContent(),l=k,c={url:e,className:u.anchorLink};l=n?(i.replaceEntityData(n,c),draftJs.EditorState.push(k,i,"apply-entity")):(o=(r=i.createEntity("LINK","MUTABLE",c)).getLastCreatedEntityKey(),a=draftJs.EditorState.set(k,{currentContent:r}),draftJs.RichUtils.toggleLink(a,a.getSelection(),o)),te(l)},ee=function(e,t,n,r,o){var a,i,l,c,u=m.urlKey;if(!e)return u&&(a=k.getSelection().getStartKey(),i=k.getCurrentContent().getBlockForKey(a),l=removeBlockFromMap(k,i),c=draftJs.EditorState.push(k,l,"remove-range"),h(c)),void ne();var s,d=k.getCurrentContent(),f={url:e,width:t,height:n,alignment:r,type:o};s=u?(d.replaceEntityData(u,f),draftJs.EditorState.push(k,d,"apply-entity")):le(k,"IMAGE",f),te(draftJs.EditorState.forceSelection(s,s.getCurrentContent().getSelectionAfter())),S("")},te=function(e){h(e),ne()},ne=function(){re(),l(__assign(__assign({},m),{anchorUrlPopover:void 0,urlKey:void 0,urlIsMedia:void 0,urlData:void 0}))},re=function(){setTimeout(function(){return L.current.blur()},0),setTimeout(function(){return L.current.focus()},1)},oe=function(e){h(draftJs.RichUtils.toggleBlockType(k,e))},ae=function(e){h(draftJs.RichUtils.toggleInlineStyle(k,e))},ie=function(e){var t=draftJs.SelectionState.createEmpty(e.getKey()),n=draftJs.EditorState.forceSelection(x.current,t);x.current=n,S(e.getKey()),h(n),K(!1,n)},le=function(e,t,n,r){var o=e.getCurrentContent().createEntity(t,"IMMUTABLE",n),a=o.getLastCreatedEntityKey(),i=draftJs.EditorState.set(e,__assign({currentContent:o},r));return draftJs.AtomicBlockUtils.insertAtomicBlock(i,a," ")},ce=void 0===E.toolbar||E.toolbar,ue=E.inlineToolbarControls||defaultInlineToolbarControls,se=void 0===E.readOnly||!E.readOnly,de="",fe=null;return s||k.getCurrentContent().hasText()||(fe=React__default.createElement("div",{className:classNames(u.editorContainer,u.placeHolder,((t={})[u.error]=E.error,t)),onClick:W},E.label||""),de=u.hidePlaceholder),React__default.createElement("div",{id:M+"-root",className:u.root},React__default.createElement("div",{id:M+"-container",className:classNames(u.container,((n={})[u.inheritFontSize]=E.inheritFontSize,n))},E.autocomplete&&N.current?React__default.createElement(Autocomplete$1,{items:z(),top:N.current.top,left:N.current.left,onClick:U,selectedIndex:b}):null,E.inlineToolbar&&se&&m.toolbarPosition?React__default.createElement(Paper,{className:u.inlineToolbar,style:{top:m.toolbarPosition.top,left:m.toolbarPosition.left}},React__default.createElement(Toolbar,{id:M,editorState:k,onClick:$,controls:ue,customControls:a,inlineMode:!0})):null,ce?React__default.createElement(Toolbar,{id:M,editorState:k,onClick:$,controls:o,customControls:a,className:u.toolbar,disabled:!se,size:E.toolbarButtonSize}):null,fe,React__default.createElement("div",{id:M+"-editor",className:u.editor},React__default.createElement("div",{id:M+"-editor-container",className:classNames(de,u.editorContainer,((r={})[u.editorReadOnly]=!se,r[u.error]=E.error,r)),onClick:W,onBlur:function(){d(!1),E.onBlur&&E.onBlur(),m.anchorUrlPopover||l(__assign(__assign({},m),{toolbarPosition:void 0}))}},React__default.createElement(draftJs.Editor,__assign({customStyleMap:T.style,blockRenderMap:T.block,blockRendererFn:function(e){if("atomic"===e.getType()){var t=k.getCurrentContent(),n=e.getEntityAt(0);if(n){var r=t.getEntity(n).getType();if("IMAGE"===r)return{component:Media$1,editable:!1,props:{onClick:ie,readOnly:E.readOnly,focusKey:R}};var o=atomicBlockExists(r.toLowerCase(),E.customControls);return o?{component:o.atomicComponent,editable:!1,props:t.getEntity(e.getEntityAt(0)).getData()}:null}}return null},editorState:k,onChange:H,readOnly:E.readOnly,handleKeyCommand:function(t,e){var n=draftJs.RichUtils.handleKeyCommand(e,t);if(n)return H(n),"handled";if(t.includes("mui-autocomplete"))return"mui-autocomplete-insert"===t&&U(),"mui-autocomplete-end"===t&&G(),"handled";if(E.keyCommands){var r=E.keyCommands.find(function(e){return e.name===t});if(r){var o=r.callback(e);return H(o),"handled"}}return"not-handled"},handleBeforeInput:function(e){var t,n,r,o,a,i,l,c,u;" "===e&&C.length?q():A.current?g(C+e):(t=function(t){if(E.autocomplete){var e=E.autocomplete.strategies.filter(function(e){return e.triggerChar===t});return e.length?e[0]:void 0}}(e))&&(F.current=t,n=L.current.editor,r=getEditorBounds(n),o=r.editorRect,a=r.selectionRect,i=getLineNumber(k),l=a?a.top:o.top+lineHeight*i,c=a?a.left:o.left,u={top:n.offsetTop+(l-o.top)+lineHeight,left:n.offsetLeft+(c-o.left)},A.current||(A.current=x.current.getSelection()),N.current=u);var s=k.getCurrentContent().getPlainText("").length;return isGreaterThan(s+1,E.maxLength)?"handled":"not-handled"},handlePastedText:function(e,t,n){var r=n.getCurrentContent().getPlainText("").length;return isGreaterThan(r+e.length,E.maxLength)?"handled":"not-handled"},keyBindingFn:function(t){if(hasCommandModifier(t)&&E.keyCommands){var e=E.keyCommands.find(function(e){return e.key===t.keyCode});if(e)return e.name}if(C){var n=function(e){var t=z().length,n=t<w?t:w;switch(e.key){case"ArrowDown":return y(0===b&&1===t||b+1===n?0:b+1<n?b+1:b),"mui-autocomplete-navigate";case"ArrowUp":return y(b?b-1:n-1),"mui-autocomplete-navigate";case"Enter":return"mui-autocomplete-insert";case"Escape":return"mui-autocomplete-end";default:return null}}(t);if(n)return n}var r,o,a=draftJs.getDefaultKeyBinding(t);return r=a,o=x.current.getCurrentContent().getLastBlock().getText(),"backspace"===r&&F.current&&o.substr(o.length-1)===F.current.triggerChar?q():N.current&&"backspace"===r&&C.length?g(C.substr(0,C.length-1)):N.current||"backspace"!==r&&"split-block"!==r||q(),a},ref:L},E.draftEditorProps)))),m.anchorUrlPopover?React__default.createElement(UrlPopover$1,{data:m.urlData,anchor:m.anchorUrlPopover,onConfirm:function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];e?ee.apply(void 0,t):Z.apply(void 0,t)},isMedia:m.urlIsMedia}):null))},MUIRichTextEditor$1=styles$6.withStyles(styles$5,{withTheme:!0,name:"MuiRichTextEditor"})(React.forwardRef(MUIRichTextEditor));exports.default=MUIRichTextEditor$1;